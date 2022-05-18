import React,{useRef} from 'react'

const Register = () => {

    const email = useRef()
    const password = useRef()
    const name = useRef()
    const lastName = useRef()
    const phone = useRef()

  
    const login=(event)=>{
      event.preventDefault()
      fetch("http://localhost:4000/api/auth/login",{
          method:"POST",
          body:{
              email: email.current.value,
              password:password.current.value,
              name:name.current.value,
              lastName:lastName.current.value,
              phone:phone.current.value
          }
      }).then(res=>res.json())
      .then(data=>console.log(data))
      .catch(error=>console.log(error))
    }
  
  return (
    <form className='w-96 p-4 bg-azul/80 rounded-xl shadow-lg flex flex-col justify-center items-center' onSubmit={login}>
    <label className='w-full text-white'>Email:
      <input type="text" ref={email} className='w-full p-2 mb-2 rounded-lg text-black' placeholder='example@email.com' />            
    </label>
    <label className='w-full text-white'>
      Password:
      <input type="password" ref={password} className='w-full p-2 mb-2 rounded-lg text-black' placeholder='*****'/>
    </label>
    <label className='w-full text-white'>
      Password:
      <input type="text" ref={name} className='w-full p-2 mb-2 rounded-lg text-black' placeholder='Coco'/>
    </label>
    <label className='w-full text-white'>
      Last Name:
      <input type="text" ref={lastName} className='w-full p-2 mb-2 rounded-lg text-black' placeholder='Perez'/>
    </label>
    <label className='w-full text-white'>
      Phone:
      <input type="phone" ref={phone} className='w-full p-2 mb-2 rounded-lg text-black' placeholder='+57'/>
    </label>
    <button className='bg-rosa text-white px-6 py-2 rounded-md hover:bg-rosa/80 hover:shadow-lg'>Login</button>
</form>
  )
}

export default Register