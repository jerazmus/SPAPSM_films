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
              v-on:keyup.enter="searchInput"
              v-model="searchTextInput"
              placeholder="Search..."
            ></b-form-input>
            <b-button @click="search" class="btn-filter">SEARCH</b-button>
          </b-form-group>
          <b-row>
            <b-col class="search-results">
              <!-- 
                <div class="sample-movie-mobile"></div> 
                chyba jest niepotrzebny, chyba może być ten sam styl plakatów co normalny
              --> 
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
            v-on:keyup.enter="searchInput"
            v-model="searchTextInput"
            placeholder="Search..."
          ></b-form-input>
          <b-button @click="search" class="btn-filter">SEARCH</b-button>
        </b-form-group>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
      </b-col>

      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10"></b-col>
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
      results: []
    };
  },
  components: {
    Navbar
  },
  methods: {
    fixTextInput() {
      return this.searchTextInput.replace(" ", "%20");
    },
    clearResults() {
      return (document.getElementsByClassName("search-results").innerHTML = "");
    },
    search() {
      this.$http
        .get(
          `${
            this.apiLink
          }search/movie?api_key=f2bdee8336da34398a99b1ea328805d8&language=pl-PL&query=${this.fixTextInput()}&page=1&include_adult=false`
        )
        .then(response => {
          console.log(response)
          if (response.data.total_results != 0) {
            this.results = response.data.results;
            console.log(this.results);

            this.clearResults();

            this.results.forEach(item => {
              if (item.poster_path != null) {
                const divResultsMobile = document.getElementsByClassName("search-results")[0];
                const divResults = document.getElementsByClassName("search-results")[1];

                const div = document.createElement("div");
                div.className = "sample-movie";

                const img = document.createElement("img");
                img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;

                const a = document.createElement("a");
                a.href = "#";

                a.appendChild(img);
                div.appendChild(a);
                divResultsMobile.appendChild(div);
                divResults.appendChild(div);
              }
            })
          } else {
            alert('Nie ma takiego filmu w bazie')
          }

          // console.log(`Film id: ${this.results.id} `);
          // console.log(`Film title: ${this.results.title} `);
          // console.log(`Film poster path: ${this.results.poster_path} `);
          // console.log(`Film release date: ${this.results.release_date} `);
          // console.log(`Film vote_avg: ${this.results.vote_average} `);
          // console.log(`Film vote_number: ${this.results.vote_count} `);
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
}

.search-results {
  margin: auto;
  margin-top: 0;
  text-align: center;
  min-height: 85vh;
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 50px;
  min-width: 99vw;
}

.btn-filter {
  margin: 1px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
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
</style>