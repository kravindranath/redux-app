import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToDo } from '../redux/actions'

function Todos() {

  let dispatch = useDispatch()
  let todos = useSelector((state) => {
    return state.todos
  })

  let todosHtml = todos.map((item, k)=>{
    return <li key={k}>{item}</li>
  })

  return (
    <div className="app">
      <div className="msg">
          <ul>
            {todosHtml}
          </ul>
      </div>

      <button className="button" type="button" onClick={ () => dispatch(addToDo('teeeest')) }>
        Add 
      </button>
      <button className="button" type="button" onClick={ () => decrementCount() }>
        Remove
      </button>
    </div>
  );
}

export default Todos;
