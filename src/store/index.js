import { createStore } from 'vuex';
import firebase from '../plugins/firebase';
import Game from '../model/Game';

export const store = createStore({
  state() {
    return {
      game: null,
    };
  },
  mutations: {
    setGame(state, game) {
      console.log({ game }); // affiche un objet normal
      state.game = new Game(game.players);
      console.log(state.game); // affiche Proxy {players: Array(1)}
    },
    createPlayer(state, pseudo) {
      state.game.addMainPlayer(pseudo);
    },
  },
  actions: {
    fetchGame({ commit }) {
      console.log('fetch');
      return new Promise((resolve, reject) => {
        firebase
          .collection('games')
          .doc('game1')
          .onSnapshot(
            (doc) => {
              console.log('recuperation de la partie');
              commit('setGame', doc.data());
              resolve();
            },
            (error) => {
              console.log(error);
              reject(error);
            }
          );
      });
    },
    async enterInGame({ dispatch, commit }, pseudo) {
      await dispatch('fetchGame');
      commit('createPlayer', pseudo);
      console.log('apres ajout du player');
    },
  },
});
