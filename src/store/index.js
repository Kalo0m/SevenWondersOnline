import { createStore } from 'vuex'
import firebase from '../plugins/firebase'

export const store = createStore({
  state () {
    return {
      games: null
    }
  },
  actions: {
    fetchGame({ state }) {
      firebase.ref().on('value', (snap) => {
        console.log()
        state.games = snap.val().game1
      });
    }
  }
})