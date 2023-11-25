import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {deleteTodo, updateTodo} from '../features/todo/todoSlice';


function Todos({todo}) {
    const dispatch = useDispatch();

    const [text, setText] = useState(todo.title);
    const [editCheck, setEditCheck] = useState(false);

    const handleEdit = (id)=>{
        setEditCheck(!editCheck);
        
        dispatch(
            updateTodo(
                {
                    id,
                    title : text
                }
            )
        );
    }

  return (
    <div>
        <div>
            <li className='list-none bg-gray-500 m-2 flex justify-between items-center gap-3 px-3 py-1 text-lg rounded-lg'>
                {/* {todo.title} */}
                <input type="text" value={text} onChange={e => setText(e.target.value)} disabled={!editCheck} className={`bg-transparent p-2 focus:outline-none ${editCheck ? 'border-2': '' }`} />

                <div>

                    <button onClick={()=>handleEdit(todo.id)} className='bg-green-500 text-sm mr-2'>
                        {
                            editCheck ? 'Save' : 'Edit'
                        } 
                    </button>

                    <button onClick={()=> dispatch(
                        deleteTodo({
                            id : todo.id
                        })
                    )}
                    className='bg-red-500 text-sm'>
                        X
                    </button>

                </div>
            </li>
        </div>
    </div>
  )
}

export default Todos