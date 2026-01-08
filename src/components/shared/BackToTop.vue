<script setup>
import { ArrowUp } from 'lucide-vue-next'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    v-show="y > 400"
    @click="scrollToTop"
    aria-label="Back to top"
    class="
      cursor-pointer
      fixed bottom-6 right-6 z-50
      w-11 h-11 rounded-full
      bg-[rgb(var(--color-primary))]
      text-white
      flex items-center justify-center
      shadow-lg
      hover:opacity-90 transition
    "
  >
    <ArrowUp size="18" />
  </button>
</template>
