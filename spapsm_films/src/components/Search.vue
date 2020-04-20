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
          </b-form-group>
          <b-row>
            <b-col class="favorite-mobile">
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
              <div class="sample-movie-mobile"></div>
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
        </b-form-group>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
        <b-button class="btn-filter">FILTER</b-button>
      </b-col>

      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10">
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from "./Navbar"

export default {
  data() {
    return {
      appTitle: "Film Nation",
      searchTextInput: ""
    };
  },
  components: {
    Navbar
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
  font-family: 'Fira Sans Condensed', sans-serif;
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
</style>