<script setup>
defineProps({
  value: String,
  label: String,
})
</script>

<template>
  <div class="text-center border-l border-gray-300/60 first:border-l-0 py-5 pl-5">
    <h4 class="text-5xl font-normal text-[#6c757d]">
      {{ value }}
    </h4>
    <p class="mt-2 text-[#53575b]">
      {{ label }}
    </p>
  </div>
</template>
