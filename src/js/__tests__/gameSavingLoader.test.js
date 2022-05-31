import GameSavingLoader from '../gameSavingLoader';
import savingObj from '../app';

test('should return promise with needed data', () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  return expect(GameSavingLoader.load()).resolves.toBe(data); // Не забыть return
});

test('should parse object with requested data', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  // const recieved = await savingObj;
  // expect(recieved).toEqual(expected)
  // await expect(savingObj).resolves.toEqual(expected);
  // await expect(savingObj).rejects.toThrow('Могла бы быть ошибка')
});
