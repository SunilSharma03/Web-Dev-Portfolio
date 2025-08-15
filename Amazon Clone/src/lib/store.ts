import { create } from 'zustand';
import { Product, CartItem } from './types';

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addToCart: (product: Product) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },
  
  removeFromCart: (id: number) => {
    set({ items: get().items.filter(item => item.id !== id) });
  },
  
  updateQuantity: (id: number, quantity: number) => {
    set({
      items: get().items.map(item =>
        item.id === id ? { ...item, quantity } : item
      ),
    });
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotal: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));