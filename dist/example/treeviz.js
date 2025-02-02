var bn = Object.defineProperty;
var kn = (t, e, n) => e in t ? bn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var rt = (t, e, n) => (kn(t, typeof e != "symbol" ? e + "" : e, n), n);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function $n(t) {
  var e = 0, n = t.children, r = n && n.length;
  if (!r)
    e = 1;
  else
    for (; --r >= 0; )
      e += n[r].value;
  t.value = e;
}
function Nn() {
  return this.eachAfter($n);
}
function An(t, e) {
  let n = -1;
  for (const r of this)
    t.call(e, r, ++n, this);
  return this;
}
function zn(t, e) {
  for (var n = this, r = [n], i, o, a = -1; n = r.pop(); )
    if (t.call(e, n, ++a, this), i = n.children)
      for (o = i.length - 1; o >= 0; --o)
        r.push(i[o]);
  return this;
}
function Sn(t, e) {
  for (var n = this, r = [n], i = [], o, a, s, f = -1; n = r.pop(); )
    if (i.push(n), o = n.children)
      for (a = 0, s = o.length; a < s; ++a)
        r.push(o[a]);
  for (; n = i.pop(); )
    t.call(e, n, ++f, this);
  return this;
}
function En(t, e) {
  let n = -1;
  for (const r of this)
    if (t.call(e, r, ++n, this))
      return r;
}
function Mn(t) {
  return this.eachAfter(function(e) {
    for (var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0; )
      n += r[i].value;
    e.value = n;
  });
}
function Tn(t) {
  return this.eachBefore(function(e) {
    e.children && e.children.sort(t);
  });
}
function Cn(t) {
  for (var e = this, n = In(e, t), r = [e]; e !== n; )
    e = e.parent, r.push(e);
  for (var i = r.length; t !== n; )
    r.splice(i, 0, t), t = t.parent;
  return r;
}
function In(t, e) {
  if (t === e)
    return t;
  var n = t.ancestors(), r = e.ancestors(), i = null;
  for (t = n.pop(), e = r.pop(); t === e; )
    i = t, t = n.pop(), e = r.pop();
  return i;
}
function Ln() {
  for (var t = this, e = [t]; t = t.parent; )
    e.push(t);
  return e;
}
function Fn() {
  return Array.from(this);
}
function qn() {
  var t = [];
  return this.eachBefore(function(e) {
    e.children || t.push(e);
  }), t;
}
function Hn() {
  var t = this, e = [];
  return t.each(function(n) {
    n !== t && e.push({ source: n.parent, target: n });
  }), e;
}
function* Dn() {
  var t = this, e, n = [t], r, i, o;
  do
    for (e = n.reverse(), n = []; t = e.pop(); )
      if (yield t, r = t.children)
        for (i = 0, o = r.length; i < o; ++i)
          n.push(r[i]);
  while (n.length);
}
function ce(t, e) {
  t instanceof Map ? (t = [void 0, t], e === void 0 && (e = On)) : e === void 0 && (e = Pn);
  for (var n = new at(t), r, i = [n], o, a, s, f; r = i.pop(); )
    if ((a = e(r.data)) && (f = (a = Array.from(a)).length))
      for (r.children = a, s = f - 1; s >= 0; --s)
        i.push(o = a[s] = new at(a[s])), o.parent = r, o.depth = r.depth + 1;
  return n.eachBefore(Ve);
}
function Rn() {
  return ce(this).eachBefore(Vn);
}
function Pn(t) {
  return t.children;
}
function On(t) {
  return Array.isArray(t) ? t[1] : null;
}
function Vn(t) {
  t.data.value !== void 0 && (t.value = t.data.value), t.data = t.data.data;
}
function Ve(t) {
  var e = 0;
  do
    t.height = e;
  while ((t = t.parent) && t.height < ++e);
}
function at(t) {
  this.data = t, this.depth = this.height = 0, this.parent = null;
}
at.prototype = ce.prototype = {
  constructor: at,
  count: Nn,
  each: An,
  eachAfter: Sn,
  eachBefore: zn,
  find: En,
  sum: Mn,
  sort: Tn,
  path: Cn,
  ancestors: Ln,
  descendants: Fn,
  leaves: qn,
  links: Hn,
  copy: Rn,
  [Symbol.iterator]: Dn
};
function Bt(t) {
  return t == null ? null : Xe(t);
}
function Xe(t) {
  if (typeof t != "function")
    throw new Error();
  return t;
}
function ct() {
  return 0;
}
function lt(t) {
  return function() {
    return t;
  };
}
function Xn(t) {
  t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
}
function Wn(t, e, n, r, i) {
  for (var o = t.children, a, s = -1, f = o.length, u = t.value && (r - e) / t.value; ++s < f; )
    a = o[s], a.y0 = n, a.y1 = i, a.x0 = e, a.x1 = e += a.value * u;
}
var Bn = { depth: -1 }, we = {}, Yt = {};
function Yn(t) {
  return t.id;
}
function Un(t) {
  return t.parentId;
}
function Gn() {
  var t = Yn, e = Un, n;
  function r(i) {
    var o = Array.from(i), a = t, s = e, f, u, c, d, l, p, m, _, x = /* @__PURE__ */ new Map();
    if (n != null) {
      const y = o.map((A, E) => Kn(n(A, E, i))), w = y.map(ve), z = new Set(y).add("");
      for (const A of w)
        z.has(A) || (z.add(A), y.push(A), w.push(ve(A)), o.push(Yt));
      a = (A, E) => y[E], s = (A, E) => w[E];
    }
    for (c = 0, f = o.length; c < f; ++c)
      u = o[c], p = o[c] = new at(u), (m = a(u, c, i)) != null && (m += "") && (_ = p.id = m, x.set(_, x.has(_) ? we : p)), (m = s(u, c, i)) != null && (m += "") && (p.parent = m);
    for (c = 0; c < f; ++c)
      if (p = o[c], m = p.parent) {
        if (l = x.get(m), !l)
          throw new Error("missing: " + m);
        if (l === we)
          throw new Error("ambiguous: " + m);
        l.children ? l.children.push(p) : l.children = [p], p.parent = l;
      } else {
        if (d)
          throw new Error("multiple roots");
        d = p;
      }
    if (!d)
      throw new Error("no root");
    if (n != null) {
      for (; d.data === Yt && d.children.length === 1; )
        d = d.children[0], --f;
      for (let y = o.length - 1; y >= 0 && (p = o[y], p.data === Yt); --y)
        p.data = null;
    }
    if (d.parent = Bn, d.eachBefore(function(y) {
      y.depth = y.parent.depth + 1, --f;
    }).eachBefore(Ve), d.parent = null, f > 0)
      throw new Error("cycle");
    return d;
  }
  return r.id = function(i) {
    return arguments.length ? (t = Bt(i), r) : t;
  }, r.parentId = function(i) {
    return arguments.length ? (e = Bt(i), r) : e;
  }, r.path = function(i) {
    return arguments.length ? (n = Bt(i), r) : n;
  }, r;
}
function Kn(t) {
  t = `${t}`;
  let e = t.length;
  return jt(t, e - 1) && !jt(t, e - 2) && (t = t.slice(0, -1)), t[0] === "/" ? t : `/${t}`;
}
function ve(t) {
  let e = t.length;
  if (e < 2)
    return "";
  for (; --e > 1 && !jt(t, e); )
    ;
  return t.slice(0, e);
}
function jt(t, e) {
  if (t[e] === "/") {
    let n = 0;
    for (; e > 0 && t[--e] === "\\"; )
      ++n;
    if (!(n & 1))
      return !0;
  }
  return !1;
}
function Zn(t, e) {
  return t.parent === e.parent ? 1 : 2;
}
function Ut(t) {
  var e = t.children;
  return e ? e[0] : t.t;
}
function Gt(t) {
  var e = t.children;
  return e ? e[e.length - 1] : t.t;
}
function Qn(t, e, n) {
  var r = n / (e.i - t.i);
  e.c -= r, e.s += n, t.c += r, e.z += n, e.m += n;
}
function Jn(t) {
  for (var e = 0, n = 0, r = t.children, i = r.length, o; --i >= 0; )
    o = r[i], o.z += e, o.m += e, e += o.s + (n += o.c);
}
function jn(t, e, n) {
  return t.a.parent === e.parent ? t.a : n;
}
function Et(t, e) {
  this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e;
}
Et.prototype = Object.create(at.prototype);
function tr(t) {
  for (var e = new Et(t, 0), n, r = [e], i, o, a, s; n = r.pop(); )
    if (o = n._.children)
      for (n.children = new Array(s = o.length), a = s - 1; a >= 0; --a)
        r.push(i = n.children[a] = new Et(o[a], a)), i.parent = n;
  return (e.parent = new Et(null, 0)).children = [e], e;
}
function er() {
  var t = Zn, e = 1, n = 1, r = null;
  function i(u) {
    var c = tr(u);
    if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(a), r)
      u.eachBefore(f);
    else {
      var d = u, l = u, p = u;
      u.eachBefore(function(w) {
        w.x < d.x && (d = w), w.x > l.x && (l = w), w.depth > p.depth && (p = w);
      });
      var m = d === l ? 1 : t(d, l) / 2, _ = m - d.x, x = e / (l.x + m + _), y = n / (p.depth || 1);
      u.eachBefore(function(w) {
        w.x = (w.x + _) * x, w.y = w.depth * y;
      });
    }
    return u;
  }
  function o(u) {
    var c = u.children, d = u.parent.children, l = u.i ? d[u.i - 1] : null;
    if (c) {
      Jn(u);
      var p = (c[0].z + c[c.length - 1].z) / 2;
      l ? (u.z = l.z + t(u._, l._), u.m = u.z - p) : u.z = p;
    } else
      l && (u.z = l.z + t(u._, l._));
    u.parent.A = s(u, l, u.parent.A || d[0]);
  }
  function a(u) {
    u._.x = u.z + u.parent.m, u.m += u.parent.m;
  }
  function s(u, c, d) {
    if (c) {
      for (var l = u, p = u, m = c, _ = l.parent.children[0], x = l.m, y = p.m, w = m.m, z = _.m, A; m = Gt(m), l = Ut(l), m && l; )
        _ = Ut(_), p = Gt(p), p.a = u, A = m.z + w - l.z - x + t(m._, l._), A > 0 && (Qn(jn(m, u, d), u, A), x += A, y += A), w += m.m, x += l.m, z += _.m, y += p.m;
      m && !Gt(p) && (p.t = m, p.m += w - y), l && !Ut(_) && (_.t = l, _.m += x - z, d = u);
    }
    return d;
  }
  function f(u) {
    u.x *= e, u.y = u.depth * n;
  }
  return i.separation = function(u) {
    return arguments.length ? (t = u, i) : t;
  }, i.size = function(u) {
    return arguments.length ? (r = !1, e = +u[0], n = +u[1], i) : r ? null : [e, n];
  }, i.nodeSize = function(u) {
    return arguments.length ? (r = !0, e = +u[0], n = +u[1], i) : r ? [e, n] : null;
  }, i;
}
function nr(t, e, n, r, i) {
  for (var o = t.children, a, s = -1, f = o.length, u = t.value && (i - n) / t.value; ++s < f; )
    a = o[s], a.x0 = e, a.x1 = r, a.y0 = n, a.y1 = n += a.value * u;
}
var rr = (1 + Math.sqrt(5)) / 2;
function ir(t, e, n, r, i, o) {
  for (var a = [], s = e.children, f, u, c = 0, d = 0, l = s.length, p, m, _ = e.value, x, y, w, z, A, E, C; c < l; ) {
    p = i - n, m = o - r;
    do
      x = s[d++].value;
    while (!x && d < l);
    for (y = w = x, E = Math.max(m / p, p / m) / (_ * t), C = x * x * E, A = Math.max(w / C, C / y); d < l; ++d) {
      if (x += u = s[d].value, u < y && (y = u), u > w && (w = u), C = x * x * E, z = Math.max(w / C, C / y), z > A) {
        x -= u;
        break;
      }
      A = z;
    }
    a.push(f = { value: x, dice: p < m, children: s.slice(c, d) }), f.dice ? Wn(f, n, r, i, _ ? r += m * x / _ : o) : nr(f, n, r, _ ? n += p * x / _ : i, o), _ -= x, c = d;
  }
  return a;
}
const or = function t(e) {
  function n(r, i, o, a, s) {
    ir(e, r, i, o, a, s);
  }
  return n.ratio = function(r) {
    return t((r = +r) > 1 ? r : 1);
  }, n;
}(rr);
function ar() {
  var t = or, e = !1, n = 1, r = 1, i = [0], o = ct, a = ct, s = ct, f = ct, u = ct;
  function c(l) {
    return l.x0 = l.y0 = 0, l.x1 = n, l.y1 = r, l.eachBefore(d), i = [0], e && l.eachBefore(Xn), l;
  }
  function d(l) {
    var p = i[l.depth], m = l.x0 + p, _ = l.y0 + p, x = l.x1 - p, y = l.y1 - p;
    x < m && (m = x = (m + x) / 2), y < _ && (_ = y = (_ + y) / 2), l.x0 = m, l.y0 = _, l.x1 = x, l.y1 = y, l.children && (p = i[l.depth + 1] = o(l) / 2, m += u(l) - p, _ += a(l) - p, x -= s(l) - p, y -= f(l) - p, x < m && (m = x = (m + x) / 2), y < _ && (_ = y = (_ + y) / 2), t(l, m, _, x, y));
  }
  return c.round = function(l) {
    return arguments.length ? (e = !!l, c) : e;
  }, c.size = function(l) {
    return arguments.length ? (n = +l[0], r = +l[1], c) : [n, r];
  }, c.tile = function(l) {
    return arguments.length ? (t = Xe(l), c) : t;
  }, c.padding = function(l) {
    return arguments.length ? c.paddingInner(l).paddingOuter(l) : c.paddingInner();
  }, c.paddingInner = function(l) {
    return arguments.length ? (o = typeof l == "function" ? l : lt(+l), c) : o;
  }, c.paddingOuter = function(l) {
    return arguments.length ? c.paddingTop(l).paddingRight(l).paddingBottom(l).paddingLeft(l) : c.paddingTop();
  }, c.paddingTop = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : lt(+l), c) : a;
  }, c.paddingRight = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : lt(+l), c) : s;
  }, c.paddingBottom = function(l) {
    return arguments.length ? (f = typeof l == "function" ? l : lt(+l), c) : f;
  }, c.paddingLeft = function(l) {
    return arguments.length ? (u = typeof l == "function" ? l : lt(+l), c) : u;
  }, c;
}
var te = "http://www.w3.org/1999/xhtml";
const be = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: te,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ot(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), be.hasOwnProperty(e) ? { space: be[e], local: t } : t;
}
function ur(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === te && e.documentElement.namespaceURI === te ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function sr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function We(t) {
  var e = Ot(t);
  return (e.local ? sr : ur)(e);
}
function cr() {
}
function le(t) {
  return t == null ? cr : function() {
    return this.querySelector(t);
  };
}
function lr(t) {
  typeof t != "function" && (t = le(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), f, u, c = 0; c < a; ++c)
      (f = o[c]) && (u = t.call(f, f.__data__, c, o)) && ("__data__" in f && (u.__data__ = f.__data__), s[c] = u);
  return new F(r, this._parents);
}
function Be(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function fr() {
  return [];
}
function Ye(t) {
  return t == null ? fr : function() {
    return this.querySelectorAll(t);
  };
}
function hr(t) {
  return function() {
    return Be(t.apply(this, arguments));
  };
}
function dr(t) {
  typeof t == "function" ? t = hr(t) : t = Ye(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, f, u = 0; u < s; ++u)
      (f = a[u]) && (r.push(t.call(f, f.__data__, u, a)), i.push(f));
  return new F(r, i);
}
function Ue(t) {
  return function() {
    return this.matches(t);
  };
}
function Ge(t) {
  return function(e) {
    return e.matches(t);
  };
}
var pr = Array.prototype.find;
function gr(t) {
  return function() {
    return pr.call(this.children, t);
  };
}
function yr() {
  return this.firstElementChild;
}
function mr(t) {
  return this.select(t == null ? yr : gr(typeof t == "function" ? t : Ge(t)));
}
var _r = Array.prototype.filter;
function xr() {
  return Array.from(this.children);
}
function wr(t) {
  return function() {
    return _r.call(this.children, t);
  };
}
function vr(t) {
  return this.selectAll(t == null ? xr : wr(typeof t == "function" ? t : Ge(t)));
}
function br(t) {
  typeof t != "function" && (t = Ue(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], f, u = 0; u < a; ++u)
      (f = o[u]) && t.call(f, f.__data__, u, o) && s.push(f);
  return new F(r, this._parents);
}
function Ke(t) {
  return new Array(t.length);
}
function kr() {
  return new F(this._enter || this._groups.map(Ke), this._parents);
}
function Lt(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Lt.prototype = {
  constructor: Lt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function $r(t) {
  return function() {
    return t;
  };
}
function Nr(t, e, n, r, i, o) {
  for (var a = 0, s, f = e.length, u = o.length; a < u; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new Lt(t, o[a]);
  for (; a < f; ++a)
    (s = e[a]) && (i[a] = s);
}
function Ar(t, e, n, r, i, o, a) {
  var s, f, u = /* @__PURE__ */ new Map(), c = e.length, d = o.length, l = new Array(c), p;
  for (s = 0; s < c; ++s)
    (f = e[s]) && (l[s] = p = a.call(f, f.__data__, s, e) + "", u.has(p) ? i[s] = f : u.set(p, f));
  for (s = 0; s < d; ++s)
    p = a.call(t, o[s], s, o) + "", (f = u.get(p)) ? (r[s] = f, f.__data__ = o[s], u.delete(p)) : n[s] = new Lt(t, o[s]);
  for (s = 0; s < c; ++s)
    (f = e[s]) && u.get(l[s]) === f && (i[s] = f);
}
function zr(t) {
  return t.__data__;
}
function Sr(t, e) {
  if (!arguments.length)
    return Array.from(this, zr);
  var n = e ? Ar : Nr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = $r(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), f = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], d = i[u], l = d.length, p = Er(t.call(c, c && c.__data__, u, r)), m = p.length, _ = s[u] = new Array(m), x = a[u] = new Array(m), y = f[u] = new Array(l);
    n(c, d, _, x, y, p, e);
    for (var w = 0, z = 0, A, E; w < m; ++w)
      if (A = _[w]) {
        for (w >= z && (z = w + 1); !(E = x[z]) && ++z < m; )
          ;
        A._next = E || null;
      }
  }
  return a = new F(a, r), a._enter = s, a._exit = f, a;
}
function Er(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Mr() {
  return new F(this._exit || this._groups.map(Ke), this._parents);
}
function Tr(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Cr(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), f = 0; f < a; ++f)
    for (var u = n[f], c = r[f], d = u.length, l = s[f] = new Array(d), p, m = 0; m < d; ++m)
      (p = u[m] || c[m]) && (l[m] = p);
  for (; f < i; ++f)
    s[f] = n[f];
  return new F(s, this._parents);
}
function Ir() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Lr(t) {
  t || (t = Fr);
  function e(d, l) {
    return d && l ? t(d.__data__, l.__data__) : !d - !l;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, f = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (f[c] = u);
    f.sort(e);
  }
  return new F(i, this._parents).order();
}
function Fr(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function qr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Hr() {
  return Array.from(this);
}
function Dr() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function Rr() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Pr() {
  return !this.node();
}
function Or(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Vr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Wr(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Br(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Yr(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Ur(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Gr(t, e) {
  var n = Ot(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Xr : Vr : typeof e == "function" ? n.local ? Ur : Yr : n.local ? Br : Wr)(n, e));
}
function Ze(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Kr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Zr(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Qr(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Jr(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Kr : typeof e == "function" ? Qr : Zr)(t, e, n ?? "")) : ut(this.node(), t);
}
function ut(t, e) {
  return t.style.getPropertyValue(e) || Ze(t).getComputedStyle(t, null).getPropertyValue(e);
}
function jr(t) {
  return function() {
    delete this[t];
  };
}
function ti(t, e) {
  return function() {
    this[t] = e;
  };
}
function ei(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ni(t, e) {
  return arguments.length > 1 ? this.each((e == null ? jr : typeof e == "function" ? ei : ti)(t, e)) : this.node()[t];
}
function Qe(t) {
  return t.trim().split(/^|\s+/);
}
function fe(t) {
  return t.classList || new Je(t);
}
function Je(t) {
  this._node = t, this._names = Qe(t.getAttribute("class") || "");
}
Je.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function je(t, e) {
  for (var n = fe(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function tn(t, e) {
  for (var n = fe(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function ri(t) {
  return function() {
    je(this, t);
  };
}
function ii(t) {
  return function() {
    tn(this, t);
  };
}
function oi(t, e) {
  return function() {
    (e.apply(this, arguments) ? je : tn)(this, t);
  };
}
function ai(t, e) {
  var n = Qe(t + "");
  if (arguments.length < 2) {
    for (var r = fe(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? oi : e ? ri : ii)(n, e));
}
function ui() {
  this.textContent = "";
}
function si(t) {
  return function() {
    this.textContent = t;
  };
}
function ci(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function li(t) {
  return arguments.length ? this.each(t == null ? ui : (typeof t == "function" ? ci : si)(t)) : this.node().textContent;
}
function fi() {
  this.innerHTML = "";
}
function hi(t) {
  return function() {
    this.innerHTML = t;
  };
}
function di(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function pi(t) {
  return arguments.length ? this.each(t == null ? fi : (typeof t == "function" ? di : hi)(t)) : this.node().innerHTML;
}
function gi() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yi() {
  return this.each(gi);
}
function mi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _i() {
  return this.each(mi);
}
function xi(t) {
  var e = typeof t == "function" ? t : We(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function wi() {
  return null;
}
function vi(t, e) {
  var n = typeof t == "function" ? t : We(t), r = e == null ? wi : typeof e == "function" ? e : le(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function bi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ki() {
  return this.each(bi);
}
function $i() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ni() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ai(t) {
  return this.select(t ? Ni : $i);
}
function zi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Si(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Ei(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Mi(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Ti(t, e, n) {
  return function() {
    var r = this.__on, i, o = Si(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Ci(t, e, n) {
  var r = Ei(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var f = 0, u = s.length, c; f < u; ++f)
        for (i = 0, c = s[f]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = e ? Ti : Mi, i = 0; i < o; ++i)
    this.each(s(r[i], e, n));
  return this;
}
function en(t, e, n) {
  var r = Ze(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Ii(t, e) {
  return function() {
    return en(this, t, e);
  };
}
function Li(t, e) {
  return function() {
    return en(this, t, e.apply(this, arguments));
  };
}
function Fi(t, e) {
  return this.each((typeof e == "function" ? Li : Ii)(t, e));
}
function* qi() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var he = [null];
function F(t, e) {
  this._groups = t, this._parents = e;
}
function xt() {
  return new F([[document.documentElement]], he);
}
function Hi() {
  return this;
}
F.prototype = xt.prototype = {
  constructor: F,
  select: lr,
  selectAll: dr,
  selectChild: mr,
  selectChildren: vr,
  filter: br,
  data: Sr,
  enter: kr,
  exit: Mr,
  join: Tr,
  merge: Cr,
  selection: Hi,
  order: Ir,
  sort: Lr,
  call: qr,
  nodes: Hr,
  node: Dr,
  size: Rr,
  empty: Pr,
  each: Or,
  attr: Gr,
  style: Jr,
  property: ni,
  classed: ai,
  text: li,
  html: pi,
  raise: yi,
  lower: _i,
  append: xi,
  insert: vi,
  remove: ki,
  clone: Ai,
  datum: zi,
  on: Ci,
  dispatch: Fi,
  [Symbol.iterator]: qi
};
function Q(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], he);
}
function Di(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function j(t, e) {
  if (t = Di(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
function Ri(t) {
  return typeof t == "string" ? new F([document.querySelectorAll(t)], [document.documentElement]) : new F([Be(t)], he);
}
var Pi = { value: () => {
} };
function de() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Mt(n);
}
function Mt(t) {
  this._ = t;
}
function Oi(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Mt.prototype = de.prototype = {
  constructor: Mt,
  on: function(t, e) {
    var n = this._, r = Oi(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = Vi(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        n[i] = ke(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = ke(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new Mt(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(e, n);
  }
};
function Vi(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ke(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Pi, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
const ee = { capture: !0, passive: !1 };
function ne(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Xi(t) {
  var e = t.document.documentElement, n = Q(t).on("dragstart.drag", ne, ee);
  "onselectstart" in e ? n.on("selectstart.drag", ne, ee) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Wi(t, e) {
  var n = t.document.documentElement, r = Q(t).on("dragstart.drag", null);
  e && (r.on("click.drag", ne, ee), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function pe(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function nn(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e)
    n[r] = e[r];
  return n;
}
function wt() {
}
var gt = 0.7, Ft = 1 / gt, ot = "\\s*([+-]?\\d+)\\s*", yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", V = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Bi = /^#([0-9a-f]{3,8})$/, Yi = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), Ui = new RegExp(`^rgb\\(${V},${V},${V}\\)$`), Gi = new RegExp(`^rgba\\(${ot},${ot},${ot},${yt}\\)$`), Ki = new RegExp(`^rgba\\(${V},${V},${V},${yt}\\)$`), Zi = new RegExp(`^hsl\\(${yt},${V},${V}\\)$`), Qi = new RegExp(`^hsla\\(${yt},${V},${V},${yt}\\)$`), $e = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
pe(wt, mt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ne,
  // Deprecated! Use color.formatHex.
  formatHex: Ne,
  formatHex8: Ji,
  formatHsl: ji,
  formatRgb: Ae,
  toString: Ae
});
function Ne() {
  return this.rgb().formatHex();
}
function Ji() {
  return this.rgb().formatHex8();
}
function ji() {
  return rn(this).formatHsl();
}
function Ae() {
  return this.rgb().formatRgb();
}
function mt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Bi.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ze(e) : n === 3 ? new q(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Nt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Nt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Yi.exec(t)) ? new q(e[1], e[2], e[3], 1) : (e = Ui.exec(t)) ? new q(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Gi.exec(t)) ? Nt(e[1], e[2], e[3], e[4]) : (e = Ki.exec(t)) ? Nt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Zi.exec(t)) ? Me(e[1], e[2] / 100, e[3] / 100, 1) : (e = Qi.exec(t)) ? Me(e[1], e[2] / 100, e[3] / 100, e[4]) : $e.hasOwnProperty(t) ? ze($e[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function ze(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Nt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new q(t, e, n, r);
}
function to(t) {
  return t instanceof wt || (t = mt(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function re(t, e, n, r) {
  return arguments.length === 1 ? to(t) : new q(t, e, n, r ?? 1);
}
function q(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
pe(q, re, nn(wt, {
  brighter(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(et(this.r), et(this.g), et(this.b), qt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Se,
  // Deprecated! Use color.formatHex.
  formatHex: Se,
  formatHex8: eo,
  formatRgb: Ee,
  toString: Ee
}));
function Se() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}`;
}
function eo() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}${tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ee() {
  const t = qt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${et(this.r)}, ${et(this.g)}, ${et(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function qt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function et(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function tt(t) {
  return t = et(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Me(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new R(t, e, n, r);
}
function rn(t) {
  if (t instanceof R)
    return new R(t.h, t.s, t.l, t.opacity);
  if (t instanceof wt || (t = mt(t)), !t)
    return new R();
  if (t instanceof R)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, f = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= f < 0.5 ? o + i : 2 - o - i, a *= 60) : s = f > 0 && f < 1 ? 0 : a, new R(a, s, f, t.opacity);
}
function no(t, e, n, r) {
  return arguments.length === 1 ? rn(t) : new R(t, e, n, r ?? 1);
}
function R(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
pe(R, no, nn(wt, {
  brighter(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new R(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new R(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new q(
      Kt(t >= 240 ? t - 240 : t + 120, i, r),
      Kt(t, i, r),
      Kt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new R(Te(this.h), At(this.s), At(this.l), qt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = qt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Te(this.h)}, ${At(this.s) * 100}%, ${At(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Te(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function At(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Kt(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const on = (t) => () => t;
function ro(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function io(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function oo(t) {
  return (t = +t) == 1 ? an : function(e, n) {
    return n - e ? io(e, n, t) : on(isNaN(e) ? n : e);
  };
}
function an(t, e) {
  var n = e - t;
  return n ? ro(t, n) : on(isNaN(t) ? e : t);
}
const Ce = function t(e) {
  var n = oo(e);
  function r(i, o) {
    var a = n((i = re(i)).r, (o = re(o)).r), s = n(i.g, o.g), f = n(i.b, o.b), u = an(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = f(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Z(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
var ie = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Zt = new RegExp(ie.source, "g");
function ao(t) {
  return function() {
    return t;
  };
}
function uo(t) {
  return function(e) {
    return t(e) + "";
  };
}
function so(t, e) {
  var n = ie.lastIndex = Zt.lastIndex = 0, r, i, o, a = -1, s = [], f = [];
  for (t = t + "", e = e + ""; (r = ie.exec(t)) && (i = Zt.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, f.push({ i: a, x: Z(r, i) })), n = Zt.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? f[0] ? uo(f[0].x) : ao(e) : (e = f.length, function(u) {
    for (var c = 0, d; c < e; ++c)
      s[(d = f[c]).i] = d.x(u);
    return s.join("");
  });
}
var Ie = 180 / Math.PI, oe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function un(t, e, n, r, i, o) {
  var a, s, f;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (f = t * n + e * r) && (n -= t * f, r -= e * f), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, f /= s), t * r < e * n && (t = -t, e = -e, f = -f, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Ie,
    skewX: Math.atan(f) * Ie,
    scaleX: a,
    scaleY: s
  };
}
var zt;
function co(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? oe : un(e.a, e.b, e.c, e.d, e.e, e.f);
}
function lo(t) {
  return t == null || (zt || (zt = document.createElementNS("http://www.w3.org/2000/svg", "g")), zt.setAttribute("transform", t), !(t = zt.transform.baseVal.consolidate())) ? oe : (t = t.matrix, un(t.a, t.b, t.c, t.d, t.e, t.f));
}
function sn(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, d, l, p, m) {
    if (u !== d || c !== l) {
      var _ = p.push("translate(", null, e, null, n);
      m.push({ i: _ - 4, x: Z(u, d) }, { i: _ - 2, x: Z(c, l) });
    } else
      (d || l) && p.push("translate(" + d + e + l + n);
  }
  function a(u, c, d, l) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), l.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: Z(u, c) })) : c && d.push(i(d) + "rotate(" + c + r);
  }
  function s(u, c, d, l) {
    u !== c ? l.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: Z(u, c) }) : c && d.push(i(d) + "skewX(" + c + r);
  }
  function f(u, c, d, l, p, m) {
    if (u !== d || c !== l) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: Z(u, d) }, { i: _ - 2, x: Z(c, l) });
    } else
      (d !== 1 || l !== 1) && p.push(i(p) + "scale(" + d + "," + l + ")");
  }
  return function(u, c) {
    var d = [], l = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, d, l), a(u.rotate, c.rotate, d, l), s(u.skewX, c.skewX, d, l), f(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, l), u = c = null, function(p) {
      for (var m = -1, _ = l.length, x; ++m < _; )
        d[(x = l[m]).i] = x.x(p);
      return d.join("");
    };
  };
}
var fo = sn(co, "px, ", "px)", "deg)"), ho = sn(lo, ", ", ")", ")"), po = 1e-12;
function Le(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function go(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function yo(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const mo = function t(e, n, r) {
  function i(o, a) {
    var s = o[0], f = o[1], u = o[2], c = a[0], d = a[1], l = a[2], p = c - s, m = d - f, _ = p * p + m * m, x, y;
    if (_ < po)
      y = Math.log(l / u) / e, x = function(K) {
        return [
          s + K * p,
          f + K * m,
          u * Math.exp(e * K * y)
        ];
      };
    else {
      var w = Math.sqrt(_), z = (l * l - u * u + r * _) / (2 * u * n * w), A = (l * l - u * u - r * _) / (2 * l * n * w), E = Math.log(Math.sqrt(z * z + 1) - z), C = Math.log(Math.sqrt(A * A + 1) - A);
      y = (C - E) / e, x = function(K) {
        var bt = K * y, kt = Le(E), $t = u / (n * w) * (kt * yo(e * bt + E) - go(E));
        return [
          s + $t * p,
          f + $t * m,
          u * kt / Le(e * bt + E)
        ];
      };
    }
    return x.duration = y * 1e3 * e / Math.SQRT2, x;
  }
  return i.rho = function(o) {
    var a = Math.max(1e-3, +o), s = a * a, f = s * s;
    return t(a, s, f);
  }, i;
}(Math.SQRT2, 2, 4);
var st = 0, dt = 0, ft = 0, cn = 1e3, Ht, pt, Dt = 0, nt = 0, Vt = 0, _t = typeof performance == "object" && performance.now ? performance : Date, ln = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ge() {
  return nt || (ln(_o), nt = _t.now() + Vt);
}
function _o() {
  nt = 0;
}
function Rt() {
  this._call = this._time = this._next = null;
}
Rt.prototype = fn.prototype = {
  constructor: Rt,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ge() : +n) + (e == null ? 0 : +e), !this._next && pt !== this && (pt ? pt._next = this : Ht = this, pt = this), this._call = t, this._time = n, ae();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ae());
  }
};
function fn(t, e, n) {
  var r = new Rt();
  return r.restart(t, e, n), r;
}
function xo() {
  ge(), ++st;
  for (var t = Ht, e; t; )
    (e = nt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --st;
}
function Fe() {
  nt = (Dt = _t.now()) + Vt, st = dt = 0;
  try {
    xo();
  } finally {
    st = 0, vo(), nt = 0;
  }
}
function wo() {
  var t = _t.now(), e = t - Dt;
  e > cn && (Vt -= e, Dt = t);
}
function vo() {
  for (var t, e = Ht, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ht = n);
  pt = t, ae(r);
}
function ae(t) {
  if (!st) {
    dt && (dt = clearTimeout(dt));
    var e = t - nt;
    e > 24 ? (t < 1 / 0 && (dt = setTimeout(Fe, t - _t.now() - Vt)), ft && (ft = clearInterval(ft))) : (ft || (Dt = _t.now(), ft = setInterval(wo, cn)), st = 1, ln(Fe));
  }
}
function qe(t, e, n) {
  var r = new Rt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var bo = de("start", "end", "cancel", "interrupt"), ko = [], hn = 0, He = 1, ue = 2, Tt = 3, De = 4, se = 5, Ct = 6;
function Xt(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (n in a)
    return;
  $o(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: bo,
    tween: ko,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: hn
  });
}
function ye(t, e) {
  var n = P(t, e);
  if (n.state > hn)
    throw new Error("too late; already scheduled");
  return n;
}
function X(t, e) {
  var n = P(t, e);
  if (n.state > Tt)
    throw new Error("too late; already running");
  return n;
}
function P(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function $o(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = fn(o, 0, n.time);
  function o(u) {
    n.state = He, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, l, p;
    if (n.state !== He)
      return f();
    for (c in r)
      if (p = r[c], p.name === n.name) {
        if (p.state === Tt)
          return qe(a);
        p.state === De ? (p.state = Ct, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = Ct, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (qe(function() {
      n.state === Tt && (n.state = De, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = ue, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ue) {
      for (n.state = Tt, i = new Array(l = n.tween.length), c = 0, d = -1; c < l; ++c)
        (p = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++d] = p);
      i.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(f), n.state = se, 1), d = -1, l = i.length; ++d < l; )
      i[d].call(t, c);
    n.state === se && (n.on.call("end", t, t.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Ct, n.timer.stop(), delete r[e];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function It(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > ue && r.state < se, r.state = Ct, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function No(t) {
  return this.each(function() {
    It(this, t);
  });
}
function Ao(t, e) {
  var n, r;
  return function() {
    var i = X(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function zo(t, e, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var o = X(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, f = 0, u = i.length; f < u; ++f)
        if (i[f].name === e) {
          i[f] = s;
          break;
        }
      f === u && i.push(s);
    }
    o.tween = i;
  };
}
function So(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = P(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ao : zo)(n, t, e));
}
function me(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = X(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return P(i, r).value[e];
  };
}
function dn(t, e) {
  var n;
  return (typeof e == "number" ? Z : e instanceof mt ? Ce : (n = mt(e)) ? (e = n, Ce) : so)(t, e);
}
function Eo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Mo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function To(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Co(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Io(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), f;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), f = s + "", a === f ? null : a === r && f === i ? o : (i = f, o = e(r = a, s)));
  };
}
function Lo(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), f;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), f = s + "", a === f ? null : a === r && f === i ? o : (i = f, o = e(r = a, s)));
  };
}
function Fo(t, e) {
  var n = Ot(t), r = n === "transform" ? ho : dn;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Lo : Io)(n, r, me(this, "attr." + t, e)) : e == null ? (n.local ? Mo : Eo)(n) : (n.local ? Co : To)(n, r, e));
}
function qo(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Ho(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Do(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Ho(t, o)), n;
  }
  return i._value = e, i;
}
function Ro(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && qo(t, o)), n;
  }
  return i._value = e, i;
}
function Po(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var r = Ot(t);
  return this.tween(n, (r.local ? Do : Ro)(r, e));
}
function Oo(t, e) {
  return function() {
    ye(this, t).delay = +e.apply(this, arguments);
  };
}
function Vo(t, e) {
  return e = +e, function() {
    ye(this, t).delay = e;
  };
}
function Xo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Oo : Vo)(e, t)) : P(this.node(), e).delay;
}
function Wo(t, e) {
  return function() {
    X(this, t).duration = +e.apply(this, arguments);
  };
}
function Bo(t, e) {
  return e = +e, function() {
    X(this, t).duration = e;
  };
}
function Yo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wo : Bo)(e, t)) : P(this.node(), e).duration;
}
function Uo(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    X(this, t).ease = e;
  };
}
function Go(t) {
  var e = this._id;
  return arguments.length ? this.each(Uo(e, t)) : P(this.node(), e).ease;
}
function Ko(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    X(this, t).ease = n;
  };
}
function Zo(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Ko(this._id, t));
}
function Qo(t) {
  typeof t != "function" && (t = Ue(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], f, u = 0; u < a; ++u)
      (f = o[u]) && t.call(f, f.__data__, u, o) && s.push(f);
  return new G(r, this._parents, this._name, this._id);
}
function Jo(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var f = e[s], u = n[s], c = f.length, d = a[s] = new Array(c), l, p = 0; p < c; ++p)
      (l = f[p] || u[p]) && (d[p] = l);
  for (; s < r; ++s)
    a[s] = e[s];
  return new G(a, this._parents, this._name, this._id);
}
function jo(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ta(t, e, n) {
  var r, i, o = jo(e) ? ye : X;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function ea(t, e) {
  var n = this._id;
  return arguments.length < 2 ? P(this.node(), n).on.on(t) : this.each(ta(n, t, e));
}
function na(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function ra() {
  return this.on("end.remove", na(this._id));
}
function ia(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = le(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], f = s.length, u = o[a] = new Array(f), c, d, l = 0; l < f; ++l)
      (c = s[l]) && (d = t.call(c, c.__data__, l, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[l] = d, Xt(u[l], e, n, l, u, P(c, n)));
  return new G(o, this._parents, e, n);
}
function oa(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ye(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var f = r[s], u = f.length, c, d = 0; d < u; ++d)
      if (c = f[d]) {
        for (var l = t.call(c, c.__data__, d, f), p, m = P(c, n), _ = 0, x = l.length; _ < x; ++_)
          (p = l[_]) && Xt(p, e, n, _, l, m);
        o.push(l), a.push(c);
      }
  return new G(o, a, e, n);
}
var aa = xt.prototype.constructor;
function ua() {
  return new aa(this._groups, this._parents);
}
function sa(t, e) {
  var n, r, i;
  return function() {
    var o = ut(this, t), a = (this.style.removeProperty(t), ut(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function pn(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ca(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = ut(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function la(t, e, n) {
  var r, i, o;
  return function() {
    var a = ut(this, t), s = n(this), f = s + "";
    return s == null && (f = s = (this.style.removeProperty(t), ut(this, t))), a === f ? null : a === r && f === i ? o : (i = f, o = e(r = a, s));
  };
}
function fa(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var f = X(this, t), u = f.on, c = f.value[o] == null ? s || (s = pn(e)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(a, i = c), f.on = r;
  };
}
function ha(t, e, n) {
  var r = (t += "") == "transform" ? fo : dn;
  return e == null ? this.styleTween(t, sa(t, r)).on("end.style." + t, pn(t)) : typeof e == "function" ? this.styleTween(t, la(t, r, me(this, "style." + t, e))).each(fa(this._id, t)) : this.styleTween(t, ca(t, r, e), n).on("end.style." + t, null);
}
function da(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function pa(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && da(t, a, n)), r;
  }
  return o._value = e, o;
}
function ga(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, pa(t, e, n ?? ""));
}
function ya(t) {
  return function() {
    this.textContent = t;
  };
}
function ma(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function _a(t) {
  return this.tween("text", typeof t == "function" ? ma(me(this, "text", t)) : ya(t == null ? "" : t + ""));
}
function xa(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function wa(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && xa(i)), e;
  }
  return r._value = t, r;
}
function va(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, wa(t));
}
function ba() {
  for (var t = this._name, e = this._id, n = gn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, f, u = 0; u < s; ++u)
      if (f = a[u]) {
        var c = P(f, e);
        Xt(f, t, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new G(r, this._parents, t, n);
}
function ka() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, f = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = X(this, r), c = u.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(f)), u.on = e;
    }), i === 0 && o();
  });
}
var $a = 0;
function G(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function gn() {
  return ++$a;
}
var Y = xt.prototype;
G.prototype = {
  constructor: G,
  select: ia,
  selectAll: oa,
  selectChild: Y.selectChild,
  selectChildren: Y.selectChildren,
  filter: Qo,
  merge: Jo,
  selection: ua,
  transition: ba,
  call: Y.call,
  nodes: Y.nodes,
  node: Y.node,
  size: Y.size,
  empty: Y.empty,
  each: Y.each,
  on: ea,
  attr: Fo,
  attrTween: Po,
  style: ha,
  styleTween: ga,
  text: _a,
  textTween: va,
  remove: ra,
  tween: So,
  delay: Xo,
  duration: Yo,
  ease: Go,
  easeVarying: Zo,
  end: ka,
  [Symbol.iterator]: Y[Symbol.iterator]
};
function Na(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Aa = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Na
};
function za(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Sa(t) {
  var e, n;
  t instanceof G ? (e = t._id, t = t._name) : (e = gn(), (n = Aa).time = ge(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, f, u = 0; u < s; ++u)
      (f = a[u]) && Xt(f, t, e, u, a, n || za(f, e));
  return new G(r, this._parents, t, e);
}
xt.prototype.interrupt = No;
xt.prototype.transition = Sa;
const St = (t) => () => t;
function Ea(t, {
  sourceEvent: e,
  target: n,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function U(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
U.prototype = {
  constructor: U,
  scale: function(t) {
    return t === 1 ? this : new U(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new U(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var yn = new U(1, 0, 0);
U.prototype;
function Qt(t) {
  t.stopImmediatePropagation();
}
function ht(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ma(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Ta() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Re() {
  return this.__zoom || yn;
}
function Ca(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Ia() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function La(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], o = t.invertY(e[0][1]) - n[0][1], a = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
function Fa() {
  var t = Ma, e = Ta, n = La, r = Ca, i = Ia, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, f = mo, u = de("start", "zoom", "end"), c, d, l, p = 500, m = 150, _ = 0, x = 10;
  function y(h) {
    h.property("__zoom", Re).on("wheel.zoom", bt, { passive: !1 }).on("mousedown.zoom", kt).on("dblclick.zoom", $t).filter(i).on("touchstart.zoom", xn).on("touchmove.zoom", wn).on("touchend.zoom touchcancel.zoom", vn).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(h, v, g, b) {
    var k = h.selection ? h.selection() : h;
    k.property("__zoom", Re), h !== k ? E(h, v, g, b) : k.interrupt().each(function() {
      C(this, arguments).event(b).start().zoom(null, typeof v == "function" ? v.apply(this, arguments) : v).end();
    });
  }, y.scaleBy = function(h, v, g, b) {
    y.scaleTo(h, function() {
      var k = this.__zoom.k, $ = typeof v == "function" ? v.apply(this, arguments) : v;
      return k * $;
    }, g, b);
  }, y.scaleTo = function(h, v, g, b) {
    y.transform(h, function() {
      var k = e.apply(this, arguments), $ = this.__zoom, N = g == null ? A(k) : typeof g == "function" ? g.apply(this, arguments) : g, S = $.invert(N), M = typeof v == "function" ? v.apply(this, arguments) : v;
      return n(z(w($, M), N, S), k, a);
    }, g, b);
  }, y.translateBy = function(h, v, g, b) {
    y.transform(h, function() {
      return n(this.__zoom.translate(
        typeof v == "function" ? v.apply(this, arguments) : v,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), e.apply(this, arguments), a);
    }, null, b);
  }, y.translateTo = function(h, v, g, b, k) {
    y.transform(h, function() {
      var $ = e.apply(this, arguments), N = this.__zoom, S = b == null ? A($) : typeof b == "function" ? b.apply(this, arguments) : b;
      return n(yn.translate(S[0], S[1]).scale(N.k).translate(
        typeof v == "function" ? -v.apply(this, arguments) : -v,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), $, a);
    }, b, k);
  };
  function w(h, v) {
    return v = Math.max(o[0], Math.min(o[1], v)), v === h.k ? h : new U(v, h.x, h.y);
  }
  function z(h, v, g) {
    var b = v[0] - g[0] * h.k, k = v[1] - g[1] * h.k;
    return b === h.x && k === h.y ? h : new U(h.k, b, k);
  }
  function A(h) {
    return [(+h[0][0] + +h[1][0]) / 2, (+h[0][1] + +h[1][1]) / 2];
  }
  function E(h, v, g, b) {
    h.on("start.zoom", function() {
      C(this, arguments).event(b).start();
    }).on("interrupt.zoom end.zoom", function() {
      C(this, arguments).event(b).end();
    }).tween("zoom", function() {
      var k = this, $ = arguments, N = C(k, $).event(b), S = e.apply(k, $), M = g == null ? A(S) : typeof g == "function" ? g.apply(k, $) : g, O = Math.max(S[1][0] - S[0][0], S[1][1] - S[0][1]), L = k.__zoom, H = typeof v == "function" ? v.apply(k, $) : v, W = f(L.invert(M).concat(O / L.k), H.invert(M).concat(O / H.k));
      return function(D) {
        if (D === 1)
          D = H;
        else {
          var B = W(D), Wt = O / B[2];
          D = new U(Wt, M[0] - B[0] * Wt, M[1] - B[1] * Wt);
        }
        N.zoom(null, D);
      };
    });
  }
  function C(h, v, g) {
    return !g && h.__zooming || new K(h, v);
  }
  function K(h, v) {
    this.that = h, this.args = v, this.active = 0, this.sourceEvent = null, this.extent = e.apply(h, v), this.taps = 0;
  }
  K.prototype = {
    event: function(h) {
      return h && (this.sourceEvent = h), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(h, v) {
      return this.mouse && h !== "mouse" && (this.mouse[1] = v.invert(this.mouse[0])), this.touch0 && h !== "touch" && (this.touch0[1] = v.invert(this.touch0[0])), this.touch1 && h !== "touch" && (this.touch1[1] = v.invert(this.touch1[0])), this.that.__zoom = v, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(h) {
      var v = Q(this.that).datum();
      u.call(
        h,
        this.that,
        new Ea(h, {
          sourceEvent: this.sourceEvent,
          target: y,
          type: h,
          transform: this.that.__zoom,
          dispatch: u
        }),
        v
      );
    }
  };
  function bt(h, ...v) {
    if (!t.apply(this, arguments))
      return;
    var g = C(this, v).event(h), b = this.__zoom, k = Math.max(o[0], Math.min(o[1], b.k * Math.pow(2, r.apply(this, arguments)))), $ = j(h);
    if (g.wheel)
      (g.mouse[0][0] !== $[0] || g.mouse[0][1] !== $[1]) && (g.mouse[1] = b.invert(g.mouse[0] = $)), clearTimeout(g.wheel);
    else {
      if (b.k === k)
        return;
      g.mouse = [$, b.invert($)], It(this), g.start();
    }
    ht(h), g.wheel = setTimeout(N, m), g.zoom("mouse", n(z(w(b, k), g.mouse[0], g.mouse[1]), g.extent, a));
    function N() {
      g.wheel = null, g.end();
    }
  }
  function kt(h, ...v) {
    if (l || !t.apply(this, arguments))
      return;
    var g = h.currentTarget, b = C(this, v, !0).event(h), k = Q(h.view).on("mousemove.zoom", M, !0).on("mouseup.zoom", O, !0), $ = j(h, g), N = h.clientX, S = h.clientY;
    Xi(h.view), Qt(h), b.mouse = [$, this.__zoom.invert($)], It(this), b.start();
    function M(L) {
      if (ht(L), !b.moved) {
        var H = L.clientX - N, W = L.clientY - S;
        b.moved = H * H + W * W > _;
      }
      b.event(L).zoom("mouse", n(z(b.that.__zoom, b.mouse[0] = j(L, g), b.mouse[1]), b.extent, a));
    }
    function O(L) {
      k.on("mousemove.zoom mouseup.zoom", null), Wi(L.view, b.moved), ht(L), b.event(L).end();
    }
  }
  function $t(h, ...v) {
    if (t.apply(this, arguments)) {
      var g = this.__zoom, b = j(h.changedTouches ? h.changedTouches[0] : h, this), k = g.invert(b), $ = g.k * (h.shiftKey ? 0.5 : 2), N = n(z(w(g, $), b, k), e.apply(this, v), a);
      ht(h), s > 0 ? Q(this).transition().duration(s).call(E, N, b, h) : Q(this).call(y.transform, N, b, h);
    }
  }
  function xn(h, ...v) {
    if (t.apply(this, arguments)) {
      var g = h.touches, b = g.length, k = C(this, v, h.changedTouches.length === b).event(h), $, N, S, M;
      for (Qt(h), N = 0; N < b; ++N)
        S = g[N], M = j(S, this), M = [M, this.__zoom.invert(M), S.identifier], k.touch0 ? !k.touch1 && k.touch0[2] !== M[2] && (k.touch1 = M, k.taps = 0) : (k.touch0 = M, $ = !0, k.taps = 1 + !!c);
      c && (c = clearTimeout(c)), $ && (k.taps < 2 && (d = M[0], c = setTimeout(function() {
        c = null;
      }, p)), It(this), k.start());
    }
  }
  function wn(h, ...v) {
    if (this.__zooming) {
      var g = C(this, v).event(h), b = h.changedTouches, k = b.length, $, N, S, M;
      for (ht(h), $ = 0; $ < k; ++$)
        N = b[$], S = j(N, this), g.touch0 && g.touch0[2] === N.identifier ? g.touch0[0] = S : g.touch1 && g.touch1[2] === N.identifier && (g.touch1[0] = S);
      if (N = g.that.__zoom, g.touch1) {
        var O = g.touch0[0], L = g.touch0[1], H = g.touch1[0], W = g.touch1[1], D = (D = H[0] - O[0]) * D + (D = H[1] - O[1]) * D, B = (B = W[0] - L[0]) * B + (B = W[1] - L[1]) * B;
        N = w(N, Math.sqrt(D / B)), S = [(O[0] + H[0]) / 2, (O[1] + H[1]) / 2], M = [(L[0] + W[0]) / 2, (L[1] + W[1]) / 2];
      } else if (g.touch0)
        S = g.touch0[0], M = g.touch0[1];
      else
        return;
      g.zoom("touch", n(z(N, S, M), g.extent, a));
    }
  }
  function vn(h, ...v) {
    if (this.__zooming) {
      var g = C(this, v).event(h), b = h.changedTouches, k = b.length, $, N;
      for (Qt(h), l && clearTimeout(l), l = setTimeout(function() {
        l = null;
      }, p), $ = 0; $ < k; ++$)
        N = b[$], g.touch0 && g.touch0[2] === N.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === N.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0)
        g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (N = j(N, this), Math.hypot(d[0] - N[0], d[1] - N[1]) < x)) {
        var S = Q(this).on("dblclick.zoom");
        S && S.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(h) {
    return arguments.length ? (r = typeof h == "function" ? h : St(+h), y) : r;
  }, y.filter = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : St(!!h), y) : t;
  }, y.touchable = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : St(!!h), y) : i;
  }, y.extent = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : St([[+h[0][0], +h[0][1]], [+h[1][0], +h[1][1]]]), y) : e;
  }, y.scaleExtent = function(h) {
    return arguments.length ? (o[0] = +h[0], o[1] = +h[1], y) : [o[0], o[1]];
  }, y.translateExtent = function(h) {
    return arguments.length ? (a[0][0] = +h[0][0], a[1][0] = +h[1][0], a[0][1] = +h[0][1], a[1][1] = +h[1][1], y) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, y.constrain = function(h) {
    return arguments.length ? (n = h, y) : n;
  }, y.duration = function(h) {
    return arguments.length ? (s = +h, y) : s;
  }, y.interpolate = function(h) {
    return arguments.length ? (f = h, y) : f;
  }, y.on = function() {
    var h = u.on.apply(u, arguments);
    return h === u ? y : h;
  }, y.clickDistance = function(h) {
    return arguments.length ? (_ = (h = +h) * h, y) : Math.sqrt(_);
  }, y.tapDistance = function(h) {
    return arguments.length ? (x = +h, y) : x;
  }, y;
}
const J = {
  hierarchy: ce,
  stratify: Gn,
  tree: er,
  treemap: ar,
  select: Q,
  selectAll: Ri,
  zoom: Fa
}, mn = (t) => {
  const e = document.querySelector(`#${t}`);
  if (e === null)
    throw new Error(`Cannot find dom element with id:${t}`);
  const n = e.clientWidth, r = e.clientHeight;
  if (r === 0 || n === 0)
    throw new Error(
      "The tree can't be display because the svg height or width of the container is null"
    );
  return { areaWidth: n, areaHeight: r };
}, vt = (t, e, n) => {
  try {
    const r = t.find((a) => a.id === n), i = r.ancestors()[1].id;
    return e.some(
      (a) => a.id === i
    ) ? r.ancestors()[1] : vt(t, e, i);
  } catch {
    return t.find((i) => i.id === n);
  }
}, _n = (t, e, n) => n.isHorizontal ? "translate(" + e + "," + t + ")" : "translate(" + t + "," + e + ")";
class it {
  // Adds one refresh action to the queue. When safe callback will be
  // triggered
  static add(e, n) {
    this.queue.push({
      delayNextCallback: e + this.extraDelayBetweenCallbacks,
      callback: n
    }), this.log(
      this.queue.map((r) => r.delayNextCallback),
      "<-- New task !!!"
    ), this.runner || (this.runnerFunction(), this.runner = setInterval(() => this.runnerFunction(), this.runnerSpeed));
  }
  // Each this.runnerSpeed milliseconds it's executed. It stops when finish.
  static runnerFunction() {
    if (this.queue[0]) {
      if (this.queue[0].callback) {
        this.log("Executing task, delaying next task...");
        try {
          this.queue[0].callback();
        } catch (e) {
          console.error(e);
        } finally {
          this.queue[0].callback = null;
        }
      }
      this.queue[0].delayNextCallback -= this.runnerSpeed, this.log(this.queue.map((e) => e.delayNextCallback)), this.queue[0].delayNextCallback <= 0 && this.queue.shift();
    } else
      this.log("No task found"), clearInterval(this.runner), this.runner = 0;
  }
  // Print to console debug data if this.showQueueLog = true
  static log(...e) {
    this.showQueueLog && console.log(...e);
  }
}
// The queue is an array that contains objects. Each object represents an
// refresh action and only they have 2 properties:
// {
//     callback:          triggers when it's the first of queue and then it
//                        becomes null to prevent that callback executes more
//                        than once.
//     delayNextCallback: when callback is executed, queue will subtracts
//                        milliseconds from it. When it becomes 0, the entire
//                        object is destroyed (shifted) from the array and then
//                        the next item (if exists) will be executed similary
//                        to this.
// }
rt(it, "queue", []), // Contains setInterval ID
rt(it, "runner"), // Milliseconds of each iteration
rt(it, "runnerSpeed", 100), // Developer internal magic number. Time added at end of refresh transition to
// let DOM and d3 rest before another refresh.
// 0 creates console and visual errors because getFirstDisplayedAncestor never
// found the needed id and setNodeLocation receives undefined parameters.
// Between 50 and 100 milliseconds seems enough for 10 nodes (demo example)
rt(it, "extraDelayBetweenCallbacks", 100), // Developer internal for debugging RefreshQueue class. Set true to see
// console "real time" queue of tasks.
// If there is a cleaner method, remove it!
rt(it, "showQueueLog", !1);
const qa = (t) => {
  const {
    htmlId: e,
    isHorizontal: n,
    hasPan: r,
    hasZoom: i,
    mainAxisNodeSpacing: o,
    nodeHeight: a,
    nodeWidth: s,
    marginBottom: f,
    marginLeft: u,
    marginRight: c,
    marginTop: d
  } = t, l = {
    top: d,
    right: c,
    bottom: f,
    left: u
  }, { areaHeight: p, areaWidth: m } = mn(t.htmlId), _ = m - l.left - l.right, x = p - l.top - l.bottom, y = J.select("#" + e).append("svg").attr("width", m).attr("height", p), w = y.append("g"), z = J.zoom().on("zoom", (E) => {
    w.attr("transform", () => E.transform);
  });
  return y.call(z), r || y.on("mousedown.zoom", null).on("touchstart.zoom", null).on("touchmove.zoom", null).on("touchend.zoom", null), i || y.on("wheel.zoom", null).on("mousewheel.zoom", null).on("mousemove.zoom", null).on("DOMMouseScroll.zoom", null).on("dblclick.zoom", null), w.append("g").attr(
    "transform",
    o === "auto" ? "translate(0,0)" : n ? "translate(" + l.left + "," + (l.top + x / 2 - a / 2) + ")" : "translate(" + (l.left + _ / 2 - s / 2) + "," + l.top + ")"
  );
}, _e = (t, e, n) => {
  const { isHorizontal: r, nodeHeight: i, nodeWidth: o, linkShape: a } = n;
  return a === "orthogonal" ? r ? `M ${t.y} ${t.x + i / 2}
        L ${(t.y + e.y + o) / 2} ${t.x + i / 2}
        L  ${(t.y + e.y + o) / 2} ${e.x + i / 2}
          ${e.y + o} ${e.x + i / 2}` : `M ${t.x + o / 2} ${t.y}
        L ${t.x + o / 2} ${(t.y + e.y + i) / 2}
        L  ${e.x + o / 2} ${(t.y + e.y + i) / 2}
          ${e.x + o / 2} ${e.y + i} ` : a === "curve" ? r ? `M ${t.y} ${t.x + i / 2}
      L ${t.y - (t.y - e.y - o) / 2 + 15} ${t.x + i / 2}
      Q${t.y - (t.y - e.y - o) / 2} ${t.x + i / 2}
       ${t.y - (t.y - e.y - o) / 2} ${t.x + i / 2 - Pe(t.x, e.x, 15)}
      L ${t.y - (t.y - e.y - o) / 2} ${e.x + i / 2}
      L ${e.y + o} ${e.x + i / 2}` : `M ${t.x + o / 2} ${t.y}
      L ${t.x + o / 2} ${t.y - (t.y - e.y - i) / 2 + 15}
      Q${t.x + o / 2} ${t.y - (t.y - e.y - i) / 2}
      ${t.x + o / 2 - Pe(t.x, e.x, 15)} ${t.y - (t.y - e.y - i) / 2}
      L ${e.x + o / 2} ${t.y - (t.y - e.y - i) / 2} 
      L ${e.x + o / 2} ${e.y + i} ` : r ? `M ${t.y} ${t.x + i / 2}
        C ${(t.y + e.y + o) / 2} ${t.x + i / 2}
          ${(t.y + e.y + o) / 2} ${e.x + i / 2}
          ${e.y + o} ${e.x + i / 2}` : `M ${t.x + o / 2} ${t.y}
        C ${t.x + o / 2} ${(t.y + e.y + i) / 2}
          ${e.x + o / 2} ${(t.y + e.y + i) / 2}
          ${e.x + o / 2} ${e.y + i} `;
}, Pe = (t, e, n) => t > e ? n : t < e ? -n : 0, Ha = (t, e, n, r) => t.enter().insert("path", "g").attr("class", "link").attr("d", (i) => {
  const o = vt(
    n,
    r,
    i.id
  ), a = {
    x: o.x0,
    y: o.y0
  };
  return _e(a, a, e);
}).attr("fill", "none").attr(
  "stroke-width",
  (i) => e.linkWidth(i)
  // Pass the correct `d` object to linkWidth
).attr(
  "stroke",
  (i) => e.linkColor(i)
  // Pass the correct `d` object to linkColor
), Da = (t, e, n, r) => {
  t.exit().transition().duration(e.duration).style("opacity", 0).attr("d", (i) => {
    const o = vt(
      r,
      n,
      i.id
    ), a = {
      x: o.x0,
      y: o.y0
    };
    return _e(a, a, e);
  }).remove();
}, Ra = (t, e, n) => {
  t.merge(e).transition().duration(n.duration).attr("d", (i) => _e(i, i.parent, n)).attr("fill", "none").attr("stroke-width", (i) => n.linkWidth(i)).attr("stroke", (i) => n.linkColor(i));
}, Pa = (t, e, n, r) => {
  const i = t.enter().append("g").attr("class", "node").attr("id", (o) => o == null ? void 0 : o.id).attr("transform", (o) => {
    const a = vt(
      n,
      r,
      o.id
    );
    return _n(
      a.x0,
      a.y0,
      e
    );
  });
  return i.append("foreignObject").attr("width", e.nodeWidth).attr("height", e.nodeHeight), i;
}, Oa = (t, e, n, r) => {
  const i = t.exit().transition().duration(e.duration).style("opacity", 0).attr("transform", (o) => {
    const a = vt(
      r,
      n,
      o.id
    );
    return _n(
      a.x0,
      a.y0,
      e
    );
  }).remove();
  i.select("rect").style("fill-opacity", 1e-6), i.select("circle").attr("r", 1e-6), i.select("text").style("fill-opacity", 1e-6);
}, Va = (t, e, n) => {
  const r = t.merge(e);
  r.transition().duration(n.duration).attr("transform", (i) => n.isHorizontal ? "translate(" + i.y + "," + i.x + ")" : "translate(" + i.x + "," + i.y + ")"), r.select("foreignObject").attr("width", n.nodeWidth).attr("height", n.nodeHeight).style("overflow", "visible").on("click", (i, o) => n.onNodeClick({ ...o, settings: n })).on("mouseenter", (i, o) => n.onNodeMouseEnter({ ...o, settings: n })).on("mouseleave", (i, o) => n.onNodeMouseLeave({ ...o, settings: n })).html((i) => n.renderNode({ ...i, settings: n }));
}, Xa = (t, e) => {
  const { idKey: n, relationnalField: r, hasFlatData: i } = e;
  return i ? J.stratify().id((o) => o[n]).parentId((o) => o[r])(t) : J.hierarchy(t, (o) => o[r]);
}, Wa = (t) => {
  const { areaHeight: e, areaWidth: n } = mn(t.htmlId);
  return t.mainAxisNodeSpacing === "auto" && t.isHorizontal ? J.tree().size([
    e - t.nodeHeight,
    n - t.nodeWidth
  ]) : t.mainAxisNodeSpacing === "auto" && !t.isHorizontal ? J.tree().size([
    n - t.nodeWidth,
    e - t.nodeHeight
  ]) : t.isHorizontal === !0 ? J.tree().nodeSize([
    t.nodeHeight * t.secondaryAxisNodeSpacing,
    t.nodeWidth
  ]) : J.tree().nodeSize([
    t.nodeWidth * t.secondaryAxisNodeSpacing,
    t.nodeHeight
  ]);
}, Ba = {
  create: Ya
};
function Ya(t) {
  let n = {
    ...{
      data: [],
      htmlId: "",
      idKey: "id",
      relationnalField: "father",
      hasFlatData: !0,
      nodeWidth: 160,
      nodeHeight: 100,
      mainAxisNodeSpacing: 300,
      renderNode: () => "Node",
      linkColor: () => "#ffcc80",
      linkWidth: () => 10,
      linkShape: "quadraticBeziers",
      isHorizontal: !0,
      hasPan: !1,
      hasZoom: !1,
      duration: 600,
      onNodeClick: () => {
      },
      onNodeMouseEnter: () => {
      },
      onNodeMouseLeave: () => {
      },
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      secondaryAxisNodeSpacing: 1.25
    },
    ...t
  }, r = [];
  function i(u, c) {
    const d = c.descendants(), l = c.descendants().slice(1), { mainAxisNodeSpacing: p } = n;
    p !== "auto" && d.forEach((w) => {
      w.y = w.depth * n.nodeWidth * p;
    }), d.forEach((w) => {
      const z = r.find(
        (A) => A.id === w.id
      );
      w.x0 = z ? z.x0 : w.x, w.y0 = z ? z.y0 : w.y;
    });
    const m = u.selectAll("g.node").data(d, (w) => w[n.idKey]), _ = Pa(m, n, d, r);
    Va(_, m, n), Oa(m, n, d, r);
    const x = u.selectAll("path.link").data(l, (w) => w.id), y = Ha(x, n, d, r);
    Ra(y, x, n), Da(x, n, d, r), r = [...d];
  }
  function o(u, c) {
    it.add(n.duration, () => {
      c && (n = { ...n, ...c });
      const d = Xa(u, n), p = Wa(n)(d);
      i(f, p);
    });
  }
  function a(u) {
    const c = u ? document.querySelector(`#${n.htmlId} svg g`) : document.querySelector(`#${n.htmlId}`);
    if (c)
      for (; c.firstChild; )
        c.removeChild(c.firstChild);
    r = [];
  }
  const s = { refresh: o, clean: a }, f = qa(n);
  return s;
}
var xe = [
  {
    id: 1,
    text_1: "Chaos",
    text_2: "Void",
    father: null,
    color: "#FF5722"
  },
  {
    id: 2,
    text_1: "Tartarus",
    text_2: "Abyss",
    father: 1,
    color: "#FFC107"
  },
  {
    id: 3,
    text_1: "Gaia",
    text_2: "Earth",
    father: 1,
    color: "#8BC34A"
  },
  {
    id: 4,
    text_1: "Eros",
    text_2: "Desire",
    father: 1,
    color: "#00BCD4"
  }
], Ua = [
  {
    id: 1,
    text_1: "Chaos",
    text_2: " Void",
    father: null,
    color: "#2196F3"
  },
  {
    id: 2,
    text_1: "Tartarus",
    text_2: "Abyss",
    father: 1,
    color: "#F44336"
  },
  {
    id: 3,
    text_1: "Gaia",
    text_2: "Earth",
    father: 1,
    color: "#673AB7"
  },
  {
    id: 4,
    text_1: "Eros",
    text_2: "Desire",
    father: 1,
    color: "#009688"
  },
  {
    id: 5,
    text_1: "Uranus",
    text_2: "Sky",
    father: 3,
    color: "#4CAF50"
  },
  {
    id: 6,
    text_1: "Ourea",
    text_2: "Mountains",
    father: 3,
    color: "#FF9800"
  }
], Ga = [
  {
    id: 1,
    text_1: "Chaos",
    text_2: "Void",
    father: null,
    color: "#2196F3"
  },
  {
    id: 2,
    text_1: "Tartarus",
    text_2: "Abyss",
    father: 1,
    color: "#F44336"
  },
  {
    id: 3,
    text_1: "Gaia",
    text_2: "Earth",
    father: 1,
    color: "#673AB7"
  },
  {
    id: 4,
    text_1: "Eros",
    text_2: "Desire",
    father: 1,
    color: "#009688"
  },
  {
    id: 5,
    text_1: "Uranus",
    text_2: "Sky",
    father: 3,
    color: "#4CAF50"
  },
  {
    id: 6,
    text_1: "Ourea",
    text_2: "Mountains",
    father: 3,
    color: "#FF9800"
  },
  {
    id: 7,
    text_1: "Hermes",
    text_2: " Sky",
    father: 4,
    color: "#2196F3"
  },
  {
    id: 8,
    text_1: "Aphrodite",
    text_2: "Love",
    father: 4,
    color: "#8BC34A"
  },
  {
    id: 3.3,
    text_1: "Love",
    text_2: "Peace",
    father: 8,
    color: "#c72e99"
  },
  {
    id: 4.1,
    text_1: "Hope",
    text_2: "Life",
    father: 8,
    color: "#2eecc7"
  }
], Pt = Ba.create({
  data: xe,
  // for Typescript projects only.
  htmlId: "tree",
  idKey: "id",
  hasFlatData: !0,
  relationnalField: "father",
  nodeWidth: 120,
  hasPan: !0,
  hasZoom: !0,
  nodeHeight: 80,
  mainAxisNodeSpacing: 2,
  isHorizontal: !1,
  renderNode: function(e) {
    return "<div class='box' style='cursor:pointer;height:" + e.settings.nodeHeight + "px; width:" + e.settings.nodeWidth + "px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:" + e.data.color + ";border-radius:5px;'><div><strong>" + e.data.text_1 + "</strong></div><div>is</div><div><i>" + e.data.text_2 + "</i></div></div>";
  },
  linkWidth: (t) => t.data.id * 2,
  linkShape: "curve",
  linkColor: () => "#B0BEC5",
  onNodeClick: (t) => {
    console.log(t.data);
  },
  onNodeMouseEnter: (t) => {
    console.log(t.data);
  }
});
Pt.refresh(xe);
var Oe = !0;
const I = document.querySelector("#add"), T = document.querySelector("#remove"), Jt = document.querySelector("#doTasks");
I == null || I.addEventListener("click", function() {
  console.log("addButton clicked"), Oe ? Pt.refresh(Ua) : Pt.refresh(Ga), Oe = !1;
});
T == null || T.addEventListener("click", function() {
  console.log("removeButton clicked"), Pt.refresh(xe);
});
Jt == null || Jt.addEventListener("click", function() {
  I == null || I.click(), T == null || T.click(), I == null || I.click(), T == null || T.click(), T == null || T.click(), I == null || I.click(), T == null || T.click(), I == null || I.click(), I == null || I.click(), T == null || T.click(), T == null || T.click();
});
