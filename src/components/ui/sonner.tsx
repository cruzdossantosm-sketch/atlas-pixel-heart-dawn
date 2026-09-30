import { Toaster as Sonner } from "sonner";

function Toaster() {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast: "bg-surface text-fg border-border font-sans",
          title: "text-fg",
          description: "text-muted",
        },
      }}
    />
  );
}

export { Toaster };
