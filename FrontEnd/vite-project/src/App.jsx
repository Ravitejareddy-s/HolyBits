import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/HomePage/homepage.jsx'
import Login from './pages/login/login.jsx'
import Signup from './pages/signup/signup.jsx'
import { BrowserRouter , Routes , Route, Router } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/problemset/all/" element={<AllProblems />} />
        <Route path="/problems/:pid/" element={<ProblemsPage  />} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>



  )
}

export default App
