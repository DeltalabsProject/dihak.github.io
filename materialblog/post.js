var randomRelatedIndex, showRelatedPost;
(function(n, m, k) {
    var d = {
        widgetTitle: "<h4 class='judul-bawah'><span>Related Post</span></h4>",
        numPosts: realated,
        summaryLength: 370,
        titleLength: "auto",
        thumbnailSize: 200,
        noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
        containerId: "related-post",
        newTabLink: false,
        callBack: function() {}
    };
    var j = function(a) {
            var b = m.createElement("script");
            b.type = "text/javascript";
            b.src = a;
            k.appendChild(b)
        },
        o = function(b, a) {
            return Math.floor(Math.random() * (a - b + 1)) + b
        },
        l = function(a) {
            var p = a.length,
                c, b;
            if(p === 0) {
                return false
            }
            while(--p) {
                c = Math.floor(Math.random() * (p + 1));
                b = a[p];
                a[p] = a[c];
                a[c] = b
            }
            return a
        },
        e = (typeof labelArray == "object" && labelArray.length > 0) ? "/-/" + l(labelArray)[0] : "",
        h = function(b) {
            var c = b.feed.openSearch$totalResults.$t - d.numPosts,
                a = o(1, (c > 0 ? c : 1));
            j("/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
        },
        g = function(z) {
            var s = document.getElementById(d.containerId),
                x = l(z.feed.entry),
                c = d.widgetTitle + '<ul class="related-post">',
                b = d.newTabLink ? ' target="_blank"' : "",
                y = '<span style="display:block;clear:both;"></span>',
                v, t, w, r, u;
            if(!s) {
                return
            }
            for(var q = 0; q < d.numPosts; q++) {
                if(q == x.length) {
                    break
                }
                t = x[q].title.$t;
                w = (d.titleLength !== "auto" && d.titleLength < t.length) ? t.substring(0, d.titleLength) + "&hellip;" : t;
                r = ("media$thumbnail" in x[q] && d.thumbnailSize !== false) ? x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?\//, "/s" + d.thumbnailSize + "-c/") : d.noImage;
                u = ("summary" in x[q] && d.summaryLength > 0) ? x[q].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.summaryLength) + "&hellip;" : "";
                for(var p = 0, a = x[q].link.length; p < a; p++) {
                    v = (x[q].link[p].rel == "alternate") ? x[q].link[p].href : "#"
                }
                c += '<li class="related-post-item" tabindex="0"><div class="related-post-item-inner"><a class="related-post-item-title" href="' + v + '"' + b + '><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"></a><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + "</a>" + y + "</div></li>"
            }
            s.innerHTML = c += y + "</ul>";
            d.callBack()
        };
    randomRelatedIndex = h;
    showRelatedPost = g;
    j("/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
})(window, document, document.getElementsByTagName("head")[0]);

var Cur_Cform_Hdr = '.comment_form';
var Cur_Cform_Url = $('#comment-editor').attr('src');
function trim(a) {
    var b = ' \n\r\t\f\x5b\x5d\x7c\x7d\x3c\x3e\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a.charAt(i)) != -1) {
            a = a.substring(0, i);
            break
        }
    }
    return a
}
$('#comment_block .comment_body p').html(function(a, b) {
	if (Replace_Youtube_Link) {
        var c = 'https://www.youtube.com/watch?v=';
        var d = b.indexOf(c);
        while (d != -1) {
            ht = b.substring(d);
            yt_link = trim(ht);
            var e = yt_link.indexOf('?');
            var f = yt_link.substring(c.length)
            var g = '<iframe class="comment-media video youtube" width="100%" height="360" src="https://www.youtube.com/embed/' + f + '?autohide=1" frameborder="0" allowfullscreen></iframe>';
            b = b.substring(0, d) + g + b.substring(d + yt_link.length);
            d = b.indexOf(c);
            if (d == -1) {
                c = 'https://www.youtube.com/watch?v=';
                d = b.indexOf(c)
            }
        }
    }
    if (Replace_Image_Link) {
        var h = '';
        var j = b;
        for (var i = 0; i < Replace_Image_Ext.length; i++) {
            var c = '.' + Replace_Image_Ext[i];
            var k = j.toUpperCase();
            var d = k.indexOf(c);
            while (d != -1) {
                img_src = j.substring(0, d + c.length);
                k = img_src.toUpperCase();
                var l = 'HTTP://';
                var m = k.indexOf(l);
                var n = '';
                while (m != -1) {
                    n = l.toLowerCase();
                    img_src = img_src.substring(m + l.length);
                    k = img_src.toUpperCase();
                    m = k.indexOf(l)
                }
                l = 'HTTPS://';
                k = img_src.toUpperCase();
                m = k.indexOf(l);
                while (m != -1) {
                    n = l.toLowerCase();
                    img_src = img_src.substring(m + l.length);
                    k = img_src.toUpperCase();
                    m = k.indexOf(l)
                }
                if (n == '' || img_src.length < 6) {
                    break
                }
                img_src = n + img_src;
                h += j.substring(0, d + c.length - img_src.length) + '<img src="' + img_src + '" class="comment_img"/>';
                j = j.substring(d + c.length);
                k = j.toUpperCase();
                d = k.indexOf(c)
            }
        }
        b = h + j
    }
    if (Replace_Force_Tag) {
        var o = Force_Tag.length;
        if (o % 2 == 1) {
            o--
        }
        for (var i = 0; i < o; i += 2) {
            while (1) {
                var j = b.toLowerCase();
                d = j.indexOf(Force_Tag[i]);
                if (d != -1) {
                    b = b.substring(0, d) + Force_Tag[i + 1] + b.substring(d + Force_Tag[i].length)
                } else {
                    break
                }
            }
        }
    }
    return b
});

