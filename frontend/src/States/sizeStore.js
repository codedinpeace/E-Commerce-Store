import { create } from "zustand";

export const useStore = create((set) => ({
  selectedSize: null,
  setSelectedSize: (size) => {
    set({ selectedSize: size });
  },
}));
