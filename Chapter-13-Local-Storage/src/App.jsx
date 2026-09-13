import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  // store data in local storage
  // localStorage.setItem('user', 'Hassan Jan');
  // localStorage.setItem('age', '23');

  // get value from local storage
  // const user = localStorage.getItem('user');
  // console.log(user);

  // remove item from local storage
  // localStorage.removeItem('user');
  // localStorage.removeItem('age');

  // store object in local storage
  // const user = {
  //   username : 'Hassan Jan',
  //   age : 23,
  //   city : 'Islamabad'
  // }
  // localStorage.setItem('user', JSON.stringify(user));

  // convert from string to object again
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);


  return (
    <div>
      App
    </div>
  )
}

export default App
