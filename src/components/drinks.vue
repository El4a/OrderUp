<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-45">
        <div class="drink-name">Pintje</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
         <div class="drink-name">Koffie</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
         <div class="drink-name">Duvel</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
         <div class="drink-name">Witte wijn</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
 <div class="drink-name">Rode wijn</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
         <div class="drink-name">Cava</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
 <div class="drink-name">Mojito</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
         <div class="drink-name">Cuba Libre</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
 <div class="drink-name">Gin Tonic</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
         <div class="drink-name">Wodka orange</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
 <div class="drink-name">Long Island IceTea</div>
      </div>
      <div class="md-layout-item md-xsmall-size-45">
         <div class="drink-name">Water</div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .md-layout-item {
    background-color: #00796B;
    border-radius: 15%;
    position: relative;

    .drink-name {
      font-size: 1.2rem;
      color: white;
      position: absolute;
      bottom: 1.5rem;
      width: 100%;
      text-align: center;

    }
  }

</style>

