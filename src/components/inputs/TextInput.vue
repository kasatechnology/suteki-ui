<template>
  <label class="flex flex-col gap-1">
    <Label v-if="label" :status="status"> {{ label }}</Label>
    <div
      :class="[
        'box-border flex h-12 flex-row items-center rounded-md border-2 bg-light-200 pl-3 pr-1 font-poppins focus:outline-none dark:bg-dark-800',
        inputStyle[status],
      ]"
    >
      <input
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        class="flex-shrink flex-grow bg-transparent text-dark focus:outline-none dark:text-light"
        v-model="modelValue"
      />
      <div class="flex-shrink-0 flex-grow-0">
        <slot />
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import Label from "./shared/Label.vue";
import type { TextInputProps } from "../types/Inputs";

const modelValue = defineModel<string>();

const props = withDefaults(defineProps<TextInputProps>(), {
  label: "",
  disabled: false,
  message: "",
  type: "text",
  status: "default",
  placeholder: "",
});

const inputStyle = {
  default: "border-light-300 dark:border-dark-600",
  invalid: "border-error",
  valid: "border-success",
};
</script>

<style scoped></style>
