<template>
  <div ref="shadowBase">
    <div ref="shadowContent">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";

const shadowBase = ref<HTMLElement>();
const shadowContent = ref<HTMLElement>();

function useShadowBase(element: HTMLElement) {
  return element.attachShadow({ mode: "open" });
}

// function useInjectUno(element: ShadowRoot) {
//   const stylePoint = document.createElement("style");
//   stylePoint.innerText = ;
//
//   element.appendChild(stylePoint);
// }

onMounted(() => {
  if (shadowBase.value && shadowContent.value) {
    const base = useShadowBase(shadowBase.value);
    base.appendChild(shadowContent.value);
  }
  // useInjectTailwind(base);

});
</script>

<style scoped></style>
