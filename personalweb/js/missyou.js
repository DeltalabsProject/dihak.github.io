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
						(c = this[d] ? "Miss You ︎:( " : e, a(document).attr("title", c))
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
	})
