var img = document.querySelectorAll('.item_img');

var src = img[0].attributes.src.value;

for (i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseenter', function(e) {
        var newsrc = e.target.attributes.newsrc.value;
        e.target.attributes.src.value = newsrc;
    })
}

for (i = 0; i < img.length; i++) {
        img[i].addEventListener('mouseleave', function(e) {
        e.target.attributes.src.value = src;
    })
}
