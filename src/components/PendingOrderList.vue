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
        <md-button class="md-accent md-raised md-dense" v-on:click="onAfgeleverd(order)">Ontvangen</md-button>
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
    methods: {
      refreshOrders() {
        orderService.read()
          .then(orders => orders.filter(order => !order.afgeleverd))
          .then(orders => orders.map(order => {
            return {
              id: order.id,
              name: order.name,
              drink: drinkService.findById(order.drinkId)};}))
          .then(orders => this.orders = orders)
          .then(() => this.spinner = false);
      },
      onAfgeleverd(order) {
        orderService.afgeleverd(order.id)
          .then(() => this.refreshOrders());
      }
    },
    created: function () {
      this.refreshOrders();
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

  .md-card-media {
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

