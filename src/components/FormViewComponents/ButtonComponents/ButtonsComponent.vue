<script setup>
defineOptions({
  inheritAttrs: true,
})
defineProps(['textButton', 'keyTranslate'])
</script>

<template>
  <!-- <button id="prevButton" @click="previousTab" :class="isInForm()">
      {{ $t('message.sebelumnya') }}
    </button>
    <button id="nextButton" @click="nextTab" :class="isInForm()">
      {{ $t('message.selanjutnya') }}
    </button> -->

  <button v-if="keyTranslate !== undefined">
    {{ textButton[keyTranslate] }}
  </button>
  <button v-else>
    {{ textButton }}
  </button>
</template>
