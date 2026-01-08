<script setup>
import * as Icons from 'lucide-vue-next'
import { socialLinks } from '@/data/sharedData'

</script>

<template>
  <div class="flex gap-3 text-gray-400">
    <a
      v-for="social in socialLinks"
      :key="social.label"
      :href="social.href"
      target="_blank"
      rel="noopener"
      class="relative group hover:text-white transition-colors"
      :aria-label="social.label"
    >
      <!-- Tooltip (desktop only visually) -->
      <span
        class="
          hidden md:block
          pointer-events-none
          absolute -top-8 left-1/2 -translate-x-1/2
          whitespace-nowrap
          rounded bg-black px-2 py-1
          text-xs text-white
          opacity-0 scale-95
          transition-all duration-200
          group-hover:opacity-100 group-hover:scale-100
        "
      >
        {{ social.label }}
      </span>

      <component
        :is="Icons[`${social.icon}Icon`]"
        class="w-4 h-4"
      />
    </a>
  </div>
</template>
