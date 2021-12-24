 (function() {
    'use strict';
    var closeAd=function (){
        var css = '.video-ads,.video-ads .ad-container .adDisplay,#player-ads,.ytp-ad-module,.ytp-ad-image-overlay{ display: none!important; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
 
        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
 
        head.appendChild(style);
    };
    var skipInt;
    var log=function(msg){
       // unsafeWindow.console.log (msg);
    };
    var skipAd=function(){
        //ytp-ad-preview-text
        //ytp-ad-skip-button
        var skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ")||document.querySelector(".ytp-ad-overlay-close-button")||document.querySelector(".ytp-ad-skip-button-containe");
        //var skipbtn=document.querySelector(".ytp-ad-skip-button ")||document.querySelector(".videoAdUiSkipButton ");
        if(skipbtn){
           skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ")||document.querySelector(".ytp-ad-overlay-close-button")||document.querySelector(".ytp-ad-skip-button-containe");
           log("skip");
           skipbtn.click();
           if(skipInt) {clearTimeout(skipInt);}
           skipInt=setTimeout(skipAd,500);
         }else{
              log("checking...");
              if(skipInt) {clearTimeout(skipInt);}
              skipInt=setTimeout(skipAd,500);
         }
    };
 
    closeAd();
    skipAd();
 
})();
