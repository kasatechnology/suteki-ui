<template>
  <div class="flex items-center justify-center">
    <a
      v-if="external"
      :class="[
        sharedClasses,
        linkStyle[variant],
        { 'pointer-events-none cursor-not-allowed opacity-60': disabled },
      ]"
    >
      <BodyCopy override-colour>
        <slot />
      </BodyCopy>
    </a>
    <button
      v-else
      :disabled="disabled"
      :class="[sharedClasses, linkStyle[variant]]"
      class="disabled:cursor-not-allowed disabled:opacity-60"
    >
      <BodyCopy override-colour>
        <slot />
      </BodyCopy>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ButtonVariant } from "../types/Buttons";
import BodyCopy from "../typography/BodyCopy.vue";

export interface LinkButtonProps {
  external?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
}

const { external, disabled, variant } = withDefaults(
  defineProps<LinkButtonProps>(),
  {
    external: false,
    disabled: false,
    variant: "default",
  }
);

const sharedClasses =
  "underline underline-offset-2 p-1 rounded-xs focus-visible:outline-none transition duration-300 ring-opacity-60 focus:ring-2";

const linkStyle = {
  default: "text-primary ring-primary hover:text-active-blue",
  alternative:
    "text-secondary ring-secondary hover:text-active-purple",
  warning: "text-error ring-error hover:text-active-red",
  success: "text-success ring-success hover:text-active-green",
};
</script>

<style scoped></style>
