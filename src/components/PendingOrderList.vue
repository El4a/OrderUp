<template>
<div class="container">
  <div class="spinner" v-if="spinner">
    <md-progress-spinner class="md-accent" :md-diameter="50" md-mode="indeterminate" :md-stroke="3"></md-progress-spinner>
  </div>
  <div class="md-layout md-gutter">
    <div class="md-layout-item" v-for="order in orders">
      <md-card>
        <md-card-header>
          <md-card-media>
            <img v-bind:src="'/static/'+order.drink.img" v-bind:alt="order.drink.name">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">{{order.drink.name}}</div>
            <div class="md-subhead">{{order.name}}</div>
          </md-card-header-text>
        </md-card-header>
        <md-button  class="md-accent md-raised md-dense">
          Ontvangen</md-button>
      </md-card>
    </div>
  </div>
  </div>
</template>

<script>
  import orderService from '@/data/OrderService';
  import drinkService from '@/data/DrinkService';

  export default {
    data() {
      return {
        orders: [],
        spinner: true
      }
    },
    created: function () {
      orderService.read()
        .then(data => {
           return data.filter(d => !d.afgeleverd);
        })
        .then(data => {
          this.orders = data.map((d) => {
            return {
              name: d.name,
              drink: drinkService.findById(d.drinkId)
            }
          })
        })
        .then(() => this.spinner = false);
    }
  }

</script>

<style lang="scss" scoped>

.container {
 padding: 5vw;
}
  .md-layout {
    flex-direction: column;

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

  .spinner {
    text-align: center;
  }


</style>

