<template>
  <h1
    class="font-dm text-5xl font-bold leading-none"
    :class="{ 'text-dark dark:text-light': !overrideColour }"
  >
    <slot />
  </h1>
</template>

<script setup lang="ts">
import type { TitleTypographyProps } from "@/components/types/Typography";

withDefaults(defineProps<TitleTypographyProps>(), {
  overrideColour: false,
});
</script>

<style scoped></style>
