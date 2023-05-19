<template>
  <p
    class="font-poppins text-sm font-normal"
    :class="{ 'text-dark dark:text-light': overrideColour }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
const { overrideColour } = defineProps({
  overrideColour: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
