<template>
  <div class=" h-full bg-gray-200 grid playerGrid">
    <div class="col-start-2 row-start-1 flex justify-center items-center">Joueur 1</div>
    <div class="col-start-1 row-start-2 flex justify-center items-center transform rotate-90">Joueur 2</div>
    <div class="col-start-3 row-start-2 flex justify-center items-center transform -rotate-90">Joueur 3</div>
    <div class="col-start-2 row-start-3 flex justify-center items-center">Joueur 4</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.playerGrid {
  grid-template-rows: 200px 1fr 200px;
  grid-template-columns: 100px 1fr 100px;
}
</style>