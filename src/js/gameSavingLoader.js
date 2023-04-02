import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    // return new Promise((resolve) => setTimeout(() => resolve('что-то2'), 3000));
    return read()
      .then((data) => json(data))
      .then((data) => JSON.parse(data));
  }
}
