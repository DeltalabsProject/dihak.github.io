$('.post').each(function() {
    if ($(this).find('.post-label').length) {     
        var cl = $(this).find('.post-label').text();
        $(this).find('.card-title').addClass(cl);
		$(this).find('.card-content').addClass(cl);
    }
});
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
