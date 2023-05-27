<template>
  <SwitchGroup as="div" class="inline-flex w-max flex-col gap-1">
    <SwitchLabel v-if="label">
      <Label :status="status">
        {{ label }}
      </Label>
    </SwitchLabel>
    <Switch
      v-model="modelValue"
      :class="[
        modelValue ? 'bg-primary' : 'bg-primary/30',
        large ? 'h-12 w-24' : 'h-8 w-16',
      ]"
      class="bg-light relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
    >
      <span class="sr-only">{{ label }}</span>
      <span
        aria-hidden="true"
        :class="[
          modelValue ? translation : 'translate-x-0',
          large ? 'h-10 w-10 ml-0.5' : 'h-6.5 w-6.5 ml-0.25',
        ]"
        class="pointer-events-none inline-block transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out"
      />
    </Switch>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import type { SwitchInputProps } from "../types/Inputs";
import Label from "./shared/Label.vue";

const modelValue = defineModel<boolean>();

const props = withDefaults(defineProps<SwitchInputProps>(), {
  disabled: false,
  status: "default",
  label: "",
  message: "",
  showLabel: false,
  large: false,
});

const translation = props.large ? "translate-x-12" : "translate-x-8";
</script>

<style scoped></style>
