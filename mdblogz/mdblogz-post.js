var disqus_shortname="kompiajaib";
var disqus_url = disqus_blogger_current_url;

(function () {
    "use strict";
    var get_comment_block = function () {
        var block = document.getElementById('comments');
        if (!block) {
            block = document.getElementById('disqus-blogger-comment-block');
        }
        return block;
    };
    var comment_block = get_comment_block();
    if (!!comment_block) {
        var disqus_div = document.createElement('div');
        disqus_div.id = 'disqus_thread';
        comment_block.innerHTML = '';
        comment_block.appendChild(disqus_div);
        comment_block.style.display = 'block';
        var dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
    }
})();

function resizeThumb(e,t){for(var s=document.getElementById(e),r=s.getElementsByTagName("img"),c=0;c<r.length;c++)r[c].src=r[c].src.replace(/\/s1600/,"/s"+t),r[c].width=t,r[c].height=t}resizeThumb("thumbspost",1100);

var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){
function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("sidebar5");
var pres=document.querySelectorAll("blockquote,pre,ul.emoji-list li span");for(var i=0;i<pres.length;i++){pres[i].addEventListener("dblclick",function(){var e=getSelection();var t=document.createRange();t.selectNodeContents(this);e.removeAllRanges();e.addRange(t)},false)};
function convert(){var ele1 = document.getElementById("somewhere");var replaced;replaced = ele1.value;replaced = replaced.replace(/&/ig, "&amp;");replaced = replaced.replace(/</ig, "&lt;");replaced = replaced.replace(/>/ig, "&gt;");replaced = replaced.replace(/"/ig, "&quot;");replaced = replaced.replace(/&#177;/ig, "&plusmn;");replaced = replaced.replace(/&#169;/ig, "&copy;");replaced = replaced.replace(/&#174;/ig, "&reg;");replaced = replaced.replace(/ya'll/ig, "ya'll");ele1.value = replaced;};
function showhide(){var e=document.getElementById("share-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};
function toggleNavPanel(e){var n=document.getElementById(e),l=document.getElementById("tombol-pesan"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="<i class='fa fa-plus-square-o'></i>"):(n.style.display="block",l.innerHTML="<i class='fa fa-minus-square-o'></i>")};
function toggleNavPanel2(e){var n=document.getElementById(e),l=document.getElementById("parser-button"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="Show Parser Box"):(n.style.display="block",l.innerHTML="Hide Parse Box")};
};
