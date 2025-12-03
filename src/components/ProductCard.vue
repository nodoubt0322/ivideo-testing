<template>
  <div class="glass-card rounded-2xl overflow-hidden hover:scale-105 hover:shadow-glass-lg transition-all duration-300 group border border-white/10">
    <!-- Product Image -->
    <div class="relative h-48 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-primary-600/20 overflow-hidden">
      <img 
        v-if="product.image" 
        :src="`https://www.ivideo.com.tw${product.image}`"
        :alt="cleanTitle(product.title)"
        class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
        @error="handleImageError"
      />
      <div v-else class="flex items-center justify-center h-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      </div>
      
      <!-- Badge -->
      <div v-if="isUnlimited" class="absolute top-3 right-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        吃到飽
      </div>
      
      <!-- Decorative gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <!-- Product Info -->
    <div class="p-6 bg-gradient-to-b from-white/5 to-transparent">
      <h3 class="text-lg font-semibold mb-4 text-white min-h-[3rem] leading-tight" v-html="cleanTitle(product.title)"></h3>
      
      <!-- Pricing -->
      <div class="space-y-3 mb-6">
        <div v-if="hasValidPrice(product.per_day)" class="flex justify-between items-center bg-white/5 rounded-lg p-3 backdrop-blur-sm">
          <span class="text-primary-200 text-sm font-medium">日租方案</span>
          <span class="text-xl font-bold bg-gradient-to-r from-primary-200 to-secondary-200 bg-clip-text text-transparent">NT$ {{ product.per_day }}</span>
        </div>
        
        <div v-if="hasValidPrice(product.per_month)" class="flex justify-between items-center bg-white/5 rounded-lg p-3 backdrop-blur-sm">
          <span class="text-secondary-200 text-sm font-medium">月租方案</span>
          <div class="text-right">
            <span class="text-xl font-bold bg-gradient-to-r from-secondary-200 to-accent-200 bg-clip-text text-transparent">NT$ {{ product.per_month }}</span>
            <span v-if="hasValidPrice(product.list_month)" class="block text-xs text-white/40 line-through mt-1">
              NT$ {{ product.list_month }}
            </span>
          </div>
        </div>
        
        <div v-if="hasValidPrice(product.per_14days)" class="flex justify-between items-center bg-white/5 rounded-lg p-3 backdrop-blur-sm">
          <span class="text-accent-200 text-sm font-medium">14天方案</span>
          <span class="text-xl font-bold bg-gradient-to-r from-accent-200 to-primary-200 bg-clip-text text-transparent">NT$ {{ product.per_14days }}</span>
        </div>
      </div>
      
      <!-- CTA Button -->
      <button class="w-full glass-strong px-6 py-3 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary-500/40 to-secondary-500/40 hover:shadow-glass-lg group/btn">
        <span class="flex items-center justify-center gap-2">
          立即預訂
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const isUnlimited = computed(() => {
  return props.product.title.includes('吃到飽');
});

function cleanTitle(title) {
  return title.replace(/<\/br>/g, ' ').replace(/<br>/g, ' ');
}

function hasValidPrice(price) {
  return price && price !== '.00' && price !== '0.00' && parseFloat(price) > 0;
}

function handleImageError(event) {
  event.target.style.display = 'none';
}
</script>
