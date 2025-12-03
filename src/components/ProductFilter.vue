<template>
  <div class="flex flex-wrap gap-3 justify-center mb-8">
    <button
      @click="$emit('filter-change', 'all')"
      :class="[
        'px-6 py-3 rounded-full font-semibold transition-all',
        activeFilter === 'all' 
          ? 'glass-strong scale-105' 
          : 'glass hover:glass-strong hover:scale-105'
      ]"
    >
      全部產品
    </button>
    <button
      @click="$emit('filter-change', 'unlimited')"
      :class="[
        'px-6 py-3 rounded-full font-semibold transition-all',
        activeFilter === 'unlimited' 
          ? 'glass-strong scale-105' 
          : 'glass hover:glass-strong hover:scale-105'
      ]"
    >
      吃到飽方案
    </button>
    <button
      @click="$emit('filter-change', 'limited')"
      :class="[
        'px-6 py-3 rounded-full font-semibold transition-all',
        activeFilter === 'limited' 
          ? 'glass-strong scale-105' 
          : 'glass hover:glass-strong hover:scale-105'
      ]"
    >
      限量方案
    </button>
  </div>
</template>

<script setup>
defineProps({
  activeFilter: {
    type: String,
    required: true
  }
});

defineEmits(['filter-change']);
</script>
