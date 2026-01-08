<script setup>
import { Menu, X } from 'lucide-vue-next'
import MobileMenu from './MobileMenu.vue'
import SocialIcons from '@/components/shared/SocialIcons.vue'
import { useMobileMenu } from '@/composables/useMobileMenu'

const { isOpen, toggle } = useMobileMenu()
</script>

<template>
  <header
    class="md:hidden fixed top-0 left-0 w-full z-50
           bg-[#111418] flex items-center justify-between
           px-5 py-4 text-white"
  >
    <span class="font-semibold tracking-wide">
      Oluwaseun Hameed
    </span>

    <div class="flex items-center gap-4">
      <SocialIcons />

      <button @click="toggle" class="cursor-pointer">
        <Menu v-if="!isOpen" />
        <X v-else class="cursor-pointer" />
      </button>
    </div>

    <MobileMenu />
  </header>
</template>
