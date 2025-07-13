import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numCheck, setNumCheck] = useState(false);
  const [charCheck, setCharCheck] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const copyPassword = ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  // const passwordGenerator = useCallback(() => {
  //   let pass = ''
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  //   if (numCheck) str += "0123456789"
  //   if (charCheck) str += "~!@#$%^&*()_-+={}[]"

  //   for (let x = 1; x <= length; x++) {
  //     let char = Math.floor(Math.random() * str.length + 1);
  //     pass += str.charAt(char)
  //   }
  //   setPassword(pass)


  // }, [length, numCheck, charCheck, setPassword])

  useEffect(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numCheck) str += "0123456789"
    if (charCheck) str += "~!@#$%^&*()_-+={}[]"

    for (let x = 1; x <= length; x++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numCheck, charCheck])

  return (
    <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white mb-3'>Password Generator</h1>
      <div className='flex items-center justify-between w-full bg-white rounded-md pl-3 mb-3'>
        <input type="text" value={password}
          className='px-3 py-2 rounded-full outline-none bg-transparent text-black text-2xl w-full' placeholder='password' readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPassword}
        className='bg-blue-800 px-3 py-2 text-white text-2xl'>Copy</button>
      </div>
      <div className='flex gap-3 text-2xl pb-6'>
        <input type="range" value={length} min={6} max={100} onChange={(e) => setLength(e.target.value)} />
        <label>Length : {length}</label>
        <input type="checkbox" id='number' defaultChecked={numCheck} onChange={() => setNumCheck(prev => !prev)} />
        <label htmlFor="number">Number</label>

        <input type="checkbox" id='char' defaultChecked={charCheck} onChange={() => setCharCheck(prev => !prev)} />
        <label htmlFor="char">Character</label>
      </div>
    </div>
  )
}

export default App
