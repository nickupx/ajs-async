import json from './parser'
import read from './reader'

export default class GameSavingLoader {
  static async load() {
    let result
    try {
      const data = await read()
      result = await json(data)
    } catch (e) {
      return e
    }
    return result
  }
}
