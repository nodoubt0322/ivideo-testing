<template>
  <section id="products" class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          熱門 WiFi 方案
        </h2>
        <p class="text-purple-100 text-lg">
          選擇最適合您的日本上網方案
        </p>
      </div>
      
      <!-- Filter -->
      <ProductFilter :activeFilter="activeFilter" @filter-change="handleFilterChange" />
      
      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div class="glass rounded-2xl p-12">
          <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p class="text-purple-200 text-center">載入中...</p>
        </div>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="glass rounded-2xl p-12 text-center max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-red-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">載入失敗</h3>
        <p class="text-purple-200 mb-4">{{ error }}</p>
        <button 
          @click="retry" 
          class="glass-strong px-6 py-3 rounded-full font-semibold text-white hover:scale-105 transition-transform"
        >
          重試
        </button>
      </div>
      
      <!-- Products Grid -->
      <div v-else-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
      
      <!-- No Results -->
      <div v-else class="glass rounded-2xl p-12 text-center max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-purple-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">暫無產品</h3>
        <p class="text-purple-200">目前沒有符合條件的產品</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductFilter from './ProductFilter.vue';
import ProductCard from './ProductCard.vue';

const props = defineProps({
  filteredProducts: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: null
  },
  activeFilter: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['filter-change', 'retry']);

function handleFilterChange(filter) {
  emit('filter-change', filter);
}

function retry() {
  emit('retry');
}
</script>
