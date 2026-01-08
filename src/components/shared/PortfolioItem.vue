<script setup>
defineProps({
  item: Object,
})
</script>

<template>
  <div
    class="relative cursor-pointer overflow-hidden group"
    data-aos="fade-up"
  >
    <img
      :src="item.image"
      :alt="item.title"
      class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div
      class="absolute inset-0 bg-black/60 opacity-0
             group-hover:opacity-100 transition
             flex items-center justify-center"
    >
      <h3 class="text-white text-lg font-semibold">
        {{ item.title }}
      </h3>
    </div>
  </div>
</template>
