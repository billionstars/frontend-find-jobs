import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [propiedad,setPropiedad]=useState("");

  const links = [
    {
      name:"home",
      path:"/home"
    },
    {
      name:"companies",
      path:"/companies"
    },
    {
      name:"find job",
      path:"/findjobs"
    },
    {
      name:"post job"
      ,path:"/postjobs"
    }
  ]

  const listLinks = links.map((item)=>(
    <li key={item.name} className="hover:bg-green-400 ease-in-out transition-all duration-300">
      {item.name}
    </li>
  )
  )

  const ocultar=()=>{
    if(propiedad===""){
      setPropiedad("hidden")
    }else{
      setPropiedad("")
    }
  }


  return (
    <nav className='w-full flex flex-col'>
      <div className='px-4 pt-2 flex justify-between'>
        <button onClick={ocultar} className="p-4 bg-green-300 rounded-lg">Dar Clic</button>
        <button className="p-4 bg-green-300 rounded-lg">Login</button>
      </div>
        <div className={`w-full mt-2 p-4 bg-slate-200 ease-in-out transition-all duration-300 ${propiedad}`}>
          <ol>
            {listLinks}
          </ol>
        </div>
    </nav>
  )
}

export default Navbar