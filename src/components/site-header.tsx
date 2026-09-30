import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Scale } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { useHydrated } from "@/lib/use-hydrated";
import { useRadarStore } from "@/lib/radar-store";
import { cn } from "@/lib/utils";

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-sm bg-accent font-display text-lg text-accent-fg italic">
        R
      </span>
      <span className={cn("font-display text-xl tracking-tight italic", compact && "sr-only sm:not-sr-only")}>
        Radar
      </span>
    </Link>
  );
}

export function SiteHeader({ withSearch = false }: { withSearch?: boolean }) {
  const hydrated = useHydrated();
  const saved = useRadarStore((s) => s.saved.length);
  const compare = useRadarStore((s) => s.compare.length);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const q = useRouterState({
    select: (s) => {
      const search = s.location.search as { q?: string };
      return search.q ?? "";
    },
  });
  const savedCount = hydrated ? saved : 0;
  const compareCount = hydrated ? compare : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Wordmark compact={withSearch} />
        {withSearch ? (
          <div className="hidden min-w-0 flex-1 md:block">
            <SearchBar initial={pathname.startsWith("/busca") ? q : ""} size="md" />
          </div>
        ) : (
          <div className="flex-1" />
        )}
        <nav className="flex items-center gap-1">
          <Link
            to="/salvos"
            className={cn(
              "relative grid size-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg",
              pathname === "/salvos" && "text-fg",
            )}
            aria-label="Produtos salvos"
          >
            <Heart className="size-5" strokeWidth={1.75} />
            {savedCount > 0 ? (
              <span className="absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-accent px-1 font-mono text-[10px] text-accent-fg tabular-nums">
                {savedCount}
              </span>
            ) : null}
          </Link>
          <Link
            to="/comparar"
            className={cn(
              "relative grid size-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg",
              pathname === "/comparar" && "text-fg",
            )}
            aria-label="Comparar produtos"
          >
            <Scale className="size-5" strokeWidth={1.75} />
            {compareCount > 0 ? (
              <span className="absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-accent px-1 font-mono text-[10px] text-accent-fg tabular-nums">
                {compareCount}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
      {withSearch ? (
        <div className="border-t border-border px-4 py-2 md:hidden">
          <SearchBar initial={pathname.startsWith("/busca") ? q : ""} size="md" />
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-display text-lg italic">Radar</p>
        <p className="max-w-md text-sm text-muted">
          Compare ofertas por palavra-chave. PIX, frete e prazo lado a lado — para achar o piso do
          mercado.
        </p>
      </div>
    </footer>
  );
}
