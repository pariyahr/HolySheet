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



                  <div class="trending-sheets"  style="margin-top: 20px; width: 500px">
                      <h1 >{{ sheet.name }}</h1>
                        <div>

                            <!-- Display PDF Preview -->
                            <div class="scroll-scope" style="padding: 20px; height: 600px; margin-top: 10px">

                                <div id="pdf-preview-container" style="padding: 20px; height: 600px; margin-top: 10px">
                                  <img :SRC="firstPageUrl" alt="First page of PDF" style="max-width: 100%; height: auto;">
                                </div>

                            </div>
                        </div>
                      <button @click="saveSheet">Save Sheet</button>
                      <button @click="followUser">Follow User</button>
                      <button @click="buySheet">Buy Sheet</button>

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
        firstPageUrl: "poop.pdf",
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
      async fetchFirstPage() {
        const sheetId = this.$route.params.id;
        this.firstPageUrl = "/concerto/" + sheetId

      },

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
    buySheet(){
          axios.post('/buySheet/' + this.sheet.id, { sheetId: this.sheet.id, sellerId: this.sheet.owner }, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
              .then(response => {
                // Handle the success response
                console.log("Sheet saved successfully:", response.data);
                window.location.href = `/download_concerto/${this.sheet.id}/`;

              })
              .catch(error => {
                // Handle the error
                console.error("Error saving sheet:", error);
              });





    },
    followUser() {
      axios.post('/api/follow/', {sellerId: this.sheet.owner }, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
            })
        .then(response => {
          // Handle the success response
          console.log("Followed successfully:", response.data);
        })
        .catch(error => {
          // Handle the error
          console.error("Error following:", error);
        });
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
      this.fetchFirstPage();
  }
};
</script>

<style scoped src="../assets/css/home_page.css">

</style>