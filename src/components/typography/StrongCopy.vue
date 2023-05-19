<template>
  <p
    class="font-poppins text-base font-medium"
    :class="{ 'text-dark dark:text-light': !overrideColor }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
export interface StrongCopyProps {
  overrideColor?: boolean;
}

const { overrideColor } = withDefaults(defineProps<StrongCopyProps>(), {
  overrideColor: false,
});
</script>

<style scoped></style>
