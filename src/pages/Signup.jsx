import React from 'react'
import MainTitle from '../components/MainTitle'
import Register from '../components/Register'

const Signup = () => {
  return (
      <div className='w-full bg-lila/90'>
        <MainTitle title="Signup"/>
        <section className='w-full py-20 flex justify-center items-center'>
          <Register/>
        </section>
      </div>
    
  )
}

export default Signup