if (display_emo) {
	$('#comment_block .comment_body p').each(function(){
	var h = $(this).html()
	for (i = 0; i < Emo_List.length; i += 2) {
	  if ($(this).html().indexOf(Emo_List[i]) > 0){
	    var p = ' <img src="' + Emo_List[i + 1].replace('s15','s20') + '" title="' + Emo_List[i] + '" alt="' + Emo_List[i] + '" class="comment_emo"/>',
	        b = Emo_List[i],
			h = h.replace(' '+b,p);
	  }
	}
	$(this).html(h)
	})
	$('.comment_emo_list').html(function(a, b) {
	    if (display_emo) {
	        var c = Emo_List.length;
	        if (c % 2 == 1) {
	            c--
	        }
	        var d = '';
	        for (var i = 0; i < c; i += 2) {
	            var f = '<img src="' + Emo_List[i + 1].replace('s15','s20') + '" alt="' + Emo_List[i] + '" class="comment_emo"/>';
	            d += '<div class="item">' + f + '</div>'
	        }
	        return d
	    }
	}).after('<div class="arrow-bawah"/><div class="emo-dialog"/><span class="emo-button"><i class="fa fa-smile-o"></i>Emoticon</span>');
	$('.comment_emo_list,.arrow-bawah').appendTo('.emo-dialog');
	$('.comment_emo_list .item img').css('cursor', 'pointer').on('click', function(t) {
	  $('.emoKey').remove(), $(this).after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />'), $('.emoKey').trigger('select'), t.stopPropagation()
	});$(document).on('click', function(){$('.emoKey').remove()})
	$('.emo-button').on('click', function() {
	  $(this).toggleClass('active')
	  if ($(this).hasClass('active')){
	    $('.arrow-bawah').slideDown(100, function(){$('.comment_emo_list').slideDown(500)})
	  }else{
	    $('.comment_emo_list').slideUp(500, function(){$('.arrow-bawah').slideUp(100)})
	  }
	})
}

