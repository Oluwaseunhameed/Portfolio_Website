<script setup>
import { useActiveSection } from '@/composables/useActiveSection'
import { useMobileMenu } from '@/composables/useMobileMenu'
import { navItems } from '@/data/sharedData'

const { isOpen, close } = useMobileMenu()
const { activeHash } = useActiveSection()

</script>

<template>
  <Transition name="slide-fade">
    <div
      v-if="isOpen"
      class="absolute top-full left-0 w-full bg-[#020203] flex flex-col py-4"
    >
      <a
        v-for="item in navItems"
        :key="item.hash"
        :href="item.hash"
        @click="close"
        class="
          cursor-pointer
          block px-6 py-3 text-left
          border-b border-white/10
          last:border-b-0
          transition-colors duration-200
        "
        :class="activeHash === item.hash
          ? 'text-[rgb(var(--color-primary))]'
          : 'text-white hover:text-[rgb(var(--color-primary))]'"
      >
        {{ item.label }}
      </a>
    </div>
  </Transition>
</template>
