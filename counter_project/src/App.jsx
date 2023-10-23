import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incre = (c) => {
    if(c!==20){
      // imp interview question
      // react send updates in batches, same state update multiple times in a single render cycle, react will batch them together and update the state only once.
      setCount(count + 1);
      setCount(count + 1);
      setCount(prevCount => prevCount + 1);
      setCount(prevCount => prevCount + 1);
      setCount(count + 1);
      setCount(prevCount => prevCount + 1);
    }
  };

  const decre = (c) =>{
    if(c!==0){
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => {incre(count)} }>Increment</button>
      <br/>
      <button onClick={() => {decre(count)}}>Decrement</button>
    </>
  )
}

export default App
