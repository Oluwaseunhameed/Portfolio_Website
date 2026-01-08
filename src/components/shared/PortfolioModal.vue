<script setup>
import { onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'

defineProps({
  project: Object,
})

const emit = defineEmits(['close'])

const close = () => emit('close')

const handleEsc = (e) => {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 bg-black/70
           flex items-center justify-center
           px-4"
    @click.self="close"
  >
    <!-- Modal -->
    <div
      class="bg-white w-full max-w-5xl
             rounded-lg shadow-xl
             overflow-hidden
             animate-scale-in"
    >
      <!-- Header -->
      <div class="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h3 class="text-xl font-semibold">
          {{ project.title }}
        </h3>
        <button @click="close">
          <X class="w-6 h-6 text-gray-500 hover:text-black cursor-pointer" />
        </button>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <!-- Image -->
        <img
          :src="project.image"
          class="w-full h-auto rounded"
        />

        <!-- Details -->
        <div class="space-y-4 text-[#555]">
          <p>{{ project.description }}</p>

          <ul class="space-y-2">
            <li><strong>Client: </strong> {{ project.client }}</li>
            <li><strong>Industry: </strong> {{ project.industry }}</li>
            <li><strong>Technologies: </strong> {{ project.technologies }}</li>
            <li><strong>Date: </strong> {{ project.date }}</li>
            <li>
              <strong>URL: </strong>
              <a
                :href="project.url"
                target="_blank"
                class="text-[rgb(var(--color-primary))]"
              >
                {{ project.url }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
