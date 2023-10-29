import {useCallback, useEffect, useRef, useState} from 'react'
import './App.css';

function App() {

  const [length , setLength] = useState(8);
  const [numbers , setNumbers] = useState(false);
  const [characters , setCharacters] = useState(false);
  const [password , setPassword] = useState('');
  const refPassword = useRef(null);


  const generatePassword = useCallback(
    () => {
      let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const num = '0123456789';
      const char = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      let pass = '';

      if(numbers){
        str += num;
      }

      if(characters){
        str += char;
      }

      for(let i=0; i<length; i++){
        const c = Math.floor( Math.random() * str.length + 1);
        pass += str.charAt(c);
      }

      setPassword(pass);
    },
    [
      length,
      numbers,
      characters,
    ]
  );

  useEffect(
    ()=>{
      generatePassword();
    },
    [
      length,
      numbers,
      characters,
      generatePassword
    ]
  );

  const copyPasswordToClipBoard = () => {
    refPassword.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <h1 className='text-center'>Password Generator</h1>

      <div className='my-8'>
        <label htmlFor="passfield"></label>
        <input type="text" id="passfield" spellCheck={false} value={password} ref={refPassword} className='text-lg py-4 px-4 w-4/5 rounded-l-3xl focus:bg-red' />
        <button onClick={copyPasswordToClipBoard} className='py-4 text-lg rounded-none rounded-r-3xl'>Copy</button>

        <div className='m-4'>
          <input type="range" id="lengthfield" defaultValue={8} min={6} max={24} onChange={(e) => {setLength(e.target.value)}} className='m-4' />
          <label htmlFor="lengthfield" className='text-xl'>Length ({length})</label>

          <input type="checkbox" id="numfield" onChange={()=>{setNumbers(!numbers)}} className='m-4 w-4 h-4 checked: accent-gray-600' />
          <label htmlFor="numfield" className='text-xl'>Numbers</label>

          <input type="checkbox" id="charfield" onChange={() => {setCharacters( prev => setCharacters(!prev))}} className='m-4 w-4 h-4 checked: accent-gray-600' />
          <label htmlFor="charfield" className='text-xl'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App