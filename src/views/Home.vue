<template>
  <div>
    <input v-model="name" type="text" placeholder="Votre pseudo"/>
    <router-link to="/"><button @click="enterInGame">Connexion</button></router-link> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    enterInGame() {
      this.$store.dispatch('enterInGame', this.name)
    }
  }
}
</script>

<style>

</style>