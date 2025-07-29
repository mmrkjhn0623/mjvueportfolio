<script setup lang="ts">
import { ref, reactive } from 'vue'

// Single reactive input
const name = ref('')

// Grouped state data
const state = reactive({
  name: '',
  submitted: false,
  timestamp: ''
})

const submitForm = () => {
  state.name = name.value
  state.submitted = true
  state.timestamp = new Date().toLocaleString()
}
</script>

<template>
  <div class="form">
    <h2>Register</h2>
    <div class="input-group">
        <label for="name">Name:
            <input id="name" v-model="name" type="text" placeholder="Enter your name" />
        </label>
        <button @click="submitForm">Submit</button>
    </div>

    <div v-if="state.submitted">
      <h3>Submitted Data:</h3>
      <p>Name: {{ state.name }}</p>
      <p>Time: {{ state.timestamp }}</p>
    </div>
  </div>
</template>

<style scoped>
.form {
    max-width: 100%;
    margin: 20px auto;
    padding: 16px;
    border: 1px solid var(--color-border);
    border-radius: 0px;
    font-size: 1.2rem;
}
.input-group{
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
}
input {
    width: 256px;
    padding: 0.5rem;
    font-size: 1.2rem;
    background: var(--color-border);
    border: none;
    outline: none;
    color: var(--color-text);
    border-radius: 4px 0px 0px 4px;
    transition: width 0.5s ease;
}
button {
  background-color: #00bd7e;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>