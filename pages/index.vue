<script lang="ts">
import { ref, onMounted } from '@nuxtjs/composition-api'
import Typed from 'typed.js'
import { useSite } from '~/composables/use-site'

export default {
  setup() {
    const subtitle = ref<HTMLSpanElement>()
    const { title, titleStrings, subTitle, contacts } = useSite()

    onMounted(() => {
      subtitle.value &&
        new Typed(subtitle.value, {
          strings: titleStrings,
          loop: true,
          typeSpeed: 105,
        })
    })

    return {
      title,
      subtitle,
      subTitle,
      contacts,
    }
  },
}
</script>

<template>
  <div class="flex items-center self-stretch w-full">
    <div class="container mx-auto space-y-10 text-center">
      <h1 class="text-2xl font-bold lg:text-5xl">
        {{ title }}

        <span ref="subtitle"></span>
      </h1>

      <p class="px-4" v-text="subTitle" />

      <div class="flex flex-col lg:flex-row">
        <div
          v-for="contact in contacts"
          :key="contact.title"
          class="flex-1 p-3"
        >
          <div
            class="mb-1 leading-tight text-white text-opacity-50 uppercase"
            v-text="contact.title"
          />
          <div>
            <a
              v-if="'type' in contact && contact.type === 'tel'"
              :href="`tel:${contact.value}`"
              v-text="contact.value"
            />

            <a
              v-else-if="'type' in contact && contact.type === 'email'"
              :href="`mailto:${contact.value}`"
              v-text="contact.value"
            />

            <template v-else>
              {{ contact.value }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
