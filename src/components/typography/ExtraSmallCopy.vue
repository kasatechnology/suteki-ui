<template>
  <component
    :is="as"
    class="font-poppins text-xs font-normal"
    :class="{ 'text-dark dark:text-light': !overrideColour }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { TypographyProps } from "@/components/types/Typography";

withDefaults(defineProps<TypographyProps>(), {
  overrideColour: false,
  as: "p",
});
</script>

<style scoped></style>
