<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated, watch } from 'vue'

const workDesc = ref<string>('');

watch(workDesc, (newVal) => {
    const companyBox = document.querySelector(`.company-box-${newVal}`);
    companyBox?.classList.toggle('expanded');
});

function toggleWorkDesc(offset: string) {
    const companyBox = document.querySelector(`.company-box-${offset}`);
    if (companyBox) {
        companyBox.classList.toggle('expanded');
    }
}


</script>
<template>
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Hello! I'm <br class="formobile"/><span class="accent">Mark John</span>,<br class="formobile"/> Web Developer</h1>
                <p class="description">I am looking to continue my career to explore more ideas. I have excellent design & coding skills, as well as an ability to convert client requirements into an exciting online applications.</p>
                <p class="cta">
                    <a id="sendmessage-action" class="sendmessage" href="#contact">
                        <svg width="20" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.1057 2.79061C24.1057 1.50728 23.0557 0.457275 21.7724 0.457275H3.10573C1.8224 0.457275 0.7724 1.50728 0.7724 2.79061V16.7906C0.7724 18.0739 1.8224 19.1239 3.10573 19.1239H21.7724C23.0557 19.1239 24.1057 18.0739 24.1057 16.7906V2.79061ZM21.7724 2.79061L12.4391 8.62394L3.10573 2.79061H21.7724ZM21.7724 16.7906H3.10573V5.12394L12.4391 10.9573L21.7724 5.12394V16.7906Z" fill="#fff"></path></svg>
                        Message Me 
                    </a>
                    <router-link class="projects" to="/projects">Projects</router-link>
                    <router-link class="techstacks" to="/techstacks">Tech Stacks</router-link>
                    <a class="get-a-resume" href="https://firebasestorage.googleapis.com/v0/b/mj-portfolio-55a6e.firebasestorage.app/o/Resume%2FMarkJohnCV.pdf?alt=media&token=3c9550dd-0e73-46c5-954a-87bc0163b96b" target="_blank">
                            Get A Copy Of My Resume
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    </section>
    <section id="career-info" class="career-info">
        <span>
            <h2>Career Info</h2>
        </span>
    </section>
    <section id="companies" class="companies">
        <div class="company-box company-box-1">
            <h2>Cloudesk Pty Ltd</h2>
            <p class="work-details">Full Stack Developer<br/>January 2025 - Present</p>
            <p class="work-desc">
                As a Full Stack Developer, I am responsible for designing, developing, and maintaining both front-end and back-end components of web applications.
            </p>
            <span class="work-desc-toggle learn-more"><a @click="toggleWorkDesc('1')">Read More</a></span>
            <span class="work-desc-toggle show-less"><a @click="toggleWorkDesc('1')">Show Less</a></span>
        </div>
        <div class="company-box company-box-2">
            <h2>RipeConcepts</h2>
            <p class="work-details">WordPress Developer<br/>July 2022 - September 2024</p>
            <p class="work-desc">
                With my expertise in coding, design, and functionality, I create visually appealing and user-friendly websites that align with our client's needs and objectives.
            </p>
            <span class="work-desc-toggle learn-more"><a @click="toggleWorkDesc('2')">Read More</a></span>
            <span class="work-desc-toggle show-less"><a @click="toggleWorkDesc('2')">Show Less</a></span>
        </div>
        <div class="company-box company-box-3">
            <h2>Freelancing</h2>
            <p class="work-details">Web/Wordpress Developer<br/>September 2020 - June 2022</p>
            <p class="work-desc">
                As a freelancer, I offer professional services in web development, providing tailored solutions to clients seeking to establish or enhance their online presence.
            </p>
            <span class="work-desc-toggle learn-more"><a @click="toggleWorkDesc('3')">Read More</a></span>
            <span class="work-desc-toggle show-less"><a @click="toggleWorkDesc('3')">Show Less</a></span>
        </div>
    </section>
</template>