<script setup>
import { formStoreData } from '@/stores/formStore'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { previousTab } from '@/assets/js/previousTab'
import ButtonsComponent from '@/components/FormViewComponents/ButtonComponents/ButtonsComponent.vue'

const formStore = formStoreData()
const router = useRouter()
const route = useRoute()

const signaturePad = ref(null)

function deleteSignature() {
  formStore.setSignature(null)
  signaturePad.value.clear()
}

function saveSignature() {
  formStore.setLoading(true)
  setTimeout(() => {
    formStore.setSignature(signaturePad.value.save('image/jpeg'))
    formStore.setLoading(false)
    signatureModal.value = 'hidden'
  }, 500)
}

function submitForm() {
  if (formStore.isValidated()) {
    router.push('/success')
  }
}

const bankDropDown = ref('hidden')

function toggleBankDropDown() {
  if (bankDropDown.value == 'hidden') {
    bankDropDown.value = ''
  } else {
    bankDropDown.value = 'hidden'
  }
}

const signatureModal = ref('hidden')

function toggleSignatureModal() {
  if (signatureModal.value === 'hidden') {
    signatureModal.value = ''
  } else {
    signatureModal.value = 'hidden'
  }
}
</script>

<template>
  <section id="form_persetujuan">
    <form
      class="flex flex-col text-sm md:text-base gap-6 md:gap-10 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg"
    >
      <div>
        <div class="text-lg md:text-xl font-bold mb-3">{{ $t('message.formPersetujuan_1') }}</div>
        <div class="space-y-4">
          <div>
            <label
              for="nama_lengkap"
              class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_2') }}
            </label>
            <input
              v-model="formStore.namaLengkap"
              type="text"
              id="nama_lengkap"
              placeholder="Nama lengkap"
              class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]"
            />
          </div>
          <div>
            <label
              for="nomor_identitas"
              class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_3') }}
            </label>
            <input
              v-model="formStore.nomorIdentitas"
              type="number"
              id="nomor_identitas"
              placeholder="1234567890"
              class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]"
            />
          </div>
          <div>
            <div class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
              {{ $t('message.formPersetujuan_4') }}
            </div>
            <label
              for="upload_ktp"
              class="block rounded-lg bg-[#F8F8F8] border border-dashed border-[#D6D6D6] p-[18px] cursor-pointer"
            >
              <input
                id="upload_ktp"
                type="file"
                hidden
                @change="
                  (event) => {
                    formStore.setUploadKTP(event.target.files[0])
                  }
                "
              />
              <div class="flex items-center justify-center gap-2">
                <img
                  class="size-5 object-contain"
                  src="../../../assets/img/svg/upload.svg"
                  alt="Upload icon"
                />
                <div class="text-sm font-medium text-[#797979]">
                  {{ $t('message.formPersetujuan_5') }}
                </div>
              </div>
            </label>
            <div
              class="mt-3 bg-[#F8F8F8] border border-dashed border-[#D6D6D6] px-3 py-[18px] rounded-lg flex items-center justify-between gap-2"
            >
              <div class="flex items-center gap-2">
                <svg
                  class="text-[#080808] size-5"
                  data-slot="icon"
                  fill="none"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  ></path>
                </svg>
                <div class="text-[#0433FF] font-medium text-sm underline">
                  Foto_Identitas_KTP.png
                </div>
              </div>
              <div class="flex items-center gap-3">
                <img
                  class="cursor-pointer size-5"
                  src="../../../assets/img/svg/edit.svg"
                  alt="Edit icon"
                />
                <svg
                  class="cursor-pointer size-5 text-[#CA0A0A]"
                  data-slot="icon"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              for="nomor_npwp"
              class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_6') }}
            </label>
            <input
              v-model="formStore.nomorNPWP"
              type="number"
              id="nomor_npwp"
              placeholder="1234567890"
              class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]"
            />
          </div>
          <div>
            <div class="font-medium block after:content-['*'] after:text-[#E21717] mb-2">
              {{ $t('message.formPersetujuan_7') }}
            </div>
            <label
              for="upload_npwp"
              class="block rounded-lg bg-[#F8F8F8] border border-dashed border-[#D6D6D6] p-[18px] cursor-pointer"
            >
              <input
                id="upload_npwp"
                type="file"
                hidden
                @change="
                  (event) => {
                    formStore.setUploadNPWP(event.target.files[0])
                  }
                "
              />
              <div class="flex items-center justify-center gap-2">
                <img
                  class="size-5 object-contain"
                  src="../../../assets/img/svg/upload.svg"
                  alt="Upload icon"
                />
                <div class="text-sm font-medium text-[#797979]">
                  {{ $t('message.formPersetujuan_8') }}
                </div>
              </div>
            </label>
            <div
              class="mt-3 bg-[#F8F8F8] border border-dashed border-[#D6D6D6] px-3 py-[18px] rounded-lg flex items-center justify-between gap-2"
            >
              <div class="flex items-center gap-2">
                <svg
                  class="text-[#080808] size-5"
                  data-slot="icon"
                  fill="none"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  ></path>
                </svg>
                <div class="text-[#0433FF] font-medium text-sm underline">Foto_NPWP.png</div>
              </div>
              <div class="flex items-center gap-3">
                <img
                  class="cursor-pointer size-5"
                  src="../../../assets/img/svg/edit.svg"
                  alt="Edit icon"
                />
                <svg
                  class="cursor-pointer size-5 text-[#CA0A0A]"
                  data-slot="icon"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              for="nomor_wa"
              class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_9') }}
            </label>
            <div class="relative">
              <div
                class="absolute top-0 left-0 flex items-center gap-2 bg-[#F8F8F8] py-2.5 px-3 md:p-3 border border-[#D6D6D6] rounded-l"
              >
                <img
                  class="size-6"
                  src="../../../assets/img/svg/flag-indonesia.svg"
                  alt="Flag indonesia"
                />
                <svg
                  class="size-4 text-[#525252]"
                  data-slot="icon"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </div>
              <div
                class="absolute text-sm md:text-base text-[#525252] font-medium left-[84px] top-1/2 -translate-y-1/2"
              >
                +62
              </div>
              <input
                v-model="formStore.nomorWA"
                type="number"
                id="nomor_wa"
                placeholder="1234567890"
                class="w-full block rounded border border-[#D6D6D6] outline-none py-3 pr-3 pl-[119px] md:pl-[123px] placeholder:text-[#989898]"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-lg md:text-xl font-bold mb-3">{{ $t('message.formPersetujuan_10') }}</div>
        <div class="space-y-4">
          <div>
            <label for="nama_perusahaan" class="font-medium block mb-2"
              >{{ $t('message.formPersetujuan_11') }}
              <span class="text-[#989898]">{{ $t('message.formPersetujuan_12') }}</span></label
            >
            <input
              v-model="formStore.namaPerusahaan"
              type="text"
              id="nama_perusahaan"
              placeholder="Nama perusahaan"
              class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]"
            />
          </div>
          <div>
            <label
              for="nama_penanggung_jawab"
              class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_13') }}
            </label>
            <input
              v-model="formStore.namaPenanggungJawab"
              type="text"
              id="nama_penanggung_jawab"
              placeholder="Nama penanggung jawab"
              class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]"
            />
          </div>
          <div>
            <label for="email" class="font-medium block mb-2"
              >{{ $t('message.formPersetujuan_14') }}
              <span class="text-[#989898]">{{ $t('message.formPersetujuan_15') }}</span></label
            >
            <input
              v-model="formStore.email"
              type="text"
              id="email"
              placeholder="Alamat email"
              class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="text-lg md:text-xl font-bold mb-3">{{ $t('message.formPersetujuan_16') }}</div>
        <!-- bank dropdown -->
        <div class="space-y-4">
          <div @click="toggleBankDropDown()">
            <label class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_17') }}
            </label>
            <div class="relative dropdown">
              <div
                class="cursor-pointer dropdown-toggle flex items-center justify-between gap-2 w-full rounded border border-[#D6D6D6] outline-none p-3"
              >
                <div class="dropdown-text">{{ $t('message.formPersetujuan_18') }}</div>
                <svg
                  class="size-6"
                  data-slot="icon"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </div>
              <div
                :class="bankDropDown"
                class="absolute dropdown-menu top-[calc(100%+8px)] left-0 pt-4 px-4 w-full border border-[#EDEDED] rounded overflow-hidden bg-white z-20 shadow-[0_2px_5px_0px_rgba(8,8,8,0.04),0_10px_10px_0px_rgba(8,8,8,0.03),0_22px_13px_0_rgba(8,8,8,0.02),0_40px_16px_0_rgba(8,8,8,0.01),0_62px_17px_0_rgba(8,8,8,0)]"
              >
                <div class="relative mb-2">
                  <svg
                    class="absolute top-1/2 -translate-y-1/2 left-3 size-4 text-[#989898]"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    class="w-full text-sm block rounded border border-[#D6D6D6] outline-none pl-9 pr-3 py-2 bg-white placeholder:text-[#989898]"
                  />
                </div>
                <div class="-mx-4 max-h-[216px] overflow-y-auto">
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Syariah Indonesia')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Syariah Indonesia
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Rakyat Indonesia')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Rakyat Indonesia
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Tabungan Negara')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Tabungan Negara
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Central Asia')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Central Asia
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank CIMB Niaga')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank CIMB Niaga
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Syariah Indonesia')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Syariah Indonesia
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Rakyat Indonesia')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Rakyat Indonesia
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Tabungan Negara')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Tabungan Negara
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank Central Asia')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank Central Asia
                  </div>
                  <div
                    class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808]"
                    @click="
                      () => {
                        formStore.setNamaBank('Bank CIMB Niaga')
                        toggleBankDropDown()
                      }
                    "
                  >
                    Bank CIMB Niaga
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label
              for="nomor_rekening"
              class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_19') }}
            </label>
            <div class="relative">
              <input
                v-model="formStore.nomorRekening"
                type="text"
                id="nomor_rekening"
                placeholder="012345678912"
                class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898]"
              />
              <a
                href="#"
                class="text-[#0023BD] text-sm font-semibold absolute top-1/2 -translate-y-1/2 right-3"
                >{{ $t('message.formPersetujuan_20') }}</a
              >
            </div>
            <div class="mt-2 text-[#E21717] text-xs md:text-sm">
              {{ $t('message.formPersetujuan_21') }}
            </div>
          </div>
          <div>
            <label
              for="nama_pemilik_rekening"
              class="font-medium block after:content-['*'] after:text-[#E21717] mb-2"
              >{{ $t('message.formPersetujuan_22') }}
            </label>
            <input
              v-model="formStore.namaPemilikRekening"
              type="text"
              id="nama_pemilik_rekening"
              placeholder="-"
              disabled
              class="w-full block rounded border border-[#D6D6D6] disabled:bg-[#EDEDED] outline-none p-3 placeholder:text-[#989898]"
            />
          </div>
        </div>
      </div>
    </form>
    <div class="mt-4 bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
      <div class="font-bold text-xl after:content-['*'] after:text-[#E21717] mb-4">
        {{ $t('message.formPersetujuan_23') }}
      </div>
      <button
        @click="toggleSignatureModal()"
        class="cursor-pointer w-full flex items-center justify-center gap-2 h-[164px] bg-[#F4F6FF] border border-dashed border-[#0433FF] rounded-lg"
      >
        <img class="size-5" src="../../../assets/img/svg/edit.svg" alt="Edit icon" />
        <div class="text-sm font-medium text-[#525252]">{{ $t('message.formPersetujuan_24') }}</div>
      </button>
      <div
        class="mt-3 relative cursor-pointer flex items-center justify-center gap-2 h-[164px] border border-dashed border-[#0433FF] rounded-lg"
      >
        <img
          v-if="formStore.signature != null"
          class="w-36 h-full max-h-[108px] object-contain"
          :src="formStore.signature"
          alt="Signage"
        />
        <!-- <img class="size-5" src="../../../assets/img/svg/edit-2.svg" alt="Edit icon" /> -->
        <div class="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex items-center gap-4">
          <button class="flex items-center gap-2 cursor-pointer">
            <img class="size-5" src="../../../assets/img/svg/edit-2.svg" alt="Edit icon" />
            <div class="text-sm font-medium text-[#525252]">
              {{ $t('message.formPersetujuan_25') }}
            </div>
          </button>
          <!-- @click="deleteSignature()" -->
          <svg
            class="cursor-pointer size-5 text-[#CA0A0A]"
            data-slot="icon"
            fill="none"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
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
      v-if="route.hash == '#form_persetujuan'"
      @click="submitForm()"
      textButton="Submit"
    />
  </div>

  <!-- Signage modal -->

  <div
    :class="signatureModal"
    class="fixed modal top-0 left-0 w-screen h-screen bg-[#080808]/40 flex items-end md:items-center justify-center md:p-6"
  >
    <div
      class="modal-content bg-white rounded-t-2xl md:rounded-lg px-4 pt-4 pb-6 md:p-6 w-full md:w-[800px]"
    >
      <div class="flex items-center justify-between mb-5">
        <div class="text-lg md:text-xl font-semibold text-[#080808]">
          {{ $t('message.modal_3') }}
        </div>
        <button class="modal-close cursor-pointer size-5 md:size-6" @click="toggleSignatureModal()">
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
          class="w-full border border-[#EDEDED] h-[220px] flex items-center justify-center rounded-lg"
        >
          <Vue3Signature
            ref="signaturePad"
            :w="'752px'"
            h="220px"
            :disabled="false"
          ></Vue3Signature>
        </div>
        <div
          class="mt-3 bg-[#F8F8F8] border border-[#EDEDED] h-[220px] pt-5 md:pt-0 flex items-start md:items-center justify-center rounded-lg relative"
        >
          <img
            v-if="formStore.signature != null"
            class="size-full max-h-[150px] md:max-h-[180px] object-contain"
            :src="formStore.signature"
            alt="Signage"
          />
          <button
            class="absolute bottom-6 right-6 text-sm font-semibold text-[#CA0A0A]"
            @click="deleteSignature()"
          >
            {{ $t('message.modal_1') }}
          </button>
        </div>
      </div>
      <div class="flex items-stretch md:items-center justify-end flex-col md:flex-row gap-3">
        <button
          @click="toggleSignatureModal()"
          class="order-2 md:order-1 modal-close cursor-pointer rounded py-3 px-6 bg-white border border-[#B2B2B2] font-semibold text-[#080808]"
        >
          {{ $t('message.modal_2') }}
        </button>
        <button
          @click="saveSignature()"
          class="order-1 md:order-2 cursor-pointer rounded py-3 px-6 bg-[#EDEDED] font-semibold text-[#B2B2B2]"
        >
          <div v-if="formStore.loading == true" role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <p v-else>
            {{ $t('message.modal_3') }}
          </p>
        </button>
      </div>
    </div>
  </div>
</template>
