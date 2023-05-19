<template>
  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex flex-row-reverse gap-1">
                <div class="w-8">
                  <button
                    class="outline-none active:scale-95"
                    @click="closeModal"
                  >
                    <XMarkIcon class="dark:text-light text-dark w-8 h-8" />
                  </button>
                </div>
                <div>
                  <slot>
                    <TitleH4>
                      <DialogTitle> Payment successful </DialogTitle>
                    </TitleH4>
                    <div class="mt-2">
                      <BodyCopy>
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </BodyCopy>
                    </div>

                    <div class="mt-4">
                      <Button @click="closeModal"> Got it, thanks! </Button>
                    </div>
                  </slot>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import BodyCopy from "../typography/BodyCopy.vue";
import TitleH4 from "../typography/TitleH4.vue";
import Button from "../buttons/Button.vue";
import type { ModalProps } from "../types/Utility";

const modelValue = defineModel<boolean>({
  required: true
})

const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: true,
});

const closeModal = () => {
  modelValue.value = false
};

const openModal = () => {
  modelValue.value = true
};
</script>
