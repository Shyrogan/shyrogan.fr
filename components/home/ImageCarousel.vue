<script setup lang="ts">
import type { HTMLAttributes, ImgHTMLAttributes } from "vue"

type Image = {
  src: ImgHTMLAttributes["src"]
  alt: ImgHTMLAttributes["alt"]
}
type Props = {
  class?: HTMLAttributes["class"]
  imgs: Image[]
}
const props = defineProps<Props>()
const images = ref<Image[]>([])
if (props.imgs.length >= 3) {
  images.value = [props.imgs.pop()!, props.imgs.pop()!]
  let interval: NodeJS.Timeout | undefined = undefined
  onMounted(() => {
    interval = setInterval(() => {
      const removed = images.value.pop()!
      //console.log("Removing", removed)
      props.imgs.unshift(removed)
      images.value.unshift(props.imgs.pop()!)
      //console.log("Now", images.value)
      console.log(
        props.imgs.map((i) => i.alt),
        images.value.map((i) => i.alt),
      )
    }, 3000)
  })
  onUnmounted(() => {
    clearInterval(interval)
  })
} else {
  images.value = props.imgs
}
</script>

<template>
  <ul :class="class" v-auto-animate>
    <HomeImage
      v-for="i in [...images].reverse()"
      :key="i.alt"
      :alt="i.alt"
      :src="i.src"
    />
  </ul>
</template>
