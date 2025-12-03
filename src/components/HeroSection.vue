<template>
  <section class="relative py-20 md:py-32 overflow-hidden">
    <!-- Animated Background Shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span class="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            日本 WiFi 機租借
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
          高速 5G/4G LTE 上網服務，讓您的日本之旅隨時保持連線
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#products" 
            class="glass-strong px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-transform inline-flex items-center space-x-2"
          >
            <span>查看方案</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="#features" 
            class="glass px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-transform"
          >
            了解更多
          </a>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div class="glass rounded-2xl p-6">
            <div class="text-3xl md:text-4xl font-bold text-purple-300 mb-2">5G</div>
            <div class="text-sm text-purple-100">高速網路</div>
          </div>
          <div class="glass rounded-2xl p-6">
            <div class="text-3xl md:text-4xl font-bold text-pink-300 mb-2">24/7</div>
            <div class="text-sm text-purple-100">全天候支援</div>
          </div>
          <div class="glass rounded-2xl p-6">
            <div class="text-3xl md:text-4xl font-bold text-purple-300 mb-2">∞</div>
            <div class="text-sm text-purple-100">流量吃到飽</div>
          </div>
          <div class="glass rounded-2xl p-6">
            <div class="text-3xl md:text-4xl font-bold text-pink-300 mb-2">10+</div>
            <div class="text-sm text-purple-100">年經驗</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>
