import { createServerFn } from "@tanstack/react-start";

export type AnalyzeInput = {
  title: string;
  offers: {
    store: string;
    pix: number;
    shipping: number;
    days: string;
    installments: number;
  }[];
};

export const analyzeOffers = createServerFn({ method: "POST" })
  .validator((input: AnalyzeInput) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "O analista do Radar não está disponível agora." };
    }

    const list = data.offers
      .slice(0, 8)
      .map(
        (o, i) =>
          `${i + 1}. ${o.store} — PIX R$ ${o.pix.toFixed(2)} + frete R$ ${o.shipping.toFixed(2)} — ${o.days} — ${o.installments}x`,
      )
      .join("\n");

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 280,
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "Você é o analista do Radar, um comparador brasileiro de ofertas. Responda em português do Brasil, em 3 a 5 frases curtas. Diga qual loja vale mais a pena considerando PIX + frete, prazo e parcelamento. Sem emojis, sem marketing, sem inventar preço.",
          },
          {
            role: "user",
            content: `Produto: ${data.title}\nOfertas:\n${list}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false as const, error: "Não foi possível analisar as ofertas agora." };
    }

    const body = (await res.json()) as {
      choices: { message: { content: string } }[];
    };
    const text = body.choices[0]?.message.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "A análise veio vazia." };
    return { ok: true as const, text };
  });
