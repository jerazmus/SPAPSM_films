<template>
  <b-container fluid class="main">
    <span>
      <navbar></navbar>
      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - RANDOM FILM-->
        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <b-col class="search-results">
              <div v-if="clicked" class="sample-movie bottom-space" @click="moviePage(generatedId)">
                <img v-bind:src="'https://image.tmdb.org/t/p/original' + poster_path" />
              </div>
              <br />
              <b-button class="btn-random" @click="getAMovie()">Roll!</b-button>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - RANDOM FILM -->

    <b-row class="d-none d-md-flex random-container">
      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10">
        <div v-if="clicked" class="sample-movie bottom-space" @click="moviePage(generatedId)">
          <img v-bind:src="'https://image.tmdb.org/t/p/original' + poster_path" />
        </div>
        <br />
        <b-button class="btn-random" @click="getAMovie()">Roll!</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from "./Navbar";

export default {
  data() {
    return {
      appTitle: "Film Nation",
      poster_path: "",
      generatedId: "",
      clicked: false
    };
  },
  components: {
    Navbar
  },
  methods: {
    moviePage(num) {
      this.$router.push({
        name: "Movie",
        params: { filmId: num }
      });
    },
    getAMovie() {
      this.clicked = true;

      let min = Math.ceil(min);
      let max = Math.floor(max);
      // losowa liczba miedyz 2 wartosciami
      const random = (min, max) =>
        Math.floor(Math.random() * (max - min)) + min;

      const linkApi = `https://api.themoviedb.org/3/discover/movie?api_key=f2bdee8336da34398a99b1ea328805d8&language=en-US&sort_by=vote_average.desc&page=${random(
        0,
        500
      )}`;

      this.$http.get(linkApi).then(response => {
        let film = response.data.results[random(0, 20)];
        console.log(film);
        if (film.poster_path == null) {
          this.getAMovie();
        } else {
          this.poster_path = film.poster_path;
          this.generatedId = film.id;
        }
      });
    }
  }
};
</script>

<style>
.random-container {
  text-align: left;
  padding-top: 100px;
  min-height: 90vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
  padding: 0;
}

.random-movie {
  width: auto;
  height: 400px;
  background-color: grey;
  display: inline-block;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 100px;
  border-radius: 10px;
}

.random-movie-mobile {
  width: 300px;
  height: 400px;
  background-color: grey;
  display: inline-block;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 50px;
  border-radius: 10px;
}

.btn-random {
  background-color: transparent;
}
</style>