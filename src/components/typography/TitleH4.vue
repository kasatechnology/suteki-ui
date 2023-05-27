<template>
  <h4
    class="font-poppins text-xl font-medium"
    :class="{ 'text-dark dark:text-light': !overrideColour }"
  >
    <slot />
  </h4>
</template>

<script setup lang="ts">
import type { TitleTypographyProps } from "@/components/types/Typography";

withDefaults(defineProps<TitleTypographyProps>(), {
  overrideColour: false,
});
</script>

<style scoped></style>
