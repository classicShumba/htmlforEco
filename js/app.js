function Ii(t, e) {
    return function () {
        return t.apply(e, arguments);
    };
}
const { toString: No } = Object.prototype,
    { getPrototypeOf: Yn } = Object,
    Xe = ((t) => (e) => {
        const n = No.call(e);
        return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Q = (t) => ((t = t.toLowerCase()), (e) => Xe(e) === t),
    Ye = (t) => (e) => typeof e === t,
    { isArray: Mt } = Array,
    ee = Ye("undefined");
function Mo(t) {
    return (
        t !== null &&
        !ee(t) &&
        t.constructor !== null &&
        !ee(t.constructor) &&
        H(t.constructor.isBuffer) &&
        t.constructor.isBuffer(t)
    );
}
const Di = Q("ArrayBuffer");
function Fo(t) {
    let e;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (e = ArrayBuffer.isView(t))
            : (e = t && t.buffer && Di(t.buffer)),
        e
    );
}
const Ho = Ye("string"),
    H = Ye("function"),
    ji = Ye("number"),
    Ge = (t) => t !== null && typeof t == "object",
    $o = (t) => t === !0 || t === !1,
    Ce = (t) => {
        if (Xe(t) !== "object") return !1;
        const e = Yn(t);
        return (
            (e === null ||
                e === Object.prototype ||
                Object.getPrototypeOf(e) === null) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
        );
    },
    qo = Q("Date"),
    Uo = Q("File"),
    zo = Q("Blob"),
    Vo = Q("FileList"),
    Wo = (t) => Ge(t) && H(t.pipe),
    Ko = (t) => {
        let e;
        return (
            t &&
            ((typeof FormData == "function" && t instanceof FormData) ||
                (H(t.append) &&
                    ((e = Xe(t)) === "formdata" ||
                        (e === "object" &&
                            H(t.toString) &&
                            t.toString() === "[object FormData]"))))
        );
    },
    Jo = Q("URLSearchParams"),
    Xo = (t) =>
        t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function se(t, e, { allOwnKeys: n = !1 } = {}) {
    if (t === null || typeof t > "u") return;
    let r, i;
    if ((typeof t != "object" && (t = [t]), Mt(t)))
        for (r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);
    else {
        const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
            o = s.length;
        let a;
        for (r = 0; r < o; r++) (a = s[r]), e.call(null, t[a], a, t);
    }
}
function Bi(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let r = n.length,
        i;
    for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
    return null;
}
const Ni = (() =>
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global)(),
    Mi = (t) => !ee(t) && t !== Ni;
function En() {
    const { caseless: t } = (Mi(this) && this) || {},
        e = {},
        n = (r, i) => {
            const s = (t && Bi(e, i)) || i;
            Ce(e[s]) && Ce(r)
                ? (e[s] = En(e[s], r))
                : Ce(r)
                ? (e[s] = En({}, r))
                : Mt(r)
                ? (e[s] = r.slice())
                : (e[s] = r);
        };
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && se(arguments[r], n);
    return e;
}
const Yo = (t, e, n, { allOwnKeys: r } = {}) => (
        se(
            e,
            (i, s) => {
                n && H(i) ? (t[s] = Ii(i, n)) : (t[s] = i);
            },
            { allOwnKeys: r }
        ),
        t
    ),
    Go = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    Qo = (t, e, n, r) => {
        (t.prototype = Object.create(e.prototype, r)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: e.prototype }),
            n && Object.assign(t.prototype, n);
    },
    Zo = (t, e, n, r) => {
        let i, s, o;
        const a = {};
        if (((e = e || {}), t == null)) return e;
        do {
            for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
                (o = i[s]),
                    (!r || r(o, t, e)) && !a[o] && ((e[o] = t[o]), (a[o] = !0));
            t = n !== !1 && Yn(t);
        } while (t && (!n || n(t, e)) && t !== Object.prototype);
        return e;
    },
    ta = (t, e, n) => {
        (t = String(t)),
            (n === void 0 || n > t.length) && (n = t.length),
            (n -= e.length);
        const r = t.indexOf(e, n);
        return r !== -1 && r === n;
    },
    ea = (t) => {
        if (!t) return null;
        if (Mt(t)) return t;
        let e = t.length;
        if (!ji(e)) return null;
        const n = new Array(e);
        for (; e-- > 0; ) n[e] = t[e];
        return n;
    },
    na = (
        (t) => (e) =>
            t && e instanceof t
    )(typeof Uint8Array < "u" && Yn(Uint8Array)),
    ra = (t, e) => {
        const r = (t && t[Symbol.iterator]).call(t);
        let i;
        for (; (i = r.next()) && !i.done; ) {
            const s = i.value;
            e.call(t, s[0], s[1]);
        }
    },
    ia = (t, e) => {
        let n;
        const r = [];
        for (; (n = t.exec(e)) !== null; ) r.push(n);
        return r;
    },
    sa = Q("HTMLFormElement"),
    oa = (t) =>
        t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
            return r.toUpperCase() + i;
        }),
    Gr = (
        ({ hasOwnProperty: t }) =>
        (e, n) =>
            t.call(e, n)
    )(Object.prototype),
    aa = Q("RegExp"),
    Fi = (t, e) => {
        const n = Object.getOwnPropertyDescriptors(t),
            r = {};
        se(n, (i, s) => {
            let o;
            (o = e(i, s, t)) !== !1 && (r[s] = o || i);
        }),
            Object.defineProperties(t, r);
    },
    ca = (t) => {
        Fi(t, (e, n) => {
            if (H(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const r = t[n];
            if (H(r)) {
                if (((e.enumerable = !1), "writable" in e)) {
                    e.writable = !1;
                    return;
                }
                e.set ||
                    (e.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        );
                    });
            }
        });
    },
    la = (t, e) => {
        const n = {},
            r = (i) => {
                i.forEach((s) => {
                    n[s] = !0;
                });
            };
        return Mt(t) ? r(t) : r(String(t).split(e)), n;
    },
    ua = () => {},
    fa = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
    hn = "abcdefghijklmnopqrstuvwxyz",
    Qr = "0123456789",
    Hi = { DIGIT: Qr, ALPHA: hn, ALPHA_DIGIT: hn + hn.toUpperCase() + Qr },
    da = (t = 16, e = Hi.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = e;
        for (; t--; ) n += e[(Math.random() * r) | 0];
        return n;
    };
function pa(t) {
    return !!(
        t &&
        H(t.append) &&
        t[Symbol.toStringTag] === "FormData" &&
        t[Symbol.iterator]
    );
}
const ha = (t) => {
        const e = new Array(10),
            n = (r, i) => {
                if (Ge(r)) {
                    if (e.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        e[i] = r;
                        const s = Mt(r) ? [] : {};
                        return (
                            se(r, (o, a) => {
                                const c = n(o, i + 1);
                                !ee(c) && (s[a] = c);
                            }),
                            (e[i] = void 0),
                            s
                        );
                    }
                }
                return r;
            };
        return n(t, 0);
    },
    va = Q("AsyncFunction"),
    ga = (t) => t && (Ge(t) || H(t)) && H(t.then) && H(t.catch),
    f = {
        isArray: Mt,
        isArrayBuffer: Di,
        isBuffer: Mo,
        isFormData: Ko,
        isArrayBufferView: Fo,
        isString: Ho,
        isNumber: ji,
        isBoolean: $o,
        isObject: Ge,
        isPlainObject: Ce,
        isUndefined: ee,
        isDate: qo,
        isFile: Uo,
        isBlob: zo,
        isRegExp: aa,
        isFunction: H,
        isStream: Wo,
        isURLSearchParams: Jo,
        isTypedArray: na,
        isFileList: Vo,
        forEach: se,
        merge: En,
        extend: Yo,
        trim: Xo,
        stripBOM: Go,
        inherits: Qo,
        toFlatObject: Zo,
        kindOf: Xe,
        kindOfTest: Q,
        endsWith: ta,
        toArray: ea,
        forEachEntry: ra,
        matchAll: ia,
        isHTMLForm: sa,
        hasOwnProperty: Gr,
        hasOwnProp: Gr,
        reduceDescriptors: Fi,
        freezeMethods: ca,
        toObjectSet: la,
        toCamelCase: oa,
        noop: ua,
        toFiniteNumber: fa,
        findKey: Bi,
        global: Ni,
        isContextDefined: Mi,
        ALPHABET: Hi,
        generateString: da,
        isSpecCompliantForm: pa,
        toJSONObject: ha,
        isAsyncFn: va,
        isThenable: ga,
    };
