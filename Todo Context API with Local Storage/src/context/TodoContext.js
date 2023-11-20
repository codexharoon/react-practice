import React, { useContext } from "react"

export const todoContext = React.createContext({
    todos: [
        {
            id : 1,
            title : "Todo 1",
            isComplete : false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    isCompleteTodo: (id)=>{},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = ()=>{
    return useContext(todoContext);
}



