<script lang="ts">
import { useSite } from '~/composables/use-site'

export default {
  setup() {
    const { name } = useSite()
    return { name }
  },
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0">
    <div
      class="mx-auto container py-4 text-center lg:text-left tracking-widest"
    >
      <nuxt-link
        to="/"
        class="uppercase text-opacity-50 text-white text-2xl font-display"
      >
        {{ name }}
      </nuxt-link>
    </div>
  </header>
</template>
