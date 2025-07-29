<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue';
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
    localStorage.removeItem('auth')
    router.replace('/login')
}
</script>

<template>
    <router-view />
    <a href="#" @click.prevent="logout">Logout</a>
</template>
