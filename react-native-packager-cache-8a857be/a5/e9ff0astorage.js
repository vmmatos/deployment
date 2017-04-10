var firebase = require('./app');
(function () {
    /*! @license Firebase v3.7.5
        Build: 3.7.5-rc.1
        Terms: https://firebase.google.com/terms/ */
    (function () {
        for (var h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        }, l = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, n = ["Number", "MIN_SAFE_INTEGER"], ba = 0; ba < n.length - 1; ba++) {
            var ca = n[ba];ca in l || (l[ca] = {});l = l[ca];
        }var da = n[n.length - 1];
        -9007199254740991 != l[da] && aa(l, da, { configurable: !0, writable: !0, value: -9007199254740991 });
        var p = this,
            q = function q(a) {
            return void 0 !== a;
        },
            ea = function ea(a) {
            var b = typeof a;if ("object" == b) {
                if (a) {
                    if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
                } else return "null";
            } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
        };var r = function r(a, b) {
            return -1 !== a.indexOf(b);
        };var fa = function fa(a, b, c) {
            function d() {
                C || (C = !0, b.apply(null, arguments));
            }function e(b) {
                m = setTimeout(function () {
                    m = null;a(f, 2 === y);
                }, b);
            }function f(a, b) {
                if (!C) if (a) d.apply(null, arguments);else if (2 === y || z) d.apply(null, arguments);else {
                    64 > k && (k *= 2);var c;1 === y ? (y = 2, c = 0) : c = 1E3 * (k + Math.random());e(c);
                }
            }function g(a) {
                Ma || (Ma = !0, C || (null !== m ? (a || (y = 2), clearTimeout(m), e(0)) : a || (y = 1)));
            }var k = 1,
                m = null,
                z = !1,
                y = 0,
                C = !1,
                Ma = !1;e(0);setTimeout(function () {
                z = !0;g(!0);
            }, c);return g;
        };var t = "https://firebasestorage.googleapis.com";var u = function u(a, b) {
            this.code = "storage/" + a;this.message = "Firebase Storage: " + b;this.serverResponse = null;this.name = "FirebaseError";
        };(function () {
            var a = Error;function b() {}b.prototype = a.prototype;u.b = a.prototype;u.prototype = new b();u.a = function (b, d, e) {
                for (var c = Array(arguments.length - 2), g = 2; g < arguments.length; g++) {
                    c[g - 2] = arguments[g];
                }return a.prototype[d].apply(b, c);
            };
        })();
        var ga = function ga() {
            return new u("unknown", "An unknown error occurred, please check the error payload for server response.");
        },
            ha = function ha() {
            return new u("canceled", "User canceled the upload/download.");
        },
            ia = function ia() {
            return new u("cannot-slice-blob", "Cannot slice blob for upload. Please retry the upload.");
        },
            ja = function ja(a, b, c) {
            return new u("invalid-argument", "Invalid argument in `" + b + "` at index " + a + ": " + c);
        },
            ka = function ka() {
            return new u("app-deleted", "The Firebase app was deleted.");
        },
            v = function v(a, b) {
            return new u("invalid-format", "String does not match format '" + a + "': " + b);
        },
            la = function la(a) {
            throw new u("internal-error", "Internal error: " + a);
        };var ma = function ma(a, b) {
            for (var c in a) {
                Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
            }
        },
            na = function na(a) {
            var b = {};ma(a, function (a, d) {
                b[a] = d;
            });return b;
        };var oa = function oa(a, b) {
            b = b.split("/").filter(function (a) {
                return 0 < a.length;
            }).join("/");return 0 === a.length ? b : a + "/" + b;
        },
            pa = function pa(a) {
            var b = a.lastIndexOf("/", a.length - 2);return -1 === b ? a : a.slice(b + 1);
        };var qa = function qa(a) {
            if ("undefined" !== typeof firebase) return new firebase.Promise(a);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");
        };var w = function w(a, b, c, d) {
            this.j = a;this.b = {};this.method = b;this.headers = {};this.body = null;this.l = c;this.c = this.a = null;this.f = [200];this.h = [];this.timeout = d;this.g = !0;
        };var ra = { STATE_CHANGED: "state_changed" },
            x = { RUNNING: "running", PAUSED: "paused", SUCCESS: "success", CANCELED: "canceled", ERROR: "error" },
            sa = function sa(a) {
            switch (a) {case "running":case "pausing":case "canceling":
                    return "running";case "paused":
                    return "paused";case "success":
                    return "success";case "canceled":
                    return "canceled";case "error":
                    return "error";default:
                    return "error";}
        };var A = function A(a) {
            return q(a) && null !== a;
        },
            ta = function ta(a) {
            return "string" === typeof a || a instanceof String;
        },
            ua = function ua() {
            return "undefined" !== typeof Blob;
        };var wa = function wa(a, b) {
            var c = va;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
        };var xa = String.prototype.trim ? function (a) {
            return a.trim();
        } : function (a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        },
            ya = function ya(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        };var B = function B(a) {
            return function () {
                var b = [];Array.prototype.push.apply(b, arguments);firebase.Promise.resolve(!0).then(function () {
                    a.apply(null, b);
                });
            };
        };var D = function D(a, b) {
            this.bucket = a;this.path = b;
        },
            za = function za(a) {
            var b = encodeURIComponent;return "/b/" + b(a.bucket) + "/o/" + b(a.path);
        },
            Ba = function Ba(a) {
            var b;try {
                b = Aa(a);
            } catch (c) {
                return new D(a, "");
            }if ("" === b.path) return b;throw new u("invalid-default-bucket", "Invalid default bucket '" + a + "'.");
        },
            Aa = function Aa(a) {
            for (var b = null, c = [{ K: /^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i, G: { bucket: 1, path: 3 }, J: function J(a) {
                    "/" === a.path.charAt(a.path.length - 1) && (a.path = a.path.slice(0, -1));
                } }, { K: /^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
                G: { bucket: 1, path: 3 }, J: function J(a) {
                    a.path = decodeURIComponent(a.path);
                } }], d = 0; d < c.length; d++) {
                var e = c[d],
                    f = e.K.exec(a);if (f) {
                    b = f[e.G.bucket];(f = f[e.G.path]) || (f = "");b = new D(b, f);e.J(b);break;
                }
            }if (null == b) throw new u("invalid-url", "Invalid URL '" + a + "'.");return b;
        };var Ca = function Ca(a, b, c) {
            "function" == ea(a) || A(b) || A(c) ? (this.b = a, this.error = b || null, this.a = c || null) : (this.b = a.next || null, this.error = a.error || null, this.a = a.complete || null);
        };var E = { RAW: "raw", BASE64: "base64", BASE64URL: "base64url", DATA_URL: "data_url" },
            Da = function Da(a) {
            switch (a) {case "raw":case "base64":case "base64url":case "data_url":
                    break;default:
                    throw "Expected one of the event types: [raw, base64, base64url, data_url].";}
        },
            Ea = function Ea(a, b) {
            this.data = a;this.a = b || null;
        },
            Ia = function Ia(a, b) {
            switch (a) {case "raw":
                    return new Ea(Fa(b));case "base64":case "base64url":
                    return new Ea(Ga(a, b));case "data_url":
                    a = new Ha(b);var c;if (a.a) c = Ga("base64", a.c);else {
                        try {
                            c = decodeURIComponent(a.c);
                        } catch (d) {
                            throw v("data_url", "Malformed data URL.");
                        }c = Fa(c);
                    }return new Ea(c, new Ha(b).b);}throw ga();
        },
            Fa = function Fa(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);if (127 >= d) b.push(d);else if (2047 >= d) b.push(192 | d >> 6, 128 | d & 63);else if (55296 == (d & 64512)) {
                    if (c < a.length - 1 && 56320 == (a.charCodeAt(c + 1) & 64512)) {
                        var e = a.charCodeAt(++c),
                            d = 65536 | (d & 1023) << 10 | e & 1023;b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63);
                    } else b.push(239, 191, 189);
                } else 56320 == (d & 64512) ? b.push(239, 191, 189) : b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63);
            }return new Uint8Array(b);
        },
            Ga = function Ga(a, b) {
            switch (a) {case "base64":
                    var c = -1 !== b.indexOf("-"),
                        d = -1 !== b.indexOf("_");if (c || d) throw v(a, "Invalid character '" + (c ? "-" : "_") + "' found: is it base64url encoded?");break;case "base64url":
                    c = -1 !== b.indexOf("+");d = -1 !== b.indexOf("/");if (c || d) throw v(a, "Invalid character '" + (c ? "+" : "/") + "' found: is it base64 encoded?");b = b.replace(/-/g, "+").replace(/_/g, "/");}var e;try {
                e = atob(b);
            } catch (f) {
                throw v(a, "Invalid character found");
            }a = new Uint8Array(e.length);for (b = 0; b < e.length; b++) {
                a[b] = e.charCodeAt(b);
            }return a;
        },
            Ha = function Ha(a) {
            var b = a.match(/^data:([^,]+)?,/);if (null === b) throw v("data_url", "Must be formatted 'data:[<mediatype>][;base64],<data>");b = b[1] || null;this.a = !1;this.b = null;if (null != b) {
                var c = b.length - 7;this.b = (this.a = 0 <= c && b.indexOf(";base64", c) == c) ? b.substring(0, b.length - 7) : b;
            }this.c = a.substring(a.indexOf(",") + 1);
        };var Ja = function Ja(a) {
            var b = encodeURIComponent,
                c = "?";ma(a, function (a, e) {
                a = b(a) + "=" + b(e);c = c + a + "&";
            });return c = c.slice(0, -1);
        };var Ka = function Ka() {
            var a = this;this.a = new XMLHttpRequest();this.c = 0;this.f = qa(function (b) {
                a.a.addEventListener("abort", function () {
                    a.c = 2;b(a);
                });a.a.addEventListener("error", function () {
                    a.c = 1;b(a);
                });a.a.addEventListener("load", function () {
                    b(a);
                });
            });this.b = !1;
        },
            La = function La(a, b, c, d, e) {
            if (a.b) throw la("cannot .send() more than once");a.b = !0;a.a.open(c, b, !0);A(e) && ma(e, function (b, c) {
                a.a.setRequestHeader(b, c.toString());
            });A(d) ? a.a.send(d) : a.a.send();return a.f;
        },
            Na = function Na(a) {
            if (!a.b) throw la("cannot .getErrorCode() before sending");
            return a.c;
        },
            F = function F(a) {
            if (!a.b) throw la("cannot .getStatus() before sending");try {
                return a.a.status;
            } catch (b) {
                return -1;
            }
        },
            Oa = function Oa(a) {
            if (!a.b) throw la("cannot .getResponseText() before sending");return a.a.responseText;
        };Ka.prototype.abort = function () {
            this.a.abort();
        };var G = function G(a, b, c, d, e, f) {
            this.b = a;this.h = b;this.f = c;this.a = d;this.g = e;this.c = f;
        };h = G.prototype;h.V = function () {
            return this.b;
        };h.qa = function () {
            return this.h;
        };h.na = function () {
            return this.f;
        };h.ia = function () {
            return this.a;
        };h.W = function () {
            if (A(this.a)) {
                var a = this.a.downloadURLs;return A(a) && A(a[0]) ? a[0] : null;
            }return null;
        };h.pa = function () {
            return this.g;
        };h.la = function () {
            return this.c;
        };var H;a: {
            var Pa = p.navigator;if (Pa) {
                var Qa = Pa.userAgent;if (Qa) {
                    H = Qa;break a;
                }
            }H = "";
        };var Sa = function Sa(a, b, c, d, e, f, g, k, m, z, y) {
            this.D = a;this.C = b;this.w = c;this.s = d;this.A = e.slice();this.o = f.slice();this.l = this.m = this.c = this.b = null;this.g = this.h = !1;this.u = g;this.j = k;this.f = z;this.F = y;this.B = m;var C = this;this.v = qa(function (a, b) {
                C.m = a;C.l = b;Ra(C);
            });
        },
            Ta = function Ta(a, b, c) {
            this.b = a;this.c = b;this.a = !!c;
        },
            Ra = function Ra(a) {
            function b(a, b) {
                function c(a) {
                    d.f(a.loaded, a.lengthComputable ? a.total : -1);
                }b ? a(!1, new Ta(!1, null, !0)) : (b = new Ka(), b.a.withCredentials = d.F, d.b = b, null !== d.f && q(b.a.upload) && b.a.upload.addEventListener("progress", c), La(b, d.D, d.C, d.s, d.w).then(function (b) {
                    null !== d.f && q(b.a.upload) && b.a.upload.removeEventListener("progress", c);d.b = null;var e = 0 === Na(b),
                        f = F(b);if (!(e = !e)) var e = r([408, 429], f),
                        g = r(d.o, f),
                        e = 500 <= f && 600 > f || e || g;e ? (b = 2 === Na(b), a(!1, new Ta(!1, null, b))) : a(!0, new Ta(r(d.A, f), b));
                }));
            }function c(a, b) {
                var c = d.m;a = d.l;var e = b.c;if (b.b) try {
                    var f = d.u(e, Oa(e));q(f) ? c(f) : c();
                } catch (z) {
                    a(z);
                } else null !== e ? (b = ga(), f = Oa(e), b.serverResponse = f, d.j ? a(d.j(e, b)) : a(b)) : (b = b.a ? d.g ? ka() : ha() : new u("retry-limit-exceeded", "Max retry time for operation exceeded, please try again."), a(b));
            }var d = a;a.h ? c(0, new Ta(!1, null, !0)) : a.c = fa(b, c, a.B);
        };Sa.prototype.a = function () {
            return this.v;
        };Sa.prototype.cancel = function (a) {
            this.h = !0;this.g = a || !1;null !== this.c && (0, this.c)(!1);null !== this.b && this.b.abort();
        };
        var Ua = function Ua(a, b, c) {
            var d = Ja(a.b),
                d = a.j + d,
                e = a.headers ? na(a.headers) : {};null !== b && 0 < b.length && (e.Authorization = "Firebase " + b);e["X-Firebase-Storage-Version"] = "webjs/" + ("undefined" !== typeof firebase ? firebase.SDK_VERSION : "AppManager");return new Sa(d, a.method, e, a.body, a.f, a.h, a.l, a.a, a.timeout, a.c, c);
        };var Va = function Va() {};var Wa = function Wa(a) {
            this.b = firebase.Promise.reject(a);
        };Wa.prototype.a = function () {
            return this.b;
        };Wa.prototype.cancel = function () {};var Xa = function Xa() {
            this.a = {};this.b = Number.MIN_SAFE_INTEGER;
        },
            Ya = function Ya(a, b) {
            function c() {
                delete e.a[d];
            }var d = a.b;a.b++;a.a[d] = b;var e = a;b.a().then(c, c);
        },
            Za = function Za(a) {
            ma(a.a, function (a, c) {
                c && c.cancel(!0);
            });a.a = {};
        };var $a = function $a(a, b, c, d, e) {
            this.a = a;this.g = null;null !== this.a && (a = this.a.options, A(a) && (a = a.storageBucket || null, this.g = null == a ? null : Ba(a).bucket));this.o = b;this.m = c;this.j = e;this.l = d;this.c = 12E4;this.b = 6E4;this.h = new Xa();this.f = !1;
        },
            ab = function ab(a) {
            return null !== a.a && A(a.a.INTERNAL) && A(a.a.INTERNAL.getToken) ? a.a.INTERNAL.getToken().then(function (a) {
                return A(a) ? a.accessToken : null;
            }, function () {
                return null;
            }) : firebase.Promise.resolve(null);
        };$a.prototype.bucket = function () {
            if (this.f) throw ka();return this.g;
        };
        var I = function I(a, b, c) {
            if (a.f) return new Wa(ka());b = a.m(b, c, null === a.a, a.j);Ya(a.h, b);return b;
        };var bb = -1 != H.indexOf("Opera"),
            cb = -1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE"),
            db = -1 != H.indexOf("Edge"),
            eb = -1 != H.indexOf("Gecko") && !(-1 != H.toLowerCase().indexOf("webkit") && -1 == H.indexOf("Edge")) && !(-1 != H.indexOf("Trident") || -1 != H.indexOf("MSIE")) && -1 == H.indexOf("Edge"),
            fb = -1 != H.toLowerCase().indexOf("webkit") && -1 == H.indexOf("Edge"),
            gb;
        a: {
            var hb = "",
                ib = function () {
                var a = H;if (eb) return (/rv\:([^\);]+)(\)|;)/.exec(a)
                );if (db) return (/Edge\/([\d\.]+)/.exec(a)
                );if (cb) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
                );if (fb) return (/WebKit\/(\S+)/.exec(a)
                );if (bb) return (/(?:Version)[ \/]?(\S+)/.exec(a)
                );
            }();ib && (hb = ib ? ib[1] : "");if (cb) {
                var jb,
                    kb = p.document;jb = kb ? kb.documentMode : void 0;if (null != jb && jb > parseFloat(hb)) {
                    gb = String(jb);break a;
                }
            }gb = hb;
        }
        var lb = gb,
            va = {},
            mb = function mb(a) {
            return wa(a, function () {
                for (var b = 0, c = xa(String(lb)).split("."), d = xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        k = d[f] || "";do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];if (0 == g[0].length && 0 == k[0].length) break;b = ya(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || ya(0 == g[2].length, 0 == k[2].length) || ya(g[2], k[2]);g = g[3];k = k[3];
                    } while (0 == b);
                }return 0 <= b;
            });
        };var nb = function nb(a) {
            var b = p.BlobBuilder || p.WebKitBlobBuilder;if (q(b)) {
                for (var b = new b(), c = 0; c < arguments.length; c++) {
                    b.append(arguments[c]);
                }return b.getBlob();
            }b = Array.prototype.slice.call(arguments);c = p.BlobBuilder || p.WebKitBlobBuilder;if (q(c)) {
                for (var c = new c(), d = 0; d < b.length; d++) {
                    c.append(b[d], void 0);
                }b = c.getBlob(void 0);
            } else if (q(p.Blob)) b = new Blob(b, {});else throw Error("This browser doesn't seem to support creating Blobs");return b;
        },
            ob = function ob(a, b, c) {
            q(c) || (c = a.size);return a.webkitSlice ? a.webkitSlice(b, c) : a.mozSlice ? a.mozSlice(b, c) : a.slice ? eb && !mb("13.0") || fb && !mb("537.1") ? (0 > b && (b += a.size), 0 > b && (b = 0), 0 > c && (c += a.size), c < b && (c = b), a.slice(b, c - b)) : a.slice(b, c) : null;
        };var pb = function pb(a, b) {
            return b;
        },
            J = function J(a, b, c, d) {
            this.c = a;this.b = b || a;this.writable = !!c;this.a = d || pb;
        },
            qb = null,
            rb = function rb() {
            if (qb) return qb;var a = [];a.push(new J("bucket"));a.push(new J("generation"));a.push(new J("metageneration"));a.push(new J("name", "fullPath", !0));var b = new J("name");b.a = function (a, b) {
                return !ta(b) || 2 > b.length ? b : pa(b);
            };a.push(b);b = new J("size");b.a = function (a, b) {
                return A(b) ? +b : b;
            };a.push(b);a.push(new J("timeCreated"));a.push(new J("updated"));a.push(new J("md5Hash", null, !0));
            a.push(new J("cacheControl", null, !0));a.push(new J("contentDisposition", null, !0));a.push(new J("contentEncoding", null, !0));a.push(new J("contentLanguage", null, !0));a.push(new J("contentType", null, !0));a.push(new J("metadata", "customMetadata", !0));a.push(new J("downloadTokens", "downloadURLs", !1, function (a, b) {
                if (!(ta(b) && 0 < b.length)) return [];var c = encodeURIComponent;return b.split(",").map(function (b) {
                    var d = a.fullPath,
                        d = "https://firebasestorage.googleapis.com/v0" + ("/b/" + c(a.bucket) + "/o/" + c(d));b = Ja({ alt: "media",
                        token: b });return d + b;
                });
            }));return qb = a;
        },
            sb = function sb(a, b) {
            Object.defineProperty(a, "ref", { get: function get() {
                    return b.o(b, new D(a.bucket, a.fullPath));
                } });
        },
            tb = function tb(a, b) {
            for (var c = {}, d = b.length, e = 0; e < d; e++) {
                var f = b[e];f.writable && (c[f.c] = a[f.b]);
            }return JSON.stringify(c);
        },
            ub = function ub(a) {
            if (!a || "object" !== typeof a) throw "Expected Metadata object.";for (var b in a) {
                var c = a[b];if ("customMetadata" === b) {
                    if ("object" !== typeof c) throw "Expected object for 'customMetadata' mapping.";
                } else if (null != c && "object" === typeof c) throw "Mapping for '" + b + "' cannot be an object.";
            }
        };var K = function K(a, b, c) {
            for (var d = b.length, e = b.length, f = 0; f < b.length; f++) {
                if (b[f].b) {
                    d = f;break;
                }
            }if (!(d <= c.length && c.length <= e)) throw d === e ? (b = d, d = 1 === d ? "argument" : "arguments") : (b = "between " + d + " and " + e, d = "arguments"), new u("invalid-argument-count", "Invalid argument count in `" + a + "`: Expected " + b + " " + d + ", received " + c.length + ".");for (f = 0; f < c.length; f++) {
                try {
                    b[f].a(c[f]);
                } catch (g) {
                    if (g instanceof Error) throw ja(f, a, g.message);throw ja(f, a, g);
                }
            }
        },
            L = function L(a, b) {
            var c = this;this.a = function (b) {
                c.b && !q(b) || a(b);
            };
            this.b = !!b;
        },
            vb = function vb(a, b) {
            return function (c) {
                a(c);b(c);
            };
        },
            M = function M(a, b) {
            function c(a) {
                if (!("string" === typeof a || a instanceof String)) throw "Expected string.";
            }var d;a ? d = vb(c, a) : d = c;return new L(d, b);
        },
            wb = function wb() {
            return new L(function (a) {
                if (!(a instanceof Uint8Array || a instanceof ArrayBuffer || ua() && a instanceof Blob)) throw "Expected Blob or File.";
            });
        },
            xb = function xb() {
            return new L(function (a) {
                if (!(("number" === typeof a || a instanceof Number) && 0 <= a)) throw "Expected a number 0 or greater.";
            });
        },
            yb = function yb(a, b) {
            return new L(function (b) {
                if (!(null === b || A(b) && b instanceof Object)) throw "Expected an Object.";A(a) && a(b);
            }, b);
        },
            N = function N() {
            return new L(function (a) {
                if (null !== a && "function" != ea(a)) throw "Expected a Function.";
            }, !0);
        };var O = function O(a, b) {
            ua() && a instanceof Blob ? (this.i = a, b = a.size, a = a.type) : (a instanceof ArrayBuffer ? (b ? this.i = new Uint8Array(a) : (this.i = new Uint8Array(a.byteLength), this.i.set(new Uint8Array(a))), b = this.i.length) : (b ? this.i = a : (this.i = new Uint8Array(a.length), this.i.set(a)), b = a.length), a = "");this.a = b;this.b = a;
        };O.prototype.type = function () {
            return this.b;
        };
        O.prototype.slice = function (a, b) {
            if (ua() && this.i instanceof Blob) return a = ob(this.i, a, b), null === a ? null : new O(a);a = new Uint8Array(this.i.buffer, a, b - a);return new O(a, !0);
        };
        var zb = function zb(a) {
            var b = [];Array.prototype.push.apply(b, arguments);if (ua()) return b = b.map(function (a) {
                return a instanceof O ? a.i : a;
            }), new O(nb.apply(null, b));var b = b.map(function (a) {
                return ta(a) ? Ia("raw", a).data : a.i;
            }),
                c = 0;b.forEach(function (a) {
                c += a.byteLength;
            });var d = new Uint8Array(c),
                e = 0;b.forEach(function (a) {
                for (var b = 0; b < a.length; b++) {
                    d[e++] = a[b];
                }
            });return new O(d, !0);
        };var P = function P(a) {
            if (!a) throw ga();
        },
            Ab = function Ab(a, b) {
            return function (c, d) {
                var e;a: {
                    try {
                        e = JSON.parse(d);
                    } catch (k) {
                        e = null;break a;
                    }c = typeof e;e = "object" == c && null != e || "function" == c ? e : null;
                }if (null === e) e = null;else {
                    c = { type: "file" };d = b.length;for (var f = 0; f < d; f++) {
                        var g = b[f];c[g.b] = g.a(c, e[g.c]);
                    }sb(c, a);e = c;
                }P(null !== e);return e;
            };
        },
            Q = function Q(a) {
            return function (b, c) {
                b = 401 === F(b) ? new u("unauthenticated", "User is not authenticated, please authenticate using Firebase Authentication and try again.") : 402 === F(b) ? new u("quota-exceeded", "Quota for bucket '" + a.bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.") : 403 === F(b) ? new u("unauthorized", "User does not have permission to access '" + a.path + "'.") : c;b.serverResponse = c.serverResponse;return b;
            };
        },
            Bb = function Bb(a) {
            var b = Q(a);return function (c, d) {
                var e = b(c, d);404 === F(c) && (e = new u("object-not-found", "Object '" + a.path + "' does not exist."));e.serverResponse = d.serverResponse;return e;
            };
        },
            Cb = function Cb(a, b, c) {
            var d = za(b);a = new w(t + "/v0" + d, "GET", Ab(a, c), a.c);a.a = Bb(b);return a;
        },
            Db = function Db(a, b) {
            var c = za(b);a = new w(t + "/v0" + c, "DELETE", function () {}, a.c);a.f = [200, 204];a.a = Bb(b);return a;
        },
            Eb = function Eb(a, b, c) {
            c = c ? na(c) : {};c.fullPath = a.path;c.size = b.a;c.contentType || (a = b && b.type() || "application/octet-stream", c.contentType = a);return c;
        },
            Fb = function Fb(a, b, c, d, e) {
            var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
                g = { "X-Goog-Upload-Protocol": "multipart" },
                k;k = "";for (var m = 0; 2 > m; m++) {
                k += Math.random().toString().slice(2);
            }g["Content-Type"] = "multipart/related; boundary=" + k;e = Eb(b, d, e);m = tb(e, c);d = zb("--" + k + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + m + "\r\n--" + k + "\r\nContent-Type: " + e.contentType + "\r\n\r\n", d, "\r\n--" + k + "--");if (null === d) throw ia();a = new w(t + "/v0" + f, "POST", Ab(a, c), a.b);a.b = { name: e.fullPath };a.headers = g;a.body = d.i;a.a = Q(b);return a;
        },
            Gb = function Gb(a, b, c, d) {
            this.a = a;this.total = b;this.b = !!c;this.c = d || null;
        },
            Hb = function Hb(a, b) {
            var c;try {
                c = a.a.getResponseHeader("X-Goog-Upload-Status");
            } catch (d) {
                P(!1);
            }P(r(b || ["active"], c));return c;
        },
            Ib = function Ib(a, b, c, d, e) {
            var f = "/b/" + encodeURIComponent(b.bucket) + "/o",
                g = Eb(b, d, e);e = { name: g.fullPath };f = t + "/v0" + f;d = { "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": d.a, "X-Goog-Upload-Header-Content-Type": g.contentType, "Content-Type": "application/json; charset=utf-8" };c = tb(g, c);a = new w(f, "POST", function (a) {
                Hb(a);var b;try {
                    b = a.a.getResponseHeader("X-Goog-Upload-URL");
                } catch (z) {
                    P(!1);
                }P(ta(b));return b;
            }, a.b);a.b = e;a.headers = d;a.body = c;a.a = Q(b);return a;
        },
            Jb = function Jb(a, b, c, d) {
            a = new w(c, "POST", function (a) {
                var b = Hb(a, ["active", "final"]),
                    c;try {
                    c = a.a.getResponseHeader("X-Goog-Upload-Size-Received");
                } catch (k) {
                    P(!1);
                }a = c;isFinite(a) && (a = String(a));a = "string" == typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;P(!isNaN(a));return new Gb(a, d.a, "final" === b);
            }, a.b);a.headers = { "X-Goog-Upload-Command": "query" };a.a = Q(b);a.g = !1;return a;
        },
            Kb = function Kb(a, b, c, d, e, f, g, k) {
            var m = new Gb(0, 0);g ? (m.a = g.a, m.total = g.total) : (m.a = 0, m.total = d.a);if (d.a !== m.total) throw new u("server-file-wrong-size", "Server recorded incorrect upload file size, please retry the upload.");var z = g = m.total - m.a;0 < e && (z = Math.min(z, e));var y = m.a;e = { "X-Goog-Upload-Command": z === g ? "upload, finalize" : "upload", "X-Goog-Upload-Offset": m.a };g = d.slice(y, y + z);if (null === g) throw ia();c = new w(c, "POST", function (a, c) {
                var e = Hb(a, ["active", "final"]),
                    g = m.a + z,
                    k = d.a,
                    y;"final" === e ? y = Ab(b, f)(a, c) : y = null;return new Gb(g, k, "final" === e, y);
            }, b.b);c.headers = e;c.body = g.i;c.c = k || null;c.a = Q(a);c.g = !1;return c;
        };var T = function T(a, b, c, d, e, f) {
            var g = this;this.M = a;this.c = b;this.m = c;this.f = e;this.h = void 0 === f ? null : f;this.s = d;this.j = 0;this.F = this.v = !1;this.A = [];this.S = 262144 < this.f.a;this.b = "running";this.a = this.w = this.g = null;this.l = 1;this.o = function (a) {
                g.a = null;g.l = 1;"storage/canceled" === a.code ? (g.v = !0, R(g)) : (g.g = a, S(g, "error"));
            };this.L = function (a) {
                g.a = null;"storage/canceled" === a.code ? R(g) : (g.g = a, S(g, "error"));
            };this.C = this.u = null;this.D = qa(function (a, b) {
                g.u = a;g.C = b;Lb(g);
            });this.D.then(null, function () {});
        },
            Nb = function Nb(a) {
            var b = a.j;return function (c) {
                Mb(a, b + c);
            };
        },
            Lb = function Lb(a) {
            "running" === a.b && null === a.a && (a.S ? null === a.w ? Ob(a) : a.v ? Pb(a) : a.F ? Qb(a) : Rb(a) : Sb(a));
        },
            U = function U(a, b) {
            ab(a.c).then(function (c) {
                switch (a.b) {case "running":
                        b(c);break;case "canceling":
                        S(a, "canceled");break;case "pausing":
                        S(a, "paused");}
            });
        },
            Ob = function Ob(a) {
            U(a, function (b) {
                var c = Ib(a.c, a.m, a.s, a.f, a.h);a.a = I(a.c, c, b);a.a.a().then(function (b) {
                    a.a = null;a.w = b;a.v = !1;R(a);
                }, a.o);
            });
        },
            Pb = function Pb(a) {
            var b = a.w;U(a, function (c) {
                var d = Jb(a.c, a.m, b, a.f);a.a = I(a.c, d, c);
                a.a.a().then(function (b) {
                    a.a = null;Mb(a, b.a);a.v = !1;b.b && (a.F = !0);R(a);
                }, a.o);
            });
        },
            Rb = function Rb(a) {
            var b = 262144 * a.l,
                c = new Gb(a.j, a.f.a),
                d = a.w;U(a, function (e) {
                var f;try {
                    f = Kb(a.m, a.c, d, a.f, b, a.s, c, Nb(a));
                } catch (g) {
                    a.g = g;S(a, "error");return;
                }a.a = I(a.c, f, e);a.a.a().then(function (b) {
                    33554432 > 262144 * a.l && (a.l *= 2);a.a = null;Mb(a, b.a);b.b ? (a.h = b.c, S(a, "success")) : R(a);
                }, a.o);
            });
        },
            Qb = function Qb(a) {
            U(a, function (b) {
                var c = Cb(a.c, a.m, a.s);a.a = I(a.c, c, b);a.a.a().then(function (b) {
                    a.a = null;a.h = b;S(a, "success");
                }, a.L);
            });
        },
            Sb = function Sb(a) {
            U(a, function (b) {
                var c = Fb(a.c, a.m, a.s, a.f, a.h);a.a = I(a.c, c, b);a.a.a().then(function (b) {
                    a.a = null;a.h = b;Mb(a, a.f.a);S(a, "success");
                }, a.o);
            });
        },
            Mb = function Mb(a, b) {
            var c = a.j;a.j = b;a.j !== c && V(a);
        },
            S = function S(a, b) {
            if (a.b !== b) switch (b) {case "canceling":
                    a.b = b;null !== a.a && a.a.cancel();break;case "pausing":
                    a.b = b;null !== a.a && a.a.cancel();break;case "running":
                    var c = "paused" === a.b;a.b = b;c && (V(a), Lb(a));break;case "paused":
                    a.b = b;V(a);break;case "canceled":
                    a.g = ha();a.b = b;V(a);break;case "error":
                    a.b = b;V(a);break;case "success":
                    a.b = b, V(a);}
        },
            R = function R(a) {
            switch (a.b) {case "pausing":
                    S(a, "paused");break;case "canceling":
                    S(a, "canceled");break;case "running":
                    Lb(a);}
        };T.prototype.B = function () {
            return new G(this.j, this.f.a, sa(this.b), this.h, this, this.M);
        };
        T.prototype.N = function (a, b, c, d) {
            function e(a) {
                try {
                    g(a);return;
                } catch (C) {}try {
                    if (k(a), !(q(a.next) || q(a.error) || q(a.complete))) throw "";
                } catch (C) {
                    throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";
                }
            }function f(a) {
                return function (b, c, d) {
                    null !== a && K("on", a, arguments);var e = new Ca(b, c, d);m.A.push(e);Tb(m, e);return function () {
                        var a = m.A,
                            b = a.indexOf(e);-1 !== b && a.splice(b, 1);
                    };
                };
            }var g = N().a,
                k = yb(null, !0).a;K("on", [M(function () {
                if ("state_changed" !== a) throw "Expected one of the event types: [state_changed].";
            }), yb(e, !0), N(), N()], arguments);var m = this,
                z = [yb(function (a) {
                if (null === a) throw "Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a);
            }), N(), N()];return q(b) || q(c) || q(d) ? f(null)(b, c, d) : f(z);
        };T.prototype.then = function (a, b) {
            return this.D.then(void 0 === a ? null : a, void 0 === b ? null : b);
        };T.prototype["catch"] = function (a) {
            return this.then(null, a);
        };
        var V = function V(a) {
            Ub(a);Array.prototype.slice.call(a.A).forEach(function (b) {
                Tb(a, b);
            });
        },
            Ub = function Ub(a) {
            if (null !== a.u) {
                var b = !0;switch (sa(a.b)) {case "success":
                        B(a.u.bind(null, a.B()))();break;case "canceled":case "error":
                        B(a.C.bind(null, a.g))();break;default:
                        b = !1;}b && (a.u = null, a.C = null);
            }
        },
            Tb = function Tb(a, b) {
            switch (sa(a.b)) {case "running":case "paused":
                    null !== b.b && B(b.b.bind(b, a.B()))();break;case "success":
                    null !== b.a && B(b.a.bind(b))();break;case "canceled":case "error":
                    null !== b.error && B(b.error.bind(b, a.g))();break;default:
                    null !== b.error && B(b.error.bind(b, a.g))();}
        };T.prototype.R = function () {
            K("resume", [], arguments);var a = "paused" === this.b || "pausing" === this.b;a && S(this, "running");return a;
        };T.prototype.O = function () {
            K("pause", [], arguments);var a = "running" === this.b;a && S(this, "pausing");return a;
        };T.prototype.cancel = function () {
            K("cancel", [], arguments);var a = "running" === this.b || "pausing" === this.b;a && S(this, "canceling");return a;
        };var W = function W(a, b) {
            this.a = a;this.location = b instanceof D ? b : Aa(b);
        };W.prototype.toString = function () {
            K("toString", [], arguments);return "gs://" + this.location.bucket + "/" + this.location.path;
        };var Vb = function Vb(a, b) {
            return new W(a, b);
        };h = W.prototype;h.H = function (a) {
            K("child", [M()], arguments);var b = oa(this.location.path, a);return Vb(this.a, new D(this.location.bucket, b));
        };
        h.ka = function () {
            var a;a = this.location.path;if (0 == a.length) a = null;else {
                var b = a.lastIndexOf("/");a = -1 === b ? "" : a.slice(0, b);
            }return null === a ? null : Vb(this.a, new D(this.location.bucket, a));
        };h.ma = function () {
            return Vb(this.a, new D(this.location.bucket, ""));
        };h.U = function () {
            return this.location.bucket;
        };h.fa = function () {
            return this.location.path;
        };h.ja = function () {
            return pa(this.location.path);
        };h.oa = function () {
            return this.a.l;
        };
        h.Z = function (a, b) {
            K("put", [wb(), new L(ub, !0)], arguments);X(this, "put");return new T(this, this.a, this.location, rb(), new O(a), b);
        };h.$ = function (a, b, c) {
            K("putString", [M(), M(Da, !0), new L(ub, !0)], arguments);X(this, "putString");var d = Ia(A(b) ? b : "raw", a),
                e = c ? na(c) : {};!A(e.contentType) && A(d.a) && (e.contentType = d.a);return new T(this, this.a, this.location, rb(), new O(d.data, !0), e);
        };
        h.X = function () {
            K("delete", [], arguments);X(this, "delete");var a = this;return ab(this.a).then(function (b) {
                var c = Db(a.a, a.location);return I(a.a, c, b).a();
            });
        };h.I = function () {
            K("getMetadata", [], arguments);X(this, "getMetadata");var a = this;return ab(this.a).then(function (b) {
                var c = Cb(a.a, a.location, rb());return I(a.a, c, b).a();
            });
        };
        h.aa = function (a) {
            K("updateMetadata", [new L(ub, void 0)], arguments);X(this, "updateMetadata");var b = this;return ab(this.a).then(function (c) {
                var d = b.a,
                    e = b.location,
                    f = a,
                    g = rb(),
                    k = za(e),
                    k = t + "/v0" + k,
                    f = tb(f, g),
                    d = new w(k, "PATCH", Ab(d, g), d.c);d.headers = { "Content-Type": "application/json; charset=utf-8" };d.body = f;d.a = Bb(e);return I(b.a, d, c).a();
            });
        };
        h.Y = function () {
            K("getDownloadURL", [], arguments);X(this, "getDownloadURL");return this.I().then(function (a) {
                a = a.downloadURLs[0];if (A(a)) return a;throw new u("no-download-url", "The given file does not have any download URLs.");
            });
        };var X = function X(a, b) {
            if ("" === a.location.path) throw new u("invalid-root-operation", "The operation '" + b + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
        };var Y = function Y(a, b, c) {
            this.a = new $a(a, function (a, b) {
                return new W(a, b);
            }, Ua, this, b);this.c = a;q(c) ? this.b = Ba(c) : null != this.a.bucket() && (this.b = new D(this.a.bucket(), ""));this.f = new Wb(this);
        };h = Y.prototype;h.ba = function (a) {
            K("ref", [M(function (a) {
                if (/^[A-Za-z]+:\/\//.test(a)) throw "Expected child path but got a URL, use refFromURL instead.";
            }, !0)], arguments);if (null === this.b) throw Error("No Storage Bucket defined in Firebase Options.");var b = new W(this.a, this.b);return q(a) ? b.H(a) : b;
        };
        h.ca = function (a) {
            K("refFromURL", [M(function (a) {
                if (!/^[A-Za-z]+:\/\//.test(a)) throw "Expected full URL but got a child path, use ref instead.";try {
                    Aa(a);
                } catch (c) {
                    throw "Expected valid full URL but got an invalid one.";
                }
            }, !1)], arguments);return new W(this.a, a);
        };h.ha = function () {
            return this.a.b;
        };h.ea = function (a) {
            K("setMaxUploadRetryTime", [xb()], arguments);this.a.b = a;
        };h.ga = function () {
            return this.a.c;
        };h.da = function (a) {
            K("setMaxOperationRetryTime", [xb()], arguments);this.a.c = a;
        };h.T = function () {
            return this.c;
        };
        h.P = function () {
            return this.f;
        };var Wb = function Wb(a) {
            this.a = a;
        };Wb.prototype.b = function () {
            var a = this.a.a;a.f = !0;a.a = null;Za(a.h);
        };var Z = function Z(a, b, c) {
            Object.defineProperty(a, b, { get: c });
        };W.prototype.toString = W.prototype.toString;W.prototype.child = W.prototype.H;W.prototype.put = W.prototype.Z;W.prototype.putString = W.prototype.$;W.prototype["delete"] = W.prototype.X;W.prototype.getMetadata = W.prototype.I;W.prototype.updateMetadata = W.prototype.aa;W.prototype.getDownloadURL = W.prototype.Y;Z(W.prototype, "parent", W.prototype.ka);Z(W.prototype, "root", W.prototype.ma);Z(W.prototype, "bucket", W.prototype.U);Z(W.prototype, "fullPath", W.prototype.fa);
        Z(W.prototype, "name", W.prototype.ja);Z(W.prototype, "storage", W.prototype.oa);Y.prototype.ref = Y.prototype.ba;Y.prototype.refFromURL = Y.prototype.ca;Z(Y.prototype, "maxOperationRetryTime", Y.prototype.ga);Y.prototype.setMaxOperationRetryTime = Y.prototype.da;Z(Y.prototype, "maxUploadRetryTime", Y.prototype.ha);Y.prototype.setMaxUploadRetryTime = Y.prototype.ea;Z(Y.prototype, "app", Y.prototype.T);Z(Y.prototype, "INTERNAL", Y.prototype.P);Wb.prototype["delete"] = Wb.prototype.b;Y.prototype.capi_ = function (a) {
            t = a;
        };
        T.prototype.on = T.prototype.N;T.prototype.resume = T.prototype.R;T.prototype.pause = T.prototype.O;T.prototype.cancel = T.prototype.cancel;T.prototype.then = T.prototype.then;T.prototype["catch"] = T.prototype["catch"];Z(T.prototype, "snapshot", T.prototype.B);Z(G.prototype, "bytesTransferred", G.prototype.V);Z(G.prototype, "totalBytes", G.prototype.qa);Z(G.prototype, "state", G.prototype.na);Z(G.prototype, "metadata", G.prototype.ia);Z(G.prototype, "downloadURL", G.prototype.W);Z(G.prototype, "task", G.prototype.pa);
        Z(G.prototype, "ref", G.prototype.la);ra.STATE_CHANGED = "state_changed";x.RUNNING = "running";x.PAUSED = "paused";x.SUCCESS = "success";x.CANCELED = "canceled";x.ERROR = "error";E.RAW = "raw";E.BASE64 = "base64";E.BASE64URL = "base64url";E.DATA_URL = "data_url";
        (function () {
            function a(a, b, e) {
                return new Y(a, new Va(), e);
            }var b = { TaskState: x, TaskEvent: ra, StringFormat: E, Storage: Y, Reference: W };if ("undefined" !== typeof firebase) firebase.INTERNAL.registerService("storage", a, b, void 0, !0);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");
        })();
    }).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.storage;