import React, { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

function CounterButtons() {
  const counterData = useContext(CounterContext);
  const {counterValue, setCounterValue} = counterData;

  return (
    <div>
      <button onClick={() => setCounterValue(counterValue + 1)}>+</button>
      <button onClick={() => setCounterValue(counterValue - 1)}>-</button>
      <button onClick={() => setCounterValue(0)}>reset</button>
    </div>
  );
}

export default CounterButtons;