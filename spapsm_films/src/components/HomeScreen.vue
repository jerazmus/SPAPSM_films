<template>
  <b-container fluid class="main">
    <div id="cover">
      <span>
        <!-- NAVBAR KTÓRY WYŚWIETLA SIĘ TYLKO DLA BREAKPOINTÓW OD MEDIUM W GÓRE - POKAZUJE TYLKO IKONĘ I NAZWĘ  -->

        <div class="d-none d-md-block">
          <div>
            <b-navbar toggleable="lg">
              <b-navbar-brand href="#">
                <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
              </b-navbar-brand>
              <b-navbar-brand href="#" class="text-light">{{ appTitle }}</b-navbar-brand>
            </b-navbar>
          </div>
        </div>

        <!-- ROZWIJANY NAVBAR, KTÓRY POJAWIA SIĘ DLA BREAKPOINTA MEDIUM I NIŻEJ, ZNAJDUJE SIĘ W NIM LOGOWANIE I REJESTRACJA -->

        <div class="d-md-none">
          <b-navbar toggleable>
            <b-navbar-brand href="#">
              <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
            </b-navbar-brand>
            <b-navbar-brand href="#" class="text-light">{{ appTitle }}</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse" class="text-light">
              <b-icon icon="list"></b-icon>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
                  <div id="choice">
                    <b-button
                      class="button-select"
                      variant="outline-dark"
                      @click="clickLog()"
                      v-bind:class="{ active : clickedLog }"
                    >LOG IN</b-button>
                    <b-button
                      class="button-select"
                      variant="outline-dark"
                      @click="clickSign()"
                      v-bind:class="{ active : clickedSign }"
                    >SIGN UP</b-button>
                  </div>
                  <!-- logowanie -->
                  <div class="form-log" v-if="clickedLog == true">
                    <b-form-group label="Email address:" label-for="email">
                      <b-form-input id="email" v-model="form_login.email"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Password:" label-for="password">
                      <b-form-input id="password" type="password" v-model="form_login.password"></b-form-input>
                    </b-form-group>

                    <b-button @click="login" variant="outline-light">Log In</b-button>
                    <div id="choice">
                      <br />or Sign In with
                      <br />
                      <button @click="socialGoogleLogin" class="social-button">
                        <img alt="Google Logo" src="../assets/google_icon.png" />
                      </button>
                      <button @click="socialFacebookLogin" class="social-button">
                        <img alt="FB Logo" src="../assets/facebook_icon.png" />
                      </button>
                    </div>
                  </div>
                  <!-- rejestracja -->
                  <div class="form-sign" v-if="clickedSign == true">
                    <form action="#" @submit.prevent="submit">
                      <b-form-group label="Username:" label-for="username-sign">
                        <b-form-input id="username-sign" v-model="form_register.username"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label="Email address:"
                        label-for="email-sign"
                        description="We'll never share your email with anyone else."
                      >
                        <b-form-input id="email-sign" v-model="form_register.email"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label="Password:"
                        label-for="password-sign"
                        description="Minimum 8 characters long, at least one number."
                      >
                        <b-form-input id="password-sign" type="password" v-model="form_register.password"></b-form-input>
                      </b-form-group>

                      <b-form-group label="Repeat password:" label-for="password-sign-r">
                        <b-form-input id="password-sign-r" type="password" v-model="form_register.pwd_check"></b-form-input>
                      </b-form-group>

                      <b-button type="submit" variant="outline-light">Sign Up</b-button>
                    </form>
                  </div>
                </b-col>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

          <!-- TU JEST OPIS STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ -->

          <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
            <h1>Film Nation</h1>
            <p>One of the most, if not most popular online databases in regards to entertainment media, the Internet Movie Database, better known as IMDB is your one stop shop for all your movie related needs. Launched back in October 1990, IMDB serves as an informational database for everything related to film, television and video games. The site takes it a step further by providing information on just about every possible known actor and director which will include short bios and of course a list of films they were in, produced or directed. Television appearances are also catalogued. Information on production staff, voice actors,and film/television/video game characters can also be accessed for further information as well. The content on IMDB is massive with over 2 million titles, 5 million plus accessible databases about character personalities and 40 million registered users, there is something for everyone. From trivia, quotes, news related to movies, television and celebrities, movie trailers, galleries and various other lists and interactive sections, IMDB really is the place you should visit first if you’re interested in what’s going on in the film and television industry.</p>
          </b-col>
        </div>
      </span>

      <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - REJESTRACJA/LOGOWANIE + OPIS SĄ WYŚWIETLONE OBOK SIEBIE -->

      <b-row class="d-none d-md-inline-flex">
        <b-col class="main-form" xs="12" sm="12" md="4" lg="4" xl="4">
          <div id="choice">
            <b-button
              class="button-select"
              variant="outline-dark"
              @click="clickLog()"
              v-bind:class="{ active : clickedLog }"
            >LOG IN</b-button>
            <b-button
              class="button-select"
              variant="outline-dark"
              @click="clickSign()"
              v-bind:class="{ active : clickedSign }"
            >SIGN UP</b-button>
          </div>
          <!-- logowanie -->
          <div class="form-log" v-if="clickedLog == true">
            <b-form-group label="Email address:" label-for="email">
              <b-form-input id="email" v-model="form_login.email"></b-form-input>
            </b-form-group>

            <b-form-group label="Password:" label-for="password">
              <b-form-input id="password" type="password" v-model="form_login.password"></b-form-input>
            </b-form-group>

            <b-button @click="login" variant="outline-light">Log In</b-button>
            <div id="choice">
              <br />or Sign In with
              <br />
              <button @click="socialGoogleLogin" class="social-button">
                <img alt="Google Logo" src="../assets/google_icon.png" />
              </button>
              <button @click="socialFacebookLogin" class="social-button">
                <img alt="FB Logo" src="../assets/facebook_icon.png" />
              </button>
            </div>
          </div>

          <!-- rejestracja -->
          <div class="form-sign" v-if="clickedSign == true">
            <form action="#" @submit.prevent="submit">
              <b-form-group label="Username:" label-for="username-sign">
                <b-form-input id="username-sign" v-model="form_register.username"></b-form-input>
              </b-form-group>

              <b-form-group
                label="Email address:"
                label-for="email-sign"
                description="We'll never share your email with anyone else."
              >
                <b-form-input id="email-sign" v-model="form_register.email"></b-form-input>
              </b-form-group>

              <b-form-group
                label="Password:"
                label-for="password-sign"
                description="Minimum 8 characters long, at least one number."
              >
                <b-form-input id="password-sign" type="password" v-model="form_register.password"></b-form-input>
              </b-form-group>

              <b-form-group label="Repeat password:" label-for="password-sign-r">
                <b-form-input id="password-sign-r" type="password" v-model="form_register.pwd_check"></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="outline-light">Sign Up</b-button>
            </form>
          </div>
        </b-col>

        <b-col class="main-form form-desc" xs="12" sm="12" md="6" lg="6" xl="6">
          <h1>Film Nation</h1>
          <p>One of the most, if not most popular online databases in regards to entertainment media, the Internet Movie Database, better known as IMDB is your one stop shop for all your movie related needs. Launched back in October 1990, IMDB serves as an informational database for everything related to film, television and video games. The site takes it a step further by providing information on just about every possible known actor and director which will include short bios and of course a list of films they were in, produced or directed. Television appearances are also catalogued. Information on production staff, voice actors,and film/television/video game characters can also be accessed for further information as well. The content on IMDB is massive with over 2 million titles, 5 million plus accessible databases about character personalities and 40 million registered users, there is something for everyone. From trivia, quotes, news related to movies, television and celebrities, movie trailers, galleries and various other lists and interactive sections, IMDB really is the place you should visit first if you’re interested in what’s going on in the film and television industry.</p>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "HomeScreen",
  data() {
    return {
      appTitle: "Film Nation",
      clickedLog: true,
      clickedSign: false,
      form_register: {
        username: "",
        password: "",
        pwd_check: "",
        email: ""
      },
      form_login: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    clickLog() {
      (this.clickedLog = true), (this.clickedSign = false);
    },
    clickSign() {
      (this.clickedLog = false), (this.clickedSign = true);
    },
    submit() {
      // sprawdzenie poprawności haseł
      if (this.form_register.password == this.form_register.pwd_check) {
        // autoryzacja aplikacji -> przekazuje dane do firebase -> po rejestracji metoda zwraca nazwe uzytkownika
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.form_register.email,
            this.form_register.password
          )
          .then(data => {
            data.user
              .updateProfile({
                displayName: this.form_register.username
              })
              .then(() => {
                alert('Accout has been created. Please log in.')
                // tu mozna dac przekierowanie po stworzeniu konta
                // this.$router.replace({ name: "" });

                // zerowanie formularza
                this.form_register.username = '',
                this.form_register.email = '',
                this.form_register.password = '',
                this.form_register.pwd_check = ''
              });
          })
          .catch(err => {
            this.error = err.message;
          });
      }
    },
    login() {
      // wykorzystanie maila i hasła do logowania -> przekierowanie na dashboard przez router
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.form_login.email,
          this.form_login.password
        )
        .then(() => {
          alert("signed!");
          this.$router.replace({ path: "/dashboard" });
        })
        .catch(err => {
          alert("wrong credentials");
          this.error = err.message;
        });
    },
    socialGoogleLogin() {
      const ggl = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(ggl)
        .then(user => {
          console.log(user);
          alert(`Logged as ${user.user.email}`);
          this.$router.push({ path: "/dashboard" });
        })
        .catch(err => {
          alert("error: " + err.message);
        });
    },
    socialFacebookLogin() {
      const ggl = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(ggl)
        .then(user => {
          console.log(user);
          alert(`Logged as ${user.user.email}`);
          this.$router.push({ path: "/dashboard" });
        })
        .catch(err => {
          alert("error: " + err.message);
        });
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

h1,
p {
  color: white;
}

.navbar {
  color: white !important;
}

.main {
  background-color: #343a40;
  background-color: black;
  background-position: bottom;
  background-size: center;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
}

.main-form {
  position: relative;
  align-content: flex-start;
  margin: 0;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  color: white;
}

#cover {
  min-width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

.form-log,
.form-sign,
.form-desc {
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  border-radius: 10px;
}

#choice {
  margin: auto;
  text-align: center;
  width: 100%;
}

#icon_film {
  width: 30px;
  height: 30px;
}

.button-select {
  color: grey;
}

button {
  color: white;
  margin-top: 10px;
}

button:focus {
  outline: none;
}

#icon_film_white {
  width: 30px;
  height: 30px;
  filter: invert(99%) sepia(13%) saturate(121%) hue-rotate(299deg)
    brightness(116%) contrast(100%);
}
.social-button {
  width: 75px;
  padding: 10px;
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.social-button img {
  width: 100%;
  opacity: 0.5;
}
hr {
  background-color: white;
  height: 2px;
  border: 0;
  width: 50%;
  margin: 10px 25% 10px 25%;
}
</style>