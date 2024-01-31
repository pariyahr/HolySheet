<template>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Profile</title>
</head>
<div :class="{ 'dark-mode': isDarkMode }">
<div class="bg-img" v-for="component in components" :key="component.username">
    <div class="content">
        <ul class="navbar">
            <li><div class="active">
                <RouterLink to="/Explore"> Explore </RouterLink>
            </div></li>
            <li><div class="active" v-if="visib2">
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
    <div class="inner_content" style ="margin-bottom: 10px" v-if="visib2">
        <li class="posts" style="list-style: none;">
          <div class="stat-number">{{component.posts}}</div>
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
            <a1>Username</a1>
            <input type="text" placeholder="Enter Username" name="username" required>
        </div>
        <div class="field">
            <a1>Password</a1>
            <input type="password" placeholder="Enter Password" name="password" required>
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

    <div class="trending-sheets" style="margin-top: 20px; width: 20%; position: absolute; top: 20%; left: 71%;">
        <div class="scroll-scope" style="padding: 20px">
            <ul1>
                <li1 v-for="sheet in trendingSheets" :key="sheet.id" @click="goToSheetPage()">
                    <sheet-display :sheet="sheet"></sheet-display>
                </li1>
            </ul1>
        </div>
    </div>

  </div>

</div>

</div>

</html>
</template>

<script>
import axios from 'axios';
import SheetDisplay from "@/Apps/SheetDisplay.vue";
import router from "@/router";

export default {
    name: "Profile_page",
    components: {SheetDisplay},
    data() {
      return {
        visib: "",
        components: [],
        visib2: "",
        buttonText: 'Dark Mode',
        isTextChanged: false,
        isDarkMode: false,
        trendingSheets: [],
      };
    },
    mounted() {
        this.fetchComponents();
    },
    methods:{
        async fetchTrendingSheets(){
            const response = await axios.get('/saved/');
            this.components = response.data;
        },
        goToSheetPage(){
            router.push('/sheet')
        },
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
                this.components = response.data;
                this.visib2 = this.components[0].is_seller;
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