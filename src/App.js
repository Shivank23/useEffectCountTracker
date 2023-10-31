import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const[data,setdata]=useState(0)
  useEffect(()=>{
    document.title=`Chats${data}`
  });
  const update=(()=>{
    setdata(data+1);
  })
  return (
    <div>
      <div className='main'>
      <div className='sub_main'>
      <div className='data'>
      <h1>{data}</h1>
      <button onClick={update}>Click Me</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App
