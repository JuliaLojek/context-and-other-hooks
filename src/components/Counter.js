import React, { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';
import CounterButtons from './CounterButtons';

function Counter() {
  const counterData = useContext(CounterContext);
  const { counterValue } = counterData;

  return (
    <div>
      Counter: {counterValue}
      <CounterButtons />
    </div>
  )
}

export default Counter;