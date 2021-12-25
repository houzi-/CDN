const WEBSTORE_LINK = `https://chrome.google.com/webstore/detail/653347`;

class Blocker {
  constructor(enabled) {
    this.filters = [
      new CosmeticFilter(enabled),
      new Branding(enabled),
      new Dialog(enabled),
    ];
    this.enabled = enabled;

    this.pressNextButtonsWhenMounted();
    this.skipVideosWhenShowing();

    this._handleMessage = this._handleMessage.bind(this);
    chrome.runtime.onMessage.addListener(this._handleMessage);
  }

  _handleMessage({ action, payload }) {
    if (action === "CHANGE_SETTINGS") {
      if (payload.enabled) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }

  enable() {
    this.filters.forEach((filter) => {
      filter.enable();
    });
    this.enabled = true;
  }

  disable() {
    this.filters.forEach((filter) => {
      filter.disable();
    });
    this.enabled = false;
  }

  /**
   * Some video ads render the skip button first hidden.
   * If we find it, let's press skip!
   */
  pressNextButtonsWhenMounted() {
    if (location.host.includes(".youtube.com")) {
      onSkipBtnMounted(".ytp-ad-skip-button.ytp-button", (btn) => {
        if (this.enabled) {
          console.log("Clicked skip-ad button");
          btn.click();
        }
      });
    }
  }

  /**
   * Some new video ads don't render a skip button, 
   * so let's skip through the ad
   */
  skipVideosWhenShowing() {
    if (location.host.includes(".youtube.com")) {
      onSkipBtnMounted(".html5-video-player.ad-showing video", (video) => {
        if (this.enabled) {
          console.log("skipped video ads");
          video.currentTime = 10000;
        }
      });
    }
  }

  toggle() {
    if (this.enabled) {
      this.disable();
    } else {
      this.enable();
    }
  }
}

class Dialog {
  constructor(enabled = true) {
    this.enabled = enabled;
    this.handleClose = this.handleClose.bind(this);
    if (this.enabled) {
      chrome.storage.local.get(["ratingDialogShown"], (result) => {
        if (!result.ratingDialogShown) {
          try {
            this.create();
          } catch (e) {
            console.error(e);
          }
        }
      });

      waitFor(
        "ytd-app",
        (target) => {
          new MutationObserver(([mutation]) => {
            if (this.dialog && mutation.target) {
              const isWatchPage = mutation.target.hasAttribute("is-watch-page");
              this.dialog.style.display = isWatchPage ? "none" : "block";
            }
          }).observe(target, {
            attributes: true,
            attributeFilter: ["is-watch-page"],
          });
        },
        100
      );
    }
  }

  handleClose(event) {
    document.body.removeChild(this.dialog);
    chrome.storage.local.set({ ratingDialogShown: true });
  }

