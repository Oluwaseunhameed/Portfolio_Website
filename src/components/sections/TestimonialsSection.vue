<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue'
import TestimonialCard from '@/components/shared/TestimonialCard.vue'
import { testimonials } from '@/data/sharedData'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
</script>

<template>
  <section
    id="testimonials"
    class="bg-[#FFFFFF] mg:min-h-screen
         py-16 sm:py-20
         px-4 sm:px-5 md:px-10"
  >
    <SectionHeader
      title="TESTIMONIAL"
      subtitle="Client Speak"
      highlight="Client Speak"
    />

    <div
      class="w-full sm:max-w-md md:max-w-5xl mx-auto mt-10 sm:mt-14"
      data-aos="fade-up"
    >
      <Swiper class="pb-10 sm:pb-12"
        :modules="[Pagination, Autoplay]"
        :loop="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 1, spaceBetween: 24 },
          768: { slidesPerView: 2, spaceBetween: 30 }
        }"
      >
        <SwiperSlide
          v-for="item in testimonials"
          :key="item.id"
        >
          <TestimonialCard :testimonial="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
