<script setup lang="ts">

const props = defineProps<{
  msg: string,
  additionalInfo?: string
}>()

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{additionalInfo}}
      <nav>
        <router-link to="/" rel="noopener">Home</router-link> |
        <router-link to="/tutorial/1" rel="noopener">Tutorial 1</router-link> |
        <router-link to="/tutorial/2" rel="noopener">Tutorial 2</router-link>
      </nav>
    </h3>  
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
a.router-link-active{
  background-color: #00bd7e;
  color: #fff;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
