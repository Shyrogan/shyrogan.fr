<script setup lang="ts">
import type { NuxtLinkProps } from "#app"

type Props = {
  href?: NuxtLinkProps["to"]
}
defineProps<Props>()
</script>

<template>
  <NuxtLink :href="href" class="font-medium tracking-tight">
    <slot />
  </NuxtLink>
</template>
