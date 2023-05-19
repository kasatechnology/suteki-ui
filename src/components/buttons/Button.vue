<template>
  <button
    :class="[
      'h-12 rounded-full px-6 transition duration-300 ease-in-out',
      'ring-opacity-60 ring-offset-2 ring-offset-light focus:ring-2 dark:ring-offset-dark-800',
      'focus-visible:outline-none active:scale-95 disabled:opacity-60 disabled:active:scale-100',
      { 'cursor-progress': loading },
      buttonStyle[base as keyof typeof buttonStyle][variant],
    ]"
    :disabled="disabled || loading"
  >
    <div class="relative flex items-center justify-center">
      <CircleLoader
        v-if="loading"
        :class="[
          { 'text-dark dark:text-light': secondary },
          { 'text-light': !secondary },
        ]"
        class="absolute h-6 w-6 text-dark dark:text-light"
      />
      <BodyCopy
        :class="[
          { 'opacity-0': loading },
          { 'text-light': !secondary },
          'flex flex-row items-center gap-1.5',
        ]"
        :override-colour="!secondary"
      >
        <slot />
        <div v-if="$slots.icon" :class="['h-6 w-6', buttonStyle.primary]">
          <slot name="icon" />
        </div>
      </BodyCopy>
    </div>
  </button>
</template>

<script setup lang="ts">
import BodyCopy from "../typography/BodyCopy.vue";
import CircleLoader from "../icons/CircleLoader.vue";
import type { BaseButtonProps } from "../types/Buttons";

const props = withDefaults(
  defineProps<BaseButtonProps>(),
  {
    disabled: false,
    loading: false,
    secondary: false,
    variant: "default",
  }
);

const base = props.secondary ? "secondary" : "primary";

const buttonStyle = {
  primary: {
    default:
      "bg-primary ring-primary hover:bg-active-blue disabled:hover:bg-primary",
    alternative:
      "bg-secondary ring-secondary hover:bg-secondary disabled:hover:bg-secondary",
    warning:
      "bg-error ring-error hover:bg-error disabled:hover:bg-error",
    success:
      "bg-success ring-success hover:bg-success disabled:hover:bg-success",
  },
  secondary: {
    default:
      "bg-primary/0 border-2 border-primary ring-primary hover:bg-primary/10 disabled:hover:bg-primary/0",
    alternative:
      "bg-secondary/0 border-2 border-secondary ring-secondary hover:bg-active-purple/10 disabled:hover:bg-secondary/0",
    warning:
      "bg-error/0 border-2 border-error ring-error hover:bg-error/10 disabled:hover:bg-error/0",
    success:
      "bg-success/0 border-2 border-success ring-success hover:bg-success/10 disabled:hover:bg-success/0",
  },
};
</script>

<style scoped></style>
