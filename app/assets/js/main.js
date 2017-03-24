var NL2014 = NL2014 || {};
NL2014.BackToTop = {
    init: function () {
        $(window).scroll(function () {
            $(window).scrollTop() > 150 ? $(".back-to-top").slideDown(250) : $(".back-to-top").slideUp(250)
        }), $(".back-to-top a").click(function () {
            $("html, body").animate({scrollTop: 0}, 500)
        })
    }
};
var NL2014 = NL2014 || {};
NL2014.init = function () {
    NL2014.Tracking.init(), NL2014.Menu.init(), NL2014.Effects.init(), NL2014.Portfolio.init(), NL2014.Forms.init(), NL2014.Gallery.init(), NL2014.FWA.init(), NL2014.Hover.init()
}, $(document).ready(function () {
    NL2014.init()
}), $(window).load(function () {
    NL2014.Effects.contentLoaded(), enquire.register("only screen and (min-width: 64em)", {
        match: function () {
            NL2014.Effects.initSkrollr()
        }, unmatch: function () {
            NL2014.Effects.killSkrollr()
        }
    }, !0), -1 != window.location.href.indexOf("2017-is-the-year-of-lift") && setTimeout(function () {
        document.getElementById("year-of-lift-video").play()
    }, 1e3)
});
var NL2014 = NL2014 || {};
NL2014.Effects = {
    init: function () {
        $(window).resize(function () {
            NL2014.Effects.bgImageHeight()
        }).resize(), NL2014.Utils.mobile() || $("body").addClass("hover-ok"), NL2014.Effects.mediaQueries()
    }, contentLoaded: function () {
        $("body").addClass("loaded"), $(".vid").fitVids(), $(".heading-fit").parents(".txt").bigtext({childSelector: ".heading-fit"})
    }, initSkrollr: function () {
        NL2014.Utils.mobile() || (skrollr.init({forceHeight: !1}), $(".full-width-bg").css("background-attachment", "fixed"))
    }, killSkrollr: function () {
        NL2014.Utils.mobile() || (skrollr.init().destroy(), $(".full-width-bg").css("background-attachment", "scroll"))
    }, bgImageHeight: function () {
        var e = $(window).height(), i = $(window).width();
        e - 200 > .5625 * i ? $(".full-width-bg").css("min-height", .5625 * i + "px") : ($(".full-width-bg").css("min-height", e + "px"), $(".full-width-bg.hero").css("min-height", e - 200 + "px"), $(".detail-news .full-width-bg.hero").css("min-height", e - 300 + "px"))
    }, bgImageRes: function (e) {
        $(".full-width-bg").each(function () {
            var i = $(this).attr("data-background-image");
            void 0 !== i && (i = i.replace("_sm", e).replace("_md", e).replace("_lg", e).replace("_xl", e), $(this).css("background-image", i))
        })
    }, mediaQueries: function () {
        enquire.register("screen and (min-width: 0em)", function () {
            NL2014.Effects.bgImageRes("_sm")
        }), enquire.register("screen and (min-width: 30em)", {
            match: function () {
                NL2014.Effects.bgImageRes("_md")
            }, unmatch: function () {
                NL2014.Effects.bgImageRes("_sm")
            }
        }), enquire.register("screen and (min-width: 48em)", {
            match: function () {
                NL2014.Effects.bgImageRes("_lg")
            }, unmatch: function () {
                NL2014.Effects.bgImageRes("_md")
            }
        }, !0), enquire.register("screen and (min-width: 64em)", {
            match: function () {
                NL2014.Effects.bgImageRes("_xl")
            }, unmatch: function () {
                NL2014.Effects.bgImageRes("_lg")
            }
        })
    }
};
var NL2014 = NL2014 || {};
NL2014.Forms = {
    init: function () {
        $("#contactForm").validate({
            rules: {
                fname: {required: !0},
                email: {required: !0, email: !0},
                company: {required: !0},
                phone: {required: !0},
                message: {required: !0}
            },
            messages: {
                fname: "Please include your name.",
                email: {required: "Please include your email address."},
                company: "Please include your company.",
                phone: "Please include your phone number.",
                message: "Say something!"
            },
            errorLabelContainer: ".form-feedback",
            errorElement: "p",
            focusInvalid: !1,
            invalidHandler: function () {
                NL2014.Forms.scrollUp()
            },
            submitHandler: function (e) {
                var i = $(e), t = i.serialize(), o = i.attr("action");
                return $.post(o, t).done(function (i) {
                    -1 !== i.indexOf("success") && (e.reset(), $(".form-feedback").show().append('<p class="success">Thank you, we\'ll get in touch shortly.</p>'), $(".filled-in").removeClass("filled-in"), NL2014.Forms.scrollUp())
                }), !1
            }
        }), $.validator.addMethod("filesize", function (e, i, t) {
            return this.optional(i) || i.files[0].size <= t
        }), $("#jobApplicationForm").validate({
            rules: {
                fname: {required: !0},
                email: {required: !0, email: !0},
                message: {required: !0},
                uploadedfile: {required: !0, extension: "pdf|doc|docx", filesize: 5242880},
                portfoliofile: {extension: "pdf|doc|docx", filesize: 26214400}
            },
            messages: {
                fname: "Please include your name.",
                email: {required: "Please include your email address."},
                uploadedfile: "Please attach your r&eacute;sum&eacute; in PDF or Microsoft Word Document format (limit 5MB).",
                message: "Say something!",
                portfoliofile: "Please attach your portfolio in PDF or Microsoft Word Document format (limit 25MB)."
            },
            errorLabelContainer: ".form-feedback",
            errorElement: "p",
            focusInvalid: !1,
            invalidHandler: function () {
                NL2014.Forms.scrollUp()
            },
            submitHandler: function (e) {
                for (var i = $(e), t = i.serializeArray(), o = i.attr("action"), n = document.getElementById("uploadedfile"), a = n.files, l = new FormData, s = 0; s < t.length; s++)l.append(t[s].name, t[s].value);
                l.append("uploadedfile", a[0], a[0].name);
                var r = document.getElementById("portfoliofile"), c = r.files;
                return c.length > 0 && l.append("portfoliofile", c[0], c[0].name), $.ajax({
                    url: o,
                    data: l,
                    cache: !1,
                    contentType: !1,
                    processData: !1,
                    type: "POST",
                    success: function (i) {
                        -1 !== i.indexOf("success") && (e.reset(), $(".form-feedback").show().append('<p class="success">Thank you, we\'ll get in touch shortly.</p>'), $(".filled-in").removeClass("filled-in"), NL2014.Forms.scrollUp())
                    }
                }), !1
            }
        }), $("#contactForm input, #contactForm textarea, #jobApplicationForm input.animated-label, #jobApplicationForm textarea").focus(function () {
            "" === this.value && $(this).parent().addClass("filled-in"), Modernizr.touch && $("body").addClass("fixfixed")
        }), $("#contactForm input, #contactForm textarea, #jobApplicationForm input.animated-label, #jobApplicationForm textarea").blur(function () {
            "" === this.value && $(this).parent().removeClass("filled-in"), Modernizr.touch && $("body").removeClass("fixfixed")
        });
        var e = document.querySelector("#contactForm textarea, #jobApplicationForm textarea");
        e && (autosize(e), e.addEventListener("autosize.resized", function () {
            $("html, body").animate({scrollTop: $(document).height()}, 250)
        }))
    }, scrollUp: function () {
        enquire.register("screen and (max-width:48em)", function () {
            var e = $(".cf-left").offset().top - 20;
            $("html, body").animate({scrollTop: e}, 500)
        })
    }
};
var NL2014 = NL2014 || {};
NL2014.forzaSplash = {
    splashForzaCookieName: "forza_nl_popup",
    splashNorthlichCookieName: "nl_forza_popup",
    init: function () {
    },
    contentLoaded: function () {
        -1 != window.location.href.indexOf("forza") ? "true" != this.getCookie(this.splashForzaCookieName) ? ($(".page-forza").css("background", "url('/assets/img/forza-bg.png')"), this.displaySplashPopup()) : window.location.href = "http://www.northlich.com" : "true" != this.getCookie(this.splashNorthlichCookieName) && "true" != this.getCookie(this.splashForzaCookieName) && this.displaySplashPopup()
    },
    displaySplashPopup: function () {
        $.magnificPopup.open({
            items: {src: "#forza-splash-nl", type: "inline"},
            modal: !0,
            showCloseBtn: !1,
            enableEscapeKey: !1
        }), -1 != window.location.href.indexOf("forza") ? ($("#forza-splash-close-btn").click(function () {
            window.location.href = "http://www.northlich.com"
        }), this.setCookie(this.splashForzaCookieName, "true", 365), window.setTimeout(this.forzaRedirect, 15e3)) : ($("#forza-splash-close-btn").click(function () {
            $.magnificPopup.close()
        }), this.setCookie(this.splashNorthlichCookieName, "true", 365), window.setTimeout(this.closePopupWindow, 15e3))
    },
    forzaRedirect: function () {
        window.location.href = "http://www.northlich.com"
    },
    closePopupWindow: function () {
        $.magnificPopup.close()
    },
    setCookie: function (e, i, t) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3);
        var n = "expires=" + o.toUTCString();
        document.cookie = e + "=" + i + "; " + n
    },
    getCookie: function (e) {
        for (var i = e + "=", t = document.cookie.split(";"), o = 0; o < t.length; o++) {
            for (var n = t[o]; " " == n.charAt(0);)n = n.substring(1);
            if (0 === n.indexOf(i))return n.substring(i.length, n.length)
        }
        return ""
    }
};
var NL2014 = NL2014 || {};
NL2014.FWA = {
    init: function () {
        $('.tile a[href*="work/clients/formica/the-formica-envisualizer/"]').append('<img class="fwa-tile-badge" src="assets/img/fwa/DayTopRight.png" />')
    }
};
var NL2014 = NL2014 || {};
NL2014.Gallery = {
    init: function () {
        $(".gallery-link").click(function () {
            $(".gallery").magnificPopup("open")
        }), $(".gallery").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {enabled: !0},
            removalDelay: 250
        }), $(".spotlight-link").magnificPopup({type: "iframe", removalDelay: 250})
    }
};
var NL2014 = NL2014 || {};
NL2014.Hover = {
    init: function () {
        $(".news-tile").hover(function () {
            var e = $(this).find("line");
            TweenMax.to(e, .25, {xPercent: "-100%", ease: Power1.easeOut}, .0125)
        }, function () {
            var e = $(this).find("line");
            TweenMax.to(e, .25, {scale: 1, rotation: 0, xPercent: "0%", yPercent: "0%", ease: Power1.easeOut}, -.0125)
        })
    }
};
var NL2014 = NL2014 || {};
NL2014.Map = {
    init: function () {
        $(".map-link").click(function () {
            var e = $(this).data("lat-lon-id");
            NL2014.Map.loadMap(e), $("html, body").animate({scrollTop: 0}, 500)
        }), $("#map-canvas").length && NL2014.Map.loadMap(1)
    }, loadMap: function (e) {
        {
            var i = [[null, null], [39.101974, -84.499948], [39.9748221, -82.997632], [41.397444, -81.653535], [40.761092, -73.970642], [41.890609, -87.624713]], t = new google.maps.LatLng(i[e][0], i[e][1]), o = {
                center: t,
                zoom: 15,
                zoomControl: !0,
                zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
                disableDoubleClickZoom: !0,
                mapTypeControl: !1,
                scaleControl: !1,
                scrollwheel: !1,
                panControl: !1,
                streetViewControl: !1,
                draggable: !0,
                overviewMapControl: !1,
                overviewMapControlOptions: {opened: !1},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    featureType: "landscape",
                    elementType: "labels",
                    stylers: [{visibility: "off"}]
                }, {featureType: "transit", elementType: "labels", stylers: [{visibility: "off"}]}, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{visibility: "off"}]
                }, {featureType: "water", elementType: "labels", stylers: [{visibility: "off"}]}, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{visibility: "off"}]
                }, {stylers: [{hue: "#00aaff"}, {saturation: -100}, {gamma: 2.15}, {lightness: 12}]}, {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{visibility: "on"}, {lightness: 24}]
                }, {featureType: "road", elementType: "geometry", stylers: [{lightness: 57}]}]
            }, n = new google.maps.Map(document.getElementById("map-canvas"), o);
            new google.maps.Marker({position: t, map: n, title: "Northlich"})
        }
    }
};
var NL2014 = NL2014 || {};
NL2014.Menu = {
    init: function () {
        var e = $("body");
        $(".toggle-main-menu").click(function () {
            $(".toggle-ind, .toggle-cap").removeClass("active"), $(this).toggleClass("active"), e.hasClass("filter-menu-active") ? (e.removeClass("filter-menu-active ind-list-active cap-list-active"), setTimeout(function () {
                e.addClass("main-menu-active")
            }, 250)) : e.toggleClass("main-menu-active")
        }), $(".toggle-ind").click(function () {
            $(".toggle-main-menu, .toggle-cap").removeClass("active"), $(this).toggleClass("active"), e.hasClass("main-menu-active") ? (e.removeClass("main-menu-active"), setTimeout(function () {
                e.addClass("filter-menu-active ind-list-active")
            }, 250)) : e.hasClass("cap-list-active") ? (e.removeClass("cap-list-active"), e.addClass("ind-list-active")) : e.toggleClass("filter-menu-active ind-list-active")
        }), $(".toggle-cap").click(function () {
            $(".toggle-main-menu, .toggle-ind").removeClass("active"), $(this).toggleClass("active"), e.hasClass("main-menu-active") ? (e.removeClass("main-menu-active"), setTimeout(function () {
                e.addClass("filter-menu-active cap-list-active")
            }, 250)) : e.hasClass("ind-list-active") ? (e.removeClass("ind-list-active"), e.addClass("cap-list-active")) : e.toggleClass("filter-menu-active cap-list-active")
        })
    }
};
var NL2014 = NL2014 || {};
NL2014.popupVideo = {
    init: function () {
    }
};
var NL2014 = NL2014 || {};
NL2014.Portfolio = {
    container: null, init: function () {
        $(".filter-menu li a").click(function (e) {
            e.preventDefault(), $(this).toggleClass("on"), NL2014.Portfolio.filter()
        }), NL2014.Portfolio.container = $("#tiles"), NL2014.Portfolio.container.isotope({
            itemSelector: ".tile",
            transitionDuration: "0.5s",
            layoutMode: "packery",
            packery: {columnWidth: ".tile-sizer", rowHeight: ".tile-sizer", gutter: ".gutter-sizer"}
        }), NL2014.Portfolio.stampToggle(), $(window).resize(function () {
            $(window).width() < 768 ? $(".tile").each(function () {
                $(this).find("header").css("font-size", .1 * $(this).width() + "px")
            }) : ($(".tile:not(.tile-big, .tile-wide)").each(function () {
                $(this).find("header").css("font-size", .1 * $(this).width() + "px")
            }), $(".tile-big").each(function () {
                $(this).find("header").css("font-size", .07742 * $(this).width() + "px")
            }), $(".tile-wide").each(function () {
                $(this).find("header").css("font-size", .1 * $(this).height() + "px")
            }))
        }).resize(), NL2014.Portfolio.filter()
    }, filter: function () {
        var e = "*", i = [];
        $(".filter-menu li a.on").each(function () {
            i.push($(this).attr("data-filter"))
        }), i.length ? (e = i.join(", "), $(".northlich-tile").hide()) : (NL2014.Portfolio.stampToggle(), $(".northlich-tile").show()), NL2014.Portfolio.container.isotope({filter: e})
    }, stampToggle: function () {
        enquire.register("screen and (min-width: 30em)", {
            match: function () {
                NL2014.Portfolio.container.isotope("stamp", $(".northlich-tile")).isotope("layout")
            }, unmatch: function () {
                NL2014.Portfolio.container.isotope("unstamp", $(".northlich-tile")).isotope("layout")
            }
        })
    }
};
var NL2014 = NL2014 || {};
NL2014.Tracking = {
    init: function () {
        $(".subscribe-button").on("click", function () {
            ga("send", "event", "button", "click", "Subscribe")
        })
    }
};
var NL2014 = NL2014 || {};
NL2014.Utils = {
    mobile: function () {
        return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)
    }
};