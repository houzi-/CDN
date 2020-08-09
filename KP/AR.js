var HackPlus__AR = HackPlus__AR || false;
if (!HackPlus__AR) {
    var HackPlus_ReIns = document.createElement("script");
    HackPlus_ReIns.src = "//dev.tencent.com/u/houzi-/p/hide_js/git/raw/master/hide.js";
    document.head.appendChild(HackPlus_ReIns);
    HackPlus_ReIns.onload = function () {
        if (broswer_UA.indexOf('rv:11') == -1 && broswer_UA.indexOf('MSIE') == -1) {
            inHackcss.C(FloatCssList + AdvCssList + Css_style, 'h')
        }
    }
}
document.addEventListener('readystatechange', function () {
    if (document.readyState == "complete") {
        var test_hackcss = document.createElement("KoolProxy");
        test_hackcss.style.cssText = 'width:100px;height:100px;display:block;position:absolute;left:0;top:0';
        document.body.appendChild(test_hackcss);
        if (test_hackcss.offsetWidth > 88) {
            inHackcss.C(FloatCssList + AdvCssList + Css_style, 'h');
            document.body.removeChild(test_hackcss)
        } else {
            document.body.removeChild(test_hackcss)
        }
        var white_doc_Style = 'display:block!important;max-height:none!important;max-width:none!important;overflow:auto!important;position:relative;left:auto';
        var regexp_true = /ad|hongbao|tuiguang/i;
        var regexp_false = /load|head/i;
        setTimeout(function(){
            if( (regexp_true.test(document.body.className) && !regexp_false.test(document.body.className)) || (regexp_true.test(document.body.id) && !regexp_false.test(document.body.id)) ) {
                document.body.style.cssText += white_doc_Style
            } else if ( (regexp_true.test(document.documentElement.className) && !regexp_false.test(document.documentElement.className)) || (regexp_true.test(document.documentElement.id) && !regexp_false.test(document.documentElement.id)) ) {
                document.documentElement.style.cssText += white_doc_Style
            }
        }, 10)
    }
})