import { useState,useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = (todo)=>{
    // const todoLength = todos.length > 0 ? todos.length : 0;  some uniqueness issue with this approach
    const newId = todos.reduce( (acc, Todo) => (Todo.id > acc ? Todo.id : acc) , 0 );
    setTodos( (prevTodos) => [{id : newId+1 , ...todo} , ...prevTodos]);
  }


  const updateTodo = (id,todo)=>{
    setTodos( 
      (prevTodos) => prevTodos.map(
        (Todo) => (
          Todo.id === id ? {id , ...todo} : Todo
        )
      )
    )
  }


  const deleteTodo = (id)=>{
    setTodos( (prevTodos) => prevTodos.filter ( (Todo) => (Todo.id !== id) ) );
  }


  const isCompleteTodo = (id) => {
    setTodos(
      (prevTodos) => prevTodos.map(
        (Todo) => (
          Todo.id === id ? {...Todo, isComplete : !(Todo.isComplete)} : Todo
        )
      )
    )
  }


  useEffect(
    ()=>{
      const allTodos = JSON.parse(localStorage.getItem('todos'));
      
      if(allTodos && allTodos.length > 0){
        setTodos(allTodos);
      }
    },
    []
  );


  useEffect(
    ()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
    },
    [todos]
  );


  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, isCompleteTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map(
                (Todo) => (
                  <div key={Todo.id}>
                    <TodoItem todo={Todo} />
                  </div>
                )
              )
            }
          </div>

        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
