<script setup>
import { ref, computed } from 'vue'
import { Settings } from 'lucide-vue-next'
import { colors, COLOR_VAR, DEFAULT_COLOR } from '@/data/sharedData'

const open = ref(false)

const setColor = (rgb) => {
  document.documentElement.style.setProperty(COLOR_VAR, rgb)
}

const resetDefault = () => {
  document.documentElement.style.setProperty(COLOR_VAR, DEFAULT_COLOR)
}

/* drawer width = 13rem */
const handleStyle = computed(() => ({
  transform: open.value ? 'translateX(-13rem)' : 'translateX(0)'
}))
</script>

<template>
  <div class="fixed right-0 top-1/2 -translate-y-1/2 z-50">

    <!-- SETTINGS HANDLE -->
    <button
      @click="open = !open"
      class="
        pointer-events-auto
        absolute right-0 top-1/2 -translate-y-1/2
        w-10 h-10
        bg-[#4b4b4b]
        rounded-l-md
        flex items-center justify-center
        shadow-lg
        transition-transform duration-300 ease-out
        cursor-pointer
      "
      :style="handleStyle"
    >
      <Settings
        class="w-5 h-5 text-white animate-spin-slow"
        stroke-width="2"
      />
    </button>

    <!-- SLIDE-OUT DRAWER -->
    <div
      class="
        pointer-events-auto
        w-52 bg-white shadow-2xl
        transition-transform duration-300 ease-out
      "
      :class="open ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-4 space-y-4">

        <h3 class="text-base font-semibold text-gray-800">
          Color Switcher
        </h3>

        <hr class="border-0 h-px bg-gray-200/90 my-2" />

        <!-- COLOR GRID -->
        <div class="grid grid-cols-5 gap-3">
          <button
            v-for="c in colors"
            :key="c.name"
            @click="setColor(c.rgb)"
            class="
              w-8 h-8 rounded-full
              cursor-pointer
              transition-transform
              hover:scale-110
            "
            :style="{ backgroundColor: `rgb(${c.rgb})` }"
          />
        </div>

        <!-- RESET BUTTON -->
        <button
          @click="resetDefault"
          class="
            w-full py-2
            text-white text-sm font-semibold
            rounded
            cursor-pointer
            transition-opacity
            hover:opacity-90
          "
          style="background-color: #20C996"
        >
          Reset Default Teal
        </button>

      </div>
    </div>

  </div>
</template>

<style scoped>
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spinSlow 3s linear infinite;
}
</style>
