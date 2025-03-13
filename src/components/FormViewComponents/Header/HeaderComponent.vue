<script setup lang="ts">
import { customLocalization } from '@/main'
import { onMounted, ref } from 'vue'

const isEnglish = ref(false)
function changeLang() {
  isEnglish.value = !isEnglish.value
  customLocalization.global.locale.value = isEnglish.value ? 'en' : 'id'
  console.log(customLocalization.global.locale.value)
}

onMounted(() => {
  isEnglish.value = window.navigator.language.match('id') ? false : true
})
</script>

<template>
  <header class="w-full border-b border-[#EDEDED] bg-white">
    <div class="flex items-center justify-between mx-auto max-w-7xl py-4 px-4 lg:px-16">
      <img class="size-10z md:size-12" src="../../../assets/img/logo.svg" alt="ButterPOS Logo" />
      <label
        for="langToggle"
        class="inline-flex items-center gap-0.5 p-1 cursor-pointer rounded-md bg-[#EDEDED]"
      >
        <input
          id="langToggle"
          type="checkbox"
          class="hidden peer"
          :checked="isEnglish"
          @click="changeLang"
        />
        <span
          class="group p-2 rounded bg-white peer-checked:bg-[#EDEDED] flex items-center gap-1.5"
        >
          <img
            class="size-4 object-contain"
            src="../../../assets/img/id-flag.svg"
            alt="Indonesia lang flag"
          />
          <div class="text-[#080808] group-peer-checked:text-[#989898] text-sm font-semibold">
            ID
          </div>
        </span>
        <span
          class="group p-2 rounded bg-[#EDEDED] peer-checked:bg-white flex items-center gap-1.5"
        >
          <img
            class="size-4 object-contain"
            src="../../../assets/img/en-flag.svg"
            alt="English lang flag"
          />
          <div class="text-[#989898] group-peer-checked:text-[#080808] text-sm font-semibold">
            EN
          </div>
        </span>
      </label>
    </div>
  </header>
</template>
