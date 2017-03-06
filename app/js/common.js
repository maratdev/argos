$(function() {

    //Header во весь экран
    function heightDetect(){
        $("max-height").css("height", $(window).height());
    }

    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
//Видео с ютюба
    var options = { videoId: 'SZn6-u2kK54', start: 3 };
    $('.header').tubular(options);
    // f-UGhWj1xww cool sepia hd
    // 49SKbS7Xwf4 beautiful barn sepia

});
