import React from 'react';

export const Welcome = () => {
  return (
    <div className=' max-w-xl mx-auto bg-white rounded-2xl'>
      <div className='px-4 py-4 border-b-[2px]'>
        <h1 className=' text-center'>Игра в города на время</h1>
      </div>
      <div className='p-6 flex flex-col '>
        <p>Цель: Назвать как можно больше реальных городов.</p>
        <ol className='ml-5 my-6 list-disc'>
          <li>Запрещается повторение городов.</li>
          <li>
            Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок должен
            назвать город на букву стоящую перед ъ или ь знаком.
          </li>
          <li>
            Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается
            проигравшим
          </li>
        </ol>
        <button className='py-2 px-4 bg-violet-600 rounded text-white mx-auto w-max-content'>Начать игру</button>
      </div>
    </div>
  );
};
