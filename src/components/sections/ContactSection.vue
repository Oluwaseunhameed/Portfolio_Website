<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'
</script>

<template>
  <section
    id="contact"
    class="bg-[#f8f9fa] min-h-screen py-16 px-4 sm:px-5 md:px-10 flex items-center"
  >
    <div class="w-full max-w-6xl mx-auto">
      <SectionHeader
        title="CONTACT"
        subtitle="Get in Touch"
        highlight="in"
      />

      <div
        class="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        data-aos="fade-up"
      >
        <!-- Left: Contact Info -->
        <div class="order-2 lg:order-1 lg:col-span-4 space-y-6">
          <h4 class="text-xl font-semibold text-[#212529]">ADDRESS</h4>
          <p class="text-[#555] leading-relaxed">Lagos, Nigeria</p>

          <div class="space-y-4 text-[#555]">
            <div class="flex items-center gap-3">
              <Phone class="w-5 h-5 text-[rgb(var(--color-primary))]" />
              <span>+234 806 294 8801</span>
            </div>

            <div class="flex items-center gap-3">
              <Mail class="w-5 h-5 text-[rgb(var(--color-primary))]" />
              <span>hameedoluwaseun@gmail.com</span>
            </div>

            <div class="flex items-center gap-3">
              <MapPin class="w-5 h-5 text-[rgb(var(--color-primary))]" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        <!-- Right: Disabled Form Message -->
        <div class="order-1 lg:order-2 lg:col-span-8 flex items-center justify-center">
          <div class="bg-white rounded-lg shadow-md p-10 text-center w-full">
            <h4 class="text-xl font-semibold text-[#212529] mb-4">
              SEND US A NOTE
            </h4>
            <p class="text-[#555] leading-relaxed">
              The contact form is temporarily disabled.<br />
              Please reach out directly using the contact information on the left.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
