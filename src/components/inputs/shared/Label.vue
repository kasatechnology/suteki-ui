<template>
  <div class="flex items-center gap-1 select-none">
    <StrongCopy>
      <slot />
    </StrongCopy>
    <transition
      type="transition"
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <CheckIcon class="h-4 w-4 text-success" v-if="status === 'valid'" />
      <XMarkIcon
        class="h-4 w-4 text-error"
        v-else-if="status === 'invalid'"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import StrongCopy from "../../typography/StrongCopy.vue";
import { CheckIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import type { LabelProps } from "../../types/Inputs";

const props = withDefaults(defineProps<LabelProps>(), {
  status: "default",
});

const statusColor = {
  default: "text-dark dark:text-light",
  valid: "text-success",
  invalid: "text-error",
};
</script>

<style scoped></style>
