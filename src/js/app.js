/* eslint-disable no-console */
import GameSavingLoader from './gamesavingloader'

GameSavingLoader.load().then((saving) => saving, (error) => console.log(error))
