import { create } from "zustand";

interface FoodItem {
	value: number;
	label: string;
}

export interface FoodMenu {
	[foodName: string]: FoodItem;
}

interface CartStore {
	cart: FoodMenu[];
	addToCart: (item: FoodMenu) => void;
	totalItems: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
	cart: [],
	addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
	totalItems: () => get().cart.length,
}));

export default useCartStore;
