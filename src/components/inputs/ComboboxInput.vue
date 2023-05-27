<template>
  <Combobox as="div" class="flex flex-col gap-1.5 flex-grow" v-model="selected" v-slot="{ open }">
    <ComboboxLabel>
      <Label v-if="label" :status="status"> {{ label }}</Label>
    </ComboboxLabel>
    <div class="relative">
      <div
        :class="[
          'box-border flex h-12 flex-row items-center rounded-md border-2 ' +
            'bg-light-200 pl-3 pr-1 font-poppins focus:outline-none dark:bg-dark-800',
          inputStyle[status],
        ]"
      >
        <ComboboxInput
          class="w-full border-none bg-transparent outline-none focus:ring-0"
          :displayValue="
            (item): string =>
             displayValue
          "
          @change="query = $event.target.value"
        />
        <ComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronDownIcon
            :class="[
              'h-5 w-5 transform transition-transform duration-200',
              { 'rotate-180': open },
            ]"
          />
        </ComboboxButton>
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions
          :class="[
            'absolute z-50 mt-1 box-border max-h-60 w-full flex-row items-center ' +
              'overflow-hidden rounded-md border-2 bg-light-100 font-poppins ' +
              'text-dark focus:outline-none dark:bg-dark-800 dark:text-light',
            inputStyle[status],
          ]"
        >
          <div
            v-if="filteredOptions.length === 0 && query !== ''"
            class="relative flex h-12 cursor-default select-none items-center px-3 text-dark dark:text-light"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="option in filteredOptions"
            as="template"
            :key="option.label"
            :value="option"
            v-slot="{ selected, active }"
          >
            <li
              :class="[
                'relative flex h-12 cursor-default select-none transition ' +
                  'items-center justify-between px-3 ',
                {
                  'bg-primary': active,
                },
              ]"
            >
              <span class="block truncate" :class="{ 'text-light': active }">
                {{ option.label }}
              </span>
              <span
                v-if="selected"
                :class="{ 'text-light': active, 'text-primary': !active }"
              >
                <CheckIcon class="h-6 w-6" aria-hidden="true" />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Combobox,
  ComboboxLabel,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CheckIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/vue/20/solid";
import type { ComboboxInputProps, Option } from "../types/Inputs";
import Label from "./shared/Label.vue";

const props = withDefaults(defineProps<ComboboxInputProps>(), {
  label: "",
  disabled: false,
  message: "",
  type: "text",
  status: "default",
  placeholder: "",
  multiple: false,
});

const inputStyle = {
  default: "border-light-200 dark:border-dark-600",
  invalid: "border-error",
  valid: "border-success",
};

let selected = ref<Option | Option[] | null>(props.multiple ? [] : null);
let query = ref("");

let filteredOptions = computed(() =>
  query.value === ""
    ? props.options
    : props.options.filter((option) =>
        option.label
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

const displayValue = computed(() => {
  if (!selected.value) return "Select";

  return (selected.value as Option).label;
});
</script>
