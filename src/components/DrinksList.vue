<template>
  <div id="list">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50" v-for="drink in drinks">
        <div class="drink-wrapper">
          <div class="img-wrapper">
             <img class="drink-img" v-bind:src="'/static/'+drink.img" v-bind:alt="drink.name"/>
          </div>     
          <div class="drink-name">{{drink.name}}</div>
          </div>
      </div>
    </div>
    <div class="disclaimer">DISCLAIMER: Nothing will look like its picture</div>
    <order-modal v-bind:showDialog="showModal" v-bind:obj="tempfakeObject"></order-modal>
  </div>
</template>

<script>
  import Order from '@/components/OrderView.vue';

  export default {
    name: 'Drinks', //works the same without this
    data() {
      return {
        showModal: false, //TODO: toggle this on opening and closing?
        tempfakeObject: {
          name: 'Hazel Cream',
          description: "Nostrud ea duis dolore in pariatur aliquip anim ad aliquip sint duis velit do laboris.",
          img: 'hazel-cream.jpg',
          ingredients: ['wodka', 'room', 'kahlua', 'frangelico']
        }
      }
    },
    created: function() {
      this.drinks = [
         {
          name: 'Pintje',
          description: "Simpel, dorstlessend, traditioneel. Jupiler, apache-helicopters weten waarom.",
          img: 'pintje.jpg',
          ingredients: ['water', 'hop', '???']
        },
        {
          name: 'Duvel',
          description: "'Pff pintjes zijn voor de zwakkelingen. Ik drink enkel Duvel, zoals échte venten' - De typische loser die direct plat gaat.",
          img: 'duvel.jpg',
          ingredients: ['water', 'thee']
        },
        {
          name: 'Thee',
          description: "Warm water met een smaakje. Standaard: Rooibos! Indien iets anders gewenst: come see me.",
          img: 'tea.jpeg',
          ingredients: ['water', 'thee']
        },
         {
          name: 'Koffie',
          description: "'t Is echt héél brakke (oplos)koffie, maar meh caffeine I guess.",
          img: 'coffee.jpeg',
          ingredients: ['water', 'koffie']
        },
        {
          name: 'Witte wijn',
          description: "Als de wijn gaet in den man, Leyt de wijsheyt in de kan.",
          img: 'white-wine.jpg',
          ingredients: ['druivennat']
        },
        {
          name: 'Rode wijn',
          description: "Zoals witte wijn, maar beter.",
          img: 'red-wine.jpeg',
          ingredients: ['druivennat', 'druivenschil']
        },
        {
          name: 'Cava',
          description: "Bubbels! Nee Lisa sorry, 't is geen echte champagne.",
          img: 'cava.png',
          ingredients: ['???']
        },
        {
          name: 'Mimosa',
          description: "Bubbels! Nee Lisa sorry, 't is geen echte champagne.",
          img: 'mimosa.jpg',
          ingredients: ['Cava', 'Sinaasappelsap']
        },
        {
          name: 'Wodka Orange',
          description: "Voor dat extra beetje vitamine C.",
          img: 'screwdriver.jpg',
          ingredients: ['Wodka', 'Sinaasappelsap']
        },
        {
          name: 'Cuba Libre',
          description: "",
          img: 'cuba-libre.jpg',
          ingredients: ['Bruine rum', 'Cola']
        },
        {
          name: 'Gin Tonic',
          description: "Aah, de hype van 2014. Maar volgens HLN zet deze trend zich ook komende zomer weer verder!",
          img: 'gin-tonic.jpg',
          ingredients: ['Gin', 'Tonic']
        },
        {
          name: 'Mojito',
          description: "",
          img: 'mojito.jpg',
          ingredients: ['Witte rum', 'Munt', 'Rietsuiker', 'Limoen', 'Bruiswater']
        },
        {
          name: 'Caprioska',
          description: "Niet te verwarren met een Caipirinha.",
          img: 'caprioska.jpg',
          ingredients: ['Wodka', 'Limoen', 'Rietsuiker']
        },
        {
          name: 'Caipirinha',
          description: "Niet te verwarren met een Caprioska.",
          img: 'caipirinha.jpeg',
          ingredients: ['Witte rum', 'Limoen', 'Rietsuiker']
        },
        {
          name: 'Margarita',
          description: "Niet de pizza.",
          img: 'margarita.jpg',
          ingredients: ['Tequila', 'Triple sec', 'Limoen']
        },
        {
          name: 'Long Island Iced Tea',
          description: "Voor zij die van plan zijn te blijven slapen. Bestaat uit 40% alcohol en 60% kater.",
          img: 'long-island-ice-tea.jpeg',
          ingredients: ['Wodka', 'Gin', 'Rum', 'Tequila', 'Triple Sec', 'Citroen', 'Cola']
        },
        {
          name: 'Raspberry Delight',
          description: "Dit bevat fruit. Kan jij raden welk?",
          img: 'delight.jpg',
          ingredients: ['Rum', 'Triple Sec', 'Citroensap', 'Sinaasappelsap', 'Frambozen aka Raspberry']
        },
        {
          name: 'Hazel Cream',
          description: "Laat ons eerlijk zijn: dit is gewoon een dessert met drank in. Caloriebom van het genre: hierna 2 dagen best niks meer eten om te compenseren.",
          img: 'hazel-cream.jpg',
          ingredients: ['Wodka', 'Room', 'Kahlua', 'Frangelico']
        }
      ]
    },
     components: {
      'order-modal': Order
    }
  }

</script>

<style lang="scss">

#list {
  padding: 5vw;
}
  .md-layout-item {
    position: relative;
    height: 50vw;
    padding: 1em;

    .drink-wrapper {
      border-radius: 15%;
      border: .5em solid #00796B;
      //background-color: white;
      background-color: #00796B;
      height: 100%;
      font-size: 1.1em;
      //color: white;
      text-align: center;

      .img-wrapper {
        height: 80%;
        background-color: white;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }

      .drink-img {
        padding-top: .3em;
        padding-bottom: .3em;
        border-radius: inherit;
        height: 100%;
      }

      .drink-name {
        //background-color: #00796B;
        color:white;
        //padding: .2em;
        padding-top: .4em;

      }
    }
  }

  .disclaimer {
    text-align: center;
    background-color: grey;
    margin-left: -5vw;
    margin-right: -5vw;
    margin-bottom: -5vw;
    padding: .5rem;
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    .md-layout-item {
      height: 33vw;
      
      .drink-wrapper {
        font-size: 2rem;

        .drink-name {
          padding-top: .55em;
        }
      }
    }

  }

  @media (min-width: 960px) {
    .md-layout-item {
      height: 25vw;
    }
  }

</style>

