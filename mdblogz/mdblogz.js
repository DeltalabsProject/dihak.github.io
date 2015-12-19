var Script = function() {
    jQuery('.sidebar .sub-menu > a').click(function() {
        var last = jQuery('.sub-menu.open', $('.sidebar'));
        last.removeClass("open");
        jQuery('.arrow', last).removeClass("open");
        jQuery('.collapse', last).slideUp(500);
        var sub = jQuery(this).next();
        if (sub.is(":visible")) {
            jQuery('.arrow', jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("open");
            sub.slideUp(500)
        } else {
            jQuery('.arrow', jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(500)
        }
    })
}();
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
resizeThumb('Blog1', 253, 170);
