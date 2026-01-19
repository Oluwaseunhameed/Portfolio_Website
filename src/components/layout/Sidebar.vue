<script setup>
import { useActiveSection } from '@/composables/useActiveSection'
import SocialIcons from '@/components/shared/SocialIcons.vue'
import { navItems } from '@/data/sharedData'

const { activeHash } = useActiveSection()
</script>

<template>
  <aside
    class="hidden md:flex md:w-65 bg-[#111418] text-white
           flex-col justify-between items-center fixed h-screen"
  >
    <!-- Profile -->
    <div class="mt-10 text-center">
      <img
        src="/logo2.png"
        alt="Profile photo of Oluwaseun Hameed"
        class="w-40 h-40 mx-auto rounded-full border-4 border-[#343A40]"
      />
      <p class="mt-4 font-semibold text-lg tracking-wider">
        Oluwaseun Hameed
      </p>
    </div>


    <!-- Navigation -->
    <nav class="flex flex-col gap-4 text-md text-center">
      <a
        v-for="item in navItems"
        :key="item.hash"
        :href="item.hash"
        class="transition-colors duration-300"
        :class="activeHash === item.hash
          ? 'text-[rgb(var(--color-primary))]'
          : 'text-white hover:text-[rgb(var(--color-primary))]'"
      >
        {{ item.label }}
      </a>
    </nav>

    <!-- Social Icons -->
    <div class="mb-5">
      <SocialIcons />
    </div>
  </aside>
</template>
