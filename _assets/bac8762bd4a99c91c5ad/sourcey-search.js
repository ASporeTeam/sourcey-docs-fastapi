// node_modules/sourcey/dist/client/search-engine.js
async function e(e) {
	let t = new Worker(new URL(
		/* @vite-ignore */
		new URL("assets/search-worker-aoMZriHp.js", import.meta.url).href,
		"" + import.meta.url
	), { type: "module" }), n = 0, r = !1, i = /* @__PURE__ */ new Map();
	function a() {
		if (!r) {
			r = !0, t.terminate();
			for (let e of i.values()) e.reject(/* @__PURE__ */ Error("Search closed"));
			i.clear(), window.removeEventListener("pagehide", a), document.removeEventListener("astro:before-swap", a);
		}
	}
	t.addEventListener("message", (e) => {
		let t = e.data, n = i.get(t.id);
		n && (i.delete(t.id), t.error === void 0 ? n.resolve(t.rows) : n.reject(Error(t.error)));
	}), t.addEventListener("error", a), t.addEventListener("messageerror", a), window.addEventListener("pagehide", a, { once: !0 }), document.addEventListener("astro:before-swap", a, { once: !0 });
	function o(e) {
		return r ? Promise.reject(/* @__PURE__ */ Error("Search closed")) : new Promise((r, a) => {
			let o = ++n;
			i.set(o, {
				resolve: r,
				reject: a
			}), t.postMessage({
				...e,
				id: o
			});
		});
	}
	try {
		return {
			rows: await o({
				kind: "load",
				urls: e.map((e) => new URL(e, document.baseURI).href)
			}),
			query: (e) => o({
				kind: "query",
				query: e
			}),
			dispose: a
		};
	} catch (e) {
		throw a(), e;
	}
}
export { e as loadSearch };
