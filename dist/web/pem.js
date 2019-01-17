"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var pem = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == (0, _typeof2.default)(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t) {
  e.exports = function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      },
          i = !0;

      try {
        e[r].call(o.exports, o, o.exports, n), i = !1;
      } finally {
        i && delete t[r];
      }

      return o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == (0, _typeof2.default)(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = {
      65: 0,
      66: 1,
      67: 2,
      68: 3,
      69: 4,
      70: 5,
      71: 6,
      72: 7,
      73: 8,
      74: 9,
      75: 10,
      76: 11,
      77: 12,
      78: 13,
      79: 14,
      80: 15,
      81: 16,
      82: 17,
      83: 18,
      84: 19,
      85: 20,
      86: 21,
      87: 22,
      88: 23,
      89: 24,
      90: 25,
      97: 26,
      98: 27,
      99: 28,
      100: 29,
      101: 30,
      102: 31,
      103: 32,
      104: 33,
      105: 34,
      106: 35,
      107: 36,
      108: 37,
      109: 38,
      110: 39,
      111: 40,
      112: 41,
      113: 42,
      114: 43,
      115: 44,
      116: 45,
      117: 46,
      118: 47,
      119: 48,
      120: 49,
      121: 50,
      122: 51,
      48: 52,
      49: 53,
      50: 54,
      51: 55,
      52: 56,
      53: 57,
      54: 58,
      55: 59,
      56: 60,
      57: 61,
      43: 62,
      47: 63,
      45: 62,
      95: 63
    },
        o = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "W",
      23: "X",
      24: "Y",
      25: "Z",
      26: "a",
      27: "b",
      28: "c",
      29: "d",
      30: "e",
      31: "f",
      32: "g",
      33: "h",
      34: "i",
      35: "j",
      36: "k",
      37: "l",
      38: "m",
      39: "n",
      40: "o",
      41: "p",
      42: "q",
      43: "r",
      44: "s",
      45: "t",
      46: "u",
      47: "v",
      48: "w",
      49: "x",
      50: "y",
      51: "z",
      52: "0",
      53: "1",
      54: "2",
      55: "3",
      56: "4",
      57: "5",
      58: "6",
      59: "7",
      60: "8",
      61: "9",
      62: "+",
      63: "/"
    };
    n.d(t, "decode", function () {
      return c;
    }), n.d(t, "encode", function () {
      return s;
    });
    var i = 16383;

    function a(e) {
      var t = e.indexOf("=");
      return -1 === t ? e.length : t;
    }

    function l(e, t) {
      if (t || (t = a(e)), t < 0) throw new Error("Base64 encoding length cannot be negative.");
      if (!Number.isInteger(t)) throw new Error("Base64 encoding length must be integral.");
      return t === e.length ? 0 : 4 - t % 4;
    }

    function c(e) {
      if (e.length % 4 > 0) throw new Error("Base64 string with length not divisible by four.");
      var t = a(e),
          n = l(e, t),
          o = new Uint8Array(function (e) {
        var t = a(e),
            n = l(e, t);
        return .75 * (t + n) - n;
      }(e));
      var i = 0;
      var c = n ? t - 4 : t;
      var u = 0,
          s = 0;

      for (; s < c;) {
        u = r[e.charCodeAt(s)] << 18 | r[e.charCodeAt(s + 1)] << 12 | r[e.charCodeAt(s + 2)] << 6 | r[e.charCodeAt(s + 3)], o[i++] = u >> 16 & 255, o[i++] = u >> 8 & 255, o[i++] = 255 & u, s += 4;
      }

      if (n > 2) throw new Error("Invalid number of padding bytes returned for Base64 string.");
      return 2 === n ? (u = r[e.charCodeAt(s)] << 2 | r[e.charCodeAt(s + 1)] >> 4, o[i++] = 255 & u) : 1 === n && (u = r[e.charCodeAt(s)] << 10 | r[e.charCodeAt(s + 1)] << 4 | r[e.charCodeAt(s + 2)] >> 2, o[i++] = u >> 8 & 255, o[i++] = 255 & u), o;
    }

    function u(e) {
      return o[e >> 18 & 63] + o[e >> 12 & 63] + o[e >> 6 & 63] + o[63 & e];
    }

    function s(e) {
      if (e.length < i) {
        var _r = e.length % 3;

        for (var t = [], n = 0; n < e.length; n += 3) {
          t.push(u((e[n] << 16 & 16711680) + (e[n + 1] << 8 & 65280) + (255 & e[n + 2])));
        }

        if (1 === _r) {
          var _n = e[e.length - 1];
          t.push(o[_n >> 2] + o[_n << 4 & 63] + "==");
        } else if (2 === _r) {
          var _n2 = (e[e.length - 2] << 8) + e[e.length - 1];

          t.push(o[_n2 >> 10] + o[_n2 >> 4 & 63] + o[_n2 << 2 & 63] + "=");
        }

        return t.join("");
      }

      {
        var _t = [];

        for (var _n3 = 0; _n3 < e.length; _n3 += i) {
          _t.push(s(e.slice(_n3, _n3 + i)));
        }

        return _t.join("");
      }
    }
  }]);
}, function (e, t, n) {
  e.exports = n(2);
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "rfc7468CompliantPEMLabels", function () {
    return o;
  }), n.d(t, "PEMError", function () {
    return i;
  }), n.d(t, "PEMObject", function () {
    return a;
  });
  var r = n(0);
  var o = ["X509 CERTIFICATE", "CERTIFICATE", "CERTIFICATE PAIR", "TRUSTED CERTIFICATE", "NEW CERTIFICATE REQUEST", "CERTIFICATE REQUEST", "X509 CRL", "ANY PRIVATE KEY", "PUBLIC KEY", "RSA PRIVATE KEY", "RSA PUBLIC KEY", "DSA PRIVATE KEY", "DSA PUBLIC KEY", "PKCS7", "PKCS #7 SIGNED DATA", "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", "DH PARAMETERS", "SSL SESSION PARAMETERS", "DSA PARAMETERS", "ECDSA PUBLIC KEY", "EC PARAMETERS", "EC PRIVATE KEY", "PARAMETERS", "CMS", "ATTRIBUTE CERTIFICATE"];

  var i =
  /*#__PURE__*/
  function (_Error) {
    (0, _inherits2.default)(i, _Error);

    function i(e) {
      (0, _classCallCheck2.default)(this, i);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(i).call(this, e));
    }

    return i;
  }((0, _wrapNativeSuper2.default)(Error));

  var a =
  /*#__PURE__*/
  function () {
    function a(e, t) {
      (0, _classCallCheck2.default)(this, a);
      this._label = "", this.data = new Uint8Array(0), void 0 !== e && (this.label = e), void 0 !== t && (this.data = "string" == typeof t ? Object(r.decode)(t) : t);
    }

    (0, _createClass2.default)(a, [{
      key: "decode",
      value: function decode(e) {
        var t = e.trim().replace("\r", "").split("\n");
        if (t.length <= 2) throw new i("PEM is too small to be valid");
        if (0 !== t[0].indexOf("-----BEGIN ")) throw new i("PEM object did not start with '-----BEGIN '");
        if (!t[0].endsWith("-----")) throw new i("PEM object did not end with '-----'");
        var n = t[0].slice(11, t[0].length - 5);
        if (0 !== t[t.length - 1].indexOf("-----END ")) throw new i("Last line of PEM object did not start with '-----END '");
        if (!t[t.length - 1].endsWith("-----")) throw new i("Last line of PEM object did not end with '-----'");
        if (n !== t[t.length - 1].slice(9, t[t.length - 1].length - 5)) throw new i("PEM object Pre-encapsulation Boundary label does not match Post-encapsulation Boundary label.");
        this.label = n;
        var o = 1;

        for (; o < t.length - 1 && t[o].match(/^\s*$/);) {
          o++;
        }

        t.slice(o, t.length - 1).forEach(function (e) {
          if (e.match(/^\s*$/)) throw new i("Blank lines detected within PEM data");
        });
        var a = t.slice(1, t.length - 1).join("").replace(/\s+/g, "");
        this.data = Object(r.decode)(a);
      }
    }, {
      key: "label",
      get: function get() {
        return a.validateLabel(this._label), this._label;
      },
      set: function set(e) {
        a.validateLabel(e), this._label = e;
      }
    }, {
      key: "hasRFC7468CompliantLabel",
      get: function get() {
        return o.includes(this._label);
      }
    }, {
      key: "preEncapsulationBoundary",
      get: function get() {
        return "-----BEGIN ".concat(this.label, "-----");
      }
    }, {
      key: "postEncapsulationBoundary",
      get: function get() {
        return "-----END ".concat(this.label, "-----");
      }
    }, {
      key: "encapsulatedTextPortion",
      get: function get() {
        return (Object(r.encode)(this.data).match(/.{1,64}/g) || []).join("\n");
      }
    }, {
      key: "encoded",
      get: function get() {
        return this.preEncapsulationBoundary + "\n" + this.encapsulatedTextPortion + "\n" + this.postEncapsulationBoundary;
      }
    }], [{
      key: "validateLabel",
      value: function validateLabel(e) {
        if (!e.match(/^[A-Z# ]*$/)) throw new i("Malformed PEM label.");
        if (e.match(/\s\s/)) throw new i("PEM label cannot contain consecutive spaces.");
        if (e.match(/--/)) throw new i("PEM label cannot contain consecutive hyphen-minuses.");
        if (e.match(/^\s+/) || e.match(/\s+$/)) throw new i("PEM label cannot begin or end with spaces.");
        if (e.match(/^\-+/) || e.match(/\-+$/)) throw new i("PEM label cannot begin or end with hyphen-minuses.");
      }
    }, {
      key: "parse",
      value: function parse(e) {
        var t,
            n = 0,
            r = [];

        do {
          if (null === (t = a.pemObjectRegex.exec(e.slice(n)))) break;
          n += t.index + 1;

          var _o = new a(t[1], t[2]);

          r.push(_o);
        } while (n < e.length);

        return r;
      }
    }]);
    return a;
  }();

  a.preEncapsulationBoundaryRegex = /^-----BEGIN ([A-Z# ]*)-----$/m, a.postEncapsulationBoundaryRegex = /^-----END ([A-Z# ]*)-----$/m, a.base64LineRegex = /^[A-Za-z0-9\+/=]+\s*$/gm, a.pemObjectRegex = new RegExp(a.preEncapsulationBoundaryRegex.source + "\n(?:\\s*\n)*((?:" + a.base64LineRegex.source + "\n)*)?" + a.postEncapsulationBoundaryRegex.source, "m");
}]);