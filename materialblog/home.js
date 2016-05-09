/*
 *  __  __      _           _      _   ___ _                        
 * |  \/  |__ _| |_ ___ _ _(_)__ _| | | _ ) |___  __ _ __ _ ___ _ _ 
 * | |\/| / _` |  _/ -_) '_| / _` | | | _ \ / _ \/ _` / _` / -_) '_|
 * |_|  |_\__,_|\__\___|_| |_\__,_|_| |___/_\___/\__, \__, \___|_|  
 *                                               |___/|___/     
 *
 * Script For Material Blogger By Dihak - Bloggerku.com
*/

// lazyload.js (c) Lorenzo Giuliani
function lazyload(){!function(e){function t(e,t){var n=new Image,r=e.getAttribute("data-src");n.onload=function(){e.parent?e.parent.replaceChild(n,e):e.src=r,t?t():null},n.src=r}function n(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.top<=(e.innerHeight||document.documentElement.clientHeight)}for(var r=function(e,t){if(document.querySelectorAll)t=document.querySelectorAll(e);else{var n=document,r=n.styleSheets[0]||n.createStyleSheet();r.addRule(e,"f:b");for(var l=n.all,o=0,c=[],a=l.length;a>o;o++)l[o].currentStyle.f&&c.push(l[o]);r.removeRule(0),t=c}return t},l=function(t,n){e.addEventListener?this.addEventListener(t,n,!1):e.attachEvent?this.attachEvent("on"+t,n):this["on"+t]=n},o=new Array,c=r(".post-img"),a=function(){for(var e=0;e<o.length;e++)n(o[e])&&t(o[e],function(){o.splice(e,e)})},i=0;i<c.length;i++)o.push(c[i]);a(),l("scroll",a)}(this)}lazyload();

// Pagenavigation
function j(a) {
    var e = document.createElement("script");
    e.type = "text/javascript", e.src = a, document.body.appendChild(e)
}

function loophalaman(a) {
    var e = "";
    nomerkiri = parseInt(numshowpage / 2), nomerkiri == numshowpage - nomerkiri && (numshowpage = 2 * nomerkiri + 1), mulai = nomerhal - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(a / postperpage) + 1, maksimal - 1 == a / postperpage && (maksimal -= 1), akhir = mulai + numshowpage - 1, akhir > maksimal && (akhir = maksimal);
    var s = parseInt(nomerhal) - 1;
    e += 1 == nomerhal ? "page" == jenis ? '<span class="showpage disable"><a href="' + home_page + '">' + upPageWord + "</a></span>" : '<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">' + upPageWord + "</a></span>" : "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + s + ');return false">' + upPageWord + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + s + ');return false">' + upPageWord + "</a></span>", mulai > 1 && (e += "page" == jenis ? '<span class="showpageNum"><a href="' + home_page + '">1</a></span>' : '<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>');
    for (var r = mulai; r <= akhir; r++) e += nomerhal == r ? '<span class="showpagePoint">' + r + "</span>" : 1 == r ? "page" == jenis ? '<span class="showpageNum"><a href="' + home_page + '">1</a></span>' : '<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>' : "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + r + ');return false">' + r + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + r + ');return false">' + r + "</a></span>";
    akhir < maksimal && (e += "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + maksimal + ');return false">' + maksimal + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + maksimal + ');return false">' + maksimal + "</a></span>");
    var n = parseInt(nomerhal) + 1;
    nomerhal < maksimal && (e += "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + n + ');return false">' + downPageWord + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + n + ');return false">' + downPageWord + "</a></span>"), nomerhal == maksimal && (e += "page" == jenis ? '<span class="showpage disable"><a href="#" onclick="redirectpage(' + n + ');return false">' + downPageWord + "</a></span>" : '<span class="showpage disable"><a href="#" onclick="redirectlabel(' + n + ');return false">' + downPageWord + "</a></span>");
    for (var l = document.getElementsByName("pageArea"), t = document.getElementById("blog-pager"), p = 0; p < l.length; p++) l[p].innerHTML = e;
    l && l.length > 0 && (e = ""), t && (t.innerHTML = e)
}

