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

</style>

<style lang="scss" scoped>

#app {
  padding: 5vw;
  background-color: #EEEEEE;
}
</style>
