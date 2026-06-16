import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],
      
      toggleWishlist: (product) => {
        const { wishlist } = get();
        const isExists = wishlist.find((item) => item.id === product.id);
        
        if (isExists) {
          set({ wishlist: wishlist.filter((item) => item.id !== product.id) });
          return false; // Removed
        } else {
          set({ wishlist: [...wishlist, product] });
          return true; // Added
        }
      },
      
      removeFromWishlist: (id) => {
        const { wishlist } = get();
        set({ wishlist: wishlist.filter((item) => item.id !== id) });
      },
      
      isInWishlist: (id) => {
        const { wishlist } = get();
        return wishlist.some((item) => item.id === id);
      },
      
      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: 'wishlist-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useWishlistStore;
