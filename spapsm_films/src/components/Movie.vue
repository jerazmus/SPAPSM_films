<template>
  <b-container fluid class="main">
    <navbar></navbar>
    <span>
      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - INFORMACJE O FILMIE -->
        <b-col class="movie-details">
          <b-row class="movie-title-wrapper">
            <b-col class="title-column">
              <img @click="nav()" src="../assets/arrow.png" />
              <h3 class="movie-title">{{ this.movieTitle }}</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="quarter movie-description">
              <span>{{ this.movieDescription }}</span>
            </b-col>
            <b-col class="quarter movie-poster">
              <div class="movie-poster-mobile">
                <img
                  class="movie-poster-mobile"
                  v-bind:src="'https://image.tmdb.org/t/p/original' + this.poster"
                />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="quarter movie-info">
              <p class="detail">
                Duration:
                <span class="detail-variable">{{ this.movieDuration }}min</span>
              </p>
              <p class="detail">
                Release date:
                <span class="detail-variable">{{ this.movieYear }}</span>
              </p>
              <p class="detail">
                Genres:
                <span
                  v-for="(genre, index) in this.genres"
                  class="detail-variable"
                  :key="index"
                >{{ getGenres(index) }}</span>
              </p>
            </b-col>
            <b-col class="quarter movie-buttons">
              <p class="movie-button-wrapper">
                <span v-if="this.fav" class="movie-button">
                  remove from favorites
                  <img @click="removeData()" src="../assets/heart-after.png" />
                </span>
                <span v-else class="movie-button">
                  add to favorites
                  <img @click="addData()" src="../assets/heart-before.png" />
                </span>
              </p>
              <p class="movie-button-wrapper">
                <span v-if="this.watched" class="movie-button">
                  remove from watched
                  <img @click="removeWatched()" src="../assets/eye-after.png" />
                </span>
                <span v-else class="movie-button">
                  add to watched
                  <img @click="addWatched()" src="../assets/eye-before.png" />
                </span>
              </p>
              <p class="rating">Rating:</p>
              <p class="rating-variable-mobile">
                <span
                  class="rating-variable-mobile"
                >{{ this.movieRating }} ({{this.movieVotes}} votes)</span>
              </p>
              <p class="trailer-wrapper">
                <span class="trailer">
                  TRAILER
                  <img src="../assets/yt.png" />
                </span>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - INFORMACJE O FILMIE -->
    <b-row class="d-none d-md-flex movie-details-container">
      <b-col class="movie-details-column-desktop" xs="12" sm="12" md="8" lg="8" xl="8">
        <b-row>
          <b-col class="movie-title-wrapper-desktop">
            <h1>
              <img @click="nav()" src="../assets/arrow.png" />
              {{ this.movieTitle }}
            </h1>
          </b-col>
        </b-row>
        <b-row class="movie-details-wrapper-desktop">
          <b-col class="movie-details-desktop" xs="12" sm="12" md="12" lg="12" xl="9">
            <b-row>
              <b-col class="quarter-desktop movie-description-desktop">
                <p class="description-wrapper-desktop">
                  <span class="description-desktop">{{ this.movieDescription }}</span>
                </p>
              </b-col>
              <b-col class="quarter-desktop movie-poster-desktop-wrapper">
                <div class="movie-poster-desktop">
                  <img
                    class="movie-poster-desktop"
                    v-bind:src="'https://image.tmdb.org/t/p/original' + this.poster"
                  />
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="quarter-desktop movie-info-desktop">
                <p class="detail-desktop">
                  Duration:
                  <span class="detail-variable-desktop">{{ this.movieDuration }} min</span>
                </p>
                <p class="detail-desktop">
                  Release date:
                  <span class="detail-variable-desktop">{{ this.movieYear }}</span>
                </p>
                <p class="detail-desktop">
                  Genres:
                  <span
                    v-for="(genre, index) in this.genres"
                    class="detail-variable-desktop"
                    :key="index"
                  >{{ getGenres(index) }}</span>
                </p>
              </b-col>
              <b-col class="quarter-desktop">
                <p class="movie-button-wrapper">
                  <span v-if="this.fav" class="movie-button">
                    remove from favorites
                    <img @click="removeData()" src="../assets/heart-after.png" />
                  </span>
                  <span v-else class="movie-button">
                    add to favorites
                    <img @click="addData()" src="../assets/heart-before.png" />
                  </span>
                </p>
                <p class="movie-button-wrapper">
                  <span v-if="this.watched" class="movie-button">
                    remove from watched
                    <img @click="removeWatched" src="../assets/eye-after.png" />
                  </span>
                  <span v-else class="movie-button">
                    add to watched
                    <img @click="addWatched" src="../assets/eye-before.png" />
                  </span>
                </p>
                <p class="rating">Rating:</p>
                <p class="rating-variable">
                  <span class="rating-variable">{{ this.movieRating }} ({{this.movieVotes}} votes)</span>
                </p>
                <p class="trailer-wrapper" @click="openYoutube">
                  <span class="trailer">
                    TRAILER
                    <img src="../assets/yt.png"/>
                  </span>
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from "./Navbar";
import firebase from "firebase";

