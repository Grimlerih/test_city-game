import React from 'react';

export const Loss = ({ message, setGame }) => {
  const handleClick = () => {
    setGame(true);
  };
  return (
    <div className=' max-w-xl mx-auto bg-white rounded-2xl'>
      <div className='p-10 gap-y-8 flex flex-col border-b-[2px] text-center text-xl'>
        <p className=''>
          К сожалению твое время вышло! <br />
          Твой противник победил!
        </p>
        <p className='font-medium text-3xl text-red-600'>{'00:00'}</p>
        <p className=''>
          Всего было перечислено городов: {message.length} <br />
          Очень не плохой результат!
        </p>
        <div>
          <p className=''>Последний город названный победителем</p>
          <p className='font-medium'>{message.length !== 0 ? message[message.length - 1].text : 'Город не назван'}</p>
        </div>
        <button onClick={handleClick} className='py-2 px-4 bg-violet-600 rounded text-white mx-auto w-max-content'>
          Начать новую игру
        </button>
      </div>
    </div>
  );
};
