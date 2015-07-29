var addComment = {
	moveForm: function(a, b, c, d) {
		var e, f = this,
			g = f.I(a),
			h = f.I(c),
			i = f.I("cancel-comment-reply-link"),
			j = f.I("comment_parent"),
			k = f.I("comment_post_ID");
		if (g && h && i && j) {
			f.respondId = c, d = d || !1, f.I("wp-temp-form-div") || (e = document.createElement(
						"div"), e.id = "wp-temp-form-div", e.style.display = "none", h.parentNode
					.insertBefore(e, h)), g.parentNode.insertBefore(h, g.nextSibling), k &&
				d && (k.value = d), j.value = b, i.style.display = "", i.onclick =
				function() {
					var a = addComment,
						b = a.I("wp-temp-form-div"),
						c = a.I(a.respondId);
					if (b && c) return a.I("comment_parent").value = "0", b.parentNode.insertBefore(
							c, b), b.parentNode.removeChild(b), this.style.display = "none", this
						.onclick = null, !1
				};
			try {
				f.I("comment").focus()
			} catch (l) {}
			return !1
		}
	},
	I: function(a) {
		return document.getElementById(a)
	}
};;
if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); +
function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one(a.support.transition.end, function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b()
	})
}(jQuery), + function(a) {
	"use strict";
	var b = '[data-dismiss="alert"]',
		c = function(c) {
			a(c).on("click", b, this.close)
		};
	c.prototype.close = function(b) {
		function c() {
			f.trigger("closed.bs.alert").remove()
		}
		var d = a(this),
			e = d.attr("data-target");
		e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = a(e);
		b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()),
			f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass(
				"in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition
				.end, c).emulateTransitionEnd(150) : c())
	};
	var d = a.fn.alert;
	a.fn.alert = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.alert");
			e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(
				d)
		})
	}, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
		return a.fn.alert = d, this
	}, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}
var ExampleSite = {
		common: {
			init: function() {
				var a = $(".stickyfooter").css("padding");
				$("button.navbar-toggle").click(function() {
					$("#wrapper").toggleClass("active"), $(this).toggleClass("active");
					$(this).attr("data-target");
					$("#wrapper").hasClass("active") ? ($("header").css("left", "0px"), $(
						"header button.navbar-toggle").css({
						left: "10px",
						right: "initial"
					}), $(".navbar-brand").css("display", "none"), $("footer").css(
						"display", "none"), $(".stickyfooter").css({
						padding: "0",
						height: "100%"
					}), $(".st-menu").css({
						visibility: "visible"
					})) : ($("header").css("left", "0px"), $("header button.navbar-toggle")
						.css({
							right: "10px",
							left: "initial"
						}), $(".navbar-brand").css("display", "block"), $("footer").css(
							"display", "block"), $(".st-menu").css({
							visibility: "hidden"
						}), $(".stickyfooter").css("padding", a), window.setTimeout(function() {
							$(".stickyfooter").css("height", "auto")
						}, 300))
				}), $(window).resize(function() {
					$(window).width() >= 769 && $("#wrapper").removeClass("active")
				})
			},
			finalize: function() {}
		},
		home: {
			init: function() {}
		},
		about: {
			init: function() {}
		}
	},
	UTIL = {
		fire: function(a, b, c) {
			var d = ExampleSite;
			b = void 0 === b ? "init" : b, "" !== a && d[a] && "function" == typeof d[a]
				[b] && d[a][b](c)
		},
		loadEvents: function() {
			UTIL.fire("common"), $.each(document.body.className.replace(/-/g, "_").split(
				/\s+/), function(a, b) {
				UTIL.fire(b)
			}), UTIL.fire("common", "finalize")
		}
	};
