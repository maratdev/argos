!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length, i = re.type(t);
        return "function" === i || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (re.isFunction(e))return re.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType)return re.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (de.test(e))return re.filter(e, t, i);
            e = re.filter(e, t)
        }
        return re.grep(t, function (t) {
            return re.inArray(t, e) >= 0 !== i
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function s(t) {
        var e = be[t] = {};
        return re.each(t.match(_e) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (o(), re.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Ce, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Se.test(i) ? re.parseJSON(i) : i
                } catch (r) {
                }
                re.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function u(t) {
        var e;
        for (e in t)if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
        return !0
    }

    function c(t, e, i, n) {
        if (re.acceptData(t)) {
            var r, s, o = re.expando, a = t.nodeType, l = a ? re.cache : t, u = a ? t[o] : t[o] && o;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e)return u || (u = a ? t[o] = U.pop() || re.guid++ : o), l[u] || (l[u] = a ? {} : {toJSON: re.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), s = l[u], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[re.camelCase(e)] = i), "string" == typeof e ? (r = s[e], null == r && (r = s[re.camelCase(e)])) : r = s, r
        }
    }

    function h(t, e, i) {
        if (re.acceptData(t)) {
            var n, r, s = t.nodeType, o = s ? re.cache : t, a = s ? t[re.expando] : re.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in n ? e = [e] : (e = re.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                    for (; r--;)delete n[e[r]];
                    if (i ? !u(n) : !re.isEmptyObject(n))return
                }
                (i || (delete o[a].data, u(o[a]))) && (s ? re.cleanData([t], !0) : ie.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (t) {
        }
    }

    function m(t) {
        var e = Oe.split("|"), i = t.createDocumentFragment();
        if (i.createElement)for (; e.length;)i.createElement(e.pop());
        return i
    }

    function g(t, e) {
        var i, n, r = 0, s = typeof t.getElementsByTagName !== Te ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Te ? t.querySelectorAll(e || "*") : void 0;
        if (!s)for (s = [], i = t.childNodes || t; null != (n = i[r]); r++)!e || re.nodeName(n, e) ? s.push(n) : re.merge(s, g(n, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], s) : s
    }

    function v(t) {
        ke.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function _(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function b(t) {
        var e = Ze.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)re._data(i, "globalEval", !e || re._data(e[n], "globalEval"))
    }

    function w(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var i, n, r, s = re._data(t), o = re._data(e, s), a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)for (n = 0, r = a[i].length; r > n; n++)re.event.add(e, i, a[i][n])
            }
            o.data && (o.data = re.extend({}, o.data))
        }
    }

    function T(t, e) {
        var i, n, r;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (n in r.events)re.removeEvent(e, n, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === i && e.text !== t.text ? (_(e).text = t.text, b(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ke.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function S(e, i) {
        var n, r = re(i.createElement(e)).appendTo(i.body), s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : re.css(r[0], "display");
        return r.detach(), s
    }

    function C(t) {
        var e = fe, i = Je[t];
        return i || (i = S(t, e), "none" !== i && i || (Qe = (Qe || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qe[0].contentWindow || Qe[0].contentDocument).document, e.write(), e.close(), i = S(t, e), Qe.detach()), Je[t] = i), i
    }

    function A(t, e) {
        return {
            get: function () {
                var i = t();
                return null != i ? i ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
            }
        }
    }

    function P(t, e) {
        if (e in t)return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = di.length; r--;)if (e = di[r] + i, e in t)return e;
        return n
    }

    function E(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++)n = t[o], n.style && (s[o] = re._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (s[o] = re._data(n, "olddisplay", C(n.nodeName)))) : (r = Ee(n), (i && "none" !== i || !r) && re._data(n, "olddisplay", r ? i : re.css(n, "display"))));
        for (o = 0; a > o; o++)n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function F(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function k(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2)"margin" === i && (o += re.css(t, i + Pe[s], !0, r)), n ? ("content" === i && (o -= re.css(t, "padding" + Pe[s], !0, r)), "margin" !== i && (o -= re.css(t, "border" + Pe[s] + "Width", !0, r))) : (o += re.css(t, "padding" + Pe[s], !0, r), "padding" !== i && (o += re.css(t, "border" + Pe[s] + "Width", !0, r)));
        return o
    }

    function D(t, e, i) {
        var n = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, s = ti(t), o = ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = ei(t, e, s), (0 > r || null == r) && (r = t.style[e]), ni.test(r))return r;
            n = o && (ie.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + k(t, e, i || (o ? "border" : "content"), n, s) + "px"
    }

    function L(t, e, i, n, r) {
        return new L.prototype.init(t, e, i, n, r)
    }

    function I() {
        return setTimeout(function () {
            pi = void 0
        }), pi = re.now()
    }

    function R(t, e) {
        var i, n = {height: t}, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)i = Pe[r], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function M(t, e, i) {
        for (var n, r = (_i[e] || []).concat(_i["*"]), s = 0, o = r.length; o > s; s++)if (n = r[s].call(i, e, t))return n
    }

    function O(t, e, i) {
        var n, r, s, o, a, l, u, c, h = this, d = {}, p = t.style, f = t.nodeType && Ee(t), m = re._data(t, "fxshow");
        i.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(t, "display"), c = "none" === u ? re._data(t, "olddisplay") || C(t.nodeName) : u, "inline" === c && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || h.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)if (r = e[n], mi.exec(r)) {
            if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                if ("show" !== r || !m || void 0 === m[n])continue;
                f = !0
            }
            d[n] = m && m[n] || re.style(t, n)
        } else u = void 0;
        if (re.isEmptyObject(d))"inline" === ("none" === u ? C(t.nodeName) : u) && (p.display = u); else {
            m ? "hidden" in m && (f = m.hidden) : m = re._data(t, "fxshow", {}), s && (m.hidden = !f), f ? re(t).show() : h.done(function () {
                re(t).hide()
            }), h.done(function () {
                var e;
                re._removeData(t, "fxshow");
                for (e in d)re.style(t, e, d[e])
            });
            for (n in d)o = M(f ? m[n] : 0, n, h), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function z(t, e) {
        var i, n, r, s, o;
        for (i in t)if (n = re.camelCase(i), r = e[n], s = t[i], re.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = re.cssHooks[n], o && "expand" in o) {
            s = o.expand(s), delete t[n];
            for (i in s)i in t || (t[i] = s[i], e[i] = r)
        } else e[n] = r
    }

    function N(t, e, i) {
        var n, r, s = 0, o = yi.length, a = re.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return !1;
            for (var e = pi || I(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++)u.tweens[o].run(s);
            return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t,
            props: re.extend({}, e),
            opts: re.extend(!0, {specialEasing: {}}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: pi || I(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = re.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? u.tweens.length : 0;
                if (r)return this;
                for (r = !0; n > i; i++)u.tweens[i].run(1);
                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (z(c, u.opts.specialEasing); o > s; s++)if (n = yi[s].call(u, t, c, u.opts))return n;
        return re.map(c, M, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function j(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0, s = e.toLowerCase().match(_e) || [];
            if (re.isFunction(i))for (; n = s[r++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function H(t, e, i, n) {
        function r(a) {
            var l;
            return s[a] = !0, re.each(t[a] || [], function (t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }

        var s = {}, o = t === Wi;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function B(t, e) {
        var i, n, r = re.ajaxSettings.flatOptions || {};
        for (n in e)void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && re.extend(!0, t, i), t
    }

    function q(t, e, i) {
        for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)for (o in a)if (a[o] && a[o].test(r)) {
            l.unshift(o);
            break
        }
        if (l[0] in i)s = l[0]; else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                n || (n = o)
            }
            s = s || n
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function W(t, e, i, n) {
        var r, s, o, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])for (o in t.converters)u[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;)if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())if ("*" === s)s = l; else if ("*" !== l && l !== s) {
            if (o = u[l + " " + s] || u["* " + s], !o)for (r in u)if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                break
            }
            if (o !== !0)if (o && t["throws"])e = o(e); else try {
                e = o(e)
            } catch (h) {
                return {state: "parsererror", error: o ? h : "No conversion from " + l + " to " + s}
            }
        }
        return {state: "success", data: e}
    }

    function X(t, e, i, n) {
        var r;
        if (re.isArray(e))re.each(e, function (e, r) {
            i || Zi.test(t) ? n(t, r) : X(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        }); else if (i || "object" !== re.type(e))n(t, e); else for (r in e)X(t + "[" + r + "]", e[r], i, n)
    }

    function $() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function Y() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function Z(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var U = [], V = U.slice, G = U.concat, K = U.push, Q = U.indexOf, J = {}, te = J.toString, ee = J.hasOwnProperty, ie = {}, ne = "1.11.1", re = function (t, e) {
        return new re.fn.init(t, e)
    }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oe = /^-ms-/, ae = /-([\da-z])/gi, le = function (t, e) {
        return e.toUpperCase()
    };
    re.fn = re.prototype = {
        jquery: ne, constructor: re, selector: "", length: 0, toArray: function () {
            return V.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        }, pushStack: function (t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return re.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(re.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(V.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: K, sort: U.sort, splice: U.splice
    }, re.extend = re.fn.extend = function () {
        var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || re.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)if (null != (r = arguments[a]))for (n in r)t = o[n], i = r[n], o !== i && (u && i && (re.isPlainObject(i) || (e = re.isArray(i))) ? (e ? (e = !1, s = t && re.isArray(t) ? t : []) : s = t && re.isPlainObject(t) ? t : {}, o[n] = re.extend(u, s, i)) : void 0 !== i && (o[n] = i));
        return o
    }, re.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === re.type(t)
        }, isArray: Array.isArray || function (t) {
            return "array" === re.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            return !re.isArray(t) && t - parseFloat(t) >= 0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, isPlainObject: function (t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t))return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)for (e in t)return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[te.call(t)] || "object" : typeof t
        }, globalEval: function (e) {
            e && re.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(oe, "ms-").replace(ae, le)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, n) {
            var r, s = 0, o = t.length, a = i(t);
            if (n) {
                if (a)for (; o > s && (r = e.apply(t[s], n), r !== !1); s++); else for (s in t)if (r = e.apply(t[s], n), r === !1)break
            } else if (a)for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++); else for (s in t)if (r = e.call(t[s], s, t[s]), r === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(se, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? re.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
        }, inArray: function (t, e, i) {
            var n;
            if (e) {
                if (Q)return Q.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in e && e[i] === t)return i
            }
            return -1
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n;)t[r++] = e[n++];
            if (i !== i)for (; void 0 !== e[n];)t[r++] = e[n++];
            return t.length = r, t
        }, grep: function (t, e, i) {
            for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++)n = !e(t[s], s), n !== a && r.push(t[s]);
            return r
        }, map: function (t, e, n) {
            var r, s = 0, o = t.length, a = i(t), l = [];
            if (a)for (; o > s; s++)r = e(t[s], s, n), null != r && l.push(r); else for (s in t)r = e(t[s], s, n), null != r && l.push(r);
            return G.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var i, n, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (i = V.call(arguments, 2), n = function () {
                return t.apply(e || this, i.concat(V.call(arguments)))
            }, n.guid = t.guid = t.guid || re.guid++, n) : void 0
        }, now: function () {
            return +new Date
        }, support: ie
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        J["[object " + e + "]"] = e.toLowerCase()
    });
    var ue = function (t) {
        function e(t, e, i, n) {
            var r, s, o, a, l, u, h, p, f, m;
            if ((e ? e.ownerDocument || e : H) !== L && D(e), e = e || L, i = i || [], !t || "string" != typeof t)return i;
            if (1 !== (a = e.nodeType) && 9 !== a)return [];
            if (R && !n) {
                if (r = ye.exec(t))if (o = r[1]) {
                    if (9 === a) {
                        if (s = e.getElementById(o), !s || !s.parentNode)return i;
                        if (s.id === o)return i.push(s), i
                    } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && N(e, s) && s.id === o)return i.push(s), i
                } else {
                    if (r[2])return J.apply(i, e.getElementsByTagName(t)), i;
                    if ((o = r[3]) && x.getElementsByClassName && e.getElementsByClassName)return J.apply(i, e.getElementsByClassName(o)), i
                }
                if (x.qsa && (!M || !M.test(t))) {
                    if (p = h = j, f = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = C(t), (h = e.getAttribute("id")) ? p = h.replace(be, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;)u[l] = p + d(u[l]);
                        f = _e.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m)try {
                        return J.apply(i, f.querySelectorAll(m)), i
                    } catch (g) {
                    } finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
            }

            var e = [];
            return t
        }

        function n(t) {
            return t[j] = !0, t
        }

        function r(t) {
            var e = L.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var i = t.split("|"), n = t.length; n--;)w.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (n)return n;
            if (i)for (; i = i.nextSibling;)if (i === e)return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var r, s = t([], i.length, e), o = s.length; o--;)i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== Z && t
        }

        function h() {
        }

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++)n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir, r = i && "parentNode" === n, s = q++;
            return e.first ? function (e, i, s) {
                for (; e = e[n];)if (1 === e.nodeType || r)return t(e, i, s)
            } : function (e, i, o) {
                var a, l, u = [B, s];
                if (o) {
                    for (; e = e[n];)if ((1 === e.nodeType || r) && t(e, i, o))return !0
                } else for (; e = e[n];)if (1 === e.nodeType || r) {
                    if (l = e[j] || (e[j] = {}), (a = l[n]) && a[0] === B && a[1] === s)return u[2] = a[2];
                    if (l[n] = u, u[2] = t(e, i, o))return !0
                }
            }
        }

        function f(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var r = t.length; r--;)if (!t[r](e, i, n))return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var r = 0, s = i.length; s > r; r++)e(t, i[r], n);
            return n
        }

        function g(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
            return o
        }

        function v(t, e, i, r, s, o) {
            return r && !r[j] && (r = v(r)), s && !s[j] && (s = v(s, o)), n(function (n, o, a, l) {
                var u, c, h, d = [], p = [], f = o.length, v = n || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !n && e ? v : g(v, d, t, a, l), _ = i ? s || (n ? t : f || r) ? [] : o : y;
                if (i && i(y, _, a, l), r)for (u = g(_, p), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[p[c]] = !(y[p[c]] = h));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (u = [], c = _.length; c--;)(h = _[c]) && u.push(y[c] = h);
                            s(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;)(h = _[c]) && (u = s ? ee.call(n, h) : d[c]) > -1 && (n[u] = !(o[u] = h))
                    }
                } else _ = g(_ === o ? _.splice(f, _.length) : _), s ? s(null, o, _, l) : J.apply(o, _)
            })
        }

        function y(t) {
            for (var e, i, n, r = t.length, s = w.relative[t[0].type], o = s || w.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                return t === e
            }, o, !0), u = p(function (t) {
                return ee.call(e, t) > -1
            }, o, !0), c = [function (t, i, n) {
                return !s && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
            }]; r > a; a++)if (i = w.relative[t[a].type])c = [p(f(c), i)]; else {
                if (i = w.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                    for (n = ++a; r > n && !w.relative[t[n].type]; n++);
                    return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && d(t))
                }
                c.push(i)
            }
            return f(c)
        }

        function _(t, i) {
            var r = i.length > 0, s = t.length > 0, o = function (n, o, a, l, u) {
                var c, h, d, p = 0, f = "0", m = n && [], v = [], y = E, _ = n || s && w.find.TAG("*", u), b = B += null == y ? 1 : Math.random() || .1, x = _.length;
                for (u && (E = o !== L && o); f !== x && null != (c = _[f]); f++) {
                    if (s && c) {
                        for (h = 0; d = t[h++];)if (d(c, o, a)) {
                            l.push(c);
                            break
                        }
                        u && (B = b)
                    }
                    r && ((c = !d && c) && p--, n && m.push(c))
                }
                if (p += f, r && f !== p) {
                    for (h = 0; d = i[h++];)d(m, v, o, a);
                    if (n) {
                        if (p > 0)for (; f--;)m[f] || v[f] || (v[f] = K.call(l));
                        v = g(v)
                    }
                    J.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return u && (B = b, E = y), m
            };
            return r ? n(o) : o
        }

        var b, x, w, T, S, C, A, P, E, F, k, D, L, I, R, M, O, z, N, j = "sizzle" + -new Date, H = t.document, B = 0, q = 0, W = i(), X = i(), $ = i(), Y = function (t, e) {
            return t === e && (k = !0), 0
        }, Z = "undefined", U = 1 << 31, V = {}.hasOwnProperty, G = [], K = G.pop, Q = G.push, J = G.push, te = G.slice, ee = G.indexOf || function (t) {
                for (var e = 0, i = this.length; i > e; e++)if (this[e] === t)return e;
                return -1
            }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", se = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(ae), pe = new RegExp("^" + se + "$"), fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ie + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _e = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            J.apply(G = te.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
        } catch (Te) {
            J = {
                apply: G.length ? function (t, e) {
                    Q.apply(t, te.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        x = e.support = {}, S = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, D = e.setDocument = function (t) {
            var e, i = t ? t.ownerDocument || t : H, n = i.defaultView;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, I = i.documentElement, R = !S(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                D()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                D()
            })), x.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function (t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(i.getElementsByClassName) && r(function (t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), x.getById = r(function (t) {
                return I.appendChild(t).id = j, !i.getElementsByName || !i.getElementsByName(j).length
            }), x.getById ? (w.find.ID = function (t, e) {
                if (typeof e.getElementById !== Z && R) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, w.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    var i = typeof t.getAttributeNode !== Z && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), w.find.TAG = x.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== Z ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var i, n = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++];)1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, w.find.CLASS = x.getElementsByClassName && function (t, e) {
                    return typeof e.getElementsByClassName !== Z && R ? e.getElementsByClassName(t) : void 0
                }, O = [], M = [], (x.qsa = ve.test(i.querySelectorAll)) && (r(function (t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || M.push(":checked")
            }), r(function (t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (x.matchesSelector = ve.test(z = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function (t) {
                x.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), O.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), e = ve.test(I.compareDocumentPosition), N = e || ve.test(I.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return !0;
                return !1
            }, Y = e ? function (t, e) {
                if (t === e)return k = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === H && N(H, t) ? -1 : e === i || e.ownerDocument === H && N(H, e) ? 1 : F ? ee.call(F, t) - ee.call(F, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e)return k = !0, 0;
                var n, r = 0, s = t.parentNode, a = e.parentNode, l = [t], u = [e];
                if (!s || !a)return t === i ? -1 : e === i ? 1 : s ? -1 : a ? 1 : F ? ee.call(F, t) - ee.call(F, e) : 0;
                if (s === a)return o(t, e);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (; l[r] === u[r];)r++;
                return r ? o(l[r], u[r]) : l[r] === H ? -1 : u[r] === H ? 1 : 0
            }, i) : L
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== L && D(t), i = i.replace(he, "='$1']"), !(!x.matchesSelector || !R || O && O.test(i) || M && M.test(i)))try {
                var n = z.call(t, i);
                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
            } catch (r) {
            }
            return e(i, L, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== L && D(t), N(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== L && D(t);
            var i = w.attrHandle[e.toLowerCase()], n = i && V.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
            return void 0 !== n ? n : x.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [], n = 0, r = 0;
            if (k = !x.detectDuplicates, F = !x.sortStable && t.slice(0), t.sort(Y), k) {
                for (; e = t[r++];)e === t[r] && (n = i.push(r));
                for (; n--;)t.splice(i[n], 1)
            }
            return F = null, t
        }, T = e.getText = function (t) {
            var e, i = "", n = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)i += T(t)
                } else if (3 === r || 4 === r)return t.nodeValue
            } else for (; e = t[n++];)i += T(e);
            return i
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(xe, we), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && de.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(xe, we).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Z && t.getAttribute("class") || "")
                        })
                }, ATTR: function (t, i, n) {
                    return function (r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var u, c, h, d, p, f, m = s !== o ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (h = e; h = h[m];)if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                for (c = g[j] || (g[j] = {}), u = c[t] || [], p = u[0] === B && u[1], d = u[0] === B && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)if (1 === h.nodeType && ++d && h === e) {
                                    c[t] = [B, p, d];
                                    break
                                }
                            } else if (y && (u = (e[j] || (e[j] = {}))[t]) && u[0] === B)d = u[1]; else for (; (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[j] || (h[j] = {}))[t] = [B, d]), h !== e)););
                            return d -= r, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                }, PSEUDO: function (t, i) {
                    var r, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[j] ? s(i) : s.length > 1 ? (r = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, r = s(t, i), o = r.length; o--;)n = ee.call(t, r[o]), t[n] = !(e[n] = r[o])
                    }) : function (t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [], i = [], r = A(t.replace(le, "$1"));
                    return r[j] ? n(function (t, e, i, n) {
                        for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function (t, n, s) {
                        return e[0] = t, r(e, null, s, i), !i.pop()
                    }
                }), has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }), contains: n(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                    }
                }), lang: n(function (t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, we).toLowerCase(), function (e) {
                        var i;
                        do if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === I
                }, focus: function (t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: function (t) {
                    return t.disabled === !1
                }, disabled: function (t) {
                    return t.disabled === !0
                }, checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                    return !0
                }, parent: function (t) {
                    return !w.pseudos.empty(t)
                }, header: function (t) {
                    return ge.test(t.nodeName)
                }, input: function (t) {
                    return me.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (t, e) {
                    return [e - 1]
                }), eq: u(function (t, e, i) {
                    return [0 > i ? i + e : i]
                }), even: u(function (t, e) {
                    for (var i = 0; e > i; i += 2)t.push(i);
                    return t
                }), odd: u(function (t, e) {
                    for (var i = 1; e > i; i += 2)t.push(i);
                    return t
                }), lt: u(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;)t.push(n);
                    return t
                }), gt: u(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;)t.push(n);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[b] = a(b);
        for (b in{submit: !0, reset: !0})w.pseudos[b] = l(b);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h, C = e.tokenize = function (t, i) {
            var n, r, s, o, a, l, u, c = X[t + " "];
            if (c)return i ? 0 : c.slice(0);
            for (a = t, l = [], u = w.preFilter; a;) {
                (!n || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ce.exec(a)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (o in w.filter)!(r = fe[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n)break
            }
            return i ? a.length : a ? e.error(t) : X(t, l).slice(0)
        }, A = e.compile = function (t, e) {
            var i, n = [], r = [], s = $[t + " "];
            if (!s) {
                for (e || (e = C(t)), i = e.length; i--;)s = y(e[i]), s[j] ? n.push(s) : r.push(s);
                s = $(t, _(r, n)), s.selector = t
            }
            return s
        }, P = e.select = function (t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t, h = !n && C(t = u.selector || t);
            if (i = i || [], 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && R && w.relative[s[1].type]) {
                    if (e = (w.find.ID(o.matches[0].replace(xe, we), e) || [])[0], !e)return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = fe.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !w.relative[a = o.type]);)if ((l = w.find[a]) && (n = l(o.matches[0].replace(xe, we), _e.test(s[0].type) && c(e.parentNode) || e))) {
                    if (s.splice(r, 1), t = n.length && d(s), !t)return J.apply(i, n), i;
                    break
                }
            }
            return (u || A(t, h))(n, e, !R, i, _e.test(t) && c(e.parentNode) || e), i
        }, x.sortStable = j.split("").sort(Y).join("") === j, x.detectDuplicates = !!k, D(), x.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(L.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function (t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || s(ie, function (t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext, he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, de = /^.[^:#\[\.,]*$/;
    re.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? re.find.matchesSelector(n, t) ? [n] : [] : re.find.matches(t, re.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function (t) {
            var e, i = [], n = this, r = n.length;
            if ("string" != typeof t)return this.pushStack(re(t).filter(function () {
                for (e = 0; r > e; e++)if (re.contains(n[e], this))return !0
            }));
            for (e = 0; r > e; e++)re.find(t, n[e], i);
            return i = this.pushStack(r > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        }, filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        }, is: function (t) {
            return !!n(this, "string" == typeof t && ce.test(t) ? re(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = re.fn.init = function (t, e) {
        var i, n;
        if (!t)return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), he.test(i[1]) && re.isPlainObject(e))for (i in e)re.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if (n = fe.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2])return pe.find(t);
                this.length = 1, this[0] = n
            }
            return this.context = fe, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
    };
    ge.prototype = re.fn, pe = re(fe);
    var ve = /^(?:parents|prev(?:Until|All))/, ye = {children: !0, contents: !0, next: !0, prev: !0};
    re.extend({
        dir: function (t, e, i) {
            for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !re(r).is(i));)1 === r.nodeType && n.push(r), r = r[e];
            return n
        }, sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), re.fn.extend({
        has: function (t) {
            var e, i = re(t, this), n = i.length;
            return this.filter(function () {
                for (e = 0; n > e; e++)if (re.contains(this, i[e]))return !0
            })
        }, closest: function (t, e) {
            for (var i, n = 0, r = this.length, s = [], o = ce.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > n; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, t))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? re.unique(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return re.dir(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return re.dir(t, "parentNode", i)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return re.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return re.dir(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return re.dir(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return re.dir(t, "previousSibling", i)
        }, siblings: function (t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return re.sibling(t.firstChild)
        }, contents: function (t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function (t, e) {
        re.fn[t] = function (i, n) {
            var r = re.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = re.filter(n, r)), this.length > 1 && (ye[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var _e = /\S+/g, be = {};
    re.Callbacks = function (t) {
        t = "string" == typeof t ? be[t] || s(t) : re.extend({}, t);
        var e, i, n, r, o, a, l = [], u = !t.once && [], c = function (s) {
            for (i = t.memory && s, n = !0, o = a || 0, a = 0, r = l.length, e = !0; l && r > o; o++)if (l[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break
            }
            e = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : h.disable())
        }, h = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function s(e) {
                        re.each(e, function (e, i) {
                            var n = re.type(i);
                            "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                        })
                    }(arguments), e ? r = l.length : i && (a = n, c(i))
                }
                return this
            }, remove: function () {
                return l && re.each(arguments, function (t, i) {
                    for (var n; (n = re.inArray(i, l, n)) > -1;)l.splice(n, 1), e && (r >= n && r--, o >= n && o--)
                }), this
            }, has: function (t) {
                return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], r = 0, this
            }, disable: function () {
                return l = u = i = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = void 0, i || h.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (t, i) {
                return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : c(i)), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return h
    }, re.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]], i = "pending", n = {
                state: function () {
                    return i
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return re.Deferred(function (i) {
                        re.each(e, function (e, s) {
                            var o = re.isFunction(t[e]) && t[e];
                            r[s[1]](function () {
                                var t = o && o.apply(this, arguments);
                                t && re.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? re.extend(t, n) : n
                }
            }, r = {};
            return n.pipe = n.then, re.each(e, function (t, s) {
                var o = s[2], a = s[3];
                n[s[1]] = o.add, a && o.add(function () {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function () {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), t && t.call(r, r), r
        }, when: function (t) {
            var e, i, n, r = 0, s = V.call(arguments), o = s.length, a = 1 !== o || t && re.isFunction(t.promise) ? o : 0, l = 1 === a ? t : re.Deferred(), u = function (t, i, n) {
                return function (r) {
                    i[t] = this, n[t] = arguments.length > 1 ? V.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (o > 1)for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++)s[r] && re.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var xe;
    re.fn.ready = function (t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? re.readyWait++ : re.ready(!0)
        }, ready: function (t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!fe.body)return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (xe.resolveWith(fe, [re]), re.fn.triggerHandler && (re(fe).triggerHandler("ready"), re(fe).off("ready")))
            }
        }
    }), re.ready.promise = function (e) {
        if (!xe)if (xe = re.Deferred(), "complete" === fe.readyState)setTimeout(re.ready); else if (fe.addEventListener)fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1); else {
            fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && fe.documentElement
            } catch (n) {
            }
            i && i.doScroll && !function r() {
                if (!re.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    o(), re.ready()
                }
            }()
        }
        return xe.promise(e)
    };
    var we, Te = "undefined";
    for (we in re(ie))break;
    ie.ownLast = "0" !== we, ie.inlineBlockNeedsLayout = !1, re(function () {
        var t, e, i, n;
        i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }), function () {
        var t = fe.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(), re.acceptData = function (t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ce = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
        },
        data: function (t, e, i) {
            return c(t, e, i)
        },
        removeData: function (t, e) {
            return h(t, e)
        },
        _data: function (t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function (t, e) {
            return h(t, e, !0)
        }
    }), re.fn.extend({
        data: function (t, e) {
            var i, n, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(s), 1 === s.nodeType && !re._data(s, "parsedAttrs"))) {
                    for (i = o.length; i--;)o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(s, n, r[n])));
                    re._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                re.data(this, t, e)
            }) : s ? l(s, t, re.data(s, t)) : void 0
        }, removeData: function (t) {
            return this.each(function () {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function (t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = re._data(t, e), i && (!n || re.isArray(i) ? n = re._data(t, e, re.makeArray(i)) : n.push(i)), n || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = re.queue(t, e), n = i.length, r = i.shift(), s = re._queueHooks(t, e), o = function () {
                re.dequeue(t, e)
            };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return re._data(t, i) || re._data(t, i, {
                    empty: re.Callbacks("once memory").add(function () {
                        re._removeData(t, e + "queue"), re._removeData(t, i)
                    })
                })
        }
    }), re.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? re.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && re.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                re.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, r = re.Deferred(), s = this, o = this.length, a = function () {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)i = re._data(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = ["Top", "Right", "Bottom", "Left"], Ee = function (t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }, Fe = re.access = function (t, e, i, n, r, s, o) {
        var a = 0, l = t.length, u = null == i;
        if ("object" === re.type(i)) {
            r = !0;
            for (a in i)re.access(t, e, a, i[a], !0, s, o)
        } else if (void 0 !== n && (r = !0, re.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function (t, e, i) {
                return u.call(re(t), i)
            })), e))for (; l > a; a++)e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
    }, ke = /^(?:checkbox|radio)$/i;
    !function () {
        var t = fe.createElement("input"), e = fe.createElement("div"), i = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(), function () {
        var e, i, n = fe.createElement("div");
        for (e in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var De = /^(?:input|select|textarea)$/i, Le = /^key/, Ie = /^(?:mouse|pointer|contextmenu)|click/, Re = /^(?:focusinfocus|focusoutblur)$/, Me = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function (t, e, i, n, r) {
            var s, o, a, l, u, c, h, d, p, f, m, g = re._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = re.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function (t) {
                    return typeof re === Te || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), e = (e || "").match(_e) || [""], a = e.length; a--;)s = Me.exec(e[a]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, h = re.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (d = o[p]) || (d = o[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), re.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, i, n, r) {
            var s, o, a, l, u, c, h, d, p, f, m, g = re.hasData(t) && re._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(_e) || [""], u = e.length; u--;)if (a = Me.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (h = re.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;)o = d[s], !r && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(s, 1), o.selector && d.delegateCount--, h.remove && h.remove.call(t, o));
                    l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || re.removeEvent(t, p, g.handle), delete c[p])
                } else for (p in c)re.event.remove(t, p + e[u], i, n, !0);
                re.isEmptyObject(c) && (delete g.handle, re._removeData(t, "events"))
            }
        },
        trigger: function (e, i, n, r) {
            var s, o, a, l, u, c, h, d = [n || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Re.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e : new re.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : re.makeArray(i, [e]), u = re.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(n)) {
                    for (l = u.delegateType || p, Re.test(l + p) || (a = a.parentNode); a; a = a.parentNode)d.push(a), c = a;
                    c === (n.ownerDocument || fe) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0; (a = d[h++]) && !e.isPropagationStopped();)e.type = h > 1 ? l : u.bindType || p, s = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), s && s.apply(a, i), s = o && a[o], s && s.apply && re.acceptData(a) && (e.result = s.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && re.acceptData(n) && o && n[p] && !re.isWindow(n)) {
                    c = n[o], c && (n[o] = null), re.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {
                    }
                    re.event.triggered = void 0, c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = re.event.fix(t);
            var e, i, n, r, s, o = [], a = V.call(arguments), l = (re._data(this, "events") || {})[t.type] || [], u = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (o = re.event.handlers.call(this, t, l), e = 0; (r = o[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, s = 0; (n = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((re.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var i, n, r, s, o = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (r = [], s = 0; a > s; s++)n = e[s], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? re(i, this).index(l) >= 0 : re.find(i, this, null, [l]).length), r[i] && r.push(n);
                r.length && o.push({elem: l, handlers: r})
            }
            return a < e.length && o.push({elem: this, handlers: e.slice(a)}), o
        },
        fix: function (t) {
            if (t[re.expando])return t;
            var e, i, n, r = t.type, s = t, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Ie.test(r) ? this.mouseHooks : Le.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new re.Event(s), e = n.length; e--;)i = n[e], t[i] = s[i];
            return t.target || (t.target = s.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i, n, r, s = e.button, o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== f() && this.focus)try {
                        return this.focus(), !1
                    } catch (t) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return re.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i, n) {
            var r = re.extend(new re.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
            n ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, re.removeEvent = fe.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Te && (t[n] = null), t.detachEvent(n, i))
    }, re.Event = function (t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        re.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, r = t.relatedTarget, s = t.handleObj;
                return (!r || r !== n && !re.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ie.submitBubbles || (re.event.special.submit = {
        setup: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target, i = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                i && !re._data(i, "submitBubbles") && (re.event.add(i, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), re._data(i, "submitBubbles", !0))
            })
        }, postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        }, teardown: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (re.event.special.change = {
        setup: function () {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                De.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        }, handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return re.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ie.focusinBubbles || re.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, r = re._data(n, e);
                r || n.addEventListener(t, i, !0), re._data(n, e, (r || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, r = re._data(n, e) - 1;
                r ? re._data(n, e, r) : (n.removeEventListener(t, i, !0), re._removeData(n, e))
            }
        }
    }), re.fn.extend({
        on: function (t, e, i, n, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (s in t)this.on(s, e, i, t[s], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)n = p; else if (!n)return this;
            return 1 === r && (o = n, n = function (t) {
                return re().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = re.guid++)), this.each(function () {
                re.event.add(this, t, n, i, e)
            })
        }, one: function (t, e, i, n) {
            return this.on(t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj)return n = t.handleObj, re(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t)this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
                re.event.remove(this, t, i, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                re.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            return i ? re.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ze = / jQuery\d+="(?:null|\d+)"/g, Ne = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"), je = /^\s+/, He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Be = /<([\w:]+)/, qe = /<tbody/i, We = /<|&#?\w+;/, Xe = /<(?:script|style|link)/i, $e = /checked\s*(?:[^=]|=\s*.checked.)/i, Ye = /^$|\/(?:java|ecma)script/i, Ze = /^true\/(.*)/, Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Ge = m(fe), Ke = Ge.appendChild(fe.createElement("div"));
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, re.extend({
        clone: function (t, e, i) {
            var n, r, s, o, a, l = re.contains(t.ownerDocument, t);
            if (ie.html5Clone || re.isXMLDoc(t) || !Ne.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(s = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))for (n = g(s), a = g(t), o = 0; null != (r = a[o]); ++o)n[o] && T(r, n[o]);
            if (e)if (i)for (a = a || g(t), n = n || g(s), o = 0; null != (r = a[o]); o++)w(r, n[o]); else w(t, s);
            return n = g(s, "script"), n.length > 0 && x(n, !l && g(t, "script")), n = a = r = null, s
        }, buildFragment: function (t, e, i, n) {
            for (var r, s, o, a, l, u, c, h = t.length, d = m(e), p = [], f = 0; h > f; f++)if (s = t[f], s || 0 === s)if ("object" === re.type(s))re.merge(p, s.nodeType ? [s] : s); else if (We.test(s)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Be.exec(s) || ["", ""])[1].toLowerCase(), c = Ve[l] || Ve._default, a.innerHTML = c[1] + s.replace(He, "<$1></$2>") + c[2], r = c[0]; r--;)a = a.lastChild;
                if (!ie.leadingWhitespace && je.test(s) && p.push(e.createTextNode(je.exec(s)[0])), !ie.tbody)for (s = "table" !== l || qe.test(s) ? "<table>" !== c[1] || qe.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;)re.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(s));
            for (a && d.removeChild(a), ie.appendChecked || re.grep(g(p, "input"), v), f = 0; s = p[f++];)if ((!n || -1 === re.inArray(s, n)) && (o = re.contains(s.ownerDocument, s), a = g(d.appendChild(s), "script"), o && x(a), i))for (r = 0; s = a[r++];)Ye.test(s.type || "") && i.push(s);
            return a = null, d
        }, cleanData: function (t, e) {
            for (var i, n, r, s, o = 0, a = re.expando, l = re.cache, u = ie.deleteExpando, c = re.event.special; null != (i = t[o]); o++)if ((e || re.acceptData(i)) && (r = i[a], s = r && l[r])) {
                if (s.events)for (n in s.events)c[n] ? re.event.remove(i, n) : re.removeEvent(i, n, s.handle);
                l[r] && (delete l[r], u ? delete i[a] : typeof i.removeAttribute !== Te ? i.removeAttribute(a) : i[a] = null, U.push(r))
            }
        }
    }), re.fn.extend({
        text: function (t) {
            return Fe(this, function (t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var i, n = t ? re.filter(t, this) : this, r = 0; null != (i = n[r]); r++)e || 1 !== i.nodeType || re.cleanData(g(i)), i.parentNode && (e && re.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(g(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return re.clone(this, t, e)
            })
        }, html: function (t) {
            return Fe(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(ze, "") : void 0;
                if (!("string" != typeof t || Xe.test(t) || !ie.htmlSerialize && Ne.test(t) || !ie.leadingWhitespace && je.test(t) || Ve[(Be.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(He, "<$1></$2>");
                    try {
                        for (; n > i; i++)e = this[i] || {}, 1 === e.nodeType && (re.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, re.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = G.apply([], t);
            var i, n, r, s, o, a, l = 0, u = this.length, c = this, h = u - 1, d = t[0], p = re.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !ie.checkClone && $e.test(d))return this.each(function (i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (u && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (s = re.map(g(a, "script"), _), r = s.length; u > l; l++)n = a, l !== h && (n = re.clone(n, !0, !0), r && re.merge(s, g(n, "script"))), e.call(this[l], n, l);
                if (r)for (o = s[s.length - 1].ownerDocument, re.map(s, b), l = 0; r > l; l++)n = s[l], Ye.test(n.type || "") && !re._data(n, "globalEval") && re.contains(o, n) && (n.src ? re._evalUrl && re._evalUrl(n.src) : re.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ue, "")));
                a = i = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        re.fn[t] = function (t) {
            for (var i, n = 0, r = [], s = re(t), o = s.length - 1; o >= n; n++)i = n === o ? this : this.clone(!0), re(s[n])[e](i), K.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Qe, Je = {};
    !function () {
        var t;
        ie.shrinkWrapBlocks = function () {
            if (null != t)return t;
            t = !1;
            var e, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var ti, ei, ii = /^margin/, ni = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"), ri = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, ei = function (t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || ti(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || re.contains(t.ownerDocument, t) || (o = re.style(t, e)), ni.test(o) && ii.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
    }) : fe.documentElement.currentStyle && (ti = function (t) {
        return t.currentStyle
    }, ei = function (t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || ti(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), ni.test(o) && !ri.test(e) && (n = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
    }), !function () {
        function e() {
            var e, i, n, r;
            i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, r = e.appendChild(fe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), i.removeChild(n))
        }

        var i, n, r, s, o, a, l;
        i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], (n = r && r.style) && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, re.extend(ie, {
            reliableHiddenOffsets: function () {
                return null == a && e(), a
            }, boxSizingReliable: function () {
                return null == o && e(), o
            }, pixelPosition: function () {
                return null == s && e(), s
            }, reliableMarginRight: function () {
                return null == l && e(), l
            }
        }))
    }(), re.swap = function (t, e, i, n) {
        var r, s, o = {};
        for (s in e)o[s] = t.style[s], t.style[s] = e[s];
        r = i.apply(t, n || []);
        for (s in e)t.style[s] = o[s];
        return r
    };
    var si = /alpha\([^)]*\)/i, oi = /opacity\s*=\s*([^)]*)/, ai = /^(none|table(?!-c[ea]).+)/, li = new RegExp("^(" + Ae + ")(.*)$", "i"), ui = new RegExp("^([+-])=(" + Ae + ")", "i"), ci = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, hi = {letterSpacing: "0", fontWeight: "400"}, di = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ie.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = re.camelCase(e), l = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = P(l, a)), o = re.cssHooks[e] || re.cssHooks[a], void 0 === i)return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                if (s = typeof i, "string" === s && (r = ui.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || re.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n)))))try {
                    l[e] = i
                } catch (u) {
                }
            }
        },
        css: function (t, e, i, n) {
            var r, s, o, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = P(t.style, a)), o = re.cssHooks[e] || re.cssHooks[a], o && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = ei(t, e, n)), "normal" === s && e in hi && (s = hi[e]), "" === i || i ? (r = parseFloat(s), i === !0 || re.isNumeric(r) ? r || 0 : s) : s
        }
    }), re.each(["height", "width"], function (t, e) {
        re.cssHooks[e] = {
            get: function (t, i, n) {
                return i ? ai.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, ci, function () {
                    return D(t, e, n)
                }) : D(t, e, n) : void 0
            }, set: function (t, i, n) {
                var r = n && ti(t);
                return F(t, i, n ? k(t, e, n, ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ie.opacity || (re.cssHooks.opacity = {
        get: function (t, e) {
            return oi.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var i = t.style, n = t.currentStyle, r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", s = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(s.replace(si, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = si.test(s) ? s.replace(si, r) : s + " " + r)
        }
    }), re.cssHooks.marginRight = A(ie.reliableMarginRight, function (t, e) {
        return e ? re.swap(t, {display: "inline-block"}, ei, [t, "marginRight"]) : void 0
    }), re.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        re.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)r[t + Pe[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, ii.test(t) || (re.cssHooks[t + e].set = F)
    }), re.fn.extend({
        css: function (t, e) {
            return Fe(this, function (t, e, i) {
                var n, r, s = {}, o = 0;
                if (re.isArray(e)) {
                    for (n = ti(t), r = e.length; r > o; o++)s[e[o]] = re.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? re.style(t, e, i) : re.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ee(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = L, L.prototype = {
        constructor: L, init: function (t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (re.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = L.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = L.prototype.init, re.fx.step = {};
    var pi, fi, mi = /^(?:toggle|show|hide)$/, gi = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"), vi = /queueHooks$/, yi = [O], _i = {
        "*": [function (t, e) {
            var i = this.createTween(t, e), n = i.cur(), r = gi.exec(e), s = r && r[3] || (re.cssNumber[t] ? "" : "px"), o = (re.cssNumber[t] || "px" !== s && +n) && gi.exec(re.css(i.elem, t)), a = 1, l = 20;
            if (o && o[3] !== s) {
                s = s || o[3], r = r || [], o = +n || 1;
                do a = a || ".5", o /= a, re.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
            }
            return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
        }]
    };
    re.Animation = re.extend(N, {
        tweener: function (t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, r = t.length; r > n; n++)i = t[n], _i[i] = _i[i] || [], _i[i].unshift(e)
        }, prefilter: function (t, e) {
            e ? yi.unshift(t) : yi.push(t)
        }
    }), re.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? re.extend({}, t) : {
            complete: i || !i && e || re.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !re.isFunction(e) && e
        };
        return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
        }, n
    }, re.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Ee).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var r = re.isEmptyObject(t), s = re.speed(e, i, n), o = function () {
                var e = N(this, re.extend({}, t), s);
                (r || re._data(this, "finish")) && e.stop(!0)
            };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", s = re.timers, o = re._data(this);
                if (r)o[r] && o[r].stop && n(o[r]); else for (r in o)o[r] && o[r].stop && vi.test(r) && n(o[r]);
                for (r = s.length; r--;)s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                (e || !i) && re.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, i = re._data(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = re.timers, o = n ? n.length : 0;
                for (i.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;)s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; o > e; e++)n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), re.each(["toggle", "show", "hide"], function (t, e) {
        var i = re.fn[e];
        re.fn[e] = function (t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, r)
        }
    }), re.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        re.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), re.timers = [], re.fx.tick = function () {
        var t, e = re.timers, i = 0;
        for (pi = re.now(); i < e.length; i++)t = e[i], t() || e[i] !== t || e.splice(i--, 1);
        e.length || re.fx.stop(), pi = void 0
    }, re.fx.timer = function (t) {
        re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function () {
        fi || (fi = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
        clearInterval(fi), fi = null
    }, re.fx.speeds = {slow: 600, fast: 200, _default: 400}, re.fn.delay = function (t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, function () {
        var t, e, i, n, r;
        e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), r = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = r.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !r.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
    }();
    var bi = /\r/g;
    re.fn.extend({
        val: function (t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = re.isFunction(t), this.each(function (i) {
                var r;
                1 === this.nodeType && (r = n ? t.call(this, i, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(bi, "") : null == i ? "" : i)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }
            }, select: {
                get: function (t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)if (i = n[l], !(!i.selected && l !== r || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && re.nodeName(i.parentNode, "optgroup"))) {
                        if (e = re(i).val(), s)return e;
                        o.push(e)
                    }
                    return o
                }, set: function (t, e) {
                    for (var i, n, r = t.options, s = re.makeArray(e), o = r.length; o--;)if (n = r[o], re.inArray(re.valHooks.option.get(n), s) >= 0)try {
                        n.selected = i = !0
                    } catch (a) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xi, wi, Ti = re.expr.attrHandle, Si = /^(?:checked|selected)$/i, Ci = ie.getSetAttribute, Ai = ie.input;
    re.fn.extend({
        attr: function (t, e) {
            return Fe(this, re.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function (t, e, i) {
            var n, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === Te ? re.prop(t, e, i) : (1 === s && re.isXMLDoc(t) || (e = e.toLowerCase(), n = re.attrHooks[e] || (re.expr.match.bool.test(e) ? wi : xi)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void re.removeAttr(t, e)) : void 0
        }, removeAttr: function (t, e) {
            var i, n, r = 0, s = e && e.match(_e);
            if (s && 1 === t.nodeType)for (; i = s[r++];)n = re.propFix[i] || i, re.expr.match.bool.test(i) ? Ai && Ci || !Si.test(i) ? t[n] = !1 : t[re.camelCase("default-" + i)] = t[n] = !1 : re.attr(t, i, ""), t.removeAttribute(Ci ? i : n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), wi = {
        set: function (t, e, i) {
            return e === !1 ? re.removeAttr(t, i) : Ai && Ci || !Si.test(i) ? t.setAttribute(!Ci && re.propFix[i] || i, i) : t[re.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = Ti[e] || re.find.attr;
        Ti[e] = Ai && Ci || !Si.test(e) ? function (t, e, n) {
            var r, s;
            return n || (s = Ti[e], Ti[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Ti[e] = s), r
        } : function (t, e, i) {
            return i ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ai && Ci || (re.attrHooks.value = {
        set: function (t, e, i) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : xi && xi.set(t, e, i)
        }
    }), Ci || (xi = {
        set: function (t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, Ti.id = Ti.name = Ti.coords = function (t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, re.valHooks.button = {
        get: function (t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        }, set: xi.set
    }, re.attrHooks.contenteditable = {
        set: function (t, e, i) {
            xi.set(t, "" === e ? !1 : e, i)
        }
    }, re.each(["width", "height"], function (t, e) {
        re.attrHooks[e] = {
            set: function (t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ie.style || (re.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Pi = /^(?:input|select|textarea|button|object)$/i, Ei = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (t, e) {
            return Fe(this, re.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = re.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {
                }
            })
        }
    }), re.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
            var n, r, s, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !re.isXMLDoc(t), s && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Pi.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || re.each(["href", "src"], function (t, e) {
        re.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    }), ie.enctype || (re.propFix.enctype = "encoding");
    var Fi = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function (t) {
            var e, i, n, r, s, o, a = 0, l = this.length, u = "string" == typeof t && t;
            if (re.isFunction(t))return this.each(function (e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (u)for (e = (t || "").match(_e) || []; l > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Fi, " ") : " ")) {
                for (s = 0; r = e[s++];)n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                o = re.trim(n), i.className !== o && (i.className = o)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, r, s, o, a = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t))return this.each(function (e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (u)for (e = (t || "").match(_e) || []; l > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Fi, " ") : "")) {
                for (s = 0; r = e[s++];)for (; n.indexOf(" " + r + " ") >= 0;)n = n.replace(" " + r + " ", " ");
                o = t ? re.trim(n) : "", i.className !== o && (i.className = o)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function (i) {
                re(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function () {
                if ("string" === i)for (var e, n = 0, r = re(this), s = t.match(_e) || []; e = s[n++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else(i === Te || "boolean" === i) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Fi, " ").indexOf(e) >= 0)return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        re.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ki = re.now(), Di = /\?/, Li = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
        var i, n = null, r = re.trim(e + "");
        return r && !re.trim(r.replace(Li, function (t, e, r, s) {
            return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !s - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e)return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (r) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), i
    };
    var Ii, Ri, Mi = /#.*$/, Oi = /([?&])_=[^&]*/, zi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ni = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ji = /^(?:GET|HEAD)$/, Hi = /^\/\//, Bi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, qi = {}, Wi = {}, Xi = "*/".concat("*");
    try {
        Ri = location.href
    } catch ($i) {
        Ri = fe.createElement("a"), Ri.href = "", Ri = Ri.href
    }
    Ii = Bi.exec(Ri.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ri,
            type: "GET",
            isLocal: Ni.test(Ii[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? B(B(t, re.ajaxSettings), e) : B(re.ajaxSettings, t)
        },
        ajaxPrefilter: j(qi),
        ajaxTransport: j(Wi),
        ajax: function (t, e) {
            function i(t, e, i, n) {
                var r, c, v, y, b, w = e;
                2 !== _ && (_ = 2, a && clearTimeout(a), u = void 0, o = n || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (y = q(h, x, i)), y = W(h, y, x, r), r ? (h.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (re.lastModified[s] = b), b = x.getResponseHeader("etag"), b && (re.etag[s] = b)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, r = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", r ? f.resolveWith(d, [c, w, x]) : f.rejectWith(d, [x, w, v]), x.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? c : v]), m.fireWith(d, [x, w]), l && (p.trigger("ajaxComplete", [x, h]), --re.active || re.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, s, o, a, l, u, c, h = re.ajaxSetup({}, e), d = h.context || h, p = h.context && (d.nodeType || d.jquery) ? re(d) : re.event, f = re.Deferred(), m = re.Callbacks("once memory"), g = h.statusCode || {}, v = {}, y = {}, _ = 0, b = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === _) {
                        if (!c)for (c = {}; e = zi.exec(o);)c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === _ ? o : null
                },
                setRequestHeader: function (t, e) {
                    var i = t.toLowerCase();
                    return _ || (t = y[i] = y[i] || t, v[t] = e), this
                },
                overrideMimeType: function (t) {
                    return _ || (h.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (2 > _)for (e in t)g[e] = [g[e], t[e]]; else x.always(t[x.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || b;
                    return u && u.abort(e), i(0, e), this
                }
            };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || Ri) + "").replace(Mi, "").replace(Hi, Ii[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = re.trim(h.dataType || "*").toLowerCase().match(_e) || [""], null == h.crossDomain && (n = Bi.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === Ii[1] && n[2] === Ii[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ii[3] || ("http:" === Ii[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = re.param(h.data, h.traditional)), H(qi, h, e, x), 2 === _)return x;
            l = h.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ji.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (Di.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Oi.test(s) ? s.replace(Oi, "$1_=" + ki++) : s + (Di.test(s) ? "&" : "?") + "_=" + ki++)), h.ifModified && (re.lastModified[s] && x.setRequestHeader("If-Modified-Since", re.lastModified[s]), re.etag[s] && x.setRequestHeader("If-None-Match", re.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xi + "; q=0.01" : "") : h.accepts["*"]);
            for (r in h.headers)x.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === _))return x.abort();
            b = "abort";
            for (r in{success: 1, error: 1, complete: 1})x[r](h[r]);
            if (u = H(Wi, h, e, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    _ = 1, u.send(v, i)
                } catch (w) {
                    if (!(2 > _))throw w;
                    i(-1, w)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, i) {
            return re.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function (t, e) {
        re[e] = function (t, i, n, r) {
            return re.isFunction(i) && (r = r || n, n = i, i = void 0), re.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        re.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function (t) {
        return re.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, re.fn.extend({
        wrapAll: function (t) {
            if (re.isFunction(t))return this.each(function (e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return this.each(re.isFunction(t) ? function (e) {
                re(this).wrapInner(t.call(this, e))
            } : function () {
                var e = re(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = re.isFunction(t);
            return this.each(function (i) {
                re(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function (t) {
        return !re.expr.filters.hidden(t)
    };
    var Yi = /%20/g, Zi = /\[\]$/, Ui = /\r?\n/g, Vi = /^(?:submit|button|image|reset|file)$/i, Gi = /^(?:input|select|textarea|keygen)/i;
    re.param = function (t, e) {
        var i, n = [], r = function (t, e) {
            e = re.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t))re.each(t, function () {
            r(this.name, this.value)
        }); else for (i in t)X(i, t[i], e, r);
        return n.join("&").replace(Yi, "+")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Gi.test(this.nodeName) && !Vi.test(t) && (this.checked || !ke.test(t))
            }).map(function (t, e) {
                var i = re(this).val();
                return null == i ? null : re.isArray(i) ? re.map(i, function (t) {
                    return {name: e.name, value: t.replace(Ui, "\r\n")}
                }) : {name: e.name, value: i.replace(Ui, "\r\n")}
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || Y()
    } : $;
    var Ki = 0, Qi = {}, Ji = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function () {
        for (var t in Qi)Qi[t](void 0, !0)
    }), ie.cors = !!Ji && "withCredentials" in Ji, Ji = ie.ajax = !!Ji, Ji && re.ajaxTransport(function (t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function (i, n) {
                    var r, s = t.xhr(), o = ++Ki;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i)void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                    s.send(t.hasContent && t.data || null), e = function (i, r) {
                        var a, l, u;
                        if (e && (r || 4 === s.readyState))if (delete Qi[o], e = void 0, s.onreadystatechange = re.noop, r)4 !== s.readyState && s.abort(); else {
                            u = {}, a = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (c) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                        }
                        u && n(a, l, u, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Qi[o] = e : e()
                }, abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i = fe.head || re("head")[0] || fe.documentElement;
            return {
                send: function (n, r) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                }, abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [], en = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = tn.pop() || re.expando + "_" + ki++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function (e, i, n) {
        var r, s, o, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (Di.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || re.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
            o = arguments
        }, n.always(function () {
            t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, tn.push(r)), o && re.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), re.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || fe;
        var n = he.exec(t), r = !i && [];
        return n ? [e.createElement(n[1])] : (n = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], n.childNodes))
    };
    var nn = re.fn.load;
    re.fn.load = function (t, e, i) {
        if ("string" != typeof t && nn)return nn.apply(this, arguments);
        var n, r, s, o = this, a = t.indexOf(" ");
        return a >= 0 && (n = re.trim(t.slice(a, t.length)), t = t.slice(0, a)), re.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && re.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, o.html(n ? re("<div>").append(re.parseHTML(t)).find(n) : t)
        }).complete(i && function (t, e) {
                o.each(i, r || [t.responseText, e, t])
            }), this
    }, re.expr.filters.animated = function (t) {
        return re.grep(re.timers, function (e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    re.offset = {
        setOffset: function (t, e, i) {
            var n, r, s, o, a, l, u, c = re.css(t, "position"), h = re(t), d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [s, l]) > -1, u ? (n = h.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, re.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                re.offset.setOffset(this, t, e)
            });
            var e, i, n = {top: 0, left: 0}, r = this[0], s = r && r.ownerDocument;
            return s ? (e = s.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== Te && (n = r.getBoundingClientRect()), i = Z(s), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i = {top: 0, left: 0}, n = this[0];
                return "fixed" === re.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (i = t.offset()), i.top += re.css(t[0], "borderTopWidth", !0), i.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - re.css(n, "marginTop", !0),
                    left: e.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || rn; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");)t = t.offsetParent;
                return t || rn
            })
        }
    }), re.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = /Y/.test(e);
        re.fn[t] = function (n) {
            return Fe(this, function (t, n, r) {
                var s = Z(t);
                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void(s ? s.scrollTo(i ? re(s).scrollLeft() : r, i ? r : re(s).scrollTop()) : t[n] = r)
            }, t, n, arguments.length, null)
        }
    }), re.each(["top", "left"], function (t, e) {
        re.cssHooks[e] = A(ie.pixelPosition, function (t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? re(t).position()[e] + "px" : i) : void 0
        })
    }), re.each({Height: "height", Width: "width"}, function (t, e) {
        re.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            re.fn[n] = function (n, r) {
                var s = arguments.length && (i || "boolean" != typeof n), o = i || (n === !0 || r === !0 ? "margin" : "border");
                return Fe(this, function (e, i, n) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? re.css(e, i, o) : re.style(e, i, n, o)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), re.fn.size = function () {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var sn = t.jQuery, on = t.$;
    return re.noConflict = function (e) {
        return t.$ === re && (t.$ = on), e && t.jQuery === re && (t.jQuery = sn), re
    }, typeof e === Te && (t.jQuery = t.$ = re), re
}), !function (t, e, i) {
    var n = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = i(n) : "function" == typeof define && define.amd ? define(function () {
        return e[t] = i(n)
    }) : e[t] = i(n)
}("enquire", this, function (t) {
    "use strict";
    function e(t, e) {
        var i, n = 0, r = t.length;
        for (n; r > n && (i = e(t[n], n), i !== !1); n++);
    }

    function i(t) {
        return "[object Array]" === Object.prototype.toString.apply(t)
    }

    function n(t) {
        return "function" == typeof t
    }

    function r(t) {
        this.options = t, !t.deferSetup && this.setup()
    }

    function s(e, i) {
        this.query = e, this.isUnconditional = i, this.handlers = [], this.mql = t(e);
        var n = this;
        this.listener = function (t) {
            n.mql = t, n.assess()
        }, this.mql.addListener(this.listener)
    }

    function o() {
        if (!t)throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !t("only all").matches
    }

    return r.prototype = {
        setup: function () {
            this.options.setup && this.options.setup(), this.initialised = !0
        }, on: function () {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        }, off: function () {
            this.options.unmatch && this.options.unmatch()
        }, destroy: function () {
            this.options.destroy ? this.options.destroy() : this.off()
        }, equals: function (t) {
            return this.options === t || this.options.match === t
        }
    }, s.prototype = {
        addHandler: function (t) {
            var e = new r(t);
            this.handlers.push(e), this.matches() && e.on()
        }, removeHandler: function (t) {
            var i = this.handlers;
            e(i, function (e, n) {
                return e.equals(t) ? (e.destroy(), !i.splice(n, 1)) : void 0
            })
        }, matches: function () {
            return this.mql.matches || this.isUnconditional
        }, clear: function () {
            e(this.handlers, function (t) {
                t.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        }, assess: function () {
            var t = this.matches() ? "on" : "off";
            e(this.handlers, function (e) {
                e[t]()
            })
        }
    }, o.prototype = {
        register: function (t, r, o) {
            var a = this.queries, l = o && this.browserIsIncapable;
            return a[t] || (a[t] = new s(t, l)), n(r) && (r = {match: r}), i(r) || (r = [r]), e(r, function (e) {
                n(e) && (e = {match: e}), a[t].addHandler(e)
            }), this
        }, unregister: function (t, e) {
            var i = this.queries[t];
            return i && (e ? i.removeHandler(e) : (i.clear(), delete this.queries[t])), this
        }
    }, new o
}), function (t, e) {
    "use strict";
    var i, n = [], r = /@-skrollr-keyframes\s+([\w-]+)/g, s = /\s*\{\s*((?:[^{]+\{[^}]*\}\s*)+?)\s*\}/g, o = /([\w\-]+)\s*\{([^}]+)\}/g, a = /-skrollr-animation-name\s*:\s*([\w-]+)/g, l = /-skrollr-(anchor-target|smooth-scrolling|emit-events|menu-offset)\s*:\s*['"]([^'"]+)['"]/g, u = function (e) {
        var i = new XMLHttpRequest;
        try {
            i.open("GET", e, !1), i.send(null)
        } catch (n) {
            t.XDomainRequest && (i = new XDomainRequest, i.open("GET", e, !1), i.send(null))
        }
        return i.responseText
    }, c = function (e) {
        for (var r = 0; e.length > r; r++) {
            var s = e[r];
            if ("LINK" === s.tagName) {
                if (null === s.getAttribute("data-skrollr-stylesheet"))continue;
                if (t.matchMedia) {
                    var o = s.getAttribute("media");
                    if (o && !matchMedia(o).matches)continue
                }
                i = u(s.href)
            } else i = s.textContent || s.innerText || s.innerHTML;
            i && n.push(i)
        }
        n.reverse();
        for (var a = {}, l = [], c = [], d = 0; n.length > d; d++)i = n[d], h(i, a), p(i, l), f(i, c);
        m(a, l), g(c)
    }, h = function (t, e) {
        r.lastIndex = 0;
        for (var i, n, a, l; null !== (i = r.exec(t));)for (s.lastIndex = r.lastIndex, n = s.exec(t), o.lastIndex = 0, l = e[i[1]] = {}; null !== (a = o.exec(n[1]));)l[a[1]] = a[2].replace(/[\n\r\t]/g, "")
    }, d = function (t, e) {
        for (var i, n = e; n-- && "{" !== t.charAt(n););
        for (i = n; i-- && "}" !== t.charAt(i - 1););
        return t.substring(i, n).replace(/[\n\r\t]/g, "")
    }, p = function (t, e) {
        var i, n;
        for (a.lastIndex = 0; null !== (i = a.exec(t));)n = d(t, a.lastIndex), e.push([n, i[1]])
    }, f = function (t, e) {
        var i, n;
        for (l.lastIndex = 0; null !== (i = l.exec(t));)n = d(t, l.lastIndex), e.push([n, i[1], i[2]])
    }, m = function (t, i) {
        for (var n, r, s, o, a, l, u, c = 0; i.length > c; c++)if (n = e.querySelectorAll(i[c][0])) {
            r = t[i[c][1]];
            for (s in r)for (o = 0; n.length > o; o++)u = n[o], a = "data-" + s, l = r[s], u.hasAttribute(a) && (l += u.getAttribute(a)), u.setAttribute(a, l)
        }
    }, g = function (t) {
        for (var i, n, r, s, o, a = 0; t.length > a; a++)if (i = t[a], n = e.querySelectorAll(i[0]), r = "data-" + i[1], s = i[2], n)for (o = 0; n.length > o; o++)n[o].setAttribute(r, s)
    };
    c(e.querySelectorAll("link, style"))
}(window, document), function (t, e, i) {
    "use strict";
    function n(i) {
        if (r = e.documentElement, s = e.body, X(), oe = this, i = i || {}, he = i.constants || {}, i.easing)for (var n in i.easing)Z[n] = i.easing[n];
        ye = i.edgeStrategy || "set", ue = {
            beforerender: i.beforerender,
            render: i.render,
            keyframe: i.keyframe
        }, ce = i.forceHeight !== !1, ce && (Me = i.scale || 1), de = i.mobileDeceleration || S, fe = i.smoothScrolling !== !1, me = i.smoothScrollingDuration || C, ge = {targetTop: oe.getScrollTop()}, We = (i.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || t.opera)
        })(), We ? (le = e.getElementById("skrollr-body"), le && se(), U(), Fe(r, [y, x], [_])) : Fe(r, [y, b], [_]), oe.refresh(), xe(t, "resize orientationchange", function () {
            var t = r.clientWidth, e = r.clientHeight;
            (e !== He || t !== je) && (He = e, je = t, Be = !0)
        });
        var o = $();
        return function a() {
            K(), be = o(a)
        }(), oe
    }

    var r, s, o = {
        get: function () {
            return oe
        }, init: function (t) {
            return oe || new n(t)
        }, VERSION: "0.6.26"
    }, a = Object.prototype.hasOwnProperty, l = t.Math, u = t.getComputedStyle, c = "touchstart", h = "touchmove", d = "touchcancel", p = "touchend", f = "skrollable", m = f + "-before", g = f + "-between", v = f + "-after", y = "skrollr", _ = "no-" + y, b = y + "-desktop", x = y + "-mobile", w = "linear", T = 1e3, S = .004, C = 200, A = "start", P = "end", E = "center", F = "bottom", k = "___skrollable_id", D = /^(?:input|textarea|button|select)$/i, L = /^\s+|\s+$/g, I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, R = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, M = /^(@?[a-z\-]+)\[(\w+)\]$/, O = /-([a-z0-9_])/g, z = function (t, e) {
        return e.toUpperCase()
    }, N = /[\-+]?[\d]*\.?[\d]+/g, j = /\{\?\}/g, H = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, B = /[a-z\-]+-gradient/g, q = "", W = "", X = function () {
        var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (u) {
            var e = u(s, null);
            for (var n in e)if (q = n.match(t) || +n == n && e[n].match(t))break;
            if (!q)return q = W = "", i;
            q = q[0], "-" === q.slice(0, 1) ? (W = q, q = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            }[q]) : W = "-" + q.toLowerCase() + "-"
        }
    }, $ = function () {
        var e = t.requestAnimationFrame || t[q.toLowerCase() + "RequestAnimationFrame"], i = Le();
        return (We || !e) && (e = function (e) {
            var n = Le() - i, r = l.max(0, 1e3 / 60 - n);
            return t.setTimeout(function () {
                i = Le(), e()
            }, r)
        }), e
    }, Y = function () {
        var e = t.cancelAnimationFrame || t[q.toLowerCase() + "CancelAnimationFrame"];
        return (We || !e) && (e = function (e) {
            return t.clearTimeout(e)
        }), e
    }, Z = {
        begin: function () {
            return 0
        }, end: function () {
            return 1
        }, linear: function (t) {
            return t
        }, quadratic: function (t) {
            return t * t
        }, cubic: function (t) {
            return t * t * t
        }, swing: function (t) {
            return -l.cos(t * l.PI) / 2 + .5
        }, sqrt: function (t) {
            return l.sqrt(t)
        }, outCubic: function (t) {
            return l.pow(t - 1, 3) + 1
        }, bounce: function (t) {
            var e;
            if (.5083 >= t)e = 3; else if (.8489 >= t)e = 9; else if (.96208 >= t)e = 27; else {
                if (!(.99981 >= t))return 1;
                e = 91
            }
            return 1 - l.abs(3 * l.cos(1.028 * t * e) / e)
        }
    };
    n.prototype.refresh = function (t) {
        var n, r, s = !1;
        for (t === i ? (s = !0, ae = [], qe = 0, t = e.getElementsByTagName("*")) : t.length === i && (t = [t]), n = 0, r = t.length; r > n; n++) {
            var o = t[n], a = o, l = [], u = fe, c = ye, h = !1;
            if (s && k in o && delete o[k], o.attributes) {
                for (var d = 0, p = o.attributes.length; p > d; d++) {
                    var m = o.attributes[d];
                    if ("data-anchor-target" !== m.name)if ("data-smooth-scrolling" !== m.name)if ("data-edge-strategy" !== m.name)if ("data-emit-events" !== m.name) {
                        var g = m.name.match(I);
                        if (null !== g) {
                            var v = {props: m.value, element: o, eventType: m.name.replace(O, z)};
                            l.push(v);
                            var y = g[1];
                            y && (v.constant = y.substr(1));
                            var _ = g[2];
                            /p$/.test(_) ? (v.isPercentage = !0, v.offset = (0 | _.slice(0, -1)) / 100) : v.offset = 0 | _;
                            var b = g[3], x = g[4] || b;
                            b && b !== A && b !== P ? (v.mode = "relative", v.anchors = [b, x]) : (v.mode = "absolute", b === P ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * Me))
                        }
                    } else h = !0; else c = m.value; else u = "off" !== m.value; else if (a = e.querySelector(m.value), null === a)throw'Unable to find anchor target "' + m.value + '"'
                }
                if (l.length) {
                    var w, T, S;
                    !s && k in o ? (S = o[k], w = ae[S].styleAttr, T = ae[S].classAttr) : (S = o[k] = qe++, w = o.style.cssText, T = Ee(o)), ae[S] = {
                        element: o,
                        styleAttr: w,
                        classAttr: T,
                        anchorTarget: a,
                        keyFrames: l,
                        smoothScrolling: u,
                        edgeStrategy: c,
                        emitEvents: h,
                        lastFrameIndex: -1
                    }, Fe(o, [f], [])
                }
            }
        }
        for (Ce(), n = 0, r = t.length; r > n; n++) {
            var C = ae[t[n][k]];
            C !== i && (Q(C), te(C))
        }
        return oe
    }, n.prototype.relativeToAbsolute = function (t, e, i) {
        var n = r.clientHeight, s = t.getBoundingClientRect(), o = s.top, a = s.bottom - s.top;
        return e === F ? o -= n : e === E && (o -= n / 2), i === F ? o += a : i === E && (o += a / 2), o += oe.getScrollTop(), 0 | o + .5
    }, n.prototype.animateTo = function (t, e) {
        e = e || {};
        var n = Le(), r = oe.getScrollTop();
        return pe = {
            startTop: r,
            topDiff: t - r,
            targetTop: t,
            duration: e.duration || T,
            startTime: n,
            endTime: n + (e.duration || T),
            easing: Z[e.easing || w],
            done: e.done
        }, pe.topDiff || (pe.done && pe.done.call(oe, !1), pe = i), oe
    }, n.prototype.stopAnimateTo = function () {
        pe && pe.done && pe.done.call(oe, !0), pe = i
    }, n.prototype.isAnimatingTo = function () {
        return !!pe
    }, n.prototype.isMobile = function () {
        return We
    }, n.prototype.setScrollTop = function (e, i) {
        return ve = i === !0, We ? Xe = l.min(l.max(e, 0), Re) : t.scrollTo(0, e), oe
    }, n.prototype.getScrollTop = function () {
        return We ? Xe : t.pageYOffset || r.scrollTop || s.scrollTop || 0
    }, n.prototype.getMaxScrollTop = function () {
        return Re
    }, n.prototype.on = function (t, e) {
        return ue[t] = e, oe
    }, n.prototype.off = function (t) {
        return delete ue[t], oe
    }, n.prototype.destroy = function () {
        var t = Y();
        t(be), Te(), Fe(r, [_], [y, b, x]);
        for (var e = 0, n = ae.length; n > e; e++)re(ae[e].element);
        r.style.overflow = s.style.overflow = "", r.style.height = s.style.height = "", le && o.setStyle(le, "transform", "none"), oe = i, le = i, ue = i, ce = i, Re = 0, Me = 1, he = i, de = i, Oe = "down", ze = -1, je = 0, He = 0, Be = !1, pe = i, fe = i, me = i, ge = i, ve = i, qe = 0, ye = i, We = !1, Xe = 0, _e = i
    };
    var U = function () {
        var n, o, a, u, f, m, g, v, y, _, b, x;
        xe(r, [c, h, d, p].join(" "), function (t) {
            var r = t.changedTouches[0];
            for (u = t.target; 3 === u.nodeType;)u = u.parentNode;
            switch (f = r.clientY, m = r.clientX, _ = t.timeStamp, D.test(u.tagName) || t.preventDefault(), t.type) {
                case c:
                    n && n.blur(), oe.stopAnimateTo(), n = u, o = g = f, a = m, y = _;
                    break;
                case h:
                    D.test(u.tagName) && e.activeElement !== u && t.preventDefault(), v = f - g, x = _ - b, oe.setScrollTop(Xe - v, !0), g = f, b = _;
                    break;
                default:
                case d:
                case p:
                    var s = o - f, w = a - m, T = w * w + s * s;
                    if (49 > T) {
                        if (!D.test(n.tagName)) {
                            n.focus();
                            var S = e.createEvent("MouseEvents");
                            S.initMouseEvent("click", !0, !0, t.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), n.dispatchEvent(S)
                        }
                        return
                    }
                    n = i;
                    var C = v / x;
                    C = l.max(l.min(C, 3), -3);
                    var A = l.abs(C / de), P = C * A + .5 * de * A * A, E = oe.getScrollTop() - P, F = 0;
                    E > Re ? (F = (Re - E) / P, E = Re) : 0 > E && (F = -E / P, E = 0), A *= 1 - F, oe.animateTo(0 | E + .5, {
                        easing: "outCubic",
                        duration: A
                    })
            }
        }), t.scrollTo(0, 0), r.style.overflow = s.style.overflow = "hidden"
    }, V = function () {
        var t, e, i, n, s, o, a, u, c, h, d, p = r.clientHeight, f = Ae();
        for (u = 0, c = ae.length; c > u; u++)for (t = ae[u], e = t.element, i = t.anchorTarget, n = t.keyFrames, s = 0, o = n.length; o > s; s++)a = n[s], h = a.offset, d = f[a.constant] || 0, a.frame = h, a.isPercentage && (h *= p, a.frame = h), "relative" === a.mode && (re(e), a.frame = oe.relativeToAbsolute(i, a.anchors[0], a.anchors[1]) - h, re(e, !0)), a.frame += d, ce && !a.isEnd && a.frame > Re && (Re = a.frame);
        for (Re = l.max(Re, Pe()), u = 0, c = ae.length; c > u; u++) {
            for (t = ae[u], n = t.keyFrames, s = 0, o = n.length; o > s; s++)a = n[s], d = f[a.constant] || 0, a.isEnd && (a.frame = Re - a.offset + d);
            t.keyFrames.sort(Ie)
        }
    }, G = function (t, e) {
        for (var i = 0, n = ae.length; n > i; i++) {
            var r, s, l = ae[i], u = l.element, c = l.smoothScrolling ? t : e, h = l.keyFrames, d = h.length, p = h[0], y = h[h.length - 1], _ = p.frame > c, b = c > y.frame, x = _ ? p : y, w = l.emitEvents, T = l.lastFrameIndex;
            if (_ || b) {
                if (_ && -1 === l.edge || b && 1 === l.edge)continue;
                switch (_ ? (Fe(u, [m], [v, g]), w && T > -1 && (Se(u, p.eventType, Oe), l.lastFrameIndex = -1)) : (Fe(u, [v], [m, g]), w && d > T && (Se(u, y.eventType, Oe), l.lastFrameIndex = d)), l.edge = _ ? -1 : 1, l.edgeStrategy) {
                    case"reset":
                        re(u);
                        continue;
                    case"ease":
                        c = x.frame;
                        break;
                    default:
                    case"set":
                        var S = x.props;
                        for (r in S)a.call(S, r) && (s = ne(S[r].value), 0 === r.indexOf("@") ? u.setAttribute(r.substr(1), s) : o.setStyle(u, r, s));
                        continue
                }
            } else 0 !== l.edge && (Fe(u, [f, g], [m, v]), l.edge = 0);
            for (var C = 0; d - 1 > C; C++)if (c >= h[C].frame && h[C + 1].frame >= c) {
                var A = h[C], P = h[C + 1];
                for (r in A.props)if (a.call(A.props, r)) {
                    var E = (c - A.frame) / (P.frame - A.frame);
                    E = A.props[r].easing(E), s = ie(A.props[r].value, P.props[r].value, E), s = ne(s), 0 === r.indexOf("@") ? u.setAttribute(r.substr(1), s) : o.setStyle(u, r, s)
                }
                w && T !== C && ("down" === Oe ? Se(u, A.eventType, Oe) : Se(u, P.eventType, Oe), l.lastFrameIndex = C);
                break
            }
        }
    }, K = function () {
        Be && (Be = !1, Ce());
        var t, e, n = oe.getScrollTop(), r = Le();
        if (pe)r >= pe.endTime ? (n = pe.targetTop, t = pe.done, pe = i) : (e = pe.easing((r - pe.startTime) / pe.duration), n = 0 | pe.startTop + e * pe.topDiff), oe.setScrollTop(n, !0); else if (!ve) {
            var s = ge.targetTop - n;
            s && (ge = {
                startTop: ze,
                topDiff: n - ze,
                targetTop: n,
                startTime: Ne,
                endTime: Ne + me
            }), ge.endTime >= r && (e = Z.sqrt((r - ge.startTime) / me), n = 0 | ge.startTop + e * ge.topDiff)
        }
        if (We && le && o.setStyle(le, "transform", "translate(0, " + -Xe + "px) " + _e), ve || ze !== n) {
            Oe = n > ze ? "down" : ze > n ? "up" : Oe, ve = !1;
            var a = {
                curTop: n,
                lastTop: ze,
                maxTop: Re,
                direction: Oe
            }, l = ue.beforerender && ue.beforerender.call(oe, a);
            l !== !1 && (G(n, oe.getScrollTop()), ze = n, ue.render && ue.render.call(oe, a)), t && t.call(oe, !1)
        }
        Ne = r
    }, Q = function (t) {
        for (var e = 0, i = t.keyFrames.length; i > e; e++) {
            for (var n, r, s, o, a = t.keyFrames[e], l = {}; null !== (o = R.exec(a.props));)s = o[1], r = o[2], n = s.match(M), null !== n ? (s = n[1], n = n[2]) : n = w, r = r.indexOf("!") ? J(r) : [r.slice(1)], l[s] = {
                value: r,
                easing: Z[n]
            };
            a.props = l
        }
    }, J = function (t) {
        var e = [];
        return H.lastIndex = 0, t = t.replace(H, function (t) {
            return t.replace(N, function (t) {
                return 100 * (t / 255) + "%"
            })
        }), W && (B.lastIndex = 0, t = t.replace(B, function (t) {
            return W + t
        })), t = t.replace(N, function (t) {
            return e.push(+t), "{?}"
        }), e.unshift(t), e
    }, te = function (t) {
        var e, i, n = {};
        for (e = 0, i = t.keyFrames.length; i > e; e++)ee(t.keyFrames[e], n);
        for (n = {}, e = t.keyFrames.length - 1; e >= 0; e--)ee(t.keyFrames[e], n)
    }, ee = function (t, e) {
        var i;
        for (i in e)a.call(t.props, i) || (t.props[i] = e[i]);
        for (i in t.props)e[i] = t.props[i]
    }, ie = function (t, e, i) {
        var n, r = t.length;
        if (r !== e.length)throw"Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"';
        var s = [t[0]];
        for (n = 1; r > n; n++)s[n] = t[n] + (e[n] - t[n]) * i;
        return s
    }, ne = function (t) {
        var e = 1;
        return j.lastIndex = 0, t[0].replace(j, function () {
            return t[e++]
        })
    }, re = function (t, e) {
        t = [].concat(t);
        for (var i, n, r = 0, s = t.length; s > r; r++)n = t[r], i = ae[n[k]], i && (e ? (n.style.cssText = i.dirtyStyleAttr, Fe(n, i.dirtyClassAttr)) : (i.dirtyStyleAttr = n.style.cssText, i.dirtyClassAttr = Ee(n), n.style.cssText = i.styleAttr, Fe(n, i.classAttr)))
    }, se = function () {
        _e = "translateZ(0)", o.setStyle(le, "transform", _e);
        var t = u(le), e = t.getPropertyValue("transform"), i = t.getPropertyValue(W + "transform"), n = e && "none" !== e || i && "none" !== i;
        n || (_e = "")
    };
    o.setStyle = function (t, e, i) {
        var n = t.style;
        if (e = e.replace(O, z).replace("-", ""), "zIndex" === e)n[e] = isNaN(i) ? i : "" + (0 | i); else if ("float" === e)n.styleFloat = n.cssFloat = i; else try {
            q && (n[q + e.slice(0, 1).toUpperCase() + e.slice(1)] = i), n[e] = i
        } catch (r) {
        }
    };
    var oe, ae, le, ue, ce, he, de, pe, fe, me, ge, ve, ye, _e, be, xe = o.addEvent = function (e, i, n) {
        var r = function (e) {
            return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function () {
                e.returnValue = !1, e.defaultPrevented = !0
            }), n.call(this, e)
        };
        i = i.split(" ");
        for (var s, o = 0, a = i.length; a > o; o++)s = i[o], e.addEventListener ? e.addEventListener(s, n, !1) : e.attachEvent("on" + s, r), $e.push({
            element: e,
            name: s,
            listener: n
        })
    }, we = o.removeEvent = function (t, e, i) {
        e = e.split(" ");
        for (var n = 0, r = e.length; r > n; n++)t.removeEventListener ? t.removeEventListener(e[n], i, !1) : t.detachEvent("on" + e[n], i)
    }, Te = function () {
        for (var t, e = 0, i = $e.length; i > e; e++)t = $e[e], we(t.element, t.name, t.listener);
        $e = []
    }, Se = function (t, e, i) {
        ue.keyframe && ue.keyframe.call(oe, t, e, i)
    }, Ce = function () {
        var t = oe.getScrollTop();
        Re = 0, ce && !We && (s.style.height = ""), V(), ce && !We && (s.style.height = Re + r.clientHeight + "px"), We ? oe.setScrollTop(l.min(oe.getScrollTop(), Re)) : oe.setScrollTop(t, !0), ve = !0
    }, Ae = function () {
        var t, e, i = r.clientHeight, n = {};
        for (t in he)e = he[t], "function" == typeof e ? e = e.call(oe) : /p$/.test(e) && (e = e.slice(0, -1) / 100 * i), n[t] = e;
        return n
    }, Pe = function () {
        var t = le && le.offsetHeight || 0, e = l.max(t, s.scrollHeight, s.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight);
        return e - r.clientHeight
    }, Ee = function (e) {
        var i = "className";
        return t.SVGElement && e instanceof t.SVGElement && (e = e[i], i = "baseVal"), e[i]
    }, Fe = function (e, n, r) {
        var s = "className";
        if (t.SVGElement && e instanceof t.SVGElement && (e = e[s], s = "baseVal"), r === i)return e[s] = n, i;
        for (var o = e[s], a = 0, l = r.length; l > a; a++)o = De(o).replace(De(r[a]), " ");
        o = ke(o);
        for (var u = 0, c = n.length; c > u; u++)-1 === De(o).indexOf(De(n[u])) && (o += " " + n[u]);
        e[s] = ke(o)
    }, ke = function (t) {
        return t.replace(L, "")
    }, De = function (t) {
        return " " + t + " "
    }, Le = Date.now || function () {
            return +new Date
        }, Ie = function (t, e) {
        return t.frame - e.frame
    }, Re = 0, Me = 1, Oe = "down", ze = -1, Ne = Le(), je = 0, He = 0, Be = !1, qe = 0, We = !1, Xe = 0, $e = [];
    "function" == typeof define && define.amd ? define("skrollr", function () {
        return o
    }) : "undefined" != typeof module && module.exports ? module.exports = o : t.skrollr = o
}(window, document), function (t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function r(e, i) {
            t.fn[e] = function (r) {
                if ("string" == typeof r) {
                    for (var o = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a], c = t.data(u, e);
                        if (c)if (t.isFunction(c[r]) && "_" !== r.charAt(0)) {
                            var h = c[r].apply(c, o);
                            if (void 0 !== h)return h
                        } else s("no such method '" + r + "' for " + e + " instance"); else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var n = t.data(this, e);
                    n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                })
            }
        }

        if (t) {
            var s = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), r(t, e)
            }, t.bridget
        }
    }

    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
}(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function () {
    };
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var r = function () {
    };
    i.removeEventListener ? r = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (r = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var s = {bind: n, unbind: r};
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
}(this), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var n = 0, o = s.length; o > n; n++) {
                var a = s[n];
                a()
            }
        }
    }

    function n(n) {
        return n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], n)) : t.docReady = n(t.eventie)
}(this), function () {
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;)if (t[i].listener === e)return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, r = this, s = r.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n)n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, r = this.getListenersAsObject(t), s = "object" == typeof i;
        for (n in r)r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(s ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1)this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, r, s = this.getListenersAsObject(t);
        for (r in s)s.hasOwnProperty(r) && (n = e(s[r], i), -1 !== n && s[r].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, r, s = t ? this.removeListener : this.addListener, o = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)for (n = i.length; n--;)s.call(this, e, i[n]); else for (n in e)e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? s.call(this, n, r) : o.call(this, n, r));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i)delete n[t]; else if (t instanceof RegExp)for (e in n)n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, r, s, o = this.getListenersAsObject(t);
        for (r in o)if (o.hasOwnProperty(r))for (n = o[r].length; n--;)i = o[r][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return r.EventEmitter = s, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t])return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, r = 0, s = i.length; s > r; r++)if (e = i[r] + t, "string" == typeof n[e])return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = o.length; i > e; e++) {
            var n = o[e];
            t[n] = 0
        }
        return t
    }

    function n(t) {
        function n(t) {
            if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var n = s(t);
                if ("none" === n.display)return i();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var c = r.isBorderBox = !(!u || !n[u] || "border-box" !== n[u]), h = 0, d = o.length; d > h; h++) {
                    var p = o[h], f = n[p];
                    f = a(t, f);
                    var m = parseFloat(f);
                    r[p] = isNaN(m) ? 0 : m
                }
                var g = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom, y = r.marginLeft + r.marginRight, _ = r.marginTop + r.marginBottom, b = r.borderLeftWidth + r.borderRightWidth, x = r.borderTopWidth + r.borderBottomWidth, w = c && l, T = e(n.width);
                T !== !1 && (r.width = T + (w ? 0 : g + b));
                var S = e(n.height);
                return S !== !1 && (r.height = S + (w ? 0 : v + x)), r.innerWidth = r.width - (g + b), r.innerHeight = r.height - (v + x), r.outerWidth = r.width + y, r.outerHeight = r.height + _, r
            }
        }

        function a(t, e) {
            if (r || -1 === e.indexOf("%"))return e;
            var i = t.style, n = i.left, s = t.runtimeStyle, o = s && s.left;
            return o && (s.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = n, o && (s.left = o), e
        }

        var l, u = t("boxSizing");
        return function () {
            if (u) {
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[u] = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var n = s(t);
                l = 200 === e(n.width), i.removeChild(t)
            }
        }(), n
    }

    var r = t.getComputedStyle, s = r ? function (t) {
        return r(t, null)
    } : function (t) {
        return t.currentStyle
    }, o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("get-style-property")) : t.getSize = n(t.getStyleProperty)
}(window), function (t, e) {
    function i(t, e) {
        return t[a](e)
    }

    function n(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function r(t, e) {
        n(t);
        for (var i = t.parentNode.querySelectorAll(e), r = 0, s = i.length; s > r; r++)if (i[r] === t)return !0;
        return !1
    }

    function s(t, e) {
        return n(t), i(t, e)
    }

    var o, a = function () {
        if (e.matchesSelector)return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0, n = t.length; n > i; i++) {
            var r = t[i], s = r + "MatchesSelector";
            if (e[s])return s
        }
    }();
    if (a) {
        var l = document.createElement("div"), u = i(l, "div");
        o = u ? i : s
    } else o = r;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return o
    }) : window.matchesSelector = o
}(this, Element.prototype), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t) {
        for (var e in t)return !1;
        return e = null, !0
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    function r(t, r, s) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
        }

        var l = s("transition"), u = s("transform"), c = l && u, h = !!s("perspective"), d = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[l], p = ["transform", "transition", "transitionDuration", "transitionProperty"], f = function () {
            for (var t = {}, e = 0, i = p.length; i > e; e++) {
                var n = p[e], r = s(n);
                r && r !== n && (t[n] = r)
            }
            return t
        }();
        e(a.prototype, t.prototype), a.prototype._create = function () {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function () {
            this.size = r(this.element)
        }, a.prototype.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var n = f[i] || i;
                e[n] = t[i]
            }
        }, a.prototype.getPosition = function () {
            var t = o(this.element), e = this.layout.options, i = e.isOriginLeft, n = e.isOriginTop, r = parseInt(t[i ? "left" : "right"], 10), s = parseInt(t[n ? "top" : "bottom"], 10);
            r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s;
            var a = this.layout.size;
            r -= i ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
        }, a.prototype.layoutPosition = function () {
            var t = this.layout.size, e = this.layout.options, i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
        };
        var m = h ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function (t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x, n = this.position.y, r = parseInt(t, 10), s = parseInt(e, 10), o = r === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), o && !this.isTransitioning)return this.layoutPosition(), void 0;
            var a = t - i, l = e - n, u = {}, c = this.layout.options;
            a = c.isOriginLeft ? a : -a, l = c.isOriginTop ? l : -l, u.transform = m(a, l), this.transition({
                to: u,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = c ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd)e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var g = u && n(u) + ",opacity";
        a.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: g,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(d, this, !1))
        }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var v = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        a.prototype.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn, n = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var r = e.onEnd[n];
                    r.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function (t) {
            var e = {};
            for (var i in t)e[i] = "";
            this.css(e)
        };
        var y = {transitionProperty: "", transitionDuration: ""};
        return a.prototype.removeTransitionStyles = function () {
            this.css(y)
        }, a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function () {
            if (!l || !parseFloat(this.layout.options.transitionDuration))return this.removeElem(), void 0;
            var t = this;
            this.on("transitionEnd", function () {
                return t.removeElem(), !0
            }), this.hide()
        }, a.prototype.reveal = function () {
            delete this.isHidden, this.css({display: ""});
            var t = this.layout.options;
            this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
        }, a.prototype.hide = function () {
            this.isHidden = !0, this.css({display: ""});
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({display: "none"})
                    }
                }
            })
        }, a.prototype.destroy = function () {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, a
    }

    var s = t.getComputedStyle, o = s ? function (t) {
        return s(t, null)
    } : function (t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], r) : (t.Outlayer = {}, t.Outlayer.Item = r(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t) {
        return "[object Array]" === h.call(t)
    }

    function n(t) {
        var e = [];
        if (i(t))e = t; else if (t && "number" == typeof t.length)for (var n = 0, r = t.length; r > n; n++)e.push(t[n]); else e.push(t);
        return e
    }

    function r(t, e) {
        var i = p(e, t);
        -1 !== i && e.splice(i, 1)
    }

    function s(t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }

    function o(i, o, h, p, f, m) {
        function g(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t))return l && l.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
            var n = ++v;
            this.element.outlayerGUID = n, y[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var v = 0, y = {};
        return g.namespace = "outlayer", g.Item = m, g.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
        }, e(g.prototype, h.prototype), g.prototype.option = function (t) {
            e(this.options, t)
        }, g.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0, s = e.length; s > r; r++) {
                var o = e[r], a = new i(o, this);
                n.push(a)
            }
            return n
        }, g.prototype._filterFindItemElements = function (t) {
            t = n(t);
            for (var e = this.options.itemSelector, i = [], r = 0, s = t.length; s > r; r++) {
                var o = t[r];
                if (d(o))if (e) {
                    f(o, e) && i.push(o);
                    for (var a = o.querySelectorAll(e), l = 0, u = a.length; u > l; l++)i.push(a[l])
                } else i.push(o)
            }
            return i
        }, g.prototype.getItemElements = function () {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)t.push(this.items[e].element);
            return t
        }, g.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
            this.getSize()
        }, g.prototype.getSize = function () {
            this.size = p(this.element)
        }, g.prototype._getMeasurement = function (t, e) {
            var i, n = this.options[t];
            n ? ("string" == typeof n ? i = this.element.querySelector(n) : d(n) && (i = n), this[t] = i ? p(i)[e] : n) : this[t] = 0
        }, g.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, g.prototype._getItemsForLayout = function (t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                r.isIgnored || e.push(r)
            }
            return e
        }, g.prototype._layoutItems = function (t, e) {
            function i() {
                n.emitEvent("layoutComplete", [n, t])
            }

            var n = this;
            if (!t || !t.length)return i(), void 0;
            this._itemsOn(t, "layout", i);
            for (var r = [], s = 0, o = t.length; o > s; s++) {
                var a = t[s], l = this._getItemLayoutPosition(a);
                l.item = a, l.isInstant = e || a.isLayoutInstant, r.push(l)
            }
            this._processLayoutQueue(r)
        }, g.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, g.prototype._processLayoutQueue = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, g.prototype._positionItem = function (t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, g.prototype._postLayout = function () {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, g.prototype._getContainerSize = c, g.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, g.prototype._itemsOn = function (t, e, i) {
            function n() {
                return r++, r === s && i.call(o), !0
            }

            for (var r = 0, s = t.length, o = this, a = 0, l = t.length; l > a; a++) {
                var u = t[a];
                u.on(e, n)
            }
        }, g.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, g.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, g.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, g.prototype.unstamp = function (t) {
            if (t = this._find(t))for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                r(n, this.stamps), this.unignore(n)
            }
        }, g.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
        }, g.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, g.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, g.prototype._manageStamp = c, g.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(), i = this._boundingRect, n = p(t), r = {
                left: e.left - i.left - n.marginLeft,
                top: e.top - i.top - n.marginTop,
                right: i.right - e.right - n.marginRight,
                bottom: i.bottom - e.bottom - n.marginBottom
            };
            return r
        }, g.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, g.prototype.bindResize = function () {
            this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function () {
            this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, g.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function () {
            var t = p(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, g.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, g.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, g.prototype.reveal = function (t) {
            var e = t && t.length;
            if (e)for (var i = 0; e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, g.prototype.hide = function (t) {
            var e = t && t.length;
            if (e)for (var i = 0; e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, g.prototype.getItem = function (t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t)return n
            }
        }, g.prototype.getItems = function (t) {
            if (t && t.length) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var r = t[i], s = this.getItem(r);
                    s && e.push(s)
                }
                return e
            }
        }, g.prototype.remove = function (t) {
            t = n(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function () {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, s = e.length; s > i; i++) {
                    var o = e[i];
                    o.remove(), r(o, this.items)
                }
            }
        }, g.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, g.data = function (t) {
            var e = t && t.outlayerGUID;
            return e && y[e]
        }, g.create = function (t, i) {
            function n() {
                g.apply(this, arguments)
            }

            return Object.create ? n.prototype = Object.create(g.prototype) : e(n.prototype, g.prototype), n.prototype.constructor = n, n.defaults = e({}, g.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = g.data, n.Item = function () {
                m.apply(this, arguments)
            }, n.Item.prototype = new m, o(function () {
                for (var e = s(t), i = a.querySelectorAll(".js-" + e), r = "data-" + e + "-options", o = 0, c = i.length; c > o; o++) {
                    var h, d = i[o], p = d.getAttribute(r);
                    try {
                        h = p && JSON.parse(p)
                    } catch (f) {
                        l && l.error("Error parsing " + r + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + f);
                        continue
                    }
                    var m = new n(d, h);
                    u && u.data(d, t, m)
                }
            }), u && u.bridget && u.bridget(t, n), n
        }, g.Item = m, g
    }

    var a = t.document, l = t.console, u = t.jQuery, c = function () {
    }, h = Object.prototype.toString, d = "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, p = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], o) : t.Outlayer = o(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function (t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }

        e.prototype = new t.Item, e.prototype._create = function () {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData, e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function () {
            i.apply(this, arguments), this.css({display: ""})
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }

        return function () {
            function t(t) {
                return function () {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }

            for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], r = 0, s = n.length; s > r; r++) {
                var o = n[r];
                i.prototype[o] = t(o)
            }
        }(), i.prototype.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element), i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function (t, e) {
            var i = t + e, n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var r = this.getFirstItemSize();
                this[i] = r && r[n] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function (t, e) {
            function n() {
                i.apply(this, arguments)
            }

            return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function (t) {
    function e(t, e) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;)this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, n.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth, n = e && 1 > e ? "round" : "ceil", r = Math[n](t.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (var s = this._getColGroup(r), o = Math.min.apply(Math, s), a = i(s, o), l = {
                x: this.columnWidth * a,
                y: o
            }, u = o + t.size.outerHeight, c = this.cols + 1 - s.length, h = 0; c > h; h++)this.colYs[a + h] = u;
            return l
        }, n.prototype._getColGroup = function (t) {
            if (2 > t)return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var r = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function (t) {
            var i = e(t), n = this._getElementOffset(t), r = this.options.isOriginLeft ? n.left : n.right, s = r + i.outerWidth, o = Math.floor(r / this.columnWidth);
            o = Math.max(0, o);
            var a = Math.floor(s / this.columnWidth);
            a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = o; a >= u; u++)this.colYs[u] = Math.max(l, this.colYs[u])
        }, n.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {height: this.maxY};
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }

    var i = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) {
            var r = t[i];
            if (r === e)return i
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t, i) {
        var n = t.create("masonry"), r = n.prototype._getElementOffset, s = n.prototype.layout, o = n.prototype._getMeasurement;
        e(n.prototype, i.prototype), n.prototype._getElementOffset = r, n.prototype.layout = s, n.prototype._getMeasurement = o;
        var a = n.prototype.measureColumns;
        n.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var l = n.prototype._manageStamp;
        return n.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, n
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function (t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var e = {x: this.x, y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
        }, e.prototype._getContainerSize = function () {
            return {height: this.maxY}
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t) {
        var e = t.create("vertical", {horizontalAlignment: 0});
        return e.prototype._resetLayout = function () {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
            return this.y += t.size.outerHeight, {x: e, y: i}
        }, e.prototype._getContainerSize = function () {
            return {height: this.y}
        }, e
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t) {
        return "[object Array]" === c.call(t)
    }

    function n(t) {
        var e = [];
        if (i(t))e = t; else if (t && "number" == typeof t.length)for (var n = 0, r = t.length; r > n; n++)e.push(t[n]); else e.push(t);
        return e
    }

    function r(t, e) {
        var i = h(e, t);
        -1 !== i && e.splice(i, 1)
    }

    function s(t, i, s, l, c) {
        function h(t, e) {
            return function (i, n) {
                for (var r = 0, s = t.length; s > r; r++) {
                    var o = t[r], a = i.sortData[o], l = n.sortData[o];
                    if (a > l || l > a) {
                        var u = void 0 !== e[o] ? e[o] : e, c = u ? 1 : -1;
                        return (a > l ? 1 : -1) * c
                    }
                }
                return 0
            }
        }

        var d = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
        d.Item = l, d.LayoutMode = c, d.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in c.modes)this._initLayoutMode(e)
        }, d.prototype.reloadItems = function () {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, d.prototype._itemize = function () {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, n = e.length; n > i; i++) {
                var r = e[i];
                r.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, d.prototype._initLayoutMode = function (t) {
            var i = c.modes[t], n = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, n) : n, this.modes[t] = new i(this)
        }, d.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, d.prototype._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.prototype.arrange = function (t) {
            this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function () {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, d.prototype._filter = function (t) {
            function e() {
                h.reveal(r), h.hide(s)
            }

            var i = this.options.filter;
            i = i || "*";
            for (var n = [], r = [], s = [], o = this._getFilterTest(i), a = 0, l = t.length; l > a; a++) {
                var u = t[a];
                if (!u.isIgnored) {
                    var c = o(u);
                    c && n.push(u), c && u.isHidden ? r.push(u) : c || u.isHidden || s.push(u)
                }
            }
            var h = this;
            return this._isInstant ? this._noTransition(e) : e(), n
        }, d.prototype._getFilterTest = function (t) {
            return o && this.options.isJQueryFiltering ? function (e) {
                return o(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return s(e.element, t)
            }
        }, d.prototype.updateSortData = function (t) {
            this._getSorters(), t = n(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items, this._updateItemsSortData(e)
        }, d.prototype._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = p(i)
            }
        }, d.prototype._updateItemsSortData = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                n.updateSortData()
            }
        };
        var p = function () {
            function t(t) {
                if ("string" != typeof t)return t;
                var i = a(t).split(" "), n = i[0], r = n.match(/^\[(.+)\]$/), s = r && r[1], o = e(s, n), l = d.sortDataParsers[i[1]];
                return t = l ? function (t) {
                    return t && l(o(t))
                } : function (t) {
                    return t && o(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function (e) {
                    return e.getAttribute(t)
                } : function (t) {
                    var i = t.querySelector(e);
                    return i && u(i)
                }
            }

            return t
        }();
        d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            }, parseFloat: function (t) {
                return parseFloat(t)
            }
        }, d.prototype._sort = function () {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory), i = h(e, this.options.sortAscending);
                this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d.prototype._mode = function () {
            var t = this.options.layoutMode, e = this.modes[t];
            if (!e)throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d.prototype._resetLayout = function () {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d.prototype._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d.prototype._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, d.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, d.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, d.prototype.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                var n = this._filterRevealAdded(e);
                this.layoutItems(i), this.filteredItems = n.concat(this.filteredItems)
            }
        }, d.prototype._filterRevealAdded = function (t) {
            var e = this._noTransition(function () {
                return this._filter(t)
            });
            return this.layoutItems(e, !0), this.reveal(e), t
        }, d.prototype.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, r = e.length;
                for (i = 0; r > i; i++)n = e[i], this.element.appendChild(n.element);
                var s = this._filter(e);
                for (this._noTransition(function () {
                    this.hide(s)
                }), i = 0; r > i; i++)e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; r > i; i++)delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
        var f = d.prototype.remove;
        return d.prototype.remove = function (t) {
            t = n(t);
            var e = this.getItems(t);
            if (f.call(this, t), e && e.length)for (var i = 0, s = e.length; s > i; i++) {
                var o = e[i];
                r(o, this.filteredItems)
            }
        }, d.prototype.shuffle = function () {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function (t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, d.prototype.getFilteredItemElements = function () {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)t.push(this.filteredItems[e].element);
            return t
        }, d
    }

    var o = t.jQuery, a = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, l = document.documentElement, u = l.textContent ? function (t) {
        return t.textContent
    } : function (t) {
        return t.innerText
    }, c = Object.prototype.toString, h = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i;
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], s) : t.Isotope = s(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window), !function (t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? s : r;
        i(t, e)
    }

    var n, r, s;
    "classList" in document.documentElement ? (n = function (t, e) {
        return t.classList.contains(e)
    }, r = function (t, e) {
        t.classList.add(e)
    }, s = function (t, e) {
        t.classList.remove(e)
    }) : (n = function (t, i) {
        return e(i).test(t.className)
    }, r = function (t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, s = function (t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var o = {hasClass: n, addClass: r, removeClass: s, toggleClass: i, has: n, add: r, remove: s, toggle: i};
    "function" == typeof define && define.amd ? define("classie/classie", o) : "object" == typeof exports ? module.exports = o : t.classie = o
}(window), function (t) {
    function e() {
        function t(e) {
            for (var i in t.defaults)this[i] = t.defaults[i];
            for (i in e)this[i] = e[i]
        }

        return i.Rect = t, t.defaults = {x: 0, y: 0, width: 0, height: 0}, t.prototype.contains = function (t) {
            var e = t.width || 0, i = t.height || 0;
            return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
        }, t.prototype.overlaps = function (t) {
            var e = this.x + this.width, i = this.y + this.height, n = t.x + t.width, r = t.y + t.height;
            return this.x < n && e > t.x && this.y < r && i > t.y
        }, t.prototype.getMaximalFreeRects = function (e) {
            if (!this.overlaps(e))return !1;
            var i, n = [], r = this.x + this.width, s = this.y + this.height, o = e.x + e.width, a = e.y + e.height;
            return this.y < e.y && (i = new t({
                x: this.x,
                y: this.y,
                width: this.width,
                height: e.y - this.y
            }), n.push(i)), r > o && (i = new t({
                x: o,
                y: this.y,
                width: r - o,
                height: this.height
            }), n.push(i)), s > a && (i = new t({
                x: this.x,
                y: a,
                width: this.width,
                height: s - a
            }), n.push(i)), this.x < e.x && (i = new t({
                x: this.x,
                y: this.y,
                width: e.x - this.x,
                height: this.height
            }), n.push(i)), n
        }, t.prototype.canFit = function (t) {
            return this.width >= t.width && this.height >= t.height
        }, t
    }

    var i = t.Packery = function () {
    };
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
}(window), function (t) {
    function e(t) {
        function e(t, e, i) {
            this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
        }

        e.prototype.reset = function () {
            this.spaces = [], this.newSpaces = [];
            var e = new t({x: 0, y: 0, width: this.width, height: this.height});
            this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
        }, e.prototype.pack = function (t) {
            for (var e = 0, i = this.spaces.length; i > e; e++) {
                var n = this.spaces[e];
                if (n.canFit(t)) {
                    this.placeInSpace(t, n);
                    break
                }
            }
        }, e.prototype.placeInSpace = function (t, e) {
            t.x = e.x, t.y = e.y, this.placed(t)
        }, e.prototype.placed = function (t) {
            for (var i = [], n = 0, r = this.spaces.length; r > n; n++) {
                var s = this.spaces[n], o = s.getMaximalFreeRects(t);
                o ? i.push.apply(i, o) : i.push(s)
            }
            this.spaces = i, e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, e.mergeRects = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                if (n) {
                    var r = t.slice(0);
                    r.splice(e, 1);
                    for (var s = 0, o = 0, a = r.length; a > o; o++) {
                        var l = r[o], u = e > o ? 0 : 1;
                        n.contains(l) && (t.splice(o + u - s, 1), s++)
                    }
                }
            }
            return t
        };
        var i = {
            downwardLeftToRight: function (t, e) {
                return t.y - e.y || t.x - e.x
            }, rightwardTopToBottom: function (t, e) {
                return t.x - e.x || t.y - e.y
            }
        };
        return e
    }

    if ("function" == typeof define && define.amd)define("packery/js/packer", ["./rect"], e); else {
        var i = t.Packery = t.Packery || {};
        i.Packer = e(i.Rect)
    }
}(window), function (t) {
    function e(t, e, i) {
        var n = t("transform"), r = function () {
            e.Item.apply(this, arguments)
        };
        r.prototype = new e.Item;
        var s = r.prototype._create;
        return r.prototype._create = function () {
            s.call(this), this.rect = new i, this.placeRect = new i
        }, r.prototype.dragStart = function () {
            this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
        }, r.prototype.dragMove = function (t, e) {
            this.didDrag = !0;
            var i = this.layout.size;
            t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
        }, r.prototype.dragStop = function () {
            this.getPosition();
            var t = this.position.x !== this.placeRect.x, e = this.position.y !== this.placeRect.y;
            this.needsPositioning = t || e, this.didDrag = !1
        }, r.prototype.positionPlaceRect = function (t, e, i) {
            this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i)
        }, r.prototype.getPlaceRectCoord = function (t, e, i) {
            var n = e ? "Width" : "Height", r = this.size["outer" + n], s = this.layout[e ? "columnWidth" : "rowHeight"], o = this.layout.size["inner" + n];
            e || (o = Math.max(o, this.layout.maxY), this.layout.rowHeight || (o -= this.layout.gutter));
            var a;
            if (s) {
                s += this.layout.gutter, o += e ? this.layout.gutter : 0, t = Math.round(t / s);
                var l;
                l = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
                var u = Math[l](o / s);
                u -= Math.ceil(r / s), a = u
            } else a = o - r;
            return t = i ? t : Math.min(t, a), t *= s || 1, Math.max(0, t)
        }, r.prototype.copyPlaceRectPosition = function () {
            this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
        }, r
    }

    "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
}(window), function (t) {
    function e(t, e, i, n, r, s) {
        function o(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x
        }

        function a(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y
        }

        var l = i.create("packery");
        return l.Item = s, l.prototype._create = function () {
            i.prototype._create.call(this), this.packer = new r, this.stamp(this.options.stamped);
            var t = this;
            this.handleDraggabilly = {
                dragStart: function (e) {
                    t.itemDragStart(e.element)
                }, dragMove: function (e) {
                    t.itemDragMove(e.element, e.position.x, e.position.y)
                }, dragEnd: function (e) {
                    t.itemDragEnd(e.element)
                }
            }, this.handleUIDraggable = {
                start: function (e) {
                    t.itemDragStart(e.currentTarget)
                }, drag: function (e, i) {
                    t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
                }, stop: function (e) {
                    t.itemDragEnd(e.currentTarget)
                }
            }
        }, l.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurements();
            var t = this.packer;
            this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
        }, l.prototype._getMeasurements = function () {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, l.prototype._getItemLayoutPosition = function (t) {
            return this._packItem(t), t.rect
        }, l.prototype._packItem = function (t) {
            this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect)
        }, l.prototype._setMaxXY = function (t) {
            this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
        }, l.prototype._setRectSize = function (t, i) {
            var n = e(t), r = n.outerWidth, s = n.outerHeight, o = this.columnWidth + this.gutter, a = this.rowHeight + this.gutter;
            r = this.columnWidth ? Math.ceil(r / o) * o : r + this.gutter, s = this.rowHeight ? Math.ceil(s / a) * a : s + this.gutter, i.width = Math.min(r, this.packer.width), i.height = Math.min(s, this.packer.height)
        }, l.prototype._getContainerSize = function () {
            return this.options.isHorizontal ? {width: this.maxX - this.gutter} : {height: this.maxY - this.gutter}
        }, l.prototype._manageStamp = function (t) {
            var e, i = this.getItem(t);
            if (i && i.isPlacing)e = i.placeRect; else {
                var r = this._getElementOffset(t);
                e = new n({
                    x: this.options.isOriginLeft ? r.left : r.right,
                    y: this.options.isOriginTop ? r.top : r.bottom
                })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, l.prototype.sortItemsByPosition = function () {
            var t = this.options.isHorizontal ? a : o;
            this.items.sort(t)
        }, l.prototype.fit = function (t, e, i) {
            var n = this.getItem(t);
            n && (this._getMeasurements(), this.stamp(n.element), n.getSize(), n.isPlacing = !0, e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, n.positionPlaceRect(e, i, !0), this._bindFitEvents(n), n.moveTo(n.placeRect.x, n.placeRect.y), this.layout(), this.unstamp(n.element), this.sortItemsByPosition(), n.isPlacing = !1, n.copyPlaceRectPosition())
        }, l.prototype._bindFitEvents = function (t) {
            function e() {
                n++, 2 === n && i.emitEvent("fitComplete", [i, t])
            }

            var i = this, n = 0;
            t.on("layout", function () {
                return e(), !0
            }), this.on("layoutComplete", function () {
                return e(), !0
            })
        }, l.prototype.resize = function () {
            var t = e(this.element), i = this.size && t, n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            i && t[n] === this.size[n] || this.layout()
        }, l.prototype.itemDragStart = function (t) {
            this.stamp(t);
            var e = this.getItem(t);
            e && e.dragStart()
        }, l.prototype.itemDragMove = function (t, e, i) {
            function n() {
                s.layout(), delete s.dragTimeout
            }

            var r = this.getItem(t);
            r && r.dragMove(e, i);
            var s = this;
            this.clearDragTimeout(), this.dragTimeout = setTimeout(n, 40)
        }, l.prototype.clearDragTimeout = function () {
            this.dragTimeout && clearTimeout(this.dragTimeout)
        }, l.prototype.itemDragEnd = function (e) {
            var i, n = this.getItem(e);
            if (n && (i = n.didDrag, n.dragStop()), !n || !i && !n.needsPositioning)return void this.unstamp(e);
            t.add(n.element, "is-positioning-post-drag");
            var r = this._getDragEndLayoutComplete(e, n);
            n.needsPositioning ? (n.on("layout", r), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", r), this.layout()
        }, l.prototype._getDragEndLayoutComplete = function (e, i) {
            var n = i && i.needsPositioning, r = 0, s = n ? 2 : 1, o = this;
            return function () {
                return r++, r !== s ? !0 : (i && (t.remove(i.element, "is-positioning-post-drag"), i.isPlacing = !1, i.copyPlaceRectPosition()), o.unstamp(e), o.sortItemsByPosition(), n && o.emitEvent("dragItemPositioned", [o, i]), !0)
            }
        }, l.prototype.bindDraggabillyEvents = function (t) {
            t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
        }, l.prototype.bindUIDraggableEvents = function (t) {
            t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
        }, l.Rect = n, l.Packer = r, l
    }

    "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], e) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}(window), function (t) {
    function e(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function i(t, i, n) {
        var r = t.create("packery"), s = r.prototype._getElementOffset, o = r.prototype._getMeasurement;
        e(r.prototype, i.prototype), r.prototype._getElementOffset = s, r.prototype._getMeasurement = o;
        var a = r.prototype._resetLayout;
        r.prototype._resetLayout = function () {
            this.packer = this.packer || new i.Packer, a.apply(this, arguments)
        };
        var l = r.prototype._getItemLayoutPosition;
        r.prototype._getItemLayoutPosition = function (t) {
            return t.rect = t.rect || new i.Rect, l.call(this, t)
        };
        var u = r.prototype._manageStamp;
        return r.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, r.prototype.needsResizeLayout = function () {
            var t = n(this.element), e = this.size && t, i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            return e && t[i] !== this.size[i]
        }, r
    }

    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], i) : i(t.Isotope.LayoutMode, t.Packery, t.getSize)
}(window), function (t, e) {
    "use strict";
    function i(t, e, i, n, r, s, o) {
        var a;
        if (o = "number" == typeof o ? o : 0, t.css(i, n + s), a = t.width(), a >= e) {
            if (t.css(i, ""), a === e)return {match: "exact", size: parseFloat((parseFloat(n) - .1).toFixed(3))};
            var l = e - o, u = a - e;
            return {
                match: "estimate",
                size: parseFloat((parseFloat(n) - ("word-spacing" === i && o && l > u ? 0 : r)).toFixed(3))
            }
        }
        return a
    }

    function n(t, n, r, s, o) {
        var a = t.clone(!0).addClass("bigtext-cloned").css({
            fontFamily: t.css("font-family"),
            textTransform: t.css("text-transform"),
            wordSpacing: t.css("word-spacing"),
            letterSpacing: t.css("letter-spacing"),
            position: "absolute",
            left: l.DEBUG_MODE ? 0 : -9999,
            top: l.DEBUG_MODE ? 0 : -9999
        }).appendTo(document.body), u = [], c = [], h = [], d = [];
        return n.css("float", "left").each(function () {
            var t, n, a = e(this), c = l.test.noFractionalFontSize ? [8, 4, 1] : [8, 4, 1, .1];
            if (a.hasClass(l.EXEMPT_CLASS))return u.push(null), d.push(null), h.push(!1), void 0;
            var p = 32, f = parseFloat(a.css("font-size")), m = (a.width() / f).toFixed(6);
            n = parseInt(r / m, 10) - p;
            t:for (var g = 0, v = c.length; v > g; g++)e:for (var y = 1, _ = 10; _ >= y; y++) {
                if (n + y * c[g] > s) {
                    n = s;
                    break t
                }
                if (t = i(a, r, "font-size", n + y * c[g], c[g], "px", t), "number" != typeof t) {
                    if (n = t.size, "exact" === t.match)break t;
                    break e
                }
            }
            d.push(r / n), n > s ? (u.push(s), h.push(!1)) : o && o > n ? (u.push(o), h.push(!0)) : (u.push(n), h.push(!1))
        }).each(function (t) {
            var n, s = e(this), o = 0, a = 1;
            if (s.hasClass(l.EXEMPT_CLASS))return c.push(null), void 0;
            s.css("font-size", u[t] + "px");
            for (var h = 1, d = 3; d > h; h += a)if (n = i(s, r, "word-spacing", h, a, "px", n), "number" != typeof n) {
                o = n.size;
                break
            }
            s.css("font-size", ""), c.push(o)
        }).removeAttr("style"), l.DEBUG_MODE ? a.css({"background-color": "rgba(255,255,255,.4)"}) : a.remove(), {
            fontSizes: u,
            wordSpacings: c,
            ratios: d,
            minFontSizes: h
        }
    }

    var r = 0, s = e("head"), o = t.BigText, a = e.fn.bigtext, l = {
        DEBUG_MODE: !1,
        DEFAULT_MIN_FONT_SIZE_PX: null,
        DEFAULT_MAX_FONT_SIZE_PX: 528,
        GLOBAL_STYLE_ID: "bigtext-style",
        STYLE_ID: "bigtext-id",
        LINE_CLASS_PREFIX: "bigtext-line",
        EXEMPT_CLASS: "bigtext-exempt",
        noConflict: function (i) {
            return i && (e.fn.bigtext = a, t.BigText = o), l
        },
        test: {
            noFractionalFontSize: function () {
                if (!("getComputedStyle" in t && "body" in document))return !0;
                var i = e("<div/>").css({
                    position: "absolute",
                    "font-size": "14.1px"
                }).appendTo(document.body).get(0), n = t.getComputedStyle(i, null);
                return n ? "14px" === n.getPropertyValue("font-size") : !0
            }()
        },
        init: function () {
            e("#" + l.GLOBAL_STYLE_ID).length || s.append(l.generateStyleTag(l.GLOBAL_STYLE_ID, [".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }", ".bigtext ." + l.EXEMPT_CLASS + ", .bigtext ." + l.EXEMPT_CLASS + " * { white-space: normal; }"]))
        },
        bindResize: function (i, n) {
            e.throttle ? e(t).unbind(i).bind(i, e.throttle(100, n)) : (e.fn.smartresize && (i = "smartresize." + i), e(t).unbind(i).bind(i, n))
        },
        getStyleId: function (t) {
            return l.STYLE_ID + "-" + t
        },
        generateStyleTag: function (t, i) {
            return e("<style>" + i.join("\n") + "</style>").attr("id", t)
        },
        clearCss: function (t) {
            var i = l.getStyleId(t);
            e("#" + i).remove()
        },
        generateCss: function (t, e, i, n) {
            var r = [];
            l.clearCss(t);
            for (var s = 0, o = e.length; o > s; s++)r.push("#" + t + " ." + l.LINE_CLASS_PREFIX + s + " {" + (n[s] ? " white-space: normal;" : "") + (e[s] ? " font-size: " + e[s] + "px;" : "") + (i[s] ? " word-spacing: " + i[s] + "px;" : "") + "}");
            return l.generateStyleTag(l.getStyleId(t), r)
        },
        jQueryMethod: function (t) {
            return l.init(), t = e.extend({
                minfontsize: l.DEFAULT_MIN_FONT_SIZE_PX,
                maxfontsize: l.DEFAULT_MAX_FONT_SIZE_PX,
                childSelector: "",
                resize: !0
            }, t || {}), this.each(function () {
                var i = e(this).addClass("bigtext"), o = i.width(), a = i.attr("id"), u = t.childSelector ? i.find(t.childSelector) : i.children();
                a || (a = "bigtext-id" + r++, i.attr("id", a)), t.resize && l.bindResize("resize.bigtext-event-" + a, function () {
                    l.jQueryMethod.call(e("#" + a), t)
                }), l.clearCss(a), u.addClass(function (t, e) {
                    return [e.replace(new RegExp("\\b" + l.LINE_CLASS_PREFIX + "\\d+\\b"), ""), l.LINE_CLASS_PREFIX + t].join(" ")
                });
                var c = n(i, u, o, t.maxfontsize, t.minfontsize);
                s.append(l.generateCss(a, c.fontSizes, c.wordSpacings, c.minFontSizes))
            }), this.trigger("bigtext:complete")
        }
    };
    e.fn.bigtext = l.jQueryMethod, t.BigText = l
}(this, jQuery), function (t) {
    "use strict";
    t.fn.fitVids = function (e) {
        var i = {customSelector: null};
        if (!document.getElementById("fit-vids-style")) {
            var n = document.head || document.getElementsByTagName("head")[0], r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}", s = document.createElement("div");
            s.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", n.appendChild(s.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function () {
            var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var n = t(this).find(e.join(","));
            n = n.not("object object"), n.each(function () {
                var e = t(this);
                if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(), n = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10), r = i / n;
                    if (!e.attr("id")) {
                        var s = "fitvid" + Math.floor(999999 * Math.random());
                        e.attr("id", s)
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto), !function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length)return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function (e) {
                function n() {
                    var n;
                    return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1) : !0
                }

                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            var e, i;
            return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function () {
                e = i.element(this) && e
            })), e
        }, removeAttrs: function (e) {
            var i = {}, n = this;
            return t.each(e.split(/\s/), function (t, e) {
                i[e] = n.attr(e), n.removeAttr(e)
            }), i
        }, rules: function (e, i) {
            var n, r, s, o, a, l, u = this[0];
            if (e)switch (n = t.data(u.form, "validator").settings, r = n.rules, s = t.validator.staticRules(u), e) {
                case"add":
                    t.extend(s, t.validator.normalizeRule(i)), delete s.messages, r[u.name] = s, i.messages && (n.messages[u.name] = t.extend(n.messages[u.name], i.messages));
                    break;
                case"remove":
                    return i ? (l = {}, t.each(i.split(/\s/), function (e, i) {
                        l[i] = s[i], delete s[i], "required" === i && t(u).removeAttr("aria-required")
                    }), l) : (delete r[u.name], s)
            }
            return o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u), o.required && (a = o.required, delete o.required, o = t.extend({required: a}, o), t(u).attr("aria-required", "true")), o.remote && (a = o.remote, delete o.remote, o = t.extend(o, {remote: a})), o
        }
    }), t.extend(t.expr[":"], {
        blank: function (e) {
            return !t.trim("" + t(e).val())
        }, filled: function (e) {
            return !!t.trim("" + t(e).val())
        }, unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (e, i, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
            },
            unhighlight: function (e, i, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function e(e) {
                    var i = t.data(this[0].form, "validator"), n = "on" + e.type.replace(/^validate/, ""), r = i.settings;
                    r[n] && !this.is(r.ignore) && r[n].call(i, this[0], e)
                }

                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};
                t.each(this.settings.groups, function (e, i) {
                    "string" == typeof i && (i = i.split(/\s/)), t.each(i, function (t, i) {
                        n[i] = e
                    })
                }), i = this.settings.rules, t.each(i, function (e, n) {
                    i[e] = t.validator.normalizeRule(n)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)this.check(e[t]);
                return this.valid()
            }, element: function (e) {
                var i = this.clean(e), n = this.validationTargetFor(i), r = !0;
                return this.lastElement = n, void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n), this.currentElements = t(n), r = this.check(n) !== !1, r ? delete this.invalid[n.name] : this.invalid[n.name] = !0), t(e).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            }, showErrors: function (e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e)this.errorList.push({message: e[i], element: this.findByName(i)[0]});
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (t) {
                var e, i = 0;
                for (e in t)i++;
                return i
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {
                }
            }, findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                        return t.element.name === e.name
                    }).length && e
            }, elements: function () {
                var e = this, i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            }, clean: function (e) {
                return t(e)[0]
            }, errors: function () {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            }, elementValue: function (e) {
                var i, n = t(e), r = e.type;
                return "radio" === r || "checkbox" === r ? t("input[name='" + e.name + "']:checked").val() : "number" === r && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : n.val() : (i = n.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            }, check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n, r, s = t(e).rules(), o = t.map(s, function (t, e) {
                    return e
                }).length, a = !1, l = this.elementValue(e);
                for (n in s) {
                    r = {method: n, parameters: s[n]};
                    try {
                        if (i = t.validator.methods[n].call(this, l, e, r.parameters), "dependency-mismatch" === i && 1 === o) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === i)return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i)return this.formatAndAdd(e, r), !1
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", u), u
                    }
                }
                return a ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
            }, customDataMessage: function (e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            }, customMessage: function (t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            }, findDefined: function () {
                for (var t = 0; t < arguments.length; t++)if (void 0 !== arguments[t])return arguments[t];
                return void 0
            }, defaultMessage: function (e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            }, formatAndAdd: function (e, i) {
                var n = this.defaultMessage(e, i.method), r = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, i.parameters, e) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                    message: n,
                    element: e,
                    method: i.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            }, addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            }, defaultShowErrors: function () {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++)i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (t = 0; this.successList[t]; t++)this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)for (t = 0, e = this.validElements(); e[t]; t++)this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (e, i) {
                var n, r, s, o = this.errorsFor(e), a = this.idOrName(e), l = t(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (o = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(i || ""), n = o, this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e), o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + a + "']").length && (s = o.attr("id"), l ? l.match(new RegExp("\b" + s + "\b")) || (l += " " + s) : l = s, t(e).attr("aria-describedby", l), r = this.groups[e.name], r && t.each(this.groups, function (e, i) {
                    i === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", o.attr("id"))
                }))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
            }, errorsFor: function (e) {
                var i = this.idOrName(e), n = t(e).attr("aria-describedby"), r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (r = r + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(r)
            }, idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            }, checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            }, findByName: function (e) {
                return t(this.currentForm).find("[name='" + e + "']")
            }, getLength: function (e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return t("option:selected", i).length;
                    case"input":
                        if (this.checkable(i))return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            }, depend: function (t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            }, dependTypes: {
                "boolean": function (t) {
                    return t
                }, string: function (e, i) {
                    return !!t(e, i.form).length
                }, "function": function (t, e) {
                    return t(e)
                }
            }, optional: function (e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            }, stopRequest: function (e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var i = {}, n = t(e).attr("class");
            return n && t.each(n.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function (e) {
            var i, n, r = {}, s = t(e), o = e.getAttribute("type");
            for (i in t.validator.methods)"required" === i ? (n = e.getAttribute(i), "" === n && (n = !0), n = !!n) : n = s.attr(i), /min|max/.test(i) && (null === o || /number|range|text/.test(o)) && (n = Number(n)), n || 0 === n ? r[i] = n : o === i && "range" !== o && (r[i] = !0);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function (e) {
            var i, n, r = {}, s = t(e);
            for (i in t.validator.methods)n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), void 0 !== n && (r[i] = n);
            return r
        },
        staticRules: function (e) {
            var i = {}, n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function (e, i) {
            return t.each(e, function (n, r) {
                if (r === !1)return void delete e[n];
                if (r.param || r.depends) {
                    var s = !0;
                    switch (typeof r.depends) {
                        case"string":
                            s = !!t(r.depends, i.form).length;
                            break;
                        case"function":
                            s = r.depends.call(i, i)
                    }
                    s ? e[n] = void 0 !== r.param ? r.param : !0 : delete e[n]
                }
            }), t.each(e, function (n, r) {
                e[n] = t.isFunction(r) ? r(i) : r
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function () {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function (e, i, n) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, i, n) {
                if (!this.depend(n, i))return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            }, email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            }, url: function (t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            }, date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            }, dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            }, number: function (t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            }, creditcard: function (t, e) {
                if (this.optional(e))return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))return !1;
                var i, n, r = 0, s = 0, o = !1;
                if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19)return !1;
                for (i = t.length - 1; i >= 0; i--)n = t.charAt(i), s = parseInt(n, 10), o && (s *= 2) > 9 && (s -= 9), r += s, o = !o;
                return r % 10 === 0
            }, minlength: function (e, i, n) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= n
            }, maxlength: function (e, i, n) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || n >= r
            }, rangelength: function (e, i, n) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= n[0] && r <= n[1]
            }, min: function (t, e, i) {
                return this.optional(e) || t >= i
            }, max: function (t, e, i) {
                return this.optional(e) || i >= t
            }, range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            }, equalTo: function (e, i, n) {
                var r = t(n);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    t(i).valid()
                }), e === r.val()
            }, remote: function (e, i, n) {
                if (this.optional(i))return "dependency-mismatch";
                var r, s, o = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), o.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = o.message, n = "string" == typeof n && {url: n} || n, o.old === e ? o.valid : (o.old = e, r = this, this.startRequest(i), s = {}, s[i.name] = e, t.ajax(t.extend(!0, {
                    url: n,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: s,
                    context: r.currentForm,
                    success: function (n) {
                        var s, a, l, u = n === !0 || "true" === n;
                        r.settings.messages[i.name].remote = o.originalMessage, u ? (l = r.formSubmitted, r.prepareElement(i), r.formSubmitted = l, r.successList.push(i), delete r.invalid[i.name], r.showErrors()) : (s = {}, a = n || r.defaultMessage(i, "remote"), s[i.name] = o.message = t.isFunction(a) ? a(e) : a, r.invalid[i.name] = !0, r.showErrors(s)), o.valid = u, r.stopRequest(i, u)
                    }
                }, n)), "pending")
            }
        }
    }), t.format = function () {
        throw"$.format has been deprecated. Please use $.validator.format instead."
    };
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, n) {
        var r = t.port;
        "abort" === t.mode && (i[r] && i[r].abort(), i[r] = n)
    }) : (e = t.ajax, t.ajax = function (n) {
        var r = ("mode" in n ? n : t.ajaxSettings).mode, s = ("port" in n ? n : t.ajaxSettings).port;
        return "abort" === r ? (i[s] && i[s].abort(), i[s] = e.apply(this, arguments), i[s]) : e.apply(this, arguments)
    }), t.extend(t.fn, {
        validateDelegate: function (e, i, n) {
            return this.bind(i, function (i) {
                var r = t(i.target);
                return r.is(e) ? n.apply(r, arguments) : void 0
            })
        }
    })
}), !function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], t) : t(jQuery)
}(function (t) {
    !function () {
        function e(t) {
            return t.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
        }

        t.validator.addMethod("maxWords", function (t, i, n) {
            return this.optional(i) || e(t).match(/\b\w+\b/g).length <= n
        }, t.validator.format("Please enter {0} words or less.")), t.validator.addMethod("minWords", function (t, i, n) {
            return this.optional(i) || e(t).match(/\b\w+\b/g).length >= n
        }, t.validator.format("Please enter at least {0} words.")), t.validator.addMethod("rangeWords", function (t, i, n) {
            var r = e(t), s = /\b\w+\b/g;
            return this.optional(i) || r.match(s).length >= n[0] && r.match(s).length <= n[1]
        }, t.validator.format("Please enter between {0} and {1} words."))
    }(), t.validator.addMethod("accept", function (e, i, n) {
        var r, s, o = "string" == typeof n ? n.replace(/\s/g, "").replace(/,/g, "|") : "image/*", a = this.optional(i);
        if (a)return a;
        if ("file" === t(i).attr("type") && (o = o.replace(/\*/g, ".*"), i.files && i.files.length))for (r = 0; r < i.files.length; r++)if (s = i.files[r], !s.type.match(new RegExp(".?(" + o + ")$", "i")))return !1;
        return !0
    }, t.validator.format("Please enter a value with a valid mimetype.")), t.validator.addMethod("alphanumeric", function (t, e) {
        return this.optional(e) || /^\w+$/i.test(t)
    }, "Letters, numbers, and underscores only please"), t.validator.addMethod("bankaccountNL", function (t, e) {
        if (this.optional(e))return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t))return !1;
        var i, n, r, s = t.replace(/ /g, ""), o = 0, a = s.length;
        for (i = 0; a > i; i++)n = a - i, r = s.substring(i, i + 1), o += n * r;
        return o % 11 === 0
    }, "Please specify a valid bank account number"), t.validator.addMethod("bankorgiroaccountNL", function (e, i) {
        return this.optional(i) || t.validator.methods.bankaccountNL.call(this, e, i) || t.validator.methods.giroaccountNL.call(this, e, i)
    }, "Please specify a valid bank or giro account number"), t.validator.addMethod("bic", function (t, e) {
        return this.optional(e) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(t)
    }, "Please specify a valid BIC code"), t.validator.addMethod("cifES", function (t) {
        "use strict";
        var e, i, n, r, s, o, a = [];
        if (t = t.toUpperCase(), !t.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"))return !1;
        for (n = 0; 9 > n; n++)a[n] = parseInt(t.charAt(n), 10);
        for (i = a[2] + a[4] + a[6], r = 1; 8 > r; r += 2)s = (2 * a[r]).toString(), o = s.charAt(1), i += parseInt(s.charAt(0), 10) + ("" === o ? 0 : parseInt(o, 10));
        return /^[ABCDEFGHJNPQRSUVW]{1}/.test(t) ? (i += "", e = 10 - parseInt(i.charAt(i.length - 1), 10), t += e, a[8].toString() === String.fromCharCode(64 + e) || a[8].toString() === t.charAt(t.length - 1)) : !1
    }, "Please specify a valid CIF number."), t.validator.addMethod("creditcardtypes", function (t, e, i) {
        if (/[^0-9\-]+/.test(t))return !1;
        t = t.replace(/\D/g, "");
        var n = 0;
        return i.mastercard && (n |= 1), i.visa && (n |= 2), i.amex && (n |= 4), i.dinersclub && (n |= 8), i.enroute && (n |= 16), i.discover && (n |= 32), i.jcb && (n |= 64), i.unknown && (n |= 128), i.all && (n = 255), 1 & n && /^(5[12345])/.test(t) ? 16 === t.length : 2 & n && /^(4)/.test(t) ? 16 === t.length : 4 & n && /^(3[47])/.test(t) ? 15 === t.length : 8 & n && /^(3(0[012345]|[68]))/.test(t) ? 14 === t.length : 16 & n && /^(2(014|149))/.test(t) ? 15 === t.length : 32 & n && /^(6011)/.test(t) ? 16 === t.length : 64 & n && /^(3)/.test(t) ? 16 === t.length : 64 & n && /^(2131|1800)/.test(t) ? 15 === t.length : 128 & n ? !0 : !1
    }, "Please enter a valid credit card number."), t.validator.addMethod("currency", function (t, e, i) {
        var n, r = "string" == typeof i, s = r ? i : i[0], o = r ? !0 : i[1];
        return s = s.replace(/,/g, ""), s = o ? s + "]" : s + "]?", n = "^[" + s + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", n = new RegExp(n), this.optional(e) || n.test(t)
    }, "Please specify a valid currency"), t.validator.addMethod("dateFA", function (t, e) {
        return this.optional(e) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(t)
    }, "Please enter a correct date"), t.validator.addMethod("dateITA", function (t, e) {
        var i, n, r, s, o, a = !1, l = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return l.test(t) ? (i = t.split("/"), n = parseInt(i[0], 10), r = parseInt(i[1], 10), s = parseInt(i[2], 10), o = new Date(s, r - 1, n, 12, 0, 0, 0), a = o.getUTCFullYear() === s && o.getUTCMonth() === r - 1 && o.getUTCDate() === n ? !0 : !1) : a = !1, this.optional(e) || a
    }, "Please enter a correct date"), t.validator.addMethod("dateNL", function (t, e) {
        return this.optional(e) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t)
    }, "Please enter a correct date"), t.validator.addMethod("extension", function (t, e, i) {
        return i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(e) || t.match(new RegExp(".(" + i + ")$", "i"))
    }, t.validator.format("Please enter a value with a valid extension.")), t.validator.addMethod("giroaccountNL", function (t, e) {
        return this.optional(e) || /^[0-9]{1,7}$/.test(t)
    }, "Please specify a valid giro account number"), t.validator.addMethod("iban", function (t, e) {
        if (this.optional(e))return !0;
        var i, n, r, s, o, a, l, u, c, h = t.replace(/ /g, "").toUpperCase(), d = "", p = !0, f = "", m = "";
        if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(h))return !1;
        if (i = h.substring(0, 2), a = {
                AL: "\\d{8}[\\dA-Z]{16}",
                AD: "\\d{8}[\\dA-Z]{12}",
                AT: "\\d{16}",
                AZ: "[\\dA-Z]{4}\\d{20}",
                BE: "\\d{12}",
                BH: "[A-Z]{4}[\\dA-Z]{14}",
                BA: "\\d{16}",
                BR: "\\d{23}[A-Z][\\dA-Z]",
                BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                CR: "\\d{17}",
                HR: "\\d{17}",
                CY: "\\d{8}[\\dA-Z]{16}",
                CZ: "\\d{20}",
                DK: "\\d{14}",
                DO: "[A-Z]{4}\\d{20}",
                EE: "\\d{16}",
                FO: "\\d{14}",
                FI: "\\d{14}",
                FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                GE: "[\\dA-Z]{2}\\d{16}",
                DE: "\\d{18}",
                GI: "[A-Z]{4}[\\dA-Z]{15}",
                GR: "\\d{7}[\\dA-Z]{16}",
                GL: "\\d{14}",
                GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                HU: "\\d{24}",
                IS: "\\d{22}",
                IE: "[\\dA-Z]{4}\\d{14}",
                IL: "\\d{19}",
                IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                KZ: "\\d{3}[\\dA-Z]{13}",
                KW: "[A-Z]{4}[\\dA-Z]{22}",
                LV: "[A-Z]{4}[\\dA-Z]{13}",
                LB: "\\d{4}[\\dA-Z]{20}",
                LI: "\\d{5}[\\dA-Z]{12}",
                LT: "\\d{16}",
                LU: "\\d{3}[\\dA-Z]{13}",
                MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                MR: "\\d{23}",
                MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                MD: "[\\dA-Z]{2}\\d{18}",
                ME: "\\d{18}",
                NL: "[A-Z]{4}\\d{10}",
                NO: "\\d{11}",
                PK: "[\\dA-Z]{4}\\d{16}",
                PS: "[\\dA-Z]{4}\\d{21}",
                PL: "\\d{24}",
                PT: "\\d{21}",
                RO: "[A-Z]{4}[\\dA-Z]{16}",
                SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                SA: "\\d{2}[\\dA-Z]{18}",
                RS: "\\d{18}",
                SK: "\\d{20}",
                SI: "\\d{15}",
                ES: "\\d{20}",
                SE: "\\d{20}",
                CH: "\\d{5}[\\dA-Z]{12}",
                TN: "\\d{20}",
                TR: "\\d{5}[\\dA-Z]{17}",
                AE: "\\d{3}\\d{16}",
                GB: "[A-Z]{4}\\d{14}",
                VG: "[\\dA-Z]{4}\\d{16}"
            }, o = a[i], "undefined" != typeof o && (l = new RegExp("^[A-Z]{2}\\d{2}" + o + "$", ""), !l.test(h)))return !1;
        for (n = h.substring(4, h.length) + h.substring(0, 4), u = 0; u < n.length; u++)r = n.charAt(u), "0" !== r && (p = !1), p || (d += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(r));
        for (c = 0; c < d.length; c++)s = d.charAt(c), m = "" + f + s, f = m % 97;
        return 1 === f
    }, "Please specify a valid IBAN"), t.validator.addMethod("integer", function (t, e) {
        return this.optional(e) || /^-?\d+$/.test(t)
    }, "A positive or negative non-decimal number please"), t.validator.addMethod("ipv4", function (t, e) {
        return this.optional(e) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t)
    }, "Please enter a valid IP v4 address."), t.validator.addMethod("ipv6", function (t, e) {
        return this.optional(e) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t)
    }, "Please enter a valid IP v6 address."), t.validator.addMethod("lettersonly", function (t, e) {
        return this.optional(e) || /^[a-z]+$/i.test(t)
    }, "Letters only please"), t.validator.addMethod("letterswithbasicpunc", function (t, e) {
        return this.optional(e) || /^[a-z\-.,()'"\s]+$/i.test(t)
    }, "Letters or punctuation only please"), t.validator.addMethod("mobileNL", function (t, e) {
        return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t)
    }, "Please specify a valid mobile number"), t.validator.addMethod("mobileUK", function (t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"), t.validator.addMethod("nieES", function (t) {
        "use strict";
        return t = t.toUpperCase(), t.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[T]{1}/.test(t) ? t[8] === /^[T]{1}[A-Z0-9]{8}$/.test(t) : /^[XYZ]{1}/.test(t) ? t[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23) : !1 : !1
    }, "Please specify a valid NIE number."), t.validator.addMethod("nifES", function (t) {
        "use strict";
        return t = t.toUpperCase(), t.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[0-9]{8}[A-Z]{1}$/.test(t) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.substring(8, 0) % 23) === t.charAt(8) : /^[KLM]{1}/.test(t) ? t[8] === String.fromCharCode(64) : !1 : !1
    }, "Please specify a valid NIF number."), t.validator.addMethod("nowhitespace", function (t, e) {
        return this.optional(e) || /^\S+$/i.test(t)
    }, "No white space please"), t.validator.addMethod("pattern", function (t, e, i) {
        return this.optional(e) ? !0 : ("string" == typeof i && (i = new RegExp(i)), i.test(t))
    }, "Invalid format."), t.validator.addMethod("phoneNL", function (t, e) {
        return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t)
    }, "Please specify a valid phone number."), t.validator.addMethod("phoneUK", function (t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"), t.validator.addMethod("phoneUS", function (t, e) {
        return t = t.replace(/\s+/g, ""), this.optional(e) || t.length > 9 && t.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
    }, "Please specify a valid phone number"), t.validator.addMethod("phonesUK", function (t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"), t.validator.addMethod("postalCodeCA", function (t, e) {
        return this.optional(e) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(t)
    }, "Please specify a valid postal code"), t.validator.addMethod("postalcodeIT", function (t, e) {
        return this.optional(e) || /^\d{5}$/.test(t)
    }, "Please specify a valid postal code"), t.validator.addMethod("postalcodeNL", function (t, e) {
        return this.optional(e) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)
    }, "Please specify a valid postal code"), t.validator.addMethod("postcodeUK", function (t, e) {
        return this.optional(e) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t)
    }, "Please specify a valid UK postcode"), t.validator.addMethod("require_from_group", function (e, i, n) {
        var r = t(n[1], i.form), s = r.eq(0), o = s.data("valid_req_grp") ? s.data("valid_req_grp") : t.extend({}, this), a = r.filter(function () {
                return o.elementValue(this)
            }).length >= n[0];
        return s.data("valid_req_grp", o), t(i).data("being_validated") || (r.data("being_validated", !0), r.each(function () {
            o.element(this)
        }), r.data("being_validated", !1)), a
    }, t.validator.format("Please fill at least {0} of these fields.")), t.validator.addMethod("skip_or_fill_minimum", function (e, i, n) {
        var r = t(n[1], i.form), s = r.eq(0), o = s.data("valid_skip") ? s.data("valid_skip") : t.extend({}, this), a = r.filter(function () {
            return o.elementValue(this)
        }).length, l = 0 === a || a >= n[0];
        return s.data("valid_skip", o), t(i).data("being_validated") || (r.data("being_validated", !0), r.each(function () {
            o.element(this)
        }), r.data("being_validated", !1)), l
    }, t.validator.format("Please either skip these fields or fill at least {0} of them.")), jQuery.validator.addMethod("stateUS", function (t, e, i) {
        var n, r = "undefined" == typeof i, s = r || "undefined" == typeof i.caseSensitive ? !1 : i.caseSensitive, o = r || "undefined" == typeof i.includeTerritories ? !1 : i.includeTerritories, a = r || "undefined" == typeof i.includeMilitary ? !1 : i.includeMilitary;
        return n = o || a ? o && a ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : o ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", n = s ? new RegExp(n) : new RegExp(n, "i"), this.optional(e) || n.test(t)
    }, "Please specify a valid state"), t.validator.addMethod("strippedminlength", function (e, i, n) {
        return t(e).text().length >= n
    }, t.validator.format("Please enter at least {0} characters")), t.validator.addMethod("time", function (t, e) {
        return this.optional(e) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(t)
    }, "Please enter a valid time, between 00:00 and 23:59"), t.validator.addMethod("time12h", function (t, e) {
        return this.optional(e) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)
    }, "Please enter a valid time in 12-hour am/pm format"), t.validator.addMethod("url2", function (t, e) {
        return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
    }, t.validator.messages.url), t.validator.addMethod("vinUS", function (t) {
        if (17 !== t.length)return !1;
        var e, i, n, r, s, o, a = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], l = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9], u = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], c = 0;
        for (e = 0; 17 > e; e++) {
            if (r = u[e], n = t.slice(e, e + 1), 8 === e && (o = n), isNaN(n)) {
                for (i = 0; i < a.length; i++)if (n.toUpperCase() === a[i]) {
                    n = l[i], n *= r, isNaN(o) && 8 === i && (o = a[i]);
                    break
                }
            } else n *= r;
            c += n
        }
        return s = c % 11, 10 === s && (s = "X"), s === o ? !0 : !1
    }, "The specified vehicle identification number (VIN) is invalid."), t.validator.addMethod("zipcodeUS", function (t, e) {
        return this.optional(e) || /^\d{5}(-\d{4})?$/.test(t)
    }, "The specified US ZIP Code is invalid"), t.validator.addMethod("ziprange", function (t, e) {
        return this.optional(e) || /^90[2-5]\d\{2\}-\d{4}$/.test(t)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
}), function (t) {
    var e, i, n, r, s, o, a, l = "Close", u = "BeforeClose", c = "AfterClose", h = "BeforeAppend", d = "MarkupParse", p = "Open", f = "Change", m = "mfp", g = "." + m, v = "mfp-ready", y = "mfp-removing", _ = "mfp-prevent-close", b = function () {
    }, x = !!window.jQuery, w = t(window), T = function (t, i) {
        e.ev.on(m + t + g, i)
    }, S = function (e, i, n, r) {
        var s = document.createElement("div");
        return s.className = "mfp-" + e, n && (s.innerHTML = n), r ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
    }, C = function (i, n) {
        e.ev.triggerHandler(m + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
    }, A = function (i) {
        return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = i), e.currTemplate.closeBtn
    }, P = function () {
        t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
    }, E = function () {
        var t = document.createElement("p").style, e = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== t.transition)return !0;
        for (; e.length;)if (e.pop() + "Transition" in t)return !0;
        return !1
    };
    b.prototype = {
        constructor: b, init: function () {
            var i = navigator.appVersion;
            e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = E(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document.body), r = t(document), e.popupsCache = {}
        }, open: function (i) {
            var n;
            if (i.isObj === !1) {
                e.items = i.items.toArray(), e.index = 0;
                var s, a = i.items;
                for (n = 0; a.length > n; n++)if (s = a[n], s.parsed && (s = s.el[0]), s === i.el[0]) {
                    e.index = n;
                    break
                }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
            if (e.isOpen)return e.updateItemHTML(), void 0;
            e.types = [], o = "", e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : r, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = S("bg").on("click" + g, function () {
                e.close()
            }), e.wrap = S("wrap").attr("tabindex", -1).on("click" + g, function (t) {
                e._checkIfClose(t.target) && e.close()
            }), e.container = S("container", e.wrap)), e.contentContainer = S("content"), e.st.preloader && (e.preloader = S("preloader", e.container, e.st.tLoading));
            var l = t.magnificPopup.modules;
            for (n = 0; l.length > n; n++) {
                var u = l[n];
                u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
            }
            C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (T(d, function (t, e, i, n) {
                i.close_replaceWith = A(n.type)
            }), o += " mfp-close-btn-in") : e.wrap.append(A())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY
            }) : e.wrap.css({
                top: w.scrollTop(),
                position: "absolute"
            }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }), e.st.enableEscapeKey && r.on("keyup" + g, function (t) {
                27 === t.keyCode && e.close()
            }), w.on("resize" + g, function () {
                e.updateSize()
            }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
            var c = e.wH = w.height(), h = {};
            if (e.fixedContentPos && e._hasScrollBar(c)) {
                var f = e._getScrollbarSize();
                f && (h.marginRight = f)
            }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : h.overflow = "hidden");
            var m = e.st.mainClass;
            return e.isIE7 && (m += " mfp-ie7"), m && e._addClassToMFP(m), e.updateItemHTML(), C("BuildControls"), t("html").css(h), e.bgOverlay.add(e.wrap).prependTo(document.body), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                e.content ? (e._addClassToMFP(v), e._setFocus()) : e.bgOverlay.addClass(v), r.on("focusin" + g, e._onFocusIn)
            }, 16), e.isOpen = !0, e.updateSize(c), C(p), i
        }, close: function () {
            e.isOpen && (C(u), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function () {
                e._close()
            }, e.st.removalDelay)) : e._close())
        }, _close: function () {
            C(l);
            var i = y + " " + v + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var n = {marginRight: ""};
                e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
            }
            r.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(c)
        }, updateSize: function (t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * i;
                e.wrap.css("height", n), e.wH = n
            } else e.wH = t || w.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
        }, updateItemHTML: function () {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                var r = e.st[n] ? e.st[n].markup : !1;
                C("FirstMarkupParse", r), e.currTemplate[n] = r ? t(r) : !0
            }
            s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
            var o = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(o, n), i.preloaded = !0, C(f, i), s = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
        }, appendContent: function (t, i) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(A()) : e.content = t : e.content = "", C(h), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
        }, parseEl: function (i) {
            var n = e.items[i], r = n.type;
            if (n = n.tagName ? {el: t(n)} : {data: n, src: n.src}, n.el) {
                for (var s = e.types, o = 0; s.length > o; o++)if (n.el.hasClass("mfp-" + s[o])) {
                    r = s[o];
                    break
                }
                n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
            }
            return n.type = r || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, C("ElementParse", n), e.items[i]
        }, addGroup: function (t, i) {
            var n = function (n) {
                n.mfpEl = this, e._openClick(n, t, i)
            };
            i || (i = {});
            var r = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(r).on(r, n)) : (i.isObj = !1, i.delegate ? t.off(r).on(r, i.delegate, n) : (i.items = t, t.off(r).on(r, n)))
        }, _openClick: function (i, n, r) {
            var s = void 0 !== r.midClick ? r.midClick : t.magnificPopup.defaults.midClick;
            if (s || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                var o = void 0 !== r.disableOn ? r.disableOn : t.magnificPopup.defaults.disableOn;
                if (o)if (t.isFunction(o)) {
                    if (!o.call(e))return !0
                } else if (o > w.width())return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), r.el = t(i.mfpEl), r.delegate && (r.items = n.find(r.delegate)), e.open(r)
            }
        }, updateStatus: function (t, n) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                var r = {status: t, text: n};
                C("UpdateStatus", r), t = r.status, n = r.text, e.preloader.html(n), e.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), i = t
            }
        }, _checkIfClose: function (i) {
            if (!t(i).hasClass(_)) {
                var n = e.st.closeOnContentClick, r = e.st.closeOnBgClick;
                if (n && r)return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0])return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n)return !0
                } else if (r && t.contains(document, i))return !0;
                return !1
            }
        }, _addClassToMFP: function (t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        }, _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        }, _hasScrollBar: function (t) {
            return (e.isIE7 ? r.height() : document.body.scrollHeight) > (t || w.height())
        }, _setFocus: function () {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        }, _onFocusIn: function (i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
        }, _parseMarkup: function (e, i, n) {
            var r;
            n.data && (i = t.extend(n.data, i)), C(d, [e, i, n]), t.each(i, function (t, i) {
                if (void 0 === i || i === !1)return !0;
                if (r = t.split("_"), r.length > 1) {
                    var n = e.find(g + "-" + r[0]);
                    if (n.length > 0) {
                        var s = r[1];
                        "replaceWith" === s ? n[0] !== i[0] && n.replaceWith(i) : "img" === s ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(r[1], i)
                    }
                } else e.find(g + "-" + t).html(i)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.id = "mfp-sbm", t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function (e, i) {
            return P(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
        },
        close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function (e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, t.fn.magnificPopup = function (i) {
        P();
        var n = t(this);
        if ("string" == typeof i)if ("open" === i) {
            var r, s = x ? n.data("magnificPopup") : n[0].magnificPopup, o = parseInt(arguments[1], 10) || 0;
            s.items ? r = s.items[o] : (r = n, s.delegate && (r = r.find(s.delegate)), r = r.eq(o)), e._openClick({mfpEl: r}, n, s)
        } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1)); else i = t.extend(!0, {}, i), x ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
        return n
    };
    var F, k, D, L = "inline", I = function () {
        D && (k.after(D.addClass(F)).detach(), D = null)
    };
    t.magnificPopup.registerModule(L, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                e.types.push(L), T(l + "." + L, function () {
                    I()
                })
            }, getInline: function (i, n) {
                if (I(), i.src) {
                    var r = e.st.inline, s = t(i.src);
                    if (s.length) {
                        var o = s[0].parentNode;
                        o && o.tagName && (k || (F = r.hiddenClass, k = S(F), F = "mfp-" + F), D = s.after(k).detach().removeClass(F)), e.updateStatus("ready")
                    } else e.updateStatus("error", r.tNotFound), s = t("<div>");
                    return i.inlineElement = s, s
                }
                return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
            }
        }
    });
    var R, M = "ajax", O = function () {
        R && n.removeClass(R)
    }, z = function () {
        O(), e.req && e.req.abort()
    };
    t.magnificPopup.registerModule(M, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                e.types.push(M), R = e.st.ajax.cursor, T(l + "." + M, z), T("BeforeChange." + M, z)
            }, getAjax: function (i) {
                R && n.addClass(R), e.updateStatus("loading");
                var r = t.extend({
                    url: i.src, success: function (n, r, s) {
                        var o = {data: n, xhr: s};
                        C("ParseAjax", o), e.appendContent(t(o.data), M), i.finished = !0, O(), e._setFocus(), setTimeout(function () {
                            e.wrap.addClass(v)
                        }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                    }, error: function () {
                        O(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(r), ""
            }
        }
    });
    var N, j = function (i) {
        if (i.data && void 0 !== i.data.title)return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n))return n.call(e, i);
            if (i.el)return i.el.attr(n) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var t = e.st.image, i = ".image";
                e.types.push("image"), T(p + i, function () {
                    "image" === e.currItem.type && t.cursor && n.addClass(t.cursor)
                }), T(l + i, function () {
                    t.cursor && n.removeClass(t.cursor), w.off("resize" + g)
                }), T("Resize" + i, e.resizeImage), e.isLowIE && T("AfterChange", e.resizeImage)
            }, resizeImage: function () {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            }, _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            }, findImageSize: function (t) {
                var i = 0, n = t.img[0], r = function (s) {
                    N && clearInterval(N), N = setInterval(function () {
                        return n.naturalWidth > 0 ? (e._onImageHasSize(t), void 0) : (i > 200 && clearInterval(N), i++, 3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500), void 0)
                    }, s)
                };
                r(1)
            }, getImage: function (i, n) {
                var r = 0, s = function () {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(s, 100) : o()))
                }, o = function () {
                    i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                }, a = e.st.image, l = n.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", i.img = t(u).on("load.mfploader", s).on("error.mfploader", o), u.src = i.src, l.is("img") && (i.img = i.img.clone()), i.img[0].naturalWidth > 0 && (i.hasSize = !0)
                }
                return e._parseMarkup(n, {
                    title: j(i),
                    img_replaceWith: i.img
                }, i), e.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
            }
        }
    });
    var H, B = function () {
        return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        }, proto: {
            initZoom: function () {
                var t, i = e.st.zoom, n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var r, s, o = i.duration, a = function (t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), n = "all " + i.duration / 1e3 + "s " + i.easing, r = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, s = "transition";
                        return r["-webkit-" + s] = r["-moz-" + s] = r["-o-" + s] = r[s] = n, e.css(r), e
                    }, c = function () {
                        e.content.css("visibility", "visible")
                    };
                    T("BuildControls" + n, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(r), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t)return c(), void 0;
                            s = a(t), s.css(e._getOffset()), e.wrap.append(s), r = setTimeout(function () {
                                s.css(e._getOffset(!0)), r = setTimeout(function () {
                                    c(), setTimeout(function () {
                                        s.remove(), t = s = null, C("ZoomAnimationEnded")
                                    }, 16)
                                }, o)
                            }, 16)
                        }
                    }), T(u + n, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(r), e.st.removalDelay = o, !t) {
                                if (t = e._getItemToZoom(), !t)return;
                                s = a(t)
                            }
                            s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function () {
                                s.css(e._getOffset())
                            }, 16)
                        }
                    }), T(l + n, function () {
                        e._allowZoom() && (c(), s && s.remove(), t = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === e.currItem.type
            }, _getItemToZoom: function () {
                return e.currItem.hasSize ? e.currItem.img : !1
            }, _getOffset: function (i) {
                var n;
                n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var r = n.offset(), s = parseInt(n.css("padding-top"), 10), o = parseInt(n.css("padding-bottom"), 10);
                r.top -= t(window).scrollTop() - s;
                var a = {width: n.width(), height: (x ? n.innerHeight() : n[0].offsetHeight) - o - s};
                return B() ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a
            }
        }
    });
    var q = "iframe", W = "//about:blank", X = function (t) {
        if (e.currTemplate[q]) {
            var i = e.currTemplate[q].find("iframe");
            i.length && (t || (i[0].src = W), e.isIE8 && i.css("display", t ? "block" : "none"))
        }
    };
    t.magnificPopup.registerModule(q, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                e.types.push(q), T("BeforeChange", function (t, e, i) {
                    e !== i && (e === q ? X() : i === q && X(!0))
                }), T(l + "." + q, function () {
                    X()
                })
            }, getIframe: function (i, n) {
                var r = i.src, s = e.st.iframe;
                t.each(s.patterns, function () {
                    return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                });
                var o = {};
                return s.srcAction && (o[s.srcAction] = r), e._parseMarkup(n, o, i), e.updateStatus("ready"), n
            }
        }
    });
    var $ = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t
    }, Y = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var i = e.st.gallery, n = ".mfp-gallery", s = Boolean(t.fn.mfpFastClick);
                return e.direction = !0, i && i.enabled ? (o += " mfp-gallery", T(p + n, function () {
                    i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function () {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }), r.on("keydown" + n, function (t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), T("UpdateStatus" + n, function (t, i) {
                    i.text && (i.text = Y(i.text, e.currItem.index, e.items.length))
                }), T(d + n, function (t, n, r, s) {
                    var o = e.items.length;
                    r.counter = o > 1 ? Y(i.tCounter, s.index, o) : ""
                }), T("BuildControls" + n, function () {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup, r = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(_), o = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(_), a = s ? "mfpFastClick" : "click";
                        r[a](function () {
                            e.prev()
                        }), o[a](function () {
                            e.next()
                        }), e.isIE7 && (S("b", r[0], !1, !0), S("a", r[0], !1, !0), S("b", o[0], !1, !0), S("a", o[0], !1, !0)), e.container.append(r.add(o))
                    }
                }), T(f + n, function () {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), T(l + n, function () {
                    r.off(n), e.wrap.off("click" + n), e.arrowLeft && s && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                }), void 0) : !1
            }, next: function () {
                e.direction = !0, e.index = $(e.index + 1), e.updateItemHTML()
            }, prev: function () {
                e.direction = !1, e.index = $(e.index - 1), e.updateItemHTML()
            }, goTo: function (t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            }, preloadNearbyImages: function () {
                var t, i = e.st.gallery.preload, n = Math.min(i[0], e.items.length), r = Math.min(i[1], e.items.length);
                for (t = 1; (e.direction ? r : n) >= t; t++)e._preloadItem(e.index + t);
                for (t = 1; (e.direction ? n : r) >= t; t++)e._preloadItem(e.index - t)
            }, _preloadItem: function (i) {
                if (i = $(i), !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                        n.hasSize = !0
                    }).on("error.mfploader", function () {
                        n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    var Z = "retina";
    t.magnificPopup.registerModule(Z, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina, i = t.ratio;
                    i = isNaN(i) ? i() : i, i > 1 && (T("ImageHasSize." + Z, function (t, e) {
                        e.img.css({"max-width": e.img[0].naturalWidth / i, width: "100%"})
                    }), T("ElementParse." + Z, function (e, n) {
                        n.src = t.replaceSrc(n, i)
                    }))
                }
            }
        }
    }), function () {
        var e = 1e3, i = "ontouchstart" in window, n = function () {
            w.off("touchmove" + s + " touchend" + s)
        }, r = "mfpFastClick", s = "." + r;
        t.fn.mfpFastClick = function (r) {
            return t(this).each(function () {
                var o, a = t(this);
                if (i) {
                    var l, u, c, h, d, p;
                    a.on("touchstart" + s, function (t) {
                        h = !1, p = 1, d = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], u = d.clientX, c = d.clientY, w.on("touchmove" + s, function (t) {
                            d = t.originalEvent ? t.originalEvent.touches : t.touches, p = d.length, d = d[0], (Math.abs(d.clientX - u) > 10 || Math.abs(d.clientY - c) > 10) && (h = !0, n())
                        }).on("touchend" + s, function (t) {
                            n(), h || p > 1 || (o = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                                o = !1
                            }, e), r())
                        })
                    })
                }
                a.on("click" + s, function () {
                    o || r()
                })
            })
        }, t.fn.destroyMfpFastClick = function () {
            t(this).off("touchstart" + s + " click" + s), i && w.off("touchmove" + s + " touchend" + s)
        }
    }(), P()
}(window.jQuery || window.Zepto), function (t) {
    return
}(this), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.autosize = e()
}(this, function () {
    function t(t) {
        function e() {
            var e = window.getComputedStyle(t, null);
            "vertical" === e.resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), t.style.wordWrap = "break-word";
            var s = t.style.width;
            t.style.width = "0px", t.offsetWidth, t.style.width = s, n = "none" !== e.maxHeight ? parseFloat(e.maxHeight) : !1, r = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), i()
        }

        function i() {
            var e = t.style.height, i = document.documentElement.scrollTop, s = document.body.scrollTop;
            t.style.height = "auto";
            var o = t.scrollHeight + r;
            if (n !== !1 && o > n ? (o = n, "scroll" !== t.style.overflowY && (t.style.overflowY = "scroll")) : "hidden" !== t.style.overflowY && (t.style.overflowY = "hidden"), t.style.height = o + "px", document.documentElement.scrollTop = i, document.body.scrollTop = s, e !== t.style.height) {
                var a = document.createEvent("Event");
                a.initEvent("autosize.resized", !0, !1), t.dispatchEvent(a)
            }
        }

        if (t && t.nodeName && "TEXTAREA" === t.nodeName && !t.hasAttribute("data-autosize-on")) {
            var n, r;
            "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", i), window.addEventListener("resize", i), t.addEventListener("input", i), t.addEventListener("autosize.update", i), t.addEventListener("autosize.destroy", function (e) {
                window.removeEventListener("resize", i), t.removeEventListener("input", i), t.removeEventListener("keyup", i), t.removeEventListener("autosize.destroy"), Object.keys(e).forEach(function (i) {
                    t.style[i] = e[i]
                }), t.removeAttribute("data-autosize-on")
            }.bind(t, {
                height: t.style.height,
                overflow: t.style.overflow,
                overflowY: t.style.overflowY,
                wordWrap: t.style.wordWrap,
                resize: t.style.resize
            })), t.setAttribute("data-autosize-on", !0), t.style.overflow = "hidden", t.style.overflowY = "hidden", e()
        }
    }

    return "function" != typeof window.getComputedStyle ? function (t) {
        return t
    } : function (e) {
        return e && e.length ? Array.prototype.forEach.call(e, t) : e && e.nodeName && t(e), e
    }
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        }, r = function (t, e, n) {
            i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
        }, s = 1e-10, o = i._internals, a = o.isSelector, l = o.isArray, u = r.prototype = i.to({}, .1, {}), c = [];
        r.version = "1.16.1", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, u.updateTo = function (t, e) {
            var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t)this.vars[n] = t[n];
            if (this._initted || s)if (e)this._initted = !1, s && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var o = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
            } else if (this._time > 0 || s) {
                this._initted = !1, this._init();
                for (var a, l = 1 / (1 - r), u = this._firstPT; u;)a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
            }
            return this
        }, u.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, a, l, u, h, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, g = this._totalTime, v = this._cycle, y = this._duration, _ = this._rawPrevTime;
            if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > _ || _ === s) && _ !== t && (i = !0, _ > s && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && _ > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = p = !e || t || _ === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (u = this._time / y, h = this._easeType, d = this._easePower, (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === d ? u *= u : 2 === d ? u *= u * u : 3 === d ? u *= u * u * u : 4 === d && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : .5 > this._time / y ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / y)), m === this._time && !i && v === this._cycle)return g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = m, this._totalTime = g, this._rawPrevTime = _, this._cycle = v, o.lazyTweens.push(this), this._lazy = [t, e], void 0;
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / y) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), a = this._firstPT; a;)a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c), 0 === y && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0))
        }, r.to = function (t, e, i) {
            return new r(t, e, i)
        }, r.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
        }, r.staggerTo = r.allTo = function (t, e, s, o, u, h, d) {
            o = o || 0;
            var p, f, m, g, v = s.delay || 0, y = [], _ = function () {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(d || this, h || c)
            };
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                f = {};
                for (g in s)f[g] = s[g];
                f.delay = v, m === p && u && (f.onComplete = _), y[m] = new r(t[m], e, f), v += o
            }
            return y
        }, r.staggerFrom = r.allFrom = function (t, e, i, n, s, o, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
        }, r.staggerFromTo = r.allFromTo = function (t, e, i, n, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
        }, r.delayedCall = function (t, e, i, n, s) {
            return new r(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, r.set = function (t, e) {
            return new r(t, 0, e)
        }, r.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var h = function (t, e) {
            for (var n = [], r = 0, s = t._first; s;)s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(h(s, e)), r = n.length), s = s._next;
            return n
        }, d = r.getAllTweens = function (e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
        };
        r.killAll = function (t, i, n, r) {
            null == i && (i = !0), null == n && (n = !0);
            var s, o, a, l = d(0 != r), u = l.length, c = i && n && r;
            for (a = 0; u > a; a++)o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }, r.killChildTweensOf = function (t, e) {
            if (null != t) {
                var s, u, c, h, d, p = o.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))for (h = t.length; --h > -1;)r.killChildTweensOf(t[h], e); else {
                    s = [];
                    for (c in p)for (u = p[c].target.parentNode; u;)u === t && (s = s.concat(p[c].tweens)), u = u.parentNode;
                    for (d = s.length, h = 0; d > h; h++)e && s[h].totalTime(s[h].totalDuration()), s[h]._enabled(!1, !1)
                }
            }
        };
        var p = function (t, i, n, r) {
            i = i !== !1, n = n !== !1, r = r !== !1;
            for (var s, o, a = d(r), l = i && n && r, u = a.length; --u > -1;)o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
        };
        return r.pauseAll = function (t, e, i) {
            p(!0, t, e, i)
        }, r.resumeAll = function (t, e, i) {
            p(!1, t, e, i)
        }, r.globalTimeScale = function (e) {
            var n = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, u.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, u.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, u.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, u.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, u.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, n, r = this.vars;
            for (n in r)i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }, r = 1e-10, s = i._internals, o = n._internals = {}, a = s.isSelector, l = s.isArray, u = s.lazyTweens, c = s.lazyRender, h = [], d = _gsScope._gsDefine.globals, p = function (t) {
            var e, i = {};
            for (e in t)i[e] = t[e];
            return i
        }, f = o.pauseCallback = function (t, e, i, n) {
            var s, o = t._timeline, a = o._totalTime, l = t._startTime, u = 0 > t._rawPrevTime || 0 === t._rawPrevTime && o._reversed, c = u ? 0 : r, d = u ? r : 0;
            if (e || !this._forcingPlayhead) {
                for (o.pause(l), s = t._prev; s && s._startTime === l;)s._rawPrevTime = d, s = s._prev;
                for (s = t._next; s && s._startTime === l;)s._rawPrevTime = c, s = s._next;
                e && e.apply(n || o, i || h), (this._forcingPlayhead || !o._paused) && o.seek(a)
            }
        }, m = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        }, g = n.prototype = new e;
        return n.version = "1.16.1", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function (t, e, n, r) {
            var s = n.repeat && d.TweenMax || i;
            return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
        }, g.from = function (t, e, n, r) {
            return this.add((n.repeat && d.TweenMax || i).from(t, e, n), r)
        }, g.fromTo = function (t, e, n, r, s) {
            var o = r.repeat && d.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
        }, g.staggerTo = function (t, e, r, s, o, l, u, c) {
            var h, d = new n({
                onComplete: l,
                onCompleteParams: u,
                onCompleteScope: c,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), h = 0; t.length > h; h++)r.startAt && (r.startAt = p(r.startAt)), d.to(t[h], e, p(r), h * s);
            return this.add(d, o)
        }, g.staggerFrom = function (t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
        }, g.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
        }, g.call = function (t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }, g.set = function (t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, s, o = new n(t), a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;)s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
            return a.add(o, 0), o
        }, g.add = function (r, s, o, a) {
            var u, c, h, d, p, f;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && l(r)) {
                    for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++)l(d = r[h]) && (d = new n({tweens: d})), this.add(d, u), "string" != typeof d && "function" != typeof d && ("sequence" === o ? u = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), u += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)return this.addLabel(r, s);
                if ("function" != typeof r)throw"Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (p = this, f = p.rawTime() > r._startTime; p._timeline;)f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, g.remove = function (e) {
            if (e instanceof t)return this._remove(e, !1);
            if (e instanceof Array || e && e.push && l(e)) {
                for (var i = e.length; --i > -1;)this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, g._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, g.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, g.insert = g.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, g.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, g.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, g.addPause = function (t, e, n, r) {
            var s = i.delayedCall(0, f, ["{self}", e, n, r], this);
            return s.data = "isPause", this.add(s, t)
        }, g.removeLabel = function (t) {
            return delete this._labels[t], this
        }, g.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, g._parseTimeOrLabel = function (e, i, n, r) {
            var s;
            if (r instanceof t && r.timeline === this)this.remove(r); else if (r && (r instanceof Array || r.push && l(r)))for (s = r.length; --s > -1;)r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
            if ("string" == typeof i)return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])null == e && (e = this.duration()); else {
                if (s = e.indexOf("="), -1 === s)return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, g.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, g.stop = function () {
            return this.paused(!0)
        }, g.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, g.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, g.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, o, a, l, d = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._startTime, m = this._timeScale, g = this._paused;
            if (t >= d)this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = d + 1e-4; else if (1e-7 > t)if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)for (n = this._first; n && 0 === n._startTime;)n._duration || (s = !1), n = n._next;
                t = 0, this._initted || (l = !0)
            } else this._totalTime = this._time = this._rawPrevTime = t;
            if (this._time !== p && this._first || i || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= p)for (n = this._first; n && (o = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o; else for (n = this._last; n && (o = n._prev, !this._paused || g);)(n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                this._onUpdate && (e || (u.length && c(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h))), a && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || h)))
            }
        }, g._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild())return !0;
                t = t._next
            }
            return !1
        }, g.getChildren = function (t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], o = this._first, a = 0; o;)r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
            return s
        }, g.getTweensOf = function (t, e) {
            var n, r, s = this._gc, o = [], a = 0;
            for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
            return s && this._enabled(!1, !0), o
        }, g.recent = function () {
            return this._recent
        }, g._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this)return !0;
                e = e.timeline
            }
            return !1
        }, g.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r;)r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)for (n in s)s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }, g._kill = function (t, e) {
            if (!t && !e)return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;)i[n]._kill(t, e) && (r = !0);
            return r
        }, g.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, g.invalidate = function () {
            for (var e = this._first; e;)e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, g._enabled = function (t, i) {
            if (t === this._gc)for (var n = this._first; n;)n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, g.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, g.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, g.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r;)e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, g.paused = function (e) {
            if (!e)for (var i = this._first, n = this._time; i;)i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, g.usesFrames = function () {
            for (var e = this._timeline; e._timeline;)e = e._timeline;
            return e === t._rootFramesTimeline
        }, g.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var n = function (e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, r = 1e-10, s = [], o = e._internals, a = o.lazyTweens, l = o.lazyRender, u = new i(null, null, 1, 0), c = n.prototype = new t;
        return c.constructor = n, c.kill()._gc = !1, n.version = "1.16.1", c.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, c.addCallback = function (t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }, c.removeCallback = function (t, e) {
            if (t)if (null == e)this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;)i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, c.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, c.tweenTo = function (t, i) {
            i = i || {};
            var n, r, o, a = {ease: u, useFrames: this.usesFrames(), immediateRender: !1};
            for (r in i)a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function () {
                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
            }, o
        }, c.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, c.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, u, c, h, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._duration, m = this._time, g = this._totalTime, v = this._startTime, y = this._timeScale, _ = this._rawPrevTime, b = this._paused, x = this._cycle;
            if (t >= p)this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, c = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > _ || _ === r) && _ !== t && this._first && (h = !0, _ > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4); else if (1e-7 > t)if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && _ !== r && (_ > 0 || 0 > t && _ >= 0) && !this._locked) && (c = "onReverseComplete", o = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = o = !0, c = "onReverseComplete") : _ >= 0 && this._first && (h = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)for (n = this._first; n && 0 === n._startTime;)n._duration || (o = !1), n = n._next;
                t = 0, this._initted || (h = !0)
            } else 0 === f && 0 > _ && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (d = f + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
            if (this._cycle !== x && !this._locked) {
                var w = this._yoyo && 0 !== (1 & x), T = w === (this._yoyo && 0 !== (1 & this._cycle)), S = this._totalTime, C = this._cycle, A = this._rawPrevTime, P = this._time;
                if (this._totalTime = x * f, x > this._cycle ? w = !w : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? _ - 1e-4 : _, this._cycle = x, this._locked = !0, m = w ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), T && (m = w ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b)return;
                this._time = P, this._totalTime = S, this._cycle = C, this._rawPrevTime = A
            }
            if (!(this._time !== m && this._first || i || h))return g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), void 0;
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)for (n = this._first; n && (u = n._next, !this._paused || b);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u; else for (n = this._last; n && (u = n._prev, !this._paused || b);)(n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
            this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), c && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || s)))
        }, c.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; l > n; n++)r = o[n], r.isActive() && (s[a++] = r);
            return s
        }, c.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)if (i[e].time > t)return i[e].name;
            return null
        }, c.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)if (t > e[i].time)return e[i].name;
            return null
        }, c.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels)e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, c.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, c.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, c.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, c.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, c.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, c.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], n = [], r = {}, s = _gsScope._gsDefine.globals, o = function (t, e, i, n) {
            this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
        }, a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", l = function (t, e, i, n) {
            var r = {a: t}, s = {}, o = {}, a = {c: n}, l = (t + e) / 2, u = (e + i) / 2, c = (i + n) / 2, h = (l + u) / 2, d = (u + c) / 2, p = (d - h) / 8;
            return r.b = l + (t - l) / 4, s.b = h + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + d) / 2, o.b = d - p, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
        }, u = function (t, r, s, o, a) {
            var u, c, h, d, p, f, m, g, v, y, _, b, x, w = t.length - 1, T = 0, S = t[0].a;
            for (u = 0; w > u; u++)p = t[T], c = p.a, h = p.d, d = t[T + 1].d, a ? (_ = e[u], b = i[u], x = .25 * (b + _) * r / (o ? .5 : n[u] || .5), f = h - (h - c) * (o ? .5 * r : 0 !== _ ? x / _ : 0), m = h + (d - h) * (o ? .5 * r : 0 !== b ? x / b : 0), g = h - (f + ((m - f) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (f = h - .5 * (h - c) * r, m = h + .5 * (d - h) * r, g = h - (f + m) / 2), f += g, m += g, p.c = v = f, p.b = 0 !== u ? S : S = p.a + .6 * (p.c - p.a), p.da = h - c, p.ca = v - c, p.ba = S - c, s ? (y = l(c, S, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = m;
            p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, s && (y = l(p.a, S, p.c, p.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
        }, c = function (t, n, r, s) {
            var a, l, u, c, h, d, p = [];
            if (s)for (t = [s].concat(t), l = t.length; --l > -1;)"string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = s[n] + Number(d.charAt(0) + d.substr(2)));
            if (a = t.length - 2, 0 > a)return p[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
            for (l = 0; a > l; l++)u = t[l][n], c = t[l + 1][n], p[l] = new o(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
            return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
        }, h = function (t, s, o, l, h, d) {
            var p, f, m, g, v, y, _, b, x = {}, w = [], T = d || t[0];
            h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
            for (f in t[0])w.push(f);
            if (t.length > 1) {
                for (b = t[t.length - 1], _ = !0, p = w.length; --p > -1;)if (f = w[p], Math.abs(T[f] - b[f]) > .05) {
                    _ = !1;
                    break
                }
                _ && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0, p = w.length; --p > -1;)f = w[p], r[f] = -1 !== h.indexOf("," + f + ","), x[f] = c(t, f, r[f], d);
            for (p = e.length; --p > -1;)e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
            if (!l) {
                for (p = w.length; --p > -1;)if (r[f])for (m = x[w[p]], y = m.length - 1, g = 0; y > g; g++)v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                for (p = n.length; --p > -1;)n[p] = Math.sqrt(n[p])
            }
            for (p = w.length, g = o ? 4 : 1; --p > -1;)f = w[p], m = x[f], u(m, s, o, l, r[f]), _ && (m.splice(0, g), m.splice(m.length - g, g));
            return x
        }, d = function (t, e, i) {
            e = e || "soft";
            var n, r, s, a, l, u, c, h, d, p, f, m = {}, g = "cubic" === e ? 3 : 2, v = "soft" === e, y = [];
            if (v && i && (t = [i].concat(t)), null == t || g + 1 > t.length)throw"invalid Bezier data";
            for (d in t[0])y.push(d);
            for (u = y.length; --u > -1;) {
                for (d = y[u], m[d] = l = [], p = 0, h = t.length, c = 0; h > c; c++)n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && h - 1 > c && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                for (h = p - g + 1, p = 0, c = 0; h > c; c += g)n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[p++] = f = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                l.length = p
            }
            return m
        }, p = function (t, e, i) {
            for (var n, r, s, o, a, l, u, c, h, d, p, f = 1 / i, m = t.length; --m > -1;)for (d = t[m], s = d.a, o = d.d - s, a = d.c - s, l = d.b - s, n = r = 0, c = 1; i >= c; c++)u = f * c, h = 1 - u, n = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), p = m * i + c - 1, e[p] = (e[p] || 0) + n * n
        }, f = function (t, e) {
            e = e >> 0 || 6;
            var i, n, r, s, o = [], a = [], l = 0, u = 0, c = e - 1, h = [], d = [];
            for (i in t)p(t[i], o, e);
            for (r = o.length, n = 0; r > n; n++)l += Math.sqrt(o[n]), s = n % e, d[s] = l, s === c && (u += l, s = n / e >> 0, h[s] = d, a[s] = u, l = 0, d = []);
            return {length: u, lengths: a, segments: h}
        }, m = _gsScope._gsDefine.plugin({
            propName: "bezier", priority: -1, version: "1.3.4", API: 2, global: !0, init: function (t, e, i) {
                this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, r, s, o, a, l = e.values || [], u = {}, c = l[0], p = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                for (n in c)this._props.push(n);
                for (s = this._props.length; --s > -1;)n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                    var m = f(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (p = this._autoRotate)for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                    for (o = 0; 3 > o; o++)n = p[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                    n = p[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            }, set: function (e) {
                var i, n, r, s, o, a, l, u, c, h, d = this._segCount, p = this._func, f = this._target, m = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && d - 1 > r) {
                        for (u = d - 1; u > r && e >= (this._l2 = c[++r]););
                        this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = c[--r]) >= e;);
                        0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                    }
                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && h.length - 1 > r) {
                        for (u = h.length - 1; u > r && e >= (this._s2 = h[++r]););
                        this._s1 = h[r - 1], this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = h[--r]) >= e;);
                        0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                    }
                    a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                for (n = 1 - a, r = this._props.length; --r > -1;)s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), p[s] ? f[s](l) : f[s] = l;
                if (this._autoRotate) {
                    var g, v, y, _, b, x, w, T = this._autoRotate;
                    for (r = T.length; --r > -1;)s = T[r][2], x = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, _ = o.b + (o.c - o.b) * a, v += (_ - v) * a, _ += (o.c + (o.d - o.c) * a - _) * a, y = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, y += (b - y) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - y, _ - v) * w + x : this._initialRotations[r], p[s] ? f[s](l) : f[s] = l)
                }
            }
        }), g = m.prototype;
        m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
            return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function () {
            var t = s.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, s, o, a, l) {
                        e instanceof Array && (e = {values: e}), l = new m;
                        var u, c, h, d = e.values, p = d.length - 1, f = [], g = {};
                        if (0 > p)return a;
                        for (u = 0; p >= u; u++)h = i(t, d[u], o, a, l, p !== u), f[u] = h.end;
                        for (c in e)g[c] = e[c];
                        return g.values = f, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [["left", "top", "rotation", u, !1]] : null != h.end.x ? [["x", "y", "rotation", u, !1]] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform), l._onInitTween(h.proxy, g, o._tween), a
                    }
                })
            }
        }, g._roundProps = function (t, e) {
            for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
        }, g._kill = function (t) {
            var e, i, n = this._props;
            for (e in this._beziers)if (e in t)for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;)n[i] === e && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, n, r, s, o = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, u = o.prototype = new t("css");
        u.constructor = o, o.version = "1.16.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", u = "px", o.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u,
            lineHeight: ""
        };
        var c, h, d, p, f, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g, v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, T = /alpha\(opacity *=.+?\)/i, S = /^(rgb|hsl)/, C = /([A-Z])/g, A = /-([a-z])/gi, P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function (t, e) {
            return e.toUpperCase()
        }, F = /(?:Left|Right|Width)/i, k = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, L = /,(?=[^\)]*(?:\(|$))/gi, I = Math.PI / 180, R = 180 / Math.PI, M = {}, O = document, z = function (t) {
            return O.createElementNS ? O.createElementNS("http://www.w3.org/1999/xhtml", t) : O.createElement(t)
        }, N = z("div"), j = z("img"), H = o._internals = {_specialProps: l}, B = navigator.userAgent, q = function () {
            var t = B.indexOf("Android"), e = z("a");
            return d = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), f = d && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), p = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
        }(), W = function (t) {
            return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, X = function (t) {
            window.console && console.log(t)
        }, $ = "", Y = "", Z = function (t, e) {
            e = e || N;
            var i, n, r = e.style;
            if (void 0 !== r[t])return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
            return n >= 0 ? (Y = 3 === n ? "ms" : i[n], $ = "-" + Y.toLowerCase() + "-", Y + t) : null
        }, U = O.defaultView ? O.defaultView.getComputedStyle : function () {
        }, V = o.getStyle = function (t, e, i, n, r) {
            var s;
            return q || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || U(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : W(t)
        }, G = H.convertToPixels = function (t, i, n, r, s) {
            if ("px" === r || !r)return n;
            if ("auto" === r || !n)return 0;
            var a, l, u, c = F.test(i), h = t, d = N.style, p = 0 > n;
            if (p && (n = -n), "%" === r && -1 !== i.indexOf("border"))a = n / 100 * (c ? t.clientWidth : t.clientHeight); else {
                if (d.cssText = "border:0 solid red;position:" + V(t, "position") + ";line-height:0;", "%" !== r && h.appendChild)d[c ? "borderLeftWidth" : "borderTopWidth"] = n + r; else {
                    if (h = t.parentNode || O.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u)return l.width * n / 100;
                    d[c ? "width" : "height"] = n + r
                }
                h.appendChild(N), a = parseFloat(N[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(N), c && "%" === r && o.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = 100 * (a / n)), 0 !== a || s || (a = G(t, i, n, r, !0))
            }
            return p ? -a : a
        }, K = H.calculateOffset = function (t, e, i) {
            if ("absolute" !== V(t, "position", i))return 0;
            var n = "left" === e ? "Left" : "Top", r = V(t, "margin" + n, i);
            return t["offset" + n] - (G(t, e, parseFloat(r), r.replace(b, "")) || 0)
        }, Q = function (t, e) {
            var i, n, r, s = {};
            if (e = e || U(t, null))if (i = e.length)for (; --i > -1;)r = e[i], (-1 === r.indexOf("-transform") || Te === r) && (s[r.replace(A, E)] = e.getPropertyValue(r)); else for (i in e)(-1 === i.indexOf("Transform") || we === i) && (s[i] = e[i]); else if (e = t.currentStyle || t.style)for (i in e)"string" == typeof i && void 0 === s[i] && (s[i.replace(A, E)] = e[i]);
            return q || (s.opacity = W(t)), n = Le(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Ce && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
        }, J = function (t, e, i, n, r) {
            var s, o, a, l = {}, u = t.style;
            for (o in i)"cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(_, "") ? s : 0 : K(t, o), void 0 !== u[o] && (a = new pe(u, o, u[o], a)));
            if (n)for (o in n)"className" !== o && (l[o] = n[o]);
            return {difs: l, firstMPT: a}
        }, te = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ie = function (t, e, i) {
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = te[e], s = r.length;
            for (i = i || U(t, null); --s > -1;)n -= parseFloat(V(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(V(t, "border" + r[s] + "Width", i, !0)) || 0;
            return n
        }, ne = function (t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, "")), e.v = t), e || t
        }, re = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, se = function (t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, oe = function (t, e, i, n) {
            var r, s, o, a, l, u = 1e-6;
            return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : R) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (0 | o / r) * r)), a = e + o), u > a && a > -u && (a = 0), a
        }, ae = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, le = function (t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, ue = o.parseColor = function (t) {
            var e, i, n, r, s, o;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ae[t] ? ae[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = le(r + 1 / 3, e, i), t[1] = le(r, e, i), t[2] = le(r - 1 / 3, e, i), t) : (t = t.match(g) || ae.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ae.black
        }, ce = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (u in ae)ce += "|" + u + "\\b";
        ce = RegExp(ce + ")", "gi");
        var he = function (t, e, i, n) {
            if (null == t)return function (t) {
                return t
            };
            var r, s = e ? (t.match(ce) || [""])[0] : "", o = t.split(s).join("").match(y) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", u = -1 !== t.indexOf(" ") ? " " : ",", c = o.length, h = c > 0 ? o[0].replace(g, "") : "";
            return c ? r = e ? function (t) {
                var e, d, p, f;
                if ("number" == typeof t)t += h; else if (n && L.test(t)) {
                    for (f = t.replace(L, "|").split("|"), p = 0; f.length > p; p++)f[p] = r(f[p]);
                    return f.join(",")
                }
                if (e = (t.match(ce) || [s])[0], d = t.split(e).join("").match(y) || [], p = d.length, c > p--)for (; c > ++p;)d[p] = i ? d[0 | (p - 1) / 2] : o[p];
                return a + d.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, s, d;
                if ("number" == typeof t)t += h; else if (n && L.test(t)) {
                    for (s = t.replace(L, "|").split("|"), d = 0; s.length > d; d++)s[d] = r(s[d]);
                    return s.join(",")
                }
                if (e = t.match(y) || [], d = e.length, c > d--)for (; c > ++d;)e[d] = i ? e[0 | (d - 1) / 2] : o[d];
                return a + e.join(u) + l
            } : function (t) {
                return t
            }
        }, de = function (t) {
            return t = t.split(","), function (e, i, n, r, s, o, a) {
                var l, u = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++)a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                return r.parse(e, a, s, o)
            }
        }, pe = (H._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;)e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
            if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)for (a = s.firstMPT; a;) {
                if (i = a.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++)r += i["xn" + n] + i["xs" + (n + 1)];
                        i.e = r
                    }
                } else i.e = i.s + i.xs0;
                a = a._next
            }
        }, function (t, e, i, n, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
        }), fe = (H._parseToProxy = function (t, e, i, n, r, s) {
            var o, a, l, u, c, h = n, d = {}, p = {}, f = i._transform, m = M;
            for (i._transform = null, M = e, n = c = i.parse(t, e, n, r), M = m, s && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                if (1 >= n.type && (a = n.p, p[a] = n.s + n.c, d[a] = n.s, s || (u = new pe(n, "s", a, u, n.r), n.c = 0), 1 === n.type))for (o = n.l; --o > 0;)l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], d[a] = n[l], s || (u = new pe(n, l, a, u, n.rxp[l]));
                n = n._next
            }
            return {proxy: d, end: p, firstMPT: u, pt: c}
        }, H.CSSPropTween = function (t, e, n, r, o, a, l, u, c, h, d) {
            this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof fe || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === d ? n + r : d, o && (this._next = o, o._prev = this)
        }), me = o.parseComplex = function (t, e, i, n, r, s, o, a, l, u) {
            i = i || s || "", o = new fe(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n), n += "";
            var h, d, p, f, m, y, _, b, x, w, T, C, A = i.split(", ").join(",").split(" "), P = n.split(", ").join(",").split(" "), E = A.length, F = c !== !1;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(L, ", ").split(" "), P = P.join(" ").replace(L, ", ").split(" "), E = A.length), E !== P.length && (A = (s || "").split(" "), E = A.length), o.plugin = l, o.setRatio = u, h = 0; E > h; h++)if (f = A[h], m = P[h], b = parseFloat(f), b || 0 === b)o.appendXtra("", b, re(m, b), m.replace(v, ""), F && -1 !== m.indexOf("px"), !0); else if (r && ("#" === f.charAt(0) || ae[f] || S.test(f)))C = "," === m.charAt(m.length - 1) ? ")," : ")", f = ue(f), m = ue(m), x = f.length + m.length > 6, x && !q && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(P[h]).join("transparent")) : (q || (x = !1), o.appendXtra(x ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], x ? "," : C, !0), x && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, C, !1))); else if (y = f.match(g)) {
                if (_ = m.match(v), !_ || _.length !== y.length)return o;
                for (p = 0, d = 0; y.length > d; d++)T = y[d], w = f.indexOf(T, p), o.appendXtra(f.substr(p, w - p), Number(T), re(_[d], T), "", F && "px" === f.substr(w + T.length, 2), 0 === d), p = w + T.length;
                o["xs" + o.l] += f.substr(p)
            } else o["xs" + o.l] += o.l ? " " + f : f;
            if (-1 !== n.indexOf("=") && o.data) {
                for (C = o.xs0 + o.data.s, h = 1; o.l > h; h++)C += o["xs" + h] + o.data["xn" + h];
                o.e = C + o["xs" + h]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, ge = 9;
        for (u = fe.prototype, u.l = u.pr = 0; --ge > 0;)u["xn" + ge] = 0, u["xs" + ge] = "";
        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, i, n, r, s) {
            var o = this, a = o.l;
            return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new fe(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
        };
        var ve = function (t, e) {
            e = e || {}, this.p = e.prefix ? Z(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, ye = H._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, r, s = t.split(","), o = e.defaultValue;
            for (i = i || [o], n = 0; s.length > n; n++)e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new ve(s[n], e)
        }, _e = function (t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                ye(t, {
                    parser: function (t, i, n, r, s, o, u) {
                        var c = a.com.greensock.plugins[e];
                        return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, u)) : (X("Error: " + e + " js file not loaded."), s)
                    }
                })
            }
        };
        u = ve.prototype, u.parseComplex = function (t, e, i, n, r, s) {
            var o, a, l, u, c, h, d = this.keyword;
            if (this.multi && (L.test(i) || L.test(e) ? (a = e.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : d && (a = [e], l = [i])), l) {
                for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++)e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && (c = e.indexOf(d), h = i.indexOf(d), c !== h && (-1 === h ? a[o] = a[o].split(d).join("") : -1 === c && (a[o] += " " + d)));
                e = a.join(", "), i = l.join(", ")
            }
            return me(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }, u.parse = function (t, e, i, n, s, o) {
            return this.parseComplex(t.style, this.format(V(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
        }, o.registerSpecialProp = function (t, e, i) {
            ye(t, {
                parser: function (t, n, r, s, o, a) {
                    var l = new fe(t, r, 0, 0, o, 2, r, !1, i);
                    return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l
                }, priority: i
            })
        }, o.useSVGTransformAttr = d;
        var be, xe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), we = Z("transform"), Te = $ + "transform", Se = Z("transformOrigin"), Ce = null !== Z("perspective"), Ae = H.Transform = function () {
            this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Ce ? o.defaultForce3D || "auto" : !1
        }, Pe = window.SVGElement, Ee = function (t, e, i) {
            var n, r = O.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
            for (n in i)r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r), r
        }, Fe = O.documentElement, ke = function () {
            var t, e, i, n = m || /Android/i.test(B) && !window.chrome;
            return O.createElementNS && !n && (t = Ee("svg", Fe), e = Ee("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[we] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Ce), Fe.removeChild(t)), n
        }(), De = function (t, e, i, n) {
            var r, s;
            n && (s = n.split(" ")).length || (r = t.getBBox(), e = ne(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y]), i.xOrigin = parseFloat(s[0]), i.yOrigin = parseFloat(s[1]), t.setAttribute("data-svg-origin", s.join(" "))
        }, Le = H.getTransform = function (t, e, i, n) {
            if (t._gsTransform && i && !n)return t._gsTransform;
            var s, a, l, u, c, h, d, p, f, m, g = i ? t._gsTransform || new Ae : new Ae, v = 0 > g.scaleX, y = 2e-5, _ = 1e5, b = Ce ? parseFloat(V(t, Se, e, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0, x = parseFloat(o.defaultTransformPerspective) || 0;
            if (we ? a = V(t, Te, e, !0) : t.currentStyle && (a = t.currentStyle.filter.match(k), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), g.x || 0, g.y || 0].join(",") : ""), s = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, g.svg = !!(Pe && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), g.svg && (s && -1 !== (t.style[we] + "").indexOf("matrix") && (a = t.style[we], s = !1), De(t, V(t, Se, r, !1, "50% 50%") + "", g, t.getAttribute("data-svg-origin")), be = o.useSVGTransformAttr || ke, l = t.getAttribute("transform"), s && l && -1 !== l.indexOf("matrix") && (a = l, s = 0)), !s) {
                for (l = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = l.length; --u > -1;)c = Number(l[u]), l[u] = (h = c - (c |= 0)) ? (0 | h * _ + (0 > h ? -.5 : .5)) / _ + c : c;
                if (16 === l.length) {
                    var w, T, S, C, A, P = l[0], E = l[1], F = l[2], D = l[3], L = l[4], I = l[5], M = l[6], O = l[7], z = l[8], N = l[9], j = l[10], H = l[12], B = l[13], q = l[14], W = l[11], X = Math.atan2(M, j);
                    g.zOrigin && (q = -g.zOrigin, H = z * q - l[12], B = N * q - l[13], q = j * q + g.zOrigin - l[14]), g.rotationX = X * R, X && (C = Math.cos(-X), A = Math.sin(-X), w = L * C + z * A, T = I * C + N * A, S = M * C + j * A, z = L * -A + z * C, N = I * -A + N * C, j = M * -A + j * C, W = O * -A + W * C, L = w, I = T, M = S), X = Math.atan2(z, j), g.rotationY = X * R, X && (C = Math.cos(-X), A = Math.sin(-X), w = P * C - z * A, T = E * C - N * A, S = F * C - j * A, N = E * A + N * C, j = F * A + j * C, W = D * A + W * C, P = w, E = T, F = S), X = Math.atan2(E, P), g.rotation = X * R, X && (C = Math.cos(-X), A = Math.sin(-X), P = P * C + L * A, T = E * C + I * A, I = E * -A + I * C, M = F * -A + M * C, E = T), g.rotationX && Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 && (g.rotationX = g.rotation = 0, g.rotationY += 180), g.scaleX = (0 | Math.sqrt(P * P + E * E) * _ + .5) / _, g.scaleY = (0 | Math.sqrt(I * I + N * N) * _ + .5) / _, g.scaleZ = (0 | Math.sqrt(M * M + j * j) * _ + .5) / _, g.skewX = 0, g.perspective = W ? 1 / (0 > W ? -W : W) : 0, g.x = H, g.y = B, g.z = q, g.svg && (g.x -= g.xOrigin - (g.xOrigin * P - g.yOrigin * L), g.y -= g.yOrigin - (g.yOrigin * E - g.xOrigin * I))
                } else if (!(Ce && !n && l.length && g.x === l[4] && g.y === l[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === V(t, "display", e))) {
                    var $ = l.length >= 6, Y = $ ? l[0] : 1, Z = l[1] || 0, U = l[2] || 0, G = $ ? l[3] : 1;
                    g.x = l[4] || 0, g.y = l[5] || 0, d = Math.sqrt(Y * Y + Z * Z), p = Math.sqrt(G * G + U * U), f = Y || Z ? Math.atan2(Z, Y) * R : g.rotation || 0, m = U || G ? Math.atan2(U, G) * R + f : g.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (v ? (d *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (p *= -1, m += 0 >= m ? 180 : -180)), g.scaleX = d, g.scaleY = p, g.rotation = f, g.skewX = m, Ce && (g.rotationX = g.rotationY = g.z = 0, g.perspective = x, g.scaleZ = 1), g.svg && (g.x -= g.xOrigin - (g.xOrigin * Y - g.yOrigin * Z), g.y -= g.yOrigin - (g.yOrigin * G - g.xOrigin * U))
                }
                g.zOrigin = b;
                for (u in g)y > g[u] && g[u] > -y && (g[u] = 0)
            }
            return i && (t._gsTransform = g, g.svg && (be && t.style[we] ? Oe(t.style, we) : !be && t.getAttribute("transform") && t.removeAttribute("transform"))), g
        }, Ie = function (t) {
            var e, i, n = this.data, r = -n.rotation * I, s = r + n.skewX * I, o = 1e5, a = (0 | Math.cos(r) * n.scaleX * o) / o, l = (0 | Math.sin(r) * n.scaleX * o) / o, u = (0 | Math.sin(s) * -n.scaleY * o) / o, c = (0 | Math.cos(s) * n.scaleY * o) / o, h = this.t.style, d = this.t.currentStyle;
            if (d) {
                i = l, l = -u, u = -i, e = d.filter, h.filter = "";
                var p, f, g = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== d.position, _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c, w = n.x + g * n.xPercent / 100, T = n.y + v * n.yPercent / 100;
                if (null != n.ox && (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, f = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, w += p - (p * a + f * l), T += f - (p * u + f * c)), y ? (p = g / 2, f = v / 2, _ += ", Dx=" + (p - (p * a + f * l) + w) + ", Dy=" + (f - (p * u + f * c) + T) + ")") : _ += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, _) : _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
                    var S, C, A, P = 8 > m ? 1 : -1;
                    for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + w), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + T), ge = 0; 4 > ge; ge++)C = ee[ge], S = d[C], i = -1 !== S.indexOf("px") ? parseFloat(S) : G(this.t, C, parseFloat(S), S.replace(b, "")) || 0, A = i !== n[C] ? 2 > ge ? -n.ieOffsetX : -n.ieOffsetY : 2 > ge ? p - n.ieOffsetX : f - n.ieOffsetY, h[C] = (n[C] = Math.round(i - A * (0 === ge || 2 === ge ? 1 : P))) + "px"
                }
            }
        }, Re = H.set3DTransformRatio = H.setTransformRatio = function (t) {
            var e, i, n, r, s, o, a, l, u, c, h, d, f, m, g, v, y, _, b, x, w, T, S, C = this.data, A = this.t.style, P = C.rotation, E = C.rotationX, F = C.rotationY, k = C.scaleX, D = C.scaleY, L = C.scaleZ, R = C.x, M = C.y, O = C.z, z = C.svg, N = C.perspective, j = C.force3D;
            if (!((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || O || N || F || E) || be && z || !Ce)return P || C.skewX || z ? (P *= I, T = C.skewX * I, S = 1e5, e = Math.cos(P) * k, r = Math.sin(P) * k, i = Math.sin(P - T) * -D, s = Math.cos(P - T) * D, T && "simple" === C.skewType && (y = Math.tan(T), y = Math.sqrt(1 + y * y), i *= y, s *= y, C.skewY && (e *= y, r *= y)), z && (R += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), M += C.yOrigin - (C.xOrigin * r + C.yOrigin * s), m = 1e-6, m > R && R > -m && (R = 0), m > M && M > -m && (M = 0)), b = (0 | e * S) / S + "," + (0 | r * S) / S + "," + (0 | i * S) / S + "," + (0 | s * S) / S + "," + R + "," + M + ")", z && be ? this.t.setAttribute("transform", "matrix(" + b) : A[we] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b) : A[we] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + D + "," + R + "," + M + ")", void 0;
            if (p && (m = 1e-4, m > k && k > -m && (k = L = 2e-5), m > D && D > -m && (D = L = 2e-5), !N || C.z || C.rotationX || C.rotationY || (N = 0)), P || C.skewX)P *= I, g = e = Math.cos(P), v = r = Math.sin(P), C.skewX && (P -= C.skewX * I, g = Math.cos(P), v = Math.sin(P), "simple" === C.skewType && (y = Math.tan(C.skewX * I), y = Math.sqrt(1 + y * y), g *= y, v *= y, C.skewY && (e *= y, r *= y))), i = -v, s = g; else {
                if (!(F || E || 1 !== L || N || z))return A[we] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + M + "px," + O + "px)" + (1 !== k || 1 !== D ? " scale(" + k + "," + D + ")" : ""), void 0;
                e = s = 1, i = r = 0
            }
            u = 1, n = o = a = l = c = h = 0, d = N ? -1 / N : 0, f = C.zOrigin, m = 1e-6, x = ",", w = "0", P = F * I, P && (g = Math.cos(P), v = Math.sin(P), a = -v, c = d * -v, n = e * v, o = r * v, u = g, d *= g, e *= g, r *= g), P = E * I, P && (g = Math.cos(P), v = Math.sin(P), y = i * g + n * v, _ = s * g + o * v, l = u * v, h = d * v, n = i * -v + n * g, o = s * -v + o * g, u *= g, d *= g, i = y, s = _), 1 !== L && (n *= L, o *= L, u *= L, d *= L), 1 !== D && (i *= D, s *= D, l *= D, h *= D), 1 !== k && (e *= k, r *= k, a *= k, c *= k), (f || z) && (f && (R += n * -f, M += o * -f, O += u * -f + f), z && (R += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), M += C.yOrigin - (C.xOrigin * r + C.yOrigin * s)), m > R && R > -m && (R = w), m > M && M > -m && (M = w), m > O && O > -m && (O = 0)), b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > a && a > -m ? w : a), b += x + (m > c && c > -m ? w : c) + x + (m > i && i > -m ? w : i) + x + (m > s && s > -m ? w : s), E || F ? (b += x + (m > l && l > -m ? w : l) + x + (m > h && h > -m ? w : h) + x + (m > n && n > -m ? w : n), b += x + (m > o && o > -m ? w : o) + x + (m > u && u > -m ? w : u) + x + (m > d && d > -m ? w : d) + x) : b += ",0,0,0,0,1,0,", b += R + x + M + x + O + x + (N ? 1 + -O / N : 1) + ")", A[we] = b
        };
        u = Ae.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = 0, u.scaleX = u.scaleY = u.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (t, e, i, n, s, a, l) {
                if (n._lastParsedTransform === l)return s;
                n._lastParsedTransform = l;
                var u, c, h, d, p, f, m, g = n._transform = Le(t, r, !0, l.parseTransform), v = t.style, y = 1e-6, _ = xe.length, b = l, x = {};
                if ("string" == typeof b.transform && we)h = N.style, h[we] = b.transform, h.display = "block", h.position = "absolute", O.body.appendChild(N), u = Le(N, null, !1), O.body.removeChild(N); else if ("object" == typeof b) {
                    if (u = {
                            scaleX: se(null != b.scaleX ? b.scaleX : b.scale, g.scaleX),
                            scaleY: se(null != b.scaleY ? b.scaleY : b.scale, g.scaleY),
                            scaleZ: se(b.scaleZ, g.scaleZ),
                            x: se(b.x, g.x),
                            y: se(b.y, g.y),
                            z: se(b.z, g.z),
                            xPercent: se(b.xPercent, g.xPercent),
                            yPercent: se(b.yPercent, g.yPercent),
                            perspective: se(b.transformPerspective, g.perspective)
                        }, m = b.directionalRotation, null != m)if ("object" == typeof m)for (h in m)b[h] = m[h]; else b.rotation = m;
                    "string" == typeof b.x && -1 !== b.x.indexOf("%") && (u.x = 0, u.xPercent = se(b.x, g.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (u.y = 0, u.yPercent = se(b.y, g.yPercent)), u.rotation = oe("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : g.rotation, g.rotation, "rotation", x), Ce && (u.rotationX = oe("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", x), u.rotationY = oe("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", x)), u.skewX = null == b.skewX ? g.skewX : oe(b.skewX, g.skewX), u.skewY = null == b.skewY ? g.skewY : oe(b.skewY, g.skewY), (c = u.skewY - g.skewY) && (u.skewX += c, u.rotation += c)
                }
                for (Ce && null != b.force3D && (g.force3D = b.force3D, f = !0), g.skewType = b.skewType || g.skewType || o.defaultSkewType, p = g.force3D || g.z || g.rotationX || g.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == b.scale || (u.scaleZ = 1); --_ > -1;)i = xe[_], d = u[i] - g[i], (d > y || -y > d || null != b[i] || null != M[i]) && (f = !0, s = new fe(g, i, g[i], d, s), i in x && (s.e = x[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                return d = b.transformOrigin, g.svg && (d || b.svgOrigin) && (De(t, ne(d), u, b.svgOrigin), s = new fe(g, "xOrigin", g.xOrigin, u.xOrigin - g.xOrigin, s, -1, "transformOrigin"), s.b = g.xOrigin, s.e = s.xs0 = u.xOrigin, s = new fe(g, "yOrigin", g.yOrigin, u.yOrigin - g.yOrigin, s, -1, "transformOrigin"), s.b = g.yOrigin, s.e = s.xs0 = u.yOrigin, d = be ? null : "0px 0px"), (d || Ce && p && g.zOrigin) && (we ? (f = !0, i = Se, d = (d || V(t, i, r, !1, "50% 50%")) + "", s = new fe(v, i, 0, 0, s, -1, "transformOrigin"), s.b = v[i], s.plugin = a, Ce ? (h = g.zOrigin, d = d.split(" "), g.zOrigin = (d.length > 2 && (0 === h || "0px" !== d[2]) ? parseFloat(d[2]) : h) || 0, s.xs0 = s.e = d[0] + " " + (d[1] || "50%") + " 0px", s = new fe(g, "zOrigin", 0, 0, s, -1, s.n), s.b = h, s.xs0 = s.e = g.zOrigin) : s.xs0 = s.e = d) : ne(d + "", g)), f && (n._transformType = g.svg && be || !p && 3 !== this._transformType ? 2 : 3), s
            }, prefix: !0
        }), ye("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), ye("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, s, o) {
                e = this.format(e);
                var a, l, u, c, h, d, p, f, m, g, v, y, _, b, x, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
                for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++)this.p.indexOf("border") && (T[l] = Z(T[l])), h = c = V(t, T[l], r, !1, "0px"), -1 !== h.indexOf(" ") && (c = h.split(" "), h = c[0], c = c[1]), d = u = a[l], p = parseFloat(h), y = h.substr((p + "").length), _ = "=" === d.charAt(1), _ ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), v = d.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(d), v = d.substr((f + "").length)), "" === v && (v = n[i] || y), v !== y && (b = G(t, "borderLeft", p, y), x = G(t, "borderTop", p, y), "%" === v ? (h = 100 * (b / m) + "%", c = 100 * (x / g) + "%") : "em" === v ? (w = G(t, "borderLeft", 1, "em"), h = b / w + "em", c = x / w + "em") : (h = b + "px", c = x + "px"), _ && (d = parseFloat(h) + f + v, u = parseFloat(c) + f + v)), o = me(S, T[l], h + " " + c, d + " " + u, !1, "0px", o);
                return o
            }, prefix: !0, formatter: he("0px 0px 0px 0px", !1, !0)
        }), ye("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, n, s, o) {
                var a, l, u, c, h, d, p = "background-position", f = r || U(t, null), g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), v = this.format(e);
                if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (d = V(t, "backgroundImage").replace(P, ""), d && "none" !== d)) {
                    for (a = g.split(" "), l = v.split(" "), j.setAttribute("src", d), u = 2; --u > -1;)g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : 100 * (parseFloat(g) / h) + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, v, s, o)
            }, formatter: ne
        }), ye("backgroundSize", {defaultValue: "0 0", formatter: ne}), ye("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), ye("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), ye("transformStyle", {prefix: !0}), ye("backfaceVisibility", {prefix: !0}), ye("userSelect", {prefix: !0}), ye("margin", {parser: de("marginTop,marginRight,marginBottom,marginLeft")}), ye("padding", {parser: de("paddingTop,paddingRight,paddingBottom,paddingLeft")}), ye("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, s, o) {
                var a, l, u;
                return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(V(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
            }
        }), ye("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), ye("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
                return r
            }
        }), ye("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, n, s, o) {
                return this.parseComplex(t.style, this.format(V(t, "borderTopWidth", r, !1, "0px") + " " + V(t, "borderTopStyle", r, !1, "solid") + " " + V(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ce) || ["#000"])[0]
            }
        }), ye("borderWidth", {parser: de("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), ye("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r) {
                var s = t.style, o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new fe(s, o, 0, 0, r, -1, i, !1, 0, s[o], e)
            }
        });
        var Me = function (t) {
            var e, i = this.t, n = i.filter || V(this.data, "filter") || "", r = 0 | this.s + this.c * t;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !V(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
        };
        ye("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, n, s, o) {
                var a = parseFloat(V(t, "opacity", r, !1, "1")), l = t.style, u = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === V(t, "visibility", r) && 0 !== e && (a = 0), q ? s = new fe(l, "opacity", a, e - a, s) : (s = new fe(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Me), u && (s = new fe(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
            }
        });
        var Oe = function (t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, ze = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : Oe(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        ye("className", {
            parser: function (t, e, n, s, o, a, l) {
                var u, c, h, d, p, f = t.getAttribute("class") || "", m = t.style.cssText;
                if (o = s._classNamePT = new fe(t, n, 0, 0, o, 2), o.setRatio = ze, o.pr = -11, i = !0, o.b = f, c = Q(t, r), h = t._gsClassPT) {
                    for (d = {}, p = h.data; p;)d[p.p] = 1, p = p._next;
                    h.setRatio(1)
                }
                return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = J(t, c, Q(t), l, d), t.setAttribute("class", f), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
            }
        });
        var Ne = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s, o = this.t.style, a = l.transform.parse;
                if ("all" === this.e)o.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;)i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Se : l[i].p), Oe(o, i);
                r && (Oe(o, we), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
            }
        };
        for (ye("clearProps", {
            parser: function (t, e, n, r, s) {
                return s = new fe(t, n, 0, 0, s, 2), s.setRatio = Ne, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
            }
        }), u = "bezier,throwProps,physicsProps,physics2D".split(","), ge = u.length; ge--;)_e(u[ge]);
        u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (t, e, a) {
            if (!t.nodeType)return !1;
            this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = U(t, ""), s = this._overwriteProps;
            var u, p, m, g, v, y, _, b, x, T = t.style;
            if (h && "" === T.zIndex && (u = V(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, u = Q(t, r), T.cssText = g + ";" + e, u = J(t, u, Q(t)).difs, !q && w.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, T.cssText = g), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                for (x = 3 === this._transformType, we ? d && (h = !0, "" === T.zIndex && (_ = V(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : T.zoom = 1, m = p; m && m._next;)m = m._next;
                b = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = we ? Re : Ie, b.data = this._transform || Le(t, r, !0), b.tween = a, b.pr = -1, s.pop()
            }
            if (i) {
                for (; p;) {
                    for (y = p._next, m = g; m && m.pr > p.pr;)m = m._next;
                    (p._prev = m ? m._prev : v) ? p._prev._next = p : g = p, (p._next = m) ? m._prev = p : v = p, p = y
                }
                this._firstPT = g
            }
            return !0
        }, u.parse = function (t, e, i, s) {
            var o, a, u, h, d, p, f, m, g, v, y = t.style;
            for (o in e)p = e[o], a = l[o], a ? i = a.parse(t, p, o, this, i, s, e) : (d = V(t, o, r) + "", g = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && S.test(p) ? (g || (p = ue(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = me(y, o, d, p, !0, "transparent", i, 0, s)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(d), f = u || 0 === u ? d.substr((u + "").length) : "", ("" === d || "auto" === d) && ("width" === o || "height" === o ? (u = ie(t, o, r), f = "px") : "left" === o || "top" === o ? (u = K(t, o, r), f = "px") : (u = "opacity" !== o ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(b, "")) : (h = parseFloat(p), m = g ? p.replace(b, "") : ""), "" === m && (m = o in n ? n[o] : f), p = h || 0 === h ? (v ? h + u : h) + m : e[o], f !== m && "" !== m && (h || 0 === h) && u && (u = G(t, o, u, f), "%" === m ? (u /= G(t, o, 100, "%") / 100, e.strictUnits !== !0 && (d = u + "%")) : "em" === m ? u /= G(t, o, 1, "em") : "px" !== m && (h = G(t, o, h, m), m = "px"), v && (h || 0 === h) && (p = h + u + m)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== y[o] && (p || "NaN" != p + "" && null != p) ? (i = new fe(y, o, h || u || 0, 0, i, -1, o, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : d) : X("invalid " + o + " tween value: " + e[o]) : (i = new fe(y, o, u, h - u, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, d, p), i.xs0 = m)) : i = me(y, o, d, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
            return i
        }, u.setRatio = function (t) {
            var e, i, n, r = this._firstPT, s = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)if (1 === r.type)if (n = r.l, 2 === n)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++)i += r["xn" + n] + r["xs" + (n + 1)];
                    r.t[r.p] = i
                } else-1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;)2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;)2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, u._enableTransforms = function (t) {
            this._transform = this._transform || Le(this._target, r, !0), this._transformType = this._transform.svg && be || !t && 3 !== this._transformType ? 2 : 3
        };
        var je = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        u._addLazySet = function (t, e, i) {
            var n = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = je, n.data = this
        }, u._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, u._kill = function (e) {
            var i, n, r, s = e;
            if (e.autoAlpha || e.alpha) {
                s = {};
                for (n in e)s[n] = e[n];
                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
        };
        var He = function (t, e, i) {
            var n, r, s, o;
            if (t.slice)for (r = t.length; --r > -1;)He(t[r], e, i); else for (n = t.childNodes, r = n.length; --r > -1;)s = n[r], o = s.type, s.style && (e.push(Q(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || He(s, e, i)
        };
        return o.cascadeTo = function (t, i, n) {
            var r, s, o, a, l = e.to(t, i, n), u = [l], c = [], h = [], d = [], p = e._internals.reservedProps;
            for (t = l._targets || l.target, He(t, c, d), l.render(i, !0, !0), He(t, h), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1;)if (s = J(d[r], c[r], h[r]), s.firstMPT) {
                s = s.difs;
                for (o in n)p[o] && (s[o] = n[o]);
                a = {};
                for (o in s)a[o] = c[r][o];
                u.push(e.fromTo(d[r], i, a, s))
            }
            return u
        }, t.activate([o]), o
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps", priority: -1, API: 2, init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = t.prototype;
        e._onInitAllProps = function () {
            for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;)o[r[s]] = 1;
            for (s = r.length; --s > -1;)for (t = r[s], e = n._firstPT; e;)i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
            return !1
        }, e._add = function (t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
        }
    }(), _gsScope._gsDefine.plugin({
        propName: "attr", API: 2, version: "0.3.3", init: function (t, e) {
            var i, n, r;
            if ("function" != typeof t.setAttribute)return !1;
            this._target = t, this._proxy = {}, this._start = {}, this._end = {};
            for (i in e)this._start[i] = this._proxy[i] = n = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
            return !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;)e = i[n], this._target.setAttribute(e, r[e] + "")
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.2.1", API: 2, init: function (t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, n, r, s, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360, u = 1e-6;
            for (i in e)"useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = s - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > u || -u > o) && (this._addTween(t, i, r, r + o, i), this._overwriteProps.push(i)));
            return !0
        }, set: function (t) {
            var e;
            if (1 !== t)this._super.setRatio.call(this, t); else for (e = this._firstPT; e;)e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope, s = r.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, l = s._class, u = function (e, i) {
            var n = l("easing." + e, function () {
            }, !0), r = n.prototype = new t;
            return r.constructor = n, r.getRatio = i, n
        }, c = t.register || function () {
            }, h = function (t, e, i, n) {
            var r = l("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
            return c(r, t), r
        }, d = function (t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, p = function (e, i) {
            var n = l("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), r = n.prototype = new t;
            return r.constructor = n, r.getRatio = i, r.config = function (t) {
                return new n(t)
            }, n
        }, f = h("Back", p("BackOut", function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), p("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), p("BackInOut", function (t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = l("easing.SlowMo", function (t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), g = m.prototype = new t;
        return g.constructor = m, g.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
            return new m(t, e, i)
        }, e = l("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, g.config = e.config = function (t) {
            return new e(t)
        }, i = l("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, n, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), p = h, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;)i = f ? Math.random() : 1 / h * p, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (s = 1 - i, r = s * s * v) : "in" === l ? r = i * i * v : .5 > i ? (s = 2 * i, r = .5 * s * s * v) : (s = 2 * (1 - i), r = .5 * s * s * v), f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                x: i,
                y: n
            };
            for (u.sort(function (t, e) {
                return t.x - e.x
            }), a = new d(1, 1, null), p = h; --p > -1;)o = u[p], a = new d(o.x, o.y, a);
            this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
        }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;)e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;)e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, g.config = function (t) {
            return new i(t)
        }, i.ease = new i, h("Bounce", u("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), h("Circ", u("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function (e, i, n) {
            var r = l("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
            }, !0), s = r.prototype = new t;
            return s.constructor = r, s.getRatio = i, s.config = function (t, e) {
                return new r(t, e)
            }, r
        }, h("Elastic", n("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), n("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }, .45)), h("Expo", u("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), h("Sine", u("SineOut", function (t) {
            return Math.sin(t * a)
        }), u("SineIn", function (t) {
            return -Math.cos(t * a) + 1
        }), u("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, o, a, l = function (t) {
            var e, n = t.split("."), r = i;
            for (e = 0; n.length > e; e++)r[n[e]] = r = r[n[e]] || {};
            return r
        }, u = l("com.greensock"), c = 1e-10, h = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        }, d = function () {
        }, p = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), f = {}, m = function (n, r, s, o) {
            this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = s;
            var a = [];
            this.check = function (u) {
                for (var c, h, d, p, g = r.length, v = g; --g > -1;)(c = f[r[g]] || new m(r[g], [])).gsClass ? (a[g] = c.gsClass, v--) : u && c.sc.push(this);
                if (0 === v && s)for (h = ("com.greensock." + n).split("."), d = h.pop(), p = l(h.join("."))[d] = this.gsClass = s.apply(s, a), o && (i[d] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                    return p
                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; this.sc.length > g; g++)this.sc[g].check()
            }, this.check(!0)
        }, g = t._gsDefine = function (t, e, i, n) {
            return new m(t, e, i, n)
        }, v = u._class = function (t, e, i) {
            return e = e || function () {
                }, g(t, [], function () {
                return e
            }, i), e
        };
        g.globals = i;
        var y = [0, 0, 1, 1], _ = [], b = v("easing.Ease", function (t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
        }, !0), x = b.map = {}, w = b.register = function (t, e, i, n) {
            for (var r, s, o, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)for (s = l[c], r = n ? v("easing." + s, null, !0) : u.easing[s] || {}, o = h.length; --o > -1;)a = h[o], x[s + "." + a] = x[a + s] = r[a] = t.getRatio ? t : t[a] || new t
        };
        for (s = b.prototype, s._calcEnd = !1, s.getRatio = function (t) {
            if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;)s = n[r] + ",Power" + r, w(new b(null, null, 1, r), s, "easeOut", !0), w(new b(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), w(new b(null, null, 3, r), s, "easeInOut");
        x.linear = u.easing.Linear.easeIn, x.swing = u.easing.Quad.easeInOut;
        var T = v("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s, l, u = this._listeners[t], c = 0;
            for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;)s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === c && r > s.pr && (c = l + 1);
            u.splice(c, 0, {c: e, s: i, up: n, pr: r}), this !== o || a || o.wake()
        }, s.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n)for (i = n.length; --i > -1;)if (n[i].c === e)return n.splice(i, 1), void 0
        }, s.dispatchEvent = function (t) {
            var e, i, n, r = this._listeners[t];
            if (r)for (e = r.length, i = this._eventTarget; --e > -1;)n = r[e], n && (n.up ? n.c.call(n.s || i, {
                type: t,
                target: i
            }) : n.c.call(n.s || i))
        };
        var S = t.requestAnimationFrame, C = t.cancelAnimationFrame, A = Date.now || function () {
                return (new Date).getTime()
            }, P = A();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;)S = t[n[r] + "RequestAnimationFrame"], C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        v("Ticker", function (t, e) {
            var i, n, r, s, l, u = this, h = A(), p = e !== !1 && S, f = 500, m = 33, g = "tick", v = function (t) {
                var e, o, a = A() - P;
                a > f && (h += a - m), P += a, u.time = (P - h) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(v)), o && u.dispatchEvent(g)
            };
            T.call(u), u.time = u.frame = 0, u.tick = function () {
                v(!0)
            }, u.lagSmoothing = function (t, e) {
                f = t || 1 / c, m = Math.min(e, f, 0)
            }, u.sleep = function () {
                null != r && (p && C ? C(r) : clearTimeout(r), n = d, r = null, u === o && (a = !1))
            }, u.wake = function () {
                null !== r ? u.sleep() : u.frame > 10 && (P = A() - f + 5), n = 0 === i ? d : p && S ? S : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - u.time) + 1)
                }, u === o && (a = !0), v(2)
            }, u.fps = function (t) {
                return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, u.wake(), void 0) : i
            }, u.useRAF = function (t) {
                return arguments.length ? (u.sleep(), p = t, u.fps(i), void 0) : p
            }, u.fps(t), setTimeout(function () {
                p && 5 > u.frame && u.useRAF(!1)
            }, 1500)
        }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
        var E = v("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                a || o.wake();
                var i = this.vars.useFrames ? q : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = E.ticker = new u.Ticker, s = E.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var F = function () {
            a && A() - P > 2e3 && o.wake(), setTimeout(F, 2e3)
        };
        F(), s.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function () {
        }, s.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, s._enabled = function (t, e) {
            return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function () {
            return this._enabled(!1, !1)
        }, s.kill = function (t, e) {
            return this._kill(t, e), this
        }, s._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function (t, e, i) {
            if (a || o.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), R.length && $())
            }
            return this
        }, s.progress = s.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, s.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function (t) {
            if (!arguments.length)return this._timeScale;
            if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function (t) {
            if (!arguments.length)return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var k = v("core.SimpleTimeline", function (t) {
            E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = k.prototype = new E, s.constructor = k, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)for (n = t._startTime; i && i._startTime > n;)i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function (t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;)n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function () {
            return a || o.wake(), this._totalTime
        };
        var D = v("TweenLite", function (e, i, n) {
            if (E.call(this, i, n), this.render = D.prototype.render, null == e)throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? B[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : B[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])for (this._targets = o = h(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++)s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(h(s))) : (this._siblings[r] = Y(s, this, !1), 1 === l && this._siblings[r].length > 1 && U(s, this, null, 1, this._siblings[r])) : (s = o[r--] = D.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1); else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
        }, !0), L = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, I = function (t, e) {
            var i, n = {};
            for (i in t)H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!z[i] || z[i] && z[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        s = D.prototype = new E, s.constructor = D, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, D.version = "1.16.1", D.defaultEase = s._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
            o.lagSmoothing(t, e)
        }, D.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
        var R = [], M = {}, O = D._internals = {
            isArray: p,
            isSelector: L,
            lazyTweens: R
        }, z = D._plugins = {}, N = O.tweenLookup = {}, j = 0, H = O.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1
        }, B = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, q = E._rootFramesTimeline = new k, W = E._rootTimeline = new k, X = 30, $ = O.lazyRender = function () {
            var t, e = R.length;
            for (M = {}; --e > -1;)t = R[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            R.length = 0
        };
        W._startTime = o.time, q._startTime = o.frame, W._active = q._active = !0, setTimeout($, 1), E._updateRoot = D.render = function () {
            var t, e, i;
            if (R.length && $(), W.render((o.time - W._startTime) * W._timeScale, !1, !1), q.render((o.frame - q._startTime) * q._timeScale, !1, !1), R.length && $(), o.frame >= X) {
                X = o.frame + (parseInt(D.autoSleep, 10) || 120);
                for (i in N) {
                    for (e = N[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete N[i]
                }
                if (i = W._first, (!i || i._paused) && D.autoSleep && !q._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;)i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", E._updateRoot);
        var Y = function (t, e, i) {
            var n, r, s = t._gsTweenID;
            if (N[s || (t._gsTweenID = s = "t" + j++)] || (N[s] = {
                    target: t,
                    tweens: []
                }), e && (n = N[s].tweens, n[r = n.length] = e, i))for (; --r > -1;)n[r] === e && n.splice(r, 1);
            return N[s].tweens
        }, Z = function (t, e, i, n) {
            var r, s, o = t.vars.onOverwrite;
            return o && (r = o(t, e, i, n)), o = D.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
        }, U = function (t, e, i, n, r) {
            var s, o, a, l;
            if (1 === n || n >= 4) {
                for (l = r.length, s = 0; l > s; s++)if ((a = r[s]) !== e)a._gc || Z(a, e) && a._enabled(!1, !1) && (o = !0); else if (5 === n)break;
                return o
            }
            var u, h = e._startTime + c, d = [], p = 0, f = 0 === e._duration;
            for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || V(e, 0, f), 0 === V(a, u, f) && (d[p++] = a)) : h >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && 2e-10 >= h - a._startTime || (d[p++] = a)));
            for (s = p; --s > -1;)if (a = d[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                if (2 !== n && !Z(a, e))continue;
                a._enabled(!1, !1) && (o = !0)
            }
            return o
        }, V = function (t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                if (s += n._startTime, r *= n._timeScale, n._paused)return -100;
                n = n._timeline
            }
            return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
        };
        s._init = function () {
            var t, e, i, n, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender, u = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt)r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)if (this._time > 0)this._startAt = null; else if (0 !== a)return
            } else if (s.runBackwards && 0 !== a)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (l = !1), i = {};
                for (n in s)H[n] && "autoCSS" !== n || (i[n] = s[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                    if (0 === this._time)return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : x[u] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function (e, i, n, r) {
            var s, o, a, l, u, c;
            if (null == e)return !1;
            M[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && z.css && this.vars.autoCSS !== !1 && I(this.vars, e);
            for (s in this.vars) {
                if (c = this.vars[s], H[s])c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this)); else if (z[s] && (l = new z[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: s,
                        pg: !0,
                        pr: l._priority
                    }, o = l._overwriteProps.length; --o > -1;)i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[s] = u = {
                    _next: this._firstPT,
                    t: e,
                    p: s,
                    f: "function" == typeof e[s],
                    n: s,
                    pg: !1,
                    pr: 0
                }, u.s = u.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                u && u._next && (u._next._prev = u)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && U(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
        }, s.render = function (t, e, i) {
            var n, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
            if (t >= l)this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === c && "isPause" !== this.data) && u !== t && (i = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : c);
            else if (1e-7 > t)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : c)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var h = t / l, d = this._easeType, p = this._easePower;
                (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > t / l ? h / 2 : 1 - h / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = a, this._rawPrevTime = u, R.push(this), this._lazy = [t, e], void 0;
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), s = this._firstPT; s;)s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
            }
        }, s._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var n, r, s, o, a, l, u, c, h;
            if ((p(e) || L(e)) && "number" != typeof e[0])for (n = e.length; --n > -1;)this._kill(t, e[n]) && (l = !0); else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)if (e === this._targets[n]) {
                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target)return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (s in u)a[s] && (h || (h = []), h.push(s));
                        if (!Z(this, i, e, h))return !1
                    }
                    for (s in u)(o = a[s]) && (o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function () {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
        }, s._enabled = function (t, e) {
            if (a || o.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)for (i = n.length; --i > -1;)this._siblings[i] = Y(n[i], this, !0); else this._siblings = Y(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, D.to = function (t, e, i) {
            return new D(t, e, i)
        }, D.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
        }, D.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
        }, D.delayedCall = function (t, e, i, n, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, D.set = function (t, e) {
            return new D(t, 0, e)
        }, D.getTweensOf = function (t, e) {
            if (null == t)return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, n, r, s;
            if ((p(t) || L(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;)n = n.concat(D.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)for (s = n[i], r = i; --r > -1;)s === n[r] && n.splice(i, 1)
            } else for (n = Y(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;)n[r]._kill(i, t)
        };
        var G = v("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = G.prototype
        }, !0);
        if (s = G.prototype, G.version = "1.10.1", G.API = 2, s._firstPT = null, s._addTween = function (t, e, i, n, r, s) {
                var o, a;
                return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: o,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: s
                }, a._next && (a._next._prev = a), a) : void 0
            }, s.setRatio = function (t) {
                for (var e, i = this._firstPT, n = 1e-6; i;)e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, s._kill = function (t) {
                var e, i = this._overwriteProps, n = this._firstPT;
                if (null != t[this._propName])this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
                for (; n;)null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, s._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, D._onPluginEvent = function (t, e) {
                var i, n, r, s, o, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (o = a._next, n = r; n && n.pr > a.pr;)n = n._next;
                        (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                    }
                    a = e._firstPT = r
                }
                for (; a;)a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, G.activate = function (t) {
                for (var e = t.length; --e > -1;)t[e].API === G.API && (z[(new t[e])._propName] = t[e]);
                return !0
            }, g.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
                var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    G.call(this, i, n), this._overwriteProps = r || []
                }, t.global === !0), a = o.prototype = new G(i);
                a.constructor = o, o.API = t.API;
                for (e in s)"function" == typeof t[e] && (a[s[e]] = t[e]);
                return o.version = t.version, G.activate([o]), o
            }, n = t._gsQueue) {
            for (r = 0; n.length > r; r++)n[r]();
            for (s in f)f[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");