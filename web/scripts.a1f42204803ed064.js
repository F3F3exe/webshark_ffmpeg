if (console.log("INITED::enable-threads.js"),
typeof window > "u") {
    async function T(g) {
        if ("only-if-cached" === g.cache && "same-origin" !== g.mode)
            return;
        "no-cors" === g.mode && (g = new Request(g.url,{
            cache: g.cache,
            credentials: "omit",
            headers: g.headers,
            integrity: g.integrity,
            destination: g.destination,
            keepalive: g.keepalive,
            method: g.method,
            mode: g.mode,
            redirect: g.redirect,
            referrer: g.referrer,
            referrerPolicy: g.referrerPolicy,
            signal: g.signal
        }));
        let p = await fetch(g).catch(r=>console.error(r));
        if (0 === p.status)
            return p;
        const m = new Headers(p.headers);
        return m.set("Cross-Origin-Embedder-Policy", "credentialless"),
        m.set("Cross-Origin-Opener-Policy", "same-origin"),
        new Response(p.body,{
            status: p.status,
            statusText: p.statusText,
            headers: m
        })
    }
    self.addEventListener("install", ()=>self.skipWaiting()),
    self.addEventListener("activate", g=>g.waitUntil(self.clients.claim())),
    self.addEventListener("fetch", function(g) {
        g.respondWith(T(g.request))
    })
} else
    !async function() {
        if (!1 !== window.crossOriginIsolated)
            return;
        let T = await navigator.serviceWorker.register(window.document.currentScript.src).catch(g=>console.error("COOP/COEP Service Worker failed to register:", g));
        T && (console.log("COOP/COEP Service Worker registered", T.scope),
        T.addEventListener("updatefound", ()=>{
            console.log("Reloading page to make use of updated COOP/COEP Service Worker."),
            window.location.reload()
        }
        ),
        T.active && !navigator.serviceWorker.controller && (console.log("Reloading page to make use of COOP/COEP Service Worker."),
        window.location.reload()))
    }();
