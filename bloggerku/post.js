var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};
var olderLink=$("a.blog-pager-older-link").attr("href");$("a.blog-pager-older-link").load(olderLink+" .post-title:first",function(){var a=$("a.blog-pager-older-link").text();$("a.blog-pager-older-link").text(a)});var newerLink=$("a.blog-pager-newer-link").attr("href");$("a.blog-pager-newer-link").load(newerLink+" .post-title:first",function(){var a=$("a.blog-pager-newer-link:first").text();$("a.blog-pager-newer-link").text(a)})
//<![CDATA[
//Global setting
Config.maxThreadDepth = 6; //Kedalaman tingkat threaded comment
Display_Emo = true; //Tampilkan emoticon? ketik "false" untuk menyembunyikan
Replace_Youtube_Link = true; //Embed video YouTube, ketik "false" untuk mendisable
Replace_Image_Link = true; //Auto replace link image,  ketik "false" untuk mendisable.
Replace_Force_Tag = true; //Auto replace virtual tag contoh: [pre] menjadi <pre>, dan [/pre] menjadi </pre>, apabila salah menulis, tidak akan berfungsi
Replace_Image_Ext = ['JPG', 'GIF', 'PNG', 'BMP']; //(support: jpg, gif, png, bmp),hanya berfungsi apabila Replace_Image_Link=true
//Pengaturan Emoticon
Emo_List = [
':)'  	,'https://twemoji.maxcdn.com/36x36/1f600.png',
':('  	,'https://twemoji.maxcdn.com/36x36/1f615.png',
'hihi'  ,'https://twemoji.maxcdn.com/36x36/1f601.png',
':-)'  	,'https://twemoji.maxcdn.com/36x36/1f60f.png',
':D'  	,'https://twemoji.maxcdn.com/36x36/1f603.png',
'=D'  	,'https://twemoji.maxcdn.com/36x36/1f62c.png',
':-d'  	,'https://twemoji.maxcdn.com/36x36/1f604.png',
';('  	,'https://twemoji.maxcdn.com/36x36/1f61e.png',
';-('  	,'https://twemoji.maxcdn.com/36x36/1f62d.png',
'@-)'   ,'https://twemoji.maxcdn.com/36x36/1f616.png',
':P'  	,'https://twemoji.maxcdn.com/36x36/1f61c.png',
':o'	,'https://twemoji.maxcdn.com/36x36/1f62e.png',     
':&gt;)','https://twemoji.maxcdn.com/36x36/1f606.png',     
'(o)'	,'https://twemoji.maxcdn.com/36x36/1f609.png',     
':p'	,'https://twemoji.maxcdn.com/36x36/1f614.png',     
':-?'	,'https://twemoji.maxcdn.com/36x36/2753.png', 
'(p)'	,'https://twemoji.maxcdn.com/36x36/1f619.png', 
':-s'	,'https://twemoji.maxcdn.com/36x36/1f625.png',
'(m)'	,'https://twemoji.maxcdn.com/36x36/1f620.png',
'8-)'	,'https://twemoji.maxcdn.com/36x36/1f60e.png',
':-t'	,'https://twemoji.maxcdn.com/36x36/1f624.png',
':-b'	,'https://twemoji.maxcdn.com/36x36/1f634.png',
'b-('	,'https://twemoji.maxcdn.com/36x36/1f635.png',
':-#'	,'https://twemoji.maxcdn.com/36x36/1f637.png',
'=p~'	,'https://twemoji.maxcdn.com/36x36/1f35c.png',
'$-)'	,'https://twemoji.maxcdn.com/36x36/1f4b5.png',
'(y)'	,'https://twemoji.maxcdn.com/36x36/1f44d.png',
'(f)'	,'https://twemoji.maxcdn.com/36x36/1f33a.png',
'x-)'	,'https://twemoji.maxcdn.com/36x36/1f60d.png',
'(k)'	,'https://twemoji.maxcdn.com/36x36/1f496.png',
'(h)'	,'https://twemoji.maxcdn.com/36x36/1f44f.png',
'cheer'	,'https://twemoji.maxcdn.com/36x36/1f378.png',
];
//Config Force tag list, define all in lower case
Force_Tag = ['[pre]', '<pre>', '[/pre]', '</pre>',
    '<pre class="brush: plain; title: ; notranslate" title="">',
    '&lt;code&gt;', '</pre>', '</code>'
];

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 x=\'.Y\';3 X=$(\'#N-10\').G(\'A\');w 1c(a){3 b=\' \\n\\r\\t\\f\\2m\\2k\\2i\\2h\\2f\\2e\\2c\\29\\23\\22\\21\\20\\1Z\\1v\\1W\\1V\\1T\\1S\\1R\\1Q\\1P\\1O\\1N\';B(3 i=0;i<a.7;i++){5(b.9(a.1L(i))!=-1){a=a.8(0,i);16}}z a}$(\'#1K .1h p\').q(w(a,b){5(1G){3 c=\'1n://S.T.V/1r?v=\';3 d=b.9(c);E(d!=-1){1u=b.8(d);I=1c(1u);3 e=I.9(\'&\');3 f=\'\';5(e==-1){f=I.8(c.7)}15{f=I.8(c.7,e)}3 g=\'<1b D="1F" A="1n://S.T.V/1E/\'+f+\'?1C=1" 1A="0" 1z></1b>\';b=b.8(0,d)+g+b.8(d+I.7);d=b.9(c);5(d==-1){c=\'2r://S.T.V/1r?v=\';d=b.9(c)}}}5(1y){3 h=\'\';3 j=b;B(3 i=0;i<1m.7;i++){3 c=\'.\'+1m[i];3 k=j.F();3 d=k.9(c);E(d!=-1){u=j.8(0,d+c.7);k=u.F();3 l=\'1x://\';3 m=k.9(l);3 n=\'\';E(m!=-1){n=l.Q();u=u.8(m+l.7);k=u.F();m=k.9(l)}l=\'1w://\';k=u.F();m=k.9(l);E(m!=-1){n=l.Q();u=u.8(m+l.7);k=u.F();m=k.9(l)}5(n==\'\'||u.7<6){16}u=n+u;h+=j.8(0,d+c.7-u.7)+\'<H A="\'+u+\'" D="1Y"/>\';j=j.8(d+c.7);k=j.F();d=k.9(c)}}b=h+j}5(J){3 o=s.7;5(o%2==1){o--}B(3 i=0;i<o;i+=2){3 p=\'<H A="\'+s[i+1]+\'" D="L"/>\';d=b.9(s[i]);E(d!=-1){b=b.8(0,d)+p+b.8(d+s[i].7);d=b.9(s[i])}}}5(1B){3 o=K.7;5(o%2==1){o--}B(3 i=0;i<o;i+=2){E(1){3 j=b.Q();d=j.9(K[i]);5(d!=-1){b=b.8(0,d)+K[i+1]+b.8(d+K[i].7)}15{16}}}}z b});$(\'.1D\').q(w(a,b){5(J){3 c=s.7;5(c%2==1){c--}B(3 i=0;i<c;i+=2){3 d=\'<H A="\'+s[i+1]+\'" D="L" 1e="1d"/>\';y=b.9(s[i]);E(y!=-1){b=b.8(0,y)+d+b.8(y+s[i].7);y=b.9(s[i])}}}z b});$(\'1H\'),$(\'1I\').q(w(a,b){5(J){3 c=s.7;5(c%2==1){c--}B(3 i=0;i<c;i+=2){3 d=\'<H A="\'+s[i+1]+\'" D="L" 1e="1d">\';y=b.9(d);E(y!=-1){b=b.8(0,y)+s[i]+b.8(y+d.7);y=b.9(d)}}}z b});$(\'.1J\').q(w(a,b){5(J){3 c=s.7;5(c%2==1){c--}3 d=\'\';B(3 i=0;i<c;i+=2){3 e=\'<1g>\'+s[i]+\'</1g>\';3 f=\'<H A="\'+s[i+1]+\'" D="L"/>\';d+=\'<O D="1M">\'+f+e+\'</O>\'}z d}});$(\'.1k .1h p\').q(w(i,h){14=h.Q();P=14.9(\'@<a 12="#c\');5(P!=-1){11=14.9(\'</a>\',P);5(11!=-1){h=h.8(0,P)+h.8(11+4)}}z h});w 1a(a){r=a.9(\'c\');5(r!=-1)a=a.8(r+1);z a}w 19(a){a=\'&1U=\'+a+\'#%18\';1t=X.1X(/#%18/,a);z 1t}w 1s(){q=$(x).q();$(x).q(\'\');x=\'.Y\';$(x).q(q);$(\'#N-10\').G(\'A\',X)}w 1q(e){C=$(e).G(\'13\');C=1a(C);q=$(x).q();5(x==\'.Y\'){1l=\'<a 12="#1j" 24="1s()">\'+25.26+\'</a><a 27="1j"/>\';$(x).q(1l)}15{$(x).q(\'\')}x=\'#28\'+C;$(x).q(q);$(\'#N-10\').G(\'A\',19(C))}Z=2a.2b.12;U=\'#N-2d\';17=Z.9(U);5(17!=-1){1p=Z.8(17+U.7);1q(\'#2g\'+1p)}B(3 i=0;i<M.7;i++){5(\'1i\'2j M[i]){3 C=M[i].1i;3 W=2l($(\'#c\'+C+\':R\').G(\'1f\'));$(\'#c\'+C+\' .2n:R\').q(w(a,b){3 c=M[i].13;5(W>=2o.2p){$(\'#c\'+c+\':R .2q\').1o()}3 d=$(\'#c\'+c+\':R\').q();d=\'<O D="1k" 13="c\'+c+\'" 1f="\'+(W+1)+\'">\'+d+\'</O>\';$(\'#c\'+c).1o();z(b+d)})}}',62,152,'|||var||if||length|substring|indexOf|||||||||||||||||html||Emo_List||img_src||function|Cur_Cform_Hdr|check_index|return|src|for|par_id|class|while|toUpperCase|attr|img|yt_link|Display_Emo|Force_Tag|comment_emo|Items|comment|div|index|toLowerCase|first|www|youtube|search_formid|com|par_level|Cur_Cform_Url|comment_form|cur_url|editor|index_tail|href|id|temp|else|break|search_index|7B|Cform_Ins_ParID|Valid_Par_Id|iframe|trim|emoticon|alt|level|span|comment_body|parentId|origin_cform|comment_wrap|reset_html|Replace_Image_Ext|http|remove|ret_id|Display_Reply_Form|watch|Reset_Comment_Form|n_cform_url|ht|u2005|HTTPS|HTTP|Replace_Image_Link|allowfullscreen|frameborder|Replace_Force_Tag|autohide|post|embed|comment_youtube|Replace_Youtube_Link|pre|kbd|comment_emo_list|comment_block|charAt|item|u3000|u2029|u2028|u200b|u200a|u2009|u2008|parentID|u2007|u2006|replace|comment_img|u2004|u2003|u2002|u2001|u2000|onclick|Msgs|addComment|name|r_f_c|xa0|window|location|x0b|form_|x3e|x3c|rc|x7d|x7c|in|x5d|parseInt|x5b|comment_child|Config|maxThreadDepth|comment_reply|https'.split('|'),0,{}))
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 Q,W;(6(n,m,k){2 d={10:"<J 4=\'1v-1t\'>1s 1r:</J>",1n:3,Y:"1T://1S.1R.1M/",10:"<J 4=\'1v-1t\'><H>1s 1r</H></J>",I:5,T:1w,K:"1k",C:1B,1d:"20:1X/1W;1C,1z/27+26",19:"7-8",18:V,17:6(){}};X(2 f B Z){d[f]=(Z[f]=="1Z")?d[f]:Z[f]}2 j=6(a){2 b=m.23("12");b.1E="1I/1Y";b.1h=a;k.1H(b)},o=6(b,a){M L.15(L.16()*(a-b+1))+b},l=6(a){2 p=a.D,c,b;R(p===0){M V}1y(--p){c=L.15(L.16()*(p+1));b=a[p];a[p]=a[c];a[c]=b}M a},e=(1A S=="1D"&&S.D>0)?"/-/"+l(S)[0]:"",h=6(b){2 c=b.1a.1J$1U.$t-d.I,a=o(1,(c>0?c:1));j(d.Y.i(/\\/$/,"")+"/1b/1c/F"+e+"?11=1e-B-12&1f=1g&2c-1x="+a+"&13-1i="+d.I+"&1j=W")},g=6(z){2 s=U.1F(d.19),x=l(z.1a.1G),A=d.1n,c=d.10+\'<1l 4="7-8-1m-\'+A+\'">\',b=d.18?\' 1K="1L"\':"",y=\'<H 1m="1N:1O;1P:1Q;"></H>\',v,t,w,r,u;R(!s){M}X(2 q=0;q<d.I;q++){R(q==x.D){1V}t=x[q].G.$t;w=(d.K!=="1k"&&d.K<t.D)?t.1o(0,d.K)+"&1p;":t;r=("1q$P"B x[q]&&d.C!==V)?x[q].1q$P.21.i(/\\/s[0-9]+(\\-c)?\\//,"/s"+d.C+"-c/"):d.1d;u=("F"B x[q]&&d.T>0)?x[q].F.$t.i(/<22 ?\\/?>/g," ").i(/<.*?>/g,"").i(/[<>]/g,"").1o(0,d.T)+"&1p;":"";X(2 p=0,a=x[q].O.D;p<a;p++){v=(x[q].O[p].24=="25")?x[q].O[p].N:"#"}c+=\'<1u 4="7-8-E" 28="0"><a 4="7-8-E-G" N="\'+v+\'"\'+b+\'><29 11="" 4="7-8-E-P" 1h="\'+r+\'" 2a="\'+d.C+\'" 2b="\'+d.C+\'"></a><14 4="7-8-E-2d"><a 4="7-8-E-G" G="\'+t+\'" N="\'+v+\'"\'+b+">"+w+"</a></14>"+y+"</1u>"}s.2e=c+="</1l>"+y;d.17()};Q=h;W=g;j(d.Y.i(/\\/$/,"")+"/1b/1c/F"+e+"?11=1e-B-12&1f=1g&13-1i=0&1j=Q")})(2f,U,U.2g("2h")[0]);',62,142,'||var||class||function|related|post||||||||||replace|||||||||||||||||||in|thumbnailSize|length|item|summary|title|span|numPosts|h4|titleLength|Math|return|href|link|thumbnail|randomRelatedIndex|if|labelArray|summaryLength|document|false|showRelatedPost|for|homePage|relatedPostConfig|widgetTitle|alt|script|max|div|floor|random|callBack|newTabLink|containerId|feed|feeds|posts|noImage|json|orderby|updated|src|results|callback|auto|ul|style|widgetStyle|substring|hellip|media|Terkait|Artikel|bawah|li|judul|370|index|while|iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U|typeof|80|base64|object|type|getElementById|entry|appendChild|text|openSearch|target|_blank|com|display|block|clear|both|blogspot|mdblogz|http|totalResults|break|png|image|javascript|undefined|data|url|br|createElement|rel|alternate|AX7vOF2TAAAAAElFTkSuQmCC|gAAAADElEQVQImWOor68HAAL|tabindex|img|width|height|start|tooltip|innerHTML|window|getElementsByTagName|head'.split('|'),0,{}))
var avatar=$("#comments");
avatar.find('.comment_avatar img').each(function() {
var ava = $(this).attr('src');
$(this).show().attr('src', ava.replace(/\/s[0-9]+(\-c)?\//,"/s55-c/"));
});
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,kbd,blockquote,i"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
//]]>
