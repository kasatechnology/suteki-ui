<template>
  <p
    class="font-poppins text-base font-normal"
    :class="{ 'text-dark dark:text-light': !overrideColour }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  overrideColour: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
