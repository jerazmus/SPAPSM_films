<template>
  <b-container fluid class="main">
    <navbar></navbar>
    <span>
      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - DASHBOARD UZYTKOWNIKA -->
        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <h1>Hello, {{ username }}</h1>
          <h2>Favorite movies</h2>
          <b-row>
            <b-col class="favorite-mobile">
               <div
              v-for="(item,index) in this.getFavouritesId"
              :key="index.key"
              class="sample-movie"
              @click="moviePage(item.filmId)"
            >
              <img v-bind:src="'https://image.tmdb.org/t/p/original' + item.poster_path" />
            </div>
            </b-col>
          </b-row>
          <h2>Recently watched</h2>
          <b-row>
            <b-col class="watched-mobile">
               <div
              v-for="item in this.getWatchedId"
              :key="item.key"
              class="sample-movie"
              @click="moviePage(item.filmId)"
            >
              <img v-bind:src="'https://image.tmdb.org/t/p/original' + item.poster_path" />
            </div>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - DASHBOARD UZYTKOWNIKA -->

    <b-row class="d-none d-md-flex dashboard-container">
      <b-col class="background-dashboard">
        <h1 class="welcome-title">Hello, {{ username }}</h1>
        <b-row class="d-none d-md-flex dashboard-container-favorite">
          <b-col class="favorited" xs="12" sm="12" md="12" lg="12" xl="12">
            <h2>Favorite movies</h2>
            <div
              v-for="(item,index) in this.getFavouritesId"
              :key="index.key"
              class="sample-movie"
              @click="moviePage(item.filmId)"
            >
              <img v-bind:src="'https://image.tmdb.org/t/p/original' + item.poster_path" />
            </div>
          </b-col>
        </b-row>
        <b-row class="d-none d-md-flex dashboard-container-watched">
          <b-col class="watched" xs="12" sm="12" md="12" lg="12" xl="12">
            <h2>Recently watched</h2>
            <div
              v-for="item in this.getWatchedId"
              :key="item.key"
              class="sample-movie"
              @click="moviePage(item.filmId)"
            >
              <img v-bind:src="'https://image.tmdb.org/t/p/original' + item.poster_path" />
            </div>
          </b-col>
        </b-row>
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
      username: null,
      apiLink: "https://api.themoviedb.org/3/",
      results: [],
      getFavouritesId: [],
      getWatchedId: []
    };
  },
  components: {
    Navbar
  },
  methods: {
    getFavourites(id) {
      firebase
        .database()
        .ref(`user_films/${id}`)
        .on("value", snapshot => {
          snapshot.forEach(item => {
            this.getFavouritesId.push(item.val());
          });
        });
    },
    getWatched(id) {
      firebase
        .database()
        .ref(`user_watched/${id}`)
        .on("value", snapshot => {
          snapshot.forEach(item => {
            this.getWatchedId.push(item.val());
          });
        });
    },
    moviePage(num) {
      this.$router.push({
        name: "Movie",
        params: { filmId: num }
      });
    }
  },
  mounted() {
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    this.getFavourites(uid);
    this.getWatched(uid);
  },
  created() {
    var user = firebase.auth().currentUser;
    this.username = user.displayName;
  }
};
</script>

<style>
.dashboard-container {
  text-align: left;
  padding-top: 50px;
  min-height: 90vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
}

.background-dashboard {
  background-color: rgba(0, 0, 0, 0.7);
}

.sample-movie {
  width: 180px;
  height: 256px;
  background-color: grey;
  display: inline-block;
  margin-left: 10px;
  margin-right: 5px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.sample-movie-mobile {
  width: 150px;
  height: 200px;
  background-color: grey;
  display: inline-block;
  margin-left: auto;
  margin: 2px;
  border-radius: 10px;
}

.favorite-mobile,
.watched-mobile {
  text-align: center;
  padding: 0;
}

.favorited,
.watched {
  padding-left: 5%;
}

.navbar {
  background-color: black;
  color: white;
}

#navbar-toggle-collapse {
  color: white !important;
  list-style: none;
  z-index: 10;
}

.dropdown-item {
  color: white;
  text-align: right;
  font-size: 20px;
}

.welcome-title {
  padding-left: 5%;
}
</style>