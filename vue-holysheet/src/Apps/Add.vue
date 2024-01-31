<template>
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

            </ul>

            <!-- Form for adding sheet music -->


            <header> New Sheet </header>
            <form @submit.prevent="submitSheet" method="POST" >
  <!--              {% csrf_token %}-->
                <div class="container">
                    <div class="field">
                        <a1>name</a1>
                        <input type="text" placeholder="Enter Username" name="username" required>
                    </div>
                    <div class="field">
                        <a1>genre</a1>
                        <input type="text" placeholder="Enter Password" name="password" required>
                    </div>

                    <div class="field">
                        <a1>price</a1>
                        <input type="text" placeholder="Enter Password" name="password" required>
                    </div>

                    <div class="field">
                        <a1 for="file">File</a1>
                        <input type="file" id="file" @change="handleFileUpload">
                    </div>

                    <div class="field">
                        <button type="submit">Submit Sheet</button>
                    </div>

                </div>
            </form>


        </div>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    name: "Add_page",
    data() {
        return {
            newSheet: {
                name: '',
                genre: '',
                file: null,
                score: 0,
                price: 0
            }
        };
    },
    methods: {
        handleFileUpload(event) {
            this.newSheet.file = event.target.files[0];
        },
        submitSheet() {
            const formData = new FormData();
            formData.append('name', this.newSheet.name);
            formData.append('genre', this.newSheet.genre);
            formData.append('file', this.newSheet.file);
            formData.append('score', this.newSheet.score);
            formData.append('price', this.newSheet.price);

            axios.post('/Add/', formData, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
                .then(response => {
                    console.log("Sheet added:", response.data);
                    // Handle success (e.g., showing a success message)
                })
                .catch(error => {
                    console.error("Error adding sheet:", error);
                    // Handle error (e.g., showing an error message)
                });
        }
    }
}
</script>


<style scoped src="../assets/css/home_page.css">

</style>