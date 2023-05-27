<template>
  <DisplayWrapper>
    <div class="flex flex-row flex-wrap gap-4 rounded-2xl p-6">
      <div class="flex flex-col gap-1">
        <SwitchInput v-model="value"/>
        <SwitchInput large v-model="value"/>
      </div>
      <div class="flex flex-col gap-1">
        <CheckboxInput v-model="value"/>
        <CheckboxInput large v-model="value"/>
      </div>
      <div class="flex flex-col gap-1">
        <SwitchInput v-model="value" label="Test Label"/>
        <SwitchInput large v-model="value" label="Test Label"/>
      </div>
      <div class="flex flex-col gap-1">
        <CheckboxInput v-model="value" label="Test Label"/>
        <CheckboxInput large v-model="value" label="Test Label"/>
      </div>
    </div>
  </DisplayWrapper>
</template>

<script setup lang="ts">
import SwitchInput from "../../src/components/inputs/SwitchInput.vue";
import CheckboxInput from "../../src/components/inputs/CheckboxInput.vue";
import DisplayWrapper from "./DisplayWrapper.vue";
import { ref } from "vue";

const value = ref(false)
</script>

<style scoped></style>
