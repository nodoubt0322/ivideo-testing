import { ref, computed } from 'vue';
import { fallbackProducts } from '../data/fallbackProducts';

const API_URL = 'https://www.ivideo.com.tw/english/japan_wifi/get_stock_area.php?area=JP&api_key=FE68A502-CF1D-42B5-8E44-F84C2BCF872D';

export function useProducts() {
  const products = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const activeFilter = ref('all');

  // Fetch products from API with fallback
  async function fetchProducts() {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && Array.isArray(data.data)) {
        products.value = data.data;
      } else {
        throw new Error('Invalid data format');
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      
      // Use fallback data for CORS or network errors
      if (
        err.message.includes('CORS') || 
        err.message.includes('NetworkError') ||
        err.message.includes('Failed to fetch')
      ) {
        console.log('Using fallback data due to CORS/network error');
        products.value = fallbackProducts;
      } else {
        error.value = err.message;
      }
    } finally {
      isLoading.value = false;
    }
  }

  // Filtered products based on active filter
  const filteredProducts = computed(() => {
    if (activeFilter.value === 'all') {
      return products.value;
    }
    
    if (activeFilter.value === 'unlimited') {
      return products.value.filter(product => 
        product.title.includes('吃到飽')
      );
    }
    
    if (activeFilter.value === 'limited') {
      return products.value.filter(product => 
        !product.title.includes('吃到飽')
      );
    }
    
    return products.value;
  });

  // Set active filter
  function setFilter(filter) {
    activeFilter.value = filter;
  }

  return {
    products,
    filteredProducts,
    isLoading,
    error,
    activeFilter,
    fetchProducts,
    setFilter
  };
}
