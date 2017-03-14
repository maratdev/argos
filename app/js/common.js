$('document').ready(function() {
    var options = {
        videoId: 'e4Is32W-ppk',
        mute: true,
        repeat: true,
        width: $(window).width(), // no need to override
        wrapperZIndex: 99,
        increaseVolumeBy: 10, // increment value; volume range is 1-100
        start: 0// starting position in seconds
        };

    $('#wrapper').tubular(options);
    // f-UGhWj1xww cool sepia hd
    // 49SKbS7Xwf4 beautiful barn sepia
});