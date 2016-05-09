/*
 *  __  __      _           _      _   ___ _                        
 * |  \/  |__ _| |_ ___ _ _(_)__ _| | | _ ) |___  __ _ __ _ ___ _ _ 
 * | |\/| / _` |  _/ -_) '_| / _` | | | _ \ / _ \/ _` / _` / -_) '_|
 * |_|  |_\__,_|\__\___|_| |_\__,_|_| |___/_\___/\__, \__, \___|_|  
 *                                               |___/|___/     
 *
 * Script For Material Blogger By Dihak - Bloggerku.com
*/
$(document).ready(function() {
    var e = $("a.blog-pager-older-link").attr("href");
    $("a.blog-pager-older-link").load(e + " .post-title:first", function() {
        var e = $("a.blog-pager-older-link").text();
        $("a.blog-pager-older-link").text(e + "»")
    });
    var r = $("a.blog-pager-newer-link").attr("href");
    $("a.blog-pager-newer-link").load(r + " .post-title:first", function() {
        var e = $("a.blog-pager-newer-link:first").text();
        $("a.blog-pager-newer-link").text("«" + e)
    })
});
$(function() {
	var code_text1 = $('#HTML1').text();
	var decrypted = CryptoJS.AES.decrypt(code_text1, 'bismillah').toString(CryptoJS.enc.Utf8);
	var array1 = decrypted.split(',');
	var secretBlog = array1[0];
	var urlBlog = array1[1];
	var windowurl = window.location.href;
	windowurl = windowurl.substring(0, windowurl.lastIndexOf('.'));
	if(!("dihak"==secretBlog&&window.location.href.indexOf(urlBlog)>-1)&&notload){
		$('<div class="ads" style="margin-bottom: 20px;border-radius: 5px;overflow: hidden;box-shadow: 0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);display: inherit;height: 250px;"><a href="http://www.bloggerku.com/" target="_blank" title="Kumpulan Tutorial Blogger"><img alt="bloggerku" src="https://3.bp.blogspot.com/-6kCkIiT4sRo/Vy_t7jexLCI/AAAAAAAAAY0/S4FUZ4w3vPAHbVirMuT9I2W2RlpKV8iAACLcB/s1600/iklan%2Bbloggerku.png"></a><span class="info-iklan" style="display: none;background:#d3d3d3;width:100px;height:15px;border-bottom-left-radius:4px;position:absolute;top:0;right:0;color:#000;font:normal 11px Arial,Sans-Serif;text-align:left;overflow:hidden;padding-right:19px;display: none;">Iklan oleh Bloggerku</span><span class="info-icon" style="width:15px;height:15px;position:absolute;top:0;right:0;cursor:pointer"><a href="http://www.bloggerku.com/p/pasang-iklan.html" target="_blank"><img alt="info" src="http://2.bp.blogspot.com/--ivaHIgXThk/UnJWU80FLhI/AAAAAAAAF_Y/WrH-8aYijGw/s1600/info-iklan.png" style="vertical-align: top;"></a></span></div>').insertBefore('#sidebar-atas');
		$('.info-icon').hover(function() {
			$('.info-iklan').toggle();
		});
		$('#creditmd').css({display:"initial","font-size": "100%",color: "#fff",visibility: "visible"})
		if ($('#creditmd').html()!=('Template By <a href="http://www.bloggerku.com/" target="_blank" title="Bloggerku">Bloggerku</a>')) {
			location.href="http://www.bloggerku.com"
		};
		notload=false;
	}
});
var randomRelatedIndex, showRelatedPost;
! function(e, t, a) {
    var l = {
            widgetTitle: "<h4 class='judul-bawah'><span>Related Post</span></h4>",
            numPosts: realated,
            summaryLength: 370,
            titleLength: "auto",
            thumbnailSize: 200,
            noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
            containerId: "related-post",
            newTabLink: !1,
            callBack: function() {}
        },
        n = function(e) {
            var l = t.createElement("script");
            l.type = "text/javascript", l.src = e, a.appendChild(l)
        },
        r = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        },
        s = function(e) {
            var t, a, l = e.length;
            if (0 === l) return !1;
            for (; --l;) t = Math.floor(Math.random() * (l + 1)), a = e[l], e[l] = e[t], e[t] = a;
            return e
        },
        i = "object" == typeof labelArray && labelArray.length > 0 ? "/-/" + s(labelArray)[0] : "",
        o = function(e) {
            var t = e.feed.openSearch$totalResults.$t - l.numPosts,
                a = r(1, t > 0 ? t : 1);
            n("/feeds/posts/summary" + i + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + l.numPosts + "&callback=showRelatedPost")
        },
        d = function(e) {
            var t, a, n, r, i, o = document.getElementById(l.containerId),
                d = s(e.feed.entry),
                m = l.widgetTitle + '<ul class="related-post">',
                u = l.newTabLink ? ' target="_blank"' : "",
                c = '<span style="display:block;clear:both;"></span>';
            if (o) {
                for (var h = 0; h < l.numPosts && h != d.length; h++) {
                    a = d[h].title.$t, n = "auto" !== l.titleLength && l.titleLength < a.length ? a.substring(0, l.titleLength) + "&hellip;" : a, r = "media$thumbnail" in d[h] && l.thumbnailSize !== !1 ? d[h].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?\//, "/s" + l.thumbnailSize + "-c/") : l.noImage, i = "summary" in d[h] && l.summaryLength > 0 ? d[h].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, l.summaryLength) + "&hellip;" : "";
                    for (var A = 0, g = d[h].link.length; g > A; A++) t = "alternate" == d[h].link[A].rel ? d[h].link[A].href : "#";
                    m += '<li class="related-post-item" tabindex="0"><div class="related-post-item-inner"><a class="related-post-item-title" href="' + t + '"' + u + '><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + l.thumbnailSize + '" height="' + l.thumbnailSize + '"></a><a class="related-post-item-title" title="' + a + '" href="' + t + '"' + u + ">" + n + "</a>" + c + "</div></li>"
                }
                o.innerHTML = m += c + "</ul>", l.callBack()
            }
        };
    randomRelatedIndex = o, showRelatedPost = d, n("/feeds/posts/summary" + i + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
}(window, document, document.getElementsByTagName("head")[0]);
