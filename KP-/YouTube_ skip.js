var WL_YTASP = true;

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
      if (document.contains(document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0])) {
          document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();
      }
      if (document.contains(document.getElementsByClassName('ytp-ad-overlay-close-button')[0])) {
          document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click();
      }
      document.getElementsByTagName("video")[0].playbackRate = pbs.value;
  });
});
const config = {childList:true,subtree:true};
observer.observe(document.body, config);
