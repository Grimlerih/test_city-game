import React, { useEffect, useState, useRef } from 'react';
import { Input } from '../Input/Input';
import { bot } from '../../scripts/bot';
import { updateTimer } from '../../scripts/timer';
import { Won } from '../Won/Won';
import { Loss } from '../Loss/Loss';
import { ShrinkingBlock } from '../ShrinkingBlock/ShrinkingBlock';

export const Game = ({ setGame }) => {
  const [timer, setTimer] = useState('02:00');
  const [timerValue, setTimerValue] = useState(120);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [move, setMove] = useState('user');
  const bottomRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTimer({ timerValue, setTimerValue, setTimer, intervalId });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerValue]);

  useEffect(() => {
    setTimerValue(120);
    if (move === 'bot') {
      bot({ message, setMove, setMessage });
    }
    if (bottomRef.current !== null) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [move]);

  let componentToRender;
  if (move === 'user') {
    componentToRender = <Loss {...{ message, setGame }} />;
  } else {
    componentToRender = <Won {...{ message, setGame }} />;
  }

  return timerValue > 0 ? (
    <div className='w-full max-w-xl mx-auto bg-white rounded-2xl'>
      <div className='px-4 py-4  flex justify-between'>
        <p>{move === 'user' ? 'Ваш ход' : 'Оппонент ходит'}</p>
        <p>{timer}</p>
      </div>
      <ShrinkingBlock timerValue={timerValue} />
      <div className='px-6 h-80 flex '>
        {message.length === 0 ? (
          <p className='text-gray-400 text-center h-fit self-center mx-auto'>Первый участник вспоминает города...</p>
        ) : (
          <>
            <ul className='flex flex-col w-full mt-2 overflow-auto'>
              {message.map((el, ind) =>
                el.owner === 'user' ? (
                  <li
                    className='ml-auto py-1.5 px-3 text-white rounded-tl-lg rounded-tr-lg rounded-br-lg bg-violet-500 right-0'
                    key={ind}
                  >
                    {el.text}
                  </li>
                ) : (
                  <li
                    className='mr-auto py-1.5 px-3 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-violet-50 right-0'
                    key={ind}
                  >
                    {el.text}
                  </li>
                )
              )}
              <div ref={bottomRef}></div>
            </ul>
          </>
        )}
      </div>
      <p className='text-sm text-gray-400 text-center'>Всего перечислено городов: {message.length}</p>
      <div className='p-4'>
        <Input
          message={message}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          setMessage={setMessage}
          setMove={setMove}
          move={move}
        />
      </div>
    </div>
  ) : (
    componentToRender
  );
};
