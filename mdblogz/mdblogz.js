var nopage;
var jenis;
var nomerhal;
var lblname1;
halamanblogger();
var j = function(a) {
            var b = m.createElement("script");
            b.type = "text/javascript";
            b.src = a;
            k.appendChild(b)
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
    b += "<span class='showpageOf'>Page " + nomerhal + ' of ' + maksimal +
        "</span>";
    var c = parseInt(nomerhal) - 1;
    if (nomerhal > 1) {
        if (nomerhal == 2) {
            if (jenis == "page") {
                b += '<span class="showpage"><a href="' + home_page + '">' +
                    upPageWord + '</a></span>'
            } else {
                b += '<span class="showpageNum"><a href="/search/label/' +
                    lblname1 + '?&max-results=' + postperpage + '">' +
                    upPageWord + '</a></span>'
            }
        } else {
            if (jenis == "page") {
                b +=
                    '<span class="showpageNum"><a href="#" onclick="redirectpage(' +
                    c + ');return false">' + upPageWord + '</a></span>'
            } else {
                b +=
                    '<span class="showpageNum"><a href="#" onclick="redirectlabel(' +
                    c + ');return false">' + upPageWord + '</a></span>'
            }
        }
    }
    if (mulai > 1) {
        if (jenis == "page") {
            b += '<span class="showpageNum"><a href="' + home_page +
                '">1</a></span>'
        } else {
            b += '<span class="showpageNum"><a href="/search/label/' +
                lblname1 + '?&max-results=' + postperpage +
                '">1</a></span>'
        }
    }
    for (var d = mulai; d <= akhir; d++) {
        if (nomerhal == d) {
            b += '<span class="showpagePoint">' + d + '</span>'
        } else if (d == 1) {
            if (jenis == "page") {
                b += '<span class="showpageNum"><a href="' + home_page +
                    '">1</a></span>'
            } else {
                b += '<span class="showpageNum"><a href="/search/label/' +
                    lblname1 + '?&max-results=' + postperpage +
                    '">1</a></span>'
            }
        } else {
            if (jenis == "page") {
                b +=
                    '<span class="showpageNum"><a href="#" onclick="redirectpage(' +
                    d + ');return false">' + d + '</a></span>'
            } else {
                b +=
                    '<span class="showpageNum"><a href="#" onclick="redirectlabel(' +
                    d + ');return false">' + d + '</a></span>'
            }
        }
    }
    if (akhir < maksimal) {
        if (jenis == "page") {
            b +=
                '<span class="showpageNum"><a href="#" onclick="redirectpage(' +
                maksimal + ');return false">' + maksimal + '</a></span>'
        } else {
            b +=
                '<span class="showpageNum"><a href="#" onclick="redirectlabel(' +
                maksimal + ');return false">' + maksimal + '</a></span>'
        }
    }
    var e = parseInt(nomerhal) + 1;
    if (nomerhal < maksimal) {
        if (jenis == "page") {
            b +=
                '<span class="showpageNum"><a href="#" onclick="redirectpage(' +
                e + ');return false">' + downPageWord + '</a></span>'
        } else {
            b +=
                '<span class="showpageNum"><a href="#" onclick="redirectlabel(' +
                e + ');return false">' + downPageWord + '</a></span>'
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
            lblname1 = a.substring(a.indexOf("/search/label/") + 14, a.indexOf(
                "?updated-max"))
        } else {
            lblname1 = a.substring(a.indexOf("/search/label/") + 14)
        }
    }
    if (a.indexOf("?q=") == -1 && a.indexOf(".html") == -1) {
        if (a.indexOf("/search/label/") == -1) {
            jenis = "page";
            if (urlactivepage.indexOf("#PageNo=") != -1) {
                nomerhal = urlactivepage.substring(urlactivepage.indexOf(
                    "#PageNo=") + 8, urlactivepage.length)
            } else {
                nomerhal = 1
            }

            j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata")
        } else {
            jenis = "label";
            if (a.indexOf("&max-results=") == -1) {
                postperpage = 20
            }
            if (urlactivepage.indexOf("#PageNo=") != -1) {
                nomerhal = urlactivepage.substring(urlactivepage.indexOf(
                    "#PageNo=") + 8, urlactivepage.length)
            } else {
                nomerhal = 1
            }

            j(d.homePage.replace(/\/$/, "") + '/feeds/posts/summary/-/' + lblname1 + '?alt=json-in-script&callback=hitungtotaldata&max-results=1'
        }
    }
}

function redirectpage(a) {
    jsonstart = (a - 1) * postperpage;
    nopage = a;
    var b = document.getElementsByTagName('head')[0];
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.setAttribute("src", home_page + "feeds/posts/summary?start-index=" +
        jsonstart +
        "&max-results=1&alt=json-in-script&callback=finddatepost");
    b.appendChild(c)
}

function redirectlabel(a) {
    jsonstart = (a - 1) * postperpage;
    nopage = a;
    var b = document.getElementsByTagName('head')[0];
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 +
        "?start-index=" + jsonstart +
        "&max-results=1&alt=json-in-script&callback=finddatepost");
    b.appendChild(c)
}

function finddatepost(a) {
    post = a.feed.entry[0];
    var b = post.published.$t.substring(0, 19) + post.published.$t.substring(
        23, 29);
    var c = encodeURIComponent(b);
    if (jenis == "page") {
        var d = "/search?updated-max=" + c + "&max-results=" + postperpage +
            "#PageNo=" + nopage
    } else {
        var d = "/search/label/" + lblname1 + "?updated-max=" + c +
            "&max-results=" + postperpage + "#PageNo=" + nopage
    }
    location.href = d
}
$('.post').each(function() {
    if ($(this).find('.post-label').length) {     
        var cl = $(this).find('.post-label').text();
        $(this).find('.card-title').addClass(cl);
		$(this).find('.card-content').addClass(cl);
    }
});
var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};
function resizeThumb(parentID, size, size2) {
    var parent = document.getElementById(parentID),
        image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].src = image[i].src.replace("/s72-c/", "/w" + size + "-h" + size2 + "-c/");
        image[i].width = size;
        image[i].height = size2;
    }
}
resizeThumb('Blog1', 345, 250);
