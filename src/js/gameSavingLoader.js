import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    // ??? Нужно ли было внутри промиса вызывать функции ассинхронно (нпр, через setTimout)?
    return new Promise((resolve) => {
      resolve(read());
    }).then((dataArray) => new Promise((resolve) => {
      resolve(json(dataArray));
    }));
  }
}
