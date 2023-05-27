<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-6">
    <Button variant="default">Button</Button>
    <Button variant="alternative">Button</Button>
    <Button variant="warning">Button</Button>
    <Button variant="success">Button</Button>

    <Button variant="default" secondary>Button</Button>
    <Button variant="alternative" secondary>Button</Button>
    <Button variant="warning" secondary>Button</Button>
    <Button variant="success" secondary>Button</Button>

    <Button variant="default" disabled>Button</Button>
    <Button variant="alternative" disabled>Button</Button>
    <Button variant="warning" disabled>Button</Button>
    <Button variant="success" disabled>Button</Button>

    <Button variant="default" loading>Button</Button>
    <Button variant="alternative" loading>Button</Button>
    <Button variant="warning" loading>Button</Button>
    <Button variant="success" loading>Button</Button>

    <Button variant="default"
      >Button<template #icon><ArrowRightIcon /></template
    ></Button>
    <Button variant="alternative"
      >Button<template #icon><CloudIcon /></template
    ></Button>
    <Button variant="warning"
      >Button<template #icon><TrashIcon /></template
    ></Button>
    <Button variant="success"
      >Button<template #icon><CheckIcon /></template
    ></Button>

    <LinkButton variant="default">Button</LinkButton>
    <LinkButton variant="alternative">Button</LinkButton>
    <LinkButton variant="warning">Button</LinkButton>
    <LinkButton variant="success">Button</LinkButton>

    <LinkButton variant="default" disabled>Button</LinkButton>
    <LinkButton variant="alternative" disabled>Button</LinkButton>
    <LinkButton variant="warning" disabled>Button</LinkButton>
    <LinkButton variant="success" disabled>Button</LinkButton>
  </div>
</template>

<script setup lang="ts">
import Button from "../../src/components/buttons/Button.vue";
import {
  ArrowRightIcon,
  TrashIcon,
  CheckIcon,
  CloudIcon,
} from "@heroicons/vue/20/solid";
import LinkButton from "../../src/components/buttons/LinkButton.vue";
</script>

<style scoped>

.vp-doc p {
    margin: 0;
}

</style>
