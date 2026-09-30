import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRadarStore } from "@/lib/radar-store";
import { cn } from "@/lib/utils";

export function SearchBar({
  initial = "",
  size = "lg",
  autoFocus = false,
}: {
  initial?: string;
  size?: "lg" | "md";
  autoFocus?: boolean;
}) {
  const [value, setValue] = useState(initial);
  const navigate = useNavigate();
  const addRecent = useRadarStore((s) => s.addRecent);

  function submit(event: FormEvent) {
    event.preventDefault();
    const q = value.trim();
    if (!q) return;
    addRecent(q);
    void navigate({
      to: "/busca",
      search: { q, cat: undefined, sort: "relevancia" },
    });
  }

  return (
    <form onSubmit={submit} className="relative w-full">
      <Search
        className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle"
        strokeWidth={1.75}
      />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Produto ou palavra-chave"
        aria-label="Buscar produto"
        autoFocus={autoFocus}
        className={cn(
          "border-border-strong bg-surface pr-28 pl-11 shadow-soft",
          size === "lg" ? "h-14 rounded-lg text-base" : "h-12 rounded-md",
        )}
      />
      <Button
        type="submit"
        size={size === "lg" ? "default" : "sm"}
        className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-md"
      >
        Comparar
      </Button>
    </form>
  );
}
