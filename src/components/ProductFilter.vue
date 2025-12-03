<template>
  <div class="flex flex-wrap gap-4 justify-center mb-10">
    <button
      v-for="filter in [
        { key: 'all', label: '全部產品' },
        { key: 'unlimited', label: '吃到飽方案' },
        { key: 'limited', label: '限量方案' },
      ]"
      :key="filter.key"
      @click="$emit('filter-change', filter.key)"
      :class="[
        'px-8 py-3 rounded-full transition-all duration-300 relative',
        activeFilter === filter.key
          ? 'bg-white text-[#0a3d7a] font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-110 ring-2 ring-white/60 z-10 dark:bg-blue-500 dark:text-white dark:shadow-[0_0_20px_rgba(59,130,246,0.6)] dark:ring-blue-400'
          : 'bg-white/10 text-white/90 font-medium border border-white/20 hover:bg-white/20 hover:scale-105 hover:border-white/40 backdrop-blur-md dark:bg-gray-800/40 dark:text-gray-300 dark:border-gray-700/50 dark:hover:bg-gray-700/60',
      ]"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  activeFilter: {
    type: String,
    required: true,
  },
});

defineEmits(["filter-change"]);
</script>
