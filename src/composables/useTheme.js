import { ref, watch, onMounted } from 'vue';

const isDark = ref(false);

export function useTheme() {
  // 初始化主題
  onMounted(() => {
    // 從 localStorage 讀取保存的主題設置
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      // 如果沒有保存的設置，預設使用淺色模式
      isDark.value = false;
    }
    
    applyTheme();
  });

  // 監聽主題變化
  watch(isDark, () => {
    applyTheme();
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  });

  // 應用主題
  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // 切換主題
  function toggleTheme() {
    isDark.value = !isDark.value;
  }

  return {
    isDark,
    toggleTheme,
  };
}
