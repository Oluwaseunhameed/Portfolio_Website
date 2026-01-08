<script setup>
import { reactive, ref } from 'vue'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function resetErrors() {
  errors.name = ''
  errors.email = ''
  errors.message = ''
}

function handleSubmit() {
  resetErrors()
  success.value = false

  if (!form.name) errors.name = 'Name is required'
  if (!form.email) {
    errors.email = 'Email is required'
  } else if (!validateEmail(form.email)) {
    errors.email = 'Enter a valid email'
  }
  if (!form.message) errors.message = 'Message is required'

  if (errors.name || errors.email || errors.message) return

  // simulate successful submit
  success.value = true

  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <section
    id="contact"
    class="bg-[#f8f9fa] py-16 px-4 sm:px-5 md:px-10"
  >
    <SectionHeader
      title="CONTACT"
      subtitle="Get in Touch"
      highlight=" Touch "
    />

    <div
      class="max-w-6xl mx-auto mt-14
         grid grid-cols-1 lg:grid-cols-12 gap-10"
      data-aos="fade-up"
    >
      <!-- Left: Contact Info -->
      <div class="order-2 lg:order-1 lg:col-span-4 space-y-6">
        <h4 class="text-xl font-semibold text-[#212529]">
          ADDRESS
        </h4>

        <p class="text-[#555] leading-relaxed">
          Lagos, Nigeria
        </p>

        <div class="space-y-4 text-[#555]">
          <div class="flex items-center gap-3">
            <Phone class="w-5 h-5 text-[rgb(var(--color-primary))]" />
            <span>+234 000 000 0000</span>
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

      <!-- Right: Form -->
      <div class="order-1 lg:order-2 lg:col-span-8">
        <h4 class="text-xl font-semibold text-[#212529] mb-6">
          SEND US A NOTE
        </h4>

        <form
          @submit.prevent="handleSubmit"
          class="space-y-6"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Name"
                class="w-full px-5 py-4 border rounded-lg text-base
       focus:outline-none focus:border-[rgb(var(--color-primary))]"
              />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                {{ errors.name }}
              </p>
            </div>

            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="w-full px-5 py-4 border rounded-lg text-base
       focus:outline-none focus:border-[rgb(var(--color-primary))]"
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>
          </div>

          <div>
            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Tell us more about your needs..."
              class="w-full px-5 py-4 border rounded-lg text-base
       focus:outline-none focus:border-[rgb(var(--color-primary))]"
            />
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">
              {{ errors.message }}
            </p>
          </div>

          <button
            type="submit"
            class="w-full sm:w-auto
         px-8 py-4 rounded-full
         bg-[rgb(var(--color-primary))]
         text-white font-medium text-base
         hover:opacity-90 transition"
          >
            Send Message
          </button>

          <p
            v-if="success"
            class="text-green-600 font-medium mt-4"
          >
            Your message has been sent successfully!
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
