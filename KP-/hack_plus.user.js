// ==UserScript==
// @name         朝朝暮暮plus
// @version      1.27.1027
// @author       汝莫舞
// @description  一些浏览器增强功能及辅助移除广告【Ctrl+↑脚本设置】
// @homepageURL  https://github.com/emCupid/adg_cn
// @match        *://*/*
// @namespace    emCupid
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @run-at       document-start
// @exclude      *://*.taobao.com*
// @exclude      *://*.tmall.com*
// @exclude      *://*.1688.com*
// @exclude      *://*.jd.com*
// @exclude      *://*.suning.com*
// @exclude      *://*.dangdang.com*
// @exclude      *://*.mogu.com*
// @exclude      *://graph.baidu.com/*similar*
// ==/UserScript==

//功能模块定义
(function (){
    var key = ("mh_" + Math.random());
    var keyR = new RegExp(("(^|;)\\s*" + key + "=12345"));
    var expiredTime = new Date(0);
    var domain = document.domain;
    var domainList = domain.split('.');
    var urlItems = [];
    urlItems.unshift(domainList.pop());
    while (domainList.length) {
        urlItems.unshift(domainList.pop());
        var mainHost = urlItems.join('.');
        var cookie = (key + "=" + 12345 + ";domain=." + mainHost);
        document.cookie = cookie;
        if (keyR.test(document.cookie)) {
            document.cookie = (cookie + ";expires=" + expiredTime);
            return window['_getMainHost'] = mainHost;
        }
    }
})();

var localStorage = {
    getItem : function (name, defaultValue) {
        return GM_getValue(name, defaultValue)
    },
    setItem : function (name, value) {
        return GM_setValue(name, value)
    },
    removeItem : function (name) {
        return GM_deleteValue(name)
    },
    listItem : function () {
        return GM_listValues()
    }
};
//debug GM_Value
unsafeWindow.__$get = GM_getValue;
unsafeWindow.__$set = GM_setValue;
unsafeWindow.__$delete = GM_deleteValue;
unsafeWindow.__$list = GM_listValues;

//Pro Config
var hackplus_proConfigJSON = localStorage.getItem("hackplus_proConfig") || '{"wBanner":{"minWidth":580,"maxWidth":1800,"minHeight":40,"maxHeight":150},"hBanner":{"minWidth":40,"maxWidth":150,"minHeight":300,"maxHeight":650},"iFrameRule":""}',
    hackplus_proConfig = JSON.parse(hackplus_proConfigJSON);
unsafeWindow.__$proConfig = {
    set : function(type, item, value) {
        if (type == "wBanner") {
            value = parseInt(value);
            switch(item) {
                case "minWidth" :
                    value < hackplus_proConfig["wBanner"]["maxWidth"] ? value = value : value = hackplus_proConfig["wBanner"]["minWidth"];
                    hackplus_proConfig["wBanner"]["minWidth"] = value
                    break;
                case "maxWidth" :
                    value > hackplus_proConfig["wBanner"]["minWidth"] ? value = value : value = hackplus_proConfig["wBanner"]["maxWidth"];
                    hackplus_proConfig["wBanner"]["maxWidth"] = value
                    break;
                case "minHeight" :
                    value < hackplus_proConfig["wBanner"]["maxHeight"] ? value = value : value = hackplus_proConfig["wBanner"]["minHeight"];
                    hackplus_proConfig["wBanner"]["minHeight"] = value
                    break;
                case "maxHeight" :
                    value > hackplus_proConfig["wBanner"]["minHeight"] ? value = value : value = hackplus_proConfig["wBanner"]["maxHeight"];
                    hackplus_proConfig["wBanner"]["maxHeight"] = value
                    break;
            }
        } else if (type == "hBanner") {
            value = parseInt(value);
            switch(item) {
                case "minWidth" :
                    value < hackplus_proConfig["hBanner"]["maxWidth"] ? value = value : value = hackplus_proConfig["hBanner"]["minWidth"];
                    hackplus_proConfig["hBanner"]["minWidth"] = value
                    break;
                case "maxWidth" :
                    value > hackplus_proConfig["hBanner"]["minWidth"] ? value = value : value = hackplus_proConfig["hBanner"]["maxWidth"];
                    hackplus_proConfig["hBanner"]["maxWidth"] = value
                    break;
                case "minHeight" :
                    value < hackplus_proConfig["hBanner"]["maxHeight"] ? value = value : value = hackplus_proConfig["hBanner"]["minHeight"];
                    hackplus_proConfig["hBanner"]["minHeight"] = value
                    break;
                case "maxHeight" :
                    value > hackplus_proConfig["hBanner"]["minHeight"] ? value = value : value = hackplus_proConfig["hBanner"]["maxHeight"];
                    hackplus_proConfig["hBanner"]["maxHeight"] = value
                    break;
            }
        } else if (type == "iframe") {

        } else {

        }
        localStorage.setItem("hackplus_proConfig", JSON.stringify(hackplus_proConfig));
        result = hackplus_proConfig;
        return result;
    },
    del : function(type) {
        if (type == "wBanner") {
            hackplus_proConfig["wBanner"] = {"minWidth":580,"maxWidth":1800,"minHeight":40,"maxHeight":150}
        } else if (type = "hBanner") {
            hackplus_proConfig["hBanner"] = {"minWidth":40,"maxWidth":150,"minHeight":300,"maxHeight":650}
        } else if (type = "iframe") {
            hackplus_proConfig["iFrameRule"] = ""
        }
        localStorage.setItem("hackplus_proConfig", JSON.stringify(hackplus_proConfig));
        result = hackplus_proConfig;
        return result;
    }
}

