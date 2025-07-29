<script setup lang="ts">
import logo from './assets/logo.svg'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

