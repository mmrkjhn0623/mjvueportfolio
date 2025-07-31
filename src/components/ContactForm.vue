<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated, watch } from 'vue'
import emailjs from '@emailjs/browser'

const sendMessageText = ref('Send Message');
const errorName = ref('');
const errorEmail = ref('');
const errorMessage = ref('');
const name = ref('');
const email = ref('');
const message = ref('');

const SendMessage = (e: Event) => {
    e.preventDefault();
    // Validate form fields

    if (!name.value) {
        document.getElementById("name")?.classList.add('error');
        errorName.value = "Name is required.";
    }
    if(!validateEmail()) {
        document.getElementById("email")?.classList.add('error');
        errorEmail.value = "Invalid email address.";
    }
    if (!email.value){
        document.getElementById("email")?.classList.add('error');
        errorEmail.value = "Email is required.";
    }
    if (!message.value){
        document.getElementById("message")?.classList.add('error');
        errorMessage.value = "Message is required.";
    }

    if (errorName.value || errorEmail.value || errorMessage.value) {
        return;
    }
    else{
        sendMessageText.value = "Sending...";
        (e.target as HTMLButtonElement).disabled = true;
        emailjs.send(
        "service_ar0ifgb",
        "template_tgio32o",
        {
            to_name: "MJ",
            from_name: name.value,
            message: message.value,
            reply_to: email.value
        },
        {
            publicKey: "lR9LmmL0XNeKWf5V5",
        }
        )
        .then(() => {
            setTimeout(() => {
                name.value = '';
                email.value = '';
                message.value = '';
                errorName.value = '';
                errorEmail.value = '';
                errorMessage.value = '';

                const popupMessage = `
                <div class="overlay">
                    <div class="popup">
                        <button class="popup-close" id="popup-close" onclick="document.querySelector('.overlay').remove();">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#252c38" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M6 6L18 18" stroke="#252c38" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </button>
                        <h3 class="popup-heading">Message Successfully Sent</h3>
                        <p class="popup-message">Your message has been sent successfully! I appreciate your interest and will get back to you shortly.</p>
                    </div>
                </div>
                `;
                document.body.insertAdjacentHTML('beforeend', popupMessage);
                sendMessageText.value = "Send Message";
                (e.target as HTMLButtonElement).disabled = false;
            }, 1000);
        })
        .catch((error) => {
                console.error("Error sending message:", error);
                sendMessageText.value = "Send Message";
                alert("Failed to send message. Please try again later.");
        });
    }
    
  };
  const toggleError = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.classList.contains('error')) {
        target.classList.remove('error');
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value)) {
        return true;
    } else {
        return false;
    }
  }

</script>
<template>
    <section id="contact">
        <div class="container">
            <div class="head">
                <h2>Let's Work Together</h2>
                <p class="contact-info">Have an idea? I’d love to help you bring it to life. Let's connect!</p>
            </div>
            <form id="contact-form" action="#" method="post" @submit="SendMessage">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" v-model="name" @keyup="errorName = '';toggleError($event)">
                    <p class="errortext" v-if="errorName">{{ errorName }}</p>
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email" v-model="email" @keyup="errorEmail = '';toggleError($event)">
                    <p class="errortext" v-if="errorEmail">{{ errorEmail }}</p>
                </div>
                <div class="form-group">
                    <label for="name">Message</label>
                    <textarea name="message" id="message" placeholder="Enter your message" v-model="message" @keyup="errorMessage = '';toggleError($event)"></textarea>
                    <p class="errortext" v-if="errorMessage">{{ errorMessage }}</p>
                </div>
                <div class="form-group">
                    <input type="submit" :value="sendMessageText" class="btn">
                </div>
            </form>
        </div>
    </section>
</template>