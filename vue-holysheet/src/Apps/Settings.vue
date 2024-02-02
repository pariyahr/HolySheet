<template>
  <div class="bg-img">
    <div class="content1">
      <Navbar :isSeller="visib2"></Navbar>


<!--    <input type="range" min="0" max="100" v-model="volume" @change="changeVolume" />-->


    </div>
  </div>
</template>


<script>

import Navbar from "@/Apps/Navbar.vue";
import axios from "axios";


export default {
  name: "Settings_Page",
  components: {
        Navbar
    },
  data() {
      return {
          components: [],
          visib2: "",
      }
  },
    methods:{
      async fetchComponents() {
            try {
                const response = await axios.get('/components/');
                this.components = response.data;
                this.visib2 = this.components[0].is_seller;
            } catch (error) {
                console.error('Error fetching components:', error);
            }
        },
    },
    mounted() {
     this.fetchComponents();
  }

};
</script>

<style scoped src="../assets/css/home_page.css">
/* Use the provided CSS styles */
</style>
