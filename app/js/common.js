$(document).ready(function(){



    // Портфолио--> изображение на весь блок
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


    // Наши клиенты--> карусель
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



    /**
     * main.js
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * Copyright 2015, Codrops
     * http://www.codrops.com
     */
    ;(function(window) {

        'use strict';

        var support = { animations : Modernizr.cssanimations },
            animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
            animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
            onEndAnimation = function( el, callback ) {
                var onEndCallbackFn = function( ev ) {
                    if( support.animations ) {
                        if( ev.target != this ) return;
                        this.removeEventListener( animEndEventName, onEndCallbackFn );
                    }
                    if( callback && typeof callback === 'function' ) { callback.call(); }
                };
                if( support.animations ) {
                    el.addEventListener( animEndEventName, onEndCallbackFn );
                }
                else {
                    onEndCallbackFn();
                }
            };

        // from http://www.sberry.me/articles/javascript-event-throttling-debouncing
        function throttle(fn, delay) {
            var allowSample = true;

            return function(e) {
                if (allowSample) {
                    allowSample = false;
                    setTimeout(function() { allowSample = true; }, delay);
                    fn(e);
                }
            };
        }

        // sliders - flickity
        var sliders = [].slice.call(document.querySelectorAll('.slider')),
        // array where the flickity instances are going to be stored
            flkties = [],
        // grid element
            grid = document.querySelector('.grid'),
        // isotope instance
            iso,
        // filter ctrls
            filterCtrls = [].slice.call(document.querySelectorAll('.filter > .button'));


        function init() {
            // preload images
            imagesLoaded(grid, function() {
                initFlickity();
                initIsotope();
                initEvents();
                classie.remove(grid, 'grid--loading');
            });
        }

        function initFlickity() {
            sliders.forEach(function(slider){
                var flkty = new Flickity(slider, {
                    prevNextButtons: false,
                    wrapAround: true,
                    cellAlign: 'left',
                    contain: true,
                    resize: false
                });

                // store flickity instances
                flkties.push(flkty);
            });
        }

        function initIsotope() {
            iso = new Isotope( grid, {
                isResizeBound: false,
                itemSelector: '.grid__item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid__sizer'
                },
                transitionDuration: '0.6s'
            });
        }

        function initEvents() {
            filterCtrls.forEach(function(filterCtrl) {
                filterCtrl.addEventListener('click', function() {
                    classie.remove(filterCtrl.parentNode.querySelector('.filter__item--selected'), 'filter__item--selected');
                    classie.add(filterCtrl, 'filter__item--selected');
                    iso.arrange({
                        filter: filterCtrl.getAttribute('data-filter')
                    });
                    recalcFlickities();
                    iso.layout();
                });
            });

            // window resize / recalculate sizes for both flickity and isotope/masonry layouts
            window.addEventListener('resize', throttle(function(ev) {
                recalcFlickities()
                iso.layout();
            }, 50));


        }



        function recalcFlickities() {
            for(var i = 0, len = flkties.length; i < len; ++i) {
                flkties[i].resize();
            }
        }

        init();

    })(window);


});



$(function() {

    // Inline popups
    $('.popup a').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });



    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.success').addClass("visible");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
                $('.success').removeClass("visible");
                $.magnificPopup.close();
            }, 2500);
        });
        return false;
    });

});






