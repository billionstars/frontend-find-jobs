import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/ofertas" element={<h1>Ofertas</h1>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
  )
}

export default App
