var firebase = function () {
    /*! @license Firebase v3.7.5
        Build: 3.7.5-rc.1
        Terms: https://firebase.google.com/terms/ */
    var firebase = null;(function () {
        var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        },
            k = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
            _l = function l() {
            _l = function l() {};k.Symbol || (k.Symbol = ba);
        },
            ca = 0,
            ba = function ba(a) {
            return "jscomp_symbol_" + (a || "") + ca++;
        },
            _p = function p() {
            _l();var a = k.Symbol.iterator;a || (a = k.Symbol.iterator = k.Symbol("iterator"));"function" != typeof Array.prototype[a] && aa(Array.prototype, a, { configurable: !0, writable: !0, value: function value() {
                    return m(this);
                } });_p = function p() {};
        },
            m = function m(a) {
            var b = 0;return da(function () {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            });
        },
            da = function da(a) {
            _p();a = { next: a };a[k.Symbol.iterator] = function () {
                return this;
            };return a;
        },
            r = this,
            t = function t() {},
            u = function u(a) {
            var b = typeof a;if ("object" == b) {
                if (a) {
                    if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
                } else return "null";
            } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
        },
            v = function v(a) {
            return "function" == u(a);
        },
            ea = function ea(a, b, c) {
            return a.call.apply(a.bind, arguments);
        },
            fa = function fa(a, b, c) {
            if (!a) throw Error();if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);return function () {
                    var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
                };
            }return function () {
                return a.apply(b, arguments);
            };
        },
            _w = function w(a, b, c) {
            _w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;return _w.apply(null, arguments);
        },
            x = function x(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);return function () {
                var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
            };
        },
            y = function y(a, b) {
            function c() {}c.prototype = b.prototype;a.ha = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.base = function (a, c, h) {
                for (var e = Array(arguments.length - 2), d = 2; d < arguments.length; d++) {
                    e[d - 2] = arguments[d];
                }return b.prototype[c].apply(a, e);
            };
        };var A;A = "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : global;
        var __extends = function __extends(a, b) {
            function c() {
                this.constructor = a;
            }for (var d in b) {
                b.hasOwnProperty(d) && (a[d] = b[d]);
            }a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
        },
            __assign = Object.assign || function (a) {
            for (var b, c = 1, d = arguments.length; c < d; c++) {
                b = arguments[c];for (var e in b) {
                    Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
                }
            }return a;
        },
            __rest = function __rest(a, b) {
            var c = {},
                d;for (d in a) {
                Object.prototype.hasOwnProperty.call(a, d) && 0 > b.indexOf(d) && (c[d] = a[d]);
            }if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
                var e = 0;for (d = Object.getOwnPropertySymbols(a); e < d.length; e++) {
                    0 > b.indexOf(d[e]) && (c[d[e]] = a[d[e]]);
                }
            }return c;
        },
            __decorate = function __decorate(a, b, c, d) {
            var e = arguments.length,
                h = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
                g;g = A.Reflect;if ("object" === typeof g && "function" === typeof g.decorate) h = g.decorate(a, b, c, d);else for (var f = a.length - 1; 0 <= f; f--) {
                if (g = a[f]) h = (3 > e ? g(h) : 3 < e ? g(b, c, h) : g(b, c)) || h;
            }return 3 < e && h && Object.defineProperty(b, c, h), h;
        },
            __metadata = function __metadata(a, b) {
            var c = A.Reflect;if ("object" === typeof c && "function" === typeof c.metadata) return c.metadata(a, b);
        },
            __param = function __param(a, b) {
            return function (c, d) {
                b(c, d, a);
            };
        },
            __awaiter = function __awaiter(a, b, c, d) {
            return new (c || (c = Promise))(function (e, h) {
                function g(a) {
                    try {
                        q(d.next(a));
                    } catch (n) {
                        h(n);
                    }
                }function f(a) {
                    try {
                        q(d["throw"](a));
                    } catch (n) {
                        h(n);
                    }
                }function q(a) {
                    a.done ? e(a.value) : new c(function (b) {
                        b(a.value);
                    }).then(g, f);
                }q((d = d.apply(a, b)).next());
            });
        },
            __generator = function __generator(a, b) {
            function c(a) {
                return function (b) {
                    return d([a, b]);
                };
            }function d(c) {
                if (h) throw new TypeError("Generator is already executing.");
                for (; e;) {
                    try {
                        if (h = 1, g && (f = g[c[0] & 2 ? "return" : c[0] ? "throw" : "next"]) && !(f = f.call(g, c[1])).done) return f;if (g = 0, f) c = [0, f.value];switch (c[0]) {case 0:case 1:
                                f = c;break;case 4:
                                return e.label++, { value: c[1], done: !1 };case 5:
                                e.label++;g = c[1];c = [0];continue;case 7:
                                c = e.G.pop();e.I.pop();continue;default:
                                if (!(f = e.I, f = 0 < f.length && f[f.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    e = 0;continue;
                                }if (3 === c[0] && (!f || c[1] > f[0] && c[1] < f[3])) e.label = c[1];else if (6 === c[0] && e.label < f[1]) e.label = f[1], f = c;else if (f && e.label < f[2]) e.label = f[2], e.G.push(c);else {
                                    f[2] && e.G.pop();e.I.pop();continue;
                                }}c = b.call(a, e);
                    } catch (z) {
                        c = [6, z], g = 0;
                    } finally {
                        h = f = 0;
                    }
                }if (c[0] & 5) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
            }var e = { label: 0, ga: function ga() {
                    if (f[0] & 1) throw f[1];return f[1];
                }, I: [], G: [] },
                h,
                g,
                f;return { next: c(0), "throw": c(1), "return": c(2) };
        };
        "undefined" !== typeof A.S && A.S || (A.__extends = __extends, A.__assign = __assign, A.__rest = __rest, A.__extends = __extends, A.__decorate = __decorate, A.__metadata = __metadata, A.__param = __param, A.__awaiter = __awaiter, A.__generator = __generator);var B = function B(a, b, c) {
            this.Y = c;this.T = a;this.Z = b;this.s = 0;this.o = null;
        };B.prototype.get = function () {
            var a;0 < this.s ? (this.s--, a = this.o, this.o = a.next, a.next = null) : a = this.T();return a;
        };B.prototype.put = function (a) {
            this.Z(a);this.s < this.Y && (this.s++, a.next = this.o, this.o = a);
        };var C = function C(a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, C);else {
                var b = Error().stack;b && (this.stack = b);
            }a && (this.message = String(a));
        };y(C, Error);C.prototype.name = "CustomError";var ga = function ga(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
                d += c.shift() + e.shift();
            }return d + c.join("%s");
        };var D = function D(a, b) {
            b.unshift(a);C.call(this, ga.apply(null, b));b.shift();
        };y(D, C);D.prototype.name = "AssertionError";var ha = function ha(a, b, c, d) {
            var e = "Assertion failed";if (c) var e = e + (": " + c),
                h = d;else a && (e += ": " + a, h = b);throw new D("" + e, h || []);
        },
            E = function E(a, b, c) {
            a || ha("", null, b, Array.prototype.slice.call(arguments, 2));
        },
            F = function F(a, b, c) {
            v(a) || ha("Expected function but got %s: %s.", [u(a), a], b, Array.prototype.slice.call(arguments, 2));
        };var G;a: {
            var ia = r.navigator;if (ia) {
                var ja = ia.userAgent;if (ja) {
                    G = ja;break a;
                }
            }G = "";
        };var H = function H() {
            this.v = this.g = null;
        },
            ka = new B(function () {
            return new I();
        }, function (a) {
            a.reset();
        }, 100);H.prototype.add = function (a, b) {
            var c = ka.get();c.set(a, b);this.v ? this.v.next = c : (E(!this.g), this.g = c);this.v = c;
        };H.prototype.remove = function () {
            var a = null;this.g && (a = this.g, this.g = this.g.next, this.g || (this.v = null), a.next = null);return a;
        };var I = function I() {
            this.next = this.scope = this.B = null;
        };I.prototype.set = function (a, b) {
            this.B = a;this.scope = b;this.next = null;
        };
        I.prototype.reset = function () {
            this.next = this.scope = this.B = null;
        };var la = function la(a) {
            r.setTimeout(function () {
                throw a;
            }, 0);
        },
            J,
            ma = function ma() {
            var a = r.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == G.indexOf("Presto") && (a = function a() {
                var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow,
                    a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = _w(function (a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
                }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
                        b.postMessage(c, d);
                    } };
            });if ("undefined" !== typeof a && -1 == G.indexOf("Trident") && -1 == G.indexOf("MSIE")) {
                var b = new a(),
                    c = {},
                    d = c;b.port1.onmessage = function () {
                    if (void 0 !== c.next) {
                        c = c.next;var a = c.J;c.J = null;a();
                    }
                };return function (a) {
                    d.next = { J: a };d = d.next;b.port2.postMessage(0);
                };
            }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
                var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
                    b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
                };document.documentElement.appendChild(b);
            } : function (a) {
                r.setTimeout(a, 0);
            };
        };var M = function M(a, b) {
            K || na();L || (K(), L = !0);oa.add(a, b);
        },
            K,
            na = function na() {
            if (-1 != String(r.Promise).indexOf("[native code]")) {
                var a = r.Promise.resolve(void 0);K = function K() {
                    a.then(pa);
                };
            } else K = function K() {
                var a = pa;!v(r.setImmediate) || r.Window && r.Window.prototype && -1 == G.indexOf("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (J || (J = ma()), J(a)) : r.setImmediate(a);
            };
        },
            L = !1,
            oa = new H(),
            pa = function pa() {
            for (var a; a = oa.remove();) {
                try {
                    a.B.call(a.scope);
                } catch (b) {
                    la(b);
                }ka.put(a);
            }L = !1;
        };var O = function O(a, b) {
            this.b = 0;this.R = void 0;this.j = this.h = this.u = null;this.m = this.A = !1;if (a != t) try {
                var c = this;a.call(b, function (a) {
                    N(c, 2, a);
                }, function (a) {
                    try {
                        if (a instanceof Error) throw a;throw Error("Promise rejected.");
                    } catch (e) {}N(c, 3, a);
                });
            } catch (d) {
                N(this, 3, d);
            }
        },
            qa = function qa() {
            this.next = this.context = this.i = this.f = this.child = null;this.w = !1;
        };qa.prototype.reset = function () {
            this.context = this.i = this.f = this.child = null;this.w = !1;
        };
        var ra = new B(function () {
            return new qa();
        }, function (a) {
            a.reset();
        }, 100),
            sa = function sa(a, b, c) {
            var d = ra.get();d.f = a;d.i = b;d.context = c;return d;
        },
            ua = function ua(a, b, c) {
            ta(a, b, c, null) || M(x(b, a));
        };O.prototype.then = function (a, b, c) {
            null != a && F(a, "opt_onFulfilled should be a function.");null != b && F(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this, v(a) ? a : null, v(b) ? b : null, c);
        };O.prototype.then = O.prototype.then;O.prototype.$goog_Thenable = !0;
        O.prototype.ba = function (a, b) {
            return va(this, null, a, b);
        };var xa = function xa(a, b) {
            a.h || 2 != a.b && 3 != a.b || wa(a);E(null != b.f);a.j ? a.j.next = b : a.h = b;a.j = b;
        },
            va = function va(a, b, c, d) {
            var e = sa(null, null, null);e.child = new O(function (a, g) {
                e.f = b ? function (c) {
                    try {
                        var e = b.call(d, c);a(e);
                    } catch (z) {
                        g(z);
                    }
                } : a;e.i = c ? function (b) {
                    try {
                        var e = c.call(d, b);a(e);
                    } catch (z) {
                        g(z);
                    }
                } : g;
            });e.child.u = a;xa(a, e);return e.child;
        };O.prototype.da = function (a) {
            E(1 == this.b);this.b = 0;N(this, 2, a);
        };
        O.prototype.ea = function (a) {
            E(1 == this.b);this.b = 0;N(this, 3, a);
        };
        var N = function N(a, b, c) {
            0 == a.b && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.b = 1, ta(c, a.da, a.ea, a) || (a.R = c, a.b = b, a.u = null, wa(a), 3 != b || ya(a, c)));
        },
            ta = function ta(a, b, c, d) {
            if (a instanceof O) return null != b && F(b, "opt_onFulfilled should be a function."), null != c && F(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), xa(a, sa(b || t, c || null, d)), !0;var e;if (a) try {
                e = !!a.$goog_Thenable;
            } catch (g) {
                e = !1;
            } else e = !1;if (e) return a.then(b, c, d), !0;e = typeof a;if ("object" == e && null != a || "function" == e) try {
                var h = a.then;if (v(h)) return za(a, h, b, c, d), !0;
            } catch (g) {
                return c.call(d, g), !0;
            }return !1;
        },
            za = function za(a, b, c, d, e) {
            var h = !1,
                g = function g(a) {
                h || (h = !0, c.call(e, a));
            },
                f = function f(a) {
                h || (h = !0, d.call(e, a));
            };try {
                b.call(a, g, f);
            } catch (q) {
                f(q);
            }
        },
            wa = function wa(a) {
            a.A || (a.A = !0, M(a.V, a));
        },
            Aa = function Aa(a) {
            var b = null;a.h && (b = a.h, a.h = b.next, b.next = null);a.h || (a.j = null);null != b && E(null != b.f);return b;
        };
        O.prototype.V = function () {
            for (var a; a = Aa(this);) {
                var b = this.b,
                    c = this.R;if (3 == b && a.i && !a.w) {
                    var d;for (d = this; d && d.m; d = d.u) {
                        d.m = !1;
                    }
                }if (a.child) a.child.u = null, Ba(a, b, c);else try {
                    a.w ? a.f.call(a.context) : Ba(a, b, c);
                } catch (e) {
                    Ca.call(null, e);
                }ra.put(a);
            }this.A = !1;
        };var Ba = function Ba(a, b, c) {
            2 == b ? a.f.call(a.context, c) : a.i && a.i.call(a.context, c);
        },
            ya = function ya(a, b) {
            a.m = !0;M(function () {
                a.m && Ca.call(null, b);
            });
        },
            Ca = la;function P(a, b) {
            if (!(b instanceof Object)) return b;switch (b.constructor) {case Date:
                    return new Date(b.getTime());case Object:
                    void 0 === a && (a = {});break;case Array:
                    a = [];break;default:
                    return b;}for (var c in b) {
                b.hasOwnProperty(c) && (a[c] = P(a[c], b[c]));
            }return a;
        };O.all = function (a) {
            return new O(function (b, c) {
                var d = a.length,
                    e = [];if (d) for (var h = function h(a, c) {
                    d--;e[a] = c;0 == d && b(e);
                }, g = function g(a) {
                    c(a);
                }, f = 0, q; f < a.length; f++) {
                    q = a[f], ua(q, x(h, f), g);
                } else b(e);
            });
        };O.resolve = function (a) {
            if (a instanceof O) return a;var b = new O(t);N(b, 2, a);return b;
        };O.reject = function (a) {
            return new O(function (b, c) {
                c(a);
            });
        };O.prototype["catch"] = O.prototype.ba;var Q = O;"undefined" !== typeof Promise && (Q = Promise);var Da = Q;function Ea(a, b) {
            a = new R(a, b);return a.subscribe.bind(a);
        }var R = function R(a, b) {
            var c = this;this.a = [];this.P = 0;this.task = Da.resolve();this.l = !1;this.F = b;this.task.then(function () {
                a(c);
            }).catch(function (a) {
                c.error(a);
            });
        };R.prototype.next = function (a) {
            S(this, function (b) {
                b.next(a);
            });
        };R.prototype.error = function (a) {
            S(this, function (b) {
                b.error(a);
            });this.close(a);
        };R.prototype.complete = function () {
            S(this, function (a) {
                a.complete();
            });this.close();
        };
        R.prototype.subscribe = function (a, b, c) {
            var d = this,
                e;if (void 0 === a && void 0 === b && void 0 === c) throw Error("Missing Observer.");e = Fa(a) ? a : { next: a, error: b, complete: c };void 0 === e.next && (e.next = T);void 0 === e.error && (e.error = T);void 0 === e.complete && (e.complete = T);a = this.fa.bind(this, this.a.length);this.l && this.task.then(function () {
                try {
                    d.K ? e.error(d.K) : e.complete();
                } catch (h) {}
            });this.a.push(e);return a;
        };
        R.prototype.fa = function (a) {
            void 0 !== this.a && void 0 !== this.a[a] && (delete this.a[a], --this.P, 0 === this.P && void 0 !== this.F && this.F(this));
        };var S = function S(a, b) {
            if (!a.l) for (var c = 0; c < a.a.length; c++) {
                Ga(a, c, b);
            }
        },
            Ga = function Ga(a, b, c) {
            a.task.then(function () {
                if (void 0 !== a.a && void 0 !== a.a[b]) try {
                    c(a.a[b]);
                } catch (d) {
                    "undefined" !== typeof console && console.error && console.error(d);
                }
            });
        };R.prototype.close = function (a) {
            var b = this;this.l || (this.l = !0, void 0 !== a && (this.K = a), this.task.then(function () {
                b.a = void 0;b.F = void 0;
            }));
        };
        function Fa(a) {
            if ("object" !== typeof a || null === a) return !1;var b;b = ["next", "error", "complete"];_p();var c = b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"];b = c ? c.call(b) : m(b);for (c = b.next(); !c.done; c = b.next()) {
                if (c = c.value, c in a && "function" === typeof a[c]) return !0;
            }return !1;
        }function T() {};var Ha = Error.captureStackTrace,
            V = function V(a, b) {
            this.code = a;this.message = b;if (Ha) Ha(this, U.prototype.create);else {
                var c = Error.apply(this, arguments);this.name = "FirebaseError";Object.defineProperty(this, "stack", { get: function get() {
                        return c.stack;
                    } });
            }
        };V.prototype = Object.create(Error.prototype);V.prototype.constructor = V;V.prototype.name = "FirebaseError";var U = function U(a, b, c) {
            this.$ = a;this.aa = b;this.U = c;this.pattern = /\{\$([^}]+)}/g;
        };
        U.prototype.create = function (a, b) {
            void 0 === b && (b = {});var c = this.U[a];a = this.$ + "/" + a;var c = void 0 === c ? "Error" : c.replace(this.pattern, function (a, c) {
                a = b[c];return void 0 !== a ? a.toString() : "<" + c + "?>";
            }),
                c = this.aa + ": " + c + " (" + a + ").",
                c = new V(a, c),
                d;for (d in b) {
                b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);
            }return c;
        };var W = Q,
            X = function X(a, b, c) {
            var d = this;this.M = c;this.N = !1;this.c = {};this.D = b;this.H = P(void 0, a);a = "serviceAccount" in this.H;("credential" in this.H || a) && "undefined" !== typeof console && console.log("The '" + (a ? "serviceAccount" : "credential") + "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function (a) {
                var b = c.INTERNAL.useAsService(d, a);null !== b && (b = d.X.bind(d, b), d[a] = b);
            });
        };X.prototype.delete = function () {
            var a = this;return new W(function (b) {
                Y(a);b();
            }).then(function () {
                a.M.INTERNAL.removeApp(a.D);var b = [];Object.keys(a.c).forEach(function (c) {
                    Object.keys(a.c[c]).forEach(function (d) {
                        b.push(a.c[c][d]);
                    });
                });return W.all(b.map(function (a) {
                    return a.INTERNAL.delete();
                }));
            }).then(function () {
                a.N = !0;a.c = {};
            });
        };
        X.prototype.X = function (a, b) {
            Y(this);"undefined" === typeof this.c[a] && (this.c[a] = {});var c = b || "[DEFAULT]";return "undefined" === typeof this.c[a][c] ? (b = this.M.INTERNAL.factories[a](this, this.W.bind(this), b), this.c[a][c] = b) : this.c[a][c];
        };X.prototype.W = function (a) {
            P(this, a);
        };var Y = function Y(a) {
            a.N && Z("app-deleted", { name: a.D });
        };k.Object.defineProperties(X.prototype, { name: { configurable: !0, enumerable: !0, get: function get() {
                    Y(this);return this.D;
                } }, options: { configurable: !0, enumerable: !0, get: function get() {
                    Y(this);return this.H;
                } } });
        X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");
        function Ia() {
            function a(a) {
                a = a || "[DEFAULT]";var b = d[a];void 0 === b && Z("no-app", { name: a });return b;
            }function b(a, b) {
                Object.keys(e).forEach(function (d) {
                    d = c(a, d);if (null !== d && h[d]) h[d](b, a);
                });
            }function c(a, b) {
                if ("serverAuth" === b) return null;var c = b;a = a.options;"auth" === b && (a.serviceAccount || a.credential) && (c = "serverAuth", "serverAuth" in e || Z("sa-not-supported"));return c;
            }var d = {},
                e = {},
                h = {},
                g = { __esModule: !0, initializeApp: function initializeApp(a, c) {
                    void 0 === c ? c = "[DEFAULT]" : "string" === typeof c && "" !== c || Z("bad-app-name", { name: c + "" });void 0 !== d[c] && Z("duplicate-app", { name: c });a = new X(a, c, g);d[c] = a;b(a, "create");void 0 != a.INTERNAL && void 0 != a.INTERNAL.getToken || P(a, { INTERNAL: { getUid: function getUid() {
                                return null;
                            }, getToken: function getToken() {
                                return W.resolve(null);
                            }, addAuthTokenListener: function addAuthTokenListener() {}, removeAuthTokenListener: function removeAuthTokenListener() {} } });return a;
                }, app: a, apps: null, Promise: W, SDK_VERSION: "0.0.0", INTERNAL: { registerService: function registerService(b, c, d, n, Ja) {
                        e[b] && Z("duplicate-service", { name: b });e[b] = Ja ? c : function (a, b) {
                            return c(a, b, "[DEFAULT]");
                        };n && (h[b] = n);n = function n(c) {
                            void 0 === c && (c = a());"function" !== typeof c[b] && Z("invalid-app-argument", { name: b });return c[b]();
                        };void 0 !== d && P(n, d);return g[b] = n;
                    }, createFirebaseNamespace: Ia, extendNamespace: function extendNamespace(a) {
                        P(g, a);
                    }, createSubscribe: Ea, ErrorFactory: U, removeApp: function removeApp(a) {
                        b(d[a], "delete");delete d[a];
                    }, factories: e, useAsService: c, Promise: O, deepExtend: P } };g["default"] = g;Object.defineProperty(g, "apps", { get: function get() {
                    return Object.keys(d).map(function (a) {
                        return d[a];
                    });
                } });a.App = X;return g;
        }
        function Z(a, b) {
            throw Ka.create(a, b);
        }
        var Ka = new U("app", "Firebase", { "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()", "bad-app-name": "Illegal App name: '{$name}", "duplicate-app": "Firebase App named '{$name}' already exists", "app-deleted": "Firebase App named '{$name}' already deleted", "duplicate-service": "Firebase service named '{$name}' already registered", "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain", "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance." });"undefined" !== typeof firebase && (firebase = Ia());
    }).call(this);
    firebase.SDK_VERSION = "3.7.5";
    return firebase;
}.call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase;