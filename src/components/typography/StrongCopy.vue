<template>
  <component
    :is="as as string"
    class="font-poppins text-base font-medium"
    :class="{ 'text-dark dark:text-light': !overrideColour }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { TypographyProps } from "@/components/types/Typography";

withDefaults(defineProps<TypographyProps>(), {
  overrideColor: false,
  as: "p",
});
</script>

<style scoped></style>
