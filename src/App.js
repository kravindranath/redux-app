import React, { useState } from 'react';

function App() {

  function incrementCount(){
    setState((prevState)=>{
      return prevState + 1;
    })
  }

  function decrementCount(){
    setState((prevState)=>{
      return prevState  - 1;
    })
  }

  const [ count, setState ] = useState(1);
  
  return (
    <div className="app">
      <div className="msg">You clicked {count} times </div>
      <button className="button plus" type="button" onClick={ () => incrementCount() }>
        +
      </button>
      <button className="button minus" type="button" onClick={ () => decrementCount() }>
        -
      </button>
    </div>
  );
}

export default App;