$('.comment_wrap .comment_body p').html(function(i, h) {
    temp = h.toLowerCase();
    index = temp.indexOf('@<a href="#c');
    if (index != -1) {
        index_tail = temp.indexOf('</a>', index);
        if (index_tail != -1) {
            h = h.substring(0, index) + h.substring(index_tail + 4)
        }
    }
    return h
});

function Valid_Par_Id(a) {
    r = a.indexOf('c');
    if (r != -1) a = a.substring(r + 1);
    return a
}

function Cform_Ins_ParID(a) {
    a = '&parentID=' + a + '#%7B';
    n_cform_url = Cur_Cform_Url.replace(/#%7B/, a);
    return n_cform_url
}

function Reset_Comment_Form() {
    html = $(Cur_Cform_Hdr).html();
    $(Cur_Cform_Hdr).html('');
    Cur_Cform_Hdr = '.comment_form';
    $(Cur_Cform_Hdr).html(html);
    $('#comment-editor').attr('src', Cur_Cform_Url)
}

function Display_Reply_Form(e) {
    par_id = $(e).attr('id');
    par_id = Valid_Par_Id(par_id);
    html = $(Cur_Cform_Hdr).html();
    if (Cur_Cform_Hdr == '.comment_form') {
        reset_html = '<a href="#origin_cform" onclick="Reset_Comment_Form()">' + Msgs.addComment + '</a><a name="origin_cform"/>';
        $(Cur_Cform_Hdr).html(reset_html)
    } else {
        $(Cur_Cform_Hdr).html('')
    }
    Cur_Cform_Hdr = '#r_f_c' + par_id;
    $(Cur_Cform_Hdr).html(html);
    $('#comment-editor').attr('src', Cform_Ins_ParID(par_id))
	if (display_emo)$('.emo-button').on('click', function() {
	  $(this).toggleClass('active')
	  if ($(this).hasClass('active')){
	    $('.arrow-bawah').slideDown(100, function(){$('.comment_emo_list').slideDown(500)})
	  }else{
	    $('.comment_emo_list').slideUp(500, function(){$('.arrow-bawah').slideUp(100)})
	  }
	})
}
if(disablelivelink){function blockLinks(e,t){var n=document.getElementById(e),r=n.getElementsByTagName(t);for(var i=0;i<r.length;i++){if(r[i].innerHTML.indexOf("</a>")!==-1){r[i].innerHTML="No more <span style='background-color:rgba(255,255,255,0.3);color:#fff;padding:4px 8px;border-radius:3px'><b>live link</b></span> in this comments field";r[i].className="spammer-detected"}}}blockLinks("comment_block","p")};
cur_url = window.location.href;
search_formid = '#comment-form_';
search_index = cur_url.indexOf(search_formid);
if (search_index != -1) {
    ret_id = cur_url.substring(search_index + search_formid.length);
    Display_Reply_Form('#rc' + ret_id)
}
for (var i = 0; i < Items.length; i++) {
    if ('parentId' in Items[i]) {
        var par_id = Items[i].parentId;
        var par_level = parseInt($('#c' + par_id + ':first').attr('data-level'));
        $('#c' + par_id + ' .comment_child:first').html(function(a, b) {
            var c = Items[i].id;
            if (par_level >= Config.maxThreadDepth) {
                $('#c' + c + ':first .comment_reply').remove()
            }
            var d = $('#c' + c + ':first').html();
            d = '<div class="comment_wrap" id="c' + c + '" data-level="' + (par_level + 1) + '">' + d + '</div>';
            $('#c' + c).remove();
            return (b + d)
        })
    }
}
var avatar = $("#comments");
avatar.find('.comment_avatar img').each(function() {
    var a = $(this).attr('src');
    $(this).show().attr('src', a.replace(/\/s[0-9]+(\-c)?\//, "/s48-c/"));
    /blogblog/g.test(a)&&$(this).attr('src',defaultavatar);
});
!showauthor && $('.comment_author_flag').remove()
