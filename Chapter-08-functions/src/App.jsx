import React from 'react'

const App = () => {

  return (

    <div>
      {/* <input onChange={(elem) => {

        console.log(elem.target.value);

      }
      } type="text" placeholder='Enter your name' /> */}

      <div className='box' onMouseMove={(elem)=>{
        console.log(elem.clientX);
      }}>

      </div>
    </div>
  )
}

export default App
