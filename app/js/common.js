$(document).ready(function(){

    $('.js-focuspoint').focusPoint();


    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 160,
        isFitWidth: true,
        gutter: 5,
        transitionDuration: '0.8s'
    });

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

    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop: true,
        items:4,
        margin:12,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $(".owl-carousel2").owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop: true,
        items:4,
        margin:12,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


});