$(document).ready(UTIL.loadEvents), jQuery(document).ready(function(a) {
		a("a[href*=#]:not([href=#])").click(function() {
				if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//,
					"") && location.hostname == this.hostname) {
					var b = a(this.hash);
					if (b = b.length ? b : a("[name=" + this.hash.slice(1) + "]"), b.length)
						return a("html,body").animate({
							scrollTop: b.offset().top
						}, 1e3), !1
				}
			}), a(window).scroll(function() {
				a(this).scrollTop() > 1 ? a(".navbar-fixed-top").addClass("sticky") : a(
					".navbar-fixed-top").removeClass("sticky")
			}),
			function() {
				function b(b) {
					var f = "visible",
						g = "hidden",
						h = {
							focus: f,
							focusin: f,
							pageshow: f,
							blur: g,
							focusout: g,
							pagehide: g
						};
					b = b || window.event, b.type in h ? (c = e, a(document).attr("title", c)) :
						(c = this[d] ? "Miss You :( " : e, a(document).attr("title", c))
				}
				var c, d = "hidden",
					e = document.title;
				d in document ? document.addEventListener("visibilitychange", b) : (d =
						"mozHidden") in document ? document.addEventListener(
						"mozvisibilitychange", b) : (d = "webkitHidden") in document ? document.addEventListener(
						"webkitvisibilitychange", b) : (d = "msHidden") in document ? document.addEventListener(
						"msvisibilitychange", b) : "onfocusin" in document ? document.onfocusin =
					document.onfocusout = b : window.onpageshow = window.onpagehide = window.onfocus =
					window.onblur = b, void 0 !== document[d] && b({
						type: document[d] ? "blur" : "focus"
					})
			}()
	}),
	function() {
		var a, b, c, d = function(a, b) {
				return function() {
					return a.apply(b, arguments)
				}
			},
			e = [].indexOf || function(a) {
				for (var b = 0, c = this.length; c > b; b++)
					if (b in this && this[b] === a) return b;
				return -1
			};
		b = function() {
				function a() {}
				return a.prototype.extend = function(a, b) {
					var c, d;
					for (c in a) d = a[c], null != d && (b[c] = d);
					return b
				}, a.prototype.isMobile = function(a) {
					return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						a)
				}, a
			}(), c = this.WeakMap || this.MozWeakMap || (c = function() {
				function a() {
					this.keys = [], this.values = []
				}
				return a.prototype.get = function(a) {
					var b, c, d, e, f;
					for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
						if (c = f[b], c === a) return this.values[b]
				}, a.prototype.set = function(a, b) {
					var c, d, e, f, g;
					for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
						if (d = g[c], d === a) return void(this.values[c] = b);
					return this.keys.push(a), this.values.push(b)
				}, a
			}()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver ||
			(a = function() {
				function a() {
					console.warn("MutationObserver is not supported by your browser."),
						console.warn(
							"WOW.js cannot detect dom mutations, please call .sync() after loading new content."
						)
				}
				return a.notSupported = !0, a.prototype.observe = function() {}, a
			}()), this.WOW = function() {
				function f(a) {
					null == a && (a = {}), this.scrollCallback = d(this.scrollCallback, this),
						this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start,
							this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults),
						this.animationNameCache = new c
				}
				return f.prototype.defaults = {
						boxClass: "wow",
						animateClass: "animated",
						offset: 0,
						mobile: !0,
						live: !0
					}, f.prototype.init = function() {
						var a;
						return this.element = window.document.documentElement, "interactive" ===
							(a = document.readyState) || "complete" === a ? this.start() : document.addEventListener(
								"DOMContentLoaded", this.start), this.finished = []
					}, f.prototype.start = function() {
						var b, c, d, e;
						if (this.stopped = !1, this.boxes = this.element.getElementsByClassName(
							this.config.boxClass), this.all = function() {
							var a, c, d, e;
							for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a],
								e.push(b);
							return e
						}.call(this), this.boxes.length)
							if (this.disabled()) this.resetStyle();
							else {
								for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(
									b, !0);
								window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener(
									"resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback,
									50)
							}
						return this.config.live ? new a(function(a) {
							return function(b) {
								var c, d, e, f, g;
								for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(
									function() {
										var a, b, e, f;
										for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++)
											c = e[a], f.push(this.doSync(c));
										return f
									}.call(a));
								return g
							}
						}(this)).observe(document.body, {
							childList: !0,
							subtree: !0
						}) : void 0
					}, f.prototype.stop = function() {
						return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !
								1), window.removeEventListener("resize", this.scrollHandler, !1), null !=
							this.interval ? clearInterval(this.interval) : void 0
					}, f.prototype.sync = function() {
						return a.notSupported ? this.doSync(this.element) : void 0
					}, f.prototype.doSync = function(a) {
						var b, c, d, f, g;
						if (!this.stopped) {
							for (a || (a = this.element), a = a.parentNode || a, f = a.getElementsByClassName(
								this.config.boxClass), g = [], c = 0, d = f.length; d > c; c++) b = f[c],
								e.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b),
									this.all.push(b), g.push(this.scrolled = !0)) : g.push(void 0);
							return g
						}
					}, f.prototype.show = function(a) {
						return this.applyStyle(a), a.className = "" + a.className + " " + this.config
							.animateClass
					}, f.prototype.applyStyle = function(a, b) {
						var c, d, e;
						return d = a.getAttribute("data-wow-duration"), c = a.getAttribute(
							"data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(
							function(f) {
								return function() {
									return f.customStyle(a, b, d, c, e)
								}
							}(this))
					}, f.prototype.animate = function() {
						return "requestAnimationFrame" in window ? function(a) {
							return window.requestAnimationFrame(a)
						} : function(a) {
							return a()
						}
					}(), f.prototype.resetStyle = function() {
						var a, b, c, d, e;
						for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e
							.push(a.setAttribute("style", "visibility: visible;"));
						return e
					}, f.prototype.customStyle = function(a, b, c, d, e) {
						return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" :
							"visible", c && this.vendorSet(a.style, {
								animationDuration: c
							}), d && this.vendorSet(a.style, {
								animationDelay: d
							}), e && this.vendorSet(a.style, {
								animationIterationCount: e
							}), this.vendorSet(a.style, {
								animationName: b ? "none" : this.cachedAnimationName(a)
							}), a
					}, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet =
					function(a, b) {
						var c, d, e, f;
						f = [];
						for (c in b) d = b[c], a["" + c] = d, f.push(function() {
							var b, f, g, h;
							for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[
								b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
							return h
						}.call(this));
						return f
					}, f.prototype.vendorCSS = function(a, b) {
						var c, d, e, f, g, h;
						for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h =
							this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue(
							"-" + e + "-" + b);
						return c
					}, f.prototype.animationName = function(a) {
						var b;
						try {
							b = this.vendorCSS(a, "animation-name").cssText
						} catch (c) {
							b = window.getComputedStyle(a).getPropertyValue("animation-name")
						}
						return "none" === b ? "" : b
					}, f.prototype.cacheAnimationName = function(a) {
						return this.animationNameCache.set(a, this.animationName(a))
					}, f.prototype.cachedAnimationName = function(a) {
						return this.animationNameCache.get(a)
					}, f.prototype.scrollHandler = function() {
						return this.scrolled = !0
					}, f.prototype.scrollCallback = function() {
						var a;
						return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
							var b, c, d, e;
							for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b],
								a && (this.isVisible(a) ? this.show(a) : e.push(a));
							return e
						}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
					}, f.prototype.offsetTop = function(a) {
						for (var b; void 0 === a.offsetTop;) a = a.parentNode;
						for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
						return b
					}, f.prototype.isVisible = function(a) {
						var b, c, d, e, f;
						return c = a.getAttribute("data-wow-offset") || this.config.offset, f =
							window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(
								a), b = d + a.clientHeight, e >= d && b >= f
					}, f.prototype.util = function() {
						return this._util || (this._util = new b)
					}, f.prototype.disabled = function() {
						return !this.config.mobile && this.util().isMobile(navigator.userAgent)
					}, f
			}()
	}.call(this);;
