import { defineStore } from 'pinia'
import { ref } from 'vue'

export const formStoreData = defineStore('formStoreData', () => {
  const namaLengkap = ref(null)
  const nomorIdentitas = ref(null)
  const uploadKTP = ref(null)
  const nomorNPWP = ref(null)
  const uploadNPWP = ref(null)
  const nomorWA = ref(null)
  const namaPerusahaan = ref(null)
  const namaPenanggungJawab = ref(null)
  const email = ref(null)
  const namaBank = ref(null)
  const nomorRekening = ref(null)
  const signature = ref(null)
  const loading = ref(false)

  function setNamaLengkap(newValue) {
    namaLengkap.value = newValue
  }
  function setNomorIdentitas(newValue) {
    nomorIdentitas.value = newValue
  }
  function setUploadKTP(newValue) {
    uploadKTP.value = newValue
  }
  function setNomorNPWP(newValue) {
    nomorNPWP.value = newValue
  }
  function setUploadNPWP(newValue) {
    uploadNPWP.value = newValue
  }
  function setNomorWA(newValue) {
    nomorWA.value = newValue
  }
  function setNamaPerusahaan(newValue) {
    namaPerusahaan.value = newValue
  }
  function setNamaPenanggungJawab(newValue) {
    namaPenanggungJawab.value = newValue
  }
  function setEmail(newValue) {
    email.value = newValue
  }
  function setNamaBank(newValue) {
    namaBank.value = newValue
  }
  function setNomorRekening(newValue) {
    nomorRekening.value = newValue
  }
  function setSignature(newValue) {
    signature.value = newValue
  }
  function setLoading(newValue) {
    loading.value = newValue
  }

  function isValidated() {
    if (
      namaLengkap.value == null ||
      nomorIdentitas.value == null ||
      uploadKTP.value == null ||
      nomorNPWP.value == null ||
      uploadNPWP.value == null ||
      nomorWA.value == null ||
      namaPerusahaan.value == null ||
      namaPenanggungJawab.value == null ||
      email.value == null ||
      namaBank.value == null ||
      nomorRekening.value == null ||
      signature.value == null
    ) {
      alert('Please fill the empty field')
      return false
    } else {
      return true
    }
  }

  return {
    namaLengkap,
    nomorIdentitas,
    uploadKTP,
    nomorNPWP,
    uploadNPWP,
    nomorWA,
    namaPerusahaan,
    namaPenanggungJawab,
    email,
    namaBank,
    nomorRekening,
    signature,
    loading,
    setNamaLengkap,
    setNomorIdentitas,
    setUploadKTP,
    setNomorNPWP,
    setUploadNPWP,
    setNomorWA,
    setNamaPerusahaan,
    setNamaPenanggungJawab,
    setEmail,
    setNamaBank,
    setNomorRekening,
    setSignature,
    setLoading,
    isValidated,
  }
})
