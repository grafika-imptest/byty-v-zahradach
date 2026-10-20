var e = 1e3, t = 1001, n = 1002, r = 1003, i = 1006, a = 1008, o = 1009, s = 1012, c = 1014, l = 1015, u = 1016, d = 1017, f = 1018, p = 1020, m = 1023, h = 1026, g = 1027, _ = 1029, v = 1030, y = 1031, b = 1033, x = 2300, S = 2301, C = 2302, w = 2303, T = 2400, E = 2401, D = 2402, O = "srgb", k = "srgb-linear", A = "linear", ee = "srgb", j = 7680, M = 2e3;
function N(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function te(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function P(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function ne() {
	let e = P("canvas");
	return e.style.display = "block", e;
}
var re = {};
function ie(...e) {
	let t = "THREE." + e.shift();
	console.log(t, ...e);
}
function F(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function I(...e) {
	e = F(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function L(...e) {
	e = F(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function ae(...e) {
	let t = e.join(" ");
	t in re || (re[t] = !0, I(...e));
}
function oe(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var se = {
	0: 1,
	2: 6,
	4: 7,
	3: 5,
	1: 0,
	6: 2,
	7: 4,
	5: 3
}, ce = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, R = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), le = 1234567, ue = Math.PI / 180, de = 180 / Math.PI;
function fe() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (R[e & 255] + R[e >> 8 & 255] + R[e >> 16 & 255] + R[e >> 24 & 255] + "-" + R[t & 255] + R[t >> 8 & 255] + "-" + R[t >> 16 & 15 | 64] + R[t >> 24 & 255] + "-" + R[n & 63 | 128] + R[n >> 8 & 255] + "-" + R[n >> 16 & 255] + R[n >> 24 & 255] + R[r & 255] + R[r >> 8 & 255] + R[r >> 16 & 255] + R[r >> 24 & 255]).toLowerCase();
}
function z(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function pe(e, t) {
	return (e % t + t) % t;
}
function me(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function he(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function ge(e, t, n) {
	return (1 - n) * e + n * t;
}
function _e(e, t, n, r) {
	return ge(e, t, 1 - Math.exp(-n * r));
}
function ve(e, t = 1) {
	return t - Math.abs(pe(e, t * 2) - t);
}
function ye(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function be(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function xe(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function Se(e, t) {
	return e + Math.random() * (t - e);
}
function Ce(e) {
	return e * (.5 - Math.random());
}
function we(e) {
	e !== void 0 && (le = e);
	let t = le += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Te(e) {
	return e * ue;
}
function Ee(e) {
	return e * de;
}
function De(e) {
	return (e & e - 1) == 0 && e !== 0;
}
function Oe(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function ke(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function Ae(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: I("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function je(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("Invalid component type.");
	}
}
function Me(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("Invalid component type.");
	}
}
var B = {
	DEG2RAD: ue,
	RAD2DEG: de,
	generateUUID: fe,
	clamp: z,
	euclideanModulo: pe,
	mapLinear: me,
	inverseLerp: he,
	lerp: ge,
	damp: _e,
	pingpong: ve,
	smoothstep: ye,
	smootherstep: be,
	randInt: xe,
	randFloat: Se,
	randFloatSpread: Ce,
	seededRandom: we,
	degToRad: Te,
	radToDeg: Ee,
	isPowerOfTwo: De,
	ceilPowerOfTwo: Oe,
	floorPowerOfTwo: ke,
	setQuaternionFromProperEuler: Ae,
	normalize: Me,
	denormalize: je
}, Ne = class e {
	static {
		e.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
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
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("index is out of range: " + e);
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
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = z(this.x, e.x, t.x), this.y = z(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = z(this.x, e, t), this.y = z(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(z(n, e, t));
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
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(z(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
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
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Pe = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
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
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: I("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(z(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
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
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
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
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, V = class e {
	static {
		e.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
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
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("index is out of range: " + e);
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
		return this.applyQuaternion(H.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(H.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
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
		return this.x = z(this.x, e.x, t.x), this.y = z(this.y, e.y, t.y), this.z = z(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = z(this.x, e, t), this.y = z(this.y, e, t), this.z = z(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(z(n, e, t));
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
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return Fe.copy(this).projectOnVector(e), this.sub(Fe);
	}
	reflect(e) {
		return this.sub(Fe.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(z(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
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
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, Fe = /*@__PURE__*/ new V(), H = /*@__PURE__*/ new Pe(), U = class e {
	static {
		e.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return this.premultiply(W.makeScale(e, t)), this;
	}
	rotate(e) {
		return this.premultiply(W.makeRotation(-e)), this;
	}
	translate(e, t) {
		return this.premultiply(W.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, W = /*@__PURE__*/ new U(), G = /*@__PURE__*/ new U().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Ie = /*@__PURE__*/ new U().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Le() {
	let e = {
		enabled: !0,
		workingColorSpace: k,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n ? e : (this.spaces[t].transfer === "srgb" && (e.r = Re(e.r), e.g = Re(e.g), e.b = Re(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = ze(e.r), e.g = ze(e.g), e.b = ze(e.b)), e);
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? A : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return ae("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return ae("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[k]: {
			primaries: t,
			whitePoint: r,
			transfer: A,
			toXYZ: G,
			fromXYZ: Ie,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: O },
			outputColorSpaceConfig: { drawingBufferColorSpace: O }
		},
		[O]: {
			primaries: t,
			whitePoint: r,
			transfer: ee,
			toXYZ: G,
			fromXYZ: Ie,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: O }
		}
	}), e;
}
var K = /*@__PURE__*/ Le();
function Re(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function ze(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var Be, Ve = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			Be === void 0 && (Be = P("canvas")), Be.width = e.width, Be.height = e.height;
			let t = Be.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = Be;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = P("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = Re(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		} else if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(Re(t[e] / 255) * 255) : t[e] = Re(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		} else return I("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, He = 0, Ue = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: He++ }), this.uuid = fe(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(We(r[t].image)) : e.push(We(r[t]));
			} else e = We(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function We(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Ve.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (I("Texture: Unable to serialize Texture."), {});
}
var Ge = 0, Ke = /*@__PURE__*/ new V(), qe = class r extends ce {
	constructor(e = r.DEFAULT_IMAGE, n = r.DEFAULT_MAPPING, s = t, c = t, l = i, u = a, d = m, f = o, p = r.DEFAULT_ANISOTROPY, h = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ge++ }), this.uuid = fe(), this.name = "", this.source = new Ue(e), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = s, this.wrapT = c, this.magFilter = l, this.minFilter = u, this.anisotropy = p, this.format = d, this.internalFormat = null, this.type = f, this.offset = new Ne(0, 0), this.repeat = new Ne(1, 1), this.center = new Ne(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new U(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(Ke).x;
	}
	get height() {
		return this.source.getSize(Ke).y;
	}
	get depth() {
		return this.source.getSize(Ke).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				I(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				I(`Texture.setValues(): property '${t}' does not exist.`);
				continue;
			}
			r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
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
			normalized: this.normalized,
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
	transformUv(r) {
		if (this.mapping !== 300) return r;
		if (r.applyMatrix3(this.matrix), r.x < 0 || r.x > 1) switch (this.wrapS) {
			case e:
				r.x -= Math.floor(r.x);
				break;
			case t:
				r.x = r.x < 0 ? 0 : 1;
				break;
			case n:
				Math.abs(Math.floor(r.x) % 2) === 1 ? r.x = Math.ceil(r.x) - r.x : r.x -= Math.floor(r.x);
				break;
		}
		if (r.y < 0 || r.y > 1) switch (this.wrapT) {
			case e:
				r.y -= Math.floor(r.y);
				break;
			case t:
				r.y = r.y < 0 ? 0 : 1;
				break;
			case n:
				Math.abs(Math.floor(r.y) % 2) === 1 ? r.y = Math.ceil(r.y) - r.y : r.y -= Math.floor(r.y);
				break;
		}
		return this.flipY && (r.y = 1 - r.y), r;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
qe.DEFAULT_IMAGE = null, qe.DEFAULT_MAPPING = 300, qe.DEFAULT_ANISOTROPY = 1;
var Je = class e {
	static {
		e.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
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
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
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
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
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
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = z(this.x, e.x, t.x), this.y = z(this.y, e.y, t.y), this.z = z(this.z, e.z, t.z), this.w = z(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = z(this.x, e, t), this.y = z(this.y, e, t), this.z = z(this.z, e, t), this.w = z(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(z(n, e, t));
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
}, Ye = class extends ce {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: i,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Je(0, 0, e, t), this.scissorTest = !1, this.viewport = new Je(0, 0, e, t), this.textures = [];
		let r = new qe({
			width: e,
			height: t,
			depth: n.depth
		}), a = n.count;
		for (let e = 0; e < a; e++) this.textures[e] = r.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: i,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Ue(n);
		}
		return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Xe = class extends Ye {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, Ze = class extends qe {
	constructor(e = null, n = 1, i = 1, a = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: n,
			height: i,
			depth: a
		}, this.magFilter = r, this.minFilter = r, this.wrapR = t, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, Qe = class extends qe {
	constructor(e = null, n = 1, i = 1, a = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: n,
			height: i,
			depth: a
		}, this.magFilter = r, this.minFilter = r, this.wrapR = t, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, $e = class e {
	static {
		e.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
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
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinant() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / et.setFromMatrixColumn(e, 0).length(), i = 1 / et.setFromMatrixColumn(e, 1).length(), a = 1 / et.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(nt, e, rt);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return ot.subVectors(e, t), ot.lengthSq() === 0 && (ot.z = 1), ot.normalize(), it.crossVectors(n, ot), it.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ot.x += 1e-4 : ot.z += 1e-4, ot.normalize(), it.crossVectors(n, ot)), it.normalize(), at.crossVectors(ot, it), r[0] = it.x, r[4] = at.x, r[8] = ot.x, r[1] = it.y, r[5] = at.y, r[9] = ot.y, r[2] = it.z, r[6] = at.z, r[10] = ot.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], ee = r[10], j = r[14], M = r[3], N = r[7], te = r[11], P = r[15];
		return i[0] = a * x + o * T + s * k + c * M, i[4] = a * S + o * E + s * A + c * N, i[8] = a * C + o * D + s * ee + c * te, i[12] = a * w + o * O + s * j + c * P, i[1] = l * x + u * T + d * k + f * M, i[5] = l * S + u * E + d * A + f * N, i[9] = l * C + u * D + d * ee + f * te, i[13] = l * w + u * O + d * j + f * P, i[2] = p * x + m * T + h * k + g * M, i[6] = p * S + m * E + h * A + g * N, i[10] = p * C + m * D + h * ee + g * te, i[14] = p * w + m * O + h * j + g * P, i[3] = _ * x + v * T + y * k + b * M, i[7] = _ * S + v * E + y * A + b * N, i[11] = _ * C + v * D + y * ee + b * te, i[15] = _ * w + v * O + y * j + b * P, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinant();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = et.set(r[0], r[1], r[2]).length(), o = et.set(r[4], r[5], r[6]).length(), s = et.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), tt.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return tt.elements[0] *= c, tt.elements[1] *= c, tt.elements[2] *= c, tt.elements[4] *= l, tt.elements[5] *= l, tt.elements[6] *= l, tt.elements[8] *= u, tt.elements[9] *= u, tt.elements[10] *= u, t.setFromRotationMatrix(tt), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = M, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = M, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, et = /*@__PURE__*/ new V(), tt = /*@__PURE__*/ new $e(), nt = /*@__PURE__*/ new V(0, 0, 0), rt = /*@__PURE__*/ new V(1, 1, 1), it = /*@__PURE__*/ new V(), at = /*@__PURE__*/ new V(), ot = /*@__PURE__*/ new V(), st = /*@__PURE__*/ new $e(), ct = /*@__PURE__*/ new Pe(), lt = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
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
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(z(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-z(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(z(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-z(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(z(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-z(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: I("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return st.makeRotationFromQuaternion(e), this.setFromRotationMatrix(st, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return ct.setFromEuler(this), this.setFromQuaternion(ct, e);
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
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
lt.DEFAULT_ORDER = "XYZ";
var ut = class {
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
		return (this.mask & (1 << e | 0)) != 0;
	}
}, dt = 0, ft = /*@__PURE__*/ new V(), pt = /*@__PURE__*/ new Pe(), mt = /*@__PURE__*/ new $e(), ht = /*@__PURE__*/ new V(), gt = /*@__PURE__*/ new V(), _t = /*@__PURE__*/ new V(), vt = /*@__PURE__*/ new Pe(), yt = /*@__PURE__*/ new V(1, 0, 0), bt = /*@__PURE__*/ new V(0, 1, 0), xt = /*@__PURE__*/ new V(0, 0, 1), St = { type: "added" }, Ct = { type: "removed" }, wt = {
	type: "childadded",
	child: null
}, Tt = {
	type: "childremoved",
	child: null
}, Et = class e extends ce {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: dt++ }), this.uuid = fe(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new V(), n = new lt(), r = new Pe(), i = new V(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new $e() },
			normalMatrix: { value: new U() }
		}), this.matrix = new $e(), this.matrixWorld = new $e(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ut(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
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
		return pt.setFromAxisAngle(e, t), this.quaternion.multiply(pt), this;
	}
	rotateOnWorldAxis(e, t) {
		return pt.setFromAxisAngle(e, t), this.quaternion.premultiply(pt), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(yt, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(bt, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(xt, e);
	}
	translateOnAxis(e, t) {
		return ft.copy(e).applyQuaternion(this.quaternion), this.position.add(ft.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(yt, e);
	}
	translateY(e) {
		return this.translateOnAxis(bt, e);
	}
	translateZ(e) {
		return this.translateOnAxis(xt, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(mt.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? ht.copy(e) : ht.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), gt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? mt.lookAt(gt, ht, this.up) : mt.lookAt(ht, gt, this.up), this.quaternion.setFromRotationMatrix(mt), r && (mt.extractRotation(r.matrixWorld), pt.setFromRotationMatrix(mt), this.quaternion.premultiply(pt.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (L("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(St), wt.child = e, this.dispatchEvent(wt), wt.child = null) : L("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ct), Tt.child = e, this.dispatchEvent(Tt), Tt.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), mt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), mt.multiply(e.parent.matrixWorld)), e.applyMatrix4(mt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(St), wt.child = e, this.dispatchEvent(wt), wt.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(gt, e, _t), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(gt, vt, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t) {
		let n = this.parent;
		if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
			let e = this.children;
			for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
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
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
			let t = [];
			for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
			r.material = t;
		} else r.material = i(e.materials, this.material);
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
Et.DEFAULT_UP = /*@__PURE__*/ new V(0, 1, 0), Et.DEFAULT_MATRIX_AUTO_UPDATE = !0, Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Dt = class extends Et {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, Ot = { type: "move" }, kt = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new Dt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new Dt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new V(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new V()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new Dt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new V(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new V(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ot)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new Dt();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, At = {
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
}, jt = {
	h: 0,
	s: 0,
	l: 0
}, Mt = {
	h: 0,
	s: 0,
	l: 0
};
function Nt(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Pt = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = O) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, K.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = K.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, K.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = K.workingColorSpace) {
		if (e = pe(e, 1), t = z(t, 0, 1), n = z(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = Nt(i, r, e + 1 / 3), this.g = Nt(i, r, e), this.b = Nt(i, r, e - 1 / 3);
		}
		return K.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = O) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && I("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: I("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			I("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = O) {
		let n = At[e.toLowerCase()];
		return n === void 0 ? I("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = Re(e.r), this.g = Re(e.g), this.b = Re(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = ze(e.r), this.g = ze(e.g), this.b = ze(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = O) {
		return K.workingToColorSpace(Ft.copy(this), e), Math.round(z(Ft.r * 255, 0, 255)) * 65536 + Math.round(z(Ft.g * 255, 0, 255)) * 256 + Math.round(z(Ft.b * 255, 0, 255));
	}
	getHexString(e = O) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = K.workingColorSpace) {
		K.workingToColorSpace(Ft.copy(this), t);
		let n = Ft.r, r = Ft.g, i = Ft.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i:
					s = (n - r) / e + 4;
					break;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = K.workingColorSpace) {
		return K.workingToColorSpace(Ft.copy(this), t), e.r = Ft.r, e.g = Ft.g, e.b = Ft.b, e;
	}
	getStyle(e = O) {
		K.workingToColorSpace(Ft.copy(this), e);
		let t = Ft.r, n = Ft.g, r = Ft.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(jt), this.setHSL(jt.h + e, jt.s + t, jt.l + n);
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
		this.getHSL(jt), e.getHSL(Mt);
		let n = ge(jt.h, Mt.h, t), r = ge(jt.s, Mt.s, t), i = ge(jt.l, Mt.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
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
}, Ft = /*@__PURE__*/ new Pt();
Pt.NAMES = At;
var It = class extends Et {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new lt(), this.environmentIntensity = 1, this.environmentRotation = new lt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, Lt = /*@__PURE__*/ new V(), Rt = /*@__PURE__*/ new V(), zt = /*@__PURE__*/ new V(), Bt = /*@__PURE__*/ new V(), Vt = /*@__PURE__*/ new V(), Ht = /*@__PURE__*/ new V(), Ut = /*@__PURE__*/ new V(), Wt = /*@__PURE__*/ new V(), Gt = /*@__PURE__*/ new V(), Kt = /*@__PURE__*/ new V(), qt = /*@__PURE__*/ new Je(), Jt = /*@__PURE__*/ new Je(), Yt = /*@__PURE__*/ new Je(), Xt = class e {
	constructor(e = new V(), t = new V(), n = new V()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), Lt.subVectors(e, t), r.cross(Lt);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		Lt.subVectors(r, t), Rt.subVectors(n, t), zt.subVectors(e, t);
		let a = Lt.dot(Lt), o = Lt.dot(Rt), s = Lt.dot(zt), c = Rt.dot(Rt), l = Rt.dot(zt), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, Bt) !== null && Bt.x >= 0 && Bt.y >= 0 && Bt.x + Bt.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, Bt) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, Bt.x), s.addScaledVector(a, Bt.y), s.addScaledVector(o, Bt.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return qt.setScalar(0), Jt.setScalar(0), Yt.setScalar(0), qt.fromBufferAttribute(e, t), Jt.fromBufferAttribute(e, n), Yt.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(qt, i.x), a.addScaledVector(Jt, i.y), a.addScaledVector(Yt, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return Lt.subVectors(n, t), Rt.subVectors(e, t), Lt.cross(Rt).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return Lt.subVectors(this.c, this.b), Rt.subVectors(this.a, this.b), Lt.cross(Rt).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		Vt.subVectors(r, n), Ht.subVectors(i, n), Wt.subVectors(e, n);
		let s = Vt.dot(Wt), c = Ht.dot(Wt);
		if (s <= 0 && c <= 0) return t.copy(n);
		Gt.subVectors(e, r);
		let l = Vt.dot(Gt), u = Ht.dot(Gt);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(Vt, a);
		Kt.subVectors(e, i);
		let f = Vt.dot(Kt), p = Ht.dot(Kt);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(Ht, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Ut.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Ut, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(Vt, a).addScaledVector(Ht, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, Zt = class {
	constructor(e = new V(Infinity, Infinity, Infinity), t = new V(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint($t.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint($t.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = $t.copy(t).multiplyScalar(.5);
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
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
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
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, $t) : $t.fromBufferAttribute(r, t), $t.applyMatrix4(e.matrixWorld), this.expandByPoint($t);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), en.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), en.copy(e.boundingBox)), en.applyMatrix4(e.matrixWorld), this.union(en);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, $t), $t.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(cn), ln.subVectors(this.max, cn), tn.subVectors(e.a, cn), nn.subVectors(e.b, cn), rn.subVectors(e.c, cn), an.subVectors(nn, tn), on.subVectors(rn, nn), sn.subVectors(tn, rn);
		let t = [
			0,
			-an.z,
			an.y,
			0,
			-on.z,
			on.y,
			0,
			-sn.z,
			sn.y,
			an.z,
			0,
			-an.x,
			on.z,
			0,
			-on.x,
			sn.z,
			0,
			-sn.x,
			-an.y,
			an.x,
			0,
			-on.y,
			on.x,
			0,
			-sn.y,
			sn.x,
			0
		];
		return !fn(t, tn, nn, rn, ln) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !fn(t, tn, nn, rn, ln)) ? !1 : (un.crossVectors(an, on), t = [
			un.x,
			un.y,
			un.z
		], fn(t, tn, nn, rn, ln));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, $t).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize($t).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() ? this : (Qt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Qt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Qt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Qt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Qt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Qt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Qt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Qt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Qt), this);
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, Qt = [
	/*@__PURE__*/ new V(),
	/*@__PURE__*/ new V(),
	/*@__PURE__*/ new V(),
	/*@__PURE__*/ new V(),
	/*@__PURE__*/ new V(),
	/*@__PURE__*/ new V(),
	/*@__PURE__*/ new V(),
	/*@__PURE__*/ new V()
], $t = /*@__PURE__*/ new V(), en = /*@__PURE__*/ new Zt(), tn = /*@__PURE__*/ new V(), nn = /*@__PURE__*/ new V(), rn = /*@__PURE__*/ new V(), an = /*@__PURE__*/ new V(), on = /*@__PURE__*/ new V(), sn = /*@__PURE__*/ new V(), cn = /*@__PURE__*/ new V(), ln = /*@__PURE__*/ new V(), un = /*@__PURE__*/ new V(), dn = /*@__PURE__*/ new V();
function fn(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		dn.fromArray(e, a);
		let o = i.x * Math.abs(dn.x) + i.y * Math.abs(dn.y) + i.z * Math.abs(dn.z), s = t.dot(dn), c = n.dot(dn), l = r.dot(dn);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var pn = /*@__PURE__*/ new V(), mn = /*@__PURE__*/ new Ne(), hn = 0, gn = class extends ce {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: hn++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = l, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) mn.fromBufferAttribute(this, t), mn.applyMatrix3(e), this.setXY(t, mn.x, mn.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) pn.fromBufferAttribute(this, t), pn.applyMatrix3(e), this.setXYZ(t, pn.x, pn.y, pn.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) pn.fromBufferAttribute(this, t), pn.applyMatrix4(e), this.setXYZ(t, pn.x, pn.y, pn.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) pn.fromBufferAttribute(this, t), pn.applyNormalMatrix(e), this.setXYZ(t, pn.x, pn.y, pn.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) pn.fromBufferAttribute(this, t), pn.transformDirection(e), this.setXYZ(t, pn.x, pn.y, pn.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = je(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = Me(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = je(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = Me(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = je(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = Me(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = je(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = Me(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = je(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = Me(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = Me(t, this.array), n = Me(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = Me(t, this.array), n = Me(n, this.array), r = Me(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = Me(t, this.array), n = Me(n, this.array), r = Me(r, this.array), i = Me(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, _n = class extends gn {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, vn = class extends gn {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, yn = class extends gn {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, bn = /*@__PURE__*/ new Zt(), xn = /*@__PURE__*/ new V(), Sn = /*@__PURE__*/ new V(), Cn = class {
	constructor(e = new V(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? bn.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
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
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		xn.subVectors(e, this.center);
		let t = xn.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(xn, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Sn.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(xn.copy(e.center).add(Sn)), this.expandByPoint(xn.copy(e.center).sub(Sn))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, wn = 0, Tn = /*@__PURE__*/ new $e(), En = /*@__PURE__*/ new Et(), Dn = /*@__PURE__*/ new V(), On = /*@__PURE__*/ new Zt(), kn = /*@__PURE__*/ new Zt(), An = /*@__PURE__*/ new V(), jn = class e extends ce {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: wn++ }), this.uuid = fe(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {};
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return Array.isArray(e) ? this.index = new (N(e) ? vn : _n)(e, 1) : this.index = e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
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
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new U().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	applyQuaternion(e) {
		return Tn.makeRotationFromQuaternion(e), this.applyMatrix4(Tn), this;
	}
	rotateX(e) {
		return Tn.makeRotationX(e), this.applyMatrix4(Tn), this;
	}
	rotateY(e) {
		return Tn.makeRotationY(e), this.applyMatrix4(Tn), this;
	}
	rotateZ(e) {
		return Tn.makeRotationZ(e), this.applyMatrix4(Tn), this;
	}
	translate(e, t, n) {
		return Tn.makeTranslation(e, t, n), this.applyMatrix4(Tn), this;
	}
	scale(e, t, n) {
		return Tn.makeScale(e, t, n), this.applyMatrix4(Tn), this;
	}
	lookAt(e) {
		return En.lookAt(e), En.updateMatrix(), this.applyMatrix4(En.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(Dn).negate(), this.translate(Dn.x, Dn.y, Dn.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new yn(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && I("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Zt());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			L("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new V(-Infinity, -Infinity, -Infinity), new V(Infinity, Infinity, Infinity));
			return;
		}
		if (e !== void 0) {
			if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				On.setFromBufferAttribute(n), this.morphTargetsRelative ? (An.addVectors(this.boundingBox.min, On.min), this.boundingBox.expandByPoint(An), An.addVectors(this.boundingBox.max, On.max), this.boundingBox.expandByPoint(An)) : (this.boundingBox.expandByPoint(On.min), this.boundingBox.expandByPoint(On.max));
			}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && L("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Cn());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			L("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new V(), Infinity);
			return;
		}
		if (e) {
			let n = this.boundingSphere.center;
			if (On.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				kn.setFromBufferAttribute(n), this.morphTargetsRelative ? (An.addVectors(On.min, kn.min), On.expandByPoint(An), An.addVectors(On.max, kn.max), On.expandByPoint(An)) : (On.expandByPoint(kn.min), On.expandByPoint(kn.max));
			}
			On.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) An.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(An));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) An.fromBufferAttribute(a, t), o && (Dn.fromBufferAttribute(e, t), An.add(Dn)), r = Math.max(r, n.distanceToSquared(An));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && L("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			L("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv;
		this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new gn(new Float32Array(4 * n.count), 4));
		let a = this.getAttribute("tangent"), o = [], s = [];
		for (let e = 0; e < n.count; e++) o[e] = new V(), s[e] = new V();
		let c = new V(), l = new V(), u = new V(), d = new Ne(), f = new Ne(), p = new Ne(), m = new V(), h = new V();
		function g(e, t, r) {
			c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), u.fromBufferAttribute(n, r), d.fromBufferAttribute(i, e), f.fromBufferAttribute(i, t), p.fromBufferAttribute(i, r), l.sub(c), u.sub(c), f.sub(d), p.sub(d);
			let a = 1 / (f.x * p.y - p.x * f.y);
			isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a), h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a), o[e].add(m), o[t].add(m), o[r].add(m), s[e].add(h), s[t].add(h), s[r].add(h));
		}
		let _ = this.groups;
		_.length === 0 && (_ = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let v = new V(), y = new V(), b = new V(), x = new V();
		function S(e) {
			b.fromBufferAttribute(r, e), x.copy(b);
			let t = o[e];
			v.copy(t), v.sub(b.multiplyScalar(b.dot(t))).normalize(), y.crossVectors(x, t);
			let n = y.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, v.x, v.y, v.z, n);
		}
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
		}
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0) n = new gn(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new V(), i = new V(), a = new V(), o = new V(), s = new V(), c = new V(), l = new V(), u = new V();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) An.fromBufferAttribute(e, t), An.normalize(), e.setXYZ(t, An.x, An.y, An.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new gn(a, r, i);
		}
		if (this.index === null) return I("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Mn = 0, Nn = class extends ce {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Mn++ }), this.uuid = fe(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = j, this.stencilZFail = j, this.stencilZPass = j, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				I(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				I(`Material: '${t}' is not a property of THREE.${this.type}.`);
				continue;
			}
			r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, Pn = /*@__PURE__*/ new V(), Fn = /*@__PURE__*/ new V(), In = /*@__PURE__*/ new V(), Ln = /*@__PURE__*/ new V(), Rn = /*@__PURE__*/ new V(), zn = /*@__PURE__*/ new V(), Bn = /*@__PURE__*/ new V(), Vn = class {
	constructor(e = new V(), t = new V(0, 0, -1)) {
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
		return this.origin.copy(this.at(e, Pn)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = Pn.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (Pn.copy(this.origin).addScaledVector(this.direction, t), Pn.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		Fn.copy(e).add(t).multiplyScalar(.5), In.copy(t).sub(e).normalize(), Ln.copy(this.origin).sub(Fn);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(In), o = Ln.dot(this.direction), s = -Ln.dot(In), c = Ln.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) if (d >= -p) if (d <= p) {
			let e = 1 / l;
			u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
		} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(Fn).addScaledVector(In, d), f;
	}
	intersectSphere(e, t) {
		Pn.subVectors(e.center, this.origin);
		let n = Pn.dot(this.direction), r = Pn.dot(Pn) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, Pn) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		Rn.subVectors(t, e), zn.subVectors(n, e), Bn.crossVectors(Rn, zn);
		let a = this.direction.dot(Bn), o;
		if (a > 0) {
			if (r) return null;
			o = 1;
		} else if (a < 0) o = -1, a = -a;
		else return null;
		Ln.subVectors(this.origin, e);
		let s = o * this.direction.dot(zn.crossVectors(Ln, zn));
		if (s < 0) return null;
		let c = o * this.direction.dot(Rn.cross(Ln));
		if (c < 0 || s + c > a) return null;
		let l = -o * Ln.dot(Bn);
		return l < 0 ? null : this.at(l / a, i);
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
}, Hn = class extends Nn {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Pt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new lt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, Un = /*@__PURE__*/ new $e(), Wn = /*@__PURE__*/ new Vn(), Gn = /*@__PURE__*/ new Cn(), Kn = /*@__PURE__*/ new V(), qn = /*@__PURE__*/ new V(), Jn = /*@__PURE__*/ new V(), Yn = /*@__PURE__*/ new V(), Xn = /*@__PURE__*/ new V(), Zn = /*@__PURE__*/ new V(), Qn = /*@__PURE__*/ new V(), $n = /*@__PURE__*/ new V(), er = class extends Et {
	constructor(e = new jn(), t = new Hn()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			Zn.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Xn.fromBufferAttribute(s, e), a ? Zn.addScaledVector(Xn, r) : Zn.addScaledVector(Xn.sub(t), r));
			}
			t.add(Zn);
		}
		return t;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Gn.copy(n.boundingSphere), Gn.applyMatrix4(i), Wn.copy(e.ray).recast(e.near), !(Gn.containsPoint(Wn.origin) === !1 && (Wn.intersectSphere(Gn, Kn) === null || Wn.origin.distanceToSquared(Kn) > (e.far - e.near) ** 2)) && (Un.copy(i).invert(), Wn.copy(e.ray).applyMatrix4(Un), !(n.boundingBox !== null && Wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Wn)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
			let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
				r = nr(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
			for (let d = i, f = s; d < f; d += 3) {
				let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
				r = nr(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
			}
		}
		else if (s !== void 0) if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
			let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = i, s = i + 1, d = i + 2;
				r = nr(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
			for (let s = i, d = o; s < d; s += 3) {
				let i = s, o = s + 1, d = s + 2;
				r = nr(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
			}
		}
	}
};
function tr(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	$n.copy(s), $n.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo($n);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: $n.clone(),
		object: e
	};
}
function nr(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, qn), e.getVertexPosition(c, Jn), e.getVertexPosition(l, Yn);
	let u = tr(e, t, n, r, qn, Jn, Yn, Qn);
	if (u) {
		let e = new V();
		Xt.getBarycoord(Qn, qn, Jn, Yn, e), i && (u.uv = Xt.getInterpolatedAttribute(i, s, c, l, e, new Ne())), a && (u.uv1 = Xt.getInterpolatedAttribute(a, s, c, l, e, new Ne())), o && (u.normal = Xt.getInterpolatedAttribute(o, s, c, l, e, new V()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new V(),
			materialIndex: 0
		};
		Xt.getNormal(qn, Jn, Yn, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var rr = class extends qe {
	constructor(e = null, t = 1, n = 1, i, a, o, s, c, l = r, u = r, d, f) {
		super(null, o, s, c, l, u, i, a, d, f), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, ir = /*@__PURE__*/ new V(), ar = /*@__PURE__*/ new V(), or = /*@__PURE__*/ new U(), sr = class {
	constructor(e = new V(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = ir.subVectors(n, t).cross(ar.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
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
	intersectLine(e, t, n = !0) {
		let r = e.delta(ir), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
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
		let n = t || or.getNormalMatrix(e), r = this.coplanarPoint(ir).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
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
}, cr = /*@__PURE__*/ new Cn(), lr = /*@__PURE__*/ new Ne(.5, .5), ur = /*@__PURE__*/ new V(), dr = class {
	constructor(e = new sr(), t = new sr(), n = new sr(), r = new sr(), i = new sr(), a = new sr()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = M, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(cr);
	}
	intersectsSprite(e) {
		return cr.center.set(0, 0, 0), cr.radius = .7071067811865476 + lr.distanceTo(e.center), cr.applyMatrix4(e.matrixWorld), this.intersectsSphere(cr);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (ur.x = r.normal.x > 0 ? e.max.x : e.min.x, ur.y = r.normal.y > 0 ? e.max.y : e.min.y, ur.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(ur) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, fr = class extends qe {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, pr = class extends qe {
	constructor(e, t, n = c, i, a, o, s = r, l = r, u, d = h, f = 1) {
		if (d !== 1026 && d !== 1027) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: f
		}, i, a, o, s, l, d, n, u), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Ue(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
	}
}, mr = class extends pr {
	constructor(e, t = c, n = 301, i, a, o = r, s = r, l, u = h) {
		let d = {
			width: e,
			height: e,
			depth: 1
		}, f = [
			d,
			d,
			d,
			d,
			d,
			d
		];
		super(e, e, t, n, i, a, o, s, l, u), this.image = f, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, hr = class extends qe {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, gr = class e extends jn {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new yn(c, 3)), this.setAttribute("normal", new yn(l, 3)), this.setAttribute("uv", new yn(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new V();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, _r = class e extends jn {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new yn(p, 3)), this.setAttribute("normal", new yn(m, 3)), this.setAttribute("uv", new yn(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, vr = class e extends jn {
	constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new V(), d = new V(), f = [], p = [], m = [], h = [];
		for (let f = 0; f <= n; f++) {
			let g = [], _ = f / n, v = 0;
			f === 0 && a === 0 ? v = .5 / t : f === n && s === Math.PI && (v = -.5 / t);
			for (let n = 0; n <= t; n++) {
				let s = n / t;
				u.x = -e * Math.cos(r + s * i) * Math.sin(a + _ * o), u.y = e * Math.cos(a + _ * o), u.z = e * Math.sin(r + s * i) * Math.sin(a + _ * o), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(s + v, 1 - _), g.push(c++);
			}
			l.push(g);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
			(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
		}
		this.setIndex(f), this.setAttribute("position", new yn(p, 3)), this.setAttribute("normal", new yn(m, 3)), this.setAttribute("uv", new yn(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
};
function yr(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (xr(i)) i.isRenderTargetTexture ? (I("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) if (xr(i[0])) {
				let e = [];
				for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
				t[n][r] = e;
			} else t[n][r] = i.slice();
			else t[n][r] = i;
		}
	}
	return t;
}
function br(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = yr(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function xr(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Sr(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function Cr(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : K.workingColorSpace;
}
var wr = {
	clone: yr,
	merge: br
}, Tr = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", Er = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Dr = class extends Nn {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Tr, this.fragmentShader = Er, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = yr(e.uniforms), this.uniformsGroups = Sr(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
}, Or = class extends Dr {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, kr = class extends Nn {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, Ar = class extends Nn {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function jr(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
var Mr = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("call to abstract method");
	}
	intervalChanged_() {}
}, Nr = class extends Mr {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: T,
			endingEnd: T
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case E:
				i = e, o = 2 * t - n;
				break;
			case D:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case E:
				a = e, s = 2 * n - t;
				break;
			case D:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, Pr = class extends Mr {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, Fr = class extends Mr {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, Ir = class extends Mr {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.settings || this.DefaultSettings_, u = l.inTangents, d = l.outTangents;
		if (!u || !d) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let f = o * 2, p = e - 1;
		for (let l = 0; l !== o; ++l) {
			let o = a[c + l], m = a[s + l], h = p * f + l * 2, g = d[h], _ = d[h + 1], v = e * f + l * 2, y = u[v], b = u[v + 1], x = (n - t) / (r - t), S, C, w, T, E;
			for (let e = 0; e < 8; e++) {
				S = x * x, C = S * x, w = 1 - x, T = w * w, E = T * w;
				let e = E * t + 3 * T * x * g + 3 * w * S * y + C * r - n;
				if (Math.abs(e) < 1e-10) break;
				let i = 3 * T * (g - t) + 6 * w * x * (y - g) + 3 * S * (r - y);
				if (Math.abs(i) < 1e-10) break;
				x -= e / i, x = Math.max(0, Math.min(1, x));
			}
			i[l] = E * o + 3 * T * x * _ + 3 * w * S * b + C * m;
		}
		return i;
	}
}, Lr = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = jr(t, this.TimeBufferType), this.values = jr(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: jr(e.times, Array),
				values: jr(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new Fr(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Pr(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Nr(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new Ir(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.settings = this.settings), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case x:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case S:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case C:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case w:
				t = this.InterpolantFactoryMethodBezier;
				break;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
			else throw Error(t);
			return I("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return x;
			case this.InterpolantFactoryMethodLinear: return S;
			case this.InterpolantFactoryMethodSmooth: return C;
			case this.InterpolantFactoryMethodBezier: return w;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (L("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (L("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				L("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				L("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && te(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				L("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === C, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) if (r) i = !0;
			else {
				let e = o * n, r = e - n, a = e + n;
				for (let o = 0; o !== n; ++o) {
					let n = t[e + o];
					if (n !== t[r + o] || n !== t[a + o]) {
						i = !0;
						break;
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, r;
	}
};
Lr.prototype.ValueTypeName = "", Lr.prototype.TimeBufferType = Float32Array, Lr.prototype.ValueBufferType = Float32Array, Lr.prototype.DefaultInterpolation = S;
var Rr = class extends Lr {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Rr.prototype.ValueTypeName = "bool", Rr.prototype.ValueBufferType = Array, Rr.prototype.DefaultInterpolation = x, Rr.prototype.InterpolantFactoryMethodLinear = void 0, Rr.prototype.InterpolantFactoryMethodSmooth = void 0;
var zr = class extends Lr {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
zr.prototype.ValueTypeName = "color";
var Br = class extends Lr {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Br.prototype.ValueTypeName = "number";
var Vr = class extends Mr {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Pe.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, Hr = class extends Lr {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Vr(this.times, this.values, this.getValueSize(), e);
	}
};
Hr.prototype.ValueTypeName = "quaternion", Hr.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ur = class extends Lr {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Ur.prototype.ValueTypeName = "string", Ur.prototype.ValueBufferType = Array, Ur.prototype.DefaultInterpolation = x, Ur.prototype.InterpolantFactoryMethodLinear = void 0, Ur.prototype.InterpolantFactoryMethodSmooth = void 0;
var Wr = class extends Lr {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Wr.prototype.ValueTypeName = "vector";
var Gr = {
	enabled: !1,
	files: {},
	add: function(e, t) {
		this.enabled !== !1 && (Kr(e) || (this.files[e] = t));
	},
	get: function(e) {
		if (this.enabled !== !1 && !Kr(e)) return this.files[e];
	},
	remove: function(e) {
		delete this.files[e];
	},
	clear: function() {
		this.files = {};
	}
};
function Kr(e) {
	try {
		let t = e.slice(e.indexOf(":") + 1);
		return new URL(t).protocol === "blob:";
	} catch {
		return !1;
	}
}
var qr = /*@__PURE__*/ new class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, o = 0, s, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
			o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return s ? s(e) : e;
		}, this.setURLModifier = function(e) {
			return s = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		}, this.abort = function() {
			return this.abortController.abort(), this._abortController = null, this;
		};
	}
	get abortController() {
		return this._abortController ||= new AbortController(), this._abortController;
	}
}(), Jr = class {
	constructor(e) {
		this.manager = e === void 0 ? qr : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
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
	abort() {
		return this;
	}
};
Jr.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Yr = {}, Xr = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
}, Zr = class extends Jr {
	constructor(e) {
		super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = Gr.get(`file:${e}`);
		if (i !== void 0) {
			this.manager.itemStart(e), setTimeout(() => {
				t && t(i), this.manager.itemEnd(e);
			}, 0);
			return;
		}
		if (Yr[e] !== void 0) {
			Yr[e].push({
				onLoad: t,
				onProgress: n,
				onError: r
			});
			return;
		}
		Yr[e] = [], Yr[e].push({
			onLoad: t,
			onProgress: n,
			onError: r
		});
		let a = new Request(e, {
			headers: new Headers(this.requestHeader),
			credentials: this.withCredentials ? "include" : "same-origin",
			signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
		}), o = this.mimeType, s = this.responseType;
		fetch(a).then((t) => {
			if (t.status === 200 || t.status === 0) {
				if (t.status === 0 && I("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || t.body === void 0 || t.body.getReader === void 0) return t;
				let n = Yr[e], r = t.body.getReader(), i = t.headers.get("X-File-Size") || t.headers.get("Content-Length"), a = i ? parseInt(i) : 0, o = a !== 0, s = 0, c = new ReadableStream({ start(e) {
					t();
					function t() {
						r.read().then(({ done: r, value: i }) => {
							if (r) e.close();
							else {
								s += i.byteLength;
								let r = new ProgressEvent("progress", {
									lengthComputable: o,
									loaded: s,
									total: a
								});
								for (let e = 0, t = n.length; e < t; e++) {
									let t = n[e];
									t.onProgress && t.onProgress(r);
								}
								e.enqueue(i), t();
							}
						}, (t) => {
							e.error(t);
						});
					}
				} });
				return new Response(c);
			} else throw new Xr(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t);
		}).then((e) => {
			switch (s) {
				case "arraybuffer": return e.arrayBuffer();
				case "blob": return e.blob();
				case "document": return e.text().then((e) => new DOMParser().parseFromString(e, o));
				case "json": return e.json();
				default:
					if (o === "") return e.text();
					{
						let t = /charset="?([^;"\s]*)"?/i.exec(o), n = t && t[1] ? t[1].toLowerCase() : void 0, r = new TextDecoder(n);
						return e.arrayBuffer().then((e) => r.decode(e));
					}
			}
		}).then((t) => {
			Gr.add(`file:${e}`, t);
			let n = Yr[e];
			delete Yr[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onLoad && r.onLoad(t);
			}
		}).catch((t) => {
			let n = Yr[e];
			if (n === void 0) throw this.manager.itemError(e), t;
			delete Yr[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onError && r.onError(t);
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
	abort() {
		return this._abortController.abort(), this._abortController = new AbortController(), this;
	}
}, Qr = /* @__PURE__ */ new WeakMap(), $r = class extends Jr {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = this, a = Gr.get(`image:${e}`);
		if (a !== void 0) {
			if (a.complete === !0) i.manager.itemStart(e), setTimeout(function() {
				t && t(a), i.manager.itemEnd(e);
			}, 0);
			else {
				let e = Qr.get(a);
				e === void 0 && (e = [], Qr.set(a, e)), e.push({
					onLoad: t,
					onError: r
				});
			}
			return a;
		}
		let o = P("img");
		function s() {
			l(), t && t(this);
			let n = Qr.get(this) || [];
			for (let e = 0; e < n.length; e++) {
				let t = n[e];
				t.onLoad && t.onLoad(this);
			}
			Qr.delete(this), i.manager.itemEnd(e);
		}
		function c(t) {
			l(), r && r(t), Gr.remove(`image:${e}`);
			let n = Qr.get(this) || [];
			for (let e = 0; e < n.length; e++) {
				let r = n[e];
				r.onError && r.onError(t);
			}
			Qr.delete(this), i.manager.itemError(e), i.manager.itemEnd(e);
		}
		function l() {
			o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1);
		}
		return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), Gr.add(`image:${e}`, o), i.manager.itemStart(e), o.src = e, o;
	}
}, ei = /*@__PURE__*/ new V(), ti = /*@__PURE__*/ new Pe(), ni = /*@__PURE__*/ new V(), ri = class extends Et {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new $e(), this.projectionMatrix = new $e(), this.projectionMatrixInverse = new $e(), this.coordinateSystem = M, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(ei, ti, ni), ni.x === 1 && ni.y === 1 && ni.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ei, ti, ni.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t) {
		super.updateWorldMatrix(e, t), this.matrixWorld.decompose(ei, ti, ni), ni.x === 1 && ni.y === 1 && ni.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ei, ti, ni.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, ii = /*@__PURE__*/ new V(), ai = /*@__PURE__*/ new Ne(), oi = /*@__PURE__*/ new Ne(), si = class extends ri {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = de * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(ue * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return de * 2 * Math.atan(Math.tan(ue * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		ii.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(ii.x, ii.y).multiplyScalar(-e / ii.z), ii.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(ii.x, ii.y).multiplyScalar(-e / ii.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, ai, oi), t.subVectors(oi, ai);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(ue * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, ci = class extends ri {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, li = -90, ui = 1, di = class extends Et {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new si(li, ui, e, t);
		r.layers = this.layers, this.add(r);
		let i = new si(li, ui, e, t);
		i.layers = this.layers, this.add(i);
		let a = new si(li, ui, e, t);
		a.layers = this.layers, this.add(a);
		let o = new si(li, ui, e, t);
		o.layers = this.layers, this.add(o);
		let s = new si(li, ui, e, t);
		s.layers = this.layers, this.add(s);
		let c = new si(li, ui, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1;
		let h = !1;
		h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, fi = class extends si {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
	}
}, pi = "\\[\\]\\.:\\/", mi = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), hi = "[^\\[\\]\\.:\\/]", gi = "[^" + pi.replace("\\.", "") + "]", _i = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", hi), vi = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", gi), yi = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", hi), bi = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", hi), xi = RegExp("^" + _i + vi + yi + bi + "$"), Si = [
	"material",
	"materials",
	"bones",
	"map"
], Ci = class {
	constructor(e, t, n) {
		let r = n || wi.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, wi = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(mi, "");
	}
	static parseTrackName(e) {
		let t = xi.exec(e);
		if (t === null) throw Error("PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			Si.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
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
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			I("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						L("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						L("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						L("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						L("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						L("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						L("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					L("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			L("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					L("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					L("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
wi.Composite = Ci, wi.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, wi.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, wi.prototype.GetterByBindingType = [
	wi.prototype._getValue_direct,
	wi.prototype._getValue_array,
	wi.prototype._getValue_arrayElement,
	wi.prototype._getValue_toArray
], wi.prototype.SetterByBindingTypeAndVersioning = [
	[
		wi.prototype._setValue_direct,
		wi.prototype._setValue_direct_setNeedsUpdate,
		wi.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		wi.prototype._setValue_array,
		wi.prototype._setValue_array_setNeedsUpdate,
		wi.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		wi.prototype._setValue_arrayElement,
		wi.prototype._setValue_arrayElement_setNeedsUpdate,
		wi.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		wi.prototype._setValue_fromArray,
		wi.prototype._setValue_fromArray_setNeedsUpdate,
		wi.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var Ti = /*@__PURE__*/ new $e(), Ei = class {
	constructor(e, t, n = 0, r = Infinity) {
		this.ray = new Vn(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new ut(), this.params = {
			Mesh: {},
			Line: { threshold: 1 },
			LOD: {},
			Points: { threshold: 1 },
			Sprite: {}
		};
	}
	set(e, t) {
		this.ray.set(e, t);
	}
	setFromCamera(e, t) {
		t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : L("Raycaster: Unsupported camera type: " + t.type);
	}
	setFromXRController(e) {
		return Ti.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Ti), this;
	}
	intersectObject(e, t = !0, n = []) {
		return Oi(e, this, n, t), n.sort(Di), n;
	}
	intersectObjects(e, t = !0, n = []) {
		for (let r = 0, i = e.length; r < i; r++) Oi(e[r], this, n, t);
		return n.sort(Di), n;
	}
};
function Di(e, t) {
	return e.distance - t.distance;
}
function Oi(e, t, n, r) {
	let i = !0;
	if (e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0) {
		let r = e.children;
		for (let e = 0, i = r.length; e < i; e++) Oi(r[e], t, n, !0);
	}
}
(class e {
	static {
		e.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
});
function ki(e, t, n, r) {
	let i = Ai(r);
	switch (n) {
		case 1021: return e * t;
		case 1028: return e * t / i.components * i.byteLength;
		case _: return e * t / i.components * i.byteLength;
		case v: return e * t * 2 / i.components * i.byteLength;
		case y: return e * t * 2 / i.components * i.byteLength;
		case 1022: return e * t * 3 / i.components * i.byteLength;
		case m: return e * t * 4 / i.components * i.byteLength;
		case b: return e * t * 4 / i.components * i.byteLength;
		case 33776:
		case 33777: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case 33778:
		case 33779: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case 35841:
		case 35843: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case 35840:
		case 35842: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case 36196:
		case 37492:
		case 37488:
		case 37489: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case 37496:
		case 37490:
		case 37491: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case 37808: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case 37809: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case 37810: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case 37811: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case 37812: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case 37813: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case 37814: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case 37815: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case 37816: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case 37817: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case 37818: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case 37819: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case 37820: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case 37821: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case 36492:
		case 36494:
		case 36495: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case 36283:
		case 36284: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case 36285:
		case 36286: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function Ai(e) {
	switch (e) {
		case o:
		case 1010: return {
			byteLength: 1,
			components: 1
		};
		case s:
		case 1011:
		case u: return {
			byteLength: 2,
			components: 1
		};
		case d:
		case f: return {
			byteLength: 2,
			components: 4
		};
		case c:
		case 1013:
		case l: return {
			byteLength: 4,
			components: 1
		};
		case 35902:
		case 35899: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "184" } })), typeof window < "u" && (window.__THREE__ ? I("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "184");
//#endregion
//#region node_modules/@photo-sphere-viewer/core/node_modules/three/build/three.module.js
function ji() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function Mi(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var q = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, J = {
	common: {
		diffuse: { value: /*@__PURE__*/ new Pt(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new U() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new U() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new U() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new U() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new U() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new U() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new U() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new U() },
		normalScale: { value: /*@__PURE__*/ new Ne(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new U() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new U() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new U() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new U() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new Pt(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: null },
		probesMin: { value: /*@__PURE__*/ new V() },
		probesMax: { value: /*@__PURE__*/ new V() },
		probesResolution: { value: /*@__PURE__*/ new V() }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new Pt(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new U() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new U() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new Pt(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new Ne(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new U() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new U() },
		alphaTest: { value: 0 }
	}
}, Ni = {
	basic: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.specularmap,
			J.envmap,
			J.aomap,
			J.lightmap,
			J.fog
		]),
		vertexShader: q.meshbasic_vert,
		fragmentShader: q.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.specularmap,
			J.envmap,
			J.aomap,
			J.lightmap,
			J.emissivemap,
			J.bumpmap,
			J.normalmap,
			J.displacementmap,
			J.fog,
			J.lights,
			{
				emissive: { value: /*@__PURE__*/ new Pt(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: q.meshlambert_vert,
		fragmentShader: q.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.specularmap,
			J.envmap,
			J.aomap,
			J.lightmap,
			J.emissivemap,
			J.bumpmap,
			J.normalmap,
			J.displacementmap,
			J.fog,
			J.lights,
			{
				emissive: { value: /*@__PURE__*/ new Pt(0) },
				specular: { value: /*@__PURE__*/ new Pt(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: q.meshphong_vert,
		fragmentShader: q.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.envmap,
			J.aomap,
			J.lightmap,
			J.emissivemap,
			J.bumpmap,
			J.normalmap,
			J.displacementmap,
			J.roughnessmap,
			J.metalnessmap,
			J.fog,
			J.lights,
			{
				emissive: { value: /*@__PURE__*/ new Pt(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: q.meshphysical_vert,
		fragmentShader: q.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.aomap,
			J.lightmap,
			J.emissivemap,
			J.bumpmap,
			J.normalmap,
			J.displacementmap,
			J.gradientmap,
			J.fog,
			J.lights,
			{ emissive: { value: /*@__PURE__*/ new Pt(0) } }
		]),
		vertexShader: q.meshtoon_vert,
		fragmentShader: q.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.bumpmap,
			J.normalmap,
			J.displacementmap,
			J.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: q.meshmatcap_vert,
		fragmentShader: q.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ br([J.points, J.fog]),
		vertexShader: q.points_vert,
		fragmentShader: q.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: q.linedashed_vert,
		fragmentShader: q.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ br([J.common, J.displacementmap]),
		vertexShader: q.depth_vert,
		fragmentShader: q.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.bumpmap,
			J.normalmap,
			J.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: q.meshnormal_vert,
		fragmentShader: q.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ br([J.sprite, J.fog]),
		vertexShader: q.sprite_vert,
		fragmentShader: q.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new U() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: q.background_vert,
		fragmentShader: q.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new U() }
		},
		vertexShader: q.backgroundCube_vert,
		fragmentShader: q.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: q.cube_vert,
		fragmentShader: q.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: q.equirect_vert,
		fragmentShader: q.equirect_frag
	},
	distance: {
		uniforms: /*@__PURE__*/ br([
			J.common,
			J.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new V() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: q.distance_vert,
		fragmentShader: q.distance_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ br([
			J.lights,
			J.fog,
			{
				color: { value: /*@__PURE__*/ new Pt(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: q.shadow_vert,
		fragmentShader: q.shadow_frag
	}
};
Ni.physical = {
	uniforms: /*@__PURE__*/ br([Ni.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new U() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new U() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new Ne(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new U() },
		dispersion: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new U() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new U() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new Pt(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new U() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new U() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new U() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new Ne() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new U() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new Pt(0) },
		specularColor: { value: /*@__PURE__*/ new Pt(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new U() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new U() },
		anisotropyVector: { value: /*@__PURE__*/ new Ne() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new U() }
	}]),
	vertexShader: q.meshphysical_vert,
	fragmentShader: q.meshphysical_frag
};
var Pi = {
	r: 0,
	b: 0,
	g: 0
}, Fi = /*@__PURE__*/ new $e(), Ii = /*@__PURE__*/ new U();
Ii.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Li(e, t, n, r, i, a) {
	let o = new Pt(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && (i.isCubeTexture || i.mapping === 306) ? (l === void 0 && (l = new er(new gr(1, 1, 1), new Dr({
			name: "BackgroundCubeMaterial",
			uniforms: yr(Ni.backgroundCube.uniforms),
			vertexShader: Ni.backgroundCube.vertexShader,
			fragmentShader: Ni.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fi.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isCubeTexture && i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(Ii), l.material.toneMapped = K.getTransfer(i.colorSpace) !== ee, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new er(new _r(2, 2), new Dr({
			name: "BackgroundMaterial",
			uniforms: yr(Ni.background.uniforms),
			vertexShader: Ni.background.vertexShader,
			fragmentShader: Ni.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = K.getTransfer(i.colorSpace) !== ee, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(Pi, Cr(e)), n.buffers.color.setClear(Pi.r, Pi.g, Pi.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function Ri(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.stride, p = s.offset;
						if (t.isInstancedInterleavedBuffer) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function zi(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function Bi(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return !(t !== 1023 && r.convert(t) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i);
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (I("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.logarithmicDepthBuffer === !0, f = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
	n.reversedDepthBuffer === !0 && f === !1 && I("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
	let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = e.getParameter(e.MAX_SAMPLES), S = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: d,
		reversedDepthBuffer: f,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		maxSamples: x,
		samples: S
	};
}
function Vi(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new sr(), s = new U(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
var Hi = 4, Ui = [
	.125,
	.215,
	.35,
	.446,
	.526,
	.582
], Wi = 20, Gi = 256, Ki = /*@__PURE__*/ new ci(), qi = /*@__PURE__*/ new Pt(), Ji = null, Yi = 0, Xi = 0, Zi = !1, Qi = /*@__PURE__*/ new V(), $i = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = Qi } = i;
		Ji = this._renderer.getRenderTarget(), Yi = this._renderer.getActiveCubeFace(), Xi = this._renderer.getActiveMipmapLevel(), Zi = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
		let s = this._allocateTargets();
		return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s, o), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = oa(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = aa(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(Ji, Yi, Xi), this._renderer.xr.enabled = Zi, e.scissorTest = !1, na(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ji = this._renderer.getRenderTarget(), Yi = this._renderer.getActiveCubeFace(), Xi = this._renderer.getActiveMipmapLevel(), Zi = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: i,
			minFilter: i,
			generateMipmaps: !1,
			type: u,
			format: m,
			colorSpace: k,
			depthBuffer: !1
		}, r = ta(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ta(e, t, n);
			let { _lodMax: r } = this;
			({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = ea(r)), this._blurMaterial = ia(r, e, t), this._ggxMaterial = ra(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new er(new jn(), e);
		this._renderer.compile(t, Ki);
	}
	_sceneToCubeUV(e, t, n, r, i) {
		let a = new si(90, 1, t, n), o = [
			1,
			-1,
			1,
			1,
			1,
			1
		], s = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], c = this._renderer, l = c.autoClear, u = c.toneMapping;
		c.getClearColor(qi), c.toneMapping = 0, c.autoClear = !1, c.state.buffers.depth.getReversed() && (c.setRenderTarget(r), c.clearDepth(), c.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new er(new gr(), new Hn({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		})));
		let d = this._backgroundBox, f = d.material, p = !1, m = e.background;
		m ? m.isColor && (f.color.copy(m), e.background = null, p = !0) : (f.color.copy(qi), p = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x + s[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, o[t]), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y + s[t], i.z)) : (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y, i.z + s[t]));
			let l = this._cubeSize;
			na(r, n * l, t > 2 ? l : 0, l, l), c.setRenderTarget(r), p && c.render(d, a), c.render(e, a);
		}
		c.toneMapping = u, c.autoClear = l, e.background = m;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = oa()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = aa());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
		a.material = i;
		let o = i.uniforms;
		o.envMap.value = e;
		let s = this._cubeSize;
		na(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, Ki);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		let r = this._lodMeshes.length;
		for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
		t.autoClear = n;
	}
	_applyGGXFilter(e, t, n) {
		let r = this._renderer, i = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
		o.material = a;
		let s = a.uniforms, c = n / (this._lodMeshes.length - 1), l = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - l * l) * (0 + c * 1.25), { _lodMax: d } = this, f = this._sizeLods[n], p = 3 * f * (n > d - Hi ? n - d + Hi : 0), m = 4 * (this._cubeSize - f);
		s.envMap.value = e.texture, s.roughness.value = u, s.mipInt.value = d - t, na(i, p, m, 3 * f, 2 * f), r.setRenderTarget(i), r.render(o, Ki), s.envMap.value = i.texture, s.roughness.value = 0, s.mipInt.value = d - n, na(e, p, m, 3 * f, 2 * f), r.setRenderTarget(e), r.render(o, Ki);
	}
	_blur(e, t, n, r, i) {
		let a = this._pingPongRenderTarget;
		this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i);
	}
	_halfBlur(e, t, n, r, i, a, o) {
		let s = this._renderer, c = this._blurMaterial;
		a !== "latitudinal" && a !== "longitudinal" && L("blur direction must be either latitudinal or longitudinal!");
		let l = this._lodMeshes[r];
		l.material = c;
		let u = c.uniforms, d = this._sizeLods[n] - 1, f = isFinite(i) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Wi - 1), p = i / f, m = isFinite(i) ? 1 + Math.floor(3 * p) : Wi;
		m > Wi && I(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);
		let h = [], g = 0;
		for (let e = 0; e < Wi; ++e) {
			let t = e / p, n = Math.exp(-t * t / 2);
			h.push(n), e === 0 ? g += n : e < m && (g += 2 * n);
		}
		for (let e = 0; e < h.length; e++) h[e] = h[e] / g;
		u.envMap.value = e.texture, u.samples.value = m, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
		let { _lodMax: _ } = this;
		u.dTheta.value = f, u.mipInt.value = _ - n;
		let v = this._sizeLods[r];
		na(t, 3 * v * (r > _ - Hi ? r - _ + Hi : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), s.setRenderTarget(t), s.render(l, Ki);
	}
};
function ea(e) {
	let t = [], n = [], r = [], i = e, a = e - Hi + 1 + Ui.length;
	for (let o = 0; o < a; o++) {
		let a = 2 ** i;
		t.push(a);
		let s = 1 / a;
		o > e - Hi ? s = Ui[o - e + Hi - 1] : o === 0 && (s = 0), n.push(s);
		let c = 1 / (a - 2), l = -c, u = 1 + c, d = [
			l,
			l,
			u,
			l,
			u,
			u,
			l,
			l,
			u,
			u,
			l,
			u
		], f = /* @__PURE__ */ new Float32Array(108), p = /* @__PURE__ */ new Float32Array(72), m = /* @__PURE__ */ new Float32Array(36);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			f.set(r, 18 * e), p.set(d, 12 * e);
			let i = [
				e,
				e,
				e,
				e,
				e,
				e
			];
			m.set(i, 6 * e);
		}
		let h = new jn();
		h.setAttribute("position", new gn(f, 3)), h.setAttribute("uv", new gn(p, 2)), h.setAttribute("faceIndex", new gn(m, 1)), r.push(new er(h, null)), i > Hi && i--;
	}
	return {
		lodMeshes: r,
		sizeLods: t,
		sigmas: n
	};
}
function ta(e, t, n) {
	let r = new Xe(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function na(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function ra(e, t, n) {
	return new Dr({
		name: "PMREMGGXConvolution",
		defines: {
			GGX_SAMPLES: Gi,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			roughness: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: sa(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// \"Sampling the GGX Distribution of Visible Normals\"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function ia(e, t, n) {
	let r = new Float32Array(Wi), i = new V(0, 1, 0);
	return new Dr({
		name: "SphericalGaussianBlur",
		defines: {
			n: Wi,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			samples: { value: 1 },
			weights: { value: r },
			latitudinal: { value: !1 },
			dTheta: { value: 0 },
			mipInt: { value: 0 },
			poleAxis: { value: i }
		},
		vertexShader: sa(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function aa() {
	return new Dr({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: sa(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function oa() {
	return new Dr({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: sa(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function sa() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
var ca = class extends Xe {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new fr(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new gr(5, 5, 5), a = new Dr({
			name: "CubemapFromEquirect",
			uniforms: yr(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		a.uniforms.tEquirect.value = t;
		let o = new er(r, a), s = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = i), new di(1, 10, this).update(e, o), t.minFilter = s, o.geometry.dispose(), o.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
};
function la(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) if (t.has(n)) {
				let e = t.get(n).texture;
				return s(e, n.mapping);
			} else {
				let r = n.image;
				if (r && r.height > 0) {
					let i = new ca(r.height);
					return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
				} else return null;
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new $i(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new $i(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function ua(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && ae("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function da(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e, t) {
		return i[t.id] === !0 ? t : (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++, t);
	}
	function c(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function l(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let s = new (i.count >= 65535 ? vn : _n)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	function u(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && l(e);
		} else l(e);
		return a.get(e);
	}
	return {
		get: s,
		update: c,
		getWireframeAttribute: u
	};
}
function fa(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function pa(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default:
				L("WebGLInfo: Unknown draw mode:", r);
				break;
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function ma(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new Je();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u === void 0 ? 0 : u.length, f = r.get(o);
		if (f === void 0 || f.count !== d) {
			f !== void 0 && f.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], u = o.morphAttributes.color || [], p = 0;
			e === !0 && (p = 1), n === !0 && (p = 2), a === !0 && (p = 3);
			let m = o.attributes.position.count * p, h = 1;
			m > t.maxTextureSize && (h = Math.ceil(m / t.maxTextureSize), m = t.maxTextureSize);
			let g = new Float32Array(m * h * 4 * d), _ = new Ze(g, m, h, d);
			_.type = l, _.needsUpdate = !0;
			let v = p * 4;
			for (let t = 0; t < d; t++) {
				let r = s[t], o = c[t], l = u[t], d = m * h * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * v;
					e === !0 && (i.fromBufferAttribute(r, t), g[d + s + 0] = i.x, g[d + s + 1] = i.y, g[d + s + 2] = i.z, g[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), g[d + s + 4] = i.x, g[d + s + 5] = i.y, g[d + s + 6] = i.z, g[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(l, t), g[d + s + 8] = i.x, g[d + s + 9] = i.y, g[d + s + 10] = i.z, g[d + s + 11] = l.itemSize === 4 ? i.w : 1);
				}
			}
			f = {
				count: d,
				texture: _,
				size: new Ne(m, h)
			}, r.set(o, f);
			function y() {
				_.dispose(), r.delete(o), o.removeEventListener("dispose", y);
			}
			o.addEventListener("dispose", y);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", f.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", f.size);
	}
	return { update: a };
}
function ha(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
var ga = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function _a(e, t, n, r, i) {
	let a = new Xe(t, n, {
		type: e,
		depthBuffer: r,
		stencilBuffer: i,
		depthTexture: r ? new pr(t, n) : void 0
	}), o = new Xe(t, n, {
		type: u,
		depthBuffer: !1,
		stencilBuffer: !1
	}), s = new jn();
	s.setAttribute("position", new yn([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), s.setAttribute("uv", new yn([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let c = new Or({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), l = new er(s, c), d = new ci(-1, 1, 1, -1, 0, 1), f = null, p = null, m = !1, h, g = null, _ = [], v = !1;
	this.setSize = function(e, t) {
		a.setSize(e, t), o.setSize(e, t);
		for (let n = 0; n < _.length; n++) {
			let r = _[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		_ = e, v = _.length > 0 && _[0].isRenderPass === !0;
		let t = a.width, n = a.height;
		for (let e = 0; e < _.length; e++) {
			let r = _[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (m || e.toneMapping === 0 && _.length === 0) return !1;
		if (g = t, t !== null) {
			let e = t.width, n = t.height;
			(a.width !== e || a.height !== n) && this.setSize(e, n);
		}
		return v === !1 && e.setRenderTarget(a), h = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return v;
	}, this.end = function(e, t) {
		e.toneMapping = h, m = !0;
		let n = a, r = o;
		for (let i = 0; i < _.length; i++) {
			let a = _[i];
			if (a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1)) {
				let e = n;
				n = r, r = e;
			}
		}
		if (f !== e.outputColorSpace || p !== e.toneMapping) {
			f = e.outputColorSpace, p = e.toneMapping, c.defines = {}, K.getTransfer(f) === "srgb" && (c.defines.SRGB_TRANSFER = "");
			let t = ga[p];
			t && (c.defines[t] = ""), c.needsUpdate = !0;
		}
		c.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(g), e.render(l, d), g = null, m = !1;
	}, this.isCompositing = function() {
		return m;
	}, this.dispose = function() {
		a.depthTexture && a.depthTexture.dispose(), a.dispose(), o.dispose(), s.dispose(), c.dispose();
	};
}
var va = /*@__PURE__*/ new qe(), ya = /*@__PURE__*/ new pr(1, 1), ba = /*@__PURE__*/ new Ze(), xa = /*@__PURE__*/ new Qe(), Sa = /*@__PURE__*/ new fr(), Ca = [], wa = [], Ta = /* @__PURE__ */ new Float32Array(16), Ea = /* @__PURE__ */ new Float32Array(9), Da = /* @__PURE__ */ new Float32Array(4);
function Oa(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = Ca[i];
	if (a === void 0 && (a = new Float32Array(i), Ca[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function ka(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Aa(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function ja(e, t) {
	let n = wa[t];
	n === void 0 && (n = new Int32Array(t), wa[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Ma(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Na(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (ka(n, t)) return;
		e.uniform2fv(this.addr, t), Aa(n, t);
	}
}
function Pa(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (ka(n, t)) return;
		e.uniform3fv(this.addr, t), Aa(n, t);
	}
}
function Fa(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (ka(n, t)) return;
		e.uniform4fv(this.addr, t), Aa(n, t);
	}
}
function Ia(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (ka(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Aa(n, t);
	} else {
		if (ka(n, r)) return;
		Da.set(r), e.uniformMatrix2fv(this.addr, !1, Da), Aa(n, r);
	}
}
function La(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (ka(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Aa(n, t);
	} else {
		if (ka(n, r)) return;
		Ea.set(r), e.uniformMatrix3fv(this.addr, !1, Ea), Aa(n, r);
	}
}
function Ra(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (ka(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Aa(n, t);
	} else {
		if (ka(n, r)) return;
		Ta.set(r), e.uniformMatrix4fv(this.addr, !1, Ta), Aa(n, r);
	}
}
function za(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Ba(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (ka(n, t)) return;
		e.uniform2iv(this.addr, t), Aa(n, t);
	}
}
function Va(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (ka(n, t)) return;
		e.uniform3iv(this.addr, t), Aa(n, t);
	}
}
function Ha(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (ka(n, t)) return;
		e.uniform4iv(this.addr, t), Aa(n, t);
	}
}
function Ua(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function Wa(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (ka(n, t)) return;
		e.uniform2uiv(this.addr, t), Aa(n, t);
	}
}
function Ga(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (ka(n, t)) return;
		e.uniform3uiv(this.addr, t), Aa(n, t);
	}
}
function Ka(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (ka(n, t)) return;
		e.uniform4uiv(this.addr, t), Aa(n, t);
	}
}
function qa(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	this.type === e.SAMPLER_2D_SHADOW ? (ya.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, a = ya) : a = va, n.setTexture2D(t || a, i);
}
function Ja(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || xa, i);
}
function Ya(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Sa, i);
}
function Xa(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || ba, i);
}
function Za(e) {
	switch (e) {
		case 5126: return Ma;
		case 35664: return Na;
		case 35665: return Pa;
		case 35666: return Fa;
		case 35674: return Ia;
		case 35675: return La;
		case 35676: return Ra;
		case 5124:
		case 35670: return za;
		case 35667:
		case 35671: return Ba;
		case 35668:
		case 35672: return Va;
		case 35669:
		case 35673: return Ha;
		case 5125: return Ua;
		case 36294: return Wa;
		case 36295: return Ga;
		case 36296: return Ka;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return qa;
		case 35679:
		case 36299:
		case 36307: return Ja;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return Ya;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Xa;
	}
}
function Qa(e, t) {
	e.uniform1fv(this.addr, t);
}
function $a(e, t) {
	let n = Oa(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function eo(e, t) {
	let n = Oa(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function to(e, t) {
	let n = Oa(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function no(e, t) {
	let n = Oa(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function ro(e, t) {
	let n = Oa(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function io(e, t) {
	let n = Oa(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function ao(e, t) {
	e.uniform1iv(this.addr, t);
}
function oo(e, t) {
	e.uniform2iv(this.addr, t);
}
function so(e, t) {
	e.uniform3iv(this.addr, t);
}
function co(e, t) {
	e.uniform4iv(this.addr, t);
}
function lo(e, t) {
	e.uniform1uiv(this.addr, t);
}
function uo(e, t) {
	e.uniform2uiv(this.addr, t);
}
function fo(e, t) {
	e.uniform3uiv(this.addr, t);
}
function po(e, t) {
	e.uniform4uiv(this.addr, t);
}
function mo(e, t, n) {
	let r = this.cache, i = t.length, a = ja(n, i);
	ka(r, a) || (e.uniform1iv(this.addr, a), Aa(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? ya : va;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function ho(e, t, n) {
	let r = this.cache, i = t.length, a = ja(n, i);
	ka(r, a) || (e.uniform1iv(this.addr, a), Aa(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || xa, a[e]);
}
function go(e, t, n) {
	let r = this.cache, i = t.length, a = ja(n, i);
	ka(r, a) || (e.uniform1iv(this.addr, a), Aa(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Sa, a[e]);
}
function _o(e, t, n) {
	let r = this.cache, i = t.length, a = ja(n, i);
	ka(r, a) || (e.uniform1iv(this.addr, a), Aa(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || ba, a[e]);
}
function vo(e) {
	switch (e) {
		case 5126: return Qa;
		case 35664: return $a;
		case 35665: return eo;
		case 35666: return to;
		case 35674: return no;
		case 35675: return ro;
		case 35676: return io;
		case 5124:
		case 35670: return ao;
		case 35667:
		case 35671: return oo;
		case 35668:
		case 35672: return so;
		case 35669:
		case 35673: return co;
		case 5125: return lo;
		case 36294: return uo;
		case 36295: return fo;
		case 36296: return po;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return mo;
		case 35679:
		case 36299:
		case 36307: return ho;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return go;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return _o;
	}
}
var yo = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Za(t.type);
	}
}, bo = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = vo(t.type);
	}
}, xo = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, So = /(\w+)(\])?(\[|\.)?/g;
function Co(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function wo(e, t, n) {
	let r = e.name, i = r.length;
	for (So.lastIndex = 0;;) {
		let a = So.exec(r), o = So.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			Co(n, l === void 0 ? new yo(s, e, t) : new bo(s, e, t));
			break;
		} else {
			let e = n.map[s];
			e === void 0 && (e = new xo(s), Co(n, e)), n = e;
		}
	}
}
var To = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			wo(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Eo(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Do = 37297, Oo = 0;
function ko(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var Ao = /*@__PURE__*/ new U();
function jo(e) {
	K._getMatrix(Ao, K.workingColorSpace, e);
	let t = `mat3( ${Ao.elements.map((e) => e.toFixed(4))} )`;
	switch (K.getTransfer(e)) {
		case A: return [t, "LinearTransferOETF"];
		case ee: return [t, "sRGBTransferOETF"];
		default: return I("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function Mo(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + ko(e.getShaderSource(t), r);
	} else return i;
}
function No(e, t) {
	let n = jo(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
var Po = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function Fo(e, t) {
	let n = Po[t];
	return n === void 0 ? (I("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var Io = /*@__PURE__*/ new V();
function Lo() {
	return K.getLuminanceCoefficients(Io), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${Io.x.toFixed(4)}, ${Io.y.toFixed(4)}, ${Io.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function Ro(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Vo).join("\n");
}
function zo(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function Bo(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function Vo(e) {
	return e !== "";
}
function Ho(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Uo(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Wo = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Go(e) {
	return e.replace(Wo, qo);
}
var Ko = /* @__PURE__ */ new Map();
function qo(e, t) {
	let n = q[t];
	if (n === void 0) {
		let e = Ko.get(t);
		if (e !== void 0) n = q[e], I("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("Can not resolve #include <" + t + ">");
	}
	return Go(n);
}
var Jo = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Yo(e) {
	return e.replace(Jo, Xo);
}
function Xo(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function Zo(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var Qo = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function $o(e) {
	return Qo[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var es = {
	301: "ENVMAP_TYPE_CUBE",
	302: "ENVMAP_TYPE_CUBE",
	306: "ENVMAP_TYPE_CUBE_UV"
};
function ts(e) {
	return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : es[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var ns = { 302: "ENVMAP_MODE_REFRACTION" };
function rs(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : ns[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var is = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function as(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : is[e.combine] || "ENVMAP_BLENDING_NONE";
}
function os(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function ss(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = $o(n), l = ts(n), u = rs(n), d = as(n), f = os(n), p = Ro(n), m = zo(a), h = i.createProgram(), g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Vo).join("\n"), g.length > 0 && (g += "\n"), _ = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Vo).join("\n"), _.length > 0 && (_ += "\n")) : (g = [
		Zo(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
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
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
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
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(Vo).join("\n"), _ = [
		Zo(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
		f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
		f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : q.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : Fo("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		q.colorspace_pars_fragment,
		No("linearToOutputTexel", n.outputColorSpace),
		Lo(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(Vo).join("\n")), o = Go(o), o = Ho(o, n), o = Uo(o, n), s = Go(s), s = Ho(s, n), s = Uo(s, n), o = Yo(o), s = Yo(s), n.isRawShaderMaterial !== !0 && (v = "#version 300 es\n", g = [
		p,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + g, _ = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
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
	].join("\n") + "\n" + _);
	let y = v + g + o, b = v + _ + s, x = Eo(i, i.VERTEX_SHADER, y), S = Eo(i, i.FRAGMENT_SHADER, b);
	i.attachShader(h, x), i.attachShader(h, S), n.index0AttributeName === void 0 ? n.morphTargets === !0 && i.bindAttribLocation(h, 0, "position") : i.bindAttribLocation(h, 0, n.index0AttributeName), i.linkProgram(h);
	function C(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(h) || "", r = i.getShaderInfoLog(x) || "", a = i.getShaderInfoLog(S) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (i.getProgramParameter(h, i.LINK_STATUS) === !1) if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, h, x, S);
			else {
				let e = Mo(i, x, "vertex"), n = Mo(i, S, "fragment");
				L("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
			}
			else o === "" ? (s === "" || c === "") && (u = !1) : I("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: g
				},
				fragmentShader: {
					log: c,
					prefix: _
				}
			});
		}
		i.deleteShader(x), i.deleteShader(S), w = new To(i, h), T = Bo(i, h);
	}
	let w;
	this.getUniforms = function() {
		return w === void 0 && C(this), w;
	};
	let T;
	this.getAttributes = function() {
		return T === void 0 && C(this), T;
	};
	let E = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return E === !1 && (E = i.getProgramParameter(h, Do)), E;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = Oo++, this.cacheKey = t, this.usedTimes = 1, this.program = h, this.vertexShader = x, this.fragmentShader = S, this;
}
var cs = 0, ls = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e) {
		let t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), i = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
		return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(i) === !1 && (a.add(i), i.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
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
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new us(e), t.set(e, n)), n;
	}
}, us = class {
	constructor(e) {
		this.id = cs++, this.code = e, this.usedTimes = 0;
	}
};
function ds(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function fs(e, t, n, r, i, a) {
	let o = new ut(), s = new ls(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = r.precision, p = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
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
	function m(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function h(i, o, l, u, h, g) {
		let _ = u.fog, v = h.geometry, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, b = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, x = t.get(i.envMap || y, b), S = x && x.mapping === 306 ? x.image.height : null, C = p[i.type];
		i.precision !== null && (f = r.getMaxPrecision(i.precision), f !== i.precision && I("WebGLProgram.getParameters:", i.precision, "not supported, using", f, "instead."));
		let w = v.morphAttributes.position || v.morphAttributes.normal || v.morphAttributes.color, T = w === void 0 ? 0 : w.length, E = 0;
		v.morphAttributes.position !== void 0 && (E = 1), v.morphAttributes.normal !== void 0 && (E = 2), v.morphAttributes.color !== void 0 && (E = 3);
		let D, O, k, A;
		if (C) {
			let e = Ni[C];
			D = e.vertexShader, O = e.fragmentShader;
		} else D = i.vertexShader, O = i.fragmentShader, s.update(i), k = s.getVertexShaderID(i), A = s.getFragmentShaderID(i);
		let ee = e.getRenderTarget(), j = e.state.buffers.depth.getReversed(), M = h.isInstancedMesh === !0, N = h.isBatchedMesh === !0, te = !!i.map, P = !!i.matcap, ne = !!x, re = !!i.aoMap, ie = !!i.lightMap, F = !!i.bumpMap, L = !!i.normalMap, ae = !!i.displacementMap, oe = !!i.emissiveMap, se = !!i.metalnessMap, ce = !!i.roughnessMap, R = i.anisotropy > 0, le = i.clearcoat > 0, ue = i.dispersion > 0, de = i.iridescence > 0, fe = i.sheen > 0, z = i.transmission > 0, pe = R && !!i.anisotropyMap, me = le && !!i.clearcoatMap, he = le && !!i.clearcoatNormalMap, ge = le && !!i.clearcoatRoughnessMap, _e = de && !!i.iridescenceMap, ve = de && !!i.iridescenceThicknessMap, ye = fe && !!i.sheenColorMap, be = fe && !!i.sheenRoughnessMap, xe = !!i.specularMap, Se = !!i.specularColorMap, Ce = !!i.specularIntensityMap, we = z && !!i.transmissionMap, Te = z && !!i.thicknessMap, Ee = !!i.gradientMap, De = !!i.alphaMap, Oe = i.alphaTest > 0, ke = !!i.alphaHash, Ae = !!i.extensions, je = 0;
		i.toneMapped && (ee === null || ee.isXRRenderTarget === !0) && (je = e.toneMapping);
		let Me = {
			shaderID: C,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: D,
			fragmentShader: O,
			defines: i.defines,
			customVertexShaderID: k,
			customFragmentShaderID: A,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: f,
			batching: N,
			batchingColor: N && h._colorsTexture !== null,
			instancing: M,
			instancingColor: M && h.instanceColor !== null,
			instancingMorph: M && h.morphTexture !== null,
			outputColorSpace: ee === null ? e.outputColorSpace : ee.isXRRenderTarget === !0 ? ee.texture.colorSpace : K.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: te,
			matcap: P,
			envMap: ne,
			envMapMode: ne && x.mapping,
			envMapCubeUVHeight: S,
			aoMap: re,
			lightMap: ie,
			bumpMap: F,
			normalMap: L,
			displacementMap: ae,
			emissiveMap: oe,
			normalMapObjectSpace: L && i.normalMapType === 1,
			normalMapTangentSpace: L && i.normalMapType === 0,
			packedNormalMap: L && i.normalMapType === 0 && ds(i.normalMap.format),
			metalnessMap: se,
			roughnessMap: ce,
			anisotropy: R,
			anisotropyMap: pe,
			clearcoat: le,
			clearcoatMap: me,
			clearcoatNormalMap: he,
			clearcoatRoughnessMap: ge,
			dispersion: ue,
			iridescence: de,
			iridescenceMap: _e,
			iridescenceThicknessMap: ve,
			sheen: fe,
			sheenColorMap: ye,
			sheenRoughnessMap: be,
			specularMap: xe,
			specularColorMap: Se,
			specularIntensityMap: Ce,
			transmission: z,
			transmissionMap: we,
			thicknessMap: Te,
			gradientMap: Ee,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: De,
			alphaTest: Oe,
			alphaHash: ke,
			combine: i.combine,
			mapUv: te && m(i.map.channel),
			aoMapUv: re && m(i.aoMap.channel),
			lightMapUv: ie && m(i.lightMap.channel),
			bumpMapUv: F && m(i.bumpMap.channel),
			normalMapUv: L && m(i.normalMap.channel),
			displacementMapUv: ae && m(i.displacementMap.channel),
			emissiveMapUv: oe && m(i.emissiveMap.channel),
			metalnessMapUv: se && m(i.metalnessMap.channel),
			roughnessMapUv: ce && m(i.roughnessMap.channel),
			anisotropyMapUv: pe && m(i.anisotropyMap.channel),
			clearcoatMapUv: me && m(i.clearcoatMap.channel),
			clearcoatNormalMapUv: he && m(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: ge && m(i.clearcoatRoughnessMap.channel),
			iridescenceMapUv: _e && m(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: ve && m(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: ye && m(i.sheenColorMap.channel),
			sheenRoughnessMapUv: be && m(i.sheenRoughnessMap.channel),
			specularMapUv: xe && m(i.specularMap.channel),
			specularColorMapUv: Se && m(i.specularColorMap.channel),
			specularIntensityMapUv: Ce && m(i.specularIntensityMap.channel),
			transmissionMapUv: we && m(i.transmissionMap.channel),
			thicknessMapUv: Te && m(i.thicknessMap.channel),
			alphaMapUv: De && m(i.alphaMap.channel),
			vertexTangents: !!v.attributes.tangent && (L || R),
			vertexNormals: !!v.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!v.attributes.color && v.attributes.color.itemSize === 4,
			pointsUvs: h.isPoints === !0 && !!v.attributes.uv && (te || De),
			fog: !!_,
			useFog: i.fog === !0,
			fogExp2: !!_ && _.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || v.attributes.normal === void 0 && L === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reversedDepthBuffer: j,
			skinning: h.isSkinnedMesh === !0,
			morphTargets: v.morphAttributes.position !== void 0,
			morphNormals: v.morphAttributes.normal !== void 0,
			morphColors: v.morphAttributes.color !== void 0,
			morphTargetsCount: T,
			morphTextureStride: E,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: g.length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: je,
			decodeVideoTexture: te && i.map.isVideoTexture === !0 && K.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: oe && i.emissiveMap.isVideoTexture === !0 && K.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: Ae && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (Ae && i.extensions.multiDraw === !0 || N) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return Me.vertexUv1s = c.has(1), Me.vertexUv2s = c.has(2), Me.vertexUv3s = c.has(3), c.clear(), Me;
	}
	function g(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (_(n, t), v(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function _(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function v(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), e.push(o.mask);
	}
	function y(e) {
		let t = p[e.type], n;
		if (t) {
			let e = Ni[t];
			n = wr.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function b(t, n) {
		let r = u.get(n);
		return r === void 0 ? (r = new ss(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
	}
	function x(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
		}
	}
	function S(e) {
		s.remove(e);
	}
	function C() {
		s.dispose();
	}
	return {
		getParameters: h,
		getProgramCacheKey: g,
		getUniforms: y,
		acquireProgram: b,
		releaseProgram: x,
		releaseShaderCache: S,
		programs: l,
		dispose: C
	};
}
function ps() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function ms(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function hs(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function gs() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(u) : a.transparent === !0 ? i.push(u) : n.push(u);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t) {
		n.length > 1 && n.sort(e || ms), r.length > 1 && r.sort(t || hs), i.length > 1 && i.sort(t || hs);
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function _s() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new gs(), e.set(t, [i])) : n >= r.length ? (i = new gs(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function vs() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new V(),
					color: new Pt()
				};
				break;
			case "SpotLight":
				n = {
					position: new V(),
					direction: new V(),
					color: new Pt(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new V(),
					color: new Pt(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new V(),
					skyColor: new Pt(),
					groundColor: new Pt()
				};
				break;
			case "RectAreaLight":
				n = {
					color: new Pt(),
					position: new V(),
					halfWidth: new V(),
					halfHeight: new V()
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
function ys() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Ne()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Ne()
				};
				break;
			case "PointLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Ne(),
					shadowCameraNear: 1,
					shadowCameraFar: 1e3
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
var bs = 0;
function xs(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Ss(e) {
	let t = new vs(), n = ys(), r = {
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
		ambient: [
			0,
			0,
			0
		],
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
	for (let e = 0; e < 9; e++) r.probe.push(new V());
	let i = new V(), a = new $e(), o = new $e();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0;
		i.sort(xs);
		for (let e = 0, y = i.length; e < y; e++) {
			let y = i[e], b = y.color, x = y.intensity, S = y.distance, C = null;
			if (y.shadow && y.shadow.map && (C = y.shadow.map.texture.format === 1030 ? y.shadow.map.texture : y.shadow.map.depthTexture || y.shadow.map.texture), y.isAmbientLight) a += b.r * x, o += b.g * x, s += b.b * x;
			else if (y.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(y.sh.coefficients[e], x);
				v++;
			} else if (y.isDirectionalLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[c] = t, r.directionalShadowMap[c] = C, r.directionalShadowMatrix[c] = y.shadow.matrix, p++;
				}
				r.directional[c] = e, c++;
			} else if (y.isSpotLight) {
				let e = t.get(y);
				e.position.setFromMatrixPosition(y.matrixWorld), e.color.copy(b).multiplyScalar(x), e.distance = S, e.coneCos = Math.cos(y.angle), e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), e.decay = y.decay, r.spot[u] = e;
				let i = y.shadow;
				if (y.map && (r.spotLightMap[g] = y.map, g++, i.updateMatrices(y), y.castShadow && _++), r.spotLightMatrix[u] = i.matrix, y.castShadow) {
					let e = n.get(y);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[u] = e, r.spotShadowMap[u] = C, h++;
				}
				u++;
			} else if (y.isRectAreaLight) {
				let e = t.get(y);
				e.color.copy(b).multiplyScalar(x), e.halfWidth.set(y.width * .5, 0, 0), e.halfHeight.set(0, y.height * .5, 0), r.rectArea[d] = e, d++;
			} else if (y.isPointLight) {
				let e = t.get(y);
				if (e.color.copy(y.color).multiplyScalar(y.intensity), e.distance = y.distance, e.decay = y.decay, y.castShadow) {
					let e = y.shadow, t = n.get(y);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[l] = t, r.pointShadowMap[l] = C, r.pointShadowMatrix[l] = y.shadow.matrix, m++;
				}
				r.point[l] = e, l++;
			} else if (y.isHemisphereLight) {
				let e = t.get(y);
				e.skyColor.copy(y.color).multiplyScalar(x), e.groundColor.copy(y.groundColor).multiplyScalar(x), r.hemi[f] = e, f++;
			}
		}
		d > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = J.LTC_FLOAT_1, r.rectAreaLTC2 = J.LTC_FLOAT_2) : (r.rectAreaLTC1 = J.LTC_HALF_1, r.rectAreaLTC2 = J.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let y = r.hash;
		(y.directionalLength !== c || y.pointLength !== l || y.spotLength !== u || y.rectAreaLength !== d || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== m || y.numSpotShadows !== h || y.numSpotMaps !== g || y.numLightProbes !== v) && (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = l, r.hemi.length = f, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = h, r.spotShadowMap.length = h, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = m, r.spotLightMatrix.length = h + g - _, r.spotLightMap.length = g, r.numSpotLightShadowsWithMaps = _, r.numLightProbes = v, y.directionalLength = c, y.pointLength = l, y.spotLength = u, y.rectAreaLength = d, y.hemiLength = f, y.numDirectionalShadows = p, y.numPointShadows = m, y.numSpotShadows = h, y.numSpotMaps = g, y.numLightProbes = v, r.version = bs++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = t.matrixWorldInverse;
		for (let t = 0, f = e.length; t < f; t++) {
			let f = e[t];
			if (f.isDirectionalLight) {
				let e = r.directional[n];
				e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), n++;
			} else if (f.isSpotLight) {
				let e = r.spot[c];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), c++;
			} else if (f.isRectAreaLight) {
				let e = r.rectArea[l];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), o.identity(), a.copy(f.matrixWorld), a.premultiply(d), o.extractRotation(a), e.halfWidth.set(f.width * .5, 0, 0), e.halfHeight.set(0, f.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), l++;
			} else if (f.isPointLight) {
				let e = r.point[s];
				e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), s++;
			} else if (f.isHemisphereLight) {
				let e = r.hemi[u];
				e.direction.setFromMatrixPosition(f.matrixWorld), e.direction.transformDirection(d), u++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function Cs(e) {
	let t = new Ss(e), n = [], r = [], i = [];
	function a(e) {
		d.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c(e) {
		i.push(e);
	}
	function l() {
		t.setup(n);
	}
	function u(e) {
		t.setupView(n, e);
	}
	let d = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: d,
		setupLights: l,
		setupLightsView: u,
		pushLight: o,
		pushShadow: s,
		pushLightProbeGrid: c
	};
}
function ws(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new Cs(e), t.set(n, [a])) : r >= i.length ? (a = new Cs(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var Ts = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", Es = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", Ds = [
	/*@__PURE__*/ new V(1, 0, 0),
	/*@__PURE__*/ new V(-1, 0, 0),
	/*@__PURE__*/ new V(0, 1, 0),
	/*@__PURE__*/ new V(0, -1, 0),
	/*@__PURE__*/ new V(0, 0, 1),
	/*@__PURE__*/ new V(0, 0, -1)
], Os = [
	/*@__PURE__*/ new V(0, -1, 0),
	/*@__PURE__*/ new V(0, -1, 0),
	/*@__PURE__*/ new V(0, 0, 1),
	/*@__PURE__*/ new V(0, 0, -1),
	/*@__PURE__*/ new V(0, -1, 0),
	/*@__PURE__*/ new V(0, -1, 0)
], ks = /*@__PURE__*/ new $e(), As = /*@__PURE__*/ new V(), js = /*@__PURE__*/ new V();
function Ms(e, t, n) {
	let a = new dr(), o = new Ne(), s = new Ne(), d = new Je(), f = new kr(), p = new Ar(), m = {}, g = n.maxTextureSize, _ = {
		0: 1,
		1: 0,
		2: 2
	}, y = new Dr({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new Ne() },
			radius: { value: 4 }
		},
		vertexShader: Ts,
		fragmentShader: Es
	}), b = y.clone();
	b.defines.HORIZONTAL_PASS = 1;
	let x = new jn();
	x.setAttribute("position", new gn(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let S = new er(x, y), C = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let w = this.type;
	this.render = function(t, n, f) {
		if (C.enabled === !1 || C.autoUpdate === !1 && C.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (I("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
		let p = e.getRenderTarget(), m = e.getActiveCubeFace(), _ = e.getActiveMipmapLevel(), y = e.state;
		y.setBlending(0), y.buffers.depth.getReversed() === !0 ? y.buffers.color.setClear(0, 0, 0, 0) : y.buffers.color.setClear(1, 1, 1, 1), y.buffers.depth.setTest(!0), y.setScissorTest(!1);
		let b = w !== this.type;
		b && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let p = 0, m = t.length; p < m; p++) {
			let m = t[p], _ = m.shadow;
			if (_ === void 0) {
				I("WebGLShadowMap:", m, "has no shadow.");
				continue;
			}
			if (_.autoUpdate === !1 && _.needsUpdate === !1) continue;
			o.copy(_.mapSize);
			let x = _.getFrameExtents();
			o.multiply(x), s.copy(_.mapSize), (o.x > g || o.y > g) && (o.x > g && (s.x = Math.floor(g / x.x), o.x = s.x * x.x, _.mapSize.x = s.x), o.y > g && (s.y = Math.floor(g / x.y), o.y = s.y * x.y, _.mapSize.y = s.y));
			let S = e.state.buffers.depth.getReversed();
			if (_.camera._reversedDepth = S, _.map === null || b === !0) {
				if (_.map !== null && (_.map.depthTexture !== null && (_.map.depthTexture.dispose(), _.map.depthTexture = null), _.map.dispose()), this.type === 3) {
					if (m.isPointLight) {
						I("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					_.map = new Xe(o.x, o.y, {
						format: v,
						type: u,
						minFilter: i,
						magFilter: i,
						generateMipmaps: !1
					}), _.map.texture.name = m.name + ".shadowMap", _.map.depthTexture = new pr(o.x, o.y, l), _.map.depthTexture.name = m.name + ".shadowMapDepth", _.map.depthTexture.format = h, _.map.depthTexture.compareFunction = null, _.map.depthTexture.minFilter = r, _.map.depthTexture.magFilter = r;
				} else m.isPointLight ? (_.map = new ca(o.x), _.map.depthTexture = new mr(o.x, c)) : (_.map = new Xe(o.x, o.y), _.map.depthTexture = new pr(o.x, o.y, c)), _.map.depthTexture.name = m.name + ".shadowMap", _.map.depthTexture.format = h, this.type === 1 ? (_.map.depthTexture.compareFunction = S ? 518 : 515, _.map.depthTexture.minFilter = i, _.map.depthTexture.magFilter = i) : (_.map.depthTexture.compareFunction = null, _.map.depthTexture.minFilter = r, _.map.depthTexture.magFilter = r);
				_.camera.updateProjectionMatrix();
			}
			let C = _.map.isWebGLCubeRenderTarget ? 6 : 1;
			for (let t = 0; t < C; t++) {
				if (_.map.isWebGLCubeRenderTarget) e.setRenderTarget(_.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(_.map), e.clear());
					let n = _.getViewport(t);
					d.set(s.x * n.x, s.y * n.y, s.x * n.z, s.y * n.w), y.viewport(d);
				}
				if (m.isPointLight) {
					let e = _.camera, n = _.matrix, r = m.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), As.setFromMatrixPosition(m.matrixWorld), e.position.copy(As), js.copy(e.position), js.add(Ds[t]), e.up.copy(Os[t]), e.lookAt(js), e.updateMatrixWorld(), n.makeTranslation(-As.x, -As.y, -As.z), ks.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), _._frustum.setFromProjectionMatrix(ks, e.coordinateSystem, e.reversedDepth);
				} else _.updateMatrices(m);
				a = _.getFrustum(), D(n, f, _.camera, m, this.type);
			}
			_.isPointLightShadow !== !0 && this.type === 3 && T(_, f), _.needsUpdate = !1;
		}
		w = this.type, C.needsUpdate = !1, e.setRenderTarget(p, m, _);
	};
	function T(n, r) {
		let i = t.update(S);
		y.defines.VSM_SAMPLES !== n.blurSamples && (y.defines.VSM_SAMPLES = n.blurSamples, b.defines.VSM_SAMPLES = n.blurSamples, y.needsUpdate = !0, b.needsUpdate = !0), n.mapPass === null && (n.mapPass = new Xe(o.x, o.y, {
			format: v,
			type: u
		})), y.uniforms.shadow_pass.value = n.map.depthTexture, y.uniforms.resolution.value = n.mapSize, y.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, i, y, S, null), b.uniforms.shadow_pass.value = n.mapPass.texture, b.uniforms.resolution.value = n.mapSize, b.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, i, b, S, null);
	}
	function E(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? p : f, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = m[e];
			r === void 0 && (r = {}, m[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", O)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? _[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function D(n, r, i, o, s) {
		if (n.visible === !1) return;
		if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || a.intersectsObject(n))) {
			n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, n.matrixWorld);
			let a = t.update(n), c = n.material;
			if (Array.isArray(c)) {
				let t = a.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let t = E(n, d, o, s);
						n.onBeforeShadow(e, n, r, i, a, t, u), e.renderBufferDirect(i, null, a, t, n, u), n.onAfterShadow(e, n, r, i, a, t, u);
					}
				}
			} else if (c.visible) {
				let t = E(n, c, o, s);
				n.onBeforeShadow(e, n, r, i, a, t, null), e.renderBufferDirect(i, null, a, t, n, null), n.onAfterShadow(e, n, r, i, a, t, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) D(c[e], r, i, o, s);
	}
	function O(e) {
		e.target.removeEventListener("dispose", O);
		for (let t in m) {
			let n = m[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function Ns(e, t) {
	function n() {
		let t = !1, n = new Je(), r = null, i = new Je(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? ce(e.DEPTH_TEST) : R(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = se[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? ce(e.STENCIL_TEST) : R(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new Pt(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, ee = null, j = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), M = !1, N = 0, te = e.getParameter(e.VERSION);
	te.indexOf("WebGL") === -1 ? te.indexOf("OpenGL ES") !== -1 && (N = parseFloat(/^OpenGL ES (\d)/.exec(te)[1]), M = N >= 2) : (N = parseFloat(/^WebGL (\d)/.exec(te)[1]), M = N >= 1);
	let P = null, ne = {}, re = e.getParameter(e.SCISSOR_BOX), ie = e.getParameter(e.VIEWPORT), F = new Je().fromArray(re), I = new Je().fromArray(ie);
	function ae(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let oe = {};
	oe[e.TEXTURE_2D] = ae(e.TEXTURE_2D, e.TEXTURE_2D, 1), oe[e.TEXTURE_CUBE_MAP] = ae(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), oe[e.TEXTURE_2D_ARRAY] = ae(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), oe[e.TEXTURE_3D] = ae(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), ce(e.DEPTH_TEST), o.setFunc(3), he(!1), ge(1), ce(e.CULL_FACE), pe(0);
	function ce(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function R(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function le(t, n) {
		return f[t] === n ? !1 : (e.bindFramebuffer(t, n), f[t] = n, t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function ue(t, n) {
		let r = m, i = !1;
		if (t) {
			r = p.get(n), r === void 0 && (r = [], p.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function de(t) {
		return h === t ? !1 : (e.useProgram(t), h = t, !0);
	}
	let fe = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	fe[103] = e.MIN, fe[104] = e.MAX;
	let z = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function pe(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) {
			g === !0 && (R(e.BLEND), g = !1);
			return;
		}
		if (g === !1 && (ce(e.BLEND), g = !0), t !== 5) {
			if (t !== _ || u !== E) {
				if ((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), v = 100, x = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default:
						L("WebGLState: Invalid blending: ", t);
						break;
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						L("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						L("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default:
						L("WebGLState: Invalid blending: ", t);
						break;
				}
				y = null, b = null, S = null, C = null, w.set(0, 0, 0), T = 0, _ = t, E = u;
			}
			return;
		}
		a ||= n, o ||= r, s ||= i, (n !== v || a !== x) && (e.blendEquationSeparate(fe[n], fe[a]), v = n, x = a), (r !== y || i !== b || o !== S || s !== C) && (e.blendFuncSeparate(z[r], z[i], z[o], z[s]), y = r, b = i, S = o, C = s), (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), T = l), _ = t, E = !1;
	}
	function me(t, n) {
		t.side === 2 ? R(e.CULL_FACE) : ce(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), he(r), t.blending === 1 && t.transparent === !1 ? pe(0) : pe(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ve(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? ce(e.SAMPLE_ALPHA_TO_COVERAGE) : R(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function he(t) {
		D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), D = t);
	}
	function ge(t) {
		t === 0 ? R(e.CULL_FACE) : (ce(e.CULL_FACE), t !== O && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), O = t;
	}
	function _e(t) {
		t !== k && (M && e.lineWidth(t), k = t);
	}
	function ve(t, n, r) {
		t ? (ce(e.POLYGON_OFFSET_FILL), (A !== n || ee !== r) && (A = n, ee = r, o.getReversed() && (n = -n), e.polygonOffset(n, r))) : R(e.POLYGON_OFFSET_FILL);
	}
	function ye(t) {
		t ? ce(e.SCISSOR_TEST) : R(e.SCISSOR_TEST);
	}
	function be(t) {
		t === void 0 && (t = e.TEXTURE0 + j - 1), P !== t && (e.activeTexture(t), P = t);
	}
	function xe(t, n, r) {
		r === void 0 && (r = P === null ? e.TEXTURE0 + j - 1 : P);
		let i = ne[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, ne[r] = i), (i.type !== t || i.texture !== n) && (P !== r && (e.activeTexture(r), P = r), e.bindTexture(t, n || oe[t]), i.type = t, i.texture = n);
	}
	function Se() {
		let t = ne[P];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function Ce() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function we() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function Ee() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function De() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function Oe() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function ke() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function Ae() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function je() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function Me() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			L("WebGLState:", e);
		}
	}
	function B(t) {
		return d[t] === void 0 ? e.getParameter(t) : d[t];
	}
	function Ne(t, n) {
		d[t] !== n && (e.pixelStorei(t, n), d[t] = n);
	}
	function Pe(t) {
		F.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), F.copy(t));
	}
	function V(t) {
		I.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), I.copy(t));
	}
	function Fe(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function H(t, n) {
		let r = l.get(n).get(t);
		c.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(n, r));
	}
	function U() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, P = null, ne = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new Pt(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, ee = null, F.set(0, 0, e.canvas.width, e.canvas.height), I.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: ce,
		disable: R,
		bindFramebuffer: le,
		drawBuffers: ue,
		useProgram: de,
		setBlending: pe,
		setMaterial: me,
		setFlipSided: he,
		setCullFace: ge,
		setLineWidth: _e,
		setPolygonOffset: ve,
		setScissorTest: ye,
		activeTexture: be,
		bindTexture: xe,
		unbindTexture: Se,
		compressedTexImage2D: Ce,
		compressedTexImage3D: we,
		texImage2D: je,
		texImage3D: Me,
		pixelStorei: Ne,
		getParameter: B,
		updateUBOMapping: Fe,
		uniformBlockBinding: H,
		texStorage2D: ke,
		texStorage3D: Ae,
		texSubImage2D: Te,
		texSubImage3D: Ee,
		compressedTexSubImage2D: De,
		compressedTexSubImage3D: Oe,
		scissor: Pe,
		viewport: V,
		reset: U
	};
}
function Ps(o, s, c, l, u, d, f) {
	let p = s.has("WEBGL_multisampled_render_to_texture") ? s.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = new Ne(), _ = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new Set(), y, b = /* @__PURE__ */ new WeakMap(), x = !1;
	try {
		x = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function S(e, t) {
		return x ? new OffscreenCanvas(e, t) : P("canvas");
	}
	function C(e, t, n) {
		let r = 1, i = Me(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
			let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
			y === void 0 && (y = S(n, a));
			let o = t ? S(n, a) : y;
			return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), I("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
		} else return "data" in e && I("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		return e;
	}
	function w(e) {
		return e.generateMipmaps;
	}
	function T(e) {
		o.generateMipmap(e);
	}
	function E(e) {
		return e.isWebGLCubeRenderTarget ? o.TEXTURE_CUBE_MAP : e.isWebGL3DRenderTarget ? o.TEXTURE_3D : e.isWebGLArrayRenderTarget || e.isCompressedArrayTexture ? o.TEXTURE_2D_ARRAY : o.TEXTURE_2D;
	}
	function D(e, t, n, r, i, a = !1) {
		if (e !== null) {
			if (o[e] !== void 0) return o[e];
			I("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + e + "'");
		}
		let c;
		r && (c = s.get("EXT_texture_norm16"), c || I("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let l = t;
		if (t === o.RED && (n === o.FLOAT && (l = o.R32F), n === o.HALF_FLOAT && (l = o.R16F), n === o.UNSIGNED_BYTE && (l = o.R8), n === o.UNSIGNED_SHORT && c && (l = c.R16_EXT), n === o.SHORT && c && (l = c.R16_SNORM_EXT)), t === o.RED_INTEGER && (n === o.UNSIGNED_BYTE && (l = o.R8UI), n === o.UNSIGNED_SHORT && (l = o.R16UI), n === o.UNSIGNED_INT && (l = o.R32UI), n === o.BYTE && (l = o.R8I), n === o.SHORT && (l = o.R16I), n === o.INT && (l = o.R32I)), t === o.RG && (n === o.FLOAT && (l = o.RG32F), n === o.HALF_FLOAT && (l = o.RG16F), n === o.UNSIGNED_BYTE && (l = o.RG8), n === o.UNSIGNED_SHORT && c && (l = c.RG16_EXT), n === o.SHORT && c && (l = c.RG16_SNORM_EXT)), t === o.RG_INTEGER && (n === o.UNSIGNED_BYTE && (l = o.RG8UI), n === o.UNSIGNED_SHORT && (l = o.RG16UI), n === o.UNSIGNED_INT && (l = o.RG32UI), n === o.BYTE && (l = o.RG8I), n === o.SHORT && (l = o.RG16I), n === o.INT && (l = o.RG32I)), t === o.RGB_INTEGER && (n === o.UNSIGNED_BYTE && (l = o.RGB8UI), n === o.UNSIGNED_SHORT && (l = o.RGB16UI), n === o.UNSIGNED_INT && (l = o.RGB32UI), n === o.BYTE && (l = o.RGB8I), n === o.SHORT && (l = o.RGB16I), n === o.INT && (l = o.RGB32I)), t === o.RGBA_INTEGER && (n === o.UNSIGNED_BYTE && (l = o.RGBA8UI), n === o.UNSIGNED_SHORT && (l = o.RGBA16UI), n === o.UNSIGNED_INT && (l = o.RGBA32UI), n === o.BYTE && (l = o.RGBA8I), n === o.SHORT && (l = o.RGBA16I), n === o.INT && (l = o.RGBA32I)), t === o.RGB && (n === o.UNSIGNED_SHORT && c && (l = c.RGB16_EXT), n === o.SHORT && c && (l = c.RGB16_SNORM_EXT), n === o.UNSIGNED_INT_5_9_9_9_REV && (l = o.RGB9_E5), n === o.UNSIGNED_INT_10F_11F_11F_REV && (l = o.R11F_G11F_B10F)), t === o.RGBA) {
			let e = a ? A : K.getTransfer(i);
			n === o.FLOAT && (l = o.RGBA32F), n === o.HALF_FLOAT && (l = o.RGBA16F), n === o.UNSIGNED_BYTE && (l = e === "srgb" ? o.SRGB8_ALPHA8 : o.RGBA8), n === o.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT), n === o.SHORT && c && (l = c.RGBA16_SNORM_EXT), n === o.UNSIGNED_SHORT_4_4_4_4 && (l = o.RGBA4), n === o.UNSIGNED_SHORT_5_5_5_1 && (l = o.RGB5_A1);
		}
		return (l === o.R16F || l === o.R32F || l === o.RG16F || l === o.RG32F || l === o.RGBA16F || l === o.RGBA32F) && s.get("EXT_color_buffer_float"), l;
	}
	function O(e, t) {
		let n;
		return e ? t === null || t === 1014 || t === 1020 ? n = o.DEPTH24_STENCIL8 : t === 1015 ? n = o.DEPTH32F_STENCIL8 : t === 1012 && (n = o.DEPTH24_STENCIL8, I("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : t === null || t === 1014 || t === 1020 ? n = o.DEPTH_COMPONENT24 : t === 1015 ? n = o.DEPTH_COMPONENT32F : t === 1012 && (n = o.DEPTH_COMPONENT16), n;
	}
	function k(e, t) {
		return w(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function ee(e) {
		let t = e.target;
		t.removeEventListener("dispose", ee), M(t), t.isVideoTexture && _.delete(t), t.isHTMLTexture && v.delete(t);
	}
	function j(e) {
		let t = e.target;
		t.removeEventListener("dispose", j), te(t);
	}
	function M(e) {
		let t = l.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, r = b.get(n);
		if (r) {
			let i = r[t.__cacheKey];
			i.usedTimes--, i.usedTimes === 0 && N(e), Object.keys(r).length === 0 && b.delete(n);
		}
		l.remove(e);
	}
	function N(e) {
		let t = l.get(e);
		o.deleteTexture(t.__webglTexture);
		let n = e.source, r = b.get(n);
		delete r[t.__cacheKey], f.memory.textures--;
	}
	function te(e) {
		let t = l.get(e);
		if (e.depthTexture && (e.depthTexture.dispose(), l.remove(e.depthTexture)), e.isWebGLCubeRenderTarget) for (let e = 0; e < 6; e++) {
			if (Array.isArray(t.__webglFramebuffer[e])) for (let n = 0; n < t.__webglFramebuffer[e].length; n++) o.deleteFramebuffer(t.__webglFramebuffer[e][n]);
			else o.deleteFramebuffer(t.__webglFramebuffer[e]);
			t.__webglDepthbuffer && o.deleteRenderbuffer(t.__webglDepthbuffer[e]);
		}
		else {
			if (Array.isArray(t.__webglFramebuffer)) for (let e = 0; e < t.__webglFramebuffer.length; e++) o.deleteFramebuffer(t.__webglFramebuffer[e]);
			else o.deleteFramebuffer(t.__webglFramebuffer);
			if (t.__webglDepthbuffer && o.deleteRenderbuffer(t.__webglDepthbuffer), t.__webglMultisampledFramebuffer && o.deleteFramebuffer(t.__webglMultisampledFramebuffer), t.__webglColorRenderbuffer) for (let e = 0; e < t.__webglColorRenderbuffer.length; e++) t.__webglColorRenderbuffer[e] && o.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);
			t.__webglDepthRenderbuffer && o.deleteRenderbuffer(t.__webglDepthRenderbuffer);
		}
		let n = e.textures;
		for (let e = 0, t = n.length; e < t; e++) {
			let t = l.get(n[e]);
			t.__webglTexture && (o.deleteTexture(t.__webglTexture), f.memory.textures--), l.remove(n[e]);
		}
		l.remove(e);
	}
	let ne = 0;
	function re() {
		ne = 0;
	}
	function ie() {
		return ne;
	}
	function F(e) {
		ne = e;
	}
	function ae() {
		let e = ne;
		return e >= u.maxTextures && I("WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + u.maxTextures), ne += 1, e;
	}
	function oe(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function se(e, t) {
		let n = l.get(e);
		if (e.isVideoTexture && Ae(e), e.isRenderTargetTexture === !1 && e.isExternalTexture !== !0 && e.version > 0 && n.__version !== e.version) {
			let r = e.image;
			if (r === null) I("WebGLRenderer: Texture marked for update but no image data found.");
			else if (r.complete === !1) I("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				ge(n, e, t);
				return;
			}
		} else e.isExternalTexture && (n.__webglTexture = e.sourceTexture ? e.sourceTexture : null);
		c.bindTexture(o.TEXTURE_2D, n.__webglTexture, o.TEXTURE0 + t);
	}
	function ce(e, t) {
		let n = l.get(e);
		if (e.isRenderTargetTexture === !1 && e.version > 0 && n.__version !== e.version) {
			ge(n, e, t);
			return;
		} else e.isExternalTexture && (n.__webglTexture = e.sourceTexture ? e.sourceTexture : null);
		c.bindTexture(o.TEXTURE_2D_ARRAY, n.__webglTexture, o.TEXTURE0 + t);
	}
	function R(e, t) {
		let n = l.get(e);
		if (e.isRenderTargetTexture === !1 && e.version > 0 && n.__version !== e.version) {
			ge(n, e, t);
			return;
		}
		c.bindTexture(o.TEXTURE_3D, n.__webglTexture, o.TEXTURE0 + t);
	}
	function le(e, t) {
		let n = l.get(e);
		if (e.isCubeDepthTexture !== !0 && e.version > 0 && n.__version !== e.version) {
			_e(n, e, t);
			return;
		}
		c.bindTexture(o.TEXTURE_CUBE_MAP, n.__webglTexture, o.TEXTURE0 + t);
	}
	let ue = {
		[e]: o.REPEAT,
		[t]: o.CLAMP_TO_EDGE,
		[n]: o.MIRRORED_REPEAT
	}, de = {
		[r]: o.NEAREST,
		1004: o.NEAREST_MIPMAP_NEAREST,
		1005: o.NEAREST_MIPMAP_LINEAR,
		[i]: o.LINEAR,
		1007: o.LINEAR_MIPMAP_NEAREST,
		[a]: o.LINEAR_MIPMAP_LINEAR
	}, fe = {
		512: o.NEVER,
		519: o.ALWAYS,
		513: o.LESS,
		515: o.LEQUAL,
		514: o.EQUAL,
		518: o.GEQUAL,
		516: o.GREATER,
		517: o.NOTEQUAL
	};
	function z(e, t) {
		if (t.type === 1015 && s.has("OES_texture_float_linear") === !1 && (t.magFilter === 1006 || t.magFilter === 1007 || t.magFilter === 1005 || t.magFilter === 1008 || t.minFilter === 1006 || t.minFilter === 1007 || t.minFilter === 1005 || t.minFilter === 1008) && I("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), o.texParameteri(e, o.TEXTURE_WRAP_S, ue[t.wrapS]), o.texParameteri(e, o.TEXTURE_WRAP_T, ue[t.wrapT]), (e === o.TEXTURE_3D || e === o.TEXTURE_2D_ARRAY) && o.texParameteri(e, o.TEXTURE_WRAP_R, ue[t.wrapR]), o.texParameteri(e, o.TEXTURE_MAG_FILTER, de[t.magFilter]), o.texParameteri(e, o.TEXTURE_MIN_FILTER, de[t.minFilter]), t.compareFunction && (o.texParameteri(e, o.TEXTURE_COMPARE_MODE, o.COMPARE_REF_TO_TEXTURE), o.texParameteri(e, o.TEXTURE_COMPARE_FUNC, fe[t.compareFunction])), s.has("EXT_texture_filter_anisotropic") === !0) {
			if (t.magFilter === 1003 || t.minFilter !== 1005 && t.minFilter !== 1008 || t.type === 1015 && s.has("OES_texture_float_linear") === !1) return;
			if (t.anisotropy > 1 || l.get(t).__currentAnisotropy) {
				let n = s.get("EXT_texture_filter_anisotropic");
				o.texParameterf(e, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, u.getMaxAnisotropy())), l.get(t).__currentAnisotropy = t.anisotropy;
			}
		}
	}
	function pe(e, t) {
		let n = !1;
		e.__webglInit === void 0 && (e.__webglInit = !0, t.addEventListener("dispose", ee));
		let r = t.source, i = b.get(r);
		i === void 0 && (i = {}, b.set(r, i));
		let a = oe(t);
		if (a !== e.__cacheKey) {
			i[a] === void 0 && (i[a] = {
				texture: o.createTexture(),
				usedTimes: 0
			}, f.memory.textures++, n = !0), i[a].usedTimes++;
			let r = i[e.__cacheKey];
			r !== void 0 && (i[e.__cacheKey].usedTimes--, r.usedTimes === 0 && N(t)), e.__cacheKey = a, e.__webglTexture = i[a].texture;
		}
		return n;
	}
	function me(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function he(e, t, n, r) {
		let i = e.updateRanges;
		if (i.length === 0) c.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, t.width, t.height, n, r, t.data);
		else {
			i.sort((e, t) => e.start - t.start);
			let a = 0;
			for (let e = 1; e < i.length; e++) {
				let n = i[a], r = i[e], o = n.start + n.count, s = me(r.start, t.width, 4), c = me(n.start, t.width, 4);
				r.start <= o + 1 && s === c && me(r.start + r.count - 1, t.width, 4) === s ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++a, i[a] = r);
			}
			i.length = a + 1;
			let s = c.getParameter(o.UNPACK_ROW_LENGTH), l = c.getParameter(o.UNPACK_SKIP_PIXELS), u = c.getParameter(o.UNPACK_SKIP_ROWS);
			c.pixelStorei(o.UNPACK_ROW_LENGTH, t.width);
			for (let e = 0, a = i.length; e < a; e++) {
				let a = i[e], s = Math.floor(a.start / 4), l = Math.ceil(a.count / 4), u = s % t.width, d = Math.floor(s / t.width), f = l;
				c.pixelStorei(o.UNPACK_SKIP_PIXELS, u), c.pixelStorei(o.UNPACK_SKIP_ROWS, d), c.texSubImage2D(o.TEXTURE_2D, 0, u, d, f, 1, n, r, t.data);
			}
			e.clearUpdateRanges(), c.pixelStorei(o.UNPACK_ROW_LENGTH, s), c.pixelStorei(o.UNPACK_SKIP_PIXELS, l), c.pixelStorei(o.UNPACK_SKIP_ROWS, u);
		}
	}
	function ge(e, t, n) {
		let r = o.TEXTURE_2D;
		(t.isDataArrayTexture || t.isCompressedArrayTexture) && (r = o.TEXTURE_2D_ARRAY), t.isData3DTexture && (r = o.TEXTURE_3D);
		let i = pe(e, t), a = t.source;
		c.bindTexture(r, e.__webglTexture, o.TEXTURE0 + n);
		let s = l.get(a);
		if (a.version !== s.__version || i === !0) {
			if (c.activeTexture(o.TEXTURE0 + n), !(typeof ImageBitmap < "u" && t.image instanceof ImageBitmap)) {
				let e = K.getPrimaries(K.workingColorSpace), n = t.colorSpace === "" ? null : K.getPrimaries(t.colorSpace), r = t.colorSpace === "" || e === n ? o.NONE : o.BROWSER_DEFAULT_WEBGL;
				c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, t.flipY), c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL, r);
			}
			c.pixelStorei(o.UNPACK_ALIGNMENT, t.unpackAlignment);
			let e = C(t.image, !1, u.maxTextureSize);
			e = je(t, e);
			let l = d.convert(t.format, t.colorSpace), f = d.convert(t.type), p = D(t.internalFormat, l, f, t.normalized, t.colorSpace, t.isVideoTexture);
			z(r, t);
			let m, h = t.mipmaps, _ = t.isVideoTexture !== !0, y = s.__version === void 0 || i === !0, b = a.dataReady, x = k(t, e);
			if (t.isDepthTexture) p = O(t.format === g, t.type), y && (_ ? c.texStorage2D(o.TEXTURE_2D, 1, p, e.width, e.height) : c.texImage2D(o.TEXTURE_2D, 0, p, e.width, e.height, 0, l, f, null));
			else if (t.isDataTexture) if (h.length > 0) {
				_ && y && c.texStorage2D(o.TEXTURE_2D, x, p, h[0].width, h[0].height);
				for (let e = 0, t = h.length; e < t; e++) m = h[e], _ ? b && c.texSubImage2D(o.TEXTURE_2D, e, 0, 0, m.width, m.height, l, f, m.data) : c.texImage2D(o.TEXTURE_2D, e, p, m.width, m.height, 0, l, f, m.data);
				t.generateMipmaps = !1;
			} else _ ? (y && c.texStorage2D(o.TEXTURE_2D, x, p, e.width, e.height), b && he(t, e, l, f)) : c.texImage2D(o.TEXTURE_2D, 0, p, e.width, e.height, 0, l, f, e.data);
			else if (t.isCompressedTexture) if (t.isCompressedArrayTexture) {
				_ && y && c.texStorage3D(o.TEXTURE_2D_ARRAY, x, p, h[0].width, h[0].height, e.depth);
				for (let n = 0, r = h.length; n < r; n++) if (m = h[n], t.format !== 1023) if (l !== null) if (_) {
					if (b) if (t.layerUpdates.size > 0) {
						let e = ki(m.width, m.height, t.format, t.type);
						for (let r of t.layerUpdates) {
							let t = m.data.subarray(r * e / m.data.BYTES_PER_ELEMENT, (r + 1) * e / m.data.BYTES_PER_ELEMENT);
							c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY, n, 0, 0, r, m.width, m.height, 1, l, t);
						}
						t.clearLayerUpdates();
					} else c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY, n, 0, 0, 0, m.width, m.height, e.depth, l, m.data);
				} else c.compressedTexImage3D(o.TEXTURE_2D_ARRAY, n, p, m.width, m.height, e.depth, 0, m.data, 0, 0);
				else I("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
				else _ ? b && c.texSubImage3D(o.TEXTURE_2D_ARRAY, n, 0, 0, 0, m.width, m.height, e.depth, l, f, m.data) : c.texImage3D(o.TEXTURE_2D_ARRAY, n, p, m.width, m.height, e.depth, 0, l, f, m.data);
			} else {
				_ && y && c.texStorage2D(o.TEXTURE_2D, x, p, h[0].width, h[0].height);
				for (let e = 0, n = h.length; e < n; e++) m = h[e], t.format === 1023 ? _ ? b && c.texSubImage2D(o.TEXTURE_2D, e, 0, 0, m.width, m.height, l, f, m.data) : c.texImage2D(o.TEXTURE_2D, e, p, m.width, m.height, 0, l, f, m.data) : l === null ? I("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : _ ? b && c.compressedTexSubImage2D(o.TEXTURE_2D, e, 0, 0, m.width, m.height, l, m.data) : c.compressedTexImage2D(o.TEXTURE_2D, e, p, m.width, m.height, 0, m.data);
			}
			else if (t.isDataArrayTexture) if (_) {
				if (y && c.texStorage3D(o.TEXTURE_2D_ARRAY, x, p, e.width, e.height, e.depth), b) if (t.layerUpdates.size > 0) {
					let n = ki(e.width, e.height, t.format, t.type);
					for (let r of t.layerUpdates) {
						let t = e.data.subarray(r * n / e.data.BYTES_PER_ELEMENT, (r + 1) * n / e.data.BYTES_PER_ELEMENT);
						c.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, r, e.width, e.height, 1, l, f, t);
					}
					t.clearLayerUpdates();
				} else c.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, 0, e.width, e.height, e.depth, l, f, e.data);
			} else c.texImage3D(o.TEXTURE_2D_ARRAY, 0, p, e.width, e.height, e.depth, 0, l, f, e.data);
			else if (t.isData3DTexture) _ ? (y && c.texStorage3D(o.TEXTURE_3D, x, p, e.width, e.height, e.depth), b && c.texSubImage3D(o.TEXTURE_3D, 0, 0, 0, 0, e.width, e.height, e.depth, l, f, e.data)) : c.texImage3D(o.TEXTURE_3D, 0, p, e.width, e.height, e.depth, 0, l, f, e.data);
			else if (t.isFramebufferTexture) {
				if (y) if (_) c.texStorage2D(o.TEXTURE_2D, x, p, e.width, e.height);
				else {
					let t = e.width, n = e.height;
					for (let e = 0; e < x; e++) c.texImage2D(o.TEXTURE_2D, e, p, t, n, 0, l, f, null), t >>= 1, n >>= 1;
				}
			} else if (t.isHTMLTexture) {
				if ("texElementImage2D" in o) {
					let n = o.canvas;
					if (n.hasAttribute("layoutsubtree") || n.setAttribute("layoutsubtree", "true"), e.parentNode !== n) {
						n.appendChild(e), v.add(t), n.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of v) t.includes(e.image) && (e.needsUpdate = !0);
						}, n.requestPaint();
						return;
					}
					let r = o.RGBA, i = o.RGBA, a = o.UNSIGNED_BYTE;
					o.texElementImage2D(o.TEXTURE_2D, 0, r, i, a, e), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE);
				}
			} else if (h.length > 0) {
				if (_ && y) {
					let e = Me(h[0]);
					c.texStorage2D(o.TEXTURE_2D, x, p, e.width, e.height);
				}
				for (let e = 0, t = h.length; e < t; e++) m = h[e], _ ? b && c.texSubImage2D(o.TEXTURE_2D, e, 0, 0, l, f, m) : c.texImage2D(o.TEXTURE_2D, e, p, l, f, m);
				t.generateMipmaps = !1;
			} else if (_) {
				if (y) {
					let t = Me(e);
					c.texStorage2D(o.TEXTURE_2D, x, p, t.width, t.height);
				}
				b && c.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, l, f, e);
			} else c.texImage2D(o.TEXTURE_2D, 0, p, l, f, e);
			w(t) && T(r), s.__version = a.version, t.onUpdate && t.onUpdate(t);
		}
		e.__version = t.version;
	}
	function _e(e, t, n) {
		if (t.image.length !== 6) return;
		let r = pe(e, t), i = t.source;
		c.bindTexture(o.TEXTURE_CUBE_MAP, e.__webglTexture, o.TEXTURE0 + n);
		let a = l.get(i);
		if (i.version !== a.__version || r === !0) {
			c.activeTexture(o.TEXTURE0 + n);
			let e = K.getPrimaries(K.workingColorSpace), s = t.colorSpace === "" ? null : K.getPrimaries(t.colorSpace), l = t.colorSpace === "" || e === s ? o.NONE : o.BROWSER_DEFAULT_WEBGL;
			c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, t.flipY), c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), c.pixelStorei(o.UNPACK_ALIGNMENT, t.unpackAlignment), c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL, l);
			let f = t.isCompressedTexture || t.image[0].isCompressedTexture, p = t.image[0] && t.image[0].isDataTexture, m = [];
			for (let e = 0; e < 6; e++) !f && !p ? m[e] = C(t.image[e], !0, u.maxCubemapSize) : m[e] = p ? t.image[e].image : t.image[e], m[e] = je(t, m[e]);
			let h = m[0], g = d.convert(t.format, t.colorSpace), _ = d.convert(t.type), v = D(t.internalFormat, g, _, t.normalized, t.colorSpace), y = t.isVideoTexture !== !0, b = a.__version === void 0 || r === !0, x = i.dataReady, S = k(t, h);
			z(o.TEXTURE_CUBE_MAP, t);
			let E;
			if (f) {
				y && b && c.texStorage2D(o.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
				for (let e = 0; e < 6; e++) {
					E = m[e].mipmaps;
					for (let n = 0; n < E.length; n++) {
						let r = E[n];
						t.format === 1023 ? y ? x && c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, 0, 0, r.width, r.height, g, _, r.data) : c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, v, r.width, r.height, 0, g, _, r.data) : g === null ? I("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : y ? x && c.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, 0, 0, r.width, r.height, g, r.data) : c.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, n, v, r.width, r.height, 0, r.data);
					}
				}
			} else {
				if (E = t.mipmaps, y && b) {
					E.length > 0 && S++;
					let e = Me(m[0]);
					c.texStorage2D(o.TEXTURE_CUBE_MAP, S, v, e.width, e.height);
				}
				for (let e = 0; e < 6; e++) if (p) {
					y ? x && c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, m[e].width, m[e].height, g, _, m[e].data) : c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, v, m[e].width, m[e].height, 0, g, _, m[e].data);
					for (let t = 0; t < E.length; t++) {
						let n = E[t].image[e].image;
						y ? x && c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, 0, 0, n.width, n.height, g, _, n.data) : c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, v, n.width, n.height, 0, g, _, n.data);
					}
				} else {
					y ? x && c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, g, _, m[e]) : c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, v, g, _, m[e]);
					for (let t = 0; t < E.length; t++) {
						let n = E[t];
						y ? x && c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, 0, 0, g, _, n.image[e]) : c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, t + 1, v, g, _, n.image[e]);
					}
				}
			}
			w(t) && T(o.TEXTURE_CUBE_MAP), a.__version = i.version, t.onUpdate && t.onUpdate(t);
		}
		e.__version = t.version;
	}
	function ve(e, t, n, r, i, a) {
		let s = d.convert(n.format, n.colorSpace), u = d.convert(n.type), f = D(n.internalFormat, s, u, n.normalized, n.colorSpace), m = l.get(t), h = l.get(n);
		if (h.__renderTarget = t, !m.__hasExternalTextures) {
			let e = Math.max(1, t.width >> a), n = Math.max(1, t.height >> a);
			i === o.TEXTURE_3D || i === o.TEXTURE_2D_ARRAY ? c.texImage3D(i, a, f, e, n, t.depth, 0, s, u, null) : c.texImage2D(i, a, f, e, n, 0, s, u, null);
		}
		c.bindFramebuffer(o.FRAMEBUFFER, e), ke(t) ? p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER, r, i, h.__webglTexture, 0, Oe(t)) : (i === o.TEXTURE_2D || i >= o.TEXTURE_CUBE_MAP_POSITIVE_X && i <= o.TEXTURE_CUBE_MAP_NEGATIVE_Z) && o.framebufferTexture2D(o.FRAMEBUFFER, r, i, h.__webglTexture, a), c.bindFramebuffer(o.FRAMEBUFFER, null);
	}
	function ye(e, t, n) {
		if (o.bindRenderbuffer(o.RENDERBUFFER, e), t.depthBuffer) {
			let r = t.depthTexture, i = r && r.isDepthTexture ? r.type : null, a = O(t.stencilBuffer, i), s = t.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT;
			ke(t) ? p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER, Oe(t), a, t.width, t.height) : n ? o.renderbufferStorageMultisample(o.RENDERBUFFER, Oe(t), a, t.width, t.height) : o.renderbufferStorage(o.RENDERBUFFER, a, t.width, t.height), o.framebufferRenderbuffer(o.FRAMEBUFFER, s, o.RENDERBUFFER, e);
		} else {
			let e = t.textures;
			for (let r = 0; r < e.length; r++) {
				let i = e[r], a = d.convert(i.format, i.colorSpace), s = d.convert(i.type), c = D(i.internalFormat, a, s, i.normalized, i.colorSpace);
				ke(t) ? p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER, Oe(t), c, t.width, t.height) : n ? o.renderbufferStorageMultisample(o.RENDERBUFFER, Oe(t), c, t.width, t.height) : o.renderbufferStorage(o.RENDERBUFFER, c, t.width, t.height);
			}
		}
		o.bindRenderbuffer(o.RENDERBUFFER, null);
	}
	function be(e, t, n) {
		let r = t.isWebGLCubeRenderTarget === !0;
		if (c.bindFramebuffer(o.FRAMEBUFFER, e), !(t.depthTexture && t.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
		let i = l.get(t.depthTexture);
		if (i.__renderTarget = t, (!i.__webglTexture || t.depthTexture.image.width !== t.width || t.depthTexture.image.height !== t.height) && (t.depthTexture.image.width = t.width, t.depthTexture.image.height = t.height, t.depthTexture.needsUpdate = !0), r) {
			if (i.__webglInit === void 0 && (i.__webglInit = !0, t.depthTexture.addEventListener("dispose", ee)), i.__webglTexture === void 0) {
				i.__webglTexture = o.createTexture(), c.bindTexture(o.TEXTURE_CUBE_MAP, i.__webglTexture), z(o.TEXTURE_CUBE_MAP, t.depthTexture);
				let e = d.convert(t.depthTexture.format), n = d.convert(t.depthTexture.type), r;
				t.depthTexture.format === 1026 ? r = o.DEPTH_COMPONENT24 : t.depthTexture.format === 1027 && (r = o.DEPTH24_STENCIL8);
				for (let i = 0; i < 6; i++) o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, r, t.width, t.height, 0, e, n, null);
			}
		} else se(t.depthTexture, 0);
		let a = i.__webglTexture, s = Oe(t), u = r ? o.TEXTURE_CUBE_MAP_POSITIVE_X + n : o.TEXTURE_2D, f = t.depthTexture.format === 1027 ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT;
		if (t.depthTexture.format === 1026) ke(t) ? p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER, f, u, a, 0, s) : o.framebufferTexture2D(o.FRAMEBUFFER, f, u, a, 0);
		else if (t.depthTexture.format === 1027) ke(t) ? p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER, f, u, a, 0, s) : o.framebufferTexture2D(o.FRAMEBUFFER, f, u, a, 0);
		else throw Error("Unknown depthTexture format");
	}
	function xe(e) {
		let t = l.get(e), n = e.isWebGLCubeRenderTarget === !0;
		if (t.__boundDepthTexture !== e.depthTexture) {
			let n = e.depthTexture;
			if (t.__depthDisposeCallback && t.__depthDisposeCallback(), n) {
				let e = () => {
					delete t.__boundDepthTexture, delete t.__depthDisposeCallback, n.removeEventListener("dispose", e);
				};
				n.addEventListener("dispose", e), t.__depthDisposeCallback = e;
			}
			t.__boundDepthTexture = n;
		}
		if (e.depthTexture && !t.__autoAllocateDepthBuffer) if (n) for (let n = 0; n < 6; n++) be(t.__webglFramebuffer[n], e, n);
		else {
			let n = e.texture.mipmaps;
			n && n.length > 0 ? be(t.__webglFramebuffer[0], e, 0) : be(t.__webglFramebuffer, e, 0);
		}
		else if (n) {
			t.__webglDepthbuffer = [];
			for (let n = 0; n < 6; n++) if (c.bindFramebuffer(o.FRAMEBUFFER, t.__webglFramebuffer[n]), t.__webglDepthbuffer[n] === void 0) t.__webglDepthbuffer[n] = o.createRenderbuffer(), ye(t.__webglDepthbuffer[n], e, !1);
			else {
				let r = e.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT, i = t.__webglDepthbuffer[n];
				o.bindRenderbuffer(o.RENDERBUFFER, i), o.framebufferRenderbuffer(o.FRAMEBUFFER, r, o.RENDERBUFFER, i);
			}
		} else {
			let n = e.texture.mipmaps;
			if (n && n.length > 0 ? c.bindFramebuffer(o.FRAMEBUFFER, t.__webglFramebuffer[0]) : c.bindFramebuffer(o.FRAMEBUFFER, t.__webglFramebuffer), t.__webglDepthbuffer === void 0) t.__webglDepthbuffer = o.createRenderbuffer(), ye(t.__webglDepthbuffer, e, !1);
			else {
				let n = e.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT, r = t.__webglDepthbuffer;
				o.bindRenderbuffer(o.RENDERBUFFER, r), o.framebufferRenderbuffer(o.FRAMEBUFFER, n, o.RENDERBUFFER, r);
			}
		}
		c.bindFramebuffer(o.FRAMEBUFFER, null);
	}
	function Se(e, t, n) {
		let r = l.get(e);
		t !== void 0 && ve(r.__webglFramebuffer, e, e.texture, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, 0), n !== void 0 && xe(e);
	}
	function Ce(e) {
		let t = e.texture, n = l.get(e), r = l.get(t);
		e.addEventListener("dispose", j);
		let i = e.textures, a = e.isWebGLCubeRenderTarget === !0, s = i.length > 1;
		if (s || (r.__webglTexture === void 0 && (r.__webglTexture = o.createTexture()), r.__version = t.version, f.memory.textures++), a) {
			n.__webglFramebuffer = [];
			for (let e = 0; e < 6; e++) if (t.mipmaps && t.mipmaps.length > 0) {
				n.__webglFramebuffer[e] = [];
				for (let r = 0; r < t.mipmaps.length; r++) n.__webglFramebuffer[e][r] = o.createFramebuffer();
			} else n.__webglFramebuffer[e] = o.createFramebuffer();
		} else {
			if (t.mipmaps && t.mipmaps.length > 0) {
				n.__webglFramebuffer = [];
				for (let e = 0; e < t.mipmaps.length; e++) n.__webglFramebuffer[e] = o.createFramebuffer();
			} else n.__webglFramebuffer = o.createFramebuffer();
			if (s) for (let e = 0, t = i.length; e < t; e++) {
				let t = l.get(i[e]);
				t.__webglTexture === void 0 && (t.__webglTexture = o.createTexture(), f.memory.textures++);
			}
			if (e.samples > 0 && ke(e) === !1) {
				n.__webglMultisampledFramebuffer = o.createFramebuffer(), n.__webglColorRenderbuffer = [], c.bindFramebuffer(o.FRAMEBUFFER, n.__webglMultisampledFramebuffer);
				for (let t = 0; t < i.length; t++) {
					let r = i[t];
					n.__webglColorRenderbuffer[t] = o.createRenderbuffer(), o.bindRenderbuffer(o.RENDERBUFFER, n.__webglColorRenderbuffer[t]);
					let a = d.convert(r.format, r.colorSpace), s = d.convert(r.type), c = D(r.internalFormat, a, s, r.normalized, r.colorSpace, e.isXRRenderTarget === !0), l = Oe(e);
					o.renderbufferStorageMultisample(o.RENDERBUFFER, l, c, e.width, e.height), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0 + t, o.RENDERBUFFER, n.__webglColorRenderbuffer[t]);
				}
				o.bindRenderbuffer(o.RENDERBUFFER, null), e.depthBuffer && (n.__webglDepthRenderbuffer = o.createRenderbuffer(), ye(n.__webglDepthRenderbuffer, e, !0)), c.bindFramebuffer(o.FRAMEBUFFER, null);
			}
		}
		if (a) {
			c.bindTexture(o.TEXTURE_CUBE_MAP, r.__webglTexture), z(o.TEXTURE_CUBE_MAP, t);
			for (let r = 0; r < 6; r++) if (t.mipmaps && t.mipmaps.length > 0) for (let i = 0; i < t.mipmaps.length; i++) ve(n.__webglFramebuffer[r][i], e, t, o.COLOR_ATTACHMENT0, o.TEXTURE_CUBE_MAP_POSITIVE_X + r, i);
			else ve(n.__webglFramebuffer[r], e, t, o.COLOR_ATTACHMENT0, o.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0);
			w(t) && T(o.TEXTURE_CUBE_MAP), c.unbindTexture();
		} else if (s) {
			for (let t = 0, r = i.length; t < r; t++) {
				let r = i[t], a = l.get(r), s = o.TEXTURE_2D;
				(e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (s = e.isWebGL3DRenderTarget ? o.TEXTURE_3D : o.TEXTURE_2D_ARRAY), c.bindTexture(s, a.__webglTexture), z(s, r), ve(n.__webglFramebuffer, e, r, o.COLOR_ATTACHMENT0 + t, s, 0), w(r) && T(s);
			}
			c.unbindTexture();
		} else {
			let i = o.TEXTURE_2D;
			if ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (i = e.isWebGL3DRenderTarget ? o.TEXTURE_3D : o.TEXTURE_2D_ARRAY), c.bindTexture(i, r.__webglTexture), z(i, t), t.mipmaps && t.mipmaps.length > 0) for (let r = 0; r < t.mipmaps.length; r++) ve(n.__webglFramebuffer[r], e, t, o.COLOR_ATTACHMENT0, i, r);
			else ve(n.__webglFramebuffer, e, t, o.COLOR_ATTACHMENT0, i, 0);
			w(t) && T(i), c.unbindTexture();
		}
		e.depthBuffer && xe(e);
	}
	function we(e) {
		let t = e.textures;
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			if (w(r)) {
				let t = E(e), n = l.get(r).__webglTexture;
				c.bindTexture(t, n), T(t), c.unbindTexture();
			}
		}
	}
	let Te = [], Ee = [];
	function De(e) {
		if (e.samples > 0) {
			if (ke(e) === !1) {
				let t = e.textures, n = e.width, r = e.height, i = o.COLOR_BUFFER_BIT, a = e.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT, s = l.get(e), u = t.length > 1;
				if (u) for (let e = 0; e < t.length; e++) c.bindFramebuffer(o.FRAMEBUFFER, s.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0 + e, o.RENDERBUFFER, null), c.bindFramebuffer(o.FRAMEBUFFER, s.__webglFramebuffer), o.framebufferTexture2D(o.DRAW_FRAMEBUFFER, o.COLOR_ATTACHMENT0 + e, o.TEXTURE_2D, null, 0);
				c.bindFramebuffer(o.READ_FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				let d = e.texture.mipmaps;
				d && d.length > 0 ? c.bindFramebuffer(o.DRAW_FRAMEBUFFER, s.__webglFramebuffer[0]) : c.bindFramebuffer(o.DRAW_FRAMEBUFFER, s.__webglFramebuffer);
				for (let c = 0; c < t.length; c++) {
					if (e.resolveDepthBuffer && (e.depthBuffer && (i |= o.DEPTH_BUFFER_BIT), e.stencilBuffer && e.resolveStencilBuffer && (i |= o.STENCIL_BUFFER_BIT)), u) {
						o.framebufferRenderbuffer(o.READ_FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.RENDERBUFFER, s.__webglColorRenderbuffer[c]);
						let e = l.get(t[c]).__webglTexture;
						o.framebufferTexture2D(o.DRAW_FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, e, 0);
					}
					o.blitFramebuffer(0, 0, n, r, 0, 0, n, r, i, o.NEAREST), m === !0 && (Te.length = 0, Ee.length = 0, Te.push(o.COLOR_ATTACHMENT0 + c), e.depthBuffer && e.resolveDepthBuffer === !1 && (Te.push(a), Ee.push(a), o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER, Ee)), o.invalidateFramebuffer(o.READ_FRAMEBUFFER, Te));
				}
				if (c.bindFramebuffer(o.READ_FRAMEBUFFER, null), c.bindFramebuffer(o.DRAW_FRAMEBUFFER, null), u) for (let e = 0; e < t.length; e++) {
					c.bindFramebuffer(o.FRAMEBUFFER, s.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0 + e, o.RENDERBUFFER, s.__webglColorRenderbuffer[e]);
					let n = l.get(t[e]).__webglTexture;
					c.bindFramebuffer(o.FRAMEBUFFER, s.__webglFramebuffer), o.framebufferTexture2D(o.DRAW_FRAMEBUFFER, o.COLOR_ATTACHMENT0 + e, o.TEXTURE_2D, n, 0);
				}
				c.bindFramebuffer(o.DRAW_FRAMEBUFFER, s.__webglMultisampledFramebuffer);
			} else if (e.depthBuffer && e.resolveDepthBuffer === !1 && m) {
				let t = e.stencilBuffer ? o.DEPTH_STENCIL_ATTACHMENT : o.DEPTH_ATTACHMENT;
				o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER, [t]);
			}
		}
	}
	function Oe(e) {
		return Math.min(u.maxSamples, e.samples);
	}
	function ke(e) {
		let t = l.get(e);
		return e.samples > 0 && s.has("WEBGL_multisampled_render_to_texture") === !0 && t.__useRenderToTexture !== !1;
	}
	function Ae(e) {
		let t = f.render.frame;
		_.get(e) !== t && (_.set(e, t), e.update());
	}
	function je(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (K.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && I("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : L("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function Me(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (h.width = e.naturalWidth || e.width, h.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (h.width = e.displayWidth, h.height = e.displayHeight) : (h.width = e.width, h.height = e.height), h;
	}
	this.allocateTextureUnit = ae, this.resetTextureUnits = re, this.getTextureUnits = ie, this.setTextureUnits = F, this.setTexture2D = se, this.setTexture2DArray = ce, this.setTexture3D = R, this.setTextureCube = le, this.rebindTextures = Se, this.setupRenderTarget = Ce, this.updateRenderTargetMipmap = we, this.updateMultisampleRenderTarget = De, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = ve, this.useMultisampledRTT = ke, this.isReversedDepthBuffer = function() {
		return c.buffers.depth.getReversed();
	};
}
function Fs(e, t) {
	function n(n, r = "") {
		let i, a = K.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) if (a === "srgb") if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
			if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
			if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
			if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
			if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
		} else return null;
		else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
			if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
			if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
			if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
			if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
		} else return null;
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
			if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
		} else return null;
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
			if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
			if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
			if (n === 37488) return i.COMPRESSED_R11_EAC;
			if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
			if (n === 37490) return i.COMPRESSED_RG11_EAC;
			if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
		} else return null;
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
			if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
			if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
			if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
			if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
			if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
			if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
			if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
			if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
			if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
			if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
			if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
			if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
			if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
			if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
		} else return null;
		if (n === 36492 || n === 36494 || n === 36495) if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
			if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
			if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
			if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
		} else return null;
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
			if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
			if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
			if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
			if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
		} else return null;
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var Is = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", Ls = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", Rs = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new hr(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new Dr({
				vertexShader: Is,
				fragmentShader: Ls,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new er(new _r(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, zs = class extends ce {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, s = "local-floor", l = 1, u = null, d = null, f = null, _ = null, v = null, y = null, b = typeof XRWebGLBinding < "u", x = new Rs(), S = {}, C = t.getContextAttributes(), w = null, T = null, E = [], D = [], O = new Ne(), k = null, A = new si();
		A.viewport = new Je();
		let ee = new si();
		ee.viewport = new Je();
		let j = [A, ee], M = new fi(), N = null, te = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = E[e];
			return t === void 0 && (t = new kt(), E[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = E[e];
			return t === void 0 && (t = new kt(), E[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = E[e];
			return t === void 0 && (t = new kt(), E[e] = t), t.getHandSpace();
		};
		function P(e) {
			let t = D.indexOf(e.inputSource);
			if (t === -1) return;
			let n = E[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, u || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function ne() {
			r.removeEventListener("select", P), r.removeEventListener("selectstart", P), r.removeEventListener("selectend", P), r.removeEventListener("squeeze", P), r.removeEventListener("squeezestart", P), r.removeEventListener("squeezeend", P), r.removeEventListener("end", ne), r.removeEventListener("inputsourceschange", re);
			for (let e = 0; e < E.length; e++) {
				let t = D[e];
				t !== null && (D[e] = null, E[e].disconnect(t));
			}
			N = null, te = null, x.reset();
			for (let e in S) delete S[e];
			e.setRenderTarget(w), v = null, _ = null, f = null, r = null, T = null, R.stop(), n.isPresenting = !1, e.setPixelRatio(k), e.setSize(O.width, O.height, !1), n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && I("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			s = e, n.isPresenting === !0 && I("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return u || a;
		}, this.setReferenceSpace = function(e) {
			u = e;
		}, this.getBaseLayer = function() {
			return _ === null ? v : _;
		}, this.getBinding = function() {
			return f === null && b && (f = new XRWebGLBinding(r, t)), f;
		}, this.getFrame = function() {
			return y;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(d) {
			if (r = d, r !== null) {
				if (w = e.getRenderTarget(), r.addEventListener("select", P), r.addEventListener("selectstart", P), r.addEventListener("selectend", P), r.addEventListener("squeeze", P), r.addEventListener("squeezestart", P), r.addEventListener("squeezeend", P), r.addEventListener("end", ne), r.addEventListener("inputsourceschange", re), C.xrCompatible !== !0 && await t.makeXRCompatible(), k = e.getPixelRatio(), e.getSize(O), b && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, s = null;
					C.depth && (s = C.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = C.stencil ? g : h, a = C.stencil ? p : c);
					let l = {
						colorFormat: t.RGBA8,
						depthFormat: s,
						scaleFactor: i
					};
					f = this.getBinding(), _ = f.createProjectionLayer(l), r.updateRenderState({ layers: [_] }), e.setPixelRatio(1), e.setSize(_.textureWidth, _.textureHeight, !1), T = new Xe(_.textureWidth, _.textureHeight, {
						format: m,
						type: o,
						depthTexture: new pr(_.textureWidth, _.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: C.stencil,
						colorSpace: e.outputColorSpace,
						samples: C.antialias ? 4 : 0,
						resolveDepthBuffer: _.ignoreDepthValues === !1,
						resolveStencilBuffer: _.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: C.antialias,
						alpha: !0,
						depth: C.depth,
						stencil: C.stencil,
						framebufferScaleFactor: i
					};
					v = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: v }), e.setPixelRatio(1), e.setSize(v.framebufferWidth, v.framebufferHeight, !1), T = new Xe(v.framebufferWidth, v.framebufferHeight, {
						format: m,
						type: o,
						colorSpace: e.outputColorSpace,
						stencilBuffer: C.stencil,
						resolveDepthBuffer: v.ignoreDepthValues === !1,
						resolveStencilBuffer: v.ignoreDepthValues === !1
					});
				}
				T.isXRRenderTarget = !0, this.setFoveation(l), u = null, a = await r.requestReferenceSpace(s), R.setContext(r), R.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return x.getDepthTexture();
		};
		function re(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = D.indexOf(n);
				r >= 0 && (D[r] = null, E[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = D.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < E.length; e++) if (e >= D.length) {
						D.push(n), r = e;
						break;
					} else if (D[e] === null) {
						D[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = E[r];
				i && i.connect(n);
			}
		}
		let ie = new V(), F = new V();
		function L(e, t, n) {
			ie.setFromMatrixPosition(t.matrixWorld), F.setFromMatrixPosition(n.matrixWorld);
			let r = ie.distanceTo(F), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
			if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
			else {
				let t = o + m, n = s + m, i = f - h, a = p + (r - h), u = c * s / n * t, d = l * s / n * t;
				e.projectionMatrix.makePerspective(i, a, u, d, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
			}
		}
		function ae(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			x.texture !== null && (x.depthNear > 0 && (t = x.depthNear), x.depthFar > 0 && (n = x.depthFar)), M.near = ee.near = A.near = t, M.far = ee.far = A.far = n, (N !== M.near || te !== M.far) && (r.updateRenderState({
				depthNear: M.near,
				depthFar: M.far
			}), N = M.near, te = M.far), M.layers.mask = e.layers.mask | 6, A.layers.mask = M.layers.mask & -5, ee.layers.mask = M.layers.mask & -3;
			let i = e.parent, a = M.cameras;
			ae(M, i);
			for (let e = 0; e < a.length; e++) ae(a[e], i);
			a.length === 2 ? L(M, A, ee) : M.projectionMatrix.copy(A.projectionMatrix), oe(e, M, i);
		};
		function oe(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = de * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return M;
		}, this.getFoveation = function() {
			if (!(_ === null && v === null)) return l;
		}, this.setFoveation = function(e) {
			l = e, _ !== null && (_.fixedFoveation = e), v !== null && v.fixedFoveation !== void 0 && (v.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return x.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return x.getMesh(M);
		}, this.getCameraTexture = function(e) {
			return S[e];
		};
		let se = null;
		function ce(t, i) {
			if (d = i.getViewerPose(u || a), y = i, d !== null) {
				let t = d.views;
				v !== null && (e.setRenderTargetFramebuffer(T, v.framebuffer), e.setRenderTarget(T));
				let i = !1;
				t.length !== M.cameras.length && (M.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (v !== null) a = v.getViewport(r);
					else {
						let t = f.getViewSubImage(_, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(T, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(T));
					}
					let o = j[n];
					o === void 0 && (o = new si(), o.layers.enable(n), o.viewport = new Je(), j[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (M.matrix.copy(o.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), i === !0 && M.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && b) {
					f = n.getBinding();
					let e = f.getDepthInformation(t[0]);
					e && e.isValid && e.texture && x.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && b) {
					e.state.unbindTexture(), f = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = S[n];
							e || (e = new hr(), S[n] = e);
							let t = f.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < E.length; e++) {
				let t = D[e], n = E[e];
				t !== null && n !== void 0 && n.update(t, i, u || a);
			}
			se && se(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), y = null;
		}
		let R = new ji();
		R.setAnimationLoop(ce), this.setAnimationLoop = function(e) {
			se = e;
		}, this.dispose = function() {};
	}
}, Bs = /*@__PURE__*/ new $e(), Vs = /*@__PURE__*/ new U();
Vs.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Hs(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, Cr(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(Bs.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(Vs), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function Us(e, t, n, r) {
	let i = {}, a = {}, o = [], s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function c(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function l(e, n) {
		let o = i[e.id];
		o === void 0 && (m(e), o = u(e), i[e.id] = o, e.addEventListener("dispose", g));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let c = t.render.frame;
		a[e.id] !== c && (f(e), a[e.id] = c);
	}
	function u(t) {
		let n = d();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function d() {
		for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
		return L("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function f(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let t = 0, n = r.length; t < n; t++) {
			let n = Array.isArray(r[t]) ? r[t] : [r[t]];
			for (let r = 0, i = n.length; r < i; r++) {
				let i = n[r];
				if (p(i, t, r, a) === !0) {
					let t = i.__offset, n = Array.isArray(i.value) ? i.value : [i.value], r = 0;
					for (let a = 0; a < n.length; a++) {
						let o = n[a], s = h(o);
						typeof o == "number" || typeof o == "boolean" ? (i.__data[0] = o, e.bufferSubData(e.UNIFORM_BUFFER, t + r, i.__data)) : o.isMatrix3 ? (i.__data[0] = o.elements[0], i.__data[1] = o.elements[1], i.__data[2] = o.elements[2], i.__data[3] = 0, i.__data[4] = o.elements[3], i.__data[5] = o.elements[4], i.__data[6] = o.elements[5], i.__data[7] = 0, i.__data[8] = o.elements[6], i.__data[9] = o.elements[7], i.__data[10] = o.elements[8], i.__data[11] = 0) : ArrayBuffer.isView(o) ? i.__data.set(new o.constructor(o.buffer, o.byteOffset, i.__data.length)) : (o.toArray(i.__data, r), r += s.storage / Float32Array.BYTES_PER_ELEMENT);
					}
					e.bufferSubData(e.UNIFORM_BUFFER, t, i.__data);
				}
			}
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function p(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return typeof i == "number" || typeof i == "boolean" ? r[a] = i : ArrayBuffer.isView(i) ? r[a] = i.slice() : r[a] = i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (ArrayBuffer.isView(i)) return !0;
			else if (e.equals(i) === !1) return e.copy(i), !0;
		}
		return !1;
	}
	function m(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
				for (let e = 0, r = i.length; e < r; e++) {
					let r = i[e], a = h(r), o = n % 16, s = o % a.boundary, c = o + s;
					n += s, c !== 0 && 16 - c < a.storage && (n += 16 - c), t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += a.storage;
				}
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function h(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? I("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (t.boundary = 16, t.storage = e.byteLength) : I("WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function g(t) {
		let n = t.target;
		n.removeEventListener("dispose", g);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function _() {
		for (let t in i) e.deleteBuffer(i[t]);
		o = [], i = {}, a = {};
	}
	return {
		bind: c,
		update: l,
		dispose: _
	};
}
var Ws = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), Gs = null;
function Ks() {
	return Gs === null && (Gs = new rr(Ws, 16, 16, v, u), Gs.name = "DFG_LUT", Gs.minFilter = i, Gs.magFilter = i, Gs.wrapS = t, Gs.wrapT = t, Gs.generateMipmaps = !1, Gs.needsUpdate = !0), Gs;
}
var qs = class {
	constructor(e = {}) {
		let { canvas: t = ne(), context: n = null, depth: r = !0, stencil: i = !1, alpha: l = !1, antialias: m = !1, premultipliedAlpha: h = !0, preserveDrawingBuffer: g = !1, powerPreference: v = "default", failIfMajorPerformanceCaveat: x = !1, reversedDepthBuffer: S = !1, outputBufferType: C = o } = e;
		this.isWebGLRenderer = !0;
		let w;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			w = n.getContextAttributes().alpha;
		} else w = l;
		let T = C, E = /* @__PURE__ */ new Set([
			b,
			y,
			_
		]), D = /* @__PURE__ */ new Set([
			o,
			c,
			s,
			p,
			d,
			f
		]), k = /* @__PURE__ */ new Uint32Array(4), A = /* @__PURE__ */ new Int32Array(4), ee = new V(), j = null, N = null, te = [], P = [], re = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let F = this, ae = !1, se = null;
		this._outputColorSpace = O;
		let ce = 0, R = 0, le = null, ue = -1, de = null, fe = new Je(), z = new Je(), pe = null, me = new Pt(0), he = 0, ge = t.width, _e = t.height, ve = 1, ye = null, be = null, xe = new Je(0, 0, ge, _e), Se = new Je(0, 0, ge, _e), Ce = !1, we = new dr(), Te = !1, Ee = !1, De = new $e(), Oe = new V(), ke = new Je(), Ae = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, je = !1;
		function Me() {
			return le === null ? ve : 1;
		}
		let B = n;
		function Ne(e, n) {
			return t.getContext(e, n);
		}
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: m,
				premultipliedAlpha: h,
				preserveDrawingBuffer: g,
				powerPreference: v,
				failIfMajorPerformanceCaveat: x
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r184"), t.addEventListener("webglcontextlost", it, !1), t.addEventListener("webglcontextrestored", at, !1), t.addEventListener("webglcontextcreationerror", ot, !1), B === null) {
				let t = "webgl2";
				if (B = Ne(t, e), B === null) throw Ne(t) ? Error("Error creating WebGL context with your selected attributes.") : Error("Error creating WebGL context.");
			}
		} catch (e) {
			throw L("WebGLRenderer: " + e.message), e;
		}
		let Pe, Fe, H, U, W, G, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Ye, Ze, Qe, et, tt;
		function nt() {
			Pe = new ua(B), Pe.init(), Qe = new Fs(B, Pe), Fe = new Bi(B, Pe, e, Qe), H = new Ns(B, Pe), Fe.reversedDepthBuffer && S && H.buffers.depth.setReversed(!0), U = new pa(B), W = new ps(), G = new Ps(B, Pe, H, W, Fe, Qe, U), Ie = new la(F), Le = new Mi(B), et = new Ri(B, Le), Re = new da(B, Le, U, et), ze = new ha(B, Re, Le, et, U), qe = new ma(B, Fe, G), We = new Vi(W), Be = new fs(F, Ie, Pe, Fe, et, We), Ve = new Hs(F, W), He = new _s(), Ue = new ws(Pe), Ke = new Li(F, Ie, H, ze, w, h), Ge = new Ms(F, ze, Fe), tt = new Us(B, U, Fe, H), Ye = new zi(B, Pe, U), Ze = new fa(B, Pe, U), U.programs = Be.programs, F.capabilities = Fe, F.extensions = Pe, F.properties = W, F.renderLists = He, F.shadowMap = Ge, F.state = H, F.info = U;
		}
		nt(), T !== 1009 && (re = new _a(T, t.width, t.height, r, i));
		let rt = new zs(F, B);
		this.xr = rt, this.getContext = function() {
			return B;
		}, this.getContextAttributes = function() {
			return B.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = Pe.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = Pe.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return ve;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (ve = e, this.setSize(ge, _e, !1));
		}, this.getSize = function(e) {
			return e.set(ge, _e);
		}, this.setSize = function(e, n, r = !0) {
			if (rt.isPresenting) {
				I("WebGLRenderer: Can't change size while VR device is presenting.");
				return;
			}
			ge = e, _e = n, t.width = Math.floor(e * ve), t.height = Math.floor(n * ve), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), re !== null && re.setSize(t.width, t.height), this.setViewport(0, 0, e, n);
		}, this.getDrawingBufferSize = function(e) {
			return e.set(ge * ve, _e * ve).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			ge = e, _e = n, ve = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (T === 1009) {
				L("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
				return;
			}
			if (e) {
				for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
					I("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
					break;
				}
			}
			re.setEffects(e || []);
		}, this.getCurrentViewport = function(e) {
			return e.copy(fe);
		}, this.getViewport = function(e) {
			return e.copy(xe);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? xe.set(e.x, e.y, e.z, e.w) : xe.set(e, t, n, r), H.viewport(fe.copy(xe).multiplyScalar(ve).round());
		}, this.getScissor = function(e) {
			return e.copy(Se);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? Se.set(e.x, e.y, e.z, e.w) : Se.set(e, t, n, r), H.scissor(z.copy(Se).multiplyScalar(ve).round());
		}, this.getScissorTest = function() {
			return Ce;
		}, this.setScissorTest = function(e) {
			H.setScissorTest(Ce = e);
		}, this.setOpaqueSort = function(e) {
			ye = e;
		}, this.setTransparentSort = function(e) {
			be = e;
		}, this.getClearColor = function(e) {
			return e.copy(Ke.getClearColor());
		}, this.setClearColor = function() {
			Ke.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return Ke.getClearAlpha();
		}, this.setClearAlpha = function() {
			Ke.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (le !== null) {
					let t = le.texture.format;
					e = E.has(t);
				}
				if (e) {
					let e = le.texture.type, t = D.has(e), n = Ke.getClearColor(), r = Ke.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (k[0] = i, k[1] = a, k[2] = o, k[3] = r, B.clearBufferuiv(B.COLOR, 0, k)) : (A[0] = i, A[1] = a, A[2] = o, A[3] = r, B.clearBufferiv(B.COLOR, 0, A));
				} else r |= B.COLOR_BUFFER_BIT;
			}
			t && (r |= B.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= B.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && B.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), se = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", it, !1), t.removeEventListener("webglcontextrestored", at, !1), t.removeEventListener("webglcontextcreationerror", ot, !1), Ke.dispose(), He.dispose(), Ue.dispose(), W.dispose(), Ie.dispose(), ze.dispose(), et.dispose(), tt.dispose(), Be.dispose(), rt.dispose(), rt.removeEventListener("sessionstart", pt), rt.removeEventListener("sessionend", mt), ht.stop();
		};
		function it(e) {
			e.preventDefault(), ie("WebGLRenderer: Context Lost."), ae = !0;
		}
		function at() {
			ie("WebGLRenderer: Context Restored."), ae = !1;
			let e = U.autoReset, t = Ge.enabled, n = Ge.autoUpdate, r = Ge.needsUpdate, i = Ge.type;
			nt(), U.autoReset = e, Ge.enabled = t, Ge.autoUpdate = n, Ge.needsUpdate = r, Ge.type = i;
		}
		function ot(e) {
			L("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function st(e) {
			let t = e.target;
			t.removeEventListener("dispose", st), ct(t);
		}
		function ct(e) {
			lt(e), W.remove(e);
		}
		function lt(e) {
			let t = W.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				Be.releaseProgram(e);
			}), e.isShaderMaterial && Be.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = Ae);
			let o = i.isMesh && i.matrixWorld.determinant() < 0, s = Tt(e, t, n, r, i);
			H.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = Re.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			et.setup(i, r, s, n, c);
			let h, g = Ye;
			if (c !== null && (h = Le.get(c), g = Ze, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (H.setLineWidth(r.wireframeLinewidth * Me()), g.setMode(B.LINES)) : g.setMode(B.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), H.setLineWidth(e * Me()), i.isLineSegments ? g.setMode(B.LINES) : i.isLineLoop ? g.setMode(B.LINE_LOOP) : g.setMode(B.LINE_STRIP);
			} else i.isPoints ? g.setMode(B.POINTS) : i.isSprite && g.setMode(B.TRIANGLES);
			if (i.isBatchedMesh) if (Pe.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
			else {
				let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? Le.get(c).bytesPerElement : 1, o = W.get(r).currentProgram.getUniforms();
				for (let r = 0; r < n; r++) o.setValue(B, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
			}
			else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function ut(e, t, n) {
			e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, xt(e, t, n), e.side = 0, e.needsUpdate = !0, xt(e, t, n), e.side = 2) : xt(e, t, n);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), N = Ue.get(n), N.init(t), P.push(N), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (N.pushLight(e), e.castShadow && N.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (N.pushLight(e), e.castShadow && N.pushShadow(e));
			}), N.setupLights();
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let t = e.material;
				if (t) if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
					let a = t[i];
					ut(a, n, e), r.add(a);
				}
				else ut(t, n, e), r.add(t);
			}), N = P.pop(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					if (r.forEach(function(e) {
						W.get(e).currentProgram.isReady() && r.delete(e);
					}), r.size === 0) {
						t(e);
						return;
					}
					setTimeout(n, 10);
				}
				Pe.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let dt = null;
		function ft(e) {
			dt && dt(e);
		}
		function pt() {
			ht.stop();
		}
		function mt() {
			ht.start();
		}
		let ht = new ji();
		ht.setAnimationLoop(ft), typeof self < "u" && ht.setContext(self), this.setAnimationLoop = function(e) {
			dt = e, rt.setAnimationLoop(e), e === null ? ht.stop() : ht.start();
		}, rt.addEventListener("sessionstart", pt), rt.addEventListener("sessionend", mt), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				L("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (ae === !0) return;
			se !== null && se.renderStart(e, t);
			let n = rt.enabled === !0 && rt.isPresenting === !0, r = re !== null && (le === null || n) && re.begin(F, le);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), rt.enabled === !0 && rt.isPresenting === !0 && (re === null || re.isCompositing() === !1) && (rt.cameraAutoUpdate === !0 && rt.updateCamera(t), t = rt.getCamera()), e.isScene === !0 && e.onBeforeRender(F, e, t, le), N = Ue.get(e, P.length), N.init(t), N.state.textureUnits = G.getTextureUnits(), P.push(N), De.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), we.setFromProjectionMatrix(De, M, t.reversedDepth), Ee = this.localClippingEnabled, Te = We.init(this.clippingPlanes, Ee), j = He.get(e, te.length), j.init(), te.push(j), rt.enabled === !0 && rt.isPresenting === !0) {
				let e = F.xr.getDepthSensingMesh();
				e !== null && gt(e, t, -Infinity, F.sortObjects);
			}
			gt(e, t, 0, F.sortObjects), j.finish(), F.sortObjects === !0 && j.sort(ye, be), je = rt.enabled === !1 || rt.isPresenting === !1 || rt.hasDepthSensing() === !1, je && Ke.addToRenderList(j, e), this.info.render.frame++, Te === !0 && We.beginShadows();
			let i = N.state.shadowsArray;
			if (Ge.render(i, e, t), Te === !0 && We.endShadows(), this.info.autoReset === !0 && this.info.reset(), (r && re.hasRenderPass()) === !1) {
				let n = j.opaque, r = j.transmissive;
				if (N.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						vt(n, r, e, a);
					}
					je && Ke.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						_t(j, e, n, n.viewport);
					}
				} else r.length > 0 && vt(n, r, e, t), je && Ke.render(e), _t(j, e, t);
			}
			le !== null && R === 0 && (G.updateMultisampleRenderTarget(le), G.updateRenderTargetMipmap(le)), r && re.end(F), e.isScene === !0 && e.onAfterRender(F, e, t), et.resetDefaultState(), ue = -1, de = null, P.pop(), P.length > 0 ? (N = P[P.length - 1], G.setTextureUnits(N.state.textureUnits), Te === !0 && We.setGlobalState(F.clippingPlanes, N.state.camera)) : N = null, te.pop(), j = te.length > 0 ? te[te.length - 1] : null, se !== null && se.renderEnd();
		};
		function gt(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLightProbeGrid) N.pushLightProbeGrid(e);
				else if (e.isLight) N.pushLight(e), e.castShadow && N.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || we.intersectsSprite(e)) {
						r && ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);
						let t = ze.update(e), i = e.material;
						i.visible && j.push(e, t, i, n, ke.z, null);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || we.intersectsObject(e))) {
					let t = ze.update(e), i = e.material;
					if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), ke.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), ke.copy(e.boundingSphere.center)), ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)), Array.isArray(i)) {
						let r = t.groups;
						for (let a = 0, o = r.length; a < o; a++) {
							let o = r[a], s = i[o.materialIndex];
							s && s.visible && j.push(e, t, s, n, ke.z, o);
						}
					} else i.visible && j.push(e, t, i, n, ke.z, null);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) gt(i[e], t, n, r);
		}
		function _t(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			N.setupLightsView(n), Te === !0 && We.setGlobalState(F.clippingPlanes, n), r && H.viewport(fe.copy(r)), i.length > 0 && yt(i, t, n), a.length > 0 && yt(a, t, n), o.length > 0 && yt(o, t, n), H.buffers.depth.setTest(!0), H.buffers.depth.setMask(!0), H.buffers.color.setMask(!0), H.setPolygonOffset(!1);
		}
		function vt(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (N.state.transmissionRenderTarget[r.id] === void 0) {
				let e = Pe.has("EXT_color_buffer_half_float") || Pe.has("EXT_color_buffer_float");
				N.state.transmissionRenderTarget[r.id] = new Xe(1, 1, {
					generateMipmaps: !0,
					type: e ? u : o,
					minFilter: a,
					samples: Math.max(4, Fe.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					colorSpace: K.workingColorSpace
				});
			}
			let s = N.state.transmissionRenderTarget[r.id], c = r.viewport || fe;
			s.setSize(c.z * F.transmissionResolutionScale, c.w * F.transmissionResolutionScale);
			let l = F.getRenderTarget(), d = F.getActiveCubeFace(), f = F.getActiveMipmapLevel();
			F.setRenderTarget(s), F.getClearColor(me), he = F.getClearAlpha(), he < 1 && F.setClearColor(16777215, .5), F.clear(), je && Ke.render(n);
			let p = F.toneMapping;
			F.toneMapping = 0;
			let m = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), N.setupLightsView(r), Te === !0 && We.setGlobalState(F.clippingPlanes, r), yt(e, n, r), G.updateMultisampleRenderTarget(s), G.updateRenderTargetMipmap(s), Pe.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, bt(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (G.updateMultisampleRenderTarget(s), G.updateRenderTargetMipmap(s));
			}
			F.setRenderTarget(l, d, f), F.setClearColor(me, he), m !== void 0 && (r.viewport = m), F.toneMapping = p;
		}
		function yt(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && bt(o, t, n, s, l, c);
			}
		}
		function bt(e, t, n, r, i, a) {
			e.onBeforeRender(F, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(F, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, F.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, F.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : F.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(F, t, n, r, i, a);
		}
		function xt(e, t, n) {
			t.isScene !== !0 && (t = Ae);
			let r = W.get(e), i = N.state.lights, a = N.state.shadowsArray, o = i.state.version, s = Be.getParameters(e, i.state, a, t, n, N.state.lightProbeGridArray), c = Be.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Ie.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", st), l = /* @__PURE__ */ new Map(), r.programs = l);
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return Ct(e, s), d;
			} else s.uniforms = Be.getUniforms(e), se !== null && e.isNodeMaterial && se.build(e, n, s), e.onBeforeCompile(s, F), d = Be.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = We.uniform), Ct(e, s), r.needsLights = Dt(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.lightProbeGrid = N.state.lightProbeGridArray.length > 0, r.currentProgram = d, r.uniformsList = null, d;
		}
		function St(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = To.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function Ct(e, t) {
			let n = W.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function wt(e, t) {
			if (e.length === 0) return null;
			if (e.length === 1) return e[0].texture === null ? null : e[0];
			ee.setFromMatrixPosition(t.matrixWorld);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				if (n.texture !== null && n.boundingBox.containsPoint(ee)) return n;
			}
			return null;
		}
		function Tt(e, t, n, r, i) {
			t.isScene !== !0 && (t = Ae), G.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = le === null ? F.outputColorSpace : le.isXRRenderTarget === !0 ? le.texture.colorSpace : K.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Ie.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
			r.toneMapped && (le === null || le.isXRRenderTarget === !0) && (h = F.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = W.get(r), y = N.state.lights;
			if (Te === !0 && (Ee === !0 || e !== de)) {
				let t = e === de && r.id === ue;
				We.setState(r, e, t);
			}
			let b = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version ? b = !0 : v.outputColorSpace === s ? i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i.colorTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i.colorTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? b = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== We.numPlanes || v.numIntersection !== We.numIntersection) ? b = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.toneMapping === h && v.morphTargetsCount === _ ? !!v.lightProbeGrid != N.state.lightProbeGridArray.length > 0 && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, v.__version = r.version);
			let x = v.currentProgram;
			b === !0 && (x = xt(r, t, i), se && r.isNodeMaterial && se.onUpdateProgram(r, x, v));
			let S = !1, C = !1, w = !1, T = x.getUniforms(), E = v.uniforms;
			if (H.useProgram(x.program) && (S = !0, C = !0, w = !0), r.id !== ue && (ue = r.id, C = !0), v.needsLights) {
				let e = wt(N.state.lightProbeGridArray, i);
				v.lightProbeGrid !== e && (v.lightProbeGrid = e, C = !0);
			}
			if (S || de !== e) {
				H.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), T.setValue(B, "projectionMatrix", e.projectionMatrix), T.setValue(B, "viewMatrix", e.matrixWorldInverse);
				let t = T.map.cameraPosition;
				t !== void 0 && t.setValue(B, Oe.setFromMatrixPosition(e.matrixWorld)), Fe.logarithmicDepthBuffer && T.setValue(B, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && T.setValue(B, "isOrthographic", e.isOrthographicCamera === !0), de !== e && (de = e, C = !0, w = !0);
			}
			if (v.needsLights && (y.state.directionalShadowMap.length > 0 && T.setValue(B, "directionalShadowMap", y.state.directionalShadowMap, G), y.state.spotShadowMap.length > 0 && T.setValue(B, "spotShadowMap", y.state.spotShadowMap, G), y.state.pointShadowMap.length > 0 && T.setValue(B, "pointShadowMap", y.state.pointShadowMap, G)), i.isSkinnedMesh) {
				T.setOptional(B, i, "bindMatrix"), T.setOptional(B, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), T.setValue(B, "boneTexture", e.boneTexture, G));
			}
			i.isBatchedMesh && (T.setOptional(B, i, "batchingTexture"), T.setValue(B, "batchingTexture", i._matricesTexture, G), T.setOptional(B, i, "batchingIdTexture"), T.setValue(B, "batchingIdTexture", i._indirectTexture, G), T.setOptional(B, i, "batchingColorTexture"), i._colorsTexture !== null && T.setValue(B, "batchingColorTexture", i._colorsTexture, G));
			let D = n.morphAttributes;
			if ((D.position !== void 0 || D.normal !== void 0 || D.color !== void 0) && qe.update(i, n, x), (C || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, T.setValue(B, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (E.envMapIntensity.value = t.environmentIntensity), E.dfgLUT !== void 0 && (E.dfgLUT.value = Ks()), C) {
				if (T.setValue(B, "toneMappingExposure", F.toneMappingExposure), v.needsLights && Et(E, w), a && r.fog === !0 && Ve.refreshFogUniforms(E, a), Ve.refreshMaterialUniforms(E, r, ve, _e, N.state.transmissionRenderTarget[e.id]), v.needsLights && v.lightProbeGrid) {
					let e = v.lightProbeGrid;
					E.probesSH.value = e.texture, E.probesMin.value.copy(e.boundingBox.min), E.probesMax.value.copy(e.boundingBox.max), E.probesResolution.value.copy(e.resolution);
				}
				To.upload(B, St(v), E, G);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (To.upload(B, St(v), E, G), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && T.setValue(B, "center", i.center), T.setValue(B, "modelViewMatrix", i.modelViewMatrix), T.setValue(B, "normalMatrix", i.normalMatrix), T.setValue(B, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					tt.update(n, x), tt.bind(n, x);
				}
			}
			return x;
		}
		function Et(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function Dt(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return ce;
		}, this.getActiveMipmapLevel = function() {
			return R;
		}, this.getRenderTarget = function() {
			return le;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = W.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), W.get(e.texture).__webglTexture = t, W.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = W.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		};
		let Ot = B.createFramebuffer();
		this.setRenderTarget = function(e, t = 0, n = 0) {
			le = e, ce = t, R = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = W.get(e);
				if (o.__useDefaultFramebuffer !== void 0) {
					H.bindFramebuffer(B.FRAMEBUFFER, o.__webglFramebuffer), fe.copy(e.viewport), z.copy(e.scissor), pe = e.scissorTest, H.viewport(fe), H.scissor(z), H.setScissorTest(pe), ue = -1;
					return;
				} else if (o.__webglFramebuffer === void 0) G.setupRenderTarget(e);
				else if (o.__hasExternalTextures) G.rebindTextures(e, W.get(e.texture).__webglTexture, W.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && W.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
						G.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = W.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && G.useMultisampledRTT(e) === !1 ? W.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, fe.copy(e.viewport), z.copy(e.scissor), pe = e.scissorTest;
			} else fe.copy(xe).multiplyScalar(ve).floor(), z.copy(Se).multiplyScalar(ve).floor(), pe = Ce;
			if (n !== 0 && (r = Ot), H.bindFramebuffer(B.FRAMEBUFFER, r) && H.drawBuffers(e, r), H.viewport(fe), H.scissor(z), H.setScissorTest(pe), i) {
				let r = W.get(e.texture);
				B.framebufferTexture2D(B.FRAMEBUFFER, B.COLOR_ATTACHMENT0, B.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = W.get(e.textures[t]);
					B.framebufferTextureLayer(B.FRAMEBUFFER, B.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = W.get(e.texture);
				B.framebufferTexture2D(B.FRAMEBUFFER, B.COLOR_ATTACHMENT0, B.TEXTURE_2D, t.__webglTexture, n);
			}
			ue = -1;
		}, this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				L("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let c = W.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				H.bindFramebuffer(B.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					if (e.textures.length > 1 && B.readBuffer(B.COLOR_ATTACHMENT0 + s), !Fe.textureFormatReadable(c)) {
						L("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (!Fe.textureTypeReadable(l)) {
						L("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && B.readPixels(t, n, r, i, Qe.convert(c), Qe.convert(l), a);
				} finally {
					let e = le === null ? null : W.get(le).__webglFramebuffer;
					H.bindFramebuffer(B.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = W.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
				H.bindFramebuffer(B.FRAMEBUFFER, c);
				let o = e.textures[s], l = o.format, u = o.type;
				if (e.textures.length > 1 && B.readBuffer(B.COLOR_ATTACHMENT0 + s), !Fe.textureFormatReadable(l)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
				if (!Fe.textureTypeReadable(u)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
				let d = B.createBuffer();
				B.bindBuffer(B.PIXEL_PACK_BUFFER, d), B.bufferData(B.PIXEL_PACK_BUFFER, a.byteLength, B.STREAM_READ), B.readPixels(t, n, r, i, Qe.convert(l), Qe.convert(u), 0);
				let f = le === null ? null : W.get(le).__webglFramebuffer;
				H.bindFramebuffer(B.FRAMEBUFFER, f);
				let p = B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE, 0);
				return B.flush(), await oe(B, p, 4), B.bindBuffer(B.PIXEL_PACK_BUFFER, d), B.getBufferSubData(B.PIXEL_PACK_BUFFER, 0, a), B.deleteBuffer(d), B.deleteSync(p), a;
			} else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			G.setTexture2D(e, 0), B.copyTexSubImage2D(B.TEXTURE_2D, n, 0, 0, o, s, i, a), H.unbindTexture();
		};
		let kt = B.createFramebuffer(), At = B.createFramebuffer();
		this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = Qe.convert(t.format), _ = Qe.convert(t.type), v;
			t.isData3DTexture ? (G.setTexture3D(t, 0), v = B.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (G.setTexture2DArray(t, 0), v = B.TEXTURE_2D_ARRAY) : (G.setTexture2D(t, 0), v = B.TEXTURE_2D), H.activeTexture(B.TEXTURE0), H.pixelStorei(B.UNPACK_FLIP_Y_WEBGL, t.flipY), H.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), H.pixelStorei(B.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = H.getParameter(B.UNPACK_ROW_LENGTH), b = H.getParameter(B.UNPACK_IMAGE_HEIGHT), x = H.getParameter(B.UNPACK_SKIP_PIXELS), S = H.getParameter(B.UNPACK_SKIP_ROWS), C = H.getParameter(B.UNPACK_SKIP_IMAGES);
			H.pixelStorei(B.UNPACK_ROW_LENGTH, h.width), H.pixelStorei(B.UNPACK_IMAGE_HEIGHT, h.height), H.pixelStorei(B.UNPACK_SKIP_PIXELS, l), H.pixelStorei(B.UNPACK_SKIP_ROWS, u), H.pixelStorei(B.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = W.get(e), r = W.get(t), h = W.get(n.__renderTarget), g = W.get(r.__renderTarget);
				H.bindFramebuffer(B.READ_FRAMEBUFFER, h.__webglFramebuffer), H.bindFramebuffer(B.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (B.framebufferTextureLayer(B.READ_FRAMEBUFFER, B.COLOR_ATTACHMENT0, W.get(e).__webglTexture, i, d + n), B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER, B.COLOR_ATTACHMENT0, W.get(t).__webglTexture, a, m + n)), B.blitFramebuffer(l, u, o, s, f, p, o, s, B.DEPTH_BUFFER_BIT, B.NEAREST);
				H.bindFramebuffer(B.READ_FRAMEBUFFER, null), H.bindFramebuffer(B.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || W.has(e)) {
				let n = W.get(e), r = W.get(t);
				H.bindFramebuffer(B.READ_FRAMEBUFFER, kt), H.bindFramebuffer(B.DRAW_FRAMEBUFFER, At);
				for (let e = 0; e < c; e++) w ? B.framebufferTextureLayer(B.READ_FRAMEBUFFER, B.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : B.framebufferTexture2D(B.READ_FRAMEBUFFER, B.COLOR_ATTACHMENT0, B.TEXTURE_2D, n.__webglTexture, i), T ? B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER, B.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : B.framebufferTexture2D(B.DRAW_FRAMEBUFFER, B.COLOR_ATTACHMENT0, B.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? B.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : B.copyTexSubImage2D(v, a, f, p, l, u, o, s) : B.blitFramebuffer(l, u, o, s, f, p, o, s, B.COLOR_BUFFER_BIT, B.NEAREST);
				H.bindFramebuffer(B.READ_FRAMEBUFFER, null), H.bindFramebuffer(B.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? B.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? B.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : B.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? B.texSubImage2D(B.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? B.compressedTexSubImage2D(B.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : B.texSubImage2D(B.TEXTURE_2D, a, f, p, o, s, g, _, h);
			H.pixelStorei(B.UNPACK_ROW_LENGTH, y), H.pixelStorei(B.UNPACK_IMAGE_HEIGHT, b), H.pixelStorei(B.UNPACK_SKIP_PIXELS, x), H.pixelStorei(B.UNPACK_SKIP_ROWS, S), H.pixelStorei(B.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps && B.generateMipmap(v), H.unbindTexture();
		}, this.initRenderTarget = function(e) {
			W.get(e).__webglFramebuffer === void 0 && G.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? G.setTextureCube(e, 0) : e.isData3DTexture ? G.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? G.setTexture2DArray(e, 0) : G.setTexture2D(e, 0), H.unbindTexture();
		}, this.resetState = function() {
			ce = 0, R = 0, le = null, H.reset(), et.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return M;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = K._getDrawingBufferColorSpace(e), t.unpackColorSpace = K._getUnpackColorSpace();
	}
}, Js = Object.defineProperty, Ys = (e, t) => {
	for (var n in t) Js(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Xs = {};
Ys(Xs, {
	ACTIONS: () => hc,
	ANIMATION_MIN_DURATION: () => oc,
	CAPTURE_EVENTS_CLASS: () => mc,
	CTRLZOOM_TIMEOUT: () => dc,
	DBLCLICK_DELAY: () => cc,
	EASINGS: () => yc,
	ICONS: () => vc,
	IDS: () => gc,
	KEY_CODES: () => _c,
	LONGTOUCH_DELAY: () => lc,
	MOVE_THRESHOLD: () => sc,
	SPHERE_RADIUS: () => fc,
	TWOFINGERSOVERLAY_DELAY: () => uc,
	VIEWER_DATA: () => pc
});
var Zs = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"40 40 432 432\"><g transform=\"rotate(0, 256, 256)\"><path fill=\"currentColor\" d=\"M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z\"/></g><!-- Created by Flatart from the Noun Project --></svg>\n", Qs = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><g fill=\"currentColor\" transform=\" translate(50, 50) rotate(45)\"><rect x=\"-5\" y=\"-65\" width=\"10\" height=\"130\"/><rect x=\"-65\" y=\"-5\" width=\"130\" height=\"10\"/></g></svg>", $s = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path fill=\"currentColor\" d=\"M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z\"/><path fill=\"currentColor\" d=\"M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z\"/><!--Created by Michael Zenaty from the Noun Project--></svg>\n", ec = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path fill=\"currentColor\" d=\"M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z\"/><!--Created by Garrett Knoll from the Noun Project--></svg>\n", tc = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path fill=\"currentColor\" d=\"M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z\"/><!--Created by Garrett Knoll from the Noun Project--></svg>\n", nc = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><path fill=\"currentColor\" d=\"M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z\"/><circle fill=\"currentColor\" cx=\"39.3\" cy=\"9.2\" r=\"8.2\"/><!--Created by Arafat Uddin from the Noun Project--></svg>\n", rc = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 10 80 80\"><g fill=\"currentColor\"><circle r=\"10\" cx=\"20\" cy=\"20\"/><circle r=\"10\" cx=\"50\" cy=\"20\"/><circle r=\"10\" cx=\"80\" cy=\"20\"/><circle r=\"10\" cx=\"20\" cy=\"50\"/><circle r=\"10\" cx=\"50\" cy=\"50\"/><circle r=\"10\" cx=\"80\" cy=\"50\"/><circle r=\"10\" cx=\"20\" cy=\"80\"/><circle r=\"10\" cx=\"50\" cy=\"80\"/><circle r=\"10\" cx=\"80\" cy=\"80\"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>\n", ic = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"currentColor\" d=\"M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z\"/><path fill=\"currentColor\" d=\"M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z\"/><!--Created by Ryan Canning from the Noun Project--></svg>\n", ac = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"currentColor\" d=\"M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z\"/><path fill=\"currentColor\" d=\"M4.006 6.746h7.459V8.73H4.006z\"/><!--Created by Ryan Canning from the Noun Project--></svg>\n", oc = 500, sc = 4, cc = 300, lc = 500, uc = 100, dc = 2e3, fc = 10, pc = "photoSphereViewer", mc = "psv--capture-event", hc = /* @__PURE__ */ ((e) => (e.ROTATE_UP = "ROTATE_UP", e.ROTATE_DOWN = "ROTATE_DOWN", e.ROTATE_RIGHT = "ROTATE_RIGHT", e.ROTATE_LEFT = "ROTATE_LEFT", e.ZOOM_IN = "ZOOM_IN", e.ZOOM_OUT = "ZOOM_OUT", e))(hc || {}), gc = {
	MENU: "menu",
	TWO_FINGERS: "twoFingers",
	CTRL_ZOOM: "ctrlZoom",
	ERROR: "error",
	DESCRIPTION: "description"
}, _c = {
	Enter: "Enter",
	Control: "Control",
	Escape: "Escape",
	Space: " ",
	PageUp: "PageUp",
	PageDown: "PageDown",
	ArrowLeft: "ArrowLeft",
	ArrowUp: "ArrowUp",
	ArrowRight: "ArrowRight",
	ArrowDown: "ArrowDown",
	Delete: "Delete",
	Plus: "+",
	Minus: "-"
}, vc = {
	arrow: Zs,
	close: Qs,
	download: $s,
	fullscreenIn: ec,
	fullscreenOut: tc,
	info: nc,
	menu: rc,
	zoomIn: ic,
	zoomOut: ac
}, yc = {
	linear: (e) => e,
	inQuad: (e) => e * e,
	outQuad: (e) => e * (2 - e),
	inOutQuad: (e) => e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e,
	inCubic: (e) => e * e * e,
	outCubic: (e) => --e * e * e + 1,
	inOutCubic: (e) => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
	inQuart: (e) => e * e * e * e,
	outQuart: (e) => 1 - --e * e * e * e,
	inOutQuart: (e) => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
	inQuint: (e) => e * e * e * e * e,
	outQuint: (e) => 1 + --e * e * e * e * e,
	inOutQuint: (e) => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e,
	inSine: (e) => 1 - Math.cos(Math.PI / 2 * e),
	outSine: (e) => Math.sin(Math.PI / 2 * e),
	inOutSine: (e) => .5 - .5 * Math.cos(Math.PI * e),
	inExpo: (e) => 2 ** (10 * (e - 1)),
	outExpo: (e) => 1 - 2 ** (-10 * e),
	inOutExpo: (e) => (e = e * 2 - 1) < 0 ? .5 * 2 ** (10 * e) : 1 - .5 * 2 ** (-10 * e),
	inCirc: (e) => 1 - Math.sqrt(1 - e * e),
	outCirc: (e) => Math.sqrt(1 - (e - 1) * (e - 1)),
	inOutCirc: (e) => (e *= 2) < 1 ? .5 - .5 * Math.sqrt(1 - e * e) : .5 + .5 * Math.sqrt(1 - (e -= 2) * e)
}, Y = {};
Ys(Y, {
	Animation: () => Tl,
	Dynamic: () => El,
	MultiDynamic: () => Dl,
	PressHandler: () => Ol,
	Slider: () => Al,
	SliderDirection: () => kl,
	addClasses: () => kc,
	angle: () => Cc,
	applyEulerInverse: () => yl,
	checkClosedShadowDom: () => Cl,
	checkStylesheet: () => xl,
	checkVersion: () => Sl,
	cleanCssPosition: () => fl,
	clone: () => qc,
	createTexture: () => _l,
	cssPositionIsOrdered: () => pl,
	dasherize: () => Uc,
	deepEqual: () => Zc,
	deepmerge: () => Kc,
	distance: () => Sc,
	exitFullscreen: () => Vc,
	firstNonNull: () => Xc,
	getAbortError: () => tl,
	getAngle: () => Tc,
	getClosest: () => Mc,
	getConfigParser: () => bl,
	getElement: () => Dc,
	getEventTarget: () => Nc,
	getMatchingTarget: () => Pc,
	getPosition: () => Fc,
	getShortestArc: () => wc,
	getStyleProperty: () => Ic,
	getTouchData: () => Lc,
	getXMPValue: () => al,
	greatArcDistance: () => Ec,
	hasParent: () => jc,
	invertResolvableBoolean: () => el,
	isAbortError: () => nl,
	isEmpty: () => Jc,
	isExtendedPosition: () => il,
	isFullscreenEnabled: () => zc,
	isNil: () => Yc,
	isPlainObject: () => Gc,
	keyPressMatch: () => Hc,
	logWarn: () => rl,
	mergePanoData: () => wl,
	parseAngle: () => gl,
	parsePoint: () => dl,
	parseSpeed: () => ml,
	removeClasses: () => Ac,
	requestFullscreen: () => Bc,
	resolveBoolean: () => $c,
	speedToDuration: () => hl,
	sum: () => xc,
	throttle: () => Wc,
	toggleClass: () => Oc,
	wrap: () => bc
});
function bc(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function xc(e) {
	return e.reduce((e, t) => e + t, 0);
}
function Sc(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function Cc(e, t) {
	return Math.atan2(t.y - e.y, t.x - e.x);
}
function wc(e, t) {
	return [
		0,
		Math.PI * 2,
		-Math.PI * 2
	].reduce((n, r) => {
		let i = t - e + r;
		return Math.abs(i) < Math.abs(n) ? i : n;
	}, Infinity);
}
function Tc(e, t) {
	return Math.acos(Math.cos(e.pitch) * Math.cos(t.pitch) * Math.cos(e.yaw - t.yaw) + Math.sin(e.pitch) * Math.sin(t.pitch));
}
function Ec([e, t], [n, r]) {
	e - n > Math.PI ? e -= 2 * Math.PI : e - n < -Math.PI && (e += 2 * Math.PI);
	let i = (n - e) * Math.cos((t + r) / 2), a = r - t;
	return Math.sqrt(i * i + a * a);
}
function Dc(e) {
	return typeof e == "string" ? e.match(/^[a-z]/i) ? document.getElementById(e) : document.querySelector(e) : e;
}
function Oc(e, t, n) {
	n === void 0 ? e.classList.toggle(t) : n ? e.classList.add(t) : n || e.classList.remove(t);
}
function kc(e, t) {
	e.classList.add(...t.split(" ").filter((e) => !!e));
}
function Ac(e, t) {
	e.classList.remove(...t.split(" ").filter((e) => !!e));
}
function jc(e, t) {
	let n = e;
	do {
		if (n === t) return !0;
		n = n.parentElement;
	} while (n);
	return !1;
}
function Mc(e, t) {
	if (!e?.matches) return null;
	let n = e;
	do {
		if (n.matches(t)) return n;
		n = n.parentElement;
	} while (n);
	return null;
}
function Nc(e) {
	return e?.composedPath()[0] || null;
}
function Pc(e, t) {
	return e ? e.composedPath().find((e) => !(e instanceof HTMLElement) && !(e instanceof SVGElement) ? !1 : e.matches(t)) : null;
}
function Fc(e) {
	let t = 0, n = 0, r = e;
	for (; r;) t += r.offsetLeft - r.scrollLeft + r.clientLeft, n += r.offsetTop - r.scrollTop + r.clientTop, r = r.offsetParent;
	return t -= window.scrollX, n -= window.scrollY, {
		x: t,
		y: n
	};
}
function Ic(e, t) {
	return window.getComputedStyle(e).getPropertyValue(t);
}
function Lc(e) {
	if (e.touches.length < 2) return null;
	let t = {
		x: e.touches[0].clientX,
		y: e.touches[0].clientY
	}, n = {
		x: e.touches[1].clientX,
		y: e.touches[1].clientY
	};
	return {
		distance: Sc(t, n),
		angle: Cc(t, n),
		center: {
			x: (t.x + n.x) / 2,
			y: (t.y + n.y) / 2
		}
	};
}
var Rc;
function zc(e, t = !1) {
	return t ? e === Rc : document.fullscreenElement === e;
}
function Bc(e, t = !1) {
	t ? (Rc = e, e.classList.add("psv-fullscreen-emulation"), document.dispatchEvent(new Event("fullscreenchange"))) : e.requestFullscreen();
}
function Vc(e = !1) {
	e ? (Rc.classList.remove("psv-fullscreen-emulation"), Rc = null, document.dispatchEvent(new Event("fullscreenchange"))) : document.exitFullscreen();
}
function Hc(e, t) {
	let n, r = !1, i = !1, a = !1, o = !1;
	return t === "+" ? n = t : t.split("+").forEach((e) => {
		switch (e) {
			case "Shift":
				r = !0;
				break;
			case "Ctrl":
				i = !0;
				break;
			case "Alt":
				a = !0;
				break;
			case "Meta":
				o = !0;
				break;
			case "Space":
				n = " ";
				break;
			case "Plus":
				n = "+";
				break;
			case "Minus":
				n = "-";
				break;
			default:
				n = e;
				break;
		}
	}), r === e.shiftKey && i === e.ctrlKey && a === e.altKey && o === e.metaKey && n === e.key;
}
function Uc(e) {
	return e.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g, (e, t) => (t > 0 ? "-" : "") + e.toLowerCase());
}
function Wc(e, t) {
	let n = !1;
	return function(...r) {
		n || (n = !0, setTimeout(() => {
			e.apply(this, r), n = !1;
		}, t));
	};
}
function Gc(e) {
	if (typeof e != "object" || !e || Object.prototype.toString.call(e) !== "[object Object]") return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function Kc(e, t) {
	let n = t;
	return (function e(t, r) {
		return Array.isArray(r) ? (!t || !Array.isArray(t) ? t = [] : t.length = 0, r.forEach((n, r) => {
			t[r] = e(null, n);
		})) : typeof r == "object" ? ((!t || Array.isArray(t)) && (t = {}), Object.keys(r).forEach((i) => {
			i !== "__proto__" && (typeof r[i] != "object" || !r[i] || !Gc(r[i]) ? t[i] = r[i] : r[i] !== n && (t[i] ? e(t[i], r[i]) : t[i] = e(null, r[i])));
		})) : t = r, t;
	})(e, t);
}
function qc(e) {
	return Kc(null, e);
}
function Jc(e) {
	return !e || Object.keys(e).length === 0 && e.constructor === Object;
}
function Yc(e) {
	return e == null;
}
function Xc(...e) {
	for (let t of e) if (!Yc(t)) return t;
	return null;
}
function Zc(e, t) {
	if (e === t) return !0;
	if (Qc(e) && Qc(t)) {
		if (Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n of Object.keys(e)) if (!Zc(e[n], t[n])) return !1;
		return !0;
	} else return !1;
}
function Qc(e) {
	return typeof e == "object" && !!e;
}
var X = class e extends Error {
	constructor(t, n) {
		super(n && n instanceof Error ? `${t}: ${n.message}` : t), this.name = "PSVError", Error.captureStackTrace?.(this, e);
	}
};
function $c(e, t) {
	Gc(e) ? (t(e.initial, !0), e.promise.then((e) => t(e, !1))) : t(e, !0);
}
function el(e) {
	return {
		initial: !e.initial,
		promise: e.promise.then((e) => !e)
	};
}
function tl() {
	let e = /* @__PURE__ */ Error("Loading was aborted.");
	return e.name = "AbortError", e;
}
function nl(e) {
	return e?.name === "AbortError";
}
function rl(e) {
	console.warn(`PhotoSphereViewer: ${e}`);
}
function il(e) {
	return !e || Array.isArray(e) ? !1 : [["textureX", "textureY"], ["yaw", "pitch"]].some(([t, n]) => e[t] !== void 0 && e[n] !== void 0);
}
function al(e, t, n = !0) {
	let r = e.match("<GPano:" + t + ">(.*)</GPano:" + t + ">");
	if (r !== null) {
		let e = n ? parseInt(r[1], 10) : parseFloat(r[1]);
		return isNaN(e) ? null : e;
	}
	if (r = e.match("GPano:" + t + "=\"(.*?)\""), r !== null) {
		let e = n ? parseInt(r[1], 10) : parseFloat(r[1]);
		return isNaN(e) ? null : e;
	}
	return null;
}
var ol = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
}, sl = [
	"left",
	"center",
	"right"
], cl = [
	"top",
	"center",
	"bottom"
], ll = [...sl, ...cl], ul = "center";
function dl(e) {
	if (!e) return {
		x: .5,
		y: .5
	};
	if (typeof e == "object") return e;
	let t = e.toLocaleLowerCase().split(" ").slice(0, 2);
	t.length === 1 && (t = ol[t[0]] ? [t[0], ul] : [t[0], t[0]]);
	let n = t[1] !== "left" && t[1] !== "right" && t[0] !== "top" && t[0] !== "bottom";
	t = t.map((e) => ol[e] || e), n || t.reverse();
	let r = t.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);
	return r ? {
		x: parseFloat(r[1]) / 100,
		y: parseFloat(r[2]) / 100
	} : {
		x: .5,
		y: .5
	};
}
function fl(e, { allowCenter: t, cssOrder: n } = {
	allowCenter: !0,
	cssOrder: !0
}) {
	return e ? (typeof e == "string" && (e = e.split(" ")), e.length === 1 && (e[0] === ul ? e = [ul, ul] : sl.indexOf(e[0]) === -1 ? cl.indexOf(e[0]) !== -1 && (e = [e[0], ul]) : e = [ul, e[0]]), e.length !== 2 || ll.indexOf(e[0]) === -1 || ll.indexOf(e[1]) === -1 ? (rl(`Unparsable position ${e}`), null) : !t && e[0] === ul && e[1] === ul ? (rl("Invalid position center center"), null) : (n && !pl(e) && (e = [e[1], e[0]]), e[1] === ul && sl.indexOf(e[0]) !== -1 && (e = [ul, e[0]]), e[0] === ul && cl.indexOf(e[1]) !== -1 && (e = [e[1], ul]), e)) : null;
}
function pl(e) {
	return cl.indexOf(e[0]) !== -1 && sl.indexOf(e[1]) !== -1;
}
function ml(e) {
	let t;
	if (typeof e == "string") {
		let n = e.toString().trim(), r = parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/, "$1")), i = n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/, "$1").trim();
		switch (i.match(/(pm|per minute)$/) && (r /= 60), i) {
			case "dpm":
			case "degrees per minute":
			case "dps":
			case "degrees per second":
				t = B.degToRad(r);
				break;
			case "rdpm":
			case "radians per minute":
			case "rdps":
			case "radians per second":
				t = r;
				break;
			case "rpm":
			case "revolutions per minute":
			case "rps":
			case "revolutions per second":
				t = r * Math.PI * 2;
				break;
			default: throw new X(`Unknown speed unit "${i}"`);
		}
	} else t = e;
	return t;
}
function hl(e, t) {
	if (typeof e != "number") {
		let n = ml(e);
		return t / Math.abs(n) * 1e3;
	} else return Math.abs(e);
}
function gl(e, t = !1, n = t) {
	let r;
	if (typeof e == "string") {
		let t = e.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);
		if (!t) throw new X(`Unknown angle "${e}"`);
		let n = parseFloat(t[1]), i = t[2];
		if (i) switch (i) {
			case "deg":
			case "degs":
				r = B.degToRad(n);
				break;
			case "rad":
			case "rads":
				r = n;
				break;
			default: throw new X(`Unknown angle unit "${i}"`);
		}
		else r = n;
	} else if (typeof e == "number" && !isNaN(e)) r = e;
	else throw new X(`Unknown angle "${e}"`);
	return r = bc(t ? r + Math.PI : r, Math.PI * 2), t ? B.clamp(r - Math.PI, -Math.PI / (n ? 2 : 1), Math.PI / (n ? 2 : 1)) : r;
}
function _l(e, t = !1) {
	let n = new qe(e);
	return n.needsUpdate = !0, n.minFilter = t ? a : i, n.generateMipmaps = t, n.anisotropy = t ? 2 : 1, n;
}
var vl = new Pe();
function yl(e, t) {
	vl.setFromEuler(t).invert(), e.applyQuaternion(vl);
}
function bl(e, t) {
	let n = function(n) {
		let r = qc({
			...e,
			...n
		}), i = {};
		for (let [n, a] of Object.entries(r)) {
			if (t && n in t) a = t[n](a, {
				rawConfig: r,
				defValue: e[n]
			});
			else if (!(n in e)) {
				rl(`Unknown option ${n}`);
				continue;
			}
			i[n] = a;
		}
		return i;
	};
	return n.defaults = e, n.parsers = t || {}, n;
}
function xl(e, t) {
	Ic(e, `--psv-${t}-loaded`) !== "true" && console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${t}/index.css" is not loaded`);
}
function Sl(e, t, n) {
	t && t !== n && console.error(`PhotoSphereViewer: @photo-sphere-viewer/${e} is in version ${t} but @photo-sphere-viewer/core is in version ${n}`);
}
function Cl(e) {
	do {
		if (e instanceof ShadowRoot && e.mode === "closed") {
			console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");
			return;
		}
		e = e.parentNode;
	} while (e);
}
function wl(e, t, n, r) {
	let i = {
		isEquirectangular: !0,
		fullWidth: Xc(n?.fullWidth, r?.fullWidth),
		fullHeight: Xc(n?.fullHeight, r?.fullHeight),
		croppedWidth: Xc(n?.croppedWidth, r?.croppedWidth, e),
		croppedHeight: Xc(n?.croppedHeight, r?.croppedHeight, t),
		croppedX: Xc(n?.croppedX, r?.croppedX),
		croppedY: Xc(n?.croppedY, r?.croppedY),
		poseHeading: Xc(n?.poseHeading, r?.poseHeading, 0),
		posePitch: Xc(n?.posePitch, r?.posePitch, 0),
		poseRoll: Xc(n?.poseRoll, r?.poseRoll, 0),
		initialHeading: r?.initialHeading,
		initialPitch: r?.initialPitch,
		initialFov: r?.initialFov
	};
	if (i.croppedWidth !== e) {
		let t = e / i.croppedWidth;
		[
			"fullWidth",
			"fullHeight",
			"croppedWidth",
			"croppedHeight",
			"croppedX",
			"croppedY"
		].forEach((e) => {
			i[e] && (i[e] = Math.round(i[e] * t));
		});
	}
	return !i.fullWidth && !i.fullHeight && (i.fullWidth = Math.max(i.croppedWidth, i.croppedHeight * 2), i.fullHeight = Math.round(i.fullWidth / 2)), i.fullWidth ||= i.fullHeight * 2, i.fullHeight ||= Math.round(i.fullWidth / 2), i.croppedX === null && (i.croppedX = Math.round((i.fullWidth - e) / 2)), i.croppedY === null && (i.croppedY = Math.round((i.fullHeight - t) / 2)), Math.abs(i.fullWidth - i.fullHeight * 2) > 1 && (rl("Invalid panoData, fullWidth should be twice fullHeight"), i.fullHeight = Math.round(i.fullWidth / 2)), i.croppedX + i.croppedWidth > i.fullWidth && (rl("Invalid panoData, croppedX + croppedWidth > fullWidth"), i.croppedX = i.fullWidth - i.croppedWidth), i.croppedY + i.croppedHeight > i.fullHeight && (rl("Invalid panoData, croppedY + croppedHeight > fullHeight"), i.croppedY = i.fullHeight - i.croppedHeight), i.croppedX < 0 && (rl("Invalid panoData, croppedX < 0"), i.croppedX = 0), i.croppedY < 0 && (rl("Invalid panoData, croppedY < 0"), i.croppedY = 0), i;
}
var Tl = class {
	constructor(e) {
		this.easing = yc.linear, this.callbacks = [], this.resolved = !1, this.cancelled = !1, this.options = e, e ? (e.easing && (this.easing = typeof e.easing == "function" ? e.easing : yc[e.easing] || yc.linear), this.delayTimeout = setTimeout(() => {
			this.delayTimeout = void 0, this.animationFrame = window.requestAnimationFrame((e) => this.__run(e));
		}, e.delay || 0)) : this.resolved = !0;
	}
	__run(e) {
		if (this.cancelled) return;
		this.start ||= e;
		let t = (e - this.start) / this.options.duration, n = {};
		if (t < 1) {
			for (let [e, r] of Object.entries(this.options.properties)) r && (n[e] = r.start + (r.end - r.start) * this.easing(t));
			this.options.onTick(n, t), this.animationFrame = window.requestAnimationFrame((e) => this.__run(e));
		} else {
			for (let [e, t] of Object.entries(this.options.properties)) t && (n[e] = t.end);
			this.options.onTick(n, 1), this.__resolve(!0), this.animationFrame = void 0;
		}
	}
	__resolve(e) {
		e ? this.resolved = !0 : this.cancelled = !0, this.callbacks.forEach((t) => t(e)), this.callbacks.length = 0;
	}
	then(e) {
		return this.resolved || this.cancelled ? Promise.resolve(this.resolved).then(e) : new Promise((e) => {
			this.callbacks.push(e);
		}).then(e);
	}
	cancel() {
		!this.cancelled && !this.resolved && (this.__resolve(!1), this.delayTimeout &&= (window.clearTimeout(this.delayTimeout), void 0), this.animationFrame &&= (window.cancelAnimationFrame(this.animationFrame), void 0));
	}
}, El = class {
	constructor(e, t) {
		if (this.fn = e, this.mode = 0, this.speed = 0, this.speedMult = 0, this.currentSpeed = 0, this.target = 0, this.__current = 0, this.min = t.min, this.max = t.max, this.wrap = t.wrap, this.current = t.defaultValue, this.wrap && this.min !== 0) throw new X("invalid config");
		this.fn && this.fn(this.current);
	}
	get current() {
		return this.__current;
	}
	set current(e) {
		this.__current = e;
	}
	setSpeed(e) {
		this.speed = e;
	}
	goto(e, t = 1) {
		this.mode = 2, this.target = this.wrap ? bc(e, this.max) : B.clamp(e, this.min, this.max), this.speedMult = t;
	}
	step(e, t = 1) {
		t === 0 ? this.setValue(this.current + e) : (this.mode !== 2 && (this.target = this.current), this.goto(this.target + e, t));
	}
	roll(e = !1, t = 1) {
		this.mode = 1, this.target = e ? -Infinity : Infinity, this.speedMult = t;
	}
	stop() {
		this.mode = 0;
	}
	setValue(e) {
		return this.target = this.wrap ? bc(e, this.max) : B.clamp(e, this.min, this.max), this.mode = 0, this.currentSpeed = 0, this.target === this.current ? !1 : (this.current = this.target, this.fn && this.fn(this.current), !0);
	}
	update(e) {
		if (this.mode === 2) {
			this.wrap && Math.abs(this.target - this.current) > this.max / 2 && (this.current = this.current < this.target ? this.current + this.max : this.current - this.max);
			let e = this.currentSpeed * this.currentSpeed / (this.speed * this.speedMult * 4);
			Math.abs(this.target - this.current) <= e && (this.mode = 0);
		}
		let t = this.mode === 0 ? 0 : this.speed * this.speedMult;
		this.target < this.current && (t = -t), this.currentSpeed < t ? this.currentSpeed = Math.min(t, this.currentSpeed + e / 1e3 * this.speed * this.speedMult * 2) : this.currentSpeed > t && (this.currentSpeed = Math.max(t, this.currentSpeed - e / 1e3 * this.speed * this.speedMult * 2));
		let n = null;
		return this.current > this.target && this.currentSpeed ? n = Math.max(this.target, this.current + this.currentSpeed * e / 1e3) : this.current < this.target && this.currentSpeed && (n = Math.min(this.target, this.current + this.currentSpeed * e / 1e3)), n !== null && (n = this.wrap ? bc(n, this.max) : B.clamp(n, this.min, this.max), n !== this.current) ? (this.current = n, this.fn && this.fn(this.current), !0) : !1;
	}
}, Dl = class {
	constructor(e, t) {
		this.fn = e, this.dynamics = t, this.fn && this.fn(this.current);
	}
	get current() {
		return Object.entries(this.dynamics).reduce((e, [t, n]) => (e[t] = n.current, e), {});
	}
	setSpeed(e) {
		for (let t of Object.values(this.dynamics)) t.setSpeed(e);
	}
	goto(e, t = 1) {
		for (let [n, r] of Object.entries(e)) this.dynamics[n].goto(r, t);
	}
	step(e, t = 1) {
		if (t === 0) this.setValue(Object.keys(e).reduce((t, n) => (t[n] = e[n] + this.dynamics[n].current, t), {}));
		else for (let [n, r] of Object.entries(e)) this.dynamics[n].step(r, t);
	}
	roll(e, t = 1) {
		for (let [n, r] of Object.entries(e)) this.dynamics[n].roll(r, t);
	}
	stop() {
		for (let e of Object.values(this.dynamics)) e.stop();
	}
	setValue(e) {
		let t = !1;
		for (let [n, r] of Object.entries(e)) t = this.dynamics[n].setValue(r) || t;
		return t && this.fn && this.fn(this.current), t;
	}
	update(e) {
		let t = !1;
		for (let n of Object.values(this.dynamics)) t = n.update(e) || t;
		return t && this.fn && this.fn(this.current), t;
	}
}, Ol = class {
	constructor(e = 200) {
		this.delay = e, this.time = 0, this.delay = e;
	}
	get pending() {
		return this.time !== 0;
	}
	down(e) {
		this.timeout &&= (clearTimeout(this.timeout), void 0), this.time = (/* @__PURE__ */ new Date()).getTime(), this.data = e;
	}
	up(e) {
		this.time && (Date.now() - this.time < this.delay ? this.timeout = setTimeout(() => {
			e(this.data), this.timeout = void 0, this.time = 0, this.data = void 0;
		}, this.delay) : (e(this.data), this.time = 0, this.data = void 0));
	}
}, kl = /* @__PURE__ */ ((e) => (e.VERTICAL = "VERTICAL", e.HORIZONTAL = "HORIZONTAL", e))(kl || {}), Al = class {
	constructor(e, t, n) {
		this.container = e, this.direction = t, this.listener = n, this.mousedown = !1, this.mouseover = !1, this.container.addEventListener("click", this), this.container.addEventListener("mousedown", this), this.container.addEventListener("mouseenter", this), this.container.addEventListener("mouseleave", this), this.container.addEventListener("touchstart", this), this.container.addEventListener("mousemove", this, !0), this.container.addEventListener("touchmove", this, !0), window.addEventListener("mouseup", this), window.addEventListener("touchend", this);
	}
	get isVertical() {
		return this.direction === "VERTICAL";
	}
	get isHorizontal() {
		return this.direction === "HORIZONTAL";
	}
	destroy() {
		window.removeEventListener("mouseup", this), window.removeEventListener("touchend", this);
	}
	handleEvent(e) {
		switch (e.type) {
			case "click":
				e.stopPropagation();
				break;
			case "mousedown":
				this.__onMouseDown(e);
				break;
			case "mouseenter":
				this.__onMouseEnter(e);
				break;
			case "mouseleave":
				this.__onMouseLeave(e);
				break;
			case "touchstart":
				this.__onTouchStart(e);
				break;
			case "mousemove":
				this.__onMouseMove(e);
				break;
			case "touchmove":
				this.__onTouchMove(e);
				break;
			case "mouseup":
				this.__onMouseUp(e);
				break;
			case "touchend":
				this.__onTouchEnd(e);
				break;
		}
	}
	__onMouseDown(e) {
		this.mousedown = !0, this.__update(e.clientX, e.clientY, !0);
	}
	__onMouseEnter(e) {
		this.mouseover = !0, this.__update(e.clientX, e.clientY, !0);
	}
	__onTouchStart(e) {
		this.mouseover = !0, this.mousedown = !0;
		let t = e.changedTouches[0];
		this.__update(t.clientX, t.clientY, !0);
	}
	__onMouseMove(e) {
		(this.mousedown || this.mouseover) && (e.stopPropagation(), this.__update(e.clientX, e.clientY, !0));
	}
	__onTouchMove(e) {
		if (this.mousedown || this.mouseover) {
			e.stopPropagation();
			let t = e.changedTouches[0];
			this.__update(t.clientX, t.clientY, !0);
		}
	}
	__onMouseUp(e) {
		this.mousedown && (this.mousedown = !1, this.__update(e.clientX, e.clientY, !1));
	}
	__onMouseLeave(e) {
		this.mouseover && (this.mouseover = !1, this.__update(e.clientX, e.clientY, !0));
	}
	__onTouchEnd(e) {
		if (this.mousedown) {
			this.mouseover = !1, this.mousedown = !1;
			let t = e.changedTouches[0];
			this.__update(t.clientX, t.clientY, !1);
		}
	}
	__update(e, t, n) {
		let r = this.container.getBoundingClientRect(), i;
		i = this.isVertical ? B.clamp((r.bottom - t) / r.height, 0, 1) : B.clamp((e - r.left) / r.width, 0, 1), this.listener({
			value: i,
			click: !n,
			mousedown: this.mousedown,
			mouseover: this.mouseover,
			cursor: {
				clientX: e,
				clientY: t
			}
		});
	}
}, Z = {};
Ys(Z, {
	BeforeAnimateEvent: () => Fl,
	BeforeRenderEvent: () => Ll,
	BeforeRotateEvent: () => zl,
	ClickEvent: () => Vl,
	ConfigChangedEvent: () => Ul,
	DoubleClickEvent: () => Gl,
	FullscreenEvent: () => ql,
	HideNotificationEvent: () => Yl,
	HideOverlayEvent: () => Zl,
	HidePanelEvent: () => $l,
	HideTooltipEvent: () => tu,
	KeypressEvent: () => ru,
	LoadProgressEvent: () => au,
	ObjectEnterEvent: () => Ru,
	ObjectEvent: () => Iu,
	ObjectHoverEvent: () => Hu,
	ObjectLeaveEvent: () => Bu,
	PanoramaErrorEvent: () => du,
	PanoramaLoadEvent: () => su,
	PanoramaLoadedEvent: () => lu,
	PositionUpdatedEvent: () => hu,
	ReadyEvent: () => yu,
	RenderEvent: () => xu,
	RollUpdatedEvent: () => _u,
	ShowNotificationEvent: () => Cu,
	ShowOverlayEvent: () => Tu,
	ShowPanelEvent: () => Du,
	ShowTooltipEvent: () => ku,
	SizeUpdatedEvent: () => ju,
	StopAllEvent: () => Nu,
	TransitionDoneEvent: () => pu,
	ViewerEvent: () => Nl,
	ZoomUpdatedEvent: () => Fu
});
var jl = class extends Event {
	constructor(e, t = !1) {
		super(e, { cancelable: t });
	}
}, Ml = class extends EventTarget {
	dispatchEvent(e) {
		return super.dispatchEvent(e);
	}
	addEventListener(e, t, n) {
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		super.removeEventListener(e, t, n);
	}
}, Nl = class extends jl {}, Pl = class e extends Nl {
	constructor(t, n) {
		super(e.type, !0), this.position = t, this.zoomLevel = n;
	}
};
Pl.type = "before-animate";
var Fl = Pl, Il = class e extends Nl {
	constructor(t, n) {
		super(e.type), this.timestamp = t, this.elapsed = n;
	}
};
Il.type = "before-render";
var Ll = Il, Rl = class e extends Nl {
	constructor(t) {
		super(e.type, !0), this.position = t;
	}
};
Rl.type = "before-rotate";
var zl = Rl, Bl = class e extends Nl {
	constructor(t) {
		super(e.type), this.data = t;
	}
};
Bl.type = "click";
var Vl = Bl, Hl = class e extends Nl {
	constructor(t) {
		super(e.type), this.options = t;
	}
	containsOptions(...e) {
		return e.some((e) => this.options.includes(e));
	}
};
Hl.type = "config-changed";
var Ul = Hl, Wl = class e extends Nl {
	constructor(t) {
		super(e.type), this.data = t;
	}
};
Wl.type = "dblclick";
var Gl = Wl, Kl = class e extends Nl {
	constructor(t) {
		super(e.type), this.fullscreenEnabled = t;
	}
};
Kl.type = "fullscreen";
var ql = Kl, Jl = class e extends Nl {
	constructor(t) {
		super(e.type), this.notificationId = t;
	}
};
Jl.type = "hide-notification";
var Yl = Jl, Xl = class e extends Nl {
	constructor(t) {
		super(e.type), this.overlayId = t;
	}
};
Xl.type = "hide-overlay";
var Zl = Xl, Ql = class e extends Nl {
	constructor(t) {
		super(e.type), this.panelId = t;
	}
};
Ql.type = "hide-panel";
var $l = Ql, eu = class e extends Nl {
	constructor(t) {
		super(e.type), this.tooltipData = t;
	}
};
eu.type = "hide-tooltip";
var tu = eu, nu = class e extends Nl {
	constructor(t, n) {
		super(e.type, !0), this.key = t, this.originalEvent = n;
	}
	matches(e) {
		return Hc(this.originalEvent, e);
	}
};
nu.type = "key-press";
var ru = nu, iu = class e extends Nl {
	constructor(t) {
		super(e.type), this.progress = t;
	}
};
iu.type = "load-progress";
var au = iu, ou = class e extends Nl {
	constructor(t) {
		super(e.type), this.panorama = t;
	}
};
ou.type = "panorama-load";
var su = ou, cu = class e extends Nl {
	constructor(t) {
		super(e.type), this.data = t;
	}
};
cu.type = "panorama-loaded";
var lu = cu, uu = class e extends Nl {
	constructor(t, n) {
		super(e.type), this.panorama = t, this.error = n;
	}
};
uu.type = "panorama-error";
var du = uu, fu = class e extends Nl {
	constructor(t) {
		super(e.type), this.completed = t;
	}
};
fu.type = "transition-done";
var pu = fu, mu = class e extends Nl {
	constructor(t) {
		super(e.type), this.position = t;
	}
};
mu.type = "position-updated";
var hu = mu, gu = class e extends Nl {
	constructor(t) {
		super(e.type), this.roll = t;
	}
};
gu.type = "roll-updated";
var _u = gu, vu = class e extends Nl {
	constructor() {
		super(e.type);
	}
};
vu.type = "ready";
var yu = vu, bu = class e extends Nl {
	constructor() {
		super(e.type);
	}
};
bu.type = "render";
var xu = bu, Su = class e extends Nl {
	constructor(t) {
		super(e.type), this.notificationId = t;
	}
};
Su.type = "show-notification";
var Cu = Su, wu = class e extends Nl {
	constructor(t) {
		super(e.type), this.overlayId = t;
	}
};
wu.type = "show-overlay";
var Tu = wu, Eu = class e extends Nl {
	constructor(t) {
		super(e.type), this.panelId = t;
	}
};
Eu.type = "show-panel";
var Du = Eu, Ou = class e extends Nl {
	constructor(t, n) {
		super(e.type), this.tooltip = t, this.tooltipData = n;
	}
};
Ou.type = "show-tooltip";
var ku = Ou, Au = class e extends Nl {
	constructor(t) {
		super(e.type), this.size = t;
	}
};
Au.type = "size-updated";
var ju = Au, Mu = class e extends Nl {
	constructor() {
		super(e.type);
	}
};
Mu.type = "stop-all";
var Nu = Mu, Pu = class e extends Nl {
	constructor(t) {
		super(e.type), this.zoomLevel = t;
	}
};
Pu.type = "zoom-updated";
var Fu = Pu, Iu = class extends Nl {
	constructor(e, t, n, r, i) {
		super(e), this.originalEvent = t, this.object = n, this.viewerPoint = r, this.userDataKey = i;
	}
}, Lu = class e extends Iu {
	constructor(t, n, r, i) {
		super(e.type, t, n, r, i);
	}
};
Lu.type = "enter-object";
var Ru = Lu, zu = class e extends Iu {
	constructor(t, n, r, i) {
		super(e.type, t, n, r, i);
	}
};
zu.type = "leave-object";
var Bu = zu, Vu = class e extends Iu {
	constructor(t, n, r, i) {
		super(e.type, t, n, r, i);
	}
};
Vu.type = "hover-object";
var Hu = Vu, Uu = class {
	constructor(e) {
		this.viewer = e;
	}
	init() {}
	destroy() {}
	supportsTransition(e) {
		return !1;
	}
	supportsPreload(e) {
		return !1;
	}
	textureCoordsToSphericalCoords(e, t) {
		throw new X("Current adapter does not support texture coordinates.");
	}
	sphericalCoordsToTextureCoords(e, t) {
		throw new X("Current adapter does not support texture coordinates.");
	}
};
Uu.supportsDownload = !1;
function Wu(e) {
	if (e) {
		for (let [, t] of [["_", e], ...Object.entries(e)]) if (t.prototype instanceof Uu) return Sl(t.id, t.VERSION, "5.14.3"), t;
	}
	return null;
}
var Gu = `${pc}_touchSupport`, Ku = {
	loaded: !1,
	pixelRatio: 1,
	isWebGLSupported: !1,
	maxTextureWidth: 0,
	isTouchEnabled: null,
	__maxCanvasWidth: null,
	isIphone: !1,
	get maxCanvasWidth() {
		return this.__maxCanvasWidth === null && (this.__maxCanvasWidth = Yu(this.maxTextureWidth)), this.__maxCanvasWidth;
	},
	load() {
		if (!this.loaded) {
			let e = qu();
			this.pixelRatio = window.devicePixelRatio || 1, this.isWebGLSupported = !!e, this.maxTextureWidth = e ? e.getParameter(e.MAX_TEXTURE_SIZE) : 0, this.isTouchEnabled = Ju(), this.isIphone = /iPhone/i.test(navigator.userAgent), this.loaded = !0;
		}
		if (!Ku.isWebGLSupported) throw new X("WebGL 2 is not supported.");
		if (Ku.maxTextureWidth === 0) throw new X("Unable to detect system capabilities");
	}
};
function qu() {
	try {
		return document.createElement("canvas").getContext("webgl2");
	} catch {
		return null;
	}
}
function Ju() {
	let e = "ontouchstart" in window || navigator.maxTouchPoints > 0;
	Gu in localStorage && (e = localStorage[Gu] === "true");
	let t = new Promise((t) => {
		let n = () => {
			window.removeEventListener("mousedown", r), window.removeEventListener("touchstart", i), clearTimeout(o);
		}, r = () => {
			n(), localStorage[Gu] = !1, t(!1);
		}, i = () => {
			n(), localStorage[Gu] = !0, t(!0);
		}, a = () => {
			n(), localStorage[Gu] = e, t(e);
		};
		window.addEventListener("mousedown", r, !1), window.addEventListener("touchstart", i, !1);
		let o = setTimeout(a, 1e4);
	});
	return {
		initial: e,
		promise: t
	};
}
function Yu(e) {
	let t = e, n = !1, r = document.createElement("canvas"), i = r.getContext("2d");
	for (r.width = 1, r.height = 1; t > 1024 && !n;) {
		let e = document.createElement("canvas"), r = e.getContext("2d");
		e.width = t, e.height = t / 2;
		try {
			r.fillStyle = "white", r.fillRect(t - 1, t / 2 - 1, 1, 1), i.drawImage(e, t - 1, t / 2 - 1, 1, 1, 0, 0, 1, 1), i.getImageData(0, 0, 1, 1).data[0] > 0 && (n = !0);
		} catch {}
		e.width = 0, e.height = 0, n || (t /= 2);
	}
	if (n) return t;
	throw new X("Unable to detect system capabilities");
}
var Xu = "varying vec3 vWorldPos;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nuniform float radius;\n\nconst float PI = 3.1415926535897932384626433832795;\n\n// Analytic edge antialiasing across one screen-space pixel at the\n// cropped-region boundary on a single axis (replaces the MSAA the standard\n// adapter gets from rasterizing arc-restricted geometry).\nfloat edgeAlpha(float coord) {\n    float dist = min(coord, 1.0 - coord);\n    return clamp(dist / fwidth(coord) + 0.5, 0.0, 1.0);\n}\n\nvoid main() {\n    // Ray-cast the true sphere from the camera through the (interpolated, on\n    // the polygon chord) world position, and use the exit-point direction for\n    // sampling. This makes the result independent of mesh tessellation even\n    // when the camera is offset from the sphere center (e.g. fisheye config).\n    vec3 rayDir = vWorldPos - cameraPosition;\n    float a = dot(rayDir, rayDir);\n    float b = dot(cameraPosition, rayDir);\n    float c = dot(cameraPosition, cameraPosition) - radius * radius;\n    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;\n    vec3 dir = (cameraPosition + t * rayDir) / radius;\n\n    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;\n    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;\n    vec2 uv = (vec2(u, v) - uvOffset) / uvScale;\n\n    float alpha = 1.0;\n    if (uvScale.x < 1.0) alpha = min(alpha, edgeAlpha(uv.x));\n    if (uvScale.y < 1.0) alpha = min(alpha, edgeAlpha(uv.y));\n    if (alpha <= 0.0) discard;\n\n    gl_FragColor = texture2D(map, uv);\n    gl_FragColor.a *= opacity * alpha;\n}\n", Zu = "varying vec3 vWorldPos;\n\nvoid main() {\n    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n", Qu = bl({
	shader: !1,
	resolution: 64,
	useXmpData: !0,
	blur: !1
}, { resolution: (e) => {
	if (!e || !B.isPowerOfTwo(e)) throw new X("EquirectangularAdapter resolution must be power of two.");
	return e;
} }), $u = class e extends Uu {
	static withConfig(t) {
		return [e, t];
	}
	constructor(e, t) {
		super(e), this.config = Qu(t), this.SPHERE_SEGMENTS = this.config.resolution, this.SPHERE_HORIZONTAL_SEGMENTS = this.SPHERE_SEGMENTS / 2;
	}
	supportsTransition() {
		return !0;
	}
	supportsPreload() {
		return !0;
	}
	textureCoordsToSphericalCoords(e, t) {
		if (Yc(e.textureX) || Yc(e.textureY)) throw new X("Texture position is missing 'textureX' or 'textureY'");
		let n = (e.textureX + t.croppedX) / t.fullWidth * Math.PI * 2, r = (e.textureY + t.croppedY) / t.fullHeight * Math.PI;
		return {
			yaw: n >= Math.PI ? n - Math.PI : n + Math.PI,
			pitch: Math.PI / 2 - r
		};
	}
	sphericalCoordsToTextureCoords(e, t) {
		let n = e.yaw / Math.PI / 2 * t.fullWidth, r = e.pitch / Math.PI * t.fullHeight, i = Math.round(e.yaw < Math.PI ? n + t.fullWidth / 2 : n - t.fullWidth / 2) - t.croppedX, a = Math.round(t.fullHeight / 2 - r) - t.croppedY;
		return (i < 0 || i > t.croppedWidth || a < 0 || a > t.croppedHeight) && (i = a = void 0), {
			textureX: i,
			textureY: a
		};
	}
	async loadTexture(e, t = !0, n, r = this.config.useXmpData) {
		if (typeof e != "string" && (typeof e != "object" || !e.path)) return Promise.reject(new X("Invalid panorama url, are you using the right adapter?"));
		let i;
		i = typeof e == "string" ? {
			path: e,
			data: n
		} : {
			data: n,
			...e
		};
		let a = await this.viewer.textureLoader.loadFile(i.path, t ? (e) => this.viewer.textureLoader.dispatchProgress(e) : null, i.path), o = r ? await this.loadXMP(a) : null, s = await this.viewer.textureLoader.blobToImage(a);
		typeof i.data == "function" && (i.data = i.data(s, o));
		let c = wl(s.width, s.height, i.data, o);
		return {
			panorama: e,
			texture: this.createEquirectangularTexture(s),
			panoData: c,
			cacheKey: i.path
		};
	}
	async loadXMP(e) {
		let t = await this.loadBlobAsString(e), n = t.indexOf("<x:xmpmeta");
		if (n === -1) return null;
		let r = t.indexOf("</x:xmpmeta>", n);
		if (r === -1) return null;
		let i = t.substring(n, r);
		return i.includes("GPano:") ? {
			fullWidth: al(i, "FullPanoWidthPixels"),
			fullHeight: al(i, "FullPanoHeightPixels"),
			croppedWidth: al(i, "CroppedAreaImageWidthPixels"),
			croppedHeight: al(i, "CroppedAreaImageHeightPixels"),
			croppedX: al(i, "CroppedAreaLeftPixels"),
			croppedY: al(i, "CroppedAreaTopPixels"),
			poseHeading: al(i, "PoseHeadingDegrees", !1),
			posePitch: al(i, "PosePitchDegrees", !1),
			poseRoll: al(i, "PoseRollDegrees", !1),
			initialHeading: al(i, "InitialViewHeadingDegrees", !1),
			initialPitch: al(i, "InitialViewPitchDegrees", !1),
			initialFov: al(i, "InitialHorizontalFOVDegrees", !1)
		} : null;
	}
	loadBlobAsString(e) {
		return new Promise((t, n) => {
			let r = new FileReader();
			r.onload = () => t(r.result), r.onerror = n, r.readAsText(e);
		});
	}
	createEquirectangularTexture(e) {
		if (this.config.blur || e.width > Ku.maxTextureWidth) {
			let t = Math.min(1, Ku.maxCanvasWidth / e.width), n = new OffscreenCanvas(Math.floor(e.width * t), Math.floor(e.height * t)), r = n.getContext("2d");
			return this.config.blur && (r.filter = `blur(${n.width / 2048}px)`), r.drawImage(e, 0, 0, n.width, n.height), _l(n);
		}
		return _l(e);
	}
	createMesh(e) {
		if (this.config.shader) return new er(new vr(fc, 32, 16).scale(-1, 1, 1), new Dr({
			uniforms: {
				map: { value: null },
				opacity: { value: 1 },
				radius: { value: fc },
				uvOffset: { value: new Ne(e.croppedX / e.fullWidth, (e.fullHeight - e.croppedY - e.croppedHeight) / e.fullHeight) },
				uvScale: { value: new Ne(e.croppedWidth / e.fullWidth, e.croppedHeight / e.fullHeight) }
			},
			vertexShader: Zu,
			fragmentShader: Xu,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		}));
		{
			let t = e.croppedX / e.fullWidth * 2 * Math.PI, n = e.croppedWidth / e.fullWidth * 2 * Math.PI, r = e.croppedY / e.fullHeight * Math.PI, i = e.croppedHeight / e.fullHeight * Math.PI;
			return new er(new vr(fc, Math.round(this.SPHERE_SEGMENTS / (2 * Math.PI) * n), Math.round(this.SPHERE_HORIZONTAL_SEGMENTS / Math.PI * i), -Math.PI / 2 + t, n, r, i).scale(-1, 1, 1), new Hn({
				depthTest: !1,
				depthWrite: !1
			}));
		}
	}
	setTexture(e, t) {
		this.config.shader ? e.material.uniforms.map.value = t.texture : e.material.map = t.texture;
	}
	setTextureOpacity(e, t) {
		this.config.shader ? e.material.uniforms.opacity.value = t : (e.material.opacity = t, e.material.transparent = t < 1);
	}
	disposeTexture({ texture: e }) {
		e.dispose();
	}
	disposeMesh(e) {
		e.geometry.dispose(), e.material.dispose();
	}
};
$u.id = "equirectangular", $u.VERSION = "5.14.3", $u.supportsDownload = !0;
var ed = $u, td = class e extends ed {
	static withConfig(t) {
		return [e, t];
	}
	constructor(e, t) {
		super(e, {
			resolution: t?.resolution ?? 64,
			useXmpData: !1
		});
	}
	async loadTexture(e, t) {
		let n = await super.loadTexture(e, t, null, !1);
		return n.panoData = null, n;
	}
	createMesh() {
		let e = new vr(fc, this.SPHERE_SEGMENTS, this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1, 1, 1).toNonIndexed(), t = e.getAttribute("uv"), n = e.getAttribute("normal");
		for (let e = 0; e < t.count; e++) for (let r = 0; r < 3; r++) {
			let i = e * 3 + r, a = n.getX(i), o = n.getY(i), s = n.getZ(i), c = .947;
			if (e < t.count / 6) {
				let e = a === 0 && s === 0 ? 1 : Math.acos(o) / Math.sqrt(a * a + s * s) * (2 / Math.PI);
				t.setXY(i, c / 4 * a * e + 1 / 4, c / 2 * s * e + 1 / 2);
			} else {
				let e = a === 0 && s === 0 ? 1 : Math.acos(-o) / Math.sqrt(a * a + s * s) * (2 / Math.PI);
				t.setXY(i, -a * (c / 4) * e + 3 / 4, c / 2 * s * e + 1 / 2);
			}
		}
		return e.rotateX(-Math.PI / 2), e.rotateY(Math.PI), new er(e, new Hn({
			depthTest: !1,
			depthWrite: !1
		}));
	}
};
td.id = "dual-fisheye", td.VERSION = "5.14.3";
var nd = class e {
	constructor(t, n) {
		this.parent = t, this.children = [], this.state = { visible: !0 }, this.viewer = t instanceof e ? t.viewer : t, this.container = document.createElement(n.tagName ?? "div"), this.container.className = n.className || "", this.parent.children.push(this), this.parent.container.appendChild(this.container);
	}
	destroy() {
		this.parent.container.removeChild(this.container);
		let e = this.parent.children.indexOf(this);
		e !== -1 && this.parent.children.splice(e, 1), this.children.slice().forEach((e) => e.destroy()), this.children.length = 0;
	}
	toggle(e = !this.isVisible()) {
		e ? this.show() : this.hide();
	}
	hide(e) {
		this.container.style.display = "none", this.state.visible = !1;
	}
	show(e) {
		this.container.style.display = "", this.state.visible = !0;
	}
	isVisible() {
		return this.state.visible;
	}
}, rd = bl({
	id: null,
	tagName: null,
	className: null,
	title: null,
	hoverScale: !1,
	collapsable: !1,
	tabbable: !0,
	icon: null,
	iconActive: null
}), id = class extends nd {
	constructor(e, t) {
		super(e, {
			tagName: t.tagName,
			className: `psv-button ${t.hoverScale ? "psv-button--hover-scale" : ""} ${t.className || ""}`
		}), this.state = {
			visible: !0,
			enabled: !0,
			supported: !0,
			collapsed: !1,
			active: !1,
			width: 0
		}, this.config = rd(t), t.id || (this.config.id = this.constructor.id), t.icon && this.__setIcon(t.icon), this.state.width = this.container.offsetWidth, this.config.title ? this.container.title = this.viewer.config.lang[this.config.title] ?? this.config.title : this.id && this.id in this.viewer.config.lang && (this.container.title = this.viewer.config.lang[this.id]), t.tabbable && (this.container.tabIndex = 0), this.container.addEventListener("click", (e) => {
			this.state.enabled && this.onClick(), e.stopPropagation();
		}), this.container.addEventListener("keydown", (e) => {
			e.key === _c.Enter && this.state.enabled && (this.onClick(), e.stopPropagation());
		});
	}
	get id() {
		return this.config.id;
	}
	get title() {
		return this.container.title;
	}
	get content() {
		return this.container.innerHTML;
	}
	get width() {
		return this.state.width;
	}
	get collapsable() {
		return this.config.collapsable;
	}
	show(e = !0) {
		this.isVisible() || (this.state.visible = !0, this.state.collapsed || (this.container.style.display = ""), e && this.viewer.navbar.autoSize());
	}
	hide(e = !0) {
		this.isVisible() && (this.state.visible = !1, this.container.style.display = "none", e && this.viewer.navbar.autoSize());
	}
	checkSupported() {
		$c(this.isSupported(), (e, t) => {
			this.state && (this.state.supported = e, t ? e || this.hide() : this.toggle(e));
		});
	}
	autoSize() {}
	isSupported() {
		return !0;
	}
	toggleActive(e = !this.state.active) {
		e !== this.state.active && (this.state.active = e, Oc(this.container, "psv-button--active", this.state.active), this.config.iconActive && this.__setIcon(this.state.active ? this.config.iconActive : this.config.icon));
	}
	disable() {
		this.container.classList.add("psv-button--disabled"), this.state.enabled = !1;
	}
	enable() {
		this.container.classList.remove("psv-button--disabled"), this.state.enabled = !0;
	}
	collapse() {
		this.state.collapsed = !0, this.container.style.display = "none";
	}
	uncollapse() {
		this.state.collapsed = !1, this.state.visible && (this.container.style.display = "");
	}
	__setIcon(e) {
		this.container.innerHTML = e, kc(this.container.querySelector("svg"), "psv-button-svg");
	}
}, ad = class extends id {
	constructor(e, t) {
		super(e, {
			id: t.id ?? `psvButton-${Math.random().toString(36).substring(2)}`,
			className: `psv-custom-button ${t.className || ""}`,
			hoverScale: !1,
			collapsable: t.collapsable !== !1,
			tabbable: t.tabbable !== !1,
			title: t.title
		}), this.customOnClick = t.onClick, t.content && (typeof t.content == "string" ? this.container.innerHTML = t.content : (this.container.classList.add("psv-custom-button--no-padding"), t.content.style.height = "100%", t.content.attachViewer?.(this.viewer), this.container.appendChild(t.content))), this.state.width = this.container.offsetWidth, t.disabled && this.disable(), t.visible === !1 && this.hide();
	}
	onClick() {
		this.customOnClick?.(this.viewer);
	}
}, od = class extends id {
	constructor(e) {
		super(e, {
			className: "psv-description-button",
			hoverScale: !0,
			collapsable: !1,
			tabbable: !0,
			icon: vc.info
		}), this.mode = 0, this.viewer.addEventListener(Yl.type, this), this.viewer.addEventListener(Cu.type, this), this.viewer.addEventListener($l.type, this), this.viewer.addEventListener(Du.type, this), this.viewer.addEventListener(Ul.type, this);
	}
	destroy() {
		this.viewer.removeEventListener(Yl.type, this), this.viewer.removeEventListener(Cu.type, this), this.viewer.removeEventListener($l.type, this), this.viewer.removeEventListener(Du.type, this), this.viewer.removeEventListener(Ul.type, this), super.destroy();
	}
	handleEvent(e) {
		if (e instanceof Ul) {
			e.containsOptions("description") && this.autoSize(!0);
			return;
		}
		if (!this.mode) return;
		let t = !1;
		e instanceof Yl ? t = this.mode === 1 : e instanceof Cu ? t = this.mode === 1 && e.notificationId !== gc.DESCRIPTION : e instanceof $l ? t = this.mode === 2 : e instanceof Du && (t = this.mode === 2 && e.panelId !== gc.DESCRIPTION), t && (this.toggleActive(!1), this.mode = 0);
	}
	onClick() {
		this.mode ? this.__close() : this.__open();
	}
	hide(e) {
		super.hide(e), this.mode && this.__close();
	}
	autoSize(e = !1) {
		if (e) {
			let e = this.viewer.navbar.getButton("caption", !1), t = e && !e.isVisible(), n = !!this.viewer.config.description;
			t || n ? this.show(!1) : this.hide(!1);
		}
	}
	__close() {
		switch (this.mode) {
			case 1:
				this.viewer.notification.hide(gc.DESCRIPTION);
				break;
			case 2:
				this.viewer.panel.hide(gc.DESCRIPTION);
				break;
			default:
		}
	}
	__open() {
		this.toggleActive(!0), this.viewer.config.description ? (this.mode = 2, this.viewer.panel.show({
			id: gc.DESCRIPTION,
			content: `${this.viewer.config.caption ? `<p>${this.viewer.config.caption}</p>` : ""}${this.viewer.config.description}`
		})) : (this.mode = 1, this.viewer.notification.show({
			id: gc.DESCRIPTION,
			content: this.viewer.config.caption
		}));
	}
};
od.id = "description";
var sd = class extends id {
	constructor(e) {
		super(e, {
			tagName: "a",
			className: "psv-download-button",
			hoverScale: !0,
			collapsable: !0,
			tabbable: !0,
			icon: vc.download
		}), this.viewer.addEventListener(Ul.type, this), this.viewer.addEventListener(lu.type, this);
	}
	destroy() {
		this.viewer.removeEventListener(Ul.type, this), this.viewer.removeEventListener(lu.type, this), super.destroy();
	}
	handleEvent(e) {
		e instanceof Ul ? (e.containsOptions("downloadUrl") && this.checkSupported(), e.containsOptions("downloadUrl", "downloadName") && this.__update()) : e instanceof lu && this.__update();
	}
	onClick() {}
	checkSupported() {
		this.viewer.adapter.constructor.supportsDownload || this.viewer.config.downloadUrl ? this.show() : this.hide();
	}
	__update() {
		let e = this.container;
		e.href = this.viewer.config.downloadUrl || this.viewer.config.panorama, e.target = "_blank", e.href.startsWith("data:") && !this.viewer.config.downloadName ? e.download = "panorama." + e.href.substring(0, e.href.indexOf(";")).split("/").pop() : e.download = this.viewer.config.downloadName || e.href.split("/").pop();
	}
};
sd.id = "download";
var cd = class extends id {
	constructor(e) {
		super(e, {
			className: "psv-fullscreen-button",
			hoverScale: !0,
			collapsable: !1,
			tabbable: !0,
			icon: vc.fullscreenIn,
			iconActive: vc.fullscreenOut
		}), this.viewer.addEventListener(ql.type, this);
	}
	destroy() {
		this.viewer.removeEventListener(ql.type, this), super.destroy();
	}
	handleEvent(e) {
		e instanceof ql && this.toggleActive(e.fullscreenEnabled);
	}
	onClick() {
		this.viewer.toggleFullscreen();
	}
};
cd.id = "fullscreen";
var ld = "psvButton", ud = (e, t) => `
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${vc.menu} ${t}</h1>
  <ul class="psv-panel-menu-list">
    ${e.map((e) => `
    <li data-psv-button="${e.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${e.content}</span>
      <span class="psv-panel-menu-item-label">${e.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`, dd = class extends id {
	constructor(e) {
		super(e, {
			className: "psv-menu-button",
			hoverScale: !0,
			collapsable: !1,
			tabbable: !0,
			icon: vc.menu
		}), this.viewer.addEventListener(Du.type, this), this.viewer.addEventListener($l.type, this), super.hide();
	}
	destroy() {
		this.viewer.removeEventListener(Du.type, this), this.viewer.removeEventListener($l.type, this), super.destroy();
	}
	handleEvent(e) {
		e instanceof Du ? this.toggleActive(e.panelId === gc.MENU) : e instanceof $l && this.toggleActive(!1);
	}
	onClick() {
		this.state.active ? this.__hideMenu() : this.__showMenu();
	}
	hide(e) {
		super.hide(e), this.__hideMenu();
	}
	show(e) {
		super.show(e), this.state.active && this.__showMenu();
	}
	__showMenu() {
		this.viewer.panel.show({
			id: gc.MENU,
			content: ud(this.viewer.navbar.collapsed, this.viewer.config.lang.menu),
			noMargin: !0,
			clickHandler: (e) => {
				let t = e ? Mc(e, ".psv-panel-menu-item") : void 0, n = t ? t.dataset[ld] : void 0;
				n && (this.viewer.navbar.getButton(n).onClick(), this.__hideMenu());
			}
		});
	}
	__hideMenu() {
		this.viewer.panel.hide(gc.MENU);
	}
};
dd.id = "menu";
function fd(e) {
	let t;
	switch (e) {
		case 0:
			t = 90;
			break;
		case 1:
			t = -90;
			break;
		case 3:
			t = 180;
			break;
		default:
			t = 0;
			break;
	}
	return vc.arrow.replace("rotate(0", `rotate(${t}`);
}
var pd = class extends id {
	constructor(e, t) {
		super(e, {
			className: "psv-move-button",
			hoverScale: !0,
			collapsable: !1,
			tabbable: !0,
			icon: fd(t)
		}), this.direction = t, this.handler = new Ol(), this.container.addEventListener("mousedown", this), this.container.addEventListener("keydown", this), this.container.addEventListener("keyup", this), this.viewer.container.addEventListener("mouseup", this), this.viewer.container.addEventListener("touchend", this);
	}
	destroy() {
		this.__onMouseUp(), this.viewer.container.removeEventListener("mouseup", this), this.viewer.container.removeEventListener("touchend", this), super.destroy();
	}
	handleEvent(e) {
		switch (e.type) {
			case "mousedown":
				this.__onMouseDown();
				break;
			case "mouseup":
				this.__onMouseUp();
				break;
			case "touchend":
				this.__onMouseUp();
				break;
			case "keydown":
				e.key === _c.Enter && this.__onMouseDown();
				break;
			case "keyup":
				e.key === _c.Enter && this.__onMouseUp();
				break;
		}
	}
	onClick() {}
	isSupported() {
		return el(Ku.isTouchEnabled);
	}
	__onMouseDown() {
		if (!this.state.enabled) return;
		let e = {};
		switch (this.direction) {
			case 0:
				e.pitch = !1;
				break;
			case 1:
				e.pitch = !0;
				break;
			case 3:
				e.yaw = !1;
				break;
			default:
				e.yaw = !0;
				break;
		}
		this.viewer.stopAll(), this.viewer.dynamics.position.roll(e), this.handler.down();
	}
	__onMouseUp() {
		this.state.enabled && this.handler.up(() => {
			this.viewer.dynamics.position.stop(), this.viewer.resetIdleTimer();
		});
	}
};
pd.groupId = "move";
var md = class extends pd {
	constructor(e) {
		super(e, 1);
	}
};
md.id = "moveDown";
var hd = class extends pd {
	constructor(e) {
		super(e, 2);
	}
};
hd.id = "moveLeft";
var gd = class extends pd {
	constructor(e) {
		super(e, 3);
	}
};
gd.id = "moveRight";
var _d = class extends pd {
	constructor(e) {
		super(e, 0);
	}
};
_d.id = "moveUp";
var vd = class extends id {
	constructor(e, t, n) {
		super(e, {
			className: "psv-zoom-button",
			hoverScale: !0,
			collapsable: !1,
			tabbable: !0,
			icon: t
		}), this.direction = n, this.handler = new Ol(), this.container.addEventListener("mousedown", this), this.container.addEventListener("keydown", this), this.container.addEventListener("keyup", this), this.viewer.container.addEventListener("mouseup", this), this.viewer.container.addEventListener("touchend", this);
	}
	destroy() {
		this.__onMouseUp(), this.viewer.container.removeEventListener("mouseup", this), this.viewer.container.removeEventListener("touchend", this), super.destroy();
	}
	handleEvent(e) {
		switch (e.type) {
			case "mousedown":
				this.__onMouseDown();
				break;
			case "mouseup":
				this.__onMouseUp();
				break;
			case "touchend":
				this.__onMouseUp();
				break;
			case "keydown":
				e.key === _c.Enter && this.__onMouseDown();
				break;
			case "keyup":
				e.key === _c.Enter && this.__onMouseUp();
				break;
		}
	}
	onClick() {}
	isSupported() {
		return el(Ku.isTouchEnabled);
	}
	__onMouseDown() {
		this.state.enabled && (this.viewer.dynamics.zoom.roll(this.direction === 1), this.handler.down());
	}
	__onMouseUp() {
		this.state.enabled && this.handler.up(() => this.viewer.dynamics.zoom.stop());
	}
};
vd.groupId = "zoom";
var yd = class extends vd {
	constructor(e) {
		super(e, vc.zoomIn, 0);
	}
};
yd.id = "zoomIn";
var bd = class extends vd {
	constructor(e) {
		super(e, vc.zoomOut, 1);
	}
};
bd.id = "zoomOut";
var xd = class extends id {
	constructor(e) {
		super(e, {
			className: "psv-zoom-range",
			hoverScale: !1,
			collapsable: !1,
			tabbable: !1
		}), this.zoomRange = document.createElement("div"), this.zoomRange.className = "psv-zoom-range-line", this.container.appendChild(this.zoomRange), this.zoomValue = document.createElement("div"), this.zoomValue.className = "psv-zoom-range-handle", this.zoomRange.appendChild(this.zoomValue), this.slider = new Al(this.container, "HORIZONTAL", (e) => this.__onSliderUpdate(e)), this.mediaMinWidth = parseInt(Ic(this.container, "max-width"), 10), this.viewer.addEventListener(Fu.type, this), this.viewer.state.ready ? this.__moveZoomValue(this.viewer.getZoomLevel()) : this.viewer.addEventListener(yu.type, this);
	}
	destroy() {
		this.slider.destroy(), this.viewer.removeEventListener(Fu.type, this), this.viewer.removeEventListener(yu.type, this), super.destroy();
	}
	handleEvent(e) {
		e instanceof Fu ? this.__moveZoomValue(e.zoomLevel) : e instanceof yu && this.__moveZoomValue(this.viewer.getZoomLevel());
	}
	onClick() {}
	isSupported() {
		return el(Ku.isTouchEnabled);
	}
	autoSize() {
		this.state.supported && (this.viewer.state.size.width <= this.mediaMinWidth && this.state.visible ? this.hide(!1) : this.viewer.state.size.width > this.mediaMinWidth && !this.state.visible && this.show(!1));
	}
	__moveZoomValue(e) {
		this.zoomValue.style.left = e / 100 * this.zoomRange.offsetWidth - this.zoomValue.offsetWidth / 2 + "px";
	}
	__onSliderUpdate(e) {
		e.mousedown && this.viewer.zoom(e.value * 100);
	}
};
xd.id = "zoomRange", xd.groupId = "zoom";
var Sd = class extends Ml {
	constructor(e) {
		super(), this.viewer = e;
	}
	init() {}
	destroy() {}
}, Cd = class extends Sd {
	constructor(e, t) {
		super(e), this.config = this.constructor.configParser(t);
	}
	setOption(e, t) {
		this.setOptions({ [e]: t });
	}
	setOptions(e) {
		let t = {
			...this.config,
			...e
		}, n = this.constructor, r = n.configParser, i = n.readonlyOptions, a = n.id;
		for (let [n, o] of Object.entries(e)) {
			if (!(n in r.defaults)) {
				rl(`${a}: Unknown option "${n}"`);
				continue;
			}
			if (i.includes(n)) {
				rl(`${a}: Option "${n}" cannot be updated`);
				continue;
			}
			n in r.parsers && (o = r.parsers[n](o, {
				rawConfig: t,
				defValue: r.defaults[n]
			})), this.config[n] = o;
		}
	}
};
Cd.readonlyOptions = [];
function wd(e) {
	if (e) {
		for (let [, t] of [["_", e], ...Object.entries(e)]) if (t.prototype instanceof Sd) return Sl(t.id, t.VERSION, "5.14.3"), t;
	}
	return null;
}
var Td = {
	panorama: null,
	container: null,
	adapter: [ed, null],
	plugins: [],
	caption: null,
	description: null,
	downloadUrl: null,
	downloadName: null,
	loadingImg: null,
	loadingTxt: "",
	size: null,
	fisheye: 0,
	minFov: 30,
	maxFov: 90,
	defaultZoomLvl: 50,
	defaultYaw: 0,
	defaultPitch: 0,
	sphereCorrection: null,
	moveSpeed: 1,
	zoomSpeed: 1,
	moveInertia: .8,
	mousewheel: !0,
	mousemove: !0,
	mousewheelCtrlKey: !1,
	touchmoveTwoFingers: !1,
	panoData: null,
	requestHeaders: null,
	canvasBackground: "#000",
	defaultTransition: {
		speed: 1500,
		rotation: !0,
		effect: "fade"
	},
	rendererParameters: {
		alpha: !0,
		antialias: !0
	},
	withCredentials: () => !1,
	navbar: [
		"zoom",
		"move",
		"download",
		"description",
		"caption",
		"fullscreen"
	],
	lang: {
		zoom: "Zoom",
		zoomOut: "Zoom out",
		zoomIn: "Zoom in",
		moveUp: "Move up",
		moveDown: "Move down",
		moveLeft: "Move left",
		moveRight: "Move right",
		description: "Description",
		download: "Download",
		fullscreen: "Fullscreen",
		loading: "Loading...",
		menu: "Menu",
		close: "Close",
		twoFingers: "Use two fingers to navigate",
		ctrlZoom: "Use ctrl + scroll to zoom the image",
		loadError: "The panorama cannot be loaded",
		webglError: "Your browser does not seem to support WebGL"
	},
	keyboard: "fullscreen",
	keyboardActions: {
		[_c.ArrowUp]: "ROTATE_UP",
		[_c.ArrowDown]: "ROTATE_DOWN",
		[_c.ArrowRight]: "ROTATE_RIGHT",
		[_c.ArrowLeft]: "ROTATE_LEFT",
		[_c.PageUp]: "ZOOM_IN",
		[_c.PageDown]: "ZOOM_OUT",
		[_c.Plus]: "ZOOM_IN",
		[_c.Minus]: "ZOOM_OUT"
	}
}, Ed = {
	panorama: "Use setPanorama method to change the panorama",
	panoData: "Use setPanorama method to change the panorama",
	container: "Cannot change viewer container",
	adapter: "Cannot change adapter",
	plugins: "Cannot change plugins"
}, Dd = {
	container: (e) => {
		if (!e) throw new X("No value given for container.");
		return e;
	},
	adapter: (e, { defValue: t }) => {
		if (e = e ? Array.isArray(e) ? [Wu(e[0]), e[1]] : [Wu(e), null] : t, !e[0]) throw new X("An undefined value was given for adapter.");
		if (!e[0].id) throw new X("Adapter has no id.");
		return e;
	},
	defaultYaw: (e) => gl(e),
	defaultPitch: (e) => gl(e, !0),
	defaultZoomLvl: (e) => B.clamp(e, 0, 100),
	minFov: (e, { rawConfig: t }) => (t.maxFov < e && (rl("maxFov cannot be lower than minFov"), e = t.maxFov), B.clamp(e, 1, 179)),
	maxFov: (e, { rawConfig: t }) => (e < t.minFov && (e = t.minFov), B.clamp(e, 1, 179)),
	moveInertia: (e, { defValue: t }) => e === !0 ? t : e === !1 ? 0 : e,
	lang: (e) => ({
		...Td.lang,
		...e
	}),
	fisheye: (e) => e === !0 ? 1 : e === !1 ? 0 : B.clamp(e, 0, 2),
	requestHeaders: (e) => e && typeof e == "object" ? () => e : typeof e == "function" ? e : null,
	withCredentials: (e) => typeof e == "boolean" ? () => e : typeof e == "function" ? e : () => !1,
	defaultTransition: (e, { defValue: t }) => e === null || e.speed === 0 ? null : {
		...t,
		...e
	},
	rendererParameters: (e, { defValue: t }) => ({
		...e,
		...t
	}),
	plugins: (e) => e.map((e, t) => {
		if (e = Array.isArray(e) ? [wd(e[0]), e[1]] : [wd(e), null], !e[0]) throw new X(`An undefined value was given for plugin ${t}.`);
		if (!e[0].id) throw new X(`Plugin ${t} has no id.`);
		return e;
	}),
	navbar: (e) => e === !1 ? null : e === !0 ? qc(Td.navbar) : typeof e == "string" ? e.split(/[ ,]/) : e
}, Od = bl(Td, Dd), kd = class extends id {
	constructor(e) {
		super(e, {
			className: "psv-caption",
			hoverScale: !1,
			collapsable: !1,
			tabbable: !0
		}), this.contentWidth = 0, this.state.width = 0, this.contentElt = document.createElement("div"), this.contentElt.className = "psv-caption-content", this.container.appendChild(this.contentElt), this.setCaption(this.viewer.config.caption);
	}
	hide() {
		this.contentElt.style.display = "none", this.state.visible = !1;
	}
	show() {
		this.contentElt.style.display = "", this.state.visible = !0;
	}
	onClick() {}
	setCaption(e) {
		this.show(), this.contentElt.innerHTML = e ?? "", this.contentElt.innerHTML ? this.contentWidth = this.contentElt.offsetWidth : this.contentWidth = 0, this.autoSize();
	}
	autoSize() {
		this.toggle(this.container.offsetWidth >= this.contentWidth), this.__refreshButton();
	}
	__refreshButton() {
		this.viewer.navbar.getButton(od.id, !1)?.autoSize(!0);
	}
};
kd.id = "caption";
var Ad = {}, jd = {};
function Md(e, t) {
	if (!e.id) throw new X("Button id is required");
	if (Ad[e.id] = e, e.groupId && (jd[e.groupId] = jd[e.groupId] || []).push(e), t) {
		let n = Td.navbar;
		switch (t) {
			case "start":
				n.unshift(e.id);
				break;
			case "end":
				n.push(e.id);
				break;
			default: {
				let [r, i] = t.split(":"), a = n.indexOf(r);
				if (!r || !i || a === -1) throw new X(`Invalid defaultPosition ${t}`);
				n.splice(a + +(i === "right"), 0, e.id);
			}
		}
	}
}
[
	bd,
	xd,
	yd,
	od,
	kd,
	sd,
	cd,
	hd,
	gd,
	_d,
	md
].forEach((e) => Md(e));
var Nd = class extends nd {
	constructor(e) {
		super(e, { className: `psv-navbar ${mc}` }), this.collapsed = [], this.state.visible = !1;
	}
	show() {
		this.viewer.container.classList.add("psv--has-navbar"), this.container.classList.add("psv-navbar--open"), this.state.visible = !0;
	}
	hide() {
		this.viewer.container.classList.remove("psv--has-navbar"), this.container.classList.remove("psv-navbar--open"), this.state.visible = !1;
	}
	setButtons(e) {
		this.children.slice().forEach((e) => e.destroy()), this.children.length = 0, e.indexOf(kd.id) !== -1 && e.indexOf(od.id) === -1 && e.splice(e.indexOf(kd.id), 0, od.id), e.forEach((e) => {
			typeof e == "object" ? new ad(this, e) : Ad[e] ? new Ad[e](this) : jd[e] ? jd[e].forEach((e) => {
				new e(this);
			}) : rl(`Unknown button ${e}`);
		}), new dd(this), this.children.forEach((e) => {
			e instanceof id && e.checkSupported();
		}), this.autoSize();
	}
	setCaption(e) {
		this.children.some((t) => t instanceof kd ? (t.setCaption(e), !0) : !1);
	}
	getButton(e, t = !0) {
		let n = this.children.find((t) => t instanceof id && t.id === e);
		return !n && t && rl(`button "${e}" not found in the navbar`), n;
	}
	focusButton(e) {
		this.isVisible() && (this.getButton(e, !1)?.container || this.container.firstElementChild)?.focus();
	}
	autoSize() {
		this.children.forEach((e) => {
			e instanceof id && e.autoSize();
		});
		let e = this.container.offsetWidth, t = 0, n = [];
		this.children.forEach((e) => {
			e.isVisible() && e instanceof id && (t += e.width, e.collapsable && n.push(e));
		}), t !== 0 && (e < t && n.length > 0 ? (n.forEach((e) => e.collapse()), this.collapsed = n, this.getButton(dd.id).show(!1)) : e >= t && this.collapsed.length > 0 && (this.collapsed.forEach((e) => e.uncollapse()), this.collapsed = [], this.getButton(dd.id).hide(!1)), this.getButton(kd.id, !1)?.autoSize());
	}
};
Gr.enabled = !1;
var Pd = {
	enabled: !0,
	maxItems: 10,
	ttl: 600,
	items: {},
	purgeInterval: null,
	init() {
		Gr.enabled &&= (rl("ThreeJS cache should be disabled"), !1), !this.purgeInterval && this.enabled && (this.purgeInterval = setInterval(() => this.purge(), 60 * 1e3));
	},
	add(e, t, n) {
		this.enabled && t && (this.items[t] = this.items[t] ?? {
			files: {},
			lastAccess: null
		}, this.items[t].files[e] = n, this.items[t].lastAccess = Date.now());
	},
	get(e, t) {
		if (this.enabled && t && this.items[t]) return this.items[t].lastAccess = Date.now(), this.items[t].files[e];
	},
	remove(e, t) {
		this.enabled && t && this.items[t] && (delete this.items[t].files[e], Object.keys(this.items[t].files).length === 0 && delete this.items[t]);
	},
	purge() {
		Object.entries(this.items).sort(([, e], [, t]) => t.lastAccess - e.lastAccess).forEach(([e, { lastAccess: t }], n) => {
			n > 0 && (Date.now() - t >= this.ttl * 1e3 || n >= this.maxItems) && delete this.items[e];
		});
	}
}, Fd = class extends nd {
	constructor(e) {
		super(e, { className: "psv-loader-container" }), this.loader = document.createElement("div"), this.loader.className = "psv-loader", this.container.appendChild(this.loader), this.size = this.loader.offsetWidth, this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.canvas.setAttribute("class", "psv-loader-canvas"), this.canvas.setAttribute("viewBox", `0 0 ${this.size} ${this.size}`), this.loader.appendChild(this.canvas), this.textColor = Ic(this.loader, "color"), this.color = Ic(this.canvas, "color"), this.border = parseInt(Ic(this.loader, "--psv-loader-border"), 10), this.thickness = parseInt(Ic(this.loader, "--psv-loader-tickness"), 10);
		let t = this.size / 2;
		this.canvas.innerHTML = `
            <circle cx="${t}" cy="${t}" r="${t}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `, this.viewer.addEventListener(Ul.type, this), this.__updateContent(), this.hide();
	}
	destroy() {
		this.viewer.removeEventListener(Ul.type, this), super.destroy();
	}
	handleEvent(e) {
		e instanceof Ul && e.containsOptions("loadingImg", "loadingTxt", "lang") && this.__updateContent();
	}
	setProgress(e) {
		this.container.classList.remove("psv-loader--undefined");
		let t = B.clamp(e, 0, 99.999) / 100 * Math.PI * 2, n = this.size / 2, r = n, i = this.thickness / 2 + this.border, a = (this.size - this.thickness) / 2 - this.border, o = Math.sin(t) * a + n, s = -Math.cos(t) * a + n, c = e > 50 ? "1" : "0";
		this.canvas.querySelector("path").setAttributeNS(null, "d", `M ${r} ${i} A ${a} ${a} 0 ${c} 1 ${o} ${s}`);
	}
	showUndefined() {
		this.show(), this.setProgress(25), this.container.classList.add("psv-loader--undefined");
	}
	__updateContent() {
		let e = this.loader.querySelector(".psv-loader-image, .psv-loader-text");
		e && this.loader.removeChild(e);
		let t;
		if (this.viewer.config.loadingImg ? (t = document.createElement("img"), t.className = "psv-loader-image", t.src = this.viewer.config.loadingImg) : this.viewer.config.loadingTxt !== null && (t = document.createElement("div"), t.className = "psv-loader-text", t.innerHTML = this.viewer.config.loadingTxt || this.viewer.config.lang.loading), t) {
			let e = Math.round(Math.sqrt(2 * (this.size / 2 - this.thickness / 2 - this.border) ** 2));
			t.style.maxWidth = e + "px", t.style.maxHeight = e + "px", this.loader.appendChild(t);
		}
	}
}, Id = class extends nd {
	constructor(e) {
		super(e, { className: "psv-notification" }), this.state = {
			visible: !1,
			contentId: null,
			timeout: null
		}, this.content = document.createElement("div"), this.content.className = "psv-notification-content", this.container.appendChild(this.content), this.content.addEventListener("click", () => this.hide());
	}
	isVisible(e) {
		return this.state.visible && (!e || !this.state.contentId || this.state.contentId === e);
	}
	toggle() {
		throw new X("Notification cannot be toggled");
	}
	show(e) {
		this.state.timeout && (clearTimeout(this.state.timeout), this.state.timeout = null), typeof e == "string" && (e = { content: e }), this.state.contentId = e.id || null, this.content.innerHTML = e.content, this.container.classList.add("psv-notification--visible"), this.state.visible = !0, this.viewer.dispatchEvent(new Cu(this.state.contentId)), e.timeout && (this.state.timeout = setTimeout(() => this.hide(this.state.contentId), e.timeout));
	}
	hide(e) {
		if (this.isVisible(e)) {
			let e = this.state.contentId;
			this.container.classList.remove("psv-notification--visible"), this.state.visible = !1, this.state.contentId = null, this.viewer.dispatchEvent(new Yl(e));
		}
	}
}, Ld = class extends nd {
	constructor(e) {
		super(e, { className: `psv-overlay ${mc}` }), this.state = {
			visible: !1,
			contentId: null,
			dismissible: !0
		}, this.image = document.createElement("div"), this.image.className = "psv-overlay-image", this.container.appendChild(this.image), this.title = document.createElement("div"), this.title.className = "psv-overlay-title", this.container.appendChild(this.title), this.text = document.createElement("div"), this.text.className = "psv-overlay-text", this.container.appendChild(this.text), this.container.addEventListener("click", this), this.viewer.addEventListener(ru.type, this), super.hide();
	}
	destroy() {
		this.viewer.removeEventListener(ru.type, this), super.destroy();
	}
	handleEvent(e) {
		e.type === "click" ? this.isVisible() && this.state.dismissible && (this.hide(), e.stopPropagation()) : e instanceof ru && this.isVisible() && this.state.dismissible && e.matches(_c.Escape) && (this.hide(), e.preventDefault());
	}
	isVisible(e) {
		return this.state.visible && (!e || !this.state.contentId || this.state.contentId === e);
	}
	toggle() {
		throw new X("Overlay cannot be toggled");
	}
	show(e) {
		typeof e == "string" && (e = { title: e }), this.state.contentId = e.id || null, this.state.dismissible = e.dismissible !== !1, this.image.innerHTML = e.image || "", this.title.innerHTML = e.title || "", this.text.innerHTML = e.text || "", super.show(), this.viewer.dispatchEvent(new Tu(this.state.contentId));
	}
	hide(e) {
		if (this.isVisible(e)) {
			let e = this.state.contentId;
			super.hide(), this.state.contentId = null, this.viewer.dispatchEvent(new Zl(e));
		}
	}
}, Rd = 200, zd = "psv-panel-content--no-interaction", Bd = class extends nd {
	constructor(e) {
		super(e, { className: `psv-panel ${mc}` }), this.state = {
			visible: !1,
			contentId: null,
			mouseX: 0,
			mouseY: 0,
			mousedown: !1,
			clickHandler: null,
			keyHandler: null,
			width: {}
		};
		let t = document.createElement("div");
		t.className = "psv-panel-resizer", this.container.appendChild(t);
		let n = document.createElement("div");
		n.className = "psv-panel-close-button", n.innerHTML = vc.close, n.title = e.config.lang.close, this.container.appendChild(n), this.content = document.createElement("div"), this.content.className = "psv-panel-content", this.container.appendChild(this.content), n.addEventListener("click", () => this.hide()), t.addEventListener("mousedown", this), t.addEventListener("touchstart", this), this.viewer.container.addEventListener("mouseup", this), this.viewer.container.addEventListener("touchend", this), this.viewer.container.addEventListener("mousemove", this), this.viewer.container.addEventListener("touchmove", this), this.viewer.addEventListener(ru.type, this);
	}
	destroy() {
		this.viewer.removeEventListener(ru.type, this), this.viewer.container.removeEventListener("mousemove", this), this.viewer.container.removeEventListener("touchmove", this), this.viewer.container.removeEventListener("mouseup", this), this.viewer.container.removeEventListener("touchend", this), super.destroy();
	}
	handleEvent(e) {
		switch (e.type) {
			case "mousedown":
				this.__onMouseDown(e);
				break;
			case "touchstart":
				this.__onTouchStart(e);
				break;
			case "mousemove":
				this.__onMouseMove(e);
				break;
			case "touchmove":
				this.__onTouchMove(e);
				break;
			case "mouseup":
				this.__onMouseUp(e);
				break;
			case "touchend":
				this.__onTouchEnd(e);
				break;
			case ru.type:
				this.__onKeyPress(e);
				break;
		}
	}
	isVisible(e) {
		return this.state.visible && (!e || !this.state.contentId || this.state.contentId === e);
	}
	toggle() {
		throw new X("Panel cannot be toggled");
	}
	show(e) {
		typeof e == "string" && (e = { content: e });
		let t = this.isVisible(e.id);
		this.state.contentId = e.id || null, this.state.visible = !0, this.state.clickHandler && (this.content.removeEventListener("click", this.state.clickHandler), this.content.removeEventListener("keydown", this.state.keyHandler), this.state.clickHandler = null, this.state.keyHandler = null), e.id && this.state.width[e.id] ? this.container.style.width = this.state.width[e.id] : e.width ? this.container.style.width = e.width : this.container.style.width = null, this.content.innerHTML = e.content, this.content.scrollTop = 0, this.container.classList.add("psv-panel--open"), Oc(this.content, "psv-panel-content--no-margin", e.noMargin === !0), e.clickHandler && (this.state.clickHandler = (t) => {
			e.clickHandler(Nc(t));
		}, this.state.keyHandler = (t) => {
			t.key === _c.Enter && e.clickHandler(Nc(t));
		}, this.content.addEventListener("click", this.state.clickHandler), this.content.addEventListener("keydown", this.state.keyHandler), t || setTimeout(() => {
			this.content.querySelector("a,button,[tabindex]")?.focus();
		}, 300)), this.viewer.dispatchEvent(new Du(this.state.contentId));
	}
	hide(e) {
		if (this.isVisible(e)) {
			let e = this.state.contentId;
			this.state.visible = !1, this.state.contentId = null, this.content.innerHTML = null, this.container.classList.remove("psv-panel--open"), this.state.clickHandler && (this.content.removeEventListener("click", this.state.clickHandler), this.content.removeEventListener("keydown", this.state.keyHandler), this.state.clickHandler = null, this.state.keyHandler = null), this.viewer.dispatchEvent(new $l(e));
		}
	}
	__onMouseDown(e) {
		e.stopPropagation(), this.__startResize(e.clientX, e.clientY);
	}
	__onTouchStart(e) {
		if (e.stopPropagation(), e.touches.length === 1) {
			let t = e.touches[0];
			this.__startResize(t.clientX, t.clientY);
		}
	}
	__onMouseUp(e) {
		this.state.mousedown && (e.stopPropagation(), this.state.mousedown = !1, this.content.classList.remove(zd));
	}
	__onTouchEnd(e) {
		this.state.mousedown && (e.stopPropagation(), e.touches.length === 0 && (this.state.mousedown = !1, this.content.classList.remove(zd)));
	}
	__onMouseMove(e) {
		this.state.mousedown && (e.stopPropagation(), this.__resize(e.clientX, e.clientY));
	}
	__onTouchMove(e) {
		if (this.state.mousedown) {
			let t = e.touches[0];
			this.__resize(t.clientX, t.clientY);
		}
	}
	__onKeyPress(e) {
		this.isVisible() && e.matches(_c.Escape) && (this.hide(), e.preventDefault());
	}
	__startResize(e, t) {
		this.state.mouseX = e, this.state.mouseY = t, this.state.mousedown = !0, this.content.classList.add(zd);
	}
	__resize(e, t) {
		let n = e, r = t, i = Math.max(Rd, this.container.offsetWidth - (n - this.state.mouseX)) + "px";
		this.state.contentId && (this.state.width[this.state.contentId] = i), this.container.style.width = i, this.state.mouseX = n, this.state.mouseY = r;
	}
}, Vd = class extends nd {
	constructor(e, t) {
		super(e, { className: "psv-tooltip" }), this.state = {
			visible: !0,
			arrow: 0,
			border: 0,
			state: 0,
			width: 0,
			height: 0,
			pos: "",
			config: null,
			data: null,
			hideTimeout: null
		}, this.content = document.createElement("div"), this.content.className = "psv-tooltip-content", this.container.appendChild(this.content), this.arrow = document.createElement("div"), this.arrow.className = "psv-tooltip-arrow", this.container.appendChild(this.arrow), this.container.addEventListener("transitionend", this), this.container.addEventListener("touchdown", (e) => e.stopPropagation()), this.container.addEventListener("mousedown", (e) => e.stopPropagation()), this.container.style.top = "-1000px", this.container.style.left = "-1000px", this.show(t);
	}
	handleEvent(e) {
		e.type === "transitionend" && this.__onTransitionEnd(e);
	}
	destroy() {
		clearTimeout(this.state.hideTimeout), delete this.state.data, super.destroy();
	}
	toggle() {
		throw new X("Tooltip cannot be toggled");
	}
	show(e) {
		if (this.state.state !== 0) throw new X("Initialized tooltip cannot be re-initialized");
		e.className && kc(this.container, e.className), e.style && Object.assign(this.container.style, e.style), this.state.state = 3, this.update(e.content, e), this.state.data = e.data, this.state.state = 1, this.viewer.dispatchEvent(new ku(this, this.state.data)), this.__waitImages();
	}
	update(e, t) {
		this.content.innerHTML = e;
		let n = this.container.getBoundingClientRect();
		this.state.width = n.right - n.left, this.state.height = n.bottom - n.top, this.state.arrow = parseInt(Ic(this.arrow, "border-top-width"), 10), this.state.border = parseInt(Ic(this.container, "border-top-left-radius"), 10), this.move(t ?? this.state.config), this.__waitImages();
	}
	move(e) {
		if (this.state.state !== 1 && this.state.state !== 3) throw new X("Uninitialized tooltip cannot be moved");
		e.box = e.box ?? this.state.config?.box ?? {
			width: 0,
			height: 0
		}, this.state.config = e;
		let t = this.container, n = this.arrow, r = {
			posClass: fl(e.position, {
				allowCenter: !1,
				cssOrder: !1
			}) || ["top", "center"],
			width: this.state.width,
			height: this.state.height,
			top: 0,
			left: 0,
			arrowTop: 0,
			arrowLeft: 0
		};
		this.__computeTooltipPosition(r, e);
		let i = null, a = null;
		if (r.top < 0 ? i = "bottom" : r.top + r.height > this.viewer.state.size.height && (i = "top"), r.left < 0 ? a = "right" : r.left + r.width > this.viewer.state.size.width && (a = "left"), a || i) {
			let t = pl(r.posClass);
			i && (r.posClass[+!t] = i), a && (r.posClass[+!!t] = a), this.__computeTooltipPosition(r, e);
		}
		t.style.top = r.top + "px", t.style.left = r.left + "px", n.style.top = r.arrowTop + "px", n.style.left = r.arrowLeft + "px";
		let o = r.posClass.join("-");
		o !== this.state.pos && (t.classList.remove(`psv-tooltip--${this.state.pos}`), this.state.pos = o, t.classList.add(`psv-tooltip--${this.state.pos}`));
	}
	hide() {
		this.container.classList.remove("psv-tooltip--visible"), this.state.state = 2, this.viewer.dispatchEvent(new tu(this.state.data));
		let e = parseFloat(Ic(this.container, "transition-duration"));
		this.state.hideTimeout = setTimeout(() => {
			this.destroy();
		}, e * 2);
	}
	__onTransitionEnd(e) {
		if (e.propertyName === "transform") switch (this.state.state) {
			case 1:
				this.container.classList.add("psv-tooltip--visible"), this.state.state = 3;
				break;
			case 2:
				this.state.state = 0, this.destroy();
				break;
			default:
		}
	}
	__computeTooltipPosition(e, t) {
		let n = this.state.arrow, r = t.top, i = e.height, a = t.left, o = e.width, s = n + this.state.border, c = t.box.width / 2 + n * 2, l = t.box.height / 2 + n * 2;
		switch (e.posClass.join("-")) {
			case "top-left":
				e.top = r - l - i, e.left = a + s - o, e.arrowTop = i, e.arrowLeft = o - s - n;
				break;
			case "top-center":
				e.top = r - l - i, e.left = a - o / 2, e.arrowTop = i, e.arrowLeft = o / 2 - n;
				break;
			case "top-right":
				e.top = r - l - i, e.left = a - s, e.arrowTop = i, e.arrowLeft = n;
				break;
			case "bottom-left":
				e.top = r + l, e.left = a + s - o, e.arrowTop = -n * 2, e.arrowLeft = o - s - n;
				break;
			case "bottom-center":
				e.top = r + l, e.left = a - o / 2, e.arrowTop = -n * 2, e.arrowLeft = o / 2 - n;
				break;
			case "bottom-right":
				e.top = r + l, e.left = a - s, e.arrowTop = -n * 2, e.arrowLeft = n;
				break;
			case "left-top":
				e.top = r + s - i, e.left = a - c - o, e.arrowTop = i - s - n, e.arrowLeft = o;
				break;
			case "center-left":
				e.top = r - i / 2, e.left = a - c - o, e.arrowTop = i / 2 - n, e.arrowLeft = o;
				break;
			case "left-bottom":
				e.top = r - s, e.left = a - c - o, e.arrowTop = n, e.arrowLeft = o;
				break;
			case "right-top":
				e.top = r + s - i, e.left = a + c, e.arrowTop = i - s - n, e.arrowLeft = -n * 2;
				break;
			case "center-right":
				e.top = r - i / 2, e.left = a + c, e.arrowTop = i / 2 - n, e.arrowLeft = -n * 2;
				break;
			case "right-bottom":
				e.top = r - s, e.left = a + c, e.arrowTop = n, e.arrowLeft = -n * 2;
				break;
		}
	}
	__waitImages() {
		let e = this.content.querySelectorAll("img");
		if (e.length > 0) {
			let t = [];
			e.forEach((e) => {
				e.complete || t.push(new Promise((t) => {
					e.onload = t, e.onerror = t;
				}));
			}), t.length && Promise.all(t).then(() => {
				if (this.state.state === 1 || this.state.state === 3) {
					let e = this.container.getBoundingClientRect();
					this.state.width = e.right - e.left, this.state.height = e.bottom - e.top, this.move(this.state.config);
				}
			});
		}
	}
}, Hd = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"15 15 70 70\"><path fill=\"currentColor\" d=\"M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z\"/><rect fill=\"currentColor\" x=\"48\" y=\"31.7\" width=\"4\" height=\"28\"/><rect fill=\"currentColor\" x=\"48\" y=\"63.2\" width=\"4\" height=\"5\"/><!--Created by Shastry from the Noun Project--></svg>\n", Ud = class {
	constructor(e) {
		this.viewer = e, this.config = e.config, this.state = e.state;
	}
	destroy() {}
}, Wd = new V(), Gd = new lt(0, 0, 0, "ZXY"), Kd = class extends Ud {
	constructor(e) {
		super(e);
	}
	fovToZoomLevel(e) {
		let t = Math.round((e - this.config.minFov) / (this.config.maxFov - this.config.minFov) * 100);
		return B.clamp(t - 2 * (t - 50), 0, 100);
	}
	zoomLevelToFov(e) {
		return this.config.maxFov + e / 100 * (this.config.minFov - this.config.maxFov);
	}
	vFovToHFov(e) {
		return B.radToDeg(2 * Math.atan(Math.tan(B.degToRad(e) / 2) * this.state.aspect));
	}
	hFovToVFov(e) {
		return B.radToDeg(2 * Math.atan(Math.tan(B.degToRad(e) / 2) / this.state.aspect));
	}
	getAnimationProperties(e, t, n) {
		let r = !Yc(t), i = !Yc(n), a = {}, o = null;
		if (r) {
			let n = this.viewer.getPosition(), r = wc(n.yaw, t.yaw);
			a.yaw = {
				start: n.yaw,
				end: n.yaw + r
			}, a.pitch = {
				start: n.pitch,
				end: t.pitch
			}, o = hl(e, Tc(n, t));
		}
		if (i) {
			let t = this.viewer.getZoomLevel(), r = Math.abs(n - t);
			a.zoom = {
				start: t,
				end: n
			}, o === null && (o = hl(e, Math.PI / 4 * r / 100));
		}
		return o = o === null ? typeof e == "number" ? e : oc : Math.max(oc, o), {
			duration: o,
			properties: a
		};
	}
	getTransitionOptions(e) {
		let t, n = this.config.defaultTransition ?? Td.defaultTransition;
		return t = e.transition === !1 || e.transition === null ? null : e.transition === !0 ? { ...n } : typeof e.transition == "object" ? {
			...n,
			...e.transition
		} : this.config.defaultTransition, t;
	}
	textureCoordsToSphericalCoords(e) {
		if (!this.state.textureData?.panoData) throw new X("Current adapter does not support texture coordinates or no texture has been loaded");
		let t = this.viewer.adapter.textureCoordsToSphericalCoords(e, this.state.textureData.panoData);
		return !Gd.equals(this.viewer.renderer.panoramaPose) || !Gd.equals(this.viewer.renderer.sphereCorrection) ? (this.sphericalCoordsToVector3(t, Wd), Wd.applyEuler(this.viewer.renderer.panoramaPose), Wd.applyEuler(this.viewer.renderer.sphereCorrection), this.vector3ToSphericalCoords(Wd)) : t;
	}
	sphericalCoordsToTextureCoords(e) {
		if (!this.state.textureData?.panoData) throw new X("Current adapter does not support texture coordinates or no texture has been loaded");
		return (!Gd.equals(this.viewer.renderer.panoramaPose) || !Gd.equals(this.viewer.renderer.sphereCorrection)) && (this.sphericalCoordsToVector3(e, Wd), yl(Wd, this.viewer.renderer.sphereCorrection), yl(Wd, this.viewer.renderer.panoramaPose), e = this.vector3ToSphericalCoords(Wd)), this.viewer.adapter.sphericalCoordsToTextureCoords(e, this.state.textureData.panoData);
	}
	sphericalCoordsToVector3(e, t, n = fc) {
		return t ||= new V(), t.x = n * -Math.cos(e.pitch) * Math.sin(e.yaw), t.y = n * Math.sin(e.pitch), t.z = n * Math.cos(e.pitch) * Math.cos(e.yaw), t;
	}
	vector3ToSphericalCoords(e) {
		let t = Math.acos(e.y / Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z)), n = Math.atan2(e.x, e.z);
		return {
			yaw: n < 0 ? -n : Math.PI * 2 - n,
			pitch: Math.PI / 2 - t
		};
	}
	viewerCoordsToVector3(e) {
		let t = this.viewer.renderer.getIntersections(e).filter((e) => e.object.userData[pc]);
		return t.length ? t[0].point : null;
	}
	viewerCoordsToSphericalCoords(e) {
		let t = this.viewerCoordsToVector3(e);
		return t ? this.vector3ToSphericalCoords(t) : null;
	}
	vector3ToViewerCoords(e) {
		let t = e.clone();
		return t.project(this.viewer.renderer.camera), {
			x: Math.round((t.x + 1) / 2 * this.state.size.width),
			y: Math.round((1 - t.y) / 2 * this.state.size.height)
		};
	}
	sphericalCoordsToViewerCoords(e) {
		return this.sphericalCoordsToVector3(e, Wd), this.vector3ToViewerCoords(Wd);
	}
	isPointVisible(e) {
		let t, n;
		if (e instanceof V) t = e, n = this.vector3ToViewerCoords(e);
		else if (il(e)) t = this.sphericalCoordsToVector3(e, Wd), n = this.vector3ToViewerCoords(t);
		else return !1;
		return t.dot(this.viewer.state.direction) > 0 && n.x >= 0 && n.x <= this.viewer.state.size.width && n.y >= 0 && n.y <= this.viewer.state.size.height;
	}
	cleanPosition(e) {
		if ("yaw" in e || "pitch" in e) {
			if (!("yaw" in e) || !("pitch" in e)) throw new X("Position is missing 'yaw' or 'pitch'");
			return {
				yaw: gl(e.yaw),
				pitch: gl(e.pitch, !0)
			};
		} else return this.textureCoordsToSphericalCoords(e);
	}
	cleanSphereCorrection(e) {
		return {
			pan: gl(e?.pan || 0),
			tilt: gl(e?.tilt || 0, !0),
			roll: gl(e?.roll || 0, !0, !1)
		};
	}
	cleanPanoramaPose(e) {
		return {
			pan: B.degToRad(e?.poseHeading || 0),
			tilt: B.degToRad(e?.posePitch || 0),
			roll: B.degToRad(e?.poseRoll || 0)
		};
	}
	cleanPanoramaOptions(e, t) {
		return t?.isEquirectangular ? (Yc(e.zoom) && !Yc(t.initialFov) && (e = {
			...e,
			zoom: this.fovToZoomLevel(this.hFovToVFov(t.initialFov))
		}), Yc(e.position) && !Yc(t.initialHeading) && !Yc(t.initialPitch) && (e = {
			...e,
			position: {
				yaw: gl(t.initialHeading),
				pitch: gl(t.initialPitch, !0)
			}
		}), e) : e;
	}
}, qd = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path fill=\"currentColor\" d=\"M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z\"/><!--Created by AomAm from the Noun Project--></svg>\n", Jd = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 17 79 79\"><path fill=\"currentColor\" d=\"M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z\"/><!-- Created by Icon Island from the Noun Project --></svg>\n", Yd = class e {
	constructor() {
		this.$ = e.IDLE;
	}
	is(...e) {
		return e.some((e) => this.$ & e);
	}
	set(e) {
		this.$ = e;
	}
	add(e) {
		this.$ |= e;
	}
	remove(e) {
		this.$ &= ~e;
	}
};
Yd.IDLE = 0, Yd.CLICK = 1, Yd.MOVING = 2;
var Xd = Yd, Zd = class extends Ud {
	constructor(e) {
		super(e), this.data = {
			startMouseX: 0,
			startMouseY: 0,
			mouseX: 0,
			mouseY: 0,
			pinchDist: 0,
			moveDelta: {
				yaw: 0,
				pitch: 0,
				zoom: 0
			},
			accumulatorFactor: 0,
			ctrlKeyDown: !1,
			dblclickData: null,
			dblclickTimeout: null,
			longtouchTimeout: null,
			twofingersTimeout: null,
			ctrlZoomTimeout: null
		}, this.step = new Xd(), this.keyHandler = new Ol(), this.resizeObserver = new ResizeObserver(Wc(() => this.viewer.autoSize(), 50)), this.moveThreshold = sc * Ku.pixelRatio;
	}
	init() {
		window.addEventListener("keydown", this, { passive: !1 }), window.addEventListener("keyup", this), this.viewer.container.addEventListener("mousedown", this), window.addEventListener("mousemove", this, { passive: !1 }), window.addEventListener("mouseup", this), this.viewer.container.addEventListener("touchstart", this, { passive: !1 }), window.addEventListener("touchmove", this, { passive: !1 }), window.addEventListener("touchend", this, { passive: !1 }), this.viewer.container.addEventListener("wheel", this, { passive: !1 }), document.addEventListener("fullscreenchange", this), this.resizeObserver.observe(this.viewer.container), this.viewer.addEventListener(Ll.type, this), this.viewer.addEventListener(Nu.type, this);
	}
	destroy() {
		window.removeEventListener("keydown", this), window.removeEventListener("keyup", this), this.viewer.container.removeEventListener("mousedown", this), window.removeEventListener("mousemove", this), window.removeEventListener("mouseup", this), this.viewer.container.removeEventListener("touchstart", this), window.removeEventListener("touchmove", this), window.removeEventListener("touchend", this), this.viewer.container.removeEventListener("wheel", this), document.removeEventListener("fullscreenchange", this), this.resizeObserver.disconnect(), this.viewer.removeEventListener(Ll.type, this), this.viewer.removeEventListener(Nu.type, this), clearTimeout(this.data.dblclickTimeout), clearTimeout(this.data.longtouchTimeout), clearTimeout(this.data.twofingersTimeout), clearTimeout(this.data.ctrlZoomTimeout), super.destroy();
	}
	handleEvent(e) {
		switch (e.type) {
			case "keydown":
				this.__onKeyDown(e);
				break;
			case "keyup":
				this.__onKeyUp();
				break;
			case "mousemove":
				this.__onMouseMove(e);
				break;
			case "mouseup":
				this.__onMouseUp(e);
				break;
			case "touchmove":
				this.__onTouchMove(e);
				break;
			case "touchend":
				this.__onTouchEnd(e);
				break;
			case "fullscreenchange":
				this.__onFullscreenChange();
				break;
			case Ll.type:
				this.__applyMoveDelta();
				break;
			case Nu.type:
				this.__clearMoveDelta();
				break;
		}
		if (!Pc(e, "." + mc)) switch (e.type) {
			case "mousedown":
				this.__onMouseDown(e);
				break;
			case "touchstart":
				this.__onTouchStart(e);
				break;
			case "wheel":
				this.__onMouseWheel(e);
				break;
		}
	}
	__onKeyDown(e) {
		if (this.config.mousewheelCtrlKey && (this.data.ctrlKeyDown = e.key === _c.Control, this.data.ctrlKeyDown && (clearTimeout(this.data.ctrlZoomTimeout), this.viewer.overlay.hide(gc.CTRL_ZOOM))), this.viewer.dispatchEvent(new ru(e.key, e)) && !(!this.state.keyboardEnabled || !this.config.keyboardActions || this.keyHandler.pending)) {
			for (let [t, n] of Object.entries(this.config.keyboardActions)) if (Hc(e, t)) {
				if (typeof n == "function") n(this.viewer, e);
				else {
					switch (n !== "ZOOM_IN" && n !== "ZOOM_OUT" && this.viewer.stopAll(), n) {
						case "ROTATE_UP":
							this.viewer.dynamics.position.roll({ pitch: !1 });
							break;
						case "ROTATE_DOWN":
							this.viewer.dynamics.position.roll({ pitch: !0 });
							break;
						case "ROTATE_RIGHT":
							this.viewer.dynamics.position.roll({ yaw: !1 });
							break;
						case "ROTATE_LEFT":
							this.viewer.dynamics.position.roll({ yaw: !0 });
							break;
						case "ZOOM_IN":
							this.viewer.dynamics.zoom.roll(!1);
							break;
						case "ZOOM_OUT":
							this.viewer.dynamics.zoom.roll(!0);
							break;
					}
					this.keyHandler.down(n);
				}
				e.preventDefault();
				return;
			}
		}
	}
	__onKeyUp() {
		this.data.ctrlKeyDown = !1, this.state.keyboardEnabled && this.keyHandler.up((e) => {
			e === "ZOOM_IN" || e === "ZOOM_OUT" ? this.viewer.dynamics.zoom.stop() : (this.viewer.dynamics.position.stop(), this.viewer.resetIdleTimer());
		});
	}
	__onMouseDown(e) {
		this.step.add(Xd.CLICK), this.data.startMouseX = e.clientX, this.data.startMouseY = e.clientY, this.config.mousemove && e.preventDefault();
	}
	__onMouseUp(e) {
		this.step.is(Xd.CLICK, Xd.MOVING) && this.__stopMove(e.clientX, e.clientY, e, e.button === 2);
	}
	__onMouseMove(e) {
		this.config.mousemove && this.step.is(Xd.CLICK, Xd.MOVING) && (e.preventDefault(), this.__doMove(e.clientX, e.clientY)), this.__handleObjectsEvents(e);
	}
	__onTouchStart(e) {
		e.touches.length === 1 ? (this.step.add(Xd.CLICK), this.data.startMouseX = e.touches[0].clientX, this.data.startMouseY = e.touches[0].clientY, this.data.longtouchTimeout || (this.data.longtouchTimeout = setTimeout(() => {
			let t = e.touches[0];
			this.__stopMove(t.clientX, t.clientY, e, !0), this.data.longtouchTimeout = null;
		}, lc))) : e.touches.length === 2 && (this.step.set(Xd.IDLE), this.__cancelLongTouch(), this.config.mousemove && (this.__cancelTwoFingersOverlay(), this.__startMoveZoom(e), e.preventDefault()));
	}
	__onTouchEnd(e) {
		if (this.__cancelLongTouch(), this.step.is(Xd.CLICK, Xd.MOVING)) {
			if (e.preventDefault(), this.__cancelTwoFingersOverlay(), e.touches.length === 1) this.__stopMove(this.data.mouseX, this.data.mouseY);
			else if (e.touches.length === 0) {
				let t = e.changedTouches[0];
				this.__stopMove(t.clientX, t.clientY, e);
			}
		}
	}
	__onTouchMove(e) {
		if (this.__cancelLongTouch(), this.config.mousemove) if (e.touches.length === 1) {
			if (this.config.touchmoveTwoFingers) this.step.is(Xd.CLICK) && !this.data.twofingersTimeout && (this.data.twofingersTimeout = setTimeout(() => {
				this.viewer.overlay.show({
					id: gc.TWO_FINGERS,
					image: qd,
					title: this.config.lang.twoFingers
				});
			}, uc));
			else if (this.step.is(Xd.CLICK, Xd.MOVING)) {
				e.preventDefault();
				let t = e.touches[0];
				this.__doMove(t.clientX, t.clientY);
			}
		} else this.__doMoveZoom(e), this.__cancelTwoFingersOverlay();
	}
	__cancelLongTouch() {
		this.data.longtouchTimeout && (clearTimeout(this.data.longtouchTimeout), this.data.longtouchTimeout = null);
	}
	__cancelTwoFingersOverlay() {
		this.config.touchmoveTwoFingers && (this.data.twofingersTimeout && (clearTimeout(this.data.twofingersTimeout), this.data.twofingersTimeout = null), this.viewer.overlay.hide(gc.TWO_FINGERS));
	}
	__onMouseWheel(e) {
		if (!this.config.mousewheel || !e.deltaY) return;
		if (this.config.mousewheelCtrlKey && !this.data.ctrlKeyDown) {
			this.viewer.overlay.show({
				id: gc.CTRL_ZOOM,
				image: Jd,
				title: this.config.lang.ctrlZoom
			}), clearTimeout(this.data.ctrlZoomTimeout), this.data.ctrlZoomTimeout = setTimeout(() => this.viewer.overlay.hide(gc.CTRL_ZOOM), dc);
			return;
		}
		e.preventDefault(), e.stopPropagation();
		let t = e.deltaY / Math.abs(e.deltaY) * 5 * this.config.zoomSpeed;
		t !== 0 && this.viewer.dynamics.zoom.step(-t, 5);
	}
	__onFullscreenChange() {
		let e = this.viewer.isFullscreenEnabled();
		this.config.keyboard === "fullscreen" && (e ? this.viewer.startKeyboardControl() : this.viewer.stopKeyboardControl()), this.viewer.dispatchEvent(new ql(e));
	}
	__resetMove() {
		this.step.set(Xd.IDLE), this.data.mouseX = 0, this.data.mouseY = 0, this.data.startMouseX = 0, this.data.startMouseY = 0;
	}
	__startMoveZoom(e) {
		this.viewer.stopAll(), this.__resetMove();
		let t = Lc(e);
		this.step.set(Xd.MOVING), this.data.accumulatorFactor = this.config.moveInertia, {distance: this.data.pinchDist, center: {x: this.data.mouseX, y: this.data.mouseY}} = t;
	}
	__stopMove(e, t, n, r = !1) {
		this.step.is(Xd.CLICK) && !this.__moveThresholdReached(e, t) && this.__doClick(e, t, n, r), this.config.moveInertia && (this.data.accumulatorFactor = this.config.moveInertia ** .5), this.__resetMove(), this.viewer.resetIdleTimer();
	}
	__doClick(e, t, n, r = !1) {
		let i = this.viewer.container.getBoundingClientRect(), a = e - i.left, o = t - i.top, s = this.viewer.renderer.getIntersections({
			x: a,
			y: o
		}), c = s.find((e) => e.object.userData[pc]);
		if (c) {
			let i = this.viewer.dataHelper.vector3ToSphericalCoords(c.point), l = {
				rightclick: r,
				originalEvent: n,
				target: Nc(n),
				clientX: e,
				clientY: t,
				viewerX: a,
				viewerY: o,
				yaw: i.yaw,
				pitch: i.pitch,
				objects: s.map((e) => e.object).filter((e) => !e.userData[pc])
			};
			try {
				let e = this.viewer.dataHelper.sphericalCoordsToTextureCoords(l);
				Object.assign(l, e);
			} catch {}
			this.data.dblclickTimeout ? (Math.abs(this.data.dblclickData.clientX - l.clientX) < this.moveThreshold && Math.abs(this.data.dblclickData.clientY - l.clientY) < this.moveThreshold && this.viewer.dispatchEvent(new Gl(this.data.dblclickData)), clearTimeout(this.data.dblclickTimeout), this.data.dblclickTimeout = null, this.data.dblclickData = null) : (this.viewer.dispatchEvent(new Vl(l)), this.data.dblclickData = qc(l), this.data.dblclickTimeout = setTimeout(() => {
				this.data.dblclickTimeout = null, this.data.dblclickData = null;
			}, cc));
		}
	}
	__handleObjectsEvents(e) {
		if (!Jc(this.state.objectsObservers) && e.composedPath().includes(this.viewer.container)) {
			let t = Fc(this.viewer.container), n = {
				x: e.clientX - t.x,
				y: e.clientY - t.y
			}, r = this.viewer.renderer.getIntersections(n), i = (t, r, i) => {
				this.viewer.dispatchEvent(new i(e, t, n, r));
			};
			for (let [e, t] of Object.entries(this.state.objectsObservers)) {
				let n = r.find((t) => t.object.userData[e]);
				n ? (t && n.object !== t && (i(t, e, Bu), this.state.objectsObservers[e] = null), t ? i(n.object, e, Hu) : (this.state.objectsObservers[e] = n.object, i(n.object, e, Ru))) : t && (i(t, e, Bu), this.state.objectsObservers[e] = null);
			}
		}
	}
	__doMove(e, t) {
		if (this.step.is(Xd.CLICK) && this.__moveThresholdReached(e, t)) this.viewer.stopAll(), this.__resetMove(), this.step.set(Xd.MOVING), this.data.mouseX = e, this.data.mouseY = t, this.data.accumulatorFactor = this.config.moveInertia;
		else if (this.step.is(Xd.MOVING)) {
			let n = (e - this.data.mouseX) * Math.cos(this.state.roll) - (t - this.data.mouseY) * Math.sin(this.state.roll), r = (t - this.data.mouseY) * Math.cos(this.state.roll) + (e - this.data.mouseX) * Math.sin(this.state.roll), i = {
				yaw: this.config.moveSpeed * (n / this.state.size.width) * B.degToRad(this.state.hFov),
				pitch: this.config.moveSpeed * (r / this.state.size.height) * B.degToRad(this.state.vFov)
			};
			this.data.moveDelta.yaw += i.yaw, this.data.moveDelta.pitch += i.pitch, this.data.mouseX = e, this.data.mouseY = t;
		}
	}
	__moveThresholdReached(e, t) {
		return Math.abs(e - this.data.startMouseX) >= this.moveThreshold || Math.abs(t - this.data.startMouseY) >= this.moveThreshold;
	}
	__doMoveZoom(e) {
		if (this.step.is(Xd.MOVING)) {
			e.preventDefault();
			let t = Lc(e);
			this.__doMove(t.center.x, t.center.y), this.data.moveDelta.zoom += this.config.zoomSpeed * ((t.distance - this.data.pinchDist) / Ku.pixelRatio), this.data.pinchDist = t.distance;
		}
	}
	__applyMoveDelta() {
		let e = .001;
		if (Math.abs(this.data.moveDelta.yaw) > 0 || Math.abs(this.data.moveDelta.pitch) > 0) {
			let t = this.viewer.getPosition();
			this.viewer.rotate({
				yaw: t.yaw - this.data.moveDelta.yaw * (1 - this.config.moveInertia),
				pitch: t.pitch + this.data.moveDelta.pitch * (1 - this.config.moveInertia)
			}), this.data.moveDelta.yaw *= this.data.accumulatorFactor, this.data.moveDelta.pitch *= this.data.accumulatorFactor, Math.abs(this.data.moveDelta.yaw) <= e && (this.data.moveDelta.yaw = 0), Math.abs(this.data.moveDelta.pitch) <= e && (this.data.moveDelta.pitch = 0);
		}
		if (Math.abs(this.data.moveDelta.zoom) > 0) {
			let t = this.viewer.getZoomLevel();
			this.viewer.zoom(t + this.data.moveDelta.zoom * (1 - this.config.moveInertia)), this.data.moveDelta.zoom *= this.config.moveInertia, Math.abs(this.data.moveDelta.zoom) <= e && (this.data.moveDelta.zoom = 0);
		}
	}
	__clearMoveDelta() {
		this.data.moveDelta.yaw = 0, this.data.moveDelta.pitch = 0, this.data.moveDelta.zoom = 0;
	}
};
K.enabled = !1;
var Qd = new Ne(), $d = new $e(), ef = new Zt(), tf = class extends Ud {
	constructor(e) {
		super(e), this.frustumNeedsUpdate = !0, this.renderer = new qs(this.config.rendererParameters), this.renderer.setPixelRatio(Ku.pixelRatio), this.renderer.outputColorSpace = k, this.renderer.toneMapping = 1, this.renderer.domElement.className = "psv-canvas", this.renderer.domElement.style.background = this.config.canvasBackground, this.scene = new It(), this.camera = new si(50, 16 / 9, .1, 2 * fc), this.camera.matrixAutoUpdate = !1;
		let t = new er(new vr(fc).scale(-1, 1, 1), new Hn({
			opacity: 0,
			transparent: !0,
			depthTest: !1,
			depthWrite: !1
		}));
		t.userData = { [pc]: !0 }, this.scene.add(t), this.raycaster = new Ei(), this.frustum = new dr(), this.container = document.createElement("div"), this.container.className = "psv-canvas-container", this.container.appendChild(this.renderer.domElement), this.viewer.container.appendChild(this.container), this.container.addEventListener("contextmenu", (e) => e.preventDefault()), this.viewer.addEventListener(ju.type, this), this.viewer.addEventListener(Fu.type, this), this.viewer.addEventListener(hu.type, this), this.viewer.addEventListener(_u.type, this), this.viewer.addEventListener(Ul.type, this), this.hide();
	}
	get panoramaPose() {
		return this.mesh.rotation;
	}
	get sphereCorrection() {
		return this.meshContainer.rotation;
	}
	init() {
		this.show(), this.renderer.setAnimationLoop((e) => this.__renderLoop(e));
	}
	destroy() {
		this.renderer.setAnimationLoop(null), this.cleanScene(this.scene), this.renderer.dispose(), this.viewer.container.removeChild(this.container), this.viewer.removeEventListener(ju.type, this), this.viewer.removeEventListener(Fu.type, this), this.viewer.removeEventListener(hu.type, this), this.viewer.removeEventListener(_u.type, this), this.viewer.removeEventListener(Ul.type, this), super.destroy();
	}
	handleEvent(e) {
		switch (e.type) {
			case ju.type:
				this.__onSizeUpdated();
				break;
			case Fu.type:
				this.__onZoomUpdated();
				break;
			case hu.type:
				this.__onPositionUpdated();
				break;
			case _u.type:
				this.__onPositionUpdated();
				break;
			case Ul.type:
				e.containsOptions("fisheye") && this.__onPositionUpdated(), e.containsOptions("canvasBackground") && (this.renderer.domElement.style.background = this.config.canvasBackground);
				break;
		}
	}
	hide() {
		this.container.style.opacity = "0";
	}
	show() {
		this.container.style.opacity = "1";
	}
	setCustomRenderer(e) {
		e ? this.customRenderer = e(this.renderer) : this.customRenderer = null, this.viewer.needsUpdate();
	}
	__onSizeUpdated() {
		this.renderer.setSize(this.state.size.width, this.state.size.height), this.camera.aspect = this.state.aspect, this.camera.updateProjectionMatrix(), this.viewer.needsUpdate(), this.frustumNeedsUpdate = !0;
	}
	__onZoomUpdated() {
		this.camera.fov = this.state.vFov, this.camera.updateProjectionMatrix(), this.viewer.needsUpdate(), this.frustumNeedsUpdate = !0;
	}
	__onPositionUpdated() {
		this.camera.position.set(0, 0, 0), this.camera.lookAt(this.state.direction), this.config.fisheye && this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye / 2).negate(), this.camera.rotateZ(-this.state.roll), this.camera.updateMatrix(), this.camera.updateMatrixWorld(), this.viewer.needsUpdate(), this.frustumNeedsUpdate = !0;
	}
	__renderLoop(e) {
		let t = this.timestamp ? e - this.timestamp : 0;
		this.timestamp = e, this.viewer.dispatchEvent(new Ll(e, t)), this.viewer.dynamics.update(t), (this.state.needsUpdate || this.state.continuousUpdateCount > 0) && (this.state.needsUpdate = !1, (this.customRenderer || this.renderer).render(this.scene, this.camera), this.viewer.dispatchEvent(new xu()));
	}
	setTexture(e) {
		this.meshContainer || (this.meshContainer = new Dt(), this.scene.add(this.meshContainer)), this.state.textureData && this.viewer.adapter.disposeTexture(this.state.textureData), this.mesh && (this.meshContainer.remove(this.mesh), this.viewer.adapter.disposeMesh(this.mesh)), this.mesh = this.viewer.adapter.createMesh(e.panoData), this.viewer.adapter.setTexture(this.mesh, e, !1), this.meshContainer.add(this.mesh), this.state.textureData = e, this.viewer.needsUpdate();
	}
	setPanoramaPose(e, t = this.mesh) {
		let n = this.viewer.dataHelper.cleanPanoramaPose(e);
		t.rotation.set(-n.tilt, n.pan, n.roll, "YXZ");
	}
	setSphereCorrection(e, t = this.meshContainer) {
		let n = this.viewer.dataHelper.cleanSphereCorrection(e);
		t.rotation.set(n.tilt, n.pan, n.roll, "YXZ");
	}
	transition(e, t, n) {
		let r = n.effect === "fade" || n.rotation, i = !Yc(t.position), a = !Yc(t.zoom), o = new Fl(i ? this.viewer.dataHelper.cleanPosition(t.position) : void 0, t.zoom);
		this.viewer.dispatchEvent(o);
		let s = new Dt(), c = this.viewer.adapter.createMesh(e.panoData);
		if (this.viewer.adapter.setTexture(c, e, !0), this.viewer.adapter.setTextureOpacity(c, 0), this.setPanoramaPose(e.panoData, c), this.setSphereCorrection(t.sphereCorrection, s), i && !n.rotation) {
			let e = this.viewer.getPosition(), t = new V(0, 1, 0);
			s.rotateOnWorldAxis(t, o.position.yaw - e.yaw);
			let n = new V(0, 1, 0).cross(this.camera.getWorldDirection(new V())).normalize();
			s.rotateOnWorldAxis(n, o.position.pitch - e.pitch);
		}
		s.add(c), this.scene.add(s), this.renderer.setRenderTarget(new Xe()), this.renderer.render(this.scene, this.camera), this.renderer.setRenderTarget(null);
		let { duration: l, properties: u } = this.viewer.dataHelper.getAnimationProperties(n.speed, n.rotation ? o.position : null, r ? o.zoomLevel : null), d = new Tl({
			properties: {
				...u,
				opacity: {
					start: 0,
					end: 1
				}
			},
			duration: l,
			easing: "inOutCubic",
			onTick: (e) => {
				switch (n.effect) {
					case "fade":
						this.viewer.adapter.setTextureOpacity(c, e.opacity);
						break;
					case "black":
					case "white":
						e.opacity < .5 ? this.renderer.toneMappingExposure = n.effect === "black" ? B.mapLinear(e.opacity, 0, .5, 1, 0) : B.mapLinear(e.opacity, 0, .5, 1, 5) : (this.renderer.toneMappingExposure = n.effect === "black" ? B.mapLinear(e.opacity, .5, 1, 0, 1) : B.mapLinear(e.opacity, .5, 1, 5, 1), this.mesh.visible = !1, this.viewer.adapter.setTextureOpacity(c, 1), a && !r && this.viewer.dynamics.zoom.setValue(o.zoomLevel));
						break;
				}
				i && n.rotation && this.viewer.dynamics.position.setValue({
					yaw: e.yaw,
					pitch: e.pitch
				}), a && r && this.viewer.dynamics.zoom.setValue(e.zoom), this.viewer.needsUpdate();
			}
		});
		return d.then((r) => {
			s.remove(c), this.scene.remove(s), r ? (this.viewer.adapter.disposeTexture(this.state.textureData), this.meshContainer.remove(this.mesh), this.viewer.adapter.disposeMesh(this.mesh), this.mesh = c, this.meshContainer.add(c), this.state.textureData = e, this.setPanoramaPose(e.panoData), this.setSphereCorrection(t.sphereCorrection), i && !n.rotation && this.viewer.rotate(t.position)) : (this.viewer.adapter.disposeTexture(e), this.viewer.adapter.disposeMesh(c));
		}), d;
	}
	getIntersections(e) {
		Qd.x = 2 * e.x / this.state.size.width - 1, Qd.y = -2 * e.y / this.state.size.height + 1, this.raycaster.setFromCamera(Qd, this.camera);
		let t = this.raycaster.intersectObjects(this.scene.children, !0).filter((e) => e.object.visible).filter((e) => e.object.isMesh && !!e.object.userData);
		return this.customRenderer?.getIntersections && t.push(...this.customRenderer.getIntersections(this.raycaster, Qd)), t;
	}
	isObjectVisible(e) {
		if (!e) return !1;
		if (this.frustumNeedsUpdate &&= ($d.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse), this.frustum.setFromProjectionMatrix($d), !1), e.isVector3) return this.frustum.containsPoint(e);
		if (e.isMesh && e.geometry) {
			let t = e;
			return t.geometry.boundingBox || t.geometry.computeBoundingBox(), ef.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld), this.frustum.intersectsBox(ef);
		} else if (e.isObject3D) return this.frustum.intersectsObject(e);
		else return !1;
	}
	addObject(e) {
		this.scene.add(e);
	}
	removeObject(e) {
		this.scene.remove(e);
	}
	cleanScene(e) {
		let t = (e) => {
			e.map?.dispose(), e.uniforms && Object.values(e.uniforms).forEach((e) => {
				e.value?.dispose?.();
			}), e.dispose();
		};
		e.traverse((n) => {
			n.geometry?.dispose(), n.material && (Array.isArray(n.material) ? n.material.forEach((e) => {
				t(e);
			}) : t(n.material)), n instanceof It || n.dispose?.(), n !== e && this.cleanScene(n);
		});
	}
}, nf = class extends $r {
	constructor() {
		super(...arguments), this._abortController = new AbortController();
	}
	abort() {
		return this._abortController.abort(), this._abortController = new AbortController(), this;
	}
	load(e, t, n, r) {
		let i = this._abortController.signal, a = super.load(e, (e) => {
			s(), t(e);
		}, n, (e) => {
			if (s(), i.aborted) {
				let e = /* @__PURE__ */ Error();
				e.name = "AbortError", e.message = "The operation was aborted.", r(e);
			} else r(e);
		});
		function o() {
			a.src = "";
		}
		function s() {
			i.removeEventListener("abort", o, !1);
		}
		return i.addEventListener("abort", o, !1), a;
	}
}, rf = class extends Ud {
	constructor(e) {
		super(e), this.fileLoader = new Zr(), this.fileLoader.setResponseType("blob"), this.imageLoader = new nf();
	}
	destroy() {
		this.abortLoading(), super.destroy();
	}
	abortLoading() {
		this.fileLoader.abort?.(), this.imageLoader.abort();
	}
	loadFile(e, t, n) {
		let r = Pd.get(e, n);
		if (r) {
			if (r instanceof Blob) return t?.(100), Promise.resolve(r);
			Pd.remove(e, n);
		}
		this.config.requestHeaders && this.fileLoader.setRequestHeader(this.config.requestHeaders(e)), this.fileLoader.setWithCredentials(this.config.withCredentials(e));
		let i = 0;
		return t?.(i), this.fileLoader.loadAsync(e, (e) => {
			if (e.lengthComputable) {
				let n = e.loaded / e.total * 100;
				n > i && (i = n, t?.(i));
			}
		}).then((r) => (i = 100, t?.(i), Pd.add(e, n, r), r));
	}
	loadImage(e, t, n) {
		let r = Pd.get(e, n);
		return r ? (t?.(100), r instanceof Blob ? this.blobToImage(r) : Promise.resolve(r)) : !t && !this.config.requestHeaders ? (this.imageLoader.setWithCredentials(this.config.withCredentials(e)), this.imageLoader.loadAsync(e).then((t) => (Pd.add(e, n, t), t))) : this.loadFile(e, t, n).then((e) => this.blobToImage(e));
	}
	blobToImage(e) {
		return new Promise((t, n) => {
			let r = document.createElement("img");
			r.onload = () => {
				URL.revokeObjectURL(r.src), t(r);
			}, r.onerror = n, r.src = URL.createObjectURL(e);
		});
	}
	preloadPanorama(e) {
		return this.viewer.adapter.supportsPreload(e) ? this.viewer.adapter.loadTexture(e, !1) : Promise.reject(new X("Current adapter does not support preload"));
	}
	dispatchProgress(e) {
		this.viewer.loader.setProgress(e), this.viewer.dispatchEvent(new au(Math.round(e)));
	}
}, af = class extends Ud {
	constructor(e) {
		super(e), this.zoom = new El((e) => {
			this.viewer.state.vFov = this.viewer.dataHelper.zoomLevelToFov(e), this.viewer.state.hFov = this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov), this.viewer.dispatchEvent(new Fu(e));
		}, {
			defaultValue: this.viewer.config.defaultZoomLvl,
			min: 0,
			max: 100,
			wrap: !1
		}), this.position = new Dl((e) => {
			this.viewer.dataHelper.sphericalCoordsToVector3(e, this.viewer.state.direction), this.viewer.dispatchEvent(new hu(e));
		}, {
			yaw: new El(null, {
				defaultValue: this.config.defaultYaw,
				min: 0,
				max: 2 * Math.PI,
				wrap: !0
			}),
			pitch: new El(null, {
				defaultValue: this.config.defaultPitch,
				min: -Math.PI / 2,
				max: Math.PI / 2,
				wrap: !1
			})
		}), this.roll = new El((e) => {
			this.viewer.state.roll = e, this.viewer.dispatchEvent(new _u(e));
		}, {
			defaultValue: 0,
			min: -Math.PI,
			max: Math.PI,
			wrap: !1
		}), this.updateSpeeds();
	}
	updateSpeeds() {
		this.zoom.setSpeed(this.config.zoomSpeed * 50), this.position.setSpeed(B.degToRad(this.config.moveSpeed * 50)), this.roll.setSpeed(B.degToRad(this.config.moveSpeed * 50));
	}
	update(e) {
		this.zoom.update(e), this.position.update(e), this.roll.update(e);
	}
}, of = class {
	constructor() {
		this.ready = !1, this.needsUpdate = !1, this.continuousUpdateCount = 0, this.keyboardEnabled = !1, this.direction = new V(0, 0, fc), this.roll = 0, this.vFov = 60, this.hFov = 60, this.aspect = 1, this.animation = null, this.transitionAnimation = null, this.loadingPromise = null, this.idleTime = -1, this.objectsObservers = {}, this.size = {
			width: 0,
			height: 0
		};
	}
}, sf = class extends Ml {
	constructor(e) {
		if (super(), this.plugins = {}, this.children = [], this.parent = Dc(e.container), !this.parent) throw new X("\"container\" element not found.");
		this.parent[pc] = this, this.container = document.createElement("div"), this.container.classList.add("psv-container"), this.parent.appendChild(this.container), Cl(this.parent), xl(this.container, "core"), this.state = new of(), this.config = Od(e), this.__setSize(this.config.size), this.overlay = new Ld(this);
		try {
			Ku.load();
		} catch (e) {
			console.error(e), this.showError(this.config.lang.webglError);
			return;
		}
		Pd.init(), this.adapter = new this.config.adapter[0](this, this.config.adapter[1]), this.renderer = new tf(this), this.textureLoader = new rf(this), this.eventsHandler = new Zd(this), this.dataHelper = new Kd(this), this.dynamics = new af(this), this.adapter.init?.(), this.loader = new Fd(this), this.navbar = new Nd(this), this.panel = new Bd(this), this.notification = new Id(this), this.autoSize(), this.setCursor(null), $c(Ku.isTouchEnabled, (e) => {
			Oc(this.container, "psv--is-touch", e);
		}), this.config.plugins.forEach(([e, t]) => {
			this.plugins[e.id] = new e(this, t);
		});
		for (let e of Object.values(this.plugins)) e.init?.();
		this.config.navbar && this.navbar.setButtons(this.config.navbar), this.state.loadingPromise || (this.config.panorama ? this.setPanorama(this.config.panorama, {
			sphereCorrection: this.config.sphereCorrection,
			panoData: this.config.panoData
		}) : this.loader.show());
	}
	destroy() {
		this.stopAll(), this.stopKeyboardControl(), this.exitFullscreen();
		for (let [e, t] of Object.entries(this.plugins)) t.destroy(), delete this.plugins[e];
		this.children.slice().forEach((e) => e.destroy()), this.children.length = 0, this.eventsHandler?.destroy(), this.renderer?.destroy(), this.textureLoader?.destroy(), this.dataHelper?.destroy(), this.adapter?.destroy(), this.dynamics?.destroy(), this.parent.removeChild(this.container), delete this.parent[pc];
	}
	init() {
		this.eventsHandler.init(), this.renderer.init(), this.config.navbar && this.navbar.show(), this.config.keyboard === "always" && this.startKeyboardControl(), this.resetIdleTimer(), this.state.ready = !0, this.dispatchEvent(new yu());
	}
	resetIdleTimer() {
		this.state.idleTime = performance.now();
	}
	disableIdleTimer() {
		this.state.idleTime = -1;
	}
	getPlugin(e) {
		if (typeof e == "string") return this.plugins[e];
		{
			let t = wd(e);
			return t ? this.plugins[t.id] : null;
		}
	}
	getPosition() {
		return this.dataHelper.cleanPosition(this.dynamics.position.current);
	}
	getZoomLevel() {
		return this.dynamics.zoom.current;
	}
	getSize() {
		return { ...this.state.size };
	}
	isFullscreenEnabled() {
		return zc(this.parent, Ku.isIphone);
	}
	needsUpdate() {
		this.state.needsUpdate = !0;
	}
	needsContinuousUpdate(e) {
		e ? this.state.continuousUpdateCount++ : this.state.continuousUpdateCount > 0 && this.state.continuousUpdateCount--;
	}
	autoSize() {
		(this.container.clientWidth !== this.state.size.width || this.container.clientHeight !== this.state.size.height) && (this.state.size.width = Math.round(this.container.clientWidth), this.state.size.height = Math.round(this.container.clientHeight), this.state.aspect = this.state.size.width / this.state.size.height, this.state.hFov = this.dataHelper.vFovToHFov(this.state.vFov), this.dispatchEvent(new ju(this.getSize())), this.navbar.autoSize());
	}
	setPanorama(e, t = {}) {
		this.textureLoader.abortLoading(), this.state.transitionAnimation?.cancel();
		let n = this.dataHelper.getTransitionOptions(t);
		t.showLoader === void 0 && (t.showLoader = !0), t.caption === void 0 && (t.caption = this.config.caption), t.description === void 0 && (t.description = this.config.description), !t.panoData && typeof this.config.panoData == "function" && (t.panoData = this.config.panoData), this.hideError(), this.resetIdleTimer(), this.config.panorama = e, this.config.caption = t.caption, this.config.description = t.description, this.config.sphereCorrection = t.sphereCorrection, (typeof this.config.panoData != "function" || typeof t.panoData == "function") && (this.config.panoData = t.panoData);
		let r = (t) => {
			if (nl(t)) return !1;
			if (this.loader.hide(), this.state.loadingPromise = null, t) throw this.navbar.setCaption(null), this.showError(this.config.lang.loadError), console.error(t), this.dispatchEvent(new du(e, t)), t;
			return this.navbar.setCaption(this.config.caption), !0;
		};
		this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`), (t.showLoader || !this.state.ready) && this.loader.show(), this.dispatchEvent(new su(e));
		let i = this.adapter.loadTexture(this.config.panorama, !0, t.panoData).then((e) => {
			if (e.panorama !== this.config.panorama) throw this.adapter.disposeTexture(e), tl();
			let n = this.dataHelper.cleanPanoramaOptions(t, e.panoData);
			return (!Yc(n.zoom) || !Yc(n.position)) && this.stopAll(), {
				textureData: e,
				cleanOptions: n
			};
		});
		return !n || !this.state.ready || !this.adapter.supportsTransition(this.config.panorama) ? this.state.loadingPromise = i.then(({ textureData: e, cleanOptions: n }) => {
			this.renderer.show(), this.renderer.setTexture(e), this.renderer.setPanoramaPose(e.panoData), this.renderer.setSphereCorrection(t.sphereCorrection), this.state.ready || this.init(), this.dispatchEvent(new lu(e)), Yc(n.zoom) || this.zoom(n.zoom), Yc(n.position) || this.rotate(n.position);
		}).then(() => r(), (e) => r(e)) : this.state.loadingPromise = i.then(({ textureData: e, cleanOptions: t }) => (this.loader.hide(), this.dispatchEvent(new lu(e)), this.state.transitionAnimation = this.renderer.transition(e, t, n), this.state.transitionAnimation)).then((e) => {
			if (this.state.transitionAnimation = null, this.dispatchEvent(new pu(e)), !e) throw tl();
		}).then(() => r(), (e) => r(e)), this.state.loadingPromise;
	}
	setOptions(e) {
		let t = {
			...this.config,
			...e
		};
		for (let [n, r] of Object.entries(e)) {
			if (!(n in Td)) {
				rl(`Unknown option ${n}`);
				continue;
			}
			if (n in Ed) {
				rl(Ed[n]);
				continue;
			}
			switch (n in Dd && (r = Dd[n](r, {
				rawConfig: t,
				defValue: Td[n]
			})), this.config[n] = r, n) {
				case "mousemove":
					this.state.cursorOverride || this.setCursor(null);
					break;
				case "caption":
					this.navbar.setCaption(this.config.caption);
					break;
				case "size":
					this.resize(this.config.size);
					break;
				case "sphereCorrection":
					this.renderer.setSphereCorrection(this.config.sphereCorrection);
					break;
				case "navbar":
				case "lang":
					this.navbar.setButtons(this.config.navbar);
					break;
				case "moveSpeed":
				case "zoomSpeed":
					this.dynamics.updateSpeeds();
					break;
				case "minFov":
				case "maxFov":
					this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)), this.dispatchEvent(new Fu(this.getZoomLevel()));
					break;
				case "keyboard":
					this.config.keyboard === "always" ? this.startKeyboardControl() : this.stopKeyboardControl();
					break;
				default: break;
			}
		}
		this.needsUpdate(), this.dispatchEvent(new Ul(Object.keys(e)));
	}
	setOption(e, t) {
		this.setOptions({ [e]: t });
	}
	showError(e) {
		this.overlay.show({
			id: gc.ERROR,
			image: Hd,
			title: e,
			dismissible: !1
		});
	}
	hideError() {
		this.overlay.hide(gc.ERROR);
	}
	rotate(e) {
		let t = new zl(this.dataHelper.cleanPosition(e));
		this.dispatchEvent(t), !t.defaultPrevented && this.dynamics.position.setValue(t.position);
	}
	zoom(e) {
		this.dynamics.zoom.setValue(e);
	}
	zoomIn(e = 1) {
		this.dynamics.zoom.step(e);
	}
	zoomOut(e = 1) {
		this.dynamics.zoom.step(-e);
	}
	animate(e) {
		let t = il(e), n = !Yc(e.zoom), r = new Fl(t ? this.dataHelper.cleanPosition(e) : void 0, e.zoom);
		if (this.dispatchEvent(r), r.defaultPrevented) return;
		this.stopAll();
		let { duration: i, properties: a } = this.dataHelper.getAnimationProperties(e.speed, r.position, r.zoomLevel);
		return i ? (this.state.animation = new Tl({
			properties: a,
			duration: i,
			easing: e.easing || "inOutSine",
			onTick: (e) => {
				t && this.dynamics.position.setValue({
					yaw: e.yaw,
					pitch: e.pitch
				}), n && this.dynamics.zoom.setValue(e.zoom);
			}
		}), this.state.animation.then(() => {
			this.state.animation = null, this.resetIdleTimer();
		}), this.state.animation) : (t && this.rotate(r.position), n && this.zoom(r.zoomLevel), new Tl(null));
	}
	stopAnimation() {
		return this.state.animation ? (this.state.animation.cancel(), this.state.animation) : Promise.resolve();
	}
	resize(e) {
		this.__setSize(e), this.autoSize();
	}
	__setSize(e) {
		["width", "height"].forEach((t) => {
			e?.[t] && (/^[0-9.]+$/.test(e[t]) && (e[t] += "px"), this.parent.style[t] = e[t]);
		});
	}
	enterFullscreen() {
		this.isFullscreenEnabled() || Bc(this.parent, Ku.isIphone);
	}
	exitFullscreen() {
		this.isFullscreenEnabled() && Vc(Ku.isIphone);
	}
	toggleFullscreen() {
		this.isFullscreenEnabled() ? this.exitFullscreen() : this.enterFullscreen();
	}
	startKeyboardControl() {
		this.state.keyboardEnabled = !0;
	}
	stopKeyboardControl() {
		this.state.keyboardEnabled = !1;
	}
	createTooltip(e) {
		return new Vd(this, e);
	}
	setCursor(e) {
		this.state.cursorOverride = e, e ? this.container.style.cursor = e : this.container.style.cursor = this.config.mousemove ? "move" : "default";
	}
	observeObjects(e) {
		this.state.objectsObservers[e] || (this.state.objectsObservers[e] = null);
	}
	unobserveObjects(e) {
		delete this.state.objectsObservers[e];
	}
	stopAll() {
		return this.dispatchEvent(new Nu()), this.disableIdleTimer(), this.stopAnimation();
	}
}, cf = 1e3, lf = 1001, uf = 1002, df = 1006, ff = 1008, pf = 1009, mf = 1015, hf = 1023, gf = 2300, _f = 2301, vf = 2302, yf = 2303, bf = 2400, xf = 2401, Sf = 2402, Cf = "srgb", wf = "srgb-linear", Tf = "linear", Ef = "srgb", Df = 7680, Of = 35044, kf = 2e3;
function Af(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function jf(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Mf(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
var Nf = {};
function Pf(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function Ff(...e) {
	e = Pf(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function If(...e) {
	e = Pf(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function Lf(...e) {
	let t = e.join(" ");
	t in Nf || (Nf[t] = !0, Ff(...e));
}
var Rf = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, zf = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), Bf = 1234567, Vf = Math.PI / 180, Hf = 180 / Math.PI;
function Uf() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (zf[e & 255] + zf[e >> 8 & 255] + zf[e >> 16 & 255] + zf[e >> 24 & 255] + "-" + zf[t & 255] + zf[t >> 8 & 255] + "-" + zf[t >> 16 & 15 | 64] + zf[t >> 24 & 255] + "-" + zf[n & 63 | 128] + zf[n >> 8 & 255] + "-" + zf[n >> 16 & 255] + zf[n >> 24 & 255] + zf[r & 255] + zf[r >> 8 & 255] + zf[r >> 16 & 255] + zf[r >> 24 & 255]).toLowerCase();
}
function Q(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Wf(e, t) {
	return (e % t + t) % t;
}
function Gf(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function Kf(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function qf(e, t, n) {
	return (1 - n) * e + n * t;
}
function Jf(e, t, n, r) {
	return qf(e, t, 1 - Math.exp(-n * r));
}
function Yf(e, t = 1) {
	return t - Math.abs(Wf(e, t * 2) - t);
}
function Xf(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function Zf(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function Qf(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function $f(e, t) {
	return e + Math.random() * (t - e);
}
function ep(e) {
	return e * (.5 - Math.random());
}
function tp(e) {
	e !== void 0 && (Bf = e);
	let t = Bf += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function np(e) {
	return e * Vf;
}
function rp(e) {
	return e * Hf;
}
function ip(e) {
	return (e & e - 1) == 0 && e !== 0;
}
function ap(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function op(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function sp(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: Ff("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function cp(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
function lp(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
var up = {
	DEG2RAD: Vf,
	RAD2DEG: Hf,
	generateUUID: Uf,
	clamp: Q,
	euclideanModulo: Wf,
	mapLinear: Gf,
	inverseLerp: Kf,
	lerp: qf,
	damp: Jf,
	pingpong: Yf,
	smoothstep: Xf,
	smootherstep: Zf,
	randInt: Qf,
	randFloat: $f,
	randFloatSpread: ep,
	seededRandom: tp,
	degToRad: np,
	radToDeg: rp,
	isPowerOfTwo: ip,
	ceilPowerOfTwo: ap,
	floorPowerOfTwo: op,
	setQuaternionFromProperEuler: sp,
	normalize: lp,
	denormalize: cp
}, dp = class e {
	static {
		e.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
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
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
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
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = Q(this.x, e.x, t.x), this.y = Q(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = Q(this.x, e, t), this.y = Q(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Q(n, e, t));
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
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Q(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
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
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, fp = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
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
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: Ff("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(Q(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
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
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
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
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, $ = class e {
	static {
		e.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
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
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
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
		return this.applyQuaternion(mp.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(mp.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
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
		return this.x = Q(this.x, e.x, t.x), this.y = Q(this.y, e.y, t.y), this.z = Q(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = Q(this.x, e, t), this.y = Q(this.y, e, t), this.z = Q(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Q(n, e, t));
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
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return pp.copy(this).projectOnVector(e), this.sub(pp);
	}
	reflect(e) {
		return this.sub(pp.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Q(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
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
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, pp = /*@__PURE__*/ new $(), mp = /*@__PURE__*/ new fp(), hp = class e {
	static {
		e.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return Lf("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(gp.makeScale(e, t)), this;
	}
	rotate(e) {
		return Lf("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(gp.makeRotation(-e)), this;
	}
	translate(e, t) {
		return Lf("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(gp.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, gp = /*@__PURE__*/ new hp(), _p = /*@__PURE__*/ new hp().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), vp = /*@__PURE__*/ new hp().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function yp() {
	let e = {
		enabled: !0,
		workingColorSpace: wf,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n ? e : (this.spaces[t].transfer === "srgb" && (e.r = xp(e.r), e.g = xp(e.g), e.b = xp(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = Sp(e.r), e.g = Sp(e.g), e.b = Sp(e.b)), e);
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? Tf : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return Lf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return Lf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[wf]: {
			primaries: t,
			whitePoint: r,
			transfer: Tf,
			toXYZ: _p,
			fromXYZ: vp,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: Cf },
			outputColorSpaceConfig: { drawingBufferColorSpace: Cf }
		},
		[Cf]: {
			primaries: t,
			whitePoint: r,
			transfer: Ef,
			toXYZ: _p,
			fromXYZ: vp,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: Cf }
		}
	}), e;
}
var bp = /*@__PURE__*/ yp();
function xp(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function Sp(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var Cp, wp = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			Cp === void 0 && (Cp = Mf("canvas")), Cp.width = e.width, Cp.height = e.height;
			let t = Cp.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = Cp;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Mf("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = xp(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		} else if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(xp(t[e] / 255) * 255) : t[e] = xp(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		} else return Ff("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, Tp = 0, Ep = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: Tp++ }), this.uuid = Uf(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(Dp(r[t].image)) : e.push(Dp(r[t]));
			} else e = Dp(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function Dp(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? wp.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (Ff("Texture: Unable to serialize Texture."), {});
}
var Op = 0, kp = /*@__PURE__*/ new $(), Ap = class e extends Rf {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = lf, i = lf, a = df, o = ff, s = hf, c = pf, l = e.DEFAULT_ANISOTROPY, u = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Op++ }), this.uuid = Uf(), this.name = "", this.source = new Ep(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new dp(0, 0), this.repeat = new dp(1, 1), this.center = new dp(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new hp(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(kp).x;
	}
	get height() {
		return this.source.getSize(kp).y;
	}
	get depth() {
		return this.source.getSize(kp).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				Ff(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				Ff(`Texture.setValues(): property '${t}' does not exist.`);
				continue;
			}
			r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
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
			normalized: this.normalized,
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
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case cf:
				e.x -= Math.floor(e.x);
				break;
			case lf:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case uf:
				Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
				break;
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case cf:
				e.y -= Math.floor(e.y);
				break;
			case lf:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case uf:
				Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
				break;
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
Ap.DEFAULT_IMAGE = null, Ap.DEFAULT_MAPPING = 300, Ap.DEFAULT_ANISOTROPY = 1;
var jp = class e {
	static {
		e.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
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
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
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
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
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
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = Q(this.x, e.x, t.x), this.y = Q(this.y, e.y, t.y), this.z = Q(this.z, e.z, t.z), this.w = Q(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = Q(this.x, e, t), this.y = Q(this.y, e, t), this.z = Q(this.z, e, t), this.w = Q(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Q(n, e, t));
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
}, Mp = class e {
	static {
		e.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
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
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinantAffine() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / Np.setFromMatrixColumn(e, 0).length(), i = 1 / Np.setFromMatrixColumn(e, 1).length(), a = 1 / Np.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(Fp, e, Ip);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return zp.subVectors(e, t), zp.lengthSq() === 0 && (zp.z = 1), zp.normalize(), Lp.crossVectors(n, zp), Lp.lengthSq() === 0 && (Math.abs(n.z) === 1 ? zp.x += 1e-4 : zp.z += 1e-4, zp.normalize(), Lp.crossVectors(n, zp)), Lp.normalize(), Rp.crossVectors(zp, Lp), r[0] = Lp.x, r[4] = Rp.x, r[8] = zp.x, r[1] = Lp.y, r[5] = Rp.y, r[9] = zp.y, r[2] = Lp.z, r[6] = Rp.z, r[10] = zp.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], ee = r[10], j = r[14], M = r[3], N = r[7], te = r[11], P = r[15];
		return i[0] = a * x + o * T + s * k + c * M, i[4] = a * S + o * E + s * A + c * N, i[8] = a * C + o * D + s * ee + c * te, i[12] = a * w + o * O + s * j + c * P, i[1] = l * x + u * T + d * k + f * M, i[5] = l * S + u * E + d * A + f * N, i[9] = l * C + u * D + d * ee + f * te, i[13] = l * w + u * O + d * j + f * P, i[2] = p * x + m * T + h * k + g * M, i[6] = p * S + m * E + h * A + g * N, i[10] = p * C + m * D + h * ee + g * te, i[14] = p * w + m * O + h * j + g * P, i[3] = _ * x + v * T + y * k + b * M, i[7] = _ * S + v * E + y * A + b * N, i[11] = _ * C + v * D + y * ee + b * te, i[15] = _ * w + v * O + y * j + b * P, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	determinantAffine() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], o = e[9], s = e[2], c = e[6], l = e[10];
		return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinantAffine();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = Np.set(r[0], r[1], r[2]).length(), o = Np.set(r[4], r[5], r[6]).length(), s = Np.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), Pp.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return Pp.elements[0] *= c, Pp.elements[1] *= c, Pp.elements[2] *= c, Pp.elements[4] *= l, Pp.elements[5] *= l, Pp.elements[6] *= l, Pp.elements[8] *= u, Pp.elements[9] *= u, Pp.elements[10] *= u, t.setFromRotationMatrix(Pp), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = kf, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = kf, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, Np = /*@__PURE__*/ new $(), Pp = /*@__PURE__*/ new Mp(), Fp = /*@__PURE__*/ new $(0, 0, 0), Ip = /*@__PURE__*/ new $(1, 1, 1), Lp = /*@__PURE__*/ new $(), Rp = /*@__PURE__*/ new $(), zp = /*@__PURE__*/ new $(), Bp = /*@__PURE__*/ new Mp(), Vp = /*@__PURE__*/ new fp(), Hp = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
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
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(Q(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-Q(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(Q(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-Q(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(Q(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-Q(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: Ff("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return Bp.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Bp, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return Vp.setFromEuler(this), this.setFromQuaternion(Vp, e);
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
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
Hp.DEFAULT_ORDER = "XYZ";
var Up = class {
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
		return (this.mask & (1 << e | 0)) != 0;
	}
}, Wp = 0, Gp = /*@__PURE__*/ new $(), Kp = /*@__PURE__*/ new fp(), qp = /*@__PURE__*/ new Mp(), Jp = /*@__PURE__*/ new $(), Yp = /*@__PURE__*/ new $(), Xp = /*@__PURE__*/ new $(), Zp = /*@__PURE__*/ new fp(), Qp = /*@__PURE__*/ new $(1, 0, 0), $p = /*@__PURE__*/ new $(0, 1, 0), em = /*@__PURE__*/ new $(0, 0, 1), tm = { type: "added" }, nm = { type: "removed" }, rm = {
	type: "childadded",
	child: null
}, im = {
	type: "childremoved",
	child: null
}, am = class e extends Rf {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Wp++ }), this.uuid = Uf(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new $(), n = new Hp(), r = new fp(), i = new $(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new Mp() },
			normalMatrix: { value: new hp() }
		}), this.matrix = new Mp(), this.matrixWorld = new Mp(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Up(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
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
		return Kp.setFromAxisAngle(e, t), this.quaternion.multiply(Kp), this;
	}
	rotateOnWorldAxis(e, t) {
		return Kp.setFromAxisAngle(e, t), this.quaternion.premultiply(Kp), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(Qp, e);
	}
	rotateY(e) {
		return this.rotateOnAxis($p, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(em, e);
	}
	translateOnAxis(e, t) {
		return Gp.copy(e).applyQuaternion(this.quaternion), this.position.add(Gp.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(Qp, e);
	}
	translateY(e) {
		return this.translateOnAxis($p, e);
	}
	translateZ(e) {
		return this.translateOnAxis(em, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(qp.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? Jp.copy(e) : Jp.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), Yp.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? qp.lookAt(Yp, Jp, this.up) : qp.lookAt(Jp, Yp, this.up), this.quaternion.setFromRotationMatrix(qp), r && (qp.extractRotation(r.matrixWorld), Kp.setFromRotationMatrix(qp), this.quaternion.premultiply(Kp.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (If("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(tm), rm.child = e, this.dispatchEvent(rm), rm.child = null) : If("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(nm), im.child = e, this.dispatchEvent(im), im.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), qp.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), qp.multiply(e.parent.matrixWorld)), e.applyMatrix4(qp), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(tm), rm.child = e, this.dispatchEvent(rm), rm.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yp, e, Xp), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yp, Zp, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t, n = !1) {
		let r = this.parent;
		if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
			let e = this.children;
			for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
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
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
			let t = [];
			for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
			r.material = t;
		} else r.material = i(e.materials, this.material);
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
am.DEFAULT_UP = /*@__PURE__*/ new $(0, 1, 0), am.DEFAULT_MATRIX_AUTO_UPDATE = !0, am.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var om = class extends am {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, sm = {
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
}, cm = {
	h: 0,
	s: 0,
	l: 0
}, lm = {
	h: 0,
	s: 0,
	l: 0
};
function um(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var dm = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Cf) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, bp.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = bp.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, bp.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = bp.workingColorSpace) {
		if (e = Wf(e, 1), t = Q(t, 0, 1), n = Q(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = um(i, r, e + 1 / 3), this.g = um(i, r, e), this.b = um(i, r, e - 1 / 3);
		}
		return bp.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = Cf) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && Ff("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: Ff("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			Ff("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Cf) {
		let n = sm[e.toLowerCase()];
		return n === void 0 ? Ff("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = xp(e.r), this.g = xp(e.g), this.b = xp(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = Sp(e.r), this.g = Sp(e.g), this.b = Sp(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Cf) {
		return bp.workingToColorSpace(fm.copy(this), e), Math.round(Q(fm.r * 255, 0, 255)) * 65536 + Math.round(Q(fm.g * 255, 0, 255)) * 256 + Math.round(Q(fm.b * 255, 0, 255));
	}
	getHexString(e = Cf) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = bp.workingColorSpace) {
		bp.workingToColorSpace(fm.copy(this), t);
		let n = fm.r, r = fm.g, i = fm.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i:
					s = (n - r) / e + 4;
					break;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = bp.workingColorSpace) {
		return bp.workingToColorSpace(fm.copy(this), t), e.r = fm.r, e.g = fm.g, e.b = fm.b, e;
	}
	getStyle(e = Cf) {
		bp.workingToColorSpace(fm.copy(this), e);
		let t = fm.r, n = fm.g, r = fm.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(cm), this.setHSL(cm.h + e, cm.s + t, cm.l + n);
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
		this.getHSL(cm), e.getHSL(lm);
		let n = qf(cm.h, lm.h, t), r = qf(cm.s, lm.s, t), i = qf(cm.l, lm.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
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
}, fm = /*@__PURE__*/ new dm();
dm.NAMES = sm;
var pm = class extends am {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Hp(), this.environmentIntensity = 1, this.environmentRotation = new Hp(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, mm = /*@__PURE__*/ new $(), hm = /*@__PURE__*/ new $(), gm = /*@__PURE__*/ new $(), _m = /*@__PURE__*/ new $(), vm = /*@__PURE__*/ new $(), ym = /*@__PURE__*/ new $(), bm = /*@__PURE__*/ new $(), xm = /*@__PURE__*/ new $(), Sm = /*@__PURE__*/ new $(), Cm = /*@__PURE__*/ new $(), wm = /*@__PURE__*/ new jp(), Tm = /*@__PURE__*/ new jp(), Em = /*@__PURE__*/ new jp(), Dm = class e {
	constructor(e = new $(), t = new $(), n = new $()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), mm.subVectors(e, t), r.cross(mm);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		mm.subVectors(r, t), hm.subVectors(n, t), gm.subVectors(e, t);
		let a = mm.dot(mm), o = mm.dot(hm), s = mm.dot(gm), c = hm.dot(hm), l = hm.dot(gm), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, _m) !== null && _m.x >= 0 && _m.y >= 0 && _m.x + _m.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, _m) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, _m.x), s.addScaledVector(a, _m.y), s.addScaledVector(o, _m.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return wm.setScalar(0), Tm.setScalar(0), Em.setScalar(0), wm.fromBufferAttribute(e, t), Tm.fromBufferAttribute(e, n), Em.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(wm, i.x), a.addScaledVector(Tm, i.y), a.addScaledVector(Em, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return mm.subVectors(n, t), hm.subVectors(e, t), mm.cross(hm).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return mm.subVectors(this.c, this.b), hm.subVectors(this.a, this.b), mm.cross(hm).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		vm.subVectors(r, n), ym.subVectors(i, n), xm.subVectors(e, n);
		let s = vm.dot(xm), c = ym.dot(xm);
		if (s <= 0 && c <= 0) return t.copy(n);
		Sm.subVectors(e, r);
		let l = vm.dot(Sm), u = ym.dot(Sm);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(vm, a);
		Cm.subVectors(e, i);
		let f = vm.dot(Cm), p = ym.dot(Cm);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(ym, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return bm.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(bm, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(vm, a).addScaledVector(ym, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, Om = class {
	constructor(e = new $(Infinity, Infinity, Infinity), t = new $(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Am.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Am.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = Am.copy(t).multiplyScalar(.5);
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
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
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
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, Am) : Am.fromBufferAttribute(r, t), Am.applyMatrix4(e.matrixWorld), this.expandByPoint(Am);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), jm.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), jm.copy(e.boundingBox)), jm.applyMatrix4(e.matrixWorld), this.union(jm);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, Am), Am.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(Rm), zm.subVectors(this.max, Rm), Mm.subVectors(e.a, Rm), Nm.subVectors(e.b, Rm), Pm.subVectors(e.c, Rm), Fm.subVectors(Nm, Mm), Im.subVectors(Pm, Nm), Lm.subVectors(Mm, Pm);
		let t = [
			0,
			-Fm.z,
			Fm.y,
			0,
			-Im.z,
			Im.y,
			0,
			-Lm.z,
			Lm.y,
			Fm.z,
			0,
			-Fm.x,
			Im.z,
			0,
			-Im.x,
			Lm.z,
			0,
			-Lm.x,
			-Fm.y,
			Fm.x,
			0,
			-Im.y,
			Im.x,
			0,
			-Lm.y,
			Lm.x,
			0
		];
		return !Hm(t, Mm, Nm, Pm, zm) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !Hm(t, Mm, Nm, Pm, zm)) ? !1 : (Bm.crossVectors(Fm, Im), t = [
			Bm.x,
			Bm.y,
			Bm.z
		], Hm(t, Mm, Nm, Pm, zm));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, Am).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Am).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() ? this : (km[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), km[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), km[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), km[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), km[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), km[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), km[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), km[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(km), this);
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, km = [
	/*@__PURE__*/ new $(),
	/*@__PURE__*/ new $(),
	/*@__PURE__*/ new $(),
	/*@__PURE__*/ new $(),
	/*@__PURE__*/ new $(),
	/*@__PURE__*/ new $(),
	/*@__PURE__*/ new $(),
	/*@__PURE__*/ new $()
], Am = /*@__PURE__*/ new $(), jm = /*@__PURE__*/ new Om(), Mm = /*@__PURE__*/ new $(), Nm = /*@__PURE__*/ new $(), Pm = /*@__PURE__*/ new $(), Fm = /*@__PURE__*/ new $(), Im = /*@__PURE__*/ new $(), Lm = /*@__PURE__*/ new $(), Rm = /*@__PURE__*/ new $(), zm = /*@__PURE__*/ new $(), Bm = /*@__PURE__*/ new $(), Vm = /*@__PURE__*/ new $();
function Hm(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		Vm.fromArray(e, a);
		let o = i.x * Math.abs(Vm.x) + i.y * Math.abs(Vm.y) + i.z * Math.abs(Vm.z), s = t.dot(Vm), c = n.dot(Vm), l = r.dot(Vm);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var Um = /*@__PURE__*/ new $(), Wm = /*@__PURE__*/ new dp(), Gm = 0, Km = class extends Rf {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Gm++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = Of, this.updateRanges = [], this.gpuType = mf, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Wm.fromBufferAttribute(this, t), Wm.applyMatrix3(e), this.setXY(t, Wm.x, Wm.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Um.fromBufferAttribute(this, t), Um.applyMatrix3(e), this.setXYZ(t, Um.x, Um.y, Um.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) Um.fromBufferAttribute(this, t), Um.applyMatrix4(e), this.setXYZ(t, Um.x, Um.y, Um.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Um.fromBufferAttribute(this, t), Um.applyNormalMatrix(e), this.setXYZ(t, Um.x, Um.y, Um.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Um.fromBufferAttribute(this, t), Um.transformDirection(e), this.setXYZ(t, Um.x, Um.y, Um.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = cp(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = lp(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = cp(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = lp(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = cp(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = lp(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = cp(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = lp(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = cp(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = lp(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = lp(t, this.array), n = lp(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = lp(t, this.array), n = lp(n, this.array), r = lp(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = lp(t, this.array), n = lp(n, this.array), r = lp(r, this.array), i = lp(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, qm = class extends Km {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, Jm = class extends Km {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, Ym = class extends Km {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, Xm = /*@__PURE__*/ new Om(), Zm = /*@__PURE__*/ new $(), Qm = /*@__PURE__*/ new $(), $m = class {
	constructor(e = new $(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? Xm.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
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
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		Zm.subVectors(e, this.center);
		let t = Zm.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(Zm, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Qm.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Zm.copy(e.center).add(Qm)), this.expandByPoint(Zm.copy(e.center).sub(Qm))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, eh = 0, th = /*@__PURE__*/ new Mp(), nh = /*@__PURE__*/ new am(), rh = /*@__PURE__*/ new $(), ih = /*@__PURE__*/ new Om(), ah = /*@__PURE__*/ new Om(), oh = /*@__PURE__*/ new $(), sh = class e extends Rf {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: eh++ }), this.uuid = Uf(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {}, this._transformed = !1;
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return Array.isArray(e) ? this.index = new (Af(e) ? Jm : qm)(e, 1) : this.index = e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
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
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new hp().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
	}
	applyQuaternion(e) {
		return th.makeRotationFromQuaternion(e), this.applyMatrix4(th), this;
	}
	rotateX(e) {
		return th.makeRotationX(e), this.applyMatrix4(th), this;
	}
	rotateY(e) {
		return th.makeRotationY(e), this.applyMatrix4(th), this;
	}
	rotateZ(e) {
		return th.makeRotationZ(e), this.applyMatrix4(th), this;
	}
	translate(e, t, n) {
		return th.makeTranslation(e, t, n), this.applyMatrix4(th), this;
	}
	scale(e, t, n) {
		return th.makeScale(e, t, n), this.applyMatrix4(th), this;
	}
	lookAt(e) {
		return nh.lookAt(e), nh.updateMatrix(), this.applyMatrix4(nh.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(rh).negate(), this.translate(rh.x, rh.y, rh.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new Ym(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && Ff("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Om());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			If("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new $(-Infinity, -Infinity, -Infinity), new $(Infinity, Infinity, Infinity));
			return;
		}
		if (e !== void 0) {
			if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				ih.setFromBufferAttribute(n), this.morphTargetsRelative ? (oh.addVectors(this.boundingBox.min, ih.min), this.boundingBox.expandByPoint(oh), oh.addVectors(this.boundingBox.max, ih.max), this.boundingBox.expandByPoint(oh)) : (this.boundingBox.expandByPoint(ih.min), this.boundingBox.expandByPoint(ih.max));
			}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && If("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new $m());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			If("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new $(), Infinity);
			return;
		}
		if (e) {
			let n = this.boundingSphere.center;
			if (ih.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				ah.setFromBufferAttribute(n), this.morphTargetsRelative ? (oh.addVectors(ih.min, ah.min), ih.expandByPoint(oh), oh.addVectors(ih.max, ah.max), ih.expandByPoint(oh)) : (ih.expandByPoint(ah.min), ih.expandByPoint(ah.max));
			}
			ih.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) oh.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(oh));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) oh.fromBufferAttribute(a, t), o && (rh.fromBufferAttribute(e, t), oh.add(rh)), r = Math.max(r, n.distanceToSquared(oh));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && If("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			If("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
		(a === void 0 || a.count !== n.count) && (a = new Km(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
		let o = [], s = [];
		for (let e = 0; e < n.count; e++) o[e] = new $(), s[e] = new $();
		let c = new $(), l = new $(), u = new $(), d = new dp(), f = new dp(), p = new dp(), m = new $(), h = new $();
		function g(e, t, r) {
			c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), u.fromBufferAttribute(n, r), d.fromBufferAttribute(i, e), f.fromBufferAttribute(i, t), p.fromBufferAttribute(i, r), l.sub(c), u.sub(c), f.sub(d), p.sub(d);
			let a = 1 / (f.x * p.y - p.x * f.y);
			isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a), h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a), o[e].add(m), o[t].add(m), o[r].add(m), s[e].add(h), s[t].add(h), s[r].add(h));
		}
		let _ = this.groups;
		_.length === 0 && (_ = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let v = new $(), y = new $(), b = new $(), x = new $();
		function S(e) {
			b.fromBufferAttribute(r, e), x.copy(b);
			let t = o[e];
			v.copy(t), v.sub(b.multiplyScalar(b.dot(t))).normalize(), y.crossVectors(x, t);
			let n = y.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, v.x, v.y, v.z, n);
		}
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
		}
		this._transformed = !0;
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0 || n.count !== t.count) n = new Km(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new $(), i = new $(), a = new $(), o = new $(), s = new $(), c = new $(), l = new $(), u = new $();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) oh.fromBufferAttribute(e, t), oh.normalize(), e.setXYZ(t, oh.x, oh.y, oh.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new Km(a, r, i);
		}
		if (this.index === null) return Ff("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, ch = 0, lh = class extends Rf {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ch++ }), this.uuid = Uf(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new dm(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Df, this.stencilZFail = Df, this.stencilZPass = Df, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				Ff(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				Ff(`Material: '${t}' is not a property of THREE.${this.type}.`);
				continue;
			}
			r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	fromJSON(e, t) {
		if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new dm().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new dp().fromArray(t);
		}
		return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new dp().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, uh = /*@__PURE__*/ new $(), dh = /*@__PURE__*/ new $(), fh = /*@__PURE__*/ new $(), ph = /*@__PURE__*/ new $(), mh = /*@__PURE__*/ new $(), hh = /*@__PURE__*/ new $(), gh = /*@__PURE__*/ new $(), _h = class {
	constructor(e = new $(), t = new $(0, 0, -1)) {
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
		return this.origin.copy(this.at(e, uh)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = uh.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (uh.copy(this.origin).addScaledVector(this.direction, t), uh.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		dh.copy(e).add(t).multiplyScalar(.5), fh.copy(t).sub(e).normalize(), ph.copy(this.origin).sub(dh);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(fh), o = ph.dot(this.direction), s = -ph.dot(fh), c = ph.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) if (d >= -p) if (d <= p) {
			let e = 1 / l;
			u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
		} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(dh).addScaledVector(fh, d), f;
	}
	intersectSphere(e, t) {
		uh.subVectors(e.center, this.origin);
		let n = uh.dot(this.direction), r = uh.dot(uh) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, uh) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		mh.subVectors(t, e), hh.subVectors(n, e), gh.crossVectors(mh, hh);
		let a = this.direction.dot(gh), o;
		if (a > 0) {
			if (r) return null;
			o = 1;
		} else if (a < 0) o = -1, a = -a;
		else return null;
		ph.subVectors(this.origin, e);
		let s = o * this.direction.dot(hh.crossVectors(ph, hh));
		if (s < 0) return null;
		let c = o * this.direction.dot(mh.cross(ph));
		if (c < 0 || s + c > a) return null;
		let l = -o * ph.dot(gh);
		return l < 0 ? null : this.at(l / a, i);
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
}, vh = class extends lh {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new dm(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Hp(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, yh = /*@__PURE__*/ new Mp(), bh = /*@__PURE__*/ new _h(), xh = /*@__PURE__*/ new $m(), Sh = /*@__PURE__*/ new $(), Ch = /*@__PURE__*/ new $(), wh = /*@__PURE__*/ new $(), Th = /*@__PURE__*/ new $(), Eh = /*@__PURE__*/ new $(), Dh = /*@__PURE__*/ new $(), Oh = /*@__PURE__*/ new $(), kh = /*@__PURE__*/ new $(), Ah = class extends am {
	constructor(e = new sh(), t = new vh()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			Dh.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Eh.fromBufferAttribute(s, e), a ? Dh.addScaledVector(Eh, r) : Dh.addScaledVector(Eh.sub(t), r));
			}
			t.add(Dh);
		}
		return t;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), xh.copy(n.boundingSphere), xh.applyMatrix4(i), bh.copy(e.ray).recast(e.near), !(xh.containsPoint(bh.origin) === !1 && (bh.intersectSphere(xh, Sh) === null || bh.origin.distanceToSquared(Sh) > (e.far - e.near) ** 2)) && (yh.copy(i).invert(), bh.copy(e.ray).applyMatrix4(yh), !(n.boundingBox !== null && bh.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, bh)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
			let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
				r = Mh(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
			for (let d = i, f = s; d < f; d += 3) {
				let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
				r = Mh(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
			}
		}
		else if (s !== void 0) if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
			let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
			for (let i = m, a = h; i < a; i += 3) {
				let a = i, s = i + 1, d = i + 2;
				r = Mh(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
			for (let s = i, d = o; s < d; s += 3) {
				let i = s, o = s + 1, d = s + 2;
				r = Mh(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
			}
		}
	}
};
function jh(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	kh.copy(s), kh.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(kh);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: kh.clone(),
		object: e
	};
}
function Mh(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, Ch), e.getVertexPosition(c, wh), e.getVertexPosition(l, Th);
	let u = jh(e, t, n, r, Ch, wh, Th, Oh);
	if (u) {
		let e = new $();
		Dm.getBarycoord(Oh, Ch, wh, Th, e), i && (u.uv = Dm.getInterpolatedAttribute(i, s, c, l, e, new dp())), a && (u.uv1 = Dm.getInterpolatedAttribute(a, s, c, l, e, new dp())), o && (u.normal = Dm.getInterpolatedAttribute(o, s, c, l, e, new $()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new $(),
			materialIndex: 0
		};
		Dm.getNormal(Ch, wh, Th, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var Nh = class extends Ap {
	constructor(e, t, n, r, i = df, a = df, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isVideoTexture = !0, this.generateMipmaps = !1, this._requestVideoFrameCallbackId = 0;
		let l = this;
		function u() {
			l.needsUpdate = !0, l._requestVideoFrameCallbackId = e.requestVideoFrameCallback(u);
		}
		"requestVideoFrameCallback" in e && (this._requestVideoFrameCallbackId = e.requestVideoFrameCallback(u));
	}
	clone() {
		return new this.constructor(this.image).copy(this);
	}
	update() {
		let e = this.image;
		!("requestVideoFrameCallback" in e) && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
	}
	dispose() {
		this._requestVideoFrameCallbackId !== 0 && (this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId), this._requestVideoFrameCallbackId = 0), super.dispose();
	}
}, Ph = class e extends sh {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new Ym(p, 3)), this.setAttribute("normal", new Ym(m, 3)), this.setAttribute("uv", new Ym(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
};
function Fh(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (Ih(i)) i.isRenderTargetTexture ? (Ff("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) if (Ih(i[0])) {
				let e = [];
				for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
				t[n][r] = e;
			} else t[n][r] = i.slice();
			else t[n][r] = i;
		}
	}
	return t;
}
function Ih(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Lh(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
var Rh = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", zh = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Bh = class extends lh {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Rh, this.fragmentShader = zh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Fh(e.uniforms), this.uniformsGroups = Lh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
	fromJSON(e, t) {
		if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
			let r = e.uniforms[n];
			switch (this.uniforms[n] = {}, r.type) {
				case "t":
					this.uniforms[n].value = t[r.value] || null;
					break;
				case "c":
					this.uniforms[n].value = new dm().setHex(r.value);
					break;
				case "v2":
					this.uniforms[n].value = new dp().fromArray(r.value);
					break;
				case "v3":
					this.uniforms[n].value = new $().fromArray(r.value);
					break;
				case "v4":
					this.uniforms[n].value = new jp().fromArray(r.value);
					break;
				case "m3":
					this.uniforms[n].value = new hp().fromArray(r.value);
					break;
				case "m4":
					this.uniforms[n].value = new Mp().fromArray(r.value);
					break;
				default: this.uniforms[n].value = r.value;
			}
		}
		if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
		return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
	}
};
function Vh(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
var Hh = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("THREE.Interpolant: Call to abstract method.");
	}
	intervalChanged_() {}
}, Uh = class extends Hh {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: bf,
			endingEnd: bf
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case xf:
				i = e, o = 2 * t - n;
				break;
			case Sf:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case xf:
				a = e, s = 2 * n - t;
				break;
			case Sf:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, Wh = class extends Hh {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, Gh = class extends Hh {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, Kh = class extends Hh {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.inTangents, u = this.outTangents;
		if (!l || !u) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let d = o * 2, f = e - 1;
		for (let p = 0; p !== o; ++p) {
			let o = a[c + p], m = a[s + p], h = f * d + p * 2, g = u[h], _ = u[h + 1], v = e * d + p * 2, y = l[v], b = l[v + 1], x = (n - t) / (r - t), S, C, w, T, E;
			for (let e = 0; e < 8; e++) {
				S = x * x, C = S * x, w = 1 - x, T = w * w, E = T * w;
				let e = E * t + 3 * T * x * g + 3 * w * S * y + C * r - n;
				if (Math.abs(e) < 1e-10) break;
				let i = 3 * T * (g - t) + 6 * w * x * (y - g) + 3 * S * (r - y);
				if (Math.abs(i) < 1e-10) break;
				x -= e / i, x = Math.max(0, Math.min(1, x));
			}
			i[p] = E * o + 3 * T * x * _ + 3 * w * S * b + C * m;
		}
		return i;
	}
}, qh = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = Vh(t, this.TimeBufferType), this.values = Vh(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: Vh(e.times, Array),
				values: Vh(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new Gh(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Wh(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Uh(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new Kh(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case gf:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case _f:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case vf:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case yf:
				t = this.InterpolantFactoryMethodBezier;
				break;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
			else throw Error(t);
			return Ff("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return gf;
			case this.InterpolantFactoryMethodLinear: return _f;
			case this.InterpolantFactoryMethodSmooth: return vf;
			case this.InterpolantFactoryMethodBezier: return yf;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (If("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (If("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				If("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				If("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && jf(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				If("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === vf, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) if (r) i = !0;
			else {
				let e = o * n, r = e - n, a = e + n;
				for (let o = 0; o !== n; ++o) {
					let n = t[e + o];
					if (n !== t[r + o] || n !== t[a + o]) {
						i = !0;
						break;
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, r;
	}
};
qh.prototype.ValueTypeName = "", qh.prototype.TimeBufferType = Float32Array, qh.prototype.ValueBufferType = Float32Array, qh.prototype.DefaultInterpolation = _f;
var Jh = class extends qh {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Jh.prototype.ValueTypeName = "bool", Jh.prototype.ValueBufferType = Array, Jh.prototype.DefaultInterpolation = gf, Jh.prototype.InterpolantFactoryMethodLinear = void 0, Jh.prototype.InterpolantFactoryMethodSmooth = void 0;
var Yh = class extends qh {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Yh.prototype.ValueTypeName = "color";
var Xh = class extends qh {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Xh.prototype.ValueTypeName = "number";
var Zh = class extends Hh {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) fp.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, Qh = class extends qh {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Zh(this.times, this.values, this.getValueSize(), e);
	}
};
Qh.prototype.ValueTypeName = "quaternion", Qh.prototype.InterpolantFactoryMethodSmooth = void 0;
var $h = class extends qh {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
$h.prototype.ValueTypeName = "string", $h.prototype.ValueBufferType = Array, $h.prototype.DefaultInterpolation = gf, $h.prototype.InterpolantFactoryMethodLinear = void 0, $h.prototype.InterpolantFactoryMethodSmooth = void 0;
var eg = class extends qh {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
eg.prototype.ValueTypeName = "vector";
var tg = /*@__PURE__*/ new class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, o = 0, s, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
			o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return e = e.normalize("NFC"), s ? s(e) : e;
		}, this.setURLModifier = function(e) {
			return s = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		}, this.abort = function() {
			return this.abortController.abort(), this._abortController = null, this;
		};
	}
	get abortController() {
		return this._abortController ||= new AbortController(), this._abortController;
	}
}(), ng = class {
	constructor(e) {
		this.manager = e === void 0 ? tg : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
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
	abort() {
		return this;
	}
};
ng.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var rg = "\\[\\]\\.:\\/", ig = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), ag = "[^\\[\\]\\.:\\/]", og = "[^" + rg.replace("\\.", "") + "]", sg = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", ag), cg = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", og), lg = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", ag), ug = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", ag), dg = RegExp("^" + sg + cg + lg + ug + "$"), fg = [
	"material",
	"materials",
	"bones",
	"map"
], pg = class {
	constructor(e, t, n) {
		let r = n || mg.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, mg = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(ig, "");
	}
	static parseTrackName(e) {
		let t = dg.exec(e);
		if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			fg.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
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
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			Ff("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						If("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						If("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						If("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						If("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						If("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						If("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					If("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			If("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					If("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					If("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
mg.Composite = pg, mg.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, mg.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, mg.prototype.GetterByBindingType = [
	mg.prototype._getValue_direct,
	mg.prototype._getValue_array,
	mg.prototype._getValue_arrayElement,
	mg.prototype._getValue_toArray
], mg.prototype.SetterByBindingTypeAndVersioning = [
	[
		mg.prototype._setValue_direct,
		mg.prototype._setValue_direct_setNeedsUpdate,
		mg.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		mg.prototype._setValue_array,
		mg.prototype._setValue_array_setNeedsUpdate,
		mg.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		mg.prototype._setValue_arrayElement,
		mg.prototype._setValue_arrayElement_setNeedsUpdate,
		mg.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		mg.prototype._setValue_fromArray,
		mg.prototype._setValue_fromArray_setNeedsUpdate,
		mg.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
], class e {
	static {
		e.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "185" } })), typeof window < "u" && (window.__THREE__ ? Ff("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
//#endregion
//#region node_modules/@photo-sphere-viewer/markers-plugin/index.module.js
var hg = Object.defineProperty;
((e, t) => {
	for (var n in t) hg(e, n, {
		get: t[n],
		enumerable: !0
	});
})({}, {
	EnterMarkerEvent: () => wg,
	GotoMarkerDoneEvent: () => bg,
	HideMarkersEvent: () => Mg,
	LeaveMarkerEvent: () => Sg,
	MarkerVisibilityEvent: () => vg,
	MarkersPluginEvent: () => gg,
	RenderMarkersListEvent: () => Rg,
	SelectMarkerEvent: () => Eg,
	SelectMarkerListEvent: () => Og,
	SetMarkersEvent: () => Pg,
	ShowMarkersEvent: () => Ig,
	UnselectMarkerEvent: () => Ag
});
var gg = class extends jl {}, _g = class e extends gg {
	constructor(t, n) {
		super(e.type), this.marker = t, this.visible = n;
	}
};
_g.type = "marker-visibility";
var vg = _g, yg = class e extends gg {
	constructor(t) {
		super(e.type), this.marker = t;
	}
};
yg.type = "goto-marker-done";
var bg = yg, xg = class e extends gg {
	constructor(t) {
		super(e.type), this.marker = t;
	}
};
xg.type = "leave-marker";
var Sg = xg, Cg = class e extends gg {
	constructor(t) {
		super(e.type), this.marker = t;
	}
};
Cg.type = "enter-marker";
var wg = Cg, Tg = class e extends gg {
	constructor(t, n, r) {
		super(e.type), this.marker = t, this.doubleClick = n, this.rightClick = r;
	}
};
Tg.type = "select-marker";
var Eg = Tg, Dg = class e extends gg {
	constructor(t) {
		super(e.type), this.marker = t;
	}
};
Dg.type = "select-marker-list";
var Og = Dg, kg = class e extends gg {
	constructor(t) {
		super(e.type), this.marker = t;
	}
};
kg.type = "unselect-marker";
var Ag = kg, jg = class e extends gg {
	constructor() {
		super(e.type);
	}
};
jg.type = "hide-markers";
var Mg = jg, Ng = class e extends gg {
	constructor(t) {
		super(e.type), this.markers = t;
	}
};
Ng.type = "set-markers";
var Pg = Ng, Fg = class e extends gg {
	constructor() {
		super(e.type);
	}
};
Fg.type = "show-markers";
var Ig = Fg, Lg = class e extends gg {
	constructor(t) {
		super(e.type), this.markers = t;
	}
};
Lg.type = "render-markers-list";
var Rg = Lg, zg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"10 9 81 81\"><path fill=\"currentColor\" d=\"M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z\"/><!--Created by Rohith M S from the Noun Project--></svg>\n", Bg = class extends id {
	constructor(e) {
		super(e, {
			className: "psv-markers-button",
			icon: zg,
			hoverScale: !0,
			collapsable: !0,
			tabbable: !0
		}), this.plugin = this.viewer.getPlugin("markers"), this.plugin && (this.plugin.addEventListener(Ig.type, this), this.plugin.addEventListener(Mg.type, this), this.toggleActive(!0));
	}
	destroy() {
		this.plugin && (this.plugin.removeEventListener(Ig.type, this), this.plugin.removeEventListener(Mg.type, this)), super.destroy();
	}
	isSupported() {
		return !!this.plugin;
	}
	handleEvent(e) {
		e instanceof Ig ? this.toggleActive(!0) : e instanceof Mg && this.toggleActive(!1);
	}
	onClick() {
		this.plugin.toggleAllMarkers();
	}
};
Bg.id = "markers";
var Vg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9 9 81 81\"><path fill=\"currentColor\" d=\"M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z\"/><!--Created by Rohith M S from the Noun Project--></svg>\n", Hg = "http://www.w3.org/2000/svg", Ug = "psvMarker", Wg = Y.dasherize(Ug), Gg = "marker", Kg = "markersList", qg = {
	amount: 2,
	duration: 100,
	easing: "linear"
}, Jg = (e, t) => `
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Vg} ${t}</h1>
    <ul class="psv-panel-menu-list">
    ${e.map((e) => `
        <li data-${Wg}="${e.id}" class="psv-panel-menu-item" tabindex="0">
          ${e.type === "image" ? `<span class="psv-panel-menu-item-icon"><img src="${e.definition}"/></span>` : ""}
          <span class="psv-panel-menu-item-label">${e.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`, Yg = class extends id {
	constructor(e) {
		super(e, {
			className: " psv-markers-list-button",
			icon: Vg,
			hoverScale: !0,
			collapsable: !0,
			tabbable: !0
		}), this.plugin = this.viewer.getPlugin("markers"), this.plugin && (this.viewer.addEventListener(Z.ShowPanelEvent.type, this), this.viewer.addEventListener(Z.HidePanelEvent.type, this));
	}
	destroy() {
		this.viewer.removeEventListener(Z.ShowPanelEvent.type, this), this.viewer.removeEventListener(Z.HidePanelEvent.type, this), super.destroy();
	}
	isSupported() {
		return !!this.plugin;
	}
	handleEvent(e) {
		e instanceof Z.ShowPanelEvent ? this.toggleActive(e.panelId === Kg) : e instanceof Z.HidePanelEvent && this.toggleActive(!1);
	}
	onClick() {
		this.plugin.toggleMarkersList();
	}
};
Yg.id = "markersList";
var Xg = new $(), Zg = new fp(), Qg = new $(), $g = class extends am {
	constructor(e = document.createElement("div")) {
		super(), this.isCSS3DObject = !0, this.element = e, this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.addEventListener("removed", function() {
			this.traverse(function(e) {
				e.element && e.element instanceof e.element.ownerDocument.defaultView.Element && e.element.parentNode !== null && e.element.remove();
			});
		});
	}
	copy(e, t) {
		return super.copy(e, t), this.element = e.element.cloneNode(!0), this;
	}
}, e_ = new Mp(), t_ = new Mp(), n_ = class {
	constructor(e = {}) {
		let t = this, n, r, i, a, o = {
			camera: { style: "" },
			objects: /* @__PURE__ */ new WeakMap()
		}, s = e.element === void 0 ? document.createElement("div") : e.element;
		s.style.overflow = "hidden", this.domElement = s;
		let c = document.createElement("div");
		c.style.transformOrigin = "0 0", c.style.pointerEvents = "none", s.appendChild(c);
		let l = document.createElement("div");
		l.style.transformStyle = "preserve-3d", c.appendChild(l), this.getSize = function() {
			return {
				width: n,
				height: r
			};
		}, this.render = function(e, t) {
			let s = t.projectionMatrix.elements[5] * a;
			t.view && t.view.enabled ? (c.style.transform = `translate( ${-t.view.offsetX * (n / t.view.width)}px, ${-t.view.offsetY * (r / t.view.height)}px )`, c.style.transform += `scale( ${t.view.fullWidth / t.view.width}, ${t.view.fullHeight / t.view.height} )`) : c.style.transform = "", e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld();
			let f, p;
			t.isOrthographicCamera && (f = -(t.right + t.left) / 2, p = (t.top + t.bottom) / 2);
			let h = t.view && t.view.enabled ? t.view.height / t.view.fullHeight : 1, g = t.isOrthographicCamera ? `scale( ${h} )scale(` + s + ")translate(" + u(f) + "px," + u(p) + "px)" + d(t.matrixWorldInverse) : `scale( ${h} )translateZ(` + s + "px)" + d(t.matrixWorldInverse), _ = (t.isPerspectiveCamera ? "perspective(" + s + "px) " : "") + g + "translate(" + i + "px," + a + "px)";
			o.camera.style !== _ && (l.style.transform = _, o.camera.style = _), m(e, e, t, g);
		}, this.setSize = function(e, t) {
			n = e, r = t, i = n / 2, a = r / 2, s.style.width = e + "px", s.style.height = t + "px", c.style.width = e + "px", c.style.height = t + "px", l.style.width = e + "px", l.style.height = t + "px";
		};
		function u(e) {
			return Math.abs(e) < 1e-10 ? 0 : e;
		}
		function d(e) {
			let t = e.elements;
			return "matrix3d(" + u(t[0]) + "," + u(-t[1]) + "," + u(t[2]) + "," + u(t[3]) + "," + u(t[4]) + "," + u(-t[5]) + "," + u(t[6]) + "," + u(t[7]) + "," + u(t[8]) + "," + u(-t[9]) + "," + u(t[10]) + "," + u(t[11]) + "," + u(t[12]) + "," + u(-t[13]) + "," + u(t[14]) + "," + u(t[15]) + ")";
		}
		function f(e) {
			let t = e.elements;
			return "translate(-50%,-50%)" + ("matrix3d(" + u(t[0]) + "," + u(t[1]) + "," + u(t[2]) + "," + u(t[3]) + "," + u(-t[4]) + "," + u(-t[5]) + "," + u(-t[6]) + "," + u(-t[7]) + "," + u(t[8]) + "," + u(t[9]) + "," + u(t[10]) + "," + u(t[11]) + "," + u(t[12]) + "," + u(t[13]) + "," + u(t[14]) + "," + u(t[15]) + ")");
		}
		function p(e) {
			e.isCSS3DObject && (e.element.style.display = "none");
			for (let t = 0, n = e.children.length; t < n; t++) p(e.children[t]);
		}
		function m(e, n, r, i) {
			if (e.visible === !1) {
				p(e);
				return;
			}
			if (e.isCSS3DObject) {
				let i = e.layers.test(r.layers) === !0, a = e.element;
				if (a.style.display = i === !0 ? "" : "none", i === !0) {
					e.onBeforeRender(t, n, r);
					let i;
					e.isCSS3DSprite ? (e_.copy(r.matrixWorldInverse), e_.transpose(), e.rotation2D !== 0 && e_.multiply(t_.makeRotationZ(e.rotation2D)), e.matrixWorld.decompose(Xg, Zg, Qg), e_.setPosition(Xg), e_.scale(Qg), e_.elements[3] = 0, e_.elements[7] = 0, e_.elements[11] = 0, e_.elements[15] = 1, i = f(e_)) : i = f(e.matrixWorld);
					let s = o.objects.get(e);
					if (s === void 0 || s.style !== i) {
						a.style.transform = i;
						let t = { style: i };
						o.objects.set(e, t);
					}
					a.parentNode !== l && l.appendChild(a), e.onAfterRender(t, n, r);
				}
			}
			for (let t = 0, a = e.children.length; t < a; t++) m(e.children[t], n, r, i);
		}
	}
}, r_ = class {
	constructor(e) {
		this.viewer = e, this.element = document.createElement("div"), this.element.className = "psv-markers-css3d-container", this.renderer = new n_({ element: this.element }), this.scene = new pm(), this.intersectionObserver = new IntersectionObserver((e) => {
			e.forEach((e) => {
				let t = e.target[Ug];
				t.config.visible && (t.viewportIntersection = e.isIntersecting);
			});
		}, { root: this.element }), e.addEventListener(Z.ReadyEvent.type, this, { once: !0 }), e.addEventListener(Z.SizeUpdatedEvent.type, this), e.addEventListener(Z.RenderEvent.type, this);
	}
	handleEvent(e) {
		switch (e.type) {
			case Z.ReadyEvent.type:
			case Z.SizeUpdatedEvent.type:
				this.updateSize();
				break;
			case Z.RenderEvent.type:
				this.render();
				break;
		}
	}
	destroy() {
		this.viewer.removeEventListener(Z.ReadyEvent.type, this), this.viewer.removeEventListener(Z.SizeUpdatedEvent.type, this), this.viewer.removeEventListener(Z.RenderEvent.type, this), this.intersectionObserver.disconnect();
	}
	updateSize() {
		let e = this.viewer.getSize();
		this.renderer.setSize(e.width, e.height);
	}
	render() {
		this.renderer.render(this.scene, this.viewer.renderer.camera);
	}
	addObject(e) {
		this.scene.add(e.threeElement), this.intersectionObserver.observe(e.domElement);
	}
	removeObject(e) {
		this.scene.remove(e.threeElement), this.intersectionObserver.unobserve(e.domElement);
	}
}, i_ = /* @__PURE__ */ ((e) => (e.image = "image", e.html = "html", e.element = "element", e.imageLayer = "imageLayer", e.videoLayer = "videoLayer", e.elementLayer = "elementLayer", e.polygon = "polygon", e.polygonPixels = "polygonPixels", e.polyline = "polyline", e.polylinePixels = "polylinePixels", e.square = "square", e.rect = "rect", e.circle = "circle", e.ellipse = "ellipse", e.path = "path", e))(i_ || {});
function a_(e, t = !1) {
	let n = [];
	if (Object.keys(i_).forEach((t) => {
		e[t] && n.push(t);
	}), n.length === 0 && !t) throw new X(`missing marker content, either ${Object.keys(i_).join(", ")}`);
	if (n.length > 1) throw new X(`multiple marker content, either ${Object.keys(i_).join(", ")}`);
	return n[0];
}
var o_ = class {
	constructor(e, t, n) {
		if (this.viewer = e, this.plugin = t, this.state = {
			anchor: null,
			visible: !1,
			staticTooltip: !1,
			position: null,
			position2D: null,
			positions3D: null,
			size: null
		}, !n.id) throw new X("missing marker id");
		this.type = a_(n), this.createElement(), this.update(n);
	}
	get id() {
		return this.config.id;
	}
	get data() {
		return this.config.data;
	}
	get domElement() {
		return null;
	}
	get threeElement() {
		return null;
	}
	get video() {
		return null;
	}
	destroy() {
		delete this.viewer, delete this.plugin, delete this.element, this.hideTooltip();
	}
	is3d() {
		return !1;
	}
	isNormal() {
		return !1;
	}
	isPoly() {
		return !1;
	}
	isSvg() {
		return !1;
	}
	isCss3d() {
		return !1;
	}
	update(e) {
		let t = a_(e, !0);
		if (t !== void 0 && t !== this.type) throw new X(`cannot change marker ${e.id} type`);
		if (this.config = Y.deepmerge(this.config, e), typeof this.config.tooltip == "string" && (this.config.tooltip = { content: this.config.tooltip }), this.config.tooltip && !this.config.tooltip.trigger && (this.config.tooltip.trigger = "hover"), Y.isNil(this.config.visible) && (this.config.visible = !0), Y.isNil(this.config.zIndex) && (this.config.zIndex = 1), Y.isNil(this.config.opacity) && (this.config.opacity = 1), this.config.rotation) {
			let e = this.config.rotation;
			typeof e == "object" ? this.config.rotation = {
				yaw: e.yaw ? Y.parseAngle(e.yaw, !0, !1) : 0,
				pitch: e.pitch ? Y.parseAngle(e.pitch, !0, !1) : 0,
				roll: e.roll ? Y.parseAngle(e.roll, !0, !1) : 0
			} : this.config.rotation = {
				yaw: 0,
				pitch: 0,
				roll: Y.parseAngle(e, !0, !1)
			};
		} else this.config.rotation = {
			yaw: 0,
			pitch: 0,
			roll: 0
		};
		this.state.anchor = Y.parsePoint(this.config.anchor);
	}
	getListContent() {
		return this.config.listContent ? this.config.listContent : this.config.tooltip?.content ? this.config.tooltip.content : this.config.html ? this.config.html : this.id;
	}
	showTooltip(e, t, n = !1) {
		if (this.state.visible && this.config.tooltip?.content && this.state.position2D) {
			let r = {
				...this.config.tooltip,
				style: { pointerEvents: this.state.staticTooltip ? "auto" : "none" },
				data: this,
				top: 0,
				left: 0
			};
			if (this.isPoly() || this.is3d() || this.isCss3d()) if (e || t) {
				let n = Y.getPosition(this.viewer.container);
				r.top = t - n.y + 10, r.left = e - n.x, r.box = {
					width: 20,
					height: 20
				};
			} else r.top = this.state.position2D.y, r.left = this.state.position2D.x;
			else {
				let e = this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]), t = this.state.size.width, n = this.state.size.height;
				this.config.hoverScale && !this.state.staticTooltip && (t *= this.config.hoverScale.amount, n *= this.config.hoverScale.amount), r.top = e.y - n * this.state.anchor.y + n / 2, r.left = e.x - t * this.state.anchor.x + t / 2, r.box = {
					width: t,
					height: n
				};
			}
			this.tooltip ? n ? this.tooltip.update(this.config.tooltip.content, r) : this.tooltip.move(r) : this.tooltip = this.viewer.createTooltip(r);
		}
	}
	hideTooltip() {
		this.tooltip &&= (this.tooltip.hide(), null);
	}
}, s_ = class extends o_ {
	get domElement() {
		return this.element;
	}
	constructor(e, t, n) {
		super(e, t, n);
	}
	afterCreateElement() {
		this.element[Ug] = this;
	}
	destroy() {
		delete this.element[Ug], super.destroy();
	}
	update(e) {
		super.update(e);
		let t = this.domElement;
		t.id = `psv-marker-${this.config.id}`, t.setAttribute("class", "psv-marker"), this.state.visible && t.classList.add("psv-marker--visible"), this.config.tooltip && t.classList.add("psv-marker--has-tooltip"), this.config.content && t.classList.add("psv-marker--has-content"), this.config.className && Y.addClasses(t, this.config.className), t.style.opacity = `${this.config.opacity}`, t.style.zIndex = `${30 + this.config.zIndex}`, this.config.style && Object.assign(t.style, this.config.style);
	}
}, c_ = class extends s_ {
	constructor(e, t, n) {
		super(e, t, n);
	}
	afterCreateElement() {
		super.afterCreateElement(), this.domElement.addEventListener("transitionend", () => {
			this.domElement.style.transition = "";
		});
	}
	render({ viewerPosition: e, zoomLevel: t, hoveringMarker: n }) {
		this.__updateSize();
		let r = this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);
		return r.x -= this.state.size.width * this.state.anchor.x, r.y -= this.state.size.height * this.state.anchor.y, this.state.positions3D[0].dot(this.viewer.state.direction) > 0 && r.x + this.state.size.width >= 0 && r.x - this.state.size.width <= this.viewer.state.size.width && r.y + this.state.size.height >= 0 && r.y - this.state.size.height <= this.viewer.state.size.height ? (this.domElement.style.translate = `${r.x}px ${r.y}px 0px`, this.applyScale({
			zoomLevel: t,
			viewerPosition: e,
			mouseover: this === n
		}), r) : null;
	}
	update(e) {
		if (super.update(e), !Y.isExtendedPosition(this.config.position)) throw new X(`missing marker ${this.id} position`);
		try {
			this.state.position = this.viewer.dataHelper.cleanPosition(this.config.position);
		} catch (e) {
			throw new X(`invalid marker ${this.id} position`, e);
		}
		this.state.positions3D = [this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];
		let t = this.domElement;
		t.classList.add("psv-marker--normal"), this.config.scale && Array.isArray(this.config.scale) && (this.config.scale = { zoom: this.config.scale }), typeof this.config.hoverScale == "boolean" ? this.config.hoverScale = this.config.hoverScale ? this.plugin.config.defaultHoverScale || qg : null : typeof this.config.hoverScale == "number" ? this.config.hoverScale = { amount: this.config.hoverScale } : this.config.hoverScale || (this.config.hoverScale = this.plugin.config.defaultHoverScale), this.config.hoverScale && (this.config.hoverScale = {
			...this.plugin.config.defaultHoverScale,
			...this.config.hoverScale
		}), t.style.rotate = this.config.rotation.roll === 0 ? null : up.radToDeg(this.config.rotation.roll) + "deg", t.style.transformOrigin = `${this.state.anchor.x * 100}% ${this.state.anchor.y * 100}%`;
	}
	__updateSize() {
		if (!this.needsUpdateSize) return;
		let e = this.domElement, t = !this.state.visible || !this.state.size;
		if (t && e.classList.add("psv-marker--transparent"), this.isSvg()) {
			let t = e.firstElementChild.getBoundingClientRect();
			this.state.size = {
				width: t.width,
				height: t.height
			};
		} else this.state.size = {
			width: e.offsetWidth,
			height: e.offsetHeight
		};
		t && e.classList.remove("psv-marker--transparent"), this.isSvg() && (e.style.width = this.state.size.width + "px", e.style.height = this.state.size.height + "px"), this.type !== "element" && (this.needsUpdateSize = !1);
	}
	applyScale({ zoomLevel: e, viewerPosition: t, mouseover: n }) {
		n !== null && this.config.hoverScale && (this.domElement.style.transition = `scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);
		let r = 1;
		if (typeof this.config.scale == "function") r = this.config.scale(e, t);
		else if (this.config.scale) {
			if (Array.isArray(this.config.scale.zoom)) {
				let [t, n] = this.config.scale.zoom;
				r *= t + (n - t) * Xs.EASINGS.inQuad(e / 100);
			}
			if (Array.isArray(this.config.scale.yaw)) {
				let [e, n] = this.config.scale.yaw, i = up.degToRad(this.viewer.state.hFov) / 2, a = Math.abs(Y.getShortestArc(this.state.position.yaw, t.yaw));
				r *= n + (e - n) * Xs.EASINGS.outQuad(Math.max(0, (i - a) / i));
			}
		}
		n && this.config.hoverScale && (r *= this.config.hoverScale.amount), this.domElement.style.scale = `${r}`;
	}
}, l_ = "// https://www.8thwall.com/playground/chromakey-threejs\n\nuniform sampler2D map;\nuniform float alpha;\nuniform bool keying;\nuniform vec3 color;\nuniform float similarity;\nuniform float smoothness;\nuniform float spill;\n\nvarying vec2 vUv;\n\nvec2 RGBtoUV(vec3 rgb) {\n    return vec2(\n        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,\n        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5\n    );\n}\n\nvoid main(void) {\n    gl_FragColor = texture2D(map, vUv);\n\n    if (keying) {\n        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));\n\n        float baseMask = chromaDist - similarity;\n        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);\n        gl_FragColor.a *= fullMask * alpha;\n\n        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);\n        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);\n        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);\n    } else {\n        gl_FragColor.a *= alpha;\n    }\n}\n", u_ = "varying vec2 vUv;\nuniform vec2 repeat;\nuniform vec2 offset;\n\nvoid main() {\n    vUv = uv * repeat + offset;\n    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );\n}\n", d_ = class extends Bh {
	get map() {
		return this.uniforms.map.value;
	}
	set map(e) {
		this.uniforms.map.value = e;
	}
	set alpha(e) {
		this.uniforms.alpha.value = e;
	}
	get offset() {
		return this.uniforms.offset.value;
	}
	get repeat() {
		return this.uniforms.repeat.value;
	}
	set chromaKey(e) {
		this.uniforms.keying.value = e?.enabled === !0, e?.enabled && (typeof e.color == "object" && "r" in e.color ? this.uniforms.color.value.set(e.color.r / 255, e.color.g / 255, e.color.b / 255) : this.uniforms.color.value.set(e.color ?? 65280), this.uniforms.similarity.value = e.similarity ?? .2, this.uniforms.smoothness.value = e.smoothness ?? .2);
	}
	constructor(e) {
		super({
			transparent: !0,
			depthTest: !1,
			depthWrite: !1,
			uniforms: {
				map: { value: e?.map },
				repeat: { value: new dp(1, 1) },
				offset: { value: new dp(0, 0) },
				alpha: { value: e?.alpha ?? 1 },
				keying: { value: !1 },
				color: { value: new dm(65280) },
				similarity: { value: .2 },
				smoothness: { value: .2 },
				spill: { value: .1 }
			},
			vertexShader: u_,
			fragmentShader: l_
		}), this.chromaKey = e?.chromaKey;
	}
};
function f_({ src: e, withCredentials: t, muted: n, autoplay: r }) {
	let i = document.createElement("video");
	return i.crossOrigin = t ? "use-credentials" : "anonymous", i.loop = !0, i.playsInline = !0, i.autoplay = r, i.muted = n, i.preload = "metadata", e instanceof MediaStream ? i.srcObject = e : i.src = e, i;
}
function p_(e, t, n) {
	let [r, i] = e, [a, o] = t, s = Y.greatArcDistance(e, t), c = Math.sin((1 - n) * s) / Math.sin(s), l = Math.sin(n * s) / Math.sin(s), u = c * Math.cos(i) * Math.cos(r) + l * Math.cos(o) * Math.cos(a), d = c * Math.cos(i) * Math.sin(r) + l * Math.cos(o) * Math.sin(a), f = c * Math.sin(i) + l * Math.sin(o);
	return [Math.atan2(d, u), Math.atan2(f, Math.sqrt(u * u + d * d))];
}
function m_(e) {
	let t = [e[0]], n = 0;
	for (let r = 1; r < e.length; r++) {
		let i = e[r - 1][0] - e[r][0];
		i > Math.PI ? n += 1 : i < -Math.PI && --n, t.push([e[r][0] + n * 2 * Math.PI, e[r][1]]);
	}
	return t;
}
function h_(e) {
	return e.reduce((e, t) => e.add(t), new $()).normalize();
}
function g_(e) {
	let t = m_(e), n = 0, r = [];
	for (let e = 0; e < t.length - 1; e++) {
		let i = Y.greatArcDistance(t[e], t[e + 1]) * Xs.SPHERE_RADIUS;
		r.push(i), n += i;
	}
	let i = 0;
	for (let e = 0; e < t.length - 1; e++) {
		if (i + r[e] > n / 2) {
			let a = (n / 2 - i) / r[e];
			return p_(t[e], t[e + 1], a);
		}
		i += r[e];
	}
	return t[Math.round(t.length / 2)];
}
var __ = new $(), v_ = new $(), y_ = new $(), b_ = new $(), x_ = new $(), S_ = new $();
function C_(e, t, n) {
	__.copy(n).normalize(), v_.crossVectors(e, t).normalize(), y_.crossVectors(v_, e).normalize(), b_.copy(e).multiplyScalar(-__.dot(y_)), x_.copy(y_).multiplyScalar(__.dot(e));
	let r = new $().addVectors(b_, x_).normalize();
	return S_.crossVectors(r, __), r.applyAxisAngle(S_, .01).multiplyScalar(Xs.SPHERE_RADIUS);
}
var w_ = class extends o_ {
	get threeElement() {
		return this.element;
	}
	get threeMesh() {
		return this.threeElement.children[0];
	}
	get video() {
		return this.type === "videoLayer" ? this.threeMesh.material.map.image : null;
	}
	constructor(e, t, n) {
		super(e, t, n);
	}
	is3d() {
		return !0;
	}
	createElement() {
		let e = new d_({ alpha: 0 }), t = new Ah(new Ph(1, 1), e);
		t.userData = { [Ug]: this }, Object.defineProperty(t, "visible", {
			enumerable: !0,
			get: function() {
				return this.userData[Ug].config.visible;
			},
			set: function(e) {
				this.userData[Ug].config.visible = e;
			}
		}), this.element = new om().add(t), this.type === "videoLayer" && this.viewer.needsContinuousUpdate(!0);
	}
	destroy() {
		delete this.threeMesh.userData[Ug], this.type === "videoLayer" && (this.video.pause(), this.viewer.needsContinuousUpdate(!1)), super.destroy();
	}
	render() {
		return this.viewer.renderer.isObjectVisible(this.threeMesh) ? this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position) : null;
	}
	update(e) {
		super.update(e);
		let t = this.threeMesh, n = t.parent, r = t.material;
		if (Y.isExtendedPosition(this.config.position)) {
			try {
				this.state.position = this.viewer.dataHelper.cleanPosition(this.config.position);
			} catch (e) {
				throw new X(`invalid marker ${this.id} position`, e);
			}
			if (!this.config.size) throw new X(`missing marker ${this.id} size`);
			this.state.size = this.config.size, t.scale.set(this.config.size.width / 100, this.config.size.height / 100, 1), t.position.set(t.scale.x * (.5 - this.state.anchor.x), t.scale.y * (this.state.anchor.y - .5), 0), t.rotation.set(0, 0, 0), this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position, n.position), n.lookAt(0, n.position.y, 0), t.rotateY(-this.config.rotation.yaw), t.rotateX(-this.config.rotation.pitch), t.rotateZ(-this.config.rotation.roll);
			let e = t.geometry.getAttribute("position");
			this.state.positions3D = [
				0,
				1,
				3,
				2
			].map((n) => {
				let r = new $();
				return r.fromBufferAttribute(e, n), t.localToWorld(r);
			});
		} else {
			if (this.config.position?.length !== 4) throw new X(`missing marker ${this.id} position`);
			let e;
			try {
				e = this.config.position.map((e) => this.viewer.dataHelper.cleanPosition(e));
			} catch (e) {
				throw new X(`invalid marker ${this.id} position`, e);
			}
			let n = e.map((e) => this.viewer.dataHelper.sphericalCoordsToVector3(e)), i = h_(n);
			this.state.position = this.viewer.dataHelper.vector3ToSphericalCoords(i), this.state.positions3D = n;
			let a = t.geometry.getAttribute("position");
			[
				n[0],
				n[1],
				n[3],
				n[2]
			].forEach((e, t) => {
				a.setX(t, e.x), a.setY(t, e.y), a.setZ(t, e.z);
			}), a.needsUpdate = !0, this.__setTextureWrap(r);
		}
		switch (this.type) {
			case "videoLayer":
				if (this.definition !== this.config.videoLayer) {
					r.map?.dispose();
					let e = f_({
						src: this.config.videoLayer,
						withCredentials: this.viewer.config.withCredentials(this.config.videoLayer),
						muted: !0,
						autoplay: this.config.autoplay ?? !0
					});
					r.map = new Nh(e), r.alpha = 0, e.addEventListener("loadedmetadata", () => {
						this.viewer && (r.alpha = this.config.opacity, Y.isExtendedPosition(this.config.position) || (t.material.userData[Ug] = {
							width: e.videoWidth,
							height: e.videoHeight
						}, this.__setTextureWrap(r)));
					}, { once: !0 }), e.autoplay && e.play(), this.definition = this.config.videoLayer;
				} else r.alpha = this.config.opacity;
				break;
			case "imageLayer":
				if (this.definition !== this.config.imageLayer) {
					r.map?.dispose();
					let e = new Ap();
					r.map = e, r.alpha = 0, this.viewer.textureLoader.loadImage(this.config.imageLayer).then((n) => {
						this.viewer && (Y.isExtendedPosition(this.config.position) || (t.material.userData[Ug] = {
							width: n.width,
							height: n.height
						}, this.__setTextureWrap(r)), e.image = n, e.anisotropy = 4, e.needsUpdate = !0, r.alpha = this.config.opacity, this.viewer.needsUpdate());
					}), this.definition = this.config.imageLayer;
				} else r.alpha = this.config.opacity;
				break;
		}
		r.chromaKey = this.config.chromaKey, t.renderOrder = 1e3 + this.config.zIndex, t.geometry.boundingBox = null;
	}
	__setTextureWrap(e) {
		let t = e.userData[Ug];
		if (!t || !t.height || !t.width) {
			e.repeat.set(1, 1), e.offset.set(0, 0);
			return;
		}
		let n = this.config.position.map((e) => this.viewer.dataHelper.cleanPosition(e)), r = Y.greatArcDistance([n[0].yaw, n[0].pitch], [n[1].yaw, n[1].pitch]), i = Y.greatArcDistance([n[3].yaw, n[3].pitch], [n[2].yaw, n[2].pitch]), a = Y.greatArcDistance([n[1].yaw, n[1].pitch], [n[2].yaw, n[2].pitch]), o = Y.greatArcDistance([n[0].yaw, n[0].pitch], [n[3].yaw, n[3].pitch]), s = (r + i) / (a + o), c = t.width / t.height, l = 0, u = 0;
		s < c ? l = c - s : u = 1 / c - 1 / s, e.repeat.set(1 - l, 1 - u), e.offset.set(l / 2, u / 2);
	}
}, T_ = class extends s_ {
	constructor(e, t, n) {
		super(e, t, n), this.viewportIntersection = !1;
	}
	get threeElement() {
		return this.object;
	}
	isCss3d() {
		return !0;
	}
	createElement() {
		this.element = document.createElement("div"), this.object = new $g(this.element), this.object.userData = { [Ug]: this }, Object.defineProperty(this.object, "visible", {
			enumerable: !0,
			get: function() {
				return this.userData[Ug].config.visible;
			},
			set: function(e) {
				this.userData[Ug].config.visible = e;
			}
		}), this.afterCreateElement();
	}
	destroy() {
		delete this.object.userData[Ug], delete this.object, super.destroy();
	}
	render({ viewerPosition: e, zoomLevel: t }) {
		let n = this.domElement;
		if (this.state.size = {
			width: n.offsetWidth,
			height: n.offsetHeight
		}, this.state.positions3D[0].dot(this.viewer.state.direction) > 0 && this.viewportIntersection) {
			let n = this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);
			return this.config.elementLayer.updateMarker?.({
				marker: this,
				position: n,
				viewerPosition: e,
				zoomLevel: t,
				viewerSize: this.viewer.state.size
			}), n;
		} else return null;
	}
	update(e) {
		if (super.update(e), !Y.isExtendedPosition(this.config.position)) throw new X(`missing marker ${this.id} position`);
		try {
			this.state.position = this.viewer.dataHelper.cleanPosition(this.config.position);
		} catch (e) {
			throw new X(`invalid marker ${this.id} position`, e);
		}
		this.state.positions3D = [this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];
		let t = this.threeElement, n = this.domElement;
		n.classList.add("psv-marker--css3d"), n.childNodes.forEach((e) => e.remove()), n.appendChild(this.config.elementLayer), this.config.elementLayer.style.display = "block", t.position.copy(this.state.positions3D[0]).multiplyScalar(100), t.lookAt(0, this.state.positions3D[0].y * 100, 0), t.rotateY(-this.config.rotation.yaw), t.rotateX(-this.config.rotation.pitch), t.rotateZ(-this.config.rotation.roll);
	}
}, E_ = class extends c_ {
	constructor(e, t, n) {
		super(e, t, n);
	}
	isNormal() {
		return !0;
	}
	createElement() {
		this.element = document.createElement("div"), this.afterCreateElement();
	}
	render(e) {
		let t = super.render(e);
		return t && this.type === "element" && this.config.element.updateMarker?.({
			marker: this,
			position: t,
			viewerPosition: e.viewerPosition,
			zoomLevel: e.zoomLevel,
			viewerSize: this.viewer.state.size
		}), t;
	}
	update(e) {
		super.update(e);
		let t = this.domElement;
		if (this.config.image && !this.config.size) throw new X(`missing marker ${this.id} size`);
		switch (this.config.size ? (this.needsUpdateSize = !1, this.state.size = this.config.size, t.style.width = this.config.size.width + "px", t.style.height = this.config.size.height + "px") : this.needsUpdateSize = !0, this.type) {
			case "image":
				this.definition = this.config.image, t.style.backgroundImage = `url("${this.config.image}")`;
				break;
			case "html":
				this.definition = this.config.html, t.innerHTML = this.config.html;
				break;
			case "element":
				this.definition !== this.config.element && (this.definition = this.config.element, t.childNodes.forEach((e) => e.remove()), t.appendChild(this.config.element), this.config.element.style.display = "block");
				break;
		}
	}
}, D_ = class extends s_ {
	constructor(e, t, n) {
		super(e, t, n);
	}
	createElement() {
		this.element = document.createElementNS(Hg, "path"), this.element[Ug] = this;
	}
	isPoly() {
		return !0;
	}
	get isPixels() {
		return this.type === "polygonPixels" || this.type === "polylinePixels";
	}
	get isPolygon() {
		return this.type === "polygon" || this.type === "polygonPixels";
	}
	get isPolyline() {
		return this.type === "polyline" || this.type === "polylinePixels";
	}
	get coords() {
		return this.definition;
	}
	render() {
		let e = this.__getAllPolyPositions();
		if (e[0].length > (this.isPolygon ? 2 : 1)) {
			let t = this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position), n = e.filter((e) => e.length > 0).map((e) => {
				let n = "M";
				return n += e.map((e) => `${e.x - t.x},${e.y - t.y}`).join("L"), this.isPolygon && (n += "Z"), n;
			}).join(" ");
			return this.domElement.setAttributeNS(null, "d", n), this.domElement.setAttributeNS(null, "transform", `translate(${t.x} ${t.y})`), t;
		} else return null;
	}
	update(e) {
		super.update(e);
		let t = this.domElement;
		t.classList.add("psv-marker--poly"), this.config.svgStyle ? (Object.entries(this.config.svgStyle).forEach(([e, n]) => {
			t.setAttributeNS(null, Y.dasherize(e), n);
		}), this.isPolyline && !this.config.svgStyle.fill && t.setAttributeNS(null, "fill", "none")) : this.isPolygon ? t.setAttributeNS(null, "fill", "rgba(0,0,0,0.5)") : this.isPolyline && (t.setAttributeNS(null, "fill", "none"), t.setAttributeNS(null, "stroke", "rgb(0,0,0)"));
		try {
			let e = this.config[this.type];
			if (!Array.isArray(e[0]) && typeof e[0] != "object") for (let t = 0; t < e.length; t++) e.splice(t, 2, [e[t], e[t + 1]]);
			if (!Array.isArray(e[0][0]) && typeof e[0][0] != "object" && (e = [e]), this.isPolyline && e.length > 1) throw new X("polylines cannot have holes");
			this.isPixels ? this.definition = e.map((e) => e.map((e) => {
				let t;
				return t = Y.isExtendedPosition(e) ? this.viewer.dataHelper.cleanPosition(e) : this.viewer.dataHelper.textureCoordsToSphericalCoords({
					textureX: e[0],
					textureY: e[1]
				}), [t.yaw, t.pitch];
			})) : this.definition = e.map((e) => e.map((e) => {
				let t;
				return t = Y.isExtendedPosition(e) ? this.viewer.dataHelper.cleanPosition(e) : this.viewer.dataHelper.cleanPosition({
					yaw: e[0],
					pitch: e[1]
				}), [t.yaw, t.pitch];
			}));
		} catch (e) {
			throw new X(`invalid marker ${this.id} position`, e);
		}
		if (this.positions3D = this.coords.map((e) => e.map((e) => this.viewer.dataHelper.sphericalCoordsToVector3({
			yaw: e[0],
			pitch: e[1]
		}))), this.isPolygon) {
			let e = h_(this.positions3D[0]);
			this.state.position = this.viewer.dataHelper.vector3ToSphericalCoords(e);
		} else {
			let e = g_(this.coords[0]);
			this.state.position = {
				yaw: e[0],
				pitch: e[1]
			};
		}
		this.state.positions3D = this.positions3D[0];
	}
	__getAllPolyPositions() {
		return this.positions3D.map((e) => this.__getPolyPositions(e));
	}
	__getPolyPositions(e) {
		let t = e.length, n = e.map((e) => ({
			vector: e,
			visible: e.dot(this.viewer.state.direction) > 0
		})), r = [];
		return n.forEach((e, i) => {
			e.visible || [i === 0 ? n[t - 1] : n[i - 1], i === t - 1 ? n[0] : n[i + 1]].forEach((t) => {
				t.visible && r.push({
					visible: t.vector,
					invisible: e.vector,
					index: i
				});
			});
		}), r.reverse().forEach((e) => {
			n.splice(e.index, 0, {
				vector: C_(e.visible, e.invisible, this.viewer.state.direction),
				visible: !0
			});
		}), n.filter((e) => e.visible).map((e) => this.viewer.dataHelper.vector3ToViewerCoords(e.vector));
	}
}, O_ = class extends c_ {
	get svgElement() {
		return this.domElement.firstElementChild;
	}
	constructor(e, t, n) {
		super(e, t, n);
	}
	isSvg() {
		return !0;
	}
	createElement() {
		let e = this.type === "square" ? "rect" : this.type, t = document.createElementNS(Hg, e);
		this.element = document.createElementNS(Hg, "svg"), this.element.appendChild(t), this.afterCreateElement();
	}
	update(e) {
		super.update(e);
		let t = this.svgElement;
		switch (this.needsUpdateSize = !0, this.type) {
			case "square":
				this.definition = {
					x: 0,
					y: 0,
					width: this.config.square,
					height: this.config.square
				};
				break;
			case "rect":
				Array.isArray(this.config.rect) ? this.definition = {
					x: 0,
					y: 0,
					width: this.config.rect[0],
					height: this.config.rect[1]
				} : this.definition = {
					x: 0,
					y: 0,
					width: this.config.rect.width,
					height: this.config.rect.height
				};
				break;
			case "circle":
				this.definition = {
					cx: this.config.circle,
					cy: this.config.circle,
					r: this.config.circle
				};
				break;
			case "ellipse":
				Array.isArray(this.config.ellipse) ? this.definition = {
					cx: this.config.ellipse[0],
					cy: this.config.ellipse[1],
					rx: this.config.ellipse[0],
					ry: this.config.ellipse[1]
				} : this.definition = {
					cx: this.config.ellipse.rx,
					cy: this.config.ellipse.ry,
					rx: this.config.ellipse.rx,
					ry: this.config.ellipse.ry
				};
				break;
			case "path":
				this.definition = { d: this.config.path };
				break;
		}
		Object.entries(this.definition).forEach(([e, n]) => {
			t.setAttributeNS(null, e, n);
		}), this.config.svgStyle ? Object.entries(this.config.svgStyle).forEach(([e, n]) => {
			t.setAttributeNS(null, Y.dasherize(e), n);
		}) : t.setAttributeNS(null, "fill", "rgba(0,0,0,0.5)");
	}
}, k_ = Y.getConfigParser({
	clickEventOnMarker: !1,
	gotoMarkerSpeed: "8rpm",
	markers: null,
	defaultHoverScale: null
}, { defaultHoverScale(e) {
	return e ? (e === !0 && (e = qg), typeof e == "number" && (e = { amount: e }), {
		...qg,
		...e
	}) : null;
} });
function A_(e) {
	switch (a_(e, !1)) {
		case "image":
		case "html":
		case "element": return E_;
		case "imageLayer":
		case "videoLayer": return w_;
		case "elementLayer": return T_;
		case "polygon":
		case "polyline":
		case "polygonPixels":
		case "polylinePixels": return D_;
		case "square":
		case "rect":
		case "circle":
		case "ellipse":
		case "path": return O_;
		default: throw new X("invalid marker type");
	}
}
var j_ = class e extends Cd {
	constructor(e, t) {
		super(e, t), this.markers = {}, this.state = {
			allVisible: !0,
			showAllTooltips: !1,
			currentMarker: null,
			hoveringMarker: null,
			needsReRender: !1,
			lastClientX: null,
			lastClientY: null
		}, this.container = document.createElement("div"), this.container.className = "psv-markers", this.viewer.container.appendChild(this.container), this.container.addEventListener("contextmenu", (e) => e.preventDefault()), this.svgContainer = document.createElementNS(Hg, "svg"), this.svgContainer.setAttribute("class", "psv-markers-svg-container"), this.container.appendChild(this.svgContainer), this.css3DContainer = new r_(e), this.container.appendChild(this.css3DContainer.element), this.container.addEventListener("mouseenter", this, !0), this.container.addEventListener("mouseleave", this, !0), this.container.addEventListener("mousemove", this, !0);
	}
	static withConfig(t) {
		return [e, t];
	}
	init() {
		super.init(), Y.checkStylesheet(this.viewer.container, "markers-plugin"), this.viewer.addEventListener(Z.ClickEvent.type, this), this.viewer.addEventListener(Z.DoubleClickEvent.type, this), this.viewer.addEventListener(Z.RenderEvent.type, this), this.viewer.addEventListener(Z.ConfigChangedEvent.type, this), this.viewer.addEventListener(Z.ObjectEnterEvent.type, this), this.viewer.addEventListener(Z.ObjectHoverEvent.type, this), this.viewer.addEventListener(Z.ObjectLeaveEvent.type, this), this.viewer.addEventListener(Z.ReadyEvent.type, this, { once: !0 });
	}
	destroy() {
		this.clearMarkers(!1), this.viewer.unobserveObjects(Ug), this.viewer.removeEventListener(Z.ClickEvent.type, this), this.viewer.removeEventListener(Z.DoubleClickEvent.type, this), this.viewer.removeEventListener(Z.RenderEvent.type, this), this.viewer.removeEventListener(Z.ObjectEnterEvent.type, this), this.viewer.removeEventListener(Z.ObjectHoverEvent.type, this), this.viewer.removeEventListener(Z.ObjectLeaveEvent.type, this), this.viewer.removeEventListener(Z.ReadyEvent.type, this), this.css3DContainer.destroy(), this.viewer.container.removeChild(this.container), super.destroy();
	}
	handleEvent(e) {
		switch (e.type) {
			case Z.ReadyEvent.type:
				this.config.markers && (this.setMarkers(this.config.markers), delete this.config.markers);
				break;
			case Z.RenderEvent.type:
				this.renderMarkers();
				break;
			case Z.ClickEvent.type:
				this.__onClick(e, !1);
				break;
			case Z.DoubleClickEvent.type:
				this.__onClick(e, !0);
				break;
			case Z.ObjectEnterEvent.type:
			case Z.ObjectLeaveEvent.type:
			case Z.ObjectHoverEvent.type:
				if (e.userDataKey === Ug) {
					let t = e.originalEvent, n = e.object.userData[Ug];
					switch (e.type) {
						case Z.ObjectEnterEvent.type:
							n.config.style?.cursor ? this.viewer.setCursor(n.config.style.cursor) : (n.config.tooltip || n.config.content) && this.viewer.setCursor("pointer"), this.__onEnterMarker(t, n);
							break;
						case Z.ObjectLeaveEvent.type:
							this.viewer.setCursor(null), this.__onLeaveMarker(n);
							break;
						case Z.ObjectHoverEvent.type:
							this.__onHoverMarker(t, n);
							break;
					}
				}
				break;
			case "mouseenter": {
				let t = this.__getTargetMarker(Y.getEventTarget(e));
				this.__onEnterMarker(e, t);
				break;
			}
			case "mouseleave": {
				let t = this.__getTargetMarker(Y.getEventTarget(e));
				this.__onLeaveMarker(t);
				break;
			}
			case "mousemove": {
				let t = this.__getTargetMarker(Y.getEventTarget(e), !0);
				this.__onHoverMarker(e, t);
				break;
			}
		}
	}
	toggleAllMarkers() {
		this.state.allVisible ? this.hideAllMarkers() : this.showAllMarkers();
	}
	showAllMarkers() {
		this.state.allVisible = !0, Object.values(this.markers).forEach((e) => {
			e.config.visible = !0;
		}), this.renderMarkers(), this.dispatchEvent(new Ig());
	}
	hideAllMarkers() {
		this.state.allVisible = !1, Object.values(this.markers).forEach((e) => {
			e.config.visible = !1;
		}), this.renderMarkers(), this.dispatchEvent(new Mg());
	}
	toggleAllTooltips() {
		this.state.showAllTooltips ? this.hideAllTooltips() : this.showAllTooltips();
	}
	showAllTooltips() {
		this.state.showAllTooltips = !0, Object.values(this.markers).forEach((e) => {
			e.state.staticTooltip = !0, e.showTooltip();
		});
	}
	hideAllTooltips() {
		this.state.showAllTooltips = !1, Object.values(this.markers).forEach((e) => {
			e.state.staticTooltip = !1, e.hideTooltip();
		});
	}
	getNbMarkers() {
		return Object.keys(this.markers).length;
	}
	getMarkers() {
		return Object.values(this.markers);
	}
	addMarker(e, t = !0) {
		if (this.markers[e.id]) throw new X(`marker "${e.id}" already exists`);
		let n = new (A_(e))(this.viewer, this, e);
		n.isPoly() ? this.svgContainer.appendChild(n.domElement) : n.isCss3d() ? this.css3DContainer.addObject(n) : n.is3d() ? this.viewer.renderer.addObject(n.threeElement) : this.container.appendChild(n.domElement), this.markers[n.id] = n, this.state.showAllTooltips && (n.state.staticTooltip = !0), t && this.__afterChangeMarkers();
	}
	getMarker(e) {
		let t = typeof e == "object" ? e.id : e;
		if (!this.markers[t]) throw new X(`cannot find marker "${t}"`);
		return this.markers[t];
	}
	getCurrentMarker() {
		return this.state.currentMarker;
	}
	updateMarker(e, t = !0) {
		let n = this.getMarker(e.id);
		n.update(e), t && (this.__afterChangeMarkers(), (n === this.state.hoveringMarker && n.config.tooltip?.trigger === "hover" || n.state.staticTooltip) && n.showTooltip(this.state.lastClientX, this.state.lastClientY, !0));
	}
	removeMarker(e, t = !0) {
		let n = this.getMarker(e);
		n.isPoly() ? this.svgContainer.removeChild(n.domElement) : n.isCss3d() ? this.css3DContainer.removeObject(n) : n.is3d() ? this.viewer.renderer.removeObject(n.threeElement) : this.container.removeChild(n.domElement), this.state.hoveringMarker === n && (this.state.hoveringMarker = null), this.state.currentMarker === n && (this.state.currentMarker = null), n.destroy(), delete this.markers[n.id], t && this.__afterChangeMarkers();
	}
	removeMarkers(e, t = !0) {
		e.forEach((e) => this.removeMarker(e, !1)), t && this.__afterChangeMarkers();
	}
	setMarkers(e, t = !0) {
		this.clearMarkers(!1), e?.forEach((e) => {
			this.addMarker(e, !1);
		}), t && this.__afterChangeMarkers();
	}
	clearMarkers(e = !0) {
		Object.keys(this.markers).forEach((e) => {
			this.removeMarker(e, !1);
		}), e && this.__afterChangeMarkers();
	}
	gotoMarker(e, t = this.config.gotoMarkerSpeed) {
		let n = this.getMarker(e);
		return t ? this.viewer.animate({
			...n.state.position,
			zoom: n.config.zoomLvl,
			speed: t
		}).then(() => {
			this.dispatchEvent(new bg(n));
		}) : (this.viewer.rotate(n.state.position), Y.isNil(n.config.zoomLvl) || this.viewer.zoom(n.config.zoomLvl), this.dispatchEvent(new bg(n)), Promise.resolve());
	}
	hideMarker(e) {
		this.toggleMarker(e, !1);
	}
	showMarker(e) {
		this.toggleMarker(e, !0);
	}
	showMarkerTooltip(e) {
		let t = this.getMarker(e);
		t.state.staticTooltip = !0, t.showTooltip();
	}
	hideMarkerTooltip(e) {
		let t = this.getMarker(e);
		t.state.staticTooltip = !1, t.hideTooltip();
	}
	toggleMarker(e, t) {
		let n = this.getMarker(e);
		n.config.visible = Y.isNil(t) ? !n.config.visible : t, this.renderMarkers();
	}
	showMarkerPanel(e) {
		let t = this.getMarker(e);
		t.config.content ? this.viewer.panel.show({
			id: Gg,
			content: t.config.content
		}) : this.hideMarkerPanel();
	}
	hideMarkerPanel() {
		this.viewer.panel.hide(Gg);
	}
	toggleMarkersList() {
		this.viewer.panel.isVisible(Kg) ? this.hideMarkersList() : this.showMarkersList();
	}
	showMarkersList() {
		let e = [];
		Object.values(this.markers).forEach((t) => {
			t.config.visible && !t.config.hideList && e.push(t);
		});
		let t = new Rg(e);
		this.dispatchEvent(t), e = t.markers, this.viewer.panel.show({
			id: Kg,
			content: Jg(e, this.viewer.config.lang[Bg.id]),
			noMargin: !0,
			clickHandler: (e) => {
				let t = Y.getClosest(e, ".psv-panel-menu-item"), n = t ? t.dataset[Ug] : void 0;
				if (n) {
					let e = this.getMarker(n);
					this.dispatchEvent(new Og(e)), this.gotoMarker(e.id), this.hideMarkersList();
				}
			}
		});
	}
	hideMarkersList() {
		this.viewer.panel.hide(Kg);
	}
	renderMarkers() {
		if (this.state.needsReRender) {
			this.state.needsReRender = !1;
			return;
		}
		let e = this.viewer.getZoomLevel(), t = this.viewer.getPosition(), n = this.state.hoveringMarker;
		Object.values(this.markers).forEach((r) => {
			let i = r.config.visible, a = null;
			i &&= (a = r.render({
				viewerPosition: t,
				zoomLevel: e,
				hoveringMarker: n
			}), !!a);
			let o = r.state.visible !== i;
			r.state.visible = i, r.state.position2D = a, r.domElement && Y.toggleClass(r.domElement, "psv-marker--visible", i), i ? r.state.staticTooltip ? r.showTooltip() : r !== this.state.hoveringMarker && r.hideTooltip() : r.hideTooltip(), o && (this.dispatchEvent(new vg(r, i)), (r.is3d() || r.isCss3d()) && (this.state.needsReRender = !0));
		}), this.state.needsReRender && this.viewer.needsUpdate();
	}
	__getTargetMarker(e, t = !1) {
		if (e instanceof Node) {
			let n = t ? Y.getClosest(e, ".psv-marker") : e;
			return n ? n[Ug] : void 0;
		} else if (Array.isArray(e)) return e.map((e) => e.userData[Ug]).filter((e) => !!e).sort((e, t) => t.config.zIndex - e.config.zIndex)[0];
		else return null;
	}
	__onEnterMarker(e, t) {
		t && (this.state.hoveringMarker = t, this.state.lastClientX = e.clientX, this.state.lastClientY = e.clientY, this.dispatchEvent(new wg(t)), t instanceof c_ && t.applyScale({
			zoomLevel: this.viewer.getZoomLevel(),
			viewerPosition: this.viewer.getPosition(),
			mouseover: !0
		}), !t.state.staticTooltip && t.config.tooltip?.trigger === "hover" && t.showTooltip(e.clientX, e.clientY));
	}
	__onLeaveMarker(e) {
		e && (this.dispatchEvent(new Sg(e)), e instanceof c_ && e.applyScale({
			zoomLevel: this.viewer.getZoomLevel(),
			viewerPosition: this.viewer.getPosition(),
			mouseover: !1
		}), this.state.hoveringMarker = null, !e.state.staticTooltip && e.config.tooltip?.trigger === "hover" ? e.hideTooltip() : e.state.staticTooltip && e.showTooltip());
	}
	__onHoverMarker(e, t) {
		t && (this.state.lastClientX = e.clientX, this.state.lastClientY = e.clientY, (t.isPoly() || t.is3d() || t.isCss3d()) && t.config.tooltip?.trigger === "hover" && t.showTooltip(e.clientX, e.clientY));
	}
	__onClick(e, t) {
		let n = this.__getTargetMarker(e.data.objects), r = this.__getTargetMarker(e.data.target, !0) || n;
		this.state.currentMarker && this.state.currentMarker !== r && (this.dispatchEvent(new Ag(this.state.currentMarker)), this.viewer.panel.hide(Gg), !this.state.showAllTooltips && this.state.currentMarker.config.tooltip?.trigger === "click" && this.hideMarkerTooltip(this.state.currentMarker.id), this.state.currentMarker = null), r && (this.state.currentMarker = r, this.dispatchEvent(new Eg(r, t, e.data.rightclick)), this.config.clickEventOnMarker ? e.data.marker = r : e.stopImmediatePropagation(), this.markers[r.id] && !e.data.rightclick && (r.config.tooltip?.trigger === "click" ? r.tooltip ? this.hideMarkerTooltip(r.id) : this.showMarkerTooltip(r.id) : this.showMarkerPanel(r.id)));
	}
	__afterChangeMarkers() {
		this.__refreshUi(), this.__checkObjectsObserver(), this.viewer.needsUpdate(), this.dispatchEvent(new Pg(this.getMarkers()));
	}
	__refreshUi() {
		let e = Object.values(this.markers).filter((e) => !e.config.hideList).length;
		e === 0 ? (this.viewer.panel.hide(Gg), this.viewer.panel.hide(Kg)) : this.viewer.panel.isVisible(Kg) ? this.showMarkersList() : this.viewer.panel.isVisible(Gg) && (this.state.currentMarker ? this.showMarkerPanel(this.state.currentMarker.id) : this.viewer.panel.hide()), this.viewer.navbar.getButton(Bg.id, !1)?.toggle(e > 0), this.viewer.navbar.getButton(Yg.id, !1)?.toggle(e > 0);
	}
	__checkObjectsObserver() {
		Object.values(this.markers).some((e) => e.is3d()) ? this.viewer.observeObjects(Ug) : this.viewer.unobserveObjects(Ug);
	}
};
j_.id = "markers", j_.VERSION = "5.14.3", j_.configParser = k_, j_.readonlyOptions = ["markers"];
var M_ = j_;
Td.lang[Bg.id] = "Markers", Td.lang[Yg.id] = "Markers list", Md(Bg, "caption:left"), Md(Yg, "caption:left");
//#endregion
//#region www/Development/js/Components/Panorama/panorama360.mjs
var N_ = import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1), P_ = (e, t) => new Promise((n, r) => {
	let i = document.getElementById(e);
	if (i?.sheet) {
		n();
		return;
	}
	i ||= Object.assign(document.createElement("link"), {
		id: e,
		rel: "stylesheet",
		href: `${N_}vendor/photo-sphere-viewer/${t}`
	});
	let a = () => {
		i.removeEventListener("error", o), n();
	}, o = () => {
		i.removeEventListener("load", a), r(/* @__PURE__ */ Error(`Nepodařilo se načíst styl panoramatu ${t}.`));
	};
	i.addEventListener("load", a, { once: !0 }), i.addEventListener("error", o, { once: !0 }), i.isConnected || document.head.append(i), i.sheet && a();
}), F_ = Promise.all([["panorama-core-style", "core.css"], ["panorama-markers-style", "markers.css"]].map(([e, t]) => P_(e, t))), I_ = (e) => String(e ?? "").replace(/[&<>'"]/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#039;",
	"\"": "&quot;"
})[e]), L_ = (e) => {
	try {
		let t = JSON.parse(e.querySelector("[data-panorama-markers]")?.textContent ?? "[]");
		return Array.isArray(t) ? t : [];
	} catch (e) {
		return console.warn("Body panoramatu mají neplatný formát.", e), [];
	}
}, R_ = (e, t) => {
	let n = ["complex", "polygon"].includes(e.kind) ? e.kind : "poi", r = I_(e.label), i = I_(e.detail), a = String(e.link ?? "").trim(), o = /^(?:https?:\/\/|\/|mailto:|tel:|#)/i.test(a) ? a : "", s = o ? I_(o) : "", c = /^mdi-[a-z0-9-]+$/.test(e.icon ?? "") ? e.icon : "mdi-map-marker-outline", l = {
		yaw: `${Number(e.yaw) || 0}deg`,
		pitch: `${Number(e.pitch) || 0}deg`
	};
	if (n === "polygon") {
		let a = Array.isArray(e.points) ? e.points.filter((e) => Array.isArray(e) && e.length >= 2).map((e) => [`${Number(e[0]) || 0}deg`, `${Number(e[1]) || 0}deg`]) : [];
		return a.length < 3 ? null : {
			id: e.id,
			polygon: a,
			className: "panoramaMarker panoramaMarker--polygon",
			svgStyle: {
				fill: t.polygonFill,
				stroke: t.polygonStroke,
				strokeWidth: `${t.polygonStrokeWidth}px`,
				cursor: o ? "pointer" : "default"
			},
			tooltip: {
				content: `<strong>${r}</strong>${i ? `<br><span>${i}</span>` : ""}`,
				position: "top center",
				className: "panoramaPolygonTooltip"
			},
			data: {
				kind: n,
				link: o
			}
		};
	}
	return n === "complex" ? {
		id: e.id,
		position: l,
		html: `<div class="qtip-content panoramaComplexTip"><div class="homehover-content">
				<h2>${r}</h2>${i ? `<p>${i}</p>` : ""}
			</div></div>`,
		size: {
			width: t.complexWidth,
			height: t.complexHeight
		},
		anchor: {
			x: 0,
			y: (t.complexHeight + t.complexTailLength) / t.complexHeight
		},
		className: "panoramaMarker panoramaMarker--complex",
		zIndex: 10,
		data: {
			kind: n,
			link: o
		}
	} : {
		id: e.id,
		position: l,
		html: s ? `<a class="panoramaPoi" href="${s}" aria-label="${r}"><i class="mdi ${c}" aria-hidden="true"></i></a>` : `<span class="panoramaPoi" role="img" tabindex="0" aria-label="${r}"><i class="mdi ${c}" aria-hidden="true"></i></span>`,
		size: {
			width: t.poiSize,
			height: t.poiSize
		},
		anchor: {
			x: .5,
			y: (t.poiSize / 2 + t.poiIconSize / 2 + t.poiLineLength) / t.poiSize
		},
		className: "panoramaMarker panoramaMarker--poi",
		tooltip: {
			content: `<strong>${r}</strong>${i ? `<br><span>${i}</span>` : ""}`,
			position: "top center",
			className: "panoramaPoiTooltip"
		},
		data: { kind: n }
	};
};
F_.then(() => document.querySelectorAll("[data-panorama-hero]").forEach((e) => {
	let t = e.querySelector("[data-panorama-viewer]"), n = e.querySelector("[data-panorama-status]"), r = L_(e), i = r.find((e) => e.kind === "complex"), a = r.filter((e) => e.kind === "polygon"), o = a.flatMap((e) => Array.isArray(e.points) ? e.points.filter((e) => Array.isArray(e) && e.length >= 2 && Number.isFinite(Number(e[0])) && Number.isFinite(Number(e[1]))) : []), s = o.length >= 3 ? {
		yaw: Math.atan2(o.reduce((e, t) => e + Math.sin(Number(t[0]) * Math.PI / 180), 0), o.reduce((e, t) => e + Math.cos(Number(t[0]) * Math.PI / 180), 0)) * 180 / Math.PI,
		pitch: (Math.min(...o.map((e) => Number(e[1]))) + Math.max(...o.map((e) => Number(e[1])))) / 2
	} : i, c = getComputedStyle(e), l = (e, t) => Number.parseFloat(c.getPropertyValue(e)) || t, u = {
		poiSize: l("--panorama-poi-marker-size", 42),
		poiIconSize: ((t, n) => {
			let r = document.createElement("span");
			r.style.cssText = `position:absolute;visibility:hidden;width:var(${t});`, e.append(r);
			let i = r.getBoundingClientRect().width;
			return r.remove(), i || n;
		})("--panorama-poi-icon-size", 30),
		poiLineLength: l("--panorama-poi-line-length", 80),
		complexWidth: l("--panorama-complex-marker-width", 250),
		complexHeight: l("--panorama-complex-marker-height", 96),
		complexTailLength: l("--panorama-complex-tail-length", 44),
		polygonFill: c.getPropertyValue("--panorama-polygon-fill").trim() || "rgba(64, 201, 139, 0.22)",
		polygonStroke: c.getPropertyValue("--panorama-polygon-stroke").trim() || "#40c98b",
		polygonStrokeWidth: l("--panorama-polygon-stroke-width", 2)
	}, d = r.map((e) => R_(e, u)).filter(Boolean), f = (e, t) => e == null || e === "" ? t : Number(e), p = f(t?.dataset.panoramaYaw, -30);
	if (!(!t || !t.dataset.panoramaSrc)) try {
		let r = t.dataset.panoramaSrc, o = t.dataset.panoramaSrcPreview || r, c = t.dataset.panoramaSrcMobile, l = window.matchMedia("(max-width: 639px)"), u = l.matches && c ? c : o, m = Math.min(150, Math.max(36, f(t.dataset.panoramaMaxFov, 110))), h = new sf({
			container: t,
			panorama: u,
			navbar: !1,
			defaultYaw: `${p}deg`,
			defaultPitch: `${f(t.dataset.panoramaPitch, -18)}deg`,
			defaultZoomLvl: f(t.dataset.panoramaZoom, 0),
			minFov: 35,
			maxFov: m,
			mousewheelCtrlKey: !1,
			touchmoveTwoFingers: !1,
			plugins: [M_.withConfig({ markers: d })]
		}), g, _ = !1, v = u, y, b = async () => {
			if (!(_ || l.matches || !r || r === v)) try {
				await h.setPanorama(r, {
					position: h.getPosition(),
					zoom: h.getZoomLevel(),
					showLoader: !1
				}), l.matches || (v = r);
			} catch (e) {
				console.warn("Panorama v plném rozlišení se nepodařilo načíst.", e);
			}
		}, x = () => {
			l.matches || !r || r === v || (y = new Image(), y.decoding = "async", y.addEventListener("load", async () => {
				let e = y;
				try {
					await e?.decode();
				} catch {}
				await b(), e && (e.src = ""), y === e && (y = void 0);
			}, { once: !0 }), y.src = r);
		}, S = async () => {
			let e = l.matches && c ? c : r;
			if (!(!e || e === v)) try {
				await h.setPanorama(e, {
					position: h.getPosition(),
					zoom: h.getZoomLevel(),
					showLoader: !1
				}), v = e;
			} catch (e) {
				console.warn("Variant panoramatu pro tuto velikost displeje se nepodařilo načíst.", e);
			}
		};
		l.addEventListener("change", S), h.getPlugin("markers")?.addEventListener("select-marker", (e) => {
			let t = String(e.marker?.config?.data?.link ?? "").trim();
			t && (window.location.href = t);
		});
		let C = () => {
			let t = e.getBoundingClientRect();
			e.querySelectorAll(".panoramaMarker--poi").forEach((e) => {
				let n = e.getBoundingClientRect(), r = n.left + n.width / 2, i = n.top + n.height / 2, a = Math.min(72, t.width * .09), o = Math.min(56, t.height * .09);
				e.classList.toggle("is-edge-clipped", !e.classList.contains("psv-marker--visible") || r < t.left + a || r > t.right - a || i < t.top + o || i > t.bottom - o);
			});
		}, w = () => window.requestAnimationFrame(() => window.requestAnimationFrame(C)), T, E = (e) => {
			let t = Math.PI * 2;
			return ((e + Math.PI) % t + t) % t - Math.PI;
		}, D = (e) => Math.max(10, Math.min(90, e)), O = () => {
			if (!T || !s) return;
			let n = (t.querySelector(".psv-container") || e).getBoundingClientRect(), r = a.length ? e.querySelectorAll(".panoramaMarker--polygon") : e.querySelectorAll(".panoramaMarker--complex");
			if (Array.from(r).some((e) => {
				let t = e.getBoundingClientRect();
				return e.classList.contains("psv-marker--visible") && t.width > 0 && t.height > 0 && t.right > n.left && t.left < n.right && t.bottom > n.top && t.top < n.bottom;
			})) {
				T.classList.remove("is-visible");
				return;
			}
			let i = h.getPosition(), o = Number(s.yaw) * Math.PI / 180, c = Number(s.pitch) * Math.PI / 180, l = E(o - i.yaw), u = h.dataHelper.sphericalCoordsToViewerCoords({
				yaw: i.yaw,
				pitch: c
			}), d = h.getSize(), f = (l < 0 ? -1 : 1) * d.width / 2, p = u.y - d.height / 2, m = n.width / 2 / Math.max(Math.abs(f), 2 ** -52), g = n.height / 2 / Math.max(Math.abs(p), 2 ** -52), _ = Math.min(m, g), v = D(50 + f * _ / n.width * 100), y = D(50 + p * _ / n.height * 100), b = Math.atan2(p, f) * 180 / Math.PI + 90, x;
			x = m <= g ? f < 0 ? "left" : "right" : p < 0 ? "top" : "bottom", T.dataset.side = x, T.style.setProperty("--panorama-direction-x", `${v}%`), T.style.setProperty("--panorama-direction-y", `${y}%`), T.style.setProperty("--panorama-direction-rotation", `${b}deg`), T.classList.add("is-visible");
		}, k = () => window.requestAnimationFrame(O);
		h.addEventListener("position-updated", w), h.addEventListener("zoom-updated", w), h.addEventListener("position-updated", k), h.addEventListener("zoom-updated", k), window.addEventListener("resize", w), window.addEventListener("resize", k), h.addEventListener("ready", () => {
			let r = t.querySelector(".psv-container"), o = e.querySelector(".panoramaHero__shade"), c = e.querySelector(".panoramaHero__copy");
			r && o && c && r.append(o, c), r && s && (T = document.createElement("div"), T.className = "panoramaHero__direction", T.setAttribute("aria-hidden", "true"), T.title = i?.label || a[0]?.label || e.dataset.labelDirection || "", T.innerHTML = "<i class=\"mdi mdi-navigation\" aria-hidden=\"true\"></i>", r.append(T)), e.classList.add("is-ready"), w(), k(), window.setTimeout(w, 150), window.setTimeout(w, 500), window.setTimeout(k, 150), window.setTimeout(k, 500), n && (n.textContent = e.dataset.labelReady || ""), x(), window.setTimeout(() => e.classList.add("is-interacted"), 4500);
		}, { once: !0 }), t.addEventListener("mousedown", () => {
			e.classList.add("is-interacted");
		}, { once: !0 }), t.addEventListener("touchstart", () => {
			e.classList.add("is-interacted");
		}, {
			once: !0,
			passive: !0
		}), e.querySelector("[data-panorama-zoom-out]")?.addEventListener("click", () => {
			h.zoom(Math.max(0, h.getZoomLevel() - 15));
		}), e.querySelector("[data-panorama-zoom-in]")?.addEventListener("click", () => {
			h.zoom(Math.min(100, h.getZoomLevel() + 15));
		});
		let A = e.querySelector("[data-panorama-fullscreen]");
		A && (!document.fullscreenEnabled || typeof e.requestFullscreen != "function") && (A.hidden = !0), A?.addEventListener("click", async () => {
			try {
				document.fullscreenElement === e ? await document.exitFullscreen() : document.fullscreenEnabled && await e.requestFullscreen();
			} catch (e) {
				console.warn("Zobrazení panoramatu na celou obrazovku se nezdařilo.", e);
			}
		}), g = () => {
			let t = document.fullscreenElement === e;
			e.classList.toggle("is-fullscreen", t), A && (A.setAttribute("aria-label", A.dataset[t ? "labelExit" : "labelEnter"]), A.setAttribute("aria-pressed", t ? "true" : "false"));
		}, document.addEventListener("fullscreenchange", g);
		let ee = () => {
			_ || (_ = !0, window.removeEventListener("resize", w), window.removeEventListener("resize", k), l.removeEventListener("change", S), document.removeEventListener("fullscreenchange", g), y &&= (y.src = "", void 0), h.destroy(), j.disconnect());
		}, j = new MutationObserver(() => {
			e.isConnected || ee();
		});
		j.observe(document.documentElement, {
			childList: !0,
			subtree: !0
		}), window.addEventListener("pagehide", ee, { once: !0 });
	} catch (t) {
		e.classList.add("has-error"), n && (n.textContent = e.dataset.labelError || ""), console.warn("360° panorama se nepodařilo inicializovat.", t);
	}
})).catch((e) => {
	document.querySelectorAll("[data-panorama-hero]").forEach((e) => {
		e.classList.add("has-error");
		let t = e.querySelector("[data-panorama-status]");
		t && (t.textContent = e.dataset.labelError || "");
	}), console.warn("Styly 360° panoramatu se nepodařilo načíst.", e);
});
//#endregion
