import React from 'react'
import Navbar from '../components/Navbar'
import LandingCarousel from '../components/landingPage/LandingCarousel'
import AboutUs from '../components/AboutComponent'
import LandingCardComponent1 from '../components/landingPage/LandingCardComponent1'
import LandingCardComponent2 from '../components/landingPage/LandingCardComponent2'
import LandingCardComponent3 from '../components/landingPage/LandingCardComponent3'
import Footer from '../components/MainFooter'

const LandingPage = () => {
    return (
        <>
            <Navbar/>   
            <LandingCarousel/>
            <AboutUs/>
            <LandingCardComponent1/>
            <LandingCardComponent2/>
            <LandingCardComponent3/>
            <Footer/>
        </>
    )
}

export default LandingPage