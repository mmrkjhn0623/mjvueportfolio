<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';

interface TechStack {
    id:string,
    name: string,
    url: string,
    image: string,
    category: string
}
const dataTechStacks = ref<TechStack[]>([]);

onMounted(async () => {
    try {
        const response = await axios.get('https://portfolio-expressjs-on-vercel.vercel.app/alltechstacks');
        dataTechStacks.value = response.data;
        if(dataTechStacks.value.length) {
            document.getElementById('techstacksph')?.remove();
        }
        scrollTo(0, 0);
    } catch (err) {
        console.error('Error fetching all tech stacks:', err);
    }
});

// Group tech stacks by category
const techByCateg = computed<Record<string, TechStack[]>>(() => {
  return dataTechStacks.value.reduce((acc: Record<string, TechStack[]>, tech) => {
    const category = tech.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(tech);
    return acc;
  }, {});
});

</script>

<template>
    <section class="techstacks-head">
        <div class="container">
            <h1>Tech Stacks</h1>
            <p>Here are some of the technologies I work with.</p>
        </div>
    </section>
    <section v-for="(techs, category) in techByCateg" :key="category" id="techstacks" class="techstacks-list">
        <div class="techbycateg">
            <h2>{{ category }}</h2>
            <div class="tech-items">
                <a v-for="tech in techs" :key="tech.id" class="tech-item" :href="tech.url" target="_blank">
                    <img loading="lazy" :src="tech.image" :title="tech.name">
                </a>
            </div>
        </div>
    </section>
    <section id="techstacksph" class="techstacks-list">
        <div class="techbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="tech-items">
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
            </div>
        </div>
        <div class="techbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="tech-items">
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
            </div>
        </div>
        <div class="techbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="tech-items">
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
            </div>
        </div>
        <div class="techbycateg">
            <h2 class="headingph loadingph"></h2>
            <div class="tech-items">
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
                <a class="tech-item loadingph" href="#"></a>
            </div>
        </div>
    </section>
</template>