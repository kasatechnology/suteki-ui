<template>
  <label class="flex flex-col w-fit gap-1">
    <Label v-if="label">
      {{ label }}
    </Label>
    <input
      type="checkbox"
      class="hidden"
      v-model="modelValue"
    />
    <div
      :class="[
        'flex items-center justify-center border-2 border-primary bg-primary/20',
        'cursor-pointer',
        large ? 'h-12 w-12 rounded-md' : 'h-8 w-8 rounded-sm',
      ]"
    >
      <transition
        type="transition"
        mode="out-in"
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-85 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-85 opacity-0"
      >
        <CheckIcon
          v-if="modelValue"
          :class="['text-primary', large ? 'h-10 w-10' : 'h-6 w-6']"
        />
      </transition>
    </div>
  </label>
</template>

<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/20/solid";
import Label from "../inputs/shared/Label.vue";
import type { BooleanInputProps } from "../types/Inputs";

interface Props extends BooleanInputProps {
  large?: false;
}

const modelValue = defineModel<boolean>()

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
