<template>
  <span>
    <!-- NAVBAR KTÓRY WYŚWIETLA SIĘ TYLKO DLA BREAKPOINTÓW OD MEDIUM W GÓRE - POKAZUJE IKONĘ, NAZWĘ I MENU UŻYTKOWNIKA -->

    <div class="d-none d-md-block">
      <div>
        <b-navbar toggleable="md">
          <b-navbar-brand href="#">
            <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
          </b-navbar-brand>
          <b-navbar-brand href="#" class="text-light">{{ appTitle }}</b-navbar-brand>
          <b-navbar-nav>
            <b-nav-item @click.prevent="dashboard" class="navbar-item-big">My dashboard</b-nav-item>
            <b-nav-item @click.prevent="search" class="navbar-item-big">Search</b-nav-item>
            <b-nav-item @click.prevent="topMovies" class="navbar-item-big">Top movies</b-nav-item>
            <b-nav-item @click.prevent="randomizer" class="navbar-item-big">Randomizer</b-nav-item>
            <b-nav-item @click.prevent="account" class="navbar-item-big">My account</b-nav-item>
            <b-nav-item @click.prevent="signout" class="navbar-item-big">Log Out</b-nav-item>
            <b-nav-item @click.prevent="movie" class="navbar-item-big">Movie</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>

    <!-- ROZWIJANY NAVBAR, KTÓRY POJAWIA SIĘ DLA BREAKPOINTA MEDIUM I NIŻEJ, ZNADUJE SIE TU MENU UŻYTKOWNIKA -->

    <div class="d-md-none">
      <b-navbar toggleable sticky>
        <b-navbar-brand href="#">
          <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
        </b-navbar-brand>
        <b-navbar-brand href="#" class="text-light">{{ appTitle }}</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse" class="text-light">
          <b-icon icon="list"></b-icon>
        </b-navbar-toggle>
          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-dropdown-item @click.prevent="dashboard">My dashboard</b-dropdown-item>
            <b-dropdown-item @click.prevent="search">Search</b-dropdown-item>
            <b-dropdown-item @click.prevent="topMovies">Top movies</b-dropdown-item>
            <b-dropdown-item @click.prevent="randomizer">Randomizer</b-dropdown-item>
            <b-dropdown-item @click.prevent="account">My account</b-dropdown-item>
            <b-dropdown-item @click.prevent="signout">Log Out</b-dropdown-item>
            <b-dropdown-item @click.prevent="movie">Movie</b-dropdown-item>
          </b-collapse>
      </b-navbar>
    </div>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      appTitle: "Film Nation",
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
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
    },
    movie () {
      // metoda tymczasowa navara
      this.$router.push("/movie");
    }
  }
};
</script>

<style> 
@media screen and (max-width: 991px) and (min-width: 768px) {
}
</style>