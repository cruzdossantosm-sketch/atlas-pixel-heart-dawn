import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-bg-warm", className)}>
      {failed ? (
        <div className="absolute inset-0 grid place-items-center text-subtle">
          <span className="font-display text-3xl italic text-muted/50">R</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn("size-full object-contain p-4 mix-blend-multiply", imgClassName)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
