import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
    const { updateTodo, deleteTodo, isCompleteTodo } = useTodo();

    const [editCheck, setEditCheck] = useState(false);
    const [editTodo , setEditTodo] = useState(todo.title);



    const toggleComplete =()=>{
        isCompleteTodo(todo.id);
    }


    const edit = ()=>{
        updateTodo(todo.id,{...todo, title : editTodo});
        setEditCheck(false);
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isComplete || false}
                onChange={()=> isCompleteTodo(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    editCheck ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isComplete ? "line-through" : ""}`}
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                readOnly={!editCheck}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.isComplete) return;

                    if (editCheck) {
                        edit();
                    } else {
                        setEditCheck((prev) => !prev);
                    };
                }}
                disabled={todo.isComplete}
            >
                {editCheck ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;