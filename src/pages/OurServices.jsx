import React from 'react'
import Navbar from '../components/Navbar'
import LandingCardComponent1 from '../components/landingPage/LandingCardComponent1'
import LandingCardComponent2 from '../components/landingPage/LandingCardComponent2'
import LandingCardComponent3 from '../components/landingPage/LandingCardComponent3'

const OurServices = () => {
    return (
        <div className='bg-black'>
            <Navbar/>
            <br />
            <br />
            <LandingCardComponent1/>
            <LandingCardComponent2/>
            <LandingCardComponent3/>
        </div>
    )
}

export default OurServices