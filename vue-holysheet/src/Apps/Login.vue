<template>
  <head>
    <meta charset="UTF-8">
    <title>login page</title>
  </head>
  <div class="bg-img">
      <div class="content">
          <header> Login </header>
          <form @submit="handleSubmit" method="POST" >
<!--              {% csrf_token %}-->
              <div class="container">
                  <div class="field">
                      <a1>Username</a1>
                      <input type="text" placeholder="Enter Username" name="username" required>
                  </div>
                  <div class="field">
                      <a1>Password</a1>
                      <input type="password" placeholder="Enter Password" name="password" required>
                  </div>
                  <div class="field">
                      <button type="submit">Login</button>
                  </div>

                  <p>Forgot <a href="#">password?</a></p>
                  <div class="copyright">
                      <a> <RouterLink to="/first_page"> back </RouterLink></a>
                  </div>
              </div>
<!--              {% if messages %}-->
<!--                  {% for message in messages %}-->
<!--                      {% if message.tags %}  <script>alert("{{ message }}")</script> {% endif %}-->
<!--                  {% endfor %}-->
<!--              {% endif %}-->

          </form>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import {RouterLink} from "vue-router";

export default {
    name: "Login_page",
    components: {RouterLink},
    methods:{
        handleSubmit(event) {
            event.preventDefault();

            // Retrieve form data
            const formData = new FormData(event.target);

            // Set CSRF token in form data

            // Send a POST request to the Django backend
            axios.defaults.headers.common = {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': window.csrf_token
            };
            axios.post('/login/', formData, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
                .then(response => {
                    // Handle success response
                    console.log(response.data.message);
                    router.push('/home_page');
                })
                .catch(error => {
                    // Handle error response
                    console.error(error);
                });
        }
    }
}
</script>

<style scoped src="../assets/css/first_page.css">


</style>