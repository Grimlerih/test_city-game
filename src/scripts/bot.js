import { cities } from '../data/cities';

export const bot = ({ message, setMove, setMessage }) => {
  let letter = message[message.length - 1];

  if (letter.owner === 'user') {
    let word = letter.text[letter.text.length - 1].toUpperCase();
    setMove('bot');
    let index = cities.findIndex((el) => el[0] === word);
    if (index !== -1) {
      let city = cities[index];
      cities.splice(index, 1);
      const messageObj = {
        text: city,
        owner: 'bot',
      };
      setMessage((prevMessages) => [...prevMessages, messageObj]);
    } else {
      // return null;
      console.log('Бот не нашел город');
    }
  }

  //1 принимает слово
  // берет последнюю букву
  // ищет в массиве с началом буквы
  // возвращает первое найденное слово которого нет в выбранных уже словах
};
