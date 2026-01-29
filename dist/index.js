import se, { useState as Y, useRef as B, useCallback as w, useEffect as H } from "react";
import * as $e from "rrweb";
function gr(m = {}) {
  const [b, o] = Y(!1), [E, d] = Y([]), l = B(null), s = B([]), _ = w(() => {
    s.current = [], d([]);
    const f = $e.record({
      emit(R) {
        s.current.push(R), m.emit && m.emit(R), d((j) => [...j, R]);
      }
    });
    f && (l.current = f, o(!0));
  }, [m]), g = w(() => {
    l.current && (l.current(), l.current = null, o(!1), d([...s.current]));
  }, []);
  H(() => () => {
    l.current && l.current();
  }, []);
  const S = w(() => {
    s.current = [], d([]);
  }, []), y = w(() => s.current.length < 2 ? 0 : s.current[s.current.length - 1].timestamp - s.current[0].timestamp, []);
  return {
    isRecording: b,
    events: E,
    startRecording: _,
    stopRecording: g,
    clearEvents: S,
    getRecordingDuration: y
  };
}
function mr(m) {
  const b = B(null), o = B(null), [E, d] = Y(!1), [l, s] = Y(0), [_, g] = Y(0), [S, y] = Y(1), f = B(null);
  H(() => {
    if (m.length > 0 && b.current) {
      o.current && o.current.destroy();
      const P = new $e.Replayer(m, {
        root: b.current
      });
      o.current = P;
      const L = P.getMetaData();
      g(L.totalTime);
    }
    return () => {
      o.current && (o.current.destroy(), o.current = null);
    };
  }, [m]);
  const R = w(() => {
    if (o.current) {
      const P = o.current.getCurrentTime();
      s(P), o.current.service.state.matches("playing") ? (f.current = requestAnimationFrame(R), d(!0)) : d(!1);
    }
  }, []), j = w(() => {
    o.current && (o.current.play(), d(!0), f.current = requestAnimationFrame(R));
  }, [R]), M = w(() => {
    o.current && (o.current.pause(), d(!1), f.current && cancelAnimationFrame(f.current));
  }, []), J = w(() => {
    o.current && (o.current.pause(0), d(!1), s(0), f.current && cancelAnimationFrame(f.current));
  }, []), I = w((P) => {
    o.current && (o.current.play(P), s(P), d(!0), f.current = requestAnimationFrame(R));
  }, [R]), k = w((P) => {
    o.current && (o.current.setConfig({ speed: P }), y(P));
  }, []);
  H(() => () => {
    f.current && cancelAnimationFrame(f.current);
  }, []);
  const h = se.useMemo(() => ({
    play: j,
    pause: M,
    reset: J,
    seek: I,
    setSpeed: k
  }), [j, M, J, I, k]), Z = w((P) => {
    const L = P / 100 * _;
    I(L);
  }, [I, _]);
  return {
    containerRef: b,
    replayer: o.current,
    status: {
      isPlaying: E,
      currentTime: l,
      totalTime: _,
      progress: _ > 0 ? l / _ * 100 : 0,
      speed: S
    },
    controls: {
      ...h,
      seekToProgress: Z
    }
  };
}
var ue = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function yr() {
  if (De) return U;
  De = 1;
  var m = se, b = Symbol.for("react.element"), o = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, d = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(_, g, S) {
    var y, f = {}, R = null, j = null;
    S !== void 0 && (R = "" + S), g.key !== void 0 && (R = "" + g.key), g.ref !== void 0 && (j = g.ref);
    for (y in g) E.call(g, y) && !l.hasOwnProperty(y) && (f[y] = g[y]);
    if (_ && _.defaultProps) for (y in g = _.defaultProps, g) f[y] === void 0 && (f[y] = g[y]);
    return { $$typeof: b, type: _, key: R, ref: j, props: f, _owner: d.current };
  }
  return U.Fragment = o, U.jsx = s, U.jsxs = s, U;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Rr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var m = se, b = Symbol.for("react.element"), o = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), _ = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), M = Symbol.iterator, J = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[J];
      return typeof r == "function" ? r : null;
    }
    var k = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Z("error", e, t);
      }
    }
    function Z(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var P = !1, L = !1, We = !1, Ye = !1, Me = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === l || Me || e === d || e === S || e === y || Ye || e === j || P || L || We || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === f || e.$$typeof === s || e.$$typeof === _ || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case d:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return le(r) + ".Consumer";
          case s:
            var t = e;
            return le(t._context) + ".Provider";
          case g:
            return Ne(e, e.render, "ForwardRef");
          case f:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case R: {
            var u = e, c = u._payload, i = u._init;
            try {
              return F(i(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, N = 0, fe, de, ve, pe, ge, me, ye;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ve() {
      {
        if (N === 0) {
          fe = console.log, de = console.info, ve = console.warn, pe = console.error, ge = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function Ue() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: fe
            }),
            info: A({}, e, {
              value: de
            }),
            warn: A({}, e, {
              value: ve
            }),
            error: A({}, e, {
              value: pe
            }),
            group: A({}, e, {
              value: ge
            }),
            groupCollapsed: A({}, e, {
              value: me
            }),
            groupEnd: A({}, e, {
              value: ye
            })
          });
        }
        N < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = k.ReactCurrentDispatcher, ee;
    function K(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            ee = n && n[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, G;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      G = new qe();
    }
    function he(e, r) {
      if (!e || re)
        return "";
      {
        var t = G.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      re = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Q.current, Q.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (C) {
              n = C;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var a = C.stack.split(`
`), T = n.stack.split(`
`), v = a.length - 1, p = T.length - 1; v >= 1 && p >= 0 && a[v] !== T[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (a[v] !== T[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || a[v] !== T[p]) {
                    var O = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, O), O;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = c, Ue(), Error.prepareStackTrace = u;
      }
      var W = e ? e.displayName || e.name : "", D = W ? K(W) : "";
      return typeof e == "function" && G.set(e, D), D;
    }
    function Be(e, r, t) {
      return he(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Je(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case S:
          return K("Suspense");
        case y:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Be(e.render);
          case f:
            return z(e.type, r, t);
          case R: {
            var n = e, u = n._payload, c = n._init;
            try {
              return z(c(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, be = {}, Ee = k.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, u) {
      {
        var c = Function.call.bind(V);
        for (var i in e)
          if (c(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var T = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (X(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), X(null)), a instanceof Error && !(a.message in be) && (be[a.message] = !0, X(u), h("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var Ge = Array.isArray;
    function te(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Te(e) {
      if (Xe(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), _e(e);
    }
    var Pe = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Oe;
    function Ze(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Pe.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, u, c, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, u) {
      {
        var c, i = {}, a = null, T = null;
        t !== void 0 && (Te(t), a = "" + t), Qe(r) && (Te(r.key), a = "" + r.key), Ze(r) && (T = r.ref, er(r, u));
        for (c in r)
          V.call(r, c) && !He.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (c in v)
            i[c] === void 0 && (i[c] = v[c]);
        }
        if (a || T) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(i, p), T && tr(i, p);
        }
        return nr(e, a, T, u, n, Pe.current, i);
      }
    }
    var ne = k.ReactCurrentOwner, we = k.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function xe() {
      {
        if (ne.current) {
          var e = F(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Se = {};
    function or(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + F(e._owner.type) + "."), $(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ie(n) && je(n, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = I(e);
          if (typeof u == "function" && u !== e.entries)
            for (var c = u.call(e), i; !(i = c.next()).done; )
              ie(i.value) && je(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === f))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = F(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var u = F(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Fe = {};
    function Ae(e, r, t, n, u, c) {
      {
        var i = Le(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ir();
          T ? a += T : a += xe();
          var v;
          e === null ? v = "null" : te(e) ? v = "array" : e !== void 0 && e.$$typeof === b ? (v = "<" + (F(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var p = ar(e, r, t, u, c);
        if (p == null)
          return p;
        if (i) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (te(O)) {
                for (var W = 0; W < O.length; W++)
                  ke(O[W], e);
                Object.freeze && Object.freeze(O);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(O, e);
        }
        if (V.call(r, "key")) {
          var D = F(e), C = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), oe = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[D + oe]) {
            var vr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, D, vr, D), Fe[D + oe] = !0;
          }
        }
        return e === E ? sr(p) : ur(p), p;
      }
    }
    function cr(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var fr = lr, dr = cr;
    q.Fragment = E, q.jsx = fr, q.jsxs = dr;
  }()), q;
}
process.env.NODE_ENV === "production" ? ue.exports = yr() : ue.exports = Rr();
var x = ue.exports;
const br = ({ onStop: m, render: b, ...o }) => {
  const { startRecording: E, stopRecording: d, isRecording: l, events: s } = gr(o);
  return H(() => {
    !l && s.length > 0 && m && m(s);
  }, [l, s, m]), b ? /* @__PURE__ */ x.jsx(x.Fragment, { children: b({ startRecording: E, stopRecording: d, isRecording: l, events: s }) }) : /* @__PURE__ */ x.jsx("div", { className: "rrweb-recorder-controls", children: l ? /* @__PURE__ */ x.jsx("button", { onClick: d, children: "Stop Recording" }) : /* @__PURE__ */ x.jsx("button", { onClick: E, children: "Start Recording" }) });
}, Er = ({ events: m, width: b, height: o, showControls: E = !0 }) => {
  const { containerRef: d, controls: l, status: s } = mr(m);
  return /* @__PURE__ */ x.jsxs("div", { className: "rrweb-player-wrapper", children: [
    /* @__PURE__ */ x.jsx("div", { ref: d, className: "rrweb-player-container", style: { width: b, height: o } }),
    E && /* @__PURE__ */ x.jsxs("div", { className: "rrweb-player-controls", style: { marginTop: "8px", display: "flex", gap: "8px" }, children: [
      /* @__PURE__ */ x.jsx("button", { onClick: s.isPlaying ? l.pause : l.play, children: s.isPlaying ? "Pause" : "Play" }),
      /* @__PURE__ */ x.jsx("button", { onClick: l.reset, children: "Reset" }),
      /* @__PURE__ */ x.jsxs("span", { children: [
        s.currentTime.toFixed(1),
        "ms / ",
        s.totalTime.toFixed(1),
        "ms"
      ] })
    ] })
  ] });
};
export {
  Er as Player,
  br as Recorder,
  mr as usePlayer,
  gr as useRecorder
};
