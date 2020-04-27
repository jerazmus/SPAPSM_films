<template>
  <b-container fluid class="main">
    <span>
      <navbar></navbar>

      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - TOP FILMY -->

        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <h1>Most popular films today (themoviedb.org)</h1>
            <b-col class="search-results">
              <div
                class="sample-movie bottom-space"
                v-for="(film, index) in this.results.slice(0,10)"
                :key="film.id"
                @click="moviePage(film.id)"
              >
                <img v-bind:src="'https://image.tmdb.org/t/p/original' + film.poster_path" />
                <span class="movie-rank">{{ index + 1 }}</span>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <h1 class="welcome-title">Most popular films weekly (themoviedb.org)</h1>

            <b-col class="search-results" xs="12" sm="12" md="6" lg="6" xl="6">
              <div
                class="sample-movie bottom-space"
                v-for="(film, index) in this.resultsWeekly.slice(0,10)"
                :key="film.id"
                @click="moviePage(film.id)"
              >
                <img v-bind:src="'https://image.tmdb.org/t/p/original' + film.poster_path" />
                <span class="movie-rank">{{ index + 1 }}</span>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - TOP FILMY -->

    <b-row class="d-none d-md-flex topmovies-container">
      <h1 class="fav-title">Most popular films today (themoviedb.org)</h1>

      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10">
        <div
          class="sample-movie bottom-space"
          v-for="(film, index) in this.results.slice(0,10)"
          :key="film.id"
          @click="moviePage(film.id)"
        >
          <img v-bind:src="'https://image.tmdb.org/t/p/original' + film.poster_path" />
          <span class="movie-rank">{{ index + 1 }}</span>
        </div>
      </b-col>
    </b-row>

    <b-row class="d-none d-md-flex topmovies-container weekly">
      <h1 class="fav-title">Most popular films weekly (themoviedb.org)</h1>

      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10">
        <div
          class="sample-movie bottom-space"
          v-for="(film, index) in this.resultsWeekly.slice(0,10)"
          :key="film.id"
          @click="moviePage(film.id)"
        >
          <img v-bind:src="'https://image.tmdb.org/t/p/original' + film.poster_path" />
          <span class="movie-rank">{{ index + 1 }}</span>
        </div>
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
      apiLink: "https://api.themoviedb.org/3/",
      results: [],
      resultsWeekly: []
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
    callApiDay() {
      this.$http
        .get(
          `${this.apiLink}trending/movie/day?api_key=f2bdee8336da34398a99b1ea328805d8`
        )
        .then(response => {
          //sprawdzenie czy istnieje dana fraza w bazie, jeśli nie to alert
          if (response.data.total_results != 0) {
            this.results = response.data.results;
          } else {
            alert("Nie ma takiego filmu w bazie");
          }
        });
    },
    callApiWeek() {
      this.$http
        .get(
          `${this.apiLink}trending/movie/week?api_key=f2bdee8336da34398a99b1ea328805d8`
        )
        .then(response => {
          //sprawdzenie czy istnieje dana fraza w bazie, jeśli nie to alert
          if (response.data.total_results != 0) {
            this.resultsWeekly = response.data.results;
          } else {
            alert("Nie ma takiego filmu w bazie");
          }
        });
    }
  },
  created() {
    this.callApiDay();
    this.callApiWeek();
  }
};
</script>

<style>
.topmovies-container {
  text-align: left;
  padding-top: 100px;
  min-height: 85vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
}
.weekly {
  padding-top: 0;
}
.bottom-space {
  margin-bottom: 60px;
}
.movie-rank {
  width: 60px;
  height: 50px;
  display: inline-block;
  border-radius: 10px;
  font-size: 40px;
  text-shadow: 2px 0px 5px rgba(186,186,186,0.7);
}

.fav-title {
  padding-left: 5%;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0;
  width: 99%;
}

@media screen and (max-width: 424px) {
  .movie-rank {
    width: 140px;
  }
}
</style>