function A(t, e, n, r, i) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = t),
        (this.name = "AxiosError"),
        e && (this.code = e),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i);
}
f.inherits(A, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: f.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const $i = A.prototype,
    qi = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((t) => {
    qi[t] = { value: t };
});
Object.defineProperties(A, qi);
Object.defineProperty($i, "isAxiosError", { value: !0 });
A.from = (t, e, n, r, i, s) => {
    const o = Object.create($i);
    return (
        f.toFlatObject(
            t,
            o,
            function (c) {
                return c !== Error.prototype;
            },
            (a) => a !== "isAxiosError"
        ),
        A.call(o, t.message, e, n, r, i),
        (o.cause = t),
        (o.name = t.name),
        s && Object.assign(o, s),
        o
    );
};
const ma = null;
function xn(t) {
    return f.isPlainObject(t) || f.isArray(t);
}
function Ui(t) {
    return f.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Zr(t, e, n) {
    return t
        ? t
              .concat(e)
              .map(function (i, s) {
                  return (i = Ui(i)), !n && s ? "[" + i + "]" : i;
              })
              .join(n ? "." : "")
        : e;
}
function _a(t) {
    return f.isArray(t) && !t.some(xn);
}
const ya = f.toFlatObject(f, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
});
function Qe(t, e, n) {
    if (!f.isObject(t)) throw new TypeError("target must be an object");
    (e = e || new FormData()),
        (n = f.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (g, h) {
                return !f.isUndefined(h[g]);
            }
        ));
    const r = n.metaTokens,
        i = n.visitor || l,
        s = n.dots,
        o = n.indexes,
        c = (n.Blob || (typeof Blob < "u" && Blob)) && f.isSpecCompliantForm(e);
    if (!f.isFunction(i)) throw new TypeError("visitor must be a function");
    function u(p) {
        if (p === null) return "";
        if (f.isDate(p)) return p.toISOString();
        if (!c && f.isBlob(p))
            throw new A("Blob is not supported. Use a Buffer instead.");
        return f.isArrayBuffer(p) || f.isTypedArray(p)
            ? c && typeof Blob == "function"
                ? new Blob([p])
                : Buffer.from(p)
            : p;
    }
    function l(p, g, h) {
        let _ = p;
        if (p && !h && typeof p == "object") {
            if (f.endsWith(g, "{}"))
                (g = r ? g : g.slice(0, -2)), (p = JSON.stringify(p));
            else if (
                (f.isArray(p) && _a(p)) ||
                ((f.isFileList(p) || f.endsWith(g, "[]")) && (_ = f.toArray(p)))
            )
                return (
                    (g = Ui(g)),
                    _.forEach(function (w, b) {
                        !(f.isUndefined(w) || w === null) &&
                            e.append(
                                o === !0
                                    ? Zr([g], b, s)
                                    : o === null
                                    ? g
                                    : g + "[]",
                                u(w)
                            );
                    }),
                    !1
                );
        }
        return xn(p) ? !0 : (e.append(Zr(h, g, s), u(p)), !1);
    }
    const d = [],
        v = Object.assign(ya, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: xn,
        });
    function m(p, g) {
        if (!f.isUndefined(p)) {
            if (d.indexOf(p) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            d.push(p),
                f.forEach(p, function (_, y) {
                    (!(f.isUndefined(_) || _ === null) &&
                        i.call(e, _, f.isString(y) ? y.trim() : y, g, v)) ===
                        !0 && m(_, g ? g.concat(y) : [y]);
                }),
                d.pop();
        }
    }
    if (!f.isObject(t)) throw new TypeError("data must be an object");
    return m(t), e;
}
function ti(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
        return e[r];
    });
}
function Gn(t, e) {
    (this._pairs = []), t && Qe(t, this, e);
}
const zi = Gn.prototype;
zi.append = function (e, n) {
    this._pairs.push([e, n]);
};
zi.toString = function (e) {
    const n = e
        ? function (r) {
              return e.call(this, r, ti);
          }
        : ti;
    return this._pairs
        .map(function (i) {
            return n(i[0]) + "=" + n(i[1]);
        }, "")
        .join("&");
};
function ba(t) {
    return encodeURIComponent(t)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function Vi(t, e, n) {
    if (!e) return t;
    const r = (n && n.encode) || ba,
        i = n && n.serialize;
    let s;
    if (
        (i
            ? (s = i(e, n))
            : (s = f.isURLSearchParams(e)
                  ? e.toString()
                  : new Gn(e, n).toString(r)),
        s)
    ) {
        const o = t.indexOf("#");
        o !== -1 && (t = t.slice(0, o)),
            (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
    }
    return t;
}
class wa {
    constructor() {
        this.handlers = [];
    }
    use(e, n, r) {
        return (
            this.handlers.push({
                fulfilled: e,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(e) {
        f.forEach(this.handlers, function (r) {
            r !== null && e(r);
        });
    }
}
const ei = wa,
    Wi = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Ea = typeof URLSearchParams < "u" ? URLSearchParams : Gn,
    xa = typeof FormData < "u" ? FormData : null,
    Aa = typeof Blob < "u" ? Blob : null,
    Oa = (() => {
        let t;
        return typeof navigator < "u" &&
            ((t = navigator.product) === "ReactNative" ||
                t === "NativeScript" ||
                t === "NS")
            ? !1
            : typeof window < "u" && typeof document < "u";
    })(),
    Sa = (() =>
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function")(),
    X = {
        isBrowser: !0,
        classes: { URLSearchParams: Ea, FormData: xa, Blob: Aa },
        isStandardBrowserEnv: Oa,
        isStandardBrowserWebWorkerEnv: Sa,
        protocols: ["http", "https", "file", "blob", "url", "data"],
    };
function Ta(t, e) {
    return Qe(
        t,
        new X.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, i, s) {
                    return X.isNode && f.isBuffer(n)
                        ? (this.append(r, n.toString("base64")), !1)
                        : s.defaultVisitor.apply(this, arguments);
                },
            },
            e
        )
    );
}
function La(t) {
    return f
        .matchAll(/\w+|\[(\w*)]/g, t)
        .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function Ca(t) {
    const e = {},
        n = Object.keys(t);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++) (s = n[r]), (e[s] = t[s]);
    return e;
}
function Ki(t) {
    function e(n, r, i, s) {
        let o = n[s++];
        const a = Number.isFinite(+o),
            c = s >= n.length;
        return (
            (o = !o && f.isArray(i) ? i.length : o),
            c
                ? (f.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
                : ((!i[o] || !f.isObject(i[o])) && (i[o] = []),
                  e(n, r, i[o], s) && f.isArray(i[o]) && (i[o] = Ca(i[o])),
                  !a)
        );
    }
    if (f.isFormData(t) && f.isFunction(t.entries)) {
        const n = {};
        return (
            f.forEachEntry(t, (r, i) => {
                e(La(r), i, n, 0);
            }),
            n
        );
    }
    return null;
}
function Pa(t, e, n) {
    if (f.isString(t))
        try {
            return (e || JSON.parse)(t), f.trim(t);
        } catch (r) {
            if (r.name !== "SyntaxError") throw r;
        }
    return (n || JSON.stringify)(t);
}
const Qn = {
    transitional: Wi,
    adapter: ["xhr", "http"],
    transformRequest: [
        function (e, n) {
            const r = n.getContentType() || "",
                i = r.indexOf("application/json") > -1,
                s = f.isObject(e);
            if (
                (s && f.isHTMLForm(e) && (e = new FormData(e)), f.isFormData(e))
            )
                return i && i ? JSON.stringify(Ki(e)) : e;
            if (
                f.isArrayBuffer(e) ||
                f.isBuffer(e) ||
                f.isStream(e) ||
                f.isFile(e) ||
                f.isBlob(e)
            )
                return e;
            if (f.isArrayBufferView(e)) return e.buffer;
            if (f.isURLSearchParams(e))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    e.toString()
                );
            let a;
            if (s) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                    return Ta(e, this.formSerializer).toString();
                if (
                    (a = f.isFileList(e)) ||
                    r.indexOf("multipart/form-data") > -1
                ) {
                    const c = this.env && this.env.FormData;
                    return Qe(
                        a ? { "files[]": e } : e,
                        c && new c(),
                        this.formSerializer
                    );
                }
            }
            return s || i
                ? (n.setContentType("application/json", !1), Pa(e))
                : e;
        },
    ],
    transformResponse: [
        function (e) {
            const n = this.transitional || Qn.transitional,
                r = n && n.forcedJSONParsing,
                i = this.responseType === "json";
            if (e && f.isString(e) && ((r && !this.responseType) || i)) {
                const o = !(n && n.silentJSONParsing) && i;
                try {
                    return JSON.parse(e);
                } catch (a) {
                    if (o)
                        throw a.name === "SyntaxError"
                            ? A.from(
                                  a,
                                  A.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : a;
                }
            }
            return e;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: X.classes.FormData, Blob: X.classes.Blob },
    validateStatus: function (e) {
        return e >= 200 && e < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Qn.headers[t] = {};
});
const Zn = Qn,
    ka = f.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    Ra = (t) => {
        const e = {};
        let n, r, i;
        return (
            t &&
                t
                    .split(
                        `
`
                    )
                    .forEach(function (o) {
                        (i = o.indexOf(":")),
                            (n = o.substring(0, i).trim().toLowerCase()),
                            (r = o.substring(i + 1).trim()),
                            !(!n || (e[n] && ka[n])) &&
                                (n === "set-cookie"
                                    ? e[n]
                                        ? e[n].push(r)
                                        : (e[n] = [r])
                                    : (e[n] = e[n] ? e[n] + ", " + r : r));
                    }),
            e
        );
    },
    ni = Symbol("internals");
function zt(t) {
    return t && String(t).trim().toLowerCase();
}
function Pe(t) {
    return t === !1 || t == null ? t : f.isArray(t) ? t.map(Pe) : String(t);
}
function Ia(t) {
    const e = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(t)); ) e[r[1]] = r[2];
    return e;
}
const Da = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function vn(t, e, n, r, i) {
    if (f.isFunction(r)) return r.call(this, e, n);
    if ((i && (e = n), !!f.isString(e))) {
        if (f.isString(r)) return e.indexOf(r) !== -1;
        if (f.isRegExp(r)) return r.test(e);
    }
}
function ja(t) {
    return t
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Ba(t, e) {
    const n = f.toCamelCase(" " + e);
    ["get", "set", "has"].forEach((r) => {
        Object.defineProperty(t, r + n, {
            value: function (i, s, o) {
                return this[r].call(this, e, i, s, o);
            },
            configurable: !0,
        });
    });
}
class Ze {
    constructor(e) {
        e && this.set(e);
    }
    set(e, n, r) {
        const i = this;
        function s(a, c, u) {
            const l = zt(c);
            if (!l) throw new Error("header name must be a non-empty string");
            const d = f.findKey(i, l);
            (!d ||
                i[d] === void 0 ||
                u === !0 ||
                (u === void 0 && i[d] !== !1)) &&
                (i[d || c] = Pe(a));
        }
        const o = (a, c) => f.forEach(a, (u, l) => s(u, l, c));
        return (
            f.isPlainObject(e) || e instanceof this.constructor
                ? o(e, n)
                : f.isString(e) && (e = e.trim()) && !Da(e)
                ? o(Ra(e), n)
                : e != null && s(n, e, r),
            this
        );
    }
    get(e, n) {
        if (((e = zt(e)), e)) {
            const r = f.findKey(this, e);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return Ia(i);
                if (f.isFunction(n)) return n.call(this, i, r);
                if (f.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(e, n) {
        if (((e = zt(e)), e)) {
            const r = f.findKey(this, e);
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || vn(this, this[r], r, n))
            );
        }
        return !1;
    }
    delete(e, n) {
        const r = this;
        let i = !1;
        function s(o) {
            if (((o = zt(o)), o)) {
                const a = f.findKey(r, o);
                a && (!n || vn(r, r[a], a, n)) && (delete r[a], (i = !0));
            }
        }
        return f.isArray(e) ? e.forEach(s) : s(e), i;
    }
    clear(e) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--; ) {
            const s = n[r];
            (!e || vn(this, this[s], s, e, !0)) && (delete this[s], (i = !0));
        }
        return i;
    }
    normalize(e) {
        const n = this,
            r = {};
        return (
            f.forEach(this, (i, s) => {
                const o = f.findKey(r, s);
                if (o) {
                    (n[o] = Pe(i)), delete n[s];
                    return;
                }
                const a = e ? ja(s) : String(s).trim();
                a !== s && delete n[s], (n[a] = Pe(i)), (r[a] = !0);
            }),
            this
        );
    }
    concat(...e) {
        return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
        const n = Object.create(null);
        return (
            f.forEach(this, (r, i) => {
                r != null &&
                    r !== !1 &&
                    (n[i] = e && f.isArray(r) ? r.join(", ") : r);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(e) {
        return e instanceof this ? e : new this(e);
    }
    static concat(e, ...n) {
        const r = new this(e);
        return n.forEach((i) => r.set(i)), r;
    }
    static accessor(e) {
        const r = (this[ni] = this[ni] = { accessors: {} }).accessors,
            i = this.prototype;
        function s(o) {
            const a = zt(o);
            r[a] || (Ba(i, o), (r[a] = !0));
        }
        return f.isArray(e) ? e.forEach(s) : s(e), this;
    }
}
Ze.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
f.reduceDescriptors(Ze.prototype, ({ value: t }, e) => {
    let n = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(r) {
            this[n] = r;
        },
    };
});
f.freezeMethods(Ze);
const Z = Ze;
function gn(t, e) {
    const n = this || Zn,
        r = e || n,
        i = Z.from(r.headers);
    let s = r.data;
    return (
        f.forEach(t, function (a) {
            s = a.call(n, s, i.normalize(), e ? e.status : void 0);
        }),
        i.normalize(),
        s
    );
}
function Ji(t) {
    return !!(t && t.__CANCEL__);
}
function oe(t, e, n) {
    A.call(this, t ?? "canceled", A.ERR_CANCELED, e, n),
        (this.name = "CanceledError");
}
f.inherits(oe, A, { __CANCEL__: !0 });
function Na(t, e, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
        ? t(n)
        : e(
              new A(
                  "Request failed with status code " + n.status,
                  [A.ERR_BAD_REQUEST, A.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          );
}
const Ma = X.isStandardBrowserEnv
    ? (function () {
          return {
              write: function (n, r, i, s, o, a) {
                  const c = [];
                  c.push(n + "=" + encodeURIComponent(r)),
                      f.isNumber(i) &&
                          c.push("expires=" + new Date(i).toGMTString()),
                      f.isString(s) && c.push("path=" + s),
                      f.isString(o) && c.push("domain=" + o),
                      a === !0 && c.push("secure"),
                      (document.cookie = c.join("; "));
              },
              read: function (n) {
                  const r = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
                  );
                  return r ? decodeURIComponent(r[3]) : null;
              },
              remove: function (n) {
                  this.write(n, "", Date.now() - 864e5);
              },
          };
      })()
    : (function () {
          return {
              write: function () {},
              read: function () {
                  return null;
              },
              remove: function () {},
          };
      })();
function Fa(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ha(t, e) {
    return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Xi(t, e) {
    return t && !Fa(e) ? Ha(t, e) : e;
}
const $a = X.isStandardBrowserEnv
    ? (function () {
          const e = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
          let r;
          function i(s) {
              let o = s;
              return (
                  e && (n.setAttribute("href", o), (o = n.href)),
                  n.setAttribute("href", o),
                  {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, "") : "",
                      hash: n.hash ? n.hash.replace(/^#/, "") : "",
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                          n.pathname.charAt(0) === "/"
                              ? n.pathname
                              : "/" + n.pathname,
                  }
              );
          }
          return (
              (r = i(window.location.href)),
              function (o) {
                  const a = f.isString(o) ? i(o) : o;
                  return a.protocol === r.protocol && a.host === r.host;
              }
          );
      })()
    : (function () {
          return function () {
              return !0;
          };
      })();
function qa(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (e && e[1]) || "";
}
function Ua(t, e) {
    t = t || 10;
    const n = new Array(t),
        r = new Array(t);
    let i = 0,
        s = 0,
        o;
    return (
        (e = e !== void 0 ? e : 1e3),
        function (c) {
            const u = Date.now(),
                l = r[s];
            o || (o = u), (n[i] = c), (r[i] = u);
            let d = s,
                v = 0;
            for (; d !== i; ) (v += n[d++]), (d = d % t);
            if (((i = (i + 1) % t), i === s && (s = (s + 1) % t), u - o < e))
                return;
            const m = l && u - l;
            return m ? Math.round((v * 1e3) / m) : void 0;
        }
    );
}
function ri(t, e) {
    let n = 0;
    const r = Ua(50, 250);
    return (i) => {
        const s = i.loaded,
            o = i.lengthComputable ? i.total : void 0,
            a = s - n,
            c = r(a),
            u = s <= o;
        n = s;
        const l = {
            loaded: s,
            total: o,
            progress: o ? s / o : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && o && u ? (o - s) / c : void 0,
            event: i,
        };
        (l[e ? "download" : "upload"] = !0), t(l);
    };
}
const za = typeof XMLHttpRequest < "u",
    Va =
        za &&
        function (t) {
            return new Promise(function (n, r) {
                let i = t.data;
                const s = Z.from(t.headers).normalize(),
                    o = t.responseType;
                let a;
                function c() {
                    t.cancelToken && t.cancelToken.unsubscribe(a),
                        t.signal && t.signal.removeEventListener("abort", a);
                }
                let u;
                f.isFormData(i) &&
                    (X.isStandardBrowserEnv || X.isStandardBrowserWebWorkerEnv
                        ? s.setContentType(!1)
                        : s.getContentType(/^\s*multipart\/form-data/)
                        ? f.isString((u = s.getContentType())) &&
                          s.setContentType(
                              u.replace(/^\s*(multipart\/form-data);+/, "$1")
                          )
                        : s.setContentType("multipart/form-data"));
                let l = new XMLHttpRequest();
                if (t.auth) {
                    const p = t.auth.username || "",
                        g = t.auth.password
                            ? unescape(encodeURIComponent(t.auth.password))
                            : "";
                    s.set("Authorization", "Basic " + btoa(p + ":" + g));
                }
                const d = Xi(t.baseURL, t.url);
                l.open(
                    t.method.toUpperCase(),
                    Vi(d, t.params, t.paramsSerializer),
                    !0
                ),
                    (l.timeout = t.timeout);
                function v() {
                    if (!l) return;
                    const p = Z.from(
                            "getAllResponseHeaders" in l &&
                                l.getAllResponseHeaders()
                        ),
                        h = {
                            data:
                                !o || o === "text" || o === "json"
                                    ? l.responseText
                                    : l.response,
                            status: l.status,
                            statusText: l.statusText,
                            headers: p,
                            config: t,
                            request: l,
                        };
                    Na(
                        function (y) {
                            n(y), c();
                        },
                        function (y) {
                            r(y), c();
                        },
                        h
                    ),
                        (l = null);
                }
                if (
                    ("onloadend" in l
                        ? (l.onloadend = v)
                        : (l.onreadystatechange = function () {
                              !l ||
                                  l.readyState !== 4 ||
                                  (l.status === 0 &&
                                      !(
                                          l.responseURL &&
                                          l.responseURL.indexOf("file:") === 0
                                      )) ||
                                  setTimeout(v);
                          }),
                    (l.onabort = function () {
                        l &&
                            (r(new A("Request aborted", A.ECONNABORTED, t, l)),
                            (l = null));
                    }),
                    (l.onerror = function () {
                        r(new A("Network Error", A.ERR_NETWORK, t, l)),
                            (l = null);
                    }),
                    (l.ontimeout = function () {
                        let g = t.timeout
                            ? "timeout of " + t.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const h = t.transitional || Wi;
                        t.timeoutErrorMessage && (g = t.timeoutErrorMessage),
                            r(
                                new A(
                                    g,
                                    h.clarifyTimeoutError
                                        ? A.ETIMEDOUT
                                        : A.ECONNABORTED,
                                    t,
                                    l
                                )
                            ),
                            (l = null);
                    }),
                    X.isStandardBrowserEnv)
                ) {
                    const p =
                        (t.withCredentials || $a(d)) &&
                        t.xsrfCookieName &&
                        Ma.read(t.xsrfCookieName);
                    p && s.set(t.xsrfHeaderName, p);
                }
                i === void 0 && s.setContentType(null),
                    "setRequestHeader" in l &&
                        f.forEach(s.toJSON(), function (g, h) {
                            l.setRequestHeader(h, g);
                        }),
                    f.isUndefined(t.withCredentials) ||
                        (l.withCredentials = !!t.withCredentials),
                    o && o !== "json" && (l.responseType = t.responseType),
                    typeof t.onDownloadProgress == "function" &&
                        l.addEventListener(
                            "progress",
                            ri(t.onDownloadProgress, !0)
                        ),
                    typeof t.onUploadProgress == "function" &&
                        l.upload &&
                        l.upload.addEventListener(
                            "progress",
                            ri(t.onUploadProgress)
                        ),
                    (t.cancelToken || t.signal) &&
                        ((a = (p) => {
                            l &&
                                (r(!p || p.type ? new oe(null, t, l) : p),
                                l.abort(),
                                (l = null));
                        }),
                        t.cancelToken && t.cancelToken.subscribe(a),
                        t.signal &&
                            (t.signal.aborted
                                ? a()
                                : t.signal.addEventListener("abort", a)));
                const m = qa(d);
                if (m && X.protocols.indexOf(m) === -1) {
                    r(
                        new A(
                            "Unsupported protocol " + m + ":",
                            A.ERR_BAD_REQUEST,
                            t
                        )
                    );
                    return;
                }
                l.send(i || null);
            });
        },
    An = { http: ma, xhr: Va };
f.forEach(An, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", { value: e });
        } catch {}
        Object.defineProperty(t, "adapterName", { value: e });
    }
});
const ii = (t) => `- ${t}`,
    Wa = (t) => f.isFunction(t) || t === null || t === !1,
    Yi = {
        getAdapter: (t) => {
            t = f.isArray(t) ? t : [t];
            const { length: e } = t;
            let n, r;
            const i = {};
            for (let s = 0; s < e; s++) {
                n = t[s];
                let o;
                if (
                    ((r = n),
                    !Wa(n) &&
                        ((r = An[(o = String(n)).toLowerCase()]), r === void 0))
                )
                    throw new A(`Unknown adapter '${o}'`);
                if (r) break;
                i[o || "#" + s] = r;
            }
            if (!r) {
                const s = Object.entries(i).map(
                    ([a, c]) =>
                        `adapter ${a} ` +
                        (c === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let o = e
                    ? s.length > 1
                        ? `since :
` +
                          s.map(ii).join(`
`)
                        : " " + ii(s[0])
                    : "as no adapter specified";
                throw new A(
                    "There is no suitable adapter to dispatch the request " + o,
                    "ERR_NOT_SUPPORT"
                );
            }
            return r;
        },
        adapters: An,
    };
function mn(t) {
    if (
        (t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted)
    )
        throw new oe(null, t);
}
function si(t) {
    return (
        mn(t),
        (t.headers = Z.from(t.headers)),
        (t.data = gn.call(t, t.transformRequest)),
        ["post", "put", "patch"].indexOf(t.method) !== -1 &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1),
        Yi.getAdapter(t.adapter || Zn.adapter)(t).then(
            function (r) {
                return (
                    mn(t),
                    (r.data = gn.call(t, t.transformResponse, r)),
                    (r.headers = Z.from(r.headers)),
                    r
                );
            },
            function (r) {
                return (
                    Ji(r) ||
                        (mn(t),
                        r &&
                            r.response &&
                            ((r.response.data = gn.call(
                                t,
                                t.transformResponse,
                                r.response
                            )),
                            (r.response.headers = Z.from(r.response.headers)))),
                    Promise.reject(r)
                );
            }
        )
    );
}
const oi = (t) => (t instanceof Z ? t.toJSON() : t);
function kt(t, e) {
    e = e || {};
    const n = {};
    function r(u, l, d) {
        return f.isPlainObject(u) && f.isPlainObject(l)
            ? f.merge.call({ caseless: d }, u, l)
            : f.isPlainObject(l)
            ? f.merge({}, l)
            : f.isArray(l)
            ? l.slice()
            : l;
    }
    function i(u, l, d) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return r(void 0, u, d);
        } else return r(u, l, d);
    }
    function s(u, l) {
        if (!f.isUndefined(l)) return r(void 0, l);
    }
    function o(u, l) {
        if (f.isUndefined(l)) {
            if (!f.isUndefined(u)) return r(void 0, u);
        } else return r(void 0, l);
    }
    function a(u, l, d) {
        if (d in e) return r(u, l);
        if (d in t) return r(void 0, u);
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (u, l) => i(oi(u), oi(l), !0),
    };
    return (
        f.forEach(Object.keys(Object.assign({}, t, e)), function (l) {
            const d = c[l] || i,
                v = d(t[l], e[l], l);
            (f.isUndefined(v) && d !== a) || (n[l] = v);
        }),
        n
    );
}
const Gi = "1.5.1",
    tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (t, e) => {
        tr[t] = function (r) {
            return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
        };
    }
);
const ai = {};
tr.transitional = function (e, n, r) {
    function i(s, o) {
        return (
            "[Axios v" +
            Gi +
            "] Transitional option '" +
            s +
            "'" +
            o +
            (r ? ". " + r : "")
        );
    }
    return (s, o, a) => {
        if (e === !1)
            throw new A(
                i(o, " has been removed" + (n ? " in " + n : "")),
                A.ERR_DEPRECATED
            );
        return (
            n &&
                !ai[o] &&
                ((ai[o] = !0),
                console.warn(
                    i(
                        o,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future"
                    )
                )),
            e ? e(s, o, a) : !0
        );
    };
};
function Ka(t, e, n) {
    if (typeof t != "object")
        throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(t);
    let i = r.length;
    for (; i-- > 0; ) {
        const s = r[i],
            o = e[s];
        if (o) {
            const a = t[s],
                c = a === void 0 || o(a, s, t);
            if (c !== !0)
                throw new A(
                    "option " + s + " must be " + c,
                    A.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (n !== !0) throw new A("Unknown option " + s, A.ERR_BAD_OPTION);
    }
}
const On = { assertOptions: Ka, validators: tr },
    rt = On.validators;
class je {
    constructor(e) {
        (this.defaults = e),
            (this.interceptors = { request: new ei(), response: new ei() });
    }
    request(e, n) {
        typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
            (n = kt(this.defaults, n));
        const { transitional: r, paramsSerializer: i, headers: s } = n;
        r !== void 0 &&
            On.assertOptions(
                r,
                {
                    silentJSONParsing: rt.transitional(rt.boolean),
                    forcedJSONParsing: rt.transitional(rt.boolean),
                    clarifyTimeoutError: rt.transitional(rt.boolean),
                },
                !1
            ),
            i != null &&
                (f.isFunction(i)
                    ? (n.paramsSerializer = { serialize: i })
                    : On.assertOptions(
                          i,
                          { encode: rt.function, serialize: rt.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let o = s && f.merge(s.common, s[n.method]);
        s &&
            f.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (p) => {
                    delete s[p];
                }
            ),
            (n.headers = Z.concat(o, s));
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function (g) {
            (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
                ((c = c && g.synchronous), a.unshift(g.fulfilled, g.rejected));
        });
        const u = [];
        this.interceptors.response.forEach(function (g) {
            u.push(g.fulfilled, g.rejected);
        });
        let l,
            d = 0,
            v;
        if (!c) {
            const p = [si.bind(this), void 0];
            for (
                p.unshift.apply(p, a),
                    p.push.apply(p, u),
                    v = p.length,
                    l = Promise.resolve(n);
                d < v;

            )
                l = l.then(p[d++], p[d++]);
            return l;
        }
        v = a.length;
        let m = n;
        for (d = 0; d < v; ) {
            const p = a[d++],
                g = a[d++];
            try {
                m = p(m);
            } catch (h) {
                g.call(this, h);
                break;
            }
        }
        try {
            l = si.call(this, m);
        } catch (p) {
            return Promise.reject(p);
        }
        for (d = 0, v = u.length; d < v; ) l = l.then(u[d++], u[d++]);
        return l;
    }
    getUri(e) {
        e = kt(this.defaults, e);
        const n = Xi(e.baseURL, e.url);
        return Vi(n, e.params, e.paramsSerializer);
    }
}
f.forEach(["delete", "get", "head", "options"], function (e) {
    je.prototype[e] = function (n, r) {
        return this.request(
            kt(r || {}, { method: e, url: n, data: (r || {}).data })
        );
    };
});
f.forEach(["post", "put", "patch"], function (e) {
    function n(r) {
        return function (s, o, a) {
            return this.request(
                kt(a || {}, {
                    method: e,
                    headers: r ? { "Content-Type": "multipart/form-data" } : {},
                    url: s,
                    data: o,
                })
            );
        };
    }
    (je.prototype[e] = n()), (je.prototype[e + "Form"] = n(!0));
});
const ke = je;
class er {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (s) {
            n = s;
        });
        const r = this;
        this.promise.then((i) => {
            if (!r._listeners) return;
            let s = r._listeners.length;
            for (; s-- > 0; ) r._listeners[s](i);
            r._listeners = null;
        }),
            (this.promise.then = (i) => {
                let s;
                const o = new Promise((a) => {
                    r.subscribe(a), (s = a);
                }).then(i);
                return (
                    (o.cancel = function () {
                        r.unsubscribe(s);
                    }),
                    o
                );
            }),
            e(function (s, o, a) {
                r.reason || ((r.reason = new oe(s, o, a)), n(r.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(e);
        n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
        let e;
        return {
            token: new er(function (i) {
                e = i;
            }),
            cancel: e,
        };
    }
}
const Ja = er;
function Xa(t) {
    return function (n) {
        return t.apply(null, n);
    };
}
function Ya(t) {
    return f.isObject(t) && t.isAxiosError === !0;
}
const Sn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(Sn).forEach(([t, e]) => {
    Sn[e] = t;
});
const Ga = Sn;
function Qi(t) {
    const e = new ke(t),
        n = Ii(ke.prototype.request, e);
    return (
        f.extend(n, ke.prototype, e, { allOwnKeys: !0 }),
        f.extend(n, e, null, { allOwnKeys: !0 }),
        (n.create = function (i) {
            return Qi(kt(t, i));
        }),
        n
    );
}
const C = Qi(Zn);
C.Axios = ke;
C.CanceledError = oe;
C.CancelToken = Ja;
C.isCancel = Ji;
C.VERSION = Gi;
C.toFormData = Qe;
C.AxiosError = A;
C.Cancel = C.CanceledError;
C.all = function (e) {
    return Promise.all(e);
};
C.spread = Xa;
C.isAxiosError = Ya;
C.mergeConfig = kt;
C.AxiosHeaders = Z;
C.formToJSON = (t) => Ki(f.isHTMLForm(t) ? new FormData(t) : t);
C.getAdapter = Yi.getAdapter;
C.HttpStatusCode = Ga;
C.default = C;
const Qa = C;
window.axios = Qa;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var Za = (function () {
        function t(e, n) {
            n === void 0 && (n = []),
                (this._eventType = e),
                (this._eventFunctions = n);
        }
        return (
            (t.prototype.init = function () {
                var e = this;
                this._eventFunctions.forEach(function (n) {
                    typeof window < "u" &&
                        window.addEventListener(e._eventType, n);
                });
            }),
            t
        );
    })(),
    Be =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Be =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                Be.apply(this, arguments)
            );
        },
    Ne = {
        alwaysOpen: !1,
        activeClasses:
            "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
        inactiveClasses: "text-gray-500 dark:text-gray-400",
        onOpen: function () {},
        onClose: function () {},
        onToggle: function () {},
    },
    Zi = (function () {
        function t(e, n) {
            e === void 0 && (e = []),
                n === void 0 && (n = Ne),
                (this._items = e),
                (this._options = Be(Be({}, Ne), n)),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                this._items.length &&
                    this._items.map(function (n) {
                        n.active && e.open(n.id),
                            n.triggerEl.addEventListener("click", function () {
                                e.toggle(n.id);
                            });
                    });
            }),
            (t.prototype.getItem = function (e) {
                return this._items.filter(function (n) {
                    return n.id === e;
                })[0];
            }),
            (t.prototype.open = function (e) {
                var n,
                    r,
                    i = this,
                    s = this.getItem(e);
                this._options.alwaysOpen ||
                    this._items.map(function (o) {
                        var a, c;
                        o !== s &&
                            ((a = o.triggerEl.classList).remove.apply(
                                a,
                                i._options.activeClasses.split(" ")
                            ),
                            (c = o.triggerEl.classList).add.apply(
                                c,
                                i._options.inactiveClasses.split(" ")
                            ),
                            o.targetEl.classList.add("hidden"),
                            o.triggerEl.setAttribute("aria-expanded", "false"),
                            (o.active = !1),
                            o.iconEl &&
                                o.iconEl.classList.remove("rotate-180"));
                    }),
                    (n = s.triggerEl.classList).add.apply(
                        n,
                        this._options.activeClasses.split(" ")
                    ),
                    (r = s.triggerEl.classList).remove.apply(
                        r,
                        this._options.inactiveClasses.split(" ")
                    ),
                    s.triggerEl.setAttribute("aria-expanded", "true"),
                    s.targetEl.classList.remove("hidden"),
                    (s.active = !0),
                    s.iconEl && s.iconEl.classList.add("rotate-180"),
                    this._options.onOpen(this, s);
            }),
            (t.prototype.toggle = function (e) {
                var n = this.getItem(e);
                n.active ? this.close(e) : this.open(e),
                    this._options.onToggle(this, n);
            }),
            (t.prototype.close = function (e) {
                var n,
                    r,
                    i = this.getItem(e);
                (n = i.triggerEl.classList).remove.apply(
                    n,
                    this._options.activeClasses.split(" ")
                ),
                    (r = i.triggerEl.classList).add.apply(
                        r,
                        this._options.inactiveClasses.split(" ")
                    ),
                    i.targetEl.classList.add("hidden"),
                    i.triggerEl.setAttribute("aria-expanded", "false"),
                    (i.active = !1),
                    i.iconEl && i.iconEl.classList.remove("rotate-180"),
                    this._options.onClose(this, i);
            }),
            t
        );
    })();
function nr() {
    document.querySelectorAll("[data-accordion]").forEach(function (t) {
        var e = t.getAttribute("data-accordion"),
            n = t.getAttribute("data-active-classes"),
            r = t.getAttribute("data-inactive-classes"),
            i = [];
        t.querySelectorAll("[data-accordion-target]").forEach(function (s) {
            if (s.closest("[data-accordion]") === t) {
                var o = {
                    id: s.getAttribute("data-accordion-target"),
                    triggerEl: s,
                    targetEl: document.querySelector(
                        s.getAttribute("data-accordion-target")
                    ),
                    iconEl: s.querySelector("[data-accordion-icon]"),
                    active: s.getAttribute("aria-expanded") === "true",
                };
                i.push(o);
            }
        }),
            new Zi(i, {
                alwaysOpen: e === "open",
                activeClasses: n || Ne.activeClasses,
                inactiveClasses: r || Ne.inactiveClasses,
            });
    });
}
typeof window < "u" && ((window.Accordion = Zi), (window.initAccordions = nr));
var Me =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Me =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                Me.apply(this, arguments)
            );
        },
    ci = {
        onCollapse: function () {},
        onExpand: function () {},
        onToggle: function () {},
    },
    ts = (function () {
        function t(e, n, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                r === void 0 && (r = ci),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = Me(Me({}, ci), r)),
                (this._visible = !1),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                this._triggerEl &&
                    (this._triggerEl.hasAttribute("aria-expanded")
                        ? (this._visible =
                              this._triggerEl.getAttribute("aria-expanded") ===
                              "true")
                        : (this._visible =
                              !this._targetEl.classList.contains("hidden")),
                    this._triggerEl.addEventListener("click", function () {
                        e.toggle();
                    }));
            }),
            (t.prototype.collapse = function () {
                this._targetEl.classList.add("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "false"),
                    (this._visible = !1),
                    this._options.onCollapse(this);
            }),
            (t.prototype.expand = function () {
                this._targetEl.classList.remove("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "true"),
                    (this._visible = !0),
                    this._options.onExpand(this);
            }),
            (t.prototype.toggle = function () {
                this._visible ? this.collapse() : this.expand(),
                    this._options.onToggle(this);
            }),
            t
        );
    })();
function rr() {
    document.querySelectorAll("[data-collapse-toggle]").forEach(function (t) {
        var e = t.getAttribute("data-collapse-toggle"),
            n = document.getElementById(e);
        n
            ? new ts(n, t)
            : console.error(
                  'The target element with id "'.concat(
                      e,
                      '" does not exist. Please check the data-collapse-toggle attribute.'
                  )
              );
    });
}
typeof window < "u" && ((window.Collapse = ts), (window.initCollapses = rr));
var bt =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (bt =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                bt.apply(this, arguments)
            );
        },
    Re = {
        defaultPosition: 0,
        indicators: {
            items: [],
            activeClasses: "bg-white dark:bg-gray-800",
            inactiveClasses:
                "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        },
        interval: 3e3,
        onNext: function () {},
        onPrev: function () {},
        onChange: function () {},
    },
    es = (function () {
        function t(e, n) {
            e === void 0 && (e = []),
                n === void 0 && (n = Re),
                (this._items = e),
                (this._options = bt(bt(bt({}, Re), n), {
                    indicators: bt(bt({}, Re.indicators), n.indicators),
                })),
                (this._activeItem = this.getItem(
                    this._options.defaultPosition
                )),
                (this._indicators = this._options.indicators.items),
                (this._intervalDuration = this._options.interval),
                (this._intervalInstance = null),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                this._items.map(function (n) {
                    n.el.classList.add(
                        "absolute",
                        "inset-0",
                        "transition-transform",
                        "transform"
                    );
                }),
                    this._getActiveItem()
                        ? this.slideTo(this._getActiveItem().position)
                        : this.slideTo(0),
                    this._indicators.map(function (n, r) {
                        n.el.addEventListener("click", function () {
                            e.slideTo(r);
                        });
                    });
            }),
            (t.prototype.getItem = function (e) {
                return this._items[e];
            }),
            (t.prototype.slideTo = function (e) {
                var n = this._items[e],
                    r = {
                        left:
                            n.position === 0
                                ? this._items[this._items.length - 1]
                                : this._items[n.position - 1],
                        middle: n,
                        right:
                            n.position === this._items.length - 1
                                ? this._items[0]
                                : this._items[n.position + 1],
                    };
                this._rotate(r),
                    this._setActiveItem(n),
                    this._intervalInstance && (this.pause(), this.cycle()),
                    this._options.onChange(this);
            }),
            (t.prototype.next = function () {
                var e = this._getActiveItem(),
                    n = null;
                e.position === this._items.length - 1
                    ? (n = this._items[0])
                    : (n = this._items[e.position + 1]),
                    this.slideTo(n.position),
                    this._options.onNext(this);
            }),
            (t.prototype.prev = function () {
                var e = this._getActiveItem(),
                    n = null;
                e.position === 0
                    ? (n = this._items[this._items.length - 1])
                    : (n = this._items[e.position - 1]),
                    this.slideTo(n.position),
                    this._options.onPrev(this);
            }),
            (t.prototype._rotate = function (e) {
                this._items.map(function (n) {
                    n.el.classList.add("hidden");
                }),
                    e.left.el.classList.remove(
                        "-translate-x-full",
                        "translate-x-full",
                        "translate-x-0",
                        "hidden",
                        "z-20"
                    ),
                    e.left.el.classList.add("-translate-x-full", "z-10"),
                    e.middle.el.classList.remove(
                        "-translate-x-full",
                        "translate-x-full",
                        "translate-x-0",
                        "hidden",
                        "z-10"
                    ),
                    e.middle.el.classList.add("translate-x-0", "z-20"),
                    e.right.el.classList.remove(
                        "-translate-x-full",
                        "translate-x-full",
                        "translate-x-0",
                        "hidden",
                        "z-20"
                    ),
                    e.right.el.classList.add("translate-x-full", "z-10");
            }),
            (t.prototype.cycle = function () {
                var e = this;
                typeof window < "u" &&
                    (this._intervalInstance = window.setInterval(function () {
                        e.next();
                    }, this._intervalDuration));
            }),
            (t.prototype.pause = function () {
                clearInterval(this._intervalInstance);
            }),
            (t.prototype._getActiveItem = function () {
                return this._activeItem;
            }),
            (t.prototype._setActiveItem = function (e) {
                var n,
                    r,
                    i = this;
                this._activeItem = e;
                var s = e.position;
                this._indicators.length &&
                    (this._indicators.map(function (o) {
                        var a, c;
                        o.el.setAttribute("aria-current", "false"),
                            (a = o.el.classList).remove.apply(
                                a,
                                i._options.indicators.activeClasses.split(" ")
                            ),
                            (c = o.el.classList).add.apply(
                                c,
                                i._options.indicators.inactiveClasses.split(" ")
                            );
                    }),
                    (n = this._indicators[s].el.classList).add.apply(
                        n,
                        this._options.indicators.activeClasses.split(" ")
                    ),
                    (r = this._indicators[s].el.classList).remove.apply(
                        r,
                        this._options.indicators.inactiveClasses.split(" ")
                    ),
                    this._indicators[s].el.setAttribute(
                        "aria-current",
                        "true"
                    ));
            }),
            t
        );
    })();
function ir() {
    document.querySelectorAll("[data-carousel]").forEach(function (t) {
        var e = t.getAttribute("data-carousel-interval"),
            n = t.getAttribute("data-carousel") === "slide",
            r = [],
            i = 0;
        t.querySelectorAll("[data-carousel-item]").length &&
            Array.from(t.querySelectorAll("[data-carousel-item]")).map(
                function (u, l) {
                    r.push({ position: l, el: u }),
                        u.getAttribute("data-carousel-item") === "active" &&
                            (i = l);
                }
            );
        var s = [];
        t.querySelectorAll("[data-carousel-slide-to]").length &&
            Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(
                function (u) {
                    s.push({
                        position: parseInt(
                            u.getAttribute("data-carousel-slide-to")
                        ),
                        el: u,
                    });
                }
            );
        var o = new es(r, {
            defaultPosition: i,
            indicators: { items: s },
            interval: e || Re.interval,
        });
        n && o.cycle();
        var a = t.querySelector("[data-carousel-next]"),
            c = t.querySelector("[data-carousel-prev]");
        a &&
            a.addEventListener("click", function () {
                o.next();
            }),
            c &&
                c.addEventListener("click", function () {
                    o.prev();
                });
    });
}
typeof window < "u" && ((window.Carousel = es), (window.initCarousels = ir));
var Fe =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Fe =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                Fe.apply(this, arguments)
            );
        },
    li = {
        transition: "transition-opacity",
        duration: 300,
        timing: "ease-out",
        onHide: function () {},
    },
    ns = (function () {
        function t(e, n, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                r === void 0 && (r = li),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = Fe(Fe({}, li), r)),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                this._triggerEl &&
                    this._triggerEl.addEventListener("click", function () {
                        e.hide();
                    });
            }),
            (t.prototype.hide = function () {
                var e = this;
                this._targetEl.classList.add(
                    this._options.transition,
                    "duration-".concat(this._options.duration),
                    this._options.timing,
                    "opacity-0"
                ),
                    setTimeout(function () {
                        e._targetEl.classList.add("hidden");
                    }, this._options.duration),
                    this._options.onHide(this, this._targetEl);
            }),
            t
        );
    })();
