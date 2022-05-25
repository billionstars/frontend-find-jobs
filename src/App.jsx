import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "./context/AuthContext";

import { recoverSession } from "./api";

import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Jobs from "./pages/Jobs";
import Signup from "./pages/Signup";
import Error404 from "./pages/Error404";
import { User } from "./pages/User";
import { Offert } from "./pages/Offert";

function App() {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const recSession = () => {
      const token = localStorage.getItem("token");

      if (token) {
        recoverSession("/api/auth/validate")
          .then(({ data }) => {
            // console.log("recovery", data.user);
            if (data.failed) {
              console.log("Recovery Error", data);
            } else {
              setAuth({
                id: data.user.id,
                name: data.user.name,
                email: data.user.email,
                role: data.user.role,
                logged: true,
              });
            }
          })
          .catch((error) => console.log("Catch Recovery Error: ", error));
      }
    };

    recSession();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {auth.logged && <Route path="/user/:userId" element={<User />} />}
        {auth.logged && <Route path="/jobs/:jobId" element={<Offert />} />}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
