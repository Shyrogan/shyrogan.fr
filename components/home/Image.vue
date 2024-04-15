<script setup lang="ts">
import type { ImgHTMLAttributes } from "vue"

type Props = {
  src?: ImgHTMLAttributes["src"]
  alt?: ImgHTMLAttributes["alt"]
}
const props = defineProps<Props>()
</script>

<template>
  <img class="2xl:h-96 lg:h-72 h-52 shadow rounded-lg" v-bind="props" />
</template>
