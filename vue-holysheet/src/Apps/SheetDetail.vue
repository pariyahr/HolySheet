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
          <h1>{{ sheet.name }}</h1>
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
    fetchSheetDetails() {
      const sheetId = this.$route.params.id;
      axios.get('/api/concerto/' + sheetId)
        .then(response => {
          this.sheet = response.data;
        })
        .catch(error => {
          console.error("Error fetching sheet details:", error);
        });
    },
    saveSheet() {
      const sheetId = this.sheet.id; // Assuming you have the sheet's ID
      axios.post('/api/save_sheet/', { sheetId: sheetId, sellerId: this.owner }, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
        .then(response => {
          // Handle the success response
          console.log("Sheet saved successfully:", response.data);
        })
        .catch(error => {
          // Handle the error
          console.error("Error saving sheet:", error);
        });
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
    watch: {
    '$route': 'fetchSheetDetails', // Re-fetch data when route changes
  },
  mounted() {
    this.fetchSheetDetails();
     this.fetchComponents();
  }
};
</script>

<style scoped src="../assets/css/home_page.css">

</style>