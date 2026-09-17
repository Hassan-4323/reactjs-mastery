import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
    console.log(userData);

  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs'>Now User Available</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>

      <h1 className='fixed text'>{index}</h1>

      <div className='flex flex-wrap gap-5 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            if(index>1){
              setIndex(index - 1)
            }
          }}

        >
          Next
        </button>
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          Prev
        </button>
      </div>

    </div>
  )
}

export default App
