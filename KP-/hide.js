/* getMainHost by pon */
(function(){var o="mh_"+Math.random(),n=new RegExp("(^|;)\\s*"+o+"=12345"),e=new Date(0),t=document.domain,i=t.split("."),a=[];for(a.unshift(i.pop());i.length;){a.unshift(i.pop());var c=a.join("."),u=o+"=12345;domain=."+c;if(document.cookie=u,n.test(document.cookie))return document.cookie=u+";expires="+e,window.HackPlus_getMainHost=c}})();

/* Global hidecss plus by emCupid */
/* From https://static.x-boy.cn/fcss.min.js */
function Fuck_testDomain(e){var t=new RegExp("^"+e,"i");return t.test(location.href.replace(/https?:\/\//i,""))}function Fuck_css(e){if(!HackPlus__AR&&broswer_UA.indexOf("Firefox")==-1&&$$CSP_WLD.indexOf(getDoamin)==-1&&!$$CSP_WLD.some(Fuck_testDomain)&&1!=hackplus_whitelist.wl_csp){var t=document.createElement("meta");t.httpEquiv="Content-Security-Policy",t.content="script-src 'self' 'unsafe-inline' 'unsafe-eval' http://*/ https://*/ blob:",document.head.appendChild(t)}if(!HackPlus__AR)try{var o=document.createProcessingInstruction("xml-stylesheet",'type="text/css" href="data:text/css,'+encodeURIComponent(e)+'"');document.insertBefore(o,document.documentElement)}catch(t){var i=document.createElement("style");i.type="text/css",i.innerHTML=e,document.head.appendChild(i)}finally{Fuck_RAI(),Fuck_WRS(),Fuck_WWO(),Fuck_Other(),Fuck_Tooltip()}}function fuckcss(e){var t=function(e){return e.filter(function(e,t,o){return o.indexOf(e)===t})},o=window.XxX_MutationObserver||window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(/FuckXZ|FuckXHR|FuckFRAME/.test(e)){var i=e.split(","),a=function(e){onevent="on"+e,window.addEventListener&&window.addEventListener(e,function(e){for(var t=e.originalTarget;t;t=t.parentNode)t[onevent]=null},!0),window[onevent]=null,document[onevent]=null,document.body&&(document.body[onevent]=null),window.addEventListener(e,function(e){e.stopPropagation()},!0),document.addEventListener(e,function(e){e.stopPropagation()},!0)};window.fuckcss_FuckCSPArray=window.fuckcss_FuckCSPArray||[];for(var n=function(){fuckcss_FuckCSPArray=t(fuckcss_FuckCSPArray);var e=document.querySelector('meta[http-equiv="Content-Security-Policy"]');if(e&&/script-src/.test(e.content))e.content="script-src 'self' 'unsafe-inline' 'unsafe-eval' http://*/ https://*/ blob:;"+fuckcss_FuckCSPArray.join(";");else if(e)e.content=fuckcss_FuckCSPArray.join(";");else{var o=document.createElement("meta");o.httpEquiv="Content-Security-Policy",o.content=fuckcss_FuckCSPArray.join(";"),document.head.appendChild(o)}},l=0;l<i.length;l++)switch(i[l]){case"FuckXZ":document.addEventListener("readystatechange",function(){a("contextmenu"),a("selectstart"),a("copy"),window.getSelection=function(){},document.getSelection=function(){}});break;case"FuckXHR":fuckcss_FuckCSPArray.push("connect-src 'self' *."+getDoamin);break;case"FuckFRAME":fuckcss_FuckCSPArray.push("child-src 'self' *."+getDoamin+";frame-src 'self' *."+getDoamin)}return n()}window.fuckcss_Array=window.fuckcss_Array||[];var s=e.split(",");window.fuckcss_Array.push.apply(window.fuckcss_Array,s),fuckcss_Array=t(fuckcss_Array);var c=function(){Sizzle(fuckcss_Array.join(",")).forEach(function(e){e.parentNode.removeChild(e)})},d=new o(function(){c()});if("undefined"==typeof Sizzle){var r=document.createElement("script");r.src="https://cdn.jsdelivr.net/gh/houzi-/CDN/CSS/sizzle_mini.js",r.setAttribute("async",!0),document.head.appendChild(r)}window.Timer_fuckcss=setTimeout(function(){try{c()}catch(e){e=null}"complete"==document.readyState&&"undefined"!=typeof Sizzle?(d.observe(document.body,{childList:!0,subtree:!0}),clearTimeout(window.Timer_fuckcss)):setTimeout(arguments.callee,0)},10)}function Fuck_removeAD(e,t,o,i,a,n,l){var s=l||"#E20",c="border-left:"+s+" 5px solid;color:"+s+";padding:3px";if(e.offsetWidth>=t&&e.offsetWidth<=o&&e.offsetHeight>=i&&e.offsetHeight<=a||e.naturalWidth>=t&&e.naturalWidth<=o&&e.naturalHeight>=i&&e.naturalHeight<=a)switch(n){case 1:e.parentNode.removeChild(e),hackplus_debug&&console.log("%c[Remove AD] ✂%o",c,e.src||e);break;case 2:e.parentNode.parentNode.removeChild(e.parentNode),hackplus_debug&&console.log("%c[Remove AD] ✂%o",c,e.src||e)}}function Fuck_removeBlank(e){var t="border-left:5px solid #030307;color:#030307;padding:3px",o=0,i=0,a=0,n=/captcha|ngabbs|login|data:image/i;if(e.getAttribute("style")&&!n.test(e.getAttribute("style")))var i=1;if(e.childElementCount>0&&e.childElementCount<4){var l=[],s=[];tempOtherArr=[];for(var c=0;c<e.childElementCount;c++)l.push(e.children[c].tagName),"SCRIPT"==e.children[c].tagName?s.push(e.children[c].tagName):"INS"==e.children[c].tagName&&tempOtherArr.push(e.children[c].tagName);if(l.toString()==s.toString())var o=1;else if(tempOtherArr.length&&tempOtherArr.length)var a=1}(o||a)&&i&&e.offsetHeight>9?(e.parentNode.removeChild(e),hackplus_debug&&console.log("%c[Remove Blank Element] ✂%o",t,e)):!e.childElementCount&&!e.innerText&&i&&(e.offsetHeight>50&&e.offsetHeight<350||/width: ?100%;/i.test(e.style.cssText)&&/^_/.test(e.id))&&(e.parentNode.removeChild(e),hackplus_debug&&console.log("%c[Remove Blank Element] ✂%o",t,e))}function Fuck_getStyle(e,t){return getComputedStyle(e,null).getPropertyValue(t)}function Fuck_ADV(){if($$RAI_WLD.indexOf(getDoamin)!=-1||$$RAI_WLD.some(Fuck_testDomain)||1==hackplus_whitelist.wl_rai||([].forEach.call(document.querySelectorAll('a[target] img:not([src*="avatar"]),a[style] img:not([src*="avatar"]),a[onclick] img:not([src*="avatar"]),a[href*="javascript"] img:not([src*="avatar"]),a[rel*="nofollow"] img:not([src*="avatar"]),a img[style*="display"][style*="block"],a:not([href*="'+getDoamin.split(".")[0]+'."]):not([href^="/"]) img'),function(e){Fuck_removeAD(e,580,1800,40,140,2),Fuck_removeAD(e,40,150,300,650,2,"#08E")}),[].forEach.call(document.querySelectorAll("object,embed,img[data-link]"),function(e){Fuck_removeAD(e,580,1800,40,140,1),Fuck_removeAD(e,40,140,300,650,1,"#08E")}),[].forEach.call(document.querySelectorAll('div[id^="__"]'),function(e){Fuck_removeAD(e,40,140,250,650,1,"#08E")}),[].forEach.call(document.getElementsByTagName("iframe"),function(e){var t=/(upload|player|comment|frame-vip.min.html|jiexi.php|.china.com.cn\/node_|\/fn\?f=|\/soft|\/login|vip\.php\?url=|\/vip\/index\.php\?url=|\/index\.php\?url=https?:\/\/)/i;!t.test(e.src)&&e.getAttribute("src")&&e.offsetWidth>=600&&e.offsetWidth<=1500&&e.offsetHeight>=40&&e.offsetHeight<=180&&(e.parentNode.removeChild(e),hackplus_debug&&console.log("%c[Remove iframe] ✂%O","border-left:5px solid #0B0;color:#0B0;padding:3px",e,e.src))}),[].forEach.call(document.querySelectorAll('div:not([id]):not([class]),div[id^="_"]:not([class]),ul:not([id]):not([class]),li:not([id]):not([class])'),function(e){Fuck_removeBlank(e)})),$$Float_WLD.indexOf(getDoamin)==-1&&!$$Float_WLD.some(Fuck_testDomain)&&1!=hackplus_whitelist.wl_float){var e=/class="blog_handle"/i;[].forEach.call(document.querySelectorAll('div:not([class*="captcha"]):not([id*="captcha"])'),function(t){"fixed"!=Fuck_getStyle(t,"position")||"0px"!==Fuck_getStyle(t,"bottom")||"0px"!==Fuck_getStyle(t,"left")&&"0px"!==Fuck_getStyle(t,"right")||e.test(t.outerHTML)||Fuck_removeAD(t,700,3e3,80,199,1,"#007")}),[].forEach.call(document.querySelectorAll('[style]:not([class*="captcha"]):not([id*="captcha"])'),function(e){e.style.zIndex&&e.style.zIndex>1e8&&2e9!=e.style.zIndex&&e.offsetHeight>50&&("IFRAME"==e.tagName&&e.getAttribute("src")||"IFRAME"!=e.tagName)&&(e.parentNode.removeChild(e),hackplus_debug&&console.log("%c[Remove Float Element] ✂%O","border-left:5px solid #007;color:#007;padding:3px",e))})}}function Fuck_RAI(){var e=/{display:block !important;max-width:none!.+?}/;$$ALL_WLD.indexOf(getDoamin)!=-1||$$ALL_WLD.some(Fuck_testDomain)||(window.XxX_observer=new XxX_MutationObserver(function(){Fuck_ADV()}),window.Timer_FuckRAI=setTimeout(function(){Fuck_ADV(),[].forEach.call(document.querySelectorAll("head>style"),function(t){e.test(t.innerText)&&(t.innerText=t.innerText.replace(e,"{display:block!important;max-height:none!important;max-width:none!important;overflow:auto!important;position:relative;left:auto}"))}),"complete"==document.readyState?(setTimeout(Fuck_ADV,1e3),window.XxX_observer.observe(document.body,{childList:!0,subtree:!0}),clearTimeout(window.Timer_FuckRAI)):(setTimeout(Fuck_ADV,500),setTimeout(arguments.callee,0))},20),setTimeout(function(){window.XxX_observer&&!window.XxX_observer.observe&&(Fuck_ADV(),window.XxX_observer.observe(document.body,{childList:!0,subtree:!0}),clearTimeout(window.Timer_FuckRAI))},2e4))}function Fuck_WRS(){if($$WRS_WLD.indexOf(getDoamin)==-1&&!$$WRS_WLD.some(Fuck_testDomain)&&1!=hackplus_whitelist.wl_wrs){var e=/(script.*src=|\/click\/|var hm ?= ?document\.createElement|cpro_id|tanx-a-mm)/i,t=/([\u4e00-\u9fa5]|player|editor\/|\/editor|cityjson|qhcs.css|qhcs.js|data.video.iqiyi.com\/v.mp4|account\.|letvcdn.com|jquery|swfobject|toolbar|lightbox|login|comment|all_async_search|psp_jump_white_list|bd_share|document.write|hdslide|ifengimg.com|\/pc\/js\/down.js|\/xinwen|\/video\/|\/vip\/|\/data\/da_default.js|BackTop)/i;document.Rwrite=document.write,document.write=function(o){!e.test(o)||t.test(o)?document.Rwrite(o):console.log("%c[Block write script/ads] ✂","border-left:5px solid #A0B;color:#A0B;padding:3px",o)},document.Rwriteln=document.writeln,document.writeln=function(o){!e.test(o)||t.test(o)?document.Rwriteln(o):console.log("%c[Block writeln script/ads] ✂","border-left:5px solid #A0B;color:#A0B;padding:3px",o)}}}function Fuck_WWO(){$$WWO_WLD.indexOf(getDoamin)!=-1||$$WWO_WLD.some(Fuck_testDomain)||1==hackplus_whitelist.wl_wwo||(window.open=function(e){return function(t,o,i){var a=function(){if(localStorage.hackplus_whitelist&&JSON.parse(localStorage.hackplus_whitelist).wl_wwo){var e=JSON.parse(localStorage.hackplus_whitelist);return e.wl_wwo}return 0};return o=o||"w_"+(new Date).getTime(),urlRegex=/(https?:)*\/\/[^\/]+/i,urlnotMatch=/about:blank|tencent:\/\/|s.share.baidu.com|:\/\/www.baidu.com|:\/\/www.sogou.com|^.+?\.jpg$|^.+?\.jpeg$|^.+?\.png$|^.+?\.gif$/i,t.match(urlRegex)&&t.match(urlRegex)[0].indexOf(getDoamin)!=-1||urlnotMatch.test(t)||1==a()||"vip_window"===o?e.call(window,t,o,i):0==a()&&window.confirm("非本站同源弹窗，确认=放行，取消=阻止\n\n"+t)?(hackplus_whitelist.wl_wwo=1,localStorage.hackplus_whitelist=JSON.stringify(hackplus_whitelist),e.call(window,t,o,i)):(hackplus_whitelist.wl_wwo=2,localStorage.hackplus_whitelist=JSON.stringify(hackplus_whitelist),console.log("%c[Block different origin window.open] ✂","border-left:5px solid #F60;color:#F60;padding:3px",t),!0)}}(window.open))}function Fuck_VIP(e){if(e&&"wl_go"==e.name&&(e={},e.src=localStorage.Wle_Custom,!localStorage.Wle_Custom))return alert("VIP URL is empty"),!1;var t=document.getElementById("White_List_Element");t&&document.body.removeChild(t),window.old_URLcreateObjectURL=window.URL.createObjectURL;var o=function(t,o,i){var a=i||window.location.href.match(/http[^\?]*/)[0],n='<iframe id="vip_iframe__" border="0" frameborder="0" scrolling="no" marginwidth="0" width="100%" height="100%" allowfullscreen="allowfullscreen" style="width:100%;height:100%" src="'+e.src+a+'"></iframe>',l=document.createElement("div");l.id="_vip_div__",l.style.height="100%",l.innerHTML=n;var s=document.getElementById("_vip_div__");window.URL.createObjectURL={},Object.freeze(window.URL.createObjectURL);var c=document.querySelector('video[src*="blob:"]');c&&(c.src="");var d=new RegExp(window.location.protocol),r=document.querySelector(t);o?(s&&s.parentNode.removeChild(s),[].forEach.call(document.querySelectorAll(t+">*"),function(e){e.style.display="none"}),r.appendChild(l)):d.test(e.src)||/https:/.test(e.src)?r.innerHTML=n:(r.innerHTML="",r.style.background="url(https://i.loli.net/2019/01/09/5c34da3da44b9.jpg ) center /cover",window.vip_window=window.open(e.src+a,"vip_window","scrollbars=0,toolba=0"),vip_window.resizeTo(screen.availWidth,screen.availHeight))},i=function(e){var t=document.querySelector(e);t&&(t.style.display="none");var o=document.createElement("style");o.id="TipStyle",o.innerHTML=e+"{display:none!important;position:absolute!important;left:-9000vw!important;z-index:-1}",document.getElementById("TipStyle")||document.documentElement.appendChild(o)};switch(getHostname){case"v.youku.com":o("#player");break;case"www.iqiyi.com":o("#flashbox");var a=document.getElementById("vip_iframe__"),n=window.location.href.match(/curid=(\d+)/);if(n){var l=document.createElement("script");l.src="https://mixer.video.iqiyi.com/jp/mixin/videos/"+n[1],l.id="vInfo_API",vInfo_API=document.getElementById("vInfo_API"),vInfo_API?(document.head.removeChild(vInfo_API),document.head.appendChild(l)):document.head.appendChild(l),l.onload=function(){a?a.src=localStorage.Wle_Last+tvInfoJs.url:vip_window.location.href=localStorage.Wle_Last+tvInfoJs.url}}var s=document.createElement("style");s.id="hide_vip_tip",s.innerHTML='[style*="visibility"][style*="visible"][style*="absolute"]{display:none!important}',document.getElementById("hide_vip_tip")||document.head.appendChild(s);var c=setInterval(function(){var e=document.querySelectorAll('.play-list-item,.select-item,.juji-list,[data-sourcelatest-elem="list"]');e.length>0&&([].forEach.call(e,function(e){e.onclick=function(e){setTimeout(function(){var e=window.location.href.match(/curid=(\d+)/)||window._qyv_info.slice(-1)[0].match(/dataid=(\d+)/)||window._qyv_info.slice(-1)[0].match(/video\/baseinfo\/(\d+)/);e&&Q.get("https://mixer.video.iqiyi.com/jp/mixin/videos/"+e[1],function(e){a?a.src=localStorage.Wle_Last+tvInfoJs.url:window.open(localStorage.Wle_Last+tvInfoJs.url,"vip_window","width=1280,height=720,scrollbars=no,toolba=no")},"script")},2e3)}}),clearInterval(c))},500);break;case"v.qq.com":o("#mod_player"),i(".tvip_layer"),$(".mod_episode,.list_item").unbind(),$(".mod_episode,.list_item").on("click","a",function(e){window.location.href=(e.target.href||e.currentTarget.href)+"?KoolProxy=AutoVIP"});break;case"tv.sohu.com":o("#player"),i("#player_vipTips");break;case"film.sohu.com":o(".player-content");break;case"www.le.com":o("#le_playbox",1),i(".j-vipTip"),videoSrc=setInterval(function(){var e=document.querySelector("#video video");e&&"about:blank"!=e.src&&(e.src="about:blank",clearInterval(videoSrc))},500),document.addEventListener("mousedown",function(){[].forEach.call(document.querySelectorAll("[data-vid]"),function(e){e.onclick=function(t){var o=e.getAttribute("data-vid"),i=window.location.href.match(/https?:\/\/.*?vplay\//)[0]+o+".html";window.location.href=i+"?KoolProxy=AutoVIP"}})});break;case"www.mgtv.com":o("#mgtv-player-wrap"),$(".aside-videolist,.aside-tabbox").unbind(),$(".aside-videolist,.aside-tabbox").on("click","a",function(){e={},e.src=localStorage.Wle_Last,setTimeout(function(){Fuck_VIP(e)},1e3)});break;case"www.fun.tv":o("#html-video-player-layout");break;case"v.pptv.com":o("#pptv_playpage_box");break;case"vip.1905.com":o("#player")}localStorage.setItem("Wle_Last",e.src)}function Fuck_Tooltip(){var e=window.$$selectSearch||0,t=window.getSelection;if(e){var o=document.createElement("div");o.id="Fuck_Tooltip",o.style.display="none",document.addEventListener("mousedown",function(e){(e.target==o||e.target.parentNode&&e.target.parentNode==o||e.target.parentNode.parentNode&&e.target.parentNode.parentNode==o)&&e.preventDefault()}),document.addEventListener("selectionchange",function(){t().toString().trim()||(o.style.display="none")}),document.addEventListener("mouseup",function(e){if(e.target==o||e.target.parentNode&&e.target.parentNode==o||e.target.parentNode.parentNode&&e.target.parentNode.parentNode==o)return void e.preventDefault();var i=t().toString().trim();if(i&&"none"==o.style.display&&e.ctrlKey){o.style.top=e.pageY+12+"px",o.style.left=e.pageX+"px",document.querySelector("#Fuck_Tooltip")||document.documentElement.appendChild(o),o.style.display="block";try{if($$customSurl&&$$customStext)var a='<a href="'+$$customSurl.replace("%s",encodeURIComponent(i))+'" target="blank">'+$$customStext.trim()+"</a> | ";else var a=""}catch(e){var a=""}o.innerHTML=a+'<a href="https://www.baidu.com/s?wd=site%3A'+getDoamin+"%20"+encodeURIComponent(i)+'" target="_blank">本站百度</a> | <a href="https://z1.m1907.cn/?jx='+encodeURIComponent(i)+'" target="_blank">影片搜索</a><style>#Fuck_Tooltip{padding:8px;background:rgba(3, 3 , 7, 0.7);color:#FFF;border-radius:3px;box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);font-size:13px;text-align:center;line-height:13px;position:absolute;z-index:10203040}#Fuck_Tooltip a{color:#fadfa3;text-decoration:none}</style>'}else i||(o.style.display="none")})}}function checkbox_onClick(e){0==e.checked?hackplus_whitelist[e.name]=1:delete hackplus_whitelist[e.name]}function checkbox_autoVIP(e){1==e.checked?localStorage.setItem("Wle_autoVIP",1):localStorage.removeItem("Wle_autoVIP"),location.reload()}function SwitchTabs(e,t,o,i){var a=document.querySelectorAll(e),n=document.querySelectorAll(t),l=0;a.forEach(function(e,t){(function(t){e.onclick=function(){a[l].classList.remove(o),n[l].classList.remove(i),l=t,this.classList.add(o),n[t].classList.add(i)}})(t)})}function Fuck_Other(){for(var e="",t=["v.youku.com","www.iqiyi.com","v.qq.com","tv.sohu.com","film.sohu.com","www.le.com","www.mgtv.com","www.fun.tv","v.pptv.com","vip.1905.com"],o=[{n:"HTTPS通道(本页解析)",u:"https://kprules.b0.upaiyun.com/vip/vip.mini.html?vipurl="},{n:"HTTP通道(http下弹窗解析)",u:"http://kprules.b0.upaiyun.com/vip/vip.mini.html?vipurl="},{n:"关键词搜索解析(有时不太准)",u:"https://z1.m1907.cn/?jx="}],i=0;i<o.length;i++)/https:\/\//.test(o[i].u)?bgColor="#CFC":bgColor="#EEE",e=e+'<input type="button" src="'+o[i].u+'" value="'+o[i].n+'" onclick="Fuck_VIP(this)" style="background:'+bgColor+'">';if(!HackPlus__AR){document.addEventListener("keydown",function(o){var i=o||window.event||arguments.callee.caller.arguments[0],a=document.getElementById("White_List_Element"),n=document.createElement("style");n.type="text/css",n.innerHTML='#White_List_Element{user-select:none;-moz-user-select:none;-ms-user-select:none;position:fixed;bottom:50%;left:30%;z-index:10203040;overflow:visible}#White_List_Element *{overflow:visible}#White_List_Element input[type=checkbox]{width:15px;height:15px;margin:0;opacity:1;visibility:visible;display:inline-block;text-align:center;vertical-align:middle;line-height:13px;position:relative}#White_List_Element input[type=checkbox]::before{content:"";float:left;margin-top:-2px;background:#fff;width:100%;height:100%;border:1px solid #999}#White_List_Element input[type=checkbox]:checked::before{content:"✔";background-color:#fff;float:left;margin-top:-2px;width:100%;border:1px solid #1a6e00;color:#1a6e00;font-size:20px;font-weight:700}#White_List_Element input[type=button]{background:#eee;width:75px;height:25px;border:1px solid #000;float:right;line-height:normal;outline:0;cursor:pointer}#White_List_Element #_hp_c{margin-right:15px}#White_List_Element .Wle_table{width:33%;float:left}#Wle_list-title{font-size:15px;height:25px;margin:0;padding:0;list-style-type:none}.Wle_list-item{float:left;position:relative;z-index:102030;padding:0 20px;height:0;line-height:25px;color:#fff;border:0 solid transparent;border-width:0 25px 25px;border-color:transparent transparent #AAA;margin-right:-20px;opacity:.7;cursor:pointer;list-style-type:none}.Wle_list-item-checked{color:#fff;border-color:transparent transparent #3D3D3D;opacity:1;z-index:543888831}.Wle_contents{color:#000;position:absolute;left:0;top:0;width:460px;background:#FFF;font-size:15px;text-align:left;line-height:30px;margin-top:25px;padding:20px;border:0 solid #3D3D3D;border-top-width:3px;box-shadow:0 1px 3px #666;z-index:0;opacity:0;visibility:hidden}.Wle_contents-checked{z-index:102029;opacity:1;visibility:visible}#Wle_VIP input[type=button]{width:222px;margin-right:5px;overflow:hidden;text-overflow:ellipsis;float:none}#Wle_content-box input[type=button]:hover{background:#fff;border-style:dashed}#Wle_custom{border:1px solid}';var l=document.createElement("div");if(l.id="White_List_Element",l.innerHTML='<ul id="Wle_list-title"><li class="Wle_list-item Wle_list-item-checked">Hack_plus白名单</li><li id="VIP_tab" class="Wle_list-item">VIP解析</li><li class="Wle_list-item">影片搜索</li></ul><div id="Wle_content-box"><div class="Wle_contents Wle_contents-checked"><div style="border-bottom: 1px solid #666;margin-bottom: 1em">※有些网站默认添加白名单防止出问题，无法取消<br>※当前设置仅对<span style="color:#090">'+getHostname+'</span>有效</div><div class="Wle_table">全局广告-<input type="checkbox" name="wl_adv"><br>全局浮动-<input type="checkbox" name="wl_float"></div><div class="Wle_table">疑似广告-<input type="checkbox" name="wl_rai"><br>CSP白名单-<input type="checkbox" name="wl_csp"></div><div class="Wle_table">write脚本-<input type="checkbox" name="wl_wrs"><br>非同源弹窗-<input type="checkbox" name="wl_wwo"></div><div style="clear:both"></div><br><input id="_hp_s" type="button" value="确认"><input id="_hp_c" type="button" value="取消"></div><div id="Wle_VIP" class="Wle_contents"></div><div class="Wle_contents"><form action="https://z1.m1907.cn/?jx=" method="get">输入资源名：<input id="Wle_search" name="jx" type="search" style="width:65%;line-height:22px;border:1px solid;outline:0"><input name="_hp_search" type="button" value="Go!" style="width:50px;margin-top:2px"></form></div></div>',65==i.keyCode&&i.altKey||38==i.keyCode&&i.ctrlKey){a||window!=top?a&&document.body.removeChild(a):(document.body.appendChild(l),l.appendChild(n),(1==hackplus_whitelist.wl_adv||$$ADV_WLD.indexOf(getDoamin)!=-1||$$ADV_WLD.some(Fuck_testDomain))&&document.getElementsByName("wl_adv")[0].setAttribute("checked","checked"),(1==hackplus_whitelist.wl_float||$$Float_WLD.indexOf(getDoamin)!=-1||$$Float_WLD.some(Fuck_testDomain))&&document.getElementsByName("wl_float")[0].setAttribute("checked","checked"),(1==hackplus_whitelist.wl_rai||$$RAI_WLD.indexOf(getDoamin)!=-1||$$RAI_WLD.some(Fuck_testDomain))&&document.getElementsByName("wl_rai")[0].setAttribute("checked","checked"),(1==hackplus_whitelist.wl_csp||$$CSP_WLD.indexOf(getDoamin)!=-1||$$CSP_WLD.some(Fuck_testDomain))&&document.getElementsByName("wl_csp")[0].setAttribute("checked","checked"),(1==hackplus_whitelist.wl_wrs||$$WRS_WLD.indexOf(getDoamin)!=-1||$$WRS_WLD.some(Fuck_testDomain))&&document.getElementsByName("wl_wrs")[0].setAttribute("checked","checked"),(1==hackplus_whitelist.wl_wwo||$$WWO_WLD.indexOf(getDoamin)!=-1||$$WWO_WLD.some(Fuck_testDomain))&&document.getElementsByName("wl_wwo")[0].setAttribute("checked","checked")),broswer_UA.indexOf("Firefox")==-1&&broswer_UA.indexOf("rv:11")===-1&&broswer_UA.indexOf("MSIE")===-1||(document.getElementsByName("wl_csp")[0].disabled=!0);var s,c,d=document.getElementById("White_List_Element"),r=document.getElementsByClassName("Wle_contents")[0],u=function(e){null==e&&(e=window.event),d.style.left=e.clientX-s+"px",d.style.top=e.clientY-c+"px",d.offsetLeft+r.offsetWidth>window.innerWidth&&(d.style.left=window.innerWidth-r.offsetWidth+"px"),d.offsetTop+r.offsetHeight>window.innerHeight&&(d.style.top=window.innerHeight-r.offsetHeight+"px"),d.offsetTop<0&&(d.style.top="0px"),d.offsetLeft<0&&(d.style.left="0px"),d.onmousemove=d.onmouseup=null,localStorage.setItem("Wle_Top",d.offsetTop+"px"),localStorage.setItem("Wle_Left",d.offsetLeft+"px")};d.addEventListener("mouseup",function(e){var t=e||window.event||arguments.callee.caller.arguments[0],o=t.target||t.srcElement;if(/wl_/.test(o.name))return checkbox_onClick(o);if("_hp_s"===o.id)return localStorage.hackplus_whitelist=JSON.stringify(hackplus_whitelist),"{}"==JSON.stringify(hackplus_whitelist)&&localStorage.removeItem("hackplus_whitelist"),document.location.reload();if("_hp_c"===o.id)return document.body.removeChild(d);if("_hp_search"==o.name){var i=document.getElementById("Wle_search").value;return""==i?alert("关键字为空!"):window.location.href="https://z1.m1907.cn/?jx="+i}});try{d.style.top=localStorage.Wle_Top||window.innerHeight/2-r.offsetHeight/2-20+"px",d.style.left=localStorage.Wle_Left||window.innerWidth/2-r.offsetWidth/2+"px",t.indexOf(getHostname)==-1?document.querySelector("li#VIP_tab").style.display="none":(document.getElementById("Wle_VIP").innerHTML=e+'<div style="height:34px;margin:10px 0 0 0">自定义通道：<input id="Wle_custom" type="search" style="width:65%;line-height:21px;outline:0"><input name="wl_go" type="button" value="Go!" onclick="Fuck_VIP(this)" style="width:50px;margin-left:10px"></div><div style="text-align:center">自动解析：<input type="checkbox" name="wl_autoVIP" onclick="checkbox_autoVIP(this)"><span style="margin-left:20px;font-size:20px;color:#F60" title="绿色为https通道，有好用的通道欢迎提供">☢</span></div>',1==localStorage.Wle_autoVIP&&document.getElementsByName("wl_autoVIP")[0].setAttribute("checked","checked"),setTimeout(function(){document.getElementById("VIP_tab").click()},50)),document.getElementById("Wle_list-title").onmousedown=function(e){e||(e=window.event),s=e.clientX-parseInt(d.style.left),c=e.clientY-parseInt(d.style.top),document.onmousemove=u},document.onmouseup=function(){document.onmousemove=null};var m=document.getElementById("Wle_custom");m.onblur=function(){localStorage.setItem("Wle_Custom",this.value),this.src=this.value},m.value=localStorage.Wle_Custom||"",m.src=localStorage.Wle_Custom||""}catch(e){}SwitchTabs(".Wle_list-item",".Wle_contents","Wle_list-item-checked","Wle_contents-checked")}}),t.indexOf(getHostname)!=-1&&document.addEventListener("readystatechange",function(){"interactive"==document.readyState&&(1==localStorage.Wle_autoVIP||/KoolProxy=AutoVIP/.test(window.location.search))&&localStorage.Wle_Last&&"undefined"!=localStorage.Wle_Last?(history.replaceState("","",window.location.href.replace(/[\?&]KoolProxy=AutoVIP/,"")),vip={},vip.src=localStorage.Wle_Last,Fuck_VIP(vip)):"interactive"!=document.readyState||1!=localStorage.Wle_autoVIP&&!/KoolProxy=AutoVIP/.test(window.location.search)||(history.replaceState("","",window.location.href.replace(/[\?&]KoolProxy=AutoVIP/,"")),alert("没有找到上次的VIP通道，请手动选择一次"))});var a=function(e){return function(){console.error("Block "+e+" push Ad(s)")}};"baike.baidu.com"!=getHostname&&(window._SF_=[],window._SF_._global_=[],window._SF_._global_._ssp=[],Object.freeze(window._SF_),Object.freeze(window._SF_._global_),Object.freeze(window._SF_._global_._ssp),window._ssp_global=[],Object.freeze(window._ssp_global)),window.AD={},Object.freeze(window.AD),window.Ad={},Object.freeze(window.Ad),window.ad={},Object.freeze(window.ad),window.___baidu_union_={},Object.freeze(window.___baidu_union_),window.___baidu_union_ds_={},Object.freeze(window.___baidu_union_ds_),window.__delivery_global_={},Object.freeze(window.__delivery_global_),window.___delivery___global___counter___={},Object.freeze(window.___delivery___global___counter___),window.cproArray={},window.cproArray.push=a("Baidu"),Object.freeze(cproArray),window.arrBaiduAds={},window.arrBaiduAds.push=a("Baidu"),Object.freeze(arrBaiduAds),window.slotbydup={},window.slotbydup.push=a("Baidu SSP"),window.adsbygoogle={},window.adsbygoogle.push=a("Google"),Object.freeze(window.adsbygoogle),window._qha_data={},Object.freeze(window._qha_data),window.sinaads={},Object.freeze(window.sinaads),window.sogou_un={},Object.freeze(window.sogou_un)}}var inHackcss={C:function(e,t){var o=document.createElement("style");if(o.type="text/css",o.innerHTML=e,"h"==t)document.head.appendChild(o);else try{document.body.appendChild(o)}catch(e){window.addEventListener("load",function(){document.body.appendChild(o)})}},S:function(e,t){[].forEach.call(document.querySelectorAll(e),function(e){e.style.cssText+=t});var o=new XxX_MutationObserver(function(){[].forEach.call(document.querySelectorAll(e),function(e){e.style.cssText+=t})});o.observe(document.documentElement,{childList:!0,subtree:!0})}},unHackcss={css:"display:block!important;max-width:none!important;max-height:none!important;overflow:auto!important;",A:function(e){inHackcss.S(e,this.css+"position:relative;left:auto")}},XxX_MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,hackplus_whitelistJSON=localStorage.hackplus_whitelist||"{}",hackplus_whitelist=JSON.parse(hackplus_whitelistJSON),broswer_UA=navigator.userAgent,getDoamin=window.HackPlus_getMainHost||window.location.host,getHostname=window.location.host,hackplus_debug=hackplus_debug||0,$$All_W=$$All_W||["2345.com","123.sogou.com"],$$CSP_W=$$CSP_W||[],$$WRS_W=$$WRS_W||["51cto.com"],$$WWO_W=$$WWO_W||[],$$RAI_W=$$RAI_W||[],$$ADV_W=$$ADV_W||["autohome.com.cn","hao123.com","hao.qq.com","huanqiu.com"],$$Float_W=$$Float_W||[],$$ALL_WLD=["189.cn","10010.com","10086.cn","weibo.com","weiyun.com","cloud.tencent.com","aliyun.com","mail.qq.com","vnc-su.bce.baidu.com"],$$WRS_WLD=["bbs.nga.cn","kankan.com","qq.com","ext.chrome.360.cn","nba.com","www.smzdm.com"],$$WWO_WLD=["bilibili.com","douyu.com","www.v2ex.com","youku.com","image.baidu.com"],$$CSP_WLD=["baidu.com","google.com","iqiyi.com","youtube.com","www.onlytvb.com","qq.com"],$$RAI_WLD=["youku.com","image.baidu.com","qq.com","vod.kankan.com","jsdelivr.com","m1907.cn"],$$ADV_WLD=["moe.gov.cn","assrt.net","www.google.","ohmanhua.com","cocomanhua.com"],$$Float_WLD=["youku.com","pptv.com","le.com","mgtv.com","iqiyi.com","xianliao.me","bilibili.com","onedns.net","bbs.maxthon.cn","ynet.com","www.dysfz.vip","onetvb.com","hao.centbrowser.cn"],HrefCss="",HrefImgCss="",Hide9Css=[];$$ALL_WLD.push.apply($$ALL_WLD,$$All_W,$$CSP_W),$$WRS_WLD.push.apply($$WRS_WLD,$$ALL_WLD),$$WRS_WLD.push.apply($$WRS_WLD,$$WRS_W),$$WWO_WLD.push.apply($$WWO_WLD,$$ALL_WLD),$$WWO_WLD.push.apply($$WWO_WLD,$$WWO_W),$$CSP_WLD.push.apply($$CSP_WLD,$$ALL_WLD),$$CSP_WLD.push.apply($$CSP_WLD,$$CSP_W),$$RAI_WLD.push.apply($$RAI_WLD,$$ALL_WLD),$$RAI_WLD.push.apply($$RAI_WLD,$$RAI_W),$$ADV_WLD.push.apply($$ADV_WLD,$$ALL_WLD),$$ADV_WLD.push.apply($$ADV_WLD,$$ADV_W),$$Float_WLD.push.apply($$Float_WLD,$$ALL_WLD),$$Float_WLD.push.apply($$Float_WLD,$$Float_W);var FloatArraw=['[style*="fixed"][style*="bottom: 0"][style*="right"]','[style*="fixed"][style*="bottom:0"][style*="right"]','[style*="fixed"][style*="bottom: 0"][style*="left"]','[style*="fixed"][style*="bottom:0"][style*="left"]:not([id$="Clipper"]):not([class*="player"]):not([id*="player"]):not([id*="idebar"]):not([class*="idebar"]):not(pageslide)'];$$Float_WLD.indexOf(getDoamin)!=-1||$$Float_WLD.some(Fuck_testDomain)||1==hackplus_whitelist.wl_float?FloatCssList="KoolProxy,":FloatCssList=FloatArraw.join(':not([id$="Clipper"]):not([class*="player"]):not([id*="player"]):not([id*="idebar"]):not([class*="idebar"]):not(pageslide),')+",KoolProxy,";for(var AdvHref=["ssp.360.cn/","/union/","union-click.jd.com","sale.jd.com/act/","x.jd.com","item.jd.com","union.dangdang.com","p.gouwubang.com","union.vip.com","p.egou.com","/?zoneid","s.click.taobao.com","temai.m.taobao.com","item.taobao.com","ai.taobao.com","admaster.com","?Intr=","click?adid=","ads_id=","bzclk.baidu.com/ad","click.aliyun.com","i/?cid=","/ad.html","/ad/","isxzq=1","gad.netease.com","click.suning.cn",".html?userCode="],i=0;i<AdvHref.length;i++)HrefCss=HrefCss+'a[href*="'+AdvHref[i]+'"],';for(var AdvHrefImg=["upaiyun.com","tiimg.com","ax1x.com","chuantu.biz","pic68.com","picb.cc","fuimg.com","i.loli.net","ouliu.net/i/","panfile.duiai.cc"],i=0;i<AdvHrefImg.length;i++)HrefImgCss=HrefImgCss+'a[target="_blank"]:not([href*="'+getDoamin.split(".")[0]+'."]):not([href^="/"]):not([href*="'+AdvHrefImg[i]+'"])>img[src*="'+AdvHrefImg[i]+'"]:not([class*="thumb"]),';for(var Hide9Array=["#ad","#ads","#adv",".ad",".ads",".adv",".ad-",".thea"],i=0;i<Hide9Array.length;i++)for(var x=1;x<=9;x++)Hide9Css.push(Hide9Array[i]+x);Hide9Css.unshift.apply(Hide9Css,Hide9Array),Hide9Css=Hide9Css.join(",");var AdvArraw=[HrefCss+HrefImgCss+Hide9Css,'a[target="_blank"]:not([href*="'+getDoamin.split(".")[0]+'."]):not([href^="/"]):not([href^="forum.php"]):not([href^="thread"]):not([href*="weibo.com"]):not([href*="sinaimg.cn"])>img[src*="sinaimg.cn"]:not([class*="thumb"])','a[target="_blank"]:not([href*="'+getDoamin.split(".")[0]+'."]):not([href^="/"]):not([href*="so.com"]):not([href*="360.cn"]):not([href*="i360mall.com"])>img[src*="qhimg.com"]:not([class*="thumb"])','a[target="_blank"]:not([href*="'+getDoamin+'"]):not([href^="/"]):not(.irc_mil)>img[style][src$=".gif"]:not([class*="thumb"])','a[target="_blank"]:not([href*="'+getDoamin+'"]):not([href^="/"])>img[width="100%"][src$=".gif"]:not([class*="thumb"])','a[target="_blank"][style*="width:100%"]:not([href*="'+getDoamin+'"])>img[src*=".gif"]:not([class*="thumb"])','body>a[target="_blank"]:not([href*="'+getDoamin+'"]):not([href^="/"])','a[target][rel*="noopener"]:not([href*="'+getDoamin+'"]) img:not([src*="'+getDoamin+'"]):not([src^="data"]):not([onload]):not([class*="thumb"])','a[href*="utm_source="][target]:not([href*="'+getDoamin+'"])','a[href*=")_"][href$=".exe"],a[href^="undefined"],a[href*="adclick"][target],a[href*="adClick"][target],a[href*="ad_click"],a[target][rel*="nofollow"][rel*="noopener"][rel*="noreferrer"]>img,a[href*="go.gotourls.bid"][target][style],a[href*="cloud.tencent.com"][href*="fromSource"],a[onclick*="Piwik"],[data-href*="mediav.com/s?"],center>a[target="_blank"],a[href*="?aff="]>img[src$=".gif"],a[href*="?a="]>img[src$=".gif"],a[href*="@"][href$="exe"],a[href*="@"][href*="_"][rel*="nofollow"],a[href*="@"][href*="_"][class],a[href*="@"][href*="_"][id],a[target="_blank"][style*="21474836"][style*="opacity"]','iframe[src*="/click/"],iframe[src*="ad_ids"],iframe[src*="pos.baidu.com"],iframe[src*="360buyimg.com"][src*="ad_ids"],iframe[src*="/ads?"],iframe[src*="v.php?id="],iframe[src*="s.php?id="],iframe[src*="/ad/"],iframe[src*="adurl"][src*="type="]','*.cpro:not(body),[class*="hongbao"],[class*="tuiguang"],[class*="guanggao"],.adsbygoogle,.sinaads,[class*="google-ad"],script[src*="u-x.jd.com"]+div[style*="width"][style*="height"],img[src*="/ad/"]:not([src*="attachment"]):not([src*="iqiyipic.com"]):not([src^="//"]),[node-type="sogou-hot-words"],[id^="cpm"],[onclick*="push"][onclick*="_ad"],.ad-download,.download-ad,#jdAdBox,[class^="ADTOPLB_"],ins[id^="aswift"],div[id^="_"][style*="214748364"],div[id^="_"][style="width: 100%;"]>iframe,[id^="BAIDU_"],[node-type^="ad"]','.img_click_gg,.wrap-ad,div[class*="xzbox-ad"],div[class*="xzbox-gg"],div[class*="soft_gg"]','.a_c,.a_cb,.a_cn,.a_t,.a_p,.a_pr,.a_f,.a_h,.a_pb,.a_mu,.a_pt,.a_fl,.a_fr,[class*="a_hh_"],.mn>table[style],.mn>*:not(.kk):not(.drag):not(#study_nge_div) table[style],#diynavtop table[style]','.gg,[class^="gg1"],[class^="gg2"],[class^="gg3"],[class^="gg4"],[class^="gg5"],[class^="gg6"],[class^="gg7"],[class^="gg8"],[class^="gg9"],[id^="gg_"],[id$="_gg"],[class^="gg_"]:not([class*="_content"]):not([class^="gg_cnt"]),[id^="ad_"],[id$="_ad"],[class^="ad_"],[class$="_ad"]:not(.gb_ad),[class^="Ad_"],[class$="_Ad"],[class^="AD_"],[class$="_AD"],[class^="ad-"],[class^="Ad-"],[class$="-Ad"],[class^="AD-"],[class$="-AD"],[class^="adver"],[class*="advert"]','[id*="_ad_"],[class*="_ad_"],[id*="_ads"],[id*="-ads"]:not([class*="live"]),[class*="_ads"]:not(html):not(body),[class*="-ads"],[id*="_adv"]:not([id^="e_adv"]),[id*="-adv"]:not([id*="setting"]),[class*="_adv"],[class*="-adv"]:not([class*="setting"])','[class*="banner_ad"],[class*="banner_ad"],[class*="banner-ad"],[id^="adBox"],[id^="AdBox"],[id^="ADbox"],[id^="ad-box"],.ad-box,.adbox,.advbox,.advBox','[class*="ad_header"],[class*="ad_footer"],[class*="ad_text"]:not([class*="head_"]),[id^="ad_header"],[id^="ad_footer"],[id^="ad_text"],[class*="ad-header"]:not([class*="upload"]):not([class*="add"]):not([class*="read"]),[class*="ad-footer"],[class*="ad-text"],[id^="ad-header"],[id^="ad-footer"],[id^="ad-text"]','[class*="header_ad"],[class*="footer_ad"],[class*="text_ad"],[id^="header_ad"],[id^="footer_ad"],[id^="text_ad"],[class*="header-ad"],[class*="footer-ad"],[class*="text-ad"],[id^="header-ad"],[id^="footer-ad"],[id^="text-ad"]','[class*="ads_header"],[class*="ads_footer"],[class*="ads_text"],[id^="ads_header"],[id^="ads_footer"],[id^="ads_text"],[class*="ads-header"],[class*="ads-footer"],[class*="ads-text"],[id^="ads-header"],[id^="ads-footer"],[id^="ads-text"]','[class*="ad_head"]:not([class*="upload"]):not([class*="add"]):not([class*="read"]),[class*="ad_foot"],[id^="ad_head"],[id^="ad_foot"],[class*="ad-head"]:not([class*="upload"]):not([class*="add"]):not([class*="read"]),[class*="ad-foot"],[id^="ad-head"],[id^="ad-foot"]','[class*="head_ad"],[class*="foot_ad"],[id*="head_ad"],[id*="foot_ad"],[class*="head-ad"],[class*="foot-ad"],[id^="head-ad"],[id^="foot-ad"]','[class*="adtop"],[class*="adleft"],[class*="adright"],[class*="adbottom"],[id^="adtop"],[id^="adleft"],[id^="adright"],[id^="adbottom"],[class*="topad"],[class*="leftad"],[class*="rightad"],[class*="bottomad"],[id^="topad"],[id^="leftad"],[id^="rightad"],[id^="bottomad"]','[class*="advtop"],[class*="advleft"],[class*="advright"],[class*="advbottom"],[id^="advtop"],[id^="advleft"],[id^="advright"],[id^="advbottom"],[class*="topadv"],[class*="leftadv"],[class*="rightadv"],[class*="bottomadv"],[id^="topadv"],[id^="leftadv"],[id^="rightadv"],[id^="bottomadv"]','[class*="Adtop"],[class*="Adleft"],[class*="Adright"],[class*="Adbottom"],[id^="Adtop"],[id^="Adleft"],[id^="Adright"],[id^="Adbottom"],[class*="topAd"],[class*="leftAd"],[class*="rightAd"],[class*="bottomAd"],[id^="topAd"],[id^="leftAd"],[id^="rightAd"],[id^="bottomAd"]','[class*="Advtop"],[class*="Advleft"],[class*="Advright"],[class*="advbottom"],[id^="Advtop"],[id^="Advleft"],[id^="Advright"],[id^="Advbottom"],[class*="topAdv"],[class*="leftAdv"],[class*="rightAdv"],[class*="bottomAdv"],[id^="topAdv"],[id^="leftAdv"],[id^="rightAdv"],[id^="bottomAdv"]','.ads-top,.ads-left,.ads-right,.ad-top,.ad-left,.ad-right,[id^="ad-top"],[id^="ad-left"],[id^="ad-right"],.ad_top,.ad_left,.ad_right,[id^="ad_top"],[id^="ad_left"],[id^="ad_right"],.adv_top,.adv_left,.adv_right,[id^="adv_top"],[id^="adv_left"],[id^="adv_right"],.adv-top,.adv-left,.adv-right,[id^="adv-top"],[id^="adv-left"],[id^="adv-right"]','.top_ad,.left_ad,.right_ad,.bottom_ad,.top-ad,.left-ad,.right-ad,.bottom-ad,[id^="top_ad"],[id^="left_ad"],[id^="right_ad"],[id^="bottom_ad"],[id^="top-ad"],[id^="left-ad"],[id^="right-ad"],[id^="bottom-ad"]'];$$ADV_WLD.indexOf(getDoamin)!=-1||$$ADV_WLD.some(Fuck_testDomain)||1==hackplus_whitelist.wl_adv?AdvCssList="KoolProxy":AdvCssList=AdvArraw.join(",")+",KoolProxy";var HackPlus__AR=HackPlus__AR||!1,Css_style="{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;position:absolute;left:-102030px}",hidecss_plus=FloatCssList+AdvCssList+Css_style;Fuck_css(hidecss_plus.replace(/function.*?},/gi,"")),AdvArraw=FloatArraw=AdvHref=HrefCss=AdvHrefImg=HrefImgCss=Hide9Array=Hide9Css=hidecss_plus=null,broswer_UA.indexOf("rv:11")==-1&&broswer_UA.indexOf("MSIE")==-1&&(navigator.mediaDevices.getUserMedia=navigator.webkitGetUserMedia=navigator.mozGetUserMedia=navigator.getUserMedia=webkitRTCPeerConnection=RTCPeerConnection=void 0);var HackPlus__AR=!0;
