(() => {
  // node_modules/sinuous/module/observable.js
  var n = [];
  var t;
  var r;
  function o(n3) {
    let r3 = t, u2 = () => {
    };
    t = u2, a(u2);
    let o3 = n3(() => {
      S(u2), t = void 0;
    });
    return t = r3, o3;
  }
  function c(n3) {
    let r3 = t;
    t = void 0;
    let u2 = n3();
    return t = r3, u2;
  }
  function i(u2) {
    function o3(c3) {
      if (arguments.length === 0)
        return t && !o3.__o.has(t) && (o3.__o.add(t), t.u.push(o3)), u2;
      if (r)
        return o3.t === n && r.push(o3), o3.t = c3, c3;
      u2 = c3;
      let e2 = t;
      return t = void 0, o3.o = new Set(o3.__o), o3.o.forEach((n3) => n3.i = false), o3.o.forEach((n3) => {
        n3.i || n3();
      }), t = e2, u2;
    }
    return o3.$o = 1, o3.__o = /* @__PURE__ */ new Set(), o3.t = n, o3;
  }
  function f(n3, r3) {
    function u2() {
      let o4 = t;
      return t && t.__c.push(u2), S(u2), u2.i = true, t = u2, r3 = n3(r3), t = o4, r3;
    }
    function o3() {
      return u2.i ? t && u2.u.forEach((n4) => n4()) : r3 = u2(), r3;
    }
    return n3.l = u2, a(u2), u2(), o3.$o = 1, o3;
  }
  function s(n3) {
    return t && t.v.push(n3), n3;
  }
  function l(n3) {
    return f(n3), () => S(n3.l);
  }
  function S(n3) {
    n3.__c.forEach(S), n3.u.forEach((t3) => {
      t3.__o.delete(n3), t3.o && t3.o.delete(n3);
    }), n3.v.forEach((n4) => n4()), a(n3);
  }
  function a(n3) {
    n3.u = [], n3.__c = [], n3.v = [];
  }

  // node_modules/sinuous/module/htm.js
  var t2 = (n3, e2, o3, f4) => {
    let s3 = {};
    for (let i3 = 1; i3 < e2.length; i3++) {
      let r3 = e2[i3], u2 = typeof r3 == "number" ? o3[r3] : r3, l2 = e2[++i3];
      if (l2 === 1)
        f4[0] = u2;
      else if (l2 === 3)
        f4[1] = Object.assign(f4[1] || {}, u2);
      else if (l2 === 5)
        (f4[1] = f4[1] || {})[e2[++i3]] = u2;
      else if (l2 === 6) {
        let t3 = e2[++i3], n4 = (f4[1] = f4[1] || {})[t3], o4 = s3[t3];
        o4 || typeof u2 != "function" && typeof n4 != "function" || (o4 = n4 && [n4] || [], f4[1][t3] = function() {
          let t4 = "";
          for (var n5 = 0; n5 < o4.length; n5++)
            t4 += typeof o4[n5] == "function" ? o4[n5].call(this) : o4[n5];
          return t4;
        }), o4 ? o4.push(u2) : f4[1][t3] += u2 + "";
      } else if (l2) {
        let e3 = () => n3.apply(null, t2(n3, u2, o3, ["", null]));
        f4.push(typeof f4[0] == "function" ? e3 : e3());
      } else
        f4.push(u2);
    }
    return f4;
  };
  var n2 = function(t3) {
    let n3, e2, o3 = 1, f4 = "", s3 = "", i3 = [0];
    let r3 = (t4) => {
      o3 === 1 && (t4 || (f4 = f4.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? i3.push(t4 || f4, 0) : o3 === 3 && (t4 || f4) ? (i3.push(t4 || f4, 1), o3 = 2) : o3 === 2 && f4 === "..." && t4 ? i3.push(t4, 3) : o3 === 2 && f4 && !t4 ? i3.push(true, 5, f4) : o3 >= 5 && ((f4 || !t4 && o3 === 5) && (i3.push(f4, o3, e2), o3 = 6), t4 && (i3.push(t4, o3, e2), o3 = 6)), f4 = "";
    };
    for (let u2 = 0; u2 < t3.length; u2++) {
      u2 && (o3 === 1 && r3(), r3(u2));
      for (let l2 = 0; l2 < t3[u2].length; l2++)
        n3 = t3[u2][l2], o3 === 1 ? n3 === "<" ? (r3(), i3 = [i3], o3 = 3) : f4 += n3 : o3 === 4 ? f4 === "--" && n3 === ">" ? (o3 = 1, f4 = "") : f4 = n3 + f4[0] : s3 ? n3 === s3 ? s3 = "" : f4 += n3 : n3 === '"' || n3 === "'" ? s3 = n3 : n3 === ">" ? (r3(), o3 = 1) : o3 && (n3 === "=" ? (o3 = 5, e2 = f4, f4 = "") : n3 === "/" && (o3 < 5 || t3[u2][l2 + 1] === ">") ? (r3(), o3 === 3 && (i3 = i3[0]), o3 = i3, (i3 = i3[0]).push(o3, 2), o3 = 0) : n3 === " " || n3 === "	" || n3 === "\n" || n3 === "\r" ? (r3(), o3 = 2) : f4 += n3), o3 === 3 && f4 === "!--" && (o3 = 4, i3 = i3[0]);
    }
    return r3(), i3;
  };
  var e = /* @__PURE__ */ new Map();
  var o2 = function(o3) {
    let f4 = e.get(this);
    return f4 || (f4 = /* @__PURE__ */ new Map(), e.set(this, f4)), f4 = t2(this, f4.get(o3) || (f4.set(o3, f4 = n2(o3)), f4), arguments, []), f4.length > 1 ? f4 : f4[0];
  };
  var f2 = function() {
    let t3 = o2.apply(this, arguments);
    if (t3)
      return Array.isArray(t3) ? this(t3) : typeof t3 == "object" ? t3 : this([t3]);
  };
  var s2 = function() {
    let t3 = f2.bind(this);
    return (this.wrap || t3).apply(t3, arguments);
  };

  // node_modules/sinuous/module/sinuous.js
  var r2 = {};
  var i2 = [];
  function f3(e2) {
    return this.t && this.t[e2.type](e2);
  }
  r2.h = (...e2) => {
    let t3, n3 = (s3) => {
      if (s3 == null)
        ;
      else if (typeof s3 == "string")
        t3 ? r2.add(t3, s3) : t3 = r2.s ? document.createElementNS("http://www.w3.org/2000/svg", s3) : document.createElement(s3);
      else if (Array.isArray(s3))
        t3 || (t3 = document.createDocumentFragment()), s3.forEach(n3);
      else if (s3 instanceof Node)
        t3 ? r2.add(t3, s3) : t3 = s3;
      else if (typeof s3 == "object")
        r2.property(t3, s3, null, r2.s);
      else if (typeof s3 == "function")
        if (t3) {
          let e3 = r2.add(t3, "");
          r2.insert(t3, s3, e3);
        } else
          t3 = s3.apply(null, e2.splice(1));
      else
        r2.add(t3, "" + s3);
    };
    return e2.forEach(n3), t3;
  }, r2.insert = (e2, t3, n3, s3, l2) => (e2 = n3 && n3.parentNode || e2, l2 = l2 || s3 instanceof Node && s3, t3 === s3 || (s3 && typeof s3 != "string" || !(typeof t3 == "string" || typeof t3 == "number" && (t3 += "")) ? typeof t3 == "function" ? r2.subscribe(() => {
    s3 = r2.insert(e2, t3.call({ el: e2, endMark: n3 }), n3, s3, l2);
  }) : (n3 ? s3 && (l2 || (l2 = s3.o && s3.o.nextSibling || n3.previousSibling), r2.rm(e2, l2, n3)) : e2.textContent = "", s3 = null, t3 && t3 !== true && (s3 = r2.add(e2, t3, n3))) : (s3 != null && e2.firstChild ? n3 ? (n3.previousSibling || e2.lastChild).data = t3 : e2.firstChild.data = t3 : n3 ? r2.add(e2, t3, n3) : e2.textContent = t3, s3 = t3)), s3), r2.property = (e2, t3, n3, s3, l2) => {
    if (t3 != null)
      if (!n3 || n3 === "attrs" && (s3 = true))
        for (n3 in t3)
          r2.property(e2, t3[n3], n3, s3, l2);
      else
        n3[0] !== "o" || n3[1] !== "n" || t3.$o ? typeof t3 == "function" ? r2.subscribe(() => {
          r2.property(e2, t3.call({ el: e2, name: n3 }), n3, s3, l2);
        }) : l2 ? e2.style.setProperty(n3, t3) : s3 || n3.slice(0, 5) === "data-" || n3.slice(0, 5) === "aria-" ? e2.setAttribute(n3, t3) : n3 === "style" ? typeof t3 == "string" ? e2.style.cssText = t3 : r2.property(e2, t3, null, s3, true) : (n3 === "class" && (n3 += "Name"), e2[n3] = t3) : ((e3, t4, n4) => {
          t4 = t4.slice(2).toLowerCase(), n4 ? e3.addEventListener(t4, f3) : e3.removeEventListener(t4, f3), (e3.t || (e3.t = {}))[t4] = n4;
        })(e2, n3, t3);
  }, r2.add = (e2, t3, n3) => {
    let s3 = ((e3) => {
      const { childNodes: t4 } = e3;
      if (t4 && e3.nodeType === 11)
        return t4.length < 2 ? t4[0] : { o: r2.add(e3, "", t4[0]) };
    })(t3 = ((e3) => typeof e3 == "string" ? document.createTextNode(e3) : e3 instanceof Node ? e3 : r2.h(i2, e3))(t3)) || t3;
    return e2.insertBefore(t3, n3 && n3.parentNode && n3), s3;
  }, r2.rm = (e2, t3, n3) => {
    for (; t3 && t3 !== n3; ) {
      let n4 = t3.nextSibling;
      e2 === t3.parentNode && e2.removeChild(t3), t3 = n4;
    }
  }, r2.subscribe = l, r2.cleanup = s, r2.root = o, r2.sample = c, r2.hs = (...e2) => {
    let t3 = r2.s;
    r2.s = true;
    let n3 = u(...e2);
    return r2.s = t3, n3;
  };
  var u = (...e2) => r2.h.apply(r2.h, e2);
  var c2 = (...e2) => s2.apply(u, e2);

  // main.js
  var romaji = i("");
  var hiragana = i("");
  var katakana = i("");
  function fromRomaji(e2) {
    hiragana(wanakana.toHiragana(e2.target.value));
    katakana(wanakana.toKatakana(e2.target.value));
  }
  function fromHiragana(e2) {
    romaji(wanakana.toRomaji(e2.target.value));
    katakana(wanakana.toKatakana(e2.target.value));
  }
  function fromKatakana(e2) {
    romaji(wanakana.toRomaji(e2.target.value));
    hiragana(wanakana.toHiragana(e2.target.value));
  }
  var Textarea = ({ oninput, value, title }) => {
    return c2`
		<label class="w-full">
			<h2 class="text-2xl mb-4">${title}</h2>
			<textarea
				oninput=${oninput}
				value=${value}
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				spellcheck="false"
				class="w-full resize-none border p-4 rounded h-full"
			>
			</textarea>
		</label>
	`;
  };
  var Romaji = () => {
    return c2`
		<${Textarea} oninput=${fromRomaji} value=${romaji} title="Romaji" />
	`;
  };
  var Hiragana = () => {
    return c2`
		<${Textarea} oninput=${fromHiragana} value=${hiragana} title="Hiragana" />
	`;
  };
  var Katakana = () => {
    return c2`
		<${Textarea} oninput=${fromKatakana} value=${katakana} title="Katakana" />
	`;
  };
  var App = () => {
    return c2`
		<div class="w-full md:h-full p-8 bg-gray-50 space-y-16">
			<h1 class="text-4xl">Romaji to Hiragana to Katakana and vice versa</h1>
			<div class="md:columns-3 space-y-8 gap-8">
				<div class="w-full"><${Romaji} /></div>
				<div class="w-full"><${Hiragana} /></div>
				<div class="w-full"><${Katakana} /></div>
			</div>
		</div>
	`;
  };
  document.body.append(App());
})();
