$(document).ready(function(){

    $('.js-focuspoint').focusPoint();

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

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });





});