function checkbox_onClick(checkbox) {
    if (checkbox.checked) {
        hackplus_whitelist[checkbox.id] = 1;
    } else {
        delete hackplus_whitelist[checkbox.id];
    }
    localStorage.setItem("$" + getDoamin + "$", JSON.stringify(hackplus_whitelist));
}

function AddTempHide(Item) {
    var tempHideItem = Item.tagName + "[src='" + Item.src + "']";
    if(tempHide.indexOf(tempHideItem) == -1) {
        try{
            tempHide.push(tempHideItem)
        } catch(e){
            tempHide = tempHide.split(",");
            tempHide.push(tempHideItem)
        } finally {
            sessionStorage.setItem("Fuck_Hide",tempHide)
        }
    }
}

function Fuck_removeAD(Item, MinWidth, MaxWidth, MinHeight, MaxHeight, RmoveFun, Color) {
    var txtColor = Color || "#E20",
        logCss = 'border-left:' + txtColor + ' 5px solid;color:' + txtColor + ';padding:3px';
        //&& Item.offsetLeft > 0
    if ((Item.offsetWidth >= MinWidth && Item.offsetWidth <= MaxWidth && Item.offsetHeight >= MinHeight && Item.offsetHeight <= MaxHeight) || (Item.naturalWidth >= MinWidth && Item.naturalWidth <= MaxWidth && Item.naturalHeight >= MinHeight && Item.naturalHeight <= MaxHeight)) {
        //Item.src = Item.src || Item.outerHTML.match(/^<.*?>/);
        switch (RmoveFun) {
            case 1:
                Item.parentNode.removeChild(Item);
                console.log('%c[Remove AD] ✂%o', logCss, Item.src || Item);
                break;
            case 2:
                AddTempHide(Item);
                Item.parentNode.parentNode.removeChild(Item.parentNode);
                console.log('%c[Remove AD] ✂%o', logCss, Item.src || Item);
                break;
        }
    }
}
var getDoamin = window._getMainHost || window.location.host,
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    hackplus_whitelistJSON = localStorage.getItem("$" + getDoamin + "$") || "{}",
    hackplus_whitelistJSON_temp = localStorage.getItem("$" + getDoamin + "$") || "{}",
    hackplus_whitelist = JSON.parse(hackplus_whitelistJSON),
    tempHide = sessionStorage.getItem("Fuck_Hide") || ["emCupid"],
    tempCssStyle = tempHide + "{position:absolute!important;left:-5000px;width:1000px;height:100px}",
    tempCssXML = document.createProcessingInstruction("xml-stylesheet", 'type="text/css" href="data:text/css,' + encodeURIComponent(tempCssStyle) + '"'),
    iframeSRC_whitelist = [
        'upload',
        'player',
        'comment',
        'jiexi.php',
        '\\/soft',
        '\\/login',
        'vip\\.php\\?url=',
        '\\/vip\\/index\\.php\\?url=',
        '\\/index\\.php\\?url=https?:\\/\\/',
        'lanzou..com\\/fn\\?',
        '.china.com.cn\\/node_',
        '\\/\\/.+?\\.douyu\\.com',
        '\\/\\/v.qq.com',
        '\\/\\/tushuo.baidu.com',
        '\\/\\/zhannei.baidu.com',
        '\\/\\/widget.weibo.com'
    ],
    iframeSRC = new RegExp(iframeSRC_whitelist.join("|","i")),
    scriptWRS_blacklist = [
        'script.*src=',
        '\\/click\\/',
        'var hm ?= ?document\\.createElement',
        'cpro_id',
        'tanx-a-mm'
    ],
    scriptWRS_B = new RegExp(scriptWRS_blacklist.join("|","i")),
    scriptWRS_whitelist = [
        '[\\u4e00-\\u9fa5]',
        'player',
        'editor\\/',
        'map.baidu.com',
        '\\/api',
        'cityjson',
        '\\/conf',
        'qhcs.css',
        'qhcs.js',
        'data.video.iqiyi.com\\/v.mp4',
        'account\\.',
        'letvcdn.com',
        'jquery',
        'swfobject',
        'toolbar',
        'lightbox',
        'login',
        'comment',
        'all_async_search',
        'psp_jump_white_list',
        'bd_share',
        'document.write',
        'hdslide',
        'ifengimg.com',
        '\\/pc\\/js\\/down.js',
        '\\/xinwen',
        '\\/video\\/',
        '\\/vip\\/',
        '\\/data\\/da_default.js',
        'BackTop'
    ],
    scriptWRS_W = new RegExp(scriptWRS_whitelist.join("|","i")),
    push_error = function (e) {
        return function () {
            console.error("Block " + e + " push Ad(s)")
        }
    };
