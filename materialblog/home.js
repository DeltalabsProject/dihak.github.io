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
!function(e){function t(e,t){var n=new Image,r=e.getAttribute("data-src");n.onload=function(){e.parent?e.parent.replaceChild(n,e):e.src=r,t?t():null},n.src=r}function n(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.top<=(e.innerHeight||document.documentElement.clientHeight)}for(var r=function(e,t){if(document.querySelectorAll)t=document.querySelectorAll(e);else{var n=document,r=n.styleSheets[0]||n.createStyleSheet();r.addRule(e,"f:b");for(var l=n.all,o=0,c=[],i=l.length;i>o;o++)l[o].currentStyle.f&&c.push(l[o]);r.removeRule(0),t=c}return t},l=function(t,n){e.addEventListener?this.addEventListener(t,n,!1):e.attachEvent?this.attachEvent("on"+t,n):this["on"+t]=n},o=new Array,c=r(".post-img"),i=function(){for(var e=0;e<o.length;e++)n(o[e])&&t(o[e],function(){o.splice(e,e)})},u=0;u<c.length;u++)o.push(c[u]);i(),l("scroll",i)}(this);

// Pagenavigation
var postperpage = $('article').length;
var numshowpage = 3;
var upPageWord = " <i class='fa fa-chevron-left'></i> ";
var downPageWord = " <i class='fa fa-chevron-right'></i> ";
var home_page = "/";
var urlactivepage = location.href;
var nopage;
var jenis;
var nomerhal;
var lblname1;

function j(a) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = a;
    document.body.appendChild(b)
}

function loophalaman(a) {
    var b = '';
    nomerkiri = parseInt(numshowpage / 2);
    if (nomerkiri == numshowpage - nomerkiri) {
        numshowpage = nomerkiri * 2 + 1
    }
    mulai = nomerhal - nomerkiri;
    if (mulai < 1) mulai = 1;
    maksimal = parseInt(a / postperpage) + 1;
    if (maksimal - 1 == a / postperpage) maksimal = maksimal - 1;
    akhir = mulai + numshowpage - 1;
    if (akhir > maksimal) akhir = maksimal;
    var c = parseInt(nomerhal) - 1;
    if (nomerhal == 1) {
        if (jenis == "page") {
            b += '<span class="showpage disable"><a href="' + home_page + '">' + upPageWord + '</a></span>'
        } else {
            b += '<span class="showpageNum"><a href="/search/label/' + lblname1 + '?&max-results=' + postperpage + '">' + upPageWord + '</a></span>'
        }
    } else {
        if (jenis == "page") {
            b += '<span class="showpageNum"><a href="#" onclick="redirectpage(' + c + ');return false">' + upPageWord + '</a></span>'
        } else {
            b += '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + c + ');return false">' + upPageWord + '</a></span>'
        }
    }
    if (mulai > 1) {
        if (jenis == "page") {
            b += '<span class="showpageNum"><a href="' + home_page + '">1</a></span>'
        } else {
            b += '<span class="showpageNum"><a href="/search/label/' + lblname1 + '?&max-results=' + postperpage + '">1</a></span>'
        }
    }
    for (var d = mulai; d <= akhir; d++) {
        if (nomerhal == d) {
            b += '<span class="showpagePoint">' + d + '</span>'
        } else if (d == 1) {
            if (jenis == "page") {
                b += '<span class="showpageNum"><a href="' + home_page + '">1</a></span>'
            } else {
                b += '<span class="showpageNum"><a href="/search/label/' + lblname1 + '?&max-results=' + postperpage + '">1</a></span>'
            }
        } else {
            if (jenis == "page") {
                b += '<span class="showpageNum"><a href="#" onclick="redirectpage(' + d + ');return false">' + d + '</a></span>'
            } else {
                b += '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + d + ');return false">' + d + '</a></span>'
            }
        }
    }
    if (akhir < maksimal) {
        if (jenis == "page") {
            b += '<span class="showpageNum"><a href="#" onclick="redirectpage(' + maksimal + ');return false">' + maksimal + '</a></span>'
        } else {
            b += '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + maksimal + ');return false">' + maksimal + '</a></span>'
        }
    }
    var e = parseInt(nomerhal) + 1;
    if (nomerhal < maksimal) {
        if (jenis == "page") {
            b += '<span class="showpageNum"><a href="#" onclick="redirectpage(' + e + ');return false">' + downPageWord + '</a></span>'
        } else {
            b += '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + e + ');return false">' + downPageWord + '</a></span>'
        }
    }
    if (nomerhal == maksimal) {
        if (jenis == "page") {
            b += '<span class="showpage disable"><a href="#" onclick="redirectpage(' + e + ');return false">' + downPageWord + '</a></span>'
        } else {
            b += '<span class="showpage disable"><a href="#" onclick="redirectlabel(' + e + ');return false">' + downPageWord + '</a></span>'
        }
    }
    var f = document.getElementsByName("pageArea");
    var g = document.getElementById("blog-pager");
    for (var p = 0; p < f.length; p++) {
        f[p].innerHTML = b
    }
    if (f && f.length > 0) {
        b = ''
    }
    if (g) {
        g.innerHTML = b
    }
}

function hitungtotaldata(a) {
    var b = a.feed;
    var c = parseInt(b.openSearch$totalResults.$t, 10);
    loophalaman(c)
}

function halamanblogger() {
    var a = urlactivepage;
    if (a.indexOf("/search/label/") != -1) {
        if (a.indexOf("?updated-max") != -1) {
            lblname1 = a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max"))
        } else {
            lblname1 = a.substring(a.indexOf("/search/label/") + 14)
        }
    }
    if (a.indexOf("?q=") == -1 && a.indexOf(".html") == -1) {
        if (a.indexOf("/search/label/") == -1) {
            jenis = "page";
            if (urlactivepage.indexOf("#PageNo=") != -1) {
                nomerhal = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
            } else {
                nomerhal = 1
            }
            j(home_page + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata")
        } else {
            jenis = "label";
            if (a.indexOf("&max-results=") == -1) {
                postperpage = 20
            }
            if (urlactivepage.indexOf("#PageNo=") != -1) {
                nomerhal = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
            } else {
                nomerhal = 1
            }
            j(home_page + 'feeds/posts/summary/-/' + lblname1 + '?alt=json-in-script&callback=hitungtotaldata&max-results=1')
        }
    }
}

function redirectpage(a) {
    jsonstart = (a - 1) * postperpage;
    nopage = a;
    var b = document.getElementsByTagName('head')[0];
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
    b.appendChild(c)
}

function redirectlabel(a) {
    jsonstart = (a - 1) * postperpage;
    nopage = a;
    var b = document.getElementsByTagName('head')[0];
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
    b.appendChild(c)
}

function finddatepost(a) {
    post = a.feed.entry[0];
    var b = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
    var c = encodeURIComponent(b);
    if (jenis == "page") {
        var d = "/search?updated-max=" + c + "&max-results=" + postperpage + "#PageNo=" + nopage
    } else {
        var d = "/search/label/" + lblname1 + "?updated-max=" + c + "&max-results=" + postperpage + "#PageNo=" + nopage
    }
    location.href = d
}