function sr() {
    document.querySelectorAll("[data-dismiss-target]").forEach(function (t) {
        var e = t.getAttribute("data-dismiss-target"),
            n = document.querySelector(e);
        n
            ? new ns(n, t)
            : console.error(
                  'The dismiss element with id "'.concat(
                      e,
                      '" does not exist. Please check the data-dismiss-target attribute.'
                  )
              );
    });
}
typeof window < "u" && ((window.Dismiss = ns), (window.initDismisses = sr));
var B = "top",
    q = "bottom",
    U = "right",
    N = "left",
    or = "auto",
    ae = [B, q, U, N],
    Rt = "start",
    ne = "end",
    tc = "clippingParents",
    rs = "viewport",
    Vt = "popper",
    ec = "reference",
    ui = ae.reduce(function (t, e) {
        return t.concat([e + "-" + Rt, e + "-" + ne]);
    }, []),
    is = [].concat(ae, [or]).reduce(function (t, e) {
        return t.concat([e, e + "-" + Rt, e + "-" + ne]);
    }, []),
    nc = "beforeRead",
    rc = "read",
    ic = "afterRead",
    sc = "beforeMain",
    oc = "main",
    ac = "afterMain",
    cc = "beforeWrite",
    lc = "write",
    uc = "afterWrite",
    fc = [nc, rc, ic, sc, oc, ac, cc, lc, uc];
function G(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
}
function F(t) {
    if (t == null) return window;
    if (t.toString() !== "[object Window]") {
        var e = t.ownerDocument;
        return (e && e.defaultView) || window;
    }
    return t;
}
function Lt(t) {
    var e = F(t).Element;
    return t instanceof e || t instanceof Element;
}
function $(t) {
    var e = F(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
}
function ar(t) {
    if (typeof ShadowRoot > "u") return !1;
    var e = F(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
}
function dc(t) {
    var e = t.state;
    Object.keys(e.elements).forEach(function (n) {
        var r = e.styles[n] || {},
            i = e.attributes[n] || {},
            s = e.elements[n];
        !$(s) ||
            !G(s) ||
            (Object.assign(s.style, r),
            Object.keys(i).forEach(function (o) {
                var a = i[o];
                a === !1
                    ? s.removeAttribute(o)
                    : s.setAttribute(o, a === !0 ? "" : a);
            }));
    });
}
function pc(t) {
    var e = t.state,
        n = {
            popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
        };
    return (
        Object.assign(e.elements.popper.style, n.popper),
        (e.styles = n),
        e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
        function () {
            Object.keys(e.elements).forEach(function (r) {
                var i = e.elements[r],
                    s = e.attributes[r] || {},
                    o = Object.keys(
                        e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]
                    ),
                    a = o.reduce(function (c, u) {
                        return (c[u] = ""), c;
                    }, {});
                !$(i) ||
                    !G(i) ||
                    (Object.assign(i.style, a),
                    Object.keys(s).forEach(function (c) {
                        i.removeAttribute(c);
                    }));
            });
        }
    );
}
const hc = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: dc,
    effect: pc,
    requires: ["computeStyles"],
};
function Y(t) {
    return t.split("-")[0];
}
var xt = Math.max,
    He = Math.min,
    It = Math.round;
