<template>
    <router-view/>
<head>
    <meta charset="UTF-8">
    <title>Register</title>
</head>

<div class="bg-img">
    <div class= "content">
        <header> Register </header>


        <form @submit="handleSubmit" method="POST" >

<!--            {% csrf_token %}-->
            <div class="container">
                <div class="field">
                    <a1>First Name</a1>
                    <input type="text" placeholder="Enter Firstname" name="first_name" required>
                </div>
                <div class="field">
                    <a1>Last Name</a1>
                    <input type="text" placeholder="Enter Lastname" name="last_name" required>
                </div>
                <div class="field">
                    <a1>Email</a1>
                    <input type="email" placeholder="Enter Email" name="email" required>
                </div>
                <div class="field">
                    <a1>Username</a1>
                    <input type="text" placeholder="Enter Username" name="username" required>
                </div>
                <div class="field">
                    <a1>Password</a1>
                    <input type="password" placeholder="Enter Password" name="password" required>
                </div>
                <div class="field">
                    <a1>Confirm</a1>
                    <input type="password" placeholder="Confirm Password" name="confirm_password" required>
                </div>
                <div class="field">
                    <a1>Phone Number</a1>
                    <input type="number" placeholder="ex. 09121234567" name="phone_number" required>
                </div>
                <div class="field">
                    <a1>Gender</a1>
                    <select type="text"  name="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="pns">Prefer not to say</option>
                    </select>
                </div>
                <div class="field">
                    <button type="submit">Register</button>
                </div>
                <div class="copyright">
                    <a href="/first_page" style="text-decoration: none; color: gray">back</a>
                </div>
<!--                {% if messages %}-->
<!--                {% for message in messages %}-->
<!--                    {% if message.tags %}  <script>alert("{{ message }}")</script> {% endif %}-->
<!--                {% endfor %}-->
<!--            {% endif %}-->
            </div>
        </form>
    </div>
</div>
</template>

<script>

import router from "@/router";
import axios from "axios";

window.csrf_token = "{{ csrf_token() }}"
export default {
    name: "Register_page",

    data() {
        return {
            csrfToken: null
        }
    },


    methods: {
        redirectToLogin() {
            // Code for redirecting to the login page
        },

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
            axios.post('/register/', formData, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
                .then(response => {
                    // Handle success response
                    console.log(response.data.message);
                    router.push('/login');
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

