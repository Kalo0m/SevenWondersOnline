import { createStore } from 'vuex'
import firebase from '../plugins/firebase'

export const store = createStore({
  state () {
    return {
      game: null
    }
  },
  actions: {
    fetchGame({ state }) {
      firebase.collection("games").doc("game1")
        .onSnapshot((doc) => {
          state.game = doc.data();
        });
    }
  }
})