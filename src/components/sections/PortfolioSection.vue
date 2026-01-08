<script setup>
import { ref, computed } from 'vue'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import PortfolioFilters from '@/components/shared/PortfolioFilters.vue'
import PortfolioGrid from '@/components/shared/PortfolioGrid.vue'
import { portfolioItems } from '@/data/sharedData'

const activeCategory = ref('All')

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') return portfolioItems
  return portfolioItems.filter(
    item => item.category === activeCategory.value
  )
})
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
      <PortfolioFilters
        v-model="activeCategory"
      />

      <PortfolioGrid
        :items="filteredItems"
      />
    </div>
  </section>
</template>
