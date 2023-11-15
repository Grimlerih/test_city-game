import React from 'react';
import img from '../../image/inp_btn_icon.svg';

export const Input = () => {
  return (
    <div className='bg-gray-100  flex items-center justify-between w-full h-12 p-3.5 rounded-md'>
      <input className='bg-inherit max-w-md w-full' placeholder='Напишите любой город, например: Где вы живете?' />
      <img className='bg-violet-500 rounded-md p-1.5 w-8 h-8 cursor-pointer' src={img} />
    </div>
  );
};
