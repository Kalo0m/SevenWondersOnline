import { v4 as uuidv4 } from 'uuid';
import Player from './Player';
import firebase from '../plugins/firebase';

class Game {
  constructor(players) {
    console.log(players);
    this.players = players;
  }

  sendGame() {
    console.log(this.toObject());
    console.log(this.players.map((player) => Object.assign({}, player)));
    firebase
      .collection('games')
      .doc('game1')
      .update(this.toObject())
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.log(error);
        console.error('Error writing document: ', error);
      });
  }
  addMainPlayer(pseudo) {
    this.players.push(new Player(pseudo));
    this.sendGame();
  }
  toObject() {
    const { players } = this;
    return {
      players: players.map((player) => Object.assign({}, player)),
    };
  }
}

export default Game;
