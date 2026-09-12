import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {

    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    console.log(title, detail);

    setTitle('');
    setDetail('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className='min-h-screen lg:flex bg-[#0f0f0f] text-white'>

      {/* LEFT SIDE - FORM */}

      <form
        onSubmit={(e) => { submitHandler(e) }}
        className='flex flex-col lg:w-1/2 gap-5 items-start p-8 lg:p-12'
      >

        <div className='mb-2'>
          <h1 className='text-3xl font-bold'>
            Add Notes
          </h1>

          <p className='text-gray-400 mt-1 text-sm'>
            Create and organize your notes
          </p>
        </div>

        {/* TITLE */}

        <input
          type="text"
          placeholder='Enter Task Heading'
          className='px-5 py-3 w-full bg-[#1a1a1a] border border-gray-700 rounded-xl outline-none font-medium focus:border-white transition'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILS */}

        <textarea
          placeholder='Enter Details'
          className='px-5 py-3 h-40 w-full bg-[#1a1a1a] border border-gray-700 rounded-xl outline-none font-medium resize-none focus:border-white transition'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />

        {/* BUTTON */}

        <button
          className='bg-white hover:bg-gray-200 active:scale-[0.98] text-black px-5 py-3 w-full rounded-xl outline-none font-bold transition cursor-pointer'
        >
          Add Note
        </button>

      </form>


      {/* RIGHT SIDE - NOTES */}

      <div className='lg:w-1/2 lg:border-l border-gray-800 p-8 lg:p-12'>

        <div className='mb-6'>
          <h1 className='text-3xl font-bold'>
            Recent Notes
          </h1>

          <p className='text-gray-400 mt-1 text-sm'>
            Your saved notes
          </p>
        </div>


        {/* NOTES CONTAINER */}

        <div className='flex flex-wrap items-start gap-6 h-[75vh] overflow-auto pr-2'>

          {task.map(function (elem, idx) {

            return (

              <div
                key={idx}
                className="group flex justify-between flex-col items-start relative h-52 w-40 overflow-hidden rounded-2xl text-black p-4 shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-300 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80')"
                }}
              >

                {/* DARK OVERLAY */}

                <div className='absolute inset-0 bg-white/70 group-hover:bg-white/60 transition'></div>


                {/* NOTE CONTENT */}

                <div className='relative z-10 w-full'>

                  <h3 className='leading-tight text-lg font-bold wrap-break-word'>
                    {elem.title}
                  </h3>

                  <p className='mt-2 leading-relaxed text-xs font-semibold text-gray-700 wrap-break-words'>
                    {elem.detail}
                  </p>

                </div>


                {/* DELETE BUTTON */}

                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className='relative z-10 w-full cursor-pointer active:scale-95 bg-black hover:bg-red-600 text-white py-2 text-xs rounded-lg font-bold transition'
                >
                  Delete
                </button>

              </div>

            )

          })}


          {/* EMPTY STATE */}

          {task.length === 0 && (

            <div className='w-full h-full flex flex-col items-center justify-center text-center'>

              <div className='text-6xl mb-4'>
                📝
              </div>

              <h2 className='text-xl font-bold text-gray-300'>
                No notes yet
              </h2>

              <p className='text-sm text-gray-500 mt-1'>
                Create your first note from the left
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default App