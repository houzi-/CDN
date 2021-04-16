/*! @cupid/mars@7.0.18 by iQiyi,Wed Jul 24 2019 14:04:19 GMT+0800 (GMT+08:00) */ ! function(n, e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var t = e();
		for (var i in t)("object" == typeof exports ? exports : n)[i] = t[i]
	}
}(window, function() {
	return function(n) {
		var e = {};

		function t(i) {
			if (e[i]) return e[i].exports;
			var r = e[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return n[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
		}
		return t.m = n, t.c = e, t.d = function(n, e, i) {
			t.o(n, e) || Object.defineProperty(n, e, {
				enumerable: !0,
				get: i
			})
		}, t.r = function(n) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(n, "__esModule", {
				value: !0
			})
		}, t.t = function(n, e) {
			if (1 & e && (n = t(n)), 8 & e) return n;
			if (4 & e && "object" == typeof n && n && n.__esModule) return n;
			var i = Object.create(null);
			if (t.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: n
			}), 2 & e && "string" != typeof n)
				for (var r in n) t.d(i, r, function(e) {
					return n[e]
				}.bind(null, r));
			return i
		}, t.n = function(n) {
			var e = n && n.__esModule ? function() {
				return n.default
			} : function() {
				return n
			};
			return t.d(e, "a", e), e
		}, t.o = function(n, e) {
			return Object.prototype.hasOwnProperty.call(n, e)
		}, t.p = "", t(t.s = 26)
	}([
		function(n, e, t) {
			"use strict";

			function i(n) {
				return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
					return typeof n
				} : function(n) {
					return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
				})(n)
			}
			var r = Object.prototype,
				o = function(n) {
					var e = r.toString.call(n);
					return e.substring(8, e.length - 1).toLowerCase()
				},
				a = function(n) {
					return i(n)
				},
				c = function(n, e) {
					return r.hasOwnProperty.call(n, e)
				},
				s = function(n) {
					return n == 1 / 0 || n == -1 / 0
				},
				l = function(n) {
					return !isNaN(n) && "number" == o(n)
				},
				p = function(n) {
					return !(!l(n) || s(n))
				},
				u = function(n) {
					return !!p(n) && 0 == n % 1
				},
				d = function(n) {
					if (n) {
						var e = a(n);
						return "object" == e || "function" == e
					}
					return !1
				},
				f = function(n) {
					return d(n) && "function" != o(n)
				},
				h = function(n) {
					return !(!n || "object" != o(n)) && (!n.nodeType && !n.setInterval)
				},
				v = function(n) {
					return "string" == o(n)
				},
				b = function(n) {
					if (!g(n) && f(n)) {
						var e = n.length;
						if (u(e) && e >= 0) return !0
					}
					return !1
				},
				g = function(n) {
					return !(!n || n.window != n)
				},
				m = {
					_class: o,
					_type: a,
					owns: c,
					nan: function(n) {
						return n != n
					},
					bool: function(n) {
						return "boolean" == o(n)
					},
					infinite: s,
					number: l,
					iod: p,
					decimal: function(n) {
						return !!p(n) && 0 != n % 1
					},
					integer: u,
					oof: d,
					object: f,
					hash: h,
					plainObject: h,
					undef: function(n) {
						return "undefined" == a(n)
					},
					fn: function(n) {
						return "function" == o(n)
					},
					string: v,
					nos: function(n) {
						return p(n) || v(n)
					},
					array: function(n) {
						return "array" == o(n)
					},
					arraylike: b,
					window: g,
					empty: function(n) {
						if (v(n) || b(n)) return 0 === n.length;
						if (h(n))
							for (var e in n)
								if (c(n, e)) return !1;
						return !0
					},
					element: function(n) {
						return !(!n || 1 !== n.nodeType)
					},
					regexp: function(n) {
						return "regexp" == o(n)
					}
				},
				y = function() {
					var n = {};
					n.is = m, n.extend = n.assign = function(n) {
						if (n) {
							var t = e.call(arguments, 1);
							r(t, function(e) {
								p(e, function(e, t) {
									m.undef(e) || (n[t] = e)
								})
							})
						}
						return n
					};
					var e = [].slice;
					n.each = r, n.uid = function(n) {
						return n = n || 7, Math.random().toString(35).substr(2, n)
					}, n.map = function(n, e) {
						var t = [];
						return r(n, function(n, i, r) {
							t[i] = e(n, i, r)
						}), t
					}, n.filter = function(n, e) {
						var t = [];
						return r(n, function(n, i, r) {
							e(n, i, r) && t.push(n)
						}), t
					}, n.identity = function(n) {
						return n
					}, n.compact = function(e) {
						return n.filter(e, n.identity)
					}, n.some = function(n, e) {
						return -1 != o(n, e)
					}, n.every = function(n, e) {
						return -1 == o(n, c(e))
					}, n.reduce = l, n.sum = function(e) {
						return n.reduce(e, function(n, e) {
							return n + e
						}, 0)
					}, n.findIndex = o, n.find = function(e, t) {
						var i = n.findIndex(e, t);
						if (-1 != i) return e[i]
					}, n.indexOf = s, n.includes = function(n, e) {
						return -1 != s(n, e)
					}, n.toArray = a, n.slice = function(n, e, t) {
						var r = [],
							o = i(n);
						return o >= 0 && (e = e || 0, 0 !== t && (t = t || o), m.fn(n.slice) || (n = a(n)), r = n.slice(e, t)), r
					}, n.negate = c, n.forIn = p, n.keys = function(n) {
						var e = [];
						return p(n, function(n, t) {
							e.push(t)
						}), e
					}, n.values = function(n) {
						var e = [];
						return p(n, function(n, t) {
							e.push(n)
						}), e
					};
					var t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

					function i(n) {
						if (null != n) return n.length
					}

					function r(n, e) {
						var t = i(n);
						if (t && m.fn(e))
							for (var r = 0; r < t && !1 !== e(n[r], r, n); r++);
						return n
					}

					function o(n, e) {
						var t = -1;
						return r(n, function(n, i, r) {
							if (e(n, i, r)) return t = i, !1
						}), t
					}

					function a(n) {
						var e = [];
						return r(n, function(n) {
							e.push(n)
						}), e
					}

					function c(n) {
						return function() {
							return !n.apply(this, arguments)
						}
					}

					function s(n, e) {
						return m.string(n) ? n.indexOf(e) : o(n, function(n) {
							return e === n
						})
					}

					function l(n, e, t) {
						return r(n, function(i, r) {
							t = e(t, i, r, n)
						}), t
					}

					function p(n, e) {
						if (n)
							for (var t in n)
								if (m.owns(n, t) && !1 === e(n[t], t, n)) break;
						return n
					}

					function u(n) {
						return n || 0 == n ? n + "" : ""
					}
					n.trim = function(n) {
						return null == n ? "" : ("" + n).replace(t, "")
					}, n.invert = function(n) {
						var e = {};
						return p(n, function(n, t) {
							e[n] = t
						}), e
					}, n.lower = function(n) {
						return u(n).toLowerCase()
					}, n.upper = function(n) {
						return u(n).toUpperCase()
					}, n.first = function(n) {
						if (n) return n[0]
					}, n.startsWith = function(n, e) {
						return 0 == s(n, e)
					}, n.tostr = u, n.get = function(e, t) {
						if ((t = h(t)).length && n.every(t, function(n) {
							if (null != e) return e = e[n], !0
						})) return e
					}, n.sumBy = function(e, t) {
						var i = 0;
						return n.each(e, function(e) {
							i += n.get(e, t) || 0
						}), i
					}, n.has = function(e, t) {
						if ((t = h(t)).length && n.every(t, function(n) {
							if (null != e && m.owns(e, n)) return e = e[n], !0
						})) return !0;
						return !1
					}, n.only = function(n, e) {
						return n = n || {}, m.string(e) && (e = e.split(/ +/)), l(e, function(e, t) {
							return null != n[t] && (e[t] = n[t]), e
						}, {})
					}, n.curry = function(e) {
						var t = e.length;
						return function i(r) {
							return function() {
								var o = r.concat(n.slice(arguments));
								return o.length >= t ? (o.length = t, e.apply(this, o)) : i(o)
							}
						}([])
					}, n.mapObject = n.mapValues = function(n, e) {
						var t = {};
						return p(n, function(n, i, r) {
							t[i] = e(n, i, r)
						}), t
					}, n.before = function(n, e) {
						return function() {
							if (n > 1) return n--, e.apply(this, arguments)
						}
					}, n.once = function(e) {
						return n.before(2, e)
					}, n.len = i, n.last = function(e) {
						var t = n.len(e);
						if (t) return e[t - 1]
					}, n.max = function(e, t) {
						var i = -1,
							o = -1 / 0;
						return t = t || n.identity, r(e, function(n, e) {
							(n = t(n)) > o && (o = n, i = e)
						}), i > -1 ? e[i] : o
					}, n.split = function(n, e, t) {
						return (n = u(n)).split(e, t)
					}, n.size = function(e) {
						var t = n.len(e);
						return null == t && (t = n.keys(e).length), t
					}, n.flatten = function(n) {
						var e = [];
						return r(n, function(n) {
							m.arraylike(n) ? r(n, function(n) {
								e.push(n)
							}) : e.push(n)
						}), e
					}, n.union = function() {
						return n.uniq(n.flatten(arguments))
					}, n.uniq = function(e) {
						return n.uniqBy(e)
					}, n.uniqBy = function(e, t) {
						var i = [],
							o = [];
						return m.fn(t) || (t = null), r(e, function(e) {
							var r = e;
							t && (r = t(e)), n.includes(o, r) || (o.push(r), i.push(e))
						}), i
					}, n.remove = function(e, t) {
						for (var i = n.len(e) || 0, r = []; i--;) t(e[i], i, e) && r.push(i);
						return function(e, t) {
							var i = [],
								r = n.len(t);
							if (r)
								for (t = t.sort(function(n, e) {
									return n - e
								}); r--;) {
									var o = t[r];
									i.push(Array.prototype.splice.call(e, o, 1)[0])
								}
							return i.reverse(), i
						}(e, r)
					}, n.endsWith = function(e, t) {
						return (t += "") == n.slice(e, n.len(e) - n.len(t))
					}, n.isMatch = function(n, e) {
						var t = !0;
						return n = n || {}, p(e, function(e, i) {
							if (e !== n[i]) return t = !1, !1
						}), t
					}, n.throttle = function(e, t, i) {
						return t = t || 0, i = n.extend({
							leading: !0,
							trailing: !0,
							maxWait: t
						}, i), n.debounce(e, t, i)
					}, n.debounce = function(e, t, i) {
						t = t || 0;
						var r, o = (i = n.extend({
								leading: !1,
								trailing: !0
							}, i)).maxWait,
							a = 0,
							c = 0,
							s = Date.now();

						function l(n, e, t) {
							return a = Date.now(), n.apply(e, t)
						}

						function p() {
							r && (clearTimeout(r), r = null)
						}

						function u() {
							var n = !((s = Date.now()) - a > t || o && s - c > o);
							c = s;
							var u = this,
								d = arguments;
							p(), n ? i.trailing && (r = setTimeout(function() {
								l(e, u, d)
							}, t)) : l(e, u, d)
						}
						return i.leading || (a = s), u.cancel = p, u
					};
					var d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
						f = /\\(\\)?/g;

					function h(n) {
						if (m.array(n)) return n;
						var e = [];
						return u(n).replace(d, function(n, t, i, r) {
							var o = t || n;
							i && (o = r.replace(f, "$1")), e.push(o)
						}), e
					}
					return n
				}();
			e.a = y
		},
		function(n, e, t) {
			"use strict";
			var i = t(0);
			var r = function n(e, t, i, r) {
					function o(n, e) {
						return Object.prototype.hasOwnProperty.call(n, e)
					}
					return t && function(n, e) {
						var t;
						for (t in n)
							if (o(n, t) && e(n[t], t)) break
					}(t, function(t, a) {
						!i && o(e, a) || (r && "string" != typeof t && "boolean" != typeof t ? (e[a] || (e[a] = {}), n(e[a], t, i, r)) : e[a] = t)
					}), e
				},
				o = {},
				a = {
					get: function(n, e) {
						var t = "";
						if ((e = r({
							memory: !1
						}, e, !0)).memory && o.hasOwnProperty(n)) t = o[n];
						else {
							if (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(n)) {
								var i = new RegExp("(^| )" + n + "=([^;]*)(;|$)").exec(document.cookie);
								i && (t = i[2] || "")
							}
							"string" == typeof t && (t = decodeURIComponent(t)), e.memory && (o[n] = t)
						}
						return t
					},
					set: function(n, e, t) {
						t = t || {}, e = encodeURIComponent(e);
						var i = t.expires;
						"number" == typeof t.expires && (i = t.expires <= 0 ? new Date(0) : new Date).setTime(i.getTime() + t.expires), delete o[n], document.cookie = n + "=" + e + (t.path ? "; path=" + t.path : "") + (i ? "; expires=" + i.toUTCString() : "") + (t.domain ? "; domain=" + t.domain : "")
					},
					remove: function(n, e) {
						(e = e || {}).expires = -1, this.set(n, "", e)
					}
				};
			t.d(e, "g", function() {
				return s
			}), t.d(e, "f", function() {
				return l
			}), t.d(e, "b", function() {
				return p
			}), t.d(e, "c", function() {
				return u
			}), t.d(e, "k", function() {
				return d
			}), t.d(e, "i", function() {
				return f
			}), t.d(e, "a", function() {
				return h
			}), t.d(e, "j", function() {
				return v
			}), t.d(e, "h", function() {
				return b
			}), t.d(e, "e", function() {
				return g
			}), t.d(e, "d", function() {
				return m
			});
			var c = i.a.is,
				s = function(n) {
					return !!i.a.startsWith(n, "qc_") && n.length == "qc_100001_100000".length
				},
				l = function() {
					var n = a.get("QC005");
					return c.empty(n) && (n = a.get("QC006")), n || ""
				},
				p = function() {
					return a.get("P00001") || ""
				},
				u = function(n) {
					return a.get(n) || ""
				},
				d = function(n, e, t) {
					return a.set(n, e, t)
				},
				f = function(n) {
					(new Image).src = n
				},
				h = function(n) {
					var e = (n = n || {}).slot || {},
						t = n.creative || {},
						r = [e.cuepointType, n.dspId, n.orderItemId, t.creativeId, t.templateType];
					return (r = i.a.map(r, function(n) {
						return null == n && (n = ""), n
					})).join("||")
				},
				v = function n(e, t, r, o) {
					if (e && t) {
						var a = e.split(t);
						if (r = i.a.tostr(r), e = a.join(r), o) {
							var c = encodeURIComponent(t);
							c != t && (e = n(e, c, r))
						}
					}
					return e
				},
				b = function(n, e) {
					var t = new Image;
					return new Promise(function(i, r) {
						var o = function() {
								t.removeEventListener("load", c), t.removeEventListener("error", a)
							},
							a = function() {
								o(), r("error")
							},
							c = function() {
								o(), i(t)
							};
						e && setTimeout(function() {
							o(), r("timeout")
						}, e), n = n.replace(/^(https:|http:)/, ""), t.addEventListener("load", c), t.addEventListener("error", a), t.setAttribute("src", n)
					})
				},
				g = function(n, e, t) {
					n = n || {}, e = e || {}, e = {
						width: c.number(e.width) ? e.width : 1 / 0,
						height: c.number(e.height) ? e.height : 1 / 0
					}, t = {
						width: (t = t || {}).width || 0,
						height: t.height || 0
					};
					var i = Math.max(t.width / n.width, t.height / n.height),
						r = Math.min(e.width / n.width, e.height / n.height);
					return i > r && (i = r = NaN), {
						min: i,
						max: r
					}
				},
				m = function(n) {
					return c.string(n) && (n = n.split(",")), parseInt(i.a.first(n))
				}
		},
		function(n, e, t) {
			"use strict";
			var i = t(3);

			function r(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			var o = function() {
				function n() {
					! function(n, e) {
						if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, n), this.init()
				}
				var e, t, i;
				return e = n, (t = [{
					key: "init",
					value: function() {
						this._timerIdMap = {
							timeout: {},
							interval: {}
						}
					}
				}, {
					key: "run",
					value: function() {
						var n = this,
							e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "interval",
							t = arguments.length > 1 ? arguments[1] : void 0,
							i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16.7,
							r = Date.now,
							o = r(),
							a = [r(), Math.random()].join("");
						return this.setIdMap(a, e, function c() {
							n.setIdMap(a, e, c), r() - o >= i && ("interval" === e && (o = r(), o), t(), "timeout" === e && n.clearTimeout(a))
						}), a
					}
				}, {
					key: "setIdMap",
					value: function(n, e, t) {
						var i = requestAnimationFrame(t);
						this._timerIdMap[e][n] = i
					}
				}, {
					key: "setTimeout",
					value: function(n, e) {
						return this.run("timeout", n, e)
					}
				}, {
					key: "clearTimeout",
					value: function(n) {
						cancelAnimationFrame(this._timerIdMap.timeout[n])
					}
				}, {
					key: "setInterval",
					value: function(n, e) {
						return this.run("interval", n, e)
					}
				}, {
					key: "clearInterval",
					value: function(n) {
						cancelAnimationFrame(this._timerIdMap.interval[n])
					}
				}]) && r(e.prototype, t), i && r(e, i), n
			}();

			function a(n) {
				return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
					return typeof n
				} : function(n) {
					return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
				})(n)
			}

			function c(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}

			function s(n, e) {
				return !e || "object" !== a(e) && "function" != typeof e ? function(n) {
					if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return n
				}(n) : e
			}

			function l(n) {
				return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
					return n.__proto__ || Object.getPrototypeOf(n)
				})(n)
			}

			function p(n, e) {
				return (p = Object.setPrototypeOf || function(n, e) {
					return n.__proto__ = e, n
				})(n, e)
			}
			t.d(e, "a", function() {
				return u
			});
			var u = function(n) {
				function e(n, t) {
					var i;
					return function(n, e) {
						if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e), (i = s(this, l(e).call(this))).repeatCount = t || 1 / 0, i.interval = n, i.reset(), i.raf = new o, i
				}
				var t, r, a;
				return function(n, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					n.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: n,
							writable: !0,
							configurable: !0
						}
					}), e && p(n, e)
				}(e, i["a"]), t = e, (r = [{
					key: "reset",
					value: function() {
						this.stop(), this.currentCount = 0
					}
				}, {
					key: "stop",
					value: function() {
						this.running && (this.raf.clearInterval(this.timer), this.timer = null), this.running = !1
					}
				}, {
					key: "start",
					value: function() {
						var n = this;
						n.running || (n.timer = this.raf.setInterval(function() {
							n.currentCount++, n.emit("timer"), n.currentCount == n.repeatCount && (n.emit("timerComplete"), n.stop())
						}, n.interval)), n.running = !0
					}
				}]) && c(t.prototype, r), a && c(t, a), e
			}();
			u.interval = function(n, e, t) {
				var i = new u(e, t);
				return i.on("timer", n), i.start(), i
			}, u.timeout = function(n, e) {
				return u.interval(n, e, 1)
			}
		},
		function(n, e, t) {
			"use strict";

			function i(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			t.d(e, "a", function() {
				return r
			});
			var r = function() {
				function n() {
					! function(n, e) {
						if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, n)
				}
				var e, t, r;
				return e = n, (t = [{
					key: "on",
					value: function(n, e) {
						return this._callbacks = this._callbacks || {}, (this._callbacks[n] = this._callbacks[n] || []).push(e), this
					}
				}, {
					key: "once",
					value: function(n, e) {
						var t = this;

						function i() {
							t.off(n, i), e.apply(this, arguments)
						}
						return this._callbacks = this._callbacks || {}, i.fn = e, this.on(n, i), this
					}
				}, {
					key: "off",
					value: function(n, e) {
						if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
						var t, i = this._callbacks[n];
						if (!i) return this;
						if (1 == arguments.length) return delete this._callbacks[n], this;
						for (var r = 0; r < i.length; r++)
							if ((t = i[r]) === e || t.fn === e) {
								i.splice(r, 1);
								break
							}
						return this
					}
				}, {
					key: "emit",
					value: function(n) {
						this._callbacks = this._callbacks || {};
						var e = [].slice.call(arguments, 1),
							t = this._callbacks[n];
						if (t)
							for (var i = 0, r = (t = t.slice(0)).length; i < r; ++i) t[i].apply(this, e);
						return this
					}
				}, {
					key: "listeners",
					value: function(n) {
						return this._callbacks = this._callbacks || {}, this._callbacks[n] || []
					}
				}, {
					key: "hasListeners",
					value: function(n) {
						return !!this.listeners(n).length
					}
				}]) && i(e.prototype, t), r && i(e, r), n
			}();
			r.prototype.addEventListener = r.prototype.on, r.prototype.removeEventListener = r.prototype.off
		}, , ,
		function(n, e) {
			n.exports = '<div class="video_ad-buy">\n  <div class="buy-pic">\n      <a href="javascript:;">\n          <img src="{imgUrl}" alt="{promotion}" width="90" height="90">\n      </a>\n  </div>\n  <div class="buy-txt">\n      <h3>{promotion}</h3>\n      <div class="buy-detial">\n          <div class="detial-price">{discountedPriceText}</div>\n          <a href="{detailUrl}" class="detial-btn">{查看详情}</a>\n      </div>\n  </div>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div class="bottom-public">\n  <a href="javascript:;" class="bottom-public_play"><i class="btn-pause"></i></a>\n  <a href="javascript:;" class="bottom-public_voice"><i class="voice-big"></i></a>\n  \x3c!-- 全屏时显示screen-all 小屏时显示screen-small --\x3e\n  <a href="javascript:;" class="know-detail">{了解详情}&gt;</a>\n  <a href="javascript:;" class="public-screen"><i class="screen-small"></i></a>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div class="cupid-public-time">\n    <span class="cd-time">0</span><a class="public-vip" href="javascript:;"><span class="public-vip-text">{会员跳广告}</span><span class="vip-doc-wrap"><i class="vip-marketing-doc"></i></span></a>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div>\n    <div class="tp_vip-show"><span class="tp_vip-gif"></span><span class="tp_vip-text">爱奇艺VIP会员团队为您推荐</span></div>\n    <div class="tp_vip-close">\n        <div class="tp_close-time cd-time">0</div>\n        <div class="tp_close-txt"><a href="javascript:;">关闭此推荐  &gt;&gt;</a></div>\n    </div>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div>\n    <div class="tp_vip-time cd-time">0</div>\n    <div class="tp_vip-nointerest">\n        <div class="tp_nointerest-top">不感兴趣？</div>\n        <div class="tp_nointerest-btm"><span class="cd-trueview-time">0</span>秒后可跳过此广告</div>\n    </div>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div>\n    <div class="tp_vip-time tp_vip-time1 cd-time">0</div>\n    <div class="tp_vip-free"><a href="javascript:;">免费跳过广告 &gt;&gt;</a></div>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div class="tp_disable-skip">\n    <div class="tp_disable-skip-txt"><a href="javascript:;">{应版权方要求，会员无法跳过该剧广告}</a><a href="javascript:;" class="tp_disable-skip-detail">?</a></div>\n    <div class="tp_disable-skip-time cd-time">0</div>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div>\n    <div class="sports-tip-show">\n        <span class="sports-tip-logo-wrap"><img class="sports-tip-logo"></span><span class="tp_vip-text sports-vip-text">体育会员推荐</span>\n    </div>\n    <div class="cupid-public-time">\n        <span class="cd-time sports-cd-time">0</span><a class="public-vip" href="javascript:;"><span class="sports-vip-text">{关闭此推荐}</span></a>\n    </div>\n</div>'
		},
		function(n, e) {
			n.exports = '<div class="cupid-panel cupid-common-panel">\n    <div class="cupid-panel-header"></div>\n    <div class="cupid-panel-body">{版权文案}</div>\n    <div class="cupid-panel-footer">\n        <button class="cupid-panel-btn">{我知道了}</button>\n    </div>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div class="iqp-bottom-detail">{了解详情}</div>\n'
		},
		function(n, e) {
			n.exports = '<div class="midrolltip">\n    <span class="midrolltip-time">5</span><a class="cupid-text-wrap" href="javascript:;"><span class="cupid-text">{广告之后精彩继续}</span></a>\n</div>\n'
		},
		function(n, e) {
			n.exports = '<div style="position: fixed;z-index: 1000;width: 480px;height: 360px;margin-left: -240px;margin-top: -180px;background: #000;border-radius: 15px;top: 50%;left: 50%;color: #999;">\n  <div class="cupid-panel-header">\n      <span class="cupid-panel-close"></span>\n  </div>\n  <div class="cupid-panel-body">\n      <fieldset>\n          <label>{手机（选填）}</label>\n          <input class="feedback-input feedback-phone">\n      </fieldset>\n      <fieldset>\n          <label>{邮件（选填）}</label>\n          <input class="feedback-input feedback-email">\n      </fieldset>\n      <fieldset>\n          <label>{请简短说明一下您遇到的问题（选填）}</label>\n          <textarea class="feedback-detail"></textarea>\n      </fieldset>\n      <p class="mars-feedback-tip"></p>\n  </div>\n  <div class="cupid-panel-footer">\n      <button class="feedback-submit">{提交}</button>\n  </div>\n</div>'
		},
		function(n, e) {
			n.exports = '<div class="black-screen" data-cupid="adblock-blackscreen">\n  <div class="black-screen-notice">\n      <img class="black-screen-icon" src="//pic2.iqiyipic.com/common/20180921/blocked.png">\n      <div class="black-screen-text">\n          呃...{广告被拦截，无法正常播放了}，<span class="cd-time">0</span>{秒后播放正片}<br/>\n          {关闭拦截插件并刷新页面，可恢复正常}\n      </div>\n      <div class="black-screen-sub-text">\n          加入<span class="black-screen-purchase">{爱奇艺}VIP</span>，{尊享会员特权，轻轻松松跳广告}\n      </div>\n  </div>\n  <div class="black-screen-feedback-notice">\n      {仍然无法观看？戳这里}<span class=\'black-screen-feedback\'>{反馈给我们}</span>\n  </div>\n</div>\n'
		}, , ,
		function(n, e, t) {
			var i = t(22);
			"string" == typeof i && (i = [
				[n.i, i, ""]
			]);
			var r = {
				hmr: !0,
				transform: void 0,
				insertInto: void 0
			};
			t(24)(i, r);
			i.locals && (n.exports = i.locals)
		},
		function(n, e, t) {
			(n.exports = t(23)(!1)).push([n.i, '.mars-tip {\n  position: absolute;\n  z-index: 1000;\n}\n.mars-tip .mars-tip-body {\n  padding: 10px;\n  text-align: center;\n}\n.mars-tip-basic {\n  padding: 5px 0;\n}\n.mars-tip-basic .mars-tip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  line-height: 0;\n  border: 5px dashed #000;\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-bottom-style: solid;\n  border-top: none;\n  border-left-color: transparent;\n  border-right-color: transparent;\n}\n.mars-tip-basic .mars-tip-body {\n  background: #000;\n  color: #fff;\n}\n.mars-tip-border {\n  padding: 6px 0;\n}\n.mars-tip-border .mars-tip-head {\n  border: 7px dashed transparent;\n  border-bottom: 7px solid #ddd;\n  display: block;\n  width: 0;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  position: absolute;\n  top: -7px;\n  left: 50%;\n  margin-left: -5px;\n}\n.mars-tip-border .mars-tip-head .mars-tip-arrow {\n  position: absolute;\n  border: 6px dashed transparent;\n  border-bottom: 6px solid #fafafa;\n  left: -6px;\n  top: -5px;\n}\n.mars-tip-border .mars-tip-body {\n  background: #fafafa;\n  border: 1px solid #ddd;\n}\n.video_ad {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  margin-left: -100px;\n  top: 50%;\n  margin-top: -100px;\n}\n.video_ad-icon {\n  width: 27px;\n  height: 16px;\n  border-radius: 1px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 10px;\n  color: #fff;\n  line-height: 16px;\n  text-align: center;\n}\n.video_ad-close {\n  width: 20px;\n  height: 20px;\n  background: url(//www.iqiyipic.com/common/fix/videoplay/video_close.png) no-repeat;\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  cursor: pointer;\n}\n/*\n// 2016-10-17 新增 trueview vip\n@charset "utf-8";\nbody{\n  font-family: "microsoft yahei";\n}\ndiv,span,a{\n  margin: 0;\n  padding: 0;\n}\na,a:hover{\n  text-decoration: none;\n}\n*/\n/* normal ad tip */\n.cupid-public-time {\n  position: absolute;\n  z-index: 100;\n  background: rgba(26, 26, 26, 0.7);\n  border-radius: 20px;\n  padding: 0 15px 0 15px;\n  width: auto !important;\n  height: 30px;\n  right: 20px;\n  top: 20px;\n  line-height: 30px;\n  text-align: center;\n}\n.midrolltip {\n  position: absolute;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 20px;\n  padding: 0 15px 0 15px;\n  width: auto !important;\n  height: 30px;\n  right: 20px;\n  top: 20px;\n  line-height: 30px;\n  text-align: center;\n}\n.midrolltip-time {\n  width: 12px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font: 20px/1.5 "ds-digital" !important;\n  display: inline-block;\n  position: relative;\n  color: #fff;\n}\n.midrolltip .cupid-text-wrap {\n  position: relative;\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  margin-left: 4px;\n  color: #fff;\n  font-size: 14px;\n  vertical-align: top;\n}\n.midrolltip .cupid-text {\n  display: inline-block;\n  font-size: 14px;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: bottom;\n}\n.cupid-public-time .cd-time {\n  width: 28px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font: 20px/1.5 "ds-digital" !important;\n  display: inline-block;\n  position: relative;\n  color: #fff;\n}\n.cupid-public-time a {\n  position: relative;\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n}\n.cupid-public-time .public-vip {\n  margin-left: 4px;\n  color: #fff;\n  font-size: 14px;\n  vertical-align: top;\n}\n.cupid-public-time .public-vip:hover {\n  color: #57a900;\n}\n.public-vip .vip-marketing-doc {\n  display: inline-block;\n  margin-left: 8px;\n  height: 30px;\n  line-height: 30px;\n  color: #C5955D;\n  white-space: nowrap;\n}\n.public-vip:hover .public-vip-text {\n  color: #57a900;\n}\n.public-vip:hover .vip-marketing-doc {\n  color: #57a900;\n}\n.cupid-public-time .public-vip span {\n  display: inline-block;\n  font-size: 14px;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: bottom;\n}\n.cupid-public-time .vip-doc-wrap {\n  display: inline-block;\n  width: 0;\n  height: 30px;\n  line-height: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  transition: width 2s;\n  -webkit-transition: width 2s;\n  /* Safari */\n}\n/* end normal ad tip */\n.tp_vip-show {\n  width: 623px;\n  height: 56px;\n  line-height: 56px;\n  color: #c89e6c;\n  font-size: 18px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: url(//www.iqiyipic.com/common/fix/view-tp/command.png) no-repeat;\n  overflow: hidden;\n  _background: 0;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src=\'//www.iqiyipic.com/common/fix/view-tp/command.png\');\n}\n.sports-tip-show {\n  position: absolute;\n  z-index: 100;\n  background: rgba(26, 26, 26, 0.7);\n  border-radius: 20px;\n  padding: 0 20px 0 20px;\n  width: auto;\n  font-size: 0;\n  height: 30px;\n  left: 20px;\n  top: 20px;\n  line-height: 30px;\n  text-align: center;\n}\n.sports-tip-logo-wrap {\n  display: block;\n  float: left;\n  height: 30px;\n  padding: 7px 0;\n  line-height: 30px;\n}\n.sports-tip-logo {\n  display: inline-block;\n  height: 16px;\n  line-height: 16px;\n}\n.sports-vip-text {\n  color: #00c13b;\n  margin-left: 10px;\n  font-size: 14px;\n}\n.cupid-public-time .sports-vip-text {\n  color: #fff;\n  margin-left: 0px;\n  font-size: 14px;\n}\n.sports-vip-text:hover {\n  color: #00d440;\n}\n.cupid-public-time .sports-cd-time {\n  color: #00d440;\n}\n.tp_vip-show .tp_vip-gif {\n  float: left;\n  width: 67px;\n  height: 56px;\n  background: url(//www.iqiyipic.com/common/fix/view-tp/vip-tp.gif) no-repeat;\n}\n.tp_vip-close {\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  width: 169px;\n  height: 30px;\n  border-radius: 2px;\n  background-color: #434343;\n}\n.tp_close-time {\n  float: left;\n  width: 50px;\n  border-right: 1px solid #131313;\n  text-align: center;\n  color: #c89e6c;\n  font: 22px/30px "ds-digital" !important;\n}\n.tp_close-txt {\n  float: left;\n}\n.tp_close-txt a {\n  display: inline-block;\n  width: 117px;\n  line-height: 30px;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  border-left: 1px solid #3c3c3c;\n}\n.tp_close-txt a:hover {\n  color: #c89e6c;\n}\n.tp_vip-time {\n  position: absolute;\n  top: 28px;\n  right: 10px;\n  width: 50px;\n  height: 30px;\n  text-align: center;\n  color: #bbbbbb;\n  font: 22px/30px "ds-digital" !important;\n  background-color: #333;\n  background: rgba(51, 51, 51, 0.9);\n  border-radius: 2px;\n}\n.tp_vip-nointerest {\n  position: absolute;\n  top: 15px;\n  right: 75px;\n  width: 151px;\n  height: 55px;\n  background-color: #333;\n  background: rgba(51, 51, 51, 0.9);\n  border-radius: 2px;\n}\n.tp_nointerest-top {\n  color: #fff;\n  text-align: center;\n  line-height: 30px;\n  font-size: 14px;\n}\n.tp_nointerest-btm {\n  color: #999999;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  float: left;\n}\n.tp_nointerest-btm span {\n  float: left;\n  width: 40px;\n  height: 20px;\n  color: #5aa700;\n  font: 25px/20px "ds-digital" !important;\n}\n.tp_vip-detial {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  width: 112px;\n  height: 35px;\n  background-color: #333;\n  background: rgba(51, 51, 51, 0.5);\n  border-radius: 2px;\n}\n.tp_vip-detial a {\n  display: inline-block;\n  width: 103px;\n  height: 35px;\n  line-height: 35px;\n  padding-left: 9px;\n  color: #fff;\n  font-size: 16px;\n}\n.tp_vip-detial span {\n  position: absolute;\n  right: 5px;\n  top: 6px;\n  width: 23px;\n  height: 23px;\n  background: url(//www.iqiyipic.com/common/fix/view-tp/detial.png) no-repeat;\n  _background: 0;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src=\'//www.iqiyipic.com/common/fix/view-tp/detial.png\');\n}\n.tp_vip-detial a:hover,\n.tp_vip-free a:hover {\n  color: #5aa700;\n}\n.tp_vip-detial a:hover span {\n  background: url(//www.iqiyipic.com/common/fix/view-tp/detialhover.png) no-repeat;\n  _background: 0;\n  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src=\'//www.iqiyipic.com/common/fix/view-tp/detialhover.png\');\n}\n/*3*/\n.tp_vip-time1 {\n  top: 15px;\n}\n.tp_vip-free {\n  position: absolute;\n  top: 15px;\n  right: 75px;\n  text-align: center;\n  background-color: #333;\n  background: rgba(51, 51, 51, 0.9);\n  border-radius: 2px;\n}\n.tp_vip-free a {\n  display: inline-block;\n  width: 131px;\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  font-size: 14px;\n}\n.tp_disable-skip {\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  height: 30px;\n  border-radius: 2px;\n}\n.tp_disable-skip-txt {\n  float: left;\n  padding: 0 10px;\n  background-color: #434343;\n  border-radius: 2px;\n}\n.tp_disable-skip-txt a {\n  display: inline-block;\n  line-height: 30px;\n  color: #999;\n  font-size: 14px;\n  text-align: center;\n}\n.tp_disable-skip-time {\n  float: left;\n  margin-left: 10px;\n  width: 35px;\n  border-radius: 2px;\n  text-align: center;\n  color: #999;\n  background-color: #434343;\n  font: 16px/30px "ds-digital" !important;\n}\n.tp_disable-skip-txt .tp_disable-skip-detail {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  margin-left: 5px;\n  color: grey;\n  border: 1px solid;\n  border-color: grey;\n  border-radius: 8px;\n}\n.tp_disable-skip-detail:hover {\n  color: #999;\n  border-color: #999;\n}\n.black-screen {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: #000;\n  color: #fff;\n  z-index: 500;\n}\n.black-screen-notice {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.black-screen-text {\n  margin-top: 12px;\n  line-height: 34px;\n  font-size: 18px;\n}\n.black-screen-text .cd-time {\n  color: #ff6000;\n}\n.black-screen-sub-text {\n  margin-top: 20px;\n  line-height: 24px;\n  font-size: 14px;\n}\n.black-screen-sub-text .black-screen-purchase,\n.black-screen-feedback-notice .black-screen-feedback {\n  color: #00be06;\n  cursor: pointer;\n}\n.black-screen-feedback-notice {\n  position: absolute;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 25px;\n  text-align: right;\n}\n/*===========随视购============*/\n.video_ad-buy {\n  height: 90px;\n  border: 1px solid #66666f;\n  border-radius: 1px;\n  background: rgba(0, 0, 0, 0.7);\n  /*\n  width: 296px;\n  position: absolute;\n  right: 50px;\n  bottom: 30px;\n  */\n}\n.buy-pic,\n.buy-txt {\n  float: left;\n  height: 90px;\n}\n.buy-pic a {\n  display: inline-block;\n  height: 90px;\n}\n.buy-txt {\n  width: 176px;\n  height: 60px;\n  padding: 15px;\n}\n.buy-txt h3 {\n  height: 28px;\n  line-height: 28px;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.buy-detial {\n  overflow: hidden;\n}\n.detial-price {\n  float: left;\n  color: #fe6e16;\n  font-size: 16px;\n  line-height: 28px;\n}\n.detial-price span {\n  font-size: 16px;\n}\na.detial-btn {\n  float: right;\n  width: 84px;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  background: #5ca500;\n  border-radius: 2px;\n}\n.detial-btn:hover,\n.video-baozhang-btn a:hover {\n  background: #66b500;\n}\n.video_buy-icon {\n  width: 35px;\n  height: 20px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 12px;\n  color: #fff;\n  line-height: 20px;\n  text-align: center;\n}\n.video_buy-close {\n  width: 8px;\n  height: 8px;\n  background: url(//www.iqiyipic.com/common/fix/videoplay/close.png) no-repeat;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n}\n.video_buy-close:hover {\n  background-position: -10px 0;\n}\n.cupid-panel {\n  position: absolute;\n  display: none;\n  top: 50%;\n  left: 50%;\n  background: #272728;\n  color: #999;\n  z-index: 1000;\n}\n.cupid-common-panel {\n  width: 380px;\n  height: 180px;\n  margin-left: -190px;\n  margin-top: -90px;\n}\n.feedback-panel {\n  position: fixed;\n  z-index: 1000;\n  width: 480px;\n  height: 360px;\n  margin-left: -240px;\n  margin-top: -180px;\n  background: #000;\n  border-radius: 15px;\n}\n.cupid-panel-close {\n  width: 8px;\n  height: 8px;\n  background: url(//www.iqiyipic.com/common/fix/videoplay/close.png) no-repeat;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n}\n.cupid-panel-body {\n  padding: 25px;\n  font-size: 14px;\n}\n.cupid-panel-footer {\n  position: absolute;\n  width: 100%;\n  height: 30px;\n  bottom: 20px;\n}\n.cupid-panel-btn {\n  display: block;\n  width: 120px;\n  height: 35px;\n  margin: 0 auto;\n  border: 1px solid grey;\n  border-radius: 3px;\n}\n.cupid-panel-btn:hover {\n  background: #fff;\n}\n.feedback-submit {\n  display: block;\n  margin: 0 auto;\n  width: 90px;\n  height: 30px;\n  color: #ffffff;\n  font-size: 16px;\n  border: 0;\n  border-radius: 3px;\n  background: #7ab400;\n}\n.cupid-panel label,\n.cupid-panel-body label {\n  display: block;\n  color: #999999;\n  font-family: "微软雅黑";\n  font-size: 12px;\n}\n.cupid-panel fieldset,\n.cupid-panel-body fieldset {\n  margin: 0 5px;\n  border: 0px;\n}\n.feedback-input {\n  display: block;\n  width: 400px;\n  height: 24px;\n  margin: 10px 0;\n  font-size: 12px;\n  font-family: "微软雅黑";\n  outline: none;\n  color: #999;\n  background: #444444;\n  border: 0;\n}\n.feedback-detail {\n  width: 400px;\n  height: 80px;\n  max-height: 80px;\n  margin: 10px 0;\n  font-size: 12px;\n  font-family: "微软雅黑";\n  color: #999;\n  border: 0;\n  resize: none;\n  outline: none;\n  background: #444444;\n}\n.mars-feedback-tip {\n  margin: 0 5px;\n  color: #7ab400;\n}\n.black-screen {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: #000;\n  color: #fff;\n  z-index: 500;\n}\n.black-screen-notice {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.black-screen-text {\n  margin-top: 12px;\n  line-height: 34px;\n  font-size: 18px;\n}\n.black-screen-text .cd-time {\n  color: #ff6000;\n}\n.black-screen-sub-text {\n  margin-top: 20px;\n  line-height: 24px;\n  font-size: 14px;\n}\n.black-screen-sub-text .black-screen-purchase,\n.black-screen-feedback-notice .black-screen-feedback {\n  color: #00be06;\n  cursor: pointer;\n}\n.black-screen-feedback-notice {\n  position: absolute;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 25px;\n  text-align: right;\n}\n.cupid-badge {\n  width: 27px;\n  height: 16px;\n  border-radius: 1px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  font-size: 10px;\n  color: #fff;\n  line-height: 16px;\n  text-align: center;\n  z-index: 99;\n}\n.cupid-close {\n  width: 20px;\n  height: 20px;\n  background: url(//www.iqiyipic.com/common/fix/videoplay/video_close.png) no-repeat;\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  cursor: pointer;\n}\n.cupid-summary-panel {\n  font-family: \'monospace, consolas\';\n  padding: 10px;\n}\n.cupid-summary-panel ul {\n  padding-left: 40px;\n}\n.cupid-seed-play-btn {\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  background: url(//pic1.iqiyipic.com/common/20180327/cupid-minseed-play.png) no-repeat;\n  cursor: pointer;\n  z-index: 99;\n}\n', ""])
		},
		function(n, e, t) {
			"use strict";
			n.exports = function(n) {
				var e = [];
				return e.toString = function() {
					return this.map(function(e) {
						var t = function(n, e) {
							var t = n[1] || "",
								i = n[3];
							if (!i) return t;
							if (e && "function" == typeof btoa) {
								var r = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
									o = i.sources.map(function(n) {
										return "/*# sourceURL=" + i.sourceRoot + n + " */"
									});
								return [t].concat(o).concat([r]).join("\n")
							}
							var a;
							return [t].join("\n")
						}(e, n);
						return e[2] ? "@media " + e[2] + "{" + t + "}" : t
					}).join("")
				}, e.i = function(n, t) {
					"string" == typeof n && (n = [
						[null, n, ""]
					]);
					for (var i = {}, r = 0; r < this.length; r++) {
						var o = this[r][0];
						null != o && (i[o] = !0)
					}
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						null != a[0] && i[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), e.push(a))
					}
				}, e
			}
		},
		function(n, e, t) {
			var i, r, o = {},
				a = (i = function() {
					return window && document && document.all && !window.atob
				}, function() {
					return void 0 === r && (r = i.apply(this, arguments)), r
				}),
				c = function(n) {
					var e = {};
					return function(n, t) {
						if ("function" == typeof n) return n();
						if (void 0 === e[n]) {
							var i = function(n, e) {
								return e ? e.querySelector(n) : document.querySelector(n)
							}.call(this, n, t);
							if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
								i = i.contentDocument.head
							} catch (n) {
								i = null
							}
							e[n] = i
						}
						return e[n]
					}
				}(),
				s = null,
				l = 0,
				p = [],
				u = t(25);

			function d(n, e) {
				for (var t = 0; t < n.length; t++) {
					var i = n[t],
						r = o[i.id];
					if (r) {
						r.refs++;
						for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
						for (; a < i.parts.length; a++) r.parts.push(m(i.parts[a], e))
					} else {
						var c = [];
						for (a = 0; a < i.parts.length; a++) c.push(m(i.parts[a], e));
						o[i.id] = {
							id: i.id,
							refs: 1,
							parts: c
						}
					}
				}
			}

			function f(n, e) {
				for (var t = [], i = {}, r = 0; r < n.length; r++) {
					var o = n[r],
						a = e.base ? o[0] + e.base : o[0],
						c = {
							css: o[1],
							media: o[2],
							sourceMap: o[3]
						};
					i[a] ? i[a].parts.push(c) : t.push(i[a] = {
						id: a,
						parts: [c]
					})
				}
				return t
			}

			function h(n, e) {
				var t = c(n.insertInto);
				if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
				var i = p[p.length - 1];
				if ("top" === n.insertAt) i ? i.nextSibling ? t.insertBefore(e, i.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), p.push(e);
				else if ("bottom" === n.insertAt) t.appendChild(e);
				else {
					if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
					var r = c(n.insertAt.before, t);
					t.insertBefore(e, r)
				}
			}

			function v(n) {
				if (null === n.parentNode) return !1;
				n.parentNode.removeChild(n);
				var e = p.indexOf(n);
				e >= 0 && p.splice(e, 1)
			}

			function b(n) {
				var e = document.createElement("style");
				if (void 0 === n.attrs.type && (n.attrs.type = "text/css"), void 0 === n.attrs.nonce) {
					var i = function() {
						0;
						return t.nc
					}();
					i && (n.attrs.nonce = i)
				}
				return g(e, n.attrs), h(n, e), e
			}

			function g(n, e) {
				Object.keys(e).forEach(function(t) {
					n.setAttribute(t, e[t])
				})
			}

			function m(n, e) {
				var t, i, r, o;
				if (e.transform && n.css) {
					if (!(o = "function" == typeof e.transform ? e.transform(n.css) : e.transform.default(n.css))) return function() {};
					n.css = o
				}
				if (e.singleton) {
					var a = l++;
					t = s || (s = b(e)), i = k.bind(null, t, a, !1), r = k.bind(null, t, a, !0)
				} else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function(n) {
					var e = document.createElement("link");
					return void 0 === n.attrs.type && (n.attrs.type = "text/css"), n.attrs.rel = "stylesheet", g(e, n.attrs), h(n, e), e
				}(e), i = function(n, e, t) {
					var i = t.css,
						r = t.sourceMap,
						o = void 0 === e.convertToAbsoluteUrls && r;
					(e.convertToAbsoluteUrls || o) && (i = u(i));
					r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
					var a = new Blob([i], {
							type: "text/css"
						}),
						c = n.href;
					n.href = URL.createObjectURL(a), c && URL.revokeObjectURL(c)
				}.bind(null, t, e), r = function() {
					v(t), t.href && URL.revokeObjectURL(t.href)
				}) : (t = b(e), i = function(n, e) {
					var t = e.css,
						i = e.media;
					i && n.setAttribute("media", i);
					if (n.styleSheet) n.styleSheet.cssText = t;
					else {
						for (; n.firstChild;) n.removeChild(n.firstChild);
						n.appendChild(document.createTextNode(t))
					}
				}.bind(null, t), r = function() {
					v(t)
				});
				return i(n),
					function(e) {
						if (e) {
							if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
							i(n = e)
						} else r()
					}
			}
			n.exports = function(n, e) {
				if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
				(e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
				var t = f(n, e);
				return d(t, e),
					function(n) {
						for (var i = [], r = 0; r < t.length; r++) {
							var a = t[r];
							(c = o[a.id]).refs--, i.push(c)
						}
						n && d(f(n, e), e);
						for (r = 0; r < i.length; r++) {
							var c;
							if (0 === (c = i[r]).refs) {
								for (var s = 0; s < c.parts.length; s++) c.parts[s]();
								delete o[c.id]
							}
						}
					}
			};
			var y, x = (y = [], function(n, e) {
				return y[n] = e, y.filter(Boolean).join("\n")
			});

			function k(n, e, t, i) {
				var r = t ? "" : i.css;
				if (n.styleSheet) n.styleSheet.cssText = x(e, r);
				else {
					var o = document.createTextNode(r),
						a = n.childNodes;
					a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(o, a[e]) : n.appendChild(o)
				}
			}
		},
		function(n, e) {
			n.exports = function(n) {
				var e = "undefined" != typeof window && window.location;
				if (!e) throw new Error("fixUrls requires window.location");
				if (!n || "string" != typeof n) return n;
				var t = e.protocol + "//" + e.host,
					i = t + e.pathname.replace(/\/[^\/]*$/, "/");
				return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, e) {
					var r, o = e.trim().replace(/^"(.*)"$/, function(n, e) {
						return e
					}).replace(/^'(.*)'$/, function(n, e) {
						return e
					});
					return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? n : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? t + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
				})
			}
		},
		function(n, e, t) {
			"use strict";
			t.r(e);
			t(21);
			var i = t(6),
				r = t.n(i),
				o = t(7),
				a = t.n(o),
				c = t(8),
				s = t.n(c),
				l = t(9),
				p = t.n(l),
				u = t(10),
				d = t.n(u),
				f = t(11),
				h = t.n(f),
				v = t(12),
				b = t.n(v),
				g = t(13),
				m = t.n(g),
				y = t(14),
				x = t.n(y),
				k = t(15),
				w = t.n(k),
				S = t(0),
				_ = function(n) {
					var e = document.createElement("div");
					return e.innerHTML = n, e.firstChild
				},
				$ = function(n, e) {
					return e = e || {}, (n + "").replace(/{([\s\S]+?)}/g, function(n, t) {
						return e[t] || ""
					})
				},
				C = function(n, e) {
					return n = S.a.trim(n), e && n.length > e && (n = S.a.slice(n, 0, e - 1) + String.fromCharCode(8230)), n
				},
				T = function(n) {
					n.style.display = "", n.style.visibility = ""
				},
				A = function(n) {
					n.style.display = "none"
				},
				j = {
					zh_CN: {
						"请您稍事休息": "请您稍事休息",
						"广告之后更精彩哟~": "广告之后更精彩哟~",
						"会员跳广告": "会员跳广告",
						"关闭此推荐": "关闭此推荐",
						"了解详情": "了解详情",
						"查看详情": "查看详情",
						"广告": "广告",
						"手机（选填）": "手机（选填）",
						"邮件（选填）": "邮件（选填）",
						"请简短说明一下您遇到的问题（选填）": "请简短说明一下您遇到的问题（选填）",
						"提交": "提交",
						"我知道了": "我知道了",
						"收到！我们会尽快为您解决问题!": "收到！我们会尽快为您解决问题!",
						"提交失败，请稍后重试": "提交失败，请稍后重试",
						"应版权方要求，会员无法跳过该剧广告": "应版权方要求，会员无法跳过该剧广告",
						"版权文案": "为了给大家提供更多优质的美剧资源，应版权方的要求，会员在观看《破产姐妹》、《吸血鬼日记》、《无耻之徒》等美剧时，无法跳过广告，我们会为会员用户继续争取跳广告的权益，非常抱歉，感谢大家的支持！",
						"广告被拦截，无法正常播放了": "广告被拦截，无法正常播放了",
						"秒后播放正片": "秒后播放正片",
						"关闭拦截插件并刷新页面，可恢复正常": "关闭拦截插件并刷新页面，可恢复正常",
						"爱奇艺": "爱奇艺",
						"尊享会员特权，轻轻松松跳广告": "尊享会员特权，轻轻松松跳广告",
						"仍然无法观看？戳这里": "仍然无法观看？戳这里",
						"反馈给我们": "反馈给我们",
						"广告之后精彩继续": "广告之后精彩继续"
					},
					tw: {
						"请您稍事休息": "請您稍事休息",
						"广告之后更精彩哟~": "廣告之後更精彩喲~",
						"会员跳广告": "會員跳廣告",
						"了解详情": "了解詳情",
						"查看详情": "查看詳情",
						"关闭此推荐": "關閉此推薦",
						"广告": "廣告",
						"手机（选填）": "手機（選填）",
						"邮件（选填）": "郵箱（選填）",
						"请简短说明一下您遇到的问题（选填）": "請簡短說明一下您遇到的問題（選填）",
						"提交": "提交",
						"我知道了": "我知道了",
						"收到！我们会尽快为您解决问题!": "收到！我們會儘快為您解決問題！",
						"提交失败，请稍后重试": "提交失敗，請稍後重試",
						"应版权方要求，会员无法跳过该剧广告": "應版權方要求，會員無法跳過該劇廣告",
						"版权文案": "為了給大家提供更多優質的美劇資源，應版權方的要求，會員在觀看《破產姐妹》、《吸血鬼日記》、《無恥之徒》等美劇時，無法跳過廣告，我們會為會員用戶繼續爭取跳廣告的權益，非常抱歉，感謝大家的支持！",
						"广告被拦截，无法正常播放了": "廣告被攔截，無法正常播放了",
						"秒后播放正片": "秒後播放正片",
						"关闭拦截插件并刷新页面，可恢复正常": "關閉攔截插件並刷新頁面，可恢復正常",
						"爱奇艺": "愛奇藝",
						"尊享会员特权，轻轻松松跳广告": "尊享會員特權，輕輕松松跳廣告",
						"仍然无法观看？戳这里": "仍然無法觀看？戳這裏",
						"反馈给我们": "反饋給我們",
						"广告之后精彩继续": "廣告之後精彩繼續"
					}
				};

			function V(n) {
				return (V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
					return typeof n
				} : function(n) {
					return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
				})(n)
			}

			function I(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			var q = new(function() {
				function n() {
					! function(n, e) {
						if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, n), this.resources = {};
					var e = [];
					"object" == ("undefined" == typeof navigator ? "undefined" : V(navigator)) && (e = navigator.languages || [navigator.language]), this.setLocales(e)
				}
				var e, t, i;
				return e = n, (t = [{
					key: "is",
					value: function(n) {
						return S.a.includes(S.a.lower(this.locale), S.a.lower(n))
					}
				}, {
					key: "setResource",
					value: function(n, e) {
						this.resources[n] = e
					}
				}, {
					key: "setResources",
					value: function(n) {
						S.a.extend(this.resources, n)
					}
				}, {
					key: "setLocale",
					value: function(n) {
						var e = this;
						if (n) {
							e.locale = n;
							var t = e.matchedLocale(S.a.keys(e.resources), n);
							return e.resource = e.resources[t] || {}, t
						}
					}
				}, {
					key: "setLocales",
					value: function(n) {
						this.locales = n, this.setLocale(S.a.first(n))
					}
				}, {
					key: "translate",
					value: function(n) {
						return this.resource[n] || n
					}
				}, {
					key: "matchedLocale",
					value: function(n, e) {
						var t = this;
						return n = S.a.map(n, function(n) {
							return {
								raw: n,
								score: t.getSimilar(n, e)
							}
						}).sort(function(n, e) {
							return n.score - e.score
						}), (S.a.last(n) || {}).raw
					}
				}, {
					key: "getSimilar",
					value: function(n, e) {
						var t = 0;
						return n = this.parseLocale(S.a.lower(n)), e = this.parseLocale(S.a.lower(e)), n.language && n.language == e.language && (t += 50), n.country && n.country == e.country && (t += 40), n.language && n.language == e.country && (t += 20), e.language && e.language == n.country && (t += 20), t
					}
				}, {
					key: "parseLocale",
					value: function(n) {
						var e = n.split(/[^a-zA-Z]+/);
						return {
							language: e[0],
							country: e[1]
						}
					}
				}]) && I(e.prototype, t), i && I(e, i), n
			}());
			q.setResources(j);
			var E = q,
				L = t(16),
				O = t.n(L),
				M = t(2);

			function P(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			var z = function() {
					function n(e) {
						! function(n, e) {
							if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, n);
						var t = this,
							i = t.$midrollTip = _($(O.a, E.resource));
						A(t.$midrollTip), t.totalDuration = 5, e.appendChild(i), t.timer = new M.a(1e3, t.totalDuration), t.state = "idle", t.init()
					}
					var e, t, i;
					return e = n, (t = [{
						key: "init",
						value: function() {
							var n = this,
								e = n.timer;
							n.$timeText = n.$midrollTip.querySelector(".midrolltip-time"), e.on("timer", function() {
								var t = n.totalDuration - e.currentCount;
								n.$timeText.textContent = t
							}), e.on("timerComplete", function() {
								n.end()
							}), e.reset()
						}
					}, {
						key: "start",
						value: function() {
							this.timer.start(), this.state = "start", T(this.$midrollTip)
						}
					}, {
						key: "resume",
						value: function() {
							this.timer.start(), this.init.state = "start"
						}
					}, {
						key: "reset",
						value: function() {
							this.state = "idle", A(this.$midrollTip), this.timer.reset(), this.$timeText.textContent = "5"
						}
					}, {
						key: "stop",
						value: function() {
							this.state = "stop", this.timer.stop()
						}
					}, {
						key: "end",
						value: function() {
							this.reset(), this.timer.stop()
						}
					}]) && P(e.prototype, t), i && P(e, i), n
				}(),
				D = t(1);

			function B(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			var R = function() {
					function n(e) {
						! function(n, e) {
							if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, n);
						var t = this;
						t.viewController = e, t.sdk = e.sdk, t.debug = t.sdk.logger.getLogger("rollView"), t.mw = t.sdk.videoMidware, t.$video = t.mw.video(), t.$adContainer = t.mw.adcontainer(), E.setLocale(t.sdk.locale), t.midrollTip = new z(t.$adContainer), t.initAdElements()
					}
					var e, t, i;
					return e = n, (t = [{
						key: "initAdElements",
						value: function() {
							var n = this;
							if (!n.initedAdElements) {
								n.initedAdElements = !0;
								var e = n.$adContainer;
								n.parseDomeFromStr(), n.createMask();
								var t = document.createDocumentFragment();
								t.appendChild(n.$controls), t.appendChild(n.$seekableLearnMore), t.appendChild(n.$normalAdTip), t.appendChild(n.$vipAdTip), t.appendChild(n.$sportsVipAdTip), t.appendChild(n.$trueViewBeforeAdTip), t.appendChild(n.$trueViewAfterAdTip), t.appendChild(n.$disableSkipAdTip), t.appendChild(n.$disableSkipAdPanel), t.appendChild(n.$mask), e.appendChild(t), n.removeOptions("default hidden")
							}
						}
					}, {
						key: "parseDomeFromStr",
						value: function() {
							var n = this;
							n.$normalAdTip = _($(s.a, E.resource)), n.$vipAdTip = _($(p.a, E.resource)), n.$trueViewBeforeAdTip = _($(d.a, E.resource)), n.$trueViewAfterAdTip = _($(h.a, E.resource)), n.$disableSkipAdTip = _($(b.a, E.resource)), n.$sportsVipAdTip = _($(m.a, E.resource)), n.$disableSkipAdPanel = _($(x.a, E.resource));
							var e = n.$disableSkipAdPanel.querySelector(".cupid-panel-btn");
							n.$disableSkipAdTip.querySelector(".tp_disable-skip-detail").addEventListener("click", function() {
								n.$disableSkipAdPanel.style.display = ""
							}), e.addEventListener("click", function() {
								n.$disableSkipAdPanel.style.display = "none"
							}), n.bindSkipEvent();
							var t = n.$controls = _($(a.a, E.resource)),
								i = n.$voice = t.querySelector(".bottom-public_voice"),
								r = n.$play = t.querySelector(".bottom-public_play"),
								o = n.$fullscreen = t.querySelector(".public-screen"),
								c = n.$learnMore = t.querySelector(".know-detail"),
								l = n.$seekableLearnMore = _($(w.a, E.resource));
							r.addEventListener("click", function() {
								var e = n.mw;
								e.isPaused() ? (n.debug("clicl play"), n.pingback("ply_adply"), e.play()) : (n.pingback("ply_adps"), n.debug("click pause"), e.pause(!0))
							}), i.addEventListener("click", function() {
								var e = n.mw;
								e.muted() ? (n.debug("click mute => voice"), n.pingback("ply_addmt"), e.muted(!1)) : (n.pingback("ply_admt"), e.muted(!0)), n.syncVoiceStatus()
							}), o.addEventListener("click", function() {
								var e = n.mw;
								e.isFullScreen() ? (n.debug("exit fullscreen"), n.pingback("ply_addfllscrn"), n.viewController.exitFullScreen()) : (n.debug("进入全屏"), n.pingback("ply_adfllscrn"), e.fullscreentoggle())
							}), n.mw.on("fullscreen", function() {
								n.syncFullscreenStatus()
							}), n.mw.on("exitfullscreen", function() {
								n.syncFullscreenStatus()
							}), n.mw.on("play", function() {
								n.syncPlayStatus()
							}), n.mw.on("pause", function() {
								n.syncPlayStatus()
							}), c.addEventListener("click", function() {
								n.pingback("ply_addtl"), n.sdk.currentVV.schedule.getCurrentAd().emit("clickAndOpen")
							}), l.addEventListener("click", function() {
								n.pingback("ply_addtl"), n.sdk.currentVV.schedule.getCurrentAd().emit("clickAndOpen")
							}), n.videoEvtHandler = function() {
								var e = n.sdk.currentVV.schedule.getCurrentAd();
								"mraid" != e.template.type && (n.debug("video click"), e.emit("clickAndOpen"))
							}, n.syncVoiceStatus()
						}
					}, {
						key: "trySetOptions",
						value: function(n) {
							(n = n || {}).theme == this.options.theme || this.setOptions(n), this.syncVoiceStatus()
						}
					}, {
						key: "setOptions",
						value: function(n) {
							var e = this;
							e.debug("set options", n), e.hideAllAdElements("默认清除"), e.options = n;
							var t = n.ad || e.sdk.currentVV.schedule.getCurrentAd() || {};
							e.$video.removeEventListener("click", e.videoEvtHandler), e.$video.style.cursor = "", n.theme && (e.useTheme(n.theme, t), t.clickThrough && (e.$video.addEventListener("click", e.videoEvtHandler), e.$video.style.cursor = "pointer"))
						}
					}, {
						key: "useTheme",
						value: function(n, e) {
							var t, i = this;
							if (i.debug("use theme", n, e.id), "rolllike" == n ? (i.$controls.style.display = "none", i.showMask()) : "origin" == n ? e && e.isSeekableOriginalRoll() && (i.$controls.style.display = "none", e.clickThrough && (i.$seekableLearnMore.style.display = "")) : i.$controls.style.display = "", i.$countdown = null, i.sdk.currentVV.disableSkipAd) t = i.$disableSkipAdTip;
							else if ("vip" == n) t = i.$vipAdTip;
							else if ("sports-vip" == n) t = i.$sportsVipAdTip;
							else if ("origin" == n);
							else if (S.a.includes(n, "trueview")) t = S.a.includes(n, "before") ? i.$trueViewBeforeAdTip : i.$trueViewAfterAdTip;
							else {
								var r = "会员跳广告";
								"tw" === E.locale && (r = "會員跳廣告"), i.sdk.currentVV.isSportsVideo() && (r = "体育会员跳广告", "tw" === E.locale && (r = "會員跳廣告")), i.$normalAdTip.querySelector(".public-vip-text").textContent = r, t = i.$normalAdTip
							}
							var o = i.$learnMore;
							e.$dspIcon && (e.$dspIcon.style.display = "");
							var a = e.clickThrough;
							if (o) {
								var c = !0;
								!S.a.includes(["vip", "origin"], n) && a || (c = !1), i.debug("should show learn more", c), o.style.display = c ? "" : "none"
							}
							if (t) {
								t.style.display = "", t.style.zIndex = 3001, i.$countdown = t.querySelector(".cd-time"), i.$trueViewCountdown = t.querySelector(".cd-trueview-time"), i.$vipText = t.querySelector(".public-vip-text"), i.$vipMarketingDoc = t.querySelector(".vip-marketing-doc"), i.$vipDocWrap = t.querySelector(".vip-doc-wrap");
								var s = i.sdk.currentVV;
								if (0 === e.index() && i.removeVipDoc("reset vip doc"), !e.slot.hasRequestedVipDoc && !i.sdk.isVIP && !s.isSportsVideo()) {
									var l = Object(D.c)("CA0001"),
										p = i.sdk.passportId;
									if (l) {
										try {
											l = JSON.parse(l)
										} catch (n) {
											i.debug("parse vip doc cookie error", n)
										}
										p === l.passportId && E.locale === l.locale ? i.setVipDoc(l) : (i.debug("change passport id"), i.requestVipDoc(s.episodeId, p))
									} else i.requestVipDoc(s.episodeId, p)
								}
								e.slot.hasRequestedVipDoc = !0
							} else i.debug("no ad tip", e.id)
						}
					}, {
						key: "removeOptions",
						value: function(n) {
							this.options = {}, this.hideAllAdElements(n), this.removeVipDoc(n)
						}
					}, {
						key: "hideAllAdElements",
						value: function(n) {
							this.debug("hide all ad elements", n);
							for (var e = this.$adContainer.children, t = e.length, i = 0; i < t; i++) {
								var r = e[i].getAttribute("data-adzone"),
									o = e[i].getAttribute("data-cupid"),
									a = this.sdk.isblocked && "adblock-blackscreen" === o;
								r || a || (e[i].style.display = "none")
							}
						}
					}, {
						key: "updateCountdown",
						value: function(n, e) {
							var t = this;
							t.$countdown && (t.$countdown.textContent = n);
							var i = t.sdk.currentVV.schedule.getCurrentAd();
							t.$vipText && e && i && i.remain <= 1 && (i.pause(), t.$vipText.textContent = "关闭此广告")
						}
					}, {
						key: "updateTrueViewCountdown",
						value: function(n) {
							this.$trueViewCountdown && (this.$trueViewCountdown.textContent = n)
						}
					}, {
						key: "bindSkipEvent",
						value: function() {
							var n = this;
							n.debug("bind skip evetn"), n.onSkip = function() {
								n.pingback("ply_adclkskp"), n.debug("click skip");
								var e = n.sdk.currentVV.schedule.getCurrentAd();
								return "mraid" == e.creative.templateType && e.hasInteracted && e.remain <= 1 ? (e.emit("tracking", "sp"), e.emit("pingback", {
									subtype: "sp"
								}), e.emit("end")) : e.emit("skip"), !1
							};
							var e = n.$normalAdTip.querySelector(".public-vip"),
								t = n.$sportsVipAdTip.querySelector(".public-vip"),
								i = n.$vipAdTip.querySelector(".tp_close-txt"),
								r = n.$trueViewAfterAdTip.querySelector(".tp_vip-free");
							e.addEventListener("click", n.onSkip), i.addEventListener("click", n.onSkip), r.addEventListener("click", n.onSkip), t.addEventListener("click", n.onSkip)
						}
					}, {
						key: "syncVoiceStatus",
						value: function() {
							var n = this.mw.muted(),
								e = this.mw.volume(),
								t = (n = n || 0 == e) ? "voice-no" : "voice-big";
							this.$voice.querySelector("i").className = t
						}
					}, {
						key: "syncFullscreenStatus",
						value: function() {
							var n = this.mw.isFullScreen() ? "screen-all" : "screen-small";
							this.$fullscreen.querySelector("i").className = n
						}
					}, {
						key: "syncPlayStatus",
						value: function() {
							var n = this,
								e = n.mw.isPaused();
							"idle" != n.midrollTip.state && (e ? n.midrollTip.stop() : n.midrollTip.start());
							var t = e ? "btn-play" : "btn-pause";
							n.$play.querySelector("i").className = t
						}
					}, {
						key: "setVipTitle",
						value: function(n, e) {
							var t = e.ad;
							if ("trueView" == n) e.log("trueview", t.duration, t.impressionTime, t.skipTime);
							else if ("vip" == n || "sports-vip" == n) {
								var i = t.creative.creativeObject.vipTitle,
									r = t.creative.creativeObject.vipLogo,
									o = this.$adContainer;
								e.log("vip", i, r), i ? o.querySelector(".tp_vip-text").textContent = i : "sports-vip" == n ? o.querySelector(".sports-tip-show").style.display = "none" : o.querySelector(".tp_vip-show").style.display = "none", r && o.querySelector(".sports-tip-logo").setAttribute("src", r)
							} else "origin" == n && e.log("origin roll");
							var a = {
								bottom: this.$controls && this.$controls.offsetHeight || 0,
								left: 25
							};
							t.hasDspIcon() && t.putIcon(t.dspIcon, a), 1 == t.targetedAd && (e.log("precise ad and add icon"), t.putIcon("http://pic9.iqiyipic.com/common/20161221/privacy.png", a).then(function(n) {
								n.addEventListener("click", function() {
									window.open("http://www.iqiyi.com/common/secret.html")
								})
							}))
						}
					}, {
						key: "pingback",
						value: function(n) {
							return this.debug("longyuan pingback", n), this.mw.sendUserActionPingback(n)
						}
					}, {
						key: "createMask",
						value: function() {
							var n = document.createElement("div");
							n.style.position = "absolute", n.style.width = "100%", n.style.height = "100%", n.style.left = "0px", n.style.top = "0px", n.style.backgroundColor = "#000", n.style.zIndex = 100, n.setAttribute("data-cupid", "mask"), this.$mask = n
						}
					}, {
						key: "showMask",
						value: function() {
							this.$mask && (this.$mask.style.display = "")
						}
					}, {
						key: "hideMask",
						value: function() {
							this.$mask && (this.$mask.style.display = "none")
						}
					}, {
						key: "setVipDoc",
						value: function(n) {
							var e = this;
							n.detail && n.detail.text1 && setTimeout(function() {
								e.$vipMarketingDoc && (e.$vipMarketingDoc.textContent = n.detail.text1, e.debug("set vip doc", n.detail.text1));
								var t = e.sdk.currentVV.schedule.getCurrentAd();
								t && (t.slot.skipAdParams = n.detail);
								T(e.$vipDocWrap), e.$vipMarketingDoc && (e.$vipDocWrap.style.width = parseInt(window.getComputedStyle(e.$vipMarketingDoc).width) + 8 + "px")
							}, 3e3)
						}
					}, {
						key: "requestVipDoc",
						value: function(n, e) {
							var t = this,
								i = "P00001=" + Object(D.b)() + "&code=99de3d4506d3d290&platform=b6c13e26323c537d&tv_id=" + n + "&deviceID=" + Object(D.f)();
							"tw" === E.locale ? i += "&lang=zh_TW&app_lm=tw" : i += "&lang=zh_CN&app_lm=cn", t.debug("start get vip doc"), t.sdk.ajax({
								url: "https://act.vip.iqiyi.com/interact/api/show",
								data: i,
								dataType: "jsonp",
								jsonpCallback: "callback",
								timeout: 5e3,
								success: function(n, i) {
									if ("success" == i && n && "A00000" === n.code && n.data) {
										t.debug("get vip doc success");
										var r = n.data;
										r.passportId = e, r.locale = E.locale;
										var o = r.validPeriod ? parseInt(r.validPeriod) : 1,
											a = new Date;
										a.setDate(a.getDate() + o), a.setHours(0), a.setMinutes(0), a.setSeconds(0), Object(D.k)("CA0001", JSON.stringify(r), {
											expires: a
										}), t.setVipDoc(r)
									} else t.debug("get vip doc error: status ", i, n)
								}
							})
						}
					}, {
						key: "removeVipDoc",
						value: function(n) {
							var e = this;
							e.$vipMarketingDoc && e.$vipDocWrap && (e.debug("remove vip doc", n), A(e.$vipDocWrap), e.$vipMarketingDoc.textContent = "", e.$vipDocWrap.style.width = "0px")
						}
					}, {
						key: "startMidrollTip",
						value: function() {
							this.midrollTip.reset(), this.midrollTip.start()
						}
					}]) && B(e.prototype, t), i && B(e, i), n
				}(),
				F = t(17),
				U = t.n(F);

			function N(n) {
				return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
					return typeof n
				} : function(n) {
					return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
				})(n)
			}

			function W(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			var H = function() {
				function n(e) {
					! function(n, e) {
						if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, n), this.ticket = "", this.log = "广告测试", this.sdk = e, this.init()
				}
				var e, t, i;
				return e = n, (t = [{
					key: "init",
					value: function() {
						var n = this;
						n.hasInitBox = !1, document.addEventListener("keydown", function(e) {
							return n.callFeedbackBox(e)
						})
					}
				}, {
					key: "callFeedbackBox",
					value: function(n) {
						var e = this,
							t = e.sdk;
						85 == n.keyCode && n.ctrlKey && n.altKey && (e.hasInitBox && e.$panel || (e.initFeedbackBox(), e.hasInitBox = !0), t.videoMidware && t.videoMidware.isFullScreen() && t.videoMidware.fullscreentoggle(), T(e.$panel))
					}
				}, {
					key: "initFeedbackBox",
					value: function() {
						var n = this,
							e = document.querySelector("body");
						n.$panel = _($(U.a, E.resource)), n.$tip = n.$panel.querySelector(".mars-feedback-tip"), A(n.$tip);
						var t = n.$panel.querySelector(".cupid-panel-close"),
							i = n.$panel.querySelector(".feedback-submit");
						t.addEventListener("click", function() {
							n.closePanel()
						}), i.addEventListener("click", function() {
							n.sendFeedback()
						}), e.appendChild(n.$panel)
					}
				}, {
					key: "closePanel",
					value: function() {
						A(this.$tip), A(this.$panel)
					}
				}, {
					key: "sendFeedback",
					value: function() {
						var n = this;
						n.logs = function(n) {
							var e = n,
								t = "";
							if (window.ares) {
								var i = window.ares.log.Log.logs;
								t = K("ares", i)
							}
							return K("mars", e) + t
						}(n.sdk.logger.logs), T(n.$tip), n.$tip.textContent = E.translate("提交中");
						var e = {
							entry_class: "guanggao_player",
							fb_class: "广告报障",
							fb_selfclass: "广告报障",
							phone: n.$panel.querySelector(".feedback-phone").value,
							email: n.$panel.querySelector(".feedback-email").value,
							content: n.$panel.querySelector(".feedback-detail").value,
							format: "json",
							fb_applog: n.logs
						};
						n.getTicket().then(function() {
							e.ticket = n.ticket, n.sdk.ajax({
								url: "https://feedback.iqiyi.com/f/b/s.html",
								type: "POST",
								dataType: "json",
								timeout: 5e3,
								data: e,
								success: function(e) {
									"success" == e.data ? (n.$tip.textContent = E.translate("收到！我们会尽快为您解决问题!"), setTimeout(function() {
										n.closePanel()
									}, 1500)) : n.feedbackError()
								},
								error: function() {
									n.feedbackError()
								}
							})
						})
					}
				}, {
					key: "feedbackError",
					value: function() {
						T(this.$tip), this.$tip.textContent = E.translate("提交失败，请稍后重试!")
					}
				}, {
					key: "getTicket",
					value: function() {
						var n = this;
						return new Promise(function(e, t) {
							n.sdk.ajax({
								url: "https://feedback.iqiyi.com/f/b/p.html?format=json",
								success: function(t) {
									n.ticket = t, e()
								},
								error: function() {
									t()
								}
							})
						})
					}
				}]) && W(e.prototype, t), i && W(e, i), n
			}();

			function K(n, e) {
				return S.a.map(e, function(e) {
					var t = ["[" + n + "][" + (e.key || "") + "][" + e.name + "]"];
					return S.a.each(e.data, function(n) {
						if ("object" == N(n)) try {
							n = JSON.stringify(n)
						} catch (n) {}
						t.push(String(n))
					}), t.join(" ")
				}).join("\r\n")
			}
			var J = t(18),
				Q = t.n(J);

			function X(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			var G = function() {
				function n(e) {
					! function(n, e) {
						if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, n), this.viewController = e, this.sdk = e.sdk, this.mw = this.sdk.videoMidware, this.init()
				}
				var e, t, i;
				return e = n, (t = [{
					key: "init",
					value: function() {
						this.initBlackScreenDom()
					}
				}, {
					key: "initBlackScreenDom",
					value: function() {
						var n = this,
							e = n.mw.adcontainer();
						n.$blackScreen = _($(Q.a, E.resource)), A(n.$blackScreen), e.appendChild(n.$blackScreen), n.bindEvent()
					}
				}, {
					key: "triggerAdblockCBK",
					value: function(n) {}
				}, {
					key: "initBlackscreenCountdown",
					value: function(n) {
						var e = this,
							t = e.getBlackscreenDuration(n),
							i = e.$blackScreen.querySelector(".cd-time");
						i.innerText = t;
						var r = new M.a(1e3, t);
						r.on("timer", function() {
							i.innerText = t - r.currentCount
						}), r.on("timerComplete", function() {
							e.stopBlackScreen(r)
						}), e.blackScreenTimer || r.start(), e.blackScreenTimer = r
					}
				}, {
					key: "bindEvent",
					value: function() {
						var n = this,
							e = n.$blackScreen.querySelector(".black-screen-feedback"),
							t = n.$blackScreen.querySelector(".black-screen-purchase");
						e.addEventListener("click", function() {
							n.viewController.feedback.callFeedbackBox({
								altKey: !0,
								ctrlKey: !0,
								keyCode: 85
							})
						}), t.addEventListener("click", function() {
							n.viewController.pullCashier()
						})
					}
				}, {
					key: "stopBlackScreen",
					value: function(n) {
						var e = n || this.blackScreenTimer;
						e && e.stop(), this.blackScreenTimer = null, A(this.$blackScreen), this.sdk.currentVV.enableVideo()
					}
				}, {
					key: "getBlackscreenDuration",
					value: function(n) {
						var e = n instanceof Request ? n : n.getParentByName("request");
						return e && e.blackscreenDuration ? e.blackscreenDuration : 45
					}
				}]) && X(e.prototype, t), i && X(e, i), n
			}();

			function Y(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			var Z = S.a.is,
				nn = function() {
					function n(e) {
						! function(n, e) {
							if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, n), this.sdk = e, this.debug = this.sdk.logger.getLogger("viewController"), this.initRollView(), this.initFeedback(e), this.initBlackScreen(), this.resource = E.resource
					}
					var e, t, i;
					return e = n, (t = [{
						key: "initRollView",
						value: function() {
							this.hasInitedRoll || (this.rollView = new R(this), this.hasInitedRoll = !0)
						}
					}, {
						key: "addStyle",
						value: function() {}
					}, {
						key: "initFeedback",
						value: function(n) {
							this.feedback = new H(n)
						}
					}, {
						key: "initBlackScreen",
						value: function() {
							this.blackscreen = new G(this)
						}
					}, {
						key: "addAdBadge",
						value: function(n, e) {
							e = e || {};
							var t = _($('<span class="cupid-badge">{广告}</span>', E.resource));
							return e.position && "string" != typeof e.position ? (t.style.top = (e.position.top || 0) + "px", t.style.left = (e.position.left || 0) + "px", t.style.right = (e.position.right || 0) + "px", t.style.bottom = (e.position.bottom || 0) + "px") : "bottom-left" == e.position ? (t.style.bottom = "0px", t.style.left = "0px") : (t.style.top = "0px", t.style.left = "0px"), n.appendChild(t), t
						}
					}, {
						key: "renderViewPointTip",
						value: function(n, e) {
							var t, i = S.a.extend({}, E.resource, e);
							S.a.extend(i, {
								brand: C(i.brand, 7),
								promotion: C(i.promotion, 11)
							}), i.discountedPriceText = (t = i.discountedPrice, t = parseFloat(t), isNaN(t) ? "" : "￥" + t), i.detailUrl = i.detailUrl || "javascript:;";
							var o = _($(r.a, i));
							n.innerHTML = "", n.appendChild(o)
						}
					}, {
						key: "addCloseBtn",
						value: function(n) {
							var e;
							(e = "viewPoint" == n.type ? _('<span class="video_buy-close"></span>') : _('<span class="cupid-close"></span>')).addEventListener("click", function() {
								if (n.log("click close"), n.ad.abort(), "viewPoint" == n.type) {
									n.ad.emit("closeViewPoint");
									var e = n.vv.schedule;
									e && e.ban({
										cuepointType: 8,
										startTime: n.ad.slot.startTime
									})
								}
							}), n.log("add close button"), n.$adzone.appendChild(e)
						}
					}, {
						key: "pullCashier",
						value: function(n) {
							this.exitFullScreen();
							var e = this.sdk.currentVV,
								t = {
									albumId: e.albumId,
									episodeId: e.episodeId,
									isSportsVideo: e.isSportsVideo()
								};
							! function(n) {
								var e = n.skipAdParams,
									t = n.viewInfo,
									i = {};
								if (e) {
									var r = e.type1 || {},
										o = "5" == r.type;
									if (o && (i = {
										fv: e.fv,
										packageAmount: e.packageAmount,
										autoRenew: e.autoRenew,
										fc: e.fc
									}), "4" == r.type && r.url) return void en(r.url)
								}
								if (t.isSportsVideo && "tw" != E.locale) return void
								function(n) {
									var e = (S.a.get(window, "playerSDK") || {}).xinyingCashier,
										t = n.episodeId;
									if (Z.fn(e)) {
										var i = {
											cid: t || ""
										};
										return void e(i)
									}
									en("https://sports.iqiyi.com/sport/member.html?sportCash=true")
								}(t);
								! function(n, e) {
									var t = S.a.get(window, "Q.external.initVipPay"),
										i = (S.a.get(window, "playerSDK") || {}).vipCashier,
										r = n.albumId,
										o = "a3aa77e4bb08fdd9";
									"tw" === E.locale && (o = "a8a2abeb0aeee180");
									var a = {
										platform: "b6c13e26323c537d",
										albumId: r || 0,
										fc: o
									};
									if (S.a.extend(a, e), Z.fn(i)) i(a);
									else if (Z.fn(t)) t(a);
									else {
										var c = "https://serv.vip.iqiyi.com/order/preview.action?pid=a0226bd958843452";
										for (var s in "tw" === E.locale && (delete a.platform, c = "https://serv.vip.iqiyi.com/order/preview.action?pid=af7de4c61c0a1805&qy_fr=WS-VIP-3102&app_lm=tw&platform=a31343b3762c80e7"), a) c += "&" + s + "=" + a[s];
										en(c)
									}
								}(t, i)
							}({
								skipAdParams: n ? n.slot.skipAdParams : null,
								viewInfo: t
							})
						}
					}, {
						key: "exitFullScreen",
						value: function() {
							var n = this.sdk.currentVV.mw;
							n.isWebFullScreen() && (this.debug("退出网页全屏"), n.webfullscreentoggle()), n.isFullScreen() && (this.debug("退出全屏"), n.fullscreentoggle())
						}
					}]) && Y(e.prototype, t), i && Y(e, i), n
				}(),
				en = S.a.throttle(function(n, e) {
					window.open(n, e || "_blank")
				}, 500, {
					trailing: !1
				});
			var tn = {
				init: function(n) {
					return new nn(n)
				}
			};
			"undefined" != typeof window && (window.Mars_V ? tn = window.Mars_V : window.Mars_V = tn);
			e.default = tn
		}
	])
});

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