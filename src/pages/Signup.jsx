import React from 'react'
import MainTitle from '../components/MainTitle'
import Register from '../components/Register'

const Signup = () => {
  return (
      <>
        <MainTitle title="Signup"/>
        <section className='w-full py-20 flex justify-center items-center'>
          <Register/>
        </section>
      </>
    
  )
}

export default Signup