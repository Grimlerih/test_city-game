import React from 'react';
import img from '../../image/inp_btn_icon.svg';
import { useForm } from 'react-hook-form';

export const Input = ({ newMessage, setNewMessage, setMessage, setMove }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    const messageObj = {
      text: newMessage,
      owner: 'user',
    };
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
          placeholder='Напишите любой город, например: Где вы живете?'
        />
        <img
          onClick={handleSubmit(handleAddMessage)}
          className='bg-violet-500 rounded-md p-1.5 w-8 h-8 cursor-pointer'
          src={img}
        />
      </div>
      {errors.cityInput && <p>Только русские буквы</p>}
    </div>
  );
};
