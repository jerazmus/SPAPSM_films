import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase/app'
import router from "./routes/index";
import store from "./store"
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$http = axios

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCe6AHTCl4iOQty_of7PC3nj3X-6fySqww",
  authDomain: "films-spapsm-project.firebaseapp.com",
  databaseURL: "https://films-spapsm-project.firebaseio.com",
  projectId: "films-spapsm-project",
  storageBucket: "films-spapsm-project.appspot.com",
  messagingSenderId: "661885759495",
  appId: "1:661885759495:web:b91de05043a77e300dfaa2"
};

firebase.initializeApp(firebaseConfig)


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
