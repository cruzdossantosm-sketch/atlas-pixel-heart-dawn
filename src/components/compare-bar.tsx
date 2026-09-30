import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/catalog";
import { useHydrated } from "@/lib/use-hydrated";
import { useRadarStore } from "@/lib/radar-store";

export function CompareBar() {
  const hydrated = useHydrated();
  const compare = useRadarStore((s) => s.compare);
  const toggleCompare = useRadarStore((s) => s.toggleCompare);
  const clearCompare = useRadarStore((s) => s.clearCompare);

  if (!hydrated || compare.length === 0) return null;

  const items = compare.map((id) => getProduct(id)).filter(Boolean);

  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <p className="hidden text-sm text-muted sm:block">{items.length} na comparação</p>
        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto">
          {items.map((p) =>
            p ? (
              <button
                key={p.id}
                type="button"
                onClick={() => toggleCompare(p.id)}
                className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-bg px-3 py-2 text-sm"
              >
                <span className="max-w-36 truncate">{p.title}</span>
                <X className="size-3.5 text-subtle" />
              </button>
            ) : null,
          )}
        </div>
        <Button variant="ghost" size="sm" onClick={clearCompare}>
          Limpar
        </Button>
        <Button asChild size="sm">
          <Link to="/comparar">Comparar</Link>
        </Button>
      </div>
    </div>
  );
}
