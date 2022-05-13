import React,{useRef} from 'react'
import Access from '../components/Access'
import MainTitle from '../components/MainTitle'

const Login = () => {


  return (
    <>
      <MainTitle title="login"/>
      <section className='w-full py-20 flex justify-center items-center'>
        <Access/>
      </section>
    </>

  )
}

export default Login