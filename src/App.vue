<script setup lang="ts">
import logo from './assets/logo.svg'
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Tutorial from "./components/TutorialApp.vue";
import Userform from "./components/Userform.vue";
import FullNameWatcher from "./components/FullNameWatcher.vue";
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

</script>

<template>
  <div class="container">
    <header>
    <div class="wrapper">
      <img
      :src="logo"
      alt="Vue logo"
      class="logo"
      width="125"
      height="125"
    />
      <HelloWorld msg="Naur Way!" additionalInfo="This is a sample additional information." />
    </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
  <footer>
  </footer>
</template>

<style scoped>
.container{
  grid-template-columns: 1fr;
}
header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.tutorial{
  max-width: 560px;
  margin: 0px auto 120px;
}
@media (min-width: 1024px) {
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
  }
  header {
    display: flex;
    flex-direction: column  ;
    justify-content: center;
    min-width: 610px;
  }
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column  ;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
