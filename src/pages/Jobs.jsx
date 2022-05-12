import React from 'react'
import MainTitle from "../components/MainTitle"

const Jobs = () => {
  return (
      <>
        <MainTitle title="Jobs"/>
        <section className='w-full h-screen bg-slate-500'>Section 1</section>
        <section className='w-full h-screen bg-slate-600'>Section 2</section>
        <section className='w-full h-screen bg-slate-500' >Section 3</section>
      </>
    
  )
}

export default Jobs