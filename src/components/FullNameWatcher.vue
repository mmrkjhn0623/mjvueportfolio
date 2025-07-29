<script setup>
import { ref, computed, watch } from 'vue'

// Refs for individual fields
const firstName = ref('Mark');
const lastName = ref('John');
const fullName = ref('');

// Computed full name
const updatefullName = () => {
  fullName.value = `${firstName.value} ${lastName.value}`
}

// Watch fullName and log changes
watch(fullName, (newVal, oldVal) => {
  console.log(`🟡 fullName changed from "${oldVal}" to "${newVal}"`)
})
</script>

<template>
  <div class="card">
    <h2>User Input</h2>
    
    <label>First Name:
      <input v-model="firstName" />
    </label>
    
    <label>Last Name:
      <input v-model="lastName" />
    </label>
    <button @click="updatefullName">Update FullName</button>

    <p>Computed Full Name: <strong>{{ fullName }}</strong></p>
  </div>
</template>

<style scoped>
.card {
  max-width: 100%;
  margin: 20px auto;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 0px;
  font-size: 1.2rem;
}
label {
  display: block;
  margin-bottom: 8px;
}
input {
    width: 256px;
    padding: 0.5rem;
    font-size: 1.2rem;
    background: var(--color-border);
    border: none;
    outline: none;
    color: var(--color-text);
    border-radius: 4px;
    transition: width 0.5s ease;
}
button {
  background-color: #00bd7e;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>