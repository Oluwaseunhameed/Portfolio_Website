<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="bg-[#f8f9fa] rounded-lg shadow-md p-8 h-full flex flex-col justify-between mb-20"
  >
    <!-- Message -->
    <p class="text-[#555] leading-relaxed mb-6">
      “{{ testimonial.message }}”
    </p>

    <!-- User -->
    <div class="flex items-center gap-4">
      <img
        :src="testimonial.image"
        :alt="testimonial.name"
        class="w-14 h-14 rounded-full object-cover"
      />

      <div>
        <h5 class="font-semibold text-[#212529]">
          {{ testimonial.name }}
        </h5>
        <p class="text-sm text-[#6c757d]">
          {{ testimonial.role }}
        </p>

        <!-- Stars -->
        <div class="flex gap-1 mt-1 text-yellow-400">
          <span
            v-for="n in testimonial.rating"
            :key="n"
          >
            ★
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
