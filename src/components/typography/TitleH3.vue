<template>
  <h3
    class="font-poppins text-3xl font-medium"
    :class="{ 'text-dark dark:text-light': !overrideColour }"
  >
    <slot />
  </h3>
</template>

<script setup lang="ts">
import type { TitleTypographyProps } from "@/components/types/Typography";

withDefaults(defineProps<TitleTypographyProps>(), {
  overrideColour: false,
});
</script>

<style scoped></style>