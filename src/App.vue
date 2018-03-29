<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <md-tabs md-sync-route md-alignment="fixed">
        <md-tab md-label="Drinks" to="/drinks" id='tab_drinks'></md-tab>
        <md-tab md-label="Orders" to="/orders" id='tab_orders'></md-tab>
        <md-tab md-label="FAQ" to="/faq" id='tab_faq'></md-tab>
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

<style lang="scss">
  #app {
    background-color: rgba(233,233,233, 1);
    min-height: 100vh;
  }

  //krijg de material css die de foute highlight in de tab veroorzaakt niet overschreven dus gebruik deze css klass van vue-router als hook
  // .router-link-active:hover:before {
  //   background-color:#e9e9e9 !important;
  // }
  // .router-link-active:before {
  //   background-color: transparent !important;
  // }

</style>

