import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatBRL, formatDays, formatInstallments, formatPercent } from "@/lib/format";
import type { Offer } from "@/lib/offers";
import { cn } from "@/lib/utils";
import { Check, Truck } from "lucide-react";
import { toast } from "sonner";

export function OfferTable({ offers }: { offers: Offer[] }) {
  if (offers.length === 0) {
    return (
      <p className="rounded-lg border border-border bg-surface p-6 text-sm text-muted">
        Nenhuma oferta neste filtro. Tente outro recorte.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {offers.map((offer, index) => {
        const isBest = index === 0;
        return (
          <article
            key={offer.id}
            className={cn(
              "rounded-xl border bg-surface p-4 shadow-soft sm:p-5",
              isBest ? "border-save/40" : "border-border",
            )}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium">{offer.storeName}</h3>
                  {isBest ? <Badge variant="save">Melhor preço</Badge> : null}
                  {offer.official ? <Badge variant="outline">Loja oficial</Badge> : null}
                  {!offer.inStock ? <Badge variant="outline">Sob consulta</Badge> : null}
                </div>
                <p className="mt-1 text-xs text-muted">
                  {offer.storeKind === "marketplace" ? "Marketplace" : "Venda direta"} ·{" "}
                  {offer.rating.toFixed(1)} · {offer.reviews.toLocaleString("pt-BR")} avaliações
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-8">
                <div>
                  {offer.listPrice > offer.price ? (
                    <p className="text-xs text-subtle line-through tabular-nums">
                      {formatBRL(offer.listPrice)}
                    </p>
                  ) : null}
                  <p className="font-display text-2xl tracking-tight tabular-nums">
                    {formatBRL(offer.pixPrice)}
                  </p>
                  <p className="text-xs text-save">
                    no PIX
                    {offer.pixDiscount > 0 ? ` · ${formatPercent(offer.pixDiscount * 100)} off` : ""}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {formatInstallments(offer.installments, offer.installmentValue)}
                  </p>
                </div>
                <div className="text-sm text-muted">
                  <p className="flex items-center gap-1.5">
                    <Truck className="size-3.5" strokeWidth={1.75} />
                    {offer.shipping === 0 ? "Frete grátis" : formatBRL(offer.shipping)}
                  </p>
                  <p className="mt-1">{formatDays(offer.daysMin, offer.daysMax)}</p>
                  <p className="mt-1 tabular-nums">Total {formatBRL(offer.totalPix)}</p>
                </div>
                <Button
                  variant={isBest ? "save" : "outline"}
                  className="w-full sm:w-auto"
                  disabled={!offer.inStock}
                  onClick={() =>
                    toast("Oferta do catálogo Radar", {
                      description: `${offer.storeName} · ${formatBRL(offer.pixPrice)} no PIX`,
                    })
                  }
                >
                  <Check className="size-4" strokeWidth={1.75} />
                  Ir à loja
                </Button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
