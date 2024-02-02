<template>
  <div class="sheet-display">
    <div class="sheet-image">
      <!-- Example image; replace with actual image source from your data -->
       <img :SRC="firstPageUrl" loading="lazy"  />
    </div>
    <div class="sheet-info">
      <!-- Example title; replace with actual title from your data -->
      <h3>{{ sheet.name }}</h3>
      <p>Composer: {{ sheet.composer }}</p>
      <p>Genre: {{ sheet.genre }}</p>
      <!-- Add more sheet details as needed -->
    </div>
    <div class="sheet-rating" >
      <!-- Star Rating Display -->
      <span v-for="star in 5" :key="star" class="star">
        {{ star <= sheet.score ? '★' : '☆' }}
      </span>
<!--      <span class="rating-number">{{ sheet.rating.toFixed(1) }} / 5</span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SheetDisplay',
    data() {
    return {
        firstPageUrl: "poop.pdf",
    };
  },
  props: {
    sheet: {
      type: Object,
      required: true,
      default: () => ({
        title: "Moonlight Sonata",
        composer: "Ludwig van Beethoven",
        genre: "Classical",
        imagePath: "../assets/score_0.svg", // Example image URL
        rating: 4.3 // Example rating
      }),
    },
  },
    methods:{
      async fetchFirstPage() {
        const sheetId = this.sheet.id;

        this.firstPageUrl = "/concerto/" + sheetId

      },
    },
    mounted() {

     this.fetchFirstPage();
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Poppins:400,500&display=swap');

*{
    font-family: 'Montserrat', sans-serif;
}
.sheet-display {
    background: white;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    justify-content: space-between;
    text-align: center;

}

.sheet-image img {
  width: 100px; /* Adjust as needed */
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
    background: url('../assets/img.png');
}

.sheet-info h3 {
  margin: 0;
  font-size: 1.2em;
  color: #333;
}

.sheet-info p {
  margin: 5px 0;
  font-size: 0.9em;
  color: #666;
}
/* Existing styles ... */



.sheet-rating {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
    width: 100px;
}

.star {
  color: gold;
  font-size: 20px; /* Adjust as needed */
}

.rating-number {
  margin-top: 5px;
  font-size: 0.9em;
}
</style>
