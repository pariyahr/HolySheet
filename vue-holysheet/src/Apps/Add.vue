<template>
    <div class="bg-img">
        <div class="content">
            <Navbar :isSeller="visib2"></Navbar>

            <!-- Form for adding sheet music -->


            <h1 style="margin-top: 20px"> New Sheet </h1>
            <div class="flex-container"  style="height: 70%" >
                    <!-- First div for PDF display -->
                    <div class="trending-sheets"  style="margin-top: 20px; " >
                        <h2 style="margin-bottom: 10px">Thumbnail</h2>
                        <div>

                            <!-- Display PDF Preview -->
                            <div class="scroll-scope" style="padding: 20px; height: 600px;text-align: center">
                                <input type="file" @change="handleFileUpload" accept="application/png" id="file">
                                <div v-if="imagePreviewUrl" class="image-preview">
                                    <img :src="imagePreviewUrl" alt="Sheet Image Preview" style="max-width: 100%; height: auto;"/>
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
                                        <a1>Composer</a1>
                                        <input type="text" placeholder="composer" v-model="newSheet.composer" >
                                    </div>

                                    <div class="field">
                                        <a1>price</a1>
                                        <input type="text" placeholder="price" v-model="newSheet.price">
                                    </div>

                                    <div class="field1">
                                        <a1>Sheet PDF</a1>
                                        <input type="file" @change="handleFileUpload2" accept="application/pdf" id="file_pdf">
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
import Navbar from "@/Apps/Navbar.vue";


export default {
    name: "Add_page",
    components: {Navbar},

    data() {
        return {
            components:[],
            visib2: "",
            newSheet: {
                name: '',
                genre: '',
                file: null,
                score: 0,
                price: 0,
                composer: '',
                pdf_file: null
            },
            imagePreviewUrl: null
        };

    },
    methods: {
        async fetchComponents() {
            try {
                const response = await axios.get('/components/');
                this.components = response.data;
                this.visib2 = this.components[0].is_seller;
            } catch (error) {
                console.error('Error fetching components:', error);
            }
        },
       handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.newSheet.file = file;
                 this.imagePreviewUrl = URL.createObjectURL(file);
                 this.newSheet.file = file;
            }
        },
        handleFileUpload2(event) {
            const file = event.target.files[0];
            if (file && file.type === "application/pdf") {
                this.newSheet.pdf_file = file;
            }
        },
        submitSheet() {
            const formData = new FormData();
            formData.append('name', this.newSheet.name);
            formData.append('genre', this.newSheet.genre);
            formData.append('file', this.newSheet.file);
            formData.append('pdf_file', this.newSheet.pdf_file);
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
    },
    mounted() {
        this.fetchComponents();
    }
}
</script>


<style scoped src="../assets/css/home_page.css">

</style>