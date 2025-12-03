<template>
  <div class="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 group">
    <!-- Product Image -->
    <div class="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 overflow-hidden">
      <img 
        v-if="product.image" 
        :src="`https://www.ivideo.com.tw${product.image}`"
        :alt="cleanTitle(product.title)"
        class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        @error="handleImageError"
      />
      <div v-else class="flex items-center justify-center h-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      </div>
      
      <!-- Badge -->
      <div v-if="isUnlimited" class="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        吃到飽
      </div>
    </div>
    
    <!-- Product Info -->
    <div class="p-6">
      <h3 class="text-lg font-semibold mb-4 text-white min-h-[3rem]" v-html="cleanTitle(product.title)"></h3>
      
      <!-- Pricing -->
      <div class="space-y-2">
        <div v-if="hasValidPrice(product.per_day)" class="flex justify-between items-center">
          <span class="text-purple-200">日租</span>
          <span class="text-xl font-bold text-white">NT$ {{ product.per_day }}</span>
        </div>
        
        <div v-if="hasValidPrice(product.per_month)" class="flex justify-between items-center">
          <span class="text-purple-200">月租</span>
          <div class="text-right">
            <span class="text-xl font-bold text-white">NT$ {{ product.per_month }}</span>
            <span v-if="hasValidPrice(product.list_month)" class="block text-sm text-purple-300 line-through">
              NT$ {{ product.list_month }}
            </span>
          </div>
        </div>
        
        <div v-if="hasValidPrice(product.per_14days)" class="flex justify-between items-center">
          <span class="text-purple-200">14天</span>
          <span class="text-xl font-bold text-white">NT$ {{ product.per_14days }}</span>
        </div>
      </div>
      
      <!-- CTA Button -->
      <button class="w-full mt-6 glass-strong px-6 py-3 rounded-full font-semibold text-white hover:scale-105 transition-transform">
        立即預訂
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
