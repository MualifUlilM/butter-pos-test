<script setup>
import FooterComponent from './components/FormViewComponents/Footer/FooterComponent.vue'
import HeaderComponent from './components/FormViewComponents/Header/HeaderComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <body class="bg-[#F8F8F8] min-h-screen flex flex-col justify-between font-inter">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </body>
</template>
