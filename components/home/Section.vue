<script setup lang="ts">
import type { HTMLAttributes } from "vue"

type Props = {
  class?: HTMLAttributes["class"]
}
const { class: classes } = defineProps<Props>()
</script>

<template>
  <section
    :class="
      tw(
        '2xl:px-64 lg:px-32 px-16 py-32 flex lg:flex-row flex-col 2xl:space-x-12 lg:space-x-6 space-y-12 lg:align-middle lg:items-center',
        classes,
      )
    "
  >
    <slot />
  </section>
</template>
