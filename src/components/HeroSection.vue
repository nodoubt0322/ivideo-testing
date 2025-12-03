<template>
  <section class="relative py-20 md:py-32 overflow-hidden">
    <!-- Animated Background Shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-400/15 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto animate-fade-in-up">
        <!-- 標籤徽章 -->
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-300/30 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span class="text-sm font-semibold text-white">專業日本 WiFi 租借服務</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span class="text-white text-shadow-xl">
            日本 WiFi 機租借
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto text-shadow-lg">
          高速 5G/4G LTE 上網服務<br />讓您的日本之旅隨時保持連線
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#products" 
            class="group glass-strong px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/40 to-secondary-500/40 hover:shadow-glass-lg"
          >
            <span>查看方案</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="#features" 
            class="glass px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 hover:glass-strong transition-all duration-300"
          >
            了解更多
          </a>
        </div>
        
        <!-- Stats - 數據展示 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div class="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <p class="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow-lg">99%</p>
            <p class="text-sm text-white font-medium">客戶滿意度</p>
          </div>
          <div class="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <p class="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow-lg">24小時</p>
            <p class="text-sm text-white font-medium">線上客服</p>
          </div>
          <div class="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <p class="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow-lg">5G</p>
            <p class="text-sm text-white font-medium">高速連線</p>
          </div>
          <div class="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <p class="text-3xl md:text-4xl font-bold text-white mb-2 text-shadow-lg">吃到飽</p>
            <p class="text-sm text-white font-medium">流量無上限</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 滾動提示 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>
