<template>
  <DisplayWrapper>
    <div class="rounded-2xl p-6 flex gap-4">
      <ComboboxInput
        status="default"
        label="test"
        :options="options"
        v-model="output"
      />
      <ComboboxInput
        status="valid"
        label="test"
        :options="options"
        v-model="output"
      />
      <ComboboxInput
        status="invalid"
        label="test"
        :options="options"
        v-model="output"
      />
    </div>
  </DisplayWrapper>
</template>

<script setup lang="ts">

import ComboboxInput from "../../src/components/inputs/ComboboxInput.vue";
import type { Option } from "../../src/components/types/Inputs";
import DisplayWrapper from "./DisplayWrapper.vue";
import { ref } from "vue";

const options: Option[] = [
  {
    label: "Person1",
    value: "1"
  },
  {
    label: "Person2",
    value: "2"
  },
  {
    label: "Person3",
    value: "3"
  },
]

const output = ref(null)
const outputMutliple = ref(null)
</script>

<style scoped>

</style>