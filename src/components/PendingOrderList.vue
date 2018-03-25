<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <md-card-media>
            <img src="/static/red-wine.jpeg" alt="Rode wijn">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">Rode wijn</div>
            <div class="md-subhead">Dieter Van Peer</div>
          </md-card-header-text>
        </md-card-header>
        <md-button  class="md-accent md-raised md-dense">
          Ontvangen</md-button>
      </md-card>
    </div>
    <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <md-card-media>
            <img src="/static/coffee.jpeg" alt="Koffie">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">Koffie</div>
            <div class="md-subhead">De Bomma</div>
          </md-card-header-text>
        </md-card-header>
        <md-button  class="md-accent md-raised md-dense">
          Ontvangen</md-button>
      </md-card>
    </div>

     <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <md-card-media>
            <img src="/static/duvel.jpg" alt="Duvel">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">Duvel</div>
            <div class="md-subhead">De Bomma</div>
          </md-card-header-text>
        </md-card-header>
         <md-button  class="md-accent md-raised md-dense">
          Ontvangen</md-button>
      </md-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created: function () {
      this.orders = [

      ]
    }
  }

</script>

<style lang="scss" scoped>
  .md-layout {
    flex-direction: column;
    padding: 5vw;

    .md-layout-item {
      margin-top: .5rem;
      margin-bottom: .5rem;
    } 
  }

  .md-card-header {
    padding: .5rem;
  }

  .md-card-media  {
    text-align: center;
    margin-left: 0;
    margin-right: .5rem;

    img {
      height: inherit;
      max-width: 100%;
      width: auto;
    }
  }

  .md-button {
    position: absolute;
    bottom: 0;
    right: 0;

  }

</style>

