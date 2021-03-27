<template>
  <Game />
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  },
  created() {
    this.$store.dispatch('fetchGame')
  }
}
</script>
