import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  function increaseNum(){
    setNum(num+1);
  }

  function decreaseNum(){
    setNum(num-1);
  }

  function jumpbyFive(){
    setNum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpbyFive}>Jump by 5</button>
    </div>
  )
}

export default App
