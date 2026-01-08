<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="bg-[#111418] text-[#adb5bd]
           py-6 text-center text-sm"
  >
    <p>
      © {{ year }}
      <span class="text-white font-medium">
        Oluwaseun Hameed
      </span>.
      All Rights Reserved.
    </p>
  </footer>
</template>
