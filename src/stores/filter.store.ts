import { create } from "zustand";

interface FilterStore {
  category: string;
  setCategory: (v: string) => void;
  search: string;
  setSearch: (v: string) => void;
  page: number;
  prevPage: () => void;
  nextPage: () => void;
  reset: () => void;
}
export const useFilterStore = create<FilterStore>((set) => ({
  category: "default",
  setCategory: (category) => set({ category, search: "" }),

  search: "",
  setSearch: (search) => set({ search }),

  page: 1,
  prevPage: () =>
    set((state) => ({ page: state.page <= 1 ? 1 : state.page - 1 })),
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  reset: () => set({ category: "default", page: 1, search: "" }),
}));
