<script setup>
defineProps({
  title: String,
  subtitle: String,
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
        {{ subtitle.split(' ')[0] }}
        <span class="relative">
          {{ subtitle.split(' ')[1] }}
          <span
            class="absolute -left-10 md:-left-15 -bottom-2 w-full h-0.75
                   bg-[rgb(var(--color-primary))]"
          ></span>
        </span>
      </h3>
    </div>
  </div>
</template>
