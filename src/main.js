import './assets/css/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { IDLang } from './assets/localization/id'
import Vue3Signature from 'vue3-signature'
import { ENLang } from './assets/localization/en'

export const customLocalization = createI18n({
  fallbackLocale: 'id',
  legacy: false, // must set to `false`
  locale: 'id',
  messages: {
    id: {
      message: IDLang,
    },
    en: {
      message: ENLang,
    },
  },
})

const app = createApp(App)
app.use(customLocalization)
app.use(Vue3Signature)
app.use(createPinia())
app.use(router)
app.mount('#app')
