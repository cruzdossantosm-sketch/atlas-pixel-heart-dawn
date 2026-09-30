import { create } from "zustand";
import { persist } from "zustand/middleware";

const MAX_COMPARE = 3;
const MAX_RECENT = 8;

type RadarState = {
  saved: number[];
  compare: number[];
  recent: string[];
  toggleSaved: (id: number) => void;
  toggleCompare: (id: number) => void;
  clearCompare: () => void;
  addRecent: (query: string) => void;
  clearRecent: () => void;
};

export const useRadarStore = create<RadarState>()(
  persist(
    (set, get) => ({
      saved: [],
      compare: [],
      recent: [],
      toggleSaved: (id) => {
        const saved = get().saved;
        set({
          saved: saved.includes(id) ? saved.filter((x) => x !== id) : [id, ...saved],
        });
      },
      toggleCompare: (id) => {
        const compare = get().compare;
        if (compare.includes(id)) {
          set({ compare: compare.filter((x) => x !== id) });
          return;
        }
        if (compare.length >= MAX_COMPARE) {
          set({ compare: [...compare.slice(1), id] });
          return;
        }
        set({ compare: [...compare, id] });
      },
      clearCompare: () => set({ compare: [] }),
      addRecent: (query) => {
        const q = query.trim();
        if (!q) return;
        const recent = [q, ...get().recent.filter((x) => x.toLowerCase() !== q.toLowerCase())].slice(
          0,
          MAX_RECENT,
        );
        set({ recent });
      },
      clearRecent: () => set({ recent: [] }),
    }),
    { name: "radar-ofertas" },
  ),
);
