<template>
  <TextInput
    v-bind="$props"
    v-model="modelValue"
    @keyup.enter="$emit('submit', modelValue)"
  >
    <button
      :class="[
        'flex h-9 w-9 items-center justify-center rounded-sm transition-transform active:scale-95 outline-none',
        buttonStyle[safeStatus],
      ]"
      @click="$emit('submit', modelValue)"
    >
      <span class="sr-only">Submit</span>
      <div class="text-light h-6 w-6">
        <CheckIcon v-if="safeStatus === 'valid'" />
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
import type { TextInputProps } from "../types/Inputs";
import { computed } from "vue";

const modelValue = defineModel<string>()

const props = defineProps<TextInputProps>();

defineEmits(["submit"]);

const buttonStyle = {
  default: "bg-primary",
  invalid: "bg-error",
  valid: "bg-success",
};

const safeStatus = computed(() => {
  return props.status ?? "default"
})
</script>

<style scoped></style>
