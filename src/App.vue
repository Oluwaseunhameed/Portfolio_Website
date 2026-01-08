<script setup>
  import ThemeSwitcher from './components/ThemeSwitcher.vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import LandingView from '@/views/LandingView.vue'
</script>

<template>
  <!-- <h1 class="bg-blue-600 text-[rgb(var(--color-primary))] p-4 text-center font-(--font-sans) text-3xl">
    Hello Tailwind CSS in Vue 3!
  </h1> -->
  <ThemeSwitcher />
  <DefaultLayout>
    <LandingView />
  </DefaultLayout>
</template>

<style scoped>
</style>