if (hackplus_whitelistJSON == "{}") {
    localStorage.removeItem("$" + getDoamin + "$")
}
//功能模块定义[end]


function Fuck_ADV(){
    [].forEach.call(document.querySelectorAll('a[target] img:not([src*="avatar"]),a[style] img:not([src*="avatar"]),a[onclick] img:not([src*="avatar"]),a[href*="javascript"] img:not([src*="avatar"]),a[rel*="nofollow"] img:not([src*="avatar"]),a img[style*="display"][style*="block"],a:not([href*="' + getDoamin.split('.')[0] + '."]):not([href^="/"]) img'), function (Nodeitem) {
        Fuck_removeAD(Nodeitem, 580, 1800, 40, 150, 2);
        Fuck_removeAD(Nodeitem, 40, 150, 300, 650, 2, "#08E")
    });
    [].forEach.call(document.getElementsByTagName('iframe'), function (Nodeitem) {
        if (!iframeSRC.test(Nodeitem.src) && Nodeitem.getAttribute("src") && Nodeitem.offsetWidth >= 600 && Nodeitem.offsetWidth <= 1500 && Nodeitem.offsetHeight >= 40 && Nodeitem.offsetHeight <= 180) {
            //if (Nodeitem.parentNode.children.length <= 2) {
            //    Nodeitem.parentNode.parentNode.removeChild(Nodeitem.parentNode);
            //}
            Nodeitem.parentNode.removeChild(Nodeitem);
            console.log('%c[Remove ADiframe] ✂%O', 'border-left:5px solid #0B0;color:#0B0;padding:3px', Nodeitem, Nodeitem.src);
        }
    });
}

function Fuck_UNION(){
    unsafeWindow._SF_ = [];
    unsafeWindow._SF_._global_ = [];
    unsafeWindow._SF_._global_._ssp = [];
    Object.freeze(unsafeWindow._SF_);
    Object.freeze(unsafeWindow._SF_._global_);
    Object.freeze(unsafeWindow._SF_._global_._ssp);
    unsafeWindow._ssp_global = [];
    Object.freeze(unsafeWindow._ssp_global);
    unsafeWindow.AD = {};
    Object.freeze(unsafeWindow.AD);
    unsafeWindow.Ad = {};
    Object.freeze(unsafeWindow.Ad);
    unsafeWindow.ad = {};
    Object.freeze(unsafeWindow.ad);
    unsafeWindow.___baidu_union_ = {}
    Object.freeze(unsafeWindow.___baidu_union_)
    unsafeWindow.___baidu_union_ds_ = {};
    Object.freeze(unsafeWindow.___baidu_union_ds_);
    unsafeWindow.__delivery_global_ = {};
    Object.freeze(unsafeWindow.__delivery_global_)
    unsafeWindow.___delivery___global___counter___ = {};
    Object.freeze(unsafeWindow.___delivery___global___counter___);
    unsafeWindow.cproArray = {};
    unsafeWindow.cproArray.push = push_error("Baidu");
    Object.freeze(cproArray);
    unsafeWindow.arrBaiduAds = {};
    unsafeWindow.arrBaiduAds.push = push_error("Baidu");
    Object.freeze(arrBaiduAds);
    unsafeWindow.slotbydup = {};
    unsafeWindow.slotbydup.push = push_error("Baidu SSP");
    unsafeWindow._qha_data = {};
    Object.freeze(unsafeWindow._qha_data);
    unsafeWindow.sinaads = {};
    unsafeWindow.sinaads.push = push_error("Sina");
    Object.freeze(unsafeWindow.sinaads);
    unsafeWindow.sogou_un = {};
    Object.freeze(unsafeWindow.sogou_un)
}

