<template>
  <b-container fluid class="main">
      <span>
        <!-- NAVBAR KTÓRY WYŚWIETLA SIĘ TYLKO DLA BREAKPOINTÓW OD MEDIUM W GÓRE - POKAZUJE IKONĘ, NAZWĘ I MENU UŻYTKOWNIKA -->

        <div class="d-none d-md-block">
          <div>
            <b-navbar toggleable="lg">
              <b-navbar-brand href="#">
                <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
              </b-navbar-brand>
              <b-navbar-brand href="#" class="text-light">{{ appTitle }}</b-navbar-brand>
              <b-navbar-nav>
                <b-nav-item @click.prevent="search">Search</b-nav-item>
                <b-nav-item @click.prevent="topMovies">Top movies</b-nav-item>
                <b-nav-item @click.prevent="randomizer">Randomizer</b-nav-item>
                <b-nav-item @click.prevent="dashboard">My dashboard</b-nav-item>
                <b-nav-item @click.prevent="account">My account</b-nav-item>
                <b-nav-item @click.prevent="signout">Log Out</b-nav-item>
              </b-navbar-nav>
            </b-navbar>
          </div>
        </div>

        <!-- ROZWIJANY NAVBAR, KTÓRY POJAWIA SIĘ DLA BREAKPOINTA MEDIUM I NIŻEJ, ZNADUJE SIE TU MENU UŻYTKOWNIKA -->

        <div class="d-md-none home-container">
          <b-navbar toggleable sticky>
            <b-navbar-brand href="#">
              <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
            </b-navbar-brand>
            <b-navbar-brand href="#" class="text-light">{{ appTitle }}</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse" class="text-light">
              <b-icon icon="list"></b-icon>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-dropdown-item @click.prevent="search">Search</b-dropdown-item>
              <b-dropdown-item @click.prevent="topMovies">Top movies</b-dropdown-item>
              <b-dropdown-item @click.prevent="randomizer">Randomizer</b-dropdown-item>
              <b-dropdown-item @click.prevent="dashboard">My dashboard</b-dropdown-item>
              <b-dropdown-item @click.prevent="account">My account</b-dropdown-item>
              <b-dropdown-item @click.prevent="signout">Log Out</b-dropdown-item>
            </b-collapse>
          </b-navbar>

          <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ -->

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
            <br/>
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
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      appTitle: "Film Nation",
      searchTextInput: ""
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signout() { // metoda navbara
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/")
        });
    },
    search() { // metoda navbara 
        this.$router.push("/search")
    },
    dashboard() { // metoda navbara
        this.$router.push("/dashboard")
    },
    topMovies() { // metoda navbara
        this.$router.push("/top")
    },
    randomizer() { // metoda navbara
        this.$router.push("/random")
    },
    account() { // metoda navbara
        this.$router.push("/account")
    } 
  }
};
</script>

<style>
.topmovies-container {
  text-align: left;
  margin-top: 150px;
  min-height: 80vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: 'Fira Sans Condensed', sans-serif;
}

</style>