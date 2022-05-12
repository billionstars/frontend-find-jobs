import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = ({listLinks}) => {

  return (
      <>
        <div className='w-full h-auto bg-black text-white p-2 fixed left-0 bottom-0 shadow-md flex justify-center items-center lg:hidden'>
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
        </div>
      </>
  )
}

export default BottomNav