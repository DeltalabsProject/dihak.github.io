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

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 s=\'.X\';5 1e=$(\'#O-1c\').L(\'z\');q 1m(F){5 1f=\' \\n\\r\\t\\f\\1J\\1H\\1G\\1F\\2z\\2v\\2s\\2o\\2m\\2l\\2g\\2a\\29\\28\\26\\23\\1V\\1Q\\1M\\27\\25\\1T\\1P\';E(5 i=0;i<F.3;i++){9(1f.d(F.1L(i))!=-1){F=F.b(0,i);16}}y F}$(\'#1U .1B p\').g(q(A,7){9(1R){5 m=\'1j://Y.Z.10/1w?v=\';5 8=7.d(m);C(8!=-1){1i=7.b(8);H=1m(1i);5 11=H.d(\'&\');5 Q=\'\';9(11==-1){Q=H.b(m.3)}12{Q=H.b(m.3,11)}5 1s=\'<1v B="1W" z="1j://Y.Z.10/1X/\'+Q+\'?1Y=1" 1Z="0" 20></1v>\';7=7.b(0,8)+1s+7.b(8+H.3);8=7.d(m);9(8==-1){m=\'22://Y.Z.10/1w?v=\';8=7.d(m)}}}9(2A){5 13=\'\';5 w=7;E(5 i=0;i<1x.3;i++){5 m=\'.\'+1x[i];5 o=w.G();5 8=o.d(m);C(8!=-1){l=w.b(0,8+m.3);o=l.G();5 x=\'2j://\';5 D=o.d(x);5 K=\'\';C(D!=-1){K=x.R();l=l.b(D+x.3);o=l.G();D=o.d(x)}x=\'2p://\';o=l.G();D=o.d(x);C(D!=-1){K=x.R();l=l.b(D+x.3);o=l.G();D=o.d(x)}9(K==\'\'||l.3<6){16}l=K+l;13+=w.b(0,8+m.3-l.3)+\'<J z="\'+l+\'" B="2t"/>\';w=w.b(8+m.3);o=w.G();8=o.d(m)}}7=13+w}9(P){5 3=k.3;9(3%2==1){3--}E(5 i=0;i<3;i+=2){5 u=\'<J z="\'+k[i+1]+\'" B="V"/>\';8=7.d(k[i]);C(8!=-1){7=7.b(0,8)+u+7.b(8+k[i].3);8=7.d(k[i])}}}9(1I){5 3=U.3;9(3%2==1){3--}E(5 i=0;i<3;i+=2){C(1){5 w=7.R();8=w.d(U[i]);9(8!=-1){7=7.b(0,8)+U[i+1]+7.b(8+U[i].3)}12{16}}}}y 7});$(\'.1K\').g(q(A,7){9(P){5 3=k.3;9(3%2==1){3--}E(5 i=0;i<3;i+=2){5 u=\'<J z="\'+k[i+1]+\'" B="V" 1z="1k"/>\';8=7.d(k[i]);C(8!=-1){7=7.b(0,8)+u+7.b(8+k[i].3);8=7.d(k[i])}}}y 7});$(\'1N\').g(q(A,7){9(P){5 3=k.3;9(3%2==1){3--}E(5 i=0;i<3;i+=2){5 u=\'<J z="\'+k[i+1]+\'" B="V" 1z="1k">\';8=7.d(u);C(8!=-1){7=7.b(0,8)+k[i]+7.b(8+u.3);8=7.d(u)}}}y 7});$(\'.1O\').g(q(A,7){9(P){5 3=k.3;9(3%2==1){3--}5 14=\'\';E(5 i=0;i<3;i+=2){5 1D=\'<1g>\'+k[i]+\'</1g>\';5 u=\'<J z="\'+k[i+1]+\'" B="V"/>\';14+=\'<T B="1S">\'+u+1D+\'</T>\'}y 14}});$(\'.1h .1B p\').g(q(i,h){15=h.R();A=15.d(\'@<a W="#c\');9(A!=-1){17=15.d(\'</a>\',A);9(17!=-1){h=h.b(0,A)+h.b(17+4)}}y h});q 1l(j){r=j.d(\'c\');9(r!=-1)j=j.b(r+1);y j}q 1n(j){j=\'&21=\'+j+\'#%1o\';1p=1e.24(/#%1o/,j);y 1p}q 1q(){g=$(s).g();$(s).g(\'\');s=\'.X\';$(s).g(g);$(\'#O-1c\').L(\'z\',1e)}q 1r(e){j=$(e).L(\'18\');j=1l(j);g=$(s).g();9(s==\'.X\'){1t=\'<a W="#1u" 2b="1q()">\'+2c.2d+\'</a><a 2e="1u"/>\';$(s).g(1t)}12{$(s).g(\'\')}s=\'#2f\'+j;$(s).g(g);$(\'#O-1c\').L(\'z\',1n(j))}19=2h.2i.W;1a=\'#O-2k\';1b=19.d(1a);9(1b!=-1){1y=19.b(1b+1a.3);1r(\'#2n\'+1y)}E(5 i=0;i<S.3;i++){9(\'1A\'2q S[i]){5 j=S[i].1A;5 1d=2r($(\'#c\'+j+\':N\').L(\'1C\'));$(\'#c\'+j+\' .2u:N\').g(q(A,7){5 I=S[i].18;9(1d>=2w.2x){$(\'#c\'+I+\':N .2y\').1E()}5 M=$(\'#c\'+I+\':N\').g();M=\'<T B="1h" 18="c\'+I+\'" 1C="\'+(1d+1)+\'">\'+M+\'</T>\';$(\'#c\'+I).1E();y(7+M)})}}',62,161,'|||length||var||oldhtml|check_index|if||substring||indexOf|||html|||par_id|Emo_List|img_src|search_key||upper_html||function||Cur_Cform_Hdr||img_html||temp_html|http_search|return|src|index|class|while|find_http|for|str|toUpperCase|yt_link|child_id|img|save_http|attr|child_html|first|comment|Display_Emo|yt_code|toLowerCase|Items|div|Force_Tag|comment_emo|href|comment_form|www|youtube|com|yt_code_index|else|save_html|newhtml|temp|break|index_tail|id|cur_url|search_formid|search_index|editor|par_level|Cur_Cform_Url|whitespace|span|comment_wrap|ht|http|emoticon|Valid_Par_Id|trim|Cform_Ins_ParID|7B|n_cform_url|Reset_Comment_Form|Display_Reply_Form|yt_video|reset_html|origin_cform|iframe|watch|Replace_Image_Ext|ret_id|alt|parentId|comment_body|level|img_code|remove|x7d|x7c|x5d|Replace_Force_Tag|x5b|post|charAt|u200a|pre|comment_emo_list|u3000|u2009|Replace_Youtube_Link|item|u2029|comment_block|u2008|comment_youtube|embed|autohide|frameborder|allowfullscreen|parentID|https|u2007|replace|u2028|u2006|u200b|u2005|u2004|u2003|onclick|Msgs|addComment|name|r_f_c|u2002|window|location|HTTP|form_|u2001|u2000|rc|xa0|HTTPS|in|parseInt|x0b|comment_img|comment_child|x3e|Config|maxThreadDepth|comment_reply|x3c|Replace_Image_Link'.split('|'),0,{}))

var avatar=$("#comments");
avatar.find('.comment_avatar img').each(function() {
var ava = $(this).attr('src');
$(this).show().attr('src', ava.replace(/\/s[0-9]+(\-c)?\//,"/s55-c/"));
});
//]]>