  create() {
    // Create dialog
    const dialog = document.createElement("DIV");
    dialog.classList.add("ab4yt-dialog");

    // Create closeIcon
    const closeIcon = document.createElement("A");
    closeIcon.classList.add("ab4yt-close-icon");
    closeIcon.appendChild(document.createTextNode(" "));
    closeIcon.addEventListener("click", this.handleClose);
    dialog.appendChild(closeIcon);

    // Create header
    const header = document.createElement("DIV");
    header.appendChild(
      document.createTextNode(chrome.i18n.getMessage("extension_name"))
    );
    header.classList.add("ab4yt-dialog-header");
    dialog.appendChild(header);

    // Create ShareLink
    const webstoreLink = document.createElement("A");
    webstoreLink.classList.add("ab4yt-webstore-link");
    webstoreLink.setAttribute("href", `${WEBSTORE_LINK}/reviews`);
    webstoreLink.setAttribute("target", "_blank");
    webstoreLink.appendChild(
      document.createTextNode(chrome.i18n.getMessage("rate_this_extension"))
    );
    webstoreLink.addEventListener("click", this.handleClose);
    dialog.appendChild(webstoreLink);

    const stylesheet = document.createElement("style");
    stylesheet.type = "text/css";
    stylesheet.appendChild(
      document.createTextNode(`
      .ab4yt-dialog {
        display: none;
        background-color: #000000c7;
        position: fixed;
        right: 10px;
        z-index: 99999999999;
        top: 68px;
        padding: 0;
        margin: 0;
        border-radius: 4px;
        border: 1px solid white;
        text-align: center;
      }

      .ab4yt-close-icon {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 10px;
        height: 10px;
        opacity: 0.8;
      }
      .ab4yt-close-icon:hover {
        opacity: 1;
      }
      .ab4yt-close-icon:before, .ab4yt-close-icon:after {
        position: absolute;
        left: 5px;
        content: ' ';
        height: 10px;
        width: 2px;
        background-color: white;
      }
      .ab4yt-close-icon:before {
        transform: rotate(45deg);
      }
      .ab4yt-close-icon:after {
        transform: rotate(-45deg);
      }

      .ab4yt-dialog-header {
        font-size: 16px;
        padding: 16px 24px;
        color: white;
      }

      .ab4yt-webstore-link {
        display: block;
        font-size: 13px;
        color: white;
        padding: 16px 24px;
        text-decoration: none;
        opacity: 0.8;
        border-top: 1px solid white;
        text-transform: uppercase;
      }

      .ab4yt-webstore-link:hover {
        opacity: 1;
      }
    `)
    );
    dialog.appendChild(stylesheet);
    dialog.style.display = this.enabled ? "block" : "none";

    this.dialog = dialog;

    domReady(() => {
      document.body.appendChild(this.dialog);
    });

    return dialog;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }
}

/**
 * Add branding below the video
 */
class Branding {
  constructor(enabled = false) {
    this.enabled = enabled;

    this.BRANDING_TEXT = `${chrome.i18n.getMessage("branding")} `;
    this.FACEBOOK_SHARE_URL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      WEBSTORE_LINK
    )}`;

    waitFor(
      "#watch-header, ytd-video-primary-info-renderer",
      (target) => {
        this.branding = this._createBranding();
        target.style.position = "relative";
        target.insertBefore(this.branding, target.firstChild);
      },
      100
    );
  }

  _createBranding() {
    // ShareLink
    const shareLink = document.createElement("A");
    shareLink.setAttribute("href", this.FACEBOOK_SHARE_URL);
    shareLink.setAttribute("id", "ab4yt-fb-share");
    shareLink.setAttribute("target", "_blank");
    shareLink.appendChild(document.createTextNode("Share"));
    shareLink.onclick = function () {
      window.open(
        this.href,
        "Share",
        "left=20," +
          "top=20," +
          "width=550," +
          "height=500," +
          "toolbar=1," +
          "resizable=0"
      );
      return false;
    };

    // Create branding
    const branding = document.createElement("a");
    branding.setAttribute("id", "ab4yt-brand");
    // branding.setAttribute('style', 'opacity: 0; position: absolute;')
    branding.setAttribute("target", "_blank");
    branding.setAttribute("href", `${WEBSTORE_LINK}/reviews`);
    branding.appendChild(document.createTextNode(this.BRANDING_TEXT));
    branding.appendChild(shareLink);

    const stylesheet = document.createElement("style");
    stylesheet.type = "text/css";
    stylesheet.appendChild(
      document.createTextNode(`
      /* Branding Styles */
      #ab4yt-brand {
        display: block;
        height: 20px;
        position: absolute;
        top: 2px;
        right: 3px;
        z-index: 9;
        color: #666;
        font-size: 11px;
        font-weight: bold;
        line-height: 17px;
        text-decoration: none;
        font-weight: normal;
        -webkit-animation: fadeInOut 14s;
                animation: fadeInOut 14s;
      }

      #ab4yt-brand>#ab4yt-fb-share {
        background-color: #4e69a2;
        color: white;
        padding: 1px 3px;
        border-radius: 2px;
      }

      @-webkit-keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        95% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
      }

      @keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        95% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
      }

      .abyt-uix-button {
        display: inline-block;
        height: 28px;
        border: solid 1px rgba(0, 0, 0, 0);
        padding: 0 10px;
        outline: 0;
        font-weight: 500;
        font-size: 11px;
        text-decoration: none;
        white-space: nowrap;
        word-wrap: normal;
        line-height: normal;
        vertical-align: middle;
        cursor: pointer;
        border-radius: 2px;
        box-shadow: 0 1px 0 rgba(0,0,0,0.05);
      }

      .abyt-uix-button{
        border-color: #d3d3d3;
        background: #f8f8f8;
        color: #333;
      }
    `)
    );
    branding.appendChild(stylesheet);
    branding.style.display = this.enabled ? "block" : "none";
    return branding;
  }

  enable() {
    this.branding.style.display = "block";
    this.enabled = true;
  }

  disable() {
    this.branding.style.display = "none";
    this.enabled = false;
  }
}

/**
 * Block ad container (by CSS)
 */
class CosmeticFilter {
  constructor(enabled = false) {
    this._createStyleSheet();
    this.enabled = enabled;
  }

  _createStyleSheet() {
    // Create the <style> tag
    const style = document.createElement("style");

    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")

    // WebKit hack :(
    style.appendChild(document.createTextNode(""));

    // Append stylesheet as early as possible
    headReady(() => {
      document.head.appendChild(style);
      this.sheet = style.sheet;
      if (this.enabled) {
        this.enable();
      }
    });
  }

  enable() {
    if (this.stylesActive) {
      return;
    }
    this.ruleId = this.sheet.insertRule(
      `
      ytd-promoted-video-renderer,
      ytd-display-ad-renderer,
      ytd-compact-promoted-video-renderer,
      ytd-promoted-sparkles-web-renderer,
      .ytd-carousel-ad-renderer,
      .ytd-promoted-sparkles-text-search-renderer,
      .ad-container,
      .ad-div,
      .masthead-ad-control,
      .video-ads,
      .ytp-ad-progress-list,
      #ad_creative_3,
      #footer-ads,
      #masthead-ad,
      #player-ads,
      .ytd-mealbar-promo-renderer,
      .sparkles-light-cta
      #watch-channel-brand-div,
      #watch7-sidebar-ads,
      .html5-video-player.ad-showing video {
        display: none !important;
      }
    `,
      0
    );
    this.stylesActive = true;
  }

  disable() {
    if (this.stylesActive) {
      this.sheet.deleteRule(this.ruleId);
      this.stylesActive = false;
    }
  }
}

function waitFor(selector, callback, timeout) {
  const element = document.querySelector(selector);
  if (element) {
    callback(element);
  } else {
    if (timeout) {
      return window.setTimeout(() => {
        return window.requestAnimationFrame(() => {
          waitFor(selector, callback);
        });
      }, timeout);
    }
    return window.requestAnimationFrame(() => {
      waitFor(selector, callback);
    });
  }
}

function headReady(callback) {
  if (document.readyState === "complete") {
    callback();
    return;
  }
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (
        m.addedNodes &&
        m.addedNodes[0] &&
        m.addedNodes[0].nodeName === "BODY"
      ) {
        callback();
        observer.disconnect();
      }
    });
  });
  observer.observe(document.documentElement, { childList: true });
}

function domReady(callback) {
  if (document.readyState === "complete") {
    callback();
  } else {
    window.addEventListener("load", callback, {
      once: true,
    });
  }
}

function onSkipBtnMounted(selector, callback) {
  function check(mutation) {
    const $found = document.querySelector(selector);
    if ($found) {
      return callback($found);
    }
  }

  check();

  const player = document.getElementsByTagName("ytd-player")[0];
  if (!player) {
    return setTimeout(() => {
      onSkipBtnMounted(selector, callback);
    }, 300);
  }

  console.log("mount observer");
  if (document.querySelector('ytd-display-ad-renderer')) {
    document.querySelector('ytd-display-ad-renderer').closest('ytd-rich-item-renderer').style.display = 'none'
  }

  const observer = new MutationObserver(check);
  observer.observe(player, {
    childList: true,
    subtree: true,
  });
}

// Notify background so it can inject cosmetic filter
chrome.runtime.sendMessage(
  {
    action: "PAGE_READY",
  },
  ({ yt, enabled }) => {
    if (!yt) {
      return;
    }

    if (!/youtube\.com/.test(window.location.origin)) {
      return;
    }

    if (!window.blocker) {
      window.blocker = new Blocker(enabled);
    } else if (enabled) {
      window.blocker.enable();
    } else {
      window.blocker.disable();
    }
  }
);
