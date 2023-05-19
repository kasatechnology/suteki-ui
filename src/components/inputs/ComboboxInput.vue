<template>
  <Combobox
    as="div"
    v-model="selected"
    v-slot="{ open }"
    :multiple="multiple ?? false"
  >
    <ComboboxLabel>
      <Label v-if="label" :status="status"> {{ label }}</Label>
    </ComboboxLabel>
    <div class="relative mt-1">
      <div
        :class="[
          'relative box-border flex h-12 flex-row items-center rounded-md border-2 bg-light-200 text-dark dark:text-light pl-3 pr-1 font-poppins focus:outline-none dark:bg-dark-300',
          inputStyle[status],
        ]"
      >
        <ComboboxInput
          class="w-full border-none bg-transparent outline-none focus:ring-0"
          :displayValue="
            (item): string =>
              Array.isArray(item) && multiple ? (item as Option[]).map((x) => x.label).join(', ') : (item as Option).label
          "
          @change="query = $event.target.value"
        />
        <ComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronDownIcon
            :class="[
              'h-5 w-5 transform transition-transform duration-100',
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
            'absolute mt-1 max-h-60 z-50 box-border w-full overflow-hidden flex-row items-center rounded-md border-2 bg-light-200 text-dark dark:text-light font-poppins focus:outline-none dark:bg-dark-300',
            inputStyle[status],
          ]"
        >
          <div
            v-if="filteredOptions.length === 0 && query !== ''"
            class="flex items-center relative cursor-default select-none h-12 px-3 text-dark dark:text-light"
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
              class="flex items-center justify-between relative cursor-default select-none h-12 px-3"
              :class="{
                'bg-primary': active,
              }"
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
import type { BaseInputProps } from "../types/Inputs";
import Label from "./shared/Label.vue";

interface Option {
  value: string;
  label: string;
}

interface ComboboxInputProps extends BaseInputProps {
  options: Option[];
  multiple?: boolean;
}

const props =
  withDefaults(defineProps<ComboboxInputProps>(), {
    label: "",
    disabled: false,
    message: "",
    type: "text",
    status: "default",
    placeholder: "",
    multiple: false,
  });

const inputStyle = {
  default: "border-light-300 dark:border-dark-200",
  invalid: "border-error",
  valid: "border-success",
};

let selected = ref(props.options.slice(0, 2));
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
</script>
