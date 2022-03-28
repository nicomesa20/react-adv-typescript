import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter(Math.max(0, counter + value));
  };

  return {
    counter,
    increaseBy,
  }
}