import { Link } from "@tanstack/react-router";
import { Heart, Scale } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { ProductImage } from "@/components/product-image";
import type { Product } from "@/lib/catalog-types";
import { formatBRL, formatPercent } from "@/lib/format";
import { bestOffer, buildOffers, savings } from "@/lib/offers";
import { useHydrated } from "@/lib/use-hydrated";
import { useRadarStore } from "@/lib/radar-store";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const offers = buildOffers(product);
  const best = bestOffer(offers);
  const save = savings(offers);
  const hydrated = useHydrated();
  const saved = useRadarStore((s) => s.saved.includes(product.id));
  const compared = useRadarStore((s) => s.compare.includes(product.id));
  const toggleSaved = useRadarStore((s) => s.toggleSaved);
  const toggleCompare = useRadarStore((s) => s.toggleCompare);
  const isSaved = hydrated && saved;
  const isCompared = hydrated && compared;

  if (!best) return null;

  const drop =
    best.listPrice > best.pixPrice
      ? ((best.listPrice - best.pixPrice) / best.listPrice) * 100
      : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <div className="absolute top-3 right-3 z-10 flex gap-1.5">
        <button
          type="button"
          aria-label={isCompared ? "Remover da comparação" : "Adicionar à comparação"}
          onClick={() => {
            toggleCompare(product.id);
            toast(isCompared ? "Removido da comparação" : "Adicionado à comparação");
          }}
          className={cn(
            "grid size-10 place-items-center rounded-md border bg-surface/90 backdrop-blur-sm transition-colors",
            isCompared ? "border-accent text-accent" : "border-border text-muted hover:text-fg",
          )}
        >
          <Scale className="size-4" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          aria-label={isSaved ? "Remover dos salvos" : "Salvar produto"}
          onClick={() => {
            toggleSaved(product.id);
            toast(isSaved ? "Removido dos salvos" : "Salvo no Radar");
          }}
          className={cn(
            "grid size-10 place-items-center rounded-md border bg-surface/90 backdrop-blur-sm transition-colors",
            isSaved ? "border-save text-save" : "border-border text-muted hover:text-fg",
          )}
        >
          <Heart className={cn("size-4", isSaved && "fill-save")} strokeWidth={1.75} />
        </button>
      </div>

      <Link to="/produto/$id" params={{ id: String(product.id) }} className="flex flex-1 flex-col">
        <ProductImage
          src={product.thumbnail}
          alt={product.title}
          className="aspect-square w-full"
        />
        <div className="flex flex-1 flex-col gap-2 p-4 pt-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="outline">{offers.length} lojas</Badge>
            {drop >= 8 ? <Badge variant="save">−{formatPercent(drop)}</Badge> : null}
          </div>
          <p className="text-[11px] font-medium tracking-wide text-subtle uppercase">
            {product.brand}
          </p>
          <h3 className="font-medium text-fg leading-snug">{product.title}</h3>
          <div className="mt-auto pt-2">
            <p className="text-xs text-muted">a partir de</p>
            <p className="font-display text-2xl tracking-tight text-fg tabular-nums">
              {formatBRL(best.pixPrice)}
            </p>
            <p className="mt-1 text-xs text-muted">
              no PIX · {best.storeShort}
              {save > 0 ? ` · economize ${formatBRL(save)}` : ""}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
