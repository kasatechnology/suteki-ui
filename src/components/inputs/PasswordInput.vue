<template>
  <TextInput
    v-bind="$props"
    :type="computedType"
    v-model="modelValue"
  >
    <button
      class="mr-1 flex items-center justify-center"
      @click="showPassword = !showPassword"
    >
      <span class="sr-only">Show password</span>
      <transition
        type="transition"
        mode="out-in"
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95"
        enter-to-class="transform scale-100"
        leave-active-class="transition duration-100 ease-out"
        leave-from-class="transform scale-100"
        leave-to-class="transform scale-95"
      >
        <EyeSlashIcon
          class="h-6 w-6 text-dark dark:text-light"
          v-if="showPassword"
        />
        <EyeIcon class="h-6 w-6 text-dark dark:text-light" v-else />
      </transition>
    </button>
  </TextInput>
</template>

<script setup lang="ts">
import TextInput from "./TextInput.vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";
import { computed, ref } from "vue";
import type { TextInputProps } from "../types/Inputs";

const modelValue = defineModel<string>()

const showPassword = ref(false);

const props = defineProps<TextInputProps>();

const computedType = computed(() => {
  return showPassword.value ? "text" : "password";
});
</script>

<style scoped></style>