function Tn() {
    var t = navigator.userAgentData;
    return t != null && t.brands && Array.isArray(t.brands)
        ? t.brands
              .map(function (e) {
                  return e.brand + "/" + e.version;
              })
              .join(" ")
        : navigator.userAgent;
}
function ss() {
    return !/^((?!chrome|android).)*safari/i.test(Tn());
}
function Dt(t, e, n) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    var r = t.getBoundingClientRect(),
        i = 1,
        s = 1;
    e &&
        $(t) &&
        ((i = (t.offsetWidth > 0 && It(r.width) / t.offsetWidth) || 1),
        (s = (t.offsetHeight > 0 && It(r.height) / t.offsetHeight) || 1));
    var o = Lt(t) ? F(t) : window,
        a = o.visualViewport,
        c = !ss() && n,
        u = (r.left + (c && a ? a.offsetLeft : 0)) / i,
        l = (r.top + (c && a ? a.offsetTop : 0)) / s,
        d = r.width / i,
        v = r.height / s;
    return {
        width: d,
        height: v,
        top: l,
        right: u + d,
        bottom: l + v,
        left: u,
        x: u,
        y: l,
    };
}
function cr(t) {
    var e = Dt(t),
        n = t.offsetWidth,
        r = t.offsetHeight;
    return (
        Math.abs(e.width - n) <= 1 && (n = e.width),
        Math.abs(e.height - r) <= 1 && (r = e.height),
        { x: t.offsetLeft, y: t.offsetTop, width: n, height: r }
    );
}
function os(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && ar(n)) {
        var r = e;
        do {
            if (r && t.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
        } while (r);
    }
    return !1;
}
function tt(t) {
    return F(t).getComputedStyle(t);
}
function vc(t) {
    return ["table", "td", "th"].indexOf(G(t)) >= 0;
}
function pt(t) {
    return ((Lt(t) ? t.ownerDocument : t.document) || window.document)
        .documentElement;
}
function tn(t) {
    return G(t) === "html"
        ? t
        : t.assignedSlot || t.parentNode || (ar(t) ? t.host : null) || pt(t);
}
function fi(t) {
    return !$(t) || tt(t).position === "fixed" ? null : t.offsetParent;
}
function gc(t) {
    var e = /firefox/i.test(Tn()),
        n = /Trident/i.test(Tn());
    if (n && $(t)) {
        var r = tt(t);
        if (r.position === "fixed") return null;
    }
    var i = tn(t);
    for (ar(i) && (i = i.host); $(i) && ["html", "body"].indexOf(G(i)) < 0; ) {
        var s = tt(i);
        if (
            s.transform !== "none" ||
            s.perspective !== "none" ||
            s.contain === "paint" ||
            ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
            (e && s.willChange === "filter") ||
            (e && s.filter && s.filter !== "none")
        )
            return i;
        i = i.parentNode;
    }
    return null;
}
function ce(t) {
    for (var e = F(t), n = fi(t); n && vc(n) && tt(n).position === "static"; )
        n = fi(n);
    return n &&
        (G(n) === "html" || (G(n) === "body" && tt(n).position === "static"))
        ? e
        : n || gc(t) || e;
}
function lr(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Xt(t, e, n) {
    return xt(t, He(e, n));
}
function mc(t, e, n) {
    var r = Xt(t, e, n);
    return r > n ? n : r;
}
function as() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
}
function cs(t) {
    return Object.assign({}, as(), t);
}
function ls(t, e) {
    return e.reduce(function (n, r) {
        return (n[r] = t), n;
    }, {});
}
var _c = function (e, n) {
    return (
        (e =
            typeof e == "function"
                ? e(Object.assign({}, n.rects, { placement: n.placement }))
                : e),
        cs(typeof e != "number" ? e : ls(e, ae))
    );
};
function yc(t) {
    var e,
        n = t.state,
        r = t.name,
        i = t.options,
        s = n.elements.arrow,
        o = n.modifiersData.popperOffsets,
        a = Y(n.placement),
        c = lr(a),
        u = [N, U].indexOf(a) >= 0,
        l = u ? "height" : "width";
    if (!(!s || !o)) {
        var d = _c(i.padding, n),
            v = cr(s),
            m = c === "y" ? B : N,
            p = c === "y" ? q : U,
            g =
                n.rects.reference[l] +
                n.rects.reference[c] -
                o[c] -
                n.rects.popper[l],
            h = o[c] - n.rects.reference[c],
            _ = ce(s),
            y = _ ? (c === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
            w = g / 2 - h / 2,
            b = d[m],
            E = y - v[l] - d[p],
            x = y / 2 - v[l] / 2 + w,
            O = Xt(b, x, E),
            k = c;
        n.modifiersData[r] =
            ((e = {}), (e[k] = O), (e.centerOffset = O - x), e);
    }
}
function bc(t) {
    var e = t.state,
        n = t.options,
        r = n.element,
        i = r === void 0 ? "[data-popper-arrow]" : r;
    i != null &&
        ((typeof i == "string" &&
            ((i = e.elements.popper.querySelector(i)), !i)) ||
            (os(e.elements.popper, i) && (e.elements.arrow = i)));
}
const wc = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: yc,
    effect: bc,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
};
function jt(t) {
    return t.split("-")[1];
}
var Ec = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function xc(t, e) {
    var n = t.x,
        r = t.y,
        i = e.devicePixelRatio || 1;
    return { x: It(n * i) / i || 0, y: It(r * i) / i || 0 };
}
function di(t) {
    var e,
        n = t.popper,
        r = t.popperRect,
        i = t.placement,
        s = t.variation,
        o = t.offsets,
        a = t.position,
        c = t.gpuAcceleration,
        u = t.adaptive,
        l = t.roundOffsets,
        d = t.isFixed,
        v = o.x,
        m = v === void 0 ? 0 : v,
        p = o.y,
        g = p === void 0 ? 0 : p,
        h = typeof l == "function" ? l({ x: m, y: g }) : { x: m, y: g };
    (m = h.x), (g = h.y);
    var _ = o.hasOwnProperty("x"),
        y = o.hasOwnProperty("y"),
        w = N,
        b = B,
        E = window;
    if (u) {
        var x = ce(n),
            O = "clientHeight",
            k = "clientWidth";
        if (
            (x === F(n) &&
                ((x = pt(n)),
                tt(x).position !== "static" &&
                    a === "absolute" &&
                    ((O = "scrollHeight"), (k = "scrollWidth"))),
            (x = x),
            i === B || ((i === N || i === U) && s === ne))
        ) {
            b = q;
            var L =
                d && x === E && E.visualViewport
                    ? E.visualViewport.height
                    : x[O];
            (g -= L - r.height), (g *= c ? 1 : -1);
        }
        if (i === N || ((i === B || i === q) && s === ne)) {
            w = U;
            var T =
                d && x === E && E.visualViewport
                    ? E.visualViewport.width
                    : x[k];
            (m -= T - r.width), (m *= c ? 1 : -1);
        }
    }
    var I = Object.assign({ position: a }, u && Ec),
        z = l === !0 ? xc({ x: m, y: g }, F(n)) : { x: m, y: g };
    if (((m = z.x), (g = z.y), c)) {
        var D;
        return Object.assign(
            {},
            I,
            ((D = {}),
            (D[b] = y ? "0" : ""),
            (D[w] = _ ? "0" : ""),
            (D.transform =
                (E.devicePixelRatio || 1) <= 1
                    ? "translate(" + m + "px, " + g + "px)"
                    : "translate3d(" + m + "px, " + g + "px, 0)"),
            D)
        );
    }
    return Object.assign(
        {},
        I,
        ((e = {}),
        (e[b] = y ? g + "px" : ""),
        (e[w] = _ ? m + "px" : ""),
        (e.transform = ""),
        e)
    );
}
function Ac(t) {
    var e = t.state,
        n = t.options,
        r = n.gpuAcceleration,
        i = r === void 0 ? !0 : r,
        s = n.adaptive,
        o = s === void 0 ? !0 : s,
        a = n.roundOffsets,
        c = a === void 0 ? !0 : a,
        u = {
            placement: Y(e.placement),
            variation: jt(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: i,
            isFixed: e.options.strategy === "fixed",
        };
    e.modifiersData.popperOffsets != null &&
        (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            di(
                Object.assign({}, u, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: o,
                    roundOffsets: c,
                })
            )
        )),
        e.modifiersData.arrow != null &&
            (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                di(
                    Object.assign({}, u, {
                        offsets: e.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: c,
                    })
                )
            )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
        }));
}
const Oc = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Ac,
    data: {},
};
var _e = { passive: !0 };
function Sc(t) {
    var e = t.state,
        n = t.instance,
        r = t.options,
        i = r.scroll,
        s = i === void 0 ? !0 : i,
        o = r.resize,
        a = o === void 0 ? !0 : o,
        c = F(e.elements.popper),
        u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
        s &&
            u.forEach(function (l) {
                l.addEventListener("scroll", n.update, _e);
            }),
        a && c.addEventListener("resize", n.update, _e),
        function () {
            s &&
                u.forEach(function (l) {
                    l.removeEventListener("scroll", n.update, _e);
                }),
                a && c.removeEventListener("resize", n.update, _e);
        }
    );
}
const Tc = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Sc,
    data: {},
};
var Lc = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ie(t) {
    return t.replace(/left|right|bottom|top/g, function (e) {
        return Lc[e];
    });
}
var Cc = { start: "end", end: "start" };
function pi(t) {
    return t.replace(/start|end/g, function (e) {
        return Cc[e];
    });
}
function ur(t) {
    var e = F(t),
        n = e.pageXOffset,
        r = e.pageYOffset;
    return { scrollLeft: n, scrollTop: r };
}
function fr(t) {
    return Dt(pt(t)).left + ur(t).scrollLeft;
}
function Pc(t, e) {
    var n = F(t),
        r = pt(t),
        i = n.visualViewport,
        s = r.clientWidth,
        o = r.clientHeight,
        a = 0,
        c = 0;
    if (i) {
        (s = i.width), (o = i.height);
        var u = ss();
        (u || (!u && e === "fixed")) && ((a = i.offsetLeft), (c = i.offsetTop));
    }
    return { width: s, height: o, x: a + fr(t), y: c };
}
function kc(t) {
    var e,
        n = pt(t),
        r = ur(t),
        i = (e = t.ownerDocument) == null ? void 0 : e.body,
        s = xt(
            n.scrollWidth,
            n.clientWidth,
            i ? i.scrollWidth : 0,
            i ? i.clientWidth : 0
        ),
        o = xt(
            n.scrollHeight,
            n.clientHeight,
            i ? i.scrollHeight : 0,
            i ? i.clientHeight : 0
        ),
        a = -r.scrollLeft + fr(t),
        c = -r.scrollTop;
    return (
        tt(i || n).direction === "rtl" &&
            (a += xt(n.clientWidth, i ? i.clientWidth : 0) - s),
        { width: s, height: o, x: a, y: c }
    );
}
function dr(t) {
    var e = tt(t),
        n = e.overflow,
        r = e.overflowX,
        i = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function us(t) {
    return ["html", "body", "#document"].indexOf(G(t)) >= 0
        ? t.ownerDocument.body
        : $(t) && dr(t)
        ? t
        : us(tn(t));
}
function Yt(t, e) {
    var n;
    e === void 0 && (e = []);
    var r = us(t),
        i = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
        s = F(r),
        o = i ? [s].concat(s.visualViewport || [], dr(r) ? r : []) : r,
        a = e.concat(o);
    return i ? a : a.concat(Yt(tn(o)));
}
function Ln(t) {
    return Object.assign({}, t, {
        left: t.x,
        top: t.y,
        right: t.x + t.width,
        bottom: t.y + t.height,
    });
}
function Rc(t, e) {
    var n = Dt(t, !1, e === "fixed");
    return (
        (n.top = n.top + t.clientTop),
        (n.left = n.left + t.clientLeft),
        (n.bottom = n.top + t.clientHeight),
        (n.right = n.left + t.clientWidth),
        (n.width = t.clientWidth),
        (n.height = t.clientHeight),
        (n.x = n.left),
        (n.y = n.top),
        n
    );
}
function hi(t, e, n) {
    return e === rs ? Ln(Pc(t, n)) : Lt(e) ? Rc(e, n) : Ln(kc(pt(t)));
}
function Ic(t) {
    var e = Yt(tn(t)),
        n = ["absolute", "fixed"].indexOf(tt(t).position) >= 0,
        r = n && $(t) ? ce(t) : t;
    return Lt(r)
        ? e.filter(function (i) {
              return Lt(i) && os(i, r) && G(i) !== "body";
          })
        : [];
}
function Dc(t, e, n, r) {
    var i = e === "clippingParents" ? Ic(t) : [].concat(e),
        s = [].concat(i, [n]),
        o = s[0],
        a = s.reduce(function (c, u) {
            var l = hi(t, u, r);
            return (
                (c.top = xt(l.top, c.top)),
                (c.right = He(l.right, c.right)),
                (c.bottom = He(l.bottom, c.bottom)),
                (c.left = xt(l.left, c.left)),
                c
            );
        }, hi(t, o, r));
    return (
        (a.width = a.right - a.left),
        (a.height = a.bottom - a.top),
        (a.x = a.left),
        (a.y = a.top),
        a
    );
}
function fs(t) {
    var e = t.reference,
        n = t.element,
        r = t.placement,
        i = r ? Y(r) : null,
        s = r ? jt(r) : null,
        o = e.x + e.width / 2 - n.width / 2,
        a = e.y + e.height / 2 - n.height / 2,
        c;
    switch (i) {
        case B:
            c = { x: o, y: e.y - n.height };
            break;
        case q:
            c = { x: o, y: e.y + e.height };
            break;
        case U:
            c = { x: e.x + e.width, y: a };
            break;
        case N:
            c = { x: e.x - n.width, y: a };
            break;
        default:
            c = { x: e.x, y: e.y };
    }
    var u = i ? lr(i) : null;
    if (u != null) {
        var l = u === "y" ? "height" : "width";
        switch (s) {
            case Rt:
                c[u] = c[u] - (e[l] / 2 - n[l] / 2);
                break;
            case ne:
                c[u] = c[u] + (e[l] / 2 - n[l] / 2);
                break;
        }
    }
    return c;
}
function re(t, e) {
    e === void 0 && (e = {});
    var n = e,
        r = n.placement,
        i = r === void 0 ? t.placement : r,
        s = n.strategy,
        o = s === void 0 ? t.strategy : s,
        a = n.boundary,
        c = a === void 0 ? tc : a,
        u = n.rootBoundary,
        l = u === void 0 ? rs : u,
        d = n.elementContext,
        v = d === void 0 ? Vt : d,
        m = n.altBoundary,
        p = m === void 0 ? !1 : m,
        g = n.padding,
        h = g === void 0 ? 0 : g,
        _ = cs(typeof h != "number" ? h : ls(h, ae)),
        y = v === Vt ? ec : Vt,
        w = t.rects.popper,
        b = t.elements[p ? y : v],
        E = Dc(Lt(b) ? b : b.contextElement || pt(t.elements.popper), c, l, o),
        x = Dt(t.elements.reference),
        O = fs({
            reference: x,
            element: w,
            strategy: "absolute",
            placement: i,
        }),
        k = Ln(Object.assign({}, w, O)),
        L = v === Vt ? k : x,
        T = {
            top: E.top - L.top + _.top,
            bottom: L.bottom - E.bottom + _.bottom,
            left: E.left - L.left + _.left,
            right: L.right - E.right + _.right,
        },
        I = t.modifiersData.offset;
    if (v === Vt && I) {
        var z = I[i];
        Object.keys(T).forEach(function (D) {
            var ht = [U, q].indexOf(D) >= 0 ? 1 : -1,
                vt = [B, q].indexOf(D) >= 0 ? "y" : "x";
            T[D] += z[vt] * ht;
        });
    }
    return T;
}
function jc(t, e) {
    e === void 0 && (e = {});
    var n = e,
        r = n.placement,
        i = n.boundary,
        s = n.rootBoundary,
        o = n.padding,
        a = n.flipVariations,
        c = n.allowedAutoPlacements,
        u = c === void 0 ? is : c,
        l = jt(r),
        d = l
            ? a
                ? ui
                : ui.filter(function (p) {
                      return jt(p) === l;
                  })
            : ae,
        v = d.filter(function (p) {
            return u.indexOf(p) >= 0;
        });
    v.length === 0 && (v = d);
    var m = v.reduce(function (p, g) {
        return (
            (p[g] = re(t, {
                placement: g,
                boundary: i,
                rootBoundary: s,
                padding: o,
            })[Y(g)]),
            p
        );
    }, {});
    return Object.keys(m).sort(function (p, g) {
        return m[p] - m[g];
    });
}
function Bc(t) {
    if (Y(t) === or) return [];
    var e = Ie(t);
    return [pi(t), e, pi(e)];
}
function Nc(t) {
    var e = t.state,
        n = t.options,
        r = t.name;
    if (!e.modifiersData[r]._skip) {
        for (
            var i = n.mainAxis,
                s = i === void 0 ? !0 : i,
                o = n.altAxis,
                a = o === void 0 ? !0 : o,
                c = n.fallbackPlacements,
                u = n.padding,
                l = n.boundary,
                d = n.rootBoundary,
                v = n.altBoundary,
                m = n.flipVariations,
                p = m === void 0 ? !0 : m,
                g = n.allowedAutoPlacements,
                h = e.options.placement,
                _ = Y(h),
                y = _ === h,
                w = c || (y || !p ? [Ie(h)] : Bc(h)),
                b = [h].concat(w).reduce(function (Ct, nt) {
                    return Ct.concat(
                        Y(nt) === or
                            ? jc(e, {
                                  placement: nt,
                                  boundary: l,
                                  rootBoundary: d,
                                  padding: u,
                                  flipVariations: p,
                                  allowedAutoPlacements: g,
                              })
                            : nt
                    );
                }, []),
                E = e.rects.reference,
                x = e.rects.popper,
                O = new Map(),
                k = !0,
                L = b[0],
                T = 0;
            T < b.length;
            T++
        ) {
            var I = b[T],
                z = Y(I),
                D = jt(I) === Rt,
                ht = [B, q].indexOf(z) >= 0,
                vt = ht ? "width" : "height",
                M = re(e, {
                    placement: I,
                    boundary: l,
                    rootBoundary: d,
                    altBoundary: v,
                    padding: u,
                }),
                V = ht ? (D ? U : N) : D ? q : B;
            E[vt] > x[vt] && (V = Ie(V));
            var pe = Ie(V),
                gt = [];
            if (
                (s && gt.push(M[z] <= 0),
                a && gt.push(M[V] <= 0, M[pe] <= 0),
                gt.every(function (Ct) {
                    return Ct;
                }))
            ) {
                (L = I), (k = !1);
                break;
            }
            O.set(I, gt);
        }
        if (k)
            for (
                var he = p ? 3 : 1,
                    un = function (nt) {
                        var Ut = b.find(function (ge) {
                            var mt = O.get(ge);
                            if (mt)
                                return mt.slice(0, nt).every(function (fn) {
                                    return fn;
                                });
                        });
                        if (Ut) return (L = Ut), "break";
                    },
                    qt = he;
                qt > 0;
                qt--
            ) {
                var ve = un(qt);
                if (ve === "break") break;
            }
        e.placement !== L &&
            ((e.modifiersData[r]._skip = !0),
            (e.placement = L),
            (e.reset = !0));
    }
}
const Mc = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Nc,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
function vi(t, e, n) {
    return (
        n === void 0 && (n = { x: 0, y: 0 }),
        {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
        }
    );
}
function gi(t) {
    return [B, U, q, N].some(function (e) {
        return t[e] >= 0;
    });
}
function Fc(t) {
    var e = t.state,
        n = t.name,
        r = e.rects.reference,
        i = e.rects.popper,
        s = e.modifiersData.preventOverflow,
        o = re(e, { elementContext: "reference" }),
        a = re(e, { altBoundary: !0 }),
        c = vi(o, r),
        u = vi(a, i, s),
        l = gi(c),
        d = gi(u);
    (e.modifiersData[n] = {
        referenceClippingOffsets: c,
        popperEscapeOffsets: u,
        isReferenceHidden: l,
        hasPopperEscaped: d,
    }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": l,
            "data-popper-escaped": d,
        }));
}
const Hc = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Fc,
};
function $c(t, e, n) {
    var r = Y(t),
        i = [N, B].indexOf(r) >= 0 ? -1 : 1,
        s =
            typeof n == "function"
                ? n(Object.assign({}, e, { placement: t }))
                : n,
        o = s[0],
        a = s[1];
    return (
        (o = o || 0),
        (a = (a || 0) * i),
        [N, U].indexOf(r) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
}
function qc(t) {
    var e = t.state,
        n = t.options,
        r = t.name,
        i = n.offset,
        s = i === void 0 ? [0, 0] : i,
        o = is.reduce(function (l, d) {
            return (l[d] = $c(d, e.rects, s)), l;
        }, {}),
        a = o[e.placement],
        c = a.x,
        u = a.y;
    e.modifiersData.popperOffsets != null &&
        ((e.modifiersData.popperOffsets.x += c),
        (e.modifiersData.popperOffsets.y += u)),
        (e.modifiersData[r] = o);
}
const Uc = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: qc,
};
function zc(t) {
    var e = t.state,
        n = t.name;
    e.modifiersData[n] = fs({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
    });
}
const Vc = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: zc,
    data: {},
};
function Wc(t) {
    return t === "x" ? "y" : "x";
}
function Kc(t) {
    var e = t.state,
        n = t.options,
        r = t.name,
        i = n.mainAxis,
        s = i === void 0 ? !0 : i,
        o = n.altAxis,
        a = o === void 0 ? !1 : o,
        c = n.boundary,
        u = n.rootBoundary,
        l = n.altBoundary,
        d = n.padding,
        v = n.tether,
        m = v === void 0 ? !0 : v,
        p = n.tetherOffset,
        g = p === void 0 ? 0 : p,
        h = re(e, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }),
        _ = Y(e.placement),
        y = jt(e.placement),
        w = !y,
        b = lr(_),
        E = Wc(b),
        x = e.modifiersData.popperOffsets,
        O = e.rects.reference,
        k = e.rects.popper,
        L =
            typeof g == "function"
                ? g(Object.assign({}, e.rects, { placement: e.placement }))
                : g,
        T =
            typeof L == "number"
                ? { mainAxis: L, altAxis: L }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
        I = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        z = { x: 0, y: 0 };
    if (x) {
        if (s) {
            var D,
                ht = b === "y" ? B : N,
                vt = b === "y" ? q : U,
                M = b === "y" ? "height" : "width",
                V = x[b],
                pe = V + h[ht],
                gt = V - h[vt],
                he = m ? -k[M] / 2 : 0,
                un = y === Rt ? O[M] : k[M],
                qt = y === Rt ? -k[M] : -O[M],
                ve = e.elements.arrow,
                Ct = m && ve ? cr(ve) : { width: 0, height: 0 },
                nt = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : as(),
                Ut = nt[ht],
                ge = nt[vt],
                mt = Xt(0, O[M], Ct[M]),
                fn = w
                    ? O[M] / 2 - he - mt - Ut - T.mainAxis
                    : un - mt - Ut - T.mainAxis,
                ko = w
                    ? -O[M] / 2 + he + mt + ge + T.mainAxis
                    : qt + mt + ge + T.mainAxis,
                dn = e.elements.arrow && ce(e.elements.arrow),
                Ro = dn
                    ? b === "y"
                        ? dn.clientTop || 0
                        : dn.clientLeft || 0
                    : 0,
                qr = (D = I == null ? void 0 : I[b]) != null ? D : 0,
                Io = V + fn - qr - Ro,
                Do = V + ko - qr,
                Ur = Xt(m ? He(pe, Io) : pe, V, m ? xt(gt, Do) : gt);
            (x[b] = Ur), (z[b] = Ur - V);
        }
        if (a) {
            var zr,
                jo = b === "x" ? B : N,
                Bo = b === "x" ? q : U,
                _t = x[E],
                me = E === "y" ? "height" : "width",
                Vr = _t + h[jo],
                Wr = _t - h[Bo],
                pn = [B, N].indexOf(_) !== -1,
                Kr = (zr = I == null ? void 0 : I[E]) != null ? zr : 0,
                Jr = pn ? Vr : _t - O[me] - k[me] - Kr + T.altAxis,
                Xr = pn ? _t + O[me] + k[me] - Kr - T.altAxis : Wr,
                Yr =
                    m && pn ? mc(Jr, _t, Xr) : Xt(m ? Jr : Vr, _t, m ? Xr : Wr);
            (x[E] = Yr), (z[E] = Yr - _t);
        }
        e.modifiersData[r] = z;
    }
}
const Jc = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Kc,
    requiresIfExists: ["offset"],
};
function Xc(t) {
    return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function Yc(t) {
    return t === F(t) || !$(t) ? ur(t) : Xc(t);
}
function Gc(t) {
    var e = t.getBoundingClientRect(),
        n = It(e.width) / t.offsetWidth || 1,
        r = It(e.height) / t.offsetHeight || 1;
    return n !== 1 || r !== 1;
}
function Qc(t, e, n) {
    n === void 0 && (n = !1);
    var r = $(e),
        i = $(e) && Gc(e),
        s = pt(e),
        o = Dt(t, i, n),
        a = { scrollLeft: 0, scrollTop: 0 },
        c = { x: 0, y: 0 };
    return (
        (r || (!r && !n)) &&
            ((G(e) !== "body" || dr(s)) && (a = Yc(e)),
            $(e)
                ? ((c = Dt(e, !0)), (c.x += e.clientLeft), (c.y += e.clientTop))
                : s && (c.x = fr(s))),
        {
            x: o.left + a.scrollLeft - c.x,
            y: o.top + a.scrollTop - c.y,
            width: o.width,
            height: o.height,
        }
    );
}
function Zc(t) {
    var e = new Map(),
        n = new Set(),
        r = [];
    t.forEach(function (s) {
        e.set(s.name, s);
    });
    function i(s) {
        n.add(s.name);
        var o = [].concat(s.requires || [], s.requiresIfExists || []);
        o.forEach(function (a) {
            if (!n.has(a)) {
                var c = e.get(a);
                c && i(c);
            }
        }),
            r.push(s);
    }
    return (
        t.forEach(function (s) {
            n.has(s.name) || i(s);
        }),
        r
    );
}
function tl(t) {
    var e = Zc(t);
    return fc.reduce(function (n, r) {
        return n.concat(
            e.filter(function (i) {
                return i.phase === r;
            })
        );
    }, []);
}
function el(t) {
    var e;
    return function () {
        return (
            e ||
                (e = new Promise(function (n) {
                    Promise.resolve().then(function () {
                        (e = void 0), n(t());
                    });
                })),
            e
        );
    };
}
function nl(t) {
    var e = t.reduce(function (n, r) {
        var i = n[r.name];
        return (
            (n[r.name] = i
                ? Object.assign({}, i, r, {
                      options: Object.assign({}, i.options, r.options),
                      data: Object.assign({}, i.data, r.data),
                  })
                : r),
            n
        );
    }, {});
    return Object.keys(e).map(function (n) {
        return e[n];
    });
}
var mi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function _i() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
    return !e.some(function (r) {
        return !(r && typeof r.getBoundingClientRect == "function");
    });
}
function rl(t) {
    t === void 0 && (t = {});
    var e = t,
        n = e.defaultModifiers,
        r = n === void 0 ? [] : n,
        i = e.defaultOptions,
        s = i === void 0 ? mi : i;
    return function (a, c, u) {
        u === void 0 && (u = s);
        var l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, mi, s),
                modifiersData: {},
                elements: { reference: a, popper: c },
                attributes: {},
                styles: {},
            },
            d = [],
            v = !1,
            m = {
                state: l,
                setOptions: function (_) {
                    var y = typeof _ == "function" ? _(l.options) : _;
                    g(),
                        (l.options = Object.assign({}, s, l.options, y)),
                        (l.scrollParents = {
                            reference: Lt(a)
                                ? Yt(a)
                                : a.contextElement
                                ? Yt(a.contextElement)
                                : [],
                            popper: Yt(c),
                        });
                    var w = tl(nl([].concat(r, l.options.modifiers)));
                    return (
                        (l.orderedModifiers = w.filter(function (b) {
                            return b.enabled;
                        })),
                        p(),
                        m.update()
                    );
                },
                forceUpdate: function () {
                    if (!v) {
                        var _ = l.elements,
                            y = _.reference,
                            w = _.popper;
                        if (_i(y, w)) {
                            (l.rects = {
                                reference: Qc(
                                    y,
                                    ce(w),
                                    l.options.strategy === "fixed"
                                ),
                                popper: cr(w),
                            }),
                                (l.reset = !1),
                                (l.placement = l.options.placement),
                                l.orderedModifiers.forEach(function (T) {
                                    return (l.modifiersData[T.name] =
                                        Object.assign({}, T.data));
                                });
                            for (
                                var b = 0;
                                b < l.orderedModifiers.length;
                                b++
                            ) {
                                if (l.reset === !0) {
                                    (l.reset = !1), (b = -1);
                                    continue;
                                }
                                var E = l.orderedModifiers[b],
                                    x = E.fn,
                                    O = E.options,
                                    k = O === void 0 ? {} : O,
                                    L = E.name;
                                typeof x == "function" &&
                                    (l =
                                        x({
                                            state: l,
                                            options: k,
                                            name: L,
                                            instance: m,
                                        }) || l);
                            }
                        }
                    }
                },
                update: el(function () {
                    return new Promise(function (h) {
                        m.forceUpdate(), h(l);
                    });
                }),
                destroy: function () {
                    g(), (v = !0);
                },
            };
        if (!_i(a, c)) return m;
        m.setOptions(u).then(function (h) {
            !v && u.onFirstUpdate && u.onFirstUpdate(h);
        });
        function p() {
            l.orderedModifiers.forEach(function (h) {
                var _ = h.name,
                    y = h.options,
                    w = y === void 0 ? {} : y,
                    b = h.effect;
                if (typeof b == "function") {
                    var E = b({ state: l, name: _, instance: m, options: w }),
                        x = function () {};
                    d.push(E || x);
                }
            });
        }
        function g() {
            d.forEach(function (h) {
                return h();
            }),
                (d = []);
        }
        return m;
    };
}
var il = [Tc, Vc, Oc, hc, Uc, Mc, Jc, wc, Hc],
    pr = rl({ defaultModifiers: il }),
    st =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (st =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                st.apply(this, arguments)
            );
        },
    ye =
        (globalThis && globalThis.__spreadArray) ||
        function (t, e, n) {
            if (n || arguments.length === 2)
                for (var r = 0, i = e.length, s; r < i; r++)
                    (s || !(r in e)) &&
                        (s || (s = Array.prototype.slice.call(e, 0, r)),
                        (s[r] = e[r]));
            return t.concat(s || Array.prototype.slice.call(e));
        },
    ot = {
        placement: "bottom",
        triggerType: "click",
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        ignoreClickOutsideClass: !1,
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    ds = (function () {
        function t(e, n, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                r === void 0 && (r = ot),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = st(st({}, ot), r)),
                (this._popperInstance = this._createPopperInstance()),
                (this._visible = !1),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                this._triggerEl && this._setupEventListeners();
            }),
            (t.prototype._setupEventListeners = function () {
                var e = this,
                    n = this._getTriggerEvents();
                this._options.triggerType === "click" &&
                    n.showEvents.forEach(function (r) {
                        e._triggerEl.addEventListener(r, function () {
                            e.toggle();
                        });
                    }),
                    this._options.triggerType === "hover" &&
                        (n.showEvents.forEach(function (r) {
                            e._triggerEl.addEventListener(r, function () {
                                r === "click"
                                    ? e.toggle()
                                    : setTimeout(function () {
                                          e.show();
                                      }, e._options.delay);
                            }),
                                e._targetEl.addEventListener(r, function () {
                                    e.show();
                                });
                        }),
                        n.hideEvents.forEach(function (r) {
                            e._triggerEl.addEventListener(r, function () {
                                setTimeout(function () {
                                    e._targetEl.matches(":hover") || e.hide();
                                }, e._options.delay);
                            }),
                                e._targetEl.addEventListener(r, function () {
                                    setTimeout(function () {
                                        e._triggerEl.matches(":hover") ||
                                            e.hide();
                                    }, e._options.delay);
                                });
                        }));
            }),
            (t.prototype._createPopperInstance = function () {
                return pr(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [
                                    this._options.offsetSkidding,
                                    this._options.offsetDistance,
                                ],
                            },
                        },
                    ],
                });
            }),
            (t.prototype._setupClickOutsideListener = function () {
                var e = this;
                (this._clickOutsideEventListener = function (n) {
                    e._handleClickOutside(n, e._targetEl);
                }),
                    document.body.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    );
            }),
            (t.prototype._removeClickOutsideListener = function () {
                document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                );
            }),
            (t.prototype._handleClickOutside = function (e, n) {
                var r = e.target,
                    i = this._options.ignoreClickOutsideClass,
                    s = !1;
                if (i) {
                    var o = document.querySelectorAll(".".concat(i));
                    o.forEach(function (a) {
                        if (a.contains(r)) {
                            s = !0;
                            return;
                        }
                    });
                }
                r !== n &&
                    !n.contains(r) &&
                    !this._triggerEl.contains(r) &&
                    !s &&
                    this.isVisible() &&
                    this.hide();
            }),
            (t.prototype._getTriggerEvents = function () {
                switch (this._options.triggerType) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "click"],
                            hideEvents: ["mouseleave"],
                        };
                    case "click":
                        return { showEvents: ["click"], hideEvents: [] };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return { showEvents: ["click"], hideEvents: [] };
                }
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show(),
                    this._options.onToggle(this);
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("hidden"),
                    this._targetEl.classList.add("block"),
                    this._popperInstance.setOptions(function (e) {
                        return st(st({}, e), {
                            modifiers: ye(
                                ye([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !0 }],
                                !1
                            ),
                        });
                    }),
                    this._setupClickOutsideListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.remove("block"),
                    this._targetEl.classList.add("hidden"),
                    this._popperInstance.setOptions(function (e) {
                        return st(st({}, e), {
                            modifiers: ye(
                                ye([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !1 }],
                                !1
                            ),
                        });
                    }),
                    (this._visible = !1),
                    this._removeClickOutsideListener(),
                    this._options.onHide(this);
            }),
            t
        );
    })();
function hr() {
    document.querySelectorAll("[data-dropdown-toggle]").forEach(function (t) {
        var e = t.getAttribute("data-dropdown-toggle"),
            n = document.getElementById(e);
        if (n) {
            var r = t.getAttribute("data-dropdown-placement"),
                i = t.getAttribute("data-dropdown-offset-skidding"),
                s = t.getAttribute("data-dropdown-offset-distance"),
                o = t.getAttribute("data-dropdown-trigger"),
                a = t.getAttribute("data-dropdown-delay"),
                c = t.getAttribute("data-dropdown-ignore-click-outside-class");
            new ds(n, t, {
                placement: r || ot.placement,
                triggerType: o || ot.triggerType,
                offsetSkidding: i ? parseInt(i) : ot.offsetSkidding,
                offsetDistance: s ? parseInt(s) : ot.offsetDistance,
                delay: a ? parseInt(a) : ot.delay,
                ignoreClickOutsideClass: c || ot.ignoreClickOutsideClass,
            });
        } else console.error('The dropdown element with id "'.concat(e, '" does not exist. Please check the data-dropdown-toggle attribute.'));
    });
}
typeof window < "u" && ((window.Dropdown = ds), (window.initDropdowns = hr));
var $e =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                ($e =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                $e.apply(this, arguments)
            );
        },
    Pt = {
        placement: "center",
        backdropClasses:
            "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        backdrop: "dynamic",
        closable: !0,
        onHide: function () {},
        onShow: function () {},
        onToggle: function () {},
    },
    Cn = (function () {
        function t(e, n) {
            e === void 0 && (e = null),
                n === void 0 && (n = Pt),
                (this._targetEl = e),
                (this._options = $e($e({}, Pt), n)),
                (this._isHidden = !0),
                (this._backdropEl = null),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                this._targetEl &&
                    this._getPlacementClasses().map(function (n) {
                        e._targetEl.classList.add(n);
                    });
            }),
            (t.prototype._createBackdrop = function () {
                var e;
                if (this._isHidden) {
                    var n = document.createElement("div");
                    n.setAttribute("modal-backdrop", ""),
                        (e = n.classList).add.apply(
                            e,
                            this._options.backdropClasses.split(" ")
                        ),
                        document.querySelector("body").append(n),
                        (this._backdropEl = n);
                }
            }),
            (t.prototype._destroyBackdropEl = function () {
                this._isHidden ||
                    document.querySelector("[modal-backdrop]").remove();
            }),
            (t.prototype._setupModalCloseEventListeners = function () {
                var e = this;
                this._options.backdrop === "dynamic" &&
                    ((this._clickOutsideEventListener = function (n) {
                        e._handleOutsideClick(n.target);
                    }),
                    this._targetEl.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    )),
                    (this._keydownEventListener = function (n) {
                        n.key === "Escape" && e.hide();
                    }),
                    document.body.addEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._removeModalCloseEventListeners = function () {
                this._options.backdrop === "dynamic" &&
                    this._targetEl.removeEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    ),
                    document.body.removeEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._handleOutsideClick = function (e) {
                (e === this._targetEl ||
                    (e === this._backdropEl && this.isVisible())) &&
                    this.hide();
            }),
            (t.prototype._getPlacementClasses = function () {
                switch (this._options.placement) {
                    case "top-left":
                        return ["justify-start", "items-start"];
                    case "top-center":
                        return ["justify-center", "items-start"];
                    case "top-right":
                        return ["justify-end", "items-start"];
                    case "center-left":
                        return ["justify-start", "items-center"];
                    case "center":
                        return ["justify-center", "items-center"];
                    case "center-right":
                        return ["justify-end", "items-center"];
                    case "bottom-left":
                        return ["justify-start", "items-end"];
                    case "bottom-center":
                        return ["justify-center", "items-end"];
                    case "bottom-right":
                        return ["justify-end", "items-end"];
                    default:
                        return ["justify-center", "items-center"];
                }
            }),
            (t.prototype.toggle = function () {
                this._isHidden ? this.show() : this.hide(),
                    this._options.onToggle(this);
            }),
            (t.prototype.show = function () {
                this.isHidden &&
                    (this._targetEl.classList.add("flex"),
                    this._targetEl.classList.remove("hidden"),
                    this._targetEl.setAttribute("aria-modal", "true"),
                    this._targetEl.setAttribute("role", "dialog"),
                    this._targetEl.removeAttribute("aria-hidden"),
                    this._createBackdrop(),
                    (this._isHidden = !1),
                    document.body.classList.add("overflow-hidden"),
                    this._options.closable &&
                        this._setupModalCloseEventListeners(),
                    this._options.onShow(this));
            }),
            (t.prototype.hide = function () {
                this.isVisible &&
                    (this._targetEl.classList.add("hidden"),
                    this._targetEl.classList.remove("flex"),
                    this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.removeAttribute("aria-modal"),
                    this._targetEl.removeAttribute("role"),
                    this._destroyBackdropEl(),
                    (this._isHidden = !0),
                    document.body.classList.remove("overflow-hidden"),
                    this._options.closable &&
                        this._removeModalCloseEventListeners(),
                    this._options.onHide(this));
            }),
            (t.prototype.isVisible = function () {
                return !this._isHidden;
            }),
            (t.prototype.isHidden = function () {
                return this._isHidden;
            }),
            t
        );
    })(),
    be = function (t, e) {
        return e.some(function (n) {
            return n.id === t;
        })
            ? e.find(function (n) {
                  return n.id === t;
              })
            : null;
    };
