import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 py-4'>
                <Link className='text-xl font-semibold' to='/contact/men'>Men</Link>
                <Link className='text-xl font-semibold' to='/contact/women'>Women</Link>
            </div>
            <h1>Contact Page</h1>

            < Outlet/>
        </div>
    )
}

export default Contact
