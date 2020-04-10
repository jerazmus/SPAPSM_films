 
<template>
  <!-- to bedzie nasz home page po zalogowaniu : ) -->
  <div>
    <b-button variant="dark" @click.prevent="signout">Sign Out</b-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "/"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>