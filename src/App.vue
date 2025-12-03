<template>
  <div id="app">
    <AppHeader />
    <main>
      <HeroSection />
      <ProductGrid 
        :filteredProducts="filteredProducts"
        :isLoading="isLoading"
        :error="error"
        :activeFilter="activeFilter"
        @filter-change="setFilter"
        @retry="fetchProducts"
      />
      <FeaturesSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ProductGrid from './components/ProductGrid.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import AppFooter from './components/AppFooter.vue';
import { useProducts } from './composables/useProducts';

const { 
  filteredProducts, 
  isLoading, 
  error, 
  activeFilter, 
  fetchProducts, 
  setFilter 
} = useProducts();

// Fetch products on mount
onMounted(() => {
  fetchProducts();
});
</script>

<style>
/* Global styles are in src/style.css */
</style>
