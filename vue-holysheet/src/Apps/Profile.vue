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
        <Navbar :isSeller="visib2"></Navbar>

    <div class="field" style="position: absolute; left: 87%; top: 5%; width: 10%">
        <a1> Assets: {{ component.assests }}</a1>
    </div>
      <div class="main-content">
        <div class="profile-column" >
          <img class="profile-picture" :src="profilePic" alt="Profile Picture"/>
          <h1 style="margin-top: 10px; margin-bottom: 30px;">{{ component.username }}</h1>

            <div class="inner_content" style ="margin-bottom: 30px;" v-if="visib2">
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

            <div class="field" style="width: 150px;">
                <button v-on:click="vis" type="submit">edit profile</button>
            </div>

          <form @submit="handleSubmit" method="POST" >
            <div v-if="visib" class="container">
                <div class="field">
                    <a1>Change Username</a1>
                    <input type="text" placeholder="New Username" name="username" required>
                </div>
                <div class="field">
                    <a1>Change Password</a1>
                    <input type="password" placeholder="New Password" name="password" required>
                </div>
                <div class="field1">
                    <a1>Profile Picture</a1>
                    <input  type="file" @change="handleFileUpload" id="file" name="file">
                </div>
                <div class="field">
                    <button type="submit">Submit</button>
                </div>
            </div>
            </form>
        </div>

        <div class="posts-column" v-if="visib2" >



         <div class="field" style="width: 150px;margin-top: 20px; float: left">
             <a1>Posts</a1>
         </div>



          <div class="trending-sheets" style="margin-top: 20px; width: 100%; height: 50%;">
              <div class="scroll-scope" style="padding: 20px">
                  <ul1>
                      <li1 v-for="sheet in postedSheets" :key="sheet.id" @click="goToSheetPage(sheet.id)">
                          <sheet-display :sheet="sheet"></sheet-display>
                      </li1>
                  </ul1>
              </div>
          </div>

        </div>


        <div class="sheets-column" >
          <!-- Saved Sheets content -->



                    <div class="field" style="width: 150px; margin-top: 20px;">
                        <a1>Saved</a1>
                    </div>


            <div class="trending-sheets" style="margin-top: 20px; width: 100%;">
                <div class="scroll-scope" style="padding: 20px">
                    <ul1>
                        <li1 v-for="sheet in savedSheets" :key="sheet.id" @click="goToSheetPage(sheet.id)">
                            <sheet-display :sheet="sheet"></sheet-display>
                        </li1>
                    </ul1>
                </div>
            </div>
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
import Navbar from "@/Apps/Navbar.vue";

export default {
    name: "Profile_page",
    components: {Navbar, SheetDisplay},
    data() {
      return {
        profilePic: "",
          profile_pic: "",
        visib: "",
        components: [],
        visib2: "",
        buttonText: 'Dark Mode',
        isTextChanged: false,
        isDarkMode: false,
        savedSheets: [],
        postedSheets: [],
      };
    },
    mounted() {
        this.fetchComponents();
        this.fetchSavedSheets();
        this.fetchPostedSheets();

    },

    methods:{
        async fetchSavedSheets() {
            try {
              const response = await axios.get('/concerto/', {
                withCredentials: true  // Include credentials for authentication
              });
              this.savedSheets = response.data;
            } catch (error) {
              console.error("Error fetching saved sheets:", error);
            }
        },
        async handleFileUpload() {
            const response = await axios.get('/components/');
            this.components = response.data;

            //const file = event.target.elements.file;





        },

        async fetchPostedSheets() {
            try {
              const response = await axios.get('/concerto/posted/', {
                withCredentials: true  // Include credentials for authentication
              });
              this.postedSheets = response.data;
            } catch (error) {
              console.error("Error fetching posted sheets:", error);
            }
        },
        goToSheetPage(sheetId){
            router.push('/concerto/' + sheetId);
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
                const sellerId = this.components[0].id;
                this.profilePic = "/seller/" + sellerId
            } catch (error) {
                console.error('Error fetching components:', error);
            }
        },
        async handleSubmit(event) {
            event.preventDefault();

            this.profile_pic = event.target.elements.file.files[0];
            const formData = new FormData(event.target);
            formData.append('file', this.profile_pic);
            const csrf_token = document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];

            this.components[0].profilePic = formData.get('file')
            // Set CSRF token in form data

            // Send a POST request to the Django backend
            axios.defaults.headers.common = {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': csrf_token
            };

            axios.post('/components/new/', formData, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
                .then(response => {
                    // Handle success response
                    console.log(response.data.message);
                    this.profilePic = response.data.newImageUrl;
                    this.fetchComponents()
                    this.visib=""
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