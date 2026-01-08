<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import MobileNavbar from '@/components/layout/MobileNavbar.vue'
import Footer from '@/components/layout/Footer.vue'
import BackToTop from '@/components/shared/BackToTop.vue'

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
        <Footer />
      </div>
    </main>
    <BackToTop />
  </div>
</template>

