import React, { useState, useCallback } from 'react';
import Button from '../components/Button';

function CounterCallback(props) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => setCounter(counter + 1), [counter]);

  return (
    <div>
      <h2>{`${props.title}`}</h2>
      <button onClick={props.changeTitle}>change title</button>
      <div>
        Counter: {counter}
        <Button incrementCounter={incrementCounter} />
      </div>
    </div>
  )
}

export default CounterCallback;