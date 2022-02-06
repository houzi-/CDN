 (function() {
    var closeAd=function (){
        var css = '.video-ads,.video-ads .ad-container .adDisplay,#player-ads,.ytp-ad-module,.ytp-ad-image-overlay,#masthead-ad,[class*="ytd-promoted-sparkles-text-search-renderer"],.ytd-promoted-sparkles-text-search-renderer,.ytd-carousel-ad-renderer,.badge-style-type-ad,[layout*="display-ad-"],.ytp-ad-progress-list,#merch-shelf,#player-ads,#offer-module{ display: none!important; }',
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
    closeAd();
    skipAd();
 
})();