export default {
  data() {
    return {
      appTitle: "Film Nation",
      api: "https://api.themoviedb.org/3/",
      results: [],
      movieTitle: "",
      movieDescription: "",
      movieDuration: "",
      movieYear: "",
      poster: ``,
      movieRating: "",
      movieVotes: "",
      genres: [],
      fav: false,
      watched: false
    };
  },
  props: ["title", "year"],
  components: {
    Navbar
  },
  methods: {
    nav() {
      // przycisk cofania do poprzedniej strony
      this.$router.go(-1);
    },
    getApi(e) {
      this.$http
        .get(
          `https://api.themoviedb.org/3/movie/${e}?api_key=f2bdee8336da34398a99b1ea328805d8`
        )
        .then(response => {
          // przypisanie danych do data -> return
          this.results = response.data;
          this.movieTitle = this.results.title;
          this.movieDescription = this.results.overview;
          this.movieDuration = this.results.runtime;
          this.movieYear = this.results.release_date;
          //   this.movieDirector
          // this.cast
          this.movieRating = this.results.vote_average;
          this.movieVotes = this.results.vote_count;
          this.poster = this.results.poster_path;
          this.genres = this.results.genres;
          console.log(this.results);
        })
        .catch(err => console.log("error", err));
    },
    getGenres(e) {
      if (e !== this.genres.length - 1) {
        return `${this.genres[e].name}, `;
      } else {
        return `${this.genres[e].name}`;
      }
    },
    addData() {
      // dodawanie do bazy danych, testowo działa, dopisać z api dane
      var user = firebase.auth().currentUser;
      const uid = user.uid;
      firebase
        .database()
        .ref(`user_films/${uid}/${this.$route.params.filmId}`)
        .set({
          filmId: this.$route.params.filmId
        })
        .then(() => {
          this.checkIfExists(this.$route.params.filmId);
        });
      this.fav = true;
    },
    removeData() {
      var user = firebase.auth().currentUser;
      const uid = user.uid;
      firebase
        .database()
        .ref(`user_films/${uid}/${this.$route.params.filmId}`)
        .remove();
      this.fav = false;
    },
    addWatched() {
      var user = firebase.auth().currentUser;
      const uid = user.uid;
      firebase
        .database()
        .ref(`user_watched/${uid}/${this.$route.params.filmId}`)
        .set({
          filmId: this.$route.params.filmId
        })
        .then(() => {
          this.checkIfExists(this.$route.params.filmId);
        });
      this.watched = true
    },
    removeWatched() {
      var user = firebase.auth().currentUser;
      const uid = user.uid;
      firebase
        .database()
        .ref(`user_watched/${uid}/${this.$route.params.filmId}`)
        .remove();
      this.watched = false
    },
    openYoutube(){
      var movieTitle = this.movieTitle;
      var movieYear = (this.movieYear).substring(0,4);
      console.log(typeof movieYear);

      var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=`+ movieTitle + ` ` + movieYear + `trailer&key=AIzaSyDrLjC6UBbwFp9Jgpajx8Z5qyo93ylWpXg`;
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data.items);
            var site = 'https://youtube.com/watch?v='+data.items[0].id.videoId;
            console.log(site);
            window.open(site);
        }).catch(err => console.error(err));
    }
  },
  mounted() {
    // console.log(this.$route.params.filmId);
    // odpalenie funkcji pobierającej dane od filmu na wejśćiu na podstrone
    this.getApi(this.$route.params.filmId);
    var user = firebase.auth().currentUser;
    const uid = user.uid;

    const ref = firebase
      .database()
      .ref(`user_films/${uid}/${this.$route.params.filmId}`);

    ref.once("value").then(snapshot => {
      if (snapshot.child("filmId").exists()) {
        this.fav = true;
        // pokaż button usuń rekord
      } else {
        this.fav = false;
        // pokaż button dodaj do ulubionych
      }
    });

    const watch = firebase
      .database()
      .ref(`user_watched/${uid}/${this.$route.params.filmId}`);

    watch.once("value").then(snapshot => {
      if (snapshot.child("filmId").exists()) {
        this.watched = true;
        // pokaż button usuń rekord
      } else {
        this.watched = false;
        // pokaż button dodaj do ulubionych
      }
    });
  }
};
</script>

<style>
/* DESKTOP STYLE */

.movie-details-container {
  min-width: 80vw;
  min-height: 90vh;
  margin: auto;
  font-family: "Fira Sans Condensed", sans-serif;
  background-color: rgba(0, 0, 0, 0.8);
}

.movie-details-desktop {
  border: 4px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 80vh;
  margin: auto;
  padding: 0;
  color: rgba(255, 255, 255, 0.61);
}

.movie-details-wrapper-desktop {
  margin: auto;
}

.movie-details-column-desktop {
  margin: auto;
}

.movie-title-wrapper-desktop {
  text-align: center;
}

.quarter-desktop {
  min-width: 50%;
  min-height: 40vh;
  max-width: 50%;
  max-height: 40vh;
}

.quarter-desktop::-webkit-scrollbar {
  display: none;
}

.movie-description-desktop {
  overflow: scroll;
}

.description-wrapper-desktop {
  padding-top: 20px;
  padding-left: 15px;
}

.description-desktop {
  color: rgba(255, 255, 255, 0.61);
}

.movie-info-desktop {
  padding-top: 20px;
  padding-left: 30px;
  overflow: scroll;
}

.movie-poster-desktop-wrapper {
  /* To jest "prostokąt" w którym znajduje się plakat */
  margin: 0;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
}

.movie-poster-desktop {
  /* To jest plakat filmu */
  width: 260px;
  height: auto;
  background-color: grey;
  display: inline-block;
  border-radius: 10px;
  /* margin-top: 20px; */
}

.detail-desktop {
  margin: 0;
  font-size: 20px;
}

.detail-variable-desktop {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.61);
  margin: 0;
}

/* MOBILE STYLE */

.movie-details {
  min-width: 80vw;
  min-height: 90vh;
  margin: auto;
  font-family: "Fira Sans Condensed", sans-serif;
}

.quarter {
  min-height: 40vh;
  max-height: 40vh;
}

.quarter::-webkit-scrollbar {
  display: none;
}

.movie-title-wrapper {
  color: white;
}

.title-column {
  padding: 0;
}

.movie-title-wrapper img {
  -webkit-filter: opacity(60%);
  filter: opacity(60%);
  height: 36px;
  width: 36px;
  position: absolute;
  margin: 0;
  padding: 0;
}

.movie-title {
  text-align: right;
}

.movie-description {
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  font-size: 15px;
  padding: 0;
  padding-left: 10px;
  padding-top: 15px;
  color: rgba(255, 255, 255, 0.61);
  font-weight: 300;
  overflow: scroll;
}

.movie-poster {
  /* To jest "prostokąt" w którym znajduje się plakat */
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  margin: auto;
  padding: 0;
  padding-top: 20px;
}

.movie-poster-mobile {
  /* To jest plakat filmu */
  width: 130px;
  height: auto;
  background-color: grey;
  display: inline-block;
  border-radius: 10px;
}

.movie-info {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  font-weight: 100;
  padding: 0;
  padding-left: 10px;
  padding-top: 10px;
  overflow: scroll;
}

.detail {
  margin: 0;
}

.detail-variable {
  color: rgba(255, 255, 255, 0.61);
}

.movie-buttons {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  padding: 0;
  padding-top: 10px;
  font-weight: 300;
  overflow: scroll;
}

.movie-button {
  color: rgba(255, 255, 255, 0.61);
  font-size: 15px;
}

.movie-button img {
  -webkit-filter: opacity(60%);
  filter: opacity(60%);
  height: 36px;
  width: 36px;
}

.movie-button-wrapper {
  margin: 0;
  padding-right: 10px;
  text-align: right;
}

.rating {
  text-align: center;
  margin-top: 15px;
  font-size: 25px;
}

.rating-variable {
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.61);
}

.rating-variable-mobile {
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.61);
}

.trailer-wrapper {
  text-align: center;
  font-weight: 300;
  margin: 0;
}

.trailer {
  letter-spacing: 2px;
  margin: 0;
  padding: 0;
}

.trailer img {
  -webkit-filter: opacity(60%);
  filter: opacity(60%);
  height: 36px;
  width: 36px;
}
</style>