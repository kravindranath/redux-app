import React from 'react';
import { useSelector } from 'react-redux'
import Todos from './components/Todos'

function App() {

  let todos = useSelector((state) => {
    return state.todos
  })

  let todosHtml = todos.map((item)=>{
    return <li>{item}</li>
  })

  return (
    <div className="app">
      <Todos />
    </div>
  );
}

export default App;
