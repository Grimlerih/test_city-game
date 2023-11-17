import React, { useEffect, useState } from 'react';
import img from '../../image/inp_btn_icon.svg';
import { useForm } from 'react-hook-form';
import { updateTimer } from '../../scripts/timer';
import { cities } from '../../data/cities';

export const Input = ({ message, newMessage, setNewMessage, setMessage, setMove, move }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    if (move === 'bot') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [move]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddMessage();
    }
  };

  function getLastWord(messages, iswrong) {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.text) {
      if (iswrong) {
        return lastMessage.text.slice(-2, -1).toUpperCase();
      } else {
        return lastMessage.text.slice(-1).toUpperCase();
      }
    }
    return '';
  }

  const handleAddMessage = () => {
    newMessage = newMessage.trim();
    const messageObj = {
      text: newMessage,
      owner: 'user',
    };

    if (message.length !== 0) {
      if (message.some((el) => Object.values(el).includes(newMessage))) {
        alert('Слово уже есть в списке');
        return;
      }
      if (getLastWord(message) === 'Ъ' || getLastWord(message) === 'Ь') {
        if (newMessage[0].toUpperCase() !== getLastWord(message, true)) {
          alert('1Город должен начинаться с буквы на которую оканчивается предыдущее');
          return;
        }
      } else if (newMessage[0].toUpperCase() !== getLastWord(message)) {
        alert('2Город должен начинаться с буквы на которую оканчивается предыдущее');
        return;
      }
      if (!cities.includes(newMessage)) {
        alert('Такого города не существует');
        return;
      }
    }
    setMessage((prevMessages) => [...prevMessages, messageObj]);
    setNewMessage('');
    setMove('bot');
  };
  return (
    <div>
      <div className='bg-gray-100  flex items-center justify-between w-full h-12 p-3.5 rounded-md'>
        <input
          {...register('cityInput', { required: true, pattern: /^[а-яёА-ЯЁ]+$/ })}
          value={newMessage}
          onChange={handleInputChange}
          className='bg-inherit max-w-md w-full'
          type='text'
          placeholder={
            message.length === 0
              ? 'Напишите любой город, например: Где вы живете?'
              : `Знаете город на букву “${
                  getLastWord(message) === 'Ъ' || getLastWord(message) === 'Ь'
                    ? getLastWord(message, true)
                    : getLastWord(message)
                }”?`
          }
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
        />
        <img
          onClick={handleSubmit(handleAddMessage)}
          className={`${isDisabled ? 'bg-inherit' : 'bg-violet-500'} rounded-md p-1.5 w-8 h-8 cursor-pointer`}
          src={img}
        />
      </div>
      {errors.cityInput && <p>Только русские буквы</p>}
    </div>
  );
};
