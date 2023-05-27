<template>
  <TextInput
    v-bind="$props"
    v-model="modelValue"
    @keyup.enter="$emit('submit', modelValue)"
  >
    <button
      :class="[
        'flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm ' +
          'outline-none transition-transform active:scale-95 ' +
          'disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100',
        buttonStyle[safeStatus],
      ]"
      @click="$emit('submit', modelValue)"
      :disabled="loading"
    >
      <span class="sr-only">Submit</span>
      <div class="h-6 w-6 text-light">
        <CircleLoader v-if="loading" />
        <CheckIcon v-else-if="safeStatus === 'valid'" />
        <XMarkIcon v-else-if="safeStatus === 'invalid'" />
        <ChevronRightIcon v-else />
      </div>
    </button>
  </TextInput>
</template>

<script setup lang="ts">
import {
  ChevronRightIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/vue/20/solid";
import TextInput from "./TextInput.vue";
import type { TextInputWithSubmitProps } from "../types/Inputs";
import { computed } from "vue";
import CircleLoader from "../icons/CircleLoader.vue";

const modelValue = defineModel<string>();

const props = defineProps<TextInputWithSubmitProps>();

defineEmits(["submit"]);

const buttonStyle = {
  default: "bg-primary",
  invalid: "bg-error",
  valid: "bg-success",
};

const safeStatus = computed(() => {
  return props.status ?? "default";
});
</script>

<style scoped></style>
