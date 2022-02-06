 (function() {
    var closeAd=function (){
        var css = '#masthead-ad,#merch-shelf,#offer-module,#player-ads,.ytp-ad-progress-list{ display: none!important; }',
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
