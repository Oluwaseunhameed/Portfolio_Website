<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import MobileNavbar from '@/components/layout/MobileNavbar.vue'
</script>
<template>
  <div class="min-h-screen bg-[#111418] md:flex">
    <!-- Desktop Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="flex-1 relative md:ml-65">
      <MobileNavbar />

      <div class="pt-16 md:pt-0">
        <slot />
      </div>
    </main>
  </div>
</template>

