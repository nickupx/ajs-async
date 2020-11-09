import GameSavingLoader from '../gamesavingloader'

const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'

test('should return', async () => {
  const received = await GameSavingLoader.load()
  expect(received).toEqual(expected)
})
