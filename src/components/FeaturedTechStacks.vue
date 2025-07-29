<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue';
import axios from 'axios';

interface Tool {
    name: string,
    url: string,
    image: string
}
const dataTools = ref<Tool[]>([]);

onMounted(async () => {
    try {
        const response = await axios.get('https://portfolio-expressjs-on-vercel.vercel.app/featuredtechstacks');
        dataTools.value = response.data;
    } catch (err) {
        console.error('Error fetching tech stacks:', err);
    }
    console.log(dataTools.value);
});

</script>
<template>
    <section id="techstacks" class="techstacks-list">
        <h2>Tech Stacks</h2>
        <div v-if="dataTools.length" class="tech-items" id="featuredtechstacks">
            <a class="tech-item" v-for="tool in dataTools" :key="tool.name" :href="tool.url" target="_blank">
                <img loading="lazy" :src="tool.image" :title="tool.name">
            </a>
            <a class="prj-item see-more" href="#">See More</a>
        </div>
        <div v-else class="tech-items" id="featuredtechstacks">
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
            <a class="tech-item loadingph" href="#"></a>
        </div>
    </section>
</template>