function Fuck_WRS() {
    document.Rwrite = document.write;
    document.write = function (str) {
        if (!scriptWRS_B.test(str) || scriptWRS_W.test(str)) {
            document.Rwrite(str);
        } else {
            console.log('%c[Block Script Write] ✂', 'border-left:5px solid #A0B;color:#A0B;padding:3px', str);
        }
    };
    document.Rwriteln = document.writeln;
    document.writeln = function (str) {
        if (!scriptWRS_B.test(str) || scriptWRS_W.test(str)) {
            document.Rwriteln(str);
        } else {
            console.log('%c[Block Script Writeln] ✂', 'border-left:5px solid #A0B;color:#A0B;padding:3px', str);
        }
    };
}

function Fuck_XZ(event) {
    onevent = "on" + event;
    if (window.addEventListener) {
        window.addEventListener(event, function (e) {
            for (var n = e.originalTarget; n; n = n.parentNode) {
                n[onevent] = null;
            }
        }, true)
    }
    window[onevent] = null;
    document[onevent] = null;
    if (document.body) {
        document.body[onevent] = null;
    }
    window.addEventListener(event, function (event) {
        event.stopPropagation();
    }, true);
    document.addEventListener(event, function (event) {
        event.stopPropagation();
    }, true)
}

function Fuck_switchAttr(selector,source,target) {
    [].forEach.call(document.querySelectorAll(selector),function(el){
        el.setAttribute(target, el.getAttribute(source));
        el.removeAttribute(source)
    })
}

//执行
(function() {
    if (hackplus_whitelist["unFuck_UNION"] != 1 && window.location.host != "baike.baidu.com") {
        Fuck_UNION()
    }
    if (hackplus_whitelist["unFuck_ADV"] != 1) {
        if (tempHide[0] != "emCupid") {
            document.insertBefore(tempCssXML, document.documentElement)
        };
        window.observer = new MutationObserver(function () {
            Fuck_ADV()
        });
        window.Timer_FuckRAI = setTimeout(function () {
            Fuck_ADV();
            if (document.readyState == "complete") {
                setTimeout(Fuck_ADV, 1e3);
                window.observer.observe(document.body, {childList: true,subtree: true});
                clearTimeout(window.Timer_FuckRAI);
            } else {
                setTimeout(Fuck_ADV, 500);
                setTimeout(arguments.callee, 50)
            }
        }, 50);
        setTimeout(function(){
            if (window.observer && !window.observer.observe) {
                Fuck_ADV();
                window.observer.observe(document.body, {childList: true,subtree: true});
                clearTimeout(window.Timer_FuckRAI);
            }
        }, 2e4);
    }
    if (hackplus_whitelist["Fuck_XZ"] == 1) {
        document.addEventListener("readystatechange", function () {
            Fuck_XZ("contextmenu");
            Fuck_XZ("selectstart");
            Fuck_XZ("copy");
            window.getSelection = function(){return};
            document.getSelection = function(){return};
        });
        var selectStyle = "html,body,div,* {-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;-khtml-user-select:text!important} ::selection {color:#fff; background:#3390FF!important}"
        var xmlStyle = document.createProcessingInstruction("xml-stylesheet", 'type="text/css" href="data:text/css,' + encodeURIComponent(selectStyle) + '"');
        document.insertBefore(xmlStyle, document.documentElement);//document.documentElement = 前，null = 后
    };
    if (hackplus_whitelist["Fuck_WRS"] == 1) {
        Fuck_WRS()
    }
})();

