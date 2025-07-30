<script setup lang="ts">
import HeroAndCareer from '../components/HeroAndCareer.vue';
import FeaturedProjects from '../components/FeaturedProjects.vue';
import FeaturedTechStacks from '../components/FeaturedTechStacks.vue';
import ContactForm from '../components/ContactForm.vue';
import { onMounted, onUnmounted, ref } from 'vue';

onMounted(() => {
    scrollTo(0, 0);
});
</script>

<template>
    <HeroAndCareer />
    <FeaturedProjects />
    <FeaturedTechStacks />
    <ContactForm />
</template>
