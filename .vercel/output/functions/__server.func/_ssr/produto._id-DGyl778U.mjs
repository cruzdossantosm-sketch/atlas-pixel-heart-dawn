import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { c as Heart, i as Star, l as Check, n as Truck, o as ScanSearch, s as Scale } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-0IIo22QM.mjs";
import { C as savings, D as useRadarStore, S as relatedProducts, _ as formatBRL, a as ProductImage, b as formatPercent, c as SiteFooter, d as buildHistory, f as buildOffers, g as filterOffers, l as SiteHeader, m as cn, n as Button, t as Badge, u as bestOffer, v as formatDays, x as getProduct, y as formatInstallments } from "./site-header-DOPd3HqI.mjs";
import { n as ProductCard, t as CompareBar } from "./product-card-BN0eG_Ih.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produto._id-DGyl778U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OfferTable({ offers }) {
	if (offers.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-lg border border-border bg-surface p-6 text-sm text-muted",
		children: "Nenhuma oferta neste filtro. Tente outro recorte."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-3",
		children: offers.map((offer, index) => {
			const isBest = index === 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: cn("rounded-xl border bg-surface p-4 shadow-soft sm:p-5", isBest ? "border-save/40" : "border-border"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: offer.storeName
								}),
								isBest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "save",
									children: "Melhor preço"
								}) : null,
								offer.official ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									children: "Loja oficial"
								}) : null,
								!offer.inStock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									children: "Sob consulta"
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								offer.storeKind === "marketplace" ? "Marketplace" : "Venda direta",
								" ·",
								" ",
								offer.rating.toFixed(1),
								" · ",
								offer.reviews.toLocaleString("pt-BR"),
								" avaliações"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								offer.listPrice > offer.price ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-subtle line-through tabular-nums",
									children: formatBRL(offer.listPrice)
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl tracking-tight tabular-nums",
									children: formatBRL(offer.pixPrice)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-save",
									children: ["no PIX", offer.pixDiscount > 0 ? ` · ${formatPercent(offer.pixDiscount * 100)} off` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: formatInstallments(offer.installments, offer.installmentValue)
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {
											className: "size-3.5",
											strokeWidth: 1.75
										}), offer.shipping === 0 ? "Frete grátis" : formatBRL(offer.shipping)]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1",
										children: formatDays(offer.daysMin, offer.daysMax)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 tabular-nums",
										children: ["Total ", formatBRL(offer.totalPix)]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: isBest ? "save" : "outline",
								className: "w-full sm:w-auto",
								disabled: !offer.inStock,
								onClick: () => toast("Oferta do catálogo Radar", { description: `${offer.storeName} · ${formatBRL(offer.pixPrice)} no PIX` }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-4",
									strokeWidth: 1.75
								}), "Ir à loja"]
							})
						]
					})]
				})
			}, offer.id);
		})
	});
}
function PriceChart({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-48 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "radarPrice",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--color-accent)",
							stopOpacity: .22
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--color-accent)",
							stopOpacity: 0
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "day",
						tick: {
							fill: "var(--color-subtle)",
							fontSize: 11
						},
						axisLine: false,
						tickLine: false,
						minTickGap: 24
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickFormatter: (v) => formatBRL(v),
						tick: {
							fill: "var(--color-subtle)",
							fontSize: 11
						},
						axisLine: false,
						tickLine: false,
						width: 84,
						domain: ["dataMin - 20", "dataMax + 20"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: {
							background: "var(--color-surface)",
							border: "1px solid var(--color-border)",
							borderRadius: 8,
							fontSize: 12,
							color: "var(--color-fg)"
						},
						formatter: (value) => [formatBRL(Number(value ?? 0)), "Preço"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "price",
						stroke: "var(--color-accent)",
						strokeWidth: 1.75,
						fill: "url(#radarPrice)"
					})
				]
			})
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var analyzeOffers = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("1e3d6709f8f6a9a7f5bbe533996e2df78441196fccbcef5bfd2094199f7352d8"));
function ProductPage() {
	const { id } = Route.useParams();
	const product = getProduct(Number(id));
	const [photo, setPhoto] = (0, import_react.useState)(0);
	const [filter, setFilter] = (0, import_react.useState)("todas");
	const [analysis, setAnalysis] = (0, import_react.useState)(null);
	const [analyzing, setAnalyzing] = (0, import_react.useState)(false);
	const saved = useRadarStore((s) => product ? s.saved.includes(product.id) : false);
	const compared = useRadarStore((s) => product ? s.compare.includes(product.id) : false);
	const toggleSaved = useRadarStore((s) => s.toggleSaved);
	const toggleCompare = useRadarStore((s) => s.toggleCompare);
	const offers = (0, import_react.useMemo)(() => product ? buildOffers(product) : [], [product]);
	const visible = (0, import_react.useMemo)(() => filterOffers(offers, filter), [offers, filter]);
	const best = bestOffer(offers);
	const save = savings(offers);
	const history = (0, import_react.useMemo)(() => product && best ? buildHistory(product, best) : [], [product, best]);
	const related = product ? relatedProducts(product, 4) : [];
	if (!product || !best) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { withSearch: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl italic",
				children: "Produto não encontrado"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Voltar"
				})
			})]
		})]
	});
	const drop = best.listPrice > best.pixPrice ? (best.listPrice - best.pixPrice) / best.listPrice * 100 : 0;
	async function onAnalyze() {
		setAnalyzing(true);
		setAnalysis(null);
		try {
			const result = await analyzeOffers({ data: {
				title: product.title,
				offers: offers.map((o) => ({
					store: o.storeName,
					pix: o.totalPix,
					shipping: o.shipping,
					days: formatDays(o.daysMin, o.daysMax),
					installments: o.installments
				}))
			} });
			if (result.ok) setAnalysis(result.text);
			else toast.error(result.error);
		} catch {
			toast.error("Não foi possível analisar agora.");
		} finally {
			setAnalyzing(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { withSearch: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl px-4 py-8 pb-28 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-fg",
								children: "Início"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-subtle",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/busca",
								search: {
									q: "",
									cat: product.group,
									sort: "preco"
								},
								className: "hover:text-fg",
								children: product.categoryLabel
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
							src: product.images[photo] ?? product.thumbnail,
							alt: product.title,
							className: "aspect-square w-full rounded-xl border border-border bg-surface"
						}), product.images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-2",
							children: product.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPhoto(i),
								className: cn("size-16 overflow-hidden rounded-md border", i === photo ? "border-accent" : "border-border"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
									src,
									alt: "",
									className: "size-full",
									imgClassName: "p-1"
								})
							}, src))
						}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.16em] text-subtle uppercase",
								children: product.brand
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl tracking-tight italic sm:text-4xl",
								children: product.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-sm text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											className: "size-3.5 fill-star text-star",
											strokeWidth: 1.5
										}), product.rating.toFixed(2)]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										children: [offers.length, " lojas"]
									}),
									drop >= 8 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "save",
										children: ["−", formatPercent(drop)]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-sm leading-relaxed text-muted",
								children: product.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 rounded-xl border border-border bg-surface p-5 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: "Menor preço no PIX"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-4xl tracking-tight tabular-nums",
										children: formatBRL(best.pixPrice)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											best.storeName,
											best.shipping === 0 ? " · frete grátis" : ` · frete ${formatBRL(best.shipping)}`,
											" ·",
											" ",
											formatDays(best.daysMin, best.daysMax)
										]
									}),
									save > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-save",
										children: [
											"Você economiza ",
											formatBRL(save),
											" em relação à oferta mais cara."
										]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: saved ? "save" : "outline",
											onClick: () => {
												toggleSaved(product.id);
												toast(saved ? "Removido dos salvos" : "Salvo no Radar");
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", saved && "fill-save-soft") }), saved ? "Salvo" : "Salvar"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: compared ? "default" : "outline",
											onClick: () => {
												toggleCompare(product.id);
												toast(compared ? "Removido da comparação" : "Adicionado à comparação");
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4" }), "Comparar"]
										})]
									})
								]
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl italic",
								children: "Ofertas lado a lado"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Ordenadas pelo total no PIX, já com frete."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									["todas", "Todas"],
									["frete", "Frete grátis"],
									["prazo", "Menor prazo"],
									["pix", "Maior PIX"]
								].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: filter === key ? "default" : "outline",
									onClick: () => setFilter(key),
									children: label
								}, key))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferTable, { offers: visible })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10 rounded-xl border border-border bg-surface p-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl italic",
								children: "Analista do Radar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Uma leitura curta de custo-benefício, prazo e PIX."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: onAnalyze,
								disabled: analyzing,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, { className: "size-4" }), analyzing ? "Lendo ofertas…" : "Qual vale mais a pena?"]
							})]
						}), analysis ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-relaxed text-fg",
							children: analysis
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl italic",
								children: "Histórico de 30 dias"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 mb-4 text-sm text-muted",
								children: "Piso recente da melhor oferta no PIX."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border bg-surface p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChart, { data: history })
							})
						]
					}),
					related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl italic",
							children: "Na mesma prateleira"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.id))
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareBar, {})
		]
	});
}
//#endregion
export { ProductPage as component };