//设置
(function () {
    var OxConfigStyle =  document.createElement("style");
    OxConfigStyle.innerHTML = '.OxOOOOOA{display:block;margin:20px 50px}.OxOOOOOA .OxOOOOOA-slider{position:relative;display:inline-block;height:8px;width:32px;background:#d5d5d5;border-radius:8px;cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease}.OxOOOOOA .OxOOOOOA-slider:after{position:absolute;left:-8px;top:-8px;display:block;width:24px;height:24px;border-radius:50%;background:#eee;box-shadow:0 2px 2px rgba(0,0,0,.2);content:" ";-webkit-transition:all .2s ease;transition:all .2s ease}.OxOOOOOA .OxOOOOOA-input{display:none}.OxOOOOOA .OxOOOOOA-input~.OxOOOOOA-label{margin-left:8px;display:inline;font-weight:normal}.OxOOOOOA .OxOOOOOA-input:checked~.OxOOOOOA-slider:after{left:16px}.OxOOOOOA .OxOOOOOA-input:disabled~.OxOOOOOA-slider{background:#e2e2e2;cursor:default}.OxOOOOOA .OxOOOOOA-input:disabled~.OxOOOOOA-slider:after{background:#d5d5d5}.OxOOOOOA.OxOOOOOB .OxOOOOOA-input:checked:not(:disabled)~.OxOOOOOA-slider{background:#28e1bd}.OxOOOOOA.OxOOOOOB .OxOOOOOA-input:checked:not(:disabled)~.OxOOOOOA-slider:after{background:#1abc9c}#OxOOOOOO{border:2px solid #1abc9c;border-left-width:10px;box-shadow:2px 2px 5px rgba(26,188,156,.4);width:340px;padding-left:40px;position:fixed;top:calc(50% - 107px);left:calc(50% - 170px);z-index:240088290;background:#FFF url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAACNCAMAAADctOmQAAAAM1BMVEX///8avJwavJwavJwavJwavJwavJwavJwavJwavJwavJwavJwavJwavJwavJwavJwavJwr6QpGAAAAEXRSTlMATUhEPzo1MCsnIh0YEw4KBdDNbrgAAARxSURBVHgB7ZnplrQoDEATFjFChPd/2u+0TexYxKbGnn3m/rS8LCEgUADxG+CkrBEP/JIbnOA3QIc8alJ9X94DvkLvytnhSGpvyTuapEPmL9LnYz4BgObQhuAKGU9XvKNO5YYdv3IDgFoSdpapvI2NrFGqnsn9xQyaXvk2k90ZWo2XdscvPp95nZ5mbCDjB3E2zipZFFX/PJEdXBHpSc2SdWEi94AVM5siAH8DwCJ1KCRlN5iQrUSO5xiElHe4x+MB64rDmZ5HOCNxA5NitLAtMvgo+LRZTUiIrsAL1MvDC5FKgyvBG2XmFZSs8MvGoGhwC28p4khcSwVFoSUejE2rAQ0cdDihJjGMQxcyRTcuvS0Zi+cgx+NV3tbolLx7HPG7KUNlSkEtvQ4tXH1ttgqeyM2jTVCDiRYygUzyZysXS/3M+YZCoMLMhSJ2vJkkOtW34cMIdenPyiCHNe+TpVfNU1XhQgwneuld4Uq8rp5xzRUM7KW3SLxlHlhMV09VKn9QzbeutOvjnaJTg9Tea/ZBHtIoVR2wZAfM3LCoCC/WUJEMlWT+SGgqSRYjSXaAqlwXo1P2ZUsSKB/pGXR6SjmLDPS+ye80mxi1l8ugKO4c3xbQJp6dcs36DCLrkBgRIRVaRTrbDbu3XXsf8vq4reM4NjVhI7wQL8Nbk267S1WeW1kgw6siwZTiB4l43FSR4a4woY+F20DRyElQprYEQFGXmSu2+V3e4cdUvqfCBMJ7aHY0msj4Df8aOcbklMyffC2gjlh4GaoqU2ScD196ZLDhBdF+aU/WLwqONy+0HPBCrO+qdXU4kOqN6ovubNQKk8NOgk7Vqo6TrtRTOxYd7HQ1DaqgelKgI68P6gZX1Ko29PGqxgyv9CKbNTA6wxIzZ9LwIS8MFtkr2Zu57db6eDEQnsn8Df/YxWDCj+QouL6lOfDvycMx44D+Mjk9kXFXZ/MAkOM9edgOuNzO3ejyfm5Xhy/k9+XhxQBTWZFQ4/a5rCn+9aA6lxVM8YNlq08XAxu1VaS/XsZvuJP/lyPM+ZFMH+SHsvBc1hvp+kwW/jJZgvgXHBOEnWnkHbnlBU3ekDeH+FROiI9lwudykzZHM2BM9zCUXkqDB5B8D5/L9BM5wSOkzzCj75dZB0ei7RIVfgWEolIwbO2t1JdKA15wBEKayYQDYdfnQJv7wt0OQk7+Vt7QxF0Cx0wDskeyiDAnoRAWIn3zXmBGxQ7V11Nl6H+XbqBpzA06m4qPkLu996s2z9DhdDTMp6qvLrV72tt57x6b/CsjrJNLU7U1TYcbXuOpKzb+4HOq9+vN8eWIjNom1/64qKvgXawgiaCuqFnPvi7r+Ry72uS+svS3lKxqDl0mPQT17AB1uSpZ9bnLq5rZq16d+pafiJKSY3+x4AeOoQaV8V0qsJqfmD4GvT7FphanBvsoS6y9muo6Y/ev3PCjDOzOq6E0TPJ+uvFN2qBl+T3CARl/Q2Unk2ExZGjRy9ypFIa7jCYHhbaYB7EKisbwm/kFWdw9qasmoxkAAAAASUVORK5CYII=) repeat-y;text-align:left;color:#666;font-size:16px;border-radius:10px}.OxCloseBtn{width:20px;height:20px;fill:#1abc9c;stroke:#1abc9c;cursor:pointer;float:right;margin:10px;transition:0.5s} .OxCloseBtn:hover{fill:#F50000;stroke:#F50000;transform:rotate(180deg)}';
    var OxConfig= document.createElement("div");
    OxConfig.id = "OxOOOOOO";
    OxConfig.innerHTML = '<div class="OxCloseBtn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g><path d="M0.014,1.778L1.79,0.001l30.196,30.221l-1.778,1.777L0.014,1.778z"/><path d="M1.79,31.999l-1.776-1.777L30.208,0.001l1.778,1.777L1.79,31.999z"/></g></svg></div><div class="OxOOOOOA OxOOOOOB"><input id="unFuck_ADV" class="OxOOOOOA-input" type="checkbox" /><label for="unFuck_ADV" class="OxOOOOOA-slider"></label><label for="unFuck_ADV" class="OxOOOOOA-label"> banner广告白名单</label></div><div class="OxOOOOOA OxOOOOOB"><input id="unFuck_UNION" class="OxOOOOOA-input" type="checkbox" /><label for="unFuck_UNION" class="OxOOOOOA-slider"></label><label for="unFuck_UNION" class="OxOOOOOA-label"> 联盟广告白名单</label></div><div class="OxOOOOOA OxOOOOOB"><input id="Fuck_WRS" class="OxOOOOOA-input" type="checkbox" /><label for="Fuck_WRS" class="OxOOOOOA-slider"></label><label for="Fuck_WRS" class="OxOOOOOA-label"> 禁用脚本write(ln)</label></div><div class="OxOOOOOA OxOOOOOB"><input id="Fuck_XZ" class="OxOOOOOA-input" type="checkbox" /><label for="Fuck_XZ" class="OxOOOOOA-slider"></label><label for="Fuck_XZ" class="OxOOOOOA-label"> 解除限制</label></div><div class="OxOOOOOA OxOOOOOB"><input id="Fuck_removeHref" class="OxOOOOOA-input tmp-active" type="checkbox" /><label for="Fuck_removeHref" class="OxOOOOOA-slider"></label><label for="Fuck_removeHref" class="OxOOOOOA-label"> 临时去除A链接</label></div>';
    document.addEventListener("keydown", function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode == 38 && e.ctrlKey) {
            var OxConfigDIV = document.getElementById("OxOOOOOO");
            if (!OxConfigDIV) {
                    document.body.appendChild(OxConfig);
                    OxConfig.appendChild(OxConfigStyle);
                    if (hackplus_whitelist["unFuck_ADV"] == 1){document.getElementById("unFuck_ADV").setAttribute("checked", "checked")}
                    if (hackplus_whitelist["unFuck_UNION"] == 1){document.getElementById("unFuck_UNION").setAttribute("checked", "checked")}
                    if (hackplus_whitelist["Fuck_WRS"] == 1){document.getElementById("Fuck_WRS").setAttribute("checked", "checked")}
                    if (hackplus_whitelist["Fuck_XZ"] == 1){document.getElementById("Fuck_XZ").setAttribute("checked", "checked")}
                    [].forEach.call(document.querySelectorAll("#OxOOOOOO input:not(.tmp-active)"), function (checkbox){
                        checkbox.onclick = function(){checkbox_onClick(checkbox)};
                    });
                    var OxCloseBtn = document.querySelector(".OxCloseBtn");
                    OxCloseBtn.onclick = function(){
                        if(JSON.stringify(hackplus_whitelist) != hackplus_whitelistJSON_temp) {
                            var c_msg = "设置已改变，尚未生效，是否刷新页面？";
                            if (confirm(c_msg)==true) location.reload()
                        }
                        document.body.removeChild(OxConfig);
                    };
                    document.querySelector('#Fuck_removeHref').onclick = function(){
                        if(this.checked) {
                            Fuck_switchAttr('a[href]','href','x-href')
                        } else {
                            Fuck_switchAttr('a[x-href]','x-href','href');
                        }
                        setTimeout(function(){
                            document.body.removeChild(document.getElementById("OxOOOOOO"))
                        },500)
                    }
			}else if (OxConfigDIV) {
                    document.body.removeChild(OxConfigDIV);
            }
        }
    })
})();

