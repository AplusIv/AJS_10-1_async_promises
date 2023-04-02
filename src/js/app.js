import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    console.log(saving);
  });

/* .then(() => {throw new Error('Выброшу ошибку')})
.catch((err) => console.log(new Error(err))); */
