<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';
import axios from 'axios';

interface Project {
    id:string,
    name: string,
    url: string,
    image: string,
    category: string
}
const dataProjects = ref<Project[]>([]);

onMounted(async () => {
    try {
        const response = await axios.get('https://portfolio-expressjs-on-vercel.vercel.app/allprojects');
        dataProjects.value = response.data;
        if(dataProjects.value.length) {
            document.getElementById('projectsph')?.remove();
        }
        scrollTo(0, 0);
    } catch (err) {
        console.error('Error fetching all projects:', err);
    }
});



// Group projects by category
const projByCateg = computed(() => {
  return dataProjects.value.reduce((acc: Record<string, Project[]>, project) => {
    const category = project.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(project);
    return acc;
  }, {});
});

</script>

<template>
    <section class="projects-head">
        <div class="container">
            <h1>Projects</h1>
            <p>Check out some of my recent projects that showcase my skills and creativity.</p>
        </div>
    </section>
    <section v-for="(projects, category) in projByCateg" :key="category" id="projects" class="project-list">
        <div class="projbycateg">
            <h2>{{ category }}</h2>
            <div class="project-items">
                <a v-for="proj in projects" :key="proj.id" class="prj-item" :href="proj.url" target="_blank">
                    <img loading="lazy" :src="proj.image" :title="proj.name">
                </a>
            </div>
        </div>
    </section>
    <section id="projectsph" class="project-list">
        <div class="projbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="project-items">
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
            </div>
        </div>
        <div class="projbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="project-items">
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
            </div>
        </div>
        <div class="projbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="project-items">
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
            </div>
        </div>
        <div class="projbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="project-items">
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
                <a class="prj-item loadingph" href="#"></a>
            </div>
        </div>
    </section>
</template>