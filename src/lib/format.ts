const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const brlCompact = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatBRL(value: number) {
  return brl.format(value);
}

export function formatBRLCompact(value: number) {
  return value >= 1000 ? brlCompact.format(value) : brl.format(value);
}

export function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

export function formatDays(min: number, max: number) {
  if (min === max) {
    return min <= 1 ? "chega amanhã" : `${min} dias úteis`;
  }
  return `${min}–${max} dias úteis`;
}

export function formatReviews(count: number) {
  return count.toLocaleString("pt-BR");
}

export function formatInstallments(count: number, value: number) {
  if (count <= 1) return "à vista no cartão";
  return `${count}x de ${formatBRL(value)} sem juros`;
}
