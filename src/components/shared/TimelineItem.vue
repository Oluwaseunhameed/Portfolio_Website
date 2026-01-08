<script setup>
defineProps({
  period: String,
  title: String,
  institution: String,
  description: String
})
</script>

<template>
  <div class="border-l-2 border-[rgb(var(--color-primary))] pl-6 relative">
    <!-- Dot -->
    <span
      class="absolute -left-[9px] top-1
             w-4 h-4 rounded-full
             bg-[rgb(var(--color-primary))]"
    ></span>

    <span class="text-sm text-[#6c757d] block mb-1">
      {{ period }}
    </span>

    <h4 class="text-lg font-semibold text-[#212529]">
      {{ title }}
    </h4>

    <p class="text-sm text-[rgb(var(--color-primary))] font-medium mb-2">
      {{ institution }}
    </p>

    <p class="text-[#53575b] leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
