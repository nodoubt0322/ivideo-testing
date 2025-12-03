<template>
  <section id="features" class="py-20 bg-gradient-to-b from-transparent via-black/10 to-transparent">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-300/30 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span class="text-sm font-semibold text-white">服務優勢</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-primary-100 to-secondary-100 bg-clip-text text-transparent">
          服務特色
        </h2>
        <p class="text-white/80 text-lg max-w-2xl mx-auto">
          為什麼選擇 iVideo WiFi 機租借服務
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Feature 1 -->
        <div class="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-glass-lg group">
          <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-white">高速 5G 網路</h3>
          <p class="text-white/70 leading-relaxed">支援最新 5G 及 4G LTE<br>讓您隨時隨地高速上網</p>
        </div>
        
        <!-- Feature 2 -->
        <div class="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-glass-lg group" style="transition-delay: 50ms;">
          <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-white">全日本覆蓋</h3>
          <p class="text-white/70 leading-relaxed">遍及日本全國<br>無論城市或鄉村都能使用</p>
        </div>
        
        <!-- Feature 3 -->
        <div class="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-glass-lg group" style="transition-delay: 100ms;">
          <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-white">24/7 客戶服務</h3>
          <p class="text-white/70 leading-relaxed">全天候客服支援<br>隨時解決您的問題</p>
        </div>
        
        <!-- Feature 4 -->
        <div class="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-glass-lg group" style="transition-delay: 150ms;">
          <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-white">安全可靠</h3>
          <p class="text-white/70 leading-relaxed">加密連線保護隱私<br>讓您安心使用網路</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>
