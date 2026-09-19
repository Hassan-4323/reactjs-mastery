import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-800 py-4 px-8'>

      <h2 className='text-2xl font-bold'>Hassan</h2>

      <div className='flex gap-10'>

        < Link className='text-lg font-semibold' to='/'>Home</Link>
        < Link className='text-lg font-semibold' to='/about' >About</Link>
        <Link className='text-lg font-semibold' to='/contact' >Contact</Link>

      </div>

    </div>
  )
}

export default Navbar
