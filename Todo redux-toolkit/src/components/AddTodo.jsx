import { useState } from 'react';
import {createTodo} from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

function AddTodo() {

    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();

        if(!todo) return;
        dispatch(
            createTodo(
                {
                    title : todo
                }
            )
        );

        setTodo('');
    }

  return (
    <div>

        <form action="" onSubmit={handleAddTodo}>
            <input type="text" placeholder='Enter todo...' value={todo} onChange={(e)=> setTodo(e.target.value)} className='p-3 rounded-lg focus:outline-none' />
            <input type="submit" value="Add Todo" className='cursor-pointer text-black border-2 rounded-lg p-3 -m-1 rounded-l-none border-none bg-green-400 active:bg-green-300'  />
        </form>

    </div>
  )
}

export default AddTodo