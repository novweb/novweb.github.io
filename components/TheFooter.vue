<script lang="ts">
import { useSite } from '~/composables/use-site'

export default {
  setup() {
    const { name } = useSite()
    const year = new Date().getFullYear()

    return {
      name,
      year,
    }
  },
}
</script>

<template>
  <footer
    class="fixed bottom-0 left-0 right-0 py-8 text-sm text-center lg:text-left"
  >
    <div class="mx-auto container">
      <div class="site-footer__copy text-opacity-50 text-white">
        Copyright &copy; {{ year }} {{ name }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
