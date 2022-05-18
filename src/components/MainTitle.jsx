import React from 'react'

const MainTitle = ({title}) => {
  return (
    <section className='w-full h-64 flex justify-center items-center text-lila text-6xl bg-gradient-to-r from-purple-500 to-pink-500/80'>{title}</section>
  )
}

export default MainTitle