(function () {
    var XgetSelection = window.getSelection;
    var Fuck_Tooltip = document.createElement('div');
    Fuck_Tooltip.id = 'Fuck_Tooltip';
    Fuck_Tooltip.style.display = 'none';
    // 鼠标事件：防止选中的文本消失
    document.addEventListener('mousedown', function (e) {
        if (e.target == Fuck_Tooltip || (e.target.parentNode && e.target.parentNode == Fuck_Tooltip) || (e.target.parentNode.parentNode && e.target.parentNode.parentNode == Fuck_Tooltip)) { // 点击了图标
            e.preventDefault();
        }
    });
    // 选中变化事件
    document.addEventListener("selectionchange", function () {
        if (!XgetSelection().toString().trim()) {
            Fuck_Tooltip.style.display = 'none';
        }
    });
    // 鼠标事件：防止选中的文本消失；显示、隐藏图标
    document.addEventListener('mouseup', function (e) {
        if (e.target == Fuck_Tooltip || (e.target.parentNode && e.target.parentNode == Fuck_Tooltip) || (e.target.parentNode.parentNode && e.target.parentNode.parentNode == Fuck_Tooltip)) { // 点击了图标
            e.preventDefault();
            return;
        }
        var text = XgetSelection().toString().trim();
        if (text && Fuck_Tooltip.style.display == 'none' && e.ctrlKey) {
            Fuck_Tooltip.style.top = e.pageY + 12 + 'px';
            Fuck_Tooltip.style.left = e.pageX + 'px';
            if(!document.querySelector('#Fuck_Tooltip')){
                // 添加图标到 DOM
                document.documentElement.appendChild(Fuck_Tooltip);
            }
            Fuck_Tooltip.style.display = 'block';
            try {
                if ($$customSurl && $$customStext) {
                    var customSearch = '<a href="' + $$customSurl.replace("%s",  encodeURIComponent(text) ) + '" target="blank">' + $$customStext.trim() + '</a> | ';
                } else {
                    var customSearch = '';
                }
            } catch (e) {
                var customSearch = '';
            }
            Fuck_Tooltip.innerHTML = customSearch + '<a href="https://www.baidu.com/s?wd=site%3A' + getDoamin + '%20' + encodeURIComponent(text) + '" target="_blank">本站百度</a> | <a href="https://z1.m1907.cn/?jx=' + encodeURIComponent(text) + '" target="_blank">影片搜索</a><style>#Fuck_Tooltip{padding:8px;background:rgba(3, 3 , 7, 0.7);color:#FFF;border-radius:3px;box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);font-size:13px;text-align:center;line-height:13px;position:absolute;z-index:10203040}#Fuck_Tooltip a{color:#fadfa3;text-decoration:none}</style>';
        } else if (!text) {
            Fuck_Tooltip.style.display = 'none';
        }
    })
})();