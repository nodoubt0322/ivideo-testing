<template>
  <header class="glass sticky top-0 z-50 shadow-lg border-b border-white/10">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold text-white tracking-wide">iVideo WiFi</h1>
            <p class="text-xs text-primary-100">出國上網專家</p>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#latest" class="nav-link text-white hover:text-primary-200 transition-all duration-300 font-medium relative group text-sm">
            最新活動
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#buy" class="nav-link text-white hover:text-primary-200 transition-all duration-300 font-medium relative group text-sm">
            購買服務
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#rental" class="nav-link text-white hover:text-primary-200 transition-all duration-300 font-medium relative group text-sm">
            租借服務
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#unlimited" class="nav-link text-white hover:text-primary-200 transition-all duration-300 font-medium relative group text-sm">
            無限吃到飽
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#longterm" class="nav-link text-white hover:text-primary-200 transition-all duration-300 font-medium relative group text-sm">
            長期方案
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#products" class="nav-link text-white hover:text-primary-200 transition-all duration-300 font-medium relative group text-sm">
            產品介紹
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#member" class="nav-link text-white hover:text-primary-200 transition-all duration-300 font-medium relative group text-sm">
            會員中心
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        
        <!-- Theme Toggle & Actions -->
        <div class="hidden lg:flex items-center gap-3">
          <!-- Theme Toggle Button -->
          <button 
            @click="toggleTheme" 
            class="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 group relative overflow-hidden"
            aria-label="切換主題"
          >
            <!-- Sun Icon (Target: Light Mode) -->
            <svg 
              v-show="isDark" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 transition-all duration-300 transform group-hover:rotate-45" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon Icon (Target: Dark Mode) -->
            <svg 
              v-show="!isDark" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 transition-all duration-300 transform group-hover:rotate-12" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <!-- Glow Effect -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-all" aria-label="搜尋">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-all relative" aria-label="購物車">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center font-bold">4</span>
          </button>
          <button class="glass-strong px-5 py-2 rounded-full text-white font-medium hover:scale-105 hover:shadow-glass-lg transition-all duration-300 bg-gradient-to-r from-accent-500/60 to-accent-600/60 text-sm">
            登入
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="lg:hidden glass-strong p-2 rounded-lg hover:scale-105 transition-transform"
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
        class="lg:hidden pb-4 space-y-2 animate-fade-in-up"
      >
        <a href="#latest" @click="closeMenu" class="block text-white hover:text-primary-200 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/5 text-sm">最新活動</a>
        <a href="#buy" @click="closeMenu" class="block text-white hover:text-primary-200 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/5 text-sm">購買服務</a>
        <a href="#rental" @click="closeMenu" class="block text-white hover:text-primary-200 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/5 text-sm">租借服務</a>
        <a href="#unlimited" @click="closeMenu" class="block text-white hover:text-primary-200 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/5 text-sm">無限吃到飽</a>
        <a href="#longterm" @click="closeMenu" class="block text-white hover:text-primary-200 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/5 text-sm">長期方案</a>
        <a href="#products" @click="closeMenu" class="block text-white hover:text-primary-200 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/5 text-sm">產品介紹</a>
        <a href="#member" @click="closeMenu" class="block text-white hover:text-primary-200 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/5 text-sm">會員中心</a>
        <div class="pt-3 border-t border-white/10 flex gap-3 px-4">
          <button class="glass-strong px-5 py-2 rounded-full text-white font-medium flex-1 text-sm">搜尋</button>
          <button class="glass-strong px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-accent-500/60 to-accent-600/60 flex-1 text-sm">登入</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from '../composables/useTheme';

const isMenuOpen = ref(false);
const { isDark, toggleTheme } = useTheme();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>
