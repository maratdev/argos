$(document).ready(function(){

    //Header во весь экран
    function heightDetect(){
        $(".js-max-height").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    // Хедер--> Видео
    var hasMask = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Mask", "1.0");
    if (!hasMask) {
        document.querySelector('.header__svg_header').display = 'none';
        document.querySelector('.js-no-svg-header').display = 'block';
    }
});
