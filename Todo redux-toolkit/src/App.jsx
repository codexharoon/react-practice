import { useEffect, useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';

import { useSelector } from 'react-redux';

function App() {

  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <>
      <AddTodo />
      <hr className='m-4' size="3" />

      {
        todos.length === 0 ? <h1 className='text-center text-2xl'>No Todos</h1> : (
          todos.map(
            (todo)=> (
              <Todos key={todo.id} todo={todo} />
            )
          )
        )
      }
    </>
  )
}

export default App
