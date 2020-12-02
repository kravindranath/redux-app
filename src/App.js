import React from 'react';

function App() {

  return (
    <div className="app">
      <div className="msg">You clicked -- times </div>
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
