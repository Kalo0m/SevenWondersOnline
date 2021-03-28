<template>
  <div class="h-screen p-10"> 
    {{ $store.state.game }}
    <Board />
  </div>
</template>

<script>
import Board from '../components/Board.vue'

export default {
  name: 'Game',
  components: { Board },
  props: {
    msg: String
  },
  data() {
    return {
      

    }
  },
  created() {
    this.$store.dispatch('fetchGame')
  }
}
</script>
