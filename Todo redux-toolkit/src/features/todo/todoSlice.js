import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [
        {
            id : 1111,
            title : 'XYZ TODO'
        }
    ]
};

export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers :{
            createTodo : (state, action) => {
                const todo = { id : nanoid(), title : action.payload.title};
                state.todos.push(todo);
            },
            updateTodo : (state,action)=>{
                const id = action.payload.id;
                const title = action.payload.title;
                const todo = state.todos.find( (todo) => (todo.id === id) );
                if(todo){
                    todo.title = title;
                }
            },
            deleteTodo : (state, action) => {
                const id = action.payload.id;
                state.todos = state.todos.filter( (todo) => (todo.id !== id) );
            },
        }
    }
);


export const {createTodo, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;