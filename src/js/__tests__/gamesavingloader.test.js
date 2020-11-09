import GameSavingLoader from '../gamesavingloader'

const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'

test('should return', () => {
  GameSavingLoader.load().then((received) => {
    expect(received).toEqual(expected);
  }).catch((error) => error);
});
