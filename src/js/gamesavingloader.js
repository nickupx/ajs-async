import read from './parser'
import json from './reader'

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    return read().then((data) => json(data))
  }
}
