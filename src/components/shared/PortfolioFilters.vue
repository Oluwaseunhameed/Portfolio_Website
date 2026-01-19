<script setup>
import { portfolioCategories } from '@/data/sharedData'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div
    class="flex flex-wrap justify-center gap-6 mb-12"
    data-aos="fade-up"
  >
    <button
      v-for="category in portfolioCategories"
      :key="category"
      @click="emit('update:modelValue', category)"
      class="relative text-sm font-medium uppercase tracking-wide transition-colors"
      :class="[
        modelValue === category
          ? 'text-[rgb(var(--color-primary))]'
          : 'text-[#6c757d] hover:text-[rgb(var(--color-primary))]'
      ]"
    >
      {{ category }}

      <span
        v-if="modelValue === category"
        class="absolute -bottom-2 left-1/2 -translate-x-1/2
               w-6 h-[2px] bg-[rgb(var(--color-primary))]"
      />
    </button>
  </div>
</template>