function hitungtotaldata(a) {
    var e = a.feed,
        s = parseInt(e.openSearch$totalResults.$t, 10);
    loophalaman(s)
}

function halamanblogger() {
    var a = urlactivepage; - 1 != a.indexOf("/search/label/") && (lblname1 = -1 != a.indexOf("?updated-max") ? a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max")) : a.substring(a.indexOf("/search/label/") + 14)), -1 == a.indexOf("?q=") && -1 == a.indexOf(".html") && (-1 == a.indexOf("/search/label/") ? (jenis = "page", nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, j(home_page + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata")) : (jenis = "label", -1 == a.indexOf("&max-results=") && (postperpage = 20), nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, j(home_page + "feeds/posts/summary/-/" + lblname1 + "?alt=json-in-script&callback=hitungtotaldata&max-results=1")));
    var code_text1 = $('#HTML1').text();
	var decrypted = CryptoJS.AES.decrypt(code_text1, 'bismillah').toString(CryptoJS.enc.Utf8);
	var array1 = decrypted.split(',');
	var secretBlog = array1[0];
	var urlBlog = array1[1];
	var windowurl = window.location.href;
	windowurl = windowurl.substring(0, windowurl.lastIndexOf('.'));
	if(!("dihak"==secretBlog&&window.location.href.indexOf(urlBlog)>-1)){
		$('<div class="ads" style="margin-bottom: 20px;border-radius: 5px;overflow: hidden;box-shadow: 0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);display: inherit;"><a href="http://www.bloggerku.com/" target="_blank" title="Kumpulan Tutorial Blogger"><img alt="bloggerku" src="https://3.bp.blogspot.com/-6kCkIiT4sRo/Vy_t7jexLCI/AAAAAAAAAY0/S4FUZ4w3vPAHbVirMuT9I2W2RlpKV8iAACLcB/s1600/iklan%2Bbloggerku.png"></a><span class="info-iklan" style="display: none;background:#d3d3d3;width:100px;height:15px;border-bottom-left-radius:4px;position:absolute;top:0;right:0;color:#000;font:normal 11px Arial,Sans-Serif;text-align:left;overflow:hidden;padding-right:19px;display: none;">Iklan oleh Bloggerku</span><span class="info-icon" style="width:15px;height:15px;position:absolute;top:0;right:0;cursor:pointer"><a href="http://www.bloggerku.com/p/pasang-iklan.html" target="_blank"><img alt="info" src="http://2.bp.blogspot.com/--ivaHIgXThk/UnJWU80FLhI/AAAAAAAAF_Y/WrH-8aYijGw/s1600/info-iklan.png" style="vertical-align: top;"></a></span></div>').insertBefore('#sidebar-atas');
		$('.info-icon').hover(function() {
			$('.info-iklan').toggle();
		});
		$('#creditmd').css({display:"initial","font-size": "100%",color: "#fff",visibility: "visible"})
		if ($('#creditmd').html()!=('Template By <a href="http://www.bloggerku.com/" target="_blank" title="Bloggerku">Bloggerku</a>')) {
			location.href="http://www.bloggerku.com"
		};
	}
}

function redirectpage(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var e = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
    s.type = "text/javascript", s.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(s)
}

function redirectlabel(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var e = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
    s.type = "text/javascript", s.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(s)
}

function finddatepost(a) {
    post = a.feed.entry[0];
    var e = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29),
        s = encodeURIComponent(e);
    if ("page" == jenis) var r = "/search?updated-max=" + s + "&max-results=" + postperpage + "#PageNo=" + nopage;
    else var r = "/search/label/" + lblname1 + "?updated-max=" + s + "&max-results=" + postperpage + "#PageNo=" + nopage;
    location.href = r
}

