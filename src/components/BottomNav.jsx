import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = ({listLinks}) => {

  return (
      <>
        <div className='w-full bg-black text-white p-2 fixed left-0 bottom-0 shadow-md flex justify-center items-center lg:hidden'>
            <ol className='w-full flex justify-center items-center'>
                {
                    listLinks.map((item)=>(
                        <li key={item.id} className="flex justify-center items-center mx-2">
                            <Link to={item.path} className='text-5xl hover:text-rosa/80'>
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