import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CompareBar } from "@/components/compare-bar";
import { ProductCard } from "@/components/product-card";
import { SearchBar } from "@/components/search-bar";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { categoryCounts, featuredProducts, SUGGESTED_SEARCHES, topRated } from "@/lib/catalog";
import { GROUP_LABEL, GROUPS } from "@/lib/localize";
import { useHydrated } from "@/lib/use-hydrated";
import { useRadarStore } from "@/lib/radar-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const deals = featuredProducts(8);
  const rated = topRated(4);
  const groups = GROUPS.map((group) => ({
    group,
    label: GROUP_LABEL[group],
    cats: categoryCounts().filter((c) => c.group === group),
  })).filter((g) => g.cats.length > 0);
  const hydrated = useHydrated();
  const recent = useRadarStore((s) => s.recent);
  const chips =
    hydrated && recent.length
      ? [
          ...recent.slice(0, 4),
          ...SUGGESTED_SEARCHES.filter(
            (s) => !recent.some((r) => r.toLowerCase() === s.toLowerCase()),
          ),
        ].slice(0, 6)
      : SUGGESTED_SEARCHES.slice(0, 6);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 pb-28 sm:px-6">
        <section className="pt-10 pb-12 sm:pt-16 sm:pb-16">
          <p className="stagger-in text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Comparador de ofertas
          </p>
          <h1
            className="stagger-in mt-3 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight italic sm:text-6xl"
            style={{ animationDelay: "40ms" }}
          >
            Compare o mercado. Encontre o piso.
          </h1>
          <p
            className="stagger-in mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            Digite um produto ou palavra-chave. O Radar alinha lojas, PIX, frete e prazo para você
            ver quem realmente está mais barato.
          </p>
          <div className="stagger-in mt-8 max-w-2xl" style={{ animationDelay: "120ms" }}>
            <SearchBar autoFocus />
          </div>
          <div className="stagger-in mt-4 flex flex-wrap gap-2" style={{ animationDelay: "160ms" }}>
            {chips.map((term) => (
              <Link
                key={term}
                to="/busca"
                search={{ q: term, cat: undefined, sort: "relevancia" }}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-fg"
              >
                {term}
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl tracking-tight italic">Categorias</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {groups.map((g) => {
              const count = g.cats.reduce((n, c) => n + c.count, 0);
              return (
                <Link
                  key={g.group}
                  to="/busca"
                  search={{ q: "", cat: g.group, sort: "preco" }}
                  className="rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors hover:border-border-strong"
                >
                  <p className="font-medium">{g.label}</p>
                  <p className="mt-1 text-xs text-muted tabular-nums">{count} produtos</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="pb-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl tracking-tight italic">Maiores quedas</h2>
              <p className="mt-1 text-sm text-muted">Onde o desconto abre mais espaço.</p>
            </div>
            <Link
              to="/busca"
              search={{ q: "", cat: undefined, sort: "desconto" }}
              className="hidden items-center gap-1 text-sm text-muted hover:text-fg sm:flex"
            >
              Ver todas <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="font-display text-2xl tracking-tight italic">Bem avaliados</h2>
            <p className="mt-1 text-sm text-muted">Quem o mercado mais recomenda.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <CompareBar />
    </div>
  );
}
