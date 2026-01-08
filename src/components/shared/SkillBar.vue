<script setup>
defineProps({
  name: String,
  level: Number
})
</script>

<template>
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium text-[#212529]">
        {{ name }}
      </span>
      <span class="text-sm text-[#53575b]">
        {{ level }}%
      </span>
    </div>

    <div class="w-full bg-[#e9ecef] rounded-full h-2">
      <div
        class="bg-[rgb(var(--color-primary))]
               h-2 rounded-full transition-all duration-300"
        :style="{ width: level + '%' }"
      ></div>
    </div>
  </div>
</template>
