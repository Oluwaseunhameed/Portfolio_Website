<script setup>
import { ref, computed, watch } from 'vue'
import PortfolioItem from './PortfolioItem.vue'
import PortfolioModal from './PortfolioModal.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    default: 'All'
  }
})

// Modal state
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

// Filter items based on active category
const filteredItems = computed(() => {
  if (props.activeCategory === 'All') return props.items
  return props.items.filter(item => item.category === props.activeCategory)
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <PortfolioItem
      v-for="item in filteredItems"
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
