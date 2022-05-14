import React,{useRef} from 'react'
import Access from '../components/Access'
import MainTitle from '../components/MainTitle'

const Login = () => {


  return (
    <div className='w-full bg-lila/90'>
      <MainTitle title="Login"/>
      <section className='w-full py-72 h-96 flex justify-center items-center'>
        <Access/>
      </section>
    </div>

  )
}

export default Login