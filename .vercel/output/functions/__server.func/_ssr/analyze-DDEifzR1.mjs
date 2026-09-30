import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analyze-DDEifzR1.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var analyzeOffers_createServerFn_handler = createServerRpc({
	id: "1e3d6709f8f6a9a7f5bbe533996e2df78441196fccbcef5bfd2094199f7352d8",
	name: "analyzeOffers",
	filename: "src/lib/analyze.ts"
}, (opts) => analyzeOffers.__executeServer(opts));
var analyzeOffers = createServerFn({ method: "POST" }).validator((input) => input).handler(analyzeOffers_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "O analista do Radar não está disponível agora."
	};
	const list = data.offers.slice(0, 8).map((o, i) => `${i + 1}. ${o.store} — PIX R$ ${o.pix.toFixed(2)} + frete R$ ${o.shipping.toFixed(2)} — ${o.days} — ${o.installments}x`).join("\n");
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 280,
			temperature: .3,
			messages: [{
				role: "system",
				content: "Você é o analista do Radar, um comparador brasileiro de ofertas. Responda em português do Brasil, em 3 a 5 frases curtas. Diga qual loja vale mais a pena considerando PIX + frete, prazo e parcelamento. Sem emojis, sem marketing, sem inventar preço."
			}, {
				role: "user",
				content: `Produto: ${data.title}\nOfertas:\n${list}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "Não foi possível analisar as ofertas agora."
	};
	const text = (await res.json()).choices[0]?.message.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "A análise veio vazia."
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { analyzeOffers_createServerFn_handler };
