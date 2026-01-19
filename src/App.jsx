import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';


function App() {

  return (
    <>
      {/* <LandingPage /> */}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
