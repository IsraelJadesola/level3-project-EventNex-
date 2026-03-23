import React from 'react'
import AboutComponent from '../components/AboutComponent'
import Navbar from '../components/Navbar'

const AboutPage = () => {
    return (
        <div className='bg-black'>
            <Navbar />
            <AboutComponent />
        </div>
    )
}

export default AboutPage