function vr() {
    var t = [];
    document.querySelectorAll("[data-modal-target]").forEach(function (e) {
        var n = e.getAttribute("data-modal-target"),
            r = document.getElementById(n);
        if (r) {
            var i = r.getAttribute("data-modal-placement"),
                s = r.getAttribute("data-modal-backdrop");
            be(n, t) ||
                t.push({
                    id: n,
                    object: new Cn(r, {
                        placement: i || Pt.placement,
                        backdrop: s || Pt.backdrop,
                    }),
                });
        } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
    }),
        document.querySelectorAll("[data-modal-toggle]").forEach(function (e) {
            var n = e.getAttribute("data-modal-toggle"),
                r = document.getElementById(n);
            if (r) {
                var i = r.getAttribute("data-modal-placement"),
                    s = r.getAttribute("data-modal-backdrop"),
                    o = be(n, t);
                o ||
                    ((o = {
                        id: n,
                        object: new Cn(r, {
                            placement: i || Pt.placement,
                            backdrop: s || Pt.backdrop,
                        }),
                    }),
                    t.push(o)),
                    e.addEventListener("click", function () {
                        o.object.toggle();
                    });
            } else
                console.error(
                    "Modal with id ".concat(
                        n,
                        " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"
                    )
                );
        }),
        document.querySelectorAll("[data-modal-show]").forEach(function (e) {
            var n = e.getAttribute("data-modal-show"),
                r = document.getElementById(n);
            if (r) {
                var i = be(n, t);
                i
                    ? e.addEventListener("click", function () {
                          i.object.isHidden && i.object.show();
                      })
                    : console.error(
                          "Modal with id ".concat(
                              n,
                              " has not been initialized. Please initialize it using the data-modal-target attribute."
                          )
                      );
            } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
        }),
        document.querySelectorAll("[data-modal-hide]").forEach(function (e) {
            var n = e.getAttribute("data-modal-hide"),
                r = document.getElementById(n);
            if (r) {
                var i = be(n, t);
                i
                    ? e.addEventListener("click", function () {
                          i.object.isVisible && i.object.hide();
                      })
                    : console.error(
                          "Modal with id ".concat(
                              n,
                              " has not been initialized. Please initialize it using the data-modal-target attribute."
                          )
                      );
            } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
        });
}
typeof window < "u" && ((window.Modal = Cn), (window.initModals = vr));
var qe =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (qe =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                qe.apply(this, arguments)
            );
        },
    wt = {
        placement: "left",
        bodyScrolling: !1,
        backdrop: !0,
        edge: !1,
        edgeOffset: "bottom-[60px]",
        backdropClasses:
            "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    ps = (function () {
        function t(e, n) {
            e === void 0 && (e = null),
                n === void 0 && (n = wt),
                (this._targetEl = e),
                (this._options = qe(qe({}, wt), n)),
                (this._visible = !1),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                this._targetEl &&
                    (this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.classList.add("transition-transform")),
                    this._getPlacementClasses(this._options.placement).base.map(
                        function (n) {
                            e._targetEl.classList.add(n);
                        }
                    ),
                    document.addEventListener("keydown", function (n) {
                        n.key === "Escape" && e.isVisible() && e.hide();
                    });
            }),
            (t.prototype.hide = function () {
                var e = this;
                this._options.edge
                    ? (this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).active.map(function (n) {
                          e._targetEl.classList.remove(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).inactive.map(function (n) {
                          e._targetEl.classList.add(n);
                      }))
                    : (this._getPlacementClasses(
                          this._options.placement
                      ).active.map(function (n) {
                          e._targetEl.classList.remove(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement
                      ).inactive.map(function (n) {
                          e._targetEl.classList.add(n);
                      })),
                    this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.removeAttribute("aria-modal"),
                    this._targetEl.removeAttribute("role"),
                    this._options.bodyScrolling ||
                        document.body.classList.remove("overflow-hidden"),
                    this._options.backdrop && this._destroyBackdropEl(),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            (t.prototype.show = function () {
                var e = this;
                this._options.edge
                    ? (this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).active.map(function (n) {
                          e._targetEl.classList.add(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement + "-edge"
                      ).inactive.map(function (n) {
                          e._targetEl.classList.remove(n);
                      }))
                    : (this._getPlacementClasses(
                          this._options.placement
                      ).active.map(function (n) {
                          e._targetEl.classList.add(n);
                      }),
                      this._getPlacementClasses(
                          this._options.placement
                      ).inactive.map(function (n) {
                          e._targetEl.classList.remove(n);
                      })),
                    this._targetEl.setAttribute("aria-modal", "true"),
                    this._targetEl.setAttribute("role", "dialog"),
                    this._targetEl.removeAttribute("aria-hidden"),
                    this._options.bodyScrolling ||
                        document.body.classList.add("overflow-hidden"),
                    this._options.backdrop && this._createBackdrop(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show();
            }),
            (t.prototype._createBackdrop = function () {
                var e,
                    n = this;
                if (!this._visible) {
                    var r = document.createElement("div");
                    r.setAttribute("drawer-backdrop", ""),
                        (e = r.classList).add.apply(
                            e,
                            this._options.backdropClasses.split(" ")
                        ),
                        document.querySelector("body").append(r),
                        r.addEventListener("click", function () {
                            n.hide();
                        });
                }
            }),
            (t.prototype._destroyBackdropEl = function () {
                this._visible &&
                    document.querySelector("[drawer-backdrop]").remove();
            }),
            (t.prototype._getPlacementClasses = function (e) {
                switch (e) {
                    case "top":
                        return {
                            base: ["top-0", "left-0", "right-0"],
                            active: ["transform-none"],
                            inactive: ["-translate-y-full"],
                        };
                    case "right":
                        return {
                            base: ["right-0", "top-0"],
                            active: ["transform-none"],
                            inactive: ["translate-x-full"],
                        };
                    case "bottom":
                        return {
                            base: ["bottom-0", "left-0", "right-0"],
                            active: ["transform-none"],
                            inactive: ["translate-y-full"],
                        };
                    case "left":
                        return {
                            base: ["left-0", "top-0"],
                            active: ["transform-none"],
                            inactive: ["-translate-x-full"],
                        };
                    case "bottom-edge":
                        return {
                            base: ["left-0", "top-0"],
                            active: ["transform-none"],
                            inactive: [
                                "translate-y-full",
                                this._options.edgeOffset,
                            ],
                        };
                    default:
                        return {
                            base: ["left-0", "top-0"],
                            active: ["transform-none"],
                            inactive: ["-translate-x-full"],
                        };
                }
            }),
            (t.prototype.isHidden = function () {
                return !this._visible;
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            t
        );
    })(),
    we = function (t, e) {
        if (
            e.some(function (n) {
                return n.id === t;
            })
        )
            return e.find(function (n) {
                return n.id === t;
            });
    };
function gr() {
    var t = [];
    document.querySelectorAll("[data-drawer-target]").forEach(function (e) {
        var n = e.getAttribute("data-drawer-target"),
            r = document.getElementById(n);
        if (r) {
            var i = e.getAttribute("data-drawer-placement"),
                s = e.getAttribute("data-drawer-body-scrolling"),
                o = e.getAttribute("data-drawer-backdrop"),
                a = e.getAttribute("data-drawer-edge"),
                c = e.getAttribute("data-drawer-edge-offset");
            we(n, t) ||
                t.push({
                    id: n,
                    object: new ps(r, {
                        placement: i || wt.placement,
                        bodyScrolling: s ? s === "true" : wt.bodyScrolling,
                        backdrop: o ? o === "true" : wt.backdrop,
                        edge: a ? a === "true" : wt.edge,
                        edgeOffset: c || wt.edgeOffset,
                    }),
                });
        } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }),
        document.querySelectorAll("[data-drawer-toggle]").forEach(function (e) {
            var n = e.getAttribute("data-drawer-toggle"),
                r = document.getElementById(n);
            if (r) {
                var i = we(n, t);
                i
                    ? e.addEventListener("click", function () {
                          i.object.toggle();
                      })
                    : console.error(
                          "Drawer with id ".concat(
                              n,
                              " has not been initialized. Please initialize it using the data-drawer-target attribute."
                          )
                      );
            } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }),
        document
            .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
            .forEach(function (e) {
                var n = e.getAttribute("data-drawer-dismiss")
                        ? e.getAttribute("data-drawer-dismiss")
                        : e.getAttribute("data-drawer-hide"),
                    r = document.getElementById(n);
                if (r) {
                    var i = we(n, t);
                    i
                        ? e.addEventListener("click", function () {
                              i.object.hide();
                          })
                        : console.error(
                              "Drawer with id ".concat(
                                  n,
                                  " has not been initialized. Please initialize it using the data-drawer-target attribute."
                              )
                          );
                } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
            }),
        document.querySelectorAll("[data-drawer-show]").forEach(function (e) {
            var n = e.getAttribute("data-drawer-show"),
                r = document.getElementById(n);
            if (r) {
                var i = we(n, t);
                i
                    ? e.addEventListener("click", function () {
                          i.object.show();
                      })
                    : console.error(
                          "Drawer with id ".concat(
                              n,
                              " has not been initialized. Please initialize it using the data-drawer-target attribute."
                          )
                      );
            } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        });
}
typeof window < "u" && ((window.Drawer = ps), (window.initDrawers = gr));
var Ue =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Ue =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                Ue.apply(this, arguments)
            );
        },
    yi = {
        defaultTabId: null,
        activeClasses:
            "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
        inactiveClasses:
            "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
        onShow: function () {},
    },
    hs = (function () {
        function t(e, n) {
            e === void 0 && (e = []),
                n === void 0 && (n = yi),
                (this._items = e),
                (this._activeTab = n ? this.getTab(n.defaultTabId) : null),
                (this._options = Ue(Ue({}, yi), n)),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                this._items.length &&
                    (this._activeTab || this._setActiveTab(this._items[0]),
                    this.show(this._activeTab.id, !0),
                    this._items.map(function (n) {
                        n.triggerEl.addEventListener("click", function () {
                            e.show(n.id);
                        });
                    }));
            }),
            (t.prototype.getActiveTab = function () {
                return this._activeTab;
            }),
            (t.prototype._setActiveTab = function (e) {
                this._activeTab = e;
            }),
            (t.prototype.getTab = function (e) {
                return this._items.filter(function (n) {
                    return n.id === e;
                })[0];
            }),
            (t.prototype.show = function (e, n) {
                var r,
                    i,
                    s = this;
                n === void 0 && (n = !1);
                var o = this.getTab(e);
                (o === this._activeTab && !n) ||
                    (this._items.map(function (a) {
                        var c, u;
                        a !== o &&
                            ((c = a.triggerEl.classList).remove.apply(
                                c,
                                s._options.activeClasses.split(" ")
                            ),
                            (u = a.triggerEl.classList).add.apply(
                                u,
                                s._options.inactiveClasses.split(" ")
                            ),
                            a.targetEl.classList.add("hidden"),
                            a.triggerEl.setAttribute("aria-selected", "false"));
                    }),
                    (r = o.triggerEl.classList).add.apply(
                        r,
                        this._options.activeClasses.split(" ")
                    ),
                    (i = o.triggerEl.classList).remove.apply(
                        i,
                        this._options.inactiveClasses.split(" ")
                    ),
                    o.triggerEl.setAttribute("aria-selected", "true"),
                    o.targetEl.classList.remove("hidden"),
                    this._setActiveTab(o),
                    this._options.onShow(this, o));
            }),
            t
        );
    })();
function mr() {
    document.querySelectorAll("[data-tabs-toggle]").forEach(function (t) {
        var e = [],
            n = null;
        t.querySelectorAll('[role="tab"]').forEach(function (r) {
            var i = r.getAttribute("aria-selected") === "true",
                s = {
                    id: r.getAttribute("data-tabs-target"),
                    triggerEl: r,
                    targetEl: document.querySelector(
                        r.getAttribute("data-tabs-target")
                    ),
                };
            e.push(s), i && (n = s.id);
        }),
            new hs(e, { defaultTabId: n });
    });
}
typeof window < "u" && ((window.Tabs = hs), (window.initTabs = mr));
var at =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (at =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                at.apply(this, arguments)
            );
        },
    Ee =
        (globalThis && globalThis.__spreadArray) ||
        function (t, e, n) {
            if (n || arguments.length === 2)
                for (var r = 0, i = e.length, s; r < i; r++)
                    (s || !(r in e)) &&
                        (s || (s = Array.prototype.slice.call(e, 0, r)),
                        (s[r] = e[r]));
            return t.concat(s || Array.prototype.slice.call(e));
        },
    ze = {
        placement: "top",
        triggerType: "hover",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    vs = (function () {
        function t(e, n, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                r === void 0 && (r = ze),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = at(at({}, ze), r)),
                (this._popperInstance = this._createPopperInstance()),
                (this._visible = !1),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                this._triggerEl && this._setupEventListeners();
            }),
            (t.prototype._setupEventListeners = function () {
                var e = this,
                    n = this._getTriggerEvents();
                n.showEvents.forEach(function (r) {
                    e._triggerEl.addEventListener(r, function () {
                        e.show();
                    });
                }),
                    n.hideEvents.forEach(function (r) {
                        e._triggerEl.addEventListener(r, function () {
                            e.hide();
                        });
                    });
            }),
            (t.prototype._createPopperInstance = function () {
                return pr(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                        { name: "offset", options: { offset: [0, 8] } },
                    ],
                });
            }),
            (t.prototype._getTriggerEvents = function () {
                switch (this._options.triggerType) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                    case "click":
                        return {
                            showEvents: ["click", "focus"],
                            hideEvents: ["focusout", "blur"],
                        };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                }
            }),
            (t.prototype._setupKeydownListener = function () {
                var e = this;
                (this._keydownEventListener = function (n) {
                    n.key === "Escape" && e.hide();
                }),
                    document.body.addEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._removeKeydownListener = function () {
                document.body.removeEventListener(
                    "keydown",
                    this._keydownEventListener,
                    !0
                );
            }),
            (t.prototype._setupClickOutsideListener = function () {
                var e = this;
                (this._clickOutsideEventListener = function (n) {
                    e._handleClickOutside(n, e._targetEl);
                }),
                    document.body.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    );
            }),
            (t.prototype._removeClickOutsideListener = function () {
                document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                );
            }),
            (t.prototype._handleClickOutside = function (e, n) {
                var r = e.target;
                r !== n &&
                    !n.contains(r) &&
                    !this._triggerEl.contains(r) &&
                    this.isVisible() &&
                    this.hide();
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show();
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("opacity-0", "invisible"),
                    this._targetEl.classList.add("opacity-100", "visible"),
                    this._popperInstance.setOptions(function (e) {
                        return at(at({}, e), {
                            modifiers: Ee(
                                Ee([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !0 }],
                                !1
                            ),
                        });
                    }),
                    this._setupClickOutsideListener(),
                    this._setupKeydownListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.remove("opacity-100", "visible"),
                    this._targetEl.classList.add("opacity-0", "invisible"),
                    this._popperInstance.setOptions(function (e) {
                        return at(at({}, e), {
                            modifiers: Ee(
                                Ee([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !1 }],
                                !1
                            ),
                        });
                    }),
                    this._removeClickOutsideListener(),
                    this._removeKeydownListener(),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            t
        );
    })();
function _r() {
    document.querySelectorAll("[data-tooltip-target]").forEach(function (t) {
        var e = t.getAttribute("data-tooltip-target"),
            n = document.getElementById(e);
        if (n) {
            var r = t.getAttribute("data-tooltip-trigger"),
                i = t.getAttribute("data-tooltip-placement");
            new vs(n, t, {
                placement: i || ze.placement,
                triggerType: r || ze.triggerType,
            });
        } else console.error('The tooltip element with id "'.concat(e, '" does not exist. Please check the data-tooltip-target attribute.'));
    });
}
typeof window < "u" && ((window.Tooltip = vs), (window.initTooltips = _r));
var ct =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (ct =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                ct.apply(this, arguments)
            );
        },
    xe =
        (globalThis && globalThis.__spreadArray) ||
        function (t, e, n) {
            if (n || arguments.length === 2)
                for (var r = 0, i = e.length, s; r < i; r++)
                    (s || !(r in e)) &&
                        (s || (s = Array.prototype.slice.call(e, 0, r)),
                        (s[r] = e[r]));
            return t.concat(s || Array.prototype.slice.call(e));
        },
    Gt = {
        placement: "top",
        offset: 10,
        triggerType: "hover",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    gs = (function () {
        function t(e, n, r) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                r === void 0 && (r = Gt),
                (this._targetEl = e),
                (this._triggerEl = n),
                (this._options = ct(ct({}, Gt), r)),
                (this._popperInstance = this._createPopperInstance()),
                (this._visible = !1),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                this._triggerEl && this._setupEventListeners();
            }),
            (t.prototype._setupEventListeners = function () {
                var e = this,
                    n = this._getTriggerEvents();
                n.showEvents.forEach(function (r) {
                    e._triggerEl.addEventListener(r, function () {
                        e.show();
                    }),
                        e._targetEl.addEventListener(r, function () {
                            e.show();
                        });
                }),
                    n.hideEvents.forEach(function (r) {
                        e._triggerEl.addEventListener(r, function () {
                            setTimeout(function () {
                                e._targetEl.matches(":hover") || e.hide();
                            }, 100);
                        }),
                            e._targetEl.addEventListener(r, function () {
                                setTimeout(function () {
                                    e._triggerEl.matches(":hover") || e.hide();
                                }, 100);
                            });
                    });
            }),
            (t.prototype._createPopperInstance = function () {
                return pr(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                        {
                            name: "offset",
                            options: { offset: [0, this._options.offset] },
                        },
                    ],
                });
            }),
            (t.prototype._getTriggerEvents = function () {
                switch (this._options.triggerType) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                    case "click":
                        return {
                            showEvents: ["click", "focus"],
                            hideEvents: ["focusout", "blur"],
                        };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                }
            }),
            (t.prototype._setupKeydownListener = function () {
                var e = this;
                (this._keydownEventListener = function (n) {
                    n.key === "Escape" && e.hide();
                }),
                    document.body.addEventListener(
                        "keydown",
                        this._keydownEventListener,
                        !0
                    );
            }),
            (t.prototype._removeKeydownListener = function () {
                document.body.removeEventListener(
                    "keydown",
                    this._keydownEventListener,
                    !0
                );
            }),
            (t.prototype._setupClickOutsideListener = function () {
                var e = this;
                (this._clickOutsideEventListener = function (n) {
                    e._handleClickOutside(n, e._targetEl);
                }),
                    document.body.addEventListener(
                        "click",
                        this._clickOutsideEventListener,
                        !0
                    );
            }),
            (t.prototype._removeClickOutsideListener = function () {
                document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                );
            }),
            (t.prototype._handleClickOutside = function (e, n) {
                var r = e.target;
                r !== n &&
                    !n.contains(r) &&
                    !this._triggerEl.contains(r) &&
                    this.isVisible() &&
                    this.hide();
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype.toggle = function () {
                this.isVisible() ? this.hide() : this.show(),
                    this._options.onToggle(this);
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("opacity-0", "invisible"),
                    this._targetEl.classList.add("opacity-100", "visible"),
                    this._popperInstance.setOptions(function (e) {
                        return ct(ct({}, e), {
                            modifiers: xe(
                                xe([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !0 }],
                                !1
                            ),
                        });
                    }),
                    this._setupClickOutsideListener(),
                    this._setupKeydownListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.remove("opacity-100", "visible"),
                    this._targetEl.classList.add("opacity-0", "invisible"),
                    this._popperInstance.setOptions(function (e) {
                        return ct(ct({}, e), {
                            modifiers: xe(
                                xe([], e.modifiers, !0),
                                [{ name: "eventListeners", enabled: !1 }],
                                !1
                            ),
                        });
                    }),
                    this._removeClickOutsideListener(),
                    this._removeKeydownListener(),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            t
        );
    })();
