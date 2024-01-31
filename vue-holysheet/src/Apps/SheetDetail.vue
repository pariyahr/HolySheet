<template>
  <div class="bg-img">
    <div class="content1">
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
            <li class="search-icon" @click="toggleSearchBar">
            <a href="#"><br></a>
            </li>
        </ul>

        <div >
          <h1>{{ sheet.title }}</h1>
          <!-- Display sheet details, user info, and image -->
          <!-- Save and Follow buttons -->
          <button @click="saveSheet">Save Sheet</button>
          <button @click="followUser">Follow User</button>
        </div>

    </div>
  </div>

</template>

<script>
//import SheetDisplay from "@/Apps/SheetDisplay.vue";
import axios from "axios";

export default {
  name: "SheetDetail",
    //components: {SheetDisplay},
  data() {
    return {
      components: [],
      visib2: "",
      sheet: {
          default: () => ({
            title: "Moonlight Sonata",
            composer: "Ludwig van Beethoven",
            genre: "Classical",
            imagePath: "../assets/score_0.svg", // Example image URL
            rating: 4.3 // Example rating
          }),
      },
      // Other necessary data
    };
  },
  methods: {
    async fetchSheetDetails() {
      // const sheetId = this.$route.params.id;
      // // Replace the following line with your actual data fetching logic
      // const response = await fetch('/api/sheets/' + sheetId); // Fetching from an API as an example
      // this.sheet = await response.json();
    },
    saveSheet() {
      // Implement save functionality
    },
    followUser() {
      // Implement follow functionality
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
  },
  mounted() {
    this.fetchSheetDetails();
     this.fetchComponents();
  }
};
</script>

<style scoped src="../assets/css/home_page.css">

</style>