<template>
  <b-container fluid class="main">
    <navbar></navbar>
    <span>
      <div class="d-md-none home-container">
        <!-- TU JEST CIAŁO STRONY, ZAWIERAJACY SIE W BLOKU "MOBILNYM", CZYLI TA WERSJA POKAZUJE SIE TYLKO DLA BREAKPOINTOW MEDIUM I NIŻEJ - USTAWIENIA KONTA -->

        <b-col class="main-form" xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <b-col class="account-title">
              <h1>Account settings</h1>
            </b-col>
          </b-row>
          <b-row class="account-details">
            <div class="form-sign">
              <p>Username: <span class="account-info-text">{{ name }}</span></p>
              <p>Email: <span class="account-info-text">{{ email }}</span></p>
              <form action="#" @submit.prevent="updatePassword" id="acc-form">
                <b-form-group label="New password:" label-for="new_pwd">
                  <b-form-input id="new_pwd" type="password" v-model="pwd"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Confirm password:"
                  label-for="new_pwd_chk"
                  description="Minimum 8 characters long, at least one number."
                >
                  <b-form-input id="new_pwd_chk" type="password" v-model="pwdChk"></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="outline-light">Change password</b-button>
              </form>
            </div>
          </b-row>
        </b-col>
      </div>
    </span>

    <!-- TUTAJ JEST CIAŁO HOME SCREEN DLA BREAKPOINTOW OD MEDIUM W GÓRE - USTAWIENIA KONTA -->

    <b-row class="d-none d-md-flex account-container">
      <b-col class="account-box" xs="12" sm="12" md="12" lg="12" xl="12">
        <b-row>
          <b-col class="account-title">
            <h1>Account settings</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="account-details" xs="12" sm="12" md="4" lg="4" xl="4">
            <div class="form-sign">
              <p>Username: <span class="account-info-text">{{ name }}</span></p>
              <p>Email: <span class="account-info-text">{{ email }}</span></p>
              <form action="#" @submit.prevent="updatePassword">
                <b-form-group label="New password:" label-for="new_pwd">
                  <b-form-input id="new_pwd" type="password" v-model="pwd"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Confirm password:"
                  label-for="new_pwd_chk"
                  description="Minimum 8 characters long, at least one number."
                >
                  <b-form-input id="new_pwd_chk" type="password" v-model="pwdChk"></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="outline-light">Change password</b-button>
              </form>
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
      searchTextInput: "",
      pwd: "",
      pwdChk: "",
      name: null,
      email: null,
      uid: null,
      provider: null
    };
  },
  components: {
    Navbar
  },
  methods: {
    updatePassword() {
      if (this.pwd != null && this.pwd == this.pwdChk) {
        console.log("ok");
        var user = firebase.auth().currentUser;
        var accForm = document.getElementById("acc-form")
        user
          .updatePassword(this.pwd)
          .then(function() {
            console.log("Password changed!");
            alert('Password changed!')
            accForm.reset()
          })
          .catch(function(error) {
            console.log(`Error: ${error}`);
          });
      }
    }
  },
  created() {
    var user = firebase.auth().currentUser;
    this.name = user.displayName;
    this.uid = user.uid;
    this.email = user.email;

    //odczyt danych zalogowanego usera
    user.providerData.forEach(function(profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
};
</script>

<style>
.account-container {
  text-align: left;
  margin: auto;
  margin-top: 50px;
  min-height: 85vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: "Fira Sans Condensed", sans-serif;
}

.account-box {
  background-color: rgba(0, 0, 0, 0.7);
  margin-left: auto;
  margin-right: auto;
}

.account-title {
  text-align: center;
  margin: auto;
}

.account-details {
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin: auto;
}

.form-sign {
  margin: auto;
}

.account-info-text {
  color: rgba(255, 255, 255, 0.4);
}
</style>