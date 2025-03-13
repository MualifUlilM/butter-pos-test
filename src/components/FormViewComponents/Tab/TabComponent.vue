<script setup>
import { RouterLink } from 'vue-router'
function isActiveStyle(route, validate) {
  if (validate === '#pendahuluan' && route.length === 0) {
    return 'active whitespace-nowrap py-2 px-3 text-[#525252] [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD] text-sm font-medium rounded'
  }
  if (route !== validate) {
    return 'whitespace-nowrap py-2 px-3 text-[#525252] [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD] text-sm font-medium rounded'
  }
  return 'active whitespace-nowrap py-2 px-3 text-[#525252] [&.active]:bg-[#F4F6FF] [&.active]:text-[#0023BD] text-sm font-medium rounded'
}
</script>

<template>
  <div class="relative rounded-lg border border-[#EDEDED] overflow-hidden">
    <div
      class="tab-links flex items-center justify-start gap-2 md:gap-4 bg-white p-3 rounded-lg overflow-x-auto"
    >
      <div
        class="absolute md:hidden right-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-l from-white to-white/0"
      ></div>
      <div
        class="absolute md:hidden left-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-r from-white to-white/0"
      ></div>

      <RouterLink to="#pendahuluan" :class="isActiveStyle($route.hash, '#pendahuluan')"
        >Pendahuluan</RouterLink
      >
      <RouterLink to="#pasal_1" :class="isActiveStyle($route.hash, '#pasal_1')">Pasal 1</RouterLink>
      <RouterLink to="#pasal_2" :class="isActiveStyle($route.hash, '#pasal_2')">Pasal 2</RouterLink>
      <RouterLink to="#pasal_3" :class="isActiveStyle($route.hash, '#pasal_3')">Pasal 3</RouterLink>
      <RouterLink to="#pasal_4" :class="isActiveStyle($route.hash, '#pasal_4')">Pasal 4</RouterLink>
      <RouterLink to="#pasal_5" :class="isActiveStyle($route.hash, '#pasal_5')">Pasal 5</RouterLink>
      <RouterLink to="#pasal_6" :class="isActiveStyle($route.hash, '#pasal_6')">Pasal 6</RouterLink>
      <RouterLink to="#pasal_7" :class="isActiveStyle($route.hash, '#pasal_7')">Pasal 7</RouterLink>
      <RouterLink to="#form_persetujuan" :class="isActiveStyle($route.hash, '#form_persetujuan')"
        >Form Persetujuan</RouterLink
      >
    </div>
  </div>
</template>
