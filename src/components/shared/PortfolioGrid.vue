<script setup>
import { ref, watch } from 'vue'
import PortfolioItem from './PortfolioItem.vue'
import PortfolioModal from './PortfolioModal.vue'
import { portfolioItems } from '@/data/sharedData'

const activeProject = ref(null)

const openModal = (project) => {
  activeProject.value = project
  document.body.classList.add('overflow-hidden')
}

const closeModal = () => {
  activeProject.value = null
  document.body.classList.remove('overflow-hidden')
}

watch(activeProject, (val) => {
  if (!val) document.body.classList.remove('overflow-hidden')
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <PortfolioItem
      v-for="item in portfolioItems"
      :key="item.id"
      :item="item"
      @click="openModal(item)"
    />
  </div>

  <PortfolioModal
    v-if="activeProject"
    :project="activeProject"
    @close="closeModal"
  />
</template>
