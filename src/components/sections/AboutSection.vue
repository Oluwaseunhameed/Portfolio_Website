<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue'
import StatCard from '@/components/shared/StatCard.vue'
import { stats } from '@/data/sharedData'

</script>

<template>
  <section
    id="about"
    class="bg-white min-h-screen py-20 px-5 md:px-10"
  >
    <SectionHeader title="ABOUT ME" subtitle="Know Me More" />

    <div
      class="max-w-6xl mx-auto
         grid grid-cols-1 md:grid-cols-12
         gap-10 mt-12"
      data-aos="fade-up"
    >
      <!-- Left -->
      <div class="md:col-span-8">
        <h4 class="text-2xl font-semibold text-[#212529] mb-4">
          I’m
          <span class="text-[rgb(var(--color-primary))]">
            Oluwaseun Hameed,
          </span>
          a FullStack Developer
        </h4>

        <p class="text-[#53575b] mb-4 leading-loose">
          I'm an experienced Developer with over 7 years of experience in web application development. Proficient in both front-end and back-end technologies, as well as databases like MongoDB and PostgreSQL. Skilled in creating intuitive UIs, scalable backend systems, and integrating third-party services. Known for problem-solving, efficient coding, and teamwork.
        </p>

        <p class="text-[#53575b] leading-loose">
          Delivering work within time and budget which meets client’s requirements.
        </p>
      </div>

      <!-- Right -->
      <div class="md:col-span-4">
        <ul class="space-y-3 text-[#53575b] mb-10">
          <li class="border-b border-gray-200 pb-2"><strong>Name:</strong> Oluwaseun Hameed</li>
          <li class="border-b border-gray-200 pb-2">
            <strong>Email:</strong>
            <span class="wrap-break-word">
              hameedoluwaseun@gmail.com
            </span>
          </li>
          <li class="border-b border-gray-200 pb-2"><strong>Age:</strong> 37</li>
          <li><strong>From:</strong> Lagos, Nigeria</li>
        </ul>

        <a
          href="/cv.pdf"
          download
          class="inline-block px-8 py-3 rounded-full
              bg-[rgb(var(--color-primary))] text-white
                shadow-lg hover:shadow-xl
                hover:opacity-90 transition"
        >
          Download CV
        </a>
      </div>
    </div>

    <!-- Stats -->
    <div
      class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <StatCard
        v-for="stat in stats"
        :key="stat.label"
        v-bind="stat"
      />
    </div>
  </section>
</template>

