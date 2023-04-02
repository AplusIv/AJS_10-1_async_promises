import GameSavingLoader from '../gameSavingLoader';

test('should return promise with needed data', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const parsed = JSON.parse(data);
  const result = await GameSavingLoader.load();
  expect(result).toEqual(parsed);
});

/* () => {
  const data = '{
    "id":9,
    "created":1546300800,
    "userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}
  }';
  // return expect(GameSavingLoader.load()).resolves.toBe(data); // Не забыть return
  return expect(GameSavingLoader.load()).resolves.toEqual(JSON.parse(data)); // Не забыть return
  // рабочий вариант
} */
