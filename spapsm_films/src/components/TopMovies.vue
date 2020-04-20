<template>
  <b-container fluid class="main">
    <span>
      <navbar></navbar>

      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - TOP FILMY -->

        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <b-col class="favorite-mobile">
              <h1>TOP 10 MOVIES</h1>
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

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - TOP FILMY -->

    <b-row class="d-none d-md-flex topmovies-container">
      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10">
        <h1>TOP 10 MOVIES</h1>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <div class="sample-movie"></div>
        <br />
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
import Navbar from "./Navbar";

export default {
  data() {
    return {
      appTitle: "Film Nation",
    };
  },
  components: {
    Navbar
  }
};
</script>

<style>
.topmovies-container {
  text-align: left;
  padding-top: 100px;
  min-height: 75vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
}
</style>