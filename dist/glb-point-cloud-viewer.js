/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ws = "158", Xn = { ROTATE: 0, DOLLY: 1, PAN: 2 }, qn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Qc = 0, da = 1, $c = 2, cc = 1, el = 2, on = 3, un = 0, wt = 1, Xt = 2, Sn = 0, di = 1, fa = 2, pa = 3, ma = 4, tl = 5, In = 100, nl = 101, il = 102, ga = 103, ba = 104, rl = 200, sl = 201, al = 202, ol = 203, ws = 204, Rs = 205, cl = 206, ll = 207, hl = 208, ul = 209, dl = 210, fl = 211, pl = 212, ml = 213, gl = 214, bl = 0, _l = 1, xl = 2, wr = 3, vl = 4, Ml = 5, Sl = 6, El = 7, lc = 0, yl = 1, Tl = 2, En = 0, Al = 1, wl = 2, Rl = 3, Cl = 4, Ll = 5, _a = "attached", Pl = "detached", hc = 300, mi = 301, gi = 302, Cs = 303, Ls = 304, Ir = 306, bi = 1e3, Nt = 1001, Rr = 1002, ft = 1003, Ps = 1004, Tr = 1005, At = 1006, uc = 1007, Gn = 1008, yn = 1009, Dl = 1010, Ul = 1011, js = 1012, dc = 1013, Mn = 1014, cn = 1015, Hi = 1016, fc = 1017, pc = 1018, Bn = 1020, Il = 1021, Ft = 1023, Nl = 1024, Fl = 1025, kn = 1026, _i = 1027, Ol = 1028, mc = 1029, Bl = 1030, gc = 1031, bc = 1033, Vr = 33776, Wr = 33777, jr = 33778, Xr = 33779, xa = 35840, va = 35841, Ma = 35842, Sa = 35843, kl = 36196, Ea = 37492, ya = 37496, Ta = 37808, Aa = 37809, wa = 37810, Ra = 37811, Ca = 37812, La = 37813, Pa = 37814, Da = 37815, Ua = 37816, Ia = 37817, Na = 37818, Fa = 37819, Oa = 37820, Ba = 37821, qr = 36492, ka = 36494, za = 36495, zl = 36283, Ga = 36284, Ha = 36285, Va = 36286, Vi = 2300, xi = 2301, Kr = 2302, Wa = 2400, ja = 2401, Xa = 2402, Gl = 2500, Hl = 0, _c = 1, Ds = 2, xc = 3e3, zn = 3001, Vl = 3200, Wl = 3201, vc = 0, jl = 1, Ot = "", nt = "srgb", gt = "srgb-linear", Xs = "display-p3", Nr = "display-p3-linear", Cr = "linear", Qe = "srgb", Lr = "rec709", Pr = "p3", Kn = 7680, qa = 519, Xl = 512, ql = 513, Kl = 514, Yl = 515, Jl = 516, Zl = 517, Ql = 518, $l = 519, Us = 35044, Ka = "300 es", Is = 1035, ln = 2e3, Dr = 2001;
class jn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const _t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ya = 1234567;
const ki = Math.PI / 180, vi = 180 / Math.PI;
function Vt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_t[r & 255] + _t[r >> 8 & 255] + _t[r >> 16 & 255] + _t[r >> 24 & 255] + "-" + _t[e & 255] + _t[e >> 8 & 255] + "-" + _t[e >> 16 & 15 | 64] + _t[e >> 24 & 255] + "-" + _t[t & 63 | 128] + _t[t >> 8 & 255] + "-" + _t[t >> 16 & 255] + _t[t >> 24 & 255] + _t[n & 255] + _t[n >> 8 & 255] + _t[n >> 16 & 255] + _t[n >> 24 & 255]).toLowerCase();
}
function mt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function qs(r, e) {
  return (r % e + e) % e;
}
function eh(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function th(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function zi(r, e, t) {
  return (1 - t) * r + t * e;
}
function nh(r, e, t, n) {
  return zi(r, e, 1 - Math.exp(-t * n));
}
function ih(r, e = 1) {
  return e - Math.abs(qs(r, e * 2) - e);
}
function rh(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function sh(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function ah(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function oh(r, e) {
  return r + Math.random() * (e - r);
}
function ch(r) {
  return r * (0.5 - Math.random());
}
function lh(r) {
  r !== void 0 && (Ya = r);
  let e = Ya += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function hh(r) {
  return r * ki;
}
function uh(r) {
  return r * vi;
}
function Ns(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Mc(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Ur(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function dh(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), m = s((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, c * u, c * d, o * l);
      break;
    case "YZY":
      r.set(c * d, o * h, c * u, o * l);
      break;
    case "ZXZ":
      r.set(c * u, c * d, o * h, o * l);
      break;
    case "XZX":
      r.set(o * h, c * g, c * m, o * l);
      break;
    case "YXY":
      r.set(c * m, o * h, c * g, o * l);
      break;
    case "ZYZ":
      r.set(c * g, c * m, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function qt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ke(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Sc = {
  DEG2RAD: ki,
  RAD2DEG: vi,
  generateUUID: Vt,
  clamp: mt,
  euclideanModulo: qs,
  mapLinear: eh,
  inverseLerp: th,
  lerp: zi,
  damp: nh,
  pingpong: ih,
  smoothstep: rh,
  smootherstep: sh,
  randInt: ah,
  randFloat: oh,
  randFloatSpread: ch,
  seededRandom: lh,
  degToRad: hh,
  radToDeg: uh,
  isPowerOfTwo: Ns,
  ceilPowerOfTwo: Mc,
  floorPowerOfTwo: Ur,
  setQuaternionFromProperEuler: dh,
  normalize: Ke,
  denormalize: qt
};
class Ce {
  constructor(e = 0, t = 0) {
    Ce.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(mt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Be {
  constructor(e, t, n, i, s, a, o, c, l) {
    Be.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l);
  }
  set(e, t, n, i, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], m = n[5], g = n[8], _ = i[0], p = i[3], f = i[6], v = i[1], b = i[4], E = i[7], y = i[2], C = i[5], A = i[8];
    return s[0] = a * _ + o * v + c * y, s[3] = a * p + o * b + c * C, s[6] = a * f + o * E + c * A, s[1] = l * _ + h * v + u * y, s[4] = l * p + h * b + u * C, s[7] = l * f + h * E + u * A, s[2] = d * _ + m * v + g * y, s[5] = d * p + m * b + g * C, s[8] = d * f + m * E + g * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = h * a - o * l, d = o * c - h * s, m = l * s - a * c, g = t * u + n * d + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * l - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = d * _, e[4] = (h * t - i * c) * _, e[5] = (i * s - o * t) * _, e[6] = m * _, e[7] = (n * c - l * t) * _, e[8] = (a * t - n * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Yr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Yr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Yr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Yr = /* @__PURE__ */ new Be();
function Ec(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
function Wi(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function fh() {
  const r = Wi("canvas");
  return r.style.display = "block", r;
}
const Ja = {};
function Gi(r) {
  r in Ja || (Ja[r] = !0, console.warn(r));
}
const Za = /* @__PURE__ */ new Be().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Qa = /* @__PURE__ */ new Be().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Ji = {
  [gt]: {
    transfer: Cr,
    primaries: Lr,
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [nt]: {
    transfer: Qe,
    primaries: Lr,
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [Nr]: {
    transfer: Cr,
    primaries: Pr,
    toReference: (r) => r.applyMatrix3(Qa),
    fromReference: (r) => r.applyMatrix3(Za)
  },
  [Xs]: {
    transfer: Qe,
    primaries: Pr,
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(Qa),
    fromReference: (r) => r.applyMatrix3(Za).convertLinearToSRGB()
  }
}, ph = /* @__PURE__ */ new Set([gt, Nr]), Xe = {
  enabled: !0,
  _workingColorSpace: gt,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
  },
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!ph.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = Ji[e].toReference, i = Ji[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return Ji[r].primaries;
  },
  getTransfer: function(r) {
    return r === Ot ? Cr : Ji[r].transfer;
  }
};
function fi(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Jr(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Yn;
class yc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Yn === void 0 && (Yn = Wi("canvas")), Yn.width = e.width, Yn.height = e.height;
      const n = Yn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Yn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Wi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = fi(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(fi(t[n] / 255) * 255) : t[n] = fi(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let mh = 0;
class Tc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: mh++ }), this.uuid = Vt(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(Zr(i[a].image)) : s.push(Zr(i[a]));
      } else
        s = Zr(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Zr(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? yc.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let gh = 0;
class pt extends jn {
  constructor(e = pt.DEFAULT_IMAGE, t = pt.DEFAULT_MAPPING, n = Nt, i = Nt, s = At, a = Gn, o = Ft, c = yn, l = pt.DEFAULT_ANISOTROPY, h = Ot) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: gh++ }), this.uuid = Vt(), this.name = "", this.source = new Tc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ce(0, 0), this.repeat = new Ce(1, 1), this.center = new Ce(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === zn ? nt : Ot), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== hc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case bi:
          e.x = e.x - Math.floor(e.x);
          break;
        case Nt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Rr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case bi:
          e.y = e.y - Math.floor(e.y);
          break;
        case Nt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Rr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === nt ? zn : xc;
  }
  set encoding(e) {
    Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === zn ? nt : Ot;
  }
}
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = hc;
pt.DEFAULT_ANISOTROPY = 1;
class Ye {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ye.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], m = c[5], g = c[9], _ = c[2], p = c[6], f = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + m + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, E = (m + 1) / 2, y = (f + 1) / 2, C = (h + d) / 4, A = (u + _) / 4, B = (g + p) / 4;
      return b > E && b > y ? b < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), i = C / n, s = A / n) : E > y ? E < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(E), n = C / i, s = B / i) : y < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(y), n = A / s, i = B / s), this.set(n, i, s, t), this;
    }
    let v = Math.sqrt((p - g) * (p - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (p - g) / v, this.y = (u - _) / v, this.z = (d - h) / v, this.w = Math.acos((l + m + f - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class bh extends jn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ye(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ye(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === zn ? nt : Ot), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: At,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new pt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Tc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Hn extends bh {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ac extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = Nt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class _h extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = Nt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Yt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[a + 0], m = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || c !== d || l !== m || h !== g) {
      let p = 1 - o;
      const f = c * d + l * m + h * g + u * _, v = f >= 0 ? 1 : -1, b = 1 - f * f;
      if (b > Number.EPSILON) {
        const y = Math.sqrt(b), C = Math.atan2(y, f * v);
        p = Math.sin(p * C) / y, o = Math.sin(o * C) / y;
      }
      const E = o * v;
      if (c = c * p + d * E, l = l * p + m * E, h = h * p + g * E, u = u * p + _ * E, p === 1 - o) {
        const y = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= y, l *= y, h *= y, u *= y;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], m = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * u + c * m - l * d, e[t + 1] = c * g + h * d + l * u - o * m, e[t + 2] = l * g + h * m + o * d - c * u, e[t + 3] = h * g - o * u - c * d - l * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(s / 2), d = c(n / 2), m = c(i / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "YXZ":
        this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g;
        break;
      case "ZXY":
        this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "ZYX":
        this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g;
        break;
      case "YZX":
        this._x = d * h * u + l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "XZY":
        this._x = d * h * u - l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (a - i) * m;
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (i + a) / m, this._z = (s + l) / m;
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - l) / m, this._x = (i + a) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(mt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    L.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion($a.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion($a.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), h = 2 * (o * t - s * i), u = 2 * (s * n - a * t);
    return this.x = t + c * l + a * u - o * h, this.y = n + c * h + o * l - s * u, this.z = i + c * u + s * h - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Qr.copy(this).projectOnVector(e), this.sub(Qr);
  }
  reflect(e) {
    return this.sub(Qr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(mt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Qr = /* @__PURE__ */ new L(), $a = /* @__PURE__ */ new Yt();
class dn {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, kt) : kt.fromBufferAttribute(s, a), kt.applyMatrix4(e.matrixWorld), this.expandByPoint(kt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Zi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Zi.copy(n.boundingBox)), Zi.applyMatrix4(e.matrixWorld), this.union(Zi);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, kt), kt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Li), Qi.subVectors(this.max, Li), Jn.subVectors(e.a, Li), Zn.subVectors(e.b, Li), Qn.subVectors(e.c, Li), fn.subVectors(Zn, Jn), pn.subVectors(Qn, Zn), Rn.subVectors(Jn, Qn);
    let t = [
      0,
      -fn.z,
      fn.y,
      0,
      -pn.z,
      pn.y,
      0,
      -Rn.z,
      Rn.y,
      fn.z,
      0,
      -fn.x,
      pn.z,
      0,
      -pn.x,
      Rn.z,
      0,
      -Rn.x,
      -fn.y,
      fn.x,
      0,
      -pn.y,
      pn.x,
      0,
      -Rn.y,
      Rn.x,
      0
    ];
    return !$r(t, Jn, Zn, Qn, Qi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !$r(t, Jn, Zn, Qn, Qi)) ? !1 : ($i.crossVectors(fn, pn), t = [$i.x, $i.y, $i.z], $r(t, Jn, Zn, Qn, Qi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(kt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (en[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), en[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), en[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), en[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), en[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), en[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), en[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), en[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(en), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const en = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], kt = /* @__PURE__ */ new L(), Zi = /* @__PURE__ */ new dn(), Jn = /* @__PURE__ */ new L(), Zn = /* @__PURE__ */ new L(), Qn = /* @__PURE__ */ new L(), fn = /* @__PURE__ */ new L(), pn = /* @__PURE__ */ new L(), Rn = /* @__PURE__ */ new L(), Li = /* @__PURE__ */ new L(), Qi = /* @__PURE__ */ new L(), $i = /* @__PURE__ */ new L(), Cn = /* @__PURE__ */ new L();
function $r(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    Cn.fromArray(r, s);
    const o = i.x * Math.abs(Cn.x) + i.y * Math.abs(Cn.y) + i.z * Math.abs(Cn.z), c = e.dot(Cn), l = t.dot(Cn), h = n.dot(Cn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const xh = /* @__PURE__ */ new dn(), Pi = /* @__PURE__ */ new L(), es = /* @__PURE__ */ new L();
class Jt {
  constructor(e = new L(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : xh.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Pi.subVectors(e, this.center);
    const t = Pi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Pi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (es.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Pi.copy(e.center).add(es)), this.expandByPoint(Pi.copy(e.center).sub(es))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tn = /* @__PURE__ */ new L(), ts = /* @__PURE__ */ new L(), er = /* @__PURE__ */ new L(), mn = /* @__PURE__ */ new L(), ns = /* @__PURE__ */ new L(), tr = /* @__PURE__ */ new L(), is = /* @__PURE__ */ new L();
class ji {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, tn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = tn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (tn.copy(this.origin).addScaledVector(this.direction, t), tn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ts.copy(e).add(t).multiplyScalar(0.5), er.copy(t).sub(e).normalize(), mn.copy(this.origin).sub(ts);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(er), o = mn.dot(this.direction), c = -mn.dot(er), l = mn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, m, g;
    if (h > 0)
      if (u = a * c - o, d = a * o - c, g = s * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / h;
            u *= _, d *= _, m = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(a * d + o)), m = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(a * d + o)), m = -u * u + d * (d + 2 * c) + l;
      else
        d <= -g ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -c), s), m = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), m = -u * u + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), m = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ts).addScaledVector(er, d), m;
  }
  intersectSphere(e, t) {
    tn.subVectors(e.center, this.origin);
    const n = tn.dot(this.direction), i = tn.dot(tn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, tn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ns.subVectors(t, e), tr.subVectors(n, e), is.crossVectors(ns, tr);
    let a = this.direction.dot(is), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    mn.subVectors(this.origin, e);
    const c = o * this.direction.dot(tr.crossVectors(mn, tr));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(ns.cross(mn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * mn.dot(is);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ke {
  constructor(e, t, n, i, s, a, o, c, l, h, u, d, m, g, _, p) {
    ke.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, h, u, d, m, g, _, p);
  }
  set(e, t, n, i, s, a, o, c, l, h, u, d, m, g, _, p) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = h, f[10] = u, f[14] = d, f[3] = m, f[7] = g, f[11] = _, f[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ke().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / $n.setFromMatrixColumn(e, 0).length(), s = 1 / $n.setFromMatrixColumn(e, 1).length(), a = 1 / $n.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * h, m = a * u, g = o * h, _ = o * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = m + g * l, t[5] = d - _ * l, t[9] = -o * c, t[2] = _ - d * l, t[6] = g + m * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * h, m = c * u, g = l * h, _ = l * u;
      t[0] = d + _ * o, t[4] = g * o - m, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = m * o - g, t[6] = _ + d * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * h, m = c * u, g = l * h, _ = l * u;
      t[0] = d - _ * o, t[4] = -a * u, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * h, t[9] = _ - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * h, m = a * u, g = o * h, _ = o * u;
      t[0] = c * h, t[4] = g * l - m, t[8] = d * l + _, t[1] = c * u, t[5] = _ * l + d, t[9] = m * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, m = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = _ - d * u, t[8] = g * u + m, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = m * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = a * c, m = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + _, t[5] = a * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = o * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(vh, e, Mh);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Lt.subVectors(e, t), Lt.lengthSq() === 0 && (Lt.z = 1), Lt.normalize(), gn.crossVectors(n, Lt), gn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Lt.x += 1e-4 : Lt.z += 1e-4, Lt.normalize(), gn.crossVectors(n, Lt)), gn.normalize(), nr.crossVectors(Lt, gn), i[0] = gn.x, i[4] = nr.x, i[8] = Lt.x, i[1] = gn.y, i[5] = nr.y, i[9] = Lt.y, i[2] = gn.z, i[6] = nr.z, i[10] = Lt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], m = n[13], g = n[2], _ = n[6], p = n[10], f = n[14], v = n[3], b = n[7], E = n[11], y = n[15], C = i[0], A = i[4], B = i[8], M = i[12], w = i[1], H = i[5], J = i[9], $ = i[13], D = i[2], G = i[6], K = i[10], j = i[14], ee = i[3], X = i[7], Y = i[11], U = i[15];
    return s[0] = a * C + o * w + c * D + l * ee, s[4] = a * A + o * H + c * G + l * X, s[8] = a * B + o * J + c * K + l * Y, s[12] = a * M + o * $ + c * j + l * U, s[1] = h * C + u * w + d * D + m * ee, s[5] = h * A + u * H + d * G + m * X, s[9] = h * B + u * J + d * K + m * Y, s[13] = h * M + u * $ + d * j + m * U, s[2] = g * C + _ * w + p * D + f * ee, s[6] = g * A + _ * H + p * G + f * X, s[10] = g * B + _ * J + p * K + f * Y, s[14] = g * M + _ * $ + p * j + f * U, s[3] = v * C + b * w + E * D + y * ee, s[7] = v * A + b * H + E * G + y * X, s[11] = v * B + b * J + E * K + y * Y, s[15] = v * M + b * $ + E * j + y * U, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], m = e[14], g = e[3], _ = e[7], p = e[11], f = e[15];
    return g * (+s * c * u - i * l * u - s * o * d + n * l * d + i * o * m - n * c * m) + _ * (+t * c * m - t * l * d + s * a * d - i * a * m + i * l * h - s * c * h) + p * (+t * l * u - t * o * m - s * a * u + n * a * m + s * o * h - n * l * h) + f * (-i * o * h - t * c * u + t * o * d + i * a * u - n * a * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], m = e[11], g = e[12], _ = e[13], p = e[14], f = e[15], v = u * p * l - _ * d * l + _ * c * m - o * p * m - u * c * f + o * d * f, b = g * d * l - h * p * l - g * c * m + a * p * m + h * c * f - a * d * f, E = h * _ * l - g * u * l + g * o * m - a * _ * m - h * o * f + a * u * f, y = g * u * c - h * _ * c - g * o * d + a * _ * d + h * o * p - a * u * p, C = t * v + n * b + i * E + s * y;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / C;
    return e[0] = v * A, e[1] = (_ * d * s - u * p * s - _ * i * m + n * p * m + u * i * f - n * d * f) * A, e[2] = (o * p * s - _ * c * s + _ * i * l - n * p * l - o * i * f + n * c * f) * A, e[3] = (u * c * s - o * d * s - u * i * l + n * d * l + o * i * m - n * c * m) * A, e[4] = b * A, e[5] = (h * p * s - g * d * s + g * i * m - t * p * m - h * i * f + t * d * f) * A, e[6] = (g * c * s - a * p * s - g * i * l + t * p * l + a * i * f - t * c * f) * A, e[7] = (a * d * s - h * c * s + h * i * l - t * d * l - a * i * m + t * c * m) * A, e[8] = E * A, e[9] = (g * u * s - h * _ * s - g * n * m + t * _ * m + h * n * f - t * u * f) * A, e[10] = (a * _ * s - g * o * s + g * n * l - t * _ * l - a * n * f + t * o * f) * A, e[11] = (h * o * s - a * u * s - h * n * l + t * u * l + a * n * m - t * o * m) * A, e[12] = y * A, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * p + t * u * p) * A, e[14] = (g * o * i - a * _ * i - g * n * c + t * _ * c + a * n * p - t * o * p) * A, e[15] = (a * u * i - h * o * i + h * n * c - t * u * c - a * n * d + t * o * d) * A, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, u = o + o, d = s * l, m = s * h, g = s * u, _ = a * h, p = a * u, f = o * u, v = c * l, b = c * h, E = c * u, y = n.x, C = n.y, A = n.z;
    return i[0] = (1 - (_ + f)) * y, i[1] = (m + E) * y, i[2] = (g - b) * y, i[3] = 0, i[4] = (m - E) * C, i[5] = (1 - (d + f)) * C, i[6] = (p + v) * C, i[7] = 0, i[8] = (g + b) * A, i[9] = (p - v) * A, i[10] = (1 - (d + _)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = $n.set(i[0], i[1], i[2]).length();
    const a = $n.set(i[4], i[5], i[6]).length(), o = $n.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], zt.copy(this);
    const l = 1 / s, h = 1 / a, u = 1 / o;
    return zt.elements[0] *= l, zt.elements[1] *= l, zt.elements[2] *= l, zt.elements[4] *= h, zt.elements[5] *= h, zt.elements[6] *= h, zt.elements[8] *= u, zt.elements[9] *= u, zt.elements[10] *= u, t.setFromRotationMatrix(zt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = ln) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let m, g;
    if (o === ln)
      m = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Dr)
      m = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = ln) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), d = (t + e) * l, m = (n + i) * h;
    let g, _;
    if (o === ln)
      g = (a + s) * u, _ = -2 * u;
    else if (o === Dr)
      g = s * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -m, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const $n = /* @__PURE__ */ new L(), zt = /* @__PURE__ */ new ke(), vh = /* @__PURE__ */ new L(0, 0, 0), Mh = /* @__PURE__ */ new L(1, 1, 1), gn = /* @__PURE__ */ new L(), nr = /* @__PURE__ */ new L(), Lt = /* @__PURE__ */ new L(), eo = /* @__PURE__ */ new ke(), to = /* @__PURE__ */ new Yt();
class Fr {
  constructor(e = 0, t = 0, n = 0, i = Fr.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(mt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-mt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(mt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-mt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(mt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-mt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return eo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(eo, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return to.setFromEuler(this), this.setFromQuaternion(to, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Fr.DEFAULT_ORDER = "XYZ";
class wc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Sh = 0;
const no = /* @__PURE__ */ new L(), ei = /* @__PURE__ */ new Yt(), nn = /* @__PURE__ */ new ke(), ir = /* @__PURE__ */ new L(), Di = /* @__PURE__ */ new L(), Eh = /* @__PURE__ */ new L(), yh = /* @__PURE__ */ new Yt(), io = /* @__PURE__ */ new L(1, 0, 0), ro = /* @__PURE__ */ new L(0, 1, 0), so = /* @__PURE__ */ new L(0, 0, 1), Th = { type: "added" }, Ah = { type: "removed" };
class et extends jn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Sh++ }), this.uuid = Vt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = et.DEFAULT_UP.clone();
    const e = new L(), t = new Fr(), n = new Yt(), i = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new ke()
      },
      normalMatrix: {
        value: new Be()
      }
    }), this.matrix = new ke(), this.matrixWorld = new ke(), this.matrixAutoUpdate = et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new wc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ei.setFromAxisAngle(e, t), this.quaternion.multiply(ei), this;
  }
  rotateOnWorldAxis(e, t) {
    return ei.setFromAxisAngle(e, t), this.quaternion.premultiply(ei), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(io, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ro, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(so, e);
  }
  translateOnAxis(e, t) {
    return no.copy(e).applyQuaternion(this.quaternion), this.position.add(no.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(io, e);
  }
  translateY(e) {
    return this.translateOnAxis(ro, e);
  }
  translateZ(e) {
    return this.translateOnAxis(so, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(nn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ir.copy(e) : ir.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Di.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nn.lookAt(Di, ir, this.up) : nn.lookAt(ir, Di, this.up), this.quaternion.setFromRotationMatrix(nn), i && (nn.extractRotation(i.matrixWorld), ei.setFromRotationMatrix(nn), this.quaternion.premultiply(ei.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Th)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ah)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), nn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), nn.multiply(e.parent.matrixWorld)), e.applyMatrix4(nn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Di, e, Eh), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Di, yh, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
et.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Gt = /* @__PURE__ */ new L(), rn = /* @__PURE__ */ new L(), rs = /* @__PURE__ */ new L(), sn = /* @__PURE__ */ new L(), ti = /* @__PURE__ */ new L(), ni = /* @__PURE__ */ new L(), ao = /* @__PURE__ */ new L(), ss = /* @__PURE__ */ new L(), as = /* @__PURE__ */ new L(), os = /* @__PURE__ */ new L();
let rr = !1;
class Ht {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Gt.subVectors(e, t), i.cross(Gt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    Gt.subVectors(i, t), rn.subVectors(n, t), rs.subVectors(e, t);
    const a = Gt.dot(Gt), o = Gt.dot(rn), c = Gt.dot(rs), l = rn.dot(rn), h = rn.dot(rs), u = a * l - o * o;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, m = (l * c - o * h) * d, g = (a * h - o * c) * d;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, sn), sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1;
  }
  static getUV(e, t, n, i, s, a, o, c) {
    return rr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), rr = !0), this.getInterpolation(e, t, n, i, s, a, o, c);
  }
  static getInterpolation(e, t, n, i, s, a, o, c) {
    return this.getBarycoord(e, t, n, i, sn), c.setScalar(0), c.addScaledVector(s, sn.x), c.addScaledVector(a, sn.y), c.addScaledVector(o, sn.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return Gt.subVectors(n, t), rn.subVectors(e, t), Gt.cross(rn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Gt.subVectors(this.c, this.b), rn.subVectors(this.a, this.b), Gt.cross(rn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ht.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ht.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return rr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), rr = !0), Ht.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return Ht.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Ht.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ht.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    ti.subVectors(i, n), ni.subVectors(s, n), ss.subVectors(e, n);
    const c = ti.dot(ss), l = ni.dot(ss);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    as.subVectors(e, i);
    const h = ti.dot(as), u = ni.dot(as);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(ti, a);
    os.subVectors(e, s);
    const m = ti.dot(os), g = ni.dot(os);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const _ = m * l - c * g;
    if (_ <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(ni, o);
    const p = h * g - m * u;
    if (p <= 0 && u - h >= 0 && m - g >= 0)
      return ao.subVectors(s, i), o = (u - h) / (u - h + (m - g)), t.copy(i).addScaledVector(ao, o);
    const f = 1 / (p + _ + d);
    return a = _ * f, o = d * f, t.copy(n).addScaledVector(ti, a).addScaledVector(ni, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Rc = {
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
}, bn = { h: 0, s: 0, l: 0 }, sr = { h: 0, s: 0, l: 0 };
function cs(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class we {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = nt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Xe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Xe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Xe.workingColorSpace) {
    if (e = qs(e, 1), t = mt(t, 0, 1), n = mt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = cs(a, s, e + 1 / 3), this.g = cs(a, s, e), this.b = cs(a, s, e - 1 / 3);
    }
    return Xe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = nt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = nt) {
    const n = Rc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = fi(e.r), this.g = fi(e.g), this.b = fi(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Jr(e.r), this.g = Jr(e.g), this.b = Jr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = nt) {
    return Xe.fromWorkingColorSpace(xt.copy(this), e), Math.round(mt(xt.r * 255, 0, 255)) * 65536 + Math.round(mt(xt.g * 255, 0, 255)) * 256 + Math.round(mt(xt.b * 255, 0, 255));
  }
  getHexString(e = nt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(xt.copy(this), t);
    const n = xt.r, i = xt.g, s = xt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.fromWorkingColorSpace(xt.copy(this), t), e.r = xt.r, e.g = xt.g, e.b = xt.b, e;
  }
  getStyle(e = nt) {
    Xe.fromWorkingColorSpace(xt.copy(this), e);
    const t = xt.r, n = xt.g, i = xt.b;
    return e !== nt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(bn), this.setHSL(bn.h + e, bn.s + t, bn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(bn), e.getHSL(sr);
    const n = zi(bn.h, sr.h, t), i = zi(bn.s, sr.s, t), s = zi(bn.l, sr.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const xt = /* @__PURE__ */ new we();
we.NAMES = Rc;
let wh = 0;
class Kt extends jn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: wh++ }), this.uuid = Vt(), this.name = "", this.type = "Material", this.blending = di, this.side = un, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = ws, this.blendDst = Rs, this.blendEquation = In, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new we(0, 0, 0), this.blendAlpha = 0, this.depthFunc = wr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = qa, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Kn, this.stencilZFail = Kn, this.stencilZPass = Kn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== di && (n.blending = this.blending), this.side !== un && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== ws && (n.blendSrc = this.blendSrc), this.blendDst !== Rs && (n.blendDst = this.blendDst), this.blendEquation !== In && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== wr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== qa && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Kn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Kn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Kn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Fn extends Kt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new we(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = lc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ot = /* @__PURE__ */ new L(), ar = /* @__PURE__ */ new Ce();
class Tt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Us, this.updateRange = { offset: 0, count: -1 }, this.gpuType = cn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ar.fromBufferAttribute(this, t), ar.applyMatrix3(e), this.setXY(t, ar.x, ar.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t), ot.applyMatrix3(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyMatrix4(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyNormalMatrix(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.transformDirection(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = qt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ke(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array), s = Ke(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Us && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Cc extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Lc extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class hn extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Rh = 0;
const Ut = /* @__PURE__ */ new ke(), ls = /* @__PURE__ */ new et(), ii = /* @__PURE__ */ new L(), Pt = /* @__PURE__ */ new dn(), Ui = /* @__PURE__ */ new dn(), dt = /* @__PURE__ */ new L();
class Zt extends jn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Rh++ }), this.uuid = Vt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ec(e) ? Lc : Cc)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Be().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this;
  }
  rotateX(e) {
    return Ut.makeRotationX(e), this.applyMatrix4(Ut), this;
  }
  rotateY(e) {
    return Ut.makeRotationY(e), this.applyMatrix4(Ut), this;
  }
  rotateZ(e) {
    return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this;
  }
  translate(e, t, n) {
    return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this;
  }
  scale(e, t, n) {
    return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this;
  }
  lookAt(e) {
    return ls.lookAt(e), ls.updateMatrix(), this.applyMatrix4(ls.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ii).negate(), this.translate(ii.x, ii.y, ii.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new hn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new dn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Pt.setFromBufferAttribute(s), this.morphTargetsRelative ? (dt.addVectors(this.boundingBox.min, Pt.min), this.boundingBox.expandByPoint(dt), dt.addVectors(this.boundingBox.max, Pt.max), this.boundingBox.expandByPoint(dt)) : (this.boundingBox.expandByPoint(Pt.min), this.boundingBox.expandByPoint(Pt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Jt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Pt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Ui.setFromBufferAttribute(o), this.morphTargetsRelative ? (dt.addVectors(Pt.min, Ui.min), Pt.expandByPoint(dt), dt.addVectors(Pt.max, Ui.max), Pt.expandByPoint(dt)) : (Pt.expandByPoint(Ui.min), Pt.expandByPoint(Ui.max));
        }
      Pt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        dt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(dt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            dt.fromBufferAttribute(o, l), c && (ii.fromBufferAttribute(e, l), dt.add(ii)), i = Math.max(i, n.distanceToSquared(dt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Tt(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let w = 0; w < o; w++)
      l[w] = new L(), h[w] = new L();
    const u = new L(), d = new L(), m = new L(), g = new Ce(), _ = new Ce(), p = new Ce(), f = new L(), v = new L();
    function b(w, H, J) {
      u.fromArray(i, w * 3), d.fromArray(i, H * 3), m.fromArray(i, J * 3), g.fromArray(a, w * 2), _.fromArray(a, H * 2), p.fromArray(a, J * 2), d.sub(u), m.sub(u), _.sub(g), p.sub(g);
      const $ = 1 / (_.x * p.y - p.x * _.y);
      isFinite($) && (f.copy(d).multiplyScalar(p.y).addScaledVector(m, -_.y).multiplyScalar($), v.copy(m).multiplyScalar(_.x).addScaledVector(d, -p.x).multiplyScalar($), l[w].add(f), l[H].add(f), l[J].add(f), h[w].add(v), h[H].add(v), h[J].add(v));
    }
    let E = this.groups;
    E.length === 0 && (E = [{
      start: 0,
      count: n.length
    }]);
    for (let w = 0, H = E.length; w < H; ++w) {
      const J = E[w], $ = J.start, D = J.count;
      for (let G = $, K = $ + D; G < K; G += 3)
        b(
          n[G + 0],
          n[G + 1],
          n[G + 2]
        );
    }
    const y = new L(), C = new L(), A = new L(), B = new L();
    function M(w) {
      A.fromArray(s, w * 3), B.copy(A);
      const H = l[w];
      y.copy(H), y.sub(A.multiplyScalar(A.dot(H))).normalize(), C.crossVectors(B, H);
      const $ = C.dot(h[w]) < 0 ? -1 : 1;
      c[w * 4] = y.x, c[w * 4 + 1] = y.y, c[w * 4 + 2] = y.z, c[w * 4 + 3] = $;
    }
    for (let w = 0, H = E.length; w < H; ++w) {
      const J = E[w], $ = J.start, D = J.count;
      for (let G = $, K = $ + D; G < K; G += 3)
        M(n[G + 0]), M(n[G + 1]), M(n[G + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Tt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new L(), s = new L(), a = new L(), o = new L(), c = new L(), l = new L(), h = new L(), u = new L();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), _ = e.getX(d + 1), p = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, p), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, p), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      dt.fromBufferAttribute(e, t), dt.normalize(), e.setXYZ(t, dt.x, dt.y, dt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h);
      let m = 0, g = 0;
      for (let _ = 0, p = c.length; _ < p; _++) {
        o.isInterleavedBufferAttribute ? m = c[_] * o.data.stride + o.offset : m = c[_] * h;
        for (let f = 0; f < h; f++)
          d[g++] = l[m++];
      }
      return new Tt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Zt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], m = e(d, n);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const m = l[u];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, m = u.length; d < m; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const oo = /* @__PURE__ */ new ke(), Ln = /* @__PURE__ */ new ji(), or = /* @__PURE__ */ new Jt(), co = /* @__PURE__ */ new L(), ri = /* @__PURE__ */ new L(), si = /* @__PURE__ */ new L(), ai = /* @__PURE__ */ new L(), hs = /* @__PURE__ */ new L(), cr = /* @__PURE__ */ new L(), lr = /* @__PURE__ */ new Ce(), hr = /* @__PURE__ */ new Ce(), ur = /* @__PURE__ */ new Ce(), lo = /* @__PURE__ */ new L(), ho = /* @__PURE__ */ new L(), uo = /* @__PURE__ */ new L(), dr = /* @__PURE__ */ new L(), fr = /* @__PURE__ */ new L();
class Bt extends et {
  constructor(e = new Zt(), t = new Fn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      cr.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], u = s[c];
        h !== 0 && (hs.fromBufferAttribute(u, e), a ? cr.addScaledVector(hs, h) : cr.addScaledVector(hs.sub(t), h));
      }
      t.add(cr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), or.copy(n.boundingSphere), or.applyMatrix4(s), Ln.copy(e.ray).recast(e.near), !(or.containsPoint(Ln.origin) === !1 && (Ln.intersectSphere(or, co) === null || Ln.origin.distanceToSquared(co) > (e.far - e.near) ** 2)) && (oo.copy(s).invert(), Ln.copy(e.ray).applyMatrix4(oo), !(n.boundingBox !== null && Ln.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Ln)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const p = d[g], f = a[p.materialIndex], v = Math.max(p.start, m.start), b = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
          for (let E = v, y = b; E < y; E += 3) {
            const C = o.getX(E), A = o.getX(E + 1), B = o.getX(E + 2);
            i = pr(this, f, e, n, l, h, u, C, A, B), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(o.count, m.start + m.count);
        for (let p = g, f = _; p < f; p += 3) {
          const v = o.getX(p), b = o.getX(p + 1), E = o.getX(p + 2);
          i = pr(this, a, e, n, l, h, u, v, b, E), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const p = d[g], f = a[p.materialIndex], v = Math.max(p.start, m.start), b = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
          for (let E = v, y = b; E < y; E += 3) {
            const C = E, A = E + 1, B = E + 2;
            i = pr(this, f, e, n, l, h, u, C, A, B), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(c.count, m.start + m.count);
        for (let p = g, f = _; p < f; p += 3) {
          const v = p, b = p + 1, E = p + 2;
          i = pr(this, a, e, n, l, h, u, v, b, E), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
  }
}
function Ch(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === wt ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === un, o), c === null) return null;
  fr.copy(o), fr.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(fr);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: fr.clone(),
    object: r
  };
}
function pr(r, e, t, n, i, s, a, o, c, l) {
  r.getVertexPosition(o, ri), r.getVertexPosition(c, si), r.getVertexPosition(l, ai);
  const h = Ch(r, e, t, n, ri, si, ai, dr);
  if (h) {
    i && (lr.fromBufferAttribute(i, o), hr.fromBufferAttribute(i, c), ur.fromBufferAttribute(i, l), h.uv = Ht.getInterpolation(dr, ri, si, ai, lr, hr, ur, new Ce())), s && (lr.fromBufferAttribute(s, o), hr.fromBufferAttribute(s, c), ur.fromBufferAttribute(s, l), h.uv1 = Ht.getInterpolation(dr, ri, si, ai, lr, hr, ur, new Ce()), h.uv2 = h.uv1), a && (lo.fromBufferAttribute(a, o), ho.fromBufferAttribute(a, c), uo.fromBufferAttribute(a, l), h.normal = Ht.getInterpolation(dr, ri, si, ai, lo, ho, uo, new L()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new L(),
      materialIndex: 0
    };
    Ht.getNormal(ri, si, ai, u.normal), h.face = u;
  }
  return h;
}
class Xi extends Zt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new hn(l, 3)), this.setAttribute("normal", new hn(h, 3)), this.setAttribute("uv", new hn(u, 2));
    function g(_, p, f, v, b, E, y, C, A, B, M) {
      const w = E / A, H = y / B, J = E / 2, $ = y / 2, D = C / 2, G = A + 1, K = B + 1;
      let j = 0, ee = 0;
      const X = new L();
      for (let Y = 0; Y < K; Y++) {
        const U = Y * H - $;
        for (let W = 0; W < G; W++) {
          const le = W * w - J;
          X[_] = le * v, X[p] = U * b, X[f] = D, l.push(X.x, X.y, X.z), X[_] = 0, X[p] = 0, X[f] = C > 0 ? 1 : -1, h.push(X.x, X.y, X.z), u.push(W / A), u.push(1 - Y / B), j += 1;
        }
      }
      for (let Y = 0; Y < B; Y++)
        for (let U = 0; U < A; U++) {
          const W = d + U + G * Y, le = d + U + G * (Y + 1), he = d + (U + 1) + G * (Y + 1), fe = d + (U + 1) + G * Y;
          c.push(W, le, fe), c.push(le, he, fe), ee += 6;
        }
      o.addGroup(m, ee, M), m += ee, d += j;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Xi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Mi(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Et(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Mi(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Lh(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function Pc(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : Xe.workingColorSpace;
}
const Ph = { clone: Mi, merge: Et };
var Dh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Uh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Vn extends Kt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Dh, this.fragmentShader = Uh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Mi(e.uniforms), this.uniformsGroups = Lh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Dc extends et {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ke(), this.projectionMatrix = new ke(), this.projectionMatrixInverse = new ke(), this.coordinateSystem = ln;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class yt extends Dc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = vi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(ki * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return vi * 2 * Math.atan(
      Math.tan(ki * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ki * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const oi = -90, ci = 1;
class Ih extends et {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new yt(oi, ci, e, t);
    i.layers = this.layers, this.add(i);
    const s = new yt(oi, ci, e, t);
    s.layers = this.layers, this.add(s);
    const a = new yt(oi, ci, e, t);
    a.layers = this.layers, this.add(a);
    const o = new yt(oi, ci, e, t);
    o.layers = this.layers, this.add(o);
    const c = new yt(oi, ci, e, t);
    c.layers = this.layers, this.add(c);
    const l = new yt(oi, ci, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === ln)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Dr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Uc extends pt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : mi, super(e, t, n, i, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Nh extends Hn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === zn ? nt : Ot), this.texture = new Uc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Xi(5, 5, 5), s = new Vn({
      name: "CubemapFromEquirect",
      uniforms: Mi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: wt,
      blending: Sn
    });
    s.uniforms.tEquirect.value = t;
    const a = new Bt(i, s), o = t.minFilter;
    return t.minFilter === Gn && (t.minFilter = At), new Ih(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const us = /* @__PURE__ */ new L(), Fh = /* @__PURE__ */ new L(), Oh = /* @__PURE__ */ new Be();
class xn {
  constructor(e = new L(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = us.subVectors(n, t).cross(Fh.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(us), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Oh.getNormalMatrix(e), i = this.coplanarPoint(us).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pn = /* @__PURE__ */ new Jt(), mr = /* @__PURE__ */ new L();
class Ks {
  constructor(e = new xn(), t = new xn(), n = new xn(), i = new xn(), s = new xn(), a = new xn()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = ln) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], m = i[8], g = i[9], _ = i[10], p = i[11], f = i[12], v = i[13], b = i[14], E = i[15];
    if (n[0].setComponents(c - s, d - l, p - m, E - f).normalize(), n[1].setComponents(c + s, d + l, p + m, E + f).normalize(), n[2].setComponents(c + a, d + h, p + g, E + v).normalize(), n[3].setComponents(c - a, d - h, p - g, E - v).normalize(), n[4].setComponents(c - o, d - u, p - _, E - b).normalize(), t === ln)
      n[5].setComponents(c + o, d + u, p + _, E + b).normalize();
    else if (t === Dr)
      n[5].setComponents(o, u, _, b).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Pn);
  }
  intersectsSprite(e) {
    return Pn.center.set(0, 0, 0), Pn.radius = 0.7071067811865476, Pn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Pn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (mr.x = i.normal.x > 0 ? e.max.x : e.min.x, mr.y = i.normal.y > 0 ? e.max.y : e.min.y, mr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(mr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Ic() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function Bh(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, d = l.usage, m = r.createBuffer();
    r.bindBuffer(h, m), r.bufferData(h, u, d), l.onUploadCallback();
    let g;
    if (u instanceof Float32Array)
      g = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      g = r.SHORT;
    else if (u instanceof Uint32Array)
      g = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      g = r.INT;
    else if (u instanceof Int8Array)
      g = r.BYTE;
    else if (u instanceof Uint8Array)
      g = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      g = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: m,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const d = h.array, m = h.updateRange;
    r.bindBuffer(u, l), m.count === -1 ? r.bufferSubData(u, 0, d) : (t ? r.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : r.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u === void 0 ? n.set(l, i(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class Ys extends Zt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = e / o, d = t / c, m = [], g = [], _ = [], p = [];
    for (let f = 0; f < h; f++) {
      const v = f * d - a;
      for (let b = 0; b < l; b++) {
        const E = b * u - s;
        g.push(E, -v, 0), _.push(0, 0, 1), p.push(b / o), p.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let v = 0; v < o; v++) {
        const b = v + l * f, E = v + l * (f + 1), y = v + 1 + l * (f + 1), C = v + 1 + l * f;
        m.push(b, E, C), m.push(E, y, C);
      }
    this.setIndex(m), this.setAttribute("position", new hn(g, 3)), this.setAttribute("normal", new hn(_, 3)), this.setAttribute("uv", new hn(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ys(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var kh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, zh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Gh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Hh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Vh = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Wh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, jh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Xh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, qh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Kh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Yh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Jh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Zh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Qh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, $h = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, eu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, tu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, nu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, iu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ru = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, su = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, au = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ou = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, cu = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, lu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, hu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, uu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, du = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, fu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", pu = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, mu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, gu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, bu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, _u = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, xu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, vu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Mu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Su = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Eu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, yu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Tu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Au = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, wu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Ru = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Cu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Lu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Pu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Du = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Uu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Iu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Nu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`, Fu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Ou = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Bu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ku = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, zu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Gu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Hu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Vu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Wu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ju = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Xu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, qu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ku = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Yu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ju = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Zu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Qu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, $u = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, ed = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, td = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, nd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, id = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, rd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, sd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, ad = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, od = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, cd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, ld = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, hd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ud = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, dd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, fd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, pd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, md = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, gd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, bd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, _d = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, xd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, vd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Md = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Sd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ed = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, yd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Td = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Ad = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, wd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Rd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Cd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Ld = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Pd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Dd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Ud = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Id = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Nd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Fd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Od = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, kd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, zd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Gd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Hd = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Vd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Wd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, jd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Xd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, qd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Kd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Yd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Jd = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Zd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Qd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $d = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ef = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, tf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, nf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, rf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, sf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, af = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, of = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, cf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, hf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, uf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, df = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, ff = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, pf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, mf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, gf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Fe = {
  alphahash_fragment: kh,
  alphahash_pars_fragment: zh,
  alphamap_fragment: Gh,
  alphamap_pars_fragment: Hh,
  alphatest_fragment: Vh,
  alphatest_pars_fragment: Wh,
  aomap_fragment: jh,
  aomap_pars_fragment: Xh,
  begin_vertex: qh,
  beginnormal_vertex: Kh,
  bsdfs: Yh,
  iridescence_fragment: Jh,
  bumpmap_pars_fragment: Zh,
  clipping_planes_fragment: Qh,
  clipping_planes_pars_fragment: $h,
  clipping_planes_pars_vertex: eu,
  clipping_planes_vertex: tu,
  color_fragment: nu,
  color_pars_fragment: iu,
  color_pars_vertex: ru,
  color_vertex: su,
  common: au,
  cube_uv_reflection_fragment: ou,
  defaultnormal_vertex: cu,
  displacementmap_pars_vertex: lu,
  displacementmap_vertex: hu,
  emissivemap_fragment: uu,
  emissivemap_pars_fragment: du,
  colorspace_fragment: fu,
  colorspace_pars_fragment: pu,
  envmap_fragment: mu,
  envmap_common_pars_fragment: gu,
  envmap_pars_fragment: bu,
  envmap_pars_vertex: _u,
  envmap_physical_pars_fragment: Lu,
  envmap_vertex: xu,
  fog_vertex: vu,
  fog_pars_vertex: Mu,
  fog_fragment: Su,
  fog_pars_fragment: Eu,
  gradientmap_pars_fragment: yu,
  lightmap_fragment: Tu,
  lightmap_pars_fragment: Au,
  lights_lambert_fragment: wu,
  lights_lambert_pars_fragment: Ru,
  lights_pars_begin: Cu,
  lights_toon_fragment: Pu,
  lights_toon_pars_fragment: Du,
  lights_phong_fragment: Uu,
  lights_phong_pars_fragment: Iu,
  lights_physical_fragment: Nu,
  lights_physical_pars_fragment: Fu,
  lights_fragment_begin: Ou,
  lights_fragment_maps: Bu,
  lights_fragment_end: ku,
  logdepthbuf_fragment: zu,
  logdepthbuf_pars_fragment: Gu,
  logdepthbuf_pars_vertex: Hu,
  logdepthbuf_vertex: Vu,
  map_fragment: Wu,
  map_pars_fragment: ju,
  map_particle_fragment: Xu,
  map_particle_pars_fragment: qu,
  metalnessmap_fragment: Ku,
  metalnessmap_pars_fragment: Yu,
  morphcolor_vertex: Ju,
  morphnormal_vertex: Zu,
  morphtarget_pars_vertex: Qu,
  morphtarget_vertex: $u,
  normal_fragment_begin: ed,
  normal_fragment_maps: td,
  normal_pars_fragment: nd,
  normal_pars_vertex: id,
  normal_vertex: rd,
  normalmap_pars_fragment: sd,
  clearcoat_normal_fragment_begin: ad,
  clearcoat_normal_fragment_maps: od,
  clearcoat_pars_fragment: cd,
  iridescence_pars_fragment: ld,
  opaque_fragment: hd,
  packing: ud,
  premultiplied_alpha_fragment: dd,
  project_vertex: fd,
  dithering_fragment: pd,
  dithering_pars_fragment: md,
  roughnessmap_fragment: gd,
  roughnessmap_pars_fragment: bd,
  shadowmap_pars_fragment: _d,
  shadowmap_pars_vertex: xd,
  shadowmap_vertex: vd,
  shadowmask_pars_fragment: Md,
  skinbase_vertex: Sd,
  skinning_pars_vertex: Ed,
  skinning_vertex: yd,
  skinnormal_vertex: Td,
  specularmap_fragment: Ad,
  specularmap_pars_fragment: wd,
  tonemapping_fragment: Rd,
  tonemapping_pars_fragment: Cd,
  transmission_fragment: Ld,
  transmission_pars_fragment: Pd,
  uv_pars_fragment: Dd,
  uv_pars_vertex: Ud,
  uv_vertex: Id,
  worldpos_vertex: Nd,
  background_vert: Fd,
  background_frag: Od,
  backgroundCube_vert: Bd,
  backgroundCube_frag: kd,
  cube_vert: zd,
  cube_frag: Gd,
  depth_vert: Hd,
  depth_frag: Vd,
  distanceRGBA_vert: Wd,
  distanceRGBA_frag: jd,
  equirect_vert: Xd,
  equirect_frag: qd,
  linedashed_vert: Kd,
  linedashed_frag: Yd,
  meshbasic_vert: Jd,
  meshbasic_frag: Zd,
  meshlambert_vert: Qd,
  meshlambert_frag: $d,
  meshmatcap_vert: ef,
  meshmatcap_frag: tf,
  meshnormal_vert: nf,
  meshnormal_frag: rf,
  meshphong_vert: sf,
  meshphong_frag: af,
  meshphysical_vert: of,
  meshphysical_frag: cf,
  meshtoon_vert: lf,
  meshtoon_frag: hf,
  points_vert: uf,
  points_frag: df,
  shadow_vert: ff,
  shadow_frag: pf,
  sprite_vert: mf,
  sprite_frag: gf
}, oe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new we(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Be() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Be() },
    normalScale: { value: /* @__PURE__ */ new Ce(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Be() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new we(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new we(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Be() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new we(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ce(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  }
}, jt = {
  basic: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) },
        specular: { value: /* @__PURE__ */ new we(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.roughnessmap,
      oe.metalnessmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.gradientmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Et([
      oe.points,
      oe.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Et([
      oe.sprite,
      oe.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Be() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Et([
      oe.common,
      oe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distanceRGBA_vert,
    fragmentShader: Fe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Et([
      oe.lights,
      oe.fog,
      {
        color: { value: /* @__PURE__ */ new we(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
jt.physical = {
  uniforms: /* @__PURE__ */ Et([
    jt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ce(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new we(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Be() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Be() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ce() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new we(0) },
      specularColor: { value: /* @__PURE__ */ new we(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Be() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Be() },
      anisotropyVector: { value: /* @__PURE__ */ new Ce() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Be() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const gr = { r: 0, b: 0, g: 0 };
function bf(r, e, t, n, i, s, a) {
  const o = new we(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, m = null;
  function g(p, f) {
    let v = !1, b = f.isScene === !0 ? f.background : null;
    b && b.isTexture && (b = (f.backgroundBlurriness > 0 ? t : e).get(b)), b === null ? _(o, c) : b && b.isColor && (_(b, 1), v = !0);
    const E = r.xr.getEnvironmentBlendMode();
    E === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || v) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), b && (b.isCubeTexture || b.mapping === Ir) ? (h === void 0 && (h = new Bt(
      new Xi(1, 1, 1),
      new Vn({
        name: "BackgroundCubeMaterial",
        uniforms: Mi(jt.backgroundCube.uniforms),
        vertexShader: jt.backgroundCube.vertexShader,
        fragmentShader: jt.backgroundCube.fragmentShader,
        side: wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(y, C, A) {
      this.matrixWorld.copyPosition(A.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = b, h.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = f.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, h.material.toneMapped = Xe.getTransfer(b.colorSpace) !== Qe, (u !== b || d !== b.version || m !== r.toneMapping) && (h.material.needsUpdate = !0, u = b, d = b.version, m = r.toneMapping), h.layers.enableAll(), p.unshift(h, h.geometry, h.material, 0, 0, null)) : b && b.isTexture && (l === void 0 && (l = new Bt(
      new Ys(2, 2),
      new Vn({
        name: "BackgroundMaterial",
        uniforms: Mi(jt.background.uniforms),
        vertexShader: jt.background.vertexShader,
        fragmentShader: jt.background.fragmentShader,
        side: un,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = b, l.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, l.material.toneMapped = Xe.getTransfer(b.colorSpace) !== Qe, b.matrixAutoUpdate === !0 && b.updateMatrix(), l.material.uniforms.uvTransform.value.copy(b.matrix), (u !== b || d !== b.version || m !== r.toneMapping) && (l.material.needsUpdate = !0, u = b, d = b.version, m = r.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function _(p, f) {
    p.getRGB(gr, Pc(r)), n.buffers.color.setClear(gr.r, gr.g, gr.b, f, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(p, f = 1) {
      o.set(p), c = f, _(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(p) {
      c = p, _(o, c);
    },
    render: g
  };
}
function _f(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = p(null);
  let l = c, h = !1;
  function u(D, G, K, j, ee) {
    let X = !1;
    if (a) {
      const Y = _(j, K, G);
      l !== Y && (l = Y, m(l.object)), X = f(D, j, K, ee), X && v(D, j, K, ee);
    } else {
      const Y = G.wireframe === !0;
      (l.geometry !== j.id || l.program !== K.id || l.wireframe !== Y) && (l.geometry = j.id, l.program = K.id, l.wireframe = Y, X = !0);
    }
    ee !== null && t.update(ee, r.ELEMENT_ARRAY_BUFFER), (X || h) && (h = !1, B(D, G, K, j), ee !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(ee).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function m(D) {
    return n.isWebGL2 ? r.bindVertexArray(D) : s.bindVertexArrayOES(D);
  }
  function g(D) {
    return n.isWebGL2 ? r.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
  }
  function _(D, G, K) {
    const j = K.wireframe === !0;
    let ee = o[D.id];
    ee === void 0 && (ee = {}, o[D.id] = ee);
    let X = ee[G.id];
    X === void 0 && (X = {}, ee[G.id] = X);
    let Y = X[j];
    return Y === void 0 && (Y = p(d()), X[j] = Y), Y;
  }
  function p(D) {
    const G = [], K = [], j = [];
    for (let ee = 0; ee < i; ee++)
      G[ee] = 0, K[ee] = 0, j[ee] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: K,
      attributeDivisors: j,
      object: D,
      attributes: {},
      index: null
    };
  }
  function f(D, G, K, j) {
    const ee = l.attributes, X = G.attributes;
    let Y = 0;
    const U = K.getAttributes();
    for (const W in U)
      if (U[W].location >= 0) {
        const he = ee[W];
        let fe = X[W];
        if (fe === void 0 && (W === "instanceMatrix" && D.instanceMatrix && (fe = D.instanceMatrix), W === "instanceColor" && D.instanceColor && (fe = D.instanceColor)), he === void 0 || he.attribute !== fe || fe && he.data !== fe.data) return !0;
        Y++;
      }
    return l.attributesNum !== Y || l.index !== j;
  }
  function v(D, G, K, j) {
    const ee = {}, X = G.attributes;
    let Y = 0;
    const U = K.getAttributes();
    for (const W in U)
      if (U[W].location >= 0) {
        let he = X[W];
        he === void 0 && (W === "instanceMatrix" && D.instanceMatrix && (he = D.instanceMatrix), W === "instanceColor" && D.instanceColor && (he = D.instanceColor));
        const fe = {};
        fe.attribute = he, he && he.data && (fe.data = he.data), ee[W] = fe, Y++;
      }
    l.attributes = ee, l.attributesNum = Y, l.index = j;
  }
  function b() {
    const D = l.newAttributes;
    for (let G = 0, K = D.length; G < K; G++)
      D[G] = 0;
  }
  function E(D) {
    y(D, 0);
  }
  function y(D, G) {
    const K = l.newAttributes, j = l.enabledAttributes, ee = l.attributeDivisors;
    K[D] = 1, j[D] === 0 && (r.enableVertexAttribArray(D), j[D] = 1), ee[D] !== G && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, G), ee[D] = G);
  }
  function C() {
    const D = l.newAttributes, G = l.enabledAttributes;
    for (let K = 0, j = G.length; K < j; K++)
      G[K] !== D[K] && (r.disableVertexAttribArray(K), G[K] = 0);
  }
  function A(D, G, K, j, ee, X, Y) {
    Y === !0 ? r.vertexAttribIPointer(D, G, K, ee, X) : r.vertexAttribPointer(D, G, K, j, ee, X);
  }
  function B(D, G, K, j) {
    if (n.isWebGL2 === !1 && (D.isInstancedMesh || j.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    b();
    const ee = j.attributes, X = K.getAttributes(), Y = G.defaultAttributeValues;
    for (const U in X) {
      const W = X[U];
      if (W.location >= 0) {
        let le = ee[U];
        if (le === void 0 && (U === "instanceMatrix" && D.instanceMatrix && (le = D.instanceMatrix), U === "instanceColor" && D.instanceColor && (le = D.instanceColor)), le !== void 0) {
          const he = le.normalized, fe = le.itemSize, Ee = t.get(le);
          if (Ee === void 0) continue;
          const ze = Ee.buffer, ye = Ee.type, Le = Ee.bytesPerElement, Ze = n.isWebGL2 === !0 && (ye === r.INT || ye === r.UNSIGNED_INT || le.gpuType === dc);
          if (le.isInterleavedBufferAttribute) {
            const Ne = le.data, N = Ne.stride, bt = le.offset;
            if (Ne.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < W.locationSize; xe++)
                y(W.location + xe, Ne.meshPerAttribute);
              D.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = Ne.meshPerAttribute * Ne.count);
            } else
              for (let xe = 0; xe < W.locationSize; xe++)
                E(W.location + xe);
            r.bindBuffer(r.ARRAY_BUFFER, ze);
            for (let xe = 0; xe < W.locationSize; xe++)
              A(
                W.location + xe,
                fe / W.locationSize,
                ye,
                he,
                N * Le,
                (bt + fe / W.locationSize * xe) * Le,
                Ze
              );
          } else {
            if (le.isInstancedBufferAttribute) {
              for (let Ne = 0; Ne < W.locationSize; Ne++)
                y(W.location + Ne, le.meshPerAttribute);
              D.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let Ne = 0; Ne < W.locationSize; Ne++)
                E(W.location + Ne);
            r.bindBuffer(r.ARRAY_BUFFER, ze);
            for (let Ne = 0; Ne < W.locationSize; Ne++)
              A(
                W.location + Ne,
                fe / W.locationSize,
                ye,
                he,
                fe * Le,
                fe / W.locationSize * Ne * Le,
                Ze
              );
          }
        } else if (Y !== void 0) {
          const he = Y[U];
          if (he !== void 0)
            switch (he.length) {
              case 2:
                r.vertexAttrib2fv(W.location, he);
                break;
              case 3:
                r.vertexAttrib3fv(W.location, he);
                break;
              case 4:
                r.vertexAttrib4fv(W.location, he);
                break;
              default:
                r.vertexAttrib1fv(W.location, he);
            }
        }
      }
    }
    C();
  }
  function M() {
    J();
    for (const D in o) {
      const G = o[D];
      for (const K in G) {
        const j = G[K];
        for (const ee in j)
          g(j[ee].object), delete j[ee];
        delete G[K];
      }
      delete o[D];
    }
  }
  function w(D) {
    if (o[D.id] === void 0) return;
    const G = o[D.id];
    for (const K in G) {
      const j = G[K];
      for (const ee in j)
        g(j[ee].object), delete j[ee];
      delete G[K];
    }
    delete o[D.id];
  }
  function H(D) {
    for (const G in o) {
      const K = o[G];
      if (K[D.id] === void 0) continue;
      const j = K[D.id];
      for (const ee in j)
        g(j[ee].object), delete j[ee];
      delete K[D.id];
    }
  }
  function J() {
    $(), h = !0, l !== c && (l = c, m(l.object));
  }
  function $() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: J,
    resetDefaultState: $,
    dispose: M,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: H,
    initAttributes: b,
    enableAttribute: E,
    disableUnusedAttributes: C
  };
}
function xf(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(l) {
    s = l;
  }
  function o(l, h) {
    r.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0) return;
    let d, m;
    if (i)
      d = r, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = a, this.render = o, this.renderInstances = c;
}
function vf(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(A) {
    if (A === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), p = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), f = r.getParameter(r.MAX_VARYING_VECTORS), v = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), b = d > 0, E = a || e.has("OES_texture_float"), y = b && E, C = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: p,
    maxVaryings: f,
    maxFragmentUniforms: v,
    vertexTextures: b,
    floatFragmentTextures: E,
    floatVertexTextures: y,
    maxSamples: C
  };
}
function Mf(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new xn(), o = new Be(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const m = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, m) {
    const g = u.clippingPlanes, _ = u.clipIntersection, p = u.clipShadows, f = r.get(u);
    if (!i || g === null || g.length === 0 || s && !p)
      s ? h(null) : l();
    else {
      const v = s ? 0 : n, b = v * 4;
      let E = f.clippingState || null;
      c.value = E, E = h(g, d, b, m);
      for (let y = 0; y !== b; ++y)
        E[y] = t[y];
      f.clippingState = E, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, m, g) {
    const _ = u !== null ? u.length : 0;
    let p = null;
    if (_ !== 0) {
      if (p = c.value, g !== !0 || p === null) {
        const f = m + _ * 4, v = d.matrixWorldInverse;
        o.getNormalMatrix(v), (p === null || p.length < f) && (p = new Float32Array(f));
        for (let b = 0, E = m; b !== _; ++b, E += 4)
          a.copy(u[b]).applyMatrix4(v, o), a.normal.toArray(p, E), p[E + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, p;
  }
}
function Sf(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Cs ? a.mapping = mi : o === Ls && (a.mapping = gi), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Cs || o === Ls)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Nh(c.height / 2);
            return l.fromEquirectangularTexture(r, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Js extends Dc {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ui = 4, fo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Nn = 20, ds = /* @__PURE__ */ new Js(), po = /* @__PURE__ */ new we();
let fs = null, ps = 0, ms = 0;
const Un = (1 + Math.sqrt(5)) / 2, li = 1 / Un, mo = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, Un, li),
  /* @__PURE__ */ new L(0, Un, -li),
  /* @__PURE__ */ new L(li, 0, Un),
  /* @__PURE__ */ new L(-li, 0, Un),
  /* @__PURE__ */ new L(Un, li, 0),
  /* @__PURE__ */ new L(-Un, li, 0)
];
class go {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    fs = this._renderer.getRenderTarget(), ps = this._renderer.getActiveCubeFace(), ms = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = xo(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = _o(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(fs, ps, ms), e.scissorTest = !1, br(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === mi || e.mapping === gi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), fs = this._renderer.getRenderTarget(), ps = this._renderer.getActiveCubeFace(), ms = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: At,
      minFilter: At,
      generateMipmaps: !1,
      type: Hi,
      format: Ft,
      colorSpace: gt,
      depthBuffer: !1
    }, i = bo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = bo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Ef(s)), this._blurMaterial = yf(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Bt(this._lodPlanes[0], e);
    this._renderer.compile(t, ds);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new yt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(po), h.toneMapping = En, h.autoClear = !1;
    const m = new Fn({
      name: "PMREM.Background",
      side: wt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Bt(new Xi(), m);
    let _ = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, _ = !0) : (m.color.copy(po), _ = !0);
    for (let f = 0; f < 6; f++) {
      const v = f % 3;
      v === 0 ? (o.up.set(0, c[f], 0), o.lookAt(l[f], 0, 0)) : v === 1 ? (o.up.set(0, 0, c[f]), o.lookAt(0, l[f], 0)) : (o.up.set(0, c[f], 0), o.lookAt(0, 0, l[f]));
      const b = this._cubeSize;
      br(i, v * b, f > 2 ? b : 0, b, b), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === mi || e.mapping === gi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = xo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = _o());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Bt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    br(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ds);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = mo[(i - 1) % mo.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Bt(this._lodPlanes[i], l), d = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Nn - 1), _ = s / g, p = isFinite(s) ? 1 + Math.floor(h * _) : Nn;
    p > Nn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);
    const f = [];
    let v = 0;
    for (let A = 0; A < Nn; ++A) {
      const B = A / _, M = Math.exp(-B * B / 2);
      f.push(M), A === 0 ? v += M : A < p && (v += 2 * M);
    }
    for (let A = 0; A < f.length; A++)
      f[A] = f[A] / v;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: b } = this;
    d.dTheta.value = g, d.mipInt.value = b - n;
    const E = this._sizeLods[i], y = 3 * E * (i > b - ui ? i - b + ui : 0), C = 4 * (this._cubeSize - E);
    br(t, y, C, 3 * E, 2 * E), c.setRenderTarget(t), c.render(u, ds);
  }
}
function Ef(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - ui + 1 + fo.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - ui ? c = fo[a - r + ui - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, _ = 3, p = 2, f = 1, v = new Float32Array(_ * g * m), b = new Float32Array(p * g * m), E = new Float32Array(f * g * m);
    for (let C = 0; C < m; C++) {
      const A = C % 3 * 2 / 3 - 1, B = C > 2 ? 0 : -1, M = [
        A,
        B,
        0,
        A + 2 / 3,
        B,
        0,
        A + 2 / 3,
        B + 1,
        0,
        A,
        B,
        0,
        A + 2 / 3,
        B + 1,
        0,
        A,
        B + 1,
        0
      ];
      v.set(M, _ * g * C), b.set(d, p * g * C);
      const w = [C, C, C, C, C, C];
      E.set(w, f * g * C);
    }
    const y = new Zt();
    y.setAttribute("position", new Tt(v, _)), y.setAttribute("uv", new Tt(b, p)), y.setAttribute("faceIndex", new Tt(E, f)), e.push(y), i > ui && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function bo(r, e, t) {
  const n = new Hn(r, e, t);
  return n.texture.mapping = Ir, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function br(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function yf(r, e, t) {
  const n = new Float32Array(Nn), i = new L(0, 1, 0);
  return new Vn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Nn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Zs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Sn,
    depthTest: !1,
    depthWrite: !1
  });
}
function _o() {
  return new Vn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Zs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Sn,
    depthTest: !1,
    depthWrite: !1
  });
}
function xo() {
  return new Vn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Zs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Sn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Zs() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Tf(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Cs || c === Ls, h = c === mi || c === gi;
      if (l || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return t === null && (t = new go(r)), u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const u = o.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new go(r));
              const d = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Af(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function wf(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const _ = d.morphAttributes[g];
      for (let p = 0, f = _.length; p < f; p++)
        e.remove(_[p]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], r.ARRAY_BUFFER);
    const m = u.morphAttributes;
    for (const g in m) {
      const _ = m[g];
      for (let p = 0, f = _.length; p < f; p++)
        e.update(_[p], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], m = u.index, g = u.attributes.position;
    let _ = 0;
    if (m !== null) {
      const v = m.array;
      _ = m.version;
      for (let b = 0, E = v.length; b < E; b += 3) {
        const y = v[b + 0], C = v[b + 1], A = v[b + 2];
        d.push(y, C, C, A, A, y);
      }
    } else if (g !== void 0) {
      const v = g.array;
      _ = g.version;
      for (let b = 0, E = v.length / 3 - 1; b < E; b += 3) {
        const y = b + 0, C = b + 1, A = b + 2;
        d.push(y, C, C, A, A, y);
      }
    } else
      return;
    const p = new (Ec(d) ? Lc : Cc)(d, 1);
    p.version = _;
    const f = s.get(u);
    f && e.remove(f), s.set(u, p);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const m = u.index;
      m !== null && d.version < m.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function Rf(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(d) {
    s = d;
  }
  let o, c;
  function l(d) {
    o = d.type, c = d.bytesPerElement;
  }
  function h(d, m) {
    r.drawElements(s, m, o, d * c), t.update(m, s, 1);
  }
  function u(d, m, g) {
    if (g === 0) return;
    let _, p;
    if (i)
      _ = r, p = "drawElementsInstanced";
    else if (_ = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", _ === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    _[p](s, m, o, d * c, g), t.update(m, s, g);
  }
  this.setMode = a, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function Cf(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Lf(r, e) {
  return r[0] - e[0];
}
function Pf(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Df(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new Ye(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let _ = s.get(h);
      if (_ === void 0 || _.count !== g) {
        let D = function() {
          J.dispose(), s.delete(h), h.removeEventListener("dispose", D);
        };
        _ !== void 0 && _.texture.dispose();
        const v = h.morphAttributes.position !== void 0, b = h.morphAttributes.normal !== void 0, E = h.morphAttributes.color !== void 0, y = h.morphAttributes.position || [], C = h.morphAttributes.normal || [], A = h.morphAttributes.color || [];
        let B = 0;
        v === !0 && (B = 1), b === !0 && (B = 2), E === !0 && (B = 3);
        let M = h.attributes.position.count * B, w = 1;
        M > e.maxTextureSize && (w = Math.ceil(M / e.maxTextureSize), M = e.maxTextureSize);
        const H = new Float32Array(M * w * 4 * g), J = new Ac(H, M, w, g);
        J.type = cn, J.needsUpdate = !0;
        const $ = B * 4;
        for (let G = 0; G < g; G++) {
          const K = y[G], j = C[G], ee = A[G], X = M * w * 4 * G;
          for (let Y = 0; Y < K.count; Y++) {
            const U = Y * $;
            v === !0 && (a.fromBufferAttribute(K, Y), H[X + U + 0] = a.x, H[X + U + 1] = a.y, H[X + U + 2] = a.z, H[X + U + 3] = 0), b === !0 && (a.fromBufferAttribute(j, Y), H[X + U + 4] = a.x, H[X + U + 5] = a.y, H[X + U + 6] = a.z, H[X + U + 7] = 0), E === !0 && (a.fromBufferAttribute(ee, Y), H[X + U + 8] = a.x, H[X + U + 9] = a.y, H[X + U + 10] = a.z, H[X + U + 11] = ee.itemSize === 4 ? a.w : 1);
          }
        }
        _ = {
          count: g,
          texture: J,
          size: new Ce(M, w)
        }, s.set(h, _), h.addEventListener("dispose", D);
      }
      let p = 0;
      for (let v = 0; v < d.length; v++)
        p += d[v];
      const f = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", f), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let b = 0; b < m; b++)
          g[b] = [b, 0];
        n[h.id] = g;
      }
      for (let b = 0; b < m; b++) {
        const E = g[b];
        E[0] = b, E[1] = d[b];
      }
      g.sort(Pf);
      for (let b = 0; b < 8; b++)
        b < m && g[b][1] ? (o[b][0] = g[b][0], o[b][1] = g[b][1]) : (o[b][0] = Number.MAX_SAFE_INTEGER, o[b][1] = 0);
      o.sort(Lf);
      const _ = h.morphAttributes.position, p = h.morphAttributes.normal;
      let f = 0;
      for (let b = 0; b < 8; b++) {
        const E = o[b], y = E[0], C = E[1];
        y !== Number.MAX_SAFE_INTEGER && C ? (_ && h.getAttribute("morphTarget" + b) !== _[y] && h.setAttribute("morphTarget" + b, _[y]), p && h.getAttribute("morphNormal" + b) !== p[y] && h.setAttribute("morphNormal" + b, p[y]), i[b] = C, f += C) : (_ && h.hasAttribute("morphTarget" + b) === !0 && h.deleteAttribute("morphTarget" + b), p && h.hasAttribute("morphNormal" + b) === !0 && h.deleteAttribute("morphNormal" + b), i[b] = 0);
      }
      const v = h.morphTargetsRelative ? 1 : 1 - f;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", v), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function Uf(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const Nc = /* @__PURE__ */ new pt(), Fc = /* @__PURE__ */ new Ac(), Oc = /* @__PURE__ */ new _h(), Bc = /* @__PURE__ */ new Uc(), vo = [], Mo = [], So = new Float32Array(16), Eo = new Float32Array(9), yo = new Float32Array(4);
function Ti(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = vo[i];
  if (s === void 0 && (s = new Float32Array(i), vo[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function ct(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function lt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Or(r, e) {
  let t = Mo[e];
  t === void 0 && (t = new Int32Array(e), Mo[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function If(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Nf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e)) return;
    r.uniform2fv(this.addr, e), lt(t, e);
  }
}
function Ff(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ct(t, e)) return;
    r.uniform3fv(this.addr, e), lt(t, e);
  }
}
function Of(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e)) return;
    r.uniform4fv(this.addr, e), lt(t, e);
  }
}
function Bf(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ct(t, n)) return;
    yo.set(n), r.uniformMatrix2fv(this.addr, !1, yo), lt(t, n);
  }
}
function kf(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ct(t, n)) return;
    Eo.set(n), r.uniformMatrix3fv(this.addr, !1, Eo), lt(t, n);
  }
}
function zf(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ct(t, n)) return;
    So.set(n), r.uniformMatrix4fv(this.addr, !1, So), lt(t, n);
  }
}
function Gf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Hf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e)) return;
    r.uniform2iv(this.addr, e), lt(t, e);
  }
}
function Vf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ct(t, e)) return;
    r.uniform3iv(this.addr, e), lt(t, e);
  }
}
function Wf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e)) return;
    r.uniform4iv(this.addr, e), lt(t, e);
  }
}
function jf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function Xf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e)) return;
    r.uniform2uiv(this.addr, e), lt(t, e);
  }
}
function qf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ct(t, e)) return;
    r.uniform3uiv(this.addr, e), lt(t, e);
  }
}
function Kf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e)) return;
    r.uniform4uiv(this.addr, e), lt(t, e);
  }
}
function Yf(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Nc, i);
}
function Jf(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Oc, i);
}
function Zf(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Bc, i);
}
function Qf(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Fc, i);
}
function $f(r) {
  switch (r) {
    case 5126:
      return If;
    case 35664:
      return Nf;
    case 35665:
      return Ff;
    case 35666:
      return Of;
    case 35674:
      return Bf;
    case 35675:
      return kf;
    case 35676:
      return zf;
    case 5124:
    case 35670:
      return Gf;
    case 35667:
    case 35671:
      return Hf;
    case 35668:
    case 35672:
      return Vf;
    case 35669:
    case 35673:
      return Wf;
    case 5125:
      return jf;
    case 36294:
      return Xf;
    case 36295:
      return qf;
    case 36296:
      return Kf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Yf;
    case 35679:
    case 36299:
    case 36307:
      return Jf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Zf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qf;
  }
}
function ep(r, e) {
  r.uniform1fv(this.addr, e);
}
function tp(r, e) {
  const t = Ti(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function np(r, e) {
  const t = Ti(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function ip(r, e) {
  const t = Ti(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function rp(r, e) {
  const t = Ti(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function sp(r, e) {
  const t = Ti(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function ap(r, e) {
  const t = Ti(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function op(r, e) {
  r.uniform1iv(this.addr, e);
}
function cp(r, e) {
  r.uniform2iv(this.addr, e);
}
function lp(r, e) {
  r.uniform3iv(this.addr, e);
}
function hp(r, e) {
  r.uniform4iv(this.addr, e);
}
function up(r, e) {
  r.uniform1uiv(this.addr, e);
}
function dp(r, e) {
  r.uniform2uiv(this.addr, e);
}
function fp(r, e) {
  r.uniform3uiv(this.addr, e);
}
function pp(r, e) {
  r.uniform4uiv(this.addr, e);
}
function mp(r, e, t) {
  const n = this.cache, i = e.length, s = Or(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Nc, s[a]);
}
function gp(r, e, t) {
  const n = this.cache, i = e.length, s = Or(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Oc, s[a]);
}
function bp(r, e, t) {
  const n = this.cache, i = e.length, s = Or(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Bc, s[a]);
}
function _p(r, e, t) {
  const n = this.cache, i = e.length, s = Or(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || Fc, s[a]);
}
function xp(r) {
  switch (r) {
    case 5126:
      return ep;
    case 35664:
      return tp;
    case 35665:
      return np;
    case 35666:
      return ip;
    case 35674:
      return rp;
    case 35675:
      return sp;
    case 35676:
      return ap;
    case 5124:
    case 35670:
      return op;
    case 35667:
    case 35671:
      return cp;
    case 35668:
    case 35672:
      return lp;
    case 35669:
    case 35673:
      return hp;
    case 5125:
      return up;
    case 36294:
      return dp;
    case 36295:
      return fp;
    case 36296:
      return pp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return mp;
    case 35679:
    case 36299:
    case 36307:
      return gp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return _p;
  }
}
class vp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = $f(t.type);
  }
}
class Mp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = xp(t.type);
  }
}
class Sp {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const gs = /(\w+)(\])?(\[|\.)?/g;
function To(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Ep(r, e, t) {
  const n = r.name, i = n.length;
  for (gs.lastIndex = 0; ; ) {
    const s = gs.exec(n), a = gs.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      To(t, l === void 0 ? new vp(o, r, e) : new Mp(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Sp(o), To(t, u)), t = u;
    }
  }
}
class Ar {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      Ep(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Ao(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const yp = 37297;
let Tp = 0;
function Ap(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function wp(r) {
  const e = Xe.getPrimaries(Xe.workingColorSpace), t = Xe.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === Pr && t === Lr ? n = "LinearDisplayP3ToLinearSRGB" : e === Lr && t === Pr && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case gt:
    case Nr:
      return [n, "LinearTransferOETF"];
    case nt:
    case Xs:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function wo(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Ap(r.getShaderSource(e), a);
  } else
    return i;
}
function Rp(r, e) {
  const t = wp(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Cp(r, e) {
  let t;
  switch (e) {
    case Al:
      t = "Linear";
      break;
    case wl:
      t = "Reinhard";
      break;
    case Rl:
      t = "OptimizedCineon";
      break;
    case Cl:
      t = "ACESFilmic";
      break;
    case Ll:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Lp(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Bi).join(`
`);
}
function Pp(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Dp(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Bi(r) {
  return r !== "";
}
function Ro(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Co(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Up = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Fs(r) {
  return r.replace(Up, Np);
}
const Ip = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function Np(r, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = Ip.get(e);
    if (n !== void 0)
      t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Fs(t);
}
const Fp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Lo(r) {
  return r.replace(Fp, Op);
}
function Op(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Po(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Bp(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === cc ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === el ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === on && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function kp(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case mi:
      case gi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ir:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function zp(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case gi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Gp(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case lc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case yl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Tl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Hp(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Vp(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = Bp(t), l = kp(t), h = zp(t), u = Gp(t), d = Hp(t), m = t.isWebGL2 ? "" : Lp(t), g = Pp(s), _ = i.createProgram();
  let p, f, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Bi).join(`
`), p.length > 0 && (p += `
`), f = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Bi).join(`
`), f.length > 0 && (f += `
`)) : (p = [
    Po(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Bi).join(`
`), f = [
    m,
    Po(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== En ? "#define TONE_MAPPING" : "",
    t.toneMapping !== En ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== En ? Cp("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Rp("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Bi).join(`
`)), a = Fs(a), a = Ro(a, t), a = Co(a, t), o = Fs(o), o = Ro(o, t), o = Co(o, t), a = Lo(a), o = Lo(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, f = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === Ka ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Ka ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + f);
  const b = v + p + a, E = v + f + o, y = Ao(i, i.VERTEX_SHADER, b), C = Ao(i, i.FRAGMENT_SHADER, E);
  i.attachShader(_, y), i.attachShader(_, C), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function A(H) {
    if (r.debug.checkShaderErrors) {
      const J = i.getProgramInfoLog(_).trim(), $ = i.getShaderInfoLog(y).trim(), D = i.getShaderInfoLog(C).trim();
      let G = !0, K = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (G = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, _, y, C);
        else {
          const j = wo(i, y, "vertex"), ee = wo(i, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Program Info Log: ` + J + `
` + j + `
` + ee
          );
        }
      else J !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", J) : ($ === "" || D === "") && (K = !1);
      K && (H.diagnostics = {
        runnable: G,
        programLog: J,
        vertexShader: {
          log: $,
          prefix: p
        },
        fragmentShader: {
          log: D,
          prefix: f
        }
      });
    }
    i.deleteShader(y), i.deleteShader(C), B = new Ar(i, _), M = Dp(i, _);
  }
  let B;
  this.getUniforms = function() {
    return B === void 0 && A(this), B;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && A(this), M;
  };
  let w = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return w === !1 && (w = i.getProgramParameter(_, yp)), w;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Tp++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = y, this.fragmentShader = C, this;
}
let Wp = 0;
class jp {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Xp(e), t.set(e, n)), n;
  }
}
class Xp {
  constructor(e) {
    this.id = Wp++, this.code = e, this.usedTimes = 0;
  }
}
function qp(r, e, t, n, i, s, a) {
  const o = new wc(), c = new jp(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(M) {
    return M === 0 ? "uv" : `uv${M}`;
  }
  function p(M, w, H, J, $) {
    const D = J.fog, G = $.geometry, K = M.isMeshStandardMaterial ? J.environment : null, j = (M.isMeshStandardMaterial ? t : e).get(M.envMap || K), ee = j && j.mapping === Ir ? j.image.height : null, X = g[M.type];
    M.precision !== null && (m = i.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
    const Y = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, U = Y !== void 0 ? Y.length : 0;
    let W = 0;
    G.morphAttributes.position !== void 0 && (W = 1), G.morphAttributes.normal !== void 0 && (W = 2), G.morphAttributes.color !== void 0 && (W = 3);
    let le, he, fe, Ee;
    if (X) {
      const st = jt[X];
      le = st.vertexShader, he = st.fragmentShader;
    } else
      le = M.vertexShader, he = M.fragmentShader, c.update(M), fe = c.getVertexShaderID(M), Ee = c.getFragmentShaderID(M);
    const ze = r.getRenderTarget(), ye = $.isInstancedMesh === !0, Le = !!M.map, Ze = !!M.matcap, Ne = !!j, N = !!M.aoMap, bt = !!M.lightMap, xe = !!M.bumpMap, Te = !!M.normalMap, Ae = !!M.displacementMap, $e = !!M.emissiveMap, Ue = !!M.metalnessMap, Pe = !!M.roughnessMap, je = M.anisotropy > 0, rt = M.clearcoat > 0, ht = M.iridescence > 0, T = M.sheen > 0, x = M.transmission > 0, F = je && !!M.anisotropyMap, te = rt && !!M.clearcoatMap, Z = rt && !!M.clearcoatNormalMap, ne = rt && !!M.clearcoatRoughnessMap, me = ht && !!M.iridescenceMap, se = ht && !!M.iridescenceThicknessMap, ce = T && !!M.sheenColorMap, R = T && !!M.sheenRoughnessMap, re = !!M.specularMap, q = !!M.specularColorMap, Me = !!M.specularIntensityMap, ge = x && !!M.transmissionMap, ve = x && !!M.thicknessMap, pe = !!M.gradientMap, de = !!M.alphaMap, Ge = M.alphaTest > 0, P = !!M.alphaHash, ae = !!M.extensions, Q = !!G.attributes.uv1, V = !!G.attributes.uv2, ie = !!G.attributes.uv3;
    let _e = En;
    return M.toneMapped && (ze === null || ze.isXRRenderTarget === !0) && (_e = r.toneMapping), {
      isWebGL2: h,
      shaderID: X,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: le,
      fragmentShader: he,
      defines: M.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: Ee,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: m,
      instancing: ye,
      instancingColor: ye && $.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: ze === null ? r.outputColorSpace : ze.isXRRenderTarget === !0 ? ze.texture.colorSpace : gt,
      map: Le,
      matcap: Ze,
      envMap: Ne,
      envMapMode: Ne && j.mapping,
      envMapCubeUVHeight: ee,
      aoMap: N,
      lightMap: bt,
      bumpMap: xe,
      normalMap: Te,
      displacementMap: d && Ae,
      emissiveMap: $e,
      normalMapObjectSpace: Te && M.normalMapType === jl,
      normalMapTangentSpace: Te && M.normalMapType === vc,
      metalnessMap: Ue,
      roughnessMap: Pe,
      anisotropy: je,
      anisotropyMap: F,
      clearcoat: rt,
      clearcoatMap: te,
      clearcoatNormalMap: Z,
      clearcoatRoughnessMap: ne,
      iridescence: ht,
      iridescenceMap: me,
      iridescenceThicknessMap: se,
      sheen: T,
      sheenColorMap: ce,
      sheenRoughnessMap: R,
      specularMap: re,
      specularColorMap: q,
      specularIntensityMap: Me,
      transmission: x,
      transmissionMap: ge,
      thicknessMap: ve,
      gradientMap: pe,
      opaque: M.transparent === !1 && M.blending === di,
      alphaMap: de,
      alphaTest: Ge,
      alphaHash: P,
      combine: M.combine,
      //
      mapUv: Le && _(M.map.channel),
      aoMapUv: N && _(M.aoMap.channel),
      lightMapUv: bt && _(M.lightMap.channel),
      bumpMapUv: xe && _(M.bumpMap.channel),
      normalMapUv: Te && _(M.normalMap.channel),
      displacementMapUv: Ae && _(M.displacementMap.channel),
      emissiveMapUv: $e && _(M.emissiveMap.channel),
      metalnessMapUv: Ue && _(M.metalnessMap.channel),
      roughnessMapUv: Pe && _(M.roughnessMap.channel),
      anisotropyMapUv: F && _(M.anisotropyMap.channel),
      clearcoatMapUv: te && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: Z && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ne && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: me && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: se && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: ce && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: R && _(M.sheenRoughnessMap.channel),
      specularMapUv: re && _(M.specularMap.channel),
      specularColorMapUv: q && _(M.specularColorMap.channel),
      specularIntensityMapUv: Me && _(M.specularIntensityMap.channel),
      transmissionMapUv: ge && _(M.transmissionMap.channel),
      thicknessMapUv: ve && _(M.thicknessMap.channel),
      alphaMapUv: de && _(M.alphaMap.channel),
      //
      vertexTangents: !!G.attributes.tangent && (Te || je),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      vertexUv1s: Q,
      vertexUv2s: V,
      vertexUv3s: ie,
      pointsUvs: $.isPoints === !0 && !!G.attributes.uv && (Le || de),
      fog: !!D,
      useFog: M.fog === !0,
      fogExp2: D && D.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: $.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: U,
      morphTextureStride: W,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numLightProbes: w.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && H.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: _e,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: Le && M.map.isVideoTexture === !0 && Xe.getTransfer(M.map.colorSpace) === Qe,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === Xt,
      flipSided: M.side === wt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: ae && M.extensions.derivatives === !0,
      extensionFragDepth: ae && M.extensions.fragDepth === !0,
      extensionDrawBuffers: ae && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ae && M.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function f(M) {
    const w = [];
    if (M.shaderID ? w.push(M.shaderID) : (w.push(M.customVertexShaderID), w.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const H in M.defines)
        w.push(H), w.push(M.defines[H]);
    return M.isRawShaderMaterial === !1 && (v(w, M), b(w, M), w.push(r.outputColorSpace)), w.push(M.customProgramCacheKey), w.join();
  }
  function v(M, w) {
    M.push(w.precision), M.push(w.outputColorSpace), M.push(w.envMapMode), M.push(w.envMapCubeUVHeight), M.push(w.mapUv), M.push(w.alphaMapUv), M.push(w.lightMapUv), M.push(w.aoMapUv), M.push(w.bumpMapUv), M.push(w.normalMapUv), M.push(w.displacementMapUv), M.push(w.emissiveMapUv), M.push(w.metalnessMapUv), M.push(w.roughnessMapUv), M.push(w.anisotropyMapUv), M.push(w.clearcoatMapUv), M.push(w.clearcoatNormalMapUv), M.push(w.clearcoatRoughnessMapUv), M.push(w.iridescenceMapUv), M.push(w.iridescenceThicknessMapUv), M.push(w.sheenColorMapUv), M.push(w.sheenRoughnessMapUv), M.push(w.specularMapUv), M.push(w.specularColorMapUv), M.push(w.specularIntensityMapUv), M.push(w.transmissionMapUv), M.push(w.thicknessMapUv), M.push(w.combine), M.push(w.fogExp2), M.push(w.sizeAttenuation), M.push(w.morphTargetsCount), M.push(w.morphAttributeCount), M.push(w.numDirLights), M.push(w.numPointLights), M.push(w.numSpotLights), M.push(w.numSpotLightMaps), M.push(w.numHemiLights), M.push(w.numRectAreaLights), M.push(w.numDirLightShadows), M.push(w.numPointLightShadows), M.push(w.numSpotLightShadows), M.push(w.numSpotLightShadowsWithMaps), M.push(w.numLightProbes), M.push(w.shadowMapType), M.push(w.toneMapping), M.push(w.numClippingPlanes), M.push(w.numClipIntersection), M.push(w.depthPacking);
  }
  function b(M, w) {
    o.disableAll(), w.isWebGL2 && o.enable(0), w.supportsVertexTextures && o.enable(1), w.instancing && o.enable(2), w.instancingColor && o.enable(3), w.matcap && o.enable(4), w.envMap && o.enable(5), w.normalMapObjectSpace && o.enable(6), w.normalMapTangentSpace && o.enable(7), w.clearcoat && o.enable(8), w.iridescence && o.enable(9), w.alphaTest && o.enable(10), w.vertexColors && o.enable(11), w.vertexAlphas && o.enable(12), w.vertexUv1s && o.enable(13), w.vertexUv2s && o.enable(14), w.vertexUv3s && o.enable(15), w.vertexTangents && o.enable(16), w.anisotropy && o.enable(17), w.alphaHash && o.enable(18), M.push(o.mask), o.disableAll(), w.fog && o.enable(0), w.useFog && o.enable(1), w.flatShading && o.enable(2), w.logarithmicDepthBuffer && o.enable(3), w.skinning && o.enable(4), w.morphTargets && o.enable(5), w.morphNormals && o.enable(6), w.morphColors && o.enable(7), w.premultipliedAlpha && o.enable(8), w.shadowMapEnabled && o.enable(9), w.useLegacyLights && o.enable(10), w.doubleSided && o.enable(11), w.flipSided && o.enable(12), w.useDepthPacking && o.enable(13), w.dithering && o.enable(14), w.transmission && o.enable(15), w.sheen && o.enable(16), w.opaque && o.enable(17), w.pointsUvs && o.enable(18), w.decodeVideoTexture && o.enable(19), M.push(o.mask);
  }
  function E(M) {
    const w = g[M.type];
    let H;
    if (w) {
      const J = jt[w];
      H = Ph.clone(J.uniforms);
    } else
      H = M.uniforms;
    return H;
  }
  function y(M, w) {
    let H;
    for (let J = 0, $ = l.length; J < $; J++) {
      const D = l[J];
      if (D.cacheKey === w) {
        H = D, ++H.usedTimes;
        break;
      }
    }
    return H === void 0 && (H = new Vp(r, w, M, s), l.push(H)), H;
  }
  function C(M) {
    if (--M.usedTimes === 0) {
      const w = l.indexOf(M);
      l[w] = l[l.length - 1], l.pop(), M.destroy();
    }
  }
  function A(M) {
    c.remove(M);
  }
  function B() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: E,
    acquireProgram: y,
    releaseProgram: C,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: B
  };
}
function Kp() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Yp(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Do(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Uo() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, m, g, _, p) {
    let f = r[e];
    return f === void 0 ? (f = {
      id: u.id,
      object: u,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: p
    }, r[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = m, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = _, f.group = p), e++, f;
  }
  function o(u, d, m, g, _, p) {
    const f = a(u, d, m, g, _, p);
    m.transmission > 0 ? n.push(f) : m.transparent === !0 ? i.push(f) : t.push(f);
  }
  function c(u, d, m, g, _, p) {
    const f = a(u, d, m, g, _, p);
    m.transmission > 0 ? n.unshift(f) : m.transparent === !0 ? i.unshift(f) : t.unshift(f);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || Yp), n.length > 1 && n.sort(d || Do), i.length > 1 && i.sort(d || Do);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const m = r[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Jp() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new Uo(), r.set(n, [a])) : i >= s.length ? (a = new Uo(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Zp() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new we()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new we(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new we(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new we(),
            groundColor: new we()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new we(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function Qp() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let $p = 0;
function em(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function tm(r, e) {
  const t = new Zp(), n = Qp(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let h = 0; h < 9; h++) i.probe.push(new L());
  const s = new L(), a = new ke(), o = new ke();
  function c(h, u) {
    let d = 0, m = 0, g = 0;
    for (let J = 0; J < 9; J++) i.probe[J].set(0, 0, 0);
    let _ = 0, p = 0, f = 0, v = 0, b = 0, E = 0, y = 0, C = 0, A = 0, B = 0, M = 0;
    h.sort(em);
    const w = u === !0 ? Math.PI : 1;
    for (let J = 0, $ = h.length; J < $; J++) {
      const D = h[J], G = D.color, K = D.intensity, j = D.distance, ee = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        d += G.r * K * w, m += G.g * K * w, g += G.b * K * w;
      else if (D.isLightProbe) {
        for (let X = 0; X < 9; X++)
          i.probe[X].addScaledVector(D.sh.coefficients[X], K);
        M++;
      } else if (D.isDirectionalLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity * w), D.castShadow) {
          const Y = D.shadow, U = n.get(D);
          U.shadowBias = Y.bias, U.shadowNormalBias = Y.normalBias, U.shadowRadius = Y.radius, U.shadowMapSize = Y.mapSize, i.directionalShadow[_] = U, i.directionalShadowMap[_] = ee, i.directionalShadowMatrix[_] = D.shadow.matrix, E++;
        }
        i.directional[_] = X, _++;
      } else if (D.isSpotLight) {
        const X = t.get(D);
        X.position.setFromMatrixPosition(D.matrixWorld), X.color.copy(G).multiplyScalar(K * w), X.distance = j, X.coneCos = Math.cos(D.angle), X.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), X.decay = D.decay, i.spot[f] = X;
        const Y = D.shadow;
        if (D.map && (i.spotLightMap[A] = D.map, A++, Y.updateMatrices(D), D.castShadow && B++), i.spotLightMatrix[f] = Y.matrix, D.castShadow) {
          const U = n.get(D);
          U.shadowBias = Y.bias, U.shadowNormalBias = Y.normalBias, U.shadowRadius = Y.radius, U.shadowMapSize = Y.mapSize, i.spotShadow[f] = U, i.spotShadowMap[f] = ee, C++;
        }
        f++;
      } else if (D.isRectAreaLight) {
        const X = t.get(D);
        X.color.copy(G).multiplyScalar(K), X.halfWidth.set(D.width * 0.5, 0, 0), X.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[v] = X, v++;
      } else if (D.isPointLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity * w), X.distance = D.distance, X.decay = D.decay, D.castShadow) {
          const Y = D.shadow, U = n.get(D);
          U.shadowBias = Y.bias, U.shadowNormalBias = Y.normalBias, U.shadowRadius = Y.radius, U.shadowMapSize = Y.mapSize, U.shadowCameraNear = Y.camera.near, U.shadowCameraFar = Y.camera.far, i.pointShadow[p] = U, i.pointShadowMap[p] = ee, i.pointShadowMatrix[p] = D.shadow.matrix, y++;
        }
        i.point[p] = X, p++;
      } else if (D.isHemisphereLight) {
        const X = t.get(D);
        X.skyColor.copy(D.color).multiplyScalar(K * w), X.groundColor.copy(D.groundColor).multiplyScalar(K * w), i.hemi[b] = X, b++;
      }
    }
    v > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_FLOAT_1, i.rectAreaLTC2 = oe.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_HALF_1, i.rectAreaLTC2 = oe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const H = i.hash;
    (H.directionalLength !== _ || H.pointLength !== p || H.spotLength !== f || H.rectAreaLength !== v || H.hemiLength !== b || H.numDirectionalShadows !== E || H.numPointShadows !== y || H.numSpotShadows !== C || H.numSpotMaps !== A || H.numLightProbes !== M) && (i.directional.length = _, i.spot.length = f, i.rectArea.length = v, i.point.length = p, i.hemi.length = b, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.pointShadow.length = y, i.pointShadowMap.length = y, i.spotShadow.length = C, i.spotShadowMap.length = C, i.directionalShadowMatrix.length = E, i.pointShadowMatrix.length = y, i.spotLightMatrix.length = C + A - B, i.spotLightMap.length = A, i.numSpotLightShadowsWithMaps = B, i.numLightProbes = M, H.directionalLength = _, H.pointLength = p, H.spotLength = f, H.rectAreaLength = v, H.hemiLength = b, H.numDirectionalShadows = E, H.numPointShadows = y, H.numSpotShadows = C, H.numSpotMaps = A, H.numLightProbes = M, i.version = $p++);
  }
  function l(h, u) {
    let d = 0, m = 0, g = 0, _ = 0, p = 0;
    const f = u.matrixWorldInverse;
    for (let v = 0, b = h.length; v < b; v++) {
      const E = h[v];
      if (E.isDirectionalLight) {
        const y = i.directional[d];
        y.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(f), d++;
      } else if (E.isSpotLight) {
        const y = i.spot[g];
        y.position.setFromMatrixPosition(E.matrixWorld), y.position.applyMatrix4(f), y.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(f), g++;
      } else if (E.isRectAreaLight) {
        const y = i.rectArea[_];
        y.position.setFromMatrixPosition(E.matrixWorld), y.position.applyMatrix4(f), o.identity(), a.copy(E.matrixWorld), a.premultiply(f), o.extractRotation(a), y.halfWidth.set(E.width * 0.5, 0, 0), y.halfHeight.set(0, E.height * 0.5, 0), y.halfWidth.applyMatrix4(o), y.halfHeight.applyMatrix4(o), _++;
      } else if (E.isPointLight) {
        const y = i.point[m];
        y.position.setFromMatrixPosition(E.matrixWorld), y.position.applyMatrix4(f), m++;
      } else if (E.isHemisphereLight) {
        const y = i.hemi[p];
        y.direction.setFromMatrixPosition(E.matrixWorld), y.direction.transformDirection(f), p++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Io(r, e) {
  const t = new tm(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o
  };
}
function nm(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let c;
    return o === void 0 ? (c = new Io(r, e), t.set(s, [c])) : a >= o.length ? (c = new Io(r, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class im extends Kt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Vl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class rm extends Kt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const sm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, am = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function om(r, e, t) {
  let n = new Ks();
  const i = new Ce(), s = new Ce(), a = new Ye(), o = new im({ depthPacking: Wl }), c = new rm(), l = {}, h = t.maxTextureSize, u = { [un]: wt, [wt]: un, [Xt]: Xt }, d = new Vn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ce() },
      radius: { value: 4 }
    },
    vertexShader: sm,
    fragmentShader: am
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Zt();
  g.setAttribute(
    "position",
    new Tt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Bt(g, d), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = cc;
  let f = this.type;
  this.render = function(y, C, A) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || y.length === 0) return;
    const B = r.getRenderTarget(), M = r.getActiveCubeFace(), w = r.getActiveMipmapLevel(), H = r.state;
    H.setBlending(Sn), H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(!0), H.setScissorTest(!1);
    const J = f !== on && this.type === on, $ = f === on && this.type !== on;
    for (let D = 0, G = y.length; D < G; D++) {
      const K = y[D], j = K.shadow;
      if (j === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (j.autoUpdate === !1 && j.needsUpdate === !1) continue;
      i.copy(j.mapSize);
      const ee = j.getFrameExtents();
      if (i.multiply(ee), s.copy(j.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / ee.x), i.x = s.x * ee.x, j.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / ee.y), i.y = s.y * ee.y, j.mapSize.y = s.y)), j.map === null || J === !0 || $ === !0) {
        const Y = this.type !== on ? { minFilter: ft, magFilter: ft } : {};
        j.map !== null && j.map.dispose(), j.map = new Hn(i.x, i.y, Y), j.map.texture.name = K.name + ".shadowMap", j.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(j.map), r.clear();
      const X = j.getViewportCount();
      for (let Y = 0; Y < X; Y++) {
        const U = j.getViewport(Y);
        a.set(
          s.x * U.x,
          s.y * U.y,
          s.x * U.z,
          s.y * U.w
        ), H.viewport(a), j.updateMatrices(K, Y), n = j.getFrustum(), E(C, A, j.camera, K, this.type);
      }
      j.isPointLightShadow !== !0 && this.type === on && v(j, A), j.needsUpdate = !1;
    }
    f = this.type, p.needsUpdate = !1, r.setRenderTarget(B, M, w);
  };
  function v(y, C) {
    const A = e.update(_);
    d.defines.VSM_SAMPLES !== y.blurSamples && (d.defines.VSM_SAMPLES = y.blurSamples, m.defines.VSM_SAMPLES = y.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), y.mapPass === null && (y.mapPass = new Hn(i.x, i.y)), d.uniforms.shadow_pass.value = y.map.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, r.setRenderTarget(y.mapPass), r.clear(), r.renderBufferDirect(C, null, A, d, _, null), m.uniforms.shadow_pass.value = y.mapPass.texture, m.uniforms.resolution.value = y.mapSize, m.uniforms.radius.value = y.radius, r.setRenderTarget(y.map), r.clear(), r.renderBufferDirect(C, null, A, m, _, null);
  }
  function b(y, C, A, B) {
    let M = null;
    const w = A.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (w !== void 0)
      M = w;
    else if (M = A.isPointLight === !0 ? c : o, r.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const H = M.uuid, J = C.uuid;
      let $ = l[H];
      $ === void 0 && ($ = {}, l[H] = $);
      let D = $[J];
      D === void 0 && (D = M.clone(), $[J] = D), M = D;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, B === on ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : u[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, A.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const H = r.properties.get(M);
      H.light = A;
    }
    return M;
  }
  function E(y, C, A, B, M) {
    if (y.visible === !1) return;
    if (y.layers.test(C.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && M === on) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, y.matrixWorld);
      const J = e.update(y), $ = y.material;
      if (Array.isArray($)) {
        const D = J.groups;
        for (let G = 0, K = D.length; G < K; G++) {
          const j = D[G], ee = $[j.materialIndex];
          if (ee && ee.visible) {
            const X = b(y, ee, B, M);
            r.renderBufferDirect(A, null, J, X, y, j);
          }
        }
      } else if ($.visible) {
        const D = b(y, $, B, M);
        r.renderBufferDirect(A, null, J, D, y, null);
      }
    }
    const H = y.children;
    for (let J = 0, $ = H.length; J < $; J++)
      E(H[J], C, A, B, M);
  }
}
function cm(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let P = !1;
    const ae = new Ye();
    let Q = null;
    const V = new Ye(0, 0, 0, 0);
    return {
      setMask: function(ie) {
        Q !== ie && !P && (r.colorMask(ie, ie, ie, ie), Q = ie);
      },
      setLocked: function(ie) {
        P = ie;
      },
      setClear: function(ie, _e, He, st, Dt) {
        Dt === !0 && (ie *= st, _e *= st, He *= st), ae.set(ie, _e, He, st), V.equals(ae) === !1 && (r.clearColor(ie, _e, He, st), V.copy(ae));
      },
      reset: function() {
        P = !1, Q = null, V.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let P = !1, ae = null, Q = null, V = null;
    return {
      setTest: function(ie) {
        ie ? Le(r.DEPTH_TEST) : Ze(r.DEPTH_TEST);
      },
      setMask: function(ie) {
        ae !== ie && !P && (r.depthMask(ie), ae = ie);
      },
      setFunc: function(ie) {
        if (Q !== ie) {
          switch (ie) {
            case bl:
              r.depthFunc(r.NEVER);
              break;
            case _l:
              r.depthFunc(r.ALWAYS);
              break;
            case xl:
              r.depthFunc(r.LESS);
              break;
            case wr:
              r.depthFunc(r.LEQUAL);
              break;
            case vl:
              r.depthFunc(r.EQUAL);
              break;
            case Ml:
              r.depthFunc(r.GEQUAL);
              break;
            case Sl:
              r.depthFunc(r.GREATER);
              break;
            case El:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          Q = ie;
        }
      },
      setLocked: function(ie) {
        P = ie;
      },
      setClear: function(ie) {
        V !== ie && (r.clearDepth(ie), V = ie);
      },
      reset: function() {
        P = !1, ae = null, Q = null, V = null;
      }
    };
  }
  function a() {
    let P = !1, ae = null, Q = null, V = null, ie = null, _e = null, He = null, st = null, Dt = null;
    return {
      setTest: function(Je) {
        P || (Je ? Le(r.STENCIL_TEST) : Ze(r.STENCIL_TEST));
      },
      setMask: function(Je) {
        ae !== Je && !P && (r.stencilMask(Je), ae = Je);
      },
      setFunc: function(Je, vt, Wt) {
        (Q !== Je || V !== vt || ie !== Wt) && (r.stencilFunc(Je, vt, Wt), Q = Je, V = vt, ie = Wt);
      },
      setOp: function(Je, vt, Wt) {
        (_e !== Je || He !== vt || st !== Wt) && (r.stencilOp(Je, vt, Wt), _e = Je, He = vt, st = Wt);
      },
      setLocked: function(Je) {
        P = Je;
      },
      setClear: function(Je) {
        Dt !== Je && (r.clearStencil(Je), Dt = Je);
      },
      reset: function() {
        P = !1, ae = null, Q = null, V = null, ie = null, _e = null, He = null, st = null, Dt = null;
      }
    };
  }
  const o = new i(), c = new s(), l = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, f = !1, v = null, b = null, E = null, y = null, C = null, A = null, B = null, M = new we(0, 0, 0), w = 0, H = !1, J = null, $ = null, D = null, G = null, K = null;
  const j = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ee = !1, X = 0;
  const Y = r.getParameter(r.VERSION);
  Y.indexOf("WebGL") !== -1 ? (X = parseFloat(/^WebGL (\d)/.exec(Y)[1]), ee = X >= 1) : Y.indexOf("OpenGL ES") !== -1 && (X = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), ee = X >= 2);
  let U = null, W = {};
  const le = r.getParameter(r.SCISSOR_BOX), he = r.getParameter(r.VIEWPORT), fe = new Ye().fromArray(le), Ee = new Ye().fromArray(he);
  function ze(P, ae, Q, V) {
    const ie = new Uint8Array(4), _e = r.createTexture();
    r.bindTexture(P, _e), r.texParameteri(P, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(P, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let He = 0; He < Q; He++)
      n && (P === r.TEXTURE_3D || P === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ae, 0, r.RGBA, 1, 1, V, 0, r.RGBA, r.UNSIGNED_BYTE, ie) : r.texImage2D(ae + He, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, ie);
    return _e;
  }
  const ye = {};
  ye[r.TEXTURE_2D] = ze(r.TEXTURE_2D, r.TEXTURE_2D, 1), ye[r.TEXTURE_CUBE_MAP] = ze(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (ye[r.TEXTURE_2D_ARRAY] = ze(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), ye[r.TEXTURE_3D] = ze(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Le(r.DEPTH_TEST), c.setFunc(wr), Ue(!1), Pe(da), Le(r.CULL_FACE), Ae(Sn);
  function Le(P) {
    d[P] !== !0 && (r.enable(P), d[P] = !0);
  }
  function Ze(P) {
    d[P] !== !1 && (r.disable(P), d[P] = !1);
  }
  function Ne(P, ae) {
    return m[P] !== ae ? (r.bindFramebuffer(P, ae), m[P] = ae, n && (P === r.DRAW_FRAMEBUFFER && (m[r.FRAMEBUFFER] = ae), P === r.FRAMEBUFFER && (m[r.DRAW_FRAMEBUFFER] = ae)), !0) : !1;
  }
  function N(P, ae) {
    let Q = _, V = !1;
    if (P)
      if (Q = g.get(ae), Q === void 0 && (Q = [], g.set(ae, Q)), P.isWebGLMultipleRenderTargets) {
        const ie = P.texture;
        if (Q.length !== ie.length || Q[0] !== r.COLOR_ATTACHMENT0) {
          for (let _e = 0, He = ie.length; _e < He; _e++)
            Q[_e] = r.COLOR_ATTACHMENT0 + _e;
          Q.length = ie.length, V = !0;
        }
      } else
        Q[0] !== r.COLOR_ATTACHMENT0 && (Q[0] = r.COLOR_ATTACHMENT0, V = !0);
    else
      Q[0] !== r.BACK && (Q[0] = r.BACK, V = !0);
    V && (t.isWebGL2 ? r.drawBuffers(Q) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q));
  }
  function bt(P) {
    return p !== P ? (r.useProgram(P), p = P, !0) : !1;
  }
  const xe = {
    [In]: r.FUNC_ADD,
    [nl]: r.FUNC_SUBTRACT,
    [il]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    xe[ga] = r.MIN, xe[ba] = r.MAX;
  else {
    const P = e.get("EXT_blend_minmax");
    P !== null && (xe[ga] = P.MIN_EXT, xe[ba] = P.MAX_EXT);
  }
  const Te = {
    [rl]: r.ZERO,
    [sl]: r.ONE,
    [al]: r.SRC_COLOR,
    [ws]: r.SRC_ALPHA,
    [dl]: r.SRC_ALPHA_SATURATE,
    [hl]: r.DST_COLOR,
    [cl]: r.DST_ALPHA,
    [ol]: r.ONE_MINUS_SRC_COLOR,
    [Rs]: r.ONE_MINUS_SRC_ALPHA,
    [ul]: r.ONE_MINUS_DST_COLOR,
    [ll]: r.ONE_MINUS_DST_ALPHA,
    [fl]: r.CONSTANT_COLOR,
    [pl]: r.ONE_MINUS_CONSTANT_COLOR,
    [ml]: r.CONSTANT_ALPHA,
    [gl]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ae(P, ae, Q, V, ie, _e, He, st, Dt, Je) {
    if (P === Sn) {
      f === !0 && (Ze(r.BLEND), f = !1);
      return;
    }
    if (f === !1 && (Le(r.BLEND), f = !0), P !== tl) {
      if (P !== v || Je !== H) {
        if ((b !== In || C !== In) && (r.blendEquation(r.FUNC_ADD), b = In, C = In), Je)
          switch (P) {
            case di:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case fa:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case pa:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case ma:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case di:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case fa:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case pa:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case ma:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        E = null, y = null, A = null, B = null, M.set(0, 0, 0), w = 0, v = P, H = Je;
      }
      return;
    }
    ie = ie || ae, _e = _e || Q, He = He || V, (ae !== b || ie !== C) && (r.blendEquationSeparate(xe[ae], xe[ie]), b = ae, C = ie), (Q !== E || V !== y || _e !== A || He !== B) && (r.blendFuncSeparate(Te[Q], Te[V], Te[_e], Te[He]), E = Q, y = V, A = _e, B = He), (st.equals(M) === !1 || Dt !== w) && (r.blendColor(st.r, st.g, st.b, Dt), M.copy(st), w = Dt), v = P, H = !1;
  }
  function $e(P, ae) {
    P.side === Xt ? Ze(r.CULL_FACE) : Le(r.CULL_FACE);
    let Q = P.side === wt;
    ae && (Q = !Q), Ue(Q), P.blending === di && P.transparent === !1 ? Ae(Sn) : Ae(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), c.setFunc(P.depthFunc), c.setTest(P.depthTest), c.setMask(P.depthWrite), o.setMask(P.colorWrite);
    const V = P.stencilWrite;
    l.setTest(V), V && (l.setMask(P.stencilWriteMask), l.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), l.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), rt(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? Le(r.SAMPLE_ALPHA_TO_COVERAGE) : Ze(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ue(P) {
    J !== P && (P ? r.frontFace(r.CW) : r.frontFace(r.CCW), J = P);
  }
  function Pe(P) {
    P !== Qc ? (Le(r.CULL_FACE), P !== $ && (P === da ? r.cullFace(r.BACK) : P === $c ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Ze(r.CULL_FACE), $ = P;
  }
  function je(P) {
    P !== D && (ee && r.lineWidth(P), D = P);
  }
  function rt(P, ae, Q) {
    P ? (Le(r.POLYGON_OFFSET_FILL), (G !== ae || K !== Q) && (r.polygonOffset(ae, Q), G = ae, K = Q)) : Ze(r.POLYGON_OFFSET_FILL);
  }
  function ht(P) {
    P ? Le(r.SCISSOR_TEST) : Ze(r.SCISSOR_TEST);
  }
  function T(P) {
    P === void 0 && (P = r.TEXTURE0 + j - 1), U !== P && (r.activeTexture(P), U = P);
  }
  function x(P, ae, Q) {
    Q === void 0 && (U === null ? Q = r.TEXTURE0 + j - 1 : Q = U);
    let V = W[Q];
    V === void 0 && (V = { type: void 0, texture: void 0 }, W[Q] = V), (V.type !== P || V.texture !== ae) && (U !== Q && (r.activeTexture(Q), U = Q), r.bindTexture(P, ae || ye[P]), V.type = P, V.texture = ae);
  }
  function F() {
    const P = W[U];
    P !== void 0 && P.type !== void 0 && (r.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function te() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Z() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ne() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function me() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function se() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ce() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function R() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function re() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function q() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Me() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ge(P) {
    fe.equals(P) === !1 && (r.scissor(P.x, P.y, P.z, P.w), fe.copy(P));
  }
  function ve(P) {
    Ee.equals(P) === !1 && (r.viewport(P.x, P.y, P.z, P.w), Ee.copy(P));
  }
  function pe(P, ae) {
    let Q = u.get(ae);
    Q === void 0 && (Q = /* @__PURE__ */ new WeakMap(), u.set(ae, Q));
    let V = Q.get(P);
    V === void 0 && (V = r.getUniformBlockIndex(ae, P.name), Q.set(P, V));
  }
  function de(P, ae) {
    const V = u.get(ae).get(P);
    h.get(ae) !== V && (r.uniformBlockBinding(ae, V, P.__bindingPointIndex), h.set(ae, V));
  }
  function Ge() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, U = null, W = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, f = !1, v = null, b = null, E = null, y = null, C = null, A = null, B = null, M = new we(0, 0, 0), w = 0, H = !1, J = null, $ = null, D = null, G = null, K = null, fe.set(0, 0, r.canvas.width, r.canvas.height), Ee.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: Le,
    disable: Ze,
    bindFramebuffer: Ne,
    drawBuffers: N,
    useProgram: bt,
    setBlending: Ae,
    setMaterial: $e,
    setFlipSided: Ue,
    setCullFace: Pe,
    setLineWidth: je,
    setPolygonOffset: rt,
    setScissorTest: ht,
    activeTexture: T,
    bindTexture: x,
    unbindTexture: F,
    compressedTexImage2D: te,
    compressedTexImage3D: Z,
    texImage2D: q,
    texImage3D: Me,
    updateUBOMapping: pe,
    uniformBlockBinding: de,
    texStorage2D: R,
    texStorage3D: re,
    texSubImage2D: ne,
    texSubImage3D: me,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: ce,
    scissor: ge,
    viewport: ve,
    reset: Ge
  };
}
function lm(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let _;
  const p = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(T, x) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, x)
    ) : Wi("canvas");
  }
  function b(T, x, F, te) {
    let Z = 1;
    if ((T.width > te || T.height > te) && (Z = te / Math.max(T.width, T.height)), Z < 1 || x === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const ne = x ? Ur : Math.floor, me = ne(Z * T.width), se = ne(Z * T.height);
        _ === void 0 && (_ = v(me, se));
        const ce = F ? v(me, se) : _;
        return ce.width = me, ce.height = se, ce.getContext("2d").drawImage(T, 0, 0, me, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + me + "x" + se + ")."), ce;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."), T;
    return T;
  }
  function E(T) {
    return Ns(T.width) && Ns(T.height);
  }
  function y(T) {
    return o ? !1 : T.wrapS !== Nt || T.wrapT !== Nt || T.minFilter !== ft && T.minFilter !== At;
  }
  function C(T, x) {
    return T.generateMipmaps && x && T.minFilter !== ft && T.minFilter !== At;
  }
  function A(T) {
    r.generateMipmap(T);
  }
  function B(T, x, F, te, Z = !1) {
    if (o === !1) return x;
    if (T !== null) {
      if (r[T] !== void 0) return r[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let ne = x;
    if (x === r.RED && (F === r.FLOAT && (ne = r.R32F), F === r.HALF_FLOAT && (ne = r.R16F), F === r.UNSIGNED_BYTE && (ne = r.R8)), x === r.RED_INTEGER && (F === r.UNSIGNED_BYTE && (ne = r.R8UI), F === r.UNSIGNED_SHORT && (ne = r.R16UI), F === r.UNSIGNED_INT && (ne = r.R32UI), F === r.BYTE && (ne = r.R8I), F === r.SHORT && (ne = r.R16I), F === r.INT && (ne = r.R32I)), x === r.RG && (F === r.FLOAT && (ne = r.RG32F), F === r.HALF_FLOAT && (ne = r.RG16F), F === r.UNSIGNED_BYTE && (ne = r.RG8)), x === r.RGBA) {
      const me = Z ? Cr : Xe.getTransfer(te);
      F === r.FLOAT && (ne = r.RGBA32F), F === r.HALF_FLOAT && (ne = r.RGBA16F), F === r.UNSIGNED_BYTE && (ne = me === Qe ? r.SRGB8_ALPHA8 : r.RGBA8), F === r.UNSIGNED_SHORT_4_4_4_4 && (ne = r.RGBA4), F === r.UNSIGNED_SHORT_5_5_5_1 && (ne = r.RGB5_A1);
    }
    return (ne === r.R16F || ne === r.R32F || ne === r.RG16F || ne === r.RG32F || ne === r.RGBA16F || ne === r.RGBA32F) && e.get("EXT_color_buffer_float"), ne;
  }
  function M(T, x, F) {
    return C(T, F) === !0 || T.isFramebufferTexture && T.minFilter !== ft && T.minFilter !== At ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function w(T) {
    return T === ft || T === Ps || T === Tr ? r.NEAREST : r.LINEAR;
  }
  function H(T) {
    const x = T.target;
    x.removeEventListener("dispose", H), $(x), x.isVideoTexture && g.delete(x);
  }
  function J(T) {
    const x = T.target;
    x.removeEventListener("dispose", J), G(x);
  }
  function $(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0) return;
    const F = T.source, te = p.get(F);
    if (te) {
      const Z = te[x.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && D(T), Object.keys(te).length === 0 && p.delete(F);
    }
    n.remove(T);
  }
  function D(T) {
    const x = n.get(T);
    r.deleteTexture(x.__webglTexture);
    const F = T.source, te = p.get(F);
    delete te[x.__cacheKey], a.memory.textures--;
  }
  function G(T) {
    const x = T.texture, F = n.get(T), te = n.get(x);
    if (te.__webglTexture !== void 0 && (r.deleteTexture(te.__webglTexture), a.memory.textures--), T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(F.__webglFramebuffer[Z]))
          for (let ne = 0; ne < F.__webglFramebuffer[Z].length; ne++) r.deleteFramebuffer(F.__webglFramebuffer[Z][ne]);
        else
          r.deleteFramebuffer(F.__webglFramebuffer[Z]);
        F.__webglDepthbuffer && r.deleteRenderbuffer(F.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(F.__webglFramebuffer))
        for (let Z = 0; Z < F.__webglFramebuffer.length; Z++) r.deleteFramebuffer(F.__webglFramebuffer[Z]);
      else
        r.deleteFramebuffer(F.__webglFramebuffer);
      if (F.__webglDepthbuffer && r.deleteRenderbuffer(F.__webglDepthbuffer), F.__webglMultisampledFramebuffer && r.deleteFramebuffer(F.__webglMultisampledFramebuffer), F.__webglColorRenderbuffer)
        for (let Z = 0; Z < F.__webglColorRenderbuffer.length; Z++)
          F.__webglColorRenderbuffer[Z] && r.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);
      F.__webglDepthRenderbuffer && r.deleteRenderbuffer(F.__webglDepthRenderbuffer);
    }
    if (T.isWebGLMultipleRenderTargets)
      for (let Z = 0, ne = x.length; Z < ne; Z++) {
        const me = n.get(x[Z]);
        me.__webglTexture && (r.deleteTexture(me.__webglTexture), a.memory.textures--), n.remove(x[Z]);
      }
    n.remove(x), n.remove(T);
  }
  let K = 0;
  function j() {
    K = 0;
  }
  function ee() {
    const T = K;
    return T >= c && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + c), K += 1, T;
  }
  function X(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function Y(T, x) {
    const F = n.get(T);
    if (T.isVideoTexture && rt(T), T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
      const te = T.image;
      if (te === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Le(F, T, x);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, F.__webglTexture, r.TEXTURE0 + x);
  }
  function U(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Le(F, T, x);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, F.__webglTexture, r.TEXTURE0 + x);
  }
  function W(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Le(F, T, x);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, F.__webglTexture, r.TEXTURE0 + x);
  }
  function le(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Ze(F, T, x);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, F.__webglTexture, r.TEXTURE0 + x);
  }
  const he = {
    [bi]: r.REPEAT,
    [Nt]: r.CLAMP_TO_EDGE,
    [Rr]: r.MIRRORED_REPEAT
  }, fe = {
    [ft]: r.NEAREST,
    [Ps]: r.NEAREST_MIPMAP_NEAREST,
    [Tr]: r.NEAREST_MIPMAP_LINEAR,
    [At]: r.LINEAR,
    [uc]: r.LINEAR_MIPMAP_NEAREST,
    [Gn]: r.LINEAR_MIPMAP_LINEAR
  }, Ee = {
    [Xl]: r.NEVER,
    [$l]: r.ALWAYS,
    [ql]: r.LESS,
    [Yl]: r.LEQUAL,
    [Kl]: r.EQUAL,
    [Ql]: r.GEQUAL,
    [Jl]: r.GREATER,
    [Zl]: r.NOTEQUAL
  };
  function ze(T, x, F) {
    if (F ? (r.texParameteri(T, r.TEXTURE_WRAP_S, he[x.wrapS]), r.texParameteri(T, r.TEXTURE_WRAP_T, he[x.wrapT]), (T === r.TEXTURE_3D || T === r.TEXTURE_2D_ARRAY) && r.texParameteri(T, r.TEXTURE_WRAP_R, he[x.wrapR]), r.texParameteri(T, r.TEXTURE_MAG_FILTER, fe[x.magFilter]), r.texParameteri(T, r.TEXTURE_MIN_FILTER, fe[x.minFilter])) : (r.texParameteri(T, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(T, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (T === r.TEXTURE_3D || T === r.TEXTURE_2D_ARRAY) && r.texParameteri(T, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (x.wrapS !== Nt || x.wrapT !== Nt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(T, r.TEXTURE_MAG_FILTER, w(x.magFilter)), r.texParameteri(T, r.TEXTURE_MIN_FILTER, w(x.minFilter)), x.minFilter !== ft && x.minFilter !== At && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), x.compareFunction && (r.texParameteri(T, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(T, r.TEXTURE_COMPARE_FUNC, Ee[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (x.magFilter === ft || x.minFilter !== Tr && x.minFilter !== Gn || x.type === cn && e.has("OES_texture_float_linear") === !1 || o === !1 && x.type === Hi && e.has("OES_texture_half_float_linear") === !1) return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) && (r.texParameterf(T, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy);
    }
  }
  function ye(T, x) {
    let F = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", H));
    const te = x.source;
    let Z = p.get(te);
    Z === void 0 && (Z = {}, p.set(te, Z));
    const ne = X(x);
    if (ne !== T.__cacheKey) {
      Z[ne] === void 0 && (Z[ne] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), Z[ne].usedTimes++;
      const me = Z[T.__cacheKey];
      me !== void 0 && (Z[T.__cacheKey].usedTimes--, me.usedTimes === 0 && D(x)), T.__cacheKey = ne, T.__webglTexture = Z[ne].texture;
    }
    return F;
  }
  function Le(T, x, F) {
    let te = r.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (te = r.TEXTURE_2D_ARRAY), x.isData3DTexture && (te = r.TEXTURE_3D);
    const Z = ye(T, x), ne = x.source;
    t.bindTexture(te, T.__webglTexture, r.TEXTURE0 + F);
    const me = n.get(ne);
    if (ne.version !== me.__version || Z === !0) {
      t.activeTexture(r.TEXTURE0 + F);
      const se = Xe.getPrimaries(Xe.workingColorSpace), ce = x.colorSpace === Ot ? null : Xe.getPrimaries(x.colorSpace), R = x.colorSpace === Ot || se === ce ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, R);
      const re = y(x) && E(x.image) === !1;
      let q = b(x.image, re, !1, h);
      q = ht(x, q);
      const Me = E(q) || o, ge = s.convert(x.format, x.colorSpace);
      let ve = s.convert(x.type), pe = B(x.internalFormat, ge, ve, x.colorSpace, x.isVideoTexture);
      ze(te, x, Me);
      let de;
      const Ge = x.mipmaps, P = o && x.isVideoTexture !== !0, ae = me.__version === void 0 || Z === !0, Q = M(x, q, Me);
      if (x.isDepthTexture)
        pe = r.DEPTH_COMPONENT, o ? x.type === cn ? pe = r.DEPTH_COMPONENT32F : x.type === Mn ? pe = r.DEPTH_COMPONENT24 : x.type === Bn ? pe = r.DEPTH24_STENCIL8 : pe = r.DEPTH_COMPONENT16 : x.type === cn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), x.format === kn && pe === r.DEPTH_COMPONENT && x.type !== js && x.type !== Mn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), x.type = Mn, ve = s.convert(x.type)), x.format === _i && pe === r.DEPTH_COMPONENT && (pe = r.DEPTH_STENCIL, x.type !== Bn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), x.type = Bn, ve = s.convert(x.type))), ae && (P ? t.texStorage2D(r.TEXTURE_2D, 1, pe, q.width, q.height) : t.texImage2D(r.TEXTURE_2D, 0, pe, q.width, q.height, 0, ge, ve, null));
      else if (x.isDataTexture)
        if (Ge.length > 0 && Me) {
          P && ae && t.texStorage2D(r.TEXTURE_2D, Q, pe, Ge[0].width, Ge[0].height);
          for (let V = 0, ie = Ge.length; V < ie; V++)
            de = Ge[V], P ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, de.width, de.height, ge, ve, de.data) : t.texImage2D(r.TEXTURE_2D, V, pe, de.width, de.height, 0, ge, ve, de.data);
          x.generateMipmaps = !1;
        } else
          P ? (ae && t.texStorage2D(r.TEXTURE_2D, Q, pe, q.width, q.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, q.width, q.height, ge, ve, q.data)) : t.texImage2D(r.TEXTURE_2D, 0, pe, q.width, q.height, 0, ge, ve, q.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          P && ae && t.texStorage3D(r.TEXTURE_2D_ARRAY, Q, pe, Ge[0].width, Ge[0].height, q.depth);
          for (let V = 0, ie = Ge.length; V < ie; V++)
            de = Ge[V], x.format !== Ft ? ge !== null ? P ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, de.width, de.height, q.depth, ge, de.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, V, pe, de.width, de.height, q.depth, 0, de.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : P ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, de.width, de.height, q.depth, ge, ve, de.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, V, pe, de.width, de.height, q.depth, 0, ge, ve, de.data);
        } else {
          P && ae && t.texStorage2D(r.TEXTURE_2D, Q, pe, Ge[0].width, Ge[0].height);
          for (let V = 0, ie = Ge.length; V < ie; V++)
            de = Ge[V], x.format !== Ft ? ge !== null ? P ? t.compressedTexSubImage2D(r.TEXTURE_2D, V, 0, 0, de.width, de.height, ge, de.data) : t.compressedTexImage2D(r.TEXTURE_2D, V, pe, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : P ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, de.width, de.height, ge, ve, de.data) : t.texImage2D(r.TEXTURE_2D, V, pe, de.width, de.height, 0, ge, ve, de.data);
        }
      else if (x.isDataArrayTexture)
        P ? (ae && t.texStorage3D(r.TEXTURE_2D_ARRAY, Q, pe, q.width, q.height, q.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, q.width, q.height, q.depth, ge, ve, q.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, pe, q.width, q.height, q.depth, 0, ge, ve, q.data);
      else if (x.isData3DTexture)
        P ? (ae && t.texStorage3D(r.TEXTURE_3D, Q, pe, q.width, q.height, q.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, q.width, q.height, q.depth, ge, ve, q.data)) : t.texImage3D(r.TEXTURE_3D, 0, pe, q.width, q.height, q.depth, 0, ge, ve, q.data);
      else if (x.isFramebufferTexture) {
        if (ae)
          if (P)
            t.texStorage2D(r.TEXTURE_2D, Q, pe, q.width, q.height);
          else {
            let V = q.width, ie = q.height;
            for (let _e = 0; _e < Q; _e++)
              t.texImage2D(r.TEXTURE_2D, _e, pe, V, ie, 0, ge, ve, null), V >>= 1, ie >>= 1;
          }
      } else if (Ge.length > 0 && Me) {
        P && ae && t.texStorage2D(r.TEXTURE_2D, Q, pe, Ge[0].width, Ge[0].height);
        for (let V = 0, ie = Ge.length; V < ie; V++)
          de = Ge[V], P ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, ge, ve, de) : t.texImage2D(r.TEXTURE_2D, V, pe, ge, ve, de);
        x.generateMipmaps = !1;
      } else
        P ? (ae && t.texStorage2D(r.TEXTURE_2D, Q, pe, q.width, q.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ge, ve, q)) : t.texImage2D(r.TEXTURE_2D, 0, pe, ge, ve, q);
      C(x, Me) && A(te), me.__version = ne.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function Ze(T, x, F) {
    if (x.image.length !== 6) return;
    const te = ye(T, x), Z = x.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, T.__webglTexture, r.TEXTURE0 + F);
    const ne = n.get(Z);
    if (Z.version !== ne.__version || te === !0) {
      t.activeTexture(r.TEXTURE0 + F);
      const me = Xe.getPrimaries(Xe.workingColorSpace), se = x.colorSpace === Ot ? null : Xe.getPrimaries(x.colorSpace), ce = x.colorSpace === Ot || me === se ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const R = x.isCompressedTexture || x.image[0].isCompressedTexture, re = x.image[0] && x.image[0].isDataTexture, q = [];
      for (let V = 0; V < 6; V++)
        !R && !re ? q[V] = b(x.image[V], !1, !0, l) : q[V] = re ? x.image[V].image : x.image[V], q[V] = ht(x, q[V]);
      const Me = q[0], ge = E(Me) || o, ve = s.convert(x.format, x.colorSpace), pe = s.convert(x.type), de = B(x.internalFormat, ve, pe, x.colorSpace), Ge = o && x.isVideoTexture !== !0, P = ne.__version === void 0 || te === !0;
      let ae = M(x, Me, ge);
      ze(r.TEXTURE_CUBE_MAP, x, ge);
      let Q;
      if (R) {
        Ge && P && t.texStorage2D(r.TEXTURE_CUBE_MAP, ae, de, Me.width, Me.height);
        for (let V = 0; V < 6; V++) {
          Q = q[V].mipmaps;
          for (let ie = 0; ie < Q.length; ie++) {
            const _e = Q[ie];
            x.format !== Ft ? ve !== null ? Ge ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, 0, 0, _e.width, _e.height, ve, _e.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, de, _e.width, _e.height, 0, _e.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, 0, 0, _e.width, _e.height, ve, pe, _e.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, de, _e.width, _e.height, 0, ve, pe, _e.data);
          }
        }
      } else {
        Q = x.mipmaps, Ge && P && (Q.length > 0 && ae++, t.texStorage2D(r.TEXTURE_CUBE_MAP, ae, de, q[0].width, q[0].height));
        for (let V = 0; V < 6; V++)
          if (re) {
            Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, q[V].width, q[V].height, ve, pe, q[V].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, de, q[V].width, q[V].height, 0, ve, pe, q[V].data);
            for (let ie = 0; ie < Q.length; ie++) {
              const He = Q[ie].image[V].image;
              Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, 0, 0, He.width, He.height, ve, pe, He.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, de, He.width, He.height, 0, ve, pe, He.data);
            }
          } else {
            Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, ve, pe, q[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, de, ve, pe, q[V]);
            for (let ie = 0; ie < Q.length; ie++) {
              const _e = Q[ie];
              Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, 0, 0, ve, pe, _e.image[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, de, ve, pe, _e.image[V]);
            }
          }
      }
      C(x, ge) && A(r.TEXTURE_CUBE_MAP), ne.__version = Z.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function Ne(T, x, F, te, Z, ne) {
    const me = s.convert(F.format, F.colorSpace), se = s.convert(F.type), ce = B(F.internalFormat, me, se, F.colorSpace);
    if (!n.get(x).__hasExternalTextures) {
      const re = Math.max(1, x.width >> ne), q = Math.max(1, x.height >> ne);
      Z === r.TEXTURE_3D || Z === r.TEXTURE_2D_ARRAY ? t.texImage3D(Z, ne, ce, re, q, x.depth, 0, me, se, null) : t.texImage2D(Z, ne, ce, re, q, 0, me, se, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, T), je(x) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, te, Z, n.get(F).__webglTexture, 0, Pe(x)) : (Z === r.TEXTURE_2D || Z >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, te, Z, n.get(F).__webglTexture, ne), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function N(T, x, F) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, T), x.depthBuffer && !x.stencilBuffer) {
      let te = o === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (F || je(x)) {
        const Z = x.depthTexture;
        Z && Z.isDepthTexture && (Z.type === cn ? te = r.DEPTH_COMPONENT32F : Z.type === Mn && (te = r.DEPTH_COMPONENT24));
        const ne = Pe(x);
        je(x) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ne, te, x.width, x.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, ne, te, x.width, x.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, te, x.width, x.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, T);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const te = Pe(x);
      F && je(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, te, r.DEPTH24_STENCIL8, x.width, x.height) : je(x) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, te, r.DEPTH24_STENCIL8, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, x.width, x.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, T);
    } else {
      const te = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
      for (let Z = 0; Z < te.length; Z++) {
        const ne = te[Z], me = s.convert(ne.format, ne.colorSpace), se = s.convert(ne.type), ce = B(ne.internalFormat, me, se, ne.colorSpace), R = Pe(x);
        F && je(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, R, ce, x.width, x.height) : je(x) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, R, ce, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, ce, x.width, x.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function bt(T, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), Y(x.depthTexture, 0);
    const te = n.get(x.depthTexture).__webglTexture, Z = Pe(x);
    if (x.depthTexture.format === kn)
      je(x) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, te, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, te, 0);
    else if (x.depthTexture.format === _i)
      je(x) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, te, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function xe(T) {
    const x = n.get(T), F = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      bt(x.__webglFramebuffer, T);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer[te]), x.__webglDepthbuffer[te] = r.createRenderbuffer(), N(x.__webglDepthbuffer[te], T, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = r.createRenderbuffer(), N(x.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Te(T, x, F) {
    const te = n.get(T);
    x !== void 0 && Ne(te.__webglFramebuffer, T, T.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), F !== void 0 && xe(T);
  }
  function Ae(T) {
    const x = T.texture, F = n.get(T), te = n.get(x);
    T.addEventListener("dispose", J), T.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = r.createTexture()), te.__version = x.version, a.memory.textures++);
    const Z = T.isWebGLCubeRenderTarget === !0, ne = T.isWebGLMultipleRenderTargets === !0, me = E(T) || o;
    if (Z) {
      F.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (o && x.mipmaps && x.mipmaps.length > 0) {
          F.__webglFramebuffer[se] = [];
          for (let ce = 0; ce < x.mipmaps.length; ce++)
            F.__webglFramebuffer[se][ce] = r.createFramebuffer();
        } else
          F.__webglFramebuffer[se] = r.createFramebuffer();
    } else {
      if (o && x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let se = 0; se < x.mipmaps.length; se++)
          F.__webglFramebuffer[se] = r.createFramebuffer();
      } else
        F.__webglFramebuffer = r.createFramebuffer();
      if (ne)
        if (i.drawBuffers) {
          const se = T.texture;
          for (let ce = 0, R = se.length; ce < R; ce++) {
            const re = n.get(se[ce]);
            re.__webglTexture === void 0 && (re.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && T.samples > 0 && je(T) === !1) {
        const se = ne ? x : [x];
        F.__webglMultisampledFramebuffer = r.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < se.length; ce++) {
          const R = se[ce];
          F.__webglColorRenderbuffer[ce] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, F.__webglColorRenderbuffer[ce]);
          const re = s.convert(R.format, R.colorSpace), q = s.convert(R.type), Me = B(R.internalFormat, re, q, R.colorSpace, T.isXRRenderTarget === !0), ge = Pe(T);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ge, Me, T.width, T.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ce, r.RENDERBUFFER, F.__webglColorRenderbuffer[ce]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = r.createRenderbuffer(), N(F.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, te.__webglTexture), ze(r.TEXTURE_CUBE_MAP, x, me);
      for (let se = 0; se < 6; se++)
        if (o && x.mipmaps && x.mipmaps.length > 0)
          for (let ce = 0; ce < x.mipmaps.length; ce++)
            Ne(F.__webglFramebuffer[se][ce], T, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + se, ce);
        else
          Ne(F.__webglFramebuffer[se], T, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      C(x, me) && A(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ne) {
      const se = T.texture;
      for (let ce = 0, R = se.length; ce < R; ce++) {
        const re = se[ce], q = n.get(re);
        t.bindTexture(r.TEXTURE_2D, q.__webglTexture), ze(r.TEXTURE_2D, re, me), Ne(F.__webglFramebuffer, T, re, r.COLOR_ATTACHMENT0 + ce, r.TEXTURE_2D, 0), C(re, me) && A(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = r.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (o ? se = T.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, te.__webglTexture), ze(se, x, me), o && x.mipmaps && x.mipmaps.length > 0)
        for (let ce = 0; ce < x.mipmaps.length; ce++)
          Ne(F.__webglFramebuffer[ce], T, x, r.COLOR_ATTACHMENT0, se, ce);
      else
        Ne(F.__webglFramebuffer, T, x, r.COLOR_ATTACHMENT0, se, 0);
      C(x, me) && A(se), t.unbindTexture();
    }
    T.depthBuffer && xe(T);
  }
  function $e(T) {
    const x = E(T) || o, F = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
    for (let te = 0, Z = F.length; te < Z; te++) {
      const ne = F[te];
      if (C(ne, x)) {
        const me = T.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, se = n.get(ne).__webglTexture;
        t.bindTexture(me, se), A(me), t.unbindTexture();
      }
    }
  }
  function Ue(T) {
    if (o && T.samples > 0 && je(T) === !1) {
      const x = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture], F = T.width, te = T.height;
      let Z = r.COLOR_BUFFER_BIT;
      const ne = [], me = T.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, se = n.get(T), ce = T.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let R = 0; R < x.length; R++)
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let R = 0; R < x.length; R++) {
        ne.push(r.COLOR_ATTACHMENT0 + R), T.depthBuffer && ne.push(me);
        const re = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (re === !1 && (T.depthBuffer && (Z |= r.DEPTH_BUFFER_BIT), T.stencilBuffer && (Z |= r.STENCIL_BUFFER_BIT)), ce && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, se.__webglColorRenderbuffer[R]), re === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [me]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [me])), ce) {
          const q = n.get(x[R]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, q, 0);
        }
        r.blitFramebuffer(0, 0, F, te, 0, 0, F, te, Z, r.NEAREST), m && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, ne);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ce)
        for (let R = 0; R < x.length; R++) {
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.RENDERBUFFER, se.__webglColorRenderbuffer[R]);
          const re = n.get(x[R]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.TEXTURE_2D, re, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function Pe(T) {
    return Math.min(u, T.samples);
  }
  function je(T) {
    const x = n.get(T);
    return o && T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function rt(T) {
    const x = a.render.frame;
    g.get(T) !== x && (g.set(T, x), T.update());
  }
  function ht(T, x) {
    const F = T.colorSpace, te = T.format, Z = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || T.format === Is || F !== gt && F !== Ot && (Xe.getTransfer(F) === Qe ? o === !1 ? e.has("EXT_sRGB") === !0 && te === Ft ? (T.format = Is, T.minFilter = At, T.generateMipmaps = !1) : x = yc.sRGBToLinear(x) : (te !== Ft || Z !== yn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  this.allocateTextureUnit = ee, this.resetTextureUnits = j, this.setTexture2D = Y, this.setTexture2DArray = U, this.setTexture3D = W, this.setTextureCube = le, this.rebindTextures = Te, this.setupRenderTarget = Ae, this.updateRenderTargetMipmap = $e, this.updateMultisampleRenderTarget = Ue, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = Ne, this.useMultisampledRTT = je;
}
function hm(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = Ot) {
    let o;
    const c = Xe.getTransfer(a);
    if (s === yn) return r.UNSIGNED_BYTE;
    if (s === fc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === pc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === Dl) return r.BYTE;
    if (s === Ul) return r.SHORT;
    if (s === js) return r.UNSIGNED_SHORT;
    if (s === dc) return r.INT;
    if (s === Mn) return r.UNSIGNED_INT;
    if (s === cn) return r.FLOAT;
    if (s === Hi)
      return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Il) return r.ALPHA;
    if (s === Ft) return r.RGBA;
    if (s === Nl) return r.LUMINANCE;
    if (s === Fl) return r.LUMINANCE_ALPHA;
    if (s === kn) return r.DEPTH_COMPONENT;
    if (s === _i) return r.DEPTH_STENCIL;
    if (s === Is)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === Ol) return r.RED;
    if (s === mc) return r.RED_INTEGER;
    if (s === Bl) return r.RG;
    if (s === gc) return r.RG_INTEGER;
    if (s === bc) return r.RGBA_INTEGER;
    if (s === Vr || s === Wr || s === jr || s === Xr)
      if (c === Qe)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === Vr) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Wr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === jr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Xr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Vr) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Wr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === jr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Xr) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === xa || s === va || s === Ma || s === Sa)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === xa) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === va) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Ma) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Sa) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === kl)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Ea || s === ya)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === Ea) return c === Qe ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === ya) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Ta || s === Aa || s === wa || s === Ra || s === Ca || s === La || s === Pa || s === Da || s === Ua || s === Ia || s === Na || s === Fa || s === Oa || s === Ba)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === Ta) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Aa) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === wa) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ra) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Ca) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === La) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Pa) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Da) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ua) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Ia) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Na) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Fa) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Oa) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Ba) return c === Qe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === qr || s === ka || s === za)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === qr) return c === Qe ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === ka) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === za) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === zl || s === Ga || s === Ha || s === Va)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === qr) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === Ga) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Ha) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Va) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Bn ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class um extends yt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class On extends et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const dm = { type: "move" };
class bs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new On(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new On(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new On(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const p = t.getJointPose(_, n), f = this._getHandJoint(l, _);
          p !== null && (f.matrix.fromArray(p.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = p.radius), f.visible = p !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && d > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(dm)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new On();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class fm extends pt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    if (h = h !== void 0 ? h : kn, h !== kn && h !== _i)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === kn && (n = Mn), n === void 0 && h === _i && (n = Bn), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : ft, this.minFilter = c !== void 0 ? c : ft, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class pm extends jn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, m = null, g = null;
    const _ = t.getContextAttributes();
    let p = null, f = null;
    const v = [], b = [], E = new yt();
    E.layers.enable(1), E.viewport = new Ye();
    const y = new yt();
    y.layers.enable(2), y.viewport = new Ye();
    const C = [E, y], A = new um();
    A.layers.enable(1), A.layers.enable(2);
    let B = null, M = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(U) {
      let W = v[U];
      return W === void 0 && (W = new bs(), v[U] = W), W.getTargetRaySpace();
    }, this.getControllerGrip = function(U) {
      let W = v[U];
      return W === void 0 && (W = new bs(), v[U] = W), W.getGripSpace();
    }, this.getHand = function(U) {
      let W = v[U];
      return W === void 0 && (W = new bs(), v[U] = W), W.getHandSpace();
    };
    function w(U) {
      const W = b.indexOf(U.inputSource);
      if (W === -1)
        return;
      const le = v[W];
      le !== void 0 && (le.update(U.inputSource, U.frame, l || a), le.dispatchEvent({ type: U.type, data: U.inputSource }));
    }
    function H() {
      i.removeEventListener("select", w), i.removeEventListener("selectstart", w), i.removeEventListener("selectend", w), i.removeEventListener("squeeze", w), i.removeEventListener("squeezestart", w), i.removeEventListener("squeezeend", w), i.removeEventListener("end", H), i.removeEventListener("inputsourceschange", J);
      for (let U = 0; U < v.length; U++) {
        const W = b[U];
        W !== null && (b[U] = null, v[U].disconnect(W));
      }
      B = null, M = null, e.setRenderTarget(p), m = null, d = null, u = null, i = null, f = null, Y.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(U) {
      s = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(U) {
      o = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(U) {
      l = U;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(U) {
      if (i = U, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", w), i.addEventListener("selectstart", w), i.addEventListener("selectend", w), i.addEventListener("squeeze", w), i.addEventListener("squeezestart", w), i.addEventListener("squeezeend", w), i.addEventListener("end", H), i.addEventListener("inputsourceschange", J), _.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const W = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(i, t, W), i.updateRenderState({ baseLayer: m }), f = new Hn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Ft,
              type: yn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let W = null, le = null, he = null;
          _.depth && (he = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, W = _.stencil ? _i : kn, le = _.stencil ? Bn : Mn);
          const fe = {
            colorFormat: t.RGBA8,
            depthFormat: he,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(fe), i.updateRenderState({ layers: [d] }), f = new Hn(
            d.textureWidth,
            d.textureHeight,
            {
              format: Ft,
              type: yn,
              depthTexture: new fm(d.textureWidth, d.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, W),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const Ee = e.properties.get(f);
          Ee.__ignoreDepthValues = d.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Y.setContext(i), Y.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function J(U) {
      for (let W = 0; W < U.removed.length; W++) {
        const le = U.removed[W], he = b.indexOf(le);
        he >= 0 && (b[he] = null, v[he].disconnect(le));
      }
      for (let W = 0; W < U.added.length; W++) {
        const le = U.added[W];
        let he = b.indexOf(le);
        if (he === -1) {
          for (let Ee = 0; Ee < v.length; Ee++)
            if (Ee >= b.length) {
              b.push(le), he = Ee;
              break;
            } else if (b[Ee] === null) {
              b[Ee] = le, he = Ee;
              break;
            }
          if (he === -1) break;
        }
        const fe = v[he];
        fe && fe.connect(le);
      }
    }
    const $ = new L(), D = new L();
    function G(U, W, le) {
      $.setFromMatrixPosition(W.matrixWorld), D.setFromMatrixPosition(le.matrixWorld);
      const he = $.distanceTo(D), fe = W.projectionMatrix.elements, Ee = le.projectionMatrix.elements, ze = fe[14] / (fe[10] - 1), ye = fe[14] / (fe[10] + 1), Le = (fe[9] + 1) / fe[5], Ze = (fe[9] - 1) / fe[5], Ne = (fe[8] - 1) / fe[0], N = (Ee[8] + 1) / Ee[0], bt = ze * Ne, xe = ze * N, Te = he / (-Ne + N), Ae = Te * -Ne;
      W.matrixWorld.decompose(U.position, U.quaternion, U.scale), U.translateX(Ae), U.translateZ(Te), U.matrixWorld.compose(U.position, U.quaternion, U.scale), U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const $e = ze + Te, Ue = ye + Te, Pe = bt - Ae, je = xe + (he - Ae), rt = Le * ye / Ue * $e, ht = Ze * ye / Ue * $e;
      U.projectionMatrix.makePerspective(Pe, je, rt, ht, $e, Ue), U.projectionMatrixInverse.copy(U.projectionMatrix).invert();
    }
    function K(U, W) {
      W === null ? U.matrixWorld.copy(U.matrix) : U.matrixWorld.multiplyMatrices(W.matrixWorld, U.matrix), U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    this.updateCamera = function(U) {
      if (i === null) return;
      A.near = y.near = E.near = U.near, A.far = y.far = E.far = U.far, (B !== A.near || M !== A.far) && (i.updateRenderState({
        depthNear: A.near,
        depthFar: A.far
      }), B = A.near, M = A.far);
      const W = U.parent, le = A.cameras;
      K(A, W);
      for (let he = 0; he < le.length; he++)
        K(le[he], W);
      le.length === 2 ? G(A, E, y) : A.projectionMatrix.copy(E.projectionMatrix), j(U, A, W);
    };
    function j(U, W, le) {
      le === null ? U.matrix.copy(W.matrixWorld) : (U.matrix.copy(le.matrixWorld), U.matrix.invert(), U.matrix.multiply(W.matrixWorld)), U.matrix.decompose(U.position, U.quaternion, U.scale), U.updateMatrixWorld(!0), U.projectionMatrix.copy(W.projectionMatrix), U.projectionMatrixInverse.copy(W.projectionMatrixInverse), U.isPerspectiveCamera && (U.fov = vi * 2 * Math.atan(1 / U.projectionMatrix.elements[5]), U.zoom = 1);
    }
    this.getCamera = function() {
      return A;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return c;
    }, this.setFoveation = function(U) {
      c = U, d !== null && (d.fixedFoveation = U), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = U);
    };
    let ee = null;
    function X(U, W) {
      if (h = W.getViewerPose(l || a), g = W, h !== null) {
        const le = h.views;
        m !== null && (e.setRenderTargetFramebuffer(f, m.framebuffer), e.setRenderTarget(f));
        let he = !1;
        le.length !== A.cameras.length && (A.cameras.length = 0, he = !0);
        for (let fe = 0; fe < le.length; fe++) {
          const Ee = le[fe];
          let ze = null;
          if (m !== null)
            ze = m.getViewport(Ee);
          else {
            const Le = u.getViewSubImage(d, Ee);
            ze = Le.viewport, fe === 0 && (e.setRenderTargetTextures(
              f,
              Le.colorTexture,
              d.ignoreDepthValues ? void 0 : Le.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let ye = C[fe];
          ye === void 0 && (ye = new yt(), ye.layers.enable(fe), ye.viewport = new Ye(), C[fe] = ye), ye.matrix.fromArray(Ee.transform.matrix), ye.matrix.decompose(ye.position, ye.quaternion, ye.scale), ye.projectionMatrix.fromArray(Ee.projectionMatrix), ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(), ye.viewport.set(ze.x, ze.y, ze.width, ze.height), fe === 0 && (A.matrix.copy(ye.matrix), A.matrix.decompose(A.position, A.quaternion, A.scale)), he === !0 && A.cameras.push(ye);
        }
      }
      for (let le = 0; le < v.length; le++) {
        const he = b[le], fe = v[le];
        he !== null && fe !== void 0 && fe.update(he, W, l || a);
      }
      ee && ee(U, W), W.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: W }), g = null;
    }
    const Y = new Ic();
    Y.setAnimationLoop(X), this.setAnimationLoop = function(U) {
      ee = U;
    }, this.dispose = function() {
    };
  }
}
function mm(r, e) {
  function t(p, f) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix);
  }
  function n(p, f) {
    f.color.getRGB(p.fogColor.value, Pc(r)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function i(p, f, v, b, E) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(p, f) : f.isMeshToonMaterial ? (s(p, f), u(p, f)) : f.isMeshPhongMaterial ? (s(p, f), h(p, f)) : f.isMeshStandardMaterial ? (s(p, f), d(p, f), f.isMeshPhysicalMaterial && m(p, f, E)) : f.isMeshMatcapMaterial ? (s(p, f), g(p, f)) : f.isMeshDepthMaterial ? s(p, f) : f.isMeshDistanceMaterial ? (s(p, f), _(p, f)) : f.isMeshNormalMaterial ? s(p, f) : f.isLineBasicMaterial ? (a(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? c(p, f, v, b) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.bumpMap && (p.bumpMap.value = f.bumpMap, t(f.bumpMap, p.bumpMapTransform), p.bumpScale.value = f.bumpScale, f.side === wt && (p.bumpScale.value *= -1)), f.normalMap && (p.normalMap.value = f.normalMap, t(f.normalMap, p.normalMapTransform), p.normalScale.value.copy(f.normalScale), f.side === wt && p.normalScale.value.negate()), f.displacementMap && (p.displacementMap.value = f.displacementMap, t(f.displacementMap, p.displacementMapTransform), p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, p.emissiveMapTransform)), f.specularMap && (p.specularMap.value = f.specularMap, t(f.specularMap, p.specularMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const v = e.get(f).envMap;
    if (v && (p.envMap.value = v, p.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const b = r._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * b, t(f.lightMap, p.lightMapTransform);
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, p.aoMapTransform));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, f.map && (p.map.value = f.map, t(f.map, p.mapTransform));
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function c(p, f, v, b) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * v, p.scale.value = b * 0.5, f.map && (p.map.value = f.map, t(f.map, p.uvTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function h(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    p.metalness.value = f.metalness, f.metalnessMap && (p.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, p.metalnessMapTransform)), p.roughness.value = f.roughness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, p.roughnessMapTransform)), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function m(p, f, v) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, p.sheenColorMapTransform)), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, p.clearcoatMapTransform)), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (p.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === wt && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, p.iridescenceMapTransform)), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = v.texture, p.transmissionSamplerSize.value.set(v.width, v.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, p.transmissionMapTransform)), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (p.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (p.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, p.specularColorMapTransform)), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function _(p, f) {
    const v = e.get(f).light;
    p.referencePosition.value.setFromMatrixPosition(v.matrixWorld), p.nearDistance.value = v.shadow.camera.near, p.farDistance.value = v.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function gm(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(v, b) {
    const E = b.program;
    n.uniformBlockBinding(v, E);
  }
  function l(v, b) {
    let E = i[v.id];
    E === void 0 && (g(v), E = h(v), i[v.id] = E, v.addEventListener("dispose", p));
    const y = b.program;
    n.updateUBOMapping(v, y);
    const C = e.render.frame;
    s[v.id] !== C && (d(v), s[v.id] = C);
  }
  function h(v) {
    const b = u();
    v.__bindingPointIndex = b;
    const E = r.createBuffer(), y = v.__size, C = v.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, E), r.bufferData(r.UNIFORM_BUFFER, y, C), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, b, E), E;
  }
  function u() {
    for (let v = 0; v < o; v++)
      if (a.indexOf(v) === -1)
        return a.push(v), v;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(v) {
    const b = i[v.id], E = v.uniforms, y = v.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, b);
    for (let C = 0, A = E.length; C < A; C++) {
      const B = E[C];
      if (m(B, C, y) === !0) {
        const M = B.__offset, w = Array.isArray(B.value) ? B.value : [B.value];
        let H = 0;
        for (let J = 0; J < w.length; J++) {
          const $ = w[J], D = _($);
          typeof $ == "number" ? (B.__data[0] = $, r.bufferSubData(r.UNIFORM_BUFFER, M + H, B.__data)) : $.isMatrix3 ? (B.__data[0] = $.elements[0], B.__data[1] = $.elements[1], B.__data[2] = $.elements[2], B.__data[3] = $.elements[0], B.__data[4] = $.elements[3], B.__data[5] = $.elements[4], B.__data[6] = $.elements[5], B.__data[7] = $.elements[0], B.__data[8] = $.elements[6], B.__data[9] = $.elements[7], B.__data[10] = $.elements[8], B.__data[11] = $.elements[0]) : ($.toArray(B.__data, H), H += D.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, M, B.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function m(v, b, E) {
    const y = v.value;
    if (E[b] === void 0) {
      if (typeof y == "number")
        E[b] = y;
      else {
        const C = Array.isArray(y) ? y : [y], A = [];
        for (let B = 0; B < C.length; B++)
          A.push(C[B].clone());
        E[b] = A;
      }
      return !0;
    } else if (typeof y == "number") {
      if (E[b] !== y)
        return E[b] = y, !0;
    } else {
      const C = Array.isArray(E[b]) ? E[b] : [E[b]], A = Array.isArray(y) ? y : [y];
      for (let B = 0; B < C.length; B++) {
        const M = C[B];
        if (M.equals(A[B]) === !1)
          return M.copy(A[B]), !0;
      }
    }
    return !1;
  }
  function g(v) {
    const b = v.uniforms;
    let E = 0;
    const y = 16;
    let C = 0;
    for (let A = 0, B = b.length; A < B; A++) {
      const M = b[A], w = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, H = Array.isArray(M.value) ? M.value : [M.value];
      for (let J = 0, $ = H.length; J < $; J++) {
        const D = H[J], G = _(D);
        w.boundary += G.boundary, w.storage += G.storage;
      }
      if (M.__data = new Float32Array(w.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = E, A > 0) {
        C = E % y;
        const J = y - C;
        C !== 0 && J - w.boundary < 0 && (E += y - C, M.__offset = E);
      }
      E += w.storage;
    }
    return C = E % y, C > 0 && (E += y - C), v.__size = E, v.__cache = {}, this;
  }
  function _(v) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof v == "number" ? (b.boundary = 4, b.storage = 4) : v.isVector2 ? (b.boundary = 8, b.storage = 8) : v.isVector3 || v.isColor ? (b.boundary = 16, b.storage = 12) : v.isVector4 ? (b.boundary = 16, b.storage = 16) : v.isMatrix3 ? (b.boundary = 48, b.storage = 48) : v.isMatrix4 ? (b.boundary = 64, b.storage = 64) : v.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", v), b;
  }
  function p(v) {
    const b = v.target;
    b.removeEventListener("dispose", p);
    const E = a.indexOf(b.__bindingPointIndex);
    a.splice(E, 1), r.deleteBuffer(i[b.id]), delete i[b.id], delete s[b.id];
  }
  function f() {
    for (const v in i)
      r.deleteBuffer(i[v]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: f
  };
}
class kc {
  constructor(e = {}) {
    const {
      canvas: t = fh(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = a;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, p = null;
    const f = [], v = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = nt, this._useLegacyLights = !1, this.toneMapping = En, this.toneMappingExposure = 1;
    const b = this;
    let E = !1, y = 0, C = 0, A = null, B = -1, M = null;
    const w = new Ye(), H = new Ye();
    let J = null;
    const $ = new we(0);
    let D = 0, G = t.width, K = t.height, j = 1, ee = null, X = null;
    const Y = new Ye(0, 0, G, K), U = new Ye(0, 0, G, K);
    let W = !1;
    const le = new Ks();
    let he = !1, fe = !1, Ee = null;
    const ze = new ke(), ye = new Ce(), Le = new L(), Ze = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ne() {
      return A === null ? j : 1;
    }
    let N = n;
    function bt(S, I) {
      for (let O = 0; O < S.length; O++) {
        const k = S[O], z = t.getContext(k, I);
        if (z !== null) return z;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ws}`), t.addEventListener("webglcontextlost", Ge, !1), t.addEventListener("webglcontextrestored", P, !1), t.addEventListener("webglcontextcreationerror", ae, !1), N === null) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (b.isWebGL1Renderer === !0 && I.shift(), N = bt(I, S), N === null)
          throw bt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let xe, Te, Ae, $e, Ue, Pe, je, rt, ht, T, x, F, te, Z, ne, me, se, ce, R, re, q, Me, ge, ve;
    function pe() {
      xe = new Af(N), Te = new vf(N, xe, e), xe.init(Te), Me = new hm(N, xe, Te), Ae = new cm(N, xe, Te), $e = new Cf(N), Ue = new Kp(), Pe = new lm(N, xe, Ae, Ue, Te, Me, $e), je = new Sf(b), rt = new Tf(b), ht = new Bh(N, Te), ge = new _f(N, xe, ht, Te), T = new wf(N, ht, $e, ge), x = new Uf(N, T, ht, $e), R = new Df(N, Te, Pe), me = new Mf(Ue), F = new qp(b, je, rt, xe, Te, ge, me), te = new mm(b, Ue), Z = new Jp(), ne = new nm(xe, Te), ce = new bf(b, je, rt, Ae, x, d, c), se = new om(b, x, Te), ve = new gm(N, $e, Te, Ae), re = new xf(N, xe, $e, Te), q = new Rf(N, xe, $e, Te), $e.programs = F.programs, b.capabilities = Te, b.extensions = xe, b.properties = Ue, b.renderLists = Z, b.shadowMap = se, b.state = Ae, b.info = $e;
    }
    pe();
    const de = new pm(b, N);
    this.xr = de, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = xe.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = xe.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (j = S, this.setSize(G, K, !1));
    }, this.getSize = function(S) {
      return S.set(G, K);
    }, this.setSize = function(S, I, O = !0) {
      if (de.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = S, K = I, t.width = Math.floor(S * j), t.height = Math.floor(I * j), O === !0 && (t.style.width = S + "px", t.style.height = I + "px"), this.setViewport(0, 0, S, I);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(G * j, K * j).floor();
    }, this.setDrawingBufferSize = function(S, I, O) {
      G = S, K = I, j = O, t.width = Math.floor(S * O), t.height = Math.floor(I * O), this.setViewport(0, 0, S, I);
    }, this.getCurrentViewport = function(S) {
      return S.copy(w);
    }, this.getViewport = function(S) {
      return S.copy(Y);
    }, this.setViewport = function(S, I, O, k) {
      S.isVector4 ? Y.set(S.x, S.y, S.z, S.w) : Y.set(S, I, O, k), Ae.viewport(w.copy(Y).multiplyScalar(j).floor());
    }, this.getScissor = function(S) {
      return S.copy(U);
    }, this.setScissor = function(S, I, O, k) {
      S.isVector4 ? U.set(S.x, S.y, S.z, S.w) : U.set(S, I, O, k), Ae.scissor(H.copy(U).multiplyScalar(j).floor());
    }, this.getScissorTest = function() {
      return W;
    }, this.setScissorTest = function(S) {
      Ae.setScissorTest(W = S);
    }, this.setOpaqueSort = function(S) {
      ee = S;
    }, this.setTransparentSort = function(S) {
      X = S;
    }, this.getClearColor = function(S) {
      return S.copy(ce.getClearColor());
    }, this.setClearColor = function() {
      ce.setClearColor.apply(ce, arguments);
    }, this.getClearAlpha = function() {
      return ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      ce.setClearAlpha.apply(ce, arguments);
    }, this.clear = function(S = !0, I = !0, O = !0) {
      let k = 0;
      if (S) {
        let z = !1;
        if (A !== null) {
          const ue = A.texture.format;
          z = ue === bc || ue === gc || ue === mc;
        }
        if (z) {
          const ue = A.texture.type, be = ue === yn || ue === Mn || ue === js || ue === Bn || ue === fc || ue === pc, Se = ce.getClearColor(), Re = ce.getClearAlpha(), Oe = Se.r, De = Se.g, Ie = Se.b;
          be ? (m[0] = Oe, m[1] = De, m[2] = Ie, m[3] = Re, N.clearBufferuiv(N.COLOR, 0, m)) : (g[0] = Oe, g[1] = De, g[2] = Ie, g[3] = Re, N.clearBufferiv(N.COLOR, 0, g));
        } else
          k |= N.COLOR_BUFFER_BIT;
      }
      I && (k |= N.DEPTH_BUFFER_BIT), O && (k |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N.clear(k);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ge, !1), t.removeEventListener("webglcontextrestored", P, !1), t.removeEventListener("webglcontextcreationerror", ae, !1), Z.dispose(), ne.dispose(), Ue.dispose(), je.dispose(), rt.dispose(), x.dispose(), ge.dispose(), ve.dispose(), F.dispose(), de.dispose(), de.removeEventListener("sessionstart", Dt), de.removeEventListener("sessionend", Je), Ee && (Ee.dispose(), Ee = null), vt.stop();
    };
    function Ge(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), E = !0;
    }
    function P() {
      console.log("THREE.WebGLRenderer: Context Restored."), E = !1;
      const S = $e.autoReset, I = se.enabled, O = se.autoUpdate, k = se.needsUpdate, z = se.type;
      pe(), $e.autoReset = S, se.enabled = I, se.autoUpdate = O, se.needsUpdate = k, se.type = z;
    }
    function ae(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function Q(S) {
      const I = S.target;
      I.removeEventListener("dispose", Q), V(I);
    }
    function V(S) {
      ie(S), Ue.remove(S);
    }
    function ie(S) {
      const I = Ue.get(S).programs;
      I !== void 0 && (I.forEach(function(O) {
        F.releaseProgram(O);
      }), S.isShaderMaterial && F.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, I, O, k, z, ue) {
      I === null && (I = Ze);
      const be = z.isMesh && z.matrixWorld.determinant() < 0, Se = Kc(S, I, O, k, z);
      Ae.setMaterial(k, be);
      let Re = O.index, Oe = 1;
      if (k.wireframe === !0) {
        if (Re = T.getWireframeAttribute(O), Re === void 0) return;
        Oe = 2;
      }
      const De = O.drawRange, Ie = O.attributes.position;
      let it = De.start * Oe, Rt = (De.start + De.count) * Oe;
      ue !== null && (it = Math.max(it, ue.start * Oe), Rt = Math.min(Rt, (ue.start + ue.count) * Oe)), Re !== null ? (it = Math.max(it, 0), Rt = Math.min(Rt, Re.count)) : Ie != null && (it = Math.max(it, 0), Rt = Math.min(Rt, Ie.count));
      const ut = Rt - it;
      if (ut < 0 || ut === 1 / 0) return;
      ge.setup(z, k, Se, O, Re);
      let $t, tt = re;
      if (Re !== null && ($t = ht.get(Re), tt = q, tt.setIndex($t)), z.isMesh)
        k.wireframe === !0 ? (Ae.setLineWidth(k.wireframeLinewidth * Ne()), tt.setMode(N.LINES)) : tt.setMode(N.TRIANGLES);
      else if (z.isLine) {
        let Ve = k.linewidth;
        Ve === void 0 && (Ve = 1), Ae.setLineWidth(Ve * Ne()), z.isLineSegments ? tt.setMode(N.LINES) : z.isLineLoop ? tt.setMode(N.LINE_LOOP) : tt.setMode(N.LINE_STRIP);
      } else z.isPoints ? tt.setMode(N.POINTS) : z.isSprite && tt.setMode(N.TRIANGLES);
      if (z.isInstancedMesh)
        tt.renderInstances(it, ut, z.count);
      else if (O.isInstancedBufferGeometry) {
        const Ve = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, kr = Math.min(O.instanceCount, Ve);
        tt.renderInstances(it, ut, kr);
      } else
        tt.render(it, ut);
    };
    function _e(S, I, O) {
      S.transparent === !0 && S.side === Xt && S.forceSinglePass === !1 ? (S.side = wt, S.needsUpdate = !0, Yi(S, I, O), S.side = un, S.needsUpdate = !0, Yi(S, I, O), S.side = Xt) : Yi(S, I, O);
    }
    this.compile = function(S, I, O = null) {
      O === null && (O = S), p = ne.get(O), p.init(), v.push(p), O.traverseVisible(function(z) {
        z.isLight && z.layers.test(I.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), S !== O && S.traverseVisible(function(z) {
        z.isLight && z.layers.test(I.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), p.setupLights(b._useLegacyLights);
      const k = /* @__PURE__ */ new Set();
      return S.traverse(function(z) {
        const ue = z.material;
        if (ue)
          if (Array.isArray(ue))
            for (let be = 0; be < ue.length; be++) {
              const Se = ue[be];
              _e(Se, O, z), k.add(Se);
            }
          else
            _e(ue, O, z), k.add(ue);
      }), v.pop(), p = null, k;
    }, this.compileAsync = function(S, I, O = null) {
      const k = this.compile(S, I, O);
      return new Promise((z) => {
        function ue() {
          if (k.forEach(function(be) {
            Ue.get(be).currentProgram.isReady() && k.delete(be);
          }), k.size === 0) {
            z(S);
            return;
          }
          setTimeout(ue, 10);
        }
        xe.get("KHR_parallel_shader_compile") !== null ? ue() : setTimeout(ue, 10);
      });
    };
    let He = null;
    function st(S) {
      He && He(S);
    }
    function Dt() {
      vt.stop();
    }
    function Je() {
      vt.start();
    }
    const vt = new Ic();
    vt.setAnimationLoop(st), typeof self < "u" && vt.setContext(self), this.setAnimationLoop = function(S) {
      He = S, de.setAnimationLoop(S), S === null ? vt.stop() : vt.start();
    }, de.addEventListener("sessionstart", Dt), de.addEventListener("sessionend", Je), this.render = function(S, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (E === !0) return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(I), I = de.getCamera()), S.isScene === !0 && S.onBeforeRender(b, S, I, A), p = ne.get(S, v.length), p.init(), v.push(p), ze.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), le.setFromProjectionMatrix(ze), fe = this.localClippingEnabled, he = me.init(this.clippingPlanes, fe), _ = Z.get(S, f.length), _.init(), f.push(_), Wt(S, I, 0, b.sortObjects), _.finish(), b.sortObjects === !0 && _.sort(ee, X), this.info.render.frame++, he === !0 && me.beginShadows();
      const O = p.state.shadowsArray;
      if (se.render(O, S, I), he === !0 && me.endShadows(), this.info.autoReset === !0 && this.info.reset(), ce.render(_, S), p.setupLights(b._useLegacyLights), I.isArrayCamera) {
        const k = I.cameras;
        for (let z = 0, ue = k.length; z < ue; z++) {
          const be = k[z];
          aa(_, S, be, be.viewport);
        }
      } else
        aa(_, S, I);
      A !== null && (Pe.updateMultisampleRenderTarget(A), Pe.updateRenderTargetMipmap(A)), S.isScene === !0 && S.onAfterRender(b, S, I), ge.resetDefaultState(), B = -1, M = null, v.pop(), v.length > 0 ? p = v[v.length - 1] : p = null, f.pop(), f.length > 0 ? _ = f[f.length - 1] : _ = null;
    };
    function Wt(S, I, O, k) {
      if (S.visible === !1) return;
      if (S.layers.test(I.layers)) {
        if (S.isGroup)
          O = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(I);
        else if (S.isLight)
          p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || le.intersectsSprite(S)) {
            k && Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ze);
            const be = x.update(S), Se = S.material;
            Se.visible && _.push(S, be, Se, O, Le.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || le.intersectsObject(S))) {
          const be = x.update(S), Se = S.material;
          if (k && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Le.copy(S.boundingSphere.center)) : (be.boundingSphere === null && be.computeBoundingSphere(), Le.copy(be.boundingSphere.center)), Le.applyMatrix4(S.matrixWorld).applyMatrix4(ze)), Array.isArray(Se)) {
            const Re = be.groups;
            for (let Oe = 0, De = Re.length; Oe < De; Oe++) {
              const Ie = Re[Oe], it = Se[Ie.materialIndex];
              it && it.visible && _.push(S, be, it, O, Le.z, Ie);
            }
          } else Se.visible && _.push(S, be, Se, O, Le.z, null);
        }
      }
      const ue = S.children;
      for (let be = 0, Se = ue.length; be < Se; be++)
        Wt(ue[be], I, O, k);
    }
    function aa(S, I, O, k) {
      const z = S.opaque, ue = S.transmissive, be = S.transparent;
      p.setupLightsView(O), he === !0 && me.setGlobalState(b.clippingPlanes, O), ue.length > 0 && qc(z, ue, I, O), k && Ae.viewport(w.copy(k)), z.length > 0 && Ki(z, I, O), ue.length > 0 && Ki(ue, I, O), be.length > 0 && Ki(be, I, O), Ae.buffers.depth.setTest(!0), Ae.buffers.depth.setMask(!0), Ae.buffers.color.setMask(!0), Ae.setPolygonOffset(!1);
    }
    function qc(S, I, O, k) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
        return;
      const ue = Te.isWebGL2;
      Ee === null && (Ee = new Hn(1, 1, {
        generateMipmaps: !0,
        type: xe.has("EXT_color_buffer_half_float") ? Hi : yn,
        minFilter: Gn,
        samples: ue ? 4 : 0
      })), b.getDrawingBufferSize(ye), ue ? Ee.setSize(ye.x, ye.y) : Ee.setSize(Ur(ye.x), Ur(ye.y));
      const be = b.getRenderTarget();
      b.setRenderTarget(Ee), b.getClearColor($), D = b.getClearAlpha(), D < 1 && b.setClearColor(16777215, 0.5), b.clear();
      const Se = b.toneMapping;
      b.toneMapping = En, Ki(S, O, k), Pe.updateMultisampleRenderTarget(Ee), Pe.updateRenderTargetMipmap(Ee);
      let Re = !1;
      for (let Oe = 0, De = I.length; Oe < De; Oe++) {
        const Ie = I[Oe], it = Ie.object, Rt = Ie.geometry, ut = Ie.material, $t = Ie.group;
        if (ut.side === Xt && it.layers.test(k.layers)) {
          const tt = ut.side;
          ut.side = wt, ut.needsUpdate = !0, oa(it, O, k, Rt, ut, $t), ut.side = tt, ut.needsUpdate = !0, Re = !0;
        }
      }
      Re === !0 && (Pe.updateMultisampleRenderTarget(Ee), Pe.updateRenderTargetMipmap(Ee)), b.setRenderTarget(be), b.setClearColor($, D), b.toneMapping = Se;
    }
    function Ki(S, I, O) {
      const k = I.isScene === !0 ? I.overrideMaterial : null;
      for (let z = 0, ue = S.length; z < ue; z++) {
        const be = S[z], Se = be.object, Re = be.geometry, Oe = k === null ? be.material : k, De = be.group;
        Se.layers.test(O.layers) && oa(Se, I, O, Re, Oe, De);
      }
    }
    function oa(S, I, O, k, z, ue) {
      S.onBeforeRender(b, I, O, k, z, ue), S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), z.onBeforeRender(b, I, O, k, S, ue), z.transparent === !0 && z.side === Xt && z.forceSinglePass === !1 ? (z.side = wt, z.needsUpdate = !0, b.renderBufferDirect(O, I, k, z, S, ue), z.side = un, z.needsUpdate = !0, b.renderBufferDirect(O, I, k, z, S, ue), z.side = Xt) : b.renderBufferDirect(O, I, k, z, S, ue), S.onAfterRender(b, I, O, k, z, ue);
    }
    function Yi(S, I, O) {
      I.isScene !== !0 && (I = Ze);
      const k = Ue.get(S), z = p.state.lights, ue = p.state.shadowsArray, be = z.state.version, Se = F.getParameters(S, z.state, ue, I, O), Re = F.getProgramCacheKey(Se);
      let Oe = k.programs;
      k.environment = S.isMeshStandardMaterial ? I.environment : null, k.fog = I.fog, k.envMap = (S.isMeshStandardMaterial ? rt : je).get(S.envMap || k.environment), Oe === void 0 && (S.addEventListener("dispose", Q), Oe = /* @__PURE__ */ new Map(), k.programs = Oe);
      let De = Oe.get(Re);
      if (De !== void 0) {
        if (k.currentProgram === De && k.lightsStateVersion === be)
          return la(S, Se), De;
      } else
        Se.uniforms = F.getUniforms(S), S.onBuild(O, Se, b), S.onBeforeCompile(Se, b), De = F.acquireProgram(Se, Re), Oe.set(Re, De), k.uniforms = Se.uniforms;
      const Ie = k.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ie.clippingPlanes = me.uniform), la(S, Se), k.needsLights = Jc(S), k.lightsStateVersion = be, k.needsLights && (Ie.ambientLightColor.value = z.state.ambient, Ie.lightProbe.value = z.state.probe, Ie.directionalLights.value = z.state.directional, Ie.directionalLightShadows.value = z.state.directionalShadow, Ie.spotLights.value = z.state.spot, Ie.spotLightShadows.value = z.state.spotShadow, Ie.rectAreaLights.value = z.state.rectArea, Ie.ltc_1.value = z.state.rectAreaLTC1, Ie.ltc_2.value = z.state.rectAreaLTC2, Ie.pointLights.value = z.state.point, Ie.pointLightShadows.value = z.state.pointShadow, Ie.hemisphereLights.value = z.state.hemi, Ie.directionalShadowMap.value = z.state.directionalShadowMap, Ie.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Ie.spotShadowMap.value = z.state.spotShadowMap, Ie.spotLightMatrix.value = z.state.spotLightMatrix, Ie.spotLightMap.value = z.state.spotLightMap, Ie.pointShadowMap.value = z.state.pointShadowMap, Ie.pointShadowMatrix.value = z.state.pointShadowMatrix), k.currentProgram = De, k.uniformsList = null, De;
    }
    function ca(S) {
      if (S.uniformsList === null) {
        const I = S.currentProgram.getUniforms();
        S.uniformsList = Ar.seqWithValue(I.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function la(S, I) {
      const O = Ue.get(S);
      O.outputColorSpace = I.outputColorSpace, O.instancing = I.instancing, O.instancingColor = I.instancingColor, O.skinning = I.skinning, O.morphTargets = I.morphTargets, O.morphNormals = I.morphNormals, O.morphColors = I.morphColors, O.morphTargetsCount = I.morphTargetsCount, O.numClippingPlanes = I.numClippingPlanes, O.numIntersection = I.numClipIntersection, O.vertexAlphas = I.vertexAlphas, O.vertexTangents = I.vertexTangents, O.toneMapping = I.toneMapping;
    }
    function Kc(S, I, O, k, z) {
      I.isScene !== !0 && (I = Ze), Pe.resetTextureUnits();
      const ue = I.fog, be = k.isMeshStandardMaterial ? I.environment : null, Se = A === null ? b.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : gt, Re = (k.isMeshStandardMaterial ? rt : je).get(k.envMap || be), Oe = k.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, De = !!O.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Ie = !!O.morphAttributes.position, it = !!O.morphAttributes.normal, Rt = !!O.morphAttributes.color;
      let ut = En;
      k.toneMapped && (A === null || A.isXRRenderTarget === !0) && (ut = b.toneMapping);
      const $t = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, tt = $t !== void 0 ? $t.length : 0, Ve = Ue.get(k), kr = p.state.lights;
      if (he === !0 && (fe === !0 || S !== M)) {
        const Ct = S === M && k.id === B;
        me.setState(k, S, Ct);
      }
      let at = !1;
      k.version === Ve.__version ? (Ve.needsLights && Ve.lightsStateVersion !== kr.state.version || Ve.outputColorSpace !== Se || z.isInstancedMesh && Ve.instancing === !1 || !z.isInstancedMesh && Ve.instancing === !0 || z.isSkinnedMesh && Ve.skinning === !1 || !z.isSkinnedMesh && Ve.skinning === !0 || z.isInstancedMesh && Ve.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && Ve.instancingColor === !1 && z.instanceColor !== null || Ve.envMap !== Re || k.fog === !0 && Ve.fog !== ue || Ve.numClippingPlanes !== void 0 && (Ve.numClippingPlanes !== me.numPlanes || Ve.numIntersection !== me.numIntersection) || Ve.vertexAlphas !== Oe || Ve.vertexTangents !== De || Ve.morphTargets !== Ie || Ve.morphNormals !== it || Ve.morphColors !== Rt || Ve.toneMapping !== ut || Te.isWebGL2 === !0 && Ve.morphTargetsCount !== tt) && (at = !0) : (at = !0, Ve.__version = k.version);
      let An = Ve.currentProgram;
      at === !0 && (An = Yi(k, I, z));
      let ha = !1, Ci = !1, zr = !1;
      const Mt = An.getUniforms(), wn = Ve.uniforms;
      if (Ae.useProgram(An.program) && (ha = !0, Ci = !0, zr = !0), k.id !== B && (B = k.id, Ci = !0), ha || M !== S) {
        Mt.setValue(N, "projectionMatrix", S.projectionMatrix), Mt.setValue(N, "viewMatrix", S.matrixWorldInverse);
        const Ct = Mt.map.cameraPosition;
        Ct !== void 0 && Ct.setValue(N, Le.setFromMatrixPosition(S.matrixWorld)), Te.logarithmicDepthBuffer && Mt.setValue(
          N,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && Mt.setValue(N, "isOrthographic", S.isOrthographicCamera === !0), M !== S && (M = S, Ci = !0, zr = !0);
      }
      if (z.isSkinnedMesh) {
        Mt.setOptional(N, z, "bindMatrix"), Mt.setOptional(N, z, "bindMatrixInverse");
        const Ct = z.skeleton;
        Ct && (Te.floatVertexTextures ? (Ct.boneTexture === null && Ct.computeBoneTexture(), Mt.setValue(N, "boneTexture", Ct.boneTexture, Pe), Mt.setValue(N, "boneTextureSize", Ct.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Gr = O.morphAttributes;
      if ((Gr.position !== void 0 || Gr.normal !== void 0 || Gr.color !== void 0 && Te.isWebGL2 === !0) && R.update(z, O, An), (Ci || Ve.receiveShadow !== z.receiveShadow) && (Ve.receiveShadow = z.receiveShadow, Mt.setValue(N, "receiveShadow", z.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (wn.envMap.value = Re, wn.flipEnvMap.value = Re.isCubeTexture && Re.isRenderTargetTexture === !1 ? -1 : 1), Ci && (Mt.setValue(N, "toneMappingExposure", b.toneMappingExposure), Ve.needsLights && Yc(wn, zr), ue && k.fog === !0 && te.refreshFogUniforms(wn, ue), te.refreshMaterialUniforms(wn, k, j, K, Ee), Ar.upload(N, ca(Ve), wn, Pe)), k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (Ar.upload(N, ca(Ve), wn, Pe), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && Mt.setValue(N, "center", z.center), Mt.setValue(N, "modelViewMatrix", z.modelViewMatrix), Mt.setValue(N, "normalMatrix", z.normalMatrix), Mt.setValue(N, "modelMatrix", z.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const Ct = k.uniformsGroups;
        for (let Hr = 0, Zc = Ct.length; Hr < Zc; Hr++)
          if (Te.isWebGL2) {
            const ua = Ct[Hr];
            ve.update(ua, An), ve.bind(ua, An);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return An;
    }
    function Yc(S, I) {
      S.ambientLightColor.needsUpdate = I, S.lightProbe.needsUpdate = I, S.directionalLights.needsUpdate = I, S.directionalLightShadows.needsUpdate = I, S.pointLights.needsUpdate = I, S.pointLightShadows.needsUpdate = I, S.spotLights.needsUpdate = I, S.spotLightShadows.needsUpdate = I, S.rectAreaLights.needsUpdate = I, S.hemisphereLights.needsUpdate = I;
    }
    function Jc(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return y;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return A;
    }, this.setRenderTargetTextures = function(S, I, O) {
      Ue.get(S.texture).__webglTexture = I, Ue.get(S.depthTexture).__webglTexture = O;
      const k = Ue.get(S);
      k.__hasExternalTextures = !0, k.__hasExternalTextures && (k.__autoAllocateDepthBuffer = O === void 0, k.__autoAllocateDepthBuffer || xe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, I) {
      const O = Ue.get(S);
      O.__webglFramebuffer = I, O.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(S, I = 0, O = 0) {
      A = S, y = I, C = O;
      let k = !0, z = null, ue = !1, be = !1;
      if (S) {
        const Re = Ue.get(S);
        Re.__useDefaultFramebuffer !== void 0 ? (Ae.bindFramebuffer(N.FRAMEBUFFER, null), k = !1) : Re.__webglFramebuffer === void 0 ? Pe.setupRenderTarget(S) : Re.__hasExternalTextures && Pe.rebindTextures(S, Ue.get(S.texture).__webglTexture, Ue.get(S.depthTexture).__webglTexture);
        const Oe = S.texture;
        (Oe.isData3DTexture || Oe.isDataArrayTexture || Oe.isCompressedArrayTexture) && (be = !0);
        const De = Ue.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(De[I]) ? z = De[I][O] : z = De[I], ue = !0) : Te.isWebGL2 && S.samples > 0 && Pe.useMultisampledRTT(S) === !1 ? z = Ue.get(S).__webglMultisampledFramebuffer : Array.isArray(De) ? z = De[O] : z = De, w.copy(S.viewport), H.copy(S.scissor), J = S.scissorTest;
      } else
        w.copy(Y).multiplyScalar(j).floor(), H.copy(U).multiplyScalar(j).floor(), J = W;
      if (Ae.bindFramebuffer(N.FRAMEBUFFER, z) && Te.drawBuffers && k && Ae.drawBuffers(S, z), Ae.viewport(w), Ae.scissor(H), Ae.setScissorTest(J), ue) {
        const Re = Ue.get(S.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + I, Re.__webglTexture, O);
      } else if (be) {
        const Re = Ue.get(S.texture), Oe = I || 0;
        N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, Re.__webglTexture, O || 0, Oe);
      }
      B = -1;
    }, this.readRenderTargetPixels = function(S, I, O, k, z, ue, be) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Se = Ue.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && be !== void 0 && (Se = Se[be]), Se) {
        Ae.bindFramebuffer(N.FRAMEBUFFER, Se);
        try {
          const Re = S.texture, Oe = Re.format, De = Re.type;
          if (Oe !== Ft && Me.convert(Oe) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ie = De === Hi && (xe.has("EXT_color_buffer_half_float") || Te.isWebGL2 && xe.has("EXT_color_buffer_float"));
          if (De !== yn && Me.convert(De) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(De === cn && (Te.isWebGL2 || xe.has("OES_texture_float") || xe.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ie) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= S.width - k && O >= 0 && O <= S.height - z && N.readPixels(I, O, k, z, Me.convert(Oe), Me.convert(De), ue);
        } finally {
          const Re = A !== null ? Ue.get(A).__webglFramebuffer : null;
          Ae.bindFramebuffer(N.FRAMEBUFFER, Re);
        }
      }
    }, this.copyFramebufferToTexture = function(S, I, O = 0) {
      const k = Math.pow(2, -O), z = Math.floor(I.image.width * k), ue = Math.floor(I.image.height * k);
      Pe.setTexture2D(I, 0), N.copyTexSubImage2D(N.TEXTURE_2D, O, 0, 0, S.x, S.y, z, ue), Ae.unbindTexture();
    }, this.copyTextureToTexture = function(S, I, O, k = 0) {
      const z = I.image.width, ue = I.image.height, be = Me.convert(O.format), Se = Me.convert(O.type);
      Pe.setTexture2D(O, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, O.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, O.unpackAlignment), I.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, k, S.x, S.y, z, ue, be, Se, I.image.data) : I.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, k, S.x, S.y, I.mipmaps[0].width, I.mipmaps[0].height, be, I.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, k, S.x, S.y, be, Se, I.image), k === 0 && O.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), Ae.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, I, O, k, z = 0) {
      if (b.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ue = S.max.x - S.min.x + 1, be = S.max.y - S.min.y + 1, Se = S.max.z - S.min.z + 1, Re = Me.convert(k.format), Oe = Me.convert(k.type);
      let De;
      if (k.isData3DTexture)
        Pe.setTexture3D(k, 0), De = N.TEXTURE_3D;
      else if (k.isDataArrayTexture)
        Pe.setTexture2DArray(k, 0), De = N.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, k.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, k.unpackAlignment);
      const Ie = N.getParameter(N.UNPACK_ROW_LENGTH), it = N.getParameter(N.UNPACK_IMAGE_HEIGHT), Rt = N.getParameter(N.UNPACK_SKIP_PIXELS), ut = N.getParameter(N.UNPACK_SKIP_ROWS), $t = N.getParameter(N.UNPACK_SKIP_IMAGES), tt = O.isCompressedTexture ? O.mipmaps[0] : O.image;
      N.pixelStorei(N.UNPACK_ROW_LENGTH, tt.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, tt.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, S.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, S.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, S.min.z), O.isDataTexture || O.isData3DTexture ? N.texSubImage3D(De, z, I.x, I.y, I.z, ue, be, Se, Re, Oe, tt.data) : O.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(De, z, I.x, I.y, I.z, ue, be, Se, Re, tt.data)) : N.texSubImage3D(De, z, I.x, I.y, I.z, ue, be, Se, Re, Oe, tt), N.pixelStorei(N.UNPACK_ROW_LENGTH, Ie), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, it), N.pixelStorei(N.UNPACK_SKIP_PIXELS, Rt), N.pixelStorei(N.UNPACK_SKIP_ROWS, ut), N.pixelStorei(N.UNPACK_SKIP_IMAGES, $t), z === 0 && k.generateMipmaps && N.generateMipmap(De), Ae.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? Pe.setTextureCube(S, 0) : S.isData3DTexture ? Pe.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? Pe.setTexture2DArray(S, 0) : Pe.setTexture2D(S, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      y = 0, C = 0, A = null, Ae.reset(), ge.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return ln;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Xs ? "display-p3" : "srgb", t.unpackColorSpace = Xe.workingColorSpace === Nr ? "display-p3" : "srgb";
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === nt ? zn : xc;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === zn ? nt : gt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class bm extends kc {
}
bm.prototype.isWebGL1Renderer = !0;
class _m extends et {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class xm {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Us, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Vt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const St = /* @__PURE__ */ new L();
class Qs {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = qt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array), s = Ke(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new Tt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Qs(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const No = /* @__PURE__ */ new L(), Fo = /* @__PURE__ */ new Ye(), Oo = /* @__PURE__ */ new Ye(), vm = /* @__PURE__ */ new L(), Bo = /* @__PURE__ */ new ke(), _r = /* @__PURE__ */ new L(), _s = /* @__PURE__ */ new Jt(), ko = /* @__PURE__ */ new ke(), xs = /* @__PURE__ */ new ji();
class Mm extends Bt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = _a, this.bindMatrix = new ke(), this.bindMatrixInverse = new ke(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new dn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, _r), this.boundingBox.expandByPoint(_r);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Jt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, _r), this.boundingSphere.expandByPoint(_r);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), _s.copy(this.boundingSphere), _s.applyMatrix4(i), e.ray.intersectsSphere(_s) !== !1 && (ko.copy(i).invert(), xs.copy(e.ray).applyMatrix4(ko), !(this.boundingBox !== null && xs.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, xs)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ye(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === _a ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Pl ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Fo.fromBufferAttribute(i.attributes.skinIndex, e), Oo.fromBufferAttribute(i.attributes.skinWeight, e), No.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Oo.getComponent(s);
      if (a !== 0) {
        const o = Fo.getComponent(s);
        Bo.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(vm.copy(No).applyMatrix4(Bo), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class zc extends et {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Sm extends pt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = ft, h = ft, u, d) {
    super(null, a, o, c, l, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const zo = /* @__PURE__ */ new ke(), Em = /* @__PURE__ */ new ke();
class $s {
  constructor(e = [], t = []) {
    this.uuid = Vt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new ke());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new ke();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : Em;
      zo.multiplyMatrices(o, t[s]), zo.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new $s(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Mc(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Sm(t, e, e, Ft, cn);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new zc()), this.bones.push(a), this.boneInverses.push(new ke().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Os extends Tt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const hi = /* @__PURE__ */ new ke(), Go = /* @__PURE__ */ new ke(), xr = [], Ho = /* @__PURE__ */ new dn(), ym = /* @__PURE__ */ new ke(), Ii = /* @__PURE__ */ new Bt(), Ni = /* @__PURE__ */ new Jt();
class Tm extends Bt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Os(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, ym);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new dn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, hi), Ho.copy(e.boundingBox).applyMatrix4(hi), this.boundingBox.union(Ho);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Jt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, hi), Ni.copy(e.boundingSphere).applyMatrix4(hi), this.boundingSphere.union(Ni);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Ii.geometry = this.geometry, Ii.material = this.material, Ii.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ni.copy(this.boundingSphere), Ni.applyMatrix4(n), e.ray.intersectsSphere(Ni) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, hi), Go.multiplyMatrices(n, hi), Ii.matrixWorld = Go, Ii.raycast(e, xr);
        for (let a = 0, o = xr.length; a < o; a++) {
          const c = xr[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        xr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Os(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Gc extends Kt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new we(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Vo = /* @__PURE__ */ new L(), Wo = /* @__PURE__ */ new L(), jo = /* @__PURE__ */ new ke(), vs = /* @__PURE__ */ new ji(), vr = /* @__PURE__ */ new Jt();
class ea extends et {
  constructor(e = new Zt(), t = new Gc()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        Vo.fromBufferAttribute(t, i - 1), Wo.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Vo.distanceTo(Wo);
      e.setAttribute("lineDistance", new hn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), vr.copy(n.boundingSphere), vr.applyMatrix4(i), vr.radius += s, e.ray.intersectsSphere(vr) === !1) return;
    jo.copy(i).invert(), vs.copy(e.ray).applyMatrix4(jo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new L(), h = new L(), u = new L(), d = new L(), m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const f = Math.max(0, a.start), v = Math.min(g.count, a.start + a.count);
      for (let b = f, E = v - 1; b < E; b += m) {
        const y = g.getX(b), C = g.getX(b + 1);
        if (l.fromBufferAttribute(p, y), h.fromBufferAttribute(p, C), vs.distanceSqToSegment(l, h, d, u) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const B = e.ray.origin.distanceTo(d);
        B < e.near || B > e.far || t.push({
          distance: B,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: b,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const f = Math.max(0, a.start), v = Math.min(p.count, a.start + a.count);
      for (let b = f, E = v - 1; b < E; b += m) {
        if (l.fromBufferAttribute(p, b), h.fromBufferAttribute(p, b + 1), vs.distanceSqToSegment(l, h, d, u) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(d);
        C < e.near || C > e.far || t.push({
          distance: C,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: b,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const Xo = /* @__PURE__ */ new L(), qo = /* @__PURE__ */ new L();
class Am extends ea {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Xo.fromBufferAttribute(t, i), qo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Xo.distanceTo(qo);
      e.setAttribute("lineDistance", new hn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class wm extends ea {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class ta extends Kt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new we(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Ko = /* @__PURE__ */ new ke(), Bs = /* @__PURE__ */ new ji(), Mr = /* @__PURE__ */ new Jt(), Sr = /* @__PURE__ */ new L();
class ks extends et {
  constructor(e = new Zt(), t = new ta()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Mr.copy(n.boundingSphere), Mr.applyMatrix4(i), Mr.radius += s, e.ray.intersectsSphere(Mr) === !1) return;
    Ko.copy(i).invert(), Bs.copy(e.ray).applyMatrix4(Ko);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
      for (let g = d, _ = m; g < _; g++) {
        const p = l.getX(g);
        Sr.fromBufferAttribute(u, p), Yo(Sr, p, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = m; g < _; g++)
        Sr.fromBufferAttribute(u, g), Yo(Sr, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Yo(r, e, t, n, i, s, a) {
  const o = Bs.distanceSqToPoint(r);
  if (o < t) {
    const c = new L();
    Bs.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a
    });
  }
}
class Rm extends pt {
  constructor(e, t, n, i, s, a, o, c, l) {
    super(e, t, n, i, s, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class na extends Kt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new we(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new we(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = vc, this.normalScale = new Ce(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Tn extends na {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ce(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return mt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new we(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new we(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new we(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function Er(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Cm(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Lm(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Jo(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = r[o + c];
  }
  return i;
}
function Hc(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
      while (s !== void 0);
}
class qi {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Pm extends qi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Wa,
      endingEnd: Wa
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case ja:
          s = e, o = 2 * t - n;
          break;
        case Xa:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case ja:
          a = e, c = 2 * n - t;
          break;
        case Xa:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), _ = g * g, p = _ * g, f = -d * p + 2 * d * _ - d * g, v = (1 + d) * p + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, b = (-1 - m) * p + (1.5 + m) * _ + 0.5 * g, E = m * p - m * _;
    for (let y = 0; y !== o; ++y)
      s[y] = f * a[h + y] + v * a[l + y] + b * a[c + y] + E * a[u + y];
    return s;
  }
}
class Dm extends qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      s[d] = a[l + d] * u + a[c + d] * h;
    return s;
  }
}
class Um extends qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Qt {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Er(t, this.TimeBufferType), this.values = Er(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Er(e.times, Array),
        values: Er(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Um(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Dm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Pm(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Vi:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case xi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Kr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Vi;
      case this.InterpolantFactoryMethodLinear:
        return xi;
      case this.InterpolantFactoryMethodSmooth:
        return Kr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), e = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), e = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && Cm(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Kr, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o], h = e[o + 1];
      if (l !== h && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const u = o * n, d = u - n, m = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[d + g] || _ !== t[m + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let m = 0; m !== n; ++m)
            t[d + m] = t[u + m];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, c = a * n, l = 0; l !== n; ++l)
        t[c + l] = t[o + l];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Qt.prototype.TimeBufferType = Float32Array;
Qt.prototype.ValueBufferType = Float32Array;
Qt.prototype.DefaultInterpolation = xi;
class Ai extends Qt {
}
Ai.prototype.ValueTypeName = "bool";
Ai.prototype.ValueBufferType = Array;
Ai.prototype.DefaultInterpolation = Vi;
Ai.prototype.InterpolantFactoryMethodLinear = void 0;
Ai.prototype.InterpolantFactoryMethodSmooth = void 0;
class Vc extends Qt {
}
Vc.prototype.ValueTypeName = "color";
class Si extends Qt {
}
Si.prototype.ValueTypeName = "number";
class Im extends qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4)
      Yt.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class Wn extends Qt {
  InterpolantFactoryMethodLinear(e) {
    return new Im(this.times, this.values, this.getValueSize(), e);
  }
}
Wn.prototype.ValueTypeName = "quaternion";
Wn.prototype.DefaultInterpolation = xi;
Wn.prototype.InterpolantFactoryMethodSmooth = void 0;
class wi extends Qt {
}
wi.prototype.ValueTypeName = "string";
wi.prototype.ValueBufferType = Array;
wi.prototype.DefaultInterpolation = Vi;
wi.prototype.InterpolantFactoryMethodLinear = void 0;
wi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ei extends Qt {
}
Ei.prototype.ValueTypeName = "vector";
class Nm {
  constructor(e, t = -1, n, i = Gl) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Vt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(Om(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(Qt.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let c = [], l = [];
      c.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), l.push(0, 1, 0);
      const h = Lm(c);
      c = Jo(c, 1, h), l = Jo(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(
        new Si(
          ".morphTargetInfluences[" + t[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = l.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, m, g, _) {
      if (m.length !== 0) {
        const p = [], f = [];
        Hc(m, p, f, g), p.length !== 0 && _.push(new u(d, p, f));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let _ = 0; _ < d[g].morphTargets.length; _++)
                m[d[g].morphTargets[_]] = -1;
          for (const _ in m) {
            const p = [], f = [];
            for (let v = 0; v !== d[g].morphTargets.length; ++v) {
              const b = d[g];
              p.push(b.time), f.push(b.morphTarget === _ ? 1 : 0);
            }
            i.push(new Si(".morphTargetInfluence[" + _ + "]", p, f));
          }
          c = m.length * a;
        } else {
          const m = ".bones[" + t[u].name + "]";
          n(
            Ei,
            m + ".position",
            d,
            "pos",
            i
          ), n(
            Wn,
            m + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Ei,
            m + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Fm(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Si;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ei;
    case "color":
      return Vc;
    case "quaternion":
      return Wn;
    case "bool":
    case "boolean":
      return Ai;
    case "string":
      return wi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Om(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Fm(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    Hc(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const yi = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Bm {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const m = l[u], g = l[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const km = /* @__PURE__ */ new Bm();
class Ri {
  constructor(e) {
    this.manager = e !== void 0 ? e : km, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Ri.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const an = {};
class zm extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Wc extends Ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = yi.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (an[e] !== void 0) {
      an[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    an[e] = [], an[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = an[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0;
        let _ = 0;
        const p = new ReadableStream({
          start(f) {
            v();
            function v() {
              u.read().then(({ done: b, value: E }) => {
                if (b)
                  f.close();
                else {
                  _ += E.byteLength;
                  const y = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: m });
                  for (let C = 0, A = h.length; C < A; C++) {
                    const B = h[C];
                    B.onProgress && B.onProgress(y);
                  }
                  f.enqueue(E), v();
                }
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new zm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(d);
            return l.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((l) => {
      yi.add(e, l);
      const h = an[e];
      delete an[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(l);
      }
    }).catch((l) => {
      const h = an[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete an[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onError && m.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Gm extends Ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = yi.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = Wi("img");
    function c() {
      h(), yi.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class Hm extends Ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new pt(), a = new Gm(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Br extends et {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new we(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Ms = /* @__PURE__ */ new ke(), Zo = /* @__PURE__ */ new L(), Qo = /* @__PURE__ */ new L();
class ia {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ce(512, 512), this.map = null, this.mapPass = null, this.matrix = new ke(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ks(), this._frameExtents = new Ce(1, 1), this._viewportCount = 1, this._viewports = [
      new Ye(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Zo.setFromMatrixPosition(e.matrixWorld), t.position.copy(Zo), Qo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Qo), t.updateMatrixWorld(), Ms.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ms), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Ms);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Vm extends ia {
  constructor() {
    super(new yt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = vi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Wm extends Br {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(et.DEFAULT_UP), this.updateMatrix(), this.target = new et(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new Vm();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const $o = /* @__PURE__ */ new ke(), Fi = /* @__PURE__ */ new L(), Ss = /* @__PURE__ */ new L();
class jm extends ia {
  constructor() {
    super(new yt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ce(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Ye(2, 1, 1, 1),
      // negative X
      new Ye(0, 1, 1, 1),
      // positive Z
      new Ye(3, 1, 1, 1),
      // negative Z
      new Ye(1, 1, 1, 1),
      // positive Y
      new Ye(3, 0, 1, 1),
      // negative Y
      new Ye(1, 0, 1, 1)
    ], this._cubeDirections = [
      new L(1, 0, 0),
      new L(-1, 0, 0),
      new L(0, 0, 1),
      new L(0, 0, -1),
      new L(0, 1, 0),
      new L(0, -1, 0)
    ], this._cubeUps = [
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 0, 1),
      new L(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Fi.setFromMatrixPosition(e.matrixWorld), n.position.copy(Fi), Ss.copy(n.position), Ss.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Ss), n.updateMatrixWorld(), i.makeTranslation(-Fi.x, -Fi.y, -Fi.z), $o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix($o);
  }
}
class Xm extends Br {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new jm();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class qm extends ia {
  constructor() {
    super(new Js(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Km extends Br {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(et.DEFAULT_UP), this.updateMatrix(), this.target = new et(), this.shadow = new qm();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Ym extends Br {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class zs {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Jm extends Ri {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = yi.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      yi.add(e, c), t && t(c), s.manager.itemEnd(e);
    }).catch(function(c) {
      i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
const ra = "\\[\\]\\.:\\/", Zm = new RegExp("[" + ra + "]", "g"), sa = "[^" + ra + "]", Qm = "[^" + ra.replace("\\.", "") + "]", $m = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", sa), eg = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Qm), tg = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", sa), ng = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", sa), ig = new RegExp(
  "^" + $m + eg + tg + ng + "$"
), rg = ["material", "materials", "bones", "map"];
class sg {
  constructor(e, t, n) {
    const i = n || qe.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class qe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || qe.parseTrackName(t), this.node = qe.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new qe.Composite(e, t, n) : new qe(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Zm, "");
  }
  static parseTrackName(e) {
    const t = ig.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      rg.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const c = n(o.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = qe.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
qe.Composite = sg;
qe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
qe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
qe.prototype.GetterByBindingType = [
  qe.prototype._getValue_direct,
  qe.prototype._getValue_array,
  qe.prototype._getValue_arrayElement,
  qe.prototype._getValue_toArray
];
qe.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    qe.prototype._setValue_direct,
    qe.prototype._setValue_direct_setNeedsUpdate,
    qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    qe.prototype._setValue_array,
    qe.prototype._setValue_array_setNeedsUpdate,
    qe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    qe.prototype._setValue_arrayElement,
    qe.prototype._setValue_arrayElement_setNeedsUpdate,
    qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    qe.prototype._setValue_fromArray,
    qe.prototype._setValue_fromArray_setNeedsUpdate,
    qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Gs {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(mt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ws
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ws);
const ec = { type: "change" }, Es = { type: "start" }, tc = { type: "end" }, yr = new ji(), nc = new xn(), ag = Math.cos(70 * Sc.DEG2RAD);
class og extends jn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new L(), this.cursor = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Xn.ROTATE, MIDDLE: Xn.DOLLY, RIGHT: Xn.PAN }, this.touches = { ONE: qn.ROTATE, TWO: qn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(R) {
      R.addEventListener("keydown", x), this._domElementKeyEvents = R;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", x), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(ec), n.update(), s = i.NONE;
    }, this.update = function() {
      const R = new L(), re = new Yt().setFromUnitVectors(e.up, new L(0, 1, 0)), q = re.clone().invert(), Me = new L(), ge = new Yt(), ve = new L(), pe = 2 * Math.PI;
      return function(Ge = null) {
        const P = n.object.position;
        R.copy(P).sub(n.target), R.applyQuaternion(re), o.setFromVector3(R), n.autoRotate && s === i.NONE && H(M(Ge)), n.enableDamping ? (o.theta += c.theta * n.dampingFactor, o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta, o.phi += c.phi);
        let ae = n.minAzimuthAngle, Q = n.maxAzimuthAngle;
        isFinite(ae) && isFinite(Q) && (ae < -Math.PI ? ae += pe : ae > Math.PI && (ae -= pe), Q < -Math.PI ? Q += pe : Q > Math.PI && (Q -= pe), ae <= Q ? o.theta = Math.max(ae, Math.min(Q, o.theta)) : o.theta = o.theta > (ae + Q) / 2 ? Math.max(ae, o.theta) : Math.min(Q, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && C || n.object.isOrthographicCamera ? o.radius = X(o.radius) : o.radius = X(o.radius * l), R.setFromSpherical(o), R.applyQuaternion(q), P.copy(n.target).add(R), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0));
        let V = !1;
        if (n.zoomToCursor && C) {
          let ie = null;
          if (n.object.isPerspectiveCamera) {
            const _e = R.length();
            ie = X(_e * l);
            const He = _e - ie;
            n.object.position.addScaledVector(E, He), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const _e = new L(y.x, y.y, 0);
            _e.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), V = !0;
            const He = new L(y.x, y.y, 0);
            He.unproject(n.object), n.object.position.sub(He).add(_e), n.object.updateMatrixWorld(), ie = R.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          ie !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(ie).add(n.object.position) : (yr.origin.copy(n.object.position), yr.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(yr.direction)) < ag ? e.lookAt(n.target) : (nc.setFromNormalAndCoplanarPoint(n.object.up, n.target), yr.intersectPlane(nc, n.target))));
        } else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), V = !0);
        return l = 1, C = !1, V || Me.distanceToSquared(n.object.position) > a || 8 * (1 - ge.dot(n.object.quaternion)) > a || ve.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(ec), Me.copy(n.object.position), ge.copy(n.object.quaternion), ve.copy(n.target), V = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", Z), n.domElement.removeEventListener("pointerdown", Ue), n.domElement.removeEventListener("pointercancel", je), n.domElement.removeEventListener("wheel", T), n.domElement.removeEventListener("pointermove", Pe), n.domElement.removeEventListener("pointerup", je), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", x), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const a = 1e-6, o = new Gs(), c = new Gs();
    let l = 1;
    const h = new L(), u = new Ce(), d = new Ce(), m = new Ce(), g = new Ce(), _ = new Ce(), p = new Ce(), f = new Ce(), v = new Ce(), b = new Ce(), E = new L(), y = new Ce();
    let C = !1;
    const A = [], B = {};
    function M(R) {
      return R !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * R : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function w() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function H(R) {
      c.theta -= R;
    }
    function J(R) {
      c.phi -= R;
    }
    const $ = function() {
      const R = new L();
      return function(q, Me) {
        R.setFromMatrixColumn(Me, 0), R.multiplyScalar(-q), h.add(R);
      };
    }(), D = function() {
      const R = new L();
      return function(q, Me) {
        n.screenSpacePanning === !0 ? R.setFromMatrixColumn(Me, 1) : (R.setFromMatrixColumn(Me, 0), R.crossVectors(n.object.up, R)), R.multiplyScalar(q), h.add(R);
      };
    }(), G = function() {
      const R = new L();
      return function(q, Me) {
        const ge = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const ve = n.object.position;
          R.copy(ve).sub(n.target);
          let pe = R.length();
          pe *= Math.tan(n.object.fov / 2 * Math.PI / 180), $(2 * q * pe / ge.clientHeight, n.object.matrix), D(2 * Me * pe / ge.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? ($(q * (n.object.right - n.object.left) / n.object.zoom / ge.clientWidth, n.object.matrix), D(Me * (n.object.top - n.object.bottom) / n.object.zoom / ge.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function K(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= R : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function j(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= R : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function ee(R) {
      if (!n.zoomToCursor)
        return;
      C = !0;
      const re = n.domElement.getBoundingClientRect(), q = R.clientX - re.left, Me = R.clientY - re.top, ge = re.width, ve = re.height;
      y.x = q / ge * 2 - 1, y.y = -(Me / ve) * 2 + 1, E.set(y.x, y.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function X(R) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, R));
    }
    function Y(R) {
      u.set(R.clientX, R.clientY);
    }
    function U(R) {
      ee(R), f.set(R.clientX, R.clientY);
    }
    function W(R) {
      g.set(R.clientX, R.clientY);
    }
    function le(R) {
      d.set(R.clientX, R.clientY), m.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      H(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), u.copy(d), n.update();
    }
    function he(R) {
      v.set(R.clientX, R.clientY), b.subVectors(v, f), b.y > 0 ? K(w()) : b.y < 0 && j(w()), f.copy(v), n.update();
    }
    function fe(R) {
      _.set(R.clientX, R.clientY), p.subVectors(_, g).multiplyScalar(n.panSpeed), G(p.x, p.y), g.copy(_), n.update();
    }
    function Ee(R) {
      ee(R), R.deltaY < 0 ? j(w()) : R.deltaY > 0 && K(w()), n.update();
    }
    function ze(R) {
      let re = !1;
      switch (R.code) {
        case n.keys.UP:
          R.ctrlKey || R.metaKey || R.shiftKey ? J(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, n.keyPanSpeed), re = !0;
          break;
        case n.keys.BOTTOM:
          R.ctrlKey || R.metaKey || R.shiftKey ? J(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, -n.keyPanSpeed), re = !0;
          break;
        case n.keys.LEFT:
          R.ctrlKey || R.metaKey || R.shiftKey ? H(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(n.keyPanSpeed, 0), re = !0;
          break;
        case n.keys.RIGHT:
          R.ctrlKey || R.metaKey || R.shiftKey ? H(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(-n.keyPanSpeed, 0), re = !0;
          break;
      }
      re && (R.preventDefault(), n.update());
    }
    function ye() {
      if (A.length === 1)
        u.set(A[0].pageX, A[0].pageY);
      else {
        const R = 0.5 * (A[0].pageX + A[1].pageX), re = 0.5 * (A[0].pageY + A[1].pageY);
        u.set(R, re);
      }
    }
    function Le() {
      if (A.length === 1)
        g.set(A[0].pageX, A[0].pageY);
      else {
        const R = 0.5 * (A[0].pageX + A[1].pageX), re = 0.5 * (A[0].pageY + A[1].pageY);
        g.set(R, re);
      }
    }
    function Ze() {
      const R = A[0].pageX - A[1].pageX, re = A[0].pageY - A[1].pageY, q = Math.sqrt(R * R + re * re);
      f.set(0, q);
    }
    function Ne() {
      n.enableZoom && Ze(), n.enablePan && Le();
    }
    function N() {
      n.enableZoom && Ze(), n.enableRotate && ye();
    }
    function bt(R) {
      if (A.length == 1)
        d.set(R.pageX, R.pageY);
      else {
        const q = ce(R), Me = 0.5 * (R.pageX + q.x), ge = 0.5 * (R.pageY + q.y);
        d.set(Me, ge);
      }
      m.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      H(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), u.copy(d);
    }
    function xe(R) {
      if (A.length === 1)
        _.set(R.pageX, R.pageY);
      else {
        const re = ce(R), q = 0.5 * (R.pageX + re.x), Me = 0.5 * (R.pageY + re.y);
        _.set(q, Me);
      }
      p.subVectors(_, g).multiplyScalar(n.panSpeed), G(p.x, p.y), g.copy(_);
    }
    function Te(R) {
      const re = ce(R), q = R.pageX - re.x, Me = R.pageY - re.y, ge = Math.sqrt(q * q + Me * Me);
      v.set(0, ge), b.set(0, Math.pow(v.y / f.y, n.zoomSpeed)), K(b.y), f.copy(v);
    }
    function Ae(R) {
      n.enableZoom && Te(R), n.enablePan && xe(R);
    }
    function $e(R) {
      n.enableZoom && Te(R), n.enableRotate && bt(R);
    }
    function Ue(R) {
      n.enabled !== !1 && (A.length === 0 && (n.domElement.setPointerCapture(R.pointerId), n.domElement.addEventListener("pointermove", Pe), n.domElement.addEventListener("pointerup", je)), ne(R), R.pointerType === "touch" ? F(R) : rt(R));
    }
    function Pe(R) {
      n.enabled !== !1 && (R.pointerType === "touch" ? te(R) : ht(R));
    }
    function je(R) {
      me(R), A.length === 0 && (n.domElement.releasePointerCapture(R.pointerId), n.domElement.removeEventListener("pointermove", Pe), n.domElement.removeEventListener("pointerup", je)), n.dispatchEvent(tc), s = i.NONE;
    }
    function rt(R) {
      let re;
      switch (R.button) {
        case 0:
          re = n.mouseButtons.LEFT;
          break;
        case 1:
          re = n.mouseButtons.MIDDLE;
          break;
        case 2:
          re = n.mouseButtons.RIGHT;
          break;
        default:
          re = -1;
      }
      switch (re) {
        case Xn.DOLLY:
          if (n.enableZoom === !1) return;
          U(R), s = i.DOLLY;
          break;
        case Xn.ROTATE:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enablePan === !1) return;
            W(R), s = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            Y(R), s = i.ROTATE;
          }
          break;
        case Xn.PAN:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enableRotate === !1) return;
            Y(R), s = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            W(R), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Es);
    }
    function ht(R) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          le(R);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          he(R);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          fe(R);
          break;
      }
    }
    function T(R) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (R.preventDefault(), n.dispatchEvent(Es), Ee(R), n.dispatchEvent(tc));
    }
    function x(R) {
      n.enabled === !1 || n.enablePan === !1 || ze(R);
    }
    function F(R) {
      switch (se(R), A.length) {
        case 1:
          switch (n.touches.ONE) {
            case qn.ROTATE:
              if (n.enableRotate === !1) return;
              ye(), s = i.TOUCH_ROTATE;
              break;
            case qn.PAN:
              if (n.enablePan === !1) return;
              Le(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case qn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ne(), s = i.TOUCH_DOLLY_PAN;
              break;
            case qn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              N(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Es);
    }
    function te(R) {
      switch (se(R), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          bt(R), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          xe(R), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ae(R), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          $e(R), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function Z(R) {
      n.enabled !== !1 && R.preventDefault();
    }
    function ne(R) {
      A.push(R);
    }
    function me(R) {
      delete B[R.pointerId];
      for (let re = 0; re < A.length; re++)
        if (A[re].pointerId == R.pointerId) {
          A.splice(re, 1);
          return;
        }
    }
    function se(R) {
      let re = B[R.pointerId];
      re === void 0 && (re = new Ce(), B[R.pointerId] = re), re.set(R.pageX, R.pageY);
    }
    function ce(R) {
      const re = R.pointerId === A[0].pointerId ? A[1] : A[0];
      return B[re.pointerId];
    }
    n.domElement.addEventListener("contextmenu", Z), n.domElement.addEventListener("pointerdown", Ue), n.domElement.addEventListener("pointercancel", je), n.domElement.addEventListener("wheel", T, { passive: !1 }), this.update();
  }
}
function ic(r, e) {
  if (e === Hl)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === Ds || e === _c) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          a.push(c);
        r.setIndex(a), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === Ds)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class cg extends Ri {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new fg(t);
    }), this.register(function(t) {
      return new Mg(t);
    }), this.register(function(t) {
      return new Sg(t);
    }), this.register(function(t) {
      return new Eg(t);
    }), this.register(function(t) {
      return new mg(t);
    }), this.register(function(t) {
      return new gg(t);
    }), this.register(function(t) {
      return new bg(t);
    }), this.register(function(t) {
      return new _g(t);
    }), this.register(function(t) {
      return new dg(t);
    }), this.register(function(t) {
      return new xg(t);
    }), this.register(function(t) {
      return new pg(t);
    }), this.register(function(t) {
      return new vg(t);
    }), this.register(function(t) {
      return new hg(t);
    }), this.register(function(t) {
      return new yg(t);
    }), this.register(function(t) {
      return new Tg(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = zs.extractUrlBase(e), this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new Wc(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, a, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === jc) {
        try {
          a[We.KHR_BINARY_GLTF] = new Ag(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(a[We.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new kg(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], d = s.extensionsRequired || [];
        switch (u) {
          case We.KHR_MATERIALS_UNLIT:
            a[u] = new ug();
            break;
          case We.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new wg(s, this.dracoLoader);
            break;
          case We.KHR_TEXTURE_TRANSFORM:
            a[u] = new Rg();
            break;
          case We.KHR_MESH_QUANTIZATION:
            a[u] = new Cg();
            break;
          default:
            d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function lg() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const We = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class hg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new we(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], gt);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Km(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Xm(h), l.distance = u;
        break;
      case "spot":
        l = new Wm(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, vn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return n._getNodeRef(t.cache, o, c);
    });
  }
}
class ug {
  constructor() {
    this.name = We.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Fn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new we(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], gt), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, nt));
    }
    return Promise.all(i);
  }
}
class dg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class fg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Ce(o, o);
    }
    return Promise.all(s);
  }
}
class pg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class mg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new we(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], gt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, nt)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class gg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class bg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new we().setRGB(o[0], o[1], o[2], gt), Promise.all(s);
  }
}
class _g {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class xg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new we().setRGB(o[0], o[1], o[2], gt), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, nt)), Promise.all(s);
  }
}
class vg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Tn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class Mg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class Sg {
  constructor(e) {
    this.parser = e, this.name = We.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Eg {
  constructor(e) {
    this.parser = e, this.name = We.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class yg {
  constructor(e) {
    this.name = We.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(m) {
          return m.buffer;
        }) : a.ready.then(function() {
          const m = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(m), h, u, d, i.mode, i.filter), m;
        });
      });
    } else
      return null;
  }
}
class Tg {
  constructor(e) {
    this.name = We.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== It.TRIANGLES && l.mode !== It.TRIANGLE_STRIP && l.mode !== It.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, m = [];
      for (const g of u) {
        const _ = new ke(), p = new L(), f = new Yt(), v = new L(1, 1, 1), b = new Tm(g.geometry, g.material, d);
        for (let E = 0; E < d; E++)
          c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, E), c.ROTATION && f.fromBufferAttribute(c.ROTATION, E), c.SCALE && v.fromBufferAttribute(c.SCALE, E), b.setMatrixAt(E, _.compose(p, f, v));
        for (const E in c)
          if (E === "_COLOR_0") {
            const y = c[E];
            b.instanceColor = new Os(y.array, y.itemSize, y.normalized);
          } else E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && g.geometry.setAttribute(E, c[E]);
        et.prototype.copy.call(b, g), this.parser.assignFinalMaterial(b), m.push(b);
      }
      return h.isGroup ? (h.clear(), h.add(...m), h) : m[0];
    }));
  }
}
const jc = "glTF", Oi = 12, rc = { JSON: 1313821514, BIN: 5130562 };
class Ag {
  constructor(e) {
    this.name = We.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Oi), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== jc)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Oi, s = new DataView(e, Oi);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (a += 4, c === rc.JSON) {
        const l = new Uint8Array(e, Oi + a, o);
        this.content = n.decode(l);
      } else if (c === rc.BIN) {
        const l = Oi + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class wg {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = We.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const h in a) {
      const u = Hs[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = Hs[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], m = pi[d.componentType];
        l[u] = m.name, c[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u) {
        i.decodeDracoFile(h, function(d) {
          for (const m in d.attributes) {
            const g = d.attributes[m], _ = c[m];
            _ !== void 0 && (g.normalized = _);
          }
          u(d);
        }, o, l);
      });
    });
  }
}
class Rg {
  constructor() {
    this.name = We.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Cg {
  constructor() {
    this.name = We.KHR_MESH_QUANTIZATION;
  }
}
class Xc extends qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - t, u = (n - t) / h, d = u * u, m = d * u, g = e * l, _ = g - l, p = -2 * m + 3 * d, f = m - d, v = 1 - p, b = f - d + u;
    for (let E = 0; E !== o; E++) {
      const y = a[_ + E + o], C = a[_ + E + c] * h, A = a[g + E + o], B = a[g + E] * h;
      s[E] = v * y + b * C + p * A + f * B;
    }
    return s;
  }
}
const Lg = new Yt();
class Pg extends Xc {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return Lg.fromArray(s).normalize().toArray(s), s;
  }
}
const It = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, pi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, sc = {
  9728: ft,
  9729: At,
  9984: Ps,
  9985: uc,
  9986: Tr,
  9987: Gn
}, ac = {
  33071: Nt,
  33648: Rr,
  10497: bi
}, ys = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Hs = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, _n = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Dg = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: xi,
  STEP: Vi
}, Ts = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ug(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new na({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: un
  })), r.DefaultMaterial;
}
function Dn(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function vn(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ig(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], u = l[1], d = l[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
  });
}
function Ng(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Fg(r) {
  let e;
  const t = r.extensions && r.extensions[We.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + As(t.attributes) : e = r.indices + ":" + As(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + As(r.targets[n]);
  return e;
}
function As(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function Vs(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Og(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Bg = new ke();
class kg {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new lg(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Hm(this.options.manager) : this.textureLoader = new Jm(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Wc(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Dn(s, o, i), vn(o, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (a, o) => {
      const c = this.associations.get(a);
      c != null && this.associations.set(o, c);
      for (const [l, h] of a.children.entries())
        s(h, o.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(zs.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = ys[i.type], o = pi[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new Tt(l, a, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], c = ys[i.type], l = pi[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, p;
      if (m && m !== u) {
        const f = Math.floor(d / m), v = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let b = t.cache.get(v);
        b || (_ = new l(o, f * m, i.count * m / h), b = new xm(_, m / h), t.cache.add(v, b)), p = new Qs(b, c, d % m / h, g);
      } else
        o === null ? _ = new l(i.count * c) : _ = new l(o, d, i.count * c), p = new Tt(_, c, g);
      if (i.sparse !== void 0) {
        const f = ys.SCALAR, v = pi[i.sparse.indices.componentType], b = i.sparse.indices.byteOffset || 0, E = i.sparse.values.byteOffset || 0, y = new v(a[1], b, i.sparse.count * f), C = new l(a[2], E, i.sparse.count * c);
        o !== null && (p = new Tt(p.array.slice(), p.itemSize, p.normalized));
        for (let A = 0, B = y.length; A < B; A++) {
          const M = y[A];
          if (p.setX(M, C[A * c]), c >= 2 && p.setY(M, C[A * c + 1]), c >= 3 && p.setZ(M, C[A * c + 2]), c >= 4 && p.setW(M, C[A * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const d = (s.samplers || {})[a.sampler] || {};
      return h.magFilter = sc[d.magFilter] || At, h.minFilter = sc[d.minFilter] || Gn, h.wrapS = ac[d.wrapS] || bi, h.wrapT = ac[d.wrapT] || bi, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(u) {
        l = !0;
        const d = new Blob([u], { type: a.mimeType });
        return c = o.createObjectURL(d), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(u) {
      return new Promise(function(d, m) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const p = new pt(_);
          p.needsUpdate = !0, d(p);
        }), t.load(zs.resolveURL(u, s.path), g, void 0, m);
      });
    }).then(function(u) {
      return l === !0 && o.revokeObjectURL(c), u.userData.mimeType = a.mimeType || Og(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[We.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[We.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = s.associations.get(a);
          a = s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new ta(), Kt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Gc(), Kt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = n.clone(), s && (c.vertexColors = !0), a && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return na;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, c = s.extensions || {}, l = [];
    if (c[We.KHR_MATERIALS_UNLIT]) {
      const u = i[We.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), l.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new we(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], gt), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", u.baseColorTexture, nt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = Xt);
    const h = s.alphaMode || Ts.OPAQUE;
    if (h === Ts.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Ts.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== Fn && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Ce(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && a !== Fn && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== Fn) {
      const u = s.emissiveFactor;
      o.emissive = new we().setRGB(u[0], u[1], u[2], gt);
    }
    return s.emissiveTexture !== void 0 && a !== Fn && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, nt)), Promise.all(l).then(function() {
      const u = new a(o);
      return s.name && (u.name = s.name), vn(u, s), t.associations.set(u, { materials: e }), s.extensions && Dn(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = qe.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return oc(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = Fg(l), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[We.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = oc(new Zt(), l, t), i[h] = { primitive: l, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const h = a[c].material === void 0 ? Ug(this.cache) : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let m = 0, g = h.length; m < g; m++) {
        const _ = h[m], p = a[m];
        let f;
        const v = l[m];
        if (p.mode === It.TRIANGLES || p.mode === It.TRIANGLE_STRIP || p.mode === It.TRIANGLE_FAN || p.mode === void 0)
          f = s.isSkinnedMesh === !0 ? new Mm(_, v) : new Bt(_, v), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), p.mode === It.TRIANGLE_STRIP ? f.geometry = ic(f.geometry, _c) : p.mode === It.TRIANGLE_FAN && (f.geometry = ic(f.geometry, Ds));
        else if (p.mode === It.LINES)
          f = new Am(_, v);
        else if (p.mode === It.LINE_STRIP)
          f = new ea(_, v);
        else if (p.mode === It.LINE_LOOP)
          f = new wm(_, v);
        else if (p.mode === It.POINTS)
          f = new ks(_, v);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && Ng(f, s), f.name = t.createUniqueName(s.name || "mesh_" + e), vn(f, s), p.extensions && Dn(i, f, p), t.assignFinalMaterial(f), u.push(f);
      }
      for (let m = 0, g = u.length; m < g; m++)
        t.associations.set(u[m], {
          meshes: e,
          primitives: m
        });
      if (u.length === 1)
        return s.extensions && Dn(i, u[0], s), u[0];
      const d = new On();
      s.extensions && Dn(i, d, s), t.associations.set(d, { meshes: e });
      for (let m = 0, g = u.length; m < g; m++)
        d.add(u[m]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new yt(Sc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Js(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), vn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), a = i, o = [], c = [];
      for (let l = 0, h = a.length; l < h; l++) {
        const u = a[l];
        if (u) {
          o.push(u);
          const d = new ke();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new $s(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const m = i.channels[u], g = i.samplers[m.sampler], _ = m.target, p = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, v = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", f)), c.push(this.getDependency("accessor", v)), l.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(u) {
      const d = u[0], m = u[1], g = u[2], _ = u[3], p = u[4], f = [];
      for (let v = 0, b = d.length; v < b; v++) {
        const E = d[v], y = m[v], C = g[v], A = _[v], B = p[v];
        if (E === void 0) continue;
        E.updateMatrix && E.updateMatrix();
        const M = n._createAnimationTracks(E, y, C, A, B);
        if (M)
          for (let w = 0; w < M.length; w++)
            f.push(M[w]);
      }
      return new Nm(s, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            o.morphTargetInfluences[c] = i.weights[c];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      c
    ]).then(function(l) {
      const h = l[0], u = l[1], d = l[2];
      d !== null && h.traverse(function(m) {
        m.isSkinnedMesh && m.bind(d, Bg);
      });
      for (let m = 0, g = u.length; m < g; m++)
        h.add(u[m]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && o.push(c), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, s.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      o.push(l);
    }), this.nodeCache[e] = Promise.all(o).then(function(l) {
      let h;
      if (s.isBone === !0 ? h = new zc() : l.length > 1 ? h = new On() : l.length === 1 ? h = l[0] : h = new et(), h !== l[0])
        for (let u = 0, d = l.length; u < d; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = a), vn(h, s), s.extensions && Dn(n, h, s), s.matrix !== void 0) {
        const u = new ke();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new On();
    n.name && (s.name = i.createUniqueName(n.name)), vn(s, n), n.extensions && Dn(t, s, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, m] of i.associations)
          (d instanceof Kt || d instanceof pt) && u.set(d, m);
        return h.traverse((d) => {
          const m = i.associations.get(d);
          m != null && u.set(d, m);
        }), u;
      };
      return i.associations = l(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    _n[s.path] === _n.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(o);
    let l;
    switch (_n[s.path]) {
      case _n.weights:
        l = Si;
        break;
      case _n.rotation:
        l = Wn;
        break;
      case _n.position:
      case _n.scale:
        l = Ei;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Si;
            break;
          case 2:
          case 3:
          default:
            l = Ei;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? Dg[i.interpolation] : xi, u = this._getArrayFromAccessor(n);
    for (let d = 0, m = c.length; d < m; d++) {
      const g = new l(
        c[d] + "." + _n[s.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Vs(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Wn ? Pg : Xc;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function zg(r, e, t) {
  const n = e.attributes, i = new dn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new L(c[0], c[1], c[2]),
        new L(l[0], l[1], l[2])
      ), o.normalized) {
        const h = Vs(pi[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new L(), c = new L();
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], m = d.min, g = d.max;
        if (m !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Vs(pi[d.componentType]);
            c.multiplyScalar(_);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new Jt();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function oc(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      r.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = Hs[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return Xe.workingColorSpace !== gt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`), vn(r, e), zg(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Ig(r, e.targets, t) : r;
  });
}
var Gg = function() {
  var r = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : r, s, a = WebAssembly.instantiate(o(i), {}).then(function(f) {
    s = f.instance, s.exports.__wasm_call_ctors();
  });
  function o(f) {
    for (var v = new Uint8Array(f.length), b = 0; b < f.length; ++b) {
      var E = f.charCodeAt(b);
      v[b] = E > 96 ? E - 97 : E > 64 ? E - 39 : E + 4;
    }
    for (var y = 0, b = 0; b < f.length; ++b)
      v[y++] = v[b] < 60 ? n[v[b]] : (v[b] - 60) * 64 + v[++b];
    return v.buffer.slice(0, y);
  }
  function c(f, v, b, E, y, C) {
    var A = s.exports.sbrk, B = b + 3 & -4, M = A(B * E), w = A(y.length), H = new Uint8Array(s.exports.memory.buffer);
    H.set(y, w);
    var J = f(M, b, E, w, y.length);
    if (J == 0 && C && C(M, B, E), v.set(H.subarray(M, M + b * E)), A(M - A(0)), J != 0)
      throw new Error("Malformed buffer data: " + J);
  }
  var l = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, h = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, u = [], d = 0;
  function m(f) {
    var v = {
      object: new Worker(f),
      pending: 0,
      requests: {}
    };
    return v.object.onmessage = function(b) {
      var E = b.data;
      v.pending -= E.count, v.requests[E.id][E.action](E.value), delete v.requests[E.id];
    }, v;
  }
  function g(f) {
    for (var v = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + p.toString(), b = new Blob([v], { type: "text/javascript" }), E = URL.createObjectURL(b), y = 0; y < f; ++y)
      u[y] = m(E);
    URL.revokeObjectURL(E);
  }
  function _(f, v, b, E, y) {
    for (var C = u[0], A = 1; A < u.length; ++A)
      u[A].pending < C.pending && (C = u[A]);
    return new Promise(function(B, M) {
      var w = new Uint8Array(b), H = d++;
      C.pending += f, C.requests[H] = { resolve: B, reject: M }, C.object.postMessage({ id: H, count: f, size: v, source: w, mode: E, filter: y }, [w.buffer]);
    });
  }
  function p(f) {
    a.then(function() {
      var v = f.data;
      try {
        var b = new Uint8Array(v.count * v.size);
        c(s.exports[v.mode], b, v.count, v.size, v.source, s.exports[v.filter]), self.postMessage({ id: v.id, count: v.count, action: "resolve", value: b }, [b.buffer]);
      } catch (E) {
        self.postMessage({ id: v.id, count: v.count, action: "reject", value: E });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(f) {
      g(f);
    },
    decodeVertexBuffer: function(f, v, b, E, y) {
      c(s.exports.meshopt_decodeVertexBuffer, f, v, b, E, s.exports[l[y]]);
    },
    decodeIndexBuffer: function(f, v, b, E) {
      c(s.exports.meshopt_decodeIndexBuffer, f, v, b, E);
    },
    decodeIndexSequence: function(f, v, b, E) {
      c(s.exports.meshopt_decodeIndexSequence, f, v, b, E);
    },
    decodeGltfBuffer: function(f, v, b, E, y, C) {
      c(s.exports[h[y]], f, v, b, E, s.exports[l[C]]);
    },
    decodeGltfBufferAsync: function(f, v, b, E, y) {
      return u.length > 0 ? _(f, v, b, h[E], l[y]) : a.then(function() {
        var C = new Uint8Array(f * v);
        return c(s.exports[h[E]], C, f, v, b, s.exports[l[y]]), C;
      });
    }
  };
}();
class Hg {
  constructor(e, t = {
    particleSize: 0.1,
    particleColor: "#372CD5",
    backgroundColor: "#ffffff",
    autoRotate: !0,
    rotationSpeed: 0.1,
    url: "https://gmxkwskcrqq1xoty.public.blob.vercel-storage.com/particle-cloud-turbine-677500pts.glb",
    onProgress: null,
    onError: null
  }) {
    this.container = e, this.scene = new _m(), this.camera = new yt(75, 1, 0.1, 8e3), this.renderer = new kc({ antialias: !0, preserveDrawingBuffer: !0 }), this.controls = null, this.particles = null, this.pointCloudData = null, this.particleTexture = this.createParticleTexture(), this.animationId = null, this.resizeObserver = null, this.loader = new cg(), this.settings = {
      url: t.url,
      particleSize: t.particleSize,
      particleColor: t.particleColor,
      backgroundColor: t.backgroundColor,
      autoRotate: t.autoRotate,
      rotationSpeed: t.rotationSpeed,
      onProgress: t.onProgress,
      onError: t.onError
    }, this.init();
  }
  init() {
    if (!this.container) {
      console.error("Container element is required");
      return;
    }
    const e = this.container.getBoundingClientRect(), t = e.width || 800, n = e.height || 600;
    this.renderer.setSize(t, n), this.renderer.setClearColor(new we(this.settings.backgroundColor)), this.container.appendChild(this.renderer.domElement), this.camera.aspect = t / n, this.camera.updateProjectionMatrix(), this.camera.position.set(5, 5, 5), this.camera.lookAt(0, 0, 0), this.setupControls();
    const i = new Ym(4210752, 0.1);
    this.scene.add(i), this.setupResizeObserver(), this.setupLoader(), this.loadGLBPointCloudFromURL(), this.animate();
  }
  setupControls() {
    this.controls = new og(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.05, this.controls.autoRotate = this.settings.autoRotate, this.controls.autoRotateSpeed = this.settings.rotationSpeed, this.controls.screenSpacePanning = !0, this.controls.enableZoom = !1, this.controls.update();
  }
  setupResizeObserver() {
    if (typeof ResizeObserver < "u") {
      let e;
      this.resizeObserver = new ResizeObserver((t) => {
        clearTimeout(e), e = setTimeout(() => {
          for (let n of t) {
            const { width: i, height: s } = n.contentRect;
            i > 0 && s > 0 && this.onResize(i, s);
          }
        }, 16);
      }), this.resizeObserver.observe(this.container);
    } else
      this.windowResizeHandler = () => {
        if (this.container) {
          const e = this.container.getBoundingClientRect();
          this.onResize(e.width, e.height);
        }
      }, window.addEventListener("resize", this.windowResizeHandler);
  }
  onResize(e, t) {
    e > 0 && t > 0 && this.camera && this.renderer && (this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t, !1), this.scene && this.renderer.render(this.scene, this.camera));
  }
  setupLoader() {
    this.loader.setMeshoptDecoder(Gg), console.log("GLTFLoader configured with MeshoptDecoder for optimal performance");
  }
  createParticleTexture() {
    const e = document.createElement("canvas");
    e.width = 64, e.height = 64;
    const t = e.getContext("2d");
    return t.beginPath(), t.arc(32, 32, 32, 0, 2 * Math.PI, !1), t.fillStyle = "white", t.fill(), new Rm(e);
  }
  async loadGLBPointCloudFromURL() {
    try {
      console.log("Loading GLB point cloud with Meshopt decompression:", this.settings.url), this.loader.load(
        this.settings.url,
        (e) => {
          console.log("GLB loaded successfully, processing point cloud..."), this.processGLBPointCloud(e);
        },
        (e) => {
          if (this.settings.onProgress && e.total > 0) {
            const t = e.loaded / e.total;
            this.settings.onProgress(t), console.log(`Loading progress: ${(t * 100).toFixed(1)}%`);
          }
        },
        (e) => {
          console.error("Error loading GLB point cloud:", e), this.settings.onError && this.settings.onError(e);
        }
      );
    } catch (e) {
      console.error("Error loading GLB point cloud:", e), this.settings.onError && this.settings.onError(e);
    }
  }
  processGLBPointCloud(e) {
    this.particles && (this.scene.remove(this.particles), this.particles.geometry.dispose(), this.particles.material.dispose());
    let t = null;
    if (e.scene.traverse((n) => {
      n instanceof ks && (t = n);
    }), !t) {
      const n = new Error("No point cloud found in GLB file");
      console.error(n.message), this.settings.onError && this.settings.onError(n);
      return;
    }
    if (this.pointCloudData = t.userData.particleViewer || {}, console.log(`Point cloud found with ${t.geometry.attributes.position.count.toLocaleString()} particles`), this.particles = this.createPointCloudFromGLB(t), this.particles)
      this.scene.add(this.particles), this.fitCameraToPointCloud(), this.settings.onProgress && this.settings.onProgress(1), console.log("Point cloud processing complete");
    else {
      const n = new Error("Could not create point cloud from GLB data");
      this.settings.onError && this.settings.onError(n);
    }
  }
  createPointCloudFromGLB(e) {
    const t = e.geometry;
    let n = 1;
    if (this.pointCloudData.originalModelSize)
      n = this.pointCloudData.originalModelSize;
    else {
      t.computeBoundingBox();
      const a = t.boundingBox.getSize(new L());
      n = Math.max(a.x, a.y, a.z);
    }
    const i = this.settings.particleSize * (n / 100), s = new ta({
      color: new we(this.settings.particleColor),
      size: i,
      sizeAttenuation: !0,
      transparent: !0,
      opacity: 0.8,
      map: this.particleTexture,
      alphaTest: 0.5
    });
    return new ks(t, s);
  }
  fitCameraToPointCloud() {
    if (!this.particles) return;
    if (this.pointCloudData && this.pointCloudData.camera) {
      const l = this.pointCloudData.camera;
      l.fov && (this.camera.fov = l.fov), l.near && (this.camera.near = l.near), l.far && (this.camera.far = l.far), this.camera.updateProjectionMatrix();
      const h = new L(
        l.target.x,
        l.target.y,
        l.target.z
      ), u = new Gs(
        l.distance,
        l.spherical.phi,
        l.spherical.theta
      ), d = new L();
      d.setFromSpherical(u), d.add(h), this.camera.position.copy(d), this.camera.lookAt(h), this.controls && (this.controls.target.copy(h), this.controls.update()), console.log("Camera position restored from GLB metadata");
      return;
    }
    this.particles.geometry.computeBoundingBox();
    const e = this.particles.geometry.boundingBox, t = e.getSize(new L()), n = e.getCenter(new L()), s = Math.max(t.x, t.y, t.z) / (2 * Math.atan(Math.PI * this.camera.fov / 360)), a = s / this.camera.aspect, o = 1.2 * Math.max(s, a), c = new L(1, 1, 1).normalize().multiplyScalar(o);
    this.camera.position.copy(n).add(c), this.controls && (this.controls.target.copy(n), this.controls.update()), console.log("Camera auto-fitted to point cloud");
  }
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate()), this.controls && this.controls.update(), this.renderer.render(this.scene, this.camera);
  }
  updateSettings(e) {
    if (Object.assign(this.settings, e), e.backgroundColor && this.renderer && this.renderer.setClearColor(new we(e.backgroundColor)), e.particleColor && this.particles && this.particles.material.color.set(e.particleColor), e.particleSize && this.particles && this.pointCloudData) {
      const t = this.pointCloudData.originalModelSize || 1, n = e.particleSize * (t / 100);
      this.particles.material.size = n;
    }
    this.controls && (e.autoRotate !== void 0 && (this.controls.autoRotate = e.autoRotate), e.rotationSpeed !== void 0 && (this.controls.autoRotateSpeed = e.rotationSpeed));
  }
  async loadNewData(e) {
    this.settings.url = e, await this.loadGLBPointCloudFromURL();
  }
  getMetadata() {
    return this.pointCloudData || {};
  }
  getParticleCount() {
    return this.particles && this.particles.geometry.attributes.position ? this.particles.geometry.attributes.position.count : 0;
  }
  destroy() {
    this.animationId && (cancelAnimationFrame(this.animationId), this.animationId = null), this.particles && (this.particles.geometry.dispose(), this.particles.material.dispose(), this.scene.remove(this.particles)), this.particleTexture && this.particleTexture.dispose(), this.renderer && (this.renderer.dispose(), this.container && this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement)), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), this.windowResizeHandler && (window.removeEventListener("resize", this.windowResizeHandler), this.windowResizeHandler = null), this.container && (this.container.innerHTML = ""), console.log("GLBPointCloudViewer destroyed");
  }
}
export {
  Hg as default
};
