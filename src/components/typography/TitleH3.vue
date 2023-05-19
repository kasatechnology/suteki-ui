<template>
  <h3
    class="font-poppins text-3xl font-medium"
    :class="{ 'text-dark dark:text-light': !colorOverride }"
  >
    <slot />
  </h3>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    colorOverride: boolean;
  }>(),
  {
    colorOverride: false,
  }
);
</script>

<style scoped></style>