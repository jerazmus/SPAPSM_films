<template>
  <b-container fluid class="main">
    <span>
      <navbar></navbar>
      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ -->
        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <b-col class="favorite-mobile">
              <div class="random-movie-mobile"></div>
              <b-button class="btn-random">Roll!</b-button>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - RANDOM FILM-->

    <b-row class="d-none d-md-flex random-container">
      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10">
        <div class="random-movie"></div>
        <br />
        <b-button class="btn-random">Roll!</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";
import Navbar from "./Navbar";
export default {
  data() {
    return {
      appTitle: "Film Nation",
      searchTextInput: ""
    };
  },
  components: {
    Navbar
  },
  methods: {
    signout() {
      // metoda navbara
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
    search() {
      // metoda navbara
      this.$router.push("/search");
    },
    dashboard() {
      // metoda navbara
      this.$router.push("/dashboard");
    },
    topMovies() {
      // metoda navbara
      this.$router.push("/top");
    },
    randomizer() {
      // metoda navbara
      this.$router.push("/random");
    },
    account() {
      // metoda navbara
      this.$router.push("/account");
    }
  }
};
</script>

<style>
.random-container {
  text-align: left;
  margin-top: 50px;
  min-height: 80vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
}

.random-movie {
  width: 400px;
  height: 550px;
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