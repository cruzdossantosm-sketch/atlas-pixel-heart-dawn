import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as savings, D as useRadarStore, _ as formatBRL, a as ProductImage, c as SiteFooter, f as buildOffers, l as SiteHeader, n as Button, t as Badge, u as bestOffer, v as formatDays, x as getProduct } from "./site-header-DOPd3HqI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/comparar-B0cksnXf.js
var import_jsx_runtime = require_jsx_runtime();
function ComparePage() {
	const compare = useRadarStore((s) => s.compare);
	const toggleCompare = useRadarStore((s) => s.toggleCompare);
	const clearCompare = useRadarStore((s) => s.clearCompare);
	const items = compare.map((id) => getProduct(id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { withSearch: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl px-4 py-8 pb-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.16em] text-muted uppercase",
						children: "Lado a lado"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl tracking-tight italic sm:text-4xl",
						children: "Comparar produtos"
					})] }), items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: clearCompare,
						children: "Limpar tudo"
					}) : null]
				}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl italic",
							children: "Escolha até três produtos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Na busca, toque na balança para montar a comparação."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/busca",
								search: {
									q: "iphone",
									cat: void 0,
									sort: "preco"
								},
								children: "Buscar iPhone"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid min-w-[640px] gap-4",
						style: { gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` },
						children: items.map((product) => {
							if (!product) return null;
							const offers = buildOffers(product);
							const best = bestOffer(offers);
							const save = savings(offers);
							if (!best) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col rounded-xl border border-border bg-surface p-4 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
										src: product.thumbnail,
										alt: product.title,
										className: "aspect-square w-full rounded-lg"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[11px] font-medium tracking-wide text-subtle uppercase",
										children: product.brand
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-1 font-medium leading-snug",
										children: product.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-wrap gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											children: [offers.length, " lojas"]
										}), save > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "save",
											children: [formatBRL(save), " a menos"]
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-4 space-y-3 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-xs text-muted",
												children: "Menor PIX"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-display text-2xl tabular-nums",
												children: formatBRL(best.pixPrice)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-2 border-t border-border pt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Loja"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: best.storeShort })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Frete"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: best.shipping === 0 ? "Grátis" : formatBRL(best.shipping) })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Prazo"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatDays(best.daysMin, best.daysMax) })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Total"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "tabular-nums",
													children: formatBRL(best.totalPix)
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Parcelas"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
													best.installments,
													"x ",
													formatBRL(best.installmentValue)
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-muted",
													children: "Nota"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.rating.toFixed(1) })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex flex-col gap-2 pt-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/produto/$id",
												params: { id: String(product.id) },
												children: "Ver ofertas"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											onClick: () => toggleCompare(product.id),
											children: "Remover"
										})]
									})
								]
							}, product.id);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ComparePage as component };
