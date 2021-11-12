<script lang="ts">
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  name: 'LayoutDefault',

  components: {
    TheFooter,
    TheHeader,
  },
}
</script>

<template>
  <div class="text-white">
    <the-header />
    <main class="min-h-screen flex flex-сol justify-center">
      <Nuxt />
    </main>
    <the-footer />
  </div>
</template>
