window.yiclear_onLoad = function(func) {
	if (window.addEventListener) {
		window.addEventListener('DOMContentLoaded', func);
	}
};
yiclear_onLoad(function() {
	YiClear_defineProperty('QiyiPlayerLoader.manager.players.flashbox.package.ad.adMap', {
		get: function() {
			return;
		}
	});
})
yiclear_onLoad(function() {
	var _setinterval = window.setInterval;
	window.setInterval = function(a, b) {
		var str = a.toString();
		if (str.indexOf("timerComplete") > 0) {
			return _setinterval(a, 1)
		}
		return _setinterval(a, b)
	};
});

/*Built by pcw player group @12/26/2019, 8:13:56 PM */ ! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.QiyiPlayerLoader = t()
}(this, function() {
	"use strict";
	var extendStatics = function(e, t) {
		return (extendStatics = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
			})(e, t)
	};

	function __extends(e, t) {
		function a() {
			this.constructor = e
		}
		extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
	}
	var onlineUrl = {
			"wonder.data.pc": "//static.iqiyi.com/js/player_v2/wonder.data.pc.680d74ac.js",
			"wonder.http.mobile": "//static.iqiyi.com/js/player_v2/wonder.http.mobile.2024bb96.js",
			"skin.pc": "//static.iqiyi.com/js/player_v2/skin.pc.ff759c34.js",
			"skin.mobile": "//static.iqiyi.com/js/player_v2/skin.mobile.2024bb96.js",
			"p2p.abs": "//static.iqiyi.com/js/player_v2/565b19851417.js",
			FLASH_PLAYER_URL: "//www.iqiyi.com/player_v2/flashplayer/20191205/6af57dfc1840.swf",
			FLASH_PLAYER_ZURL: "//www.iqiyi.com/player_v2/flashplayer/20191205/906490701840.swf",
			FLASH_P2P_URL: "//www.iqiyi.com/common/flashplayer/20180620/14002a1b82aa.swf",
			FLASH_BARRAGE_URL: "//www.iqiyi.com/common/flashplayer/20180810/0949c72eeb6.swf",
			FLASH_PRELOADER_URL: "//www.iqiyi.com/common/flashplayer/20190719/23215aa9a57.swf",
			FLASH_PRELOADER_URL_TW: "//www.iqiyi.com/common/flashplayer/20180529/1508c9cdf8a4.swf",
			FLASH_PRELOADER_VIP: "//www.iqiyi.com/common/flashplayer/20190719/232184b0df09.swf",
			FLASH_PRELOADER_VIP_TW: "//www.iqiyi.com/common/flashplayer/20171129/1530df83b9a5.swf",
			FLASH_PRELOADER_PRODUCE: "//www.iqiyi.com/common/flashplayer/20190719/2321561520f8.swf",
			FLASH_PRELOADER_PRODUCE_TW: "//www.iqiyi.com/common/flashplayer/20180529/15085e1d0a85.swf",
			FLASH_PRELOADER_EXCLUSIVE: "//www.iqiyi.com/common/flashplayer/20190719/232121793893.swf",
			FLASH_PRELOADER_EXCLUSIVE_TW: "//www.iqiyi.com/common/flashplayer/20180529/1508dc809b19.swf",
			FLASH_PRELOADER_ICON: "//www.iqiyi.com/common/flashplayer/20171129/1530c314a0aa.swf",
			FLASH_PRELOADER_ICON_TW: "//www.iqiyi.com/common/flashplayer/20171129/15307da15813.swf",
			FLASH_PRELOADER_ICON_PRODUCE: "//www.iqiyi.com/common/flashplayer/20171129/1530925a82d4.swf",
			FLASH_PRELOADER_ICON_PRODUCE_TW: "//www.iqiyi.com/common/flashplayer/20171129/1530151837af.swf",
			FLASH_PRELOADER_ICON_EXCLUSIVE: "//www.iqiyi.com/common/flashplayer/20171129/153013651bd2.swf",
			FLASH_PRELOADER_ICON_EXCLUSIVE_TW: "//www.iqiyi.com/common/flashplayer/20171129/153077057f2.swf",
			FLASH_TIP_XML: "//static-s.iqiyi.com/ext/common/Tipdatavod_201809131013.xml",
			"skin.pc.mini": "//static.iqiyi.com/js/player_v2/skin.pc.mini.ff759c34.js"
		},
		grayConfig = {
			id: "",
			channelIds: [],
			index: "",
			eq: "",
			st: "",
			ed: "",
			url: {}
		};

	function mixin(a, e, r, n) {
		function i(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}

		function t(e, t) {
			var a;
			for (a in e)
				if (i(e, a) && t(e[a], a)) break
		}
		return e && t(e, function(e, t) {
			!r && i(a, t) || (n && "string" != typeof e && "boolean" != typeof e ? (a[t] || (a[t] = {}), mixin(a[t], e, r, n)) : a[t] = e)
		}), a
	}
	var licked = {},
		cookie = {
			get: function(e, t) {
				var a = "";
				if ((t = mixin({
					memory: !1
				}, t, !0)).memory && licked.hasOwnProperty(e)) a = licked[e];
				else {
					if (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)) {
						var r, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie);
						n && (a = n[2] || "")
					}
					"string" == typeof a && (a = decodeURIComponent(a)), t.memory && (licked[e] = a)
				}
				return a
			},
			set: function(e, t, a) {
				a = a || {}, t = encodeURIComponent(t);
				var r = a.expires;
				"number" == typeof a.expires && (r = a.expires <= 0 ? new Date(0) : new Date).setTime(r.getTime() + a.expires), delete licked[e], document.cookie = e + "=" + t + (a.path ? "; path=" + a.path : "") + (r ? "; expires=" + r.toUTCString() : "") + (a.domain ? "; domain=" + a.domain : "")
			},
			remove: function(e, t) {
				(t = t || {}).expires = -1, this.set(e, "", t)
			}
		};

	function platform() {
		var e = "",
			l = {},
			c = {},
			t = navigator,
			a = t.platform,
			r = t.userAgent.toLowerCase(),
			n = r.match(/rtrident/),
			i = !n && r.match(/(ipad).*os\s([\d_]+)/),
			o = !n && !i && r.match(/(iphone\sos)\s([\d_]+)/),
			s = r.match(/Android\s+([\d.]+)/i),
			p = "",
			d = "";
		if (d = navigator.connection && navigator.connection.effectiveType ? navigator.connection.effectiveType : (d = r.match(/NetType\/\w+/) ? r.match(/NetType\/\w+/)[0] : "").toLowerCase().replace("nettype/", ""), c.userAgent = r, c.IE11 = /rv\:11/.test(r), c.IE = /msie/.test(r) || c.IE11, c.IE6 = /msie 6/.test(r), c.IE7 = /msie 7/.test(r), c.IE8 = /msie 8/.test(r), c.IE9 = /msie 9/.test(r), c.IE10 = /msie 10/.test(r), c.EDGE = /edge/.test(r), c.iPhone = /iphone os/.test(r) && !n, c.iPhone4 = /iphone os [45]_/.test(r) && !n, c.iPad = /ipad/.test(r) && !n, c.iPod = /iPod/i.test(r) && !n, c.isTouch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, c.CHROMEIOS = /crios/.test(r), c.CHROME = /chrome/.test(r) && !c.EDGE, c.SAFARI = /safari/.test(r) && !/chrome/.test(r), c.FIREFOX = /firefox/.test(r), c.mobile = /mobile/gi.test(r), c.mobileSafari = c.iPhone || c.iPhone || c.iPad, c.QQ = /QQBrowser/gi.test(r), c.WECHAT = /(wechat)|(micromessenger)/gi.test(r), c.CHROME) {
			var f = /chrome\/([\d\.]+) /gi.exec(r);
			c.version = f ? parseInt(f[1], 10) : 0
		}
		if (c.EDGE) {
			var _ = /edge\/([\d\.]+)/gi.exec(r);
			c.version = _ ? parseInt(_[1], 10) : 0
		}
		var u = /mac/i.test(a),
			y = "X11" == a && !u,
			h = /win/i.test(a) && !y,
			m = /android/.test(r);
		l.unix = y, l.win = h, l.mac = u, l.android = m, l.androidMobile = m && c.mobile, l.androidTablet = m && (!c.mobile || /pad/i.test(r)), s && (l.version = s[1]), l.ios = !1, o && (l.ios = !0, l.version = o[2].replace(/_/g, ".")), i && (l.ios = !0, l.version = i[2].replace(/_/g, ".")), c.iPod && (l.ios = !0), e = c.iPad ? "b85da1cf3ae44351" : "b6c13e26323c537d";
		var E = function(e) {
				var t = "01";
				(c.iPhone || l.android) && (t = "02"), (c.iPad || l.androidTablet) && (t = "03");
				var a = "01",
					r, n, i, o, s;
				return l.android && (a = "02"), l.mac && (a = "08"), l.ios && (a = e ? "03" : "02"), t + a + "003" + "101" + "00" + (e ? "10" : "00") + "000000"
			},
			g = function(e) {
				return p || E(e)
			},
			P = function(e) {
				p = e
			},
			A = function(e) {
				var t = 1,
					a;
				switch (g(e).substr(0, 4)) {
					case "0108":
						t = 276;
						break;
					case "0303":
						t = 10;
						break;
					case "0302":
						t = 11;
						break;
					case "0203":
						t = 13;
						break;
					case "0202":
						t = 12
				}
				return t
			},
			v = function() {
				var e = "";
				return c.CHROME ? e = "CHROME" : c.SAFARI ? e = "SAFARI" : c.FIREFOX ? e = "FIREFOX" : c.QQ ? e = "QQ" : c.WECHAT ? e = "WECHAT" : c.IE ? e = "IE" : c.IE6 ? e = "IE6" : c.IE7 ? e = "IE7" : c.IE8 ? e = "IE8" : c.IE9 ? e = "IE9" : c.IE10 ? e = "IE10" : c.EDGE ? e = "EDGE" : c.mobileSafari ? e = "mobileSafari" : l.ios ? e = "ios" : l.ios ? e = "ios" : l.androidMobile ? e = "androidMobile" : l.androidTablet && (e = "androidTablet"), e
			},
			L = r.match(/miuivideo\//i) || l.android && 4 < parseInt(l.version) && r.match(/MiuiBrowser/i),
			T = c.iPad || c.iPhone || l.android && 4 < parseFloat(l.version) || L ? "m3u8" : "mp4";
		return /__pmode__=m3u8/.test(window.location.href) ? T = "m3u8" : /__pmode__=mp4/.test(window.location.href) && (T = "mp4"), {
			browser: c,
			os: l,
			code: e,
			getPtid: g,
			setPtid: P,
			getAgentType: A,
			browserName: v,
			network: d,
			playerMode: T
		}
	}
	var platform$1 = platform();

	function seriesLoadScripts(t, a) {
		"object" != typeof t && (t = [t]);
		var r = document.getElementsByTagName("head").item(0) || document.documentElement,
			n = [],
			i = t.length - 1,
			o = function(e) {
				n[e] = document.createElement("script"), n[e].setAttribute("type", "text/javascript"), n[e].onload = n[e].onreadystatechange = function() {
					this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (this.onload = this.onreadystatechange = null, this.parentNode.removeChild(this), e != i ? o(e + 1) : "function" == typeof a && a(!0))
				}, n[e].onerror = n[e].onstalled = function() {
					"function" == typeof a && a(!1)
				}, n[e].setAttribute("src", t[e]), r.appendChild(n[e])
			};
		o(0)
	}
	var data = {},
		changeData = {},
		deleteData = {},
		tMark = 0,
		storage = {
			getItem: function(e) {
				return data[e]
			},
			setItem: function(e, t) {
				data[e] = t
			},
			removeItem: function(e) {
				delete data[e]
			}
		},
		ls = function() {
			try {
				return window.localStorage.setItem("_Q_test_", 1), window.localStorage.removeItem("_Q_test_"), window.localStorage
			} catch (e) {}
			return storage
		}(),
		updateStorage = function() {
			0 === tMark && (clearTimeout(tMark), tMark = setTimeout(function() {
				for (var e in tMark = 0, changeData) ls.setItem(e, changeData[e]), delete changeData[e];
				for (var t in deleteData) ls.removeItem(t), delete deleteData[e]
			}, 1e3))
		},
		storage$1 = {
			PLAYER_VD_KEY: "QiyiPlayerVD",
			read: function(e) {
				return data[e] || (data[e] = ls.getItem(e)), data[e]
			},
			write: function(e, t) {
				data[e] = t, changeData[e] = t, updateStorage()
			},
			remove: function(e) {
				delete data[e], deleteData[e] = 0, updateStorage()
			}
		},
		loggerMessageChanged = !1,
		LOGGER_MESSAGE = "",
		LOGGER_KEY = "QiyiPlayerLogger",
		LOGGER_LEVEL_KEY = "QiyiPlayerLoggerLevel",
		COLOR_BG_NORMAL = "#FFA500",
		COLOR_BG_WARN = "#ff6cb7",
		COLOR_BG_ERROR = "#F30",
		COLOR_BG_DEBUG = "#FFA500",
		Levels = {
			OFF: {
				value: 0,
				name: "OFF"
			},
			ERROR: {
				value: 1,
				name: "ERROR"
			},
			WARN: {
				value: 2,
				name: "WARN"
			},
			INFO: {
				value: 3,
				name: "INFO"
			},
			DEBUG: {
				value: 4,
				name: "DEBUG"
			}
		},
		filterLevelInStore = parseInt(storage$1.read(LOGGER_LEVEL_KEY), 10),
		slice = Array.prototype.slice,
		prelogInfo = "",
		repeatNum = 0,
		prelog = "",
		pad = function(e, t) {
			var a = "",
				r = e < 0,
				n = String(Math.abs(e));
			return n.length < t && (a = new Array(t - n.length + 1).join("0")), (r ? "-" : "") + a + n
		},
		timeLabel = function() {
			var e = new Date;
			return e.getFullYear() + "-" + pad(e.getMonth() + 1, 2) + "-" + pad(e.getDate(), 2) + " " + pad(e.getHours(), 2) + ":" + pad(e.getMinutes(), 2) + ":" + pad(e.getSeconds(), 2) + (e.getMilliseconds ? "." + pad(e.getMilliseconds(), 3) : "")
		},
		checkrepeat = function(e) {
			var t = e.join("");
			prelog !== t ? (prelog = t, repeatNum = 0) : (1 < ++repeatNum && (LOGGER_MESSAGE = (LOGGER_MESSAGE = LOGGER_MESSAGE.replace(prelogInfo, "")).substring(0, LOGGER_MESSAGE.length - 2)), e.push(">>repeat(" + repeatNum + ")<<"))
		},
		logHandler = function(e, t) {
			var a, r = COLOR_BG_NORMAL;
			if (e = slice.call(e), checkrepeat(e), e.unshift("%c"), e.unshift("[" + t.name + "]"), e.unshift("%c[" + timeLabel() + " IQIYI_PLAYER_" + t.level.name + "]"), t.level !== Levels.DEBUG) {
				prelogInfo = e.join("").replace(/(%c|IQIYI_PLAYER_)/gi, "");
				var n = LOGGER_MESSAGE || "";
				LOGGER_MESSAGE = ("" !== n ? n + "\n" : "") + prelogInfo, loggerMessageChanged = !0
			}
			if ("undefined" != typeof console) try {
				a = console.log, t.level === Levels.WARN && console.warn ? (a = console.warn, r = COLOR_BG_WARN) : t.level === Levels.ERROR && console.error ? (a = console.error, r = COLOR_BG_ERROR) : t.level === Levels.INFO && console.info ? a = console.info : t.level === Levels.DEBUG && console.debug && (a = console.debug, r = COLOR_BG_DEBUG), t.print && a.apply(console, [e.join(" ") + " ", "background-color:#699f00;color:#fff;", "background-color:" + r + ";color:#fff;"])
			} catch (i) {}
		},
		PlayerLogger = (fb.stringify = function(e) {
			var t = "";
			try {
				t = JSON.stringify(e)
			} catch (a) {}
			return t
		}, fb.setLevel = function(e) {
			e && "value" in e && (fb._filterLevel = e, storage$1.write(LOGGER_LEVEL_KEY, e.value))
		}, fb.getLevel = function() {
			if (!fb._filterLevel) {
				var e = Levels.WARN;
				for (var t in Levels) Levels[t].value === filterLevelInStore && (e = Levels[t]);
				fb._filterLevel = e
			}
			return fb._filterLevel
		}, fb.getLog = function() {
			return LOGGER_MESSAGE
		}, fb.saveImmediately = function() {
			writeLogInstantly()
		}, fb.prototype.enabledFor = function(e) {
			return e.value <= fb.getLevel().value
		}, fb.prototype.invoke = function(e, t) {
			logHandler(t, mixin({
				level: e,
				print: this.enabledFor(e)
			}, this.context))
		}, fb.prototype.debug = function() {
			this.invoke(Levels.DEBUG, arguments)
		}, fb.prototype.log = function() {
			this.invoke(Levels.INFO, arguments)
		}, fb.prototype.info = function() {
			this.invoke(Levels.INFO, arguments)
		}, fb.prototype.warn = function() {
			this.invoke(Levels.WARN, arguments)
		}, fb.prototype.error = function() {
			this.invoke(Levels.ERROR, arguments)
		}, fb);

	function fb(e) {
		this.context = {
			name: e || "Unknown"
		}
	}
	PlayerLogger.Levels = Levels;
	var period = 3e4,
		M = 1048576,
		limitSize = .5 * M;

	function truncateLog(e, t) {
		var a = "\n",
			r, n = LOGGER_MESSAGE.split(a).slice(0, 6).join(a) + a + "~~~~~truncated log~~~~~" + a;
		LOGGER_MESSAGE = n + LOGGER_MESSAGE.slice(n.length < e ? e : n.length, t)
	}

	function writeLogInstantly() {
		var e = LOGGER_MESSAGE.length;
		limitSize < e && truncateLog(e - limitSize, e), storage$1.write(LOGGER_KEY, LOGGER_MESSAGE)
	}

	function cronLogIntoStore() {
		loggerMessageChanged && (loggerMessageChanged = !1, writeLogInstantly()), setTimeout(cronLogIntoStore, period)
	}
	setTimeout(cronLogIntoStore, period);
	var _parse = function(e) {
			var t = "",
				a = "",
				r = "",
				n = "",
				i = /(\w+):\/\/([^\/:]+):?(\d*)((?:\/|$)[^?#]*)/,
				o = e.match(i);
			return o && (t = o[1], a = o[2], r = o[3], n = o[4]), {
				protocol: t,
				host: a,
				port: r,
				path: n
			}
		},
		_queryToJson = function(e) {
			for (var t, a = e.substr(e.lastIndexOf("?") + 1).split("&"), r = a.length, n = {}, i = 0, o, s, l, c; i < r; i++) a[i] && (o = (c = a[i].split("=")).shift(), s = c.join("="), void 0 === (l = n[o]) && (n[o] = s));
			return n
		},
		_getQueryValue = function(e, t) {
			1 === arguments.length && (t = e, e = window.location.href);
			var a = String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1"),
				r = new RegExp("(^|&|\\?|#)" + a + "=([^&#]*)(&|$|#)", ""),
				n = e.match(r);
			return n ? n[2] : ""
		},
		_filename = function(e) {
			var t = _parse(e),
				a;
			return (t && t.path || "").replace(/^.*[\\\/]/, "").split(".")[0]
		},
		urlkit = {
			parse: _parse,
			query: _getQueryValue,
			query2Json: _queryToJson,
			filename: _filename
		},
		CON_TYPE = {
			PlayerType_Html5VOD: "h5_VOD",
			PlayerType_FlashVOD: "flash_VOD",
			PlayerType_Null: "null",
			QYPLAYER_STATUS_LOAD_MOVIE: "loadmovie",
			QYPLAYER_STATUS_DATA_READY: "dataready",
			QYPLAYER_STATUS_AD_START_PLAY: "adstartplay",
			QYPLAYER_STATUS_AD_PLAYING: "adplaying",
			QYPLAYER_STATUS_AD_PAUSED: "adpaused",
			QYPLAYER_STATUS_AD_RESUMED: "adresumed",
			QYPLAYER_STATUS_READY: "ready",
			QYPLAYER_STATUS_START_PLAY: "startplay",
			QYPLAYER_STATUS_SEEKING: "seeking",
			QYPLAYER_STATUS_WAITING: "waiting",
			QYPLAYER_STATUS_PAUSED: "paused",
			QYPLAYER_STATUS_PLAYING: "playing",
			QYPLAYER_STATUS_STOPED: "stoped",
			QYPLAYER_STATUS_ERROR: "error",
			QYPLAYER_STATUS_END_PLAY: "endplay",
			QYPLAYER_LOAD_COMPLETE: "loadcomplete",
			QYPLAYER_LOAD_SUCCESS: "playerLoadSuccess",
			QYPLAYER_STATE_CHANGE: "playerStateChange",
			QYPLAYER_VIDEO_CHANGE: "videoChanged",
			QYPLAYER_VID_CHANGE: "vidChanged",
			QYPLAYER_NEXT_VIDEO: "playnextvideo",
			QYPLAYER_SET_LIGHT: "setLight",
			QYPLAYER_MOVETO_QITAN: "moveToQitan",
			QYPLAYER_SHOW_LOGIN_PANEL: "showLoginPanel",
			QYPLAYER_EXPAND: "expand",
			QYPLAYER_AUTHENTICATION_RESULE: "authenticationResult",
			QYPLAYER_RECHARGE: "recharge",
			QYPLAYER_SUBSCRIBE: "subscribe",
			QYPLAYER_REFRESH_PAGE: "refreshPage",
			QYPLAYER_DOWNLOAD: "download",
			QYPLAYER_REQUEST_VIDEOLIST: "requestVideoList",
			QYPLAYER_REQUEST_VIDEOLIST_BY_PAGE: "requestVideoListByPage",
			QYPLAYER_REQUEST_CHANGE_VIDEO: "requestChangeVideo",
			QYPLAYER_SWITCH_FULL_SCREEN: "switchFullScreen",
			QYPLAYER_ADD_TO_TABLE: "addToTable",
			QYPLAYER_FOCUS_TIPS: "focusTips",
			QYPLAYER_FOCUS_UPLOADER: "focusUploader",
			QYPLAYER_FIND_GOODS: "findGoods",
			QYPLAYER_PGC_FOLLOW: "pgcFollow",
			QYPLAYER_SHOW_DOWNLOAD_APPPOP: "showDownLoadAppPop",
			QYPLAYER_CHECK_CLIENT_INSTALL: "checkClientInstall",
			QYPLAYER_REQUEST_SEND_PINGBACK: "requestJSSendPB",
			QYPLAYER_DOSOMETHING: "setJsDoSomething",
			QYPLAYER_FOLLOW_UPNEXT_LOAD: "followUpNextLoad",
			QYPLAYER_USER_CLICK_SCORE: "userClickScore",
			QYPLAYER_BARRAGE_REPLAY: "barrageReply",
			QYPLAYER_BARRAGE_RECEIVE_DATA: "barrageReceiveData",
			QYPLAYER_SET_BARRAGE_INTERACT_INFO: "setBarrageInteractInfo",
			QYPLAYER_NOTIFY_BARRAGE_DATA: "notifyBarrageData",
			QYPLAYER_SET_BARRAGE_CONFIG_INFO: "setHasBarrageConfigInfo",
			QYPLAYER_SET_BARRAGE_CHANNEL_CONFIG_INFO: "setHasBarrageChannelConfigInfo",
			QYPLAYER_BARRAGE_STATE_CHANGE: "barrageStateChange",
			QYPLAYER_BARRAGE_ALLOWED: "barrageAllowed",
			QYPLAYER_REQUEST_REWARD: "requestReward",
			QYPLAYER_COMMENT_ALLOWED: "commentAllowed",
			QYPLAYER_GET_PLAYER_LOG: "getQiyiPlayerLog",
			QYPLAYER_WEBFULLSCREEN_BEFORE_CHANGE: "beforeWebFullScreenChange",
			QYPLAYER_WEBFULLSCREEN_AFTER_CHANGE: "afterWebFullScreenChange",
			QYPLAYER_FULLSCREEN_BEFORE_CHANGE: "beforeFullScreenChange",
			QYPLAYER_FULLSCREEN_AFTER_CHANGE: "afterFullScreenChange",
			QYPLAYER_NOTIFY_GIFT_INFO: "notifyGiftInfo",
			QYPLAYER_NOTIFY_WRITE_FLASH_LOG: "writeFlashLog",
			QYPLAYER_SWITCH_PLAYER: "switchPlayer",
			QYPLAYER_NOTIFY_AD_START: "ADStart",
			QYPLAYER_NOTIFY_AD_END: "ADEnd",
			QYPLAYER_NOTIFY_AD_NOTIFY_INFO: "adnotifyinfo",
			QYPLAYER_NOTIFY_TIMEUPDATE: "timeUpdate",
			QYPLAYER_NOTIFY_SCORECHANGE: "scoreTaskChange",
			QYPLAYER_NOTIFY_FEEDBACK_SHOW: "feedbackShow",
			QYPLAYER_NOTIFY_FEEDBACK_HIDE: "feedbackHide",
			QYPLAYER_NOTIFY_USER_SEEK: "userSeek",
			QYPLAYER_BuyPlay: "buyPlay",
			QYPLAYER_NOTIFY_TO_DIVERSION: "todiversion",
			QYPLAYER_H5_VIDEO_LOADSTART: "h5videoloadstart",
			QYPLAYER_H5_VIDEO_LOADEDMETADATA: "h5videoloadedmetadata",
			QYPLAYER_H5_DURATION_CHANGED: "h5durationchanged",
			QYPLAYER_H5_VOLUME_CHANGED: "h5volumechanged"
		};

	function isSupported() {
		var e = !!window.Promise && !!window.Uint8Array && !!Array.prototype.forEach,
			t = window.MediaSource || window.WebKitMediaSource,
			a = window.URL,
			r = !1;
		if (t && "function" == typeof t.isTypeSupported) {
			var n = t.isTypeSupported('video/mp4;codecs="avc1.42E01E"'),
				i;
			r = t.isTypeSupported('audio/mp4;codecs="mp4a.40.2"') && n
		}
		return e && !!a && (!!r || platform$1.browser.EDGE)
	}
	var mseFlag = isSupported(),
		_userAgent = navigator.userAgent,
		chromeVersion = /chrome\/([\d\.]+) /gi.exec(_userAgent.toLowerCase());
	chromeVersion = chromeVersion ? parseInt(chromeVersion[1], 10) : 0;
	var firxfoxVersion = /firefox\/([\d\.]+)/gi.exec(_userAgent.toLowerCase());
	firxfoxVersion = firxfoxVersion ? parseInt(firxfoxVersion[1], 10) : 0;
	var safariVersion = /Version\/([\d\.]+)/gi.exec(_userAgent.toLowerCase());

	function isSupportQVS() {
		var e = platform$1.browser.WECHAT,
			t = platform$1.browser.CHROME && 34 <= chromeVersion && !platform$1.browser.EDGE,
			a = platform$1.browser.SAFARI && 10 <= safariVersion,
			r = platform$1.browser.FIREFOX && 42 <= firxfoxVersion,
			n = platform$1.browser.EDGE,
			i;
		return mseFlag && (e || t || a || r || n)
	}

	function isSupportHtml5(e) {
		var t;
		return (isSupportQVS() || platform$1.os.ios || platform$1.os.android) && !e
	}

	function getForcedType() {
		var e;
		return cookie.get("player_forcedType") || null
	}

	function getDefaultType() {
		var e = CON_TYPE.PlayerType_Html5VOD,
			t;
		return "flash" == urlkit.query("__playertype__") && (e = CON_TYPE.PlayerType_FlashVOD), "1" === cookie.get("QP004") && (e = CON_TYPE.PlayerType_FlashVOD), e
	}

	function getPlayerType(e, t) {
		var a;
		return isSupportHtml5(t) ? getForcedType() || e || getDefaultType() : CON_TYPE.PlayerType_FlashVOD
	}
	safariVersion = safariVersion ? parseFloat(safariVersion[1]) : 0;
	var PackLoader = (oc.prototype.matchGray = function(e) {
		return !1
	}, oc.prototype.loadPackage = function() {
		var e = this,
			t = "data",
			a = "pc";
		(platform$1.os.ios || platform$1.os.android) && (t = "http", a = "mobile");
		var r = "wonder." + t + "." + a,
			n = this.configUrl[r];
		setTimeout(function() {
			e.logger.log("package loading: (" + r + ")"), seriesLoadScripts(n, function() {
				e.logger.log("package loaded: (" + r + ")")
			})
		}, 0)
	}, oc.prototype.loadP2P = function(e) {
		var r = this;
		"boolean" == typeof this.p2pcb.loaded ? e() : ("function" == typeof e && this.p2pcb.push(e), this.p2pcb.loading || (this.p2pcb.loading = !0, seriesLoadScripts(this.configUrl["p2p.abs"], function(e) {
			for (r.p2pcb.loading = !1, r.p2pcb.loaded = e; 0 < r.p2pcb.length;) try {
				var t;
				r.p2pcb.shift()()
			} catch (a) {}
		})))
	}, oc.prototype.loadSkin = function(e) {
		var t = "pc";
		(platform$1.os.ios || platform$1.os.android) && (t = "mobile");
		var a = "";
		e && e.isMini && "pc" === t && (a = ".mini"), seriesLoadScripts(this.configUrl["skin." + t + a])
	}, oc);

	function oc(e) {
		if (this.logger = new PlayerLogger("PackLoader"), this.configUrl = onlineUrl, this.p2pcb = [], this.matchGray(e)) {
			var t = grayConfig.url;
			for (var a in t) this.configUrl[a] = t[a]
		}
		isSupportHtml5() && this.loadPackage()
	}
	var objectCreate = Object.create || objectCreatePolyfill,
		objectKeys = Object.keys || objectKeysPolyfill,
		bind = Function.prototype.bind || functionBindPolyfill,
		defaultMaxListeners = 20,
		Dispatcher = (Hc.listenerCount = function(e, t) {
			return "function" == typeof e.listenerCount ? e.listenerCount(t) : listenerCount.call(e, t)
		}, Hc.prototype.emit = function(e) {
			var t, a, r, n, i, o, s = "error" === e;
			if (o = this._events) s = s && null == o.error;
			else if (!s) return !1;
			if (s) {
				if (1 < arguments.length && (t = arguments[1]), t instanceof Error) throw t;
				var l = new Error('Unhandled "error" event. (' + t + ")");
				throw l.context = t, l
			}
			if (!(a = o[e])) return !1;
			var c = "function" == typeof a;
			switch (r = arguments.length) {
				case 1:
					emitNone(a, c, this);
					break;
				case 2:
					emitOne(a, c, this, arguments[1]);
					break;
				case 3:
					emitTwo(a, c, this, arguments[1], arguments[2]);
					break;
				case 4:
					emitThree(a, c, this, arguments[1], arguments[2], arguments[3]);
					break;
				default:
					for (n = new Array(r - 1), i = 1; i < r; i++) n[i - 1] = arguments[i];
					emitMany(a, c, this, n)
			}
			return !0
		}, Hc.prototype.on = function(e, t) {
			return _addListener(this, e, t, !1)
		}, Hc.prototype.once = function(e, t) {
			if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
			return this.on(e, _onceWrap(this, e, t)), this
		}, Hc.prototype.off = function(e, t) {
			return _removeListener.call(this, e, t)
		}, Hc.prototype.un = function(e, t) {
			this.off(e, t)
		}, Hc.prototype.removeAllListeners = function(e) {
			var t, a, r;
			if (!(a = this._events)) return this;
			if (!a.off) return 0 === arguments.length ? (this._events = objectCreate(null), this._eventsCount = 0) : a[e] && (0 == --this._eventsCount ? this._events = objectCreate(null) : delete a[e]), this;
			if (0 === arguments.length) {
				var n = objectKeys(a),
					i;
				for (r = 0; r < n.length; ++r) "off" !== (i = n[r]) && this.removeAllListeners(i);
				return this.removeAllListeners("off"), this._events = objectCreate(null), this._eventsCount = 0, this
			}
			if ("function" == typeof(t = a[e])) this.off(e, t);
			else if (t)
				for (r = t.length - 1; 0 <= r; r--) this.off(e, t[r]);
			return this
		}, Hc.prototype.listeners = function(e) {
			return _listeners(this, e, !0)
		}, Hc.prototype.rawListeners = function(e) {
			return _listeners(this, e, !1)
		}, Hc.prototype.listenerCount = function() {
			return Hc.listenerCount.apply(this, arguments)
		}, Hc),
		hasDefineProperty;

	function Hc() {
		this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = objectCreate(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined
	}
	try {
		var o = {};
		Object.defineProperty && Object.defineProperty(o, "x", {
			value: 0
		}), hasDefineProperty = 0 === o.x
	} catch (err) {
		hasDefineProperty = !1
	}

	function $getMaxListeners(e) {
		return e._maxListeners === undefined ? Dispatcher.defaultMaxListeners : e._maxListeners
	}

	function emitNone(e, t, a) {
		if (t) e.call(a);
		else
			for (var r = e.length, n = arrayClone(e, r), i = 0; i < r; ++i) try {
				n[i].call(a)
			} catch (o) {}
	}

	function emitOne(e, t, a, r) {
		if (t) e.call(a, r);
		else
			for (var n = e.length, i = arrayClone(e, n), o = 0; o < n; ++o) try {
				i[o].call(a, r)
			} catch (s) {}
	}

	function emitTwo(e, t, a, r, n) {
		if (t) e.call(a, r, n);
		else
			for (var i = e.length, o = arrayClone(e, i), s = 0; s < i; ++s) try {
				o[s].call(a, r, n)
			} catch (l) {}
	}

	function emitThree(e, t, a, r, n, i) {
		if (t) e.call(a, r, n, i);
		else
			for (var o = e.length, s = arrayClone(e, o), l = 0; l < o; ++l) try {
				s[l].call(a, r, n, i)
			} catch (c) {}
	}

	function emitMany(e, t, a, r) {
		if (t) e.apply(a, r);
		else
			for (var n = e.length, i = arrayClone(e, n), o = 0; o < n; ++o) try {
				i[o].apply(a, r)
			} catch (s) {}
	}

	function _addListener(e, t, a) {
		var r, n, i;
		if ("function" != typeof a) throw new TypeError('"listener" argument must be a function');
		if ((n = e._events) ? (n.newListener && (e.emit("newListener", t, a.listener ? a.listener : a), n = e._events), i = n[t]) : (n = e._events = objectCreate(null), e._eventsCount = 0), i) {
			if ("function" == typeof i ? i = n[t] = [i, a] : i.push(a), !i.warned && (r = $getMaxListeners(e)) && 0 < r && i.length > r) {
				i.warned = !0;
				var o = new Error("Possible Dispatcher memory leak detected. " + i.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
				o.name = "MaxListenersExceededWarning", o.emitter = e, o.type = t, o.count = i.length
			}
		} else i = n[t] = a, ++e._eventsCount;
		return e
	}

	function _removeListener(e, t) {
		var a, r, n, i, o;
		if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
		if (!(r = this._events)) return this;
		if (!(a = r[e])) return this;
		if (a === t || a.listener === t) 0 == --this._eventsCount ? this._events = objectCreate(null) : (delete r[e], r.off && this.emit("off", e, a.listener || t));
		else if ("function" != typeof a) {
			for (n = -1, i = a.length - 1; 0 <= i; i--)
				if (a[i] === t || a[i].listener === t) {
					o = a[i].listener, n = i;
					break
				}
			if (n < 0) return this;
			0 === n ? a.shift() : spliceOne(a, n), 1 === a.length && (r[e] = a[0]), r.off && this.emit("off", e, o || t)
		}
		return this
	}

	function onceWrapper() {
		if (!this.fired) switch (this.target.off(this.type, this.wrapFn), this.fired = !0, arguments.length) {
			case 0:
				return this.listener.call(this.target);
			case 1:
				return this.listener.call(this.target, arguments[0]);
			case 2:
				return this.listener.call(this.target, arguments[0], arguments[1]);
			case 3:
				return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
			default:
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				this.listener.apply(this.target, e)
		}
	}

	function _onceWrap(e, t, a) {
		var r = {
				fired: !1,
				wrapFn: undefined,
				target: e,
				type: t,
				listener: a
			},
			n = bind.call(onceWrapper, r);
		return n.listener = a, r.wrapFn = n
	}

	function _listeners(e, t, a) {
		var r = e._events;
		if (!r) return [];
		var n = r[t];
		return n ? "function" == typeof n ? a ? [n.listener || n] : [n] : a ? unwrapListeners(n) : arrayClone(n, n.length) : []
	}

	function listenerCount(e) {
		var t = this._events;
		if (t) {
			var a = t[e];
			if ("function" == typeof a) return 1;
			if (a) return a.length
		}
		return 0
	}

	function spliceOne(e, t) {
		for (var a = t, r = a + 1, n = e.length; r < n; a += 1, r += 1) e[a] = e[r];
		e.pop()
	}

	function arrayClone(e, t) {
		for (var a = new Array(t), r = 0; r < t; ++r) a[r] = e[r];
		return a
	}

	function unwrapListeners(e) {
		for (var t = new Array(e.length), a = 0; a < t.length; ++a) t[a] = e[a].listener || e[a];
		return t
	}

	function objectCreatePolyfill(e) {
		var t = function() {};
		return t.prototype = e, new t
	}

	function objectKeysPolyfill(e) {
		for (var t in e) Object.prototype.hasOwnProperty.call(e, t);
		return t
	}

	function functionBindPolyfill(e) {
		var t = this;
		return function() {
			return t.apply(e, arguments)
		}
	}
	hasDefineProperty ? Object.defineProperty(Dispatcher, "defaultMaxListeners", {
		enumerable: !0,
		get: function() {
			return defaultMaxListeners
		},
		set: function(e) {
			if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
			defaultMaxListeners = e
		}
	}) : Dispatcher.defaultMaxListeners = defaultMaxListeners;
	var chrsz = 8;

	function core_md5(e, t) {
		e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
		for (var a = 1732584193, r = -271733879, n = -1732584194, i = 271733878, o = 0; o < e.length; o += 16) {
			var s = a,
				l = r,
				c = n,
				p = i;
			a = md5_ff(a, r, n, i, e[o + 0], 7, -680876936), i = md5_ff(i, a, r, n, e[o + 1], 12, -389564586), n = md5_ff(n, i, a, r, e[o + 2], 17, 606105819), r = md5_ff(r, n, i, a, e[o + 3], 22, -1044525330), a = md5_ff(a, r, n, i, e[o + 4], 7, -176418897), i = md5_ff(i, a, r, n, e[o + 5], 12, 1200080426), n = md5_ff(n, i, a, r, e[o + 6], 17, -1473231341), r = md5_ff(r, n, i, a, e[o + 7], 22, -45705983), a = md5_ff(a, r, n, i, e[o + 8], 7, 1770035416), i = md5_ff(i, a, r, n, e[o + 9], 12, -1958414417), n = md5_ff(n, i, a, r, e[o + 10], 17, -42063), r = md5_ff(r, n, i, a, e[o + 11], 22, -1990404162), a = md5_ff(a, r, n, i, e[o + 12], 7, 1804603682), i = md5_ff(i, a, r, n, e[o + 13], 12, -40341101), n = md5_ff(n, i, a, r, e[o + 14], 17, -1502002290), a = md5_gg(a, r = md5_ff(r, n, i, a, e[o + 15], 22, 1236535329), n, i, e[o + 1], 5, -165796510), i = md5_gg(i, a, r, n, e[o + 6], 9, -1069501632), n = md5_gg(n, i, a, r, e[o + 11], 14, 643717713), r = md5_gg(r, n, i, a, e[o + 0], 20, -373897302), a = md5_gg(a, r, n, i, e[o + 5], 5, -701558691), i = md5_gg(i, a, r, n, e[o + 10], 9, 38016083), n = md5_gg(n, i, a, r, e[o + 15], 14, -660478335), r = md5_gg(r, n, i, a, e[o + 4], 20, -405537848), a = md5_gg(a, r, n, i, e[o + 9], 5, 568446438), i = md5_gg(i, a, r, n, e[o + 14], 9, -1019803690), n = md5_gg(n, i, a, r, e[o + 3], 14, -187363961), r = md5_gg(r, n, i, a, e[o + 8], 20, 1163531501), a = md5_gg(a, r, n, i, e[o + 13], 5, -1444681467), i = md5_gg(i, a, r, n, e[o + 2], 9, -51403784), n = md5_gg(n, i, a, r, e[o + 7], 14, 1735328473), a = md5_hh(a, r = md5_gg(r, n, i, a, e[o + 12], 20, -1926607734), n, i, e[o + 5], 4, -378558), i = md5_hh(i, a, r, n, e[o + 8], 11, -2022574463), n = md5_hh(n, i, a, r, e[o + 11], 16, 1839030562), r = md5_hh(r, n, i, a, e[o + 14], 23, -35309556), a = md5_hh(a, r, n, i, e[o + 1], 4, -1530992060), i = md5_hh(i, a, r, n, e[o + 4], 11, 1272893353), n = md5_hh(n, i, a, r, e[o + 7], 16, -155497632), r = md5_hh(r, n, i, a, e[o + 10], 23, -1094730640), a = md5_hh(a, r, n, i, e[o + 13], 4, 681279174), i = md5_hh(i, a, r, n, e[o + 0], 11, -358537222), n = md5_hh(n, i, a, r, e[o + 3], 16, -722521979), r = md5_hh(r, n, i, a, e[o + 6], 23, 76029189), a = md5_hh(a, r, n, i, e[o + 9], 4, -640364487), i = md5_hh(i, a, r, n, e[o + 12], 11, -421815835), n = md5_hh(n, i, a, r, e[o + 15], 16, 530742520), a = md5_ii(a, r = md5_hh(r, n, i, a, e[o + 2], 23, -995338651), n, i, e[o + 0], 6, -198630844), i = md5_ii(i, a, r, n, e[o + 7], 10, 1126891415), n = md5_ii(n, i, a, r, e[o + 14], 15, -1416354905), r = md5_ii(r, n, i, a, e[o + 5], 21, -57434055), a = md5_ii(a, r, n, i, e[o + 12], 6, 1700485571), i = md5_ii(i, a, r, n, e[o + 3], 10, -1894986606), n = md5_ii(n, i, a, r, e[o + 10], 15, -1051523), r = md5_ii(r, n, i, a, e[o + 1], 21, -2054922799), a = md5_ii(a, r, n, i, e[o + 8], 6, 1873313359), i = md5_ii(i, a, r, n, e[o + 15], 10, -30611744), n = md5_ii(n, i, a, r, e[o + 6], 15, -1560198380), r = md5_ii(r, n, i, a, e[o + 13], 21, 1309151649), a = md5_ii(a, r, n, i, e[o + 4], 6, -145523070), i = md5_ii(i, a, r, n, e[o + 11], 10, -1120210379), n = md5_ii(n, i, a, r, e[o + 2], 15, 718787259), r = md5_ii(r, n, i, a, e[o + 9], 21, -343485551), a = safe_add(a, s), r = safe_add(r, l), n = safe_add(n, c), i = safe_add(i, p)
		}
		return Array(a, r, n, i)
	}

	function md5_cmn(e, t, a, r, n, i) {
		return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(r, i)), n), a)
	}

	function md5_ff(e, t, a, r, n, i, o) {
		return md5_cmn(t & a | ~t & r, e, t, n, i, o)
	}

	function md5_gg(e, t, a, r, n, i, o) {
		return md5_cmn(t & r | a & ~r, e, t, n, i, o)
	}

	function md5_hh(e, t, a, r, n, i, o) {
		return md5_cmn(t ^ a ^ r, e, t, n, i, o)
	}

	function md5_ii(e, t, a, r, n, i, o) {
		return md5_cmn(a ^ (t | ~r), e, t, n, i, o)
	}

	function safe_add(e, t) {
		var a = (65535 & e) + (65535 & t),
			r;
		return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a
	}

	function bit_rol(e, t) {
		return e << t | e >>> 32 - t
	}

	function str2binl(e) {
		for (var t = Array(), a = (1 << chrsz) - 1, r = 0; r < e.length * chrsz; r += chrsz) t[r >> 5] |= (e.charCodeAt(r / chrsz) & a) << r % 32;
		return t
	}

	function binl2hex(e) {
		for (var t = "0123456789abcdef", a = "", r = 0; r < 4 * e.length; r++) a += t.charAt(e[r >> 2] >> r % 4 * 8 + 4 & 15) + t.charAt(e[r >> 2] >> r % 4 * 8 & 15);
		return a
	}

	function MD5(e) {
		return binl2hex(core_md5(str2binl(e), e.length * chrsz))
	}
	var isBool = function(e) {
			return "boolean" == typeof e
		},
		isNum = function(e) {
			return "number" == typeof e && !isNaN(e)
		},
		isObject = function(e) {
			return "[object object]" === Object.prototype.toString.call(e).toLowerCase()
		},
		isArray = function(e) {
			var t;
			return t = Array.isArray ? Array.isArray(e) : "[object array]" === Object.prototype.toString.call(e).toLowerCase()
		},
		formatMilliseconds = function(e) {
			if (isNaN(e)) return "00:00:00";
			var t = 3600 <= (e = Math.round(e)) ? Math.floor(e / 3600) : 0,
				a = 60 <= e % 3600 ? Math.floor(e % 3600 / 60) : 0;
			return a = 10 <= a ? a : "0" + a, e = 10 <= (e = 0 <= parseInt(a, 10) ? e % 3600 % 60 : e) ? e : "0" + e, 0 < t ? (9 < t ? t : "0" + t) + ":" + a + ":" + e : a + ":" + e
		},
		protocolRevise = function(e) {
			void 0 === e && (e = "");
			var t = "";
			return t = (t = (t = e.replace("http://", "//")).replace("https://", "//")).replace(".qiyipic", ".iqiyipic")
		},
		util = {
			isBool: isBool,
			isNumber: isNum,
			isArray: isArray,
			isObject: isObject,
			formatMilliseconds: formatMilliseconds,
			protocolRevise: protocolRevise
		},
		doc = document,
		noop = function() {},
		cacheMappingURL = {},
		accepts = {
			"*": "*/".concat("*"),
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},
		converters = {
			"*": null,
			text: null,
			html: null,
			xml: null,
			json: function(e) {
				var t = {},
					a = window.JSON ? JSON.parse : function() {
						return {}
					};
				try {
					t = a(e)
				} catch (r) {}
				return t
			}
		},
		defaultOptions = {
			method: "get",
			dataType: "*",
			timeout: 1e4,
			charset: "utf-8",
			cache: !0,
			withCredentials: !0,
			jsonpCallback: "callback",
			complete: noop,
			success: noop,
			failure: noop
		},
		_paramFormat = function(e) {
			var t = [];
			if ("object" == typeof e)
				for (var a in e) t[t.length] = encodeURIComponent(a) + "=" + encodeURIComponent(e[a]);
			return t.join("&").replace(/%20/g, "+")
		},
		ajax = function(p) {
			mixin(p = p || {}, defaultOptions);
			var d = p.url,
				f = p.dataType,
				_ = p.params || {},
				u = p.success,
				y = p.failure,
				e;
			d && function() {
				var r = {},
					e = p.headers,
					t = p.data || null,
					a = _paramFormat(_);
				r.params = _, r.url = d + (0 < a.length ? (/\?/i.test(d) ? "&" : "?") + a : ""), "function" == typeof p.beforeSend && (r = p.beforeSend(r));
				var n = new XMLHttpRequest;
				if (n.withCredentials = p.withCredentials, n.onreadystatechange = l, n.ontimeout = c, n.open(p.method, r.url), n.timeout = p.timeout, n.setRequestHeader("Accept", accepts[f]), util.isObject(e))
					for (var i in e) n.setRequestHeader(i, e[i]);
				n.send(t);
				var o = "",
					s = !1;

				function l() {
					var e;
					if (o += ", readyState = " + n.readyState, 4 == n.readyState)
						if (e = converters[f] ? converters[f](n.responseText) : n.responseText, o += ", status = " + n.status + ", statusText = " + n.statusText, 200 == n.status) {
							if ("json" === f && "string" == typeof e) try {
								e = JSON.parse(e)
							} catch (a) {}
							u(e)
						} else if (!s) {
						s = !0;
						var t = "";
						try {
							t = JSON.stringify(e)
						} catch (a) {
							t = " json error"
						}
						o += ", data = " + t + "url = " + r.url, y("xhr error, time = " + p.timeout + o)
					}
				}

				function c(e) {
					if (!s) {
						s = !0;
						var t = "xhr timeout, time = " + p.timeout + ", readyState = " + n.readyState + ", status = " + n.status + ", data = " + JSON.stringify(e) + "url = " + r.url;
						y(t)
					}
				}
			}()
		},
		xhrJSON = function(e) {
			mixin(e = e || {}, defaultOptions), e.dataType = "json", ajax(e)
		},
		jsonp = function(e) {
			mixin(e = e || {}, defaultOptions);
			var t = e.url,
				a = e.params || {},
				r = _paramFormat(a),
				n = t + (0 < r.length ? (/\?/i.test(t) ? "&" : "?") + r : ""),
				i = e.complete,
				o = e.success,
				s = e.failure,
				l = "Q" + MD5(e.fixedCallback || n),
				c = !!e.memory,
				p = MD5(n),
				d = cacheMappingURL[p];
			if (n) {
				if (!(c && d && o)) {
					var f = function(e, t, a) {
							switch (_(), e) {
								case "success":
									c && (cacheMappingURL[p] = a), o(a);
									break;
								case "fail":
									s(a, t)
							}
							i(a)
						},
						_ = function() {
							if (window[l]) {
								window[l] = undefined;
								try {
									delete window[l]
								} catch (e) {}
							}
						},
						u;
					window[l] = function(e) {
						_(), setTimeout(function() {
							f("success", "200", e)
						}, 0)
					};
					var y = {},
						h = doc.createElement("script");
					h.async = !0, h.type = "text/javascript", h.charset = e.charset;
					var m = function() {
						if (h) try {
							h.onload(null, !0)
						} catch (e) {}
					};
					h.abort = m, h.onload = h.onreadystatechange = function(e, t) {
						!t && h.readyState && !/loaded|complete/.test(h.readyState) || (h.onload = h.onreadystatechange = null, h.parentNode && h.parentNode.removeChild(h), h = null, clearTimeout(u))
					}, h.onerror = function() {
						f("fail", null), m()
					}, u = setTimeout(function() {
						f("fail", 408), m()
					}, e.timeout);
					var E = {};
					return E[e.jsonpCallback] = l, mixin(a, E, !0), y.url = n + (/\?/i.test(n) ? "&" : "?") + _paramFormat(E), y.params = a, "function" == typeof e.beforeSend && (y = e.beforeSend(y) || y), h.src = y.url, doc.getElementsByTagName("head")[0].appendChild(h), h
				}
				o(d)
			}
		},
		beacon = function(e, t, a) {
			if ("string" == typeof t) {
				var r = a === undefined || a;
				if (e) {
					var n = [];
					for (var i in r && (e._ = +new Date), e) n.push(i + "=" + encodeURIComponent(e[i]));
					var o = t + "?" + n.join("&"),
						s = new Image;
					s.onload = s.onerror = s.onabort = function() {
						s.onload = s.onerror = s.onabort = null, s = null
					}, s.src = o
				}
			}
		},
		http = {
			serializeParam: _paramFormat,
			ajax: ajax,
			json: xhrJSON,
			jsonp: jsonp,
			beacon: beacon
		},
		domain = "http://msg.qy.net";
	"https:" == window.location.protocol && (domain = "https://msg.qy.net");
	var Component = (Eh.prototype.pv = function(e, t) {
		(t = t || this.options).url = t.url || this.url, sendFunction({
			block: e,
			t: 21
		}, t)
	}, Eh.prototype.cl = function(e, t) {
		(t = t || this.options).url = t.url || this.url;
		var a = {
			t: 20,
			rseat: e
		};
		mixin(a, t), !a.re && window.document && (a.re = [document.body.offsetWidth, document.body.offsetHeight].join("*")), sendFunction(a, t)
	}, Eh);

	function Eh(e, t) {
		this.url = e || domain + "/b", this.options = t || {}
	}
	var instance = new Component,
		sendFunction = function(e, t) {
			var a = t.url,
				r = {
					pf: 1,
					p: 10,
					p1: 101,
					p2: "1_10_101",
					jsuid: cookie.get("QC005"),
					u: cookie.get("QC005"),
					pu: cookie.get("P00003")
				};
			mixin(r, e), t.param && "object" == typeof t.param && (t.cover ? r = t.param : mixin(r, t.param)), /^(http:|https:)?\/\/([\w.]+\/?)\S*$/.test(t.url) ? a = t.url : t.url && (a = domain + t.url), http.beacon(r, a)
		},
		pingback = {
			create: function(e) {
				return new Component(e.url, e)
			},
			cl: function(e, t) {
				instance.cl(e, t)
			},
			pv: function(e, t) {
				instance.pv(e, t)
			}
		},
		browser = platform$1.browser,
		_swf, i18nLang, TEXT = {
			zh: {
				error_maintitle: "Flash插件异常",
				error_fltitle: "下载官方Flash插件",
				error_h5title: "正在切换HTML5播放模式",
				error_fltip: "已安装仍无法观看"
			},
			tw: {
				error_maintitle: "Flash插件異常",
				error_fltitle: "下載官方Flash插件",
				error_h5title: "正在切換HTML5播放模式",
				error_fltip: "已安裝仍無法觀看"
			}
		},
		EmbedSwf = (Vh.prototype.embed = function(e, t) {
			var a = {};
			i18nLang = TEXT.zh, "tw_t" != e.locale && "cn_t" != e.locale || (i18nLang = TEXT.tw), a.quality = "high", a.allowScriptAccess = "always", a.wmode = e.wmode ? e.wmode : "opaque", a.align = "middle", a.bgcolor = "#000000", a.swLiveConnect = "true", a.loop = "true", a.play = "true", a.DeviceFont = "false", a.allowFullScreen = "true", a.menu = "true", a.flashVars = "", (browser.IE6 || browser.IE7 || browser.IE8) && (a.movie = e.playerUrl), e.origin = e.origin || "swf_" + e.parentId, e.P00001 = cookie.get("P00001") || "", e.fluid = cookie.get("QC005") || "", e.jsuid = cookie.get("QC006") || "", e.profileID = cookie.get("P00PRU") || "", e.profileCookie = cookie.get("P00007") || "", e.passportID = cookie.get("P00003") || "", e.vipuser = cookie.get("CM0001") || "", e.vv = cookie.get("QC004") || "", e.yhls = 1 * new Date + parseInt(1e11 * Math.random(), 10), e.playerCTime = e.plyct, e.pageCTime = e.pgct, e.webEventID = window.webEventID || "", e.tmplt = e.pageTmpltType || 0, e.isSupportHtml5 = t ? "1" : "0", e.definitionID = e.vid, e.tvId = e.tvid;
			for (var r = ["tvid", "vid", "wmode"], n = 0; n < r.length; n++) e[r[n]] && delete e[r[n]];
			for (var i in e) "undefined" == typeof e[i] || /^h5/gi.test(i) || (a.flashvars += (/=/gi.test(a.flashvars) ? "&" : "") + i + "=" + e[i]);
			var o = [];
			for (var s in o.push('<object id="' + e.origin + '" height="100%" width="100%" data-player-playerbody="flash" ' + (browser.IE6 || browser.IE7 ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' : "") + 'type="application/x-shockwave-flash" data="' + e.playerUrl + '">'), a) a[s] && o.push('<param name="', s, '" value="', a[s], '" />');
			var l = "",
				c = document.getElementById(e.parentId),
				p = {
					maintitle: "font-size:22px;margin-bottom:24px;font-weight:normal",
					tiptitle: "font-size:14px;margin-bottom:18px",
					iconflash: "width:100px;height:100px;border-radius:50%;display:block;margin:-2px auto 0;background:url(//www.iqiyipic.com/common/fix/iq-player/fla-player-l.png) no-repeat center;cursor:pointer;background-color:#131313",
					iconlink: "font-size:13px;color:#00be06;text-decoration:none;display:inline-block;margin-top:12px"
				},
				d = {
					maintitle: "font-size:26px;margin-bottom:32px;font-weight:normal",
					tiptitle: "font-size:18px;margin-bottom:32px",
					iconflash: "width:124px;height:124px;border-radius:50%;display:block;margin:-6px auto 0;background:url(//www.iqiyipic.com/common/fix/iq-player/fla-player.png) no-repeat center;cursor:pointer;background-color:#131313",
					iconlink: "font-size:16px;color:#00be06;text-decoration:none;display:inline-block;margin-top:15px"
				};
			if (/micromessenger/.test(navigator.userAgent.toLowerCase())) l = '<div style="background-color:#232323;width:100%;height:100%;position:absolute;top:0;left:0;z-index:100;"><div style="position:absolute;left:50%;margin-left:-180px;top:50%;margin-top:-40px;"><p style="text-align:center;margin-bottom:40px;color:#fff;">为保证观影体验，请使用系统浏览器观看视频。</p><p style="text-align:center;margin-bottom:40px;color:#fff;">或在微信客户端--通用设置中勾选”使用系统默认浏览器打开网页“。</p></div></div>';
			else {
				var f = d;
				c.offsetWidth <= 995 && (f = p), l += '<div style="position:absolute;top:0;left:0;right:0;bottom:0;background-color:#000;z-index:100">  <div style="text-align:center;overflow:hidden;position:absolute;width:100%;top:50%;margin-top:-115px;text-align:center;color:#ddd">    <h3 id="j_qpmaintitle" style="' + f.maintitle + '">' + i18nLang.error_maintitle + '</h3>\t<p id="j_qptiptitle" style="' + f.tiptitle + '">' + i18nLang.error_fltitle + '</p><a id="j_qpflashdown" href="//www.adobe.com/go/getflashplayer" target="_blank" onmouseover="this.style.backgroundColor=\'#171717\'" onmouseout="this.style.backgroundColor=\'#131313\'"style="' + f.iconflash + '"</a><a id="j_qpflashhelp" target="_blank" href="//help.iqiyi.com/questionInfo/4048.html" style="' + f.iconlink + '">' + i18nLang.error_fltip + "></a>  </div></div>"
			}
			o.push(l), o.push("</object>");
			var _ = o.join(""),
				u = document.createElement("div");
			u.innerHTML = _;
			try {
				c.appendChild(u.firstChild), this.addEvent(window, "resize", function() {
					var e = document.getElementById("j_qpflashdown");
					if (e) {
						var t = document.getElementById("j_qpflashhelp"),
							a = document.getElementById("j_qpmaintitle"),
							r = document.getElementById("j_qptiptitle");
						c.offsetWidth <= 995 ? (a.style.cssText = p.maintitle, r.style.cssText = p.tiptitle, e.style.cssText = p.iconflash, t.style.cssText = p.iconlink) : (a.style.cssText = d.maintitle, r.style.cssText = d.tiptitle, e.style.cssText = d.iconflash, t.style.cssText = d.iconlink)
					}
				}), this.addEvent(c, "click", function(e) {
					var t, a = ((e = e || event).srcElement ? e.srcElement : e.target).id;
					"j_qpflashdown" == a ? pingback.cl("80720_errorpanel_flash") : "j_qpflashhelp" == a && pingback.cl("80720_errorpanel_flash_explanation")
				}), pingback.pv("80720_errorpanel_flash"), (_swf = document.getElementById(e.origin)).loadSuccess = !1
			} catch (y) {}
			return u = null, _swf
		}, Vh.prototype.addEvent = function(e, t, a) {
			window.attachEvent ? e.attachEvent("on" + t, a) : window.addEventListener && e.addEventListener(t, a)
		}, Vh);

	function Vh() {}
	var cbcache = {},
		genCacheKey = function(e) {
			return e
		},
		VideoInfo = {
			get: function(e, i) {
				var t = e.tvid,
					a = e.locale,
					r = genCacheKey(t);
				if (cbcache[r] = cbcache[r] || [], cbcache[r].push(i), t && i && cbcache[r].length < 2) {
					var n = "//pcw-api.iqiyi.com/video/video/playervideoinfo?tvid=" + t;
					n = a ? n + "&locale=" + a : n, http.jsonp({
						url: n,
						memory: !0,
						success: function(e) {
							"A00000" === e.code && e.data || i({}), e = e.data;
							var t = genCacheKey(e.tvid),
								a = genCacheKey(e.videoQipuId),
								r = [];
							cbcache[t] ? (r = (cbcache[t] || []).slice(0), delete cbcache[t]) : cbcache[a] && (r = (cbcache[a] || []).slice(0), delete cbcache[a]);
							for (var n = 0; n < r.length; n++) r[n] && function(e, t) {
								setTimeout(function() {
									e({
										tvid: t.videoQipuId,
										vid: t.vid,
										albumId: t.albumId,
										cid: t.cid,
										vi: t
									})
								}, 0)
							}(r[n], e);
							r = null
						},
						failure: function(e) {
							i(e || {})
						}
					})
				}
			},
			isUGC: function(e) {
				return !!((e += "") && 2 < e.length && "9" == e.charAt(e.length - 1) && "0" == e.charAt(e.length - 2) && 0 < (e = parseInt(e, 10)) && 9e7 < e)
			}
		},
		xml2json = function(d) {
			var e = "1.2.0";

			function t() {
				d.escapeMode === undefined && (d.escapeMode = !0), d.attributePrefix = d.attributePrefix || "_", d.arrayAccessForm = d.arrayAccessForm || "none", d.emptyNodeForm = d.emptyNodeForm || "text", d.enableToStringFunc === undefined && (d.enableToStringFunc = !0), d.arrayAccessFormPaths = d.arrayAccessFormPaths || [], d.skipEmptyTextNodesForObj === undefined && (d.skipEmptyTextNodesForObj = !0), d.stripWhitespaces === undefined && (d.stripWhitespaces = !0), d.datetimeAccessFormPaths = d.datetimeAccessFormPaths || [], d.useDoubleQuotes === undefined && (d.useDoubleQuotes = !1), d.xmlElementsFilter = d.xmlElementsFilter || [], d.jsonPropertiesFilter = d.jsonPropertiesFilter || [], d.keepCData === undefined && (d.keepCData = !1)
			}
			d = d || {}, t();
			var f = {
				ELEMENT_NODE: 1,
				TEXT_NODE: 3,
				CDATA_SECTION_NODE: 4,
				COMMENT_NODE: 8,
				DOCUMENT_NODE: 9
			};

			function _(e) {
				var t = e.localName;
				return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t
			}

			function u(e) {
				return e.prefix
			}

			function l(e) {
				return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e
			}

			function n(e, t, a, r) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					if ("string" == typeof i) {
						if (i == r) break
					} else if (i instanceof RegExp) {
						if (i.test(r)) break
					} else if ("function" == typeof i && i(t, a, r)) break
				}
				return n != e.length
			}

			function y(e, t, a) {
				switch (d.arrayAccessForm) {
					case "property":
						e[t] instanceof Array ? e[t + "_asArray"] = e[t] : e[t + "_asArray"] = [e[t]]
				}!(e[t] instanceof Array) && 0 < d.arrayAccessFormPaths.length && n(d.arrayAccessFormPaths, e, t, a) && (e[t] = [e[t]])
			}

			function i(e) {
				var t = e.split(/[-T:+Z]/g),
					a = new Date(t[0], t[1] - 1, t[2]),
					r = t[5].split(".");
				if (a.setHours(t[3], t[4], r[0]), 1 < r.length && a.setMilliseconds(r[1]), t[6] && t[7]) {
					var n = 60 * t[6] + Number(t[7]),
						i;
					n = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * n : n), a.setMinutes(a.getMinutes() - n - a.getTimezoneOffset())
				} else -1 !== e.indexOf("Z", e.length - 1) && (a = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds())));
				return a
			}

			function h(e, t, a) {
				if (0 < d.datetimeAccessFormPaths.length) {
					var r = a.split(".#")[0];
					return n(d.datetimeAccessFormPaths, e, t, r) ? i(e) : e
				}
				return e
			}

			function m(e, t, a, r) {
				return !(t == f.ELEMENT_NODE && 0 < d.xmlElementsFilter.length) || n(d.xmlElementsFilter, e, a, r)
			}

			function E(e, t) {
				var a, r, n, i, o, s, l, c;
				if (e.nodeType == f.DOCUMENT_NODE) {
					for (c = new Object, l = e.childNodes, s = 0; s < l.length; s++)(a = l.item(s)).nodeType == f.ELEMENT_NODE && (c[r = _(a)] = E(a, r));
					return c
				}
				if (e.nodeType == f.ELEMENT_NODE) {
					for ((c = new Object).__cnt = 0, l = e.childNodes, s = 0; s < l.length; s++) r = _(a = l.item(s)), a.nodeType != f.COMMENT_NODE && (n = t + "." + r, m(c, a.nodeType, r, n) && (c.__cnt++, null == c[r] ? (c[r] = E(a, n), y(c, r, n)) : (null != c[r] && (c[r] instanceof Array || (c[r] = [c[r]], y(c, r, n))), c[r][c[r].length] = E(a, n))));
					for (o = 0; o < e.attributes.length; o++) i = e.attributes.item(o), c.__cnt++, c[d.attributePrefix + i.name] = i.value;
					var p = u(e);
					return null != p && "" != p && (c.__cnt++, c.__prefix = p), null != c["#text"] && (c.__text = c["#text"], c.__text instanceof Array && (c.__text = c.__text.join("\n")), d.stripWhitespaces && (c.__text = c.__text.trim()), delete c["#text"], "property" == d.arrayAccessForm && delete c["#text_asArray"], c.__text = h(c.__text, r, t + "." + r)), null != c["#cdata-section"] && (c.__cdata = c["#cdata-section"], delete c["#cdata-section"], "property" == d.arrayAccessForm && delete c["#cdata-section_asArray"]), 0 == c.__cnt && "text" == d.emptyNodeForm ? c = "" : 1 == c.__cnt && null != c.__text ? c = c.__text : 1 != c.__cnt || null == c.__cdata || d.keepCData ? 1 < c.__cnt && null != c.__text && d.skipEmptyTextNodesForObj && (d.stripWhitespaces && "" == c.__text || "" == c.__text.trim()) && delete c.__text : c = c.__cdata, delete c.__cnt, !d.enableToStringFunc || null == c.__text && null == c.__cdata || (c.toString = function() {
						return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
					}), c
				}
				if (e.nodeType == f.TEXT_NODE || e.nodeType == f.CDATA_SECTION_NODE) return e.nodeValue
			}

			function c(e, t, a, r) {
				var n = "<" + (null != e && null != e.__prefix ? e.__prefix + ":" : "") + t;
				if (null != a)
					for (var i = 0; i < a.length; i++) {
						var o = a[i],
							s = e[o];
						d.escapeMode && (s = l(s)), n += " " + o.substr(d.attributePrefix.length) + "=", d.useDoubleQuotes ? n += '"' + s + '"' : n += "'" + s + "'"
					}
				return n += r ? "/>" : ">"
			}

			function p(e, t) {
				return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">"
			}

			function a(e, t) {
				return -1 !== e.indexOf(t, e.length - t.length)
			}

			function g(e, t) {
				return !!("property" == d.arrayAccessForm && a(t.toString(), "_asArray") || 0 == t.toString().indexOf(d.attributePrefix) || 0 == t.toString().indexOf("__") || e[t] instanceof Function)
			}

			function P(e) {
				var t = 0;
				if (e instanceof Object)
					for (var a in e) g(e, a) || t++;
				return t
			}

			function A(e, t, a) {
				return 0 == d.jsonPropertiesFilter.length || "" == a || n(d.jsonPropertiesFilter, e, t, a)
			}

			function v(e) {
				var t = [];
				if (e instanceof Object)
					for (var a in e) - 1 == a.toString().indexOf("__") && 0 == a.toString().indexOf(d.attributePrefix) && t.push(a);
				return t
			}

			function r(e) {
				var t = "";
				return null != e.__cdata && (t += "<![CDATA[" + e.__cdata + "]]>"), null != e.__text && (d.escapeMode ? t += l(e.__text) : t += e.__text), t
			}

			function L(e) {
				var t = "";
				return e instanceof Object ? t += r(e) : null != e && (d.escapeMode ? t += l(e) : t += e), t
			}

			function T(e, t) {
				return "" === e ? t : e + "." + t
			}

			function R(e, t, a, r) {
				var n = "";
				if (0 == e.length) n += c(e, t, a, !0);
				else
					for (var i = 0; i < e.length; i++) n += c(e[i], t, v(e[i]), !1), n += O(e[i], T(r, t)), n += p(e[i], t);
				return n
			}

			function O(e, t) {
				var a = "",
					r;
				if (0 < P(e))
					for (var n in e)
						if (!g(e, n) && ("" == t || A(e, n, T(t, n)))) {
							var i = e[n],
								o = v(i);
							if (null == i || i == undefined) a += c(i, n, o, !0);
							else if (i instanceof Object)
								if (i instanceof Array) a += R(i, n, o, t);
								else if (i instanceof Date) a += c(i, n, o, !1), a += i.toISOString(), a += p(i, n);
							else {
								var s;
								0 < P(i) || null != i.__text || null != i.__cdata ? (a += c(i, n, o, !1), a += O(i, T(t, n)), a += p(i, n)) : a += c(i, n, o, !0)
							} else a += c(i, n, o, !1), a += L(i), a += p(i, n)
						}
				return a += L(e)
			}
			this.parseXmlString = function(e) {
				var t = window.ActiveXObject || "ActiveXObject" in window,
					a;
				if (e === undefined) return null;
				if (window.DOMParser) {
					var r = new window.DOMParser,
						n = null;
					if (!t) try {
						n = r.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI
					} catch (err) {
						n = null
					}
					try {
						a = r.parseFromString(e, "text/xml"), null != n && 0 < a.getElementsByTagNameNS(n, "parsererror").length && (a = null)
					} catch (err) {
						a = null
					}
				} else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), (a = new ActiveXObject("Microsoft.XMLDOM")).async = "false", a.loadXML(e);
				return a
			}, this.asArray = function(e) {
				return e === undefined || null == e ? [] : e instanceof Array ? e : [e]
			}, this.toXmlDateTime = function(e) {
				return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
			}, this.asDateTime = function(e) {
				return "string" == typeof e ? i(e) : e
			}, this.xml2json = function(e) {
				return E(e)
			}, this.xml_str2json = function(e) {
				var t = this.parseXmlString(e);
				return null != t ? this.xml2json(t) : null
			}, this.json2xml_str = function(e) {
				return O(e, "")
			}, this.json2xml = function(e) {
				var t = this.json2xml_str(e);
				return this.parseXmlString(t)
			}, this.getVersion = function() {
				return e
			}
		},
		logger = new PlayerLogger("FlashAdapter"),
		FlashAdapter = function(_super) {
			function FlashAdapter(param, isSupportHtml5, manager) {
				var _this_1 = _super.call(this) || this;
				_this_1._player = _this_1, _this_1.__canRecordEvents = !0, _this_1.eventsRecorder = {}, _this_1.__evtRecorderTimer = setTimeout(function() {
					_this_1.stopRecordEvents()
				}, 3e5), _this_1.isSmallWindow = null, _this_1._videoid = param.vid, _this_1._tvid = param.tvid, _this_1.local = param.local || "cn_s", _this_1._isFirstWriteLog = !0;
				var _this = _this_1;
				return _this_1._embedSwf = new EmbedSwf, _this_1._swf = _this_1._embedSwf.embed(param, isSupportHtml5), _this_1._playerId = param.parentId || "", _this_1._param = param, _this_1._prevCalls = [], _this_1._firstTime = !0, _this_1.LOGGER_KEY = "QiyiPlayerLogger", _this_1._swf && (_this_1._swf.fire = function(data) {
					try {
						var ev_1 = window.JSON ? window.JSON.parse(data) : eval("(" + data + ")");
						if (ev_1.data.origin && ev_1.data.origin != _this._swf.id) return;
						setTimeout(function() {
							try {
								_this.handleEvent(ev_1.type, ev_1.data)
							} catch (e) {}
						}, 0)
					} catch (e) {
						return
					}
				}, _this_1.destroy = function() {
					logger.log("js call func,params: type = player destroy(销毁播放器)"), _this_1._swf.parentNode.removeChild(_this_1._swf), _this_1._swf = null, _this_1._embedSwf = null, delete manager.players[_this_1._playerId], _this_1.fire({
						type: "destroy"
					}), _this_1.removeAllListeners()
				}), _this_1._embedSwf.addEvent(window, "beforeunload", function() {
					_this_1._flashcall("stopHeartBeat")
				}), _this_1
			}
			return __extends(FlashAdapter, _super), FlashAdapter.prototype.callSwf = function(e) {
				var t = this._swf,
					a = e.functionName,
					r = e.parameter,
					n = e.callback || function() {};
				t && a && t[a] && (r === undefined ? n(t[a]()) : "[object Object]" == Object.prototype.toString.apply(r) || "[object Array]" == Object.prototype.toString.apply(r) ? n(t[a](JSON.stringify(r))) : n(t[a](r)))
			}, FlashAdapter.prototype.handleEvent = function(e, a) {
				var r = this;
				if (a = a || {}, e == CON_TYPE.QYPLAYER_STATE_CHANGE) {
					var t = a.state || "";
					a.vid != r._videoid && (r._videoid = a.vid, r._tvid = a.tvid, t.toLocaleLowerCase() == CON_TYPE.QYPLAYER_STATUS_LOAD_MOVIE && r.getVideoInfo(function(e) {
						logger.info("call js, fire event,params: type = videoChanged(视频切换完成)"), r.fire({
							type: CON_TYPE.QYPLAYER_VIDEO_CHANGE,
							data: e
						})
					}), r.getPlayInfo(function(e) {
						var t = {};
						t.prePlayingDuration = e.prePlayingDuration, t.preTvid = e.preTvid, t.curPlayingDuration = e.curPlayingDuration, t.playerVersion = e.playerVersion, mixin(a, t), logger.info("call js, fire event,params: type = vidChanged(视频切换)"), r.fire({
							type: CON_TYPE.QYPLAYER_VID_CHANGE,
							data: a
						})
					})), t.toLocaleLowerCase() == CON_TYPE.QYPLAYER_STATUS_DATA_READY && r.getVideoInfo(function(e) {
						logger.info("call js, fire event,params: type = dataready(数据信息已经准备好)"), r.fire({
							type: CON_TYPE.QYPLAYER_STATUS_DATA_READY,
							data: e
						})
					}), t.toLocaleLowerCase() == CON_TYPE.QYPLAYER_STATUS_END_PLAY && r.getPlayInfo(function(e) {
						var t = {};
						t.prePlayingDuration = e.prePlayingDuration, t.preTvid = e.preTvid, t.curPlayingDuration = e.curPlayingDuration, t.playerVersion = e.playerVersion, mixin(a, t)
					}), t.toLocaleLowerCase() == CON_TYPE.QYPLAYER_STATUS_START_PLAY && r.getPlayInfo(function(e) {
						r._timeMark = e.totaleDuration, mixin(a, e)
					}), t.toLocaleLowerCase() == CON_TYPE.QYPLAYER_STATUS_SEEKING && r.fire({
						type: CON_TYPE.QYPLAYER_STATUS_SEEKING,
						data: {
							actionType: "controls",
							current: a.current,
							duration: a.duration
						}
					}), a.state && (a.state = t.toLocaleLowerCase()), logger.info("call js, fire event,params: type = playerStateChange(状态改变), state = " + t.toLocaleLowerCase()), r.fire({
						type: CON_TYPE.QYPLAYER_STATE_CHANGE,
						data: a
					})
				} else if (e == CON_TYPE.QYPLAYER_NEXT_VIDEO) logger.info("call js, fire event,params: type = playnextvideo(点击下一集)"), r.fire({
					type: CON_TYPE.QYPLAYER_NEXT_VIDEO
				});
				else if (e == CON_TYPE.QYPLAYER_SWITCH_PLAYER) cookie.set("QP004", 0, {
					expires: 288e5,
					path: "/",
					domain: "iqiyi.com"
				}), window.location.reload();
				else if (e == CON_TYPE.QYPLAYER_LOAD_COMPLETE) logger.info("call js, fire event,params: type = loadcomplete(加载完成)"), r.fire({
					type: CON_TYPE.QYPLAYER_LOAD_COMPLETE,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_SET_LIGHT) {
					var n = "false" == a.open;
					logger.info("call js, fire event,params: type = setLight(开关灯), open = " + n), r.fire({
						type: CON_TYPE.QYPLAYER_SET_LIGHT,
						data: n
					})
				} else if (e == CON_TYPE.QYPLAYER_MOVETO_QITAN) logger.info("call js, fire event,params: type = moveToQitan(移动到评论)"), r.fire({
					type: CON_TYPE.QYPLAYER_MOVETO_QITAN
				});
				else if (e == CON_TYPE.QYPLAYER_LOAD_SUCCESS) a.playerId = this._param.parentId, logger.info("call js, fire event,params: type = playerLoadSuccess(播放器初始化完毕)"), r.fire({
					type: CON_TYPE.QYPLAYER_LOAD_SUCCESS,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_SHOW_LOGIN_PANEL) logger.info("call js, fire event,params: type = showLoginPanel(弹出登录框)"), r.fire({
					type: CON_TYPE.QYPLAYER_SHOW_LOGIN_PANEL,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_EXPAND) logger.info("call js, fire event,params: type = expand(将播放器放大展开)"), r.fire({
					type: CON_TYPE.QYPLAYER_EXPAND,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_AUTHENTICATION_RESULE) logger.info("call js, fire event,params: type = authenticationResult(鉴权结果), isTryWatch = " + a.isTryWatch), r.fire({
					type: CON_TYPE.QYPLAYER_AUTHENTICATION_RESULE,
					data: {
						isTryWatch: "true" == a.isTryWatch,
						tvid: a.tvid
					}
				});
				else if (e == CON_TYPE.QYPLAYER_RECHARGE) logger.info("call js, fire event,params: type = recharge(请求JS充值)"), r.fire({
					type: CON_TYPE.QYPLAYER_RECHARGE,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_BuyPlay) logger.info("call js, fire event,params: type = buyPlay(会员购买超前点播特权)"), r.fire({
					type: CON_TYPE.QYPLAYER_BuyPlay,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_REFRESH_PAGE) logger.info("call js, fire event,params: type = refreshPage(刷新页面)"), r.fire({
					type: CON_TYPE.QYPLAYER_REFRESH_PAGE
				});
				else if (e == CON_TYPE.QYPLAYER_DOWNLOAD) logger.info("call js, fire event,params: type = download(离线下载)"), r.fire({
					type: CON_TYPE.QYPLAYER_DOWNLOAD,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_REQUEST_VIDEOLIST) logger.info("call js, fire event,params: type = requestVideoList(请求联播列表)"), r.fire({
					type: CON_TYPE.QYPLAYER_REQUEST_VIDEOLIST,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_SWITCH_FULL_SCREEN) logger.info("call js, fire event,params: type = switchFullScreen(全屏|普屏切换)"), r.fire({
					type: CON_TYPE.QYPLAYER_SWITCH_FULL_SCREEN,
					data: a.value
				});
				else if (e == CON_TYPE.QYPLAYER_ADD_TO_TABLE) logger.info("call js, fire event,params: type = addToTable(追剧王--添加到桌面)"), r.fire({
					type: CON_TYPE.QYPLAYER_ADD_TO_TABLE
				});
				else if (e == CON_TYPE.QYPLAYER_ADD_TO_TABLE) logger.info("call js, fire event,params: type = addToTable(追剧王--添加到桌面)"), r.fire({
					type: CON_TYPE.QYPLAYER_ADD_TO_TABLE
				});
				else if (e == CON_TYPE.QYPLAYER_FOCUS_TIPS) logger.info("call js, fire event,params: type = focusTips(播放到看点)"), r.fire({
					type: CON_TYPE.QYPLAYER_FOCUS_TIPS,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_FOCUS_UPLOADER) logger.info("call js, fire event,params: type = focusUploader(获取订阅信息)"), r.fire({
					type: CON_TYPE.QYPLAYER_FOCUS_UPLOADER,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_FIND_GOODS) logger.info("call js, fire event,params: type = findGoods(定位到商品)"), r.fire({
					type: CON_TYPE.QYPLAYER_FIND_GOODS,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_BARRAGE_REPLAY) logger.info("call js, fire event,params: type = barrageReply(回复弹幕)"), r.fire({
					type: CON_TYPE.QYPLAYER_BARRAGE_REPLAY,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_BARRAGE_RECEIVE_DATA) logger.info("call js, fire event,params: type = barrageReceiveData(收到服务器最新socket弹幕信息)"), r.fire({
					type: CON_TYPE.QYPLAYER_BARRAGE_RECEIVE_DATA,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_SET_BARRAGE_INTERACT_INFO) logger.info("call js, fire event,params: type = setBarrageInteractInfo(收到服务器官弹互动信息数据)"), r.fire({
					type: CON_TYPE.QYPLAYER_SET_BARRAGE_INTERACT_INFO,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_SET_BARRAGE_CONFIG_INFO) logger.info("call js, fire event,params: type = setHasBarrageConfigInfo(弹幕的云控配置)"), r.fire({
					type: CON_TYPE.QYPLAYER_SET_BARRAGE_CONFIG_INFO,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_SET_BARRAGE_CHANNEL_CONFIG_INFO) logger.info("call js, fire event,params: type = setHasBarrageChannelConfigInfo(弹幕的频道配置)"), r.fire({
					type: CON_TYPE.QYPLAYER_SET_BARRAGE_CHANNEL_CONFIG_INFO,
					data: a
				});
				else if (e == CON_TYPE.QYPLAYER_NOTIFY_GIFT_INFO) logger.info("call js, fire event,params: type = notifyGiftInfo(发现弹幕红包)"), r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_GIFT_INFO,
					data: {
						data: decodeURIComponent(a.data || "")
					}
				});
				else if (e == CON_TYPE.QYPLAYER_NOTIFY_BARRAGE_DATA) {
					logger.info("call js, fire event,params: type = notifyBarrageData(发现弹幕数据)");
					var i = {};
					a && a.data && (i = (new xml2json).xml_str2json(decodeURIComponent(a.data))), r.fire({
						type: CON_TYPE.QYPLAYER_NOTIFY_BARRAGE_DATA,
						data: {
							data: i.danmu
						}
					})
				} else e == CON_TYPE.QYPLAYER_SHOW_DOWNLOAD_APPPOP ? (logger.info("call js, fire event,params: type = showDownLoadAppPop(下载影音客户端)"), r.fire({
					type: CON_TYPE.QYPLAYER_SHOW_DOWNLOAD_APPPOP,
					data: a
				})) : e == CON_TYPE.QYPLAYER_NOTIFY_SCORECHANGE ? r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_SCORECHANGE
				}) : e == CON_TYPE.QYPLAYER_CHECK_CLIENT_INSTALL ? (logger.info("call js, fire event,params: type = checkClientInstall(检测客户端)"), r.fire({
					type: CON_TYPE.QYPLAYER_CHECK_CLIENT_INSTALL,
					data: a
				})) : e == CON_TYPE.QYPLAYER_REQUEST_SEND_PINGBACK ? (logger.info("call js, fire event,params: type = requestJSSendPB(请求JS发送pingback)"), r.fire({
					type: CON_TYPE.QYPLAYER_REQUEST_SEND_PINGBACK,
					data: a
				})) : e == CON_TYPE.QYPLAYER_DOSOMETHING ? (logger.info("call js, fire event,params: type = setJsDoSomething(请求JS做某些操作)"), r.fire({
					type: CON_TYPE.QYPLAYER_DOSOMETHING,
					data: a
				})) : e == CON_TYPE.QYPLAYER_FOLLOW_UPNEXT_LOAD ? (logger.info("call js, fire event,params: type = followUpNextLoad(继续加载后续结构)"), r.fire({
					type: CON_TYPE.QYPLAYER_FOLLOW_UPNEXT_LOAD,
					data: a
				})) : e == CON_TYPE.QYPLAYER_USER_CLICK_SCORE ? (logger.info("call js, fire event,params: type = userClickScore(评分)"), r.fire({
					type: CON_TYPE.QYPLAYER_USER_CLICK_SCORE,
					data: a
				})) : e == CON_TYPE.QYPLAYER_BARRAGE_STATE_CHANGE ? (logger.info("call js, fire event,params: type = barrageStateChange(弹幕状态发生改变)"), r.fire({
					type: CON_TYPE.QYPLAYER_BARRAGE_STATE_CHANGE,
					data: a
				})) : e == CON_TYPE.QYPLAYER_REQUEST_REWARD ? (logger.info("call js, fire event,params: type = requestReward(请求打赏)"), r.fire({
					type: CON_TYPE.QYPLAYER_REQUEST_REWARD,
					data: a
				})) : e == CON_TYPE.QYPLAYER_COMMENT_ALLOWED ? (logger.info("call js, fire event,params: type = commentAllowed(vrs的评论字段)"), r.fire({
					type: CON_TYPE.QYPLAYER_COMMENT_ALLOWED,
					data: a
				})) : e == CON_TYPE.QYPLAYER_NOTIFY_WRITE_FLASH_LOG ? r._isFirstWriteLog ? (storage$1.write(r.LOGGER_KEY, a.logStr.join("\n")), r._isFirstWriteLog = !1) : storage$1.write(r.LOGGER_KEY, storage$1.read(r.LOGGER_KEY) + "\n" + a.logStr.join("\n")) : e == CON_TYPE.QYPLAYER_NOTIFY_AD_START ? (logger.info("call js, fire event,params: type = ADStart(广告开播)"), r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_AD_START,
					data: a
				})) : e == CON_TYPE.QYPLAYER_NOTIFY_AD_END ? (logger.info("call js, fire event,params: type = ADEnd(广告播放完成)"), r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_AD_END,
					data: a
				})) : e == CON_TYPE.QYPLAYER_NOTIFY_TIMEUPDATE ? r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_TIMEUPDATE,
					data: a
				}) : e == CON_TYPE.QYPLAYER_NOTIFY_AD_NOTIFY_INFO ? (logger.info("call js, fire event,params: type = AD notify info(广告通知的信息-只是转发)" + a.type), r.fire({
					type: a.data.type,
					data: a.data.data
				})) : e == CON_TYPE.QYPLAYER_NOTIFY_FEEDBACK_SHOW ? r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_FEEDBACK_SHOW,
					data: a
				}) : e == CON_TYPE.QYPLAYER_NOTIFY_FEEDBACK_HIDE ? r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_FEEDBACK_HIDE,
					data: a
				}) : e == CON_TYPE.QYPLAYER_NOTIFY_USER_SEEK ? r.fire({
					type: CON_TYPE.QYPLAYER_NOTIFY_USER_SEEK
				}) : e == CON_TYPE.QYPLAYER_BARRAGE_RECEIVE_DATA && r.fire({
					type: CON_TYPE.QYPLAYER_BARRAGE_RECEIVE_DATA,
					data: a
				})
			}, FlashAdapter.prototype.fire = function(e) {
				var t = e.type,
					a = e.data,
					r = {
						type: t
					};
				a !== undefined && (r.data = a), this.emit(t, r), this.__canRecordEvents && (this.eventsRecorder[t] || (this.eventsRecorder[t] = []), "playerStateChange" === t ? this.eventsRecorder[t].push(r) : this.eventsRecorder[t] = [r])
			}, FlashAdapter.prototype.un = function(e, t) {
				return this.off(e, t), this
			}, FlashAdapter.prototype._flashcall = function(e, t, a) {
				var r = {
					callback: a,
					functionName: e,
					parameter: t
				};
				this.callSwf(r)
			}, FlashAdapter.prototype.load = function(e) {
				logger.info("js call func,params: type = load(加载视频), data = " + e), this._flashcall("loadQiyiVideo", e)
			}, FlashAdapter.prototype.stopRecordEvents = function() {
				var e = this;
				e.__canRecordEvents = !1, clearTimeout(e.__evtRecorderTimer), setTimeout(function() {
					e.eventsRecorder = {}
				}, 1e4)
			}, FlashAdapter.prototype.play = function() {
				logger.info("js call func,params: type = play(播放)"), this._flashcall("playQiyiVideo")
			}, FlashAdapter.prototype.resume = function() {
				logger.info("js call func,params: type = resume"), this._flashcall("resumeQiyiVideo")
			}, FlashAdapter.prototype.replay = function() {
				logger.info("js call func,params: type = replay"), this._flashcall("replayQiyiVideo")
			}, FlashAdapter.prototype.pause = function() {
				logger.info("js call func,params: type = pause"), this._flashcall("pauseQiyiVideo")
			}, FlashAdapter.prototype.seek = function(e) {
				logger.info("js call func,params: type = seek, time = " + e), this._flashcall("seekQiyiVideo", e)
			}, FlashAdapter.prototype.stop = function() {
				logger.info("js call func,params: type = stop(停止播放)"), this._flashcall("stopQiyiVideo")
			}, FlashAdapter.prototype.getPlayInfo = function(r) {
				this._flashcall("getQiyiPlayerInfo", undefined, function(e) {
					var t = e || "",
						a = t ? JSON.parse(t.replace(/\r/g, "").replace(/\n/g, "")) : "";
					a && (a.currentTime = a.currentTime ? a.currentTime / 1e3 : 0, r(a))
				})
			}, FlashAdapter.prototype.getVideoInfo = function(e) {
				var t = this.locale;
				t = "tw_t" === t || "cn_t" === t ? "zh_tw" : "", VideoInfo.get({
					tvid: this._tvid,
					vid: this._videoid,
					locale: t
				}, e)
			}, FlashAdapter.prototype.getPlayerId = function() {
				return this._playerId
			}, FlashAdapter.prototype.setQiyiUserLogin = function(e) {
				logger.info("js call func,params: type = setQiyiUserLogin(修改登录状态), param = " + PlayerLogger.stringify(e)), this._flashcall("setQiyiUserLogin", e)
			}, FlashAdapter.prototype.switchVideo = function(e) {
				logger.info("js call func,params: type = switchVideo(影片切换), param = " + PlayerLogger.stringify(e)), this._flashcall("switchVideo", e)
			}, FlashAdapter.prototype.switchNextVideo = function() {
				logger.info("js call func,params: type = switchNextVideo(下一集)"), this._flashcall("switchNextVideo")
			}, FlashAdapter.prototype.switchPreVideo = function() {
				logger.info("js call func,params: type = switchPreVideo(上一集)"), this._flashcall("switchNextVideo")
			}, FlashAdapter.prototype.addVideoList = function(e) {
				logger.info("js call func,params: type = addVideoList(添加联播列表)"), this._flashcall("addVideoList", e)
			}, FlashAdapter.prototype.removeVideoList = function(e) {
				logger.info("js call func,params: type = removeVideoList(从联播列表删除), data = " + e), this._flashcall("removeVideoList", e)
			}, FlashAdapter.prototype.setSmallWindowMode = function(e) {
				this.isSmallWindow !== e && (logger.info("js call func,params: type = setSmallWindowMode(设置小窗,1为小窗), data = " + e), this.isSmallWindow = e, this._flashcall("setSmallWindowMode", e))
			}, FlashAdapter.prototype.jsNotifyAdManager = function(e) {
				this._flashcall("jsNotifyAdManager", e)
			}, FlashAdapter.prototype.getQiyiPlayerLog = function(e) {
				this._flashcall("getQiyiPlayerLog", undefined, e)
			}, FlashAdapter.prototype.clearBanWord = function() {
				this._flashcall("clearBanWord")
			}, FlashAdapter.prototype.addBanWord = function(e) {
				e !== undefined && "" !== e && this._flashcall("addBanWord", e)
			}, FlashAdapter.prototype.removeBanWord = function(e) {
				e && this._flashcall("removeBanWord", e)
			}, FlashAdapter.prototype.requestBarrageData = function(e) {
				this._flashcall("requestBarrageData")
			}, FlashAdapter.prototype.notyfyADInfo = function(e) {
				this._flashcall("notyfyADInfo", e)
			}, FlashAdapter.prototype.getIsInMainVideo = function(e) {
				this._flashcall("getIsInMainVideo", undefined, e)
			}, FlashAdapter.prototype.setCyclePlay = function(e) {
				logger.info("js call func,params: type = setCyclePlay(是否联播), param = " + e), this._flashcall("setCyclePlay")
			}, FlashAdapter.prototype.getQiyiPlayerInfo = function(e) {
				this.getPlayInfo(e)
			}, FlashAdapter.prototype.getQiyiVideoInfo = function(e) {
				this._flashcall("getQiyiVideoInfo", undefined, e)
			}, FlashAdapter.prototype.setLight = function(e) {
				logger.info("js call func,params: type = setLight(开关灯)"), this._flashcall("setLight", e)
			}, FlashAdapter.prototype.expand = function(e) {
				logger.info("js call func,params: type = expand"), this._flashcall("expand", e)
			}, FlashAdapter.prototype.setBarrageStatus = function(e) {
				logger.info("js call func,params: type = setBarrageStatus(设置弹幕开关)"), this._flashcall("setBarrageStatus", e)
			}, FlashAdapter.prototype.setSelfSendBarrageInfo = function(e) {
				this._flashcall("setSelfSendBarrageInfo", e)
			}, FlashAdapter.prototype.setBarrageSetting = function(e) {
				this._flashcall("setBarrageSetting", e)
			}, FlashAdapter.prototype.setActivityNoticeInfo = function(e) {
				this._flashcall("setActivityNoticeInfo", e)
			}, FlashAdapter.prototype.zoomQiyiVideo = function(e) {
				this._flashcall("zoomQiyiVideo", e)
			}, FlashAdapter.prototype.setTimeListener = function(e) {
				this._flashcall("setTimeListener", e)
			}, FlashAdapter.prototype.getHasBarrageConfigInfo = function() {
				this._flashcall("getHasBarrageConfigInfo")
			}, FlashAdapter.prototype.getHasBarrageChannelConfigInfo = function() {
				this._flashcall("getHasBarrageChannelConfigInfo")
			}, FlashAdapter.prototype.getHasBarrageGiftInfo = function() {
				this._flashcall("getHasBarrageGiftInfo")
			}, FlashAdapter.prototype.getCommentConfigInfo = function() {
				this._flashcall("getCommentConfigInfo")
			}, FlashAdapter.prototype.setContinuePlayState = function(e) {
				logger.info("js call func,params: type = setContinuePlayState"), this._flashcall("setContinuePlayState", e)
			}, FlashAdapter.prototype.getSwitchVideoType = function(e) {
				this._flashcall("getSwitchVideoType", undefined, e)
			}, FlashAdapter.prototype.forceToSaveCurVideoInfo = function(e) {
				this._flashcall("forceToSaveCurVideoInfo", e)
			}, FlashAdapter.prototype.getContinueData = function(e) {
				this._flashcall("getContinueData", e)
			}, FlashAdapter.prototype.setQiyiVisits = function(e) {
				this._flashcall("setQiyiVisits", e)
			}, FlashAdapter.prototype.initQiyiVideo = function(e) {
				logger.info("js call func,params: type = initQiyiVideo(初始化播放命令,用于账号封停,以非会员观看)"), this._flashcall("initQiyiVideo", e)
			}, FlashAdapter.prototype.getQiyiPlayerType = function(e) {
				var t = "flash";
				return e && "function" == typeof e && e(t), t
			}, FlashAdapter.prototype.setPlayerFullScreen = function(e) {
				e && this._flashcall("setPlayerFullScreen", e)
			}, FlashAdapter.prototype.exitPicInPic = function() {}, FlashAdapter.prototype.setQiyiSubscribe = function() {}, FlashAdapter.prototype.setSubscribeInfo = function() {}, FlashAdapter.prototype.setSubscribeStateChange = function() {}, FlashAdapter.prototype.setPlayerWebFullScreen = function() {}, FlashAdapter.prototype.setRightBarStatus = function() {}, FlashAdapter.prototype.setExpandScreenStatus = function() {}, FlashAdapter.prototype.showToast = function() {}, FlashAdapter
		}(Dispatcher),
		logger$1 = new PlayerLogger("H5Adapter"),
		H5Adapter = (mm = Dispatcher, __extends(nm, mm), nm.prototype.fire = function(e) {
			var t = e.type,
				a = e.data,
				r = {
					type: t
				};
			a !== undefined && (r.data = a), this.emit(t, r), this.__canRecordEvents && (this.eventsRecorder[t] || (this.eventsRecorder[t] = []), "playerStateChange" === t ? this.eventsRecorder[t].push(r) : this.eventsRecorder[t] = [r])
		}, nm.prototype.un = function(e, t) {
			return this.off(e, t), this
		}, nm.prototype.loadSkin = function(e) {
			QiyiPlayerLoader.loadSkin(e)
		}, nm.prototype.checkPack = function(e, t, a) {
			var r = this;
			if (!this.disabled) {
				var n = function() {
					if (!a) return r["package"][e](t);
					a()
				};
				if (this["package"]) return n();
				this.once("createPack", n)
			}
		}, nm.prototype.addView = function(e) {
			this.hasview || (this.hasview = !0, this.checkPack("addView", e))
		}, nm.prototype.load = function(e) {
			this.checkPack("load", e)
		}, nm.prototype.stopRecordEvents = function() {
			var e = this;
			e.__canRecordEvents = !1, clearTimeout(e.__evtRecorderTimer), setTimeout(function() {
				e.eventsRecorder = {}
			}, 1e4)
		}, nm.prototype.play = function() {
			this.checkPack("play")
		}, nm.prototype.resume = function() {
			this.checkPack("resume")
		}, nm.prototype.replay = function() {
			this.checkPack("replay")
		}, nm.prototype.pause = function() {
			this.checkPack("pause")
		}, nm.prototype.seek = function(e) {
			this.checkPack("seek", e)
		}, nm.prototype.seekN = function(e) {
			this.checkPack("seekN", e)
		}, nm.prototype.setPlayPingbackInfo = function(e) {
			this.checkPack("setPlayPingbackInfo", e)
		}, nm.prototype.stop = function() {
			this.checkPack("stop")
		}, nm.prototype.isPaused = function() {
			return this.checkPack("isPaused")
		}, nm.prototype.getPlayInfo = function(e) {
			this.checkPack("getPlayInfo", e)
		}, nm.prototype.getVideoInfo = function(e) {
			this.checkPack("getVideoInfo", e)
		}, nm.prototype.getPlayerId = function() {
			return this._playerId
		}, nm.prototype.getMuted = function() {
			return this.checkPack("getMuted")
		}, nm.prototype.setMuted = function(e) {
			this.checkPack("setMuted", e)
		}, nm.prototype.setQiyiUserLogin = function(e) {
			this.checkPack("setQiyiUserLogin", e)
		}, nm.prototype.switchVideo = function(e) {
			this.checkPack("switchVideo", e)
		}, nm.prototype.switchNextVideo = function() {
			this.checkPack("switchNextVideo")
		}, nm.prototype.switchPreVideo = function() {
			this.checkPack("switchPreVideo")
		}, nm.prototype.addVideoList = function(e) {
			this.checkPack("addVideoList", e)
		}, nm.prototype.removeVideoList = function(e) {
			this.checkPack("removeVideoList", e)
		}, nm.prototype.setSmallWindowMode = function(e) {
			var t = this;
			this.isSmallWindow !== e && (logger$1.info("js call func,params: type = setSmallWindowMode(设置小窗,1为小窗), data = " + e), this.isSmallWindow = e, this.checkPack("setSmallWindowMode", null, function() {
				t["package"].setSmallWindowMode && t["package"].setSmallWindowMode(e)
			}))
		}, nm.prototype.jsNotifyAdManager = function(e) {
			this.checkPack("jsNotifyAdManager", e)
		}, nm.prototype.getQiyiPlayerLog = function(e) {
			try {
				e(PlayerLogger.getLog())
			} catch (t) {}
		}, nm.prototype.clearBanWord = function() {
			this.checkPack("clearBanWord")
		}, nm.prototype.addBanWord = function(e) {
			e !== undefined && "" !== e && this.checkPack("addBanWord", e)
		}, nm.prototype.removeBanWord = function(e) {
			this.checkPack("removeBanWord", e)
		}, nm.prototype.requestBarrageData = function() {}, nm.prototype.notyfyADInfo = function(e) {
			this.checkPack("notyfyADInfo", e)
		}, nm.prototype.getQiyiPlayerInfo = function(e) {
			this.checkPack("getQiyiPlayerInfo", e)
		}, nm.prototype.getQiyiPlayerType = function(e) {
			var t = "h5";
			return e && "function" == typeof e && e(t), t
		}, nm.prototype.setDelayPlayInfo = function(e) {
			this.checkPack("setDelayPlayInfo", e)
		}, nm.prototype.clearDelayPlayInfo = function(e) {
			this.checkPack("clearDelayPlayInfo", e)
		}, nm.prototype.setBarrageStatus = function() {}, nm.prototype.setSelfSendBarrageInfo = function() {}, nm.prototype.setBarrageSetting = function() {}, nm.prototype.setPlayerWebFullScreen = function(e) {
			this.checkPack("setPlayerWebFullScreen", e)
		}, nm.prototype.setPlayerFullScreen = function(e) {
			this.checkPack("setPlayerFullScreen", e)
		}, nm.prototype.getHasBarrageChannelConfigInfo = function() {}, nm.prototype.getHasBarrageConfigInfo = function() {}, nm.prototype.getHasBarrageGiftInfo = function() {}, nm.prototype.addPlayListView = function(e) {
			this.checkPack("addPlayListView", e)
		}, nm.prototype.getSwitchVideoType = function() {
			return this.checkPack("getSwitchVideoType")
		}, nm.prototype.setRightBarStatus = function(e) {
			this.checkPack("setRightBarStatus", e)
		}, nm.prototype.setExpandScreenStatus = function(e) {
			this.checkPack("setExpandScreenStatus", e)
		}, nm.prototype.exitPicInPic = function() {
			this.checkPack("exitPicInPic")
		}, nm.prototype.showToast = function(e) {
			this.checkPack("showToast", e)
		}, nm.prototype.getIsInMainVideo = function() {}, nm.prototype.setCyclePlay = function() {}, nm.prototype.getQiyiVideoInfo = function() {}, nm.prototype.setQiyiSubscribe = function() {}, nm.prototype.setLight = function() {}, nm.prototype.expand = function() {}, nm.prototype.setActivityNoticeInfo = function() {}, nm.prototype.zoomQiyiVideo = function() {}, nm.prototype.setTimeListener = function() {}, nm.prototype.getCommentConfigInfo = function() {}, nm.prototype.setSubscribeInfo = function() {}, nm.prototype.setSubscribeStateChange = function() {}, nm.prototype.setContinuePlayState = function() {}, nm.prototype.forceToSaveCurVideoInfo = function() {}, nm.prototype.getContinueData = function() {}, nm.prototype.setQiyiVisits = function() {}, nm.prototype.initQiyiVideo = function() {}, nm),
		mm;

	function nm(e, t) {
		var a = mm.call(this) || this;
		return (a._player = a)._playerId = e.parentId, a.disabled = !1, a.hasview = !1, a.type = CON_TYPE.PlayerType_Html5VOD, QiyiPlayerLoader.Package ? a["package"] = new QiyiPlayerLoader.Package(e, a) : (a["package"] = null, QiyiPlayerLoader.once("ready", function() {
			a["package"] = new QiyiPlayerLoader.Package(e, a), a.emit("createPack")
		})), a.__canRecordEvents = !0, a.eventsRecorder = {}, a.__evtRecorderTimer = setTimeout(function() {
			a.stopRecordEvents()
		}, 3e5), a.isSmallWindow = null, setTimeout(function() {
			logger$1.info("call js, fire event,params: type = playerLoadSuccess(播放器初始化完毕)"), a.fire({
				type: CON_TYPE.QYPLAYER_LOAD_SUCCESS,
				data: {
					playerId: e.parentId
				}
			}), logger$1.info("call js, fire event,params: type = barrageAllowed(H5暂时不支持弹幕), enable = false"), a.fire({
				type: CON_TYPE.QYPLAYER_BARRAGE_ALLOWED,
				data: {
					enable: !1
				}
			})
		}, 0), a.destroy = function() {
			a.checkPack("destroy", null, function() {
				logger$1.log("js call func,params: type = player destroy(销毁播放器)"), a["package"].destroy(), a.hasview = !1, a.disabled = !0, delete t.players[e.parentId], a.removeAllListeners(), a.fire({
					type: "destroy"
				})
			})
		}, a
	}
	var PlayerVersion = "5.1.31",
		CONST_adParamAttrName = "data-widget-adparam",
		CONST_flashParamAttrName = "data-widget-flashplayerparam",
		CONST_flashVarsAttrName = "data-flashplayerparam-flashvars",
		CONST_h5Vars = "data-h5playerparam-h5vars",
		CONST_PlayerParams, CONST_PlayerParamsKV, spans, ParamVars = {},
		setInitVars = function() {
			spans = document.querySelectorAll ? document.querySelectorAll("span") : document.getElementsByTagName("span"), CONST_PlayerParams = window.QiyiPlayerParam || [], CONST_PlayerParamsKV = {};
			for (var e = 0; e < CONST_PlayerParams.length; e++) CONST_PlayerParams[e].name && (CONST_PlayerParamsKV[CONST_PlayerParams[e].name] = CONST_PlayerParams[e].attribute || {})
		},
		getVer = function() {
			var e = "";
			try {
				e = navigator.plugins["Shockwave Flash"].description
			} catch (t) {
				try {
					e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
				} catch (err) {}
			}
			return "string" != typeof e && (e = ""), (e || "0 r0").match(/\d+/g)
		},
		checkFlashLzma = function() {
			var e = getVer();
			return 2 < e.length && (12 <= parseInt(e[0], 10) || 11 === parseInt(e[0], 10) && 4 <= parseInt(e[1], 10))
		},
		outsite = function() {
			var e = [],
				t;
			try {
				t = !window.parent.location.href
			} catch (a) {
				for (0 === e.length && (t = !0); e.length;)
					if (-1 === document.referrer.indexOf(e.pop())) {
						t = !0;
						break
					}
			}
			return t + ""
		}(),
		delItemInPlayerParams = function(e) {
			(CONST_PlayerParamsKV[e] || CONST_PlayerParamsKV.hasOwnProperty(e)) && (CONST_PlayerParamsKV[e] = null, delete CONST_PlayerParamsKV[e]);
			for (var t = CONST_PlayerParams.length; t--;) CONST_PlayerParams[t].name === e && CONST_PlayerParams.splice(t, 1)
		},
		safely = function(e) {
			return e.replace(/([<>])/g, "")
		},
		delParamEmptyProps = function(e) {
			for (var t in e) e[t] || !1 === e[t] || delete e[t];
			return e
		},
		getElemWrapperParams = function(t) {
			var e, a, r, n = function(e) {
					return t.getAttribute(e)
				},
				i = {
					expandState: n("data-player-expandstate"),
					albumId: n("data-player-albumid"),
					tvid: n("data-player-tvid"),
					vid: n("data-player-videoid"),
					autoplay: n("data-player-autoplay"),
					isMember: n("data-player-ismember"),
					cyclePlay: n("data-player-cycleplay"),
					exclusive: n("data-player-exclusive"),
					qiyiProduced: n("data-player-qiyiProduced"),
					share_sTime: n("data-player-startTime"),
					share_eTime: n("data-player-endTime"),
					showBarStyle: n("data-player-barStyle"),
					isLoop: n("data-player-isloop")
				};
			for (e = 0; e < spans.length; e++)
				if ((a = (r = spans[e]).getAttribute(CONST_adParamAttrName)) === CONST_adParamAttrName) {
					var o = r.getAttribute("data-adparam-cupid"),
						s = r.getAttribute("data-adparam-playerid");
					o && (i.adurl = o), s && (i.cid = s)
				}
			return delParamEmptyProps(i)
		},
		getElemAdParams = function() {
			var e, t, a, r = {};
			for (e = 0; e < spans.length; e++)
				if ((t = (a = spans[e]).getAttribute(CONST_adParamAttrName)) === CONST_adParamAttrName) {
					var n = a.getAttribute("data-adparam-cupid"),
						i = a.getAttribute("data-adparam-playerid");
					n && (r.adurl = n), i && (r.cid = i)
				}
			return delParamEmptyProps(r)
		},
		getElemPublicParams = function() {
			var e, t, a, r, n, i, o = !1,
				s = {};
			for (n = 0; n < CONST_PlayerParams.length; n++) "public" === CONST_PlayerParams[n].name && (mixin(s, delParamEmptyProps(CONST_PlayerParams[n].attribute || {}), !0), delItemInPlayerParams("public"), o = !0);
			if (!o)
				for (e = 0; e < spans.length; e++) t = (i = spans[e]).getAttribute(CONST_flashParamAttrName), a = i.getAttribute(CONST_flashVarsAttrName), r = i.getAttribute(CONST_h5Vars), "public" === t && (a && mixin(s, delParamEmptyProps(urlkit.query2Json(a)), !0), r && mixin(s, delParamEmptyProps(urlkit.query2Json(r)), !0));
			return delParamEmptyProps(s)
		},
		getJSConfigParams = function(e) {
			var t = {
				playerUrl: checkFlashLzma() && onlineUrl.FLASH_PLAYER_ZURL ? onlineUrl.FLASH_PLAYER_ZURL : onlineUrl.FLASH_PLAYER_URL,
				flashP2PCoreUrl: onlineUrl.FLASH_P2P_URL,
				barrageurl: onlineUrl.FLASH_BARRAGE_URL,
				preloader: onlineUrl.FLASH_PRELOADER_URL,
				preloaderTw: onlineUrl.FLASH_PRELOADER_URL_TW,
				qiyiProducedPreloader: onlineUrl.FLASH_PRELOADER_PRODUCE,
				qiyiProducedPreloaderTw: onlineUrl.FLASH_PRELOADER_PRODUCE_TW,
				exclusivePreloader: onlineUrl.FLASH_PRELOADER_EXCLUSIVE,
				exclusivePreloaderTw: onlineUrl.FLASH_PRELOADER_EXCLUSIVE_TW,
				vipPreloader: onlineUrl.FLASH_PRELOADER_VIP,
				vipPreloaderTw: onlineUrl.FLASH_PRELOADER_VIP_TW,
				iconPreloader: onlineUrl.FLASH_PRELOADER_ICON,
				iconPreloaderTw: onlineUrl.FLASH_PRELOADER_ICON_TW,
				iconProducedPreloader: onlineUrl.FLASH_PRELOADER_ICON_PRODUCE,
				iconProducedPreloaderTw: onlineUrl.FLASH_PRELOADER_ICON_PRODUCE_TW,
				iconExclusivePreloader: onlineUrl.FLASH_PRELOADER_ICON_EXCLUSIVE,
				iconExclusivePreloaderTw: onlineUrl.FLASH_PRELOADER_ICON_EXCLUSIVE_TW,
				tipdataurl: onlineUrl.FLASH_TIP_XML
			};
			return delParamEmptyProps(t)
		},
		getElemCustomParams = function() {
			var e, t, a, r, n, i = {};
			for (e = 0; e < spans.length; e++) t = (n = spans[e]).getAttribute(CONST_flashParamAttrName), a = n.getAttribute(CONST_flashVarsAttrName), r = n.getAttribute(CONST_h5Vars), t && "public" !== t && (CONST_PlayerParamsKV[t] ? (mixin(i, delParamEmptyProps(CONST_PlayerParamsKV[t]), !0), delItemInPlayerParams(t)) : (a && mixin(i, delParamEmptyProps(urlkit.query2Json(a)), !0), r && mixin(i, delParamEmptyProps(urlkit.query2Json(r)), !0)));
			if (0 < CONST_PlayerParams.length)
				for (e = 0; e < CONST_PlayerParams.length; e++) CONST_PlayerParams[e] && CONST_PlayerParams[e].name && mixin(i, delParamEmptyProps(CONST_PlayerParams[e].attribute || {}), !0);
			return delParamEmptyProps(i)
		},
		getElemWrapperFlashVarsParams = function(t) {
			var e = {},
				a, r = function(e) {
					return t.getAttribute(e)
				}("data-player-flashvars");
			return r = r ? urlkit.query2Json(r) : {}, mixin(e, delParamEmptyProps(r), !0), delParamEmptyProps(e)
		},
		getURLParams = function() {
			var e = {},
				t = function(e) {
					var t = urlkit.query2Json(e),
						a = t.flashVars;
					a = a ? urlkit.query2Json(safely(decodeURIComponent(a))) : {};
					var r = t.share_sTime || t.s,
						n = t.share_eTime || t.e,
						i = r && r.match(/(\d*)-.*?=(\d*)/);
					i && (r = i[1], n = i[2]);
					var o = {
						autoplay: t.autoplay,
						vid: t.videoid || t.vid,
						tvid: t.tvid || t.tvId,
						albumId: t.albumid,
						cyclePlay: t.cycleplay,
						isMember: t.ismember,
						exclusive: t.exclusive,
						qiyiProduced: t.qiyiProduced,
						share_sTime: r,
						share_eTime: n,
						outsite: t.outsite,
						cid: t.cid,
						ptid: t.ptid,
						isCid: t.isCid,
						vfrm: t.vfrm,
						isMute: t.isMute,
						showBarStyle: t.barStyle,
						local: t.local,
						components: t.components,
						isLoop: t.isLoop,
						masflag: t.masflag,
						isExpandScreen: t.isExpandScreen,
						isSupportedShot: t.isSupportedShot,
						isSmallWindowMode: t.isSmallWindowMode,
						isSupportedHotKey: t.isSupportedHotKey
					};
					return mixin(a, delParamEmptyProps(o), !0), a
				},
				a = t(safely(window.location.search.replace(/([<>])/g, ""))),
				r = t(safely(window.location.hash.slice(1).replace(/([<>])/g, "")));
			for (var n in mixin(e, delParamEmptyProps(a), !0), mixin(e, delParamEmptyProps(r), !0), e) e[n] || !1 === e[n] || delete e[n];
			return delParamEmptyProps(e)
		},
		playerParams = {
			mix: function(e, t) {
				setInitVars();
				var a = window.__qlt,
					r = "";
				a && a.brs && (r = a.brs || "");
				var n = e.tmplt || 0,
					i = {
						outsite: outsite,
						site: "iqiyiw",
						components: "feffffe6e",
						local: "cn_s",
						ost: "0",
						browserType: r,
						pageTmpltType: n
					};
				for (var o in mixin(i, getElemWrapperParams(t), !0), mixin(i, getElemAdParams(), !0), mixin(i, getElemPublicParams(), !0), mixin(i, getJSConfigParams(e), !0), mixin(i, getElemCustomParams(), !0), mixin(i, getElemWrapperFlashVarsParams(t), !0), mixin(i, e, !0), mixin(i, getURLParams(), !0), (platform$1.os.ios || platform$1.os.android) && (i.autoplay = !1), i) "string" == typeof i[o] && (i[o] = i[o].replace(/^http:/gi, ""));
				return ParamVars = i
			},
			getVars: function() {
				return ParamVars
			}
		},
		_uuidTick = 0,
		_newuser = !1,
		_veid = "",
		_webEventId = window.webEventID || "",
		_removeWeid = function() {
			_webEventId = window.webEventID || ""
		},
		_genUuid = function() {
			return MD5(window.navigator.userAgent + document.cookie + Math.random() + (new Date).getTime() * _uuidTick++)
		},
		saveCookie = function(e, t, a) {
			cookie.set(e, t, {
				expires: a || 31536e6,
				path: "/",
				domain: "iqiyi.com"
			})
		},
		_getJsuid = function() {
			var e = "QC006",
				t = cookie.get(e);
			return t || (_newuser = !0, t = _genUuid(), saveCookie(e, t)), t
		},
		_getFluid = function() {
			return _checkJSUid()
		},
		_checkJSUid = function() {
			var e = "QC005",
				t = cookie.get(e),
				a = storage$1.read(e),
				r = t || a;
			return r ? a ? t || saveCookie(e, r, 283824e7) : storage$1.write(e, r) : (_newuser = !0, r = _genUuid(), saveCookie(e, r, 283824e7), storage$1.write(e, r)), r
		},
		UUID = {
			createUUID: function guid() {
				function e() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1).toUpperCase()
				}
				return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
			},
			getQtsid: function() {
				var e, t = /^\d{10}\.\d{10}\.\d{10}\.\d+$/,
					a = function() {
						return parseInt(new Date / 1e3, 10).toString()
					};
				if (e = cookie.get("QC008"), cookie.get("QC010") && e) return e;
				if (t.test(e))(e = e.split("."))[1] = e[2], e[2] = a(), e[3] = parseInt(e[3], 10) + 1;
				else {
					var r = a();
					e = [r, r, r, "1"]
				}
				return e.join("."), e
			},
			getJsuid: _getJsuid,
			getFluid: _getFluid,
			getWeid: function() {
				return _webEventId = _webEventId || (window.webEventID || MD5(_getJsuid() + "weid" + +new Date))
			},
			getEid: function() {
				var e = "";
				return _veid || (e = _getJsuid(), _veid = MD5(e + "veid" + 1 * new Date)), _veid
			},
			getIsNewUser: function() {
				return _newuser
			},
			init: function() {
				try {
					window.addEventListener("unload", _removeWeid), window.addEventListener("beforeunload", _removeWeid), window.addEventListener("pagehide", _removeWeid)
				} catch (e) {}
			}
		},
		protocol = window.location.protocol,
		opendataURL = protocol + "//msg.qy.net/v5/bi/opendata",
		PF_CODE_PCW = "1",
		PF_CODE_MOBILE = "2",
		P_CODE_PCW = "10",
		P_CODE_MOBILE = "20",
		P1_CODE_PCW = "101",
		P1_CODE_PHW = "201",
		P1_CODE_TBW = "202",
		pf = PF_CODE_PCW,
		p = P_CODE_PCW,
		p1 = P1_CODE_PCW;
	platform$1.browser.iPad ? (pf = PF_CODE_MOBILE, p = P_CODE_MOBILE, p1 = P1_CODE_TBW) : (platform$1.os.ios || platform$1.os.android) && (pf = PF_CODE_MOBILE, p = P_CODE_MOBILE, p1 = P1_CODE_PHW);
	var p_code = pf + "_" + p + "_" + p1,
		os_type = "";
	platform$1.os.ios || platform$1.os.mac ? os_type = 2 : platform$1.os.android && (os_type = 1);
	var _send = function(e) {
			var t;
			mixin(t = {
				p1: p_code,
				flashuid: UUID.getFluid() || "",
				v: e.playerVersion,
				pkg: "",
				sid: UUID.getWeid(),
				sttime: "",
				os_t: os_type,
				os_v: navigator.platform || "",
				ua_model: "",
				brand: "",
				lang: navigator.language || navigator.browserLanguage,
				resolution: window.screen.width + "*" + window.screen.height,
				network: "",
				cell_id: "",
				gps_lon: "",
				gps_lat: "",
				ipv4: "",
				tvid: e.tvid || "",
				aid: e.albumId || "",
				cid: e.cid || "",
				pid: UUID.getEid(),
				duration: e.duration || "",
				rn: +new Date,
				rfr: window.document.referrer,
				url: window.location.href,
				br: platform$1.browser.userAgent,
				ce: UUID.getWeid(),
				c2: ""
			}, e, !0), http.beacon(t, opendataURL)
		},
		ThreePingback = (So.prototype.sendStartPlayPingback = function(e) {
			e.type = 3, e.sttime = Math.round((new Date).getTime() / 1e3), _send(e)
		}, So.prototype.sendEndPlayPingback = function(e) {
			e.type = 4, e.sttime = Math.round((new Date).getTime() / 1e3), _send(e)
		}, So);

	function So() {}
	var ThreePingback$1 = new ThreePingback,
		toIRS = !1,
		initial = !1,
		hasHvt = function() {
			return "function" == typeof _hvt
		},
		toSend = function(e) {
			toIRS && initial && hasHvt() && _hvt.apply(void 0, e)
		},
		IRS = {
			createhvt: function(e, t) {
				var a, r;
				toIRS = !1, toSend(["create", e || "YOUR-UA", {
					api_url: "//iqiyi.irs01.com/hvt",
					iframe_url: "//a.irs01.com/storage.html",
					swf_url: "//a.irs01.com/storage.swf#",
					storage_id: "_iwt_id"
				}])
			},
			hvt_init: function(e) {
				toSend(["init", {
					type: "manual"
				}, {
					info: {
						v_id: e
					},
					upid: ""
				}])
			},
			hvt_start: function(e) {
				toSend(["send", "start", {
					info: {
						v_id: e
					},
					spend: 0,
					upid: "",
					progress: ""
				}])
			},
			hvt_end: function(e, t) {
				t = Math.ceil(t / 1e3), toSend(["send", "end", {
					info: {
						v_id: e
					},
					spend: t,
					upid: "",
					progress: ""
				}])
			},
			hvt_desctory: function() {
				toSend(["destroy"])
			},
			openIRS: function() {}
		},
		logger$2 = new PlayerLogger("PlayerManager"),
		_playersReadyCalls = {},
		PlayerManager = (cp.prototype.createPlayer = function(e) {
			var a = this;
			logger$2.log("createPlayer,params: " + PlayerLogger.stringify(e));
			var t = document.getElementById(e.parentId),
				r = (e = playerParams.mix(e, t)).tvid,
				n = e.vid,
				i = e.usevr;
			i = 1 == i || "true" == i, r = r || "", n = n || "fake123456";
			var o = this.players[e.parentId];
			if (!e.hasOwnProperty("parentId")) return null;
			if (null != o) return null;
			if ("" === r || "" === n) return null;
			e.width && e.height && (t.style.width = parseInt(e.width, 10) + "px", t.style.height = parseInt(e.height, 10) + "px");
			var s = getPlayerType(e.playerType, i);
			e.plyct = +new Date, logger$2.log("<APP>播放器类型： 点播 - " + s + ", .v = " + PlayerVersion), logger$2.log("initialize info,params: location = " + window.location.href + ", env: " + navigator.userAgent.toLowerCase()), logger$2.log("initialize parameter,params: info ==" + PlayerLogger.stringify(e));
			var l = "UA-iqiyi-10000901";
			switch (IRS.createhvt(l, e.irs), e.cssRendered = this.cssRendered, this.cssRendered || (this.cssRendered = !0), s) {
				case CON_TYPE.PlayerType_Html5VOD:
					cookie.set("QP001", 1, {
						expires: 31536e6,
						path: "/",
						domain: "iqiyi.com"
					}), o = new H5Adapter(e, this);
					break;
				case CON_TYPE.PlayerType_FlashVOD:
					cookie.set("QP001", 0, {
						expires: 31536e6,
						path: "/",
						domain: "iqiyi.com"
					}), o = new FlashAdapter(e, isSupportHtml5(i), this)
			}(this.players[e.parentId] = o).on(CON_TYPE.QYPLAYER_LOAD_SUCCESS, function(e) {
				o.__loadsuccess = !0;
				var t = e.data.playerId;
				a.flushPlayerReadyCalls(t)
			});
			var c = "";
			return o.on(CON_TYPE.QYPLAYER_STATE_CHANGE, function(e) {
				var t = e.data.state.toLocaleLowerCase(),
					a = {};
				switch (a.tvid = e.data.tvid || "", a.albumId = e.data.albumId || "", a.cid = e.data.cid || "", a.playerVersion = e.data.playerVersion || "", t) {
					case CON_TYPE.QYPLAYER_STATUS_END_PLAY:
						var r = e.data.tvid,
							n = void 0;
						e.data.spend ? (n = e.data.spend, a.duration = e.data.spend) : n = e.data.prePlayingDuration, IRS.hvt_end(r, n), ThreePingback$1.sendEndPlayPingback(a);
						break;
					case CON_TYPE.QYPLAYER_STATUS_START_PLAY:
					case CON_TYPE.QYPLAYER_STATUS_AD_START_PLAY:
						var i = e.data.tvid;
						i !== c && (IRS.hvt_start(i), ThreePingback$1.sendStartPlayPingback(a), c = i);
						break;
					case CON_TYPE.QYPLAYER_STATUS_ERROR:
				}
			}), o.on(CON_TYPE.QYPLAYER_STATUS_DATA_READY, function(e) {
				var t = e.data.tvid;
				IRS.hvt_init(t)
			}), o.on(CON_TYPE.QYPLAYER_VID_CHANGE, function(e) {
				var t, a, r = {};
				e.data.preMovieInfo ? (t = e.data.preMovieInfo.tvid, a = e.data.preMovieInfo.spend, r.albumId = e.data.preMovieInfo.albumId || "", r.cid = e.data.preMovieInfo.cid || "") : (t = e.data.preTvid, a = e.data.prePlayingDuration), r.playerVersion = e.data.playerVersion || "", r.tvid = t || "", r.duration = a || "", IRS.hvt_end(t, a), ThreePingback$1.sendEndPlayPingback(r)
			}), o
		}, cp.prototype.getPlayerById = function(e) {
			return this.players[e]
		}, cp.prototype.destroyPlayer = function(e) {
			this.players[e].destroy()
		}, cp.prototype.addView = function(e) {
			if (this.subViewDef = this.subViewDef || e, this.subViewDef)
				for (var t in this.players) this.players[t].addView(this.subViewDef)
		}, cp.prototype.ready = function(e, t) {
			var a = this.getPlayerById(e),
				r = _playersReadyCalls[e] || [];
			(_playersReadyCalls[e] = r).push(t), a && a.__loadsuccess && this.flushPlayerReadyCalls(e)
		}, cp.prototype.flushPlayerReadyCalls = function(e) {
			var t = _playersReadyCalls[e] || [];
			_playersReadyCalls[e] = [];
			for (var a = 0; a < t.length; a++) ! function(e, t) {
				setTimeout(function() {
					e[t].call()
				}, 0)
			}(t, a)
		}, cp);

	function cp() {
		this.players = {}, this.cssRendered = !1, this.subViewDef = !1, this.constantType = CON_TYPE, this.version = PlayerVersion
	}
	var logger$3 = new PlayerLogger("QiyiLoader");
	Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
		var t = this.length,
			a = +arguments[1] || 0;
		if (0 === t || isNaN(a) || t <= a) return -1;
		for (a < 0 && (a = t + a) < 0 && (a = 0); a < t; ++a)
			if (this[a] === e) return a;
		return -1
	});
	var PlayerLoader = (Rp = Dispatcher, __extends(Sp, Rp), Sp.prototype.ready = function(e) {
			"function" == typeof e && (this.isActived = !0, e(this.manager))
		}, Sp.prototype.logger = function() {
			return PlayerLogger
		}, Sp.prototype.setPackage = function(e) {
			this.Package = e, this.emit("ready")
		}, Sp.prototype.addView = function(e) {
			this.manager.addView(e)
		}, Sp.prototype.loadSkin = function(e) {
			this.skinLoad ? this.manager.addView() : (this.skinLoad = !0, this.packLoader.loadSkin(e))
		}, Sp),
		Rp;

	function Sp() {
		var e = Rp.call(this) || this,
			t = 0;
		window.__qlt && "number" == typeof window.__qlt.statisticsStart && (t = window.__qlt.statisticsStart), logger$3.log("player v2 sdk init,player-" + PlayerVersion + ", page benchmark@" + t + "!");
		var a, r = (window.uniqy || {}).curVideoInfo || {};
		return e.Package = null, e.packLoader = new PackLoader(r.channelId), e.renderd = !1, e.manager = new PlayerManager, e
	}
	var QiyiPlayerLoader = new PlayerLoader;
	return QiyiPlayerLoader
});