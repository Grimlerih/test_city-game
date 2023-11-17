import React, { useEffect, useState } from 'react';

export const ShrinkingBlock = ({ timerValue }) => {
  const initialTimer = 120;
  const initialSize = 576;
  const [size, setSize] = useState(initialSize);

  useEffect(() => {
    if (timerValue > 0) {
      const sizeRatio = timerValue / initialTimer;
      const newSize = initialSize * sizeRatio;
      setSize(newSize);
    }
  }, [timerValue]);

  return <div className='h-0.5 bg-violet-300' style={{ width: `${size}px` }}></div>;
};
