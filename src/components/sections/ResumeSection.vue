<script setup>
import SectionHeader from '@/components/shared/SectionHeader.vue'
import TimelineItem from '@/components/shared/TimelineItem.vue'
import SkillBar from '@/components/shared/SkillBar.vue'
import { education, experience, skills } from '@/data/sharedData'
</script>

<template>
  <section
    id="resume"
    class="bg-[#FFFFFF] min-h-screen py-20 px-5 md:px-10"
  >
    <SectionHeader title="RESUME" subtitle="Resume" highlight="Resume"/>

    <!-- Education & Experience -->
    <div
      class="max-w-6xl mx-auto
             grid grid-cols-1 md:grid-cols-2
             gap-12 mt-16"
      data-aos="fade-up"
    >
      <!-- Education -->
      <div>
        <h3 class="text-2xl font-semibold mb-6 text-[#212529]">
          My Education
        </h3>

        <div class="space-y-8">
          <TimelineItem
            v-for="item in education"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>

      <!-- Experience -->
      <div>
        <h3 class="text-2xl font-semibold mb-6 text-[#212529]">
          My Experience
        </h3>

        <div class="space-y-8">
          <TimelineItem
            v-for="item in experience"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div
      class="max-w-6xl mx-auto mt-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3 class="text-2xl font-semibold mb-8 text-[#212529]">
        My Skills
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillBar
          v-for="skill in skills"
          :key="skill.name"
          v-bind="skill"
        />
      </div>
    </div>
  </section>
</template>
