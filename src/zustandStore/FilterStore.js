import { create } from 'zustand';

const useFilterStore = create((set, get) => ({
  // State
  sortBy: 'default',
  currentPage: 1,
  itemsPerPage: 9,
  search: '',
  priceRange: [10, 600],
  
  selectedCategories: [],
  selectedReviews: [],
  selectedPromotions: [],
  selectedAvailability: [],
  selectedSkinConcerns: [],
  
  // Actions
  toggleCategory: (categoryId) => {
    set(state => ({
      selectedCategories: state.selectedCategories.includes(categoryId)
        ? state.selectedCategories.filter(c => c !== categoryId)
        : [...state.selectedCategories, categoryId],
      currentPage: 1
    }));
  },
  
  toggleSkinConcern: (concern) => {
    set(state => ({
      selectedSkinConcerns: state.selectedSkinConcerns.includes(concern)
        ? state.selectedSkinConcerns.filter(c => c !== concern)
        : [...state.selectedSkinConcerns, concern],
      currentPage: 1
    }));
  },
  
  toggleReview: (stars) => {
    const starVal = Number(stars);
    set(state => ({
      selectedReviews: state.selectedReviews.includes(starVal)
        ? state.selectedReviews.filter(s => s !== starVal)
        : [...state.selectedReviews, starVal],
      currentPage: 1
    }));
  },
  
  togglePromotion: (promotion) => {
    set(state => ({
      selectedPromotions: state.selectedPromotions.includes(promotion)
        ? state.selectedPromotions.filter(p => p !== promotion)
        : [...state.selectedPromotions, promotion],
      currentPage: 1
    }));
  },
  
  toggleAvailability: (status) => {
    set(state => ({
      selectedAvailability: state.selectedAvailability.includes(status)
        ? state.selectedAvailability.filter(a => a !== status)
        : [...state.selectedAvailability, status],
      currentPage: 1
    }));
  },
  
  setPriceRange: (range) => {
    set({ 
      priceRange: range,
      currentPage: 1
    });
  },

  setSortBy: (sort) => {
    set({ sortBy: sort, currentPage: 1 });
  },
  
  setCurrentPage: (page) => {
    set({ currentPage: page });
  },

  setSearch: (searchVal) => {
    set({ search: searchVal, currentPage: 1 });
  },
  
  clearAllFilters: () => {
    set({ 
      selectedCategories: [],
      selectedReviews: [],
      selectedPromotions: [],
      selectedAvailability: [],
      selectedSkinConcerns: [],
      priceRange: [10, 600],
      currentPage: 1,
      sortBy: 'default',
      search: ''
    });
  }
}));

export default useFilterStore;