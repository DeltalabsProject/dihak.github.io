var addComment = {
    moveForm: function(t, e, n, i) {
        var o, s = this,
            r = s.I(t),
            a = s.I(n),
            l = s.I("cancel-comment-reply-link"),
            c = s.I("comment_parent"),
            u = s.I("comment_post_ID");
        if (r && a && l && c) {
            s.respondId = n, i = i || !1, s.I("wp-temp-form-div") || (o =
                    document.createElement("div"), o.id =
                    "wp-temp-form-div", o.style.display = "none", a.parentNode
                    .insertBefore(o, a)), r.parentNode.insertBefore(a,
                    r.nextSibling), u && i && (u.value = i), c.value =
                e, l.style.display = "", l.onclick = function() {
                    var t = addComment,
                        e = t.I("wp-temp-form-div"),
                        n = t.I(t.respondId);
                    return e && n ? (t.I("comment_parent").value = "0",
                        e.parentNode.insertBefore(n, e), e.parentNode
                        .removeChild(e), this.style.display =
                        "none", this.onclick = null, !1) : void 0
                };
            try {
                s.I("comment").focus()
            } catch (d) {}
            return !1
        }
    },
    I: function(t) {
        return document.getElementById(t)
    }
};
    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one(t.support.transition.end, function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e()
    })
}(jQuery), + function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function(n) {
            t(n).on("click", e, this.close)
        };
    n.prototype.close = function(e) {
        function n() {
            s.trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = i.hasClass("alert") ? i :
                i.parent()), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() ||
            (s.removeClass("in"), t.support.transition && s.hasClass("fade") ?
                s.one(t.support.transition.end, n).emulateTransitionEnd(150) :
                n())
    };
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" ==
                typeof e && o[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
};
var ExampleSite = {
        common: {
            init: function() {
                var t = $(".stickyfooter").css("padding");
                $("button.navbar-toggle").click(function() {
                    $("#wrapper").toggleClass("active"), $(this).toggleClass(
                            "active"), $(this).attr("data-target"),
                        $("#wrapper").hasClass("active") ? ($(
                            "header").css("left", "0px"), $(
                            "header button.navbar-toggle").css({
                            left: "10px",
                            right: "initial"
                        }), $(".navbar-brand").css("display",
                            "none"), $("footer").css("display",
                            "none"), $(".stickyfooter").css({
                            padding: "0",
                            height: "100%"
                        }), $(".st-menu").css({
                            visibility: "visible"
                        })) : ($("header").css("left", "0px"), $(
                                "header button.navbar-toggle").css({
                                right: "10px",
                                left: "initial"
                            }), $(".navbar-brand").css("display",
                                "block"), $("footer").css("display",
                                "block"), $(".st-menu").css({
                                visibility: "hidden"
                            }), $(".stickyfooter").css("padding", t),
                            window.setTimeout(function() {
                                $(".stickyfooter").css("height",
                                    "auto")
                            }, 300))
                }), $(window).resize(function() {
                    $(window).width() >= 769 && $("#wrapper").removeClass(
                        "active")
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
        fire: function(t, e, n) {
            var i = ExampleSite;
            e = void 0 === e ? "init" : e, "" !== t && i[t] && "function" ==
                typeof i[t][e] && i[t][e](n)
        },
        loadEvents: function() {
            UTIL.fire("common"), $.each(document.body.className.replace(
                /-/g, "_").split(/\s+/), function(t, e) {
                UTIL.fire(e)
            }), UTIL.fire("common", "finalize")
        }
    };
$(document).ready(UTIL.loadEvents), jQuery(document).ready(function(t) {
        t("a[href*=#]:not([href=#])").click(function() {
                if (location.pathname.replace(/^\//, "") == this.pathname
                    .replace(/^\//, "") && location.hostname == this.hostname
                ) {
                    var e = t(this.hash);
                    if (e = e.length ? e : t("[name=" + this.hash.slice(
                        1) + "]"), e.length) return t("html,body").animate({
                        scrollTop: e.offset().top
                    }, 1e3), !1
                }
            }), t(window).scroll(function() {
                t(this).scrollTop() > 1 ? t(".navbar-fixed-top").addClass(
                    "sticky") : t(".navbar-fixed-top").removeClass(
                    "sticky")
            }),
            function() {
                function e(e) {
                    var s = "visible",
                        r = "hidden",
                        a = {
                            focus: s,
                            focusin: s,
                            pageshow: s,
                            blur: r,
                            focusout: r,
                            pagehide: r
                        };
                    e = e || window.event, e.type in a ? (n = o, t(
                        document).attr("title", n)) : (n = this[i] ?
                        "Miss You :( " : o, t(document).attr(
                            "title", n))
                }
                var n, i = "hidden",
                    o = document.title;
                i in document ? document.addEventListener(
                        "visibilitychange", e) : (i = "mozHidden") in
                    document ? document.addEventListener(
                        "mozvisibilitychange", e) : (i = "webkitHidden") in
                    document ? document.addEventListener(
                        "webkitvisibilitychange", e) : (i = "msHidden") in
                    document ? document.addEventListener(
                        "msvisibilitychange", e) : "onfocusin" in document ?
                    document.onfocusin = document.onfocusout = e : window.onpageshow =
                    window.onpagehide = window.onfocus = window.onblur = e,
                    void 0 !== document[i] && e({
                        type: document[i] ? "blur" : "focus"
                    })
            }()
    }),
    function() {
        var t, e, n, i = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            o = [].indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
                function t() {}
                return t.prototype.extend = function(t, e) {
                    var n, i;
                    for (n in t) i = t[n], null != i && (e[n] = i);
                    return e
                }, t.prototype.isMobile = function(t) {
                    return
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                        .test(t)
                }, t
            }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
                function t() {
                    this.keys = [], this.values = []
                }
                return t.prototype.get = function(t) {
                    var e, n, i, o, s;
                    for (s = this.keys, e = i = 0, o = s.length; o > i; e = ++
                        i)
                        if (n = s[e], n === t) return this.values[e]
                }, t.prototype.set = function(t, e) {
                    var n, i, o, s, r;
                    for (r = this.keys, n = o = 0, s = r.length; s > o; n = ++
                        o)
                        if (i = r[n], i === t) return void(this.values[
                            n] = e);
                    return this.keys.push(t), this.values.push(e)
                }, t
            }()), t = this.MutationObserver || this.WebkitMutationObserver ||
            this.MozMutationObserver || (t = function() {
                function t() {
                    console.warn(
                        "MutationObserver is not supported by your browser."
                    ), console.warn(
                        "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                    )
                }
                return t.notSupported = !0, t.prototype.observe = function() {},
                    t
            }()), this.WOW = function() {
                function s(t) {
                    null == t && (t = {}), this.scrollCallback = i(this.scrollCallback,
                            this), this.scrollHandler = i(this.scrollHandler,
                            this), this.start = i(this.start, this), this.scrolled = !
                        0, this.config = this.util().extend(t, this.defaults),
                        this.animationNameCache = new n
                }
                return s.prototype.defaults = {
                        boxClass: "wow",
                        animateClass: "animated",
                        offset: 0,
                        mobile: !0,
                        live: !0
                    }, s.prototype.init = function() {
                        var t;
                        return this.element = window.document.documentElement,
                            "interactive" === (t = document.readyState) ||
                            "complete" === t ? this.start() : document.addEventListener(
                                "DOMContentLoaded", this.start), this.finished = []
                    }, s.prototype.start = function() {
                        var e, n, i, o;
                        if (this.stopped = !1, this.boxes = this.element.getElementsByClassName(
                            this.config.boxClass), this.all = function() {
                            var t, n, i, o;
                            for (i = this.boxes, o = [], t = 0, n = i.length; n >
                                t; t++) e = i[t], o.push(e);
                            return o
                        }.call(this), this.boxes.length)
                            if (this.disabled()) this.resetStyle();
                            else {
                                for (o = this.boxes, n = 0, i = o.length; i > n; n++)
                                    e = o[n], this.applyStyle(e, !0);
                                window.addEventListener("scroll", this.scrollHandler, !
                                        1), window.addEventListener("resize",
                                        this.scrollHandler, !1), this.interval =
                                    setInterval(this.scrollCallback, 50)
                            }
                        return this.config.live ? new t(function(t) {
                            return function(e) {
                                var n, i, o, s, r;
                                for (r = [], o = 0, s = e.length; s >
                                    o; o++) i = e[o], r.push(
                                    function() {
                                        var t, e, o, s;
                                        for (o = i.addedNodes || [],
                                            s = [], t = 0, e =
                                            o.length; e > t; t++
                                        ) n = o[t], s.push(this
                                            .doSync(n));
                                        return s
                                    }.call(t));
                                return r
                            }
                        }(this)).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }) : void 0
                    }, s.prototype.stop = function() {
                        return this.stopped = !0, window.removeEventListener(
                                "scroll", this.scrollHandler, !1), window.removeEventListener(
                                "resize", this.scrollHandler, !1), null != this
                            .interval ? clearInterval(this.interval) : void 0
                    }, s.prototype.sync = function() {
                        return t.notSupported ? this.doSync(this.element) :
                            void 0
                    }, s.prototype.doSync = function(t) {
                        var e, n, i, s, r;
                        if (!this.stopped) {
                            for (t || (t = this.element), t = t.parentNode || t,
                                s = t.getElementsByClassName(this.config.boxClass),
                                r = [], n = 0, i = s.length; i > n; n++) e = s[
                                n], o.call(this.all, e) < 0 ? (this.applyStyle(
                                e, !0), this.boxes.push(e), this.all.push(
                                e), r.push(this.scrolled = !0)) : r.push(
                                void 0);
                            return r
                        }
                    }, s.prototype.show = function(t) {
                        return this.applyStyle(t), t.className = "" + t.className +
                            " " + this.config.animateClass
                    }, s.prototype.applyStyle = function(t, e) {
                        var n, i, o;
                        return i = t.getAttribute("data-wow-duration"), n = t.getAttribute(
                            "data-wow-delay"), o = t.getAttribute(
                            "data-wow-iteration"), this.animate(function(s) {
                            return function() {
                                return s.customStyle(t, e, i, n, o)
                            }
                        }(this))
                    }, s.prototype.animate = function() {
                        return "requestAnimationFrame" in window ? function(t) {
                            return window.requestAnimationFrame(t)
                        } : function(t) {
                            return t()
                        }
                    }(), s.prototype.resetStyle = function() {
                        var t, e, n, i, o;
                        for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)
                            t = i[e], o.push(t.setAttribute("style",
                                "visibility: visible;"));
                        return o
                    }, s.prototype.customStyle = function(t, e, n, i, o) {
                        return e && this.cacheAnimationName(t), t.style.visibility =
                            e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                                animationDuration: n
                            }), i && this.vendorSet(t.style, {
                                animationDelay: i
                            }), o && this.vendorSet(t.style, {
                                animationIterationCount: o
                            }), this.vendorSet(t.style, {
                                animationName: e ? "none" : this.cachedAnimationName(
                                    t)
                            }), t
                    }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet =
                    function(t, e) {
                        var n, i, o, s;
                        s = [];
                        for (n in e) i = e[n], t["" + n] = i, s.push(function() {
                            var e, s, r, a;
                            for (r = this.vendors, a = [], e = 0, s = r
                                .length; s > e; e++) o = r[e], a.push(t[
                                "" + o + n.charAt(0).toUpperCase() +
                                n.substr(1)] = i);
                            return a
                        }.call(this));
                        return s
                    }, s.prototype.vendorCSS = function(t, e) {
                        var n, i, o, s, r, a;
                        for (i = window.getComputedStyle(t), n = i.getPropertyCSSValue(
                                e), a = this.vendors, s = 0, r = a.length; r >
                            s; s++) o = a[s], n = n || i.getPropertyCSSValue(
                            "-" + o + "-" + e);
                        return n
                    }, s.prototype.animationName = function(t) {
                        var e;
                        try {
                            e = this.vendorCSS(t, "animation-name").cssText
                        } catch (n) {
                            e = window.getComputedStyle(t).getPropertyValue(
                                "animation-name")
                        }
                        return "none" === e ? "" : e
                    }, s.prototype.cacheAnimationName = function(t) {
                        return this.animationNameCache.set(t, this.animationName(
                            t))
                    }, s.prototype.cachedAnimationName = function(t) {
                        return this.animationNameCache.get(t)
                    }, s.prototype.scrollHandler = function() {
                        return this.scrolled = !0
                    }, s.prototype.scrollCallback = function() {
                        var t;
                        return !this.scrolled || (this.scrolled = !1, this.boxes =
                            function() {
                                var e, n, i, o;
                                for (i = this.boxes, o = [], e = 0, n = i.length; n >
                                    e; e++) t = i[e], t && (this.isVisible(
                                    t) ? this.show(t) : o.push(t));
                                return o
                            }.call(this), this.boxes.length || this.config.live
                        ) ? void 0 : this.stop()
                    }, s.prototype.offsetTop = function(t) {
                        for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                        for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                        return e
                    }, s.prototype.isVisible = function(t) {
                        var e, n, i, o, s;
                        return n = t.getAttribute("data-wow-offset") || this.config
                            .offset, s = window.pageYOffset, o = s + this.element
                            .clientHeight - n, i = this.offsetTop(t), e = i + t
                            .clientHeight, o >= i && e >= s
                    }, s.prototype.util = function() {
                        return this._util || (this._util = new e)
                    }, s.prototype.disabled = function() {
                        return !this.config.mobile && this.util().isMobile(
                            navigator.userAgent)
                    }, s
            }()
    }.call(this);
