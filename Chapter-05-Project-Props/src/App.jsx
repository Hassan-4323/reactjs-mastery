import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>

      <div className="card">

        <div>
          <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtzuubqhcPKYMMhsE3FMFPfduCSdCXv68fkHqvhWxNlf3xBdYzv9Ake8&s=10" alt="" />
          <button>Save <Bookmark size={12}/> </button>
        </div>

        <div className="center">
              <h3>Amazon <span>5 days ago</span></h3>
              <h2>Senior UI/UX Designer</h2>
              <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
              </div>
        </div>
        </div>

        <div className="bottom">
                <div>
                  <h3>$300/hr</h3>
                  <p>Abbottabad, Pakistan</p>
                </div>
                <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
