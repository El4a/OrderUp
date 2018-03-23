<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="header">
      <md-bottom-bar md-type="shift">
        <md-bottom-bar-item>Drinks</md-bottom-bar-item>
        <md-bottom-bar-item>Orders</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
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

  .header {
    width: 100%;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06); //max-width needs to go //bug in vue material?
    .md-bottom-bar-item,
    .md-bottom-bar-item.md-active {
      max-width: none;
      font-size: 1.2rem;
    }
  }

</style>

