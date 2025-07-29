<script setup lang="ts">
import Tutorial from '../components/TutorialApp.vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <section class="tutorial">
      <Tutorial :title="title" />
  </section>
</template>