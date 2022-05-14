import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer"
import Jobs from "./pages/Jobs";
import Signup from "./pages/Signup";
import Error404 from "./pages/Error404"

import {FaHome,FaUser} from "react-icons/fa"
import {MdWork} from "react-icons/md"
import {IoIosCreate} from "react-icons/io"



function App() {

  const listLinks =[
    {
      id:1,
      name:"home",
      path:"/home",
      icon: <FaHome />
    },
    {
      id:2,
      name:"jobs",
      path:"/jobs",
      icon: <MdWork />
    },
    {
      id:3,
      name:"login",
      path:"/login",
      icon: <FaUser />
    },
    {
      id:4,
      name:"signup",
      path:"/signup",
      icon: <IoIosCreate />
    }
]

  return (
    <div className="w-full min-h-screen">
      <Navbar listLinks={listLinks}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      <Footer />
      <BottomNav listLinks={listLinks}/>
    </div>
  )
}

export default App
