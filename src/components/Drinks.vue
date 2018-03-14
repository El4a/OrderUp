<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
        <div class="drink-wrapper">
          <img class="drink-img" src="../assets/pintje.jpg" alt="pintje"/>
          <div class="drink-name">Pintje</div>
          </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
            <img class="drink-img" src="../assets/tea.jpeg" alt="tea"/>
          <div class="drink-name">Thee</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
          <img class="drink-img" src="../assets/coffee.jpeg" alt="Koffie"/>
          <div class="drink-name">Koffie</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
            <img class="drink-img" src="../assets/red-wine.jpeg" alt="rode wijn"/>
            <div class="drink-name">Rode wijn</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
        <div class="drink-wrapper">
          <img class="drink-img" src="../assets/white-wine.jpg" alt="witte wijn"/>
          <div class="drink-name">Witte wijn</div>
        </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
            <img class="drink-img" src="../assets/cava.png" alt="cava"/>
            <div class="drink-name">Cava</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
          <div class="drink-wrapper">
                        <img class="drink-img" src="../assets/duvel.jpg" alt="duvel"/>
            <div class="drink-name">Duvel</div>
          </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/mojito.jpg" alt="mojito"/>
            <div class="drink-name">Mojito</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
        <div class="drink-wrapper">
          <img class="drink-img" src="../assets/screwdriver.jpg" alt="wodka orange"/>
          <div class="drink-name">Wodka Orange</div>
        </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/gin-tonic.jpg" alt="gin tonic"/>
            <div class="drink-name">Gin Tonic</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
        <div class="drink-wrapper">
           <img class="drink-img" src="../assets/long-island-ice-tea.jpeg" alt="longisland ice-tea"/>
            <div class="drink-name">Longisland ice-tea</div>
        </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/cuba-libre.jpg" alt="cuba libre"/>
            <div class="drink-name">Cuba Libre</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/caipirinha.jpeg" alt="Caipirinha"/>
            <div class="drink-name">Caipirinha</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/cgit statusaprioska.jpg" alt="Caprioska"/>
            <div class="drink-name">Caprioska</div>
         </div>
      </div>
       <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/delight.jpg" alt="Raspberry Delight"/>
            <div class="drink-name">Raspberry Delight</div>
         </div>
      </div>
       <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/margarita.jpg" alt="Margarita"/>
            <div class="drink-name">Margarita</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/mimosa.jpg" alt="mimosa"/>
            <div class="drink-name">Mimosa</div>
         </div>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-33 md-xsmall-size-50">
         <div class="drink-wrapper">
           <img class="drink-img" src="../assets/hazel-cream.jpg" alt="hazel creme"/>
            <div class="drink-name">Hazel Creme</div>
         </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Drinks',
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only => doesnt seem to fuckin work -->
<style lang="scss">
  .md-layout-item {
    position: relative;
    height: 50vw;
    padding: 1em;

    .drink-wrapper {
      border-radius: 15%;
      border: .5em solid #00796B;
      background-color: white;
      //background-color: #00796B;
      height: 100%;
      font-size: 1.1em;
      //color: white;
      text-align: center;

      .drink-img {
        padding-top: .3em;
        padding-bottom: .3em;
        border-radius: inherit;
        height: 80%;
      }

      .drink-name {
        background-color: #00796B;
        color:white;
        padding: .2em;
        padding-top: .4em;
      }
    }
  }

  @media (min-width: 600px) {
    .md-layout-item {
      height: 33vw;
    }
  }

  @media (min-width: 960px) {
    .md-layout-item {
      height: 25vw;
    }
  }

</style>

