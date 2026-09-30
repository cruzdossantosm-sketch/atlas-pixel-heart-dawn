import { createFileRoute, Link } from "@tanstack/react-router";
import { CompareBar } from "@/components/compare-bar";
import { ProductCard } from "@/components/product-card";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { searchProducts } from "@/lib/catalog";
import { GROUP_LABEL } from "@/lib/localize";
import { bestOffer, buildOffers, savings } from "@/lib/offers";
import { Button } from "@/components/ui/button";

type SortKey = "relevancia" | "preco" | "desconto" | "avaliacao";

type Search = {
  q: string;
  cat?: string;
  sort: SortKey;
};

export const Route = createFileRoute("/busca")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const q = typeof search.q === "string" ? search.q : "";
    const sort =
      search.sort === "preco" ||
      search.sort === "desconto" ||
      search.sort === "avaliacao" ||
      search.sort === "relevancia"
        ? search.sort
        : q
          ? "relevancia"
          : "preco";
    return {
      q,
      cat: typeof search.cat === "string" && search.cat ? search.cat : undefined,
      sort,
    };
  },
  component: SearchPage,
});

function SearchPage() {
  const { q, cat, sort } = Route.useSearch();
  const hits = searchProducts(q, cat);

  const ranked = [...hits].sort((a, b) => {
    const oa = buildOffers(a);
    const ob = buildOffers(b);
    const ba = bestOffer(oa);
    const bb = bestOffer(ob);
    if (sort === "avaliacao") return b.rating - a.rating;
    if (sort === "desconto") return savings(ob) - savings(oa);
    if (sort === "relevancia") return b.score - a.score || (ba?.totalPix ?? 0) - (bb?.totalPix ?? 0);
    return (ba?.totalPix ?? a.basePrice) - (bb?.totalPix ?? b.basePrice);
  });

  const title = q
    ? `Ofertas para “${q}”`
    : cat
      ? (GROUP_LABEL[cat] ?? hits[0]?.categoryLabel ?? "Catálogo")
      : "Catálogo Radar";

  const sorts: [SortKey, string][] = q
    ? [
        ["relevancia", "Relevância"],
        ["preco", "Menor preço"],
        ["desconto", "Maior economia"],
        ["avaliacao", "Melhor avaliação"],
      ]
    : [
        ["preco", "Menor preço"],
        ["desconto", "Maior economia"],
        ["avaliacao", "Melhor avaliação"],
      ];

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader withSearch />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 pb-28 sm:px-6">
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">Busca</p>
        <h1 className="mt-2 font-display text-3xl tracking-tight italic sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted tabular-nums">
          {ranked.length} {ranked.length === 1 ? "produto" : "produtos"} · comparado em lojas do
          Brasil
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {sorts.map(([key, label]) => (
            <Button key={key} size="sm" variant={sort === key ? "default" : "outline"} asChild>
              <Link to="/busca" search={{ q, cat, sort: key }}>
                {label}
              </Link>
            </Button>
          ))}
        </div>

        {ranked.length === 0 ? (
          <div className="mt-12 max-w-md">
            <p className="font-display text-2xl italic">Nada no radar.</p>
            <p className="mt-2 text-sm text-muted">
              Tente outra palavra-chave — iPhone, notebook, perfume, Nike, café.
            </p>
            <Button asChild className="mt-6">
              <Link to="/">Voltar ao início</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ranked.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
      <CompareBar />
    </div>
  );
}
