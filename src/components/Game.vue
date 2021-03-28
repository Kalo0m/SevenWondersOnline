<template>
  <div> il y a {{ $store.state.game.nbPlayers }} joueurs dans la partie </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
