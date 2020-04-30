<template>
  <b-container fluid class="main">
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

        <!-- ROZWIJANY NAVBAR, KTÓRY POJAWIA SIĘ DLA BREAKPOINTA MEDIUM I NIŻEJ, NIEUŻYWANY COLLAPSE -->

        <div class="d-md-none home-container">
          <b-navbar toggleable>
            <b-navbar-brand href="#">
              <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
            </b-navbar-brand>
            <b-navbar-brand href="#" class="text-light">{{ appTitle }}</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse" class="text-light">
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
            </b-collapse>
          </b-navbar>

          <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ -->

          <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">

            <!-- WYBÓR LOGOWANIE/REJESTRACJA -->

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
                <b-form-input id="password" type="password" v-model="form_login.password" v-on:keyup.enter="login"></b-form-input>
              </b-form-group>

              <b-button @click="login" variant="outline-light">Log In</b-button>
              <div id="choice">
                <br />or Log In with
                <br />
                <button @click="socialGoogleLogin" class="social-button">
                  <img alt="Google Logo" src="../assets/google.png" />
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
        </div>
      </span>

      <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - REJESTRACJA/LOGOWANIE + OPIS SĄ WYŚWIETLONE OBOK SIEBIE -->

      <b-row class="d-none d-md-flex home-container">
        <b-col class="main-form form-desc" xs="12" sm="12" md="4" lg="4" xl="4">
          <h4 class="welcome">WELCOME TO</h4>
          <h1 class="separator">FILM NATION</h1>
          <p>Film Nation offers you the latest insight into world of movies and world's premieres. Find your favorite movies, learn about new ones, discover the neverending joy of watching them with friends, family or simply by yourself!</p>
        </b-col>

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
              <b-form-input id="password" type="password" v-model="form_login.password" v-on:keyup.enter="login"></b-form-input>
            </b-form-group>

            <b-button @click="login" variant="outline-light">Log In</b-button>
            <div id="choice">
              <br />or Log In with
              <br />
              <button @click="socialGoogleLogin" class="social-button">
                <img alt="Google Logo" src="../assets/google.png" />
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
      </b-row>
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
          alert("Logged in successfully!");
          this.$router.replace({ path: "/dashboard" });
        })
        .catch(err => {
          alert("Wrong credentials! Please, try again.");
          this.error = err.message;
        });
    },
    socialGoogleLogin() {
      const ggl = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(ggl)
        .then(user => {
          // console.log(user);
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

.row {
  margin: 0;
}

h1,
p,
.nav-link {
  color: white !important;
}

.nav-link:hover {
  color: grey !important;
}

.navbar {
  color: white !important;
  font-family: 'Fira Sans Condensed', sans-serif !important;
}

.navbar-nav {
  font-family: 'Fira Sans Condensed', sans-serif;
  margin-left: auto;
}

.main {
  background-color: #343a40;
  background-color: black;
  background-image: url("../assets/cinema2.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: center;
  background-size: cover;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}


.home-container {
  margin: 0;
  min-height: 87vh;
  background-color: rgba(0, 0, 0, 0.7);
}

.main-form {
  position: relative;
  margin: 0;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-family: 'Fira Sans Condensed', sans-serif;
}

.form-desc {
  text-align: center;
  margin-top: 300px;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-weight: 300;
  font-size: 20px;
}

.form-log,
.form-sign {
  background-color: rgba(255, 255, 255, 0);
  padding: 10px;
  border-radius: 10px;
}

.form-log {
  margin-top: 70px;
}

.welcome {
  font-weight: 300;
  font-size: 30px;
}

.separator {
  border-bottom: 1px solid white;
  width: 50%;
  margin: auto;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 50px;
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
  margin-right: 1px;
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
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: none;
}
.social-button img {
  width: 100%;
}
hr {
  background-color: white;
  height: 2px;
  border: 0;
  width: 50%;
  margin: 10px 25% 10px 25%;
}

@media only screen and (max-width: 768px) {
.main {
  background-image: none;
}

.main-form {
  margin-top: 5%;
}

.container-fluid {
  padding: 0;
}

}
</style>