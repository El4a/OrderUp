<template>
  <md-dialog :md-active.sync="showDialog" :md-fullscreen=false>
    <span class="close" @click="showDialog = false">
      <md-icon style="color: #fff">clear</md-icon>
    </span>
    <md-dialog-title>{{obj.name}}</md-dialog-title>

    <div class="content">
      <img v-bind:src="'/static/'+obj.img" v-bind:alt="obj.name" />
      <ul>
        <li v-for="i in obj.ingredients">{{i}}</li>
      </ul>
      <p>
        {{obj.description}}
      </p>

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
  export default {
    name: 'order',
    props: ['showDialog', 'obj'],
    data() {
      return {
        imgsrc: "../assets/" + this.obj.img, //for some reason this doenst work on the image with v-bind -- weird
        name: null,
        hasName: true
      }
    },
    methods: {
      sendOrder() {
        (this.name !== null && this.name !== '') ? this.hasName = true: this.hasName = false;

        if (this.hasName === true) {
          //TODO make http req

          this.showDialog = false;

          //TODO route to order view
        }
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

