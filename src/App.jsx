import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Query from "./components/Query/Query.jsx";
import Premium from "./components/Premium2.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={ <Courses /> }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/query" element={<Query />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/About" element={<About />} />
          
        </Routes>
        <Toaster />
        <Footer/>

      </div>

    </>
  );
}

export default App;