(function(T, g) {
    "object" == typeof exports && "object" == typeof module ? module.exports = g() : "function" == typeof define && define.amd ? define([], g) : "object" == typeof exports ? exports.FFmpeg = g() : T.FFmpeg = g()
}
)(self, function() {
    return T = {
        497: (p,m,r)=>{
            var s = r(72)
              , F = r(306).devDependencies;
            p.exports = {
                corePath: typeof process < "u" && "development" === process.env.FFMPEG_ENV ? s("/node_modules/@ffmpeg/core/dist/ffmpeg-core.js") : "https://unpkg.com/@ffmpeg/core@".concat(F["@ffmpeg/core"].substring(1), "/dist/ffmpeg-core.js")
            }
        }
        ,
        663: (p,m,r)=>{
            function s(c, O, d, f, u, k, n) {
                try {
                    var E = c[k](n)
                      , y = E.value
                } catch (b) {
                    return void d(b)
                }
                E.done ? O(y) : Promise.resolve(y).then(f, u)
            }
            var c, O, F = r(72), h = function(c) {
                return new Promise(function(O, d) {
                    var f = new FileReader;
                    f.onload = function() {
                        O(f.result)
                    }
                    ,
                    f.onerror = function(u) {
                        d(Error("File could not be read! Code=".concat(u.target.error.code)))
                    }
                    ,
                    f.readAsArrayBuffer(c)
                }
                )
            };
            p.exports = (c = regeneratorRuntime.mark(function d(f) {
                var u, k;
                return regeneratorRuntime.wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (u = f,
                            void 0 !== f) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return", new Uint8Array);
                        case 3:
                            if ("string" != typeof f) {
                                n.next = 16;
                                break
                            }
                            if (!/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(f)) {
                                n.next = 8;
                                break
                            }
                            u = atob(f.split(",")[1]).split("").map(function(E) {
                                return E.charCodeAt(0)
                            }),
                            n.next = 14;
                            break;
                        case 8:
                            return n.next = 10,
                            fetch(F(f));
                        case 10:
                            return k = n.sent,
                            n.next = 13,
                            k.arrayBuffer();
                        case 13:
                            u = n.sent;
                        case 14:
                            n.next = 20;
                            break;
                        case 16:
                            if (!(f instanceof File || f instanceof Blob)) {
                                n.next = 20;
                                break
                            }
                            return n.next = 19,
                            h(f);
                        case 19:
                            u = n.sent;
                        case 20:
                            return n.abrupt("return", new Uint8Array(u));
                        case 21:
                        case "end":
                            return n.stop()
                        }
                }, d)
            }),
            O = function() {
                var d = this
                  , f = arguments;
                return new Promise(function(u, k) {
                    var n = c.apply(d, f);
                    function E(b) {
                        s(n, u, k, E, y, "next", b)
                    }
                    function y(b) {
                        s(n, u, k, E, y, "throw", b)
                    }
                    E(void 0)
                }
                )
            }
            ,
            function(d) {
                return O.apply(this, arguments)
            }
            )
        }
        ,
        452: (p,m,r)=>{
            function s(d, f, u, k, n, E, y) {
                try {
                    var b = d[E](y)
                      , j = b.value
                } catch (L) {
                    return void u(L)
                }
                b.done ? f(j) : Promise.resolve(j).then(k, n)
            }
            function F(d) {
                return function() {
                    var f = this
                      , u = arguments;
                    return new Promise(function(k, n) {
                        var E = d.apply(f, u);
                        function y(j) {
                            s(E, k, n, y, b, "next", j)
                        }
                        function b(j) {
                            s(E, k, n, y, b, "throw", j)
                        }
                        y(void 0)
                    }
                    )
                }
            }
            var d, h = r(72), c = r(185).log, O = (d = F(regeneratorRuntime.mark(function f(u, k) {
                var n, E, y;
                return regeneratorRuntime.wrap(function(b) {
                    for (; ; )
                        switch (b.prev = b.next) {
                        case 0:
                            return c("info", "fetch ".concat(u)),
                            b.next = 3,
                            fetch(u);
                        case 3:
                            return b.next = 5,
                            b.sent.arrayBuffer();
                        case 5:
                            return n = b.sent,
                            c("info", "".concat(u, " file size = ").concat(n.byteLength, " bytes")),
                            E = new Blob([n],{
                                type: k
                            }),
                            y = URL.createObjectURL(E),
                            c("info", "".concat(u, " blob URL = ").concat(y)),
                            b.abrupt("return", y);
                        case 11:
                        case "end":
                            return b.stop()
                        }
                }, f)
            })),
            function(f, u) {
                return d.apply(this, arguments)
            }
            );
            p.exports = function() {
                var d = F(regeneratorRuntime.mark(function f(u) {
                    var k, n, E, y, b;
                    return regeneratorRuntime.wrap(function(j) {
                        for (; ; )
                            switch (j.prev = j.next) {
                            case 0:
                                if ("string" == typeof (k = u.corePath)) {
                                    j.next = 3;
                                    break
                                }
                                throw Error("corePath should be a string!");
                            case 3:
                                return n = h(k),
                                j.next = 6,
                                O(n, "application/javascript");
                            case 6:
                                return E = j.sent,
                                j.next = 9,
                                O(n.replace("ffmpeg-core.js", "ffmpeg-core.wasm"), "application/wasm");
                            case 9:
                                return y = j.sent,
                                j.next = 12,
                                O(n.replace("ffmpeg-core.js", "ffmpeg-core.worker.js"), "application/javascript");
                            case 12:
                                if (b = j.sent,
                                typeof createFFmpegCore < "u") {
                                    j.next = 15;
                                    break
                                }
                                return j.abrupt("return", new Promise(function(L) {
                                    var U = document.createElement("script");
                                    U.src = E,
                                    U.type = "text/javascript",
                                    U.addEventListener("load", function Y() {
                                        U.removeEventListener("load", Y),
                                        c("info", "ffmpeg-core.js script loaded"),
                                        L({
                                            createFFmpegCore,
                                            corePath: E,
                                            wasmPath: y,
                                            workerPath: b
                                        })
                                    }),
                                    document.getElementsByTagName("head")[0].appendChild(U)
                                }
                                ));
                            case 15:
                                return c("info", "ffmpeg-core.js script is loaded already"),
                                j.abrupt("return", Promise.resolve({
                                    createFFmpegCore,
                                    corePath: E,
                                    wasmPath: y,
                                    workerPath: b
                                }));
                            case 17:
                            case "end":
                                return j.stop()
                            }
                    }, f)
                }));
                return function(f) {
                    return d.apply(this, arguments)
                }
            }()
        }
        ,
        698: (p,m,r)=>{
            var s = r(497)
              , F = r(452)
              , h = r(663);
            p.exports = {
                defaultOptions: s,
                getCreateFFmpegCore: F,
                fetchFile: h
            }
        }
        ,
        500: p=>{
            p.exports = {
                defaultArgs: ["./ffmpeg", "-nostdin", "-y"],
                baseOptions: {
                    log: !1,
                    logger: function() {},
                    progress: function() {},
                    corePath: ""
                }
            }
        }
        ,
        906: (p,m,r)=>{
            function s(v) {
                return function(a) {
                    if (Array.isArray(a))
                        return F(a)
                }(v) || function(a) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(a))
                        return Array.from(a)
                }(v) || function(a, w) {
                    if (a) {
                        if ("string" == typeof a)
                            return F(a, w);
                        var x = Object.prototype.toString.call(a).slice(8, -1);
                        return "Object" === x && a.constructor && (x = a.constructor.name),
                        "Map" === x || "Set" === x ? Array.from(a) : "Arguments" === x || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? F(a, w) : void 0
                    }
                }(v) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function F(v, a) {
                (null == a || a > v.length) && (a = v.length);
                for (var w = 0, x = new Array(a); w < a; w++)
                    x[w] = v[w];
                return x
            }
            function h(v, a, w, x, N, D, S) {
                try {
                    var B = v[D](S)
                      , t = B.value
                } catch (e) {
                    return void w(e)
                }
                B.done ? a(t) : Promise.resolve(t).then(x, N)
            }
            function O(v, a) {
                var w = Object.keys(v);
                if (Object.getOwnPropertySymbols) {
                    var x = Object.getOwnPropertySymbols(v);
                    a && (x = x.filter(function(N) {
                        return Object.getOwnPropertyDescriptor(v, N).enumerable
                    })),
                    w.push.apply(w, x)
                }
                return w
            }
            function d(v) {
                for (var a = 1; a < arguments.length; a++) {
                    var w = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? O(Object(w), !0).forEach(function(x) {
                        f(v, x, w[x])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(w)) : O(Object(w)).forEach(function(x) {
                        Object.defineProperty(v, x, Object.getOwnPropertyDescriptor(w, x))
                    })
                }
                return v
            }
            function f(v, a, w) {
                return a in v ? Object.defineProperty(v, a, {
                    value: w,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : v[a] = w,
                v
            }
            var k = r(500)
              , n = k.defaultArgs
              , E = k.baseOptions
              , y = r(185)
              , b = y.setLogging
              , j = y.setCustomLogger
              , L = y.log
              , U = r(583)
              , Y = r(319)
              , $ = r(698)
              , ee = $.defaultOptions
              , te = $.getCreateFFmpegCore
              , q = r(306).version
              , J = Error("ffmpeg.wasm is not ready, make sure you have completed load().");
            p.exports = function() {
                var A, v = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = d(d(d({}, E), ee), v), w = a.log, x = a.logger, N = a.progress, D = function u(v, a) {
                    if (null == v)
                        return {};
                    var w, x, N = function(S, B) {
                        if (null == S)
                            return {};
                        var t, e, o = {}, l = Object.keys(S);
                        for (e = 0; e < l.length; e++)
                            B.indexOf(t = l[e]) >= 0 || (o[t] = S[t]);
                        return o
                    }(v, a);
                    if (Object.getOwnPropertySymbols) {
                        var D = Object.getOwnPropertySymbols(v);
                        for (x = 0; x < D.length; x++)
                            a.indexOf(w = D[x]) >= 0 || Object.prototype.propertyIsEnumerable.call(v, w) && (N[w] = v[w])
                    }
                    return N
                }(a, ["log", "logger", "progress"]), S = null, B = null, t = null, e = !1, o = N, i = function(A) {
                    var C = A.message;
                    L(A.type, C),
                    U(C, o),
                    function(A) {
                        "FFMPEG_END" === A && null !== t && (t(),
                        t = null,
                        e = !1)
                    }(C)
                }, _ = (A = function c(v) {
                    return function() {
                        var a = this
                          , w = arguments;
                        return new Promise(function(x, N) {
                            var D = v.apply(a, w);
                            function S(t) {
                                h(D, x, N, S, B, "next", t)
                            }
                            function B(t) {
                                h(D, x, N, S, B, "throw", t)
                            }
                            S(void 0)
                        }
                        )
                    }
                }(regeneratorRuntime.mark(function G() {
                    var C, I, Q, Z, K;
                    return regeneratorRuntime.wrap(function(V) {
                        for (; ; )
                            switch (V.prev = V.next) {
                            case 0:
                                if (L("info", "load ffmpeg-core"),
                                null !== S) {
                                    V.next = 17;
                                    break
                                }
                                return L("info", "loading ffmpeg-core"),
                                V.next = 5,
                                te(D);
                            case 5:
                                return I = (C = V.sent).createFFmpegCore,
                                Q = C.corePath,
                                Z = C.workerPath,
                                K = C.wasmPath,
                                V.next = 12,
                                I({
                                    mainScriptUrlOrBlob: Q,
                                    printErr: function(X) {
                                        return i({
                                            type: "fferr",
                                            message: X
                                        })
                                    },
                                    print: function(X) {
                                        return i({
                                            type: "ffout",
                                            message: X
                                        })
                                    },
                                    locateFile: function(X, re) {
                                        if (typeof window < "u") {
                                            if (void 0 !== K && X.endsWith("ffmpeg-core.wasm"))
                                                return K;
                                            if (void 0 !== Z && X.endsWith("ffmpeg-core.worker.js"))
                                                return Z
                                        }
                                        return re + X
                                    }
                                });
                            case 12:
                                B = (S = V.sent).cwrap("proxy_main", "number", ["number", "number"]),
                                L("info", "ffmpeg-core loaded"),
                                V.next = 18;
                                break;
                            case 17:
                                throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");
                            case 18:
                            case "end":
                                return V.stop()
                            }
                    }, G)
                })),
                function() {
                    return A.apply(this, arguments)
                }
                );
                return b(w),
                j(x),
                L("info", "use ffmpeg.wasm v".concat(q)),
                {
                    setProgress: function(A) {
                        o = A
                    },
                    setLogger: function(A) {
                        j(A)
                    },
                    setLogging: b,
                    load: _,
                    isLoaded: function() {
                        return null !== S
                    },
                    run: function() {
                        for (var A = arguments.length, G = new Array(A), C = 0; C < A; C++)
                            G[C] = arguments[C];
                        if (L("info", "run ffmpeg command: ".concat(G.join(" "))),
                        null === S)
                            throw J;
                        if (e)
                            throw Error("ffmpeg.wasm can only run one command at a time");
                        return e = !0,
                        new Promise(function(I) {
                            var Q = [].concat(s(n), G).filter(function(Z) {
                                return 0 !== Z.length
                            });
                            t = I,
                            B.apply(void 0, s(Y(S, Q)))
                        }
                        )
                    },
                    exit: function() {
                        if (null === S)
                            throw J;
                        e = !1,
                        S.exit(1),
                        S = null,
                        B = null,
                        t = null
                    },
                    FS: function(A) {
                        for (var G = arguments.length, C = new Array(G > 1 ? G - 1 : 0), I = 1; I < G; I++)
                            C[I - 1] = arguments[I];
                        if (L("info", "run FS.".concat(A, " ").concat(C.map(function(K) {
                            return "string" == typeof K ? K : "<".concat(K.length, " bytes binary file>")
                        }).join(" "))),
                        null === S)
                            throw J;
                        var Q = null;
                        try {
                            var Z;
                            Q = (Z = S.FS)[A].apply(Z, C)
                        } catch {
                            throw Error("readdir" === A ? "ffmpeg.FS('readdir', '".concat(C[0], "') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')") : "readFile" === A ? "ffmpeg.FS('readFile', '".concat(C[0], "') error. Check if the path exists") : "Oops, something went wrong in FS operation.")
                        }
                        return Q
                    }
                }
            }
        }
        ,
        352: (p,m,r)=>{
            r(666);
            var s = r(906)
              , F = r(698).fetchFile;
            p.exports = {
                createFFmpeg: s,
                fetchFile: F
            }
        }
        ,
        185: p=>{
            var m = !1
              , r = function() {};
            p.exports = {
                logging: m,
                setLogging: function(s) {
                    m = s
                },
                setCustomLogger: function(s) {
                    r = s
                },
                log: function(s, F) {
                    r({
                        type: s,
                        message: F
                    }),
                    m && console.log("[".concat(s, "] ").concat(F))
                }
            }
        }
        ,
        319: p=>{
            p.exports = function(m, r) {
                var s = m._malloc(r.length * Uint32Array.BYTES_PER_ELEMENT);
                return r.forEach(function(F, h) {
                    var c = m._malloc(F.length + 1);
                    m.writeAsciiToMemory(F, c),
                    m.setValue(s + Uint32Array.BYTES_PER_ELEMENT * h, c, "i32")
                }),
                [r.length, s]
            }
        }
        ,
        583: p=>{
            function m(h, c) {
                (null == c || c > h.length) && (c = h.length);
                for (var O = 0, d = new Array(c); O < c; O++)
                    d[O] = h[O];
                return d
            }
            var r = 0
              , s = 0
              , F = function(h) {
                var c, d = function(n) {
                    if (Array.isArray(n))
                        return n
                }(c = h.split(":")) || function(n, E) {
                    if (typeof Symbol < "u" && Symbol.iterator in Object(n)) {
                        var y = []
                          , b = !0
                          , j = !1
                          , L = void 0;
                        try {
                            for (var U, Y = n[Symbol.iterator](); !(b = (U = Y.next()).done) && (y.push(U.value),
                            3 !== y.length); b = !0)
                                ;
                        } catch ($) {
                            j = !0,
                            L = $
                        } finally {
                            try {
                                b || null == Y.return || Y.return()
                            } finally {
                                if (j)
                                    throw L
                            }
                        }
                        return y
                    }
                }(c) || function(n, E) {
                    if (n) {
                        if ("string" == typeof n)
                            return m(n, 3);
                        var y = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === y && n.constructor && (y = n.constructor.name),
                        "Map" === y || "Set" === y ? Array.from(n) : "Arguments" === y || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y) ? m(n, 3) : void 0
                    }
                }(c) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(), u = d[1], k = d[2];
                return 60 * parseFloat(d[0]) * 60 + 60 * parseFloat(u) + parseFloat(k)
            };
            p.exports = function(h, c) {
                if ("string" == typeof h)
                    if (h.startsWith("  Duration")) {
                        var O = h.split(", ")[0].split(": ")[1]
                          , d = F(O);
                        c({
                            duration: d,
                            ratio: s
                        }),
                        (0 === r || r > d) && (r = d)
                    } else if (h.startsWith("frame") || h.startsWith("size")) {
                        var f = h.split("time=")[1].split(" ")[0]
                          , u = F(f);
                        c({
                            ratio: s = u / r,
                            time: u
                        })
                    } else
                        h.startsWith("video:") && (c({
                            ratio: 1
                        }),
                        r = 0)
            }
        }
        ,
        666: p=>{
            var m = function(r) {
                "use strict";
                var s, F = Object.prototype, h = F.hasOwnProperty, c = "function" == typeof Symbol ? Symbol : {}, O = c.iterator || "@@iterator", d = c.asyncIterator || "@@asyncIterator", f = c.toStringTag || "@@toStringTag";
                function u(t, e, o) {
                    return Object.defineProperty(t, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    u({}, "")
                } catch {
                    u = function(e, o, l) {
                        return e[o] = l
                    }
                }
                function k(t, e, o, l) {
                    var M, H, P, W, _ = Object.create((e && e.prototype instanceof U ? e : U).prototype), R = new D(l || []);
                    return _._invoke = (M = t,
                    H = o,
                    P = R,
                    W = E,
                    function(z, A) {
                        if (W === b)
                            throw new Error("Generator is already running");
                        if (W === j) {
                            if ("throw" === z)
                                throw A;
                            return B()
                        }
                        for (P.method = z,
                        P.arg = A; ; ) {
                            var G = P.delegate;
                            if (G) {
                                var C = w(G, P);
                                if (C) {
                                    if (C === L)
                                        continue;
                                    return C
                                }
                            }
                            if ("next" === P.method)
                                P.sent = P._sent = P.arg;
                            else if ("throw" === P.method) {
                                if (W === E)
                                    throw W = j,
                                    P.arg;
                                P.dispatchException(P.arg)
                            } else
                                "return" === P.method && P.abrupt("return", P.arg);
                            W = b;
                            var I = n(M, H, P);
                            if ("normal" === I.type) {
                                if (W = P.done ? j : y,
                                I.arg === L)
                                    continue;
                                return {
                                    value: I.arg,
                                    done: P.done
                                }
                            }
                            "throw" === I.type && (W = j,
                            P.method = "throw",
                            P.arg = I.arg)
                        }
                    }
                    ),
                    _
                }
                function n(t, e, o) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, o)
                        }
                    } catch (l) {
                        return {
                            type: "throw",
                            arg: l
                        }
                    }
                }
                r.wrap = k;
                var E = "suspendedStart"
                  , y = "suspendedYield"
                  , b = "executing"
                  , j = "completed"
                  , L = {};
                function U() {}
                function Y() {}
                function $() {}
                var ee = {};
                ee[O] = function() {
                    return this
                }
                ;
                var te = Object.getPrototypeOf
                  , q = te && te(te(S([])));
                q && q !== F && h.call(q, O) && (ee = q);
                var J = $.prototype = U.prototype = Object.create(ee);
                function v(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        u(t, e, function(o) {
                            return this._invoke(e, o)
                        })
                    })
                }
                function a(t, e) {
                    function o(i, _, R, M) {
                        var H = n(t[i], t, _);
                        if ("throw" !== H.type) {
                            var P = H.arg
                              , W = P.value;
                            return W && "object" == typeof W && h.call(W, "__await") ? e.resolve(W.__await).then(function(z) {
                                o("next", z, R, M)
                            }, function(z) {
                                o("throw", z, R, M)
                            }) : e.resolve(W).then(function(z) {
                                P.value = z,
                                R(P)
                            }, function(z) {
                                return o("throw", z, R, M)
                            })
                        }
                        M(H.arg)
                    }
                    var l;
                    this._invoke = function(i, _) {
                        function R() {
                            return new e(function(M, H) {
                                o(i, _, M, H)
                            }
                            )
                        }
                        return l = l ? l.then(R, R) : R()
                    }
                }
                function w(t, e) {
                    var o = t.iterator[e.method];
                    if (o === s) {
                        if (e.delegate = null,
                        "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return",
                            e.arg = s,
                            w(t, e),
                            "throw" === e.method))
                                return L;
                            e.method = "throw",
                            e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return L
                    }
                    var l = n(o, t.iterator, e.arg);
                    if ("throw" === l.type)
                        return e.method = "throw",
                        e.arg = l.arg,
                        e.delegate = null,
                        L;
                    var i = l.arg;
                    return i ? i.done ? (e[t.resultName] = i.value,
                    e.next = t.nextLoc,
                    "return" !== e.method && (e.method = "next",
                    e.arg = s),
                    e.delegate = null,
                    L) : i : (e.method = "throw",
                    e.arg = new TypeError("iterator result is not an object"),
                    e.delegate = null,
                    L)
                }
                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function N(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function D(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(x, this),
                    this.reset(!0)
                }
                function S(t) {
                    if (t) {
                        var e = t[O];
                        if (e)
                            return e.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var o = -1
                              , l = function i() {
                                for (; ++o < t.length; )
                                    if (h.call(t, o))
                                        return i.value = t[o],
                                        i.done = !1,
                                        i;
                                return i.value = s,
                                i.done = !0,
                                i
                            };
                            return l.next = l
                        }
                    }
                    return {
                        next: B
                    }
                }
                function B() {
                    return {
                        value: s,
                        done: !0
                    }
                }
                return Y.prototype = J.constructor = $,
                $.constructor = Y,
                Y.displayName = u($, f, "GeneratorFunction"),
                r.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === Y || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                r.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, $) : (t.__proto__ = $,
                    u(t, f, "GeneratorFunction")),
                    t.prototype = Object.create(J),
                    t
                }
                ,
                r.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                v(a.prototype),
                a.prototype[d] = function() {
                    return this
                }
                ,
                r.AsyncIterator = a,
                r.async = function(t, e, o, l, i) {
                    void 0 === i && (i = Promise);
                    var _ = new a(k(t, e, o, l),i);
                    return r.isGeneratorFunction(e) ? _ : _.next().then(function(R) {
                        return R.done ? R.value : _.next()
                    })
                }
                ,
                v(J),
                u(J, f, "Generator"),
                J[O] = function() {
                    return this
                }
                ,
                J.toString = function() {
                    return "[object Generator]"
                }
                ,
                r.keys = function(t) {
                    var e = [];
                    for (var o in t)
                        e.push(o);
                    return e.reverse(),
                    function l() {
                        for (; e.length; ) {
                            var i = e.pop();
                            if (i in t)
                                return l.value = i,
                                l.done = !1,
                                l
                        }
                        return l.done = !0,
                        l
                    }
                }
                ,
                r.values = S,
                D.prototype = {
                    constructor: D,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = s,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = s,
                        this.tryEntries.forEach(N),
                        !t)
                            for (var e in this)
                                "t" === e.charAt(0) && h.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = s)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var e = this;
                        function o(H, P) {
                            return _.type = "throw",
                            _.arg = t,
                            e.next = H,
                            P && (e.method = "next",
                            e.arg = s),
                            !!P
                        }
                        for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                            var i = this.tryEntries[l]
                              , _ = i.completion;
                            if ("root" === i.tryLoc)
                                return o("end");
                            if (i.tryLoc <= this.prev) {
                                var R = h.call(i, "catchLoc")
                                  , M = h.call(i, "finallyLoc");
                                if (R && M) {
                                    if (this.prev < i.catchLoc)
                                        return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return o(i.finallyLoc)
                                } else if (R) {
                                    if (this.prev < i.catchLoc)
                                        return o(i.catchLoc, !0)
                                } else {
                                    if (!M)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var l = this.tryEntries[o];
                            if (l.tryLoc <= this.prev && h.call(l, "finallyLoc") && this.prev < l.finallyLoc) {
                                var i = l;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var _ = i ? i.completion : {};
                        return _.type = t,
                        _.arg = e,
                        i ? (this.method = "next",
                        this.next = i.finallyLoc,
                        L) : this.complete(_)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        L
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var o = this.tryEntries[e];
                            if (o.finallyLoc === t)
                                return this.complete(o.completion, o.afterLoc),
                                N(o),
                                L
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var o = this.tryEntries[e];
                            if (o.tryLoc === t) {
                                var l = o.completion;
                                if ("throw" === l.type) {
                                    var i = l.arg;
                                    N(o)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, o) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: o
                        },
                        "next" === this.method && (this.arg = s),
                        L
                    }
                },
                r
            }(p.exports);
            try {
                regeneratorRuntime = m
            } catch {
                Function("r", "regeneratorRuntime = r")(m)
            }
        }
        ,
        72: function(p, m, r) {
            var s, F;
            void 0 === (F = "function" == typeof (s = function() {
                return function() {
                    var h = arguments.length;
                    if (0 === h)
                        throw new Error("resolveUrl requires at least one argument; got none.");
                    var c = document.createElement("base");
                    if (c.href = arguments[0],
                    1 === h)
                        return c.href;
                    var O = document.getElementsByTagName("head")[0];
                    O.insertBefore(c, O.firstChild);
                    for (var d, f = document.createElement("a"), u = 1; u < h; u++)
                        f.href = arguments[u],
                        c.href = d = f.href;
                    return O.removeChild(c),
                    d
                }
            }
            ) ? s.call(m, r, m, p) : s) || (p.exports = F)
        },
        306: p=>{
            "use strict";
            p.exports = JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.10.0","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}')
        }
    },
    g = {},
    function p(m) {
        if (g[m])
            return g[m].exports;
        var r = g[m] = {
            exports: {}
        };
        return T[m].call(r.exports, r, r.exports, p),
        r.exports
    }(352);
    var T, g
}),
self.crossOriginIsolated ? console.log("ffmpeg::Ready!") : console.log("COOP/COEP Error! Execution blocked.");
const {createFFmpeg, fetchFile} = FFmpeg
  , ffmpeg = createFFmpeg({
    log: !0,
    corePath: "./ffmpeg/ffmpeg-core.js",
    progress: ({ratio: T})=>{
        message.innerHTML = `Complete: ${(100 * T).toFixed(2)}%`
    }
})
  , transcode = async(T,g,p)=>{
    try {
        console.log("Loading ffmpeg-core.js"),
        ffmpeg.isLoaded() || await ffmpeg.load(),
        console.log("Start transcoding"),
        ffmpeg.FS("writeFile", "segment.pcap", await fetchFile(T));
        const m = ["-f", g || "g722"];
        "g722" != g && m.push("-ar", "8000"),
        m.push("-i", "segment.pcap", "-id3v2_version", "3", p);
        const r = await ffmpeg.run(...m);
        console.log(r),
        console.log("Complete transdingens");
        console.log(m);
        const s = ffmpeg.FS("readFile", p);
        return URL.createObjectURL(new Blob([s.buffer],{
            type: "audio/mpeg"
        }))
    } catch (m) {
        console.log(m)
    }
}
;
