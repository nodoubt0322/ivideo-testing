<template>
  <div class="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group border border-white/20 bg-white/40">
    <!-- Product Image -->
    <div class="relative h-52 bg-white overflow-hidden">
      <img 
        v-if="product.image" 
        :src="`https://www.ivideo.com.tw${product.image}`"
        :alt="cleanTitle(product.title)"
        class="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        @error="handleImageError"
      />
      <div v-else class="flex items-center justify-center h-full bg-gradient-to-br from-primary-50 to-secondary-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      </div>
      
      <!-- Badge -->
      <div v-if="isUnlimited" class="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        吃到飽
      </div>
    </div>
    
    <!-- Product Info -->
    <div class="p-6">
      <!-- Title -->
      <h3 class="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem] leading-snug" v-html="cleanTitle(product.title)"></h3>
      
      <!-- Pricing Cards - 重新設計 -->
      <div class="space-y-2.5 mb-5">
        <!-- 日租方案 -->
        <div v-if="hasValidPrice(product.per_day)" class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-white text-sm font-semibold">日租方案</span>
            </div>
            <div class="text-right">
              <div class="text-2xl font-black text-white tracking-tight">NT$ {{ product.per_day }}</div>
              <div class="text-xs text-blue-100 font-medium">每日價格</div>
            </div>
          </div>
        </div>
        
        <!-- 月租方案 -->
        <div v-if="hasValidPrice(product.per_month)" class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-4 shadow-lg">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-white text-sm font-semibold">月租方案</span>
            </div>
            <div class="text-right">
              <div class="text-2xl font-black text-white tracking-tight">NT$ {{ product.per_month }}</div>
              <div v-if="hasValidPrice(product.list_month)" class="text-xs text-teal-100 line-through font-medium">
                原價 NT$ {{ product.list_month }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- 14天方案 -->
        <div v-if="hasValidPrice(product.per_14days)" class="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 shadow-lg">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-white text-sm font-semibold">14天方案</span>
            </div>
            <div class="text-right">
              <div class="text-2xl font-black text-white tracking-tight">NT$ {{ product.per_14days }}</div>
              <div class="text-xs text-pink-100 font-medium">超值優惠</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Button -->
      <button class="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-6 py-3.5 rounded-xl font-bold hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl group/btn">
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
