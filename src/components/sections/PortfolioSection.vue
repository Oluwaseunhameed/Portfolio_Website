<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import PortfolioFilters from '@/components/shared/PortfolioFilters.vue'
import PortfolioGrid from '@/components/shared/PortfolioGrid.vue'
import { portfolioItems } from '@/data/sharedData'

// State for active category
const activeCategory = ref('All')
</script>

<template>
  <section
    id="portfolio"
    class="bg-[#f8f9fa] min-h-screen py-20 px-5 md:px-10"
  >
    <SectionHeader
      title="PORTFOLIO"
      subtitle="My Work"
      highlight="My Work"
    />

    <div class="max-w-6xl mx-auto mt-12">
      <!-- Category Filters -->
      <PortfolioFilters v-model="activeCategory" />

      <!-- Portfolio Grid -->
      <PortfolioGrid
        :items="portfolioItems"
        :active-category="activeCategory"
      />
    </div>
  </section>
</template>
