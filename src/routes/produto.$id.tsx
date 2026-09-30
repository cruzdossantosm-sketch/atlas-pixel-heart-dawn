import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Scale, ScanSearch, Star } from "lucide-react";
import { toast } from "sonner";
import { CompareBar } from "@/components/compare-bar";
import { OfferTable } from "@/components/offer-table";
import { PriceChart } from "@/components/price-chart";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { analyzeOffers } from "@/lib/analyze";
import { getProduct, relatedProducts } from "@/lib/catalog";
import { formatBRL, formatDays, formatPercent } from "@/lib/format";
import {
  bestOffer,
  buildHistory,
  buildOffers,
  filterOffers,
  savings,
  type OfferFilter,
} from "@/lib/offers";
import { useRadarStore } from "@/lib/radar-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/produto/$id")({
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = getProduct(Number(id));
  const [photo, setPhoto] = useState(0);
  const [filter, setFilter] = useState<OfferFilter>("todas");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const saved = useRadarStore((s) => (product ? s.saved.includes(product.id) : false));
  const compared = useRadarStore((s) => (product ? s.compare.includes(product.id) : false));
  const toggleSaved = useRadarStore((s) => s.toggleSaved);
  const toggleCompare = useRadarStore((s) => s.toggleCompare);

  const offers = useMemo(() => (product ? buildOffers(product) : []), [product]);
  const visible = useMemo(() => filterOffers(offers, filter), [offers, filter]);
  const best = bestOffer(offers);
  const save = savings(offers);
  const history = useMemo(
    () => (product && best ? buildHistory(product, best) : []),
    [product, best],
  );
  const related = product ? relatedProducts(product, 4) : [];

  if (!product || !best) {
    return (
      <div className="flex min-h-dvh flex-col bg-bg text-fg">
        <SiteHeader withSearch />
        <main className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="font-display text-3xl italic">Produto não encontrado</h1>
          <Button asChild className="mt-6">
            <Link to="/">Voltar</Link>
          </Button>
        </main>
      </div>
    );
  }

  const selected = product;
  const winner = best;

  const drop =
    winner.listPrice > winner.pixPrice
      ? ((winner.listPrice - winner.pixPrice) / winner.listPrice) * 100
      : 0;

  async function onAnalyze() {
    setAnalyzing(true);
    setAnalysis(null);
    try {
      const result = await analyzeOffers({
        data: {
          title: selected.title,
          offers: offers.map((o) => ({
            store: o.storeName,
            pix: o.totalPix,
            shipping: o.shipping,
            days: formatDays(o.daysMin, o.daysMax),
            installments: o.installments,
          })),
        },
      });
      if (result.ok) setAnalysis(result.text);
      else toast.error(result.error);
    } catch {
      toast.error("Não foi possível analisar agora.");
    } finally {
      setAnalyzing(false);
    }
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader withSearch />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 pb-28 sm:px-6">
        <p className="text-xs text-muted">
          <Link to="/" className="hover:text-fg">
            Início
          </Link>
          <span className="mx-2 text-subtle">/</span>
          <Link
            to="/busca"
            search={{ q: "", cat: product.group, sort: "preco" }}
            className="hover:text-fg"
          >
            {product.categoryLabel}
          </Link>
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <ProductImage
              src={product.images[photo] ?? product.thumbnail}
              alt={product.title}
              className="aspect-square w-full rounded-xl border border-border bg-surface"
            />
            {product.images.length > 1 ? (
              <div className="mt-3 flex gap-2">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setPhoto(i)}
                    className={cn(
                      "size-16 overflow-hidden rounded-md border",
                      i === photo ? "border-accent" : "border-border",
                    )}
                  >
                    <ProductImage src={src} alt="" className="size-full" imgClassName="p-1" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-subtle uppercase">
              {product.brand}
            </p>
            <h1 className="mt-2 font-display text-3xl tracking-tight italic sm:text-4xl">
              {product.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-sm text-muted">
                <Star className="size-3.5 fill-star text-star" strokeWidth={1.5} />
                {product.rating.toFixed(2)}
              </span>
              <Badge variant="outline">{offers.length} lojas</Badge>
              {drop >= 8 ? <Badge variant="save">−{formatPercent(drop)}</Badge> : null}
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{product.description}</p>

            <div className="mt-6 rounded-xl border border-border bg-surface p-5 shadow-soft">
              <p className="text-xs text-muted">Menor preço no PIX</p>
              <p className="font-display text-4xl tracking-tight tabular-nums">
                {formatBRL(best.pixPrice)}
              </p>
              <p className="mt-1 text-sm text-muted">
                {best.storeName}
                {best.shipping === 0 ? " · frete grátis" : ` · frete ${formatBRL(best.shipping)}`} ·{" "}
                {formatDays(best.daysMin, best.daysMax)}
              </p>
              {save > 0 ? (
                <p className="mt-2 text-sm text-save">
                  Você economiza {formatBRL(save)} em relação à oferta mais cara.
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  variant={saved ? "save" : "outline"}
                  onClick={() => {
                    toggleSaved(product.id);
                    toast(saved ? "Removido dos salvos" : "Salvo no Radar");
                  }}
                >
                  <Heart className={cn("size-4", saved && "fill-save-soft")} />
                  {saved ? "Salvo" : "Salvar"}
                </Button>
                <Button
                  variant={compared ? "default" : "outline"}
                  onClick={() => {
                    toggleCompare(product.id);
                    toast(compared ? "Removido da comparação" : "Adicionado à comparação");
                  }}
                >
                  <Scale className="size-4" />
                  Comparar
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl italic">Ofertas lado a lado</h2>
              <p className="mt-1 text-sm text-muted">Ordenadas pelo total no PIX, já com frete.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["todas", "Todas"],
                  ["frete", "Frete grátis"],
                  ["prazo", "Menor prazo"],
                  ["pix", "Maior PIX"],
                ] as const
              ).map(([key, label]) => (
                <Button
                  key={key}
                  size="sm"
                  variant={filter === key ? "default" : "outline"}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          <OfferTable offers={visible} />
        </section>

        <section className="mt-10 rounded-xl border border-border bg-surface p-5 shadow-soft">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl italic">Analista do Radar</h2>
              <p className="mt-1 text-sm text-muted">
                Uma leitura curta de custo-benefício, prazo e PIX.
              </p>
            </div>
            <Button onClick={onAnalyze} disabled={analyzing}>
              <ScanSearch className="size-4" />
              {analyzing ? "Lendo ofertas…" : "Qual vale mais a pena?"}
            </Button>
          </div>
          {analysis ? (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg">{analysis}</p>
          ) : null}
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl italic">Histórico de 30 dias</h2>
          <p className="mt-1 mb-4 text-sm text-muted">Piso recente da melhor oferta no PIX.</p>
          <div className="rounded-xl border border-border bg-surface p-4">
            <PriceChart data={history} />
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mt-12">
            <h2 className="font-display text-2xl italic">Na mesma prateleira</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
      <CompareBar />
    </div>
  );
}
