<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue';

const year = ref(new Date().getFullYear());
onMounted(() => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = year.value.toString();
    }
});
</script>
<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <p>&copy; <span id="current-year">2020</span> <a href="#">mjwebdev.online</a>. All rights reserved.</p>
                <p>Designed and Developed by <a href="https://mjwebdev.online" target="_blank">Mark John</a></p>
            </div>
        </div>
    </footer>
</template>