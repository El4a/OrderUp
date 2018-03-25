<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <md-tabs md-sync-route md-alignment="fixed">
        <md-tab md-label="Drinks" to="/"></md-tab>
        <md-tab md-label="Orders" to="/components/tabs/pages"></md-tab>
      </md-tabs>
      <!-- TODO optional : custom template for amount of orders?-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({

    })
  }

</script>

<style lang="scss" scoped>
  #app {
    background-color: #EEEEEE;
  }

</style>

