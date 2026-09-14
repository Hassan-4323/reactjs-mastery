import axios, { Axios } from 'axios';
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([]);

  // data response through fetch
  
  // const getData = async () => {
    
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  //   const data = await response.json();

  //   console.log(data);
  // }


  // data response through axios
  // const getData = async () => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   console.log(data);
  // }

  // how to use data on screen example same process
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
    // for to use this data add useState in top
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map(function(elem, idx){

          return <h3> {elem.author} Hello {idx} </h3>
        })}
      </div>

    </div>
  )
}

export default App
