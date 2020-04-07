<template>
  <span>
    <div class="d-none d-sm-block">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#">
            <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
          </b-navbar-brand>
          <b-navbar-brand href="#">{{ appTitle }}</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav>
                <b-nav-item href="#">Sign In</b-nav-item>
                <b-nav-item href="#">Register</b-nav-item>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>

    <div class="d-sm-none">
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img src="@/assets/cinema.png" id="icon_film_white" alt="camera" />
        </b-navbar-brand>
        <b-navbar-brand href="#">{{ appTitle }}</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Sign In</b-nav-item>
            <b-nav-item href="#">Register</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </span>
</template>

<script>
export default {
  name: "AppNavi",
  data() {
    return {
      appTitle: "Film Nation"
    };
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
#icon_film {
  width: 30px;
  height: 30px;
}
#icon_film_white {
  width: 30px;
  height: 30px;
  filter: invert(99%) sepia(13%) saturate(121%) hue-rotate(299deg)
    brightness(116%) contrast(100%);
}
.active {
  color: red;
}
</style>