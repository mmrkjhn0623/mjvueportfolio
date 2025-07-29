<script setup lang="ts">
import Login from '../components/UserLogin.vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <section class="tutorial">
      <Login />
  </section>
</template>