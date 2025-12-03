<template>
  <header class="glass sticky top-0 z-50 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold text-white">iVideo WiFi</h1>
            <p class="text-xs text-purple-200">出國上網專家</p>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#products" class="text-white hover:text-purple-300 transition-colors font-medium">產品方案</a>
          <a href="#features" class="text-white hover:text-purple-300 transition-colors font-medium">服務特色</a>
          <a href="#about" class="text-white hover:text-purple-300 transition-colors font-medium">關於我們</a>
          <a href="#contact" class="glass-strong px-6 py-2.5 rounded-full text-white font-semibold hover:scale-105 transition-transform">
            立即租借
          </a>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden glass-strong p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <nav 
        v-show="isMenuOpen" 
        class="md:hidden pb-4 space-y-3"
      >
        <a href="#products" @click="closeMenu" class="block text-white hover:text-purple-300 transition-colors font-medium py-2">產品方案</a>
        <a href="#features" @click="closeMenu" class="block text-white hover:text-purple-300 transition-colors font-medium py-2">服務特色</a>
        <a href="#about" @click="closeMenu" class="block text-white hover:text-purple-300 transition-colors font-medium py-2">關於我們</a>
        <a href="#contact" @click="closeMenu" class="block glass-strong px-6 py-2.5 rounded-full text-white font-semibold text-center hover:scale-105 transition-transform">
          立即租借
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>
