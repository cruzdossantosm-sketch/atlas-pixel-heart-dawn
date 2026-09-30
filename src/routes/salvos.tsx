import { createFileRoute, Link } from "@tanstack/react-router";
import { CompareBar } from "@/components/compare-bar";
import { ProductCard } from "@/components/product-card";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/catalog";
import { useRadarStore } from "@/lib/radar-store";

export const Route = createFileRoute("/salvos")({ component: SavedPage });

function SavedPage() {
  const saved = useRadarStore((s) => s.saved);
  const items = saved.map((id) => getProduct(id)).filter(Boolean);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader withSearch />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 pb-28 sm:px-6">
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">Lista</p>
        <h1 className="mt-2 font-display text-3xl tracking-tight italic sm:text-4xl">Salvos</h1>
        <p className="mt-2 text-sm text-muted">
          Produtos que você marcou para acompanhar o piso.
        </p>

        {items.length === 0 ? (
          <div className="mt-12 max-w-md">
            <p className="font-display text-2xl italic">Nada salvo ainda.</p>
            <p className="mt-2 text-sm text-muted">
              Busque um produto e toque no coração para guardar a comparação.
            </p>
            <Button asChild className="mt-6">
              <Link to="/">Começar busca</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((product) =>
              product ? <ProductCard key={product.id} product={product} /> : null,
            )}
          </div>
        )}
      </main>
      <SiteFooter />
      <CompareBar />
    </div>
  );
}