function yr() {
    document.querySelectorAll("[data-popover-target]").forEach(function (t) {
        var e = t.getAttribute("data-popover-target"),
            n = document.getElementById(e);
        if (n) {
            var r = t.getAttribute("data-popover-trigger"),
                i = t.getAttribute("data-popover-placement"),
                s = t.getAttribute("data-popover-offset");
            new gs(n, t, {
                placement: i || Gt.placement,
                offset: s ? parseInt(s) : Gt.offset,
                triggerType: r || Gt.triggerType,
            });
        } else console.error('The popover element with id "'.concat(e, '" does not exist. Please check the data-popover-target attribute.'));
    });
}
typeof window < "u" && ((window.Popover = gs), (window.initPopovers = yr));
var Ve =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Ve =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++) {
                            e = arguments[n];
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    (t[i] = e[i]);
                        }
                        return t;
                    }),
                Ve.apply(this, arguments)
            );
        },
    Pn = {
        triggerType: "hover",
        onShow: function () {},
        onHide: function () {},
        onToggle: function () {},
    },
    ms = (function () {
        function t(e, n, r, i) {
            e === void 0 && (e = null),
                n === void 0 && (n = null),
                r === void 0 && (r = null),
                i === void 0 && (i = Pn),
                (this._parentEl = e),
                (this._triggerEl = n),
                (this._targetEl = r),
                (this._options = Ve(Ve({}, Pn), i)),
                (this._visible = !1),
                this._init();
        }
        return (
            (t.prototype._init = function () {
                var e = this;
                if (this._triggerEl) {
                    var n = this._getTriggerEventTypes(
                        this._options.triggerType
                    );
                    n.showEvents.forEach(function (r) {
                        e._triggerEl.addEventListener(r, function () {
                            e.show();
                        }),
                            e._targetEl.addEventListener(r, function () {
                                e.show();
                            });
                    }),
                        n.hideEvents.forEach(function (r) {
                            e._parentEl.addEventListener(r, function () {
                                e._parentEl.matches(":hover") || e.hide();
                            });
                        });
                }
            }),
            (t.prototype.hide = function () {
                this._targetEl.classList.add("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "false"),
                    (this._visible = !1),
                    this._options.onHide(this);
            }),
            (t.prototype.show = function () {
                this._targetEl.classList.remove("hidden"),
                    this._triggerEl &&
                        this._triggerEl.setAttribute("aria-expanded", "true"),
                    (this._visible = !0),
                    this._options.onShow(this);
            }),
            (t.prototype.toggle = function () {
                this._visible ? this.hide() : this.show();
            }),
            (t.prototype.isHidden = function () {
                return !this._visible;
            }),
            (t.prototype.isVisible = function () {
                return this._visible;
            }),
            (t.prototype._getTriggerEventTypes = function (e) {
                switch (e) {
                    case "hover":
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                    case "click":
                        return {
                            showEvents: ["click", "focus"],
                            hideEvents: ["focusout", "blur"],
                        };
                    case "none":
                        return { showEvents: [], hideEvents: [] };
                    default:
                        return {
                            showEvents: ["mouseenter", "focus"],
                            hideEvents: ["mouseleave", "blur"],
                        };
                }
            }),
            t
        );
    })();
function br() {
    document.querySelectorAll("[data-dial-init]").forEach(function (t) {
        var e = t.querySelector("[data-dial-toggle]");
        if (e) {
            var n = e.getAttribute("data-dial-toggle"),
                r = document.getElementById(n);
            if (r) {
                var i = e.getAttribute("data-dial-trigger");
                new ms(t, e, r, { triggerType: i || Pn.triggerType });
            } else
                console.error(
                    "Dial with id ".concat(
                        n,
                        " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
                    )
                );
        } else console.error("Dial with id ".concat(t.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
    });
}
typeof window < "u" && ((window.Dial = ms), (window.initDials = br));
function sl() {
    nr(), rr(), ir(), sr(), hr(), vr(), gr(), mr(), _r(), yr(), br();
}
typeof window < "u" && (window.initFlowbite = sl);
var ol = new Za("load", [nr, rr, ir, sr, hr, vr, gr, mr, _r, yr, br]);
ol.init();
var kn = !1,
    Rn = !1,
    At = [],
    In = -1;
function al(t) {
    cl(t);
}
function cl(t) {
    At.includes(t) || At.push(t), ll();
}
function _s(t) {
    let e = At.indexOf(t);
    e !== -1 && e > In && At.splice(e, 1);
}
function ll() {
    !Rn && !kn && ((kn = !0), queueMicrotask(ul));
}
function ul() {
    (kn = !1), (Rn = !0);
    for (let t = 0; t < At.length; t++) At[t](), (In = t);
    (At.length = 0), (In = -1), (Rn = !1);
}
var Ft,
    Ht,
    le,
    ys,
    Dn = !0;
function fl(t) {
    (Dn = !1), t(), (Dn = !0);
}
function dl(t) {
    (Ft = t.reactive),
        (le = t.release),
        (Ht = (e) =>
            t.effect(e, {
                scheduler: (n) => {
                    Dn ? al(n) : n();
                },
            })),
        (ys = t.raw);
}
function bi(t) {
    Ht = t;
}
function pl(t) {
    let e = () => {};
    return [
        (r) => {
            let i = Ht(r);
            return (
                t._x_effects ||
                    ((t._x_effects = new Set()),
                    (t._x_runEffects = () => {
                        t._x_effects.forEach((s) => s());
                    })),
                t._x_effects.add(i),
                (e = () => {
                    i !== void 0 && (t._x_effects.delete(i), le(i));
                }),
                i
            );
        },
        () => {
            e();
        },
    ];
}
function Qt(t, e, n = {}) {
    t.dispatchEvent(
        new CustomEvent(e, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
        })
    );
}
function lt(t, e) {
    if (typeof ShadowRoot == "function" && t instanceof ShadowRoot) {
        Array.from(t.children).forEach((i) => lt(i, e));
        return;
    }
    let n = !1;
    if ((e(t, () => (n = !0)), n)) return;
    let r = t.firstElementChild;
    for (; r; ) lt(r, e), (r = r.nextElementSibling);
}
function ut(t, ...e) {
    console.warn(`Alpine Warning: ${t}`, ...e);
}
var wi = !1;
function hl() {
    wi &&
        ut(
            "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
        ),
        (wi = !0),
        document.body ||
            ut(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
            ),
        Qt(document, "alpine:init"),
        Qt(document, "alpine:initializing"),
        Sr(),
        ml((e) => et(e, lt)),
        xr((e) => Er(e)),
        Cs((e, n) => {
            Pr(e, n).forEach((r) => r());
        });
    let t = (e) => !en(e.parentElement, !0);
    Array.from(document.querySelectorAll(Es()))
        .filter(t)
        .forEach((e) => {
            et(e);
        }),
        Qt(document, "alpine:initialized");
}
var wr = [],
    bs = [];
function ws() {
    return wr.map((t) => t());
}
function Es() {
    return wr.concat(bs).map((t) => t());
}
function xs(t) {
    wr.push(t);
}
function As(t) {
    bs.push(t);
}
function en(t, e = !1) {
    return nn(t, (n) => {
        if ((e ? Es() : ws()).some((i) => n.matches(i))) return !0;
    });
}
function nn(t, e) {
    if (t) {
        if (e(t)) return t;
        if ((t._x_teleportBack && (t = t._x_teleportBack), !!t.parentElement))
            return nn(t.parentElement, e);
    }
}
function vl(t) {
    return ws().some((e) => t.matches(e));
}
var Os = [];
function gl(t) {
    Os.push(t);
}
function et(t, e = lt, n = () => {}) {
    Pl(() => {
        e(t, (r, i) => {
            n(r, i),
                Os.forEach((s) => s(r, i)),
                Pr(r, r.attributes).forEach((s) => s()),
                r._x_ignore && i();
        });
    });
}
function Er(t) {
    lt(t, (e) => {
        ks(e), _l(e);
    });
}
var Ss = [],
    Ts = [],
    Ls = [];
function ml(t) {
    Ls.push(t);
}
function xr(t, e) {
    typeof e == "function"
        ? (t._x_cleanups || (t._x_cleanups = []), t._x_cleanups.push(e))
        : ((e = t), Ts.push(e));
}
function Cs(t) {
    Ss.push(t);
}
function Ps(t, e, n) {
    t._x_attributeCleanups || (t._x_attributeCleanups = {}),
        t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []),
        t._x_attributeCleanups[e].push(n);
}
function ks(t, e) {
    t._x_attributeCleanups &&
        Object.entries(t._x_attributeCleanups).forEach(([n, r]) => {
            (e === void 0 || e.includes(n)) &&
                (r.forEach((i) => i()), delete t._x_attributeCleanups[n]);
        });
}
function _l(t) {
    if (t._x_cleanups) for (; t._x_cleanups.length; ) t._x_cleanups.pop()();
}
var Ar = new MutationObserver(Lr),
    Or = !1;
function Sr() {
    Ar.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0,
    }),
        (Or = !0);
}
function Rs() {
    yl(), Ar.disconnect(), (Or = !1);
}
var Zt = [],
    _n = !1;
function yl() {
    (Zt = Zt.concat(Ar.takeRecords())),
        Zt.length &&
            !_n &&
            ((_n = !0),
            queueMicrotask(() => {
                bl(), (_n = !1);
            }));
}
function bl() {
    Lr(Zt), (Zt.length = 0);
}
function R(t) {
    if (!Or) return t();
    Rs();
    let e = t();
    return Sr(), e;
}
var Tr = !1,
    We = [];
