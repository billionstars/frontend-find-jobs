import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({listLinks}) => {


  return (
    <nav className='hidden w-full h-16 p-2 bg-black/60 text-white fixed z-10 lg:flex'>
      <ol className='w-full flex justify-center items-center'>
          {
              listLinks.map((item)=>(
                  <li key={item.id}>
                      <Link to={item.path} className='mx-2 hover:bg-gray-700 px-6 py-2 rounded-md'>
                          {item.name}
                      </Link>
                  </li>
              ))
          }
      </ol>
    </nav>
  )
}

export default Navbar