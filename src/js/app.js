import GameSavingLoader from './gameSavingLoader';

const savingObj = GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving, ветвь с ошибкой убрал из-за невыполнимости этого условия
  // console.log(JSON.parse(saving));
  JSON.parse(saving); // ??? Как вернуть полученный объект?
  // У меня возвращается промис с которым я ничего не могу сделать.
});

export default savingObj;
