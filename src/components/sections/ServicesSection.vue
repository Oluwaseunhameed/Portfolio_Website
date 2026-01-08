<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue'
import ServiceCard from '@/components/shared/ServiceCard.vue'
import { services } from '@/data/sharedData'
</script>

<template>
  <section
    id="services"
    class="bg-[#F8F9FA] min-h-screen py-20 px-5 md:px-10"
  >
    <!-- Header -->
    <SectionHeader title="SERVICES" subtitle="What I Do?" highlight="What I Do?" />

    <!-- Services Grid -->
    <div
      class="max-w-6xl mx-auto
             grid grid-cols-1 md:grid-cols-2
             gap-x-16 gap-y-12 mt-16"
      data-aos="fade-up"
    >
      <ServiceCard
        v-for="service in services"
        :key="service.title"
        v-bind="service"
      />
    </div>
  </section>
</template>
