<template>
  <footer class="bg-gradient-to-b from-[#3b6b9c] to-[#2e5a85] mt-20 py-12">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- 流程與常見問題 -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
        <h3 class="text-white font-bold text-lg mb-6">流程與常見問題</h3>
        <div class="flex flex-wrap gap-x-6 gap-y-3">
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">購買eSIM使用教學</a>
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">購買eSIM常見問題</a>
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">購買SIM卡購買流程</a>
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">購買SIM卡使用說明書</a>
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">購買SIM卡常見問題</a>
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">租借流程</a>
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">租借常見問題</a>
          <a href="#" class="text-white/90 hover:text-white transition-colors text-sm">WiFi機儲值說明</a>
        </div>
      </div>

      <!-- 客服時間與聯絡方式 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- 線上客服時間 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 class="text-white font-bold text-lg mb-6">線上客服時間</h3>
          <div class="space-y-3 mb-6">
            <p class="text-white/90 text-sm font-medium">全年無休 24小時 | 02-6630-6688</p>
            <div class="flex items-center gap-2 text-white/90 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>ivideo66306688@gmail.com</span>
            </div>
            <div class="flex items-center gap-2 text-white/90 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>@ivideo (24小時)</span>
            </div>
          </div>
          <div>
            <p class="text-white/80 text-sm mb-3">客戶服務</p>
            <div class="flex gap-3">
              <!-- Facebook -->
              <a href="#" class="w-10 h-10 rounded-full bg-[#1877f2] hover:opacity-80 flex items-center justify-center text-white transition-all hover:scale-110" aria-label="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <!-- LINE -->
              <a href="#" class="w-10 h-10 rounded-full bg-[#06c755] hover:opacity-80 flex items-center justify-center text-white transition-all hover:scale-110" aria-label="LINE">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
              <!-- Instagram -->
              <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-80 flex items-center justify-center text-white transition-all hover:scale-110" aria-label="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <!-- YouTube -->
              <a href="#" class="w-10 h-10 rounded-full bg-[#ff0000] hover:opacity-80 flex items-center justify-center text-white transition-all hover:scale-110" aria-label="YouTube">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <!-- Threads -->
              <a href="#" class="w-10 h-10 rounded-full bg-black hover:opacity-80 flex items-center justify-center text-white transition-all hover:scale-110" aria-label="Threads">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.018-5.13.912-6.593 2.658-1.42 1.693-2.149 4.106-2.168 7.174v.012c.02 3.076.748 5.488 2.168 7.17 1.463 1.738 3.683 2.624 6.593 2.638 3.245.02 5.377-1.117 6.522-3.475.247-.511.441-1.058.575-1.627.116-.477.186-.974.203-1.479a8.71 8.71 0 0 1-1.921-.877 4.25 4.25 0 0 1-1.875-2.564c-.174-.745-.143-1.518.09-2.234.311-.957.951-1.784 1.851-2.392a6.16 6.16 0 0 1 3.415-1.026c.668 0 1.321.089 1.94.264.65.184 1.253.464 1.794.832.553.376 1.038.843 1.443 1.387.428.576.746 1.23.943 1.941.144.521.216 1.065.213 1.617v.031c-.006 1.302-.234 2.482-.675 3.508-.496 1.153-1.259 2.128-2.268 2.9-.967.739-2.143 1.298-3.494 1.662-1.225.328-2.565.493-3.983.493z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 語音客服時間 -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 class="text-white font-bold text-lg mb-6">語音客服時間</h3>
          <div class="space-y-3 mb-6">
            <p class="text-white/90 text-sm font-medium">08:30-18:00 週一至週五(不含國定假日) | 02-6630-6688</p>
            <div class="flex items-center gap-2 text-white/90 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>企業團購 @ogb3907m</span>
            </div>
            <div class="flex items-center gap-2 text-white/90 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>全球門市服務時間</span>
            </div>
          </div>
          <div>
            <p class="text-white/80 text-sm mb-3">多國語言</p>
            <button class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>語言選擇</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 支付方式 -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-8 py-6">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect fill='%2306c755' width='60' height='40' rx='4'/%3E%3Ctext x='30' y='24' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3ELINE Pay%3C/text%3E%3C/svg%3E" alt="LINE Pay" class="h-8" />
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect fill='%231434CB' width='60' height='40' rx='4'/%3E%3Ctext x='30' y='24' font-family='Arial' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EVISA%3C/text%3E%3C/svg%3E" alt="VISA" class="h-8" />
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect fill='%23EB001B' width='30' height='40' rx='4'/%3E%3Crect fill='%23F79E1B' x='30' width='30' height='40' rx='4'/%3E%3Ctext x='30' y='24' font-family='Arial' font-size='8' fill='white' text-anchor='middle'%3EMaster%3C/text%3E%3C/svg%3E" alt="MasterCard" class="h-8" />
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect fill='%230E4C96' width='60' height='40' rx='4'/%3E%3Ctext x='30' y='24' font-family='Arial' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EJCB%3C/text%3E%3C/svg%3E" alt="JCB" class="h-8" />
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect fill='%23003087' width='60' height='40' rx='4'/%3E%3Ctext x='30' y='24' font-family='Arial' font-size='8' fill='white' text-anchor='middle'%3E台灣Pay%3C/text%3E%3C/svg%3E" alt="台灣Pay" class="h-8" />
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect fill='%23FF6C00' width='60' height='40' rx='4'/%3E%3Ctext x='30' y='24' font-family='Arial' font-size='8' fill='white' text-anchor='middle'%3E街口支付%3C/text%3E%3C/svg%3E" alt="街口支付" class="h-8" />
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Crect fill='%23DC143C' width='60' height='40' rx='4'/%3E%3Ctext x='30' y='24' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E銀聯卡%3C/text%3E%3C/svg%3E" alt="銀聯卡" class="h-8" />
      </div>

      <!-- 底部連結 -->
      <div class="border-t border-white/20 pt-6 pb-4">
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm mb-4">
          <a href="#" class="text-white/80 hover:text-white transition-colors">取件資訊</a>
          <span class="text-white/40">|</span>
          <a href="#" class="text-white/80 hover:text-white transition-colors">聯絡我們</a>
          <span class="text-white/40">|</span>
          <a href="#" class="text-white/80 hover:text-white transition-colors">服務條款與隱私政策</a>
          <span class="text-white/40">|</span>
          <a href="#" class="text-white/80 hover:text-white transition-colors">安全網站標章</a>
        </div>
        <p class="text-white/60 text-xs text-center">
          Copyright© WaveThink Technology Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this component
</script>
