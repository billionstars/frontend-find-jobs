import React from 'react'

const Hero = () => {

  const search =(event)=>{
    event.preventDefault()
    console.log("Searching...")
  }

  return (
    <section className='w-full h-auto flex flex-col justify-center items-center bg-gradient-to-t from-morado/60 to-azul/60'>
      <form onSubmit={search} className='w-full mt-64 mb-64 md:max-w-5xl mx-auto p-4 flex flex-col justify-center items-center'>
        <label className='text-white text-5xl mb-4'>Find your new job!</label>
        <input type="email" className='w-full my-2 p-2 rounded-full outline-none focus:bg-red-10 hover:shadow-lg focus:ring-2'/>
        <button className='btn-primary my-2'>Find Job</button>
      </form>
    </section>
  )
}

export default Hero