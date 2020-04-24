<template>
  <b-container fluid class="main">
    <span>
      <navbar></navbar>

      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - TOP FILMY -->

        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <h1>Most popular films today (themoviedb.org)</h1>
            <b-col class="search-results"></b-col>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - TOP FILMY -->

    <b-row class="d-none d-md-flex topmovies-container">
      <h1 class="welcome-title">Most popular films today (themoviedb.org)</h1>

      <b-col class="search-results" xs="12" sm="12" md="10" lg="10" xl="10"></b-col>
      <b-col class="search-results-week" xs="12" sm="12" md="10" lg="10" xl="10"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from "./Navbar";

export default {
  data() {
    return {
      appTitle: "Film Nation",
      apiLink: "https://api.themoviedb.org/3/"
    };
  },
  components: {
    Navbar
  },
  methods: {
    clearResults() {
      // czyszczenie kafelków po każdym szukaniu nowego hasła
      const divs = document.querySelectorAll(".search-results");
      return (divs[0].innerHTML = ""), (divs[1].innerHTML = "");
    },
    createFilmDivs() {
      //łapie wszystkie elementy z klasą
      const divResults = document.querySelectorAll(`.search-results`);

      divResults.forEach(view => {
        for (let i = 0; i < 10; i++) {
          if (this.results[i].poster_path != null) {
            // tworzenie div'a dla plakatu
            const div = document.createElement("div");
            div.className = "sample-movie bottom-space";
            // ścieżka do zdjecia plakatu
            const img = document.createElement("img");
            img.src = `https://image.tmdb.org/t/p/original${this.results[i].poster_path}`;
            // odnośnik do podstorny
            const a = document.createElement("a");
            a.href = "#";

            // numer pod filmem
            const number = document.createElement("span");
            number.className = "movie-rank";
            number.innerHTML = i + 1;

            a.appendChild(img);
            div.appendChild(a);
            div.appendChild(number);
            view.appendChild(div);
          }
        }
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

            this.clearResults();
            this.createFilmDivs();
          } else {
            alert("Nie ma takiego filmu w bazie");
          }
        });
    },
    // callApiWeek() {
    // // nie mam pomysłu jak fajnie uzależnić funkcje, żeby się zmieniały w zależności od trybu dzien-tydzien
    // // można na około to zrobić, aby po prostu inny div wybierały ale to jest kopiowanie kodu XD
    // // any idea how to fix it?
    //   this.$http
    //     .get(
    //       `${this.apiLink}trending/movie/week?api_key=f2bdee8336da34398a99b1ea328805d8`
    //     )
    //     .then(response => {
    //       //sprawdzenie czy istnieje dana fraza w bazie, jeśli nie to alert
    //       if (response.data.total_results != 0) {
    //         this.results = response.data.results;

    //         this.clearResults();
    //         this.createFilmDivs();
    //       } else {
    //         alert("Nie ma takiego filmu w bazie");
    //       }
    //     });
    // },
  },
  created() {
    this.callApiDay();
    // this.callApiWeek();
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
.bottom-space {
  margin-bottom: 50px;
}
.movie-rank {
  width: 180px;
  height: 25px;
  background-color: rgb(70, 70, 70);
  display: inline-block;
  margin-top: 1px;
  margin-left: 2px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
}

@media screen and (max-width: 424px){
  .movie-rank {
    width: 140px;
  }
}
</style>