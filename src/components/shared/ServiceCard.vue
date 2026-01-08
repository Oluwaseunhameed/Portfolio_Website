<script setup>
defineProps({
  icon: Object,
  title: String,
  description: String
})
</script>

<template>
  <div class="flex gap-5">
    <!-- Icon -->
    <div
      class="w-14 h-14 p-4 flex items-center justify-center
             bg-white rounded-lg shadow-md"
    >
      <component
        :is="icon"
        class="text-[rgb(var(--color-primary))]"
        size="26"
      />
    </div>

    <!-- Content -->
    <div>
      <h4 class="text-lg font-semibold text-[#212529] mb-2">
        {{ title }}
      </h4>
      <p class="text-[#53575b] leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>
