<template>
  <head>
    <meta charset="UTF-8">
    <title>login page</title>
  </head>
  <div class="bg-img">
      <div class="stacked-content">
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
            </form>
        </div>
        <div v-if="errorMessage" class="content" style="margin-top: 10px;padding: 15px; vertical-align: center">
            <p class="error-message" style="color: red">{{ errorMessage }}</p>
        </div>
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
    data() {
      return {
        errorMessage: "", // Add a data property to hold the error message
      };
    },
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
                    router.push('/explore');
                })
                .catch(error => {
                    // Handle error response
                    if (error.response && error.response.status === 401) {
                      this.errorMessage = "Username or password incorrect"; // Set the error message
                    } else {
                      this.errorMessage = "An error occurred. Please try again."; // Set a generic error message
                    }
                    console.error(error);
                });

        }
    }
}
</script>

<style scoped src="../assets/css/first_page.css">

.error-message {
  color: red;
}
</style>