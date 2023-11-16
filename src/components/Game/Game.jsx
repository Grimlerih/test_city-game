import React, { useEffect, useState } from 'react';
import { Input } from '../Input/Input';
import { bot } from '../../scripts/bot';
import { updateTimer } from '../../scripts/timer';

export const Game = () => {
  const [timer, setTimer] = useState('');
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [move, setMove] = useState('user');

  useEffect(() => {
    if (move === 'bot') {
      bot({ message, setMove, setMessage });
    }
    const intervalId = setInterval(() => {
      updateTimer({ setTimer, intervalId });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [move, message]);

  return (
    <div className='w-full max-w-xl mx-auto bg-white rounded-2xl'>
      <div className='px-4 py-4 border-b-[2px] flex justify-between'>
        <p>Игра в города на время</p>
        <p>{timer}</p>
      </div>
      <div className='px-6 h-80 flex '>
        {/* <p className='text-gray-400 text-center'>Первый участник вспоминает города...</p> */}
        <ul>
          {message.map((el, ind) => (
            <li key={ind}>{el.text}</li>
          ))}
        </ul>
      </div>
      <div className='p-4'>
        <Input newMessage={newMessage} setNewMessage={setNewMessage} setMessage={setMessage} setMove={setMove} />
      </div>
    </div>
  );
};
