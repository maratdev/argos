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



});

    $(".element-in").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 2000);
    });


$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1200);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});


