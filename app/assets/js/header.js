window.Modernizr = function (e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function i(e, t) {
        return r(x.join(e + ";") + (t || ""))
    }

    function o(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!a(i, "-") && b[i] !== n)return "pfx" == t ? i : !0
        }
        return !1
    }

    function c(e, t, r) {
        for (var i in e) {
            var a = t[e[i]];
            if (a !== n)return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }

    function u(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + T.join(r + " ") + r).split(" ");
        return o(t, "string") || o(t, "undefined") ? s(i, t) : (i = (e + " " + M.join(r + " ") + r).split(" "), c(i, t, n))
    }

    function l() {
        m.input = function (n) {
            for (var r = 0, i = n.length; i > r; r++)z[n[r]] = !!(n[r] in w);
            return z.list && (z.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), z
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), m.inputtypes = function (e) {
            for (var r, i, o, a = 0, s = e.length; s > a; a++)w.setAttribute("type", i = e[a]), r = "text" !== w.type, r && (w.value = S, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && w.style.WebkitAppearance !== n ? (g.appendChild(w), o = t.defaultView, r = o.getComputedStyle && "textfield" !== o.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(i) || (r = /^(url|email)$/.test(i) ? w.checkValidity && w.checkValidity() === !1 : w.value != S)), N[e[a]] = !!r;
            return N
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var d, f, p = "2.8.3", m = {}, h = !0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, w = t.createElement("input"), S = ":)", E = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "), C = "Webkit Moz O ms", T = C.split(" "), M = C.toLowerCase().split(" "), k = {svg: "http://www.w3.org/2000/svg"}, A = {}, N = {}, z = {}, j = [], F = j.slice, I = function (e, n, r, i) {
        var o, a, s, c, u = t.createElement("div"), l = t.body, d = l || t.createElement("body");
        if (parseInt(r, 10))for (; r--;)s = t.createElement("div"), s.id = i ? i[r] : v + (r + 1), u.appendChild(s);
        return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : d).innerHTML += o, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", c = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), a = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = c), !!a
    }, B = function (t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)return n(t) && n(t).matches || !1;
        var r;
        return I("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
            r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }), r
    }, P = function () {
        function e(e, i) {
            i = i || t.createElement(r[e] || "div"), e = "on" + e;
            var a = e in i;
            return a || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), a = o(i[e], "function"), o(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, a
        }

        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), L = {}.hasOwnProperty;
    f = o(L, "undefined") || o(L.call, "undefined") ? function (e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return L.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t)throw new TypeError;
        var n = F.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var i = function () {
                };
                i.prototype = t.prototype;
                var o = new i, a = t.apply(o, n.concat(F.call(arguments)));
                return Object(a) === a ? a : o
            }
            return t.apply(e, n.concat(F.call(arguments)))
        };
        return r
    }), A.flexbox = function () {
        return u("flexWrap")
    }, A.flexboxlegacy = function () {
        return u("boxDirection")
    }, A.canvas = function () {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, A.canvastext = function () {
        return !(!m.canvas || !o(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, A.webgl = function () {
        return !!e.WebGLRenderingContext
    }, A.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : I(["@media (", x.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, A.geolocation = function () {
        return "geolocation" in navigator
    }, A.postmessage = function () {
        return !!e.postMessage
    }, A.websqldatabase = function () {
        return !!e.openDatabase
    }, A.indexedDB = function () {
        return !!u("indexedDB", e)
    }, A.hashchange = function () {
        return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, A.history = function () {
        return !(!e.history || !history.pushState)
    }, A.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, A.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, A.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
    }, A.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    }, A.multiplebgs = function () {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, A.backgroundsize = function () {
        return u("backgroundSize")
    }, A.borderimage = function () {
        return u("borderImage")
    }, A.borderradius = function () {
        return u("borderRadius")
    }, A.boxshadow = function () {
        return u("boxShadow")
    }, A.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, A.opacity = function () {
        return i("opacity:.55"), /^0.55$/.test(b.opacity)
    }, A.cssanimations = function () {
        return u("animationName")
    }, A.csscolumns = function () {
        return u("columnCount")
    }, A.cssgradients = function () {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + x.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
    }, A.cssreflections = function () {
        return u("boxReflect")
    }, A.csstransforms = function () {
        return !!u("transform")
    }, A.csstransforms3d = function () {
        var e = !!u("perspective");
        return e && "webkitPerspective" in g.style && I("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, A.csstransitions = function () {
        return u("transition")
    }, A.fontface = function () {
        var e;
        return I('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
            var i = t.getElementById("smodernizr"), o = i.sheet || i.styleSheet, a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }), e
    }, A.generatedcontent = function () {
        var e;
        return I(["#", v, "{font:0/0 a}#", v, ':after{content:"', S, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, A.video = function () {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, A.audio = function () {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, A.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, A.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, A.webworkers = function () {
        return !!e.Worker
    }, A.applicationcache = function () {
        return !!e.applicationCache
    }, A.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(k.svg, "svg").createSVGRect
    }, A.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == k.svg
    }, A.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(E.call(t.createElementNS(k.svg, "animate")))
    }, A.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(E.call(t.createElementNS(k.svg, "clipPath")))
    };
    for (var D in A)f(A, D) && (d = D.toLowerCase(), m[d] = A[D](), j.push((m[d] ? "" : "no-") + d));
    return m.input || l(), m.addTest = function (e, t) {
        if ("object" == typeof e)for (var r in e)f(e, r) && m.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), m[e] !== n)return m;
            t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), m[e] = t
        }
        return m
    }, r(""), y = w = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function i(e) {
            var t = v[e[h]];
            return t || (t = {}, g++, e[h] = g, v[g] = t), t
        }

        function o(e, n, r) {
            if (n || (n = t), l)return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || p.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function a(e, n) {
            if (e || (e = t), l)return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), a = 0, s = r(), c = s.length; c > a; a++)o.createElement(s[a]);
            return o
        }

        function s(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return y.shivMethods ? o(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
        }

        function c(e) {
            e || (e = t);
            var r = i(e);
            return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || s(e, r), e
        }

        var u, l, d = "3.7.0", f = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", g = 0, v = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
            } catch (n) {
                u = !0, l = !0
            }
        }();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: l,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: o,
            createDocumentFragment: a
        };
        e.html5 = y, c(t)
    }(this, t), m._version = p, m._prefixes = x, m._domPrefixes = M, m._cssomPrefixes = T, m.mq = B, m.hasEvent = P, m.testProp = function (e) {
        return s([e])
    }, m.testAllProps = u, m.testStyles = I, m.prefixed = function (e, t, n) {
        return t ? u(e, t, n) : u(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + j.join(" ") : ""), m
}(this, this.document), window.matchMedia || (window.matchMedia = function () {
    "use strict";
    var e = window.styleMedia || window.media;
    if (!e) {
        var t = document.createElement("style"), n = document.getElementsByTagName("script")[0], r = null;
        t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), r = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
            matchMedium: function (e) {
                var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === r.width
            }
        }
    }
    return function (t) {
        return {matches: e.matchMedium(t || "all"), media: t || "all"}
    }
}()), function () {
    if (window.matchMedia && window.matchMedia("all").addListener)return !1;
    var e = window.matchMedia, t = e("only all").matches, n = !1, r = 0, i = [], o = function () {
        clearTimeout(r), r = setTimeout(function () {
            for (var t = 0, n = i.length; n > t; t++) {
                var r = i[t].mql, o = i[t].listeners || [], a = e(r.media).matches;
                if (a !== r.matches) {
                    r.matches = a;
                    for (var s = 0, c = o.length; c > s; s++)o[s].call(window, r)
                }
            }
        }, 30)
    };
    window.matchMedia = function (r) {
        var a = e(r), s = [], c = 0;
        return a.addListener = function (e) {
            t && (n || (n = !0, window.addEventListener("resize", o, !0)), 0 === c && (c = i.push({
                mql: a,
                listeners: s
            })), s.push(e))
        }, a.removeListener = function (e) {
            for (var t = 0, n = s.length; n > t; t++)s[t] === e && s.splice(t, 1)
        }, a
    }
}(), window.matchMedia || (window.matchMedia = function () {
    "use strict";
    var e = window.styleMedia || window.media;
    if (!e) {
        var t = document.createElement("style"), n = document.getElementsByTagName("script")[0], r = null;
        t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), r = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
            matchMedium: function (e) {
                var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === r.width
            }
        }
    }
    return function (t) {
        return {matches: e.matchMedium(t || "all"), media: t || "all"}
    }
}()), function (e, t, n) {
    "use strict";
    function r(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t : "function" == typeof define && define.amd && define("picturefill", function () {
            return t
        }), "object" == typeof e && (e.picturefill = t)
    }

    function i(e) {
        var t, n, r, i, o, c = e || {};
        t = c.elements || a.getAllElements();
        for (var u = 0, l = t.length; l > u; u++)if (n = t[u], r = n.parentNode, i = void 0, o = void 0, "IMG" === n.nodeName.toUpperCase() && (n[a.ns] || (n[a.ns] = {}), c.reevaluate || !n[a.ns].evaluated)) {
            if (r && "PICTURE" === r.nodeName.toUpperCase()) {
                if (a.removeVideoShim(r), i = a.getMatch(n, r), i === !1)continue
            } else i = void 0;
            (r && "PICTURE" === r.nodeName.toUpperCase() || !a.sizesSupported && n.srcset && s.test(n.srcset)) && a.dodgeSrcset(n), i ? (o = a.processSourceSet(i), a.applyBestCandidate(o, n)) : (o = a.processSourceSet(n), (void 0 === n.srcset || n[a.ns].srcset) && a.applyBestCandidate(o, n)), n[a.ns].evaluated = !0
        }
    }

    function o() {
        function n() {
            clearTimeout(r), r = setTimeout(s, 60)
        }

        a.initTypeDetects(), i();
        var r, o = setInterval(function () {
            return i(), /^loaded|^i|^c/.test(t.readyState) ? void clearInterval(o) : void 0
        }, 250), s = function () {
            i({reevaluate: !0})
        };
        e.addEventListener ? e.addEventListener("resize", n, !1) : e.attachEvent && e.attachEvent("onresize", n)
    }

    if (e.HTMLPictureElement)return void r(function () {
    });
    t.createElement("picture");
    var a = e.picturefill || {}, s = /\s+\+?\d+(e\d+)?w/;
    a.ns = "picturefill", function () {
        a.srcsetSupported = "srcset" in n, a.sizesSupported = "sizes" in n, a.curSrcSupported = "currentSrc" in n
    }(), a.trim = function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
    }, a.makeUrl = function () {
        var e = t.createElement("a");
        return function (t) {
            return e.href = t, e.href
        }
    }(), a.restrictsMixedContent = function () {
        return "https:" === e.location.protocol
    }, a.matchesMedia = function (t) {
        return e.matchMedia && e.matchMedia(t).matches
    }, a.getDpr = function () {
        return e.devicePixelRatio || 1
    }, a.getWidthFromLength = function (e) {
        var n;
        if (!e || e.indexOf("%") > -1 != 0 || !(parseFloat(e) > 0 || e.indexOf("calc(") > -1))return !1;
        e = e.replace("vw", "%"), a.lengthEl || (a.lengthEl = t.createElement("div"), a.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", a.lengthEl.className = "helper-from-picturefill-js"), a.lengthEl.style.width = "0px";
        try {
            a.lengthEl.style.width = e
        } catch (r) {
        }
        return t.body.appendChild(a.lengthEl), n = a.lengthEl.offsetWidth, 0 >= n && (n = !1), t.body.removeChild(a.lengthEl), n
    }, a.detectTypeSupport = function (t, n) {
        var r = new e.Image;
        return r.onerror = function () {
            a.types[t] = !1, i()
        }, r.onload = function () {
            a.types[t] = 1 === r.width, i()
        }, r.src = n, "pending"
    }, a.types = a.types || {}, a.initTypeDetects = function () {
        a.types["image/jpeg"] = !0, a.types["image/gif"] = !0, a.types["image/png"] = !0, a.types["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), a.types["image/webp"] = a.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
    }, a.verifyTypeSupport = function (e) {
        var t = e.getAttribute("type");
        if (null === t || "" === t)return !0;
        var n = a.types[t];
        return "string" == typeof n && "pending" !== n ? (a.types[t] = a.detectTypeSupport(t, n), "pending") : "function" == typeof n ? (n(), "pending") : n
    }, a.parseSize = function (e) {
        var t = /(\([^)]+\))?\s*(.+)/g.exec(e);
        return {media: t && t[1], length: t && t[2]}
    }, a.findWidthFromSourceSize = function (n) {
        for (var r, i = a.trim(n).split(/\s*,\s*/), o = 0, s = i.length; s > o; o++) {
            var c = i[o], u = a.parseSize(c), l = u.length, d = u.media;
            if (l && (!d || a.matchesMedia(d)) && (r = a.getWidthFromLength(l)))break
        }
        return r || Math.max(e.innerWidth || 0, t.documentElement.clientWidth)
    }, a.parseSrcset = function (e) {
        for (var t = []; "" !== e;) {
            e = e.replace(/^\s+/g, "");
            var n, r = e.search(/\s/g), i = null;
            if (-1 !== r) {
                n = e.slice(0, r);
                var o = n.slice(-1);
                if (("," === o || "" === n) && (n = n.replace(/,+$/, ""), i = ""), e = e.slice(r + 1), null === i) {
                    var a = e.indexOf(",");
                    -1 !== a ? (i = e.slice(0, a), e = e.slice(a + 1)) : (i = e, e = "")
                }
            } else n = e, e = "";
            (n || i) && t.push({url: n, descriptor: i})
        }
        return t
    }, a.parseDescriptor = function (e, t) {
        var n, r = t || "100vw", i = e && e.replace(/(^\s+|\s+$)/g, ""), o = a.findWidthFromSourceSize(r);
        if (i)for (var s = i.split(" "), c = s.length - 1; c >= 0; c--) {
            var u = s[c], l = u && u.slice(u.length - 1);
            if ("h" !== l && "w" !== l || a.sizesSupported) {
                if ("x" === l) {
                    var d = u && parseFloat(u, 10);
                    n = d && !isNaN(d) ? d : 1
                }
            } else n = parseFloat(parseInt(u, 10) / o)
        }
        return n || 1
    }, a.getCandidatesFromSourceSet = function (e, t) {
        for (var n = a.parseSrcset(e), r = [], i = 0, o = n.length; o > i; i++) {
            var s = n[i];
            r.push({url: s.url, resolution: a.parseDescriptor(s.descriptor, t)})
        }
        return r
    }, a.dodgeSrcset = function (e) {
        e.srcset && (e[a.ns].srcset = e.srcset, e.srcset = "", e.setAttribute("data-pfsrcset", e[a.ns].srcset))
    }, a.processSourceSet = function (e) {
        var t = e.getAttribute("srcset"), n = e.getAttribute("sizes"), r = [];
        return "IMG" === e.nodeName.toUpperCase() && e[a.ns] && e[a.ns].srcset && (t = e[a.ns].srcset), t && (r = a.getCandidatesFromSourceSet(t, n)), r
    }, a.backfaceVisibilityFix = function (e) {
        var t = e.style || {}, n = "webkitBackfaceVisibility" in t, r = t.zoom;
        n && (t.zoom = ".999", n = e.offsetWidth, t.zoom = r)
    }, a.setIntrinsicSize = function () {
        var n = {}, r = function (e, t, n) {
            t && e.setAttribute("width", parseInt(t / n, 10))
        };
        return function (i, o) {
            var s;
            i[a.ns] && !e.pfStopIntrinsicSize && (void 0 === i[a.ns].dims && (i[a.ns].dims = i.getAttribute("width") || i.getAttribute("height")), i[a.ns].dims || (o.url in n ? r(i, n[o.url], o.resolution) : (s = t.createElement("img"), s.onload = function () {
                if (n[o.url] = s.width, !n[o.url])try {
                    t.body.appendChild(s), n[o.url] = s.width || s.offsetWidth, t.body.removeChild(s)
                } catch (e) {
                }
                i.src === o.url && r(i, n[o.url], o.resolution), i = null, s.onload = null, s = null
            }, s.src = o.url)))
        }
    }(), a.applyBestCandidate = function (e, t) {
        var n, r, i;
        e.sort(a.ascendingSort), r = e.length, i = e[r - 1];
        for (var o = 0; r > o; o++)if (n = e[o], n.resolution >= a.getDpr()) {
            i = n;
            break
        }
        i && (i.url = a.makeUrl(i.url), t.src !== i.url && (a.restrictsMixedContent() && "http:" === i.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + i.url) : (t.src = i.url, a.curSrcSupported || (t.currentSrc = t.src), a.backfaceVisibilityFix(t))), a.setIntrinsicSize(t, i))
    }, a.ascendingSort = function (e, t) {
        return e.resolution - t.resolution
    }, a.removeVideoShim = function (e) {
        var t = e.getElementsByTagName("video");
        if (t.length) {
            for (var n = t[0], r = n.getElementsByTagName("source"); r.length;)e.insertBefore(r[0], n);
            n.parentNode.removeChild(n)
        }
    }, a.getAllElements = function () {
        for (var e = [], n = t.getElementsByTagName("img"), r = 0, i = n.length; i > r; r++) {
            var o = n[r];
            ("PICTURE" === o.parentNode.nodeName.toUpperCase() || null !== o.getAttribute("srcset") || o[a.ns] && null !== o[a.ns].srcset) && e.push(o)
        }
        return e
    }, a.getMatch = function (e, t) {
        for (var n, r = t.childNodes, i = 0, o = r.length; o > i; i++) {
            var s = r[i];
            if (1 === s.nodeType) {
                if (s === e)return n;
                if ("SOURCE" === s.nodeName.toUpperCase()) {
                    null !== s.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                    var c = s.getAttribute("media");
                    if (s.getAttribute("srcset") && (!c || a.matchesMedia(c))) {
                        var u = a.verifyTypeSupport(s);
                        if (u === !0) {
                            n = s;
                            break
                        }
                        if ("pending" === u)return !1
                    }
                }
            }
        }
        return n
    }, o(), i._ = a, r(i)
}(window, window.document, new window.Image);