<template>
    <div class="bg-img">
        <div class="content">
            <ul class="navbar">
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


            <h1 style="margin-top: 20px"> New Sheet </h1>
            <div class="flex-container"  style="height: 70%" >
                    <!-- First div for PDF display -->
                    <div class="trending-sheets"  style="margin-top: 20px; " >
                        <h2 style="margin-bottom: 10px">Sheet PDF</h2>
                        <div>

                            <!-- Display PDF Preview -->
                            <div class="scroll-scope" style="padding: 20px; height: 600px">
                                <input type="file" @change="handleFileUpload" accept="application/pdf" id="file">
                                <div v-if="pdfPreviewUrl" class="pdf-preview">

                                    <iframe :src="pdfPreviewUrl" width="100%" height="550px" ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Second div for the form -->
                    <div class="sheet-form" >
                        <form @submit.prevent="submitSheet" method="POST" >
                  <!--              {% csrf_token %}-->
                                <div class="container">
                                    <div class="field">
                                        <a1>name</a1>
                                        <input type="text" placeholder="name" v-model="newSheet.name">
                                    </div>
                                    <div class="field">
                                        <a1>genre</a1>
                                        <input type="text" placeholder="genre" v-model="newSheet.genre">
                                    </div>

                                    <div class="field">
                                        <a1>price</a1>
                                        <input type="text" placeholder="price" v-model="newSheet.price">
                                    </div>

                                    <div class="field">
                                        <a1>Composer</a1>
                                        <input type="text" placeholder="price" v-model="newSheet.composer" >
                                    </div>

                                    <div class="field">
                                        <button type="submit">Submit Sheet</button>
                                    </div>

                                </div>
                            </form>
                    </div>
            </div>
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
                price: 0,
                composer: ''
            },
            pdfPreviewUrl: null
        };
    },
    methods: {
       handleFileUpload(event) {
            const file = event.target.files[0];
            if (file && file.type === "application/pdf") {
                this.newSheet.file = file;
                this.pdfPreviewUrl = URL.createObjectURL(file); // Create a URL for preview
            }
        },
        submitSheet() {
            const formData = new FormData();
            formData.append('name', this.newSheet.name);
            formData.append('genre', this.newSheet.genre);
            formData.append('file', this.newSheet.file);
            formData.append('score', this.newSheet.score);
            formData.append('price', this.newSheet.price);
            formData.append('composer', this.newSheet.composer);

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