function wl() {
    Tr = !0;
}
function El() {
    (Tr = !1), Lr(We), (We = []);
}
function Lr(t) {
    if (Tr) {
        We = We.concat(t);
        return;
    }
    let e = [],
        n = [],
        r = new Map(),
        i = new Map();
    for (let s = 0; s < t.length; s++)
        if (
            !t[s].target._x_ignoreMutationObserver &&
            (t[s].type === "childList" &&
                (t[s].addedNodes.forEach((o) => o.nodeType === 1 && e.push(o)),
                t[s].removedNodes.forEach(
                    (o) => o.nodeType === 1 && n.push(o)
                )),
            t[s].type === "attributes")
        ) {
            let o = t[s].target,
                a = t[s].attributeName,
                c = t[s].oldValue,
                u = () => {
                    r.has(o) || r.set(o, []),
                        r.get(o).push({ name: a, value: o.getAttribute(a) });
                },
                l = () => {
                    i.has(o) || i.set(o, []), i.get(o).push(a);
                };
            o.hasAttribute(a) && c === null
                ? u()
                : o.hasAttribute(a)
                ? (l(), u())
                : l();
        }
    i.forEach((s, o) => {
        ks(o, s);
    }),
        r.forEach((s, o) => {
            Ss.forEach((a) => a(o, s));
        });
    for (let s of n) e.includes(s) || (Ts.forEach((o) => o(s)), Er(s));
    e.forEach((s) => {
        (s._x_ignoreSelf = !0), (s._x_ignore = !0);
    });
    for (let s of e)
        n.includes(s) ||
            (s.isConnected &&
                (delete s._x_ignoreSelf,
                delete s._x_ignore,
                Ls.forEach((o) => o(s)),
                (s._x_ignore = !0),
                (s._x_ignoreSelf = !0)));
    e.forEach((s) => {
        delete s._x_ignoreSelf, delete s._x_ignore;
    }),
        (e = null),
        (n = null),
        (r = null),
        (i = null);
}
function Is(t) {
    return fe(Bt(t));
}
function ue(t, e, n) {
    return (
        (t._x_dataStack = [e, ...Bt(n || t)]),
        () => {
            t._x_dataStack = t._x_dataStack.filter((r) => r !== e);
        }
    );
}
function Bt(t) {
    return t._x_dataStack
        ? t._x_dataStack
        : typeof ShadowRoot == "function" && t instanceof ShadowRoot
        ? Bt(t.host)
        : t.parentNode
        ? Bt(t.parentNode)
        : [];
}
function fe(t) {
    let e = new Proxy(
        {},
        {
            ownKeys: () =>
                Array.from(new Set(t.flatMap((n) => Object.keys(n)))),
            has: (n, r) => t.some((i) => i.hasOwnProperty(r)),
            get: (n, r) =>
                (t.find((i) => {
                    if (i.hasOwnProperty(r)) {
                        let s = Object.getOwnPropertyDescriptor(i, r);
                        if (
                            (s.get && s.get._x_alreadyBound) ||
                            (s.set && s.set._x_alreadyBound)
                        )
                            return !0;
                        if ((s.get || s.set) && s.enumerable) {
                            let o = s.get,
                                a = s.set,
                                c = s;
                            (o = o && o.bind(e)),
                                (a = a && a.bind(e)),
                                o && (o._x_alreadyBound = !0),
                                a && (a._x_alreadyBound = !0),
                                Object.defineProperty(i, r, {
                                    ...c,
                                    get: o,
                                    set: a,
                                });
                        }
                        return !0;
                    }
                    return !1;
                }) || {})[r],
            set: (n, r, i) => {
                let s = t.find((o) => o.hasOwnProperty(r));
                return s ? (s[r] = i) : (t[t.length - 1][r] = i), !0;
            },
        }
    );
    return e;
}
function Ds(t) {
    let e = (r) => typeof r == "object" && !Array.isArray(r) && r !== null,
        n = (r, i = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
                ([s, { value: o, enumerable: a }]) => {
                    if (a === !1 || o === void 0) return;
                    let c = i === "" ? s : `${i}.${s}`;
                    typeof o == "object" && o !== null && o._x_interceptor
                        ? (r[s] = o.initialize(t, c, s))
                        : e(o) && o !== r && !(o instanceof Element) && n(o, c);
                }
            );
        };
    return n(t);
}
function js(t, e = () => {}) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(r, i, s) {
            return t(
                this.initialValue,
                () => xl(r, i),
                (o) => jn(r, i, o),
                i,
                s
            );
        },
    };
    return (
        e(n),
        (r) => {
            if (typeof r == "object" && r !== null && r._x_interceptor) {
                let i = n.initialize.bind(n);
                n.initialize = (s, o, a) => {
                    let c = r.initialize(s, o, a);
                    return (n.initialValue = c), i(s, o, a);
                };
            } else n.initialValue = r;
            return n;
        }
    );
}
function xl(t, e) {
    return e.split(".").reduce((n, r) => n[r], t);
}
function jn(t, e, n) {
    if ((typeof e == "string" && (e = e.split(".")), e.length === 1))
        t[e[0]] = n;
    else {
        if (e.length === 0) throw error;
        return t[e[0]] || (t[e[0]] = {}), jn(t[e[0]], e.slice(1), n);
    }
}
var Bs = {};
function K(t, e) {
    Bs[t] = e;
}
function Bn(t, e) {
    return (
        Object.entries(Bs).forEach(([n, r]) => {
            let i = null;
            function s() {
                if (i) return i;
                {
                    let [o, a] = qs(e);
                    return (i = { interceptor: js, ...o }), xr(e, a), i;
                }
            }
            Object.defineProperty(t, `$${n}`, {
                get() {
                    return r(e, s());
                },
                enumerable: !1,
            });
        }),
        t
    );
}
function Al(t, e, n, ...r) {
    try {
        return n(...r);
    } catch (i) {
        ie(i, t, e);
    }
}
function ie(t, e, n = void 0) {
    Object.assign(t, { el: e, expression: n }),
        console.warn(
            `Alpine Expression Error: ${t.message}

${
    n
        ? 'Expression: "' +
          n +
          `"

`
        : ""
}`,
            e
        ),
        setTimeout(() => {
            throw t;
        }, 0);
}
var De = !0;
function Ns(t) {
    let e = De;
    De = !1;
    let n = t();
    return (De = e), n;
}
function Ot(t, e, n = {}) {
    let r;
    return j(t, e)((i) => (r = i), n), r;
}
function j(...t) {
    return Ms(...t);
}
var Ms = Fs;
function Ol(t) {
    Ms = t;
}
function Fs(t, e) {
    let n = {};
    Bn(n, t);
    let r = [n, ...Bt(t)],
        i = typeof e == "function" ? Sl(r, e) : Ll(r, e, t);
    return Al.bind(null, t, e, i);
}
function Sl(t, e) {
    return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
        let s = e.apply(fe([r, ...t]), i);
        Ke(n, s);
    };
}
var yn = {};
function Tl(t, e) {
    if (yn[t]) return yn[t];
    let n = Object.getPrototypeOf(async function () {}).constructor,
        r =
            /^[\n\s]*if.*\(.*\)/.test(t.trim()) ||
            /^(let|const)\s/.test(t.trim())
                ? `(async()=>{ ${t} })()`
                : t,
        s = (() => {
            try {
                return new n(
                    ["__self", "scope"],
                    `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
                );
            } catch (o) {
                return ie(o, e, t), Promise.resolve();
            }
        })();
    return (yn[t] = s), s;
}
function Ll(t, e, n) {
    let r = Tl(e, n);
    return (i = () => {}, { scope: s = {}, params: o = [] } = {}) => {
        (r.result = void 0), (r.finished = !1);
        let a = fe([s, ...t]);
        if (typeof r == "function") {
            let c = r(r, a).catch((u) => ie(u, n, e));
            r.finished
                ? (Ke(i, r.result, a, o, n), (r.result = void 0))
                : c
                      .then((u) => {
                          Ke(i, u, a, o, n);
                      })
                      .catch((u) => ie(u, n, e))
                      .finally(() => (r.result = void 0));
        }
    };
}
function Ke(t, e, n, r, i) {
    if (De && typeof e == "function") {
        let s = e.apply(n, r);
        s instanceof Promise
            ? s.then((o) => Ke(t, o, n, r)).catch((o) => ie(o, i, e))
            : t(s);
    } else
        typeof e == "object" && e instanceof Promise
            ? e.then((s) => t(s))
            : t(e);
}
var Cr = "x-";
function $t(t = "") {
    return Cr + t;
}
function Cl(t) {
    Cr = t;
}
var Nn = {};
function P(t, e) {
    return (
        (Nn[t] = e),
        {
            before(n) {
                if (!Nn[n]) {
                    console.warn(
                        "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
                    );
                    return;
                }
                const r = Et.indexOf(n);
                Et.splice(r >= 0 ? r : Et.indexOf("DEFAULT"), 0, t);
            },
        }
    );
}
function Pr(t, e, n) {
    if (((e = Array.from(e)), t._x_virtualDirectives)) {
        let s = Object.entries(t._x_virtualDirectives).map(([a, c]) => ({
                name: a,
                value: c,
            })),
            o = Hs(s);
        (s = s.map((a) =>
            o.find((c) => c.name === a.name)
                ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
                : a
        )),
            (e = e.concat(s));
    }
    let r = {};
    return e
        .map(Vs((s, o) => (r[s] = o)))
        .filter(Ks)
        .map(Rl(r, n))
        .sort(Il)
        .map((s) => kl(t, s));
}
function Hs(t) {
    return Array.from(t)
        .map(Vs())
        .filter((e) => !Ks(e));
}
var Mn = !1,
    Jt = new Map(),
    $s = Symbol();
function Pl(t) {
    Mn = !0;
    let e = Symbol();
    ($s = e), Jt.set(e, []);
    let n = () => {
            for (; Jt.get(e).length; ) Jt.get(e).shift()();
            Jt.delete(e);
        },
        r = () => {
            (Mn = !1), n();
        };
    t(n), r();
}
function qs(t) {
    let e = [],
        n = (a) => e.push(a),
        [r, i] = pl(t);
    return (
        e.push(i),
        [
            {
                Alpine: de,
                effect: r,
                cleanup: n,
                evaluateLater: j.bind(j, t),
                evaluate: Ot.bind(Ot, t),
            },
            () => e.forEach((a) => a()),
        ]
    );
}
function kl(t, e) {
    let n = () => {},
        r = Nn[e.type] || n,
        [i, s] = qs(t);
    Ps(t, e.original, s);
    let o = () => {
        t._x_ignore ||
            t._x_ignoreSelf ||
            (r.inline && r.inline(t, e, i),
            (r = r.bind(r, t, e, i)),
            Mn ? Jt.get($s).push(r) : r());
    };
    return (o.runCleanups = s), o;
}
var Us =
        (t, e) =>
        ({ name: n, value: r }) => (
            n.startsWith(t) && (n = n.replace(t, e)), { name: n, value: r }
        ),
    zs = (t) => t;
function Vs(t = () => {}) {
    return ({ name: e, value: n }) => {
        let { name: r, value: i } = Ws.reduce((s, o) => o(s), {
            name: e,
            value: n,
        });
        return r !== e && t(r, e), { name: r, value: i };
    };
}
var Ws = [];
function kr(t) {
    Ws.push(t);
}
function Ks({ name: t }) {
    return Js().test(t);
}
var Js = () => new RegExp(`^${Cr}([^:^.]+)\\b`);
function Rl(t, e) {
    return ({ name: n, value: r }) => {
        let i = n.match(Js()),
            s = n.match(/:([a-zA-Z0-9\-:]+)/),
            o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
            a = e || t[n] || n;
        return {
            type: i ? i[1] : null,
            value: s ? s[1] : null,
            modifiers: o.map((c) => c.replace(".", "")),
            expression: r,
            original: a,
        };
    };
}
var Fn = "DEFAULT",
    Et = [
        "ignore",
        "ref",
        "data",
        "id",
        "bind",
        "init",
        "for",
        "model",
        "modelable",
        "transition",
        "show",
        "if",
        Fn,
        "teleport",
    ];
function Il(t, e) {
    let n = Et.indexOf(t.type) === -1 ? Fn : t.type,
        r = Et.indexOf(e.type) === -1 ? Fn : e.type;
    return Et.indexOf(n) - Et.indexOf(r);
}
var Hn = [],
    Rr = !1;
function Ir(t = () => {}) {
    return (
        queueMicrotask(() => {
            Rr ||
                setTimeout(() => {
                    $n();
                });
        }),
        new Promise((e) => {
            Hn.push(() => {
                t(), e();
            });
        })
    );
}
function $n() {
    for (Rr = !1; Hn.length; ) Hn.shift()();
}
function Dl() {
    Rr = !0;
}
function Dr(t, e) {
    return Array.isArray(e)
        ? Ei(t, e.join(" "))
        : typeof e == "object" && e !== null
        ? jl(t, e)
        : typeof e == "function"
        ? Dr(t, e())
        : Ei(t, e);
}
function Ei(t, e) {
    let n = (i) =>
            i
                .split(" ")
                .filter((s) => !t.classList.contains(s))
                .filter(Boolean),
        r = (i) => (
            t.classList.add(...i),
            () => {
                t.classList.remove(...i);
            }
        );
    return (e = e === !0 ? (e = "") : e || ""), r(n(e));
}
function jl(t, e) {
    let n = (a) => a.split(" ").filter(Boolean),
        r = Object.entries(e)
            .flatMap(([a, c]) => (c ? n(a) : !1))
            .filter(Boolean),
        i = Object.entries(e)
            .flatMap(([a, c]) => (c ? !1 : n(a)))
            .filter(Boolean),
        s = [],
        o = [];
    return (
        i.forEach((a) => {
            t.classList.contains(a) && (t.classList.remove(a), o.push(a));
        }),
        r.forEach((a) => {
            t.classList.contains(a) || (t.classList.add(a), s.push(a));
        }),
        () => {
            o.forEach((a) => t.classList.add(a)),
                s.forEach((a) => t.classList.remove(a));
        }
    );
}
function rn(t, e) {
    return typeof e == "object" && e !== null ? Bl(t, e) : Nl(t, e);
}
function Bl(t, e) {
    let n = {};
    return (
        Object.entries(e).forEach(([r, i]) => {
            (n[r] = t.style[r]),
                r.startsWith("--") || (r = Ml(r)),
                t.style.setProperty(r, i);
        }),
        setTimeout(() => {
            t.style.length === 0 && t.removeAttribute("style");
        }),
        () => {
            rn(t, n);
        }
    );
}
function Nl(t, e) {
    let n = t.getAttribute("style", e);
    return (
        t.setAttribute("style", e),
        () => {
            t.setAttribute("style", n || "");
        }
    );
}
function Ml(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function qn(t, e = () => {}) {
    let n = !1;
    return function () {
        n ? e.apply(this, arguments) : ((n = !0), t.apply(this, arguments));
    };
}
P(
    "transition",
    (t, { value: e, modifiers: n, expression: r }, { evaluate: i }) => {
        typeof r == "function" && (r = i(r)),
            r !== !1 &&
                (!r || typeof r == "boolean" ? Hl(t, n, e) : Fl(t, r, e));
    }
);
function Fl(t, e, n) {
    Xs(t, Dr, ""),
        {
            enter: (i) => {
                t._x_transition.enter.during = i;
            },
            "enter-start": (i) => {
                t._x_transition.enter.start = i;
            },
            "enter-end": (i) => {
                t._x_transition.enter.end = i;
            },
            leave: (i) => {
                t._x_transition.leave.during = i;
            },
            "leave-start": (i) => {
                t._x_transition.leave.start = i;
            },
            "leave-end": (i) => {
                t._x_transition.leave.end = i;
            },
        }[n](e);
}
function Hl(t, e, n) {
    Xs(t, rn);
    let r = !e.includes("in") && !e.includes("out") && !n,
        i = r || e.includes("in") || ["enter"].includes(n),
        s = r || e.includes("out") || ["leave"].includes(n);
    e.includes("in") && !r && (e = e.filter((_, y) => y < e.indexOf("out"))),
        e.includes("out") &&
            !r &&
            (e = e.filter((_, y) => y > e.indexOf("out")));
    let o = !e.includes("opacity") && !e.includes("scale"),
        a = o || e.includes("opacity"),
        c = o || e.includes("scale"),
        u = a ? 0 : 1,
        l = c ? Wt(e, "scale", 95) / 100 : 1,
        d = Wt(e, "delay", 0) / 1e3,
        v = Wt(e, "origin", "center"),
        m = "opacity, transform",
        p = Wt(e, "duration", 150) / 1e3,
        g = Wt(e, "duration", 75) / 1e3,
        h = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i &&
        ((t._x_transition.enter.during = {
            transformOrigin: v,
            transitionDelay: `${d}s`,
            transitionProperty: m,
            transitionDuration: `${p}s`,
            transitionTimingFunction: h,
        }),
        (t._x_transition.enter.start = {
            opacity: u,
            transform: `scale(${l})`,
        }),
        (t._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
        s &&
            ((t._x_transition.leave.during = {
                transformOrigin: v,
                transitionDelay: `${d}s`,
                transitionProperty: m,
                transitionDuration: `${g}s`,
                transitionTimingFunction: h,
            }),
            (t._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)",
            }),
            (t._x_transition.leave.end = {
                opacity: u,
                transform: `scale(${l})`,
            }));
}
function Xs(t, e, n = {}) {
    t._x_transition ||
        (t._x_transition = {
            enter: { during: n, start: n, end: n },
            leave: { during: n, start: n, end: n },
            in(r = () => {}, i = () => {}) {
                Un(
                    t,
                    e,
                    {
                        during: this.enter.during,
                        start: this.enter.start,
                        end: this.enter.end,
                    },
                    r,
                    i
                );
            },
            out(r = () => {}, i = () => {}) {
                Un(
                    t,
                    e,
                    {
                        during: this.leave.during,
                        start: this.leave.start,
                        end: this.leave.end,
                    },
                    r,
                    i
                );
            },
        });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    t,
    e,
    n,
    r
) {
    const i =
        document.visibilityState === "visible"
            ? requestAnimationFrame
            : setTimeout;
    let s = () => i(n);
    if (e) {
        t._x_transition && (t._x_transition.enter || t._x_transition.leave)
            ? t._x_transition.enter &&
              (Object.entries(t._x_transition.enter.during).length ||
                  Object.entries(t._x_transition.enter.start).length ||
                  Object.entries(t._x_transition.enter.end).length)
                ? t._x_transition.in(n)
                : s()
            : t._x_transition
            ? t._x_transition.in(n)
            : s();
        return;
    }
    (t._x_hidePromise = t._x_transition
        ? new Promise((o, a) => {
              t._x_transition.out(
                  () => {},
                  () => o(r)
              ),
                  t._x_transitioning.beforeCancel(() =>
                      a({ isFromCancelledTransition: !0 })
                  );
          })
        : Promise.resolve(r)),
        queueMicrotask(() => {
            let o = Ys(t);
            o
                ? (o._x_hideChildren || (o._x_hideChildren = []),
                  o._x_hideChildren.push(t))
                : i(() => {
                      let a = (c) => {
                          let u = Promise.all([
                              c._x_hidePromise,
                              ...(c._x_hideChildren || []).map(a),
                          ]).then(([l]) => l());
                          return (
                              delete c._x_hidePromise,
                              delete c._x_hideChildren,
                              u
                          );
                      };
                      a(t).catch((c) => {
                          if (!c.isFromCancelledTransition) throw c;
                      });
                  });
        });
};
function Ys(t) {
    let e = t.parentNode;
    if (e) return e._x_hidePromise ? e : Ys(e);
}
function Un(
    t,
    e,
    { during: n, start: r, end: i } = {},
    s = () => {},
    o = () => {}
) {
    if (
        (t._x_transitioning && t._x_transitioning.cancel(),
        Object.keys(n).length === 0 &&
            Object.keys(r).length === 0 &&
            Object.keys(i).length === 0)
    ) {
        s(), o();
        return;
    }
    let a, c, u;
    $l(t, {
        start() {
            a = e(t, r);
        },
        during() {
            c = e(t, n);
        },
        before: s,
        end() {
            a(), (u = e(t, i));
        },
        after: o,
        cleanup() {
            c(), u();
        },
    });
}
function $l(t, e) {
    let n,
        r,
        i,
        s = qn(() => {
            R(() => {
                (n = !0),
                    r || e.before(),
                    i || (e.end(), $n()),
                    e.after(),
                    t.isConnected && e.cleanup(),
                    delete t._x_transitioning;
            });
        });
    (t._x_transitioning = {
        beforeCancels: [],
        beforeCancel(o) {
            this.beforeCancels.push(o);
        },
        cancel: qn(function () {
            for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
            s();
        }),
        finish: s,
    }),
        R(() => {
            e.start(), e.during();
        }),
        Dl(),
        requestAnimationFrame(() => {
            if (n) return;
            let o =
                    Number(
                        getComputedStyle(t)
                            .transitionDuration.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3,
                a =
                    Number(
                        getComputedStyle(t)
                            .transitionDelay.replace(/,.*/, "")
                            .replace("s", "")
                    ) * 1e3;
            o === 0 &&
                (o =
                    Number(
                        getComputedStyle(t).animationDuration.replace("s", "")
                    ) * 1e3),
                R(() => {
                    e.before();
                }),
                (r = !0),
                requestAnimationFrame(() => {
                    n ||
                        (R(() => {
                            e.end();
                        }),
                        $n(),
                        setTimeout(t._x_transitioning.finish, o + a),
                        (i = !0));
                });
        });
}
function Wt(t, e, n) {
    if (t.indexOf(e) === -1) return n;
    const r = t[t.indexOf(e) + 1];
    if (!r || (e === "scale" && isNaN(r))) return n;
    if (e === "duration" || e === "delay") {
        let i = r.match(/([0-9]+)ms/);
        if (i) return i[1];
    }
    return e === "origin" &&
        ["top", "right", "left", "center", "bottom"].includes(
            t[t.indexOf(e) + 2]
        )
        ? [r, t[t.indexOf(e) + 2]].join(" ")
        : r;
}
var ft = !1;
function sn(t, e = () => {}) {
    return (...n) => (ft ? e(...n) : t(...n));
}
function ql(t) {
    return (...e) => ft && t(...e);
}
function Ul(t, e) {
    t._x_dataStack &&
        ((e._x_dataStack = t._x_dataStack),
        e.setAttribute("data-has-alpine-state", !0)),
        (ft = !0),
        Gs(() => {
            et(e, (n, r) => {
                r(n, () => {});
            });
        }),
        (ft = !1);
}
var zn = !1;
function zl(t, e) {
    e._x_dataStack || (e._x_dataStack = t._x_dataStack),
        (ft = !0),
        (zn = !0),
        Gs(() => {
            Vl(e);
        }),
        (ft = !1),
        (zn = !1);
}
function Vl(t) {
    let e = !1;
    et(t, (r, i) => {
        lt(r, (s, o) => {
            if (e && vl(s)) return o();
            (e = !0), i(s, o);
        });
    });
}
function Gs(t) {
    let e = Ht;
    bi((n, r) => {
        let i = e(n);
        return le(i), () => {};
    }),
        t(),
        bi(e);
}
function Wl(t) {
    return ft ? (zn ? !0 : t.hasAttribute("data-has-alpine-state")) : !1;
}
function Qs(t, e, n, r = []) {
    switch (
        (t._x_bindings || (t._x_bindings = Ft({})),
        (t._x_bindings[e] = n),
        (e = r.includes("camel") ? tu(e) : e),
        e)
    ) {
        case "value":
            Kl(t, n);
            break;
        case "style":
            Xl(t, n);
            break;
        case "class":
            Jl(t, n);
            break;
        case "selected":
        case "checked":
            Yl(t, e, n);
            break;
        default:
            Zs(t, e, n);
            break;
    }
}
function Kl(t, e) {
    if (t.type === "radio")
        t.attributes.value === void 0 && (t.value = e),
            window.fromModel && (t.checked = xi(t.value, e));
    else if (t.type === "checkbox")
        Number.isInteger(e)
            ? (t.value = e)
            : !Array.isArray(e) &&
              typeof e != "boolean" &&
              ![null, void 0].includes(e)
            ? (t.value = String(e))
            : Array.isArray(e)
            ? (t.checked = e.some((n) => xi(n, t.value)))
            : (t.checked = !!e);
    else if (t.tagName === "SELECT") Zl(t, e);
    else {
        if (t.value === e) return;
        t.value = e === void 0 ? "" : e;
    }
}
function Jl(t, e) {
    t._x_undoAddedClasses && t._x_undoAddedClasses(),
        (t._x_undoAddedClasses = Dr(t, e));
}
function Xl(t, e) {
    t._x_undoAddedStyles && t._x_undoAddedStyles(),
        (t._x_undoAddedStyles = rn(t, e));
}
function Yl(t, e, n) {
    Zs(t, e, n), Ql(t, e, n);
}
function Zs(t, e, n) {
    [null, void 0, !1].includes(n) && eu(e)
        ? t.removeAttribute(e)
        : (to(e) && (n = e), Gl(t, e, n));
}
function Gl(t, e, n) {
    t.getAttribute(e) != n && t.setAttribute(e, n);
}
function Ql(t, e, n) {
    t[e] !== n && (t[e] = n);
}
function Zl(t, e) {
    const n = [].concat(e).map((r) => r + "");
    Array.from(t.options).forEach((r) => {
        r.selected = n.includes(r.value);
    });
}
function tu(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, n) => n.toUpperCase());
}
function xi(t, e) {
    return t == e;
}
function to(t) {
    return [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule",
    ].includes(t);
}
function eu(t) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected",
    ].includes(t);
}
function nu(t, e, n) {
    return t._x_bindings && t._x_bindings[e] !== void 0
        ? t._x_bindings[e]
        : eo(t, e, n);
}
function ru(t, e, n, r = !0) {
    if (t._x_bindings && t._x_bindings[e] !== void 0) return t._x_bindings[e];
    if (t._x_inlineBindings && t._x_inlineBindings[e] !== void 0) {
        let i = t._x_inlineBindings[e];
        return (i.extract = r), Ns(() => Ot(t, i.expression));
    }
    return eo(t, e, n);
}
function eo(t, e, n) {
    let r = t.getAttribute(e);
    return r === null
        ? typeof n == "function"
            ? n()
            : n
        : r === ""
        ? !0
        : to(e)
        ? !![e, "true"].includes(r)
        : r;
}
function no(t, e) {
    var n;
    return function () {
        var r = this,
            i = arguments,
            s = function () {
                (n = null), t.apply(r, i);
            };
        clearTimeout(n), (n = setTimeout(s, e));
    };
}
function ro(t, e) {
    let n;
    return function () {
        let r = this,
            i = arguments;
        n || (t.apply(r, i), (n = !0), setTimeout(() => (n = !1), e));
    };
}
function io({ get: t, set: e }, { get: n, set: r }) {
    let i = !0,
        s,
        o,
        a,
        c = Ht(() => {
            let u, l;
            i
                ? ((u = t()),
                  r(JSON.parse(JSON.stringify(u))),
                  (l = n()),
                  (i = !1))
                : ((u = t()),
                  (l = n()),
                  (o = JSON.stringify(u)),
                  (a = JSON.stringify(l)),
                  o !== s
                      ? ((l = n()), r(u), (l = u))
                      : (e(JSON.parse(a ?? null)), (u = l))),
                (s = JSON.stringify(u)),
                JSON.stringify(l);
        });
    return () => {
        le(c);
    };
}
function iu(t) {
    (Array.isArray(t) ? t : [t]).forEach((n) => n(de));
}
var yt = {},
    Ai = !1;
function su(t, e) {
    if ((Ai || ((yt = Ft(yt)), (Ai = !0)), e === void 0)) return yt[t];
    (yt[t] = e),
        typeof e == "object" &&
            e !== null &&
            e.hasOwnProperty("init") &&
            typeof e.init == "function" &&
            yt[t].init(),
        Ds(yt[t]);
}
function ou() {
    return yt;
}
var so = {};
function au(t, e) {
    let n = typeof e != "function" ? () => e : e;
    return t instanceof Element ? oo(t, n()) : ((so[t] = n), () => {});
}
function cu(t) {
    return (
        Object.entries(so).forEach(([e, n]) => {
            Object.defineProperty(t, e, {
                get() {
                    return (...r) => n(...r);
                },
            });
        }),
        t
    );
}
function oo(t, e, n) {
    let r = [];
    for (; r.length; ) r.pop()();
    let i = Object.entries(e).map(([o, a]) => ({ name: o, value: a })),
        s = Hs(i);
    return (
        (i = i.map((o) =>
            s.find((a) => a.name === o.name)
                ? { name: `x-bind:${o.name}`, value: `"${o.value}"` }
                : o
        )),
        Pr(t, i, n).map((o) => {
            r.push(o.runCleanups), o();
        }),
        () => {
            for (; r.length; ) r.pop()();
        }
    );
}
var ao = {};
function lu(t, e) {
    ao[t] = e;
}
function uu(t, e) {
    return (
        Object.entries(ao).forEach(([n, r]) => {
            Object.defineProperty(t, n, {
                get() {
                    return (...i) => r.bind(e)(...i);
                },
                enumerable: !1,
            });
        }),
        t
    );
}
var fu = {
        get reactive() {
            return Ft;
        },
        get release() {
            return le;
        },
        get effect() {
            return Ht;
        },
        get raw() {
            return ys;
        },
        version: "3.13.0",
        flushAndStopDeferringMutations: El,
        dontAutoEvaluateFunctions: Ns,
        disableEffectScheduling: fl,
        startObservingMutations: Sr,
        stopObservingMutations: Rs,
        setReactivityEngine: dl,
        onAttributeRemoved: Ps,
        onAttributesAdded: Cs,
        closestDataStack: Bt,
        skipDuringClone: sn,
        onlyDuringClone: ql,
        addRootSelector: xs,
        addInitSelector: As,
        addScopeToNode: ue,
        deferMutations: wl,
        mapAttributes: kr,
        evaluateLater: j,
        interceptInit: gl,
        setEvaluator: Ol,
        mergeProxies: fe,
        extractProp: ru,
        findClosest: nn,
        onElRemoved: xr,
        closestRoot: en,
        destroyTree: Er,
        interceptor: js,
        transition: Un,
        setStyles: rn,
        mutateDom: R,
        directive: P,
        entangle: io,
        throttle: ro,
        debounce: no,
        evaluate: Ot,
        initTree: et,
        nextTick: Ir,
        prefixed: $t,
        prefix: Cl,
        plugin: iu,
        magic: K,
        store: su,
        start: hl,
        clone: zl,
        cloneNode: Ul,
        bound: nu,
        $data: Is,
        walk: lt,
        data: lu,
        bind: au,
    },
    de = fu;
function du(t, e) {
    const n = Object.create(null),
        r = t.split(",");
    for (let i = 0; i < r.length; i++) n[r[i]] = !0;
    return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
var pu = Object.freeze({}),
    hu = Object.prototype.hasOwnProperty,
    on = (t, e) => hu.call(t, e),
    St = Array.isArray,
    te = (t) => co(t) === "[object Map]",
    vu = (t) => typeof t == "string",
    jr = (t) => typeof t == "symbol",
    an = (t) => t !== null && typeof t == "object",
    gu = Object.prototype.toString,
    co = (t) => gu.call(t),
    lo = (t) => co(t).slice(8, -1),
    Br = (t) =>
        vu(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    mu = (t) => {
        const e = Object.create(null);
        return (n) => e[n] || (e[n] = t(n));
    },
    _u = mu((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    uo = (t, e) => t !== e && (t === t || e === e),
    Vn = new WeakMap(),
    Kt = [],
    J,
    Tt = Symbol("iterate"),
    Wn = Symbol("Map key iterate");
function yu(t) {
    return t && t._isEffect === !0;
}
function bu(t, e = pu) {
    yu(t) && (t = t.raw);
    const n = xu(t, e);
    return e.lazy || n(), n;
}
function wu(t) {
    t.active &&
        (fo(t), t.options.onStop && t.options.onStop(), (t.active = !1));
}
var Eu = 0;
function xu(t, e) {
    const n = function () {
        if (!n.active) return t();
        if (!Kt.includes(n)) {
            fo(n);
            try {
                return Ou(), Kt.push(n), (J = n), t();
            } finally {
                Kt.pop(), po(), (J = Kt[Kt.length - 1]);
            }
        }
    };
    return (
        (n.id = Eu++),
        (n.allowRecurse = !!e.allowRecurse),
        (n._isEffect = !0),
        (n.active = !0),
        (n.raw = t),
        (n.deps = []),
        (n.options = e),
        n
    );
}
function fo(t) {
    const { deps: e } = t;
    if (e.length) {
        for (let n = 0; n < e.length; n++) e[n].delete(t);
        e.length = 0;
    }
}
var Nt = !0,
    Nr = [];
function Au() {
    Nr.push(Nt), (Nt = !1);
}
function Ou() {
    Nr.push(Nt), (Nt = !0);
}
function po() {
    const t = Nr.pop();
    Nt = t === void 0 ? !0 : t;
}
function W(t, e, n) {
    if (!Nt || J === void 0) return;
    let r = Vn.get(t);
    r || Vn.set(t, (r = new Map()));
    let i = r.get(n);
    i || r.set(n, (i = new Set())),
        i.has(J) ||
            (i.add(J),
            J.deps.push(i),
            J.options.onTrack &&
                J.options.onTrack({ effect: J, target: t, type: e, key: n }));
}
function dt(t, e, n, r, i, s) {
    const o = Vn.get(t);
    if (!o) return;
    const a = new Set(),
        c = (l) => {
            l &&
                l.forEach((d) => {
                    (d !== J || d.allowRecurse) && a.add(d);
                });
        };
    if (e === "clear") o.forEach(c);
    else if (n === "length" && St(t))
        o.forEach((l, d) => {
            (d === "length" || d >= r) && c(l);
        });
    else
        switch ((n !== void 0 && c(o.get(n)), e)) {
            case "add":
                St(t)
                    ? Br(n) && c(o.get("length"))
                    : (c(o.get(Tt)), te(t) && c(o.get(Wn)));
                break;
            case "delete":
                St(t) || (c(o.get(Tt)), te(t) && c(o.get(Wn)));
                break;
            case "set":
                te(t) && c(o.get(Tt));
                break;
        }
    const u = (l) => {
        l.options.onTrigger &&
            l.options.onTrigger({
                effect: l,
                target: t,
                key: n,
                type: e,
                newValue: r,
                oldValue: i,
                oldTarget: s,
            }),
            l.options.scheduler ? l.options.scheduler(l) : l();
    };
    a.forEach(u);
}
var Su = du("__proto__,__v_isRef,__isVue"),
    ho = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((t) => Symbol[t])
            .filter(jr)
    ),
    Tu = vo(),
    Lu = vo(!0),
    Oi = Cu();
function Cu() {
    const t = {};
    return (
        ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
            t[e] = function (...n) {
                const r = S(this);
                for (let s = 0, o = this.length; s < o; s++)
                    W(r, "get", s + "");
                const i = r[e](...n);
                return i === -1 || i === !1 ? r[e](...n.map(S)) : i;
            };
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
            t[e] = function (...n) {
                Au();
                const r = S(this)[e].apply(this, n);
                return po(), r;
            };
        }),
        t
    );
}
function vo(t = !1, e = !1) {
    return function (r, i, s) {
        if (i === "__v_isReactive") return !t;
        if (i === "__v_isReadonly") return t;
        if (i === "__v_raw" && s === (t ? (e ? Vu : yo) : e ? zu : _o).get(r))
            return r;
        const o = St(r);
        if (!t && o && on(Oi, i)) return Reflect.get(Oi, i, s);
        const a = Reflect.get(r, i, s);
        return (jr(i) ? ho.has(i) : Su(i)) || (t || W(r, "get", i), e)
            ? a
            : Kn(a)
            ? !o || !Br(i)
                ? a.value
                : a
            : an(a)
            ? t
                ? bo(a)
                : $r(a)
            : a;
    };
}
var Pu = ku();
function ku(t = !1) {
    return function (n, r, i, s) {
        let o = n[r];
        if (!t && ((i = S(i)), (o = S(o)), !St(n) && Kn(o) && !Kn(i)))
            return (o.value = i), !0;
        const a = St(n) && Br(r) ? Number(r) < n.length : on(n, r),
            c = Reflect.set(n, r, i, s);
        return (
            n === S(s) &&
                (a ? uo(i, o) && dt(n, "set", r, i, o) : dt(n, "add", r, i)),
            c
        );
    };
}
function Ru(t, e) {
    const n = on(t, e),
        r = t[e],
        i = Reflect.deleteProperty(t, e);
    return i && n && dt(t, "delete", e, void 0, r), i;
}
function Iu(t, e) {
    const n = Reflect.has(t, e);
    return (!jr(e) || !ho.has(e)) && W(t, "has", e), n;
}
function Du(t) {
    return W(t, "iterate", St(t) ? "length" : Tt), Reflect.ownKeys(t);
}
var ju = { get: Tu, set: Pu, deleteProperty: Ru, has: Iu, ownKeys: Du },
    Bu = {
        get: Lu,
        set(t, e) {
            return (
                console.warn(
                    `Set operation on key "${String(
                        e
                    )}" failed: target is readonly.`,
                    t
                ),
                !0
            );
        },
        deleteProperty(t, e) {
            return (
                console.warn(
                    `Delete operation on key "${String(
                        e
                    )}" failed: target is readonly.`,
                    t
                ),
                !0
            );
        },
    },
    Mr = (t) => (an(t) ? $r(t) : t),
    Fr = (t) => (an(t) ? bo(t) : t),
    Hr = (t) => t,
    cn = (t) => Reflect.getPrototypeOf(t);
