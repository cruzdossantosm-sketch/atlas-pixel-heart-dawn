import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Heart, s as Scale, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as savings, D as useRadarStore, E as useHydrated, _ as formatBRL, a as ProductImage, b as formatPercent, f as buildOffers, m as cn, n as Button, t as Badge, u as bestOffer, x as getProduct } from "./site-header-DOPd3HqI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-BN0eG_Ih.js
var import_jsx_runtime = require_jsx_runtime();
function CompareBar() {
	const hydrated = useHydrated();
	const compare = useRadarStore((s) => s.compare);
	const toggleCompare = useRadarStore((s) => s.toggleCompare);
	const clearCompare = useRadarStore((s) => s.clearCompare);
	if (!hydrated || compare.length === 0) return null;
	const items = compare.map((id) => getProduct(id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed right-0 bottom-0 left-0 z-40 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hidden text-sm text-muted sm:block",
					children: [items.length, " na comparação"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-0 flex-1 gap-2 overflow-x-auto",
					children: items.map((p) => p ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggleCompare(p.id),
						className: "flex shrink-0 items-center gap-2 rounded-full border border-border bg-bg px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "max-w-36 truncate",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5 text-subtle" })]
					}, p.id) : null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: clearCompare,
					children: "Limpar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/comparar",
						children: "Comparar"
					})
				})
			]
		})
	});
}
function ProductCard({ product }) {
	const offers = buildOffers(product);
	const best = bestOffer(offers);
	const save = savings(offers);
	const hydrated = useHydrated();
	const saved = useRadarStore((s) => s.saved.includes(product.id));
	const compared = useRadarStore((s) => s.compare.includes(product.id));
	const toggleSaved = useRadarStore((s) => s.toggleSaved);
	const toggleCompare = useRadarStore((s) => s.toggleCompare);
	const isSaved = hydrated && saved;
	const isCompared = hydrated && compared;
	if (!best) return null;
	const drop = best.listPrice > best.pixPrice ? (best.listPrice - best.pixPrice) / best.listPrice * 100 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-3 right-3 z-10 flex gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": isCompared ? "Remover da comparação" : "Adicionar à comparação",
				onClick: () => {
					toggleCompare(product.id);
					toast(isCompared ? "Removido da comparação" : "Adicionado à comparação");
				},
				className: cn("grid size-10 place-items-center rounded-md border bg-surface/90 backdrop-blur-sm transition-colors", isCompared ? "border-accent text-accent" : "border-border text-muted hover:text-fg"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
					className: "size-4",
					strokeWidth: 1.75
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": isSaved ? "Remover dos salvos" : "Salvar produto",
				onClick: () => {
					toggleSaved(product.id);
					toast(isSaved ? "Removido dos salvos" : "Salvo no Radar");
				},
				className: cn("grid size-10 place-items-center rounded-md border bg-surface/90 backdrop-blur-sm transition-colors", isSaved ? "border-save text-save" : "border-border text-muted hover:text-fg"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: cn("size-4", isSaved && "fill-save"),
					strokeWidth: 1.75
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/produto/$id",
			params: { id: String(product.id) },
			className: "flex flex-1 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
				src: product.thumbnail,
				alt: product.title,
				className: "aspect-square w-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col gap-2 p-4 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							children: [offers.length, " lojas"]
						}), drop >= 8 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "save",
							children: ["−", formatPercent(drop)]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-wide text-subtle uppercase",
						children: product.brand
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-fg leading-snug",
						children: product.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "a partir de"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl tracking-tight text-fg tabular-nums",
								children: formatBRL(best.pixPrice)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									"no PIX · ",
									best.storeShort,
									save > 0 ? ` · economize ${formatBRL(save)}` : ""
								]
							})
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { ProductCard as n, CompareBar as t };
