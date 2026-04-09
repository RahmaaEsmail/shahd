// store/filterStore.js
import { create } from 'zustand';
import { productData } from '../data/productFilters';

// Define filter types
export const filterTypes = {
  CATEGORY: 'category',
  PRICE: 'price',
  REVIEW: 'review',
  PROMOTION: 'promotion',
  AVAILABILITY: 'availability',
};



const useFilterStore = create((set, get) => ({
  // State
  activeFilters: [],
  sortBy: 'default',
  currentPage: 1,
  itemsPerPage: 9,
  
  // Price range state
  priceRange: [10, 100],
  
  // Selected filter options (for checkboxes)
  selectedCategories: [],
  selectedReviews: [],
  selectedPromotions: [],
  selectedAvailability: [],
  
  // Actions
  removeFilter: (filterToRemove) => {
    const state = get();
    
    // Remove from active filters
    const newActiveFilters = state.activeFilters.filter(
      f => f.type !== filterToRemove.type || f.value !== filterToRemove.value
    );
    
    // Update the corresponding checkbox state
    switch (filterToRemove.type) {
      case filterTypes.CATEGORY:
        set({ 
          selectedCategories: state.selectedCategories.filter(v => v !== filterToRemove.displayValue),
          activeFilters: newActiveFilters
        });
        break;
      case filterTypes.REVIEW:
        set({ 
          selectedReviews: state.selectedReviews.filter(v => v !== filterToRemove.value.replace('-stars', '')),
          activeFilters: newActiveFilters
        });
        break;
      case filterTypes.PROMOTION:
        set({ 
          selectedPromotions: state.selectedPromotions.filter(v => v !== filterToRemove.displayValue),
          activeFilters: newActiveFilters
        });
        break;
      case filterTypes.AVAILABILITY:
        set({ 
          selectedAvailability: state.selectedAvailability.filter(v => v !== filterToRemove.displayValue),
          activeFilters: newActiveFilters
        });
        break;
      case filterTypes.PRICE:
        set({ 
          priceRange: [10, 100],
          activeFilters: newActiveFilters
        });
        break;
      default:
        set({ activeFilters: newActiveFilters });
    }
  },
  
  clearAllFilters: () => {
    set({ 
      activeFilters: [],
      selectedCategories: [],
      selectedReviews: [],
      selectedPromotions: [],
      selectedAvailability: [],
      priceRange: [10, 100],
      currentPage: 1
    });
  },
  
  // Common logic to update active filters
  _updateActiveFilters: () => {
    const state = get();
    const newActiveFilters = [];
    
    // Add category filters
    state.selectedCategories.forEach(cat => {
      newActiveFilters.push({
        type: filterTypes.CATEGORY,
        value: cat.toLowerCase().replace(/\s+/g, '-'),
        displayValue: cat
      });
    });
    
    // Add review filters
    state.selectedReviews.forEach(star => {
      newActiveFilters.push({
        type: filterTypes.REVIEW,
        value: `${star}-stars`,
        displayValue: `${star} Stars`
      });
    });
    
    // Add promotion filters
    state.selectedPromotions.forEach(promo => {
      newActiveFilters.push({
        type: filterTypes.PROMOTION,
        value: promo.toLowerCase().replace(/\s+/g, '-'),
        displayValue: promo
      });
    });
    
    // Add availability filters
    state.selectedAvailability.forEach(avail => {
      newActiveFilters.push({
        type: filterTypes.AVAILABILITY,
        value: avail.toLowerCase().replace(/\s+/g, '-'),
        displayValue: avail
      });
    });
    
    // Add price filter (always show if not default)
    if (state.priceRange[0] !== 10 || state.priceRange[1] !== 100) {
      newActiveFilters.push({
        type: filterTypes.PRICE,
        value: `${state.priceRange[0]}-${state.priceRange[1]}`,
        displayValue: `Price: $${state.priceRange[0].toFixed(2)} - $${state.priceRange[1].toFixed(2)}`
      });
    }
    
    set({ activeFilters: newActiveFilters });
  },
  
  // Category filter handlers
  toggleCategory: (category) => {
    set(state => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter(c => c !== category)
        : [...state.selectedCategories, category],
      currentPage: 1
    }));
    get()._updateActiveFilters();
  },
  
  // Review filter handlers
  toggleReview: (stars) => {
    const starsStr = stars.toString();
    set(state => ({
      selectedReviews: state.selectedReviews.includes(starsStr)
        ? state.selectedReviews.filter(s => s !== starsStr)
        : [...state.selectedReviews, starsStr],
      currentPage: 1
    }));
    get()._updateActiveFilters();
  },
  
  // Promotion filter handlers
  togglePromotion: (promotion) => {
    set(state => ({
      selectedPromotions: state.selectedPromotions.includes(promotion)
        ? state.selectedPromotions.filter(p => p !== promotion)
        : [...state.selectedPromotions, promotion],
      currentPage: 1
    }));
    get()._updateActiveFilters();
  },
  
  // Availability filter handlers
  toggleAvailability: (status) => {
    set(state => ({
      selectedAvailability: state.selectedAvailability.includes(status)
        ? state.selectedAvailability.filter(a => a !== status)
        : [...state.selectedAvailability, status],
      currentPage: 1
    }));
    get()._updateActiveFilters();
  },
  
  // Price range handler
  setPriceRange: (range) => {
    set({ 
      priceRange: range,
      currentPage: 1
    });
    get()._updateActiveFilters();
  },

  
  // Sort handler
  setSortBy: (sort) => {
    set({ sortBy: sort, currentPage: 1 });
  },
  
  // Page handler
  setCurrentPage: (page) => {
    set({ currentPage: page });
  },
  
  // Get filtered products based on all active filters
  getFilteredProducts: () => {
    const { 
      selectedCategories, 
      selectedReviews, 
      selectedPromotions, 
      selectedAvailability,
      priceRange,
      sortBy
    } = get();
    
    // Start with all products
    let filtered = [...productData];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    
    // Filter by price
    filtered = filtered.filter(p => 
      p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    // Filter by review
    if (selectedReviews.length > 0) {
      filtered = filtered.filter(p => {
        return selectedReviews.some(star => p.rating >= parseInt(star));
      });
    }
    
    // Filter by promotion
    if (selectedPromotions.length > 0) {
      filtered = filtered.filter(p => 
        selectedPromotions.includes(p.promotion)
      );
    }
    
    // Filter by availability
    if (selectedAvailability.length > 0) {
      filtered = filtered.filter(p => 
        selectedAvailability.includes(p.availability)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'popular':
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        filtered.sort((a, b) => a.id - b.id);
        break;
    }
    
    return filtered;
  },
  
  // Get paginated products
  getPaginatedProducts: () => {
    const { currentPage, itemsPerPage } = get();
    const filtered = get().getFilteredProducts();
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    return {
      products: filtered.slice(start, end),
      total: filtered.length,
      totalPages: Math.ceil(filtered.length / itemsPerPage)
    };
  }
}));

export default useFilterStore;