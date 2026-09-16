import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15');
    setUserData(response.data);
    console.log(userData);

  }

  const printUserData = 'Now User Available';

  if (userData.length > 0) {
    printUserData = userData.map(function () {

      return 'Hello';
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>

      <button
        onClick={getData}

        className='bg-green-600 active:scale-95 px-5 mb-3 py-2 rounded text-white'>
        Get Data

      </button>

      <div>
        {printUserData}
      </div>

    </div>
  )
}

export default App
