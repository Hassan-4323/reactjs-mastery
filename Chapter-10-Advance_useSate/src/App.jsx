import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({user : 'Hassan', age : 20});
  const [num, setNum] = useState(10);

  // const btnClicked = () =>{
  //   // destructure
  //   const newNum = {...num};
  //   newNum.user = "Jan";
  //   setNum(newNum);
  //   console.log(newNum);
  // }


  // Batch update
  const btnClicked = () =>{
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
  }

  return (
    <div>
      {/* <h3>{num.user} {num.age}</h3> */}
      <h3>{num}</h3>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
