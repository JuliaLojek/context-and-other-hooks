import React, { useEffect } from 'react';

function Button(props) {
  useEffect(() => {
    console.log("I did rerender...");
  })

  return(
    <button onClick={props.incrementCounter}>
      +
    </button>
  )
}

export default Button;