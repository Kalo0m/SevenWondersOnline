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
        state.games = snap.val().game1
      });
    }
  }
})