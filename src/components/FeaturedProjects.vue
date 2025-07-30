<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, onUpdated } from 'vue';
import axios from 'axios';

interface Project {
    name: string,
    url: string,
    image: string
}
const dataProjects = ref<Project[]>([]);

onMounted(async () => {
    try {
        const response = await axios.get('https://portfolio-expressjs-on-vercel.vercel.app/featuredprojects');
        dataProjects.value = response.data;
    } catch (err) {
        console.error('Error fetching featured projects:', err);
    }
});

</script>
<template>
  <section id="projects" class="project-list">
        <h2>Projects</h2>
        <div v-if="dataProjects.length" class="project-items" id="featuredprojects">
            <a class="prj-item" v-for="project in dataProjects" :key="project.name" :href="project.url" target="_blank">
                <img loading="lazy" :src="project.image" :title="project.name">
            </a>
            <router-link class="prj-item see-more" to="/projects">See More</router-link>
        </div>
        <div v-else class="project-items" id="featuredprojects">
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
            <a class="prj-item loadingph" href="#"></a>
        </div>
    </section>
</template>
