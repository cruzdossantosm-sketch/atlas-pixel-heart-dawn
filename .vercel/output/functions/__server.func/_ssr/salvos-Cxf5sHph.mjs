import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as useRadarStore, c as SiteFooter, l as SiteHeader, n as Button, x as getProduct } from "./site-header-DOPd3HqI.mjs";
import { n as ProductCard, t as CompareBar } from "./product-card-BN0eG_Ih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/salvos-Cxf5sHph.js
var import_jsx_runtime = require_jsx_runtime();
function SavedPage() {
	const items = useRadarStore((s) => s.saved).map((id) => getProduct(id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { withSearch: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl px-4 py-8 pb-28 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.16em] text-muted uppercase",
						children: "Lista"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl tracking-tight italic sm:text-4xl",
						children: "Salvos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Produtos que você marcou para acompanhar o piso."
					}),
					items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl italic",
								children: "Nada salvo ainda."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Busque um produto e toque no coração para guardar a comparação."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "Começar busca"
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: items.map((product) => product ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id) : null)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareBar, {})
		]
	});
}
//#endregion
export { SavedPage as component };