function Ae(t, e, n = !1, r = !1) {
    t = t.__v_raw;
    const i = S(t),
        s = S(e);
    e !== s && !n && W(i, "get", e), !n && W(i, "get", s);
    const { has: o } = cn(i),
        a = r ? Hr : n ? Fr : Mr;
    if (o.call(i, e)) return a(t.get(e));
    if (o.call(i, s)) return a(t.get(s));
    t !== i && t.get(e);
}
function Oe(t, e = !1) {
    const n = this.__v_raw,
        r = S(n),
        i = S(t);
    return (
        t !== i && !e && W(r, "has", t),
        !e && W(r, "has", i),
        t === i ? n.has(t) : n.has(t) || n.has(i)
    );
}
function Se(t, e = !1) {
    return (
        (t = t.__v_raw), !e && W(S(t), "iterate", Tt), Reflect.get(t, "size", t)
    );
}
function Si(t) {
    t = S(t);
    const e = S(this);
    return cn(e).has.call(e, t) || (e.add(t), dt(e, "add", t, t)), this;
}
function Ti(t, e) {
    e = S(e);
    const n = S(this),
        { has: r, get: i } = cn(n);
    let s = r.call(n, t);
    s ? mo(n, r, t) : ((t = S(t)), (s = r.call(n, t)));
    const o = i.call(n, t);
    return (
        n.set(t, e),
        s ? uo(e, o) && dt(n, "set", t, e, o) : dt(n, "add", t, e),
        this
    );
}
function Li(t) {
    const e = S(this),
        { has: n, get: r } = cn(e);
    let i = n.call(e, t);
    i ? mo(e, n, t) : ((t = S(t)), (i = n.call(e, t)));
    const s = r ? r.call(e, t) : void 0,
        o = e.delete(t);
    return i && dt(e, "delete", t, void 0, s), o;
}
function Ci() {
    const t = S(this),
        e = t.size !== 0,
        n = te(t) ? new Map(t) : new Set(t),
        r = t.clear();
    return e && dt(t, "clear", void 0, void 0, n), r;
}
function Te(t, e) {
    return function (r, i) {
        const s = this,
            o = s.__v_raw,
            a = S(o),
            c = e ? Hr : t ? Fr : Mr;
        return (
            !t && W(a, "iterate", Tt),
            o.forEach((u, l) => r.call(i, c(u), c(l), s))
        );
    };
}
function Le(t, e, n) {
    return function (...r) {
        const i = this.__v_raw,
            s = S(i),
            o = te(s),
            a = t === "entries" || (t === Symbol.iterator && o),
            c = t === "keys" && o,
            u = i[t](...r),
            l = n ? Hr : e ? Fr : Mr;
        return (
            !e && W(s, "iterate", c ? Wn : Tt),
            {
                next() {
                    const { value: d, done: v } = u.next();
                    return v
                        ? { value: d, done: v }
                        : { value: a ? [l(d[0]), l(d[1])] : l(d), done: v };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function it(t) {
    return function (...e) {
        {
            const n = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(
                `${_u(t)} operation ${n}failed: target is readonly.`,
                S(this)
            );
        }
        return t === "delete" ? !1 : this;
    };
}
function Nu() {
    const t = {
            get(s) {
                return Ae(this, s);
            },
            get size() {
                return Se(this);
            },
            has: Oe,
            add: Si,
            set: Ti,
            delete: Li,
            clear: Ci,
            forEach: Te(!1, !1),
        },
        e = {
            get(s) {
                return Ae(this, s, !1, !0);
            },
            get size() {
                return Se(this);
            },
            has: Oe,
            add: Si,
            set: Ti,
            delete: Li,
            clear: Ci,
            forEach: Te(!1, !0),
        },
        n = {
            get(s) {
                return Ae(this, s, !0);
            },
            get size() {
                return Se(this, !0);
            },
            has(s) {
                return Oe.call(this, s, !0);
            },
            add: it("add"),
            set: it("set"),
            delete: it("delete"),
            clear: it("clear"),
            forEach: Te(!0, !1),
        },
        r = {
            get(s) {
                return Ae(this, s, !0, !0);
            },
            get size() {
                return Se(this, !0);
            },
            has(s) {
                return Oe.call(this, s, !0);
            },
            add: it("add"),
            set: it("set"),
            delete: it("delete"),
            clear: it("clear"),
            forEach: Te(!0, !0),
        };
    return (
        ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
            (t[s] = Le(s, !1, !1)),
                (n[s] = Le(s, !0, !1)),
                (e[s] = Le(s, !1, !0)),
                (r[s] = Le(s, !0, !0));
        }),
        [t, n, e, r]
    );
}
var [Mu, Fu, Hu, $u] = Nu();
function go(t, e) {
    const n = e ? (t ? $u : Hu) : t ? Fu : Mu;
    return (r, i, s) =>
        i === "__v_isReactive"
            ? !t
            : i === "__v_isReadonly"
            ? t
            : i === "__v_raw"
            ? r
            : Reflect.get(on(n, i) && i in r ? n : r, i, s);
}
var qu = { get: go(!1, !1) },
    Uu = { get: go(!0, !1) };
function mo(t, e, n) {
    const r = S(n);
    if (r !== n && e.call(t, r)) {
        const i = lo(t);
        console.warn(
            `Reactive ${i} contains both the raw and reactive versions of the same object${
                i === "Map" ? " as keys" : ""
            }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
        );
    }
}
var _o = new WeakMap(),
    zu = new WeakMap(),
    yo = new WeakMap(),
    Vu = new WeakMap();
function Wu(t) {
    switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function Ku(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Wu(lo(t));
}
function $r(t) {
    return t && t.__v_isReadonly ? t : wo(t, !1, ju, qu, _o);
}
function bo(t) {
    return wo(t, !0, Bu, Uu, yo);
}
function wo(t, e, n, r, i) {
    if (!an(t))
        return console.warn(`value cannot be made reactive: ${String(t)}`), t;
    if (t.__v_raw && !(e && t.__v_isReactive)) return t;
    const s = i.get(t);
    if (s) return s;
    const o = Ku(t);
    if (o === 0) return t;
    const a = new Proxy(t, o === 2 ? r : n);
    return i.set(t, a), a;
}
function S(t) {
    return (t && S(t.__v_raw)) || t;
}
function Kn(t) {
    return !!(t && t.__v_isRef === !0);
}
K("nextTick", () => Ir);
K("dispatch", (t) => Qt.bind(Qt, t));
K("watch", (t, { evaluateLater: e, effect: n }) => (r, i) => {
    let s = e(r),
        o = !0,
        a,
        c = n(() =>
            s((u) => {
                JSON.stringify(u),
                    o
                        ? (a = u)
                        : queueMicrotask(() => {
                              i(u, a), (a = u);
                          }),
                    (o = !1);
            })
        );
    t._x_effects.delete(c);
});
K("store", ou);
K("data", (t) => Is(t));
K("root", (t) => en(t));
K(
    "refs",
    (t) => (t._x_refs_proxy || (t._x_refs_proxy = fe(Ju(t))), t._x_refs_proxy)
);
function Ju(t) {
    let e = [],
        n = t;
    for (; n; ) n._x_refs && e.push(n._x_refs), (n = n.parentNode);
    return e;
}
var bn = {};
function Eo(t) {
    return bn[t] || (bn[t] = 0), ++bn[t];
}
function Xu(t, e) {
    return nn(t, (n) => {
        if (n._x_ids && n._x_ids[e]) return !0;
    });
}
function Yu(t, e) {
    t._x_ids || (t._x_ids = {}), t._x_ids[e] || (t._x_ids[e] = Eo(e));
}
K("id", (t) => (e, n = null) => {
    let r = Xu(t, e),
        i = r ? r._x_ids[e] : Eo(e);
    return n ? `${e}-${i}-${n}` : `${e}-${i}`;
});
K("el", (t) => t);
xo("Focus", "focus", "focus");
xo("Persist", "persist", "persist");
function xo(t, e, n) {
    K(e, (r) =>
        ut(
            `You can't use [$${directiveName}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,
            r
        )
    );
}
P(
    "modelable",
    (t, { expression: e }, { effect: n, evaluateLater: r, cleanup: i }) => {
        let s = r(e),
            o = () => {
                let l;
                return s((d) => (l = d)), l;
            },
            a = r(`${e} = __placeholder`),
            c = (l) => a(() => {}, { scope: { __placeholder: l } }),
            u = o();
        c(u),
            queueMicrotask(() => {
                if (!t._x_model) return;
                t._x_removeModelListeners.default();
                let l = t._x_model.get,
                    d = t._x_model.set,
                    v = io(
                        {
                            get() {
                                return l();
                            },
                            set(m) {
                                d(m);
                            },
                        },
                        {
                            get() {
                                return o();
                            },
                            set(m) {
                                c(m);
                            },
                        }
                    );
                i(v);
            });
    }
);
var Gu = document.createElement("div");
P("teleport", (t, { modifiers: e, expression: n }, { cleanup: r }) => {
    t.tagName.toLowerCase() !== "template" &&
        ut("x-teleport can only be used on a <template> tag", t);
    let i = sn(
        () => document.querySelector(n),
        () => Gu
    )();
    i || ut(`Cannot find x-teleport element for selector: "${n}"`);
    let s = t.content.cloneNode(!0).firstElementChild;
    (t._x_teleport = s),
        (s._x_teleportBack = t),
        t._x_forwardEvents &&
            t._x_forwardEvents.forEach((o) => {
                s.addEventListener(o, (a) => {
                    a.stopPropagation(),
                        t.dispatchEvent(new a.constructor(a.type, a));
                });
            }),
        ue(s, {}, t),
        R(() => {
            e.includes("prepend")
                ? i.parentNode.insertBefore(s, i)
                : e.includes("append")
                ? i.parentNode.insertBefore(s, i.nextSibling)
                : i.appendChild(s),
                et(s),
                (s._x_ignore = !0);
        }),
        r(() => s.remove());
});
var Ao = () => {};
Ao.inline = (t, { modifiers: e }, { cleanup: n }) => {
    e.includes("self") ? (t._x_ignoreSelf = !0) : (t._x_ignore = !0),
        n(() => {
            e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore;
        });
};
P("ignore", Ao);
P("effect", (t, { expression: e }, { effect: n }) => n(j(t, e)));
function Jn(t, e, n, r) {
    let i = t,
        s = (c) => r(c),
        o = {},
        a = (c, u) => (l) => u(c, l);
    if (
        (n.includes("dot") && (e = Qu(e)),
        n.includes("camel") && (e = Zu(e)),
        n.includes("passive") && (o.passive = !0),
        n.includes("capture") && (o.capture = !0),
        n.includes("window") && (i = window),
        n.includes("document") && (i = document),
        n.includes("debounce"))
    ) {
        let c = n[n.indexOf("debounce") + 1] || "invalid-wait",
            u = Je(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = no(s, u);
    }
    if (n.includes("throttle")) {
        let c = n[n.indexOf("throttle") + 1] || "invalid-wait",
            u = Je(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
        s = ro(s, u);
    }
    return (
        n.includes("prevent") &&
            (s = a(s, (c, u) => {
                u.preventDefault(), c(u);
            })),
        n.includes("stop") &&
            (s = a(s, (c, u) => {
                u.stopPropagation(), c(u);
            })),
        n.includes("self") &&
            (s = a(s, (c, u) => {
                u.target === t && c(u);
            })),
        (n.includes("away") || n.includes("outside")) &&
            ((i = document),
            (s = a(s, (c, u) => {
                t.contains(u.target) ||
                    (u.target.isConnected !== !1 &&
                        ((t.offsetWidth < 1 && t.offsetHeight < 1) ||
                            (t._x_isShown !== !1 && c(u))));
            }))),
        n.includes("once") &&
            (s = a(s, (c, u) => {
                c(u), i.removeEventListener(e, s, o);
            })),
        (s = a(s, (c, u) => {
            (ef(e) && nf(u, n)) || c(u);
        })),
        i.addEventListener(e, s, o),
        () => {
            i.removeEventListener(e, s, o);
        }
    );
}
function Qu(t) {
    return t.replace(/-/g, ".");
}
function Zu(t) {
    return t.toLowerCase().replace(/-(\w)/g, (e, n) => n.toUpperCase());
}
function Je(t) {
    return !Array.isArray(t) && !isNaN(t);
}
function tf(t) {
    return [" ", "_"].includes(t)
        ? t
        : t
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/[_\s]/, "-")
              .toLowerCase();
}
function ef(t) {
    return ["keydown", "keyup"].includes(t);
}
function nf(t, e) {
    let n = e.filter(
        (s) =>
            ![
                "window",
                "document",
                "prevent",
                "stop",
                "once",
                "capture",
            ].includes(s)
    );
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, Je((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, Je((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (n.length === 0 || (n.length === 1 && Pi(t.key).includes(n[0])))
        return !1;
    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) =>
        n.includes(s)
    );
    return (
        (n = n.filter((s) => !i.includes(s))),
        !(
            i.length > 0 &&
            i.filter(
                (o) => (
                    (o === "cmd" || o === "super") && (o = "meta"), t[`${o}Key`]
                )
            ).length === i.length &&
            Pi(t.key).includes(n[0])
        )
    );
}
function Pi(t) {
    if (!t) return [];
    t = tf(t);
    let e = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_",
    };
    return (
        (e[t] = t),
        Object.keys(e)
            .map((n) => {
                if (e[n] === t) return n;
            })
            .filter((n) => n)
    );
}
P("model", (t, { modifiers: e, expression: n }, { effect: r, cleanup: i }) => {
    let s = t;
    e.includes("parent") && (s = t.parentNode);
    let o = j(s, n),
        a;
    typeof n == "string"
        ? (a = j(s, `${n} = __placeholder`))
        : typeof n == "function" && typeof n() == "string"
        ? (a = j(s, `${n()} = __placeholder`))
        : (a = () => {});
    let c = () => {
            let v;
            return o((m) => (v = m)), ki(v) ? v.get() : v;
        },
        u = (v) => {
            let m;
            o((p) => (m = p)),
                ki(m) ? m.set(v) : a(() => {}, { scope: { __placeholder: v } });
        };
    typeof n == "string" &&
        t.type === "radio" &&
        R(() => {
            t.hasAttribute("name") || t.setAttribute("name", n);
        });
    var l =
        t.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(t.type) ||
        e.includes("lazy")
            ? "change"
            : "input";
    let d = ft
        ? () => {}
        : Jn(t, l, e, (v) => {
              u(rf(t, e, v, c()));
          });
    if (
        (e.includes("fill") &&
            ([null, ""].includes(c()) ||
                (t.type === "checkbox" && Array.isArray(c()))) &&
            t.dispatchEvent(new Event(l, {})),
        t._x_removeModelListeners || (t._x_removeModelListeners = {}),
        (t._x_removeModelListeners.default = d),
        i(() => t._x_removeModelListeners.default()),
        t.form)
    ) {
        let v = Jn(t.form, "reset", [], (m) => {
            Ir(() => t._x_model && t._x_model.set(t.value));
        });
        i(() => v());
    }
    (t._x_model = {
        get() {
            return c();
        },
        set(v) {
            u(v);
        },
    }),
        (t._x_forceModelUpdate = (v) => {
            v === void 0 && typeof n == "string" && n.match(/\./) && (v = ""),
                (window.fromModel = !0),
                R(() => Qs(t, "value", v)),
                delete window.fromModel;
        }),
        r(() => {
            let v = c();
            (e.includes("unintrusive") &&
                document.activeElement.isSameNode(t)) ||
                t._x_forceModelUpdate(v);
        });
});
function rf(t, e, n, r) {
    return R(() => {
        if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail ?? n.target.value;
        if (t.type === "checkbox")
            if (Array.isArray(r)) {
                let i = e.includes("number")
                    ? wn(n.target.value)
                    : n.target.value;
                return n.target.checked
                    ? r.concat([i])
                    : r.filter((s) => !sf(s, i));
            } else return n.target.checked;
        else {
            if (t.tagName.toLowerCase() === "select" && t.multiple)
                return e.includes("number")
                    ? Array.from(n.target.selectedOptions).map((i) => {
                          let s = i.value || i.text;
                          return wn(s);
                      })
                    : Array.from(n.target.selectedOptions).map(
                          (i) => i.value || i.text
                      );
            {
                let i = n.target.value;
                return e.includes("number")
                    ? wn(i)
                    : e.includes("trim")
                    ? i.trim()
                    : i;
            }
        }
    });
}
function wn(t) {
    let e = t ? parseFloat(t) : null;
    return of(e) ? e : t;
}
function sf(t, e) {
    return t == e;
}
function of(t) {
    return !Array.isArray(t) && !isNaN(t);
}
function ki(t) {
    return (
        t !== null &&
        typeof t == "object" &&
        typeof t.get == "function" &&
        typeof t.set == "function"
    );
}
P("cloak", (t) =>
    queueMicrotask(() => R(() => t.removeAttribute($t("cloak"))))
);
As(() => `[${$t("init")}]`);
P(
    "init",
    sn((t, { expression: e }, { evaluate: n }) =>
        typeof e == "string" ? !!e.trim() && n(e, {}, !1) : n(e, {}, !1)
    )
);
P("text", (t, { expression: e }, { effect: n, evaluateLater: r }) => {
    let i = r(e);
    n(() => {
        i((s) => {
            R(() => {
                t.textContent = s;
            });
        });
    });
});
P("html", (t, { expression: e }, { effect: n, evaluateLater: r }) => {
    let i = r(e);
    n(() => {
        i((s) => {
            R(() => {
                (t.innerHTML = s),
                    (t._x_ignoreSelf = !0),
                    et(t),
                    delete t._x_ignoreSelf;
            });
        });
    });
});
kr(Us(":", zs($t("bind:"))));
var Oo = (
    t,
    { value: e, modifiers: n, expression: r, original: i },
    { effect: s }
) => {
    if (!e) {
        let a = {};
        cu(a),
            j(t, r)(
                (u) => {
                    oo(t, u, i);
                },
                { scope: a }
            );
        return;
    }
    if (e === "key") return af(t, r);
    if (
        t._x_inlineBindings &&
        t._x_inlineBindings[e] &&
        t._x_inlineBindings[e].extract
    )
        return;
    let o = j(t, r);
    s(() =>
        o((a) => {
            a === void 0 && typeof r == "string" && r.match(/\./) && (a = ""),
                R(() => Qs(t, e, a, n));
        })
    );
};
Oo.inline = (t, { value: e, modifiers: n, expression: r }) => {
    e &&
        (t._x_inlineBindings || (t._x_inlineBindings = {}),
        (t._x_inlineBindings[e] = { expression: r, extract: !1 }));
};
P("bind", Oo);
function af(t, e) {
    t._x_keyExpression = e;
}
xs(() => `[${$t("data")}]`);
P("data", (t, { expression: e }, { cleanup: n }) => {
    if (Wl(t)) return;
    e = e === "" ? "{}" : e;
    let r = {};
    Bn(r, t);
    let i = {};
    uu(i, r);
    let s = Ot(t, e, { scope: i });
    (s === void 0 || s === !0) && (s = {}), Bn(s, t);
    let o = Ft(s);
    Ds(o);
    let a = ue(t, o);
    o.init && Ot(t, o.init),
        n(() => {
            o.destroy && Ot(t, o.destroy), a();
        });
});
P("show", (t, { modifiers: e, expression: n }, { effect: r }) => {
    let i = j(t, n);
    t._x_doHide ||
        (t._x_doHide = () => {
            R(() => {
                t.style.setProperty(
                    "display",
                    "none",
                    e.includes("important") ? "important" : void 0
                );
            });
        }),
        t._x_doShow ||
            (t._x_doShow = () => {
                R(() => {
                    t.style.length === 1 && t.style.display === "none"
                        ? t.removeAttribute("style")
                        : t.style.removeProperty("display");
                });
            });
    let s = () => {
            t._x_doHide(), (t._x_isShown = !1);
        },
        o = () => {
            t._x_doShow(), (t._x_isShown = !0);
        },
        a = () => setTimeout(o),
        c = qn(
            (d) => (d ? o() : s()),
            (d) => {
                typeof t._x_toggleAndCascadeWithTransitions == "function"
                    ? t._x_toggleAndCascadeWithTransitions(t, d, o, s)
                    : d
                    ? a()
                    : s();
            }
        ),
        u,
        l = !0;
    r(() =>
        i((d) => {
            (!l && d === u) ||
                (e.includes("immediate") && (d ? a() : s()),
                c(d),
                (u = d),
                (l = !1));
        })
    );
});
P("for", (t, { expression: e }, { effect: n, cleanup: r }) => {
    let i = lf(e),
        s = j(t, i.items),
        o = j(t, t._x_keyExpression || "index");
    (t._x_prevKeys = []),
        (t._x_lookup = {}),
        n(() => cf(t, i, s, o)),
        r(() => {
            Object.values(t._x_lookup).forEach((a) => a.remove()),
                delete t._x_prevKeys,
                delete t._x_lookup;
        });
});
function cf(t, e, n, r) {
    let i = (o) => typeof o == "object" && !Array.isArray(o),
        s = t;
    n((o) => {
        uf(o) && o >= 0 && (o = Array.from(Array(o).keys(), (h) => h + 1)),
            o === void 0 && (o = []);
        let a = t._x_lookup,
            c = t._x_prevKeys,
            u = [],
            l = [];
        if (i(o))
            o = Object.entries(o).map(([h, _]) => {
                let y = Ri(e, _, h, o);
                r((w) => l.push(w), { scope: { index: h, ...y } }), u.push(y);
            });
        else
            for (let h = 0; h < o.length; h++) {
                let _ = Ri(e, o[h], h, o);
                r((y) => l.push(y), { scope: { index: h, ..._ } }), u.push(_);
            }
        let d = [],
            v = [],
            m = [],
            p = [];
        for (let h = 0; h < c.length; h++) {
            let _ = c[h];
            l.indexOf(_) === -1 && m.push(_);
        }
        c = c.filter((h) => !m.includes(h));
        let g = "template";
        for (let h = 0; h < l.length; h++) {
            let _ = l[h],
                y = c.indexOf(_);
            if (y === -1) c.splice(h, 0, _), d.push([g, h]);
            else if (y !== h) {
                let w = c.splice(h, 1)[0],
                    b = c.splice(y - 1, 1)[0];
                c.splice(h, 0, b), c.splice(y, 0, w), v.push([w, b]);
            } else p.push(_);
            g = _;
        }
        for (let h = 0; h < m.length; h++) {
            let _ = m[h];
            a[_]._x_effects && a[_]._x_effects.forEach(_s),
                a[_].remove(),
                (a[_] = null),
                delete a[_];
        }
        for (let h = 0; h < v.length; h++) {
            let [_, y] = v[h],
                w = a[_],
                b = a[y],
                E = document.createElement("div");
            R(() => {
                b || ut('x-for ":key" is undefined or invalid', s),
                    b.after(E),
                    w.after(b),
                    b._x_currentIfEl && b.after(b._x_currentIfEl),
                    E.before(w),
                    w._x_currentIfEl && w.after(w._x_currentIfEl),
                    E.remove();
            }),
                b._x_refreshXForScope(u[l.indexOf(y)]);
        }
        for (let h = 0; h < d.length; h++) {
            let [_, y] = d[h],
                w = _ === "template" ? s : a[_];
            w._x_currentIfEl && (w = w._x_currentIfEl);
            let b = u[y],
                E = l[y],
                x = document.importNode(s.content, !0).firstElementChild,
                O = Ft(b);
            ue(x, O, s),
                (x._x_refreshXForScope = (k) => {
                    Object.entries(k).forEach(([L, T]) => {
                        O[L] = T;
                    });
                }),
                R(() => {
                    w.after(x), et(x);
                }),
                typeof E == "object" &&
                    ut(
                        "x-for key cannot be an object, it must be a string or an integer",
                        s
                    ),
                (a[E] = x);
        }
        for (let h = 0; h < p.length; h++)
            a[p[h]]._x_refreshXForScope(u[l.indexOf(p[h])]);
        s._x_prevKeys = l;
    });
}
function lf(t) {
    let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        n = /^\s*\(|\)\s*$/g,
        r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        i = t.match(r);
    if (!i) return;
    let s = {};
    s.items = i[2].trim();
    let o = i[1].replace(n, "").trim(),
        a = o.match(e);
    return (
        a
            ? ((s.item = o.replace(e, "").trim()),
              (s.index = a[1].trim()),
              a[2] && (s.collection = a[2].trim()))
            : (s.item = o),
        s
    );
}
function Ri(t, e, n, r) {
    let i = {};
    return (
        /^\[.*\]$/.test(t.item) && Array.isArray(e)
            ? t.item
                  .replace("[", "")
                  .replace("]", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o, a) => {
                      i[o] = e[a];
                  })
            : /^\{.*\}$/.test(t.item) &&
              !Array.isArray(e) &&
              typeof e == "object"
            ? t.item
                  .replace("{", "")
                  .replace("}", "")
                  .split(",")
                  .map((o) => o.trim())
                  .forEach((o) => {
                      i[o] = e[o];
                  })
            : (i[t.item] = e),
        t.index && (i[t.index] = n),
        t.collection && (i[t.collection] = r),
        i
    );
}
function uf(t) {
    return !Array.isArray(t) && !isNaN(t);
}
function So() {}
So.inline = (t, { expression: e }, { cleanup: n }) => {
    let r = en(t);
    r._x_refs || (r._x_refs = {}),
        (r._x_refs[e] = t),
        n(() => delete r._x_refs[e]);
};
P("ref", So);
P("if", (t, { expression: e }, { effect: n, cleanup: r }) => {
    let i = j(t, e),
        s = () => {
            if (t._x_currentIfEl) return t._x_currentIfEl;
            let a = t.content.cloneNode(!0).firstElementChild;
            return (
                ue(a, {}, t),
                R(() => {
                    t.after(a), et(a);
                }),
                (t._x_currentIfEl = a),
                (t._x_undoIf = () => {
                    lt(a, (c) => {
                        c._x_effects && c._x_effects.forEach(_s);
                    }),
                        a.remove(),
                        delete t._x_currentIfEl;
                }),
                a
            );
        },
        o = () => {
            t._x_undoIf && (t._x_undoIf(), delete t._x_undoIf);
        };
    n(() =>
        i((a) => {
            a ? s() : o();
        })
    ),
        r(() => t._x_undoIf && t._x_undoIf());
});
P("id", (t, { expression: e }, { evaluate: n }) => {
    n(e).forEach((i) => Yu(t, i));
});
kr(Us("@", zs($t("on:"))));
P(
    "on",
    sn((t, { value: e, modifiers: n, expression: r }, { cleanup: i }) => {
        let s = r ? j(t, r) : () => {};
        t.tagName.toLowerCase() === "template" &&
            (t._x_forwardEvents || (t._x_forwardEvents = []),
            t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
        let o = Jn(t, e, n, (a) => {
            s(() => {}, { scope: { $event: a }, params: [a] });
        });
        i(() => o());
    })
);
ln("Collapse", "collapse", "collapse");
ln("Intersect", "intersect", "intersect");
ln("Focus", "trap", "focus");
ln("Mask", "mask", "mask");
function ln(t, e, n) {
    P(e, (r) =>
        ut(
            `You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,
            r
        )
    );
}
de.setEvaluator(Fs);
de.setReactivityEngine({ reactive: $r, effect: bu, release: wu, raw: S });
var ff = de,
    To = ff;
window.Alpine = To;
To.start();
const Xn = document.querySelector(".toggle"),
    Lo = document.querySelectorAll("#menu-span"),
    Co = document.querySelector(".menu"),
    Po = document.getElementById("container");
console.log(Xn, Lo, Co, Po);
Xn.addEventListener("click", () => {
    Co.classList.toggle("expanded"),
        Lo.forEach((t) => {
            t.classList.toggle("hidden");
        }),
        Po.classList.toggle("close"),
        Xn.classList.toggle("close");
});
