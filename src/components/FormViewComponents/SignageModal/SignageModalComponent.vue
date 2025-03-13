<!-- <script setup>
import { useTemplateRef } from 'vue'
const refSignaturePad = useTemplateRef('signaturePad')

function deleteSignature() {
  refSignaturePad.value.clearSignature()
}
</script>

<template>
  <div
    id="signatureModal"
    class="fixed modal top-0 left-0 w-screen h-screen bg-[#080808]/40 flex items-end md:items-center justify-center md:p-6"
  >
    <div
      class="modal-content bg-white rounded-t-2xl md:rounded-lg px-4 pt-4 pb-6 md:p-6 w-full md:w-[800px]"
    >
      <div class="flex items-center justify-between mb-5">
        <div class="text-lg md:text-xl font-semibold text-[#080808]">Buat Tanda Tangan</div>
        <button
          class="modal-close cursor-pointer size-5 md:size-6"
          data-modal-hide="signatureModal"
        >
          <svg
            class="size-6 text-[#525252]"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="mb-6">
        <div
          class="bg-[#F8F8F8] border border-[#EDEDED] h-[220px] flex items-center justify-center rounded-lg"
        >
          <VueSignaturePad class="w-full" height="220px" :ref="refSignaturePad" />
          <!-- Gambar tanda tangan di sini -->
          <!-- text-[#989898] -->
        </div>
        <div
          class="mt-3 bg-[#F8F8F8] border border-[#EDEDED] h-[220px] pt-5 md:pt-0 flex items-start md:items-center justify-center rounded-lg relative"
        >
          <img
            class="size-full max-h-[150px] md:max-h-[180px] object-contain"
            src="../assets/img/signage.svg"
            alt="Signage"
          />
          <button
            class="absolute bottom-6 right-6 text-sm font-semibold text-[#CA0A0A]"
            @click="deleteSignature()"
          >
            Hapus
          </button>
        </div>
      </div>
      <div class="flex items-stretch md:items-center justify-end flex-col md:flex-row gap-3">
        <button
          data-modal-hide="signatureModal"
          class="order-2 md:order-1 modal-close cursor-pointer rounded py-3 px-6 bg-white border border-[#B2B2B2] font-semibold text-[#080808]"
        >
          Batal
        </button>
        <button
          class="order-1 md:order-2 cursor-pointer rounded py-3 px-6 bg-[#EDEDED] font-semibold text-[#B2B2B2]"
        >
          Buat Tanda Tangan
        </button>
      </div>
    </div>
  </div>
</template> -->
