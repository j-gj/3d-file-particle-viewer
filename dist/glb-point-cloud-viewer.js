/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ws = "158", qn = { ROTATE: 0, DOLLY: 1, PAN: 2 }, jn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Jc = 0, da = 1, Qc = 2, cc = 1, el = 2, on = 3, hn = 0, wt = 1, qt = 2, En = 0, di = 1, fa = 2, pa = 3, ma = 4, tl = 5, Un = 100, nl = 101, il = 102, ga = 103, _a = 104, rl = 200, sl = 201, al = 202, ol = 203, ws = 204, Rs = 205, cl = 206, ll = 207, ul = 208, hl = 209, dl = 210, fl = 211, pl = 212, ml = 213, gl = 214, _l = 0, xl = 1, vl = 2, wr = 3, Ml = 4, Sl = 5, El = 6, yl = 7, lc = 0, Tl = 1, bl = 2, yn = 0, Al = 1, wl = 2, Rl = 3, Cl = 4, Ll = 5, xa = "attached", Pl = "detached", uc = 300, mi = 301, gi = 302, Cs = 303, Ls = 304, Ur = 306, _i = 1e3, Nt = 1001, Rr = 1002, ft = 1003, Ps = 1004, br = 1005, At = 1006, hc = 1007, Gn = 1008, Tn = 1009, Dl = 1010, Il = 1011, Xs = 1012, dc = 1013, Sn = 1014, cn = 1015, ki = 1016, fc = 1017, pc = 1018, Bn = 1020, Ul = 1021, Ot = 1023, Nl = 1024, Ol = 1025, zn = 1026, xi = 1027, Fl = 1028, mc = 1029, Bl = 1030, gc = 1031, _c = 1033, Vr = 33776, Wr = 33777, Xr = 33778, qr = 33779, va = 35840, Ma = 35841, Sa = 35842, Ea = 35843, zl = 36196, ya = 37492, Ta = 37496, ba = 37808, Aa = 37809, wa = 37810, Ra = 37811, Ca = 37812, La = 37813, Pa = 37814, Da = 37815, Ia = 37816, Ua = 37817, Na = 37818, Oa = 37819, Fa = 37820, Ba = 37821, jr = 36492, za = 36494, Ha = 36495, Hl = 36283, Ga = 36284, ka = 36285, Va = 36286, Vi = 2300, vi = 2301, Yr = 2302, Wa = 2400, Xa = 2401, qa = 2402, Gl = 2500, kl = 0, xc = 1, Ds = 2, vc = 3e3, Hn = 3001, Vl = 3200, Wl = 3201, Mc = 0, Xl = 1, Ft = "", nt = "srgb", gt = "srgb-linear", qs = "display-p3", Nr = "display-p3-linear", Cr = "linear", Je = "srgb", Lr = "rec709", Pr = "p3", Yn = 7680, ja = 519, ql = 512, jl = 513, Yl = 514, Kl = 515, Zl = 516, $l = 517, Jl = 518, Ql = 519, Is = 35044, Ya = "300 es", Us = 1035, ln = 2e3, Dr = 2001;
class Xn {
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
const xt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ka = 1234567;
const zi = Math.PI / 180, Mi = 180 / Math.PI;
function Vt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xt[r & 255] + xt[r >> 8 & 255] + xt[r >> 16 & 255] + xt[r >> 24 & 255] + "-" + xt[e & 255] + xt[e >> 8 & 255] + "-" + xt[e >> 16 & 15 | 64] + xt[e >> 24 & 255] + "-" + xt[t & 63 | 128] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 255] + xt[t >> 24 & 255] + xt[n & 255] + xt[n >> 8 & 255] + xt[n >> 16 & 255] + xt[n >> 24 & 255]).toLowerCase();
}
function mt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function js(r, e) {
  return (r % e + e) % e;
}
function eu(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function tu(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Hi(r, e, t) {
  return (1 - t) * r + t * e;
}
function nu(r, e, t, n) {
  return Hi(r, e, 1 - Math.exp(-t * n));
}
function iu(r, e = 1) {
  return e - Math.abs(js(r, e * 2) - e);
}
function ru(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function su(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function au(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function ou(r, e) {
  return r + Math.random() * (e - r);
}
function cu(r) {
  return r * (0.5 - Math.random());
}
function lu(r) {
  r !== void 0 && (Ka = r);
  let e = Ka += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function uu(r) {
  return r * zi;
}
function hu(r) {
  return r * Mi;
}
function Ns(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Sc(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Ir(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function du(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), u = a((e + n) / 2), h = s((e - n) / 2), d = a((e - n) / 2), m = s((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * u, c * h, c * d, o * l);
      break;
    case "YZY":
      r.set(c * d, o * u, c * h, o * l);
      break;
    case "ZXZ":
      r.set(c * h, c * d, o * u, o * l);
      break;
    case "XZX":
      r.set(o * u, c * g, c * m, o * l);
      break;
    case "YXY":
      r.set(c * m, o * u, c * g, o * l);
      break;
    case "ZYZ":
      r.set(c * g, c * m, o * u, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function jt(r, e) {
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
function Ye(r, e) {
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
const Ec = {
  DEG2RAD: zi,
  RAD2DEG: Mi,
  generateUUID: Vt,
  clamp: mt,
  euclideanModulo: js,
  mapLinear: eu,
  inverseLerp: tu,
  lerp: Hi,
  damp: nu,
  pingpong: iu,
  smoothstep: ru,
  smootherstep: su,
  randInt: au,
  randFloat: ou,
  randFloatSpread: cu,
  seededRandom: lu,
  degToRad: uu,
  radToDeg: hu,
  isPowerOfTwo: Ns,
  ceilPowerOfTwo: Sc,
  floorPowerOfTwo: Ir,
  setQuaternionFromProperEuler: du,
  normalize: Ye,
  denormalize: jt
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
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = o, u[3] = t, u[4] = s, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this;
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
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], u = n[4], h = n[7], d = n[2], m = n[5], g = n[8], _ = i[0], p = i[3], f = i[6], E = i[1], x = i[4], T = i[7], b = i[2], L = i[5], w = i[8];
    return s[0] = a * _ + o * E + c * b, s[3] = a * p + o * x + c * L, s[6] = a * f + o * T + c * w, s[1] = l * _ + u * E + h * b, s[4] = l * p + u * x + h * L, s[7] = l * f + u * T + h * w, s[2] = d * _ + m * E + g * b, s[5] = d * p + m * x + g * L, s[8] = d * f + m * T + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], u = e[8];
    return t * a * u - t * o * l - n * s * u + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], u = e[8], h = u * a - o * l, d = o * c - u * s, m = l * s - a * c, g = t * h + n * d + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = h * _, e[1] = (i * l - u * n) * _, e[2] = (o * n - i * a) * _, e[3] = d * _, e[4] = (u * t - i * c) * _, e[5] = (i * s - o * t) * _, e[6] = m * _, e[7] = (n * c - l * t) * _, e[8] = (a * t - n * s) * _, this;
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
    return this.premultiply(Kr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Kr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Kr.makeTranslation(e, t)), this;
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
const Kr = /* @__PURE__ */ new Be();
function yc(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
function Wi(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function fu() {
  const r = Wi("canvas");
  return r.style.display = "block", r;
}
const Za = {};
function Gi(r) {
  r in Za || (Za[r] = !0, console.warn(r));
}
const $a = /* @__PURE__ */ new Be().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Ja = /* @__PURE__ */ new Be().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Zi = {
  [gt]: {
    transfer: Cr,
    primaries: Lr,
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [nt]: {
    transfer: Je,
    primaries: Lr,
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [Nr]: {
    transfer: Cr,
    primaries: Pr,
    toReference: (r) => r.applyMatrix3(Ja),
    fromReference: (r) => r.applyMatrix3($a)
  },
  [qs]: {
    transfer: Je,
    primaries: Pr,
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(Ja),
    fromReference: (r) => r.applyMatrix3($a).convertLinearToSRGB()
  }
}, pu = /* @__PURE__ */ new Set([gt, Nr]), qe = {
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
    if (!pu.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = Zi[e].toReference, i = Zi[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return Zi[r].primaries;
  },
  getTransfer: function(r) {
    return r === Ft ? Cr : Zi[r].transfer;
  }
};
function fi(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Zr(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Kn;
class Tc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Kn === void 0 && (Kn = Wi("canvas")), Kn.width = e.width, Kn.height = e.height;
      const n = Kn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Kn;
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
let mu = 0;
class bc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: mu++ }), this.uuid = Vt(), this.data = e, this.version = 0;
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
          i[a].isDataTexture ? s.push($r(i[a].image)) : s.push($r(i[a]));
      } else
        s = $r(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function $r(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Tc.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let gu = 0;
class pt extends Xn {
  constructor(e = pt.DEFAULT_IMAGE, t = pt.DEFAULT_MAPPING, n = Nt, i = Nt, s = At, a = Gn, o = Ot, c = Tn, l = pt.DEFAULT_ANISOTROPY, u = Ft) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: gu++ }), this.uuid = Vt(), this.name = "", this.source = new bc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ce(0, 0), this.repeat = new Ce(1, 1), this.center = new Ce(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === Hn ? nt : Ft), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== uc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case _i:
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
        case _i:
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
    return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === nt ? Hn : vc;
  }
  set encoding(e) {
    Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Hn ? nt : Ft;
  }
}
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = uc;
pt.DEFAULT_ANISOTROPY = 1;
class Ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ke.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const c = e.elements, l = c[0], u = c[4], h = c[8], d = c[1], m = c[5], g = c[9], _ = c[2], p = c[6], f = c[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(h - _) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(h + _) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + m + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (l + 1) / 2, T = (m + 1) / 2, b = (f + 1) / 2, L = (u + d) / 4, w = (h + _) / 4, H = (g + p) / 4;
      return x > T && x > b ? x < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), i = L / n, s = w / n) : T > b ? T < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(T), n = L / i, s = H / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(b), n = w / s, i = H / s), this.set(n, i, s, t), this;
    }
    let E = Math.sqrt((p - g) * (p - g) + (h - _) * (h - _) + (d - u) * (d - u));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (p - g) / E, this.y = (h - _) / E, this.z = (d - u) / E, this.w = Math.acos((l + m + f - 1) / 2), this;
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
class _u extends Xn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ke(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ke(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Hn ? nt : Ft), n = Object.assign({
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
    return this.texture.source = new bc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class kn extends _u {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ac extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = Nt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class xu extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = Nt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Kt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], u = n[i + 2], h = n[i + 3];
    const d = s[a + 0], m = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (h !== _ || c !== d || l !== m || u !== g) {
      let p = 1 - o;
      const f = c * d + l * m + u * g + h * _, E = f >= 0 ? 1 : -1, x = 1 - f * f;
      if (x > Number.EPSILON) {
        const b = Math.sqrt(x), L = Math.atan2(b, f * E);
        p = Math.sin(p * L) / b, o = Math.sin(o * L) / b;
      }
      const T = o * E;
      if (c = c * p + d * T, l = l * p + m * T, u = u * p + g * T, h = h * p + _ * T, p === 1 - o) {
        const b = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
        c *= b, l *= b, u *= b, h *= b;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], u = n[i + 3], h = s[a], d = s[a + 1], m = s[a + 2], g = s[a + 3];
    return e[t] = o * g + u * h + c * m - l * d, e[t + 1] = c * g + u * d + l * h - o * m, e[t + 2] = l * g + u * m + o * d - c * h, e[t + 3] = u * g - o * h - c * d - l * m, e;
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
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), u = o(i / 2), h = o(s / 2), d = c(n / 2), m = c(i / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * u * h + l * m * g, this._y = l * m * h - d * u * g, this._z = l * u * g + d * m * h, this._w = l * u * h - d * m * g;
        break;
      case "YXZ":
        this._x = d * u * h + l * m * g, this._y = l * m * h - d * u * g, this._z = l * u * g - d * m * h, this._w = l * u * h + d * m * g;
        break;
      case "ZXY":
        this._x = d * u * h - l * m * g, this._y = l * m * h + d * u * g, this._z = l * u * g + d * m * h, this._w = l * u * h - d * m * g;
        break;
      case "ZYX":
        this._x = d * u * h - l * m * g, this._y = l * m * h + d * u * g, this._z = l * u * g - d * m * h, this._w = l * u * h + d * m * g;
        break;
      case "YZX":
        this._x = d * u * h + l * m * g, this._y = l * m * h + d * u * g, this._z = l * u * g - d * m * h, this._w = l * u * h - d * m * g;
        break;
      case "XZY":
        this._x = d * u * h - l * m * g, this._y = l * m * h - d * u * g, this._z = l * u * g + d * m * h, this._w = l * u * h + d * m * g;
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
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], u = t[6], h = t[10], d = n + o + h;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (u - c) * m, this._y = (s - l) * m, this._z = (a - i) * m;
    } else if (n > o && n > h) {
      const m = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - c) / m, this._x = 0.25 * m, this._y = (i + a) / m, this._z = (s + l) / m;
    } else if (o > h) {
      const m = 2 * Math.sqrt(1 + o - n - h);
      this._w = (s - l) / m, this._x = (i + a) / m, this._y = 0.25 * m, this._z = (c + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - i) / m, this._x = (s + l) / m, this._y = (c + u) / m, this._z = 0.25 * m;
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
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + a * o + i * l - s * c, this._y = i * u + a * c + s * o - n * l, this._z = s * u + a * l + n * c - i * o, this._w = a * u - n * o - i * c - s * l, this._onChangeCallback(), this;
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
    const l = Math.sqrt(c), u = Math.atan2(l, o), h = Math.sin((1 - t) * u) / l, d = Math.sin(t * u) / l;
    return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this;
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
class C {
  constructor(e = 0, t = 0, n = 0) {
    C.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(Qa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Qa.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), u = 2 * (o * t - s * i), h = 2 * (s * n - a * t);
    return this.x = t + c * l + a * h - o * u, this.y = n + c * u + o * l - s * h, this.z = i + c * h + s * u - a * l, this;
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
    return Jr.copy(this).projectOnVector(e), this.sub(Jr);
  }
  reflect(e) {
    return this.sub(Jr.copy(e).multiplyScalar(2 * this.dot(e)));
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
const Jr = /* @__PURE__ */ new C(), Qa = /* @__PURE__ */ new Kt();
class dn {
  constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(zt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(zt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = zt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(a, zt) : zt.fromBufferAttribute(s, a), zt.applyMatrix4(e.matrixWorld), this.expandByPoint(zt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), $i.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), $i.copy(n.boundingBox)), $i.applyMatrix4(e.matrixWorld), this.union($i);
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
    return this.clampPoint(e.center, zt), zt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Li), Ji.subVectors(this.max, Li), Zn.subVectors(e.a, Li), $n.subVectors(e.b, Li), Jn.subVectors(e.c, Li), fn.subVectors($n, Zn), pn.subVectors(Jn, $n), Rn.subVectors(Zn, Jn);
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
    return !Qr(t, Zn, $n, Jn, Ji) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Qr(t, Zn, $n, Jn, Ji)) ? !1 : (Qi.crossVectors(fn, pn), t = [Qi.x, Qi.y, Qi.z], Qr(t, Zn, $n, Jn, Ji));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, zt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(zt).length() * 0.5), e;
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
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C()
], zt = /* @__PURE__ */ new C(), $i = /* @__PURE__ */ new dn(), Zn = /* @__PURE__ */ new C(), $n = /* @__PURE__ */ new C(), Jn = /* @__PURE__ */ new C(), fn = /* @__PURE__ */ new C(), pn = /* @__PURE__ */ new C(), Rn = /* @__PURE__ */ new C(), Li = /* @__PURE__ */ new C(), Ji = /* @__PURE__ */ new C(), Qi = /* @__PURE__ */ new C(), Cn = /* @__PURE__ */ new C();
function Qr(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    Cn.fromArray(r, s);
    const o = i.x * Math.abs(Cn.x) + i.y * Math.abs(Cn.y) + i.z * Math.abs(Cn.z), c = e.dot(Cn), l = t.dot(Cn), u = n.dot(Cn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o)
      return !1;
  }
  return !0;
}
const vu = /* @__PURE__ */ new dn(), Pi = /* @__PURE__ */ new C(), es = /* @__PURE__ */ new C();
class Zt {
  constructor(e = new C(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : vu.setFromPoints(e).getCenter(n);
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
const tn = /* @__PURE__ */ new C(), ts = /* @__PURE__ */ new C(), er = /* @__PURE__ */ new C(), mn = /* @__PURE__ */ new C(), ns = /* @__PURE__ */ new C(), tr = /* @__PURE__ */ new C(), is = /* @__PURE__ */ new C();
class Xi {
  constructor(e = new C(), t = new C(0, 0, -1)) {
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
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(er), o = mn.dot(this.direction), c = -mn.dot(er), l = mn.lengthSq(), u = Math.abs(1 - a * a);
    let h, d, m, g;
    if (u > 0)
      if (h = a * c - o, d = a * o - c, g = s * u, h >= 0)
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / u;
            h *= _, d *= _, m = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * c) + l;
          } else
            d = s, h = Math.max(0, -(a * d + o)), m = -h * h + d * (d + 2 * c) + l;
        else
          d = -s, h = Math.max(0, -(a * d + o)), m = -h * h + d * (d + 2 * c) + l;
      else
        d <= -g ? (h = Math.max(0, -(-a * s + o)), d = h > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -h * h + d * (d + 2 * c) + l) : d <= g ? (h = 0, d = Math.min(Math.max(-s, -c), s), m = d * (d + 2 * c) + l) : (h = Math.max(0, -(a * s + o)), d = h > 0 ? s : Math.min(Math.max(-s, -c), s), m = -h * h + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -s : s, h = Math.max(0, -(a * d + o)), m = -h * h + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(ts).addScaledVector(er, d), m;
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
    const l = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), u >= 0 ? (s = (e.min.y - d.y) * u, a = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, a = (e.min.y - d.y) * u), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), h >= 0 ? (o = (e.min.z - d.z) * h, c = (e.max.z - d.z) * h) : (o = (e.max.z - d.z) * h, c = (e.min.z - d.z) * h), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
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
    const u = -o * mn.dot(is);
    return u < 0 ? null : this.at(u / a, s);
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
class ze {
  constructor(e, t, n, i, s, a, o, c, l, u, h, d, m, g, _, p) {
    ze.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, u, h, d, m, g, _, p);
  }
  set(e, t, n, i, s, a, o, c, l, u, h, d, m, g, _, p) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = u, f[10] = h, f[14] = d, f[3] = m, f[7] = g, f[11] = _, f[15] = p, this;
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
    return new ze().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / Qn.setFromMatrixColumn(e, 0).length(), s = 1 / Qn.setFromMatrixColumn(e, 1).length(), a = 1 / Qn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * u, m = a * h, g = o * u, _ = o * h;
      t[0] = c * u, t[4] = -c * h, t[8] = l, t[1] = m + g * l, t[5] = d - _ * l, t[9] = -o * c, t[2] = _ - d * l, t[6] = g + m * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * u, m = c * h, g = l * u, _ = l * h;
      t[0] = d + _ * o, t[4] = g * o - m, t[8] = a * l, t[1] = a * h, t[5] = a * u, t[9] = -o, t[2] = m * o - g, t[6] = _ + d * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * u, m = c * h, g = l * u, _ = l * h;
      t[0] = d - _ * o, t[4] = -a * h, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * u, t[9] = _ - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * u, m = a * h, g = o * u, _ = o * h;
      t[0] = c * u, t[4] = g * l - m, t[8] = d * l + _, t[1] = c * h, t[5] = _ * l + d, t[9] = m * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, m = a * l, g = o * c, _ = o * l;
      t[0] = c * u, t[4] = _ - d * h, t[8] = g * h + m, t[1] = h, t[5] = a * u, t[9] = -o * u, t[2] = -l * u, t[6] = m * h + g, t[10] = d - _ * h;
    } else if (e.order === "XZY") {
      const d = a * c, m = a * l, g = o * c, _ = o * l;
      t[0] = c * u, t[4] = -h, t[8] = l * u, t[1] = d * h + _, t[5] = a * u, t[9] = m * h - g, t[2] = g * h - m, t[6] = o * u, t[10] = _ * h + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Mu, e, Su);
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
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], u = n[1], h = n[5], d = n[9], m = n[13], g = n[2], _ = n[6], p = n[10], f = n[14], E = n[3], x = n[7], T = n[11], b = n[15], L = i[0], w = i[4], H = i[8], S = i[12], A = i[1], V = i[5], J = i[9], Q = i[13], D = i[2], G = i[6], Y = i[10], X = i[14], ee = i[3], q = i[7], K = i[11], I = i[15];
    return s[0] = a * L + o * A + c * D + l * ee, s[4] = a * w + o * V + c * G + l * q, s[8] = a * H + o * J + c * Y + l * K, s[12] = a * S + o * Q + c * X + l * I, s[1] = u * L + h * A + d * D + m * ee, s[5] = u * w + h * V + d * G + m * q, s[9] = u * H + h * J + d * Y + m * K, s[13] = u * S + h * Q + d * X + m * I, s[2] = g * L + _ * A + p * D + f * ee, s[6] = g * w + _ * V + p * G + f * q, s[10] = g * H + _ * J + p * Y + f * K, s[14] = g * S + _ * Q + p * X + f * I, s[3] = E * L + x * A + T * D + b * ee, s[7] = E * w + x * V + T * G + b * q, s[11] = E * H + x * J + T * Y + b * K, s[15] = E * S + x * Q + T * X + b * I, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], u = e[2], h = e[6], d = e[10], m = e[14], g = e[3], _ = e[7], p = e[11], f = e[15];
    return g * (+s * c * h - i * l * h - s * o * d + n * l * d + i * o * m - n * c * m) + _ * (+t * c * m - t * l * d + s * a * d - i * a * m + i * l * u - s * c * u) + p * (+t * l * h - t * o * m - s * a * h + n * a * m + s * o * u - n * l * u) + f * (-i * o * u - t * c * h + t * o * d + i * a * h - n * a * d + n * c * u);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], u = e[8], h = e[9], d = e[10], m = e[11], g = e[12], _ = e[13], p = e[14], f = e[15], E = h * p * l - _ * d * l + _ * c * m - o * p * m - h * c * f + o * d * f, x = g * d * l - u * p * l - g * c * m + a * p * m + u * c * f - a * d * f, T = u * _ * l - g * h * l + g * o * m - a * _ * m - u * o * f + a * h * f, b = g * h * c - u * _ * c - g * o * d + a * _ * d + u * o * p - a * h * p, L = t * E + n * x + i * T + s * b;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / L;
    return e[0] = E * w, e[1] = (_ * d * s - h * p * s - _ * i * m + n * p * m + h * i * f - n * d * f) * w, e[2] = (o * p * s - _ * c * s + _ * i * l - n * p * l - o * i * f + n * c * f) * w, e[3] = (h * c * s - o * d * s - h * i * l + n * d * l + o * i * m - n * c * m) * w, e[4] = x * w, e[5] = (u * p * s - g * d * s + g * i * m - t * p * m - u * i * f + t * d * f) * w, e[6] = (g * c * s - a * p * s - g * i * l + t * p * l + a * i * f - t * c * f) * w, e[7] = (a * d * s - u * c * s + u * i * l - t * d * l - a * i * m + t * c * m) * w, e[8] = T * w, e[9] = (g * h * s - u * _ * s - g * n * m + t * _ * m + u * n * f - t * h * f) * w, e[10] = (a * _ * s - g * o * s + g * n * l - t * _ * l - a * n * f + t * o * f) * w, e[11] = (u * o * s - a * h * s - u * n * l + t * h * l + a * n * m - t * o * m) * w, e[12] = b * w, e[13] = (u * _ * i - g * h * i + g * n * d - t * _ * d - u * n * p + t * h * p) * w, e[14] = (g * o * i - a * _ * i - g * n * c + t * _ * c + a * n * p - t * o * p) * w, e[15] = (a * h * i - u * o * i + u * n * c - t * h * c - a * n * d + t * o * d) * w, this;
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
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, u = s * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      u * o + n,
      u * c - i * a,
      0,
      l * c - i * o,
      u * c + i * a,
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
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, u = a + a, h = o + o, d = s * l, m = s * u, g = s * h, _ = a * u, p = a * h, f = o * h, E = c * l, x = c * u, T = c * h, b = n.x, L = n.y, w = n.z;
    return i[0] = (1 - (_ + f)) * b, i[1] = (m + T) * b, i[2] = (g - x) * b, i[3] = 0, i[4] = (m - T) * L, i[5] = (1 - (d + f)) * L, i[6] = (p + E) * L, i[7] = 0, i[8] = (g + x) * w, i[9] = (p - E) * w, i[10] = (1 - (d + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Qn.set(i[0], i[1], i[2]).length();
    const a = Qn.set(i[4], i[5], i[6]).length(), o = Qn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Ht.copy(this);
    const l = 1 / s, u = 1 / a, h = 1 / o;
    return Ht.elements[0] *= l, Ht.elements[1] *= l, Ht.elements[2] *= l, Ht.elements[4] *= u, Ht.elements[5] *= u, Ht.elements[6] *= u, Ht.elements[8] *= h, Ht.elements[9] *= h, Ht.elements[10] *= h, t.setFromRotationMatrix(Ht), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = ln) {
    const c = this.elements, l = 2 * s / (t - e), u = 2 * s / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i);
    let m, g;
    if (o === ln)
      m = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Dr)
      m = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = h, c[12] = 0, c[1] = 0, c[5] = u, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = ln) {
    const c = this.elements, l = 1 / (t - e), u = 1 / (n - i), h = 1 / (a - s), d = (t + e) * l, m = (n + i) * u;
    let g, _;
    if (o === ln)
      g = (a + s) * h, _ = -2 * h;
    else if (o === Dr)
      g = s * h, _ = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * u, c[9] = 0, c[13] = -m, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
const Qn = /* @__PURE__ */ new C(), Ht = /* @__PURE__ */ new ze(), Mu = /* @__PURE__ */ new C(0, 0, 0), Su = /* @__PURE__ */ new C(1, 1, 1), gn = /* @__PURE__ */ new C(), nr = /* @__PURE__ */ new C(), Lt = /* @__PURE__ */ new C(), eo = /* @__PURE__ */ new ze(), to = /* @__PURE__ */ new Kt();
class Or {
  constructor(e = 0, t = 0, n = 0, i = Or.DEFAULT_ORDER) {
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
    const i = e.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], u = i[9], h = i[2], d = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(mt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-mt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(mt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-mt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(mt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-mt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
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
Or.DEFAULT_ORDER = "XYZ";
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
let Eu = 0;
const no = /* @__PURE__ */ new C(), ei = /* @__PURE__ */ new Kt(), nn = /* @__PURE__ */ new ze(), ir = /* @__PURE__ */ new C(), Di = /* @__PURE__ */ new C(), yu = /* @__PURE__ */ new C(), Tu = /* @__PURE__ */ new Kt(), io = /* @__PURE__ */ new C(1, 0, 0), ro = /* @__PURE__ */ new C(0, 1, 0), so = /* @__PURE__ */ new C(0, 0, 1), bu = { type: "added" }, Au = { type: "removed" };
class et extends Xn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Eu++ }), this.uuid = Vt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = et.DEFAULT_UP.clone();
    const e = new C(), t = new Or(), n = new Kt(), i = new C(1, 1, 1);
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
        value: new ze()
      },
      normalMatrix: {
        value: new Be()
      }
    }), this.matrix = new ze(), this.matrixWorld = new ze(), this.matrixAutoUpdate = et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new wc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(bu)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Au)), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Di, e, yu), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Di, Tu, e), e;
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
          for (let l = 0, u = c.length; l < u; l++) {
            const h = c[l];
            s(e.shapes, h);
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
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), u = a(e.images), h = a(e.shapes), d = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
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
et.DEFAULT_UP = /* @__PURE__ */ new C(0, 1, 0);
et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Gt = /* @__PURE__ */ new C(), rn = /* @__PURE__ */ new C(), rs = /* @__PURE__ */ new C(), sn = /* @__PURE__ */ new C(), ti = /* @__PURE__ */ new C(), ni = /* @__PURE__ */ new C(), ao = /* @__PURE__ */ new C(), ss = /* @__PURE__ */ new C(), as = /* @__PURE__ */ new C(), os = /* @__PURE__ */ new C();
let rr = !1;
class kt {
  constructor(e = new C(), t = new C(), n = new C()) {
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
    const a = Gt.dot(Gt), o = Gt.dot(rn), c = Gt.dot(rs), l = rn.dot(rn), u = rn.dot(rs), h = a * l - o * o;
    if (h === 0)
      return s.set(-2, -1, -1);
    const d = 1 / h, m = (l * c - o * u) * d, g = (a * u - o * c) * d;
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
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return rr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), rr = !0), kt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return kt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
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
    const u = ti.dot(as), h = ni.dot(as);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const d = c * h - u * l;
    if (d <= 0 && c >= 0 && u <= 0)
      return a = c / (c - u), t.copy(n).addScaledVector(ti, a);
    os.subVectors(e, s);
    const m = ti.dot(os), g = ni.dot(os);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const _ = m * l - c * g;
    if (_ <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(ni, o);
    const p = u * g - m * h;
    if (p <= 0 && h - u >= 0 && m - g >= 0)
      return ao.subVectors(s, i), o = (h - u) / (h - u + (m - g)), t.copy(i).addScaledVector(ao, o);
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
}, _n = { h: 0, s: 0, l: 0 }, sr = { h: 0, s: 0, l: 0 };
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
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, qe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = qe.workingColorSpace) {
    if (e = js(e, 1), t = mt(t, 0, 1), n = mt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = cs(a, s, e + 1 / 3), this.g = cs(a, s, e), this.b = cs(a, s, e - 1 / 3);
    }
    return qe.toWorkingColorSpace(this, i), this;
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
    return this.r = Zr(e.r), this.g = Zr(e.g), this.b = Zr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = nt) {
    return qe.fromWorkingColorSpace(vt.copy(this), e), Math.round(mt(vt.r * 255, 0, 255)) * 65536 + Math.round(mt(vt.g * 255, 0, 255)) * 256 + Math.round(mt(vt.b * 255, 0, 255));
  }
  getHexString(e = nt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = qe.workingColorSpace) {
    qe.fromWorkingColorSpace(vt.copy(this), t);
    const n = vt.r, i = vt.g, s = vt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const u = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const h = a - o;
      switch (l = u <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case n:
          c = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / h + 2;
          break;
        case s:
          c = (n - i) / h + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = u, e;
  }
  getRGB(e, t = qe.workingColorSpace) {
    return qe.fromWorkingColorSpace(vt.copy(this), t), e.r = vt.r, e.g = vt.g, e.b = vt.b, e;
  }
  getStyle(e = nt) {
    qe.fromWorkingColorSpace(vt.copy(this), e);
    const t = vt.r, n = vt.g, i = vt.b;
    return e !== nt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(_n), this.setHSL(_n.h + e, _n.s + t, _n.l + n);
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
    this.getHSL(_n), e.getHSL(sr);
    const n = Hi(_n.h, sr.h, t), i = Hi(_n.s, sr.s, t), s = Hi(_n.l, sr.l, t);
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
const vt = /* @__PURE__ */ new we();
we.NAMES = Rc;
let wu = 0;
class Yt extends Xn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: wu++ }), this.uuid = Vt(), this.name = "", this.type = "Material", this.blending = di, this.side = hn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = ws, this.blendDst = Rs, this.blendEquation = Un, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new we(0, 0, 0), this.blendAlpha = 0, this.depthFunc = wr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ja, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Yn, this.stencilZFail = Yn, this.stencilZPass = Yn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== di && (n.blending = this.blending), this.side !== hn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== ws && (n.blendSrc = this.blendSrc), this.blendDst !== Rs && (n.blendDst = this.blendDst), this.blendEquation !== Un && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== wr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ja && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Yn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Yn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Yn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
class On extends Yt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new we(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = lc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ot = /* @__PURE__ */ new C(), ar = /* @__PURE__ */ new Ce();
class bt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Is, this.updateRange = { offset: 0, count: -1 }, this.gpuType = cn, this.version = 0;
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
    return this.normalized && (n = jt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ye(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array), s = Ye(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Is && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Cc extends bt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Lc extends bt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class un extends bt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ru = 0;
const It = /* @__PURE__ */ new ze(), ls = /* @__PURE__ */ new et(), ii = /* @__PURE__ */ new C(), Pt = /* @__PURE__ */ new dn(), Ii = /* @__PURE__ */ new dn(), dt = /* @__PURE__ */ new C();
class $t extends Xn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ru++ }), this.uuid = Vt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (yc(e) ? Lc : Cc)(e, 1) : this.index = e, this;
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
    return It.makeRotationFromQuaternion(e), this.applyMatrix4(It), this;
  }
  rotateX(e) {
    return It.makeRotationX(e), this.applyMatrix4(It), this;
  }
  rotateY(e) {
    return It.makeRotationY(e), this.applyMatrix4(It), this;
  }
  rotateZ(e) {
    return It.makeRotationZ(e), this.applyMatrix4(It), this;
  }
  translate(e, t, n) {
    return It.makeTranslation(e, t, n), this.applyMatrix4(It), this;
  }
  scale(e, t, n) {
    return It.makeScale(e, t, n), this.applyMatrix4(It), this;
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
    return this.setAttribute("position", new un(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new dn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new C(-1 / 0, -1 / 0, -1 / 0),
        new C(1 / 0, 1 / 0, 1 / 0)
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
    this.boundingSphere === null && (this.boundingSphere = new Zt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Pt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Ii.setFromBufferAttribute(o), this.morphTargetsRelative ? (dt.addVectors(Pt.min, Ii.min), Pt.expandByPoint(dt), dt.addVectors(Pt.max, Ii.max), Pt.expandByPoint(dt)) : (Pt.expandByPoint(Ii.min), Pt.expandByPoint(Ii.max));
        }
      Pt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        dt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(dt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new bt(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], u = [];
    for (let A = 0; A < o; A++)
      l[A] = new C(), u[A] = new C();
    const h = new C(), d = new C(), m = new C(), g = new Ce(), _ = new Ce(), p = new Ce(), f = new C(), E = new C();
    function x(A, V, J) {
      h.fromArray(i, A * 3), d.fromArray(i, V * 3), m.fromArray(i, J * 3), g.fromArray(a, A * 2), _.fromArray(a, V * 2), p.fromArray(a, J * 2), d.sub(h), m.sub(h), _.sub(g), p.sub(g);
      const Q = 1 / (_.x * p.y - p.x * _.y);
      isFinite(Q) && (f.copy(d).multiplyScalar(p.y).addScaledVector(m, -_.y).multiplyScalar(Q), E.copy(m).multiplyScalar(_.x).addScaledVector(d, -p.x).multiplyScalar(Q), l[A].add(f), l[V].add(f), l[J].add(f), u[A].add(E), u[V].add(E), u[J].add(E));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, V = T.length; A < V; ++A) {
      const J = T[A], Q = J.start, D = J.count;
      for (let G = Q, Y = Q + D; G < Y; G += 3)
        x(
          n[G + 0],
          n[G + 1],
          n[G + 2]
        );
    }
    const b = new C(), L = new C(), w = new C(), H = new C();
    function S(A) {
      w.fromArray(s, A * 3), H.copy(w);
      const V = l[A];
      b.copy(V), b.sub(w.multiplyScalar(w.dot(V))).normalize(), L.crossVectors(H, V);
      const Q = L.dot(u[A]) < 0 ? -1 : 1;
      c[A * 4] = b.x, c[A * 4 + 1] = b.y, c[A * 4 + 2] = b.z, c[A * 4 + 3] = Q;
    }
    for (let A = 0, V = T.length; A < V; ++A) {
      const J = T[A], Q = J.start, D = J.count;
      for (let G = Q, Y = Q + D; G < Y; G += 3)
        S(n[G + 0]), S(n[G + 1]), S(n[G + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new bt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new C(), s = new C(), a = new C(), o = new C(), c = new C(), l = new C(), u = new C(), h = new C();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), _ = e.getX(d + 1), p = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, p), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, p), o.add(u), c.add(u), l.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
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
      const l = o.array, u = o.itemSize, h = o.normalized, d = new l.constructor(c.length * u);
      let m = 0, g = 0;
      for (let _ = 0, p = c.length; _ < p; _++) {
        o.isInterleavedBufferAttribute ? m = c[_] * o.data.stride + o.offset : m = c[_] * u;
        for (let f = 0; f < u; f++)
          d[g++] = l[m++];
      }
      return new bt(d, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new $t(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let u = 0, h = l.length; u < h; u++) {
        const d = l[u], m = e(d, n);
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
      const l = this.morphAttributes[c], u = [];
      for (let h = 0, d = l.length; h < d; h++) {
        const m = l[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (i[c] = u, s = !0);
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
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = [], h = s[l];
      for (let d = 0, m = h.length; d < m; d++)
        u.push(h[d].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const h = a[l];
      this.addGroup(h.start, h.count, h.materialIndex);
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
const oo = /* @__PURE__ */ new ze(), Ln = /* @__PURE__ */ new Xi(), or = /* @__PURE__ */ new Zt(), co = /* @__PURE__ */ new C(), ri = /* @__PURE__ */ new C(), si = /* @__PURE__ */ new C(), ai = /* @__PURE__ */ new C(), us = /* @__PURE__ */ new C(), cr = /* @__PURE__ */ new C(), lr = /* @__PURE__ */ new Ce(), ur = /* @__PURE__ */ new Ce(), hr = /* @__PURE__ */ new Ce(), lo = /* @__PURE__ */ new C(), uo = /* @__PURE__ */ new C(), ho = /* @__PURE__ */ new C(), dr = /* @__PURE__ */ new C(), fr = /* @__PURE__ */ new C();
class Bt extends et {
  constructor(e = new $t(), t = new On()) {
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
        const u = o[c], h = s[c];
        u !== 0 && (us.fromBufferAttribute(h, e), a ? cr.addScaledVector(us, u) : cr.addScaledVector(us.sub(t), u));
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
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, d = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const p = d[g], f = a[p.materialIndex], E = Math.max(p.start, m.start), x = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
          for (let T = E, b = x; T < b; T += 3) {
            const L = o.getX(T), w = o.getX(T + 1), H = o.getX(T + 2);
            i = pr(this, f, e, n, l, u, h, L, w, H), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(o.count, m.start + m.count);
        for (let p = g, f = _; p < f; p += 3) {
          const E = o.getX(p), x = o.getX(p + 1), T = o.getX(p + 2);
          i = pr(this, a, e, n, l, u, h, E, x, T), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const p = d[g], f = a[p.materialIndex], E = Math.max(p.start, m.start), x = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
          for (let T = E, b = x; T < b; T += 3) {
            const L = T, w = T + 1, H = T + 2;
            i = pr(this, f, e, n, l, u, h, L, w, H), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(c.count, m.start + m.count);
        for (let p = g, f = _; p < f; p += 3) {
          const E = p, x = p + 1, T = p + 2;
          i = pr(this, a, e, n, l, u, h, E, x, T), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
  }
}
function Cu(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === wt ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === hn, o), c === null) return null;
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
  const u = Cu(r, e, t, n, ri, si, ai, dr);
  if (u) {
    i && (lr.fromBufferAttribute(i, o), ur.fromBufferAttribute(i, c), hr.fromBufferAttribute(i, l), u.uv = kt.getInterpolation(dr, ri, si, ai, lr, ur, hr, new Ce())), s && (lr.fromBufferAttribute(s, o), ur.fromBufferAttribute(s, c), hr.fromBufferAttribute(s, l), u.uv1 = kt.getInterpolation(dr, ri, si, ai, lr, ur, hr, new Ce()), u.uv2 = u.uv1), a && (lo.fromBufferAttribute(a, o), uo.fromBufferAttribute(a, c), ho.fromBufferAttribute(a, l), u.normal = kt.getInterpolation(dr, ri, si, ai, lo, uo, ho, new C()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = {
      a: o,
      b: c,
      c: l,
      normal: new C(),
      materialIndex: 0
    };
    kt.getNormal(ri, si, ai, h.normal), u.face = h;
  }
  return u;
}
class qi extends $t {
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
    const c = [], l = [], u = [], h = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new un(l, 3)), this.setAttribute("normal", new un(u, 3)), this.setAttribute("uv", new un(h, 2));
    function g(_, p, f, E, x, T, b, L, w, H, S) {
      const A = T / w, V = b / H, J = T / 2, Q = b / 2, D = L / 2, G = w + 1, Y = H + 1;
      let X = 0, ee = 0;
      const q = new C();
      for (let K = 0; K < Y; K++) {
        const I = K * V - Q;
        for (let W = 0; W < G; W++) {
          const le = W * A - J;
          q[_] = le * E, q[p] = I * x, q[f] = D, l.push(q.x, q.y, q.z), q[_] = 0, q[p] = 0, q[f] = L > 0 ? 1 : -1, u.push(q.x, q.y, q.z), h.push(W / w), h.push(1 - K / H), X += 1;
        }
      }
      for (let K = 0; K < H; K++)
        for (let I = 0; I < w; I++) {
          const W = d + I + G * K, le = d + I + G * (K + 1), ue = d + (I + 1) + G * (K + 1), fe = d + (I + 1) + G * K;
          c.push(W, le, fe), c.push(le, ue, fe), ee += 6;
        }
      o.addGroup(m, ee, S), m += ee, d += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new qi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Si(r) {
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
function yt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Si(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Lu(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function Pc(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : qe.workingColorSpace;
}
const Pu = { clone: Si, merge: yt };
var Du = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Iu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Vn extends Yt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Du, this.fragmentShader = Iu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Si(e.uniforms), this.uniformsGroups = Lu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ze(), this.projectionMatrix = new ze(), this.projectionMatrixInverse = new ze(), this.coordinateSystem = ln;
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
class Tt extends Dc {
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
    this.fov = Mi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(zi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Mi * 2 * Math.atan(
      Math.tan(zi * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(zi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
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
class Uu extends et {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Tt(oi, ci, e, t);
    i.layers = this.layers, this.add(i);
    const s = new Tt(oi, ci, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Tt(oi, ci, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Tt(oi, ci, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Tt(oi, ci, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Tt(oi, ci, e, t);
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
    const [s, a, o, c, l, u] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, u), e.setRenderTarget(h, d, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Ic extends pt {
  constructor(e, t, n, i, s, a, o, c, l, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : mi, super(e, t, n, i, s, a, o, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Nu extends kn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Hn ? nt : Ft), this.texture = new Ic(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At;
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
    }, i = new qi(5, 5, 5), s = new Vn({
      name: "CubemapFromEquirect",
      uniforms: Si(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: wt,
      blending: En
    });
    s.uniforms.tEquirect.value = t;
    const a = new Bt(i, s), o = t.minFilter;
    return t.minFilter === Gn && (t.minFilter = At), new Uu(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const hs = /* @__PURE__ */ new C(), Ou = /* @__PURE__ */ new C(), Fu = /* @__PURE__ */ new Be();
class vn {
  constructor(e = new C(1, 0, 0), t = 0) {
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
    const i = hs.subVectors(n, t).cross(Ou.subVectors(e, t)).normalize();
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
    const n = e.delta(hs), i = this.normal.dot(n);
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
    const n = t || Fu.getNormalMatrix(e), i = this.coplanarPoint(hs).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Pn = /* @__PURE__ */ new Zt(), mr = /* @__PURE__ */ new C();
class Ys {
  constructor(e = new vn(), t = new vn(), n = new vn(), i = new vn(), s = new vn(), a = new vn()) {
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
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], u = i[5], h = i[6], d = i[7], m = i[8], g = i[9], _ = i[10], p = i[11], f = i[12], E = i[13], x = i[14], T = i[15];
    if (n[0].setComponents(c - s, d - l, p - m, T - f).normalize(), n[1].setComponents(c + s, d + l, p + m, T + f).normalize(), n[2].setComponents(c + a, d + u, p + g, T + E).normalize(), n[3].setComponents(c - a, d - u, p - g, T - E).normalize(), n[4].setComponents(c - o, d - h, p - _, T - x).normalize(), t === ln)
      n[5].setComponents(c + o, d + h, p + _, T + x).normalize();
    else if (t === Dr)
      n[5].setComponents(o, h, _, x).normalize();
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
function Uc() {
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
function Bu(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, u) {
    const h = l.array, d = l.usage, m = r.createBuffer();
    r.bindBuffer(u, m), r.bufferData(u, h, d), l.onUploadCallback();
    let g;
    if (h instanceof Float32Array)
      g = r.FLOAT;
    else if (h instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = r.UNSIGNED_SHORT;
    else if (h instanceof Int16Array)
      g = r.SHORT;
    else if (h instanceof Uint32Array)
      g = r.UNSIGNED_INT;
    else if (h instanceof Int32Array)
      g = r.INT;
    else if (h instanceof Int8Array)
      g = r.BYTE;
    else if (h instanceof Uint8Array)
      g = r.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray)
      g = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: m,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, u, h) {
    const d = u.array, m = u.updateRange;
    r.bindBuffer(h, l), m.count === -1 ? r.bufferSubData(h, 0, d) : (t ? r.bufferSubData(
      h,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : r.bufferSubData(
      h,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), u.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (r.deleteBuffer(u.buffer), n.delete(l));
  }
  function c(l, u) {
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
    const h = n.get(l);
    h === void 0 ? n.set(l, i(l, u)) : h.version < l.version && (s(h.buffer, l, u), h.version = l.version);
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class Ks extends $t {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, u = c + 1, h = e / o, d = t / c, m = [], g = [], _ = [], p = [];
    for (let f = 0; f < u; f++) {
      const E = f * d - a;
      for (let x = 0; x < l; x++) {
        const T = x * h - s;
        g.push(T, -E, 0), _.push(0, 0, 1), p.push(x / o), p.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let E = 0; E < o; E++) {
        const x = E + l * f, T = E + l * (f + 1), b = E + 1 + l * (f + 1), L = E + 1 + l * f;
        m.push(x, T, L), m.push(T, b, L);
      }
    this.setIndex(m), this.setAttribute("position", new un(g, 3)), this.setAttribute("normal", new un(_, 3)), this.setAttribute("uv", new un(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ks(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var zu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Hu = `#ifdef USE_ALPHAHASH
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
#endif`, Gu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, ku = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Vu = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Wu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Xu = `#ifdef USE_AOMAP
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
#endif`, qu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, ju = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Yu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ku = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Zu = `#ifdef USE_IRIDESCENCE
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
#endif`, $u = `#ifdef USE_BUMPMAP
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
#endif`, Ju = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Qu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, eh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, th = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, nh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, ih = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, rh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, sh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, ah = `#define PI 3.141592653589793
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
} // validated`, oh = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, ch = `vec3 transformedNormal = objectNormal;
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
#endif`, lh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, uh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, hh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, dh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, fh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ph = `
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
}`, mh = `#ifdef USE_ENVMAP
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
#endif`, gh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, _h = `#ifdef USE_ENVMAP
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
#endif`, xh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, vh = `#ifdef USE_ENVMAP
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
#endif`, Mh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Sh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Eh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, yh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Th = `#ifdef USE_GRADIENTMAP
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
}`, bh = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Ah = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, wh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Rh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ch = `uniform bool receiveShadow;
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
#endif`, Lh = `#ifdef USE_ENVMAP
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
#endif`, Ph = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Dh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ih = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Uh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Nh = `PhysicalMaterial material;
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
#endif`, Oh = `struct PhysicalMaterial {
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
}`, Fh = `
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
#endif`, Bh = `#if defined( RE_IndirectDiffuse )
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
#endif`, zh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Hh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Gh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, kh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Vh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Wh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Xh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, qh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, jh = `#if defined( USE_POINTS_UV )
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
#endif`, Yh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Kh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Zh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, $h = `#ifdef USE_MORPHNORMALS
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
#endif`, Jh = `#ifdef USE_MORPHTARGETS
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
#endif`, Qh = `#ifdef USE_MORPHTARGETS
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
#endif`, ud = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, hd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`, _d = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, xd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, vd = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Md = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Sd = `float getShadowMask() {
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
}`, Ed = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, yd = `#ifdef USE_SKINNING
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
#endif`, Td = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, bd = `#ifdef USE_SKINNING
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
#endif`, Id = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Ud = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
const Od = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Fd = `uniform sampler2D t2D;
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
}`, zd = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Hd = `varying vec3 vWorldDirection;
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
}`, kd = `#include <common>
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
}`, Xd = `#define DISTANCE
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
}`, qd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, jd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Yd = `uniform float scale;
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
}`, Kd = `uniform vec3 diffuse;
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
}`, Zd = `#include <common>
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
}`, $d = `uniform vec3 diffuse;
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
}`, Jd = `#define LAMBERT
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
}`, Qd = `#define LAMBERT
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
}`, uf = `#define TOON
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
}`, hf = `uniform float size;
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
}`, Oe = {
  alphahash_fragment: zu,
  alphahash_pars_fragment: Hu,
  alphamap_fragment: Gu,
  alphamap_pars_fragment: ku,
  alphatest_fragment: Vu,
  alphatest_pars_fragment: Wu,
  aomap_fragment: Xu,
  aomap_pars_fragment: qu,
  begin_vertex: ju,
  beginnormal_vertex: Yu,
  bsdfs: Ku,
  iridescence_fragment: Zu,
  bumpmap_pars_fragment: $u,
  clipping_planes_fragment: Ju,
  clipping_planes_pars_fragment: Qu,
  clipping_planes_pars_vertex: eh,
  clipping_planes_vertex: th,
  color_fragment: nh,
  color_pars_fragment: ih,
  color_pars_vertex: rh,
  color_vertex: sh,
  common: ah,
  cube_uv_reflection_fragment: oh,
  defaultnormal_vertex: ch,
  displacementmap_pars_vertex: lh,
  displacementmap_vertex: uh,
  emissivemap_fragment: hh,
  emissivemap_pars_fragment: dh,
  colorspace_fragment: fh,
  colorspace_pars_fragment: ph,
  envmap_fragment: mh,
  envmap_common_pars_fragment: gh,
  envmap_pars_fragment: _h,
  envmap_pars_vertex: xh,
  envmap_physical_pars_fragment: Lh,
  envmap_vertex: vh,
  fog_vertex: Mh,
  fog_pars_vertex: Sh,
  fog_fragment: Eh,
  fog_pars_fragment: yh,
  gradientmap_pars_fragment: Th,
  lightmap_fragment: bh,
  lightmap_pars_fragment: Ah,
  lights_lambert_fragment: wh,
  lights_lambert_pars_fragment: Rh,
  lights_pars_begin: Ch,
  lights_toon_fragment: Ph,
  lights_toon_pars_fragment: Dh,
  lights_phong_fragment: Ih,
  lights_phong_pars_fragment: Uh,
  lights_physical_fragment: Nh,
  lights_physical_pars_fragment: Oh,
  lights_fragment_begin: Fh,
  lights_fragment_maps: Bh,
  lights_fragment_end: zh,
  logdepthbuf_fragment: Hh,
  logdepthbuf_pars_fragment: Gh,
  logdepthbuf_pars_vertex: kh,
  logdepthbuf_vertex: Vh,
  map_fragment: Wh,
  map_pars_fragment: Xh,
  map_particle_fragment: qh,
  map_particle_pars_fragment: jh,
  metalnessmap_fragment: Yh,
  metalnessmap_pars_fragment: Kh,
  morphcolor_vertex: Zh,
  morphnormal_vertex: $h,
  morphtarget_pars_vertex: Jh,
  morphtarget_vertex: Qh,
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
  opaque_fragment: ud,
  packing: hd,
  premultiplied_alpha_fragment: dd,
  project_vertex: fd,
  dithering_fragment: pd,
  dithering_pars_fragment: md,
  roughnessmap_fragment: gd,
  roughnessmap_pars_fragment: _d,
  shadowmap_pars_fragment: xd,
  shadowmap_pars_vertex: vd,
  shadowmap_vertex: Md,
  shadowmask_pars_fragment: Sd,
  skinbase_vertex: Ed,
  skinning_pars_vertex: yd,
  skinning_vertex: Td,
  skinnormal_vertex: bd,
  specularmap_fragment: Ad,
  specularmap_pars_fragment: wd,
  tonemapping_fragment: Rd,
  tonemapping_pars_fragment: Cd,
  transmission_fragment: Ld,
  transmission_pars_fragment: Pd,
  uv_pars_fragment: Dd,
  uv_pars_vertex: Id,
  uv_vertex: Ud,
  worldpos_vertex: Nd,
  background_vert: Od,
  background_frag: Fd,
  backgroundCube_vert: Bd,
  backgroundCube_frag: zd,
  cube_vert: Hd,
  cube_frag: Gd,
  depth_vert: kd,
  depth_frag: Vd,
  distanceRGBA_vert: Wd,
  distanceRGBA_frag: Xd,
  equirect_vert: qd,
  equirect_frag: jd,
  linedashed_vert: Yd,
  linedashed_frag: Kd,
  meshbasic_vert: Zd,
  meshbasic_frag: $d,
  meshlambert_vert: Jd,
  meshlambert_frag: Qd,
  meshmatcap_vert: ef,
  meshmatcap_frag: tf,
  meshnormal_vert: nf,
  meshnormal_frag: rf,
  meshphong_vert: sf,
  meshphong_frag: af,
  meshphysical_vert: of,
  meshphysical_frag: cf,
  meshtoon_vert: lf,
  meshtoon_frag: uf,
  points_vert: hf,
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
}, Xt = {
  basic: {
    uniforms: /* @__PURE__ */ yt([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ yt([
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
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ yt([
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
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ yt([
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
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ yt([
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
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ yt([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ yt([
      oe.points,
      oe.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ yt([
      oe.common,
      oe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Oe.linedashed_vert,
    fragmentShader: Oe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ yt([
      oe.common,
      oe.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ yt([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ yt([
      oe.sprite,
      oe.fog
    ]),
    vertexShader: Oe.sprite_vert,
    fragmentShader: Oe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Be() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.background_vert,
    fragmentShader: Oe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.backgroundCube_vert,
    fragmentShader: Oe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Oe.cube_vert,
    fragmentShader: Oe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Oe.equirect_vert,
    fragmentShader: Oe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ yt([
      oe.common,
      oe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new C() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Oe.distanceRGBA_vert,
    fragmentShader: Oe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ yt([
      oe.lights,
      oe.fog,
      {
        color: { value: /* @__PURE__ */ new we(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
Xt.physical = {
  uniforms: /* @__PURE__ */ yt([
    Xt.standard.uniforms,
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
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const gr = { r: 0, b: 0, g: 0 };
function _f(r, e, t, n, i, s, a) {
  const o = new we(0);
  let c = s === !0 ? 0 : 1, l, u, h = null, d = 0, m = null;
  function g(p, f) {
    let E = !1, x = f.isScene === !0 ? f.background : null;
    x && x.isTexture && (x = (f.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? _(o, c) : x && x.isColor && (_(x, 1), E = !0);
    const T = r.xr.getEnvironmentBlendMode();
    T === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || E) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), x && (x.isCubeTexture || x.mapping === Ur) ? (u === void 0 && (u = new Bt(
      new qi(1, 1, 1),
      new Vn({
        name: "BackgroundCubeMaterial",
        uniforms: Si(Xt.backgroundCube.uniforms),
        vertexShader: Xt.backgroundCube.vertexShader,
        fragmentShader: Xt.backgroundCube.fragmentShader,
        side: wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(b, L, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = x, u.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = f.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, u.material.toneMapped = qe.getTransfer(x.colorSpace) !== Je, (h !== x || d !== x.version || m !== r.toneMapping) && (u.material.needsUpdate = !0, h = x, d = x.version, m = r.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new Bt(
      new Ks(2, 2),
      new Vn({
        name: "BackgroundMaterial",
        uniforms: Si(Xt.background.uniforms),
        vertexShader: Xt.background.vertexShader,
        fragmentShader: Xt.background.fragmentShader,
        side: hn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, l.material.toneMapped = qe.getTransfer(x.colorSpace) !== Je, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (h !== x || d !== x.version || m !== r.toneMapping) && (l.material.needsUpdate = !0, h = x, d = x.version, m = r.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null));
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
function xf(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = p(null);
  let l = c, u = !1;
  function h(D, G, Y, X, ee) {
    let q = !1;
    if (a) {
      const K = _(X, Y, G);
      l !== K && (l = K, m(l.object)), q = f(D, X, Y, ee), q && E(D, X, Y, ee);
    } else {
      const K = G.wireframe === !0;
      (l.geometry !== X.id || l.program !== Y.id || l.wireframe !== K) && (l.geometry = X.id, l.program = Y.id, l.wireframe = K, q = !0);
    }
    ee !== null && t.update(ee, r.ELEMENT_ARRAY_BUFFER), (q || u) && (u = !1, H(D, G, Y, X), ee !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(ee).buffer));
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
  function _(D, G, Y) {
    const X = Y.wireframe === !0;
    let ee = o[D.id];
    ee === void 0 && (ee = {}, o[D.id] = ee);
    let q = ee[G.id];
    q === void 0 && (q = {}, ee[G.id] = q);
    let K = q[X];
    return K === void 0 && (K = p(d()), q[X] = K), K;
  }
  function p(D) {
    const G = [], Y = [], X = [];
    for (let ee = 0; ee < i; ee++)
      G[ee] = 0, Y[ee] = 0, X[ee] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: Y,
      attributeDivisors: X,
      object: D,
      attributes: {},
      index: null
    };
  }
  function f(D, G, Y, X) {
    const ee = l.attributes, q = G.attributes;
    let K = 0;
    const I = Y.getAttributes();
    for (const W in I)
      if (I[W].location >= 0) {
        const ue = ee[W];
        let fe = q[W];
        if (fe === void 0 && (W === "instanceMatrix" && D.instanceMatrix && (fe = D.instanceMatrix), W === "instanceColor" && D.instanceColor && (fe = D.instanceColor)), ue === void 0 || ue.attribute !== fe || fe && ue.data !== fe.data) return !0;
        K++;
      }
    return l.attributesNum !== K || l.index !== X;
  }
  function E(D, G, Y, X) {
    const ee = {}, q = G.attributes;
    let K = 0;
    const I = Y.getAttributes();
    for (const W in I)
      if (I[W].location >= 0) {
        let ue = q[W];
        ue === void 0 && (W === "instanceMatrix" && D.instanceMatrix && (ue = D.instanceMatrix), W === "instanceColor" && D.instanceColor && (ue = D.instanceColor));
        const fe = {};
        fe.attribute = ue, ue && ue.data && (fe.data = ue.data), ee[W] = fe, K++;
      }
    l.attributes = ee, l.attributesNum = K, l.index = X;
  }
  function x() {
    const D = l.newAttributes;
    for (let G = 0, Y = D.length; G < Y; G++)
      D[G] = 0;
  }
  function T(D) {
    b(D, 0);
  }
  function b(D, G) {
    const Y = l.newAttributes, X = l.enabledAttributes, ee = l.attributeDivisors;
    Y[D] = 1, X[D] === 0 && (r.enableVertexAttribArray(D), X[D] = 1), ee[D] !== G && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, G), ee[D] = G);
  }
  function L() {
    const D = l.newAttributes, G = l.enabledAttributes;
    for (let Y = 0, X = G.length; Y < X; Y++)
      G[Y] !== D[Y] && (r.disableVertexAttribArray(Y), G[Y] = 0);
  }
  function w(D, G, Y, X, ee, q, K) {
    K === !0 ? r.vertexAttribIPointer(D, G, Y, ee, q) : r.vertexAttribPointer(D, G, Y, X, ee, q);
  }
  function H(D, G, Y, X) {
    if (n.isWebGL2 === !1 && (D.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const ee = X.attributes, q = Y.getAttributes(), K = G.defaultAttributeValues;
    for (const I in q) {
      const W = q[I];
      if (W.location >= 0) {
        let le = ee[I];
        if (le === void 0 && (I === "instanceMatrix" && D.instanceMatrix && (le = D.instanceMatrix), I === "instanceColor" && D.instanceColor && (le = D.instanceColor)), le !== void 0) {
          const ue = le.normalized, fe = le.itemSize, ye = t.get(le);
          if (ye === void 0) continue;
          const He = ye.buffer, Te = ye.type, Le = ye.bytesPerElement, $e = n.isWebGL2 === !0 && (Te === r.INT || Te === r.UNSIGNED_INT || le.gpuType === dc);
          if (le.isInterleavedBufferAttribute) {
            const Ne = le.data, N = Ne.stride, _t = le.offset;
            if (Ne.isInstancedInterleavedBuffer) {
              for (let ve = 0; ve < W.locationSize; ve++)
                b(W.location + ve, Ne.meshPerAttribute);
              D.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = Ne.meshPerAttribute * Ne.count);
            } else
              for (let ve = 0; ve < W.locationSize; ve++)
                T(W.location + ve);
            r.bindBuffer(r.ARRAY_BUFFER, He);
            for (let ve = 0; ve < W.locationSize; ve++)
              w(
                W.location + ve,
                fe / W.locationSize,
                Te,
                ue,
                N * Le,
                (_t + fe / W.locationSize * ve) * Le,
                $e
              );
          } else {
            if (le.isInstancedBufferAttribute) {
              for (let Ne = 0; Ne < W.locationSize; Ne++)
                b(W.location + Ne, le.meshPerAttribute);
              D.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let Ne = 0; Ne < W.locationSize; Ne++)
                T(W.location + Ne);
            r.bindBuffer(r.ARRAY_BUFFER, He);
            for (let Ne = 0; Ne < W.locationSize; Ne++)
              w(
                W.location + Ne,
                fe / W.locationSize,
                Te,
                ue,
                fe * Le,
                fe / W.locationSize * Ne * Le,
                $e
              );
          }
        } else if (K !== void 0) {
          const ue = K[I];
          if (ue !== void 0)
            switch (ue.length) {
              case 2:
                r.vertexAttrib2fv(W.location, ue);
                break;
              case 3:
                r.vertexAttrib3fv(W.location, ue);
                break;
              case 4:
                r.vertexAttrib4fv(W.location, ue);
                break;
              default:
                r.vertexAttrib1fv(W.location, ue);
            }
        }
      }
    }
    L();
  }
  function S() {
    J();
    for (const D in o) {
      const G = o[D];
      for (const Y in G) {
        const X = G[Y];
        for (const ee in X)
          g(X[ee].object), delete X[ee];
        delete G[Y];
      }
      delete o[D];
    }
  }
  function A(D) {
    if (o[D.id] === void 0) return;
    const G = o[D.id];
    for (const Y in G) {
      const X = G[Y];
      for (const ee in X)
        g(X[ee].object), delete X[ee];
      delete G[Y];
    }
    delete o[D.id];
  }
  function V(D) {
    for (const G in o) {
      const Y = o[G];
      if (Y[D.id] === void 0) continue;
      const X = Y[D.id];
      for (const ee in X)
        g(X[ee].object), delete X[ee];
      delete Y[D.id];
    }
  }
  function J() {
    Q(), u = !0, l !== c && (l = c, m(l.object));
  }
  function Q() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: h,
    reset: J,
    resetDefaultState: Q,
    dispose: S,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: V,
    initAttributes: x,
    enableAttribute: T,
    disableUnusedAttributes: L
  };
}
function vf(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(l) {
    s = l;
  }
  function o(l, u) {
    r.drawArrays(s, l, u), t.update(u, s, 1);
  }
  function c(l, u, h) {
    if (h === 0) return;
    let d, m;
    if (i)
      d = r, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, l, u, h), t.update(u, s, h);
  }
  this.setMode = a, this.render = o, this.renderInstances = c;
}
function Mf(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(w) {
    if (w === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), p = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), f = r.getParameter(r.MAX_VARYING_VECTORS), E = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), x = d > 0, T = a || e.has("OES_texture_float"), b = x && T, L = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: p,
    maxVaryings: f,
    maxFragmentUniforms: E,
    vertexTextures: x,
    floatFragmentTextures: T,
    floatVertexTextures: b,
    maxSamples: L
  };
}
function Sf(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new vn(), o = new Be(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
    const m = h.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = h.length, m;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(h, d) {
    t = u(h, d, 0);
  }, this.setState = function(h, d, m) {
    const g = h.clippingPlanes, _ = h.clipIntersection, p = h.clipShadows, f = r.get(h);
    if (!i || g === null || g.length === 0 || s && !p)
      s ? u(null) : l();
    else {
      const E = s ? 0 : n, x = E * 4;
      let T = f.clippingState || null;
      c.value = T, T = u(g, d, x, m);
      for (let b = 0; b !== x; ++b)
        T[b] = t[b];
      f.clippingState = T, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, d, m, g) {
    const _ = h !== null ? h.length : 0;
    let p = null;
    if (_ !== 0) {
      if (p = c.value, g !== !0 || p === null) {
        const f = m + _ * 4, E = d.matrixWorldInverse;
        o.getNormalMatrix(E), (p === null || p.length < f) && (p = new Float32Array(f));
        for (let x = 0, T = m; x !== _; ++x, T += 4)
          a.copy(h[x]).applyMatrix4(E, o), a.normal.toArray(p, T), p[T + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, p;
  }
}
function Ef(r) {
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
            const l = new Nu(c.height / 2);
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
class Zs extends Dc {
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
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= u * this.view.offsetY, c = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const hi = 4, fo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Nn = 20, ds = /* @__PURE__ */ new Zs(), po = /* @__PURE__ */ new we();
let fs = null, ps = 0, ms = 0;
const In = (1 + Math.sqrt(5)) / 2, li = 1 / In, mo = [
  /* @__PURE__ */ new C(1, 1, 1),
  /* @__PURE__ */ new C(-1, 1, 1),
  /* @__PURE__ */ new C(1, 1, -1),
  /* @__PURE__ */ new C(-1, 1, -1),
  /* @__PURE__ */ new C(0, In, li),
  /* @__PURE__ */ new C(0, In, -li),
  /* @__PURE__ */ new C(li, 0, In),
  /* @__PURE__ */ new C(-li, 0, In),
  /* @__PURE__ */ new C(In, li, 0),
  /* @__PURE__ */ new C(-In, li, 0)
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
    this._cubemapMaterial === null && (this._cubemapMaterial = vo(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = xo(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(fs, ps, ms), e.scissorTest = !1, _r(e, 0, 0, e.width, e.height);
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
      type: ki,
      format: Ot,
      colorSpace: gt,
      depthBuffer: !1
    }, i = _o(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _o(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = yf(s)), this._blurMaterial = Tf(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Bt(this._lodPlanes[0], e);
    this._renderer.compile(t, ds);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Tt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, d = u.toneMapping;
    u.getClearColor(po), u.toneMapping = yn, u.autoClear = !1;
    const m = new On({
      name: "PMREM.Background",
      side: wt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Bt(new qi(), m);
    let _ = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, _ = !0) : (m.color.copy(po), _ = !0);
    for (let f = 0; f < 6; f++) {
      const E = f % 3;
      E === 0 ? (o.up.set(0, c[f], 0), o.lookAt(l[f], 0, 0)) : E === 1 ? (o.up.set(0, 0, c[f]), o.lookAt(0, l[f], 0)) : (o.up.set(0, c[f], 0), o.lookAt(0, 0, l[f]));
      const x = this._cubeSize;
      _r(i, E * x, f > 2 ? x : 0, x, x), u.setRenderTarget(i), _ && u.render(g, o), u.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === mi || e.mapping === gi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = vo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = xo());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Bt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    _r(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ds);
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
    const u = 3, h = new Bt(this._lodPlanes[i], l), d = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Nn - 1), _ = s / g, p = isFinite(s) ? 1 + Math.floor(u * _) : Nn;
    p > Nn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);
    const f = [];
    let E = 0;
    for (let w = 0; w < Nn; ++w) {
      const H = w / _, S = Math.exp(-H * H / 2);
      f.push(S), w === 0 ? E += S : w < p && (E += 2 * S);
    }
    for (let w = 0; w < f.length; w++)
      f[w] = f[w] / E;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: x } = this;
    d.dTheta.value = g, d.mipInt.value = x - n;
    const T = this._sizeLods[i], b = 3 * T * (i > x - hi ? i - x + hi : 0), L = 4 * (this._cubeSize - T);
    _r(t, b, L, 3 * T, 2 * T), c.setRenderTarget(t), c.render(h, ds);
  }
}
function yf(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - hi + 1 + fo.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - hi ? c = fo[a - r + hi - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), u = -l, h = 1 + l, d = [u, u, h, u, h, h, u, u, h, h, u, h], m = 6, g = 6, _ = 3, p = 2, f = 1, E = new Float32Array(_ * g * m), x = new Float32Array(p * g * m), T = new Float32Array(f * g * m);
    for (let L = 0; L < m; L++) {
      const w = L % 3 * 2 / 3 - 1, H = L > 2 ? 0 : -1, S = [
        w,
        H,
        0,
        w + 2 / 3,
        H,
        0,
        w + 2 / 3,
        H + 1,
        0,
        w,
        H,
        0,
        w + 2 / 3,
        H + 1,
        0,
        w,
        H + 1,
        0
      ];
      E.set(S, _ * g * L), x.set(d, p * g * L);
      const A = [L, L, L, L, L, L];
      T.set(A, f * g * L);
    }
    const b = new $t();
    b.setAttribute("position", new bt(E, _)), b.setAttribute("uv", new bt(x, p)), b.setAttribute("faceIndex", new bt(T, f)), e.push(b), i > hi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function _o(r, e, t) {
  const n = new kn(r, e, t);
  return n.texture.mapping = Ur, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function _r(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Tf(r, e, t) {
  const n = new Float32Array(Nn), i = new C(0, 1, 0);
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
    vertexShader: $s(),
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
    blending: En,
    depthTest: !1,
    depthWrite: !1
  });
}
function xo() {
  return new Vn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: $s(),
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
    blending: En,
    depthTest: !1,
    depthWrite: !1
  });
}
function vo() {
  return new Vn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: $s(),
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
    blending: En,
    depthTest: !1,
    depthWrite: !1
  });
}
function $s() {
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
function bf(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Cs || c === Ls, u = c === mi || c === gi;
      if (l || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return t === null && (t = new go(r)), h = l ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), e.set(o, h), h.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const h = o.image;
            if (l && h && h.height > 0 || u && h && i(h)) {
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
    for (let u = 0; u < l; u++)
      o[u] !== void 0 && c++;
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
  function a(h) {
    const d = h.target;
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
  function o(h, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(h) {
    const d = h.attributes;
    for (const g in d)
      e.update(d[g], r.ARRAY_BUFFER);
    const m = h.morphAttributes;
    for (const g in m) {
      const _ = m[g];
      for (let p = 0, f = _.length; p < f; p++)
        e.update(_[p], r.ARRAY_BUFFER);
    }
  }
  function l(h) {
    const d = [], m = h.index, g = h.attributes.position;
    let _ = 0;
    if (m !== null) {
      const E = m.array;
      _ = m.version;
      for (let x = 0, T = E.length; x < T; x += 3) {
        const b = E[x + 0], L = E[x + 1], w = E[x + 2];
        d.push(b, L, L, w, w, b);
      }
    } else if (g !== void 0) {
      const E = g.array;
      _ = g.version;
      for (let x = 0, T = E.length / 3 - 1; x < T; x += 3) {
        const b = x + 0, L = x + 1, w = x + 2;
        d.push(b, L, L, w, w, b);
      }
    } else
      return;
    const p = new (yc(d) ? Lc : Cc)(d, 1);
    p.version = _;
    const f = s.get(h);
    f && e.remove(f), s.set(h, p);
  }
  function u(h) {
    const d = s.get(h);
    if (d) {
      const m = h.index;
      m !== null && d.version < m.version && l(h);
    } else
      l(h);
    return s.get(h);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: u
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
  function u(d, m) {
    r.drawElements(s, m, o, d * c), t.update(m, s, 1);
  }
  function h(d, m, g) {
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
  this.setMode = a, this.setIndex = l, this.render = u, this.renderInstances = h;
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
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new Ke(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, u, h) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let _ = s.get(u);
      if (_ === void 0 || _.count !== g) {
        let D = function() {
          J.dispose(), s.delete(u), u.removeEventListener("dispose", D);
        };
        _ !== void 0 && _.texture.dispose();
        const E = u.morphAttributes.position !== void 0, x = u.morphAttributes.normal !== void 0, T = u.morphAttributes.color !== void 0, b = u.morphAttributes.position || [], L = u.morphAttributes.normal || [], w = u.morphAttributes.color || [];
        let H = 0;
        E === !0 && (H = 1), x === !0 && (H = 2), T === !0 && (H = 3);
        let S = u.attributes.position.count * H, A = 1;
        S > e.maxTextureSize && (A = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
        const V = new Float32Array(S * A * 4 * g), J = new Ac(V, S, A, g);
        J.type = cn, J.needsUpdate = !0;
        const Q = H * 4;
        for (let G = 0; G < g; G++) {
          const Y = b[G], X = L[G], ee = w[G], q = S * A * 4 * G;
          for (let K = 0; K < Y.count; K++) {
            const I = K * Q;
            E === !0 && (a.fromBufferAttribute(Y, K), V[q + I + 0] = a.x, V[q + I + 1] = a.y, V[q + I + 2] = a.z, V[q + I + 3] = 0), x === !0 && (a.fromBufferAttribute(X, K), V[q + I + 4] = a.x, V[q + I + 5] = a.y, V[q + I + 6] = a.z, V[q + I + 7] = 0), T === !0 && (a.fromBufferAttribute(ee, K), V[q + I + 8] = a.x, V[q + I + 9] = a.y, V[q + I + 10] = a.z, V[q + I + 11] = ee.itemSize === 4 ? a.w : 1);
          }
        }
        _ = {
          count: g,
          texture: J,
          size: new Ce(S, A)
        }, s.set(u, _), u.addEventListener("dispose", D);
      }
      let p = 0;
      for (let E = 0; E < d.length; E++)
        p += d[E];
      const f = u.morphTargetsRelative ? 1 : 1 - p;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", f), h.getUniforms().setValue(r, "morphTargetInfluences", d), h.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), h.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let g = n[u.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let x = 0; x < m; x++)
          g[x] = [x, 0];
        n[u.id] = g;
      }
      for (let x = 0; x < m; x++) {
        const T = g[x];
        T[0] = x, T[1] = d[x];
      }
      g.sort(Pf);
      for (let x = 0; x < 8; x++)
        x < m && g[x][1] ? (o[x][0] = g[x][0], o[x][1] = g[x][1]) : (o[x][0] = Number.MAX_SAFE_INTEGER, o[x][1] = 0);
      o.sort(Lf);
      const _ = u.morphAttributes.position, p = u.morphAttributes.normal;
      let f = 0;
      for (let x = 0; x < 8; x++) {
        const T = o[x], b = T[0], L = T[1];
        b !== Number.MAX_SAFE_INTEGER && L ? (_ && u.getAttribute("morphTarget" + x) !== _[b] && u.setAttribute("morphTarget" + x, _[b]), p && u.getAttribute("morphNormal" + x) !== p[b] && u.setAttribute("morphNormal" + x, p[b]), i[x] = L, f += L) : (_ && u.hasAttribute("morphTarget" + x) === !0 && u.deleteAttribute("morphTarget" + x), p && u.hasAttribute("morphNormal" + x) === !0 && u.deleteAttribute("morphNormal" + x), i[x] = 0);
      }
      const E = u.morphTargetsRelative ? 1 : 1 - f;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", E), h.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function If(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, u = c.geometry, h = e.get(c, u);
    if (i.get(h) !== l && (e.update(h), i.set(h, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return h;
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
const Nc = /* @__PURE__ */ new pt(), Oc = /* @__PURE__ */ new Ac(), Fc = /* @__PURE__ */ new xu(), Bc = /* @__PURE__ */ new Ic(), Mo = [], So = [], Eo = new Float32Array(16), yo = new Float32Array(9), To = new Float32Array(4);
function bi(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = Mo[i];
  if (s === void 0 && (s = new Float32Array(i), Mo[i] = s), e !== 0) {
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
function Fr(r, e) {
  let t = So[e];
  t === void 0 && (t = new Int32Array(e), So[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function Uf(r, e) {
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
function Of(r, e) {
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
function Ff(r, e) {
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
    To.set(n), r.uniformMatrix2fv(this.addr, !1, To), lt(t, n);
  }
}
function zf(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ct(t, n)) return;
    yo.set(n), r.uniformMatrix3fv(this.addr, !1, yo), lt(t, n);
  }
}
function Hf(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), lt(t, e);
  } else {
    if (ct(t, n)) return;
    Eo.set(n), r.uniformMatrix4fv(this.addr, !1, Eo), lt(t, n);
  }
}
function Gf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function kf(r, e) {
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
function Xf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function qf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e)) return;
    r.uniform2uiv(this.addr, e), lt(t, e);
  }
}
function jf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ct(t, e)) return;
    r.uniform3uiv(this.addr, e), lt(t, e);
  }
}
function Yf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e)) return;
    r.uniform4uiv(this.addr, e), lt(t, e);
  }
}
function Kf(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Nc, i);
}
function Zf(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Fc, i);
}
function $f(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Bc, i);
}
function Jf(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Oc, i);
}
function Qf(r) {
  switch (r) {
    case 5126:
      return Uf;
    case 35664:
      return Nf;
    case 35665:
      return Of;
    case 35666:
      return Ff;
    case 35674:
      return Bf;
    case 35675:
      return zf;
    case 35676:
      return Hf;
    case 5124:
    case 35670:
      return Gf;
    case 35667:
    case 35671:
      return kf;
    case 35668:
    case 35672:
      return Vf;
    case 35669:
    case 35673:
      return Wf;
    case 5125:
      return Xf;
    case 36294:
      return qf;
    case 36295:
      return jf;
    case 36296:
      return Yf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kf;
    case 35679:
    case 36299:
    case 36307:
      return Zf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $f;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Jf;
  }
}
function ep(r, e) {
  r.uniform1fv(this.addr, e);
}
function tp(r, e) {
  const t = bi(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function np(r, e) {
  const t = bi(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function ip(r, e) {
  const t = bi(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function rp(r, e) {
  const t = bi(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function sp(r, e) {
  const t = bi(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function ap(r, e) {
  const t = bi(e, this.size, 16);
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
function up(r, e) {
  r.uniform4iv(this.addr, e);
}
function hp(r, e) {
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
  const n = this.cache, i = e.length, s = Fr(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Nc, s[a]);
}
function gp(r, e, t) {
  const n = this.cache, i = e.length, s = Fr(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Fc, s[a]);
}
function _p(r, e, t) {
  const n = this.cache, i = e.length, s = Fr(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Bc, s[a]);
}
function xp(r, e, t) {
  const n = this.cache, i = e.length, s = Fr(t, i);
  ct(n, s) || (r.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || Oc, s[a]);
}
function vp(r) {
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
      return up;
    case 5125:
      return hp;
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
      return _p;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return xp;
  }
}
class Mp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Qf(t.type);
  }
}
class Sp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = vp(t.type);
  }
}
class Ep {
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
function bo(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function yp(r, e, t) {
  const n = r.name, i = n.length;
  for (gs.lastIndex = 0; ; ) {
    const s = gs.exec(n), a = gs.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      bo(t, l === void 0 ? new Mp(o, r, e) : new Sp(o, r, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new Ep(o), bo(t, h)), t = h;
    }
  }
}
class Ar {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      yp(s, a, this);
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
const Tp = 37297;
let bp = 0;
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
  const e = qe.getPrimaries(qe.workingColorSpace), t = qe.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === Pr && t === Lr ? n = "LinearDisplayP3ToLinearSRGB" : e === Lr && t === Pr && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case gt:
    case Nr:
      return [n, "LinearTransferOETF"];
    case nt:
    case qs:
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
const Ip = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Os(r) {
  return r.replace(Ip, Np);
}
const Up = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function Np(r, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = Up.get(e);
    if (n !== void 0)
      t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Os(t);
}
const Op = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Lo(r) {
  return r.replace(Op, Fp);
}
function Fp(r, e, t, n) {
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
function zp(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case mi:
      case gi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ur:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Hp(r) {
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
      case Tl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case bl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function kp(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Vp(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = Bp(t), l = zp(t), u = Hp(t), h = Gp(t), d = kp(t), m = t.isWebGL2 ? "" : Lp(t), g = Pp(s), _ = i.createProgram();
  let p, f, E = t.glslVersion ? "#version " + t.glslVersion + `
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
    t.envMap ? "#define " + u : "",
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
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
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
    t.toneMapping !== yn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== yn ? Oe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== yn ? Cp("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Rp("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Bi).join(`
`)), a = Os(a), a = Ro(a, t), a = Co(a, t), o = Os(o), o = Ro(o, t), o = Co(o, t), a = Lo(a), o = Lo(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (E = `#version 300 es
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
    t.glslVersion === Ya ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Ya ? "" : "#define gl_FragColor pc_fragColor",
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
  const x = E + p + a, T = E + f + o, b = Ao(i, i.VERTEX_SHADER, x), L = Ao(i, i.FRAGMENT_SHADER, T);
  i.attachShader(_, b), i.attachShader(_, L), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function w(V) {
    if (r.debug.checkShaderErrors) {
      const J = i.getProgramInfoLog(_).trim(), Q = i.getShaderInfoLog(b).trim(), D = i.getShaderInfoLog(L).trim();
      let G = !0, Y = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (G = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, _, b, L);
        else {
          const X = wo(i, b, "vertex"), ee = wo(i, L, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Program Info Log: ` + J + `
` + X + `
` + ee
          );
        }
      else J !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", J) : (Q === "" || D === "") && (Y = !1);
      Y && (V.diagnostics = {
        runnable: G,
        programLog: J,
        vertexShader: {
          log: Q,
          prefix: p
        },
        fragmentShader: {
          log: D,
          prefix: f
        }
      });
    }
    i.deleteShader(b), i.deleteShader(L), H = new Ar(i, _), S = Dp(i, _);
  }
  let H;
  this.getUniforms = function() {
    return H === void 0 && w(this), H;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && w(this), S;
  };
  let A = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return A === !1 && (A = i.getProgramParameter(_, Tp)), A;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = bp++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = b, this.fragmentShader = L, this;
}
let Wp = 0;
class Xp {
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
    return n === void 0 && (n = new qp(e), t.set(e, n)), n;
  }
}
class qp {
  constructor(e) {
    this.id = Wp++, this.code = e, this.usedTimes = 0;
  }
}
function jp(r, e, t, n, i, s, a) {
  const o = new wc(), c = new Xp(), l = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, d = i.vertexTextures;
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
  function _(S) {
    return S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, A, V, J, Q) {
    const D = J.fog, G = Q.geometry, Y = S.isMeshStandardMaterial ? J.environment : null, X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || Y), ee = X && X.mapping === Ur ? X.image.height : null, q = g[S.type];
    S.precision !== null && (m = i.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const K = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, I = K !== void 0 ? K.length : 0;
    let W = 0;
    G.morphAttributes.position !== void 0 && (W = 1), G.morphAttributes.normal !== void 0 && (W = 2), G.morphAttributes.color !== void 0 && (W = 3);
    let le, ue, fe, ye;
    if (q) {
      const st = Xt[q];
      le = st.vertexShader, ue = st.fragmentShader;
    } else
      le = S.vertexShader, ue = S.fragmentShader, c.update(S), fe = c.getVertexShaderID(S), ye = c.getFragmentShaderID(S);
    const He = r.getRenderTarget(), Te = Q.isInstancedMesh === !0, Le = !!S.map, $e = !!S.matcap, Ne = !!X, N = !!S.aoMap, _t = !!S.lightMap, ve = !!S.bumpMap, be = !!S.normalMap, Ae = !!S.displacementMap, Qe = !!S.emissiveMap, Ie = !!S.metalnessMap, Pe = !!S.roughnessMap, Xe = S.anisotropy > 0, rt = S.clearcoat > 0, ut = S.iridescence > 0, y = S.sheen > 0, v = S.transmission > 0, O = Xe && !!S.anisotropyMap, te = rt && !!S.clearcoatMap, Z = rt && !!S.clearcoatNormalMap, ne = rt && !!S.clearcoatRoughnessMap, me = ut && !!S.iridescenceMap, se = ut && !!S.iridescenceThicknessMap, ce = y && !!S.sheenColorMap, R = y && !!S.sheenRoughnessMap, re = !!S.specularMap, j = !!S.specularColorMap, Se = !!S.specularIntensityMap, ge = v && !!S.transmissionMap, Me = v && !!S.thicknessMap, pe = !!S.gradientMap, de = !!S.alphaMap, Ge = S.alphaTest > 0, P = !!S.alphaHash, ae = !!S.extensions, $ = !!G.attributes.uv1, k = !!G.attributes.uv2, ie = !!G.attributes.uv3;
    let xe = yn;
    return S.toneMapped && (He === null || He.isXRRenderTarget === !0) && (xe = r.toneMapping), {
      isWebGL2: u,
      shaderID: q,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: le,
      fragmentShader: ue,
      defines: S.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: ye,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      instancing: Te,
      instancingColor: Te && Q.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: He === null ? r.outputColorSpace : He.isXRRenderTarget === !0 ? He.texture.colorSpace : gt,
      map: Le,
      matcap: $e,
      envMap: Ne,
      envMapMode: Ne && X.mapping,
      envMapCubeUVHeight: ee,
      aoMap: N,
      lightMap: _t,
      bumpMap: ve,
      normalMap: be,
      displacementMap: d && Ae,
      emissiveMap: Qe,
      normalMapObjectSpace: be && S.normalMapType === Xl,
      normalMapTangentSpace: be && S.normalMapType === Mc,
      metalnessMap: Ie,
      roughnessMap: Pe,
      anisotropy: Xe,
      anisotropyMap: O,
      clearcoat: rt,
      clearcoatMap: te,
      clearcoatNormalMap: Z,
      clearcoatRoughnessMap: ne,
      iridescence: ut,
      iridescenceMap: me,
      iridescenceThicknessMap: se,
      sheen: y,
      sheenColorMap: ce,
      sheenRoughnessMap: R,
      specularMap: re,
      specularColorMap: j,
      specularIntensityMap: Se,
      transmission: v,
      transmissionMap: ge,
      thicknessMap: Me,
      gradientMap: pe,
      opaque: S.transparent === !1 && S.blending === di,
      alphaMap: de,
      alphaTest: Ge,
      alphaHash: P,
      combine: S.combine,
      //
      mapUv: Le && _(S.map.channel),
      aoMapUv: N && _(S.aoMap.channel),
      lightMapUv: _t && _(S.lightMap.channel),
      bumpMapUv: ve && _(S.bumpMap.channel),
      normalMapUv: be && _(S.normalMap.channel),
      displacementMapUv: Ae && _(S.displacementMap.channel),
      emissiveMapUv: Qe && _(S.emissiveMap.channel),
      metalnessMapUv: Ie && _(S.metalnessMap.channel),
      roughnessMapUv: Pe && _(S.roughnessMap.channel),
      anisotropyMapUv: O && _(S.anisotropyMap.channel),
      clearcoatMapUv: te && _(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Z && _(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ne && _(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: me && _(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: se && _(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: ce && _(S.sheenColorMap.channel),
      sheenRoughnessMapUv: R && _(S.sheenRoughnessMap.channel),
      specularMapUv: re && _(S.specularMap.channel),
      specularColorMapUv: j && _(S.specularColorMap.channel),
      specularIntensityMapUv: Se && _(S.specularIntensityMap.channel),
      transmissionMapUv: ge && _(S.transmissionMap.channel),
      thicknessMapUv: Me && _(S.thicknessMap.channel),
      alphaMapUv: de && _(S.alphaMap.channel),
      //
      vertexTangents: !!G.attributes.tangent && (be || Xe),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      vertexUv1s: $,
      vertexUv2s: k,
      vertexUv3s: ie,
      pointsUvs: Q.isPoints === !0 && !!G.attributes.uv && (Le || de),
      fog: !!D,
      useFog: S.fog === !0,
      fogExp2: D && D.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: Q.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: I,
      morphTextureStride: W,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numLightProbes: A.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: r.shadowMap.enabled && V.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: xe,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: Le && S.map.isVideoTexture === !0 && qe.getTransfer(S.map.colorSpace) === Je,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === qt,
      flipSided: S.side === wt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionDerivatives: ae && S.extensions.derivatives === !0,
      extensionFragDepth: ae && S.extensions.fragDepth === !0,
      extensionDrawBuffers: ae && S.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ae && S.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
  }
  function f(S) {
    const A = [];
    if (S.shaderID ? A.push(S.shaderID) : (A.push(S.customVertexShaderID), A.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const V in S.defines)
        A.push(V), A.push(S.defines[V]);
    return S.isRawShaderMaterial === !1 && (E(A, S), x(A, S), A.push(r.outputColorSpace)), A.push(S.customProgramCacheKey), A.join();
  }
  function E(S, A) {
    S.push(A.precision), S.push(A.outputColorSpace), S.push(A.envMapMode), S.push(A.envMapCubeUVHeight), S.push(A.mapUv), S.push(A.alphaMapUv), S.push(A.lightMapUv), S.push(A.aoMapUv), S.push(A.bumpMapUv), S.push(A.normalMapUv), S.push(A.displacementMapUv), S.push(A.emissiveMapUv), S.push(A.metalnessMapUv), S.push(A.roughnessMapUv), S.push(A.anisotropyMapUv), S.push(A.clearcoatMapUv), S.push(A.clearcoatNormalMapUv), S.push(A.clearcoatRoughnessMapUv), S.push(A.iridescenceMapUv), S.push(A.iridescenceThicknessMapUv), S.push(A.sheenColorMapUv), S.push(A.sheenRoughnessMapUv), S.push(A.specularMapUv), S.push(A.specularColorMapUv), S.push(A.specularIntensityMapUv), S.push(A.transmissionMapUv), S.push(A.thicknessMapUv), S.push(A.combine), S.push(A.fogExp2), S.push(A.sizeAttenuation), S.push(A.morphTargetsCount), S.push(A.morphAttributeCount), S.push(A.numDirLights), S.push(A.numPointLights), S.push(A.numSpotLights), S.push(A.numSpotLightMaps), S.push(A.numHemiLights), S.push(A.numRectAreaLights), S.push(A.numDirLightShadows), S.push(A.numPointLightShadows), S.push(A.numSpotLightShadows), S.push(A.numSpotLightShadowsWithMaps), S.push(A.numLightProbes), S.push(A.shadowMapType), S.push(A.toneMapping), S.push(A.numClippingPlanes), S.push(A.numClipIntersection), S.push(A.depthPacking);
  }
  function x(S, A) {
    o.disableAll(), A.isWebGL2 && o.enable(0), A.supportsVertexTextures && o.enable(1), A.instancing && o.enable(2), A.instancingColor && o.enable(3), A.matcap && o.enable(4), A.envMap && o.enable(5), A.normalMapObjectSpace && o.enable(6), A.normalMapTangentSpace && o.enable(7), A.clearcoat && o.enable(8), A.iridescence && o.enable(9), A.alphaTest && o.enable(10), A.vertexColors && o.enable(11), A.vertexAlphas && o.enable(12), A.vertexUv1s && o.enable(13), A.vertexUv2s && o.enable(14), A.vertexUv3s && o.enable(15), A.vertexTangents && o.enable(16), A.anisotropy && o.enable(17), A.alphaHash && o.enable(18), S.push(o.mask), o.disableAll(), A.fog && o.enable(0), A.useFog && o.enable(1), A.flatShading && o.enable(2), A.logarithmicDepthBuffer && o.enable(3), A.skinning && o.enable(4), A.morphTargets && o.enable(5), A.morphNormals && o.enable(6), A.morphColors && o.enable(7), A.premultipliedAlpha && o.enable(8), A.shadowMapEnabled && o.enable(9), A.useLegacyLights && o.enable(10), A.doubleSided && o.enable(11), A.flipSided && o.enable(12), A.useDepthPacking && o.enable(13), A.dithering && o.enable(14), A.transmission && o.enable(15), A.sheen && o.enable(16), A.opaque && o.enable(17), A.pointsUvs && o.enable(18), A.decodeVideoTexture && o.enable(19), S.push(o.mask);
  }
  function T(S) {
    const A = g[S.type];
    let V;
    if (A) {
      const J = Xt[A];
      V = Pu.clone(J.uniforms);
    } else
      V = S.uniforms;
    return V;
  }
  function b(S, A) {
    let V;
    for (let J = 0, Q = l.length; J < Q; J++) {
      const D = l[J];
      if (D.cacheKey === A) {
        V = D, ++V.usedTimes;
        break;
      }
    }
    return V === void 0 && (V = new Vp(r, A, S, s), l.push(V)), V;
  }
  function L(S) {
    if (--S.usedTimes === 0) {
      const A = l.indexOf(S);
      l[A] = l[l.length - 1], l.pop(), S.destroy();
    }
  }
  function w(S) {
    c.remove(S);
  }
  function H() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: T,
    acquireProgram: b,
    releaseProgram: L,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: H
  };
}
function Yp() {
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
function Kp(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Do(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Io() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(h, d, m, g, _, p) {
    let f = r[e];
    return f === void 0 ? (f = {
      id: h.id,
      object: h,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: _,
      group: p
    }, r[e] = f) : (f.id = h.id, f.object = h, f.geometry = d, f.material = m, f.groupOrder = g, f.renderOrder = h.renderOrder, f.z = _, f.group = p), e++, f;
  }
  function o(h, d, m, g, _, p) {
    const f = a(h, d, m, g, _, p);
    m.transmission > 0 ? n.push(f) : m.transparent === !0 ? i.push(f) : t.push(f);
  }
  function c(h, d, m, g, _, p) {
    const f = a(h, d, m, g, _, p);
    m.transmission > 0 ? n.unshift(f) : m.transparent === !0 ? i.unshift(f) : t.unshift(f);
  }
  function l(h, d) {
    t.length > 1 && t.sort(h || Kp), n.length > 1 && n.sort(d || Do), i.length > 1 && i.sort(d || Do);
  }
  function u() {
    for (let h = e, d = r.length; h < d; h++) {
      const m = r[h];
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
    finish: u,
    sort: l
  };
}
function Zp() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new Io(), r.set(n, [a])) : i >= s.length ? (a = new Io(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function $p() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new C(),
            color: new we()
          };
          break;
        case "SpotLight":
          t = {
            position: new C(),
            direction: new C(),
            color: new we(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new C(),
            color: new we(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new C(),
            skyColor: new we(),
            groundColor: new we()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new we(),
            position: new C(),
            halfWidth: new C(),
            halfHeight: new C()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function Jp() {
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
let Qp = 0;
function em(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function tm(r, e) {
  const t = new $p(), n = Jp(), i = {
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
  for (let u = 0; u < 9; u++) i.probe.push(new C());
  const s = new C(), a = new ze(), o = new ze();
  function c(u, h) {
    let d = 0, m = 0, g = 0;
    for (let J = 0; J < 9; J++) i.probe[J].set(0, 0, 0);
    let _ = 0, p = 0, f = 0, E = 0, x = 0, T = 0, b = 0, L = 0, w = 0, H = 0, S = 0;
    u.sort(em);
    const A = h === !0 ? Math.PI : 1;
    for (let J = 0, Q = u.length; J < Q; J++) {
      const D = u[J], G = D.color, Y = D.intensity, X = D.distance, ee = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        d += G.r * Y * A, m += G.g * Y * A, g += G.b * Y * A;
      else if (D.isLightProbe) {
        for (let q = 0; q < 9; q++)
          i.probe[q].addScaledVector(D.sh.coefficients[q], Y);
        S++;
      } else if (D.isDirectionalLight) {
        const q = t.get(D);
        if (q.color.copy(D.color).multiplyScalar(D.intensity * A), D.castShadow) {
          const K = D.shadow, I = n.get(D);
          I.shadowBias = K.bias, I.shadowNormalBias = K.normalBias, I.shadowRadius = K.radius, I.shadowMapSize = K.mapSize, i.directionalShadow[_] = I, i.directionalShadowMap[_] = ee, i.directionalShadowMatrix[_] = D.shadow.matrix, T++;
        }
        i.directional[_] = q, _++;
      } else if (D.isSpotLight) {
        const q = t.get(D);
        q.position.setFromMatrixPosition(D.matrixWorld), q.color.copy(G).multiplyScalar(Y * A), q.distance = X, q.coneCos = Math.cos(D.angle), q.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), q.decay = D.decay, i.spot[f] = q;
        const K = D.shadow;
        if (D.map && (i.spotLightMap[w] = D.map, w++, K.updateMatrices(D), D.castShadow && H++), i.spotLightMatrix[f] = K.matrix, D.castShadow) {
          const I = n.get(D);
          I.shadowBias = K.bias, I.shadowNormalBias = K.normalBias, I.shadowRadius = K.radius, I.shadowMapSize = K.mapSize, i.spotShadow[f] = I, i.spotShadowMap[f] = ee, L++;
        }
        f++;
      } else if (D.isRectAreaLight) {
        const q = t.get(D);
        q.color.copy(G).multiplyScalar(Y), q.halfWidth.set(D.width * 0.5, 0, 0), q.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[E] = q, E++;
      } else if (D.isPointLight) {
        const q = t.get(D);
        if (q.color.copy(D.color).multiplyScalar(D.intensity * A), q.distance = D.distance, q.decay = D.decay, D.castShadow) {
          const K = D.shadow, I = n.get(D);
          I.shadowBias = K.bias, I.shadowNormalBias = K.normalBias, I.shadowRadius = K.radius, I.shadowMapSize = K.mapSize, I.shadowCameraNear = K.camera.near, I.shadowCameraFar = K.camera.far, i.pointShadow[p] = I, i.pointShadowMap[p] = ee, i.pointShadowMatrix[p] = D.shadow.matrix, b++;
        }
        i.point[p] = q, p++;
      } else if (D.isHemisphereLight) {
        const q = t.get(D);
        q.skyColor.copy(D.color).multiplyScalar(Y * A), q.groundColor.copy(D.groundColor).multiplyScalar(Y * A), i.hemi[x] = q, x++;
      }
    }
    E > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_FLOAT_1, i.rectAreaLTC2 = oe.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_HALF_1, i.rectAreaLTC2 = oe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const V = i.hash;
    (V.directionalLength !== _ || V.pointLength !== p || V.spotLength !== f || V.rectAreaLength !== E || V.hemiLength !== x || V.numDirectionalShadows !== T || V.numPointShadows !== b || V.numSpotShadows !== L || V.numSpotMaps !== w || V.numLightProbes !== S) && (i.directional.length = _, i.spot.length = f, i.rectArea.length = E, i.point.length = p, i.hemi.length = x, i.directionalShadow.length = T, i.directionalShadowMap.length = T, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = L, i.spotShadowMap.length = L, i.directionalShadowMatrix.length = T, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = L + w - H, i.spotLightMap.length = w, i.numSpotLightShadowsWithMaps = H, i.numLightProbes = S, V.directionalLength = _, V.pointLength = p, V.spotLength = f, V.rectAreaLength = E, V.hemiLength = x, V.numDirectionalShadows = T, V.numPointShadows = b, V.numSpotShadows = L, V.numSpotMaps = w, V.numLightProbes = S, i.version = Qp++);
  }
  function l(u, h) {
    let d = 0, m = 0, g = 0, _ = 0, p = 0;
    const f = h.matrixWorldInverse;
    for (let E = 0, x = u.length; E < x; E++) {
      const T = u[E];
      if (T.isDirectionalLight) {
        const b = i.directional[d];
        b.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(f), d++;
      } else if (T.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(T.matrixWorld), b.position.applyMatrix4(f), b.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(f), g++;
      } else if (T.isRectAreaLight) {
        const b = i.rectArea[_];
        b.position.setFromMatrixPosition(T.matrixWorld), b.position.applyMatrix4(f), o.identity(), a.copy(T.matrixWorld), a.premultiply(f), o.extractRotation(a), b.halfWidth.set(T.width * 0.5, 0, 0), b.halfHeight.set(0, T.height * 0.5, 0), b.halfWidth.applyMatrix4(o), b.halfHeight.applyMatrix4(o), _++;
      } else if (T.isPointLight) {
        const b = i.point[m];
        b.position.setFromMatrixPosition(T.matrixWorld), b.position.applyMatrix4(f), m++;
      } else if (T.isHemisphereLight) {
        const b = i.hemi[p];
        b.direction.setFromMatrixPosition(T.matrixWorld), b.direction.transformDirection(f), p++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Uo(r, e) {
  const t = new tm(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function c(h) {
    t.setup(n, h);
  }
  function l(h) {
    t.setupView(n, h);
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
    return o === void 0 ? (c = new Uo(r, e), t.set(s, [c])) : a >= o.length ? (c = new Uo(r, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class im extends Yt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Vl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class rm extends Yt {
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
  let n = new Ys();
  const i = new Ce(), s = new Ce(), a = new Ke(), o = new im({ depthPacking: Wl }), c = new rm(), l = {}, u = t.maxTextureSize, h = { [hn]: wt, [wt]: hn, [qt]: qt }, d = new Vn({
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
  const g = new $t();
  g.setAttribute(
    "position",
    new bt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Bt(g, d), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = cc;
  let f = this.type;
  this.render = function(b, L, w) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || b.length === 0) return;
    const H = r.getRenderTarget(), S = r.getActiveCubeFace(), A = r.getActiveMipmapLevel(), V = r.state;
    V.setBlending(En), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const J = f !== on && this.type === on, Q = f === on && this.type !== on;
    for (let D = 0, G = b.length; D < G; D++) {
      const Y = b[D], X = Y.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", Y, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
      i.copy(X.mapSize);
      const ee = X.getFrameExtents();
      if (i.multiply(ee), s.copy(X.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / ee.x), i.x = s.x * ee.x, X.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / ee.y), i.y = s.y * ee.y, X.mapSize.y = s.y)), X.map === null || J === !0 || Q === !0) {
        const K = this.type !== on ? { minFilter: ft, magFilter: ft } : {};
        X.map !== null && X.map.dispose(), X.map = new kn(i.x, i.y, K), X.map.texture.name = Y.name + ".shadowMap", X.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(X.map), r.clear();
      const q = X.getViewportCount();
      for (let K = 0; K < q; K++) {
        const I = X.getViewport(K);
        a.set(
          s.x * I.x,
          s.y * I.y,
          s.x * I.z,
          s.y * I.w
        ), V.viewport(a), X.updateMatrices(Y, K), n = X.getFrustum(), T(L, w, X.camera, Y, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === on && E(X, w), X.needsUpdate = !1;
    }
    f = this.type, p.needsUpdate = !1, r.setRenderTarget(H, S, A);
  };
  function E(b, L) {
    const w = e.update(_);
    d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, m.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), b.mapPass === null && (b.mapPass = new kn(i.x, i.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, r.setRenderTarget(b.mapPass), r.clear(), r.renderBufferDirect(L, null, w, d, _, null), m.uniforms.shadow_pass.value = b.mapPass.texture, m.uniforms.resolution.value = b.mapSize, m.uniforms.radius.value = b.radius, r.setRenderTarget(b.map), r.clear(), r.renderBufferDirect(L, null, w, m, _, null);
  }
  function x(b, L, w, H) {
    let S = null;
    const A = w.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (A !== void 0)
      S = A;
    else if (S = w.isPointLight === !0 ? c : o, r.localClippingEnabled && L.clipShadows === !0 && Array.isArray(L.clippingPlanes) && L.clippingPlanes.length !== 0 || L.displacementMap && L.displacementScale !== 0 || L.alphaMap && L.alphaTest > 0 || L.map && L.alphaTest > 0) {
      const V = S.uuid, J = L.uuid;
      let Q = l[V];
      Q === void 0 && (Q = {}, l[V] = Q);
      let D = Q[J];
      D === void 0 && (D = S.clone(), Q[J] = D), S = D;
    }
    if (S.visible = L.visible, S.wireframe = L.wireframe, H === on ? S.side = L.shadowSide !== null ? L.shadowSide : L.side : S.side = L.shadowSide !== null ? L.shadowSide : h[L.side], S.alphaMap = L.alphaMap, S.alphaTest = L.alphaTest, S.map = L.map, S.clipShadows = L.clipShadows, S.clippingPlanes = L.clippingPlanes, S.clipIntersection = L.clipIntersection, S.displacementMap = L.displacementMap, S.displacementScale = L.displacementScale, S.displacementBias = L.displacementBias, S.wireframeLinewidth = L.wireframeLinewidth, S.linewidth = L.linewidth, w.isPointLight === !0 && S.isMeshDistanceMaterial === !0) {
      const V = r.properties.get(S);
      V.light = w;
    }
    return S;
  }
  function T(b, L, w, H, S) {
    if (b.visible === !1) return;
    if (b.layers.test(L.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && S === on) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, b.matrixWorld);
      const J = e.update(b), Q = b.material;
      if (Array.isArray(Q)) {
        const D = J.groups;
        for (let G = 0, Y = D.length; G < Y; G++) {
          const X = D[G], ee = Q[X.materialIndex];
          if (ee && ee.visible) {
            const q = x(b, ee, H, S);
            r.renderBufferDirect(w, null, J, q, b, X);
          }
        }
      } else if (Q.visible) {
        const D = x(b, Q, H, S);
        r.renderBufferDirect(w, null, J, D, b, null);
      }
    }
    const V = b.children;
    for (let J = 0, Q = V.length; J < Q; J++)
      T(V[J], L, w, H, S);
  }
}
function cm(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let P = !1;
    const ae = new Ke();
    let $ = null;
    const k = new Ke(0, 0, 0, 0);
    return {
      setMask: function(ie) {
        $ !== ie && !P && (r.colorMask(ie, ie, ie, ie), $ = ie);
      },
      setLocked: function(ie) {
        P = ie;
      },
      setClear: function(ie, xe, ke, st, Dt) {
        Dt === !0 && (ie *= st, xe *= st, ke *= st), ae.set(ie, xe, ke, st), k.equals(ae) === !1 && (r.clearColor(ie, xe, ke, st), k.copy(ae));
      },
      reset: function() {
        P = !1, $ = null, k.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let P = !1, ae = null, $ = null, k = null;
    return {
      setTest: function(ie) {
        ie ? Le(r.DEPTH_TEST) : $e(r.DEPTH_TEST);
      },
      setMask: function(ie) {
        ae !== ie && !P && (r.depthMask(ie), ae = ie);
      },
      setFunc: function(ie) {
        if ($ !== ie) {
          switch (ie) {
            case _l:
              r.depthFunc(r.NEVER);
              break;
            case xl:
              r.depthFunc(r.ALWAYS);
              break;
            case vl:
              r.depthFunc(r.LESS);
              break;
            case wr:
              r.depthFunc(r.LEQUAL);
              break;
            case Ml:
              r.depthFunc(r.EQUAL);
              break;
            case Sl:
              r.depthFunc(r.GEQUAL);
              break;
            case El:
              r.depthFunc(r.GREATER);
              break;
            case yl:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          $ = ie;
        }
      },
      setLocked: function(ie) {
        P = ie;
      },
      setClear: function(ie) {
        k !== ie && (r.clearDepth(ie), k = ie);
      },
      reset: function() {
        P = !1, ae = null, $ = null, k = null;
      }
    };
  }
  function a() {
    let P = !1, ae = null, $ = null, k = null, ie = null, xe = null, ke = null, st = null, Dt = null;
    return {
      setTest: function(Ze) {
        P || (Ze ? Le(r.STENCIL_TEST) : $e(r.STENCIL_TEST));
      },
      setMask: function(Ze) {
        ae !== Ze && !P && (r.stencilMask(Ze), ae = Ze);
      },
      setFunc: function(Ze, Mt, Wt) {
        ($ !== Ze || k !== Mt || ie !== Wt) && (r.stencilFunc(Ze, Mt, Wt), $ = Ze, k = Mt, ie = Wt);
      },
      setOp: function(Ze, Mt, Wt) {
        (xe !== Ze || ke !== Mt || st !== Wt) && (r.stencilOp(Ze, Mt, Wt), xe = Ze, ke = Mt, st = Wt);
      },
      setLocked: function(Ze) {
        P = Ze;
      },
      setClear: function(Ze) {
        Dt !== Ze && (r.clearStencil(Ze), Dt = Ze);
      },
      reset: function() {
        P = !1, ae = null, $ = null, k = null, ie = null, xe = null, ke = null, st = null, Dt = null;
      }
    };
  }
  const o = new i(), c = new s(), l = new a(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, f = !1, E = null, x = null, T = null, b = null, L = null, w = null, H = null, S = new we(0, 0, 0), A = 0, V = !1, J = null, Q = null, D = null, G = null, Y = null;
  const X = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ee = !1, q = 0;
  const K = r.getParameter(r.VERSION);
  K.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(K)[1]), ee = q >= 1) : K.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), ee = q >= 2);
  let I = null, W = {};
  const le = r.getParameter(r.SCISSOR_BOX), ue = r.getParameter(r.VIEWPORT), fe = new Ke().fromArray(le), ye = new Ke().fromArray(ue);
  function He(P, ae, $, k) {
    const ie = new Uint8Array(4), xe = r.createTexture();
    r.bindTexture(P, xe), r.texParameteri(P, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(P, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let ke = 0; ke < $; ke++)
      n && (P === r.TEXTURE_3D || P === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ae, 0, r.RGBA, 1, 1, k, 0, r.RGBA, r.UNSIGNED_BYTE, ie) : r.texImage2D(ae + ke, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, ie);
    return xe;
  }
  const Te = {};
  Te[r.TEXTURE_2D] = He(r.TEXTURE_2D, r.TEXTURE_2D, 1), Te[r.TEXTURE_CUBE_MAP] = He(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Te[r.TEXTURE_2D_ARRAY] = He(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Te[r.TEXTURE_3D] = He(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Le(r.DEPTH_TEST), c.setFunc(wr), Ie(!1), Pe(da), Le(r.CULL_FACE), Ae(En);
  function Le(P) {
    d[P] !== !0 && (r.enable(P), d[P] = !0);
  }
  function $e(P) {
    d[P] !== !1 && (r.disable(P), d[P] = !1);
  }
  function Ne(P, ae) {
    return m[P] !== ae ? (r.bindFramebuffer(P, ae), m[P] = ae, n && (P === r.DRAW_FRAMEBUFFER && (m[r.FRAMEBUFFER] = ae), P === r.FRAMEBUFFER && (m[r.DRAW_FRAMEBUFFER] = ae)), !0) : !1;
  }
  function N(P, ae) {
    let $ = _, k = !1;
    if (P)
      if ($ = g.get(ae), $ === void 0 && ($ = [], g.set(ae, $)), P.isWebGLMultipleRenderTargets) {
        const ie = P.texture;
        if ($.length !== ie.length || $[0] !== r.COLOR_ATTACHMENT0) {
          for (let xe = 0, ke = ie.length; xe < ke; xe++)
            $[xe] = r.COLOR_ATTACHMENT0 + xe;
          $.length = ie.length, k = !0;
        }
      } else
        $[0] !== r.COLOR_ATTACHMENT0 && ($[0] = r.COLOR_ATTACHMENT0, k = !0);
    else
      $[0] !== r.BACK && ($[0] = r.BACK, k = !0);
    k && (t.isWebGL2 ? r.drawBuffers($) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function _t(P) {
    return p !== P ? (r.useProgram(P), p = P, !0) : !1;
  }
  const ve = {
    [Un]: r.FUNC_ADD,
    [nl]: r.FUNC_SUBTRACT,
    [il]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    ve[ga] = r.MIN, ve[_a] = r.MAX;
  else {
    const P = e.get("EXT_blend_minmax");
    P !== null && (ve[ga] = P.MIN_EXT, ve[_a] = P.MAX_EXT);
  }
  const be = {
    [rl]: r.ZERO,
    [sl]: r.ONE,
    [al]: r.SRC_COLOR,
    [ws]: r.SRC_ALPHA,
    [dl]: r.SRC_ALPHA_SATURATE,
    [ul]: r.DST_COLOR,
    [cl]: r.DST_ALPHA,
    [ol]: r.ONE_MINUS_SRC_COLOR,
    [Rs]: r.ONE_MINUS_SRC_ALPHA,
    [hl]: r.ONE_MINUS_DST_COLOR,
    [ll]: r.ONE_MINUS_DST_ALPHA,
    [fl]: r.CONSTANT_COLOR,
    [pl]: r.ONE_MINUS_CONSTANT_COLOR,
    [ml]: r.CONSTANT_ALPHA,
    [gl]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function Ae(P, ae, $, k, ie, xe, ke, st, Dt, Ze) {
    if (P === En) {
      f === !0 && ($e(r.BLEND), f = !1);
      return;
    }
    if (f === !1 && (Le(r.BLEND), f = !0), P !== tl) {
      if (P !== E || Ze !== V) {
        if ((x !== Un || L !== Un) && (r.blendEquation(r.FUNC_ADD), x = Un, L = Un), Ze)
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
        T = null, b = null, w = null, H = null, S.set(0, 0, 0), A = 0, E = P, V = Ze;
      }
      return;
    }
    ie = ie || ae, xe = xe || $, ke = ke || k, (ae !== x || ie !== L) && (r.blendEquationSeparate(ve[ae], ve[ie]), x = ae, L = ie), ($ !== T || k !== b || xe !== w || ke !== H) && (r.blendFuncSeparate(be[$], be[k], be[xe], be[ke]), T = $, b = k, w = xe, H = ke), (st.equals(S) === !1 || Dt !== A) && (r.blendColor(st.r, st.g, st.b, Dt), S.copy(st), A = Dt), E = P, V = !1;
  }
  function Qe(P, ae) {
    P.side === qt ? $e(r.CULL_FACE) : Le(r.CULL_FACE);
    let $ = P.side === wt;
    ae && ($ = !$), Ie($), P.blending === di && P.transparent === !1 ? Ae(En) : Ae(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), c.setFunc(P.depthFunc), c.setTest(P.depthTest), c.setMask(P.depthWrite), o.setMask(P.colorWrite);
    const k = P.stencilWrite;
    l.setTest(k), k && (l.setMask(P.stencilWriteMask), l.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), l.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), rt(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? Le(r.SAMPLE_ALPHA_TO_COVERAGE) : $e(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ie(P) {
    J !== P && (P ? r.frontFace(r.CW) : r.frontFace(r.CCW), J = P);
  }
  function Pe(P) {
    P !== Jc ? (Le(r.CULL_FACE), P !== Q && (P === da ? r.cullFace(r.BACK) : P === Qc ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : $e(r.CULL_FACE), Q = P;
  }
  function Xe(P) {
    P !== D && (ee && r.lineWidth(P), D = P);
  }
  function rt(P, ae, $) {
    P ? (Le(r.POLYGON_OFFSET_FILL), (G !== ae || Y !== $) && (r.polygonOffset(ae, $), G = ae, Y = $)) : $e(r.POLYGON_OFFSET_FILL);
  }
  function ut(P) {
    P ? Le(r.SCISSOR_TEST) : $e(r.SCISSOR_TEST);
  }
  function y(P) {
    P === void 0 && (P = r.TEXTURE0 + X - 1), I !== P && (r.activeTexture(P), I = P);
  }
  function v(P, ae, $) {
    $ === void 0 && (I === null ? $ = r.TEXTURE0 + X - 1 : $ = I);
    let k = W[$];
    k === void 0 && (k = { type: void 0, texture: void 0 }, W[$] = k), (k.type !== P || k.texture !== ae) && (I !== $ && (r.activeTexture($), I = $), r.bindTexture(P, ae || Te[P]), k.type = P, k.texture = ae);
  }
  function O() {
    const P = W[I];
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
  function j() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Se() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ge(P) {
    fe.equals(P) === !1 && (r.scissor(P.x, P.y, P.z, P.w), fe.copy(P));
  }
  function Me(P) {
    ye.equals(P) === !1 && (r.viewport(P.x, P.y, P.z, P.w), ye.copy(P));
  }
  function pe(P, ae) {
    let $ = h.get(ae);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), h.set(ae, $));
    let k = $.get(P);
    k === void 0 && (k = r.getUniformBlockIndex(ae, P.name), $.set(P, k));
  }
  function de(P, ae) {
    const k = h.get(ae).get(P);
    u.get(ae) !== k && (r.uniformBlockBinding(ae, k, P.__bindingPointIndex), u.set(ae, k));
  }
  function Ge() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, I = null, W = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], p = null, f = !1, E = null, x = null, T = null, b = null, L = null, w = null, H = null, S = new we(0, 0, 0), A = 0, V = !1, J = null, Q = null, D = null, G = null, Y = null, fe.set(0, 0, r.canvas.width, r.canvas.height), ye.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: Le,
    disable: $e,
    bindFramebuffer: Ne,
    drawBuffers: N,
    useProgram: _t,
    setBlending: Ae,
    setMaterial: Qe,
    setFlipSided: Ie,
    setCullFace: Pe,
    setLineWidth: Xe,
    setPolygonOffset: rt,
    setScissorTest: ut,
    activeTexture: y,
    bindTexture: v,
    unbindTexture: O,
    compressedTexImage2D: te,
    compressedTexImage3D: Z,
    texImage2D: j,
    texImage3D: Se,
    updateUBOMapping: pe,
    uniformBlockBinding: de,
    texStorage2D: R,
    texStorage3D: re,
    texSubImage2D: ne,
    texSubImage3D: me,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: ce,
    scissor: ge,
    viewport: Me,
    reset: Ge
  };
}
function lm(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let _;
  const p = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function E(y, v) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, v)
    ) : Wi("canvas");
  }
  function x(y, v, O, te) {
    let Z = 1;
    if ((y.width > te || y.height > te) && (Z = te / Math.max(y.width, y.height)), Z < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap) {
        const ne = v ? Ir : Math.floor, me = ne(Z * y.width), se = ne(Z * y.height);
        _ === void 0 && (_ = E(me, se));
        const ce = O ? E(me, se) : _;
        return ce.width = me, ce.height = se, ce.getContext("2d").drawImage(y, 0, 0, me, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + y.width + "x" + y.height + ") to (" + me + "x" + se + ")."), ce;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + y.width + "x" + y.height + ")."), y;
    return y;
  }
  function T(y) {
    return Ns(y.width) && Ns(y.height);
  }
  function b(y) {
    return o ? !1 : y.wrapS !== Nt || y.wrapT !== Nt || y.minFilter !== ft && y.minFilter !== At;
  }
  function L(y, v) {
    return y.generateMipmaps && v && y.minFilter !== ft && y.minFilter !== At;
  }
  function w(y) {
    r.generateMipmap(y);
  }
  function H(y, v, O, te, Z = !1) {
    if (o === !1) return v;
    if (y !== null) {
      if (r[y] !== void 0) return r[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let ne = v;
    if (v === r.RED && (O === r.FLOAT && (ne = r.R32F), O === r.HALF_FLOAT && (ne = r.R16F), O === r.UNSIGNED_BYTE && (ne = r.R8)), v === r.RED_INTEGER && (O === r.UNSIGNED_BYTE && (ne = r.R8UI), O === r.UNSIGNED_SHORT && (ne = r.R16UI), O === r.UNSIGNED_INT && (ne = r.R32UI), O === r.BYTE && (ne = r.R8I), O === r.SHORT && (ne = r.R16I), O === r.INT && (ne = r.R32I)), v === r.RG && (O === r.FLOAT && (ne = r.RG32F), O === r.HALF_FLOAT && (ne = r.RG16F), O === r.UNSIGNED_BYTE && (ne = r.RG8)), v === r.RGBA) {
      const me = Z ? Cr : qe.getTransfer(te);
      O === r.FLOAT && (ne = r.RGBA32F), O === r.HALF_FLOAT && (ne = r.RGBA16F), O === r.UNSIGNED_BYTE && (ne = me === Je ? r.SRGB8_ALPHA8 : r.RGBA8), O === r.UNSIGNED_SHORT_4_4_4_4 && (ne = r.RGBA4), O === r.UNSIGNED_SHORT_5_5_5_1 && (ne = r.RGB5_A1);
    }
    return (ne === r.R16F || ne === r.R32F || ne === r.RG16F || ne === r.RG32F || ne === r.RGBA16F || ne === r.RGBA32F) && e.get("EXT_color_buffer_float"), ne;
  }
  function S(y, v, O) {
    return L(y, O) === !0 || y.isFramebufferTexture && y.minFilter !== ft && y.minFilter !== At ? Math.log2(Math.max(v.width, v.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? v.mipmaps.length : 1;
  }
  function A(y) {
    return y === ft || y === Ps || y === br ? r.NEAREST : r.LINEAR;
  }
  function V(y) {
    const v = y.target;
    v.removeEventListener("dispose", V), Q(v), v.isVideoTexture && g.delete(v);
  }
  function J(y) {
    const v = y.target;
    v.removeEventListener("dispose", J), G(v);
  }
  function Q(y) {
    const v = n.get(y);
    if (v.__webglInit === void 0) return;
    const O = y.source, te = p.get(O);
    if (te) {
      const Z = te[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && D(y), Object.keys(te).length === 0 && p.delete(O);
    }
    n.remove(y);
  }
  function D(y) {
    const v = n.get(y);
    r.deleteTexture(v.__webglTexture);
    const O = y.source, te = p.get(O);
    delete te[v.__cacheKey], a.memory.textures--;
  }
  function G(y) {
    const v = y.texture, O = n.get(y), te = n.get(v);
    if (te.__webglTexture !== void 0 && (r.deleteTexture(te.__webglTexture), a.memory.textures--), y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(O.__webglFramebuffer[Z]))
          for (let ne = 0; ne < O.__webglFramebuffer[Z].length; ne++) r.deleteFramebuffer(O.__webglFramebuffer[Z][ne]);
        else
          r.deleteFramebuffer(O.__webglFramebuffer[Z]);
        O.__webglDepthbuffer && r.deleteRenderbuffer(O.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(O.__webglFramebuffer))
        for (let Z = 0; Z < O.__webglFramebuffer.length; Z++) r.deleteFramebuffer(O.__webglFramebuffer[Z]);
      else
        r.deleteFramebuffer(O.__webglFramebuffer);
      if (O.__webglDepthbuffer && r.deleteRenderbuffer(O.__webglDepthbuffer), O.__webglMultisampledFramebuffer && r.deleteFramebuffer(O.__webglMultisampledFramebuffer), O.__webglColorRenderbuffer)
        for (let Z = 0; Z < O.__webglColorRenderbuffer.length; Z++)
          O.__webglColorRenderbuffer[Z] && r.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);
      O.__webglDepthRenderbuffer && r.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let Z = 0, ne = v.length; Z < ne; Z++) {
        const me = n.get(v[Z]);
        me.__webglTexture && (r.deleteTexture(me.__webglTexture), a.memory.textures--), n.remove(v[Z]);
      }
    n.remove(v), n.remove(y);
  }
  let Y = 0;
  function X() {
    Y = 0;
  }
  function ee() {
    const y = Y;
    return y >= c && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + c), Y += 1, y;
  }
  function q(y) {
    const v = [];
    return v.push(y.wrapS), v.push(y.wrapT), v.push(y.wrapR || 0), v.push(y.magFilter), v.push(y.minFilter), v.push(y.anisotropy), v.push(y.internalFormat), v.push(y.format), v.push(y.type), v.push(y.generateMipmaps), v.push(y.premultiplyAlpha), v.push(y.flipY), v.push(y.unpackAlignment), v.push(y.colorSpace), v.join();
  }
  function K(y, v) {
    const O = n.get(y);
    if (y.isVideoTexture && rt(y), y.isRenderTargetTexture === !1 && y.version > 0 && O.__version !== y.version) {
      const te = y.image;
      if (te === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Le(O, y, v);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, O.__webglTexture, r.TEXTURE0 + v);
  }
  function I(y, v) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      Le(O, y, v);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, O.__webglTexture, r.TEXTURE0 + v);
  }
  function W(y, v) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      Le(O, y, v);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, O.__webglTexture, r.TEXTURE0 + v);
  }
  function le(y, v) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      $e(O, y, v);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, O.__webglTexture, r.TEXTURE0 + v);
  }
  const ue = {
    [_i]: r.REPEAT,
    [Nt]: r.CLAMP_TO_EDGE,
    [Rr]: r.MIRRORED_REPEAT
  }, fe = {
    [ft]: r.NEAREST,
    [Ps]: r.NEAREST_MIPMAP_NEAREST,
    [br]: r.NEAREST_MIPMAP_LINEAR,
    [At]: r.LINEAR,
    [hc]: r.LINEAR_MIPMAP_NEAREST,
    [Gn]: r.LINEAR_MIPMAP_LINEAR
  }, ye = {
    [ql]: r.NEVER,
    [Ql]: r.ALWAYS,
    [jl]: r.LESS,
    [Kl]: r.LEQUAL,
    [Yl]: r.EQUAL,
    [Jl]: r.GEQUAL,
    [Zl]: r.GREATER,
    [$l]: r.NOTEQUAL
  };
  function He(y, v, O) {
    if (O ? (r.texParameteri(y, r.TEXTURE_WRAP_S, ue[v.wrapS]), r.texParameteri(y, r.TEXTURE_WRAP_T, ue[v.wrapT]), (y === r.TEXTURE_3D || y === r.TEXTURE_2D_ARRAY) && r.texParameteri(y, r.TEXTURE_WRAP_R, ue[v.wrapR]), r.texParameteri(y, r.TEXTURE_MAG_FILTER, fe[v.magFilter]), r.texParameteri(y, r.TEXTURE_MIN_FILTER, fe[v.minFilter])) : (r.texParameteri(y, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(y, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (y === r.TEXTURE_3D || y === r.TEXTURE_2D_ARRAY) && r.texParameteri(y, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (v.wrapS !== Nt || v.wrapT !== Nt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(y, r.TEXTURE_MAG_FILTER, A(v.magFilter)), r.texParameteri(y, r.TEXTURE_MIN_FILTER, A(v.minFilter)), v.minFilter !== ft && v.minFilter !== At && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), v.compareFunction && (r.texParameteri(y, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(y, r.TEXTURE_COMPARE_FUNC, ye[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === ft || v.minFilter !== br && v.minFilter !== Gn || v.type === cn && e.has("OES_texture_float_linear") === !1 || o === !1 && v.type === ki && e.has("OES_texture_half_float_linear") === !1) return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (r.texParameterf(y, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function Te(y, v) {
    let O = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, v.addEventListener("dispose", V));
    const te = v.source;
    let Z = p.get(te);
    Z === void 0 && (Z = {}, p.set(te, Z));
    const ne = q(v);
    if (ne !== y.__cacheKey) {
      Z[ne] === void 0 && (Z[ne] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, O = !0), Z[ne].usedTimes++;
      const me = Z[y.__cacheKey];
      me !== void 0 && (Z[y.__cacheKey].usedTimes--, me.usedTimes === 0 && D(v)), y.__cacheKey = ne, y.__webglTexture = Z[ne].texture;
    }
    return O;
  }
  function Le(y, v, O) {
    let te = r.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (te = r.TEXTURE_2D_ARRAY), v.isData3DTexture && (te = r.TEXTURE_3D);
    const Z = Te(y, v), ne = v.source;
    t.bindTexture(te, y.__webglTexture, r.TEXTURE0 + O);
    const me = n.get(ne);
    if (ne.version !== me.__version || Z === !0) {
      t.activeTexture(r.TEXTURE0 + O);
      const se = qe.getPrimaries(qe.workingColorSpace), ce = v.colorSpace === Ft ? null : qe.getPrimaries(v.colorSpace), R = v.colorSpace === Ft || se === ce ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, R);
      const re = b(v) && T(v.image) === !1;
      let j = x(v.image, re, !1, u);
      j = ut(v, j);
      const Se = T(j) || o, ge = s.convert(v.format, v.colorSpace);
      let Me = s.convert(v.type), pe = H(v.internalFormat, ge, Me, v.colorSpace, v.isVideoTexture);
      He(te, v, Se);
      let de;
      const Ge = v.mipmaps, P = o && v.isVideoTexture !== !0, ae = me.__version === void 0 || Z === !0, $ = S(v, j, Se);
      if (v.isDepthTexture)
        pe = r.DEPTH_COMPONENT, o ? v.type === cn ? pe = r.DEPTH_COMPONENT32F : v.type === Sn ? pe = r.DEPTH_COMPONENT24 : v.type === Bn ? pe = r.DEPTH24_STENCIL8 : pe = r.DEPTH_COMPONENT16 : v.type === cn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === zn && pe === r.DEPTH_COMPONENT && v.type !== Xs && v.type !== Sn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = Sn, Me = s.convert(v.type)), v.format === xi && pe === r.DEPTH_COMPONENT && (pe = r.DEPTH_STENCIL, v.type !== Bn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Bn, Me = s.convert(v.type))), ae && (P ? t.texStorage2D(r.TEXTURE_2D, 1, pe, j.width, j.height) : t.texImage2D(r.TEXTURE_2D, 0, pe, j.width, j.height, 0, ge, Me, null));
      else if (v.isDataTexture)
        if (Ge.length > 0 && Se) {
          P && ae && t.texStorage2D(r.TEXTURE_2D, $, pe, Ge[0].width, Ge[0].height);
          for (let k = 0, ie = Ge.length; k < ie; k++)
            de = Ge[k], P ? t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, de.width, de.height, ge, Me, de.data) : t.texImage2D(r.TEXTURE_2D, k, pe, de.width, de.height, 0, ge, Me, de.data);
          v.generateMipmaps = !1;
        } else
          P ? (ae && t.texStorage2D(r.TEXTURE_2D, $, pe, j.width, j.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, j.width, j.height, ge, Me, j.data)) : t.texImage2D(r.TEXTURE_2D, 0, pe, j.width, j.height, 0, ge, Me, j.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          P && ae && t.texStorage3D(r.TEXTURE_2D_ARRAY, $, pe, Ge[0].width, Ge[0].height, j.depth);
          for (let k = 0, ie = Ge.length; k < ie; k++)
            de = Ge[k], v.format !== Ot ? ge !== null ? P ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, 0, de.width, de.height, j.depth, ge, de.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, k, pe, de.width, de.height, j.depth, 0, de.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : P ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, 0, de.width, de.height, j.depth, ge, Me, de.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, k, pe, de.width, de.height, j.depth, 0, ge, Me, de.data);
        } else {
          P && ae && t.texStorage2D(r.TEXTURE_2D, $, pe, Ge[0].width, Ge[0].height);
          for (let k = 0, ie = Ge.length; k < ie; k++)
            de = Ge[k], v.format !== Ot ? ge !== null ? P ? t.compressedTexSubImage2D(r.TEXTURE_2D, k, 0, 0, de.width, de.height, ge, de.data) : t.compressedTexImage2D(r.TEXTURE_2D, k, pe, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : P ? t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, de.width, de.height, ge, Me, de.data) : t.texImage2D(r.TEXTURE_2D, k, pe, de.width, de.height, 0, ge, Me, de.data);
        }
      else if (v.isDataArrayTexture)
        P ? (ae && t.texStorage3D(r.TEXTURE_2D_ARRAY, $, pe, j.width, j.height, j.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, ge, Me, j.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, pe, j.width, j.height, j.depth, 0, ge, Me, j.data);
      else if (v.isData3DTexture)
        P ? (ae && t.texStorage3D(r.TEXTURE_3D, $, pe, j.width, j.height, j.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, ge, Me, j.data)) : t.texImage3D(r.TEXTURE_3D, 0, pe, j.width, j.height, j.depth, 0, ge, Me, j.data);
      else if (v.isFramebufferTexture) {
        if (ae)
          if (P)
            t.texStorage2D(r.TEXTURE_2D, $, pe, j.width, j.height);
          else {
            let k = j.width, ie = j.height;
            for (let xe = 0; xe < $; xe++)
              t.texImage2D(r.TEXTURE_2D, xe, pe, k, ie, 0, ge, Me, null), k >>= 1, ie >>= 1;
          }
      } else if (Ge.length > 0 && Se) {
        P && ae && t.texStorage2D(r.TEXTURE_2D, $, pe, Ge[0].width, Ge[0].height);
        for (let k = 0, ie = Ge.length; k < ie; k++)
          de = Ge[k], P ? t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, ge, Me, de) : t.texImage2D(r.TEXTURE_2D, k, pe, ge, Me, de);
        v.generateMipmaps = !1;
      } else
        P ? (ae && t.texStorage2D(r.TEXTURE_2D, $, pe, j.width, j.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ge, Me, j)) : t.texImage2D(r.TEXTURE_2D, 0, pe, ge, Me, j);
      L(v, Se) && w(te), me.__version = ne.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function $e(y, v, O) {
    if (v.image.length !== 6) return;
    const te = Te(y, v), Z = v.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, y.__webglTexture, r.TEXTURE0 + O);
    const ne = n.get(Z);
    if (Z.version !== ne.__version || te === !0) {
      t.activeTexture(r.TEXTURE0 + O);
      const me = qe.getPrimaries(qe.workingColorSpace), se = v.colorSpace === Ft ? null : qe.getPrimaries(v.colorSpace), ce = v.colorSpace === Ft || me === se ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const R = v.isCompressedTexture || v.image[0].isCompressedTexture, re = v.image[0] && v.image[0].isDataTexture, j = [];
      for (let k = 0; k < 6; k++)
        !R && !re ? j[k] = x(v.image[k], !1, !0, l) : j[k] = re ? v.image[k].image : v.image[k], j[k] = ut(v, j[k]);
      const Se = j[0], ge = T(Se) || o, Me = s.convert(v.format, v.colorSpace), pe = s.convert(v.type), de = H(v.internalFormat, Me, pe, v.colorSpace), Ge = o && v.isVideoTexture !== !0, P = ne.__version === void 0 || te === !0;
      let ae = S(v, Se, ge);
      He(r.TEXTURE_CUBE_MAP, v, ge);
      let $;
      if (R) {
        Ge && P && t.texStorage2D(r.TEXTURE_CUBE_MAP, ae, de, Se.width, Se.height);
        for (let k = 0; k < 6; k++) {
          $ = j[k].mipmaps;
          for (let ie = 0; ie < $.length; ie++) {
            const xe = $[ie];
            v.format !== Ot ? Me !== null ? Ge ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie, 0, 0, xe.width, xe.height, Me, xe.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie, de, xe.width, xe.height, 0, xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie, 0, 0, xe.width, xe.height, Me, pe, xe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie, de, xe.width, xe.height, 0, Me, pe, xe.data);
          }
        }
      } else {
        $ = v.mipmaps, Ge && P && ($.length > 0 && ae++, t.texStorage2D(r.TEXTURE_CUBE_MAP, ae, de, j[0].width, j[0].height));
        for (let k = 0; k < 6; k++)
          if (re) {
            Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, 0, 0, j[k].width, j[k].height, Me, pe, j[k].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, de, j[k].width, j[k].height, 0, Me, pe, j[k].data);
            for (let ie = 0; ie < $.length; ie++) {
              const ke = $[ie].image[k].image;
              Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie + 1, 0, 0, ke.width, ke.height, Me, pe, ke.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie + 1, de, ke.width, ke.height, 0, Me, pe, ke.data);
            }
          } else {
            Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, 0, 0, Me, pe, j[k]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, de, Me, pe, j[k]);
            for (let ie = 0; ie < $.length; ie++) {
              const xe = $[ie];
              Ge ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie + 1, 0, 0, Me, pe, xe.image[k]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + k, ie + 1, de, Me, pe, xe.image[k]);
            }
          }
      }
      L(v, ge) && w(r.TEXTURE_CUBE_MAP), ne.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function Ne(y, v, O, te, Z, ne) {
    const me = s.convert(O.format, O.colorSpace), se = s.convert(O.type), ce = H(O.internalFormat, me, se, O.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const re = Math.max(1, v.width >> ne), j = Math.max(1, v.height >> ne);
      Z === r.TEXTURE_3D || Z === r.TEXTURE_2D_ARRAY ? t.texImage3D(Z, ne, ce, re, j, v.depth, 0, me, se, null) : t.texImage2D(Z, ne, ce, re, j, 0, me, se, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, y), Xe(v) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, te, Z, n.get(O).__webglTexture, 0, Pe(v)) : (Z === r.TEXTURE_2D || Z >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, te, Z, n.get(O).__webglTexture, ne), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function N(y, v, O) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, y), v.depthBuffer && !v.stencilBuffer) {
      let te = o === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (O || Xe(v)) {
        const Z = v.depthTexture;
        Z && Z.isDepthTexture && (Z.type === cn ? te = r.DEPTH_COMPONENT32F : Z.type === Sn && (te = r.DEPTH_COMPONENT24));
        const ne = Pe(v);
        Xe(v) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ne, te, v.width, v.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, ne, te, v.width, v.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, te, v.width, v.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, y);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const te = Pe(v);
      O && Xe(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, te, r.DEPTH24_STENCIL8, v.width, v.height) : Xe(v) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, te, r.DEPTH24_STENCIL8, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, v.width, v.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, y);
    } else {
      const te = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let Z = 0; Z < te.length; Z++) {
        const ne = te[Z], me = s.convert(ne.format, ne.colorSpace), se = s.convert(ne.type), ce = H(ne.internalFormat, me, se, ne.colorSpace), R = Pe(v);
        O && Xe(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, R, ce, v.width, v.height) : Xe(v) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, R, ce, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, ce, v.width, v.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function _t(y, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, y), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), K(v.depthTexture, 0);
    const te = n.get(v.depthTexture).__webglTexture, Z = Pe(v);
    if (v.depthTexture.format === zn)
      Xe(v) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, te, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, te, 0);
    else if (v.depthTexture.format === xi)
      Xe(v) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, te, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ve(y) {
    const v = n.get(y), O = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O) throw new Error("target.depthTexture not supported in Cube render targets");
      _t(v.__webglFramebuffer, y);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer[te]), v.__webglDepthbuffer[te] = r.createRenderbuffer(), N(v.__webglDepthbuffer[te], y, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = r.createRenderbuffer(), N(v.__webglDepthbuffer, y, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function be(y, v, O) {
    const te = n.get(y);
    v !== void 0 && Ne(te.__webglFramebuffer, y, y.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), O !== void 0 && ve(y);
  }
  function Ae(y) {
    const v = y.texture, O = n.get(y), te = n.get(v);
    y.addEventListener("dispose", J), y.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = r.createTexture()), te.__version = v.version, a.memory.textures++);
    const Z = y.isWebGLCubeRenderTarget === !0, ne = y.isWebGLMultipleRenderTargets === !0, me = T(y) || o;
    if (Z) {
      O.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (o && v.mipmaps && v.mipmaps.length > 0) {
          O.__webglFramebuffer[se] = [];
          for (let ce = 0; ce < v.mipmaps.length; ce++)
            O.__webglFramebuffer[se][ce] = r.createFramebuffer();
        } else
          O.__webglFramebuffer[se] = r.createFramebuffer();
    } else {
      if (o && v.mipmaps && v.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let se = 0; se < v.mipmaps.length; se++)
          O.__webglFramebuffer[se] = r.createFramebuffer();
      } else
        O.__webglFramebuffer = r.createFramebuffer();
      if (ne)
        if (i.drawBuffers) {
          const se = y.texture;
          for (let ce = 0, R = se.length; ce < R; ce++) {
            const re = n.get(se[ce]);
            re.__webglTexture === void 0 && (re.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && y.samples > 0 && Xe(y) === !1) {
        const se = ne ? v : [v];
        O.__webglMultisampledFramebuffer = r.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < se.length; ce++) {
          const R = se[ce];
          O.__webglColorRenderbuffer[ce] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, O.__webglColorRenderbuffer[ce]);
          const re = s.convert(R.format, R.colorSpace), j = s.convert(R.type), Se = H(R.internalFormat, re, j, R.colorSpace, y.isXRRenderTarget === !0), ge = Pe(y);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ge, Se, y.width, y.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ce, r.RENDERBUFFER, O.__webglColorRenderbuffer[ce]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), y.depthBuffer && (O.__webglDepthRenderbuffer = r.createRenderbuffer(), N(O.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, te.__webglTexture), He(r.TEXTURE_CUBE_MAP, v, me);
      for (let se = 0; se < 6; se++)
        if (o && v.mipmaps && v.mipmaps.length > 0)
          for (let ce = 0; ce < v.mipmaps.length; ce++)
            Ne(O.__webglFramebuffer[se][ce], y, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + se, ce);
        else
          Ne(O.__webglFramebuffer[se], y, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      L(v, me) && w(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ne) {
      const se = y.texture;
      for (let ce = 0, R = se.length; ce < R; ce++) {
        const re = se[ce], j = n.get(re);
        t.bindTexture(r.TEXTURE_2D, j.__webglTexture), He(r.TEXTURE_2D, re, me), Ne(O.__webglFramebuffer, y, re, r.COLOR_ATTACHMENT0 + ce, r.TEXTURE_2D, 0), L(re, me) && w(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = r.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (o ? se = y.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, te.__webglTexture), He(se, v, me), o && v.mipmaps && v.mipmaps.length > 0)
        for (let ce = 0; ce < v.mipmaps.length; ce++)
          Ne(O.__webglFramebuffer[ce], y, v, r.COLOR_ATTACHMENT0, se, ce);
      else
        Ne(O.__webglFramebuffer, y, v, r.COLOR_ATTACHMENT0, se, 0);
      L(v, me) && w(se), t.unbindTexture();
    }
    y.depthBuffer && ve(y);
  }
  function Qe(y) {
    const v = T(y) || o, O = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let te = 0, Z = O.length; te < Z; te++) {
      const ne = O[te];
      if (L(ne, v)) {
        const me = y.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, se = n.get(ne).__webglTexture;
        t.bindTexture(me, se), w(me), t.unbindTexture();
      }
    }
  }
  function Ie(y) {
    if (o && y.samples > 0 && Xe(y) === !1) {
      const v = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture], O = y.width, te = y.height;
      let Z = r.COLOR_BUFFER_BIT;
      const ne = [], me = y.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, se = n.get(y), ce = y.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let R = 0; R < v.length; R++)
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let R = 0; R < v.length; R++) {
        ne.push(r.COLOR_ATTACHMENT0 + R), y.depthBuffer && ne.push(me);
        const re = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (re === !1 && (y.depthBuffer && (Z |= r.DEPTH_BUFFER_BIT), y.stencilBuffer && (Z |= r.STENCIL_BUFFER_BIT)), ce && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, se.__webglColorRenderbuffer[R]), re === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [me]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [me])), ce) {
          const j = n.get(v[R]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, j, 0);
        }
        r.blitFramebuffer(0, 0, O, te, 0, 0, O, te, Z, r.NEAREST), m && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, ne);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ce)
        for (let R = 0; R < v.length; R++) {
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.RENDERBUFFER, se.__webglColorRenderbuffer[R]);
          const re = n.get(v[R]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + R, r.TEXTURE_2D, re, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function Pe(y) {
    return Math.min(h, y.samples);
  }
  function Xe(y) {
    const v = n.get(y);
    return o && y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function rt(y) {
    const v = a.render.frame;
    g.get(y) !== v && (g.set(y, v), y.update());
  }
  function ut(y, v) {
    const O = y.colorSpace, te = y.format, Z = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || y.format === Us || O !== gt && O !== Ft && (qe.getTransfer(O) === Je ? o === !1 ? e.has("EXT_sRGB") === !0 && te === Ot ? (y.format = Us, y.minFilter = At, y.generateMipmaps = !1) : v = Tc.sRGBToLinear(v) : (te !== Ot || Z !== Tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), v;
  }
  this.allocateTextureUnit = ee, this.resetTextureUnits = X, this.setTexture2D = K, this.setTexture2DArray = I, this.setTexture3D = W, this.setTextureCube = le, this.rebindTextures = be, this.setupRenderTarget = Ae, this.updateRenderTargetMipmap = Qe, this.updateMultisampleRenderTarget = Ie, this.setupDepthRenderbuffer = ve, this.setupFrameBufferTexture = Ne, this.useMultisampledRTT = Xe;
}
function um(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = Ft) {
    let o;
    const c = qe.getTransfer(a);
    if (s === Tn) return r.UNSIGNED_BYTE;
    if (s === fc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === pc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === Dl) return r.BYTE;
    if (s === Il) return r.SHORT;
    if (s === Xs) return r.UNSIGNED_SHORT;
    if (s === dc) return r.INT;
    if (s === Sn) return r.UNSIGNED_INT;
    if (s === cn) return r.FLOAT;
    if (s === ki)
      return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Ul) return r.ALPHA;
    if (s === Ot) return r.RGBA;
    if (s === Nl) return r.LUMINANCE;
    if (s === Ol) return r.LUMINANCE_ALPHA;
    if (s === zn) return r.DEPTH_COMPONENT;
    if (s === xi) return r.DEPTH_STENCIL;
    if (s === Us)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === Fl) return r.RED;
    if (s === mc) return r.RED_INTEGER;
    if (s === Bl) return r.RG;
    if (s === gc) return r.RG_INTEGER;
    if (s === _c) return r.RGBA_INTEGER;
    if (s === Vr || s === Wr || s === Xr || s === qr)
      if (c === Je)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === Vr) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Wr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Xr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === qr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Vr) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Wr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Xr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === qr) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === va || s === Ma || s === Sa || s === Ea)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === va) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Ma) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Sa) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Ea) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === zl)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === ya || s === Ta)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === ya) return c === Je ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === Ta) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === ba || s === Aa || s === wa || s === Ra || s === Ca || s === La || s === Pa || s === Da || s === Ia || s === Ua || s === Na || s === Oa || s === Fa || s === Ba)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === ba) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Aa) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === wa) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ra) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Ca) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === La) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Pa) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Da) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ia) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Ua) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Na) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Oa) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Fa) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Ba) return c === Je ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === jr || s === za || s === Ha)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === jr) return c === Je ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === za) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === Ha) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === Hl || s === Ga || s === ka || s === Va)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === jr) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === Ga) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ka) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Va) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Bn ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class hm extends Tt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Fn extends et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const dm = { type: "move" };
class _s {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Fn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Fn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new C()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Fn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new C()), this._grip;
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
        const u = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], d = u.position.distanceTo(h.position), m = 0.02, g = 5e-3;
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
      const n = new Fn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class fm extends pt {
  constructor(e, t, n, i, s, a, o, c, l, u) {
    if (u = u !== void 0 ? u : zn, u !== zn && u !== xi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === zn && (n = Sn), n === void 0 && u === xi && (n = Bn), super(null, i, s, a, o, c, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : ft, this.minFilter = c !== void 0 ? c : ft, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class pm extends Xn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, u = null, h = null, d = null, m = null, g = null;
    const _ = t.getContextAttributes();
    let p = null, f = null;
    const E = [], x = [], T = new Tt();
    T.layers.enable(1), T.viewport = new Ke();
    const b = new Tt();
    b.layers.enable(2), b.viewport = new Ke();
    const L = [T, b], w = new hm();
    w.layers.enable(1), w.layers.enable(2);
    let H = null, S = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(I) {
      let W = E[I];
      return W === void 0 && (W = new _s(), E[I] = W), W.getTargetRaySpace();
    }, this.getControllerGrip = function(I) {
      let W = E[I];
      return W === void 0 && (W = new _s(), E[I] = W), W.getGripSpace();
    }, this.getHand = function(I) {
      let W = E[I];
      return W === void 0 && (W = new _s(), E[I] = W), W.getHandSpace();
    };
    function A(I) {
      const W = x.indexOf(I.inputSource);
      if (W === -1)
        return;
      const le = E[W];
      le !== void 0 && (le.update(I.inputSource, I.frame, l || a), le.dispatchEvent({ type: I.type, data: I.inputSource }));
    }
    function V() {
      i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", V), i.removeEventListener("inputsourceschange", J);
      for (let I = 0; I < E.length; I++) {
        const W = x[I];
        W !== null && (x[I] = null, E[I].disconnect(W));
      }
      H = null, S = null, e.setRenderTarget(p), m = null, d = null, h = null, i = null, f = null, K.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(I) {
      s = I, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(I) {
      o = I, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(I) {
      l = I;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(I) {
      if (i = I, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", V), i.addEventListener("inputsourceschange", J), _.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const W = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(i, t, W), i.updateRenderState({ baseLayer: m }), f = new kn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Ot,
              type: Tn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let W = null, le = null, ue = null;
          _.depth && (ue = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, W = _.stencil ? xi : zn, le = _.stencil ? Bn : Sn);
          const fe = {
            colorFormat: t.RGBA8,
            depthFormat: ue,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(fe), i.updateRenderState({ layers: [d] }), f = new kn(
            d.textureWidth,
            d.textureHeight,
            {
              format: Ot,
              type: Tn,
              depthTexture: new fm(d.textureWidth, d.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, W),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const ye = e.properties.get(f);
          ye.__ignoreDepthValues = d.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), K.setContext(i), K.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function J(I) {
      for (let W = 0; W < I.removed.length; W++) {
        const le = I.removed[W], ue = x.indexOf(le);
        ue >= 0 && (x[ue] = null, E[ue].disconnect(le));
      }
      for (let W = 0; W < I.added.length; W++) {
        const le = I.added[W];
        let ue = x.indexOf(le);
        if (ue === -1) {
          for (let ye = 0; ye < E.length; ye++)
            if (ye >= x.length) {
              x.push(le), ue = ye;
              break;
            } else if (x[ye] === null) {
              x[ye] = le, ue = ye;
              break;
            }
          if (ue === -1) break;
        }
        const fe = E[ue];
        fe && fe.connect(le);
      }
    }
    const Q = new C(), D = new C();
    function G(I, W, le) {
      Q.setFromMatrixPosition(W.matrixWorld), D.setFromMatrixPosition(le.matrixWorld);
      const ue = Q.distanceTo(D), fe = W.projectionMatrix.elements, ye = le.projectionMatrix.elements, He = fe[14] / (fe[10] - 1), Te = fe[14] / (fe[10] + 1), Le = (fe[9] + 1) / fe[5], $e = (fe[9] - 1) / fe[5], Ne = (fe[8] - 1) / fe[0], N = (ye[8] + 1) / ye[0], _t = He * Ne, ve = He * N, be = ue / (-Ne + N), Ae = be * -Ne;
      W.matrixWorld.decompose(I.position, I.quaternion, I.scale), I.translateX(Ae), I.translateZ(be), I.matrixWorld.compose(I.position, I.quaternion, I.scale), I.matrixWorldInverse.copy(I.matrixWorld).invert();
      const Qe = He + be, Ie = Te + be, Pe = _t - Ae, Xe = ve + (ue - Ae), rt = Le * Te / Ie * Qe, ut = $e * Te / Ie * Qe;
      I.projectionMatrix.makePerspective(Pe, Xe, rt, ut, Qe, Ie), I.projectionMatrixInverse.copy(I.projectionMatrix).invert();
    }
    function Y(I, W) {
      W === null ? I.matrixWorld.copy(I.matrix) : I.matrixWorld.multiplyMatrices(W.matrixWorld, I.matrix), I.matrixWorldInverse.copy(I.matrixWorld).invert();
    }
    this.updateCamera = function(I) {
      if (i === null) return;
      w.near = b.near = T.near = I.near, w.far = b.far = T.far = I.far, (H !== w.near || S !== w.far) && (i.updateRenderState({
        depthNear: w.near,
        depthFar: w.far
      }), H = w.near, S = w.far);
      const W = I.parent, le = w.cameras;
      Y(w, W);
      for (let ue = 0; ue < le.length; ue++)
        Y(le[ue], W);
      le.length === 2 ? G(w, T, b) : w.projectionMatrix.copy(T.projectionMatrix), X(I, w, W);
    };
    function X(I, W, le) {
      le === null ? I.matrix.copy(W.matrixWorld) : (I.matrix.copy(le.matrixWorld), I.matrix.invert(), I.matrix.multiply(W.matrixWorld)), I.matrix.decompose(I.position, I.quaternion, I.scale), I.updateMatrixWorld(!0), I.projectionMatrix.copy(W.projectionMatrix), I.projectionMatrixInverse.copy(W.projectionMatrixInverse), I.isPerspectiveCamera && (I.fov = Mi * 2 * Math.atan(1 / I.projectionMatrix.elements[5]), I.zoom = 1);
    }
    this.getCamera = function() {
      return w;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return c;
    }, this.setFoveation = function(I) {
      c = I, d !== null && (d.fixedFoveation = I), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = I);
    };
    let ee = null;
    function q(I, W) {
      if (u = W.getViewerPose(l || a), g = W, u !== null) {
        const le = u.views;
        m !== null && (e.setRenderTargetFramebuffer(f, m.framebuffer), e.setRenderTarget(f));
        let ue = !1;
        le.length !== w.cameras.length && (w.cameras.length = 0, ue = !0);
        for (let fe = 0; fe < le.length; fe++) {
          const ye = le[fe];
          let He = null;
          if (m !== null)
            He = m.getViewport(ye);
          else {
            const Le = h.getViewSubImage(d, ye);
            He = Le.viewport, fe === 0 && (e.setRenderTargetTextures(
              f,
              Le.colorTexture,
              d.ignoreDepthValues ? void 0 : Le.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let Te = L[fe];
          Te === void 0 && (Te = new Tt(), Te.layers.enable(fe), Te.viewport = new Ke(), L[fe] = Te), Te.matrix.fromArray(ye.transform.matrix), Te.matrix.decompose(Te.position, Te.quaternion, Te.scale), Te.projectionMatrix.fromArray(ye.projectionMatrix), Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(), Te.viewport.set(He.x, He.y, He.width, He.height), fe === 0 && (w.matrix.copy(Te.matrix), w.matrix.decompose(w.position, w.quaternion, w.scale)), ue === !0 && w.cameras.push(Te);
        }
      }
      for (let le = 0; le < E.length; le++) {
        const ue = x[le], fe = E[le];
        ue !== null && fe !== void 0 && fe.update(ue, W, l || a);
      }
      ee && ee(I, W), W.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: W }), g = null;
    }
    const K = new Uc();
    K.setAnimationLoop(q), this.setAnimationLoop = function(I) {
      ee = I;
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
  function i(p, f, E, x, T) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(p, f) : f.isMeshToonMaterial ? (s(p, f), h(p, f)) : f.isMeshPhongMaterial ? (s(p, f), u(p, f)) : f.isMeshStandardMaterial ? (s(p, f), d(p, f), f.isMeshPhysicalMaterial && m(p, f, T)) : f.isMeshMatcapMaterial ? (s(p, f), g(p, f)) : f.isMeshDepthMaterial ? s(p, f) : f.isMeshDistanceMaterial ? (s(p, f), _(p, f)) : f.isMeshNormalMaterial ? s(p, f) : f.isLineBasicMaterial ? (a(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? c(p, f, E, x) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.bumpMap && (p.bumpMap.value = f.bumpMap, t(f.bumpMap, p.bumpMapTransform), p.bumpScale.value = f.bumpScale, f.side === wt && (p.bumpScale.value *= -1)), f.normalMap && (p.normalMap.value = f.normalMap, t(f.normalMap, p.normalMapTransform), p.normalScale.value.copy(f.normalScale), f.side === wt && p.normalScale.value.negate()), f.displacementMap && (p.displacementMap.value = f.displacementMap, t(f.displacementMap, p.displacementMapTransform), p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, p.emissiveMapTransform)), f.specularMap && (p.specularMap.value = f.specularMap, t(f.specularMap, p.specularMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const E = e.get(f).envMap;
    if (E && (p.envMap.value = E, p.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const x = r._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * x, t(f.lightMap, p.lightMapTransform);
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, p.aoMapTransform));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, f.map && (p.map.value = f.map, t(f.map, p.mapTransform));
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function c(p, f, E, x) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * E, p.scale.value = x * 0.5, f.map && (p.map.value = f.map, t(f.map, p.uvTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function u(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    p.metalness.value = f.metalness, f.metalnessMap && (p.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, p.metalnessMapTransform)), p.roughness.value = f.roughness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, p.roughnessMapTransform)), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function m(p, f, E) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, p.sheenColorMapTransform)), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, p.clearcoatMapTransform)), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (p.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === wt && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, p.iridescenceMapTransform)), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = E.texture, p.transmissionSamplerSize.value.set(E.width, E.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, p.transmissionMapTransform)), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (p.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (p.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, p.specularColorMapTransform)), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function _(p, f) {
    const E = e.get(f).light;
    p.referencePosition.value.setFromMatrixPosition(E.matrixWorld), p.nearDistance.value = E.shadow.camera.near, p.farDistance.value = E.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function gm(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(E, x) {
    const T = x.program;
    n.uniformBlockBinding(E, T);
  }
  function l(E, x) {
    let T = i[E.id];
    T === void 0 && (g(E), T = u(E), i[E.id] = T, E.addEventListener("dispose", p));
    const b = x.program;
    n.updateUBOMapping(E, b);
    const L = e.render.frame;
    s[E.id] !== L && (d(E), s[E.id] = L);
  }
  function u(E) {
    const x = h();
    E.__bindingPointIndex = x;
    const T = r.createBuffer(), b = E.__size, L = E.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, T), r.bufferData(r.UNIFORM_BUFFER, b, L), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, x, T), T;
  }
  function h() {
    for (let E = 0; E < o; E++)
      if (a.indexOf(E) === -1)
        return a.push(E), E;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(E) {
    const x = i[E.id], T = E.uniforms, b = E.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, x);
    for (let L = 0, w = T.length; L < w; L++) {
      const H = T[L];
      if (m(H, L, b) === !0) {
        const S = H.__offset, A = Array.isArray(H.value) ? H.value : [H.value];
        let V = 0;
        for (let J = 0; J < A.length; J++) {
          const Q = A[J], D = _(Q);
          typeof Q == "number" ? (H.__data[0] = Q, r.bufferSubData(r.UNIFORM_BUFFER, S + V, H.__data)) : Q.isMatrix3 ? (H.__data[0] = Q.elements[0], H.__data[1] = Q.elements[1], H.__data[2] = Q.elements[2], H.__data[3] = Q.elements[0], H.__data[4] = Q.elements[3], H.__data[5] = Q.elements[4], H.__data[6] = Q.elements[5], H.__data[7] = Q.elements[0], H.__data[8] = Q.elements[6], H.__data[9] = Q.elements[7], H.__data[10] = Q.elements[8], H.__data[11] = Q.elements[0]) : (Q.toArray(H.__data, V), V += D.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, S, H.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function m(E, x, T) {
    const b = E.value;
    if (T[x] === void 0) {
      if (typeof b == "number")
        T[x] = b;
      else {
        const L = Array.isArray(b) ? b : [b], w = [];
        for (let H = 0; H < L.length; H++)
          w.push(L[H].clone());
        T[x] = w;
      }
      return !0;
    } else if (typeof b == "number") {
      if (T[x] !== b)
        return T[x] = b, !0;
    } else {
      const L = Array.isArray(T[x]) ? T[x] : [T[x]], w = Array.isArray(b) ? b : [b];
      for (let H = 0; H < L.length; H++) {
        const S = L[H];
        if (S.equals(w[H]) === !1)
          return S.copy(w[H]), !0;
      }
    }
    return !1;
  }
  function g(E) {
    const x = E.uniforms;
    let T = 0;
    const b = 16;
    let L = 0;
    for (let w = 0, H = x.length; w < H; w++) {
      const S = x[w], A = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, V = Array.isArray(S.value) ? S.value : [S.value];
      for (let J = 0, Q = V.length; J < Q; J++) {
        const D = V[J], G = _(D);
        A.boundary += G.boundary, A.storage += G.storage;
      }
      if (S.__data = new Float32Array(A.storage / Float32Array.BYTES_PER_ELEMENT), S.__offset = T, w > 0) {
        L = T % b;
        const J = b - L;
        L !== 0 && J - A.boundary < 0 && (T += b - L, S.__offset = T);
      }
      T += A.storage;
    }
    return L = T % b, L > 0 && (T += b - L), E.__size = T, E.__cache = {}, this;
  }
  function _(E) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof E == "number" ? (x.boundary = 4, x.storage = 4) : E.isVector2 ? (x.boundary = 8, x.storage = 8) : E.isVector3 || E.isColor ? (x.boundary = 16, x.storage = 12) : E.isVector4 ? (x.boundary = 16, x.storage = 16) : E.isMatrix3 ? (x.boundary = 48, x.storage = 48) : E.isMatrix4 ? (x.boundary = 64, x.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), x;
  }
  function p(E) {
    const x = E.target;
    x.removeEventListener("dispose", p);
    const T = a.indexOf(x.__bindingPointIndex);
    a.splice(T, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
  }
  function f() {
    for (const E in i)
      r.deleteBuffer(i[E]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: f
  };
}
class zc {
  constructor(e = {}) {
    const {
      canvas: t = fu(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = a;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, p = null;
    const f = [], E = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = nt, this._useLegacyLights = !1, this.toneMapping = yn, this.toneMappingExposure = 1;
    const x = this;
    let T = !1, b = 0, L = 0, w = null, H = -1, S = null;
    const A = new Ke(), V = new Ke();
    let J = null;
    const Q = new we(0);
    let D = 0, G = t.width, Y = t.height, X = 1, ee = null, q = null;
    const K = new Ke(0, 0, G, Y), I = new Ke(0, 0, G, Y);
    let W = !1;
    const le = new Ys();
    let ue = !1, fe = !1, ye = null;
    const He = new ze(), Te = new Ce(), Le = new C(), $e = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ne() {
      return w === null ? X : 1;
    }
    let N = n;
    function _t(M, U) {
      for (let F = 0; F < M.length; F++) {
        const B = M[F], z = t.getContext(B, U);
        if (z !== null) return z;
      }
      return null;
    }
    try {
      const M = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ws}`), t.addEventListener("webglcontextlost", Ge, !1), t.addEventListener("webglcontextrestored", P, !1), t.addEventListener("webglcontextcreationerror", ae, !1), N === null) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (x.isWebGL1Renderer === !0 && U.shift(), N = _t(U, M), N === null)
          throw _t(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let ve, be, Ae, Qe, Ie, Pe, Xe, rt, ut, y, v, O, te, Z, ne, me, se, ce, R, re, j, Se, ge, Me;
    function pe() {
      ve = new Af(N), be = new Mf(N, ve, e), ve.init(be), Se = new um(N, ve, be), Ae = new cm(N, ve, be), Qe = new Cf(N), Ie = new Yp(), Pe = new lm(N, ve, Ae, Ie, be, Se, Qe), Xe = new Ef(x), rt = new bf(x), ut = new Bu(N, be), ge = new xf(N, ve, ut, be), y = new wf(N, ut, Qe, ge), v = new If(N, y, ut, Qe), R = new Df(N, be, Pe), me = new Sf(Ie), O = new jp(x, Xe, rt, ve, be, ge, me), te = new mm(x, Ie), Z = new Zp(), ne = new nm(ve, be), ce = new _f(x, Xe, rt, Ae, v, d, c), se = new om(x, v, be), Me = new gm(N, Qe, be, Ae), re = new vf(N, ve, Qe, be), j = new Rf(N, ve, Qe, be), Qe.programs = O.programs, x.capabilities = be, x.extensions = ve, x.properties = Ie, x.renderLists = Z, x.shadowMap = se, x.state = Ae, x.info = Qe;
    }
    pe();
    const de = new pm(x, N);
    this.xr = de, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = ve.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = ve.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (X = M, this.setSize(G, Y, !1));
    }, this.getSize = function(M) {
      return M.set(G, Y);
    }, this.setSize = function(M, U, F = !0) {
      if (de.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = M, Y = U, t.width = Math.floor(M * X), t.height = Math.floor(U * X), F === !0 && (t.style.width = M + "px", t.style.height = U + "px"), this.setViewport(0, 0, M, U);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(G * X, Y * X).floor();
    }, this.setDrawingBufferSize = function(M, U, F) {
      G = M, Y = U, X = F, t.width = Math.floor(M * F), t.height = Math.floor(U * F), this.setViewport(0, 0, M, U);
    }, this.getCurrentViewport = function(M) {
      return M.copy(A);
    }, this.getViewport = function(M) {
      return M.copy(K);
    }, this.setViewport = function(M, U, F, B) {
      M.isVector4 ? K.set(M.x, M.y, M.z, M.w) : K.set(M, U, F, B), Ae.viewport(A.copy(K).multiplyScalar(X).floor());
    }, this.getScissor = function(M) {
      return M.copy(I);
    }, this.setScissor = function(M, U, F, B) {
      M.isVector4 ? I.set(M.x, M.y, M.z, M.w) : I.set(M, U, F, B), Ae.scissor(V.copy(I).multiplyScalar(X).floor());
    }, this.getScissorTest = function() {
      return W;
    }, this.setScissorTest = function(M) {
      Ae.setScissorTest(W = M);
    }, this.setOpaqueSort = function(M) {
      ee = M;
    }, this.setTransparentSort = function(M) {
      q = M;
    }, this.getClearColor = function(M) {
      return M.copy(ce.getClearColor());
    }, this.setClearColor = function() {
      ce.setClearColor.apply(ce, arguments);
    }, this.getClearAlpha = function() {
      return ce.getClearAlpha();
    }, this.setClearAlpha = function() {
      ce.setClearAlpha.apply(ce, arguments);
    }, this.clear = function(M = !0, U = !0, F = !0) {
      let B = 0;
      if (M) {
        let z = !1;
        if (w !== null) {
          const he = w.texture.format;
          z = he === _c || he === gc || he === mc;
        }
        if (z) {
          const he = w.texture.type, _e = he === Tn || he === Sn || he === Xs || he === Bn || he === fc || he === pc, Ee = ce.getClearColor(), Re = ce.getClearAlpha(), Fe = Ee.r, De = Ee.g, Ue = Ee.b;
          _e ? (m[0] = Fe, m[1] = De, m[2] = Ue, m[3] = Re, N.clearBufferuiv(N.COLOR, 0, m)) : (g[0] = Fe, g[1] = De, g[2] = Ue, g[3] = Re, N.clearBufferiv(N.COLOR, 0, g));
        } else
          B |= N.COLOR_BUFFER_BIT;
      }
      U && (B |= N.DEPTH_BUFFER_BIT), F && (B |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ge, !1), t.removeEventListener("webglcontextrestored", P, !1), t.removeEventListener("webglcontextcreationerror", ae, !1), Z.dispose(), ne.dispose(), Ie.dispose(), Xe.dispose(), rt.dispose(), v.dispose(), ge.dispose(), Me.dispose(), O.dispose(), de.dispose(), de.removeEventListener("sessionstart", Dt), de.removeEventListener("sessionend", Ze), ye && (ye.dispose(), ye = null), Mt.stop();
    };
    function Ge(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function P() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const M = Qe.autoReset, U = se.enabled, F = se.autoUpdate, B = se.needsUpdate, z = se.type;
      pe(), Qe.autoReset = M, se.enabled = U, se.autoUpdate = F, se.needsUpdate = B, se.type = z;
    }
    function ae(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function $(M) {
      const U = M.target;
      U.removeEventListener("dispose", $), k(U);
    }
    function k(M) {
      ie(M), Ie.remove(M);
    }
    function ie(M) {
      const U = Ie.get(M).programs;
      U !== void 0 && (U.forEach(function(F) {
        O.releaseProgram(F);
      }), M.isShaderMaterial && O.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, U, F, B, z, he) {
      U === null && (U = $e);
      const _e = z.isMesh && z.matrixWorld.determinant() < 0, Ee = Yc(M, U, F, B, z);
      Ae.setMaterial(B, _e);
      let Re = F.index, Fe = 1;
      if (B.wireframe === !0) {
        if (Re = y.getWireframeAttribute(F), Re === void 0) return;
        Fe = 2;
      }
      const De = F.drawRange, Ue = F.attributes.position;
      let it = De.start * Fe, Rt = (De.start + De.count) * Fe;
      he !== null && (it = Math.max(it, he.start * Fe), Rt = Math.min(Rt, (he.start + he.count) * Fe)), Re !== null ? (it = Math.max(it, 0), Rt = Math.min(Rt, Re.count)) : Ue != null && (it = Math.max(it, 0), Rt = Math.min(Rt, Ue.count));
      const ht = Rt - it;
      if (ht < 0 || ht === 1 / 0) return;
      ge.setup(z, B, Ee, F, Re);
      let Qt, tt = re;
      if (Re !== null && (Qt = ut.get(Re), tt = j, tt.setIndex(Qt)), z.isMesh)
        B.wireframe === !0 ? (Ae.setLineWidth(B.wireframeLinewidth * Ne()), tt.setMode(N.LINES)) : tt.setMode(N.TRIANGLES);
      else if (z.isLine) {
        let Ve = B.linewidth;
        Ve === void 0 && (Ve = 1), Ae.setLineWidth(Ve * Ne()), z.isLineSegments ? tt.setMode(N.LINES) : z.isLineLoop ? tt.setMode(N.LINE_LOOP) : tt.setMode(N.LINE_STRIP);
      } else z.isPoints ? tt.setMode(N.POINTS) : z.isSprite && tt.setMode(N.TRIANGLES);
      if (z.isInstancedMesh)
        tt.renderInstances(it, ht, z.count);
      else if (F.isInstancedBufferGeometry) {
        const Ve = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, zr = Math.min(F.instanceCount, Ve);
        tt.renderInstances(it, ht, zr);
      } else
        tt.render(it, ht);
    };
    function xe(M, U, F) {
      M.transparent === !0 && M.side === qt && M.forceSinglePass === !1 ? (M.side = wt, M.needsUpdate = !0, Ki(M, U, F), M.side = hn, M.needsUpdate = !0, Ki(M, U, F), M.side = qt) : Ki(M, U, F);
    }
    this.compile = function(M, U, F = null) {
      F === null && (F = M), p = ne.get(F), p.init(), E.push(p), F.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), M !== F && M.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), p.setupLights(x._useLegacyLights);
      const B = /* @__PURE__ */ new Set();
      return M.traverse(function(z) {
        const he = z.material;
        if (he)
          if (Array.isArray(he))
            for (let _e = 0; _e < he.length; _e++) {
              const Ee = he[_e];
              xe(Ee, F, z), B.add(Ee);
            }
          else
            xe(he, F, z), B.add(he);
      }), E.pop(), p = null, B;
    }, this.compileAsync = function(M, U, F = null) {
      const B = this.compile(M, U, F);
      return new Promise((z) => {
        function he() {
          if (B.forEach(function(_e) {
            Ie.get(_e).currentProgram.isReady() && B.delete(_e);
          }), B.size === 0) {
            z(M);
            return;
          }
          setTimeout(he, 10);
        }
        ve.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let ke = null;
    function st(M) {
      ke && ke(M);
    }
    function Dt() {
      Mt.stop();
    }
    function Ze() {
      Mt.start();
    }
    const Mt = new Uc();
    Mt.setAnimationLoop(st), typeof self < "u" && Mt.setContext(self), this.setAnimationLoop = function(M) {
      ke = M, de.setAnimationLoop(M), M === null ? Mt.stop() : Mt.start();
    }, de.addEventListener("sessionstart", Dt), de.addEventListener("sessionend", Ze), this.render = function(M, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0) return;
      M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(U), U = de.getCamera()), M.isScene === !0 && M.onBeforeRender(x, M, U, w), p = ne.get(M, E.length), p.init(), E.push(p), He.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), le.setFromProjectionMatrix(He), fe = this.localClippingEnabled, ue = me.init(this.clippingPlanes, fe), _ = Z.get(M, f.length), _.init(), f.push(_), Wt(M, U, 0, x.sortObjects), _.finish(), x.sortObjects === !0 && _.sort(ee, q), this.info.render.frame++, ue === !0 && me.beginShadows();
      const F = p.state.shadowsArray;
      if (se.render(F, M, U), ue === !0 && me.endShadows(), this.info.autoReset === !0 && this.info.reset(), ce.render(_, M), p.setupLights(x._useLegacyLights), U.isArrayCamera) {
        const B = U.cameras;
        for (let z = 0, he = B.length; z < he; z++) {
          const _e = B[z];
          aa(_, M, _e, _e.viewport);
        }
      } else
        aa(_, M, U);
      w !== null && (Pe.updateMultisampleRenderTarget(w), Pe.updateRenderTargetMipmap(w)), M.isScene === !0 && M.onAfterRender(x, M, U), ge.resetDefaultState(), H = -1, S = null, E.pop(), E.length > 0 ? p = E[E.length - 1] : p = null, f.pop(), f.length > 0 ? _ = f[f.length - 1] : _ = null;
    };
    function Wt(M, U, F, B) {
      if (M.visible === !1) return;
      if (M.layers.test(U.layers)) {
        if (M.isGroup)
          F = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(U);
        else if (M.isLight)
          p.pushLight(M), M.castShadow && p.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || le.intersectsSprite(M)) {
            B && Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(He);
            const _e = v.update(M), Ee = M.material;
            Ee.visible && _.push(M, _e, Ee, F, Le.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || le.intersectsObject(M))) {
          const _e = v.update(M), Ee = M.material;
          if (B && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Le.copy(M.boundingSphere.center)) : (_e.boundingSphere === null && _e.computeBoundingSphere(), Le.copy(_e.boundingSphere.center)), Le.applyMatrix4(M.matrixWorld).applyMatrix4(He)), Array.isArray(Ee)) {
            const Re = _e.groups;
            for (let Fe = 0, De = Re.length; Fe < De; Fe++) {
              const Ue = Re[Fe], it = Ee[Ue.materialIndex];
              it && it.visible && _.push(M, _e, it, F, Le.z, Ue);
            }
          } else Ee.visible && _.push(M, _e, Ee, F, Le.z, null);
        }
      }
      const he = M.children;
      for (let _e = 0, Ee = he.length; _e < Ee; _e++)
        Wt(he[_e], U, F, B);
    }
    function aa(M, U, F, B) {
      const z = M.opaque, he = M.transmissive, _e = M.transparent;
      p.setupLightsView(F), ue === !0 && me.setGlobalState(x.clippingPlanes, F), he.length > 0 && jc(z, he, U, F), B && Ae.viewport(A.copy(B)), z.length > 0 && Yi(z, U, F), he.length > 0 && Yi(he, U, F), _e.length > 0 && Yi(_e, U, F), Ae.buffers.depth.setTest(!0), Ae.buffers.depth.setMask(!0), Ae.buffers.color.setMask(!0), Ae.setPolygonOffset(!1);
    }
    function jc(M, U, F, B) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      const he = be.isWebGL2;
      ye === null && (ye = new kn(1, 1, {
        generateMipmaps: !0,
        type: ve.has("EXT_color_buffer_half_float") ? ki : Tn,
        minFilter: Gn,
        samples: he ? 4 : 0
      })), x.getDrawingBufferSize(Te), he ? ye.setSize(Te.x, Te.y) : ye.setSize(Ir(Te.x), Ir(Te.y));
      const _e = x.getRenderTarget();
      x.setRenderTarget(ye), x.getClearColor(Q), D = x.getClearAlpha(), D < 1 && x.setClearColor(16777215, 0.5), x.clear();
      const Ee = x.toneMapping;
      x.toneMapping = yn, Yi(M, F, B), Pe.updateMultisampleRenderTarget(ye), Pe.updateRenderTargetMipmap(ye);
      let Re = !1;
      for (let Fe = 0, De = U.length; Fe < De; Fe++) {
        const Ue = U[Fe], it = Ue.object, Rt = Ue.geometry, ht = Ue.material, Qt = Ue.group;
        if (ht.side === qt && it.layers.test(B.layers)) {
          const tt = ht.side;
          ht.side = wt, ht.needsUpdate = !0, oa(it, F, B, Rt, ht, Qt), ht.side = tt, ht.needsUpdate = !0, Re = !0;
        }
      }
      Re === !0 && (Pe.updateMultisampleRenderTarget(ye), Pe.updateRenderTargetMipmap(ye)), x.setRenderTarget(_e), x.setClearColor(Q, D), x.toneMapping = Ee;
    }
    function Yi(M, U, F) {
      const B = U.isScene === !0 ? U.overrideMaterial : null;
      for (let z = 0, he = M.length; z < he; z++) {
        const _e = M[z], Ee = _e.object, Re = _e.geometry, Fe = B === null ? _e.material : B, De = _e.group;
        Ee.layers.test(F.layers) && oa(Ee, U, F, Re, Fe, De);
      }
    }
    function oa(M, U, F, B, z, he) {
      M.onBeforeRender(x, U, F, B, z, he), M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), z.onBeforeRender(x, U, F, B, M, he), z.transparent === !0 && z.side === qt && z.forceSinglePass === !1 ? (z.side = wt, z.needsUpdate = !0, x.renderBufferDirect(F, U, B, z, M, he), z.side = hn, z.needsUpdate = !0, x.renderBufferDirect(F, U, B, z, M, he), z.side = qt) : x.renderBufferDirect(F, U, B, z, M, he), M.onAfterRender(x, U, F, B, z, he);
    }
    function Ki(M, U, F) {
      U.isScene !== !0 && (U = $e);
      const B = Ie.get(M), z = p.state.lights, he = p.state.shadowsArray, _e = z.state.version, Ee = O.getParameters(M, z.state, he, U, F), Re = O.getProgramCacheKey(Ee);
      let Fe = B.programs;
      B.environment = M.isMeshStandardMaterial ? U.environment : null, B.fog = U.fog, B.envMap = (M.isMeshStandardMaterial ? rt : Xe).get(M.envMap || B.environment), Fe === void 0 && (M.addEventListener("dispose", $), Fe = /* @__PURE__ */ new Map(), B.programs = Fe);
      let De = Fe.get(Re);
      if (De !== void 0) {
        if (B.currentProgram === De && B.lightsStateVersion === _e)
          return la(M, Ee), De;
      } else
        Ee.uniforms = O.getUniforms(M), M.onBuild(F, Ee, x), M.onBeforeCompile(Ee, x), De = O.acquireProgram(Ee, Re), Fe.set(Re, De), B.uniforms = Ee.uniforms;
      const Ue = B.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Ue.clippingPlanes = me.uniform), la(M, Ee), B.needsLights = Zc(M), B.lightsStateVersion = _e, B.needsLights && (Ue.ambientLightColor.value = z.state.ambient, Ue.lightProbe.value = z.state.probe, Ue.directionalLights.value = z.state.directional, Ue.directionalLightShadows.value = z.state.directionalShadow, Ue.spotLights.value = z.state.spot, Ue.spotLightShadows.value = z.state.spotShadow, Ue.rectAreaLights.value = z.state.rectArea, Ue.ltc_1.value = z.state.rectAreaLTC1, Ue.ltc_2.value = z.state.rectAreaLTC2, Ue.pointLights.value = z.state.point, Ue.pointLightShadows.value = z.state.pointShadow, Ue.hemisphereLights.value = z.state.hemi, Ue.directionalShadowMap.value = z.state.directionalShadowMap, Ue.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Ue.spotShadowMap.value = z.state.spotShadowMap, Ue.spotLightMatrix.value = z.state.spotLightMatrix, Ue.spotLightMap.value = z.state.spotLightMap, Ue.pointShadowMap.value = z.state.pointShadowMap, Ue.pointShadowMatrix.value = z.state.pointShadowMatrix), B.currentProgram = De, B.uniformsList = null, De;
    }
    function ca(M) {
      if (M.uniformsList === null) {
        const U = M.currentProgram.getUniforms();
        M.uniformsList = Ar.seqWithValue(U.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function la(M, U) {
      const F = Ie.get(M);
      F.outputColorSpace = U.outputColorSpace, F.instancing = U.instancing, F.instancingColor = U.instancingColor, F.skinning = U.skinning, F.morphTargets = U.morphTargets, F.morphNormals = U.morphNormals, F.morphColors = U.morphColors, F.morphTargetsCount = U.morphTargetsCount, F.numClippingPlanes = U.numClippingPlanes, F.numIntersection = U.numClipIntersection, F.vertexAlphas = U.vertexAlphas, F.vertexTangents = U.vertexTangents, F.toneMapping = U.toneMapping;
    }
    function Yc(M, U, F, B, z) {
      U.isScene !== !0 && (U = $e), Pe.resetTextureUnits();
      const he = U.fog, _e = B.isMeshStandardMaterial ? U.environment : null, Ee = w === null ? x.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : gt, Re = (B.isMeshStandardMaterial ? rt : Xe).get(B.envMap || _e), Fe = B.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, De = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Ue = !!F.morphAttributes.position, it = !!F.morphAttributes.normal, Rt = !!F.morphAttributes.color;
      let ht = yn;
      B.toneMapped && (w === null || w.isXRRenderTarget === !0) && (ht = x.toneMapping);
      const Qt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, tt = Qt !== void 0 ? Qt.length : 0, Ve = Ie.get(B), zr = p.state.lights;
      if (ue === !0 && (fe === !0 || M !== S)) {
        const Ct = M === S && B.id === H;
        me.setState(B, M, Ct);
      }
      let at = !1;
      B.version === Ve.__version ? (Ve.needsLights && Ve.lightsStateVersion !== zr.state.version || Ve.outputColorSpace !== Ee || z.isInstancedMesh && Ve.instancing === !1 || !z.isInstancedMesh && Ve.instancing === !0 || z.isSkinnedMesh && Ve.skinning === !1 || !z.isSkinnedMesh && Ve.skinning === !0 || z.isInstancedMesh && Ve.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && Ve.instancingColor === !1 && z.instanceColor !== null || Ve.envMap !== Re || B.fog === !0 && Ve.fog !== he || Ve.numClippingPlanes !== void 0 && (Ve.numClippingPlanes !== me.numPlanes || Ve.numIntersection !== me.numIntersection) || Ve.vertexAlphas !== Fe || Ve.vertexTangents !== De || Ve.morphTargets !== Ue || Ve.morphNormals !== it || Ve.morphColors !== Rt || Ve.toneMapping !== ht || be.isWebGL2 === !0 && Ve.morphTargetsCount !== tt) && (at = !0) : (at = !0, Ve.__version = B.version);
      let An = Ve.currentProgram;
      at === !0 && (An = Ki(B, U, z));
      let ua = !1, Ci = !1, Hr = !1;
      const St = An.getUniforms(), wn = Ve.uniforms;
      if (Ae.useProgram(An.program) && (ua = !0, Ci = !0, Hr = !0), B.id !== H && (H = B.id, Ci = !0), ua || S !== M) {
        St.setValue(N, "projectionMatrix", M.projectionMatrix), St.setValue(N, "viewMatrix", M.matrixWorldInverse);
        const Ct = St.map.cameraPosition;
        Ct !== void 0 && Ct.setValue(N, Le.setFromMatrixPosition(M.matrixWorld)), be.logarithmicDepthBuffer && St.setValue(
          N,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && St.setValue(N, "isOrthographic", M.isOrthographicCamera === !0), S !== M && (S = M, Ci = !0, Hr = !0);
      }
      if (z.isSkinnedMesh) {
        St.setOptional(N, z, "bindMatrix"), St.setOptional(N, z, "bindMatrixInverse");
        const Ct = z.skeleton;
        Ct && (be.floatVertexTextures ? (Ct.boneTexture === null && Ct.computeBoneTexture(), St.setValue(N, "boneTexture", Ct.boneTexture, Pe), St.setValue(N, "boneTextureSize", Ct.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Gr = F.morphAttributes;
      if ((Gr.position !== void 0 || Gr.normal !== void 0 || Gr.color !== void 0 && be.isWebGL2 === !0) && R.update(z, F, An), (Ci || Ve.receiveShadow !== z.receiveShadow) && (Ve.receiveShadow = z.receiveShadow, St.setValue(N, "receiveShadow", z.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (wn.envMap.value = Re, wn.flipEnvMap.value = Re.isCubeTexture && Re.isRenderTargetTexture === !1 ? -1 : 1), Ci && (St.setValue(N, "toneMappingExposure", x.toneMappingExposure), Ve.needsLights && Kc(wn, Hr), he && B.fog === !0 && te.refreshFogUniforms(wn, he), te.refreshMaterialUniforms(wn, B, X, Y, ye), Ar.upload(N, ca(Ve), wn, Pe)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Ar.upload(N, ca(Ve), wn, Pe), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && St.setValue(N, "center", z.center), St.setValue(N, "modelViewMatrix", z.modelViewMatrix), St.setValue(N, "normalMatrix", z.normalMatrix), St.setValue(N, "modelMatrix", z.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Ct = B.uniformsGroups;
        for (let kr = 0, $c = Ct.length; kr < $c; kr++)
          if (be.isWebGL2) {
            const ha = Ct[kr];
            Me.update(ha, An), Me.bind(ha, An);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return An;
    }
    function Kc(M, U) {
      M.ambientLightColor.needsUpdate = U, M.lightProbe.needsUpdate = U, M.directionalLights.needsUpdate = U, M.directionalLightShadows.needsUpdate = U, M.pointLights.needsUpdate = U, M.pointLightShadows.needsUpdate = U, M.spotLights.needsUpdate = U, M.spotLightShadows.needsUpdate = U, M.rectAreaLights.needsUpdate = U, M.hemisphereLights.needsUpdate = U;
    }
    function Zc(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(M, U, F) {
      Ie.get(M.texture).__webglTexture = U, Ie.get(M.depthTexture).__webglTexture = F;
      const B = Ie.get(M);
      B.__hasExternalTextures = !0, B.__hasExternalTextures && (B.__autoAllocateDepthBuffer = F === void 0, B.__autoAllocateDepthBuffer || ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(M, U) {
      const F = Ie.get(M);
      F.__webglFramebuffer = U, F.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(M, U = 0, F = 0) {
      w = M, b = U, L = F;
      let B = !0, z = null, he = !1, _e = !1;
      if (M) {
        const Re = Ie.get(M);
        Re.__useDefaultFramebuffer !== void 0 ? (Ae.bindFramebuffer(N.FRAMEBUFFER, null), B = !1) : Re.__webglFramebuffer === void 0 ? Pe.setupRenderTarget(M) : Re.__hasExternalTextures && Pe.rebindTextures(M, Ie.get(M.texture).__webglTexture, Ie.get(M.depthTexture).__webglTexture);
        const Fe = M.texture;
        (Fe.isData3DTexture || Fe.isDataArrayTexture || Fe.isCompressedArrayTexture) && (_e = !0);
        const De = Ie.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(De[U]) ? z = De[U][F] : z = De[U], he = !0) : be.isWebGL2 && M.samples > 0 && Pe.useMultisampledRTT(M) === !1 ? z = Ie.get(M).__webglMultisampledFramebuffer : Array.isArray(De) ? z = De[F] : z = De, A.copy(M.viewport), V.copy(M.scissor), J = M.scissorTest;
      } else
        A.copy(K).multiplyScalar(X).floor(), V.copy(I).multiplyScalar(X).floor(), J = W;
      if (Ae.bindFramebuffer(N.FRAMEBUFFER, z) && be.drawBuffers && B && Ae.drawBuffers(M, z), Ae.viewport(A), Ae.scissor(V), Ae.setScissorTest(J), he) {
        const Re = Ie.get(M.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + U, Re.__webglTexture, F);
      } else if (_e) {
        const Re = Ie.get(M.texture), Fe = U || 0;
        N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, Re.__webglTexture, F || 0, Fe);
      }
      H = -1;
    }, this.readRenderTargetPixels = function(M, U, F, B, z, he, _e) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ee = Ie.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && _e !== void 0 && (Ee = Ee[_e]), Ee) {
        Ae.bindFramebuffer(N.FRAMEBUFFER, Ee);
        try {
          const Re = M.texture, Fe = Re.format, De = Re.type;
          if (Fe !== Ot && Se.convert(Fe) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ue = De === ki && (ve.has("EXT_color_buffer_half_float") || be.isWebGL2 && ve.has("EXT_color_buffer_float"));
          if (De !== Tn && Se.convert(De) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(De === cn && (be.isWebGL2 || ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ue) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= M.width - B && F >= 0 && F <= M.height - z && N.readPixels(U, F, B, z, Se.convert(Fe), Se.convert(De), he);
        } finally {
          const Re = w !== null ? Ie.get(w).__webglFramebuffer : null;
          Ae.bindFramebuffer(N.FRAMEBUFFER, Re);
        }
      }
    }, this.copyFramebufferToTexture = function(M, U, F = 0) {
      const B = Math.pow(2, -F), z = Math.floor(U.image.width * B), he = Math.floor(U.image.height * B);
      Pe.setTexture2D(U, 0), N.copyTexSubImage2D(N.TEXTURE_2D, F, 0, 0, M.x, M.y, z, he), Ae.unbindTexture();
    }, this.copyTextureToTexture = function(M, U, F, B = 0) {
      const z = U.image.width, he = U.image.height, _e = Se.convert(F.format), Ee = Se.convert(F.type);
      Pe.setTexture2D(F, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, F.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, F.unpackAlignment), U.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, B, M.x, M.y, z, he, _e, Ee, U.image.data) : U.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, B, M.x, M.y, U.mipmaps[0].width, U.mipmaps[0].height, _e, U.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, B, M.x, M.y, _e, Ee, U.image), B === 0 && F.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), Ae.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, U, F, B, z = 0) {
      if (x.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const he = M.max.x - M.min.x + 1, _e = M.max.y - M.min.y + 1, Ee = M.max.z - M.min.z + 1, Re = Se.convert(B.format), Fe = Se.convert(B.type);
      let De;
      if (B.isData3DTexture)
        Pe.setTexture3D(B, 0), De = N.TEXTURE_3D;
      else if (B.isDataArrayTexture)
        Pe.setTexture2DArray(B, 0), De = N.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, B.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, B.unpackAlignment);
      const Ue = N.getParameter(N.UNPACK_ROW_LENGTH), it = N.getParameter(N.UNPACK_IMAGE_HEIGHT), Rt = N.getParameter(N.UNPACK_SKIP_PIXELS), ht = N.getParameter(N.UNPACK_SKIP_ROWS), Qt = N.getParameter(N.UNPACK_SKIP_IMAGES), tt = F.isCompressedTexture ? F.mipmaps[0] : F.image;
      N.pixelStorei(N.UNPACK_ROW_LENGTH, tt.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, tt.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, M.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, M.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, M.min.z), F.isDataTexture || F.isData3DTexture ? N.texSubImage3D(De, z, U.x, U.y, U.z, he, _e, Ee, Re, Fe, tt.data) : F.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(De, z, U.x, U.y, U.z, he, _e, Ee, Re, tt.data)) : N.texSubImage3D(De, z, U.x, U.y, U.z, he, _e, Ee, Re, Fe, tt), N.pixelStorei(N.UNPACK_ROW_LENGTH, Ue), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, it), N.pixelStorei(N.UNPACK_SKIP_PIXELS, Rt), N.pixelStorei(N.UNPACK_SKIP_ROWS, ht), N.pixelStorei(N.UNPACK_SKIP_IMAGES, Qt), z === 0 && B.generateMipmaps && N.generateMipmap(De), Ae.unbindTexture();
    }, this.initTexture = function(M) {
      M.isCubeTexture ? Pe.setTextureCube(M, 0) : M.isData3DTexture ? Pe.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? Pe.setTexture2DArray(M, 0) : Pe.setTexture2D(M, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      b = 0, L = 0, w = null, Ae.reset(), ge.reset();
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
    t.drawingBufferColorSpace = e === qs ? "display-p3" : "srgb", t.unpackColorSpace = qe.workingColorSpace === Nr ? "display-p3" : "srgb";
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === nt ? Hn : vc;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Hn ? nt : gt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class _m extends zc {
}
_m.prototype.isWebGL1Renderer = !0;
class xm extends et {
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
class vm {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Is, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Vt();
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
const Et = /* @__PURE__ */ new C();
class Js {
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
      Et.fromBufferAttribute(this, t), Et.applyMatrix4(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Et.fromBufferAttribute(this, t), Et.applyNormalMatrix(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Et.fromBufferAttribute(this, t), Et.transformDirection(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = jt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array), s = Ye(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
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
      return new bt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Js(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const No = /* @__PURE__ */ new C(), Oo = /* @__PURE__ */ new Ke(), Fo = /* @__PURE__ */ new Ke(), Mm = /* @__PURE__ */ new C(), Bo = /* @__PURE__ */ new ze(), xr = /* @__PURE__ */ new C(), xs = /* @__PURE__ */ new Zt(), zo = /* @__PURE__ */ new ze(), vs = /* @__PURE__ */ new Xi();
class Sm extends Bt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = xa, this.bindMatrix = new ze(), this.bindMatrixInverse = new ze(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new dn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, xr), this.boundingBox.expandByPoint(xr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Zt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, xr), this.boundingSphere.expandByPoint(xr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), xs.copy(this.boundingSphere), xs.applyMatrix4(i), e.ray.intersectsSphere(xs) !== !1 && (zo.copy(i).invert(), vs.copy(e.ray).applyMatrix4(zo), !(this.boundingBox !== null && vs.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, vs)));
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
    const e = new Ke(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === xa ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Pl ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Oo.fromBufferAttribute(i.attributes.skinIndex, e), Fo.fromBufferAttribute(i.attributes.skinWeight, e), No.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Fo.getComponent(s);
      if (a !== 0) {
        const o = Oo.getComponent(s);
        Bo.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Mm.copy(No).applyMatrix4(Bo), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class Hc extends et {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Em extends pt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = ft, u = ft, h, d) {
    super(null, a, o, c, l, u, i, s, h, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Ho = /* @__PURE__ */ new ze(), ym = /* @__PURE__ */ new ze();
class Qs {
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
        this.boneInverses.push(new ze());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new ze();
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
      const o = e[s] ? e[s].matrixWorld : ym;
      Ho.multiplyMatrices(o, t[s]), Ho.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Qs(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Sc(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Em(t, e, e, Ot, cn);
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
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Hc()), this.bones.push(a), this.boneInverses.push(new ze().fromArray(e.boneInverses[n]));
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
class Fs extends bt {
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
const ui = /* @__PURE__ */ new ze(), Go = /* @__PURE__ */ new ze(), vr = [], ko = /* @__PURE__ */ new dn(), Tm = /* @__PURE__ */ new ze(), Ui = /* @__PURE__ */ new Bt(), Ni = /* @__PURE__ */ new Zt();
class bm extends Bt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Fs(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Tm);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new dn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ui), ko.copy(e.boundingBox).applyMatrix4(ui), this.boundingBox.union(ko);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Zt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ui), Ni.copy(e.boundingSphere).applyMatrix4(ui), this.boundingSphere.union(Ni);
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
    if (Ui.geometry = this.geometry, Ui.material = this.material, Ui.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ni.copy(this.boundingSphere), Ni.applyMatrix4(n), e.ray.intersectsSphere(Ni) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, ui), Go.multiplyMatrices(n, ui), Ui.matrixWorld = Go, Ui.raycast(e, vr);
        for (let a = 0, o = vr.length; a < o; a++) {
          const c = vr[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        vr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Fs(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class Gc extends Yt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new we(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Vo = /* @__PURE__ */ new C(), Wo = /* @__PURE__ */ new C(), Xo = /* @__PURE__ */ new ze(), Ms = /* @__PURE__ */ new Xi(), Mr = /* @__PURE__ */ new Zt();
class ea extends et {
  constructor(e = new $t(), t = new Gc()) {
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
      e.setAttribute("lineDistance", new un(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Mr.copy(n.boundingSphere), Mr.applyMatrix4(i), Mr.radius += s, e.ray.intersectsSphere(Mr) === !1) return;
    Xo.copy(i).invert(), Ms.copy(e.ray).applyMatrix4(Xo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new C(), u = new C(), h = new C(), d = new C(), m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const f = Math.max(0, a.start), E = Math.min(g.count, a.start + a.count);
      for (let x = f, T = E - 1; x < T; x += m) {
        const b = g.getX(x), L = g.getX(x + 1);
        if (l.fromBufferAttribute(p, b), u.fromBufferAttribute(p, L), Ms.distanceSqToSegment(l, u, d, h) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const H = e.ray.origin.distanceTo(d);
        H < e.near || H > e.far || t.push({
          distance: H,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const f = Math.max(0, a.start), E = Math.min(p.count, a.start + a.count);
      for (let x = f, T = E - 1; x < T; x += m) {
        if (l.fromBufferAttribute(p, x), u.fromBufferAttribute(p, x + 1), Ms.distanceSqToSegment(l, u, d, h) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(d);
        L < e.near || L > e.far || t.push({
          distance: L,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: x,
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
const qo = /* @__PURE__ */ new C(), jo = /* @__PURE__ */ new C();
class Am extends ea {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        qo.fromBufferAttribute(t, i), jo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + qo.distanceTo(jo);
      e.setAttribute("lineDistance", new un(n, 1));
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
class ta extends Yt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new we(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Yo = /* @__PURE__ */ new ze(), Bs = /* @__PURE__ */ new Xi(), Sr = /* @__PURE__ */ new Zt(), Er = /* @__PURE__ */ new C();
class zs extends et {
  constructor(e = new $t(), t = new ta()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Sr.copy(n.boundingSphere), Sr.applyMatrix4(i), Sr.radius += s, e.ray.intersectsSphere(Sr) === !1) return;
    Yo.copy(i).invert(), Bs.copy(e.ray).applyMatrix4(Yo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, h = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
      for (let g = d, _ = m; g < _; g++) {
        const p = l.getX(g);
        Er.fromBufferAttribute(h, p), Ko(Er, p, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), m = Math.min(h.count, a.start + a.count);
      for (let g = d, _ = m; g < _; g++)
        Er.fromBufferAttribute(h, g), Ko(Er, g, c, i, e, t, this);
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
function Ko(r, e, t, n, i, s, a) {
  const o = Bs.distanceSqToPoint(r);
  if (o < t) {
    const c = new C();
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
class na extends Yt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new we(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new we(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Mc, this.normalScale = new Ce(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class bn extends na {
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
function yr(r, e, t) {
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
function Zo(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = r[o + c];
  }
  return i;
}
function kc(r, e, t, n) {
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
class ji {
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
class Pm extends ji {
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
        case Xa:
          s = e, o = 2 * t - n;
          break;
        case qa:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Xa:
          a = e, c = 2 * n - t;
          break;
        case qa:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = s * u, this._offsetNext = a * u;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), _ = g * g, p = _ * g, f = -d * p + 2 * d * _ - d * g, E = (1 + d) * p + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, x = (-1 - m) * p + (1.5 + m) * _ + 0.5 * g, T = m * p - m * _;
    for (let b = 0; b !== o; ++b)
      s[b] = f * a[u + b] + E * a[l + b] + x * a[c + b] + T * a[h + b];
    return s;
  }
}
class Dm extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, u = (n - t) / (i - t), h = 1 - u;
    for (let d = 0; d !== o; ++d)
      s[d] = a[l + d] * h + a[c + d] * u;
    return s;
  }
}
class Im extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Jt {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = yr(t, this.TimeBufferType), this.values = yr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
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
        times: yr(e.times, Array),
        values: yr(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Im(this.times, this.values, this.getValueSize(), e);
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
      case vi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Yr:
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
        return vi;
      case this.InterpolantFactoryMethodSmooth:
        return Yr;
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
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Yr, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o], u = e[o + 1];
      if (l !== u && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const h = o * n, d = h - n, m = h + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[h + g];
            if (_ !== t[d + g] || _ !== t[m + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const h = o * n, d = a * n;
          for (let m = 0; m !== n; ++m)
            t[d + m] = t[h + m];
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
Jt.prototype.TimeBufferType = Float32Array;
Jt.prototype.ValueBufferType = Float32Array;
Jt.prototype.DefaultInterpolation = vi;
class Ai extends Jt {
}
Ai.prototype.ValueTypeName = "bool";
Ai.prototype.ValueBufferType = Array;
Ai.prototype.DefaultInterpolation = Vi;
Ai.prototype.InterpolantFactoryMethodLinear = void 0;
Ai.prototype.InterpolantFactoryMethodSmooth = void 0;
class Vc extends Jt {
}
Vc.prototype.ValueTypeName = "color";
class Ei extends Jt {
}
Ei.prototype.ValueTypeName = "number";
class Um extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let u = l + o; l !== u; l += 4)
      Kt.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class Wn extends Jt {
  InterpolantFactoryMethodLinear(e) {
    return new Um(this.times, this.values, this.getValueSize(), e);
  }
}
Wn.prototype.ValueTypeName = "quaternion";
Wn.prototype.DefaultInterpolation = vi;
Wn.prototype.InterpolantFactoryMethodSmooth = void 0;
class wi extends Jt {
}
wi.prototype.ValueTypeName = "string";
wi.prototype.ValueBufferType = Array;
wi.prototype.DefaultInterpolation = Vi;
wi.prototype.InterpolantFactoryMethodLinear = void 0;
wi.prototype.InterpolantFactoryMethodSmooth = void 0;
class yi extends Jt {
}
yi.prototype.ValueTypeName = "vector";
class Nm {
  constructor(e, t = -1, n, i = Gl) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Vt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(Fm(n[a]).scale(i));
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
      t.push(Jt.toJSON(n[s]));
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
      const u = Lm(c);
      c = Zo(c, 1, u), l = Zo(l, 1, u), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(
        new Ei(
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
      const l = e[o], u = l.name.match(s);
      if (u && u.length > 1) {
        const h = u[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(l);
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
    const n = function(h, d, m, g, _) {
      if (m.length !== 0) {
        const p = [], f = [];
        kc(m, p, f, g), p.length !== 0 && _.push(new h(d, p, f));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let h = 0; h < l.length; h++) {
      const d = l[h].keys;
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
            for (let E = 0; E !== d[g].morphTargets.length; ++E) {
              const x = d[g];
              p.push(x.time), f.push(x.morphTarget === _ ? 1 : 0);
            }
            i.push(new Ei(".morphTargetInfluence[" + _ + "]", p, f));
          }
          c = m.length * a;
        } else {
          const m = ".bones[" + t[h].name + "]";
          n(
            yi,
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
            yi,
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
function Om(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ei;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return yi;
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
function Fm(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Om(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    kc(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Ti = {
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
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(u, a, o), s = !0;
    }, this.itemEnd = function(u) {
      a++, i.onProgress !== void 0 && i.onProgress(u, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, h) {
      return l.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = l.indexOf(u);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, d = l.length; h < d; h += 2) {
        const m = l[h], g = l[h + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return g;
      }
      return null;
    };
  }
}
const zm = /* @__PURE__ */ new Bm();
class Ri {
  constructor(e) {
    this.manager = e !== void 0 ? e : zm, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
class Hm extends Error {
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
    const s = Ti.get(e);
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
        const u = an[e], h = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0;
        let _ = 0;
        const p = new ReadableStream({
          start(f) {
            E();
            function E() {
              h.read().then(({ done: x, value: T }) => {
                if (x)
                  f.close();
                else {
                  _ += T.byteLength;
                  const b = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: m });
                  for (let L = 0, w = u.length; L < w; L++) {
                    const H = u[L];
                    H.onProgress && H.onProgress(b);
                  }
                  f.enqueue(T), E();
                }
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new Hm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((u) => new DOMParser().parseFromString(u, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(o), d = h && h[1] ? h[1].toLowerCase() : void 0, m = new TextDecoder(d);
            return l.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((l) => {
      Ti.add(e, l);
      const u = an[e];
      delete an[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const m = u[h];
        m.onLoad && m.onLoad(l);
      }
    }).catch((l) => {
      const u = an[e];
      if (u === void 0)
        throw this.manager.itemError(e), l;
      delete an[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const m = u[h];
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
    const s = this, a = Ti.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = Wi("img");
    function c() {
      u(), Ti.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(h) {
      u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class km extends Ri {
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
const Ss = /* @__PURE__ */ new ze(), $o = /* @__PURE__ */ new C(), Jo = /* @__PURE__ */ new C();
class ia {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ce(512, 512), this.map = null, this.mapPass = null, this.matrix = new ze(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ys(), this._frameExtents = new Ce(1, 1), this._viewportCount = 1, this._viewports = [
      new Ke(0, 0, 1, 1)
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
    $o.setFromMatrixPosition(e.matrixWorld), t.position.copy($o), Jo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Jo), t.updateMatrixWorld(), Ss.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ss), n.set(
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
    ), n.multiply(Ss);
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
    super(new Tt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Mi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
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
const Qo = /* @__PURE__ */ new ze(), Oi = /* @__PURE__ */ new C(), Es = /* @__PURE__ */ new C();
class Xm extends ia {
  constructor() {
    super(new Tt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ce(4, 2), this._viewportCount = 6, this._viewports = [
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
      new Ke(2, 1, 1, 1),
      // negative X
      new Ke(0, 1, 1, 1),
      // positive Z
      new Ke(3, 1, 1, 1),
      // negative Z
      new Ke(1, 1, 1, 1),
      // positive Y
      new Ke(3, 0, 1, 1),
      // negative Y
      new Ke(1, 0, 1, 1)
    ], this._cubeDirections = [
      new C(1, 0, 0),
      new C(-1, 0, 0),
      new C(0, 0, 1),
      new C(0, 0, -1),
      new C(0, 1, 0),
      new C(0, -1, 0)
    ], this._cubeUps = [
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 0, 1),
      new C(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Oi.setFromMatrixPosition(e.matrixWorld), n.position.copy(Oi), Es.copy(n.position), Es.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Es), n.updateMatrixWorld(), i.makeTranslation(-Oi.x, -Oi.y, -Oi.z), Qo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Qo);
  }
}
class qm extends Br {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Xm();
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
class jm extends ia {
  constructor() {
    super(new Zs(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Ym extends Br {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(et.DEFAULT_UP), this.updateMatrix(), this.target = new et(), this.shadow = new jm();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Km extends Br {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Hs {
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
class Zm extends Ri {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Ti.get(e);
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
      Ti.add(e, c), t && t(c), s.manager.itemEnd(e);
    }).catch(function(c) {
      i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
const ra = "\\[\\]\\.:\\/", $m = new RegExp("[" + ra + "]", "g"), sa = "[^" + ra + "]", Jm = "[^" + ra.replace("\\.", "") + "]", Qm = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", sa), eg = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Jm), tg = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", sa), ng = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", sa), ig = new RegExp(
  "^" + Qm + eg + tg + ng + "$"
), rg = ["material", "materials", "bones", "map"];
class sg {
  constructor(e, t, n) {
    const i = n || je.parseTrackName(t);
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
class je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || je.parseTrackName(t), this.node = je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new je.Composite(e, t, n) : new je(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace($m, "");
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
    if (e || (e = je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
          for (let u = 0; u < e.length; u++)
            if (e[u].name === l) {
              l = u;
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
je.Composite = sg;
je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
je.prototype.GetterByBindingType = [
  je.prototype._getValue_direct,
  je.prototype._getValue_array,
  je.prototype._getValue_arrayElement,
  je.prototype._getValue_toArray
];
je.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    je.prototype._setValue_direct,
    je.prototype._setValue_direct_setNeedsUpdate,
    je.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    je.prototype._setValue_array,
    je.prototype._setValue_array_setNeedsUpdate,
    je.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    je.prototype._setValue_arrayElement,
    je.prototype._setValue_arrayElement_setNeedsUpdate,
    je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    je.prototype._setValue_fromArray,
    je.prototype._setValue_fromArray_setNeedsUpdate,
    je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
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
const ec = { type: "change" }, ys = { type: "start" }, tc = { type: "end" }, Tr = new Xi(), nc = new vn(), ag = Math.cos(70 * Ec.DEG2RAD);
class og extends Xn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new C(), this.cursor = new C(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: qn.ROTATE, MIDDLE: qn.DOLLY, RIGHT: qn.PAN }, this.touches = { ONE: jn.ROTATE, TWO: jn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(R) {
      R.addEventListener("keydown", v), this._domElementKeyEvents = R;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", v), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(ec), n.update(), s = i.NONE;
    }, this.update = function() {
      const R = new C(), re = new Kt().setFromUnitVectors(e.up, new C(0, 1, 0)), j = re.clone().invert(), Se = new C(), ge = new Kt(), Me = new C(), pe = 2 * Math.PI;
      return function(Ge = null) {
        const P = n.object.position;
        R.copy(P).sub(n.target), R.applyQuaternion(re), o.setFromVector3(R), n.autoRotate && s === i.NONE && V(S(Ge)), n.enableDamping ? (o.theta += c.theta * n.dampingFactor, o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta, o.phi += c.phi);
        let ae = n.minAzimuthAngle, $ = n.maxAzimuthAngle;
        isFinite(ae) && isFinite($) && (ae < -Math.PI ? ae += pe : ae > Math.PI && (ae -= pe), $ < -Math.PI ? $ += pe : $ > Math.PI && ($ -= pe), ae <= $ ? o.theta = Math.max(ae, Math.min($, o.theta)) : o.theta = o.theta > (ae + $) / 2 ? Math.max(ae, o.theta) : Math.min($, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && L || n.object.isOrthographicCamera ? o.radius = q(o.radius) : o.radius = q(o.radius * l), R.setFromSpherical(o), R.applyQuaternion(j), P.copy(n.target).add(R), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), u.set(0, 0, 0));
        let k = !1;
        if (n.zoomToCursor && L) {
          let ie = null;
          if (n.object.isPerspectiveCamera) {
            const xe = R.length();
            ie = q(xe * l);
            const ke = xe - ie;
            n.object.position.addScaledVector(T, ke), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const xe = new C(b.x, b.y, 0);
            xe.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), k = !0;
            const ke = new C(b.x, b.y, 0);
            ke.unproject(n.object), n.object.position.sub(ke).add(xe), n.object.updateMatrixWorld(), ie = R.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          ie !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(ie).add(n.object.position) : (Tr.origin.copy(n.object.position), Tr.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Tr.direction)) < ag ? e.lookAt(n.target) : (nc.setFromNormalAndCoplanarPoint(n.object.up, n.target), Tr.intersectPlane(nc, n.target))));
        } else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), k = !0);
        return l = 1, L = !1, k || Se.distanceToSquared(n.object.position) > a || 8 * (1 - ge.dot(n.object.quaternion)) > a || Me.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(ec), Se.copy(n.object.position), ge.copy(n.object.quaternion), Me.copy(n.target), k = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", Z), n.domElement.removeEventListener("pointerdown", Ie), n.domElement.removeEventListener("pointercancel", Xe), n.domElement.removeEventListener("wheel", y), n.domElement.removeEventListener("pointermove", Pe), n.domElement.removeEventListener("pointerup", Xe), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", v), n._domElementKeyEvents = null);
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
    const u = new C(), h = new Ce(), d = new Ce(), m = new Ce(), g = new Ce(), _ = new Ce(), p = new Ce(), f = new Ce(), E = new Ce(), x = new Ce(), T = new C(), b = new Ce();
    let L = !1;
    const w = [], H = {};
    function S(R) {
      return R !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * R : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function A() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function V(R) {
      c.theta -= R;
    }
    function J(R) {
      c.phi -= R;
    }
    const Q = function() {
      const R = new C();
      return function(j, Se) {
        R.setFromMatrixColumn(Se, 0), R.multiplyScalar(-j), u.add(R);
      };
    }(), D = function() {
      const R = new C();
      return function(j, Se) {
        n.screenSpacePanning === !0 ? R.setFromMatrixColumn(Se, 1) : (R.setFromMatrixColumn(Se, 0), R.crossVectors(n.object.up, R)), R.multiplyScalar(j), u.add(R);
      };
    }(), G = function() {
      const R = new C();
      return function(j, Se) {
        const ge = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Me = n.object.position;
          R.copy(Me).sub(n.target);
          let pe = R.length();
          pe *= Math.tan(n.object.fov / 2 * Math.PI / 180), Q(2 * j * pe / ge.clientHeight, n.object.matrix), D(2 * Se * pe / ge.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (Q(j * (n.object.right - n.object.left) / n.object.zoom / ge.clientWidth, n.object.matrix), D(Se * (n.object.top - n.object.bottom) / n.object.zoom / ge.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function Y(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= R : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function X(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= R : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function ee(R) {
      if (!n.zoomToCursor)
        return;
      L = !0;
      const re = n.domElement.getBoundingClientRect(), j = R.clientX - re.left, Se = R.clientY - re.top, ge = re.width, Me = re.height;
      b.x = j / ge * 2 - 1, b.y = -(Se / Me) * 2 + 1, T.set(b.x, b.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function q(R) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, R));
    }
    function K(R) {
      h.set(R.clientX, R.clientY);
    }
    function I(R) {
      ee(R), f.set(R.clientX, R.clientY);
    }
    function W(R) {
      g.set(R.clientX, R.clientY);
    }
    function le(R) {
      d.set(R.clientX, R.clientY), m.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      V(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), h.copy(d), n.update();
    }
    function ue(R) {
      E.set(R.clientX, R.clientY), x.subVectors(E, f), x.y > 0 ? Y(A()) : x.y < 0 && X(A()), f.copy(E), n.update();
    }
    function fe(R) {
      _.set(R.clientX, R.clientY), p.subVectors(_, g).multiplyScalar(n.panSpeed), G(p.x, p.y), g.copy(_), n.update();
    }
    function ye(R) {
      ee(R), R.deltaY < 0 ? X(A()) : R.deltaY > 0 && Y(A()), n.update();
    }
    function He(R) {
      let re = !1;
      switch (R.code) {
        case n.keys.UP:
          R.ctrlKey || R.metaKey || R.shiftKey ? J(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, n.keyPanSpeed), re = !0;
          break;
        case n.keys.BOTTOM:
          R.ctrlKey || R.metaKey || R.shiftKey ? J(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, -n.keyPanSpeed), re = !0;
          break;
        case n.keys.LEFT:
          R.ctrlKey || R.metaKey || R.shiftKey ? V(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(n.keyPanSpeed, 0), re = !0;
          break;
        case n.keys.RIGHT:
          R.ctrlKey || R.metaKey || R.shiftKey ? V(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(-n.keyPanSpeed, 0), re = !0;
          break;
      }
      re && (R.preventDefault(), n.update());
    }
    function Te() {
      if (w.length === 1)
        h.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX), re = 0.5 * (w[0].pageY + w[1].pageY);
        h.set(R, re);
      }
    }
    function Le() {
      if (w.length === 1)
        g.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX), re = 0.5 * (w[0].pageY + w[1].pageY);
        g.set(R, re);
      }
    }
    function $e() {
      const R = w[0].pageX - w[1].pageX, re = w[0].pageY - w[1].pageY, j = Math.sqrt(R * R + re * re);
      f.set(0, j);
    }
    function Ne() {
      n.enableZoom && $e(), n.enablePan && Le();
    }
    function N() {
      n.enableZoom && $e(), n.enableRotate && Te();
    }
    function _t(R) {
      if (w.length == 1)
        d.set(R.pageX, R.pageY);
      else {
        const j = ce(R), Se = 0.5 * (R.pageX + j.x), ge = 0.5 * (R.pageY + j.y);
        d.set(Se, ge);
      }
      m.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      V(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), h.copy(d);
    }
    function ve(R) {
      if (w.length === 1)
        _.set(R.pageX, R.pageY);
      else {
        const re = ce(R), j = 0.5 * (R.pageX + re.x), Se = 0.5 * (R.pageY + re.y);
        _.set(j, Se);
      }
      p.subVectors(_, g).multiplyScalar(n.panSpeed), G(p.x, p.y), g.copy(_);
    }
    function be(R) {
      const re = ce(R), j = R.pageX - re.x, Se = R.pageY - re.y, ge = Math.sqrt(j * j + Se * Se);
      E.set(0, ge), x.set(0, Math.pow(E.y / f.y, n.zoomSpeed)), Y(x.y), f.copy(E);
    }
    function Ae(R) {
      n.enableZoom && be(R), n.enablePan && ve(R);
    }
    function Qe(R) {
      n.enableZoom && be(R), n.enableRotate && _t(R);
    }
    function Ie(R) {
      n.enabled !== !1 && (w.length === 0 && (n.domElement.setPointerCapture(R.pointerId), n.domElement.addEventListener("pointermove", Pe), n.domElement.addEventListener("pointerup", Xe)), ne(R), R.pointerType === "touch" ? O(R) : rt(R));
    }
    function Pe(R) {
      n.enabled !== !1 && (R.pointerType === "touch" ? te(R) : ut(R));
    }
    function Xe(R) {
      me(R), w.length === 0 && (n.domElement.releasePointerCapture(R.pointerId), n.domElement.removeEventListener("pointermove", Pe), n.domElement.removeEventListener("pointerup", Xe)), n.dispatchEvent(tc), s = i.NONE;
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
        case qn.DOLLY:
          if (n.enableZoom === !1) return;
          I(R), s = i.DOLLY;
          break;
        case qn.ROTATE:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enablePan === !1) return;
            W(R), s = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            K(R), s = i.ROTATE;
          }
          break;
        case qn.PAN:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enableRotate === !1) return;
            K(R), s = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            W(R), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ys);
    }
    function ut(R) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          le(R);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          ue(R);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          fe(R);
          break;
      }
    }
    function y(R) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (R.preventDefault(), n.dispatchEvent(ys), ye(R), n.dispatchEvent(tc));
    }
    function v(R) {
      n.enabled === !1 || n.enablePan === !1 || He(R);
    }
    function O(R) {
      switch (se(R), w.length) {
        case 1:
          switch (n.touches.ONE) {
            case jn.ROTATE:
              if (n.enableRotate === !1) return;
              Te(), s = i.TOUCH_ROTATE;
              break;
            case jn.PAN:
              if (n.enablePan === !1) return;
              Le(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case jn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ne(), s = i.TOUCH_DOLLY_PAN;
              break;
            case jn.DOLLY_ROTATE:
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
      s !== i.NONE && n.dispatchEvent(ys);
    }
    function te(R) {
      switch (se(R), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          _t(R), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ve(R), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ae(R), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Qe(R), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function Z(R) {
      n.enabled !== !1 && R.preventDefault();
    }
    function ne(R) {
      w.push(R);
    }
    function me(R) {
      delete H[R.pointerId];
      for (let re = 0; re < w.length; re++)
        if (w[re].pointerId == R.pointerId) {
          w.splice(re, 1);
          return;
        }
    }
    function se(R) {
      let re = H[R.pointerId];
      re === void 0 && (re = new Ce(), H[R.pointerId] = re), re.set(R.pageX, R.pageY);
    }
    function ce(R) {
      const re = R.pointerId === w[0].pointerId ? w[1] : w[0];
      return H[re.pointerId];
    }
    n.domElement.addEventListener("contextmenu", Z), n.domElement.addEventListener("pointerdown", Ie), n.domElement.addEventListener("pointercancel", Xe), n.domElement.addEventListener("wheel", y, { passive: !1 }), this.update();
  }
}
function ic(r, e) {
  if (e === kl)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === Ds || e === xc) {
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
      return new Sg(t);
    }), this.register(function(t) {
      return new Eg(t);
    }), this.register(function(t) {
      return new yg(t);
    }), this.register(function(t) {
      return new mg(t);
    }), this.register(function(t) {
      return new gg(t);
    }), this.register(function(t) {
      return new _g(t);
    }), this.register(function(t) {
      return new xg(t);
    }), this.register(function(t) {
      return new dg(t);
    }), this.register(function(t) {
      return new vg(t);
    }), this.register(function(t) {
      return new pg(t);
    }), this.register(function(t) {
      return new Mg(t);
    }), this.register(function(t) {
      return new ug(t);
    }), this.register(function(t) {
      return new Tg(t);
    }), this.register(function(t) {
      return new bg(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = Hs.extractUrlBase(e), this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new Wc(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, a, function(u) {
          t(u), s.manager.itemEnd(e);
        }, o);
      } catch (u) {
        o(u);
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
      if (c.decode(new Uint8Array(e, 0, 4)) === Xc) {
        try {
          a[We.KHR_BINARY_GLTF] = new Ag(e);
        } catch (h) {
          i && i(h);
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
    const l = new zg(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](l);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[h.name] = h, a[h.name] = !0;
    }
    if (s.extensionsUsed)
      for (let u = 0; u < s.extensionsUsed.length; ++u) {
        const h = s.extensionsUsed[u], d = s.extensionsRequired || [];
        switch (h) {
          case We.KHR_MATERIALS_UNLIT:
            a[h] = new hg();
            break;
          case We.KHR_DRACO_MESH_COMPRESSION:
            a[h] = new wg(s, this.dracoLoader);
            break;
          case We.KHR_TEXTURE_TRANSFORM:
            a[h] = new Rg();
            break;
          case We.KHR_MESH_QUANTIZATION:
            a[h] = new Cg();
            break;
          default:
            d.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
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
class ug {
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
    const u = new we(16777215);
    c.color !== void 0 && u.setRGB(c.color[0], c.color[1], c.color[2], gt);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Ym(u), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new qm(u), l.distance = h;
        break;
      case "spot":
        l = new Wm(u), l.distance = h, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Mn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
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
class hg {
  constructor() {
    this.name = We.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return On;
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
    return !n.extensions || !n.extensions[this.name] ? null : bn;
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
    return !n.extensions || !n.extensions[this.name] ? null : bn;
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
    return !n.extensions || !n.extensions[this.name] ? null : bn;
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
    return !n.extensions || !n.extensions[this.name] ? null : bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class _g {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : bn;
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
class xg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : bn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class vg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : bn;
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
class Mg {
  constructor(e) {
    this.parser = e, this.name = We.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class Sg {
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
class Eg {
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
class yg {
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
class Tg {
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
        const c = i.byteOffset || 0, l = i.byteLength || 0, u = i.count, h = i.byteStride, d = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(u, h, d, i.mode, i.filter).then(function(m) {
          return m.buffer;
        }) : a.ready.then(function() {
          const m = new ArrayBuffer(u * h);
          return a.decodeGltfBuffer(new Uint8Array(m), u, h, d, i.mode, i.filter), m;
        });
      });
    } else
      return null;
  }
}
class bg {
  constructor(e) {
    this.name = We.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== Ut.TRIANGLES && l.mode !== Ut.TRIANGLE_STRIP && l.mode !== Ut.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((u) => (c[l] = u, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const u = l.pop(), h = u.isGroup ? u.children : [u], d = l[0].count, m = [];
      for (const g of h) {
        const _ = new ze(), p = new C(), f = new Kt(), E = new C(1, 1, 1), x = new bm(g.geometry, g.material, d);
        for (let T = 0; T < d; T++)
          c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, T), c.ROTATION && f.fromBufferAttribute(c.ROTATION, T), c.SCALE && E.fromBufferAttribute(c.SCALE, T), x.setMatrixAt(T, _.compose(p, f, E));
        for (const T in c)
          if (T === "_COLOR_0") {
            const b = c[T];
            x.instanceColor = new Fs(b.array, b.itemSize, b.normalized);
          } else T !== "TRANSLATION" && T !== "ROTATION" && T !== "SCALE" && g.geometry.setAttribute(T, c[T]);
        et.prototype.copy.call(x, g), this.parser.assignFinalMaterial(x), m.push(x);
      }
      return u.isGroup ? (u.clear(), u.add(...m), u) : m[0];
    }));
  }
}
const Xc = "glTF", Fi = 12, rc = { JSON: 1313821514, BIN: 5130562 };
class Ag {
  constructor(e) {
    this.name = We.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Fi), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Xc)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Fi, s = new DataView(e, Fi);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (a += 4, c === rc.JSON) {
        const l = new Uint8Array(e, Fi + a, o);
        this.content = n.decode(l);
      } else if (c === rc.BIN) {
        const l = Fi + a;
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
    for (const u in a) {
      const h = ks[u] || u.toLowerCase();
      o[h] = a[u];
    }
    for (const u in e.attributes) {
      const h = ks[u] || u.toLowerCase();
      if (a[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], m = pi[d.componentType];
        l[h] = m.name, c[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(u) {
      return new Promise(function(h) {
        i.decodeDracoFile(u, function(d) {
          for (const m in d.attributes) {
            const g = d.attributes[m], _ = c[m];
            _ !== void 0 && (g.normalized = _);
          }
          h(d);
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
class qc extends ji {
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
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, u = i - t, h = (n - t) / u, d = h * h, m = d * h, g = e * l, _ = g - l, p = -2 * m + 3 * d, f = m - d, E = 1 - p, x = f - d + h;
    for (let T = 0; T !== o; T++) {
      const b = a[_ + T + o], L = a[_ + T + c] * u, w = a[g + T + o], H = a[g + T] * u;
      s[T] = E * b + x * L + p * w + f * H;
    }
    return s;
  }
}
const Lg = new Kt();
class Pg extends qc {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return Lg.fromArray(s).normalize().toArray(s), s;
  }
}
const Ut = {
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
  9985: hc,
  9986: br,
  9987: Gn
}, ac = {
  33071: Nt,
  33648: Rr,
  10497: _i
}, Ts = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ks = {
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
}, xn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Dg = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: vi,
  STEP: Vi
}, bs = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ig(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new na({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: hn
  })), r.DefaultMaterial;
}
function Dn(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Mn(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ug(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (h.POSITION !== void 0 && (n = !0), h.NORMAL !== void 0 && (i = !0), h.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], c = [];
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : r.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : r.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : r.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const u = l[0], h = l[1], d = l[2];
    return n && (r.morphAttributes.position = u), i && (r.morphAttributes.normal = h), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
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
function Og(r) {
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
function Fg(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Bg = new ze();
class zg {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new lg(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new km(this.options.manager) : this.textureLoader = new Zm(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Wc(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return Dn(s, o, i), Mn(o, i), Promise.all(n._invokeAll(function(c) {
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
      for (const [l, u] of a.children.entries())
        s(u, o.children[l]);
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
      n.load(Hs.resolveURL(t.uri, i.path), s, void 0, function() {
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
      const a = Ts[i.type], o = pi[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new bt(l, a, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], c = Ts[i.type], l = pi[i.componentType], u = l.BYTES_PER_ELEMENT, h = u * c, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, p;
      if (m && m !== h) {
        const f = Math.floor(d / m), E = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let x = t.cache.get(E);
        x || (_ = new l(o, f * m, i.count * m / u), x = new vm(_, m / u), t.cache.add(E, x)), p = new Js(x, c, d % m / u, g);
      } else
        o === null ? _ = new l(i.count * c) : _ = new l(o, d, i.count * c), p = new bt(_, c, g);
      if (i.sparse !== void 0) {
        const f = Ts.SCALAR, E = pi[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, T = i.sparse.values.byteOffset || 0, b = new E(a[1], x, i.sparse.count * f), L = new l(a[2], T, i.sparse.count * c);
        o !== null && (p = new bt(p.array.slice(), p.itemSize, p.normalized));
        for (let w = 0, H = b.length; w < H; w++) {
          const S = b[w];
          if (p.setX(S, L[w * c]), c >= 2 && p.setY(S, L[w * c + 1]), c >= 3 && p.setZ(S, L[w * c + 2]), c >= 4 && p.setW(S, L[w * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
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
    const l = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = a.name || o.name || "", u.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (u.name = o.uri);
      const d = (s.samplers || {})[a.sampler] || {};
      return u.magFilter = sc[d.magFilter] || At, u.minFilter = sc[d.minFilter] || Gn, u.wrapS = ac[d.wrapS] || _i, u.wrapT = ac[d.wrapT] || _i, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(h) {
        l = !0;
        const d = new Blob([h], { type: a.mimeType });
        return c = o.createObjectURL(d), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(c).then(function(h) {
      return new Promise(function(d, m) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const p = new pt(_);
          p.needsUpdate = !0, d(p);
        }), t.load(Hs.resolveURL(h, s.path), g, void 0, m);
      });
    }).then(function(h) {
      return l === !0 && o.revokeObjectURL(c), h.userData.mimeType = a.mimeType || Fg(a.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), h;
    });
    return this.sourceCache[e] = u, u;
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
      c || (c = new ta(), Yt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Gc(), Yt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
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
      const h = i[We.KHR_MATERIALS_UNLIT];
      a = h.getMaterialType(), l.push(h.extendParams(o, s, t));
    } else {
      const h = s.pbrMetallicRoughness || {};
      if (o.color = new we(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], gt), o.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", h.baseColorTexture, nt)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = qt);
    const u = s.alphaMode || bs.OPAQUE;
    if (u === bs.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, u === bs.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== On && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Ce(1, 1), s.normalTexture.scale !== void 0)) {
      const h = s.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (s.occlusionTexture !== void 0 && a !== On && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== On) {
      const h = s.emissiveFactor;
      o.emissive = new we().setRGB(h[0], h[1], h[2], gt);
    }
    return s.emissiveTexture !== void 0 && a !== On && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, nt)), Promise.all(l).then(function() {
      const h = new a(o);
      return s.name && (h.name = s.name), Mn(h, s), t.associations.set(h, { materials: e }), s.extensions && Dn(i, h, s), h;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = je.sanitizeNodeName(e || "");
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
      const l = e[o], u = Og(l), h = i[u];
      if (h)
        a.push(h.promise);
      else {
        let d;
        l.extensions && l.extensions[We.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = oc(new $t(), l, t), i[u] = { primitive: l, promise: d }, a.push(d);
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
      const u = a[c].material === void 0 ? Ig(this.cache) : this.getDependency("material", a[c].material);
      o.push(u);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), u = c[c.length - 1], h = [];
      for (let m = 0, g = u.length; m < g; m++) {
        const _ = u[m], p = a[m];
        let f;
        const E = l[m];
        if (p.mode === Ut.TRIANGLES || p.mode === Ut.TRIANGLE_STRIP || p.mode === Ut.TRIANGLE_FAN || p.mode === void 0)
          f = s.isSkinnedMesh === !0 ? new Sm(_, E) : new Bt(_, E), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), p.mode === Ut.TRIANGLE_STRIP ? f.geometry = ic(f.geometry, xc) : p.mode === Ut.TRIANGLE_FAN && (f.geometry = ic(f.geometry, Ds));
        else if (p.mode === Ut.LINES)
          f = new Am(_, E);
        else if (p.mode === Ut.LINE_STRIP)
          f = new ea(_, E);
        else if (p.mode === Ut.LINE_LOOP)
          f = new wm(_, E);
        else if (p.mode === Ut.POINTS)
          f = new zs(_, E);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && Ng(f, s), f.name = t.createUniqueName(s.name || "mesh_" + e), Mn(f, s), p.extensions && Dn(i, f, p), t.assignFinalMaterial(f), h.push(f);
      }
      for (let m = 0, g = h.length; m < g; m++)
        t.associations.set(h[m], {
          meshes: e,
          primitives: m
        });
      if (h.length === 1)
        return s.extensions && Dn(i, h[0], s), h[0];
      const d = new Fn();
      s.extensions && Dn(i, d, s), t.associations.set(d, { meshes: e });
      for (let m = 0, g = h.length; m < g; m++)
        d.add(h[m]);
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
    return n.type === "perspective" ? t = new Tt(Ec.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Zs(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Mn(t, n), Promise.resolve(t);
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
      for (let l = 0, u = a.length; l < u; l++) {
        const h = a[l];
        if (h) {
          o.push(h);
          const d = new ze();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Qs(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], u = [];
    for (let h = 0, d = i.channels.length; h < d; h++) {
      const m = i.channels[h], g = i.samplers[m.sampler], _ = m.target, p = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, E = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", f)), c.push(this.getDependency("accessor", E)), l.push(g), u.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(u)
    ]).then(function(h) {
      const d = h[0], m = h[1], g = h[2], _ = h[3], p = h[4], f = [];
      for (let E = 0, x = d.length; E < x; E++) {
        const T = d[E], b = m[E], L = g[E], w = _[E], H = p[E];
        if (T === void 0) continue;
        T.updateMatrix && T.updateMatrix();
        const S = n._createAnimationTracks(T, b, L, w, H);
        if (S)
          for (let A = 0; A < S.length; A++)
            f.push(S[A]);
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
    for (let l = 0, u = o.length; l < u; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      c
    ]).then(function(l) {
      const u = l[0], h = l[1], d = l[2];
      d !== null && u.traverse(function(m) {
        m.isSkinnedMesh && m.bind(d, Bg);
      });
      for (let m = 0, g = h.length; m < g; m++)
        u.add(h[m]);
      return u;
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
      let u;
      if (s.isBone === !0 ? u = new Hc() : l.length > 1 ? u = new Fn() : l.length === 1 ? u = l[0] : u = new et(), u !== l[0])
        for (let h = 0, d = l.length; h < d; h++)
          u.add(l[h]);
      if (s.name && (u.userData.name = s.name, u.name = a), Mn(u, s), s.extensions && Dn(n, u, s), s.matrix !== void 0) {
        const h = new ze();
        h.fromArray(s.matrix), u.applyMatrix4(h);
      } else
        s.translation !== void 0 && u.position.fromArray(s.translation), s.rotation !== void 0 && u.quaternion.fromArray(s.rotation), s.scale !== void 0 && u.scale.fromArray(s.scale);
      return i.associations.has(u) || i.associations.set(u, {}), i.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Fn();
    n.name && (s.name = i.createUniqueName(n.name)), Mn(s, n), n.extensions && Dn(t, s, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let u = 0, h = c.length; u < h; u++)
        s.add(c[u]);
      const l = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, m] of i.associations)
          (d instanceof Yt || d instanceof pt) && h.set(d, m);
        return u.traverse((d) => {
          const m = i.associations.get(d);
          m != null && h.set(d, m);
        }), h;
      };
      return i.associations = l(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    xn[s.path] === xn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(o);
    let l;
    switch (xn[s.path]) {
      case xn.weights:
        l = Ei;
        break;
      case xn.rotation:
        l = Wn;
        break;
      case xn.position:
      case xn.scale:
        l = yi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Ei;
            break;
          case 2:
          case 3:
          default:
            l = yi;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? Dg[i.interpolation] : vi, h = this._getArrayFromAccessor(n);
    for (let d = 0, m = c.length; d < m; d++) {
      const g = new l(
        c[d] + "." + xn[s.path],
        t.array,
        h,
        u
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
      const i = this instanceof Wn ? Pg : qc;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Hg(r, e, t) {
  const n = e.attributes, i = new dn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new C(c[0], c[1], c[2]),
        new C(l[0], l[1], l[2])
      ), o.normalized) {
        const u = Vs(pi[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new C(), c = new C();
    for (let l = 0, u = s.length; l < u; l++) {
      const h = s[l];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], m = d.min, g = d.max;
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
  const a = new Zt();
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
    const o = ks[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return qe.workingColorSpace !== gt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`), Mn(r, e), Hg(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Ug(r, e.targets, t) : r;
  });
}
class Gg {
  constructor(e, t = {
    particleSize: 0.1,
    particleColor: "#372CD5",
    backgroundColor: "#ffffff",
    autoRotate: !0,
    rotationSpeed: 0.1,
    url: "https://example.com/particle-cloud.glb",
    onProgress: null,
    onError: null
  }) {
    this.container = e, this.scene = new xm(), this.camera = new Tt(75, 1, 0.1, 8e3), this.renderer = new zc({ antialias: !0, preserveDrawingBuffer: !0 }), this.controls = null, this.particles = null, this.pointCloudData = null, this.particleTexture = this.createParticleTexture(), this.animationId = null, this.resizeObserver = null, this.loader = new cg(), this.settings = {
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
    const i = new Km(4210752, 0.1);
    this.scene.add(i), this.setupResizeObserver(), this.loadGLBPointCloudFromURL(), this.animate();
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
            console.log("Resize detected:", i, s), i > 0 && s > 0 && this.onResize(i, s);
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
  createParticleTexture() {
    const e = document.createElement("canvas");
    e.width = 64, e.height = 64;
    const t = e.getContext("2d");
    return t.beginPath(), t.arc(32, 32, 32, 0, 2 * Math.PI, !1), t.fillStyle = "white", t.fill(), new Rm(e);
  }
  async loadGLBPointCloudFromURL() {
    try {
      this.loader.load(
        this.settings.url,
        (e) => {
          this.processGLBPointCloud(e);
        },
        (e) => {
          if (this.settings.onProgress) {
            const t = e.loaded / e.total * 100;
            this.settings.onProgress(t / 100);
          }
        },
        (e) => {
          console.error("Error loading GLB point cloud:", e), this.settings.onError && this.settings.onError(e);
        }
      );
    } catch (e) {
      console.error("Error loading point cloud:", e), this.settings.onError && this.settings.onError(e);
    }
  }
  processGLBPointCloud(e) {
    this.particles && (this.scene.remove(this.particles), this.particles.geometry.dispose(), this.particles.material.dispose());
    let t = null;
    if (e.scene.traverse((n) => {
      n instanceof zs && (t = n);
    }), !t) {
      console.error("No point cloud found in GLB file"), this.settings.onError && this.settings.onError(new Error("No point cloud found in GLB file"));
      return;
    }
    if (this.pointCloudData = t.userData.particleViewer || {}, this.particles = this.createPointCloudFromGLB(t), this.particles)
      this.scene.add(this.particles), this.fitCameraToPointCloud();
    else
      throw new Error("Could not create point cloud from GLB data");
  }
  createPointCloudFromGLB(e) {
    const t = e.geometry.clone();
    let n = 1;
    if (this.pointCloudData.originalModelSize)
      n = this.pointCloudData.originalModelSize;
    else {
      t.computeBoundingBox();
      const a = t.boundingBox.getSize(new C());
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
    return new zs(t, s);
  }
  fitCameraToPointCloud() {
    if (!this.particles) return;
    if (this.pointCloudData && this.pointCloudData.camera) {
      const l = this.pointCloudData.camera;
      l.fov && (this.camera.fov = l.fov), l.near && (this.camera.near = l.near), l.far && (this.camera.far = l.far), this.camera.updateProjectionMatrix();
      const u = new C(
        l.target.x,
        l.target.y,
        l.target.z
      ), h = new Gs(
        l.distance,
        l.spherical.phi,
        l.spherical.theta
      ), d = new C();
      d.setFromSpherical(h), d.add(u), this.camera.position.copy(d), this.camera.lookAt(u), this.controls && (this.controls.target.copy(u), this.controls.update()), console.log("Camera position restored from GLB metadata");
      return;
    }
    this.particles.geometry.computeBoundingBox();
    const e = this.particles.geometry.boundingBox, t = e.getSize(new C()), n = e.getCenter(new C()), s = Math.max(t.x, t.y, t.z) / (2 * Math.atan(Math.PI * this.camera.fov / 360)), a = s / this.camera.aspect, o = 1.2 * Math.max(s, a), c = new C(1, 1, 1).normalize().multiplyScalar(o);
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
  Gg as default
};
