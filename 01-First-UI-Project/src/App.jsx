import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img : 'https://plus.unsplash.com/premium_photo-1661590863910-69abf33b8f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
      intro : '',
      color : 'Blue',
      tag : 'Satisfied'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      color : 'red',
      tag : 'UnderServed'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661510552884-1159cf548dc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8',
      intro : '',
      color : 'Pink',
      tag : 'UnderBanked'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8',
      intro : '',
      color : 'orange',
      tag : 'Sweetheart'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661627507929-f47f5080c33a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8',
      intro : '',
      color : 'green',
      tag : 'Interested'
    }
  ]
  return (
    <div>
      <Section1 users = {users}/>
      {/* <Section2 /> */}
    </div>
  )
}

export default App
