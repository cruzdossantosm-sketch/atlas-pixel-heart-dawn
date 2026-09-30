import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$3 } from "./router-0IIo22QM.mjs";
import { C as savings, c as SiteFooter, f as buildOffers, i as GROUP_LABEL, l as SiteHeader, n as Button, u as bestOffer, w as searchProducts } from "./site-header-DOPd3HqI.mjs";
import { n as ProductCard, t as CompareBar } from "./product-card-BN0eG_Ih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/busca-CtBfb_VG.js
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { q, cat, sort } = Route$3.useSearch();
	const hits = searchProducts(q, cat);
	const ranked = [...hits].sort((a, b) => {
		const oa = buildOffers(a);
		const ob = buildOffers(b);
		const ba = bestOffer(oa);
		const bb = bestOffer(ob);
		if (sort === "avaliacao") return b.rating - a.rating;
		if (sort === "desconto") return savings(ob) - savings(oa);
		return (ba?.totalPix ?? a.basePrice) - (bb?.totalPix ?? b.basePrice);
	});
	const title = q ? `Ofertas para “${q}”` : cat ? GROUP_LABEL[cat] ?? hits[0]?.categoryLabel ?? "Catálogo" : "Catálogo Radar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { withSearch: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl px-4 py-8 pb-28 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.16em] text-muted uppercase",
						children: "Busca"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl tracking-tight italic sm:text-4xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted tabular-nums",
						children: [
							ranked.length,
							" ",
							ranked.length === 1 ? "produto" : "produtos",
							" · comparado em lojas do Brasil"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							["preco", "Menor preço"],
							["desconto", "Maior economia"],
							["avaliacao", "Melhor avaliação"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: sort === key ? "default" : "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/busca",
								search: {
									q,
									cat,
									sort: key
								},
								children: label
							})
						}, key))
					}),
					ranked.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl italic",
								children: "Nada no radar."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Tente outra palavra-chave — iPhone, notebook, perfume, Nike, café."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "Voltar ao início"
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: ranked.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareBar, {})
		]
	});
}
//#endregion
export { SearchPage as component };
