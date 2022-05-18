import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-32 bg-azul/80 mb-16 lg:mb-0'>
      <div className='container mx-auto h-full flex flex-col justify-center items-center text-lila'>
        <p>Terminos y Condiciones</p>
        <p>Contacto</p>
        <p>Design by <a className='hover:underline hover:underline-offset-2 hover:text-white' href="https://github.com/billionstars/frontend-find-jobs">billionstars</a></p>
      </div>
    </footer>
  )
}

export default Footer