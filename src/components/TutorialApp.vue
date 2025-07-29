<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const timecount = ref('');
let intervalId: number;
let isOddMinute: boolean = true;
let name = ref('');
let isLiveinph = ref(false);
let message = ref('');
let gender = ref('');
let selectedItems = ref('');

const props = defineProps({
  title: {
    type: String,
    default: 'No Title Provided'
  }
})

let Students: Array<{ name: string; grade: string; address: string }> = [
  { name: 'John', grade: '2', address: 'Odlot, Bogo City' },
  { name: 'Alfred', grade: '4', address: 'Marangog, Bogo City' },
  { name: 'James', grade: '7', address: 'Libertad, Bogo City' }
]

onMounted(() => {
  intervalId = window.setInterval(() => {
    timecount.value = new Date().toLocaleTimeString()
    const currentMinute = new Date().getMinutes();
    if (currentMinute % 2 === 0) {
      isOddMinute = false;
    }
    else{
      isOddMinute = true;
    }
  }, 1000)
})

// onUpdated(() => {
//   console.log('Time updated:', timecount.value);
// })

onUnmounted(() => {
  console.log('Component unmounted, clearing interval');
  clearInterval(intervalId)
})

const toggleInputName = (e: Event) => {
  const target = e.target as HTMLElement;
  target.classList.toggle('active');
}


</script>

<template>
    <h2>{{ title }}</h2>
      <h4>
      <a href="#" class="timer" rel="noopener">{{timecount}}</a>
      </h4>
      <!-- <p v-if="isOddMinute">The minute is Odd!</p>
      <p v-else>The minute is Even!</p> -->
      <p>The minute is {{ isOddMinute ? 'Odd' : 'Even' }}!</p>
      <ul class="students">
        <li v-for="student in Students" :key="student.name">
          <p class="studentinfo">Name: <span>{{ student.name }}&nbsp;</span>
            Grade: <span>{{ student.grade }}&nbsp;</span>
            Address: <span>{{ student.address }}&nbsp;</span>
          </p>
          
        </li>
      </ul> 
      <div class="inputform">
        <input v-model="name" type="text" @mouseenter="toggleInputName($event)" @mouseleave="toggleInputName($event)" placeholder="Enter your name" />
        <textarea v-model="message" @mouseenter="toggleInputName($event)" @mouseleave="toggleInputName($event)" placeholder="Enter message"></textarea>
        <div class="livephcheck">
          <input type="checkbox" v-model="isLiveinph" />
          <label>Living in Philippines</label>
          <br/>
        </div>
        <div class="gendercheck">
          <input type="radio" value="Male" v-model="gender" /> Male
          <input type="radio" value="Female" v-model="gender" /> Female
        </div>
        <br/>
        <select v-model="selectedItems" @mouseenter="toggleInputName($event)" @mouseleave="toggleInputName($event)">
          <option value="" selected disabled>Please choose a fruit</option>
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Cherry">Cherry</option>
        </select>
        

        <br/><br/>
        <p v-if="name">Hello, <span>{{ name }}</span></p>
        <p v-if="message">Welcome, <span>{{ message }}</span>!</p>
        <p v-if="isLiveinph">Awesome!, <span>So you are living here in the Philippines</span>!</p>
        <p v-if="gender">Nice to meet you <span>{{ gender == 'Male' ? 'great looking man!' : 'beautiful lady!' }}</span></p>
        <p v-if="selectedItems">Cool! We will delivery a <span>{{ selectedItems }}</span> to you later.</p>

      </div>
</template>

<style>
a.timer{
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: #00bd7e;
  display: flex;
  justify-content: center;
}
.students{
  list-style: none;
  margin-top: 1rem;
  padding: 1rem;
  max-width: 600px;
  border: 1px solid var(--color-border);
}
.studentinfo {
  font-size: 1.2rem;
}
.studentinfo span {
  font-weight: 600;
  color: #00bd7e;
}
.inputform {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  max-width: 508px;
  width: 100%;
}
.inputform input[type="text"], .inputform textarea, .inputform select,
 .inputform input:not([type="checkbox"], [type="radio"]) {
  width: 256px;
  padding: 0.5rem;
  font-size: 1.2rem;
  background: var(--color-border);
  border: none;
  outline: none;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: width 0.5s ease;
}
.inputform input.active, .inputform textarea.active, .inputform select.active {
  width: 100%;
}
.inputform p {
  font-size: 1.2rem;
  color: var(--color-text);
}
.inputform p span {
  font-weight: 600;
  color: #00bd7e;
}
.livephcheck, .gendercheck{
  display: flex;
  gap: 12px;
  justify-content: start;
  margin-top: 1rem;
}
</style>