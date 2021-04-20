import React from 'react';


export const Hello = (value) => {
  const [state, setState] = React.useState({count: value.value});

  return (
    <p>
      <button onClick={() => setState({count: state.count + 1})}>Increment</button>
      <br />
      <span>{state.count}</span>
      <br />
      <button onClick={() => setState({count: state.count - 1})}>Decrement</button>
    </p>
  )
}
