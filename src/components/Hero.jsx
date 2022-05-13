import React from 'react'

const Hero = () => {

  const search =(event)=>{
    event.preventDefault()
    console.log("Searching...")
  }

  return (
    <section className='w-full h-auto flex flex-col justify-center items-center bg-gray-400'>
      <form onSubmit={search} className='w-full mt-64 mb-64 md:max-w-5xl mx-auto p-4 flex flex-col justify-center items-center'>
        <input type="text" className='w-full my-2 p-2 rounded-full'/>
        <button className='btn-primary my-2'>Find Job</button>
      </form>
    </section>
  )
}

export default Hero