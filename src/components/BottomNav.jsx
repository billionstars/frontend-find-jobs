import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = ({listLinks}) => {

  return (
      <>
        <div className='w-full bg-azul text-white p-2 fixed left-0 bottom-0 shadow-md flex justify-center items-center lg:hidden'>
            <ol className='w-full flex justify-center items-center'>
                {
                    listLinks.map((item)=>(
                        <li key={item.id} className="p-2 flex justify-center items-center mx-2">
                            <Link to={item.path} className='text-4xl hover:text-rosa/80 transition-all duration-300'>
                                {item.icon}
                            </Link>
                        </li>
                    ))
                }
            </ol>
        </div>
      </>
  )
}

export default BottomNav