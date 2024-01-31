<template>
  <div class="bg-img">
    <div class="content1">
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
            <li class="search-icon" @click="toggleSearchBar">
            <a href="#"><br></a>
            </li>
        </ul>
      <div class="search-bar" v-show="showSearch">
        <input type="text" v-model="searchQuery" placeholder="Search..." />
        <button @click="searchSheets">Search</button>
      </div>

      <!-- Trending Sheets Section -->
      <div class="trending-sheets" style="margin-top: 20px; width: 90%;">
        <h1 style="margin-bottom: 10px">Trending Sheets</h1>
        <div class="scroll-scope" style="padding: 20px">
          <ul1>
            <li1 v-for="sheet in filteredSheets" :key="sheet.id" @click="goToSheetPage()">
              <sheet-display :sheet="sheet"></sheet-display>
            </li1>
          </ul1>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SheetDisplay from './SheetDisplay.vue';
import router from "@/router";
import axios from "axios";

export default {
  name: "Explore_Page",
  components: {
    SheetDisplay
  },
  data() {
    return {
      showSearch: false,
      searchQuery: '',
        apiURL: 'http://127.0.0.1:8000/api/concerto/',
        trendingSheets :[]
      // trendingSheets: [
      //   {
      //     id: 1,
      //     title: "Moonlight Sonata",
      //     composer: "Ludwig van Beethoven",
      //     genre: "Classical",
      //     imagePath: "path/to/moonlight-sonata-image.jpg", // Replace with actual image path
      //     rating: 4.5
      //   },
      //   {
      //     id: 2,
      //     title: "The Four Seasons",
      //     composer: "Antonio Vivaldi",
      //     genre: "Baroque",
      //     imagePath: "path/to/four-seasons-image.jpg", // Replace with actual image path
      //     rating: 3.5
      //   },
      //   {
      //     id: 3,
      //     title: "Clair de Lune",
      //     composer: "Claude Debussy",
      //     genre: "Impressionist",
      //     imagePath: "path/to/clair-de-lune-image.jpg", // Replace with actual image path
      //     rating: 5
      //   },
      //   {
      //     id: 4,
      //     title: "Rhapsody in Blue",
      //     composer: "George Gershwin",
      //     genre: "Jazz",
      //     imagePath: "path/to/rhapsody-in-blue-image.jpg", // Replace with actual image path
      //     rating: 4.4
      //   }
      // ],
    };
  },

  computed: {
    filteredSheets() {
      // Filter sheets only if there's a search query
      if (this.searchQuery) {
        return this.trendingSheets.filter(sheet =>
          sheet.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          //sheet.composer.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          sheet.genre.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.trendingSheets; // Return all sheets if no search query
    }
  },
  methods: {

      toggleSearchBar() {
        this.showSearch = !this.showSearch;
      },

      fetchTrendingSheets() {
        axios.get(this.apiURL)
          .then(response => {
            this.trendingSheets = response.data;

          })
          .catch(error => {

            console.error("There was an error fetching the sheets:", error);
          });
      },
      searchSheets(){
          this.showSearch = !this.showSearch;
      },
      goToSheetPage() {
        // Route to the sheet detail page with the sheet's Isheet.id
        router.push('/sheet');
      },

  },
  mounted() {
    this.fetchTrendingSheets();
  }
};
</script>

<style scoped src="../assets/css/home_page.css">
/* Use the provided CSS styles */
</style>
