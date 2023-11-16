let timer = 2 * 60;

export const updateTimer = ({ setTimer, intervalId }) => {
  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  setTimer(`${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`);
  timer--;
  if (timer < 0) {
    clearInterval(intervalId);
    setTimer('Время вышло!');
  }
};
