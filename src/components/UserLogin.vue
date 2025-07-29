<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Refs for individual fields
const user = ref('');
const pwd = ref('');
const response = ref('');
const isLoggedIn = computed(() => localStorage.getItem('auth') === 'yes');

// Computed response
const validateLogin = () => {
    if (user.value == 'mmrkjhn' && pwd.value == 'Dvplicadzswe06') {
        localStorage.setItem('auth', 'yes');
        response.value = 'Login successful! You can now access the tutorials...';
        router.replace('/tutorial/1'); // Redirect to the first tutorial
    }
    else{
        response.value = 'Invalid username or password.';
    }
}

// Watch fullName and log changes
// watch(fullName, (newVal, oldVal) => {
//   console.log(`🟡 fullName changed from "${oldVal}" to "${newVal}"`)
// })
</script>

<template>
  <div v-if="!isLoggedIn" class="card">
    <h2>Login User</h2>
    
    <label>
      <span class="input-label">Username:</span>
      <input v-model="user" />
    </label>

    <label>
      <span class="input-label">Password:</span>
      <input v-model="pwd" type="password" />
    </label>
    <button @click="validateLogin">Submit</button>

    <p><strong>{{ response }}</strong></p>
  </div>
  <div v-else>
    <h1>You are already logged in.</h1>
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
  display: flex;
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
.input-label {
    min-width: 96px;
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