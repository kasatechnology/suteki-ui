<template>
  <h2
    class="font-dm text-4xl font-bold text-dark dark:text-light"
    :class="{ 'text-dark dark:text-light': !overrideColour }"
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
import type { TitleTypographyProps } from "@/components/types/Typography";

withDefaults(defineProps<TitleTypographyProps>(), {
  overrideColour: false,
});
</script>

<style scoped></style>
