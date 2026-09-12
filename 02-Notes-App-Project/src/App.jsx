import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start justify-between p-10'>

        <div className='flex w-1/2 items-start flex-col gap-4'>
          <input
            type="text"
            placeholder='Enter Task Heading'
            className='px-5 py-2 w-full border-2 rounded outline-none font-medium'
          />

          <textarea
            type="text"
            placeholder='Enter Details'
            className='px-5 h-30 py-2 w-full border-2 rounded outline-none font-medium'
          />

          <button className='bg-white text-black px-5 py-2 w-full rounded outline-none font-medium'>Add Notes</button>
        </div>
      </form>
    </div>
  )
}

export default App
