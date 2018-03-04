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
  .md-layout-item {
    height: 7rem;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }
  }
</style>

<style lang="scss" scoped>

#app {
  padding: 1.5rem;
}
</style>
