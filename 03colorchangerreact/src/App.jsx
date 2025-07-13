import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('#000');


  return (
    <div className={`flex justify-center w-full h-screen`} style={{backgroundColor: color}}>
      {/* align this div middle       */}
      <div className='flex gap-9 justify-center items-center fixed bottom-0 mb-10 px-4 w-max h-20 bg-white rounded-full'>
      <button 
      onClick={()=> setColor('#fb2c36')}
      className='px-5 py-2.5 bg-red-500 text-xl text-white border border-gray-700 gap-6 rounded-full my-4 cursor-pointer'>Red</button>
      
      <button 
      onClick={()=> setColor('#fff')}
      className='px-5 py-2.5 bg-white text-xl border border-gray-700 gap-6 rounded-full my-4 cursor-pointer' >White</button>
      
      <button 
      onClick={()=> setColor('#193cb8')}
      className='px-5 py-2.5 bg-blue-800 text-xl text-white border border-gray-700 gap-6 rounded-full my-4 cursor-pointer'>Blue</button>
      
      <button 
      onClick={()=> setColor('#016630')}
      className='px-5 py-2.5 bg-green-800 text-white text-xl border border-gray-700 gap-6 rounded-full my-4 cursor-pointer'>Green</button>
      
      <button 
      onClick={()=> setColor('#000')}
      className='px-5 py-2.5 bg-black text-xl text-white border border-gray-700 gap-6 rounded-full my-4 cursor-pointer'>Black</button>
      
      </div>
    </div>
  )
}

export default App
