
import { v4 as uuidv4 } from 'uuid';

class Player {
  constructor(pseudo) {
    this.id = uuidv4()
    this.name = pseudo
  }
  
  toObject() {
    return {
      name
    }
  }
}

export default Player