import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { D as useRadarStore, E as useHydrated, T as topRated, c as SiteFooter, h as featuredProducts, i as GROUP_LABEL, l as SiteHeader, o as SUGGESTED_SEARCHES, p as categoryCounts, r as GROUPS, s as SearchBar } from "./site-header-DOPd3HqI.mjs";
import { n as ProductCard, t as CompareBar } from "./product-card-BN0eG_Ih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DvmuaO5T.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const deals = featuredProducts(8);
	const rated = topRated(4);
	const groups = GROUPS.map((group) => ({
		group,
		label: GROUP_LABEL[group],
		cats: categoryCounts().filter((c) => c.group === group)
	})).filter((g) => g.cats.length > 0);
	const hydrated = useHydrated();
	const recent = useRadarStore((s) => s.recent);
	const chips = hydrated && recent.length ? recent.slice(0, 4) : SUGGESTED_SEARCHES.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl px-4 pb-28 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pt-10 pb-12 sm:pt-16 sm:pb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stagger-in text-xs font-medium tracking-[0.18em] text-muted uppercase",
								children: "Comparador de ofertas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "stagger-in mt-3 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight italic sm:text-6xl",
								style: { animationDelay: "40ms" },
								children: "Compare o mercado. Encontre o piso."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stagger-in mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
								style: { animationDelay: "80ms" },
								children: "Digite um produto ou palavra-chave. O Radar alinha lojas, PIX, frete e prazo para você ver quem realmente está mais barato."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stagger-in mt-8 max-w-2xl",
								style: { animationDelay: "120ms" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { autoFocus: true })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stagger-in mt-4 flex flex-wrap gap-2",
								style: { animationDelay: "160ms" },
								children: chips.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/busca",
									search: {
										q: term,
										cat: void 0,
										sort: "preco"
									},
									className: "rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-fg",
									children: term
								}, term))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pb-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 flex items-end justify-between gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl tracking-tight italic",
								children: "Categorias"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7",
							children: groups.map((g) => {
								const count = g.cats.reduce((n, c) => n + c.count, 0);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/busca",
									search: {
										q: "",
										cat: g.group,
										sort: "preco"
									},
									className: "rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors hover:border-border-strong",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: g.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted tabular-nums",
										children: [count, " produtos"]
									})]
								}, g.group);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pb-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl tracking-tight italic",
								children: "Maiores quedas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Onde o desconto abre mais espaço."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/busca",
								search: {
									q: "",
									cat: void 0,
									sort: "desconto"
								},
								className: "hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex",
								children: ["Ver todas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: deals.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-tight italic",
							children: "Bem avaliados"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Quem o mercado mais recomenda."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: rated.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareBar, {})
		]
	});
}
//#endregion
export { Home as component };
