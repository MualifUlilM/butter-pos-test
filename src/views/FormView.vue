<script setup lang="ts">
import { nextTab } from '@/assets/js/nextTab'
import { previousTab } from '@/assets/js/previousTab'
import FormPersetujuanComponent from '@/components/FormViewComponents/BodyComponents/FormPersetujuanComponent.vue'
import Pasal1Component from '@/components/FormViewComponents/BodyComponents/Pasal1Component.vue'
import Pasal2Component from '@/components/FormViewComponents/BodyComponents/Pasal2Component.vue'
import Pasal3Component from '@/components/FormViewComponents/BodyComponents/Pasal3Component.vue'
import Pasal4Component from '@/components/FormViewComponents/BodyComponents/Pasal4Component.vue'
import Pasal5Component from '@/components/FormViewComponents/BodyComponents/Pasal5Component.vue'
import Pasal6Component from '@/components/FormViewComponents/BodyComponents/Pasal6Component.vue'
import Pasal7Component from '@/components/FormViewComponents/BodyComponents/Pasal7Component.vue'
import PendahuluanComponent from '@/components/FormViewComponents/BodyComponents/PendahuluanComponent.vue'
import ButtonsComponent from '@/components/FormViewComponents/ButtonComponents/ButtonsComponent.vue'
import CorporationComponent from '@/components/FormViewComponents/CorporationDetails/CorporationComponent.vue'
import TabComponent from '@/components/FormViewComponents/Tab/TabComponent.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const route = ref(useRoute())
const router = ref(useRouter())
const sebelumnya = useI18n().t('message.sebelumnya')
const selanjutnya = useI18n().t('message.selanjutnya')
</script>

<template>
  <div class="flex-grow pt-4 pb-12 md:py-10 px-4">
    <div class="tabs max-w-[924px] w-full mx-auto flex flex-col gap-4">
      <CorporationComponent />
      <TabComponent />
      <div>
        <div class="tab-contents mb-6 md:mb-8">
          <!-- Pendahuluan -->
          <PendahuluanComponent v-if="route.hash === '#pendahuluan' || route.hash === ''" />

          <!-- Pasal 1 -->
          <Pasal1Component v-if="route.hash == '#pasal_1'" />

          <!-- Pasal 2 -->
          <Pasal2Component v-if="route.hash == '#pasal_2'" />

          <!-- Pasal 3 -->
          <Pasal3Component v-if="route.hash == '#pasal_3'" />

          <!-- Pasal 4 -->
          <Pasal4Component v-if="route.hash == '#pasal_4'" />

          <!-- Pasal 5 -->
          <Pasal5Component v-if="route.hash == '#pasal_5'" />

          <!-- Pasal 6 -->
          <Pasal6Component v-if="route.hash == '#pasal_6'" />

          <!-- Pasal 7 -->
          <Pasal7Component v-if="route.hash == '#pasal_7'" />

          <!-- Form Persetujuan -->
          <FormPersetujuanComponent v-if="route.hash == '#form_persetujuan'" />
        </div>
        <div class="flex items-center flex-col md:flex-row gap-3 md:gap-4">
          <ButtonsComponent
            class="md:order-1 order-2 rounded bg-white border border-[#B2B2B2] text-[#080808] py-3 px-6 text-center w-full font-semibold cursor-pointer"
            v-if="route.hash != '#pendahuluan' && route.hash != '#form_persetujuan'"
            @click="previousTab(route, router)"
            :textButton="{ sebelumnya }"
            keyTranslate="sebelumnya"
          />
          <ButtonsComponent
            class="md:order-2 order-1 rounded bg-[#0433FF] border border-[#0433FF] text-white py-3 px-6 text-center w-full font-semibold cursor-pointer"
            v-if="route.hash != '#form_persetujuan'"
            @click="nextTab(route, router)"
            :textButton="{ selanjutnya }"
            keyTranslate="selanjutnya"
          />
        </div>
      </div>
    </div>
  </div>
</template>
