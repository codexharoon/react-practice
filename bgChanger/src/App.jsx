import { useState } from 'react';

function App() {
  const [color, setColor] = useState('skyblue');

  return (
    <div className='w-full h-screen' style={{backgroundColor : color}}>

      <div className='fixed bottom-10 flex flex-wrap justify-center gap-3 inset-x-0 rounded-3xl'>
          <div className='cursor-pointer py-1 px-4 rounded-xl text-white bg-red-400 hover:border-white hover:border-2' onClick={()=> setColor('red')}>Red</div>
          <div className='cursor-pointer py-1 px-4 rounded-xl text-white bg-green-400 hover:border-white hover:border-2' onClick={()=> setColor('green')}>Green</div>
          <div className='cursor-pointer py-1 px-4 rounded-xl text-white bg-blue-400 hover:border-white hover:border-2' onClick={()=> setColor('blue')}>Blue</div>
          <div className='cursor-pointer py-1 px-4 rounded-xl text-white bg-orange-400 hover:border-white hover:border-2' onClick={()=> setColor('orange')}>Orange</div>
      </div>

    </div>
  );
}

export default App
