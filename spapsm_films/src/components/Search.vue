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
                <b-nav-item href="#">Top movies</b-nav-item>
                <b-nav-item href="#">Randomizer</b-nav-item>
                <b-nav-item @click.prevent="dashboard">My dashboard</b-nav-item>
                <b-nav-item href="#">My account</b-nav-item>
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
              <b-dropdown-item>Top movies</b-dropdown-item>
              <b-dropdown-item>Randomizer</b-dropdown-item>
              <b-dropdown-item @click.prevent="dashboard">My dashboard</b-dropdown-item>
              <b-dropdown-item>My account</b-dropdown-item>
              <b-dropdown-item @click.prevent="signout">Log Out</b-dropdown-item>
            </b-collapse>
          </b-navbar>

          <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ -->

          <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
            <b-form-group sticky>
                <b-form-input id="search-input" v-on:keyup.enter="searchInput" v-model="searchTextInput" placeholder="Search..."></b-form-input>
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

      <b-row class="d-none d-md-flex dashboard-container">
        <b-col class="search-column" xs="12" sm="12" md="6" lg="6" xl="6">
            <b-form-group>
                <b-form-input id="search-input" v-on:keyup.enter="searchInput" v-model="searchTextInput" placeholder="Search..."></b-form-input>
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
    searchInput() { // metoda KOMPONENTU SEARCH!
        this.searchTextInput = ""
    }
  }
};
</script>

<style>
.search-column {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 10px;
}

#search-input {
    background-color: rgba(255,255,255,0.2);
    border: none;
    color: white;
}

.search-results {
    margin: auto;
    margin-top: 0;
    text-align: center;
}

.btn-filter {
    margin: 1px;
    color: white;
    background-color: rgba(255,255,255,0.2);
    border: none;
}
</style>