function loadmore() {
    var a = $("#blog-pager"),
        e = $(".blog-posts");
    a.find("#blog-pager-newer-link").remove(), a.append('<div id="loadmore"><a href="' + a.find("#blog-pager-older-link a").attr("href") + '" title="Load More">+ Load More</a></div>'), a.on("click", "#loadmore a", function() {
        return $.get(this.href, {}, function(s) {
            var r = $(s).find(".post").length ? $(s) : $("<div></div>");
            e.append(r.find(".blog-posts").html()), lazyload(), void 0 == r.find("#blog-pager-older-link a").attr("href") ? a.html("") : a.html('<div id="loadmore"><a href="' + r.find("#blog-pager-older-link a").attr("href") + '" title="Load More">+ Load More</a></div>')
        }, "html").fail(function() {
            a.remove()
        }), $(this).replaceWith('<img src="https://3.bp.blogspot.com/-BzBPPgHB5B0/VuS_U1eO7gI/AAAAAAAAAQs/LQrjcLbYVkIVslkwbWKxgb7nOIyHLkwBg/s1600/301.gif" style="padding: 10px 20px;">'), !1
    });
    var code_text1 = $('#HTML1').text();
	var decrypted = CryptoJS.AES.decrypt(code_text1, 'bismillah').toString(CryptoJS.enc.Utf8);
	var array1 = decrypted.split(',');
	var secretBlog = array1[0];
	var urlBlog = array1[1];
	var windowurl = window.location.href;
	windowurl = windowurl.substring(0, windowurl.lastIndexOf('.'));
	if(!("dihak"==secretBlog&&window.location.href.indexOf(urlBlog)>-1)){
		$('<div class="ads" style="margin-bottom: 20px;border-radius: 5px;overflow: hidden;box-shadow: 0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);display: inherit;"><a href="http://www.bloggerku.com/" target="_blank" title="Kumpulan Tutorial Blogger"><img alt="bloggerku" src="https://3.bp.blogspot.com/-6kCkIiT4sRo/Vy_t7jexLCI/AAAAAAAAAY0/S4FUZ4w3vPAHbVirMuT9I2W2RlpKV8iAACLcB/s1600/iklan%2Bbloggerku.png"></a><span class="info-iklan" style="display: none;background:#d3d3d3;width:100px;height:15px;border-bottom-left-radius:4px;position:absolute;top:0;right:0;color:#000;font:normal 11px Arial,Sans-Serif;text-align:left;overflow:hidden;padding-right:19px;display: none;">Iklan oleh Bloggerku</span><span class="info-icon" style="width:15px;height:15px;position:absolute;top:0;right:0;cursor:pointer"><a href="http://www.bloggerku.com/p/pasang-iklan.html" target="_blank"><img alt="info" src="http://2.bp.blogspot.com/--ivaHIgXThk/UnJWU80FLhI/AAAAAAAAF_Y/WrH-8aYijGw/s1600/info-iklan.png" style="vertical-align: top;"></a></span></div>').insertBefore('#sidebar-atas');
		$('.info-icon').hover(function() {
			$('.info-iklan').toggle();
		});
		$('#creditmd').css({display:"initial","font-size": "100%",color: "#fff",visibility: "visible"})
		if ($('#creditmd').html()!=('Template By <a href="http://www.bloggerku.com/" target="_blank" title="Bloggerku">Bloggerku</a>')) {
			location.href="http://www.bloggerku.com"
		};
	}
}
var postperpage = $('.blog-pager-older-link').length == 1 ? $("article").length : $('.blog-pager-newer-link').attr('href').slice($('.blog-pager-newer-link').attr('href').indexOf("max-results=") + 12).substr(0, 1),
    numshowpage = 3,
    upPageWord = " <i class='fa fa-chevron-left'></i> ",
    downPageWord = " <i class='fa fa-chevron-right'></i> ",
    home_page = "/",
    urlactivepage = location.href,
    nopage, jenis, nomerhal, lblname1;
ajaxload ? loadmore() : halamanblogger();
