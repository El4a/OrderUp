<template>
  <md-dialog :md-active.sync="showDialog" :md-fullscreen=false @md-closed="onClosed">
    <span class="close" @click="close">
      <md-icon style="color: #fff">clear</md-icon>
    </span>
    <md-dialog-title>{{drink.name}}</md-dialog-title>

    <div class="content">
      <img v-bind:src="'/static/'+ drink.img" v-bind:alt="drink.name"/>
      <ul>
        <li v-for="ingredient in drink.ingredients">{{ingredient}}</li>
      </ul>
      <p>{{drink.description}}</p>

      <md-field :class="errorClass">
        <label>Enter your name to order</label>
        <md-input v-model="name" required></md-input>
        <span class="md-helper-text">*Idiotic names will be ignored</span>
        <span class="md-error">There is an error</span>
      </md-field>
    </div>

    <md-dialog-actions>
      <md-button class="md-primary md-raised md-dense" @click="sendOrder()">Order</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  import orderService from '@/data/OrderService';

  export default {
    props: ['drink'],
    data() {
      return {
        showDialog: true,
        name: null,
        hasName: true
      }
    },
    created: function () {
      //check for name cookie called "user"
      let match = document.cookie.match(new RegExp('(^| )user=([^;]+)'));
      if (match) {
        this.name = match[2];
      }
    },
    methods: {
      sendOrder() {
        this.hasName = !!this.name;
        if (this.hasName) {
          orderService.order(this.drink.id, this.name)
            .then(() => this.setUserCookie())
            .then(() => this.close())
            .then(() => this.$router.push('/orders'));
        }
      },
      setUserCookie() {
        document.cookie = "user=" + this.name + ";expires=Sun, 01 Apr 2018 12:00:00 UTC";
      },
      close() {
        this.showDialog = false;
      },
      onClosed() {
        this.$emit('closed');
      }
    },
    computed: {
      errorClass() {
        return {
          'md-invalid': !this.hasName
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    overflow: visible;
  }

  img {
    max-width: 55%;
    max-height: 25vh;
    float: left;
    margin-top: .5rem;
    margin-left: -1.5rem;

  }

  ul {
    float: left;
    max-width: 50%;
  }

  p {
    clear: both;
  }

  .content {
    display: inline;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .close {
    position: absolute;
    right: -9px;
    top: -9px;
    border: 2px solid #fff;
    background-color: #00796B;
    border-radius: 50%;
    padding: .2rem;
  }
</style>
