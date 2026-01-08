<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  highlight: String,
})

const parts = computed(() => {
  if (!props.highlight) {
    return {
      before: props.subtitle,
      highlighted: '',
      after: '',
    }
  }

  const index = props.subtitle.indexOf(props.highlight)

  if (index === -1) {
    return {
      before: props.subtitle,
      highlighted: '',
      after: '',
    }
  }

  return {
    before: props.subtitle.slice(0, index),
    highlighted: props.highlight,
    after: props.subtitle.slice(index + props.highlight.length),
  }
})
</script>
<template>
<div class="relative text-center mt-14 mb-24">
  <!-- Background Text -->
  <h2
    class="absolute inset-0 flex items-center justify-center
           text-[4rem] lg:text-[8rem]
           font-extrabold uppercase
           text-gray-200/50 select-none"
  >
    {{ title }}
  </h2>

  <!-- Foreground -->
  <div class="relative">
    <h3 class="text-3xl md:text-4xl font-semibold text-[#212529]">
      {{ parts.before }}
      <span v-if="parts.highlighted" class="relative inline-block">
        {{ parts.highlighted }}
        <span
          class="absolute left-1/2 -bottom-2
                 w-full h-1
                 -translate-x-1/2
                 bg-[rgb(var(--color-primary))]"
        ></span>
      </span>
      {{ parts.after }}
    </h3>
  </div>
</div>
</template>
