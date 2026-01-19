<script setup>
  import ThemeSwitcher from './components/ThemeSwitcher.vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import LandingView from '@/views/LandingView.vue'

import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-cubic'
  })
})
</script>

<template>
  <ThemeSwitcher />
  <DefaultLayout>
    <LandingView />
  </DefaultLayout>
</template>

<style scoped>
</style>
