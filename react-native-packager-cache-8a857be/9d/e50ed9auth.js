var firebase = require('./app');
(function () {
  /*! @license Firebase v3.7.5
      Build: 3.7.5-rc.1
      Terms: https://firebase.google.com/terms/ */
  (function () {
    var h,
        aa = aa || {},
        l = this,
        ba = function ba() {},
        ca = function ca(a) {
      var b = typeof a;if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
    },
        da = function da(a) {
      return null === a;
    },
        ea = function ea(a) {
      return "array" == ca(a);
    },
        fa = function fa(a) {
      var b = ca(a);return "array" == b || "object" == b && "number" == typeof a.length;
    },
        m = function m(a) {
      return "string" == typeof a;
    },
        ga = function ga(a) {
      return "number" == typeof a;
    },
        p = function p(a) {
      return "function" == ca(a);
    },
        ha = function ha(a) {
      var b = typeof a;return "object" == b && null != a || "function" == b;
    },
        ia = function ia(a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
        ja = function ja(a, b, c) {
      if (!a) throw Error();if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);return function () {
          var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
        };
      }return function () {
        return a.apply(b, arguments);
      };
    },
        _q = function q(a, b, c) {
      _q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;return _q.apply(null, arguments);
    },
        ka = function ka(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);return function () {
        var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
      };
    },
        la = Date.now || function () {
      return +new Date();
    },
        r = function r(a, b) {
      function c() {}c.prototype = b.prototype;a.qd = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.If = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
          d[e - 2] = arguments[e];
        }return b.prototype[c].apply(a, d);
      };
    };var t = function t(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, t);else {
        var b = Error().stack;b && (this.stack = b);
      }a && (this.message = String(a));
    };r(t, Error);t.prototype.name = "CustomError";var ma = function ma(a, b) {
      for (var c in a) {
        b.call(void 0, a[c], c, a);
      }
    },
        na = function na(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = a[d];
      }return b;
    },
        oa = function oa(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = d;
      }return b;
    },
        pa = function pa(a) {
      for (var b in a) {
        return !1;
      }return !0;
    },
        qa = function qa(a, b) {
      for (var c in a) {
        if (!(c in b) || a[c] !== b[c]) return !1;
      }for (c in b) {
        if (!(c in a)) return !1;
      }return !0;
    },
        ra = function ra(a) {
      var b = {},
          c;for (c in a) {
        b[c] = a[c];
      }return b;
    },
        sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        ta = function ta(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];for (c in d) {
          a[c] = d[c];
        }for (var f = 0; f < sa.length; f++) {
          c = sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    };var ua = function ua(a) {
      ua[" "](a);return a;
    };ua[" "] = ba;var wa = function wa(a, b) {
      var c = va;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };var xa = function xa(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
        d += c.shift() + e.shift();
      }return d + c.join("%s");
    },
        ya = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
        za = /&/g,
        Aa = /</g,
        Ba = />/g,
        Ca = /"/g,
        Da = /'/g,
        Ea = /\x00/g,
        Fa = /[\x00&<>"']/,
        u = function u(a, b) {
      return -1 != a.indexOf(b);
    },
        Ga = function Ga(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };var Ha = function Ha(a, b) {
      b.unshift(a);t.call(this, xa.apply(null, b));b.shift();
    };r(Ha, t);Ha.prototype.name = "AssertionError";
    var Ia = function Ia(a, b, c, d) {
      var e = "Assertion failed";if (c) var e = e + (": " + c),
          f = d;else a && (e += ": " + a, f = b);throw new Ha("" + e, f || []);
    },
        v = function v(a, b, c) {
      a || Ia("", null, b, Array.prototype.slice.call(arguments, 2));
    },
        Ja = function Ja(a, b) {
      throw new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
        Ka = function Ka(a, b, c) {
      ga(a) || Ia("Expected number but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));return a;
    },
        La = function La(a, b, c) {
      m(a) || Ia("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
        Ma = function Ma(a, b, c) {
      p(a) || Ia("Expected function but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
    };var Na;a: {
      var Oa = l.navigator;if (Oa) {
        var Pa = Oa.userAgent;if (Pa) {
          Na = Pa;break a;
        }
      }Na = "";
    }var w = function w(a) {
      return u(Na, a);
    };var Qa = Array.prototype.indexOf ? function (a, b, c) {
      v(null != a.length);return Array.prototype.indexOf.call(a, b, c);
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;for (; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }return -1;
    },
        x = Array.prototype.forEach ? function (a, b, c) {
      v(null != a.length);Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    },
        Ra = function Ra(a, b) {
      for (var c = m(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
        d in c && b.call(void 0, c[d], d, a);
      }
    },
        Sa = Array.prototype.map ? function (a, b, c) {
      v(null != a.length);return Array.prototype.map.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, g = 0; g < d; g++) {
        g in f && (e[g] = b.call(c, f[g], g, a));
      }return e;
    },
        Ta = Array.prototype.some ? function (a, b, c) {
      v(null != a.length);return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        if (f in e && b.call(c, e[f], f, a)) return !0;
      }return !1;
    },
        Va = function Va(a) {
      var b;a: {
        b = Ua;for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;break a;
          }
        }b = -1;
      }return 0 > b ? null : m(a) ? a.charAt(b) : a[b];
    },
        Wa = function Wa(a, b) {
      return 0 <= Qa(a, b);
    },
        Ya = function Ya(a, b) {
      b = Qa(a, b);var c;(c = 0 <= b) && Xa(a, b);return c;
    },
        Xa = function Xa(a, b) {
      v(null != a.length);return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
        Za = function Za(a, b) {
      var c = 0;Ra(a, function (d, e) {
        b.call(void 0, d, e, a) && Xa(a, e) && c++;
      });
    },
        $a = function $a(a) {
      return Array.prototype.concat.apply([], arguments);
    },
        bb = function bb(a) {
      var b = a.length;if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }return c;
      }return [];
    };var cb = function cb(a) {
      return Sa(a, function (a) {
        a = a.toString(16);return 1 < a.length ? a : "0" + a;
      }).join("");
    };var db = w("Opera"),
        y = w("Trident") || w("MSIE"),
        eb = w("Edge"),
        fb = eb || y,
        gb = w("Gecko") && !(u(Na.toLowerCase(), "webkit") && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge"),
        hb = u(Na.toLowerCase(), "webkit") && !w("Edge"),
        ib = function ib() {
      var a = l.document;return a ? a.documentMode : void 0;
    },
        jb;
    a: {
      var kb = "",
          lb = function () {
        var a = Na;if (gb) return (/rv\:([^\);]+)(\)|;)/.exec(a)
        );if (eb) return (/Edge\/([\d\.]+)/.exec(a)
        );if (y) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        );if (hb) return (/WebKit\/(\S+)/.exec(a)
        );if (db) return (/(?:Version)[ \/]?(\S+)/.exec(a)
        );
      }();lb && (kb = lb ? lb[1] : "");if (y) {
        var mb = ib();if (null != mb && mb > parseFloat(kb)) {
          jb = String(mb);break a;
        }
      }jb = kb;
    }
    var nb = jb,
        va = {},
        z = function z(a) {
      return wa(a, function () {
        for (var b = 0, c = ya(String(nb)).split("."), d = ya(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              k = d[f] || "";do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];if (0 == g[0].length && 0 == k[0].length) break;b = Ga(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Ga(0 == g[2].length, 0 == k[2].length) || Ga(g[2], k[2]);g = g[3];k = k[3];
          } while (0 == b);
        }return 0 <= b;
      });
    },
        ob;var pb = l.document;
    ob = pb && y ? ib() || ("CSS1Compat" == pb.compatMode ? parseInt(nb, 10) : 5) : void 0;var qb = null,
        rb = null,
        tb = function tb(a) {
      var b = "";sb(a, function (a) {
        b += String.fromCharCode(a);
      });return b;
    },
        sb = function sb(a, b) {
      function c(b) {
        for (; d < a.length;) {
          var c = a.charAt(d++),
              e = rb[c];if (null != e) return e;if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
        }return b;
      }ub();for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            k = c(64);if (64 === k && -1 === e) break;b(e << 2 | f >> 4);64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k));
      }
    },
        ub = function ub() {
      if (!qb) {
        qb = {};rb = {};for (var a = 0; 65 > a; a++) {
          qb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), rb[qb[a]] = a, 62 <= a && (rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
        }
      }
    };var vb = function vb() {
      this.Ba = -1;
    };var yb = function yb(a, b) {
      this.Ba = 64;this.Yb = l.Uint8Array ? new Uint8Array(this.Ba) : Array(this.Ba);this.Bc = this.cb = 0;this.h = [];this.$e = a;this.Nd = b;this.Bf = l.Int32Array ? new Int32Array(64) : Array(64);void 0 !== wb || (wb = l.Int32Array ? new Int32Array(xb) : xb);this.reset();
    },
        wb;r(yb, vb);for (var zb = [], Ab = 0; 63 > Ab; Ab++) {
      zb[Ab] = 0;
    }var Bb = $a(128, zb);yb.prototype.reset = function () {
      this.Bc = this.cb = 0;this.h = l.Int32Array ? new Int32Array(this.Nd) : bb(this.Nd);
    };
    var Cb = function Cb(a) {
      var b = a.Yb;v(b.length == a.Ba);for (var c = a.Bf, d = 0, e = 0; e < b.length;) {
        c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
      }for (b = 16; 64 > b; b++) {
        var e = c[b - 15] | 0,
            d = c[b - 2] | 0,
            f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
            g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;c[b] = f + g | 0;
      }for (var d = a.h[0] | 0, e = a.h[1] | 0, k = a.h[2] | 0, n = a.h[3] | 0, B = a.h[4] | 0, ab = a.h[5] | 0, Kb = a.h[6] | 0, f = a.h[7] | 0, b = 0; 64 > b; b++) {
        var sh = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0,
            g = B & ab ^ ~B & Kb,
            f = f + ((B >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7)) | 0,
            g = g + (wb[b] | 0) | 0,
            g = f + (g + (c[b] | 0) | 0) | 0,
            f = Kb,
            Kb = ab,
            ab = B,
            B = n + g | 0,
            n = k,
            k = e,
            e = d,
            d = g + sh | 0;
      }a.h[0] = a.h[0] + d | 0;a.h[1] = a.h[1] + e | 0;a.h[2] = a.h[2] + k | 0;a.h[3] = a.h[3] + n | 0;a.h[4] = a.h[4] + B | 0;a.h[5] = a.h[5] + ab | 0;a.h[6] = a.h[6] + Kb | 0;a.h[7] = a.h[7] + f | 0;
    };
    yb.prototype.update = function (a, b) {
      void 0 === b && (b = a.length);var c = 0,
          d = this.cb;if (m(a)) for (; c < b;) {
        this.Yb[d++] = a.charCodeAt(c++), d == this.Ba && (Cb(this), d = 0);
      } else if (fa(a)) for (; c < b;) {
        var e = a[c++];if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");this.Yb[d++] = e;d == this.Ba && (Cb(this), d = 0);
      } else throw Error("message must be string or array");this.cb = d;this.Bc += b;
    };
    yb.prototype.digest = function () {
      var a = [],
          b = 8 * this.Bc;56 > this.cb ? this.update(Bb, 56 - this.cb) : this.update(Bb, this.Ba - (this.cb - 56));for (var c = 63; 56 <= c; c--) {
        this.Yb[c] = b & 255, b /= 256;
      }Cb(this);for (c = b = 0; c < this.$e; c++) {
        for (var d = 24; 0 <= d; d -= 8) {
          a[b++] = this.h[c] >> d & 255;
        }
      }return a;
    };
    var xb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];var Eb = function Eb() {
      yb.call(this, 8, Db);
    };r(Eb, yb);var Db = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];var Fb = function Fb() {
      this.Da = this.Da;this.pc = this.pc;
    };Fb.prototype.Da = !1;Fb.prototype.isDisposed = function () {
      return this.Da;
    };Fb.prototype.Za = function () {
      if (this.pc) for (; this.pc.length;) {
        this.pc.shift()();
      }
    };var Gb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Hb = 0;var Ib = function Ib(a, b) {
      this.type = a;this.currentTarget = this.target = b;this.defaultPrevented = this.jb = !1;this.Yd = !0;
    };Ib.prototype.preventDefault = function () {
      this.defaultPrevented = !0;this.Yd = !1;
    };var Jb = function Jb(a, b, c, d, e) {
      this.listener = a;this.tc = null;this.src = b;this.type = c;this.capture = !!d;this.fc = e;this.key = ++Hb;this.nb = this.Xb = !1;
    },
        Lb = function Lb(a) {
      a.nb = !0;a.listener = null;a.tc = null;a.src = null;a.fc = null;
    };var Mb = function Mb(a) {
      this.src = a;this.F = {};this.Tb = 0;
    };Mb.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();a = this.F[f];a || (a = this.F[f] = [], this.Tb++);var g = Nb(a, b, d, e);-1 < g ? (b = a[g], c || (b.Xb = !1)) : (b = new Jb(b, this.src, f, !!d, e), b.Xb = c, a.push(b));return b;
    };Mb.prototype.remove = function (a, b, c, d) {
      a = a.toString();if (!(a in this.F)) return !1;var e = this.F[a];b = Nb(e, b, c, d);return -1 < b ? (Lb(e[b]), Xa(e, b), 0 == e.length && (delete this.F[a], this.Tb--), !0) : !1;
    };
    var Ob = function Ob(a, b) {
      var c = b.type;c in a.F && Ya(a.F[c], b) && (Lb(b), 0 == a.F[c].length && (delete a.F[c], a.Tb--));
    };Mb.prototype.Pc = function (a, b, c, d) {
      a = this.F[a.toString()];var e = -1;a && (e = Nb(a, b, c, d));return -1 < e ? a[e] : null;
    };var Nb = function Nb(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];if (!f.nb && f.listener == b && f.capture == !!c && f.fc == d) return e;
      }return -1;
    };var Pb = !y || 9 <= Number(ob),
        Qb = y && !z("9");!hb || z("528");gb && z("1.9b") || y && z("8") || db && z("9.5") || hb && z("528");gb && !z("8") || y && z("9");var Rb = function Rb(a, b) {
      Ib.call(this, a ? a.type : "");this.relatedTarget = this.currentTarget = this.target = null;this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;this.key = "";this.charCode = this.keyCode = 0;this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;this.$a = this.state = null;a && this.init(a, b);
    };r(Rb, Ib);
    Rb.prototype.init = function (a, b) {
      var c = this.type = a.type,
          d = a.changedTouches ? a.changedTouches[0] : null;this.target = a.target || a.srcElement;this.currentTarget = b;if (b = a.relatedTarget) {
        if (gb) {
          var e;a: {
            try {
              ua(b.nodeName);e = !0;break a;
            } catch (f) {}e = !1;
          }e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);this.relatedTarget = b;null === d ? (this.offsetX = hb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = hb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);this.button = a.button;this.keyCode = a.keyCode || 0;this.key = a.key || "";this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.altKey = a.altKey;this.shiftKey = a.shiftKey;this.metaKey = a.metaKey;this.state = a.state;this.$a = a;a.defaultPrevented && this.preventDefault();
    };Rb.prototype.preventDefault = function () {
      Rb.qd.preventDefault.call(this);var a = this.$a;if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Qb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };Rb.prototype.Fe = function () {
      return this.$a;
    };var Sb = "closure_lm_" + (1E6 * Math.random() | 0),
        Tb = {},
        Ub = 0,
        Vb = function Vb(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        Vb(a, b[f], c, d, e);
      } else c = Wb(c), a && a[Gb] ? a.listen(b, c, d, e) : Xb(a, b, c, !1, d, e);
    },
        Xb = function Xb(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");var g = !!e,
          k = Yb(a);k || (a[Sb] = k = new Mb(a));c = k.add(b, c, d, e, f);if (!c.tc) {
        d = Zb();c.tc = d;d.src = a;d.listener = c;if (a.addEventListener) a.addEventListener(b.toString(), d, g);else if (a.attachEvent) a.attachEvent($b(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");
        Ub++;
      }
    },
        Zb = function Zb() {
      var a = ac,
          b = Pb ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);if (!c) return c;
      };return b;
    },
        bc = function bc(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        bc(a, b[f], c, d, e);
      } else c = Wb(c), a && a[Gb] ? cc(a, b, c, d, e) : Xb(a, b, c, !0, d, e);
    },
        dc = function dc(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        dc(a, b[f], c, d, e);
      } else c = Wb(c), a && a[Gb] ? a.da.remove(String(b), c, d, e) : a && (a = Yb(a)) && (b = a.Pc(b, c, !!d, e)) && ec(b);
    },
        ec = function ec(a) {
      if (!ga(a) && a && !a.nb) {
        var b = a.src;if (b && b[Gb]) Ob(b.da, a);else {
          var c = a.type,
              d = a.tc;b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent($b(c), d);Ub--;(c = Yb(b)) ? (Ob(c, a), 0 == c.Tb && (c.src = null, b[Sb] = null)) : Lb(a);
        }
      }
    },
        $b = function $b(a) {
      return a in Tb ? Tb[a] : Tb[a] = "on" + a;
    },
        gc = function gc(a, b, c, d) {
      var e = !0;if (a = Yb(a)) if (b = a.F[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];f && f.capture == c && !f.nb && (f = fc(f, d), e = e && !1 !== f);
      }return e;
    },
        fc = function fc(a, b) {
      var c = a.listener,
          d = a.fc || a.src;a.Xb && ec(a);return c.call(d, b);
    },
        ac = function ac(a, b) {
      if (a.nb) return !0;if (!Pb) {
        if (!b) a: {
          b = ["window", "event"];for (var c = l, d; d = b.shift();) {
            if (null != c[d]) c = c[d];else {
              b = null;break a;
            }
          }b = c;
        }d = b;b = new Rb(d, this);c = !0;if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;if (0 == d.keyCode) try {
              d.keyCode = -1;break a;
            } catch (g) {
              e = !0;
            }if (e || void 0 == d.returnValue) d.returnValue = !0;
          }d = [];for (e = b.currentTarget; e; e = e.parentNode) {
            d.push(e);
          }a = a.type;for (e = d.length - 1; !b.jb && 0 <= e; e--) {
            b.currentTarget = d[e];var f = gc(d[e], a, !0, b),
                c = c && f;
          }for (e = 0; !b.jb && e < d.length; e++) {
            b.currentTarget = d[e], f = gc(d[e], a, !1, b), c = c && f;
          }
        }return c;
      }return fc(a, new Rb(b, this));
    },
        Yb = function Yb(a) {
      a = a[Sb];return a instanceof Mb ? a : null;
    },
        hc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Wb = function Wb(a) {
      v(a, "Listener can not be null.");if (p(a)) return a;v(a.handleEvent, "An object listener must have handleEvent method.");a[hc] || (a[hc] = function (b) {
        return a.handleEvent(b);
      });return a[hc];
    };var ic = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var kc = function kc() {
      this.yc = "";this.oe = jc;
    };kc.prototype.jc = !0;kc.prototype.dc = function () {
      return this.yc;
    };kc.prototype.toString = function () {
      return "Const{" + this.yc + "}";
    };var lc = function lc(a) {
      if (a instanceof kc && a.constructor === kc && a.oe === jc) return a.yc;Ja("expected object of type Const, got '" + a + "'");return "type_error:Const";
    },
        jc = {},
        mc = function mc(a) {
      var b = new kc();b.yc = a;return b;
    };mc("");var oc = function oc() {
      this.sc = "";this.pe = nc;
    };oc.prototype.jc = !0;oc.prototype.dc = function () {
      return this.sc;
    };oc.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.sc + "}";
    };var nc = {};var qc = function qc() {
      this.na = "";this.ne = pc;
    };qc.prototype.jc = !0;qc.prototype.dc = function () {
      return this.na;
    };qc.prototype.toString = function () {
      return "SafeUrl{" + this.na + "}";
    };
    var rc = function rc(a) {
      if (a instanceof qc && a.constructor === qc && a.ne === pc) return a.na;Ja("expected object of type SafeUrl, got '" + a + "' of type " + ca(a));return "type_error:SafeUrl";
    },
        sc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        uc = function uc(a) {
      if (a instanceof qc) return a;a = a.jc ? a.dc() : String(a);sc.test(a) || (a = "about:invalid#zClosurez");return tc(a);
    },
        pc = {},
        tc = function tc(a) {
      var b = new qc();b.na = a;return b;
    };tc("about:blank");var xc = function xc(a) {
      var b = [];vc(new wc(), a, b);return b.join("");
    },
        wc = function wc() {
      this.uc = void 0;
    },
        vc = function vc(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (ea(b)) {
            var d = b;b = d.length;c.push("[");for (var e = "", f = 0; f < b; f++) {
              c.push(e), e = d[f], vc(a, a.uc ? a.uc.call(d, String(f), e) : e, c), e = ",";
            }c.push("]");return;
          }if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");f = "";for (d in b) {
              Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), yc(d, c), c.push(":"), vc(a, a.uc ? a.uc.call(b, d, e) : e, c), f = ","));
            }c.push("}");return;
          }
        }switch (typeof b) {case "string":
            yc(b, c);break;case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");break;case "boolean":
            c.push(String(b));break;case "function":
            c.push("null");break;default:
            throw Error("Unknown type: " + typeof b);}
      }
    },
        zc = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        Ac = /\uffff/.test("\uFFFF") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        yc = function yc(a, b) {
      b.push('"', a.replace(Ac, function (a) {
        var b = zc[a];b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), zc[a] = b);return b;
      }), '"');
    };var Bc = function Bc() {};Bc.prototype.ud = null;var Cc = function Cc(a) {
      return a.ud || (a.ud = a.Vc());
    };var Dc,
        Ec = function Ec() {};r(Ec, Bc);Ec.prototype.Zb = function () {
      var a = Fc(this);return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };Ec.prototype.Vc = function () {
      var a = {};Fc(this) && (a[0] = !0, a[1] = !0);return a;
    };
    var Fc = function Fc(a) {
      if (!a.Md && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];try {
            return new ActiveXObject(d), a.Md = d;
          } catch (e) {}
        }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }return a.Md;
    };Dc = new Ec();var Gc = function Gc() {};r(Gc, Bc);Gc.prototype.Zb = function () {
      var a = new XMLHttpRequest();if ("withCredentials" in a) return a;if ("undefined" != typeof XDomainRequest) return new Hc();throw Error("Unsupported browser");
    };Gc.prototype.Vc = function () {
      return {};
    };
    var Hc = function Hc() {
      this.sa = new XDomainRequest();this.readyState = 0;this.onreadystatechange = null;this.responseText = "";this.status = -1;this.statusText = this.responseXML = null;this.sa.onload = _q(this.He, this);this.sa.onerror = _q(this.Jd, this);this.sa.onprogress = _q(this.Ie, this);this.sa.ontimeout = _q(this.Je, this);
    };h = Hc.prototype;h.open = function (a, b, c) {
      if (null != c && !c) throw Error("Only async requests are supported.");this.sa.open(a, b);
    };
    h.send = function (a) {
      if (a) {
        if ("string" == typeof a) this.sa.send(a);else throw Error("Only string data is supported");
      } else this.sa.send();
    };h.abort = function () {
      this.sa.abort();
    };h.setRequestHeader = function () {};h.He = function () {
      this.status = 200;this.responseText = this.sa.responseText;Ic(this, 4);
    };h.Jd = function () {
      this.status = 500;this.responseText = "";Ic(this, 4);
    };h.Je = function () {
      this.Jd();
    };h.Ie = function () {
      this.status = 200;Ic(this, 1);
    };var Ic = function Ic(a, b) {
      a.readyState = b;if (a.onreadystatechange) a.onreadystatechange();
    };var Jc = function Jc(a, b, c) {
      this.Ue = c;this.we = a;this.kf = b;this.oc = 0;this.gc = null;
    };Jc.prototype.get = function () {
      var a;0 < this.oc ? (this.oc--, a = this.gc, this.gc = a.next, a.next = null) : a = this.we();return a;
    };Jc.prototype.put = function (a) {
      this.kf(a);this.oc < this.Ue && (this.oc++, a.next = this.gc, this.gc = a);
    };var Kc = function Kc(a) {
      a.prototype.then = a.prototype.then;a.prototype.$goog_Thenable = !0;
    },
        Lc = function Lc(a) {
      if (!a) return !1;try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };var Mc = function Mc() {
      this.Ec = this.Ua = null;
    },
        Oc = new Jc(function () {
      return new Nc();
    }, function (a) {
      a.reset();
    }, 100);Mc.prototype.add = function (a, b) {
      var c = Oc.get();c.set(a, b);this.Ec ? this.Ec.next = c : (v(!this.Ua), this.Ua = c);this.Ec = c;
    };Mc.prototype.remove = function () {
      var a = null;this.Ua && (a = this.Ua, this.Ua = this.Ua.next, this.Ua || (this.Ec = null), a.next = null);return a;
    };var Nc = function Nc() {
      this.next = this.scope = this.Oc = null;
    };Nc.prototype.set = function (a, b) {
      this.Oc = a;this.scope = b;this.next = null;
    };
    Nc.prototype.reset = function () {
      this.next = this.scope = this.Oc = null;
    };var Pc = function Pc(a) {
      l.setTimeout(function () {
        throw a;
      }, 0);
    },
        Qc,
        Rc = function Rc() {
      var a = l.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !w("Presto") && (a = function a() {
        var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow,
            a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
            a = _q(function (a) {
          if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
        }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
            b.postMessage(c, d);
          } };
      });if ("undefined" !== typeof a && !w("Trident") && !w("MSIE")) {
        var b = new a(),
            c = {},
            d = c;b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;var a = c.xd;c.xd = null;a();
          }
        };return function (a) {
          d.next = { xd: a };d = d.next;b.port2.postMessage(0);
        };
      }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
        var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
          b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
        };document.documentElement.appendChild(b);
      } : function (a) {
        l.setTimeout(a, 0);
      };
    };var Wc = function Wc(a, b) {
      Sc || Tc();Uc || (Sc(), Uc = !0);Vc.add(a, b);
    },
        Sc,
        Tc = function Tc() {
      if (-1 != String(l.Promise).indexOf("[native code]")) {
        var a = l.Promise.resolve(void 0);Sc = function Sc() {
          a.then(Xc);
        };
      } else Sc = function Sc() {
        var a = Xc;!p(l.setImmediate) || l.Window && l.Window.prototype && !w("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Qc || (Qc = Rc()), Qc(a)) : l.setImmediate(a);
      };
    },
        Uc = !1,
        Vc = new Mc(),
        Xc = function Xc() {
      for (var a; a = Vc.remove();) {
        try {
          a.Oc.call(a.scope);
        } catch (b) {
          Pc(b);
        }Oc.put(a);
      }Uc = !1;
    };!gb && !y || y && 9 <= Number(ob) || gb && z("1.9.1");y && z("9");var Zc = function Zc() {
      this.na = "";this.me = Yc;
    };Zc.prototype.jc = !0;Zc.prototype.dc = function () {
      return this.na;
    };Zc.prototype.toString = function () {
      return "SafeHtml{" + this.na + "}";
    };var $c = function $c(a) {
      if (a instanceof Zc && a.constructor === Zc && a.me === Yc) return a.na;Ja("expected object of type SafeHtml, got '" + a + "' of type " + ca(a));return "type_error:SafeHtml";
    },
        Yc = {};Zc.prototype.Qe = function (a) {
      this.na = a;return this;
    };var A = function A(a, b) {
      this.M = 0;this.pa = void 0;this.Xa = this.la = this.s = null;this.ec = this.Nc = !1;if (a != ba) try {
        var c = this;a.call(b, function (a) {
          ad(c, 2, a);
        }, function (a) {
          if (!(a instanceof bd)) try {
            if (a instanceof Error) throw a;throw Error("Promise rejected.");
          } catch (e) {}ad(c, 3, a);
        });
      } catch (d) {
        ad(this, 3, d);
      }
    },
        cd = function cd() {
      this.next = this.context = this.fb = this.La = this.child = null;this.ub = !1;
    };cd.prototype.reset = function () {
      this.context = this.fb = this.La = this.child = null;this.ub = !1;
    };
    var dd = new Jc(function () {
      return new cd();
    }, function (a) {
      a.reset();
    }, 100),
        ed = function ed(a, b, c) {
      var d = dd.get();d.La = a;d.fb = b;d.context = c;return d;
    },
        C = function C(a) {
      if (a instanceof A) return a;var b = new A(ba);ad(b, 2, a);return b;
    },
        D = function D(a) {
      return new A(function (b, c) {
        c(a);
      });
    },
        gd = function gd(a, b, c) {
      fd(a, b, c, null) || Wc(ka(b, a));
    },
        hd = function hd(a) {
      return new A(function (b) {
        var c = a.length,
            d = [];if (c) for (var e = function e(a, _e, f) {
          c--;d[a] = _e ? { De: !0, value: f } : { De: !1, reason: f };0 == c && b(d);
        }, f = 0, g; f < a.length; f++) {
          g = a[f], gd(g, ka(e, f, !0), ka(e, f, !1));
        } else b(d);
      });
    };A.prototype.then = function (a, b, c) {
      null != a && Ma(a, "opt_onFulfilled should be a function.");null != b && Ma(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return id(this, p(a) ? a : null, p(b) ? b : null, c);
    };Kc(A);var kd = function kd(a, b) {
      b = ed(b, b, void 0);b.ub = !0;jd(a, b);return a;
    };A.prototype.f = function (a, b) {
      return id(this, null, a, b);
    };A.prototype.cancel = function (a) {
      0 == this.M && Wc(function () {
        var b = new bd(a);ld(this, b);
      }, this);
    };
    var ld = function ld(a, b) {
      if (0 == a.M) if (a.s) {
        var c = a.s;if (c.la) {
          for (var d = 0, e = null, f = null, g = c.la; g && (g.ub || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }e && (0 == c.M && 1 == d ? ld(c, b) : (f ? (d = f, v(c.la), v(null != d), d.next == c.Xa && (c.Xa = d), d.next = d.next.next) : md(c), nd(c, e, 3, b)));
        }a.s = null;
      } else ad(a, 3, b);
    },
        jd = function jd(a, b) {
      a.la || 2 != a.M && 3 != a.M || od(a);v(null != b.La);a.Xa ? a.Xa.next = b : a.la = b;a.Xa = b;
    },
        id = function id(a, b, c, d) {
      var e = ed(null, null, null);e.child = new A(function (a, g) {
        e.La = b ? function (c) {
          try {
            var e = b.call(d, c);a(e);
          } catch (B) {
            g(B);
          }
        } : a;e.fb = c ? function (b) {
          try {
            var e = c.call(d, b);void 0 === e && b instanceof bd ? g(b) : a(e);
          } catch (B) {
            g(B);
          }
        } : g;
      });e.child.s = a;jd(a, e);return e.child;
    };A.prototype.yf = function (a) {
      v(1 == this.M);this.M = 0;ad(this, 2, a);
    };A.prototype.zf = function (a) {
      v(1 == this.M);this.M = 0;ad(this, 3, a);
    };
    var ad = function ad(a, b, c) {
      0 == a.M && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.M = 1, fd(c, a.yf, a.zf, a) || (a.pa = c, a.M = b, a.s = null, od(a), 3 != b || c instanceof bd || pd(a, c)));
    },
        fd = function fd(a, b, c, d) {
      if (a instanceof A) return null != b && Ma(b, "opt_onFulfilled should be a function."), null != c && Ma(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), jd(a, ed(b || ba, c || null, d)), !0;if (Lc(a)) return a.then(b, c, d), !0;if (ha(a)) try {
        var e = a.then;if (p(e)) return qd(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }return !1;
    },
        qd = function qd(a, b, c, d, e) {
      var f = !1,
          g = function g(a) {
        f || (f = !0, c.call(e, a));
      },
          k = function k(a) {
        f || (f = !0, d.call(e, a));
      };try {
        b.call(a, g, k);
      } catch (n) {
        k(n);
      }
    },
        od = function od(a) {
      a.Nc || (a.Nc = !0, Wc(a.ze, a));
    },
        md = function md(a) {
      var b = null;a.la && (b = a.la, a.la = b.next, b.next = null);a.la || (a.Xa = null);null != b && v(null != b.La);return b;
    };A.prototype.ze = function () {
      for (var a; a = md(this);) {
        nd(this, a, this.M, this.pa);
      }this.Nc = !1;
    };
    var nd = function nd(a, b, c, d) {
      if (3 == c && b.fb && !b.ub) for (; a && a.ec; a = a.s) {
        a.ec = !1;
      }if (b.child) b.child.s = null, rd(b, c, d);else try {
        b.ub ? b.La.call(b.context) : rd(b, c, d);
      } catch (e) {
        sd.call(null, e);
      }dd.put(b);
    },
        rd = function rd(a, b, c) {
      2 == b ? a.La.call(a.context, c) : a.fb && a.fb.call(a.context, c);
    },
        pd = function pd(a, b) {
      a.ec = !0;Wc(function () {
        a.ec && sd.call(null, b);
      });
    },
        sd = Pc,
        bd = function bd(a) {
      t.call(this, a);
    };r(bd, t);bd.prototype.name = "cancel";var ud = function ud(a, b) {
      ma(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : td.hasOwnProperty(d) ? a.setAttribute(td[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
      });
    },
        td = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };
    var vd = function vd(a, b) {
      this.vc = [];this.Td = a;this.Ad = b || null;this.xb = this.ab = !1;this.pa = void 0;this.nd = this.td = this.Ic = !1;this.Cc = 0;this.s = null;this.Jc = 0;
    };vd.prototype.cancel = function (a) {
      if (this.ab) this.pa instanceof vd && this.pa.cancel();else {
        if (this.s) {
          var b = this.s;delete this.s;a ? b.cancel(a) : (b.Jc--, 0 >= b.Jc && b.cancel());
        }this.Td ? this.Td.call(this.Ad, this) : this.nd = !0;this.ab || wd(this, new xd());
      }
    };vd.prototype.yd = function (a, b) {
      this.Ic = !1;yd(this, a, b);
    };
    var yd = function yd(a, b, c) {
      a.ab = !0;a.pa = c;a.xb = !b;zd(a);
    },
        Bd = function Bd(a) {
      if (a.ab) {
        if (!a.nd) throw new Ad();a.nd = !1;
      }
    };vd.prototype.callback = function (a) {
      Bd(this);Cd(a);yd(this, !0, a);
    };
    var wd = function wd(a, b) {
      Bd(a);Cd(b);yd(a, !1, b);
    },
        Cd = function Cd(a) {
      v(!(a instanceof vd), "An execution sequence may not be initiated with a blocking Deferred.");
    },
        Gd = function Gd(a) {
      var b = Dd("https://apis.google.com/js/client.js?onload=" + Ed);Fd(b, null, a, void 0);
    },
        Fd = function Fd(a, b, c, d) {
      v(!a.td, "Blocking Deferreds can not be re-used");a.vc.push([b, c, d]);a.ab && zd(a);
    };vd.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new A(function (a, b) {
        d = a;e = b;
      });Fd(this, d, function (a) {
        a instanceof xd ? f.cancel() : e(a);
      });return f.then(a, b, c);
    };
    Kc(vd);
    var Hd = function Hd(a) {
      return Ta(a.vc, function (a) {
        return p(a[1]);
      });
    },
        zd = function zd(a) {
      if (a.Cc && a.ab && Hd(a)) {
        var b = a.Cc,
            c = Id[b];c && (l.clearTimeout(c.yb), delete Id[b]);a.Cc = 0;
      }a.s && (a.s.Jc--, delete a.s);for (var b = a.pa, d = c = !1; a.vc.length && !a.Ic;) {
        var e = a.vc.shift(),
            f = e[0],
            g = e[1],
            e = e[2];if (f = a.xb ? g : f) try {
          var k = f.call(e || a.Ad, b);void 0 !== k && (a.xb = a.xb && (k == b || k instanceof Error), a.pa = b = k);if (Lc(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.Ic = !0;
        } catch (n) {
          b = n, a.xb = !0, Hd(a) || (c = !0);
        }
      }a.pa = b;d && (k = _q(a.yd, a, !0), d = _q(a.yd, a, !1), b instanceof vd ? (Fd(b, k, d), b.td = !0) : b.then(k, d));c && (b = new Jd(b), Id[b.yb] = b, a.Cc = b.yb);
    },
        Ad = function Ad() {
      t.call(this);
    };r(Ad, t);Ad.prototype.message = "Deferred has already fired";Ad.prototype.name = "AlreadyCalledError";var xd = function xd() {
      t.call(this);
    };r(xd, t);xd.prototype.message = "Deferred was canceled";xd.prototype.name = "CanceledError";var Jd = function Jd(a) {
      this.yb = l.setTimeout(_q(this.xf, this), 0);this.O = a;
    };
    Jd.prototype.xf = function () {
      v(Id[this.yb], "Cannot throw an error that is not scheduled.");delete Id[this.yb];throw this.O;
    };var Id = {};var Dd = function Dd(a) {
      var b = new oc();b.sc = a;return Kd(b);
    },
        Kd = function Kd(a) {
      var b = {},
          c = b.document || document,
          d;a instanceof oc && a.constructor === oc && a.pe === nc ? d = a.sc : (Ja("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ca(a)), d = "type_error:TrustedResourceUrl");var e = document.createElement("SCRIPT");a = { Zd: e, Sb: void 0 };var f = new vd(Ld, a),
          g = null,
          k = null != b.timeout ? b.timeout : 5E3;0 < k && (g = window.setTimeout(function () {
        Md(e, !0);wd(f, new Nd(1, "Timeout reached for loading script " + d));
      }, k), a.Sb = g);e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Md(e, b.Jf || !1, g), f.callback(null));
      };e.onerror = function () {
        Md(e, !0, g);wd(f, new Nd(0, "Error while loading script " + d));
      };a = b.attributes || {};ta(a, { type: "text/javascript", charset: "UTF-8", src: d });ud(e, a);Od(c).appendChild(e);return f;
    },
        Od = function Od(a) {
      var b;return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
    },
        Ld = function Ld() {
      if (this && this.Zd) {
        var a = this.Zd;a && "SCRIPT" == a.tagName && Md(a, !0, this.Sb);
      }
    },
        Md = function Md(a, b, c) {
      null != c && l.clearTimeout(c);a.onload = ba;a.onerror = ba;a.onreadystatechange = ba;b && window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
    },
        Nd = function Nd(a, b) {
      var c = "Jsloader error (code #" + a + ")";b && (c += ": " + b);t.call(this, c);this.code = a;
    };r(Nd, t);var Pd = function Pd(a, b, c, d, e) {
      this.reset(a, b, c, d, e);
    };Pd.prototype.Dd = null;var Qd = 0;Pd.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || Qd++;d || la();this.Cb = a;this.Xe = b;delete this.Dd;
    };Pd.prototype.be = function (a) {
      this.Cb = a;
    };var Rd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Sd = function Sd(a, b) {
      if (a) {
        a = a.split("&");for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e,
              f = null;0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
        }
      }
    };var Td = function Td(a) {
      if (a.X && "function" == typeof a.X) return a.X();if (m(a)) return a.split("");if (fa(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }return b;
      }return na(a);
    },
        Ud = function Ud(a) {
      if (a.ma && "function" == typeof a.ma) return a.ma();if (!a.X || "function" != typeof a.X) {
        if (fa(a) || m(a)) {
          var b = [];a = a.length;for (var c = 0; c < a; c++) {
            b.push(c);
          }return b;
        }return oa(a);
      }
    },
        Vd = function Vd(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (fa(a) || m(a)) x(a, b, void 0);else for (var c = Ud(a), d = Td(a), e = d.length, f = 0; f < e; f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    };var Wd = "StopIteration" in l ? l.StopIteration : { message: "StopIteration", stack: "" },
        Xd = function Xd() {};Xd.prototype.next = function () {
      throw Wd;
    };Xd.prototype.qe = function () {
      return this;
    };var Yd = function Yd(a, b) {
      this.ea = {};this.w = [];this.tb = this.o = 0;var c = arguments.length;if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else a && this.addAll(a);
    };Yd.prototype.X = function () {
      Zd(this);for (var a = [], b = 0; b < this.w.length; b++) {
        a.push(this.ea[this.w[b]]);
      }return a;
    };Yd.prototype.ma = function () {
      Zd(this);return this.w.concat();
    };Yd.prototype.vb = function (a) {
      return $d(this.ea, a);
    };
    Yd.prototype.remove = function (a) {
      return $d(this.ea, a) ? (delete this.ea[a], this.o--, this.tb++, this.w.length > 2 * this.o && Zd(this), !0) : !1;
    };var Zd = function Zd(a) {
      if (a.o != a.w.length) {
        for (var b = 0, c = 0; b < a.w.length;) {
          var d = a.w[b];$d(a.ea, d) && (a.w[c++] = d);b++;
        }a.w.length = c;
      }if (a.o != a.w.length) {
        for (var e = {}, c = b = 0; b < a.w.length;) {
          d = a.w[b], $d(e, d) || (a.w[c++] = d, e[d] = 1), b++;
        }a.w.length = c;
      }
    };h = Yd.prototype;h.get = function (a, b) {
      return $d(this.ea, a) ? this.ea[a] : b;
    };
    h.set = function (a, b) {
      $d(this.ea, a) || (this.o++, this.w.push(a), this.tb++);this.ea[a] = b;
    };h.addAll = function (a) {
      var b;a instanceof Yd ? (b = a.ma(), a = a.X()) : (b = oa(a), a = na(a));for (var c = 0; c < b.length; c++) {
        this.set(b[c], a[c]);
      }
    };h.forEach = function (a, b) {
      for (var c = this.ma(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);a.call(b, f, e, this);
      }
    };h.clone = function () {
      return new Yd(this);
    };
    h.qe = function (a) {
      Zd(this);var b = 0,
          c = this.tb,
          d = this,
          e = new Xd();e.next = function () {
        if (c != d.tb) throw Error("The map has changed since the iterator was created");if (b >= d.w.length) throw Wd;var e = d.w[b++];return a ? e : d.ea[e];
      };return e;
    };var $d = function $d(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };var ae = function ae(a) {
      this.Ye = a;this.Kd = this.Kc = this.Cb = this.s = null;
    },
        be = function be(a, b) {
      this.name = a;this.value = b;
    };be.prototype.toString = function () {
      return this.name;
    };var ce = new be("SEVERE", 1E3),
        de = new be("CONFIG", 700),
        ee = new be("FINE", 500);ae.prototype.getParent = function () {
      return this.s;
    };ae.prototype.be = function (a) {
      this.Cb = a;
    };var fe = function fe(a) {
      if (a.Cb) return a.Cb;if (a.s) return fe(a.s);Ja("Root logger has no level set.");return null;
    };
    ae.prototype.log = function (a, b, c) {
      if (a.value >= fe(this).value) for (p(b) && (b = b()), a = new Pd(a, String(b), this.Ye), c && (a.Dd = c), c = "log:" + a.Xe, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
        var d = c,
            e = a;if (d.Kd) for (var f = 0; b = d.Kd[f]; f++) {
          b(e);
        }c = c.getParent();
      }
    };
    var ge = {},
        he = null,
        ie = function ie(a) {
      he || (he = new ae(""), ge[""] = he, he.be(de));var b;if (!(b = ge[a])) {
        b = new ae(a);var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = ie(a.substr(0, c));c.Kc || (c.Kc = {});c.Kc[d] = b;b.s = c;ge[a] = b;
      }return b;
    };var je = function je() {
      Fb.call(this);this.da = new Mb(this);this.re = this;this.ad = null;
    };r(je, Fb);je.prototype[Gb] = !0;h = je.prototype;h.addEventListener = function (a, b, c, d) {
      Vb(this, a, b, c, d);
    };h.removeEventListener = function (a, b, c, d) {
      dc(this, a, b, c, d);
    };
    h.dispatchEvent = function (a) {
      ke(this);var b,
          c = this.ad;if (c) {
        b = [];for (var d = 1; c; c = c.ad) {
          b.push(c), v(1E3 > ++d, "infinite loop");
        }
      }c = this.re;d = a.type || a;if (m(a)) a = new Ib(a, c);else if (a instanceof Ib) a.target = a.target || c;else {
        var e = a;a = new Ib(d, c);ta(a, e);
      }var e = !0,
          f;if (b) for (var g = b.length - 1; !a.jb && 0 <= g; g--) {
        f = a.currentTarget = b[g], e = le(f, d, !0, a) && e;
      }a.jb || (f = a.currentTarget = c, e = le(f, d, !0, a) && e, a.jb || (e = le(f, d, !1, a) && e));if (b) for (g = 0; !a.jb && g < b.length; g++) {
        f = a.currentTarget = b[g], e = le(f, d, !1, a) && e;
      }return e;
    };
    h.Za = function () {
      je.qd.Za.call(this);if (this.da) {
        var a = this.da,
            b = 0,
            c;for (c in a.F) {
          for (var d = a.F[c], e = 0; e < d.length; e++) {
            ++b, Lb(d[e]);
          }delete a.F[c];a.Tb--;
        }
      }this.ad = null;
    };h.listen = function (a, b, c, d) {
      ke(this);return this.da.add(String(a), b, !1, c, d);
    };
    var cc = function cc(a, b, c, d, e) {
      a.da.add(String(b), c, !0, d, e);
    },
        le = function le(a, b, c, d) {
      b = a.da.F[String(b)];if (!b) return !0;b = b.concat();for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];if (g && !g.nb && g.capture == c) {
          var k = g.listener,
              n = g.fc || g.src;g.Xb && Ob(a.da, g);e = !1 !== k.call(n, d) && e;
        }
      }return e && 0 != d.Yd;
    };je.prototype.Pc = function (a, b, c, d) {
      return this.da.Pc(String(a), b, c, d);
    };var ke = function ke(a) {
      v(a.da, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    };var E = function E(a, b) {
      a && a.log(ee, b, void 0);
    };var me = function me(a, b, c) {
      if (p(a)) c && (a = _q(a, c));else if (a && "function" == typeof a.handleEvent) a = _q(a.handleEvent, a);else throw Error("Invalid listener argument");return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
    },
        ne = function ne(a) {
      var b = null;return new A(function (c, d) {
        b = me(function () {
          c(void 0);
        }, a);-1 == b && d(Error("Failed to schedule timer."));
      }).f(function (a) {
        l.clearTimeout(b);throw a;
      });
    };var F = function F(a) {
      je.call(this);this.headers = new Yd();this.Gc = a || null;this.ta = !1;this.Fc = this.b = null;this.Bb = this.Qd = this.mc = "";this.Ha = this.Tc = this.kc = this.Mc = !1;this.qb = 0;this.Ac = null;this.Xd = "";this.Dc = this.ff = this.le = !1;
    };r(F, je);var oe = F.prototype,
        pe = ie("goog.net.XhrIo");oe.T = pe;var qe = /^https?$/i,
        re = ["POST", "PUT"];
    F.prototype.send = function (a, b, c, d) {
      if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.mc + "; newUri=" + a);b = b ? b.toUpperCase() : "GET";this.mc = a;this.Bb = "";this.Qd = b;this.Mc = !1;this.ta = !0;this.b = this.Gc ? this.Gc.Zb() : Dc.Zb();this.Fc = this.Gc ? Cc(this.Gc) : Cc(Dc);this.b.onreadystatechange = _q(this.Vd, this);this.ff && "onprogress" in this.b && (this.b.onprogress = _q(function (a) {
        this.Ud(a, !0);
      }, this), this.b.upload && (this.b.upload.onprogress = _q(this.Ud, this)));try {
        E(this.T, se(this, "Opening Xhr")), this.Tc = !0, this.b.open(b, String(a), !0), this.Tc = !1;
      } catch (f) {
        E(this.T, se(this, "Error opening Xhr: " + f.message));this.O(5, f);return;
      }a = c || "";var e = this.headers.clone();d && Vd(d, function (a, b) {
        e.set(b, a);
      });d = Va(e.ma());c = l.FormData && a instanceof l.FormData;!Wa(re, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");e.forEach(function (a, b) {
        this.b.setRequestHeader(b, a);
      }, this);this.Xd && (this.b.responseType = this.Xd);"withCredentials" in this.b && this.b.withCredentials !== this.le && (this.b.withCredentials = this.le);try {
        te(this), 0 < this.qb && (this.Dc = ue(this.b), E(this.T, se(this, "Will abort after " + this.qb + "ms if incomplete, xhr2 " + this.Dc)), this.Dc ? (this.b.timeout = this.qb, this.b.ontimeout = _q(this.Sb, this)) : this.Ac = me(this.Sb, this.qb, this)), E(this.T, se(this, "Sending request")), this.kc = !0, this.b.send(a), this.kc = !1;
      } catch (f) {
        E(this.T, se(this, "Send error: " + f.message)), this.O(5, f);
      }
    };var ue = function ue(a) {
      return y && z(9) && ga(a.timeout) && void 0 !== a.ontimeout;
    },
        Ua = function Ua(a) {
      return "content-type" == a.toLowerCase();
    };
    F.prototype.Sb = function () {
      "undefined" != typeof aa && this.b && (this.Bb = "Timed out after " + this.qb + "ms, aborting", E(this.T, se(this, this.Bb)), this.dispatchEvent("timeout"), this.abort(8));
    };F.prototype.O = function (a, b) {
      this.ta = !1;this.b && (this.Ha = !0, this.b.abort(), this.Ha = !1);this.Bb = b;ve(this);we(this);
    };var ve = function ve(a) {
      a.Mc || (a.Mc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
    F.prototype.abort = function () {
      this.b && this.ta && (E(this.T, se(this, "Aborting")), this.ta = !1, this.Ha = !0, this.b.abort(), this.Ha = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), we(this));
    };F.prototype.Za = function () {
      this.b && (this.ta && (this.ta = !1, this.Ha = !0, this.b.abort(), this.Ha = !1), we(this, !0));F.qd.Za.call(this);
    };F.prototype.Vd = function () {
      this.isDisposed() || (this.Tc || this.kc || this.Ha ? xe(this) : this.bf());
    };F.prototype.bf = function () {
      xe(this);
    };
    var xe = function xe(a) {
      if (a.ta && "undefined" != typeof aa) if (a.Fc[1] && 4 == ye(a) && 2 == ze(a)) E(a.T, se(a, "Local request error detected and ignored"));else if (a.kc && 4 == ye(a)) me(a.Vd, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == ye(a)) {
        E(a.T, se(a, "Request complete"));a.ta = !1;try {
          var b = ze(a),
              c;a: switch (b) {case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
              c = !0;break a;default:
              c = !1;}var d;if (!(d = c)) {
            var e;if (e = 0 === b) {
              var f = String(a.mc).match(Rd)[1] || null;if (!f && l.self && l.self.location) var g = l.self.location.protocol,
                  f = g.substr(0, g.length - 1);e = !qe.test(f ? f.toLowerCase() : "");
            }d = e;
          }if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            var k;try {
              k = 2 < ye(a) ? a.b.statusText : "";
            } catch (n) {
              E(a.T, "Can not get status: " + n.message), k = "";
            }a.Bb = k + " [" + ze(a) + "]";ve(a);
          }
        } finally {
          we(a);
        }
      }
    };F.prototype.Ud = function (a, b) {
      v("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ae(a, "progress"));this.dispatchEvent(Ae(a, b ? "downloadprogress" : "uploadprogress"));
    };
    var Ae = function Ae(a, b) {
      return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
    },
        we = function we(a, b) {
      if (a.b) {
        te(a);var c = a.b,
            d = a.Fc[0] ? ba : null;a.b = null;a.Fc = null;b || a.dispatchEvent("ready");try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.T) && a.log(ce, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
        }
      }
    },
        te = function te(a) {
      a.b && a.Dc && (a.b.ontimeout = null);ga(a.Ac) && (l.clearTimeout(a.Ac), a.Ac = null);
    },
        ye = function ye(a) {
      return a.b ? a.b.readyState : 0;
    },
        ze = function ze(a) {
      try {
        return 2 < ye(a) ? a.b.status : -1;
      } catch (b) {
        return -1;
      }
    },
        Be = function Be(a) {
      try {
        return a.b ? a.b.responseText : "";
      } catch (b) {
        return E(a.T, "Can not get responseText: " + b.message), "";
      }
    },
        se = function se(a, b) {
      return b + " [" + a.Qd + " " + a.mc + " " + ze(a) + "]";
    };var Ce = function Ce(a, b) {
      this.ca = this.Sa = this.fa = "";this.hb = null;this.Ga = this.va = "";this.R = this.Te = !1;var c;a instanceof Ce ? (this.R = void 0 !== b ? b : a.R, De(this, a.fa), c = a.Sa, G(this), this.Sa = c, Ee(this, a.ca), Fe(this, a.hb), Ge(this, a.va), He(this, a.V.clone()), a = a.Ga, G(this), this.Ga = a) : a && (c = String(a).match(Rd)) ? (this.R = !!b, De(this, c[1] || "", !0), a = c[2] || "", G(this), this.Sa = Ie(a), Ee(this, c[3] || "", !0), Fe(this, c[4]), Ge(this, c[5] || "", !0), He(this, c[6] || "", !0), a = c[7] || "", G(this), this.Ga = Ie(a)) : (this.R = !!b, this.V = new H(null, 0, this.R));
    };Ce.prototype.toString = function () {
      var a = [],
          b = this.fa;b && a.push(Je(b, Ke, !0), ":");var c = this.ca;if (c || "file" == b) a.push("//"), (b = this.Sa) && a.push(Je(b, Ke, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.hb, null != c && a.push(":", String(c));if (c = this.va) this.ca && "/" != c.charAt(0) && a.push("/"), a.push(Je(c, "/" == c.charAt(0) ? Le : Me, !0));(c = this.V.toString()) && a.push("?", c);(c = this.Ga) && a.push("#", Je(c, Ne));return a.join("");
    };
    Ce.prototype.resolve = function (a) {
      var b = this.clone(),
          c = !!a.fa;c ? De(b, a.fa) : c = !!a.Sa;if (c) {
        var d = a.Sa;G(b);b.Sa = d;
      } else c = !!a.ca;c ? Ee(b, a.ca) : c = null != a.hb;d = a.va;if (c) Fe(b, a.hb);else if (c = !!a.va) {
        if ("/" != d.charAt(0)) if (this.ca && !this.va) d = "/" + d;else {
          var e = b.va.lastIndexOf("/");-1 != e && (d = b.va.substr(0, e + 1) + d);
        }e = d;if (".." == e || "." == e) d = "";else if (u(e, "./") || u(e, "/.")) {
          for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
            var k = e[g++];"." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0);
          }d = f.join("/");
        } else d = e;
      }c ? Ge(b, d) : c = "" !== a.V.toString();c ? He(b, a.V.clone()) : c = !!a.Ga;c && (a = a.Ga, G(b), b.Ga = a);return b;
    };Ce.prototype.clone = function () {
      return new Ce(this);
    };
    var De = function De(a, b, c) {
      G(a);a.fa = c ? Ie(b, !0) : b;a.fa && (a.fa = a.fa.replace(/:$/, ""));
    },
        Ee = function Ee(a, b, c) {
      G(a);a.ca = c ? Ie(b, !0) : b;
    },
        Fe = function Fe(a, b) {
      G(a);if (b) {
        b = Number(b);if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);a.hb = b;
      } else a.hb = null;
    },
        Ge = function Ge(a, b, c) {
      G(a);a.va = c ? Ie(b, !0) : b;
    },
        He = function He(a, b, c) {
      G(a);b instanceof H ? (a.V = b, a.V.md(a.R)) : (c || (b = Je(b, Oe)), a.V = new H(b, 0, a.R));
    },
        I = function I(a, b, c) {
      G(a);a.V.set(b, c);
    },
        Pe = function Pe(a, b) {
      return a.V.get(b);
    },
        Qe = function Qe(a, b) {
      G(a);a.V.remove(b);
    },
        G = function G(a) {
      if (a.Te) throw Error("Tried to modify a read-only Uri");
    };Ce.prototype.md = function (a) {
      this.R = a;this.V && this.V.md(a);return this;
    };
    var Re = function Re(a) {
      return a instanceof Ce ? a.clone() : new Ce(a, void 0);
    },
        Se = function Se(a, b) {
      var c = new Ce(null, void 0);De(c, "https");a && Ee(c, a);b && Ge(c, b);return c;
    },
        Ie = function Ie(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
        Je = function Je(a, b, c) {
      return m(a) ? (a = encodeURI(a).replace(b, Te), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
        Te = function Te(a) {
      a = a.charCodeAt(0);return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
        Ke = /[#\/\?@]/g,
        Me = /[\#\?:]/g,
        Le = /[\#\?]/g,
        Oe = /[\#\?@]/g,
        Ne = /#/g,
        H = function H(a, b, c) {
      this.o = this.l = null;this.N = a || null;this.R = !!c;
    },
        Ue = function Ue(a) {
      a.l || (a.l = new Yd(), a.o = 0, a.N && Sd(a.N, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    },
        We = function We(a) {
      var b = Ud(a);if ("undefined" == typeof b) throw Error("Keys are undefined");var c = new H(null, 0, void 0);a = Td(a);for (var d = 0; d < b.length; d++) {
        var e = b[d],
            f = a[d];ea(f) ? Ve(c, e, f) : c.add(e, f);
      }return c;
    };h = H.prototype;
    h.add = function (a, b) {
      Ue(this);this.N = null;a = this.P(a);var c = this.l.get(a);c || this.l.set(a, c = []);c.push(b);this.o = Ka(this.o) + 1;return this;
    };h.remove = function (a) {
      Ue(this);a = this.P(a);return this.l.vb(a) ? (this.N = null, this.o = Ka(this.o) - this.l.get(a).length, this.l.remove(a)) : !1;
    };h.vb = function (a) {
      Ue(this);a = this.P(a);return this.l.vb(a);
    };h.ma = function () {
      Ue(this);for (var a = this.l.X(), b = this.l.ma(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }return c;
    };
    h.X = function (a) {
      Ue(this);var b = [];if (m(a)) this.vb(a) && (b = $a(b, this.l.get(this.P(a))));else {
        a = this.l.X();for (var c = 0; c < a.length; c++) {
          b = $a(b, a[c]);
        }
      }return b;
    };h.set = function (a, b) {
      Ue(this);this.N = null;a = this.P(a);this.vb(a) && (this.o = Ka(this.o) - this.l.get(a).length);this.l.set(a, [b]);this.o = Ka(this.o) + 1;return this;
    };h.get = function (a, b) {
      a = a ? this.X(a) : [];return 0 < a.length ? String(a[0]) : b;
    };var Ve = function Ve(a, b, c) {
      a.remove(b);0 < c.length && (a.N = null, a.l.set(a.P(b), bb(c)), a.o = Ka(a.o) + c.length);
    };
    H.prototype.toString = function () {
      if (this.N) return this.N;if (!this.l) return "";for (var a = [], b = this.l.ma(), c = 0; c < b.length; c++) {
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.X(d), f = 0; f < d.length; f++) {
          var g = e;"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g);
        }
      }return this.N = a.join("&");
    };H.prototype.clone = function () {
      var a = new H();a.N = this.N;this.l && (a.l = this.l.clone(), a.o = this.o);return a;
    };H.prototype.P = function (a) {
      a = String(a);this.R && (a = a.toLowerCase());return a;
    };
    H.prototype.md = function (a) {
      a && !this.R && (Ue(this), this.N = null, this.l.forEach(function (a, c) {
        var b = c.toLowerCase();c != b && (this.remove(c), Ve(this, b, a));
      }, this));this.R = a;
    };var Xe = function Xe() {
      var a = J();return y && !!ob && 11 == ob || /Edge\/\d+/.test(a);
    },
        Ye = function Ye() {
      return l.window && l.window.location.href || "";
    },
        Ze = function Ze(a, b) {
      b = b || l.window;var c = "about:blank";a && (c = rc(uc(a)));b.location.href = c;
    },
        $e = function $e(a, b) {
      var c = [],
          d;for (d in a) {
        d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ea(a[d]) ? qa(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < $e(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
      }for (d in b) {
        d in a || c.push(d);
      }return c;
    },
        bf = function bf() {
      var a;
      a = J();a = "Chrome" != af(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;return a && 30 > a ? !1 : !y || !ob || 9 < ob;
    },
        cf = function cf(a) {
      a = (a || J()).toLowerCase();return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
    },
        df = function df(a) {
      a = a || l.window;try {
        a.close();
      } catch (b) {}
    },
        ef = function ef(a, b, c) {
      var d = Math.floor(1E9 * Math.random()).toString();b = b || 500;c = c || 600;var e = (window.screen.availHeight - c) / 2,
          f = (window.screen.availWidth - b) / 2;b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 };c = J().toLowerCase();d && (b.target = d, u(c, "crios/") && (b.target = "_blank"));"Firefox" == af(J()) && (a = a || "http://localhost", b.scrollbars = !0);var g;c = a || "about:blank";(d = b) || (d = {});a = window;b = c instanceof qc ? c : uc("undefined" != typeof c.href ? c.href : String(c));c = d.target || c.target;e = [];for (g in d) {
        switch (g) {case "width":case "height":case "top":case "left":
            e.push(g + "=" + d[g]);break;case "target":case "noreferrer":
            break;
          default:
            e.push(g + "=" + (d[g] ? 1 : 0));}
      }g = e.join(",");(w("iPhone") && !w("iPod") && !w("iPad") || w("iPad") || w("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ha(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g, v(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", f)), b = b instanceof qc ? b : uc(b), g.href = rc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = rc(b), g && (fb && u(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = mc("b/12014412, meta tag with sanitized URL"), Fa.test(d) && (-1 != d.indexOf("&") && (d = d.replace(za, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(Aa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(Ba, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(Ca, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(Da, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(Ea, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', La(lc(a), "must provide justification"), v(!/^[\s\xa0]*$/.test(lc(a)), "must provide non-empty justification"), g.document.write($c(new Zc().Qe(d))), g.document.close())) : g = a.open(rc(b), c, g);if (g) try {
        g.focus();
      } catch (k) {}return g;
    },
        ff = function ff(a) {
      return new A(function (b) {
        var c = function c() {
          ne(2E3).then(function () {
            if (!a || a.closed) b();else return c();
          });
        };return c();
      });
    },
        gf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        hf = function hf() {
      var a = null;return new A(function (b) {
        "complete" == l.document.readyState ? b() : (a = function a() {
          b();
        }, bc(window, "load", a));
      }).f(function (b) {
        dc(window, "load", a);throw b;
      });
    },
        kf = function kf() {
      return jf(void 0) ? hf().then(function () {
        return new A(function (a, b) {
          var c = l.document,
              d = setTimeout(function () {
            b(Error("Cordova framework is not ready."));
          }, 1E3);c.addEventListener("deviceready", function () {
            clearTimeout(d);a();
          }, !1);
        });
      }) : D(Error("Cordova must run in an Android or iOS file scheme."));
    },
        jf = function jf(a) {
      a = a || J();return !("file:" !== lf() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
    },
        mf = function mf() {
      var a = l.window;try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
        K = function K() {
      return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
    },
        nf = function nf() {
      var a = K();return "ReactNative" === a || "Node" === a;
    },
        af = function af(a) {
      var b = a.toLowerCase();if (u(b, "opera/") || u(b, "opr/") || u(b, "opios/")) return "Opera";if (u(b, "iemobile")) return "IEMobile";if (u(b, "msie") || u(b, "trident/")) return "IE";if (u(b, "edge/")) return "Edge";if (u(b, "firefox/")) return "Firefox";if (u(b, "silk/")) return "Silk";if (u(b, "blackberry")) return "Blackberry";if (u(b, "webos")) return "Webos";if (!u(b, "safari/") || u(b, "chrome/") || u(b, "crios/") || u(b, "android")) {
        if (!u(b, "chrome/") && !u(b, "crios/") || u(b, "edge/")) {
          if (u(b, "android")) return "Android";
          if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
        } else return "Chrome";
      } else return "Safari";return "Other";
    },
        of = function of(a) {
      var b = K();return ("Browser" === b ? af(J()) : b) + "/JsCore/" + a;
    },
        J = function J() {
      return l.navigator && l.navigator.userAgent || "";
    },
        L = function L(a, b) {
      a = a.split(".");b = b || l;for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) {
        b = b[a[c]];
      }c != a.length && (b = void 0);return b;
    },
        rf = function rf() {
      var a;if (a = (pf() || "chrome-extension:" === lf() || jf() && !1) && !nf()) a: {
        try {
          var b = l.localStorage,
              c = qf();if (b) {
            b.setItem(c, "1");b.removeItem(c);a = Xe() ? !!l.indexedDB : !0;break a;
          }
        } catch (d) {}a = !1;
      }return a;
    },
        pf = function pf() {
      return "http:" === lf() || "https:" === lf();
    },
        lf = function lf() {
      return l.location && l.location.protocol || null;
    },
        sf = function sf(a) {
      a = a || J();return cf(a) || "Firefox" == af(a) ? !1 : !0;
    },
        tf = function tf(a) {
      return "undefined" === typeof a ? null : xc(a);
    },
        uf = function uf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
      }return b;
    },
        vf = function vf(a) {
      if (null !== a) return JSON.parse(a);
    },
        qf = function qf(a) {
      return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
    },
        wf = function wf(a) {
      a = a || J();return "Safari" == af(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
    },
        xf = function xf() {
      var a = l.___jsl;if (a && a.H) for (var b in a.H) {
        if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
          a.CP[c] = null;
        }
      }
    },
        yf = function yf() {
      return l.navigator && "boolean" === typeof l.navigator.onLine ? l.navigator.onLine : !0;
    },
        zf = function zf(a, b, c, d) {
      if (a > b) throw Error("Short delay should be less than long delay!");
      this.uf = a;this.We = b;a = c || J();d = d || K();this.Se = cf(a) || "ReactNative" === d;
    };zf.prototype.get = function () {
      return this.Se ? this.We : this.uf;
    };
    var Af = function Af() {
      var a = l.document;return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
    },
        Bf = function Bf() {
      var a = l.document,
          _b = null;return Af() || !a ? C() : new A(function (c) {
        _b = function b() {
          Af() && (a.removeEventListener("visibilitychange", _b, !1), c());
        };a.addEventListener("visibilitychange", _b, !1);
      }).f(function (c) {
        a.removeEventListener("visibilitychange", _b, !1);throw c;
      });
    };var Cf = {};var Df;try {
      var Ef = {};Object.defineProperty(Ef, "abcd", { configurable: !0, enumerable: !0, value: 1 });Object.defineProperty(Ef, "abcd", { configurable: !0, enumerable: !0, value: 2 });Df = 2 == Ef.abcd;
    } catch (a) {
      Df = !1;
    }
    var M = function M(a, b, c) {
      Df ? Object.defineProperty(a, b, { configurable: !0, enumerable: !0, value: c }) : a[b] = c;
    },
        Ff = function Ff(a) {
      Df ? Object.defineProperty(a, "provider", { configurable: !0, enumerable: !0, get: function get() {
          Cf["firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."] || (Cf["firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn("firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."));
          return "password";
        } }) : a.provider = "password";
    },
        Gf = function Gf(a, b) {
      if (b) for (var c in b) {
        b.hasOwnProperty(c) && M(a, c, b[c]);
      }
    },
        Hf = function Hf(a) {
      var b = {};Gf(b, a);return b;
    },
        If = function If(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && (b[c] = a[c]);
      }return b;
    },
        Jf = function Jf(a, b) {
      if (!b || !b.length) return !0;if (!a) return !1;for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];if (void 0 === d || null === d || "" === d) return !1;
      }return !0;
    },
        Kf = function Kf(a) {
      var b = a;if ("object" == typeof a && null != a) {
        var b = "length" in a ? [] : {},
            c;for (c in a) {
          M(b, c, Kf(a[c]));
        }
      }return b;
    };var Lf = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
        Mf = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        Nf = { Ef: { Gb: 500, Fb: 600, providerId: "facebook.com", jd: Mf }, Ff: { Gb: 500, Fb: 620, providerId: "github.com", jd: Mf }, Gf: { Gb: 515, Fb: 680, providerId: "google.com", jd: Mf }, Hf: { Gb: 485, Fb: 705, providerId: "twitter.com", jd: Lf } },
        Of = function Of(a) {
      for (var b in Nf) {
        if (Nf[b].providerId == a) return Nf[b];
      }return null;
    };var N = function N(a, b) {
      this.code = "auth/" + a;this.message = b || Pf[a] || "";
    };r(N, Error);N.prototype.D = function () {
      return { code: this.code, message: this.message };
    };N.prototype.toJSON = function () {
      return this.D();
    };
    var Qf = function Qf(a) {
      var b = a && a.code;return b ? new N(b.substring(5), a.message) : null;
    },
        Pf = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "",
      "code-expired": "", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
      "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "",
      "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-credential": "The supplied auth credential is malformed or has expired.",
      "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
      "wrong-password": "The password is invalid or the user does not have a password.", "invalid-identifier-number": "", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "", "missing-iframe-start": "An internal error has occurred.",
      "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "", "missing-verification-code": "", "missing-identifier-number": "", "missing-verification-id": "", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
      "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", timeout: "The operation has timed out.",
      "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
      "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };var O = function O(a, b, c, d, e) {
      this.ba = a;this.I = b || null;this.rb = c || null;this.ld = d || null;this.O = e || null;if (this.rb || this.O) {
        if (this.rb && this.O) throw new N("invalid-auth-event");if (this.rb && !this.ld) throw new N("invalid-auth-event");
      } else throw new N("invalid-auth-event");
    };O.prototype.cc = function () {
      return this.ld;
    };O.prototype.getError = function () {
      return this.O;
    };O.prototype.D = function () {
      return { type: this.ba, eventId: this.I, urlResponse: this.rb, sessionId: this.ld, error: this.O && this.O.D() };
    };
    var Rf = function Rf(a) {
      a = a || {};return a.type ? new O(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Qf(a.error)) : null;
    };var Sf = function Sf(a) {
      var b = "unauthorized-domain",
          c = void 0,
          d = Re(a);a = d.ca;d = d.fa;"chrome-extension" == d ? c = xa("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = xa("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";N.call(this, b, c);
    };r(Sf, N);var Tf = function Tf(a) {
      this.Ve = a.sub;la();this.$b = a.email || null;
    };var Uf = function Uf(a, b) {
      return a.then(function (a) {
        if (a.idToken) {
          var c;a: {
            var e = a.idToken.split(".");if (3 == e.length) {
              for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++) {
                e += ".";
              }try {
                var k = JSON.parse(tb(e));if (k.sub && k.iss && k.aud && k.exp) {
                  c = new Tf(k);break a;
                }
              } catch (n) {}
            }c = null;
          }if (!c || b != c.Ve) throw new N("user-mismatch");return a;
        }throw new N("user-mismatch");
      }).f(function (a) {
        throw a && a.code && "auth/user-not-found" == a.code ? new N("user-mismatch") : a;
      });
    },
        Vf = function Vf(a, b) {
      if (b.idToken || b.accessToken) b.idToken && M(this, "idToken", b.idToken), b.accessToken && M(this, "accessToken", b.accessToken);else if (b.oauthToken && b.oauthTokenSecret) M(this, "accessToken", b.oauthToken), M(this, "secret", b.oauthTokenSecret);else throw new N("internal-error", "failed to construct a credential");M(this, "provider", a);M(this, "providerId", a);
    };Vf.prototype.bc = function (a) {
      return Wf(a, Xf(this));
    };Vf.prototype.Rd = function (a, b) {
      var c = Xf(this);c.idToken = b;return Yf(a, c);
    };Vf.prototype.Sd = function (a, b) {
      var c = Xf(this);return Uf(Zf(a, c), b);
    };
    var Xf = function Xf(a) {
      var b = {};a.idToken && (b.id_token = a.idToken);a.accessToken && (b.access_token = a.accessToken);a.secret && (b.oauth_token_secret = a.secret);b.providerId = a.providerId;return { postBody: We(b).toString(), requestUri: "http://localhost" };
    };Vf.prototype.D = function () {
      var a = { providerId: this.providerId };this.idToken && (a.oauthIdToken = this.idToken);this.accessToken && (a.oauthAccessToken = this.accessToken);this.secret && (a.oauthTokenSecret = this.secret);return a;
    };
    var $f = function $f(a, b) {
      this.jf = b || [];Gf(this, { providerId: a, isOAuthProvider: !0 });this.zd = {};
    };$f.prototype.setCustomParameters = function (a) {
      this.zd = ra(a);return this;
    };var P = function P(a) {
      $f.call(this, a, Mf);this.kd = [];
    };r(P, $f);P.prototype.addScope = function (a) {
      Wa(this.kd, a) || this.kd.push(a);return this;
    };P.prototype.Id = function () {
      return bb(this.kd);
    };
    P.prototype.credential = function (a, b) {
      if (!a && !b) throw new N("argument-error", "credential failed: must provide the ID token and/or the access token.");return new Vf(this.providerId, { idToken: a || null, accessToken: b || null });
    };var ag = function ag() {
      P.call(this, "facebook.com");
    };r(ag, P);M(ag, "PROVIDER_ID", "facebook.com");var bg = function bg(a) {
      if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");return new ag().credential(null, a);
    },
        cg = function cg() {
      P.call(this, "github.com");
    };
    r(cg, P);M(cg, "PROVIDER_ID", "github.com");var dg = function dg(a) {
      if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");return new cg().credential(null, a);
    },
        eg = function eg() {
      P.call(this, "google.com");this.addScope("profile");
    };r(eg, P);M(eg, "PROVIDER_ID", "google.com");var fg = function fg(a, b) {
      return new eg().credential(a, b);
    },
        gg = function gg() {
      $f.call(this, "twitter.com", Lf);
    };r(gg, $f);M(gg, "PROVIDER_ID", "twitter.com");
    var hg = function hg(a, b) {
      if (!a || !b) throw new N("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");return new Vf("twitter.com", { oauthToken: a, oauthTokenSecret: b });
    },
        ig = function ig(a, b) {
      this.$b = a;this.bd = b;Ff(this);M(this, "providerId", "password");
    };ig.prototype.bc = function (a) {
      return Q(a, jg, { email: this.$b, password: this.bd });
    };ig.prototype.Rd = function (a, b) {
      return Q(a, kg, { idToken: b, email: this.$b, password: this.bd });
    };ig.prototype.Sd = function (a, b) {
      return Uf(this.bc(a), b);
    };
    ig.prototype.D = function () {
      return { email: this.$b, password: this.bd };
    };var lg = function lg() {
      Gf(this, { providerId: "password", isOAuthProvider: !1 });
    };Gf(lg, { PROVIDER_ID: "password" });
    Gf(function (a) {
      try {
        a || firebase.auth();
      } catch (b) {
        throw new N("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.identifierAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
      }Gf(this, { providerId: "identifier", isOAuthProvider: !1 });
    }, { PROVIDER_ID: "identifier" });
    var mg = function mg(a) {
      var b = a && a.providerId;if (!b || "password" === b || "identifier" === b) return null;var c = a && a.oauthAccessToken,
          d = a && a.oauthTokenSecret;a = a && a.oauthIdToken;try {
        switch (b) {case "google.com":
            return fg(a, c);case "facebook.com":
            return bg(c);case "github.com":
            return dg(c);case "twitter.com":
            return hg(c, d);default:
            return new P(b).credential(a, c);}
      } catch (e) {
        return null;
      }
    },
        ng = function ng(a) {
      if (!a.isOAuthProvider) throw new N("invalid-oauth-provider");
    };var og = function og(a, b, c, d) {
      N.call(this, a, d);M(this, "email", b);M(this, "credential", c);
    };r(og, N);og.prototype.D = function () {
      var a = { code: this.code, message: this.message, email: this.email },
          b = this.credential && this.credential.D();b && ta(a, b);return a;
    };og.prototype.toJSON = function () {
      return this.D();
    };var pg = function pg(a) {
      if (a.code) {
        var b = a.code || "";0 == b.indexOf("auth/") && (b = b.substring(5));return a.email ? new og(b, a.email, mg(a), a.message) : new N(b, a.message || void 0);
      }return null;
    };var qg = function qg(a) {
      this.Df = a;
    };r(qg, Bc);qg.prototype.Zb = function () {
      return new this.Df();
    };qg.prototype.Vc = function () {
      return {};
    };
    var R = function R(a, b, c) {
      var d;d = "Node" == K();d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;if (!d) throw new N("internal-error", "The XMLHttpRequest compatibility library was not found.");this.j = a;a = b || {};this.qf = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";this.rf = a.secureTokenTimeout || rg;this.$d = ra(a.secureTokenHeaders || sg);this.Be = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Ce = a.firebaseTimeout || tg;this.Gd = ra(a.firebaseHeaders || ug);c && (this.Gd["X-Client-Version"] = c, this.$d["X-Client-Version"] = c);this.ve = new Gc();this.Cf = new qg(d);
    },
        vg,
        rg = new zf(3E4, 6E4),
        sg = { "Content-Type": "application/x-www-form-urlencoded" },
        tg = new zf(3E4, 6E4),
        ug = { "Content-Type": "application/json" },
        xg = function xg(a, b, c, d, e, f, g) {
      yf() ? (bf() ? a = _q(a.tf, a) : (vg || (vg = new A(function (a, b) {
        wg(a, b);
      })), a = _q(a.sf, a)), a(b, c, d, e, f, g)) : c && c(null);
    };
    R.prototype.tf = function (a, b, c, d, e, f) {
      var g = "Node" == K(),
          k = nf() ? g ? new F(this.Cf) : new F() : new F(this.ve),
          n;f && (k.qb = Math.max(0, f), n = setTimeout(function () {
        k.dispatchEvent("timeout");
      }, f));k.listen("complete", function () {
        n && clearTimeout(n);var a = null;try {
          a = JSON.parse(Be(this)) || null;
        } catch (ab) {
          a = null;
        }b && b(a);
      });cc(k, "ready", function () {
        n && clearTimeout(n);this.Da || (this.Da = !0, this.Za());
      });cc(k, "timeout", function () {
        n && clearTimeout(n);this.Da || (this.Da = !0, this.Za());b && b(null);
      });k.send(a, c, d, e);
    };
    var Ed = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
        wg = function wg(a, b) {
      ((window.gapi || {}).client || {}).request ? a() : (l[Ed] = function () {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
      }, Gd(function () {
        b(Error("CORS_UNSUPPORTED"));
      }));
    };
    R.prototype.sf = function (a, b, c, d, e) {
      var f = this;vg.then(function () {
        window.gapi.client.setApiKey(f.j);var g = window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function callback(a) {
            window.gapi.auth.setToken(g);b && b(a);
          } });
      }).f(function (a) {
        b && b({ error: { message: a && a.message || "CORS_UNSUPPORTED" } });
      });
    };
    var zg = function zg(a, b) {
      return new A(function (c, d) {
        "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? xg(a, a.qf + "?key=" + encodeURIComponent(a.j), function (a) {
          a ? a.error ? d(yg(a)) : a.access_token && a.refresh_token ? c(a) : d(new N("internal-error")) : d(new N("network-request-failed"));
        }, "POST", We(b).toString(), a.$d, a.rf.get()) : d(new N("internal-error"));
      });
    },
        Ag = function Ag(a, b, c, d, e) {
      var f = Re(a.Be + b);I(f, "key", a.j);e && I(f, "cb", la().toString());var g = "GET" == c;if (g) for (var k in d) {
        d.hasOwnProperty(k) && I(f, k, d[k]);
      }return new A(function (b, e) {
        xg(a, f.toString(), function (a) {
          a ? a.error ? e(yg(a)) : b(a) : e(new N("network-request-failed"));
        }, c, g ? void 0 : xc(uf(d)), a.Gd, a.Ce.get());
      });
    },
        Bg = function Bg(a) {
      if (!ic.test(a.email)) throw new N("invalid-email");
    },
        Cg = function Cg(a) {
      "email" in a && Bg(a);
    },
        Eg = function Eg(a, b) {
      return Q(a, Dg, { identifier: b, continueUri: pf() ? Ye() : "http://localhost" }).then(function (a) {
        return a.allProviders || [];
      });
    },
        Gg = function Gg(a) {
      return Q(a, Fg, {}).then(function (a) {
        return a.authorizedDomains || [];
      });
    },
        Hg = function Hg(a) {
      if (!a.idToken) throw new N("internal-error");
    };R.prototype.signInAnonymously = function () {
      return Q(this, Ig, {});
    };R.prototype.updateEmail = function (a, b) {
      return Q(this, Jg, { idToken: a, email: b });
    };R.prototype.updatePassword = function (a, b) {
      return Q(this, kg, { idToken: a, password: b });
    };var Kg = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };R.prototype.updateProfile = function (a, b) {
      var c = { idToken: a },
          d = [];ma(Kg, function (a, f) {
        var e = b[f];null === e ? d.push(a) : f in b && (c[f] = e);
      });d.length && (c.deleteAttribute = d);return Q(this, Jg, c);
    };
    R.prototype.sendPasswordResetEmail = function (a) {
      return Q(this, Lg, { requestType: "PASSWORD_RESET", email: a });
    };R.prototype.sendEmailVerification = function (a) {
      return Q(this, Mg, { requestType: "VERIFY_EMAIL", idToken: a });
    };
    var Og = function Og(a, b, c) {
      return Q(a, Ng, { idToken: b, deleteProvider: c });
    },
        Pg = function Pg(a) {
      if (!a.requestUri || !a.sessionId && !a.postBody) throw new N("internal-error");
    },
        Qg = function Qg(a) {
      var b = null;a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = pg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = pg(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = pg(a));if (b) throw b;if (!a.idToken) throw new N("internal-error");
    },
        Wf = function Wf(a, b) {
      b.returnIdpCredential = !0;return Q(a, Rg, b);
    },
        Yf = function Yf(a, b) {
      b.returnIdpCredential = !0;return Q(a, Sg, b);
    },
        Zf = function Zf(a, b) {
      b.returnIdpCredential = !0;b.autoCreate = !1;return Q(a, Tg, b);
    },
        Ug = function Ug(a) {
      if (!a.oobCode) throw new N("invalid-action-code");
    };R.prototype.confirmPasswordReset = function (a, b) {
      return Q(this, Vg, { oobCode: a, newPassword: b });
    };R.prototype.checkActionCode = function (a) {
      return Q(this, Wg, { oobCode: a });
    };R.prototype.applyActionCode = function (a) {
      return Q(this, Xg, { oobCode: a });
    };
    var Xg = { endpoint: "setAccountInfo", G: Ug, pb: "email" },
        Wg = { endpoint: "resetPassword", G: Ug, oa: function oa(a) {
        if (!a.email || !a.requestType) throw new N("internal-error");
      } },
        Yg = { endpoint: "signupNewUser", G: function G(a) {
        Bg(a);if (!a.password) throw new N("weak-password");
      }, oa: Hg, qa: !0 },
        Dg = { endpoint: "createAuthUri" },
        Zg = { endpoint: "deleteAccount", ob: ["idToken"] },
        Ng = { endpoint: "setAccountInfo", ob: ["idToken", "deleteProvider"], G: function G(a) {
        if (!ea(a.deleteProvider)) throw new N("internal-error");
      } },
        $g = { endpoint: "getAccountInfo" },
        Mg = { endpoint: "getOobConfirmationCode", ob: ["idToken", "requestType"], G: function G(a) {
        if ("VERIFY_EMAIL" != a.requestType) throw new N("internal-error");
      }, pb: "email" },
        Lg = { endpoint: "getOobConfirmationCode", ob: ["requestType"], G: function G(a) {
        if ("PASSWORD_RESET" != a.requestType) throw new N("internal-error");Bg(a);
      }, pb: "email" },
        Fg = { ue: !0, endpoint: "getProjectConfig", Me: "GET" },
        Vg = { endpoint: "resetPassword", G: Ug, pb: "email" },
        Jg = { endpoint: "setAccountInfo", ob: ["idToken"], G: Cg, qa: !0 },
        kg = { endpoint: "setAccountInfo", ob: ["idToken"],
      G: function G(a) {
        Cg(a);if (!a.password) throw new N("weak-password");
      }, oa: Hg, qa: !0 },
        Ig = { endpoint: "signupNewUser", oa: Hg, qa: !0 },
        Rg = { endpoint: "verifyAssertion", G: Pg, oa: Qg, qa: !0 },
        Tg = { endpoint: "verifyAssertion", G: Pg, oa: function oa(a) {
        if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new N("user-not-found");if (!a.idToken) throw new N("internal-error");
      }, qa: !0 },
        Sg = { endpoint: "verifyAssertion", G: function G(a) {
        Pg(a);if (!a.idToken) throw new N("internal-error");
      }, oa: Qg, qa: !0 },
        ah = { endpoint: "verifyCustomToken", G: function G(a) {
        if (!a.token) throw new N("invalid-custom-token");
      }, oa: Hg, qa: !0 },
        jg = { endpoint: "verifyPassword", G: function G(a) {
        Bg(a);if (!a.password) throw new N("wrong-password");
      }, oa: Hg, qa: !0 },
        Q = function Q(a, b, c) {
      if (!Jf(c, b.ob)) return D(new N("internal-error"));var d = b.Me || "POST",
          e;return C(c).then(b.G).then(function () {
        b.qa && (c.returnSecureToken = !0);return Ag(a, b.endpoint, d, c, b.ue || !1);
      }).then(function (a) {
        return e = a;
      }).then(b.oa).then(function () {
        if (!b.pb) return e;if (!(b.pb in e)) throw new N("internal-error");return e[b.pb];
      });
    },
        yg = function yg(a) {
      var b, c;c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };if (c = d[c] ? new N(d[c]) : null) return c;c = a.error && a.error.message || "";d = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error",
        EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_identifier_NUMBER: "invalid-identifier-number",
        INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_identifier_NUMBER: "missing-identifier-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired" };b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;for (var e in d) {
        if (0 === c.indexOf(e)) return new N(d[e], b);
      }!b && a && (b = tf(a));return new N("internal-error", b);
    };var bh = function bh(a) {
      this.U = a;
    };bh.prototype.value = function () {
      return this.U;
    };bh.prototype.ce = function (a) {
      this.U.style = a;return this;
    };var ch = function ch(a) {
      this.U = a || {};
    };ch.prototype.value = function () {
      return this.U;
    };ch.prototype.ce = function (a) {
      this.U.style = a;return this;
    };var eh = function eh(a) {
      this.Af = a;this.ic = null;this.$c = dh(this);
    },
        fh = function fh(a) {
      var b = new ch();b.U.where = document.body;b.U.url = a.Af;b.U.messageHandlersFilter = L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.U.attributes = b.U.attributes || {};new bh(b.U.attributes).ce({ position: "absolute", top: "-100px", width: "1px", height: "1px" });b.U.dontclear = !0;return b;
    },
        dh = function dh(a) {
      return gh().then(function () {
        return new A(function (b, c) {
          L("gapi.iframes.getContext")().open(fh(a).value(), function (d) {
            a.ic = d;a.ic.restyle({ setHideOnLeave: !1 });
            var e = setTimeout(function () {
              c(Error("Network Error"));
            }, hh.get()),
                f = function f() {
              clearTimeout(e);b();
            };d.ping(f).then(f, function () {
              c(Error("Network Error"));
            });
          });
        });
      });
    };eh.prototype.sendMessage = function (a) {
      var b = this;return this.$c.then(function () {
        return new A(function (c) {
          b.ic.send(a.type, a, c, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
        });
      });
    };
    var ih = function ih(a, b) {
      a.$c.then(function () {
        a.ic.register("authEvent", b, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    },
        jh = new zf(3E4, 6E4),
        hh = new zf(5E3, 15E3),
        gh = function gh() {
      return new A(function (a, b) {
        if (yf()) {
          var c = function c() {
            xf();L("gapi.load")("gapi.iframes", { callback: a, ontimeout: function ontimeout() {
                xf();b(Error("Network Error"));
              }, timeout: jh.get() });
          };if (L("gapi.iframes.Iframe")) a();else if (L("gapi.load")) c();else {
            var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();l[d] = function () {
              L("gapi.load") ? c() : b(Error("Network Error"));
            };C(Dd("https://apis.google.com/js/api.js?onload=" + d)).f(function () {
              b(Error("Network Error"));
            });
          }
        } else b(Error("Network Error"));
      });
    };var kh = function kh(a, b, c) {
      this.v = a;this.j = b;this.B = c;this.Ta = null;this.Ub = Se(this.v, "/__/auth/iframe");I(this.Ub, "apiKey", this.j);I(this.Ub, "appName", this.B);
    };kh.prototype.setVersion = function (a) {
      this.Ta = a;return this;
    };kh.prototype.toString = function () {
      this.Ta ? I(this.Ub, "v", this.Ta) : Qe(this.Ub, "v");return this.Ub.toString();
    };var lh = function lh(a, b, c, d, e) {
      this.v = a;this.j = b;this.B = c;this.te = d;this.Ta = this.I = this.hd = null;this.Jb = e;
    };lh.prototype.setVersion = function (a) {
      this.Ta = a;return this;
    };
    lh.prototype.toString = function () {
      var a = Se(this.v, "/__/auth/handler");I(a, "apiKey", this.j);I(a, "appName", this.B);I(a, "authType", this.te);if (this.Jb.isOAuthProvider) {
        I(a, "providerId", this.Jb.providerId);var b = this.Jb,
            c = uf(b.zd),
            d;for (d in c) {
          c[d] = c[d].toString();
        }b = b.jf;c = ra(c);for (d = 0; d < b.length; d++) {
          var e = b[d];e in c && delete c[e];
        }pa(c) || I(a, "customParameters", tf(c));
      }"function" === typeof this.Jb.Id && (b = this.Jb.Id(), b.length && I(a, "scopes", b.join(",")));this.hd ? I(a, "redirectUrl", this.hd) : Qe(a, "redirectUrl");
      this.I ? I(a, "eventId", this.I) : Qe(a, "eventId");this.Ta ? I(a, "v", this.Ta) : Qe(a, "v");if (this.Vb) for (var f in this.Vb) {
        this.Vb.hasOwnProperty(f) && !Pe(a, f) && I(a, f, this.Vb[f]);
      }return a.toString();
    };
    var mh = function mh(a, b, c, d) {
      this.v = a;this.j = b;this.B = c;this.Ee = (this.Ca = d || null) ? of(this.Ca) : null;d = this.Ca;this.Ne = new kh(a, b, c).setVersion(d).toString();this.ka = [];this.g = new R(b, null, this.Ee);this.lc = this.ua = null;
    },
        nh = function nh(a) {
      var b = Ye();return Gg(a).then(function (a) {
        a: {
          for (var c = Re(b), e = c.fa, c = c.ca, f = 0; f < a.length; f++) {
            var g;var k = a[f];g = c;var n = e;0 == k.indexOf("chrome-extension://") ? g = Re(k).ca == g && "chrome-extension" == n : "http" != n && "https" != n ? g = !1 : gf.test(k) ? g = g == k : (k = k.split(".").join("\\."), g = new RegExp("^(.+\\." + k + "|" + k + ")$", "i").test(g));if (g) {
              a = !0;break a;
            }
          }a = !1;
        }if (!a) throw new Sf(Ye());
      });
    };h = mh.prototype;h.Ab = function () {
      if (this.lc) return this.lc;var a = this;return this.lc = hf().then(function () {
        a.hc = new eh(a.Ne);oh(a);
      });
    };h.Pb = function (a, b, c) {
      var d = new N("popup-closed-by-user"),
          e = new N("web-storage-unsupported"),
          f = this,
          g = !1;return this.Ia().then(function () {
        ph(f).then(function (c) {
          c || (a && df(a), b(e), g = !0);
        });
      }).f(function () {}).then(function () {
        if (!g) return ff(a);
      }).then(function () {
        if (!g) return ne(c).then(function () {
          b(d);
        });
      });
    };
    h.de = function () {
      var a = J();return !sf(a) && !wf(a);
    };h.Ld = function () {
      return !1;
    };h.Hb = function (a, b, c, d, e, f, g) {
      if (!a) return D(new N("popup-blocked"));if (g && !sf()) return this.Ia().f(function (b) {
        df(a);e(b);
      }), d(), C();this.ua || (this.ua = nh(this.g));var k = this;return this.ua.then(function () {
        var b = k.Ia().f(function (b) {
          df(a);e(b);throw b;
        });d();return b;
      }).then(function () {
        ng(c);if (!g) {
          var d = qh(k.v, k.j, k.B, b, c, null, f, k.Ca);Ze(d, a);
        }
      }).f(function (a) {
        "auth/network-request-failed" == a.code && (k.ua = null);throw a;
      });
    };
    h.Ib = function (a, b, c) {
      this.ua || (this.ua = nh(this.g));var d = this;return this.ua.then(function () {
        ng(b);var e = qh(d.v, d.j, d.B, a, b, Ye(), c, d.Ca);Ze(e);
      });
    };h.Ia = function () {
      var a = this;return this.Ab().then(function () {
        return a.hc.$c;
      }).f(function () {
        a.ua = null;throw new N("network-request-failed");
      });
    };h.ge = function () {
      return !0;
    };
    var qh = function qh(a, b, c, d, e, f, g, k, n) {
      a = new lh(a, b, c, d, e);a.hd = f;a.I = g;f = a.setVersion(k);f.Vb = ra(n || null);return f.toString();
    },
        oh = function oh(a) {
      if (!a.hc) throw Error("IfcHandler must be initialized!");ih(a.hc, function (b) {
        var c = {};if (b && b.authEvent) {
          var d = !1;b = Rf(b.authEvent);for (c = 0; c < a.ka.length; c++) {
            d = a.ka[c](b) || d;
          }c = {};c.status = d ? "ACK" : "ERROR";return C(c);
        }c.status = "ERROR";return C(c);
      });
    },
        ph = function ph(a) {
      var b = { type: "webStorageSupport" };return a.Ab().then(function () {
        return a.hc.sendMessage(b);
      }).then(function (a) {
        if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;throw Error();
      });
    };mh.prototype.Va = function (a) {
      this.ka.push(a);
    };mh.prototype.Nb = function (a) {
      Za(this.ka, function (b) {
        return b == a;
      });
    };var rh = function rh(a) {
      this.A = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;if (!this.A) throw new N("internal-error", "The React Native compatibility library was not found.");
    };h = rh.prototype;h.get = function (a) {
      return C(this.A.getItem(a)).then(function (a) {
        return a && vf(a);
      });
    };h.set = function (a, b) {
      return C(this.A.setItem(a, tf(b)));
    };h.remove = function (a) {
      return C(this.A.removeItem(a));
    };h.Wa = function () {};h.Qa = function () {};var th = function th() {
      this.A = {};
    };h = th.prototype;h.get = function (a) {
      return C(this.A[a]);
    };h.set = function (a, b) {
      this.A[a] = b;return C();
    };h.remove = function (a) {
      delete this.A[a];return C();
    };h.Wa = function () {};h.Qa = function () {};var vh = function vh() {
      if (!uh()) {
        if ("Node" == K()) throw new N("internal-error", "The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");
      }this.A = l.localStorage || firebase.INTERNAL.node.localStorage;
    },
        uh = function uh() {
      var a = "Node" == K(),
          a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = vh.prototype;
    h.get = function (a) {
      var b = this;return C().then(function () {
        var c = b.A.getItem(a);return vf(c);
      });
    };h.set = function (a, b) {
      var c = this;return C().then(function () {
        var d = tf(b);null === d ? c.remove(a) : c.A.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return C().then(function () {
        b.A.removeItem(a);
      });
    };h.Wa = function (a) {
      l.window && Vb(l.window, "storage", a);
    };h.Qa = function (a) {
      l.window && dc(l.window, "storage", a);
    };var wh = function wh() {
      this.A = {};
    };h = wh.prototype;h.get = function () {
      return C(null);
    };h.set = function () {
      return C();
    };h.remove = function () {
      return C();
    };h.Wa = function () {};h.Qa = function () {};var yh = function yh() {
      if (!xh()) {
        if ("Node" == K()) throw new N("internal-error", "The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");
      }this.A = l.sessionStorage || firebase.INTERNAL.node.sessionStorage;
    },
        xh = function xh() {
      var a = "Node" == K(),
          a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = yh.prototype;
    h.get = function (a) {
      var b = this;return C().then(function () {
        var c = b.A.getItem(a);return vf(c);
      });
    };h.set = function (a, b) {
      var c = this;return C().then(function () {
        var d = tf(b);null === d ? c.remove(a) : c.A.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return C().then(function () {
        b.A.removeItem(a);
      });
    };h.Wa = function () {};h.Qa = function () {};var zh = function zh(a, b, c, d, e, f) {
      if (!window.indexedDB) throw new N("web-storage-unsupported");this.xe = a;this.Zc = b;this.Lc = c;this.ke = d;this.tb = e;this.Y = {};this.Qb = [];this.Db = 0;this.Oe = f || l.indexedDB;
    },
        Ah,
        Bh = function Bh(a) {
      return new A(function (b, c) {
        var d = a.Oe.open(a.xe, a.tb);d.onerror = function (a) {
          c(Error(a.target.errorCode));
        };d.onupgradeneeded = function (b) {
          b = b.target.result;try {
            b.createObjectStore(a.Zc, { keyPath: a.Lc });
          } catch (f) {
            c(f);
          }
        };d.onsuccess = function (a) {
          b(a.target.result);
        };
      });
    },
        Ch = function Ch(a) {
      a.Od || (a.Od = Bh(a));return a.Od;
    },
        Dh = function Dh(a, b) {
      return b.objectStore(a.Zc);
    },
        Eh = function Eh(a, b, c) {
      return b.transaction([a.Zc], c ? "readwrite" : "readonly");
    },
        Fh = function Fh(a) {
      return new A(function (b, c) {
        a.onsuccess = function (a) {
          a && a.target ? b(a.target.result) : b();
        };a.onerror = function (a) {
          c(Error(a.target.errorCode));
        };
      });
    };h = zh.prototype;
    h.set = function (a, b) {
      var c = !1,
          d,
          e = this;return kd(Ch(this).then(function (b) {
        d = b;b = Dh(e, Eh(e, d, !0));return Fh(b.get(a));
      }).then(function (f) {
        var g = Dh(e, Eh(e, d, !0));if (f) return f.value = b, Fh(g.put(f));e.Db++;c = !0;f = {};f[e.Lc] = a;f[e.ke] = b;return Fh(g.add(f));
      }).then(function () {
        e.Y[a] = b;
      }), function () {
        c && e.Db--;
      });
    };h.get = function (a) {
      var b = this;return Ch(this).then(function (c) {
        return Fh(Dh(b, Eh(b, c, !1)).get(a));
      }).then(function (a) {
        return a && a.value;
      });
    };
    h.remove = function (a) {
      var b = !1,
          c = this;return kd(Ch(this).then(function (d) {
        b = !0;c.Db++;return Fh(Dh(c, Eh(c, d, !0))["delete"](a));
      }).then(function () {
        delete c.Y[a];
      }), function () {
        b && c.Db--;
      });
    };
    h.wf = function () {
      var a = this;return Ch(this).then(function (b) {
        var c = Dh(a, Eh(a, b, !1));return c.getAll ? Fh(c.getAll()) : new A(function (a, b) {
          var d = [],
              e = c.openCursor();e.onsuccess = function (b) {
            (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
          };e.onerror = function (a) {
            b(Error(a.target.errorCode));
          };
        });
      }).then(function (b) {
        var c = {},
            d = [];if (0 == a.Db) {
          for (d = 0; d < b.length; d++) {
            c[b[d][a.Lc]] = b[d][a.ke];
          }d = $e(a.Y, c);a.Y = c;
        }return d;
      });
    };h.Wa = function (a) {
      0 == this.Qb.length && this.od();this.Qb.push(a);
    };
    h.Qa = function (a) {
      Za(this.Qb, function (b) {
        return b == a;
      });0 == this.Qb.length && this.xc();
    };h.od = function () {
      var a = this;this.xc();var b = function b() {
        a.cd = ne(800).then(_q(a.wf, a)).then(function (b) {
          0 < b.length && x(a.Qb, function (a) {
            a(b);
          });
        }).then(b).f(function (a) {
          "STOP_EVENT" != a.message && b();
        });return a.cd;
      };b();
    };h.xc = function () {
      this.cd && this.cd.cancel("STOP_EVENT");
    };var Jh = function Jh() {
      this.Cd = { Browser: Gh, Node: Hh, ReactNative: Ih }[K()];
    },
        Kh,
        Gh = { K: vh, rd: yh },
        Hh = { K: vh, rd: yh },
        Ih = { K: rh, rd: wh };var Lh = function Lh(a) {
      var b = {},
          c = a.email,
          d = a.newEmail;a = a.requestType;if (!c || !a) throw Error("Invalid provider user info!");b.fromEmail = d || null;b.email = c;M(this, "operation", a);M(this, "data", Kf(b));
    };var Mh = function Mh(a, b, c, d, e, f) {
      this.cf = a;this.lf = b;this.Ge = c;this.nc = d;this.sd = e;this.mf = !!f;this.gb = null;this.Ja = this.nc;if (this.sd < this.nc) throw Error("Proactive refresh lower bound greater than upper bound!");
    };Mh.prototype.start = function () {
      this.Ja = this.nc;Nh(this, !0);
    };
    var Oh = function Oh(a, b) {
      if (b) return a.Ja = a.nc, a.Ge();b = a.Ja;a.Ja *= 2;a.Ja > a.sd && (a.Ja = a.sd);return b;
    },
        Nh = function Nh(a, b) {
      a.stop();a.gb = ne(Oh(a, b)).then(function () {
        return a.mf ? C() : Bf();
      }).then(function () {
        return a.cf();
      }).then(function () {
        Nh(a, !0);
      }).f(function (b) {
        a.lf(b) && Nh(a, !1);
      });
    };Mh.prototype.stop = function () {
      this.gb && (this.gb.cancel(), this.gb = null);
    };var Uh = function Uh(a) {
      var b = {};b["facebook.com"] = Ph;b["google.com"] = Qh;b["github.com"] = Rh;b["twitter.com"] = Sh;var c = a && a.providerId;return c ? b[c] ? new b[c](a) : new Th(a) : null;
    },
        Th = function Th(a) {
      var b = vf(a.rawUserInfo || "{}");a = a.providerId;if (!a) throw Error("Invalid additional user info!");M(this, "profile", Kf(b || {}));M(this, "providerId", a);
    },
        Ph = function Ph(a) {
      Th.call(this, a);if ("facebook.com" != this.providerId) throw Error("Invalid provider id!");
    };r(Ph, Th);
    var Rh = function Rh(a) {
      Th.call(this, a);if ("github.com" != this.providerId) throw Error("Invalid provider id!");M(this, "username", this.profile && this.profile.login || null);
    };r(Rh, Th);var Qh = function Qh(a) {
      Th.call(this, a);if ("google.com" != this.providerId) throw Error("Invalid provider id!");
    };r(Qh, Th);var Sh = function Sh(a) {
      Th.call(this, a);if ("twitter.com" != this.providerId) throw Error("Invalid provider id!");M(this, "username", a.screenName || null);
    };r(Sh, Th);var Vh = function Vh(a, b, c, d) {
      this.Ze = a;this.ae = b;this.nf = c;this.Ob = d;this.S = {};Kh || (Kh = new Jh());a = Kh;try {
        var e;Xe() ? (Ah || (Ah = new zh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = Ah) : e = new a.Cd.K();this.Na = e;
      } catch (f) {
        this.Na = new th(), this.Ob = !0;
      }try {
        this.zc = new a.Cd.rd();
      } catch (f) {
        this.zc = new th();
      }this.pd = _q(this.ee, this);this.Y = {};
    },
        Wh,
        Xh = function Xh() {
      Wh || (Wh = new Vh("firebase", ":", !wf(J()) && mf() ? !0 : !1, sf()));return Wh;
    };h = Vh.prototype;
    h.P = function (a, b) {
      return this.Ze + this.ae + a.name + (b ? this.ae + b : "");
    };h.get = function (a, b) {
      return (a.K ? this.Na : this.zc).get(this.P(a, b));
    };h.remove = function (a, b) {
      b = this.P(a, b);a.K && !this.Ob && (this.Y[b] = null);return (a.K ? this.Na : this.zc).remove(b);
    };h.set = function (a, b, c) {
      var d = this.P(a, c),
          e = this,
          f = a.K ? this.Na : this.zc;return f.set(d, b).then(function () {
        return f.get(d);
      }).then(function (b) {
        a.K && !this.Ob && (e.Y[d] = b);
      });
    };
    h.addListener = function (a, b, c) {
      a = this.P(a, b);this.Ob || (this.Y[a] = l.localStorage.getItem(a));pa(this.S) && this.od();this.S[a] || (this.S[a] = []);this.S[a].push(c);
    };h.removeListener = function (a, b, c) {
      a = this.P(a, b);this.S[a] && (Za(this.S[a], function (a) {
        return a == c;
      }), 0 == this.S[a].length && delete this.S[a]);pa(this.S) && this.xc();
    };h.od = function () {
      this.Na.Wa(this.pd);this.Ob || Xe() || Yh(this);
    };
    var Yh = function Yh(a) {
      Zh(a);a.Yc = setInterval(function () {
        for (var b in a.S) {
          var c = l.localStorage.getItem(b),
              d = a.Y[b];c != d && (a.Y[b] = c, c = new Rb({ type: "storage", key: b, target: window, oldValue: d, newValue: c, ef: !0 }), a.ee(c));
        }
      }, 1E3);
    },
        Zh = function Zh(a) {
      a.Yc && (clearInterval(a.Yc), a.Yc = null);
    };Vh.prototype.xc = function () {
      this.Na.Qa(this.pd);Zh(this);
    };
    Vh.prototype.ee = function (a) {
      if (a && a.Fe) {
        var b = a.$a.key;"undefined" !== typeof a.$a.ef ? this.Na.Qa(this.pd) : Zh(this);if (this.nf) {
          var c = l.localStorage.getItem(b);a = a.$a.newValue;a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b));
        }this.Y[b] = l.localStorage.getItem(b);this.vd(b);
      } else x(a, _q(this.vd, this));
    };Vh.prototype.vd = function (a) {
      this.S[a] && x(this.S[a], function (a) {
        a();
      });
    };var $h = function $h(a, b) {
      this.u = a;this.i = b || Xh();
    },
        ai = { name: "authEvent", K: !0 },
        bi = function bi(a) {
      return a.i.get(ai, a.u).then(function (a) {
        return Rf(a);
      });
    };$h.prototype.Va = function (a) {
      this.i.addListener(ai, this.u, a);
    };$h.prototype.Nb = function (a) {
      this.i.removeListener(ai, this.u, a);
    };var ci = function ci(a) {
      this.i = a || Xh();
    },
        di = { name: "sessionId", K: !1 };ci.prototype.cc = function (a) {
      return this.i.get(di, a);
    };var ei = function ei(a, b, c, d, e, f) {
      this.v = a;this.j = b;this.B = c;this.Ca = d || null;this.fe = b + ":" + c;this.pf = new ci();this.Hd = new $h(this.fe);this.Uc = null;this.ka = [];this.Re = e || 500;this.gf = f || 2E3;this.zb = this.qc = null;
    },
        fi = function fi(a) {
      return new N("invalid-cordova-configuration", a);
    };
    ei.prototype.Ia = function () {
      return this.Wc ? this.Wc : this.Wc = kf().then(function () {
        if ("function" !== typeof L("universalLinks.subscribe", l)) throw fi("cordova-universal-links-plugin is not installed");if ("undefined" === typeof L("BuildInfo.packageName", l)) throw fi("cordova-plugin-buildinfo is not installed");if ("function" !== typeof L("cordova.plugins.browsertab.openUrl", l)) throw fi("cordova-plugin-browsertab is not installed");if ("function" !== typeof L("cordova.InAppBrowser.open", l)) throw fi("cordova-plugin-inappbrowser is not installed");
      }, function () {
        throw new N("cordova-not-ready");
      });
    };var gi = function gi() {
      for (var a = 20, b = []; 0 < a;) {
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      }return b.join("");
    },
        hi = function hi(a) {
      var b = new Eb();b.update(a);return cb(b.digest());
    };h = ei.prototype;h.Pb = function (a, b) {
      b(new N("operation-not-supported-in-this-environment"));return C();
    };h.Hb = function () {
      return D(new N("operation-not-supported-in-this-environment"));
    };h.ge = function () {
      return !1;
    };h.de = function () {
      return !0;
    };
    h.Ld = function () {
      return !0;
    };
    h.Ib = function (a, b, c) {
      if (this.qc) return D(new N("redirect-operation-pending"));var d = this,
          e = l.document,
          f = null,
          g = null,
          k = null,
          n = null;return this.qc = kd(C().then(function () {
        ng(b);return ii(d);
      }).then(function () {
        return ji(d, a, b, c);
      }).then(function () {
        return new A(function (a, b) {
          g = function g() {
            var b = L("cordova.plugins.browsertab.close", l);a();"function" === typeof b && b();d.zb && "function" === typeof d.zb.close && (d.zb.close(), d.zb = null);return !1;
          };d.Va(g);k = function k() {
            f || (f = ne(d.gf).then(function () {
              b(new N("redirect-cancelled-by-user"));
            }));
          };n = function n() {
            Af() && k();
          };e.addEventListener("resume", k, !1);J().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
        }).f(function (a) {
          return ki(d).then(function () {
            throw a;
          });
        });
      }), function () {
        k && e.removeEventListener("resume", k, !1);n && e.removeEventListener("visibilitychange", n, !1);f && f.cancel();g && d.Nb(g);d.qc = null;
      });
    };
    var ji = function ji(a, b, c, d) {
      var e = gi(),
          f = new O(b, d, null, e, new N("no-auth-event")),
          g = L("BuildInfo.packageName", l);if ("string" !== typeof g) throw new N("invalid-cordova-configuration");var k = L("BuildInfo.displayName", l),
          n = {};if (J().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;else if (J().toLowerCase().match(/android/)) n.apn = g;else return D(new N("operation-not-supported-in-this-environment"));k && (n.appDisplayName = k);e = hi(e);n.sessionId = e;var B = qh(a.v, a.j, a.B, b, c, null, d, a.Ca, n);return a.Ia().then(function () {
        var b = a.fe;return a.pf.i.set(ai, f.D(), b);
      }).then(function () {
        var b = L("cordova.plugins.browsertab.isAvailable", l);if ("function" !== typeof b) throw new N("invalid-cordova-configuration");var c = null;b(function (b) {
          if (b) {
            c = L("cordova.plugins.browsertab.openUrl", l);if ("function" !== typeof c) throw new N("invalid-cordova-configuration");c(B);
          } else {
            c = L("cordova.InAppBrowser.open", l);if ("function" !== typeof c) throw new N("invalid-cordova-configuration");b = c;var d;d = J();d = !(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
            a.zb = b(B, d ? "_blank" : "_system", "location=yes");
          }
        });
      });
    },
        li = function li(a, b) {
      for (var c = 0; c < a.ka.length; c++) {
        try {
          a.ka[c](b);
        } catch (d) {}
      }
    },
        ii = function ii(a) {
      a.Uc || (a.Uc = a.Ia().then(function () {
        return new A(function (b) {
          var c = function c(d) {
            b(d);a.Nb(c);return !1;
          };a.Va(c);mi(a);
        });
      }));return a.Uc;
    },
        ki = function ki(a) {
      var b = null;return bi(a.Hd).then(function (c) {
        b = c;c = a.Hd;return c.i.remove(ai, c.u);
      }).then(function () {
        return b;
      });
    },
        mi = function mi(a) {
      var b = L("universalLinks.subscribe", l);if ("function" !== typeof b) throw new N("invalid-cordova-configuration");
      var c = new O("unknown", null, null, null, new N("no-auth-event")),
          d = !1,
          e = ne(a.Re).then(function () {
        return ki(a).then(function () {
          d || li(a, c);
        });
      }),
          f = function f(b) {
        d = !0;e && e.cancel();ki(a).then(function (d) {
          var e = c;if (d && b && b.url) {
            var e = null,
                f;f = b.url;var g = Re(f),
                k = Pe(g, "link"),
                n = Pe(Re(k), "link"),
                g = Pe(g, "deep_link_id");f = Pe(Re(g), "link") || g || n || k || f;-1 != f.indexOf("/__/auth/callback") && (e = Re(f), e = vf(Pe(e, "firebaseError") || null), e = (e = "object" === typeof e ? Qf(e) : null) ? new O(d.ba, d.I, null, null, e) : new O(d.ba, d.I, f, d.cc()));
            e = e || c;
          }li(a, e);
        });
      },
          g = l.handleOpenURL;l.handleOpenURL = function (a) {
        0 == a.indexOf(L("BuildInfo.packageName", l) + "://") && f({ url: a });if ("function" === typeof g) try {
          g(a);
        } catch (n) {
          console.error(n);
        }
      };b(null, f);
    };ei.prototype.Va = function (a) {
      this.ka.push(a);ii(this).f(function () {});
    };ei.prototype.Nb = function (a) {
      Za(this.ka, function (b) {
        return b == a;
      });
    };var ni = function ni(a) {
      this.u = a;this.i = Xh();
    },
        oi = { name: "pendingRedirect", K: !1 },
        pi = function pi(a) {
      return a.i.set(oi, "pending", a.u);
    },
        qi = function qi(a) {
      return a.i.remove(oi, a.u);
    },
        ri = function ri(a) {
      return a.i.get(oi, a.u).then(function (a) {
        return "pending" == a;
      });
    };var S = function S(a, b, c) {
      this.v = a;this.j = b;this.B = c;this.Rb = [];this.eb = !1;this.Hc = _q(this.Rc, this);this.Oa = new si(this);this.dd = new ti(this);this.Eb = new ni(this.j + ":" + this.B);this.ya = {};this.ya.unknown = this.Oa;this.ya.signInViaRedirect = this.Oa;this.ya.linkViaRedirect = this.Oa;this.ya.reauthViaRedirect = this.Oa;this.ya.signInViaPopup = this.dd;this.ya.linkViaPopup = this.dd;this.ya.reauthViaPopup = this.dd;this.J = ui(this.v, this.j, this.B);
    },
        ui = function ui(a, b, c) {
      var d = firebase.SDK_VERSION || null;return jf() ? new ei(a, b, c, d) : new mh(a, b, c, d);
    };S.prototype.reset = function () {
      this.eb = !1;this.J.Nb(this.Hc);this.J = ui(this.v, this.j, this.B);
    };S.prototype.Ab = function () {
      var a = this;this.eb || (this.eb = !0, this.J.Va(this.Hc));var b = this.J;return this.J.Ia().f(function (c) {
        a.J == b && a.reset();throw c;
      });
    };var xi = function xi(a) {
      a.J.de() && a.Ab().f(function (b) {
        var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));vi(b) && a.Rc(c);
      });a.J.Ld() || wi(a.Oa);
    };
    S.prototype.subscribe = function (a) {
      Wa(this.Rb, a) || this.Rb.push(a);if (!this.eb) {
        var b = this;ri(this.Eb).then(function (a) {
          a ? qi(b.Eb).then(function () {
            b.Ab().f(function (a) {
              var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));vi(a) && b.Rc(c);
            });
          }) : xi(b);
        }).f(function () {
          xi(b);
        });
      }
    };S.prototype.unsubscribe = function (a) {
      Za(this.Rb, function (b) {
        return b == a;
      });
    };
    S.prototype.Rc = function (a) {
      if (!a) throw new N("invalid-auth-event");for (var b = !1, c = 0; c < this.Rb.length; c++) {
        var d = this.Rb[c];if (d.wd(a.ba, a.I)) {
          (b = this.ya[a.ba]) && b.Wd(a, d);b = !0;break;
        }
      }wi(this.Oa);return b;
    };var yi = new zf(2E3, 1E4),
        zi = new zf(3E4, 6E4);S.prototype.getRedirectResult = function () {
      return this.Oa.getRedirectResult();
    };S.prototype.Hb = function (a, b, c, d, e) {
      var f = this;return this.J.Hb(a, b, c, function () {
        f.eb || (f.eb = !0, f.J.Va(f.Hc));
      }, function () {
        f.reset();
      }, d, e);
    };
    var vi = function vi(a) {
      return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
    };S.prototype.Ib = function (a, b, c) {
      var d = this,
          e;return pi(this.Eb).then(function () {
        return d.J.Ib(a, b, c).f(function (a) {
          if (vi(a)) throw new N("operation-not-supported-in-this-environment");e = a;return qi(d.Eb).then(function () {
            throw e;
          });
        }).then(function () {
          return d.J.ge() ? new A(function () {}) : qi(d.Eb).then(function () {
            return d.getRedirectResult();
          }).then(function () {}).f(function () {});
        });
      });
    };
    S.prototype.Pb = function (a, b, c, d) {
      return this.J.Pb(c, function (c) {
        a.Ra(b, null, c, d);
      }, yi.get());
    };var Ai = {},
        Bi = function Bi(a, b, c) {
      var d = b + ":" + c;Ai[d] || (Ai[d] = new S(a, b, c));return Ai[d];
    },
        si = function si(a) {
      this.i = a;this.mb = null;this.Lb = [];this.Kb = [];this.kb = null;this.gd = !1;
    };si.prototype.reset = function () {
      this.mb = null;this.kb && (this.kb.cancel(), this.kb = null);
    };
    si.prototype.Wd = function (a, b) {
      if (!a) return D(new N("invalid-auth-event"));this.reset();this.gd = !0;var c = a.ba,
          d = a.I,
          e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
          f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;"unknown" != c || e || f ? a = a.O ? this.ed(a, b) : b.wb(c, d) ? this.fd(a, b) : D(new N("invalid-auth-event")) : (Ci(this, !1, null, null), a = C());return a;
    };var wi = function wi(a) {
      a.gd || (a.gd = !0, Ci(a, !1, null, null));
    };
    si.prototype.ed = function (a) {
      Ci(this, !0, null, a.getError());return C();
    };si.prototype.fd = function (a, b) {
      var c = this;b = b.wb(a.ba, a.I);var d = a.rb,
          e = a.cc(),
          f = !!a.ba.match(/Redirect$/);return b(d, e).then(function (a) {
        Ci(c, f, a, null);
      }).f(function (a) {
        Ci(c, f, null, a);
      });
    };
    var Di = function Di(a, b) {
      a.mb = function () {
        return D(b);
      };if (a.Kb.length) for (var c = 0; c < a.Kb.length; c++) {
        a.Kb[c](b);
      }
    },
        Ei = function Ei(a, b) {
      a.mb = function () {
        return C(b);
      };if (a.Lb.length) for (var c = 0; c < a.Lb.length; c++) {
        a.Lb[c](b);
      }
    },
        Ci = function Ci(a, b, c, d) {
      b ? d ? Di(a, d) : Ei(a, c) : Ei(a, { user: null });a.Lb = [];a.Kb = [];
    };si.prototype.getRedirectResult = function () {
      var a = this;return new A(function (b, c) {
        a.mb ? a.mb().then(b, c) : (a.Lb.push(b), a.Kb.push(c), Fi(a));
      });
    };
    var Fi = function Fi(a) {
      var b = new N("timeout");a.kb && a.kb.cancel();a.kb = ne(zi.get()).then(function () {
        a.mb || Ci(a, !0, null, b);
      });
    },
        ti = function ti(a) {
      this.i = a;
    };ti.prototype.Wd = function (a, b) {
      if (!a) return D(new N("invalid-auth-event"));var c = a.ba,
          d = a.I;return a.O ? this.ed(a, b) : b.wb(c, d) ? this.fd(a, b) : D(new N("invalid-auth-event"));
    };ti.prototype.ed = function (a, b) {
      b.Ra(a.ba, null, a.getError(), a.I);return C();
    };
    ti.prototype.fd = function (a, b) {
      var c = a.I,
          d = a.ba,
          e = b.wb(d, c),
          f = a.rb;a = a.cc();return e(f, a).then(function (a) {
        b.Ra(d, a, null, c);
      }).f(function (a) {
        b.Ra(d, null, a, c);
      });
    };var Gi = function Gi(a) {
      this.g = a;this.za = this.W = null;this.Ea = 0;
    };Gi.prototype.D = function () {
      return { apiKey: this.g.j, refreshToken: this.W, accessToken: this.za, expirationTime: this.Ea };
    };
    var Ii = function Ii(a, b) {
      var c = b.idToken,
          d = b.refreshToken;b = Hi(b.expiresIn);a.za = c;a.Ea = b;a.W = d;
    },
        Hi = function Hi(a) {
      return la() + 1E3 * parseInt(a, 10);
    },
        Ji = function Ji(a, b) {
      return zg(a.g, b).then(function (b) {
        a.za = b.access_token;a.Ea = Hi(b.expires_in);a.W = b.refresh_token;return { accessToken: a.za, expirationTime: a.Ea, refreshToken: a.W };
      }).f(function (b) {
        "auth/user-token-expired" == b.code && (a.W = null);throw b;
      });
    };
    Gi.prototype.getToken = function (a) {
      a = !!a;return this.za && !this.W ? D(new N("user-token-expired")) : a || !this.za || la() > this.Ea - 3E4 ? this.W ? Ji(this, { grant_type: "refresh_token", refresh_token: this.W }) : C(null) : C({ accessToken: this.za, expirationTime: this.Ea, refreshToken: this.W });
    };var Ki = function Ki(a, b, c, d, e) {
      Gf(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, providerId: b });
    },
        Li = function Li(a, b) {
      Ib.call(this, a);for (var c in b) {
        this[c] = b[c];
      }
    };r(Li, Ib);
    var T = function T(a, b, c) {
      this.$ = [];this.j = a.apiKey;this.B = a.appName;this.v = a.authDomain || null;a = firebase.SDK_VERSION ? of(firebase.SDK_VERSION) : null;this.g = new R(this.j, null, a);this.ga = new Gi(this.g);Mi(this, b.idToken);Ii(this.ga, b);M(this, "refreshToken", this.ga.W);Ni(this, c || {});je.call(this);this.rc = !1;this.v && rf() && (this.m = Bi(this.v, this.j, this.B));this.wc = [];this.ia = null;this.ib = Oi(this);this.sb = _q(this.Sc, this);
    };r(T, je);T.prototype.Sc = function () {
      this.ib.gb && (this.ib.stop(), this.ib.start());
    };
    var Oi = function Oi(a) {
      return new Mh(function () {
        return a.getToken(!0);
      }, function (a) {
        return a && "auth/network-request-failed" == a.code ? !0 : !1;
      }, function () {
        var b = a.ga.Ea - la() - 3E5;return 0 < b ? b : 0;
      }, 3E4, 96E4, !1);
    },
        Pi = function Pi(a) {
      a.Bd || a.ib.gb || (a.ib.start(), dc(a, "tokenChanged", a.sb), Vb(a, "tokenChanged", a.sb));
    },
        Qi = function Qi(a) {
      dc(a, "tokenChanged", a.sb);a.ib.stop();
    },
        Mi = function Mi(a, b) {
      a.Pd = b;M(a, "_lat", b);
    },
        Ri = function Ri(a, b) {
      Za(a.wc, function (a) {
        return a == b;
      });
    },
        Si = function Si(a) {
      for (var b = [], c = 0; c < a.wc.length; c++) {
        b.push(a.wc[c](a));
      }return hd(b).then(function () {
        return a;
      });
    },
        Ti = function Ti(a) {
      a.m && !a.rc && (a.rc = !0, a.m.subscribe(a));
    },
        Ni = function Ni(a, b) {
      Gf(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || !1, isAnonymous: b.isAnonymous || !1, providerData: [] });
    };M(T.prototype, "providerId", "firebase");
    var Ui = function Ui() {},
        Vi = function Vi(a) {
      return C().then(function () {
        if (a.Bd) throw new N("app-deleted");
      });
    },
        Wi = function Wi(a) {
      return Sa(a.providerData, function (a) {
        return a.providerId;
      });
    },
        Yi = function Yi(a, b) {
      b && (Xi(a, b.providerId), a.providerData.push(b));
    },
        Xi = function Xi(a, b) {
      Za(a.providerData, function (a) {
        return a.providerId == b;
      });
    },
        Zi = function Zi(a, b, c) {
      ("uid" != b || c) && a.hasOwnProperty(b) && M(a, b, c);
    };
    T.prototype.copy = function (a) {
      var b = this;b != a && (Gf(this, { uid: a.uid, displayName: a.displayName, photoURL: a.photoURL, email: a.email, emailVerified: a.emailVerified, isAnonymous: a.isAnonymous, providerData: [] }), x(a.providerData, function (a) {
        Yi(b, a);
      }), this.ga = a.ga, M(this, "refreshToken", this.ga.W));
    };T.prototype.reload = function () {
      var a = this;return this.c(Vi(this).then(function () {
        return $i(a).then(function () {
          return Si(a);
        }).then(Ui);
      }));
    };
    var $i = function $i(a) {
      return a.getToken().then(function (b) {
        var c = a.isAnonymous;return aj(a, b).then(function () {
          c || Zi(a, "isAnonymous", !1);return b;
        });
      });
    };T.prototype.getToken = function (a) {
      var b = this;return this.c(Vi(this).then(function () {
        return b.ga.getToken(a);
      }).then(function (a) {
        if (!a) throw new N("internal-error");a.accessToken != b.Pd && (Mi(b, a.accessToken), b.Ka());Zi(b, "refreshToken", a.refreshToken);return a.accessToken;
      }));
    };
    var bj = function bj(a, b) {
      b.idToken && a.Pd != b.idToken && (Ii(a.ga, b), a.Ka(), Mi(a, b.idToken), Zi(a, "refreshToken", a.ga.W));
    };T.prototype.Ka = function () {
      this.dispatchEvent(new Li("tokenChanged"));
    };var aj = function aj(a, b) {
      return Q(a.g, $g, { idToken: b }).then(_q(a.df, a));
    };
    T.prototype.df = function (a) {
      a = a.users;if (!a || !a.length) throw new N("internal-error");a = a[0];Ni(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified });for (var b = cj(a), c = 0; c < b.length; c++) {
        Yi(this, b[c]);
      }Zi(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    };
    var cj = function cj(a) {
      return (a = a.providerUserInfo) && a.length ? Sa(a, function (a) {
        return new Ki(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl);
      }) : [];
    },
        ej = function ej(a, b) {
      var c = null;return a.c(b.Sd(a.g, a.uid).then(function (b) {
        bj(a, b);c = dj(a, b, "reauthenticate");a.ia = null;return a.reload();
      }).then(function () {
        return c;
      }), !0);
    };T.prototype.reauthenticate = function (a) {
      return fj(this, a);
    };
    var fj = function fj(a, b) {
      return ej(a, b).then(function () {});
    },
        gj = function gj(a, b) {
      return $i(a).then(function () {
        if (Wa(Wi(a), b)) return Si(a).then(function () {
          throw new N("provider-already-linked");
        });
      });
    },
        ij = function ij(a, b) {
      var c = null;return a.c(gj(a, b.providerId).then(function () {
        return a.getToken();
      }).then(function (c) {
        return b.Rd(a.g, c);
      }).then(function (b) {
        c = dj(a, b, "link");return hj(a, b);
      }).then(function () {
        return c;
      }));
    };T.prototype.link = function (a) {
      return jj(this, a);
    };
    var jj = function jj(a, b) {
      return ij(a, b).then(function (a) {
        return a.user;
      });
    },
        dj = function dj(a, b, c) {
      var d = mg(b);b = Uh(b);return Hf({ user: a, credential: d, additionalUserInfo: b, operationType: c });
    },
        hj = function hj(a, b) {
      bj(a, b);return a.reload().then(function () {
        return a;
      });
    };h = T.prototype;h.updateEmail = function (a) {
      var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updateEmail(c, a);
      }).then(function (a) {
        bj(b, a);return b.reload();
      }));
    };
    h.updatePassword = function (a) {
      var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updatePassword(c, a);
      }).then(function (a) {
        bj(b, a);return b.reload();
      }));
    };h.updateProfile = function (a) {
      if (void 0 === a.displayName && void 0 === a.photoURL) return Vi(this);var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updateProfile(c, { displayName: a.displayName, photoUrl: a.photoURL });
      }).then(function (a) {
        bj(b, a);Zi(b, "displayName", a.displayName || null);Zi(b, "photoURL", a.photoUrl || null);return Si(b);
      }).then(Ui));
    };
    h.unlink = function (a) {
      var b = this;return this.c($i(this).then(function (c) {
        return Wa(Wi(b), a) ? Og(b.g, c, [a]).then(function (a) {
          var c = {};x(a.providerUserInfo || [], function (a) {
            c[a.providerId] = !0;
          });x(Wi(b), function (a) {
            c[a] || Xi(b, a);
          });return Si(b);
        }) : Si(b).then(function () {
          throw new N("no-such-provider");
        });
      }));
    };
    h["delete"] = function () {
      var a = this;return this.c(this.getToken().then(function (b) {
        return Q(a.g, Zg, { idToken: b });
      }).then(function () {
        a.dispatchEvent(new Li("userDeleted"));
      })).then(function () {
        for (var b = 0; b < a.$.length; b++) {
          a.$[b].cancel("app-deleted");
        }a.$ = [];a.Bd = !0;Qi(a);M(a, "refreshToken", null);a.m && a.m.unsubscribe(a);
      });
    };
    h.wd = function (a, b) {
      return "linkViaPopup" == a && (this.aa || null) == b && this.Z || "reauthViaPopup" == a && (this.aa || null) == b && this.Z || "linkViaRedirect" == a && (this.wa || null) == b || "reauthViaRedirect" == a && (this.wa || null) == b ? !0 : !1;
    };h.Ra = function (a, b, c, d) {
      "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.aa || null) || (c && this.Ma ? this.Ma(c) : b && !c && this.Z && this.Z(b), this.C && (this.C.cancel(), this.C = null), delete this.Z, delete this.Ma);
    };
    h.wb = function (a, b) {
      return "linkViaPopup" == a && b == (this.aa || null) ? _q(this.Ed, this) : "reauthViaPopup" == a && b == (this.aa || null) ? _q(this.Fd, this) : "linkViaRedirect" == a && (this.wa || null) == b ? _q(this.Ed, this) : "reauthViaRedirect" == a && (this.wa || null) == b ? _q(this.Fd, this) : null;
    };h.ac = function () {
      return qf(this.uid + ":::");
    };var lj = function lj(a, b) {
      return kj(a, b, function () {
        return gj(a, b.providerId).then(function () {
          return Si(a);
        });
      });
    };
    T.prototype.linkWithPopup = function (a) {
      return lj(this, a).then(function (a) {
        return a ? Hf({ user: a.user, credential: a.credential }) : a;
      });
    };
    var kj = function kj(a, b, c) {
      if (!rf()) return D(new N("operation-not-supported-in-this-environment"));if (a.ia) return D(a.ia);var d = Of(b.providerId),
          e = a.ac(),
          f = null;(!sf() || mf()) && a.v && b.isOAuthProvider && (f = qh(a.v, a.j, a.B, "linkViaPopup", b, null, e, firebase.SDK_VERSION || null));var g = ef(f, d && d.Gb, d && d.Fb);c = c().then(function () {
        mj(a);return a.getToken().then(function () {});
      }).then(function () {
        return a.m.Hb(g, "linkViaPopup", b, e, !!f);
      }).then(function () {
        return new A(function (b, c) {
          a.Ra("linkViaPopup", null, new N("cancelled-popup-request"), a.aa || null);a.Z = b;a.Ma = c;a.aa = e;a.C = a.m.Pb(a, "linkViaPopup", g, e);
        });
      }).then(function (a) {
        g && df(g);return a;
      }).f(function (a) {
        g && df(g);throw a;
      });return a.c(c, !1);
    };T.prototype.linkWithRedirect = function (a) {
      var b = this;return nj(this, a, function () {
        return gj(b, a.providerId);
      });
    };
    var nj = function nj(a, b, c) {
      if (!rf()) return D(new N("operation-not-supported-in-this-environment"));if (a.ia) return D(a.ia);var d = null,
          e = a.ac();c = c().then(function () {
        mj(a);return a.getToken().then(function () {});
      }).then(function () {
        a.wa = e;return Si(a);
      }).then(function (b) {
        a.Pa && (b = a.Pa, b = b.i.set(oj, a.D(), b.u));return b;
      }).then(function () {
        return a.m.Ib("linkViaRedirect", b, e);
      }).f(function (b) {
        d = b;if (a.Pa) return pj(a.Pa);throw d;
      }).then(function () {
        if (d) throw d;
      });return a.c(c, !1);
    },
        mj = function mj(a) {
      if (!a.m || !a.rc) {
        if (a.m && !a.rc) throw new N("internal-error");throw new N("auth-domain-config-required");
      }
    };T.prototype.Ed = function (a, b) {
      var c = this;this.C && (this.C.cancel(), this.C = null);var d = null,
          e = this.getToken().then(function (d) {
        return Yf(c.g, { requestUri: a, sessionId: b, idToken: d });
      }).then(function (a) {
        d = dj(c, a, "link");return hj(c, a);
      }).then(function () {
        return d;
      });return this.c(e);
    };
    T.prototype.Fd = function (a, b) {
      var c = this;this.C && (this.C.cancel(), this.C = null);var d = null,
          e = C().then(function () {
        return Uf(Zf(c.g, { requestUri: a, sessionId: b }), c.uid);
      }).then(function (a) {
        d = dj(c, a, "reauthenticate");bj(c, a);c.ia = null;return c.reload();
      }).then(function () {
        return d;
      });return this.c(e, !0);
    };T.prototype.sendEmailVerification = function () {
      var a = this;return this.c(this.getToken().then(function (b) {
        return a.g.sendEmailVerification(b);
      }).then(function (b) {
        if (a.email != b) return a.reload();
      }).then(function () {}));
    };
    T.prototype.c = function (a, b) {
      var c = this,
          d = qj(this, a, b);this.$.push(d);kd(d, function () {
        Ya(c.$, d);
      });return d;
    };var qj = function qj(a, b, c) {
      return a.ia && !c ? (b.cancel(), D(a.ia)) : b.f(function (b) {
        !b || "auth/user-disabled" != b.code && "auth/user-token-expired" != b.code || (a.ia || a.dispatchEvent(new Li("userInvalidated")), a.ia = b);throw b;
      });
    };T.prototype.toJSON = function () {
      return this.D();
    };
    T.prototype.D = function () {
      var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.j, appName: this.B, authDomain: this.v, stsTokenManager: this.ga.D(), redirectEventId: this.wa || null };x(this.providerData, function (b) {
        a.providerData.push(If(b));
      });return a;
    };
    var rj = function rj(a) {
      if (!a.apiKey) return null;var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName },
          c = {};if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - la()) / 1E3;else return null;var d = new T(b, c, a);a.providerData && x(a.providerData, function (a) {
        a && Yi(d, Hf(a));
      });a.redirectEventId && (d.wa = a.redirectEventId);return d;
    },
        sj = function sj(a, b, c) {
      var d = new T(a, b);c && (d.Pa = c);return d.reload().then(function () {
        return d;
      });
    };var tj = function tj(a) {
      this.u = a;this.i = Xh();
    },
        oj = { name: "redirectUser", K: !1 },
        pj = function pj(a) {
      return a.i.remove(oj, a.u);
    },
        uj = function uj(a, b) {
      return a.i.get(oj, a.u).then(function (a) {
        a && b && (a.authDomain = b);return rj(a || {});
      });
    };var vj = function vj(a) {
      this.u = a;this.i = Xh();
    },
        wj = { name: "authUser", K: !0 },
        xj = function xj(a, b) {
      return a.i.set(wj, b.D(), a.u);
    },
        yj = function yj(a) {
      return a.i.remove(wj, a.u);
    },
        zj = function zj(a, b) {
      return a.i.get(wj, a.u).then(function (a) {
        a && b && (a.authDomain = b);return rj(a || {});
      });
    };var V = function V(a) {
      this.Ya = !1;M(this, "app", a);if (U(this).options && U(this).options.apiKey) a = firebase.SDK_VERSION ? of(firebase.SDK_VERSION) : null, this.g = new R(U(this).options && U(this).options.apiKey, null, a);else throw new N("invalid-api-key");this.$ = [];this.Aa = [];this.af = firebase.INTERNAL.createSubscribe(_q(this.Pe, this));Aj(this, null);this.ra = new vj(U(this).options.apiKey + ":" + U(this).name);this.lb = new tj(U(this).options.apiKey + ":" + U(this).name);this.Wb = this.c(Bj(this));this.xa = this.c(Cj(this));this.Xc = !1;this.Qc = _q(this.vf, this);this.je = _q(this.bb, this);this.sb = _q(this.Sc, this);this.he = _q(this.Ke, this);this.ie = _q(this.Le, this);Dj(this);this.INTERNAL = {};this.INTERNAL["delete"] = _q(this["delete"], this);this.Fa = 0;
    };V.prototype.toJSON = function () {
      return { apiKey: U(this).options.apiKey, authDomain: U(this).options.authDomain, appName: U(this).name, currentUser: W(this) && W(this).D() };
    };
    var Ej = function Ej(a) {
      return a.ye || D(new N("auth-domain-config-required"));
    },
        Dj = function Dj(a) {
      var b = U(a).options.authDomain,
          c = U(a).options.apiKey;b && rf() && (a.ye = a.Wb.then(function () {
        if (!a.Ya) return a.m = Bi(b, c, U(a).name), a.m.subscribe(a), W(a) && Ti(W(a)), a.Mb && (Ti(a.Mb), a.Mb = null), a.m;
      }));
    };h = V.prototype;h.wd = function (a, b) {
      switch (a) {case "unknown":case "signInViaRedirect":
          return !0;case "signInViaPopup":
          return this.aa == b && !!this.Z;default:
          return !1;}
    };
    h.Ra = function (a, b, c, d) {
      "signInViaPopup" == a && this.aa == d && (c && this.Ma ? this.Ma(c) : b && !c && this.Z && this.Z(b), this.C && (this.C.cancel(), this.C = null), delete this.Z, delete this.Ma);
    };h.wb = function (a, b) {
      return "signInViaRedirect" == a || "signInViaPopup" == a && this.aa == b && this.Z ? _q(this.Ae, this) : null;
    };
    h.Ae = function (a, b) {
      var c = this;a = { requestUri: a, sessionId: b };this.C && (this.C.cancel(), this.C = null);var d = null,
          e = null,
          f = Wf(c.g, a).then(function (a) {
        d = mg(a);e = Uh(a);return a;
      });a = c.Wb.then(function () {
        return f;
      }).then(function (a) {
        return Fj(c, a);
      }).then(function () {
        return Hf({ user: W(c), credential: d, additionalUserInfo: e, operationType: "signIn" });
      });return this.c(a);
    };h.ac = function () {
      return qf();
    };
    var Gj = function Gj(a, b) {
      if (!rf()) return D(new N("operation-not-supported-in-this-environment"));var c = Of(b.providerId),
          d = a.ac(),
          e = null;(!sf() || mf()) && U(a).options.authDomain && b.isOAuthProvider && (e = qh(U(a).options.authDomain, U(a).options.apiKey, U(a).name, "signInViaPopup", b, null, d, firebase.SDK_VERSION || null));var f = ef(e, c && c.Gb, c && c.Fb),
          c = Ej(a).then(function (a) {
        return a.Hb(f, "signInViaPopup", b, d, !!e);
      }).then(function () {
        return new A(function (b, c) {
          a.Ra("signInViaPopup", null, new N("cancelled-popup-request"), a.aa);a.Z = b;a.Ma = c;a.aa = d;a.C = a.m.Pb(a, "signInViaPopup", f, d);
        });
      }).then(function (a) {
        f && df(f);return a;
      }).f(function (a) {
        f && df(f);throw a;
      });return a.c(c);
    };V.prototype.signInWithPopup = function (a) {
      return Gj(this, a).then(function (a) {
        return a ? Hf({ user: a.user, credential: a.credential }) : a;
      });
    };V.prototype.getRedirectResult = function () {
      return Hj(this).then(function (a) {
        return a ? Hf({ user: a.user, credential: a.credential }) : a;
      });
    };
    V.prototype.signInWithRedirect = function (a) {
      if (!rf()) return D(new N("operation-not-supported-in-this-environment"));var b = this,
          c = Ej(this).then(function () {
        return b.m.Ib("signInViaRedirect", a);
      });return this.c(c);
    };
    var Hj = function Hj(a) {
      if (!rf()) return D(new N("operation-not-supported-in-this-environment"));var b = Ej(a).then(function () {
        return a.m.getRedirectResult();
      });return a.c(b);
    },
        Fj = function Fj(a, b) {
      var c = {};c.apiKey = U(a).options.apiKey;c.authDomain = U(a).options.authDomain;c.appName = U(a).name;return a.Wb.then(function () {
        return sj(c, b, a.lb);
      }).then(function (b) {
        if (W(a) && b.uid == W(a).uid) return W(a).copy(b), a.bb(b);Aj(a, b);Ti(b);return a.bb(b);
      }).then(function () {
        a.Ka();
      });
    },
        Aj = function Aj(a, b) {
      W(a) && (Ri(W(a), a.je), dc(W(a), "tokenChanged", a.sb), dc(W(a), "userDeleted", a.he), dc(W(a), "userInvalidated", a.ie), Qi(W(a)));b && (b.wc.push(a.je), Vb(b, "tokenChanged", a.sb), Vb(b, "userDeleted", a.he), Vb(b, "userInvalidated", a.ie), 0 < a.Fa && Pi(b));M(a, "currentUser", b);
    };V.prototype.signOut = function () {
      var a = this,
          b = this.xa.then(function () {
        if (!W(a)) return C();Aj(a, null);return yj(a.ra).then(function () {
          a.Ka();
        });
      });return this.c(b);
    };
    var Ij = function Ij(a) {
      var b = uj(a.lb, U(a).options.authDomain).then(function (b) {
        if (a.Mb = b) b.Pa = a.lb;return pj(a.lb);
      });return a.c(b);
    },
        Bj = function Bj(a) {
      var b = U(a).options.authDomain,
          c = Ij(a).then(function () {
        return zj(a.ra, b);
      }).then(function (b) {
        return b ? (b.Pa = a.lb, a.Mb && (a.Mb.wa || null) == (b.wa || null) ? b : b.reload().then(function () {
          return xj(a.ra, b).then(function () {
            return b;
          });
        }).f(function (c) {
          return "auth/network-request-failed" == c.code ? b : yj(a.ra);
        })) : null;
      }).then(function (b) {
        Aj(a, b || null);
      });return a.c(c);
    },
        Cj = function Cj(a) {
      return a.Wb.then(function () {
        return a.getRedirectResult();
      }).f(function () {}).then(function () {
        if (!a.Ya) return a.Qc();
      }).f(function () {}).then(function () {
        if (!a.Ya) {
          a.Xc = !0;var b = a.ra;b.i.addListener(wj, b.u, a.Qc);
        }
      });
    };h = V.prototype;h.vf = function () {
      var a = this;return zj(this.ra, U(this).options.authDomain).then(function (b) {
        if (!a.Ya) {
          var c;if (c = W(a) && b) {
            c = W(a).uid;var d = b.uid;c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
          }if (c) return W(a).copy(b), W(a).getToken();if (W(a) || b) Aj(a, b), b && (Ti(b), b.Pa = a.lb), a.m && a.m.subscribe(a), a.Ka();
        }
      });
    };h.bb = function (a) {
      return xj(this.ra, a);
    };h.Sc = function () {
      this.Ka();this.bb(W(this));
    };h.Ke = function () {
      this.signOut();
    };
    h.Le = function () {
      this.signOut();
    };var Jj = function Jj(a, b) {
      var c = null,
          d = null;return a.c(b.then(function (b) {
        c = mg(b);d = Uh(b);return Fj(a, b);
      }).then(function () {
        return Hf({ user: W(a), credential: c, additionalUserInfo: d, operationType: "signIn" });
      }));
    };h = V.prototype;h.Pe = function (a) {
      var b = this;this.addAuthTokenListener(function () {
        a.next(W(b));
      });
    };h.onAuthStateChanged = function (a, b, c) {
      var d = this;this.Xc && firebase.Promise.resolve().then(function () {
        p(a) ? a(W(d)) : p(a.next) && a.next(W(d));
      });return this.af(a, b, c);
    };
    h.getToken = function (a) {
      var b = this,
          c = this.xa.then(function () {
        return W(b) ? W(b).getToken(a).then(function (a) {
          return { accessToken: a };
        }) : null;
      });return this.c(c);
    };h.signInWithCustomToken = function (a) {
      var b = this;return this.xa.then(function () {
        return Jj(b, Q(b.g, ah, { token: a }));
      }).then(function (a) {
        a = a.user;Zi(a, "isAnonymous", !1);return b.bb(a);
      }).then(function () {
        return W(b);
      });
    };h.signInWithEmailAndPassword = function (a, b) {
      var c = this;return this.xa.then(function () {
        return Jj(c, Q(c.g, jg, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };
    h.createUserWithEmailAndPassword = function (a, b) {
      var c = this;return this.xa.then(function () {
        return Jj(c, Q(c.g, Yg, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };h.signInWithCredential = function (a) {
      return Kj(this, a).then(function (a) {
        return a.user;
      });
    };var Kj = function Kj(a, b) {
      return a.xa.then(function () {
        return Jj(a, b.bc(a.g));
      });
    };
    V.prototype.signInAnonymously = function () {
      var a = W(this),
          b = this;return a && a.isAnonymous ? C(a) : this.xa.then(function () {
        return Jj(b, b.g.signInAnonymously());
      }).then(function (a) {
        a = a.user;Zi(a, "isAnonymous", !0);return b.bb(a);
      }).then(function () {
        return W(b);
      });
    };var U = function U(a) {
      return a.app;
    },
        W = function W(a) {
      return a.currentUser;
    };h = V.prototype;h.getUid = function () {
      return W(this) && W(this).uid || null;
    };h.Ka = function () {
      if (this.Xc) for (var a = 0; a < this.Aa.length; a++) {
        if (this.Aa[a]) this.Aa[a](W(this) && W(this)._lat || null);
      }
    };
    h.se = function (a) {
      this.addAuthTokenListener(a);this.Fa++;0 < this.Fa && W(this) && Pi(W(this));
    };h.hf = function (a) {
      var b = this;x(this.Aa, function (c) {
        c == a && b.Fa--;
      });0 > this.Fa && (this.Fa = 0);0 == this.Fa && W(this) && Qi(W(this));this.removeAuthTokenListener(a);
    };h.addAuthTokenListener = function (a) {
      var b = this;this.Aa.push(a);this.c(this.xa.then(function () {
        b.Ya || Wa(b.Aa, a) && a(W(b) && W(b)._lat || null);
      }));
    };h.removeAuthTokenListener = function (a) {
      Za(this.Aa, function (b) {
        return b == a;
      });
    };
    h["delete"] = function () {
      this.Ya = !0;for (var a = 0; a < this.$.length; a++) {
        this.$[a].cancel("app-deleted");
      }this.$ = [];this.ra && (a = this.ra, a.i.removeListener(wj, a.u, this.Qc));this.m && this.m.unsubscribe(this);return firebase.Promise.resolve();
    };h.c = function (a) {
      var b = this;this.$.push(a);kd(a, function () {
        Ya(b.$, a);
      });return a;
    };h.fetchProvidersForEmail = function (a) {
      return this.c(Eg(this.g, a));
    };h.verifyPasswordResetCode = function (a) {
      return this.checkActionCode(a).then(function (a) {
        return a.data.email;
      });
    };
    h.confirmPasswordReset = function (a, b) {
      return this.c(this.g.confirmPasswordReset(a, b).then(function () {}));
    };h.checkActionCode = function (a) {
      return this.c(this.g.checkActionCode(a).then(function (a) {
        return new Lh(a);
      }));
    };h.applyActionCode = function (a) {
      return this.c(this.g.applyActionCode(a).then(function () {}));
    };h.sendPasswordResetEmail = function (a) {
      return this.c(this.g.sendPasswordResetEmail(a).then(function () {}));
    };var Lj = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
        X = function X(a, b) {
      return { name: a || "", ha: "a valid string", optional: !!b, ja: m };
    },
        Mj = function Mj(a) {
      return { name: a || "", ha: "a valid object", optional: !1, ja: ha };
    },
        Nj = function Nj(a, b) {
      return { name: a || "", ha: "a function", optional: !!b, ja: p };
    },
        Oj = function Oj() {
      return { name: "", ha: "null", optional: !1, ja: da };
    },
        Pj = function Pj() {
      return { name: "credential", ha: "a valid credential", optional: !1, ja: function ja(a) {
          return !(!a || !a.bc);
        } };
    },
        Qj = function Qj() {
      return { name: "authProvider",
        ha: "a valid Auth provider", optional: !1, ja: function ja(a) {
          return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
        } };
    },
        Rj = function Rj(a, b, c, d) {
      return { name: c || "", ha: a.ha + " or " + b.ha, optional: !!d, ja: function ja(c) {
          return a.ja(c) || b.ja(c);
        } };
    };var Y = function Y(a, b) {
      for (var c in b) {
        var d = b[c].name;a[d] = Sj(d, a[c], b[c].a);
      }
    },
        Z = function Z(a, b, c, d) {
      a[b] = Sj(b, c, d);
    },
        Sj = function Sj(a, b, c) {
      if (!c) return b;var d = Tj(a);a = function a() {
        var a = Array.prototype.slice.call(arguments),
            e;a: {
          e = Array.prototype.slice.call(a);var k;k = 0;for (var n = !1, B = 0; B < c.length; B++) {
            if (c[B].optional) n = !0;else {
              if (n) throw new N("internal-error", "Argument validator encountered a required argument after an optional argument.");k++;
            }
          }n = c.length;if (e.length < k || n < e.length) e = "Expected " + (k == n ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + n + " arguments") + " but got " + e.length + ".";else {
            for (k = 0; k < e.length; k++) {
              if (n = c[k].optional && void 0 === e[k], !c[k].ja(e[k]) && !n) {
                e = c[k];if (0 > k || k >= Lj.length) throw new N("internal-error", "Argument validator received an unsupported number of arguments.");e = Lj[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.ha + ".";break a;
              }
            }e = null;
          }
        }if (e) throw new N("argument-error", d + " failed: " + e);return b.apply(this, a);
      };for (var e in b) {
        a[e] = b[e];
      }for (e in b.prototype) {
        a.prototype[e] = b.prototype[e];
      }return a;
    },
        Tj = function Tj(a) {
      a = a.split(".");return a[a.length - 1];
    };Y(V.prototype, { applyActionCode: { name: "applyActionCode", a: [X("code")] }, checkActionCode: { name: "checkActionCode", a: [X("code")] }, confirmPasswordReset: { name: "confirmPasswordReset", a: [X("code"), X("newPassword")] }, createUserWithEmailAndPassword: { name: "createUserWithEmailAndPassword", a: [X("email"), X("password")] }, fetchProvidersForEmail: { name: "fetchProvidersForEmail", a: [X("email")] }, getRedirectResult: { name: "getRedirectResult", a: [] }, onAuthStateChanged: { name: "onAuthStateChanged", a: [Rj(Mj(), Nj(), "nextOrObserver"), Nj("opt_error", !0), Nj("opt_completed", !0)] }, sendPasswordResetEmail: { name: "sendPasswordResetEmail", a: [X("email")] }, signInAnonymously: { name: "signInAnonymously", a: [] }, signInWithCredential: { name: "signInWithCredential", a: [Pj()] }, signInWithCustomToken: { name: "signInWithCustomToken", a: [X("token")] }, signInWithEmailAndPassword: { name: "signInWithEmailAndPassword", a: [X("email"), X("password")] }, signInWithPopup: { name: "signInWithPopup", a: [Qj()] }, signInWithRedirect: { name: "signInWithRedirect", a: [Qj()] }, signOut: { name: "signOut",
        a: [] }, toJSON: { name: "toJSON", a: [X(null, !0)] }, verifyPasswordResetCode: { name: "verifyPasswordResetCode", a: [X("code")] } });
    Y(T.prototype, { "delete": { name: "delete", a: [] }, getToken: { name: "getToken", a: [{ name: "opt_forceRefresh", ha: "a boolean", optional: !0, ja: function ja(a) {
            return "boolean" == typeof a;
          } }] }, link: { name: "link", a: [Pj()] }, linkWithPopup: { name: "linkWithPopup", a: [Qj()] }, linkWithRedirect: { name: "linkWithRedirect", a: [Qj()] }, reauthenticate: { name: "reauthenticate", a: [Pj()] }, reload: { name: "reload", a: [] }, sendEmailVerification: { name: "sendEmailVerification", a: [] }, toJSON: { name: "toJSON", a: [X(null, !0)] }, unlink: { name: "unlink", a: [X("provider")] },
      updateEmail: { name: "updateEmail", a: [X("email")] }, updatePassword: { name: "updatePassword", a: [X("password")] }, updateProfile: { name: "updateProfile", a: [Mj("profile")] } });Y(A.prototype, { f: { name: "catch" }, then: { name: "then" } });Z(lg, "credential", function (a, b) {
      return new ig(a, b);
    }, [X("email"), X("password")]);Y(ag.prototype, { addScope: { name: "addScope", a: [X("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Mj("customOAuthParameters")] } });Z(ag, "credential", bg, [Rj(X(), Mj(), "token")]);
    Y(cg.prototype, { addScope: { name: "addScope", a: [X("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Mj("customOAuthParameters")] } });Z(cg, "credential", dg, [Rj(X(), Mj(), "token")]);Y(eg.prototype, { addScope: { name: "addScope", a: [X("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Mj("customOAuthParameters")] } });Z(eg, "credential", fg, [Rj(X(), Oj(), "idToken", !0), Rj(X(), Oj(), "accessToken", !0)]);Y(gg.prototype, { setCustomParameters: { name: "setCustomParameters", a: [Mj("customOAuthParameters")] } });
    Z(gg, "credential", hg, [Rj(X(), Mj(), "token"), X("secret", !0)]);Y(N.prototype, { toJSON: { name: "toJSON", a: [X(null, !0)] } });Y(og.prototype, { toJSON: { name: "toJSON", a: [X(null, !0)] } });Y(Sf.prototype, { toJSON: { name: "toJSON", a: [X(null, !0)] } });
    (function () {
      if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
        var a = { Auth: V, Error: N };Z(a, "EmailAuthProvider", lg, []);Z(a, "FacebookAuthProvider", ag, []);Z(a, "GithubAuthProvider", cg, []);Z(a, "GoogleAuthProvider", eg, []);Z(a, "TwitterAuthProvider", gg, []);firebase.INTERNAL.registerService("auth", function (a, c) {
          a = new V(a);c({ INTERNAL: { getUid: _q(a.getUid, a), getToken: _q(a.getToken, a), addAuthTokenListener: _q(a.se, a), removeAuthTokenListener: _q(a.hf, a) } });return a;
        }, a, function (a, c) {
          if ("create" === a) try {
            c.auth();
          } catch (d) {}
        });firebase.INTERNAL.extendNamespace({ User: T });
      } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
  }).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.auth;