<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue"

type Variant = "default" | "ghost"
const variants: Record<Variant, string> = {
  default: tw(
    "bg-blue-500 font-semibold text-white hover:bg-blue-600 transition-all",
  ),
  ghost: tw(
    "border-2 border-zinc-300 font-semibold hover:bg-zinc-100 transition-all",
  ),
}

type Size = "default"
const sizes: Record<Size, string> = {
  default: tw("p-3 text-md rounded-lg"),
}

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  variant?: Variant
  size?: Size
}
const { variant, size, ...buttonProps } = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
})
</script>

<template>
  <button :class="tw(variants[variant], sizes[size])" v-bind="buttonProps">
    <slot />
  </button>
</template>
