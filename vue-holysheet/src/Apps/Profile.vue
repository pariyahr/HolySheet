<template>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Profile</title>
</head>
<div :class="{ 'dark-mode': isDarkMode }">
<div class="bg-img">
    <div class="content">
        <ul class="navbar">
            <li><div class="active">
                <RouterLink to="/Home"> Home </RouterLink>
            </div></li>
            <li><div class="active">
                <RouterLink to="/Explore"> Explore </RouterLink>
            </div></li>
            <li><div class="active">
                <RouterLink to="/Add"> Add </RouterLink>
            </div></li>
            <li><div class="active">
                <RouterLink to="/Profile"> Profile </RouterLink>
            </div></li>
            <li><div class="active">
                <button @click="changeButtonText">{{ buttonText }}</button>
            </div></li>
        </ul>

    <div class="profile-header">
      <img class="profile-picture" src="../assets/profile-icon.jpg" alt="Profile Picture" />
    </div>
    <div class="inner_content" style ="margin-bottom: 10px">
        <li class="posts" style="list-style: none;">
          <div class="stat-number">500</div>
          <div class="stat-label">Posts</div>
        </li>
        <li class="followers" style="list-style: none;">
          <div class="stat-number">{{component.followers}}</div>
          <div class="stat-label">Followers</div>
        </li>
        <li class="followings" style="list-style: none;">
          <div class="stat-number">{{component.followings}}</div>
          <div class="stat-label">Followings</div>
        </li>
    </div>
    <div class="profile-details">
       <h1 class="username">{{component.username}}</h1>
    </div>
    <div class="container" style="position: absolute; top: 31%; left: 45.7%;">
        <div class="field" style="width: 150px;">
            <button v-on:click="vis" type="submit">edit profile</button>
        </div>
    </div>
    <form @submit="handleSubmit" method="POST" >
    <div v-if="visib" class="container" style="position: absolute; top: 40%; left: 39%;">
        <div class="field">
            <a1>Previous Username</a1>
            <input type="text" placeholder="Enter Previous Username" name="pre_username">
        </div>
        <div class="field">
            <a1>Username</a1>
            <input type="text" placeholder="Enter Username" name="username">
        </div>
        <div class="field">
            <a1>Password</a1>
            <input type="password" placeholder="Enter Password" name="password">
        </div>
        <div class="field1">
            <a1>Profile Picture</a1>
            <input type="file" id="myfile" name="myfile">
        </div>
        <div class="field">
            <button type="submit">Submit</button>
        </div>
    </div>
    </form>

    <div class="container" style="position: absolute; top: 15%; left: 77%;">
            <div class="field" style="width: 150px;">
                <a1>Saved</a1>
            </div>
        </div>

    <div class="scroll-scope" style="position: absolute; top: 22%; left: 71%; width: 20%;">
    <div class="scrollable-content">
      <!-- Your scrollable content goes here -->
      <!-- For example, a long list of items -->
      <ul class="ul1">
        <li class="li1" v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>


</div>

</div>
</div>
</html>
</template>

<script>
import axios from 'axios';

export default {
    name: "Profile_page",
    data() {
      return {
        visib: "",
        component: "",
        buttonText: 'Dark Mode',
        isTextChanged: false,
        isDarkMode: false,
        items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            // Add more items as needed
        ],
      };
    },
    mounted() {
        this.fetchComponents();
    },
    methods:{
        changeButtonText() {
            this.isDarkMode = !this.isDarkMode;
            this.isTextChanged = !this.isTextChanged;
            this.buttonText = this.isTextChanged ? 'Light Mode' : 'Dark Mode';
        },
        vis(){
            this.visib = "n";
        },
        async fetchComponents() {
            try {
                const response = await axios.get('/components/');
                this.component = response.data;
            } catch (error) {
                console.error('Error fetching components:', error);
            }
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

            axios.post('/components/new/', formData, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
                .then(response => {
                    // Handle success response
                    console.log(response.data.message);
                })
                .catch(error => {
                    // Handle error response
                    console.error(error);
                });

        }
    }
}

</script>

<style scoped src="../assets/css/home_page.css">
/* Light mode styles */
h1 {
  color: #333;
}

/* Dark mode styles */
.dark-mode {
  background-color: #222;
  color: #fff;
}

</style>