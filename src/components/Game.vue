<template>
  <div class="h-screen p-10"> 
    <Board />
  </div>
</template>

<script>
import Board from './Board.vue'

export default {
  name: 'Game',
  components: { Board },
  props: {
    msg: String
  },
  data() {
    return {
      

    }
  }
}
</script>
