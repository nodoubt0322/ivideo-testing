<template>
  <section id="products" class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-300/30 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span class="text-sm font-semibold text-white">精選方案</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
          熱門 WiFi 方案
        </h2>
        <p class="text-white text-lg max-w-2xl mx-auto text-shadow">
          選擇最適合您的日本上網方案
        </p>
      </div>
      
      <!-- Filter -->
      <ProductFilter :activeFilter="activeFilter" @filter-change="handleFilterChange" />
      
      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div class="glass-card rounded-2xl p-12">
          <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-400 border-t-transparent mx-auto mb-4"></div>
          <p class="text-white/80 text-center font-medium">載入中...</p>
        </div>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="glass-card rounded-2xl p-12 text-center max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-accent-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-bold text-white mb-2">載入失敗</h3>
        <p class="text-white/70 mb-6">{{ error }}</p>
        <button 
          @click="retry" 
          class="glass-strong px-6 py-3 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary-500/40 to-secondary-500/40"
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
      <div v-else class="glass-card rounded-2xl p-12 text-center max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-bold text-white mb-2">暫無產品</h3>
        <p class="text-white/70">目前沒有符合條件的產品</p>
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
