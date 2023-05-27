<template>
  <DisplayWrapper>
    <div class="flex flex-col gap-4 rounded-2xl p-6">
      <div>
        <TextInput label="Label" status="default" v-model="testInput" />
      </div>
      <div class="flex flex-row gap-4">
        <TextInput class="flex-grow" label="Label" status="default" v-model="testInput" />
        <TextInput class="flex-grow" label="Label" status="valid" v-model="testInput" />
        <TextInput class="flex-grow" label="Label" status="invalid" v-model="testInput" />
      </div>

      <div class="flex flex-row gap-4">
        <PasswordInput
          class="flex-grow"
          label="Label"
          status="default"
          v-model="testPassword"
        />
        <PasswordInput
          class="flex-grow"
          label="Label"
          status="valid"
          v-model="testPassword"
        />
        <PasswordInput
          class="flex-grow"
          label="Label"
          status="invalid"
          v-model="testPassword"
        />
      </div>

      <div class="flex flex-row gap-4 flex-wrap">
        <TextInputWithSubmit
          class="flex-grow"
          label="Label"
          status="default"
          v-model="testWithSubmit"
        />
        <TextInputWithSubmit
          class="flex-grow"
          label="Label"
          status="default"
          v-model="testWithSubmit"
          loading
        />
        <TextInputWithSubmit
          class="flex-grow"
          label="Label"
          status="valid"
          v-model="testWithSubmit"
        />
        <TextInputWithSubmit
          class="flex-grow"
          label="Label"
          status="invalid"
          v-model="testWithSubmit"
        />
      </div>
    </div>
  </DisplayWrapper>
</template>

<script setup lang="ts">
import TextInput from "../../src/components/inputs/TextInput.vue";
import TextInputWithSubmit from "../../src/components/inputs/TextInputWithSubmit.vue";
import PasswordInput from "../../src/components/inputs/PasswordInput.vue";
import { ref } from "vue";
import DisplayWrapper from "./DisplayWrapper.vue";

const testInput = ref("");
const testPassword = ref("");
const testWithSubmit = ref("");
</script>

<style scoped></style>
