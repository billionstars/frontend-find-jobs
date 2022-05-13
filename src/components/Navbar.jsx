import React from 'react'
import images from '../assets/images'
import { Link } from 'react-router-dom'

const Navbar = ({listLinks}) => {


  return (
    <nav className='hidden w-full h-auto p-2 bg-gray-300/60 text-white fixed z-10 lg:flex'>
      <div className='w-full mx-auto flex justify-around'>
        <div>
          <img className='w-36' src={images.logo[0].img} alt={images.logo[0].alt} />
        </div>
        <ol className='w-full flex justify-end items-center'>
            {
                listLinks.map((item)=>(
                    <li key={item.id}>
                        <Link to={item.path} className='mx-2 bg-lila text-azul hover:bg-rosa hover:text-white transition-all duration-200 px-6 py-2 rounded-md'>
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </ol>
      </div>
    </nav>
  )
}

export default Navbar