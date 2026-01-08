<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { useTypedText } from '@/composables/useTypedText'
import { onMounted } from 'vue'
import AOS from 'aos'
import { roles } from '@/data/sharedData'



const { displayText } = useTypedText(roles)

onMounted(() => {
  AOS.init({ once: true })
})
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center
           bg-cover bg-center text-white"
    style="background-image: url('/hero-bg.jpg')"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Content -->
    <div
      class="relative z-10 text-center px-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <span class="text-2xl md:text-2xl mb-4 block">
        Welcome
      </span>

      <h1
        class="text-3xl md:text-6xl font-bold mb-4
               min-h-14 md:min-h-18"
      >
        {{ displayText }}
        <span class="typing-cursor">|</span>
      </h1>

      <p class="text-xl md:text-xl mb-6 tracking-wide">
        based in Lagos, Nigeria.
      </p>

      <a
        href="#contact"
        class="inline-block border-2 border-[rgb(var(--color-primary))]
               px-8 py-3 rounded-full tracking-wider
               text-[rgb(var(--color-primary))] bg-transparent
               hover:bg-[rgb(var(--color-primary))] hover:text-white
               transition-colors duration-300"
      >
        Hire Me
      </a>
    </div>

    <!-- Scroll Indicator -->
    <a
      href="#about"
      class="absolute bottom-6 left-1/2 -translate-x-1/2
             animate-bounce text-white"
    >
      <ChevronDown size="32" />
    </a>
  </section>
</template>

<style scoped>
.typing-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1 }
  25%, 75% { opacity: 0 }
}
</style>
