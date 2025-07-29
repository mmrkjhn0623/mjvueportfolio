<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

</script>
<template>
    <section id="contact">
        <div class="container">
            <div class="head">
                <h2>Let's Work Together</h2>
                <p class="contact-info">Have an idea? I’d love to help you bring it to life. Let's connect!</p>
            </div>
            <form id="contact-form" action="#" method="post">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="name">Message</label>
                    <textarea name="message" id="message" placeholder="Enter your message" required></textarea>
                </div>
                <div class="form-group">
                    <input type="submit" value="Send Message">
                </div>
            </form>
        </div>
    </section>
</template>