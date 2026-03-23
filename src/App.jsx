import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/AboutPage';
import OurServices from './pages/OurServices';
import AdminSignUp from './pages/admin/AdminSignUp';
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminDashboard from './pages/admin/AdminDashboard';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import FAQ from './pages/FAQ';
import TermsOfService from './pages/TermsOfService';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';
import Footer from './components/MainFooter';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<OurServices />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/terms' element={<TermsOfService />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/cookies' element={<CookiesPolicy />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin-signup' element={<AdminSignUp />} />
        <Route path='/admin-signin' element={<AdminSignIn />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
