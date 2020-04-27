<template>
  <b-container fluid class="main">
    <span>
      <navbar></navbar>

      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - SEARCH -->

        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <b-form-group sticky>
            <b-form-input
              id="search-input"
              v-on:keyup.enter="search"
              v-model="searchTextInput"
              placeholder="Search..."
            ></b-form-input>
          </b-form-group>
          <b-row>
            <b-col class="search-results" id="search-results-mobile">
              <div
                class="sample-movie bottom-space"
                v-for="(film) in this.results"
                :key="film.id"
                @click="moviePage(film.id)"
              >
                <img v-bind:src="'https://image.tmdb.org/t/p/original' + film.poster_path" />
              </div>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - SEARCH -->

    <b-row class="d-none d-md-flex search-container">
      <b-col class="search-column" xs="12" sm="12" md="6" lg="6" xl="6">
        <b-form-group>
          <b-form-input
            id="search-input"
            v-on:keyup.enter="search"
            v-model="searchTextInput"
            placeholder="Search..."
          ></b-form-input>
          <b-button @click="search" class="btn-search">SEARCH</b-button>
        </b-form-group>
        <!-- <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>-->
      </b-col>

      <b-col
        v-if="searchBool"
        class="search-results"
        id="search-results-desktop"
        xs="12"
        sm="12"
        md="10"
        lg="10"
        xl="10"
      >
        <div
          class="sample-movie bottom-space"
          v-for="(film) in this.results"
          :key="film.id"
          @click="moviePage(film.id)"
        >
          <img v-bind:src="'https://image.tmdb.org/t/p/original' + film.poster_path" />
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
      searchTextInput: "",
      apiLink: "https://api.themoviedb.org/3/",
      results: [],
      searchBool: false
    };
  },
  components: {
    Navbar
  },
  methods: {
    fixTextInput() {
      //zamiana spacji na znaki oznaczające spacje w linku API
      return this.searchTextInput.replace(" ", "%20");
    },
    clearTextInput() {
      // czyszczenie tego co sie wpisało w search bo wyszukaniu
      this.searchTextInput = "";
    },
    search() {
      // this.clearResults();
      this.searchBool = true;
      console.log(this.searchBool);
      console.log(this.searchTextInput);
      console.log(this.fixTextInput());
      //łączenie z api przez axios

      this.$http
        .get(
          `${
            this.apiLink
          }search/movie?api_key=f2bdee8336da34398a99b1ea328805d8&language=pl-PL&query=${this.fixTextInput()}&page=1&include_adult=false`
        )
        .then(response => {
          //sprawdzenie czy istnieje dana fraza w bazie, jeśli nie to alert
          if (response.data.total_results != 0) {
            this.results = response.data.results;
            console.log(this.results);
          } else {
            alert("Nie ma takiego filmu w bazie");
          }
        });
      this.clearTextInput();
    },
    moviePage(num) {
      this.$router.push({
        name: "Movie",
        params: { filmId: num }
      });
    }
  }
};
</script>

<style>
.search-container {
  text-align: left;
  padding-top: 50px;
  min-height: 90vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
}

.search-column {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 10px;
}

#search-input {
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  display: inline;
}

.search-results {
  margin: auto;
  margin-top: 0;
  text-align: center;
  min-height: 75vh;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0;
  padding-top: 50px;
  min-width: 98vw;
}

.btn-filter,
.btn-search {
  margin: 1px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  display: inline;
}

.btn-search {
  position: absolute;
}

.sample-movie img {
  width: 180px;
  height: 256px;
  background-color: grey;
  display: inline-block;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 10px;
}

#search-results-mobile {
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 424px) {
  .sample-movie {
    width: 140px;
    height: 226px;
  }

  .sample-movie img {
    width: 140px;
    height: 226px;
  }

  .search-results {
    min-width: 95vw;
  }
}
</style>