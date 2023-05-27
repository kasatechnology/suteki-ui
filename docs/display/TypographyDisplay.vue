<template>
  <DisplayWrapper>
    <div class="rounded-2xl p-6">
      <TitleH1>
        {{ sampleText }}
      </TitleH1>
      <TitleH2>
        {{ sampleText }}
      </TitleH2>
      <TitleH3>
        {{ sampleText }}
      </TitleH3>
      <TitleH4>
        {{ sampleText }}
      </TitleH4>
      <StrongCopy>
        {{ sampleText }}
      </StrongCopy>
      <BodyCopy>
        {{ sampleText }}
      </BodyCopy>
      <SmallCopy>
        {{ sampleText }}
      </SmallCopy>
      <ExtraSmallCopy>
        {{ sampleText }}
      </ExtraSmallCopy>
    </div>
  </DisplayWrapper>
</template>

<script setup lang="ts">
import TitleH1 from "../../src/components/typography/TitleH1.vue";
import TitleH2 from "../../src/components/typography/TitleH2.vue";
import TitleH3 from "../../src/components/typography/TitleH3.vue";
import TitleH4 from "../../src/components/typography/TitleH4.vue";
import StrongCopy from "../../src/components/typography/StrongCopy.vue";
import BodyCopy from "../../src/components/typography/BodyCopy.vue";
import SmallCopy from "../../src/components/typography/SmallCopy.vue";
import ExtraSmallCopy from "../../src/components/typography/ExtraSmallCopy.vue";
import DisplayWrapper from "./DisplayWrapper.vue";

const sampleText = "The quick brown fox jumps over the lazy dog";
</script>

<style scoped></style>
