import { cities } from '../data/cities';

export const bot = ({ message, setMove, setMessage }) => {
  let letter = message[message.length - 1];

  const botAnswerTimer = Math.round(Math.random() * 118 * 1000);
  setTimeout(() => {
    botAnswer();
  }, botAnswerTimer);

  const botAnswer = () => {
    if (letter.owner === 'user') {
      let word = letter.text.slice(-1).toUpperCase();
      if (word === 'Ъ' || word === 'Ь') {
        word = letter.text.slice(-2, -1).toUpperCase();
      }
      setMove('user');
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
  };
};
