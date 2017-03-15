$(function(){

    //Header во весь экран
    function heightDetect(){
        $(".max-height").css("height", $(window).height());

    }

    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    var hasMask = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Mask", "1.0");

    if (!hasMask) {
        document.querySelector('.svg-header').display = 'none';
        document.querySelector('.no-svg-header').display = 'block';
    }
});
