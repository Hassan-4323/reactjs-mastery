import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("Button is clicked");
  }

  function onMouseEnter(){
    console.log("Mouse entered");
  }

  return (
    <div>
      <h3>Hello Hassan</h3>

      <button onMouseEnter={onMouseEnter} onClick={btnClicked}>Change User</button>
    </div>
  )
}

export default App
