<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
// ??? hoooow
// @import "~vue-material/dist/theme/engine"; // Import the theme engine

// @include md-register-theme("default", (
//   primary: md-get-palette-color(teal, A700), // The primary color of your application
//   accent: md-get-palette-color(red, 200) // The accent or secondary color
// ));

// @import "~vue-material/dist/theme/all"; // Apply the theme

  .md-gutter .md-layout-item:not(:last-child) {
    margin-right: 5%;
  }

  .md-layout-item { //need MQ for desktop view (more items per row -> change
    height: 45vw;
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>

<style lang="scss" scoped>

#app {
  padding: 1.5rem;
}
</style>
