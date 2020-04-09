import React, { Component } from 'react';
import { CounterContext } from '../contexts/CounterContext';
import CounterButtons from './CounterButtons';

class CounterClass extends Component {

  render() {
    return (
      <div>
        <b>Counter as a class</b>
        <CounterContext.Consumer>
          {value => <div>Counter: {value.counterValue}</div>}
        </CounterContext.Consumer>
        <CounterButtons />
      </div>
    )
  }
}

export default CounterClass;