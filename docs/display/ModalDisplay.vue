<template>
  <DisplayWrapper class="mt-4">
    <Modal v-model="openDefault"/>
    <Modal v-model="openCustom">
      <div class="flex flex-col gap-2 mb-2">
        <TitleH3>Test title</TitleH3>
        <BodyCopy>Custom content goes here</BodyCopy>
      </div>
      <Button @click="openCustom = false">Okay</Button>
    </Modal>
    <div class="flex gap-2">
      <Button @click="openDefault = true">Open default</Button>
      <Button @click="openCustom = true">Open custom</Button>
    </div>
  </DisplayWrapper>
</template>

<script setup lang="ts">
import Modal from "../../src/components/utility/Modal.vue";
import Button from "../../src/components/buttons/Button.vue";
import BodyCopy from "../../src/components/typography/BodyCopy.vue";
import TitleH3 from "../../src/components/typography/TitleH3.vue";

import { ref } from "vue";
import DisplayWrapper from "./DisplayWrapper.vue";

const openDefault = ref(false)
const openCustom = ref(false)
</script>

<style scoped></style>
