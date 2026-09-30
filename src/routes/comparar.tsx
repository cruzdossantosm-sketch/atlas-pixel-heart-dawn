import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/product-image";
import { getProduct } from "@/lib/catalog";
import { formatBRL, formatDays } from "@/lib/format";
import { bestOffer, buildOffers, savings } from "@/lib/offers";
import { useRadarStore } from "@/lib/radar-store";

export const Route = createFileRoute("/comparar")({ component: ComparePage });

function ComparePage() {
  const compare = useRadarStore((s) => s.compare);
  const toggleCompare = useRadarStore((s) => s.toggleCompare);
  const clearCompare = useRadarStore((s) => s.clearCompare);
  const items = compare.map((id) => getProduct(id)).filter(Boolean);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader withSearch />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 pb-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Lado a lado
            </p>
            <h1 className="mt-2 font-display text-3xl tracking-tight italic sm:text-4xl">
              Comparar produtos
            </h1>
          </div>
          {items.length > 0 ? (
            <Button variant="outline" size="sm" onClick={clearCompare}>
              Limpar tudo
            </Button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="mt-12 max-w-md">
            <p className="font-display text-2xl italic">Escolha até três produtos.</p>
            <p className="mt-2 text-sm text-muted">
              Na busca, toque na balança para montar a comparação.
            </p>
            <Button asChild className="mt-6">
              <Link to="/busca" search={{ q: "iphone", cat: undefined, sort: "relevancia" }}>
                Buscar iPhone
              </Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto">
            <div
              className="grid min-w-[640px] gap-4"
              style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
            >
              {items.map((product) => {
                if (!product) return null;
                const offers = buildOffers(product);
                const best = bestOffer(offers);
                const save = savings(offers);
                if (!best) return null;
                return (
                  <article
                    key={product.id}
                    className="flex flex-col rounded-xl border border-border bg-surface p-4 shadow-soft"
                  >
                    <ProductImage
                      src={product.thumbnail}
                      alt={product.title}
                      className="aspect-square w-full rounded-lg"
                    />
                    <p className="mt-3 text-[11px] font-medium tracking-wide text-subtle uppercase">
                      {product.brand}
                    </p>
                    <h2 className="mt-1 font-medium leading-snug">{product.title}</h2>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <Badge variant="outline">{offers.length} lojas</Badge>
                      {save > 0 ? <Badge variant="save">{formatBRL(save)} a menos</Badge> : null}
                    </div>
                    <dl className="mt-4 space-y-3 text-sm">
                      <div>
                        <dt className="text-xs text-muted">Menor PIX</dt>
                        <dd className="font-display text-2xl tabular-nums">
                          {formatBRL(best.pixPrice)}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2 border-t border-border pt-3">
                        <dt className="text-muted">Loja</dt>
                        <dd>{best.storeShort}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">Frete</dt>
                        <dd>{best.shipping === 0 ? "Grátis" : formatBRL(best.shipping)}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">Prazo</dt>
                        <dd>{formatDays(best.daysMin, best.daysMax)}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">Total</dt>
                        <dd className="tabular-nums">{formatBRL(best.totalPix)}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">Parcelas</dt>
                        <dd>
                          {best.installments}x {formatBRL(best.installmentValue)}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted">Nota</dt>
                        <dd>{product.rating.toFixed(1)}</dd>
                      </div>
                    </dl>
                    <div className="mt-auto flex flex-col gap-2 pt-5">
                      <Button asChild>
                        <Link to="/produto/$id" params={{ id: String(product.id) }}>
                          Ver ofertas
                        </Link>
                      </Button>
                      <Button variant="ghost" onClick={() => toggleCompare(product.id)}>
                        Remover
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
