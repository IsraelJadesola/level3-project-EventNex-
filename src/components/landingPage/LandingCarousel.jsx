import React from 'react'
import image1 from '../../assets/images/bg1.jpg'
import image2 from '../../assets/images/bg2.jpg'
import image3 from '../../assets/images/bg3.jpg'
import image4 from '../../assets/images/bg4.jpg'
import image5 from '../../assets/images/bg5.jpg'
import './LandingCarousel.css'

const LandingCarousel = () => {
    return (
        <div className="carousel-content">
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                style={{
                    height: '100vh',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100">
                        <img 
                            src={image1} 
                            className="d-block w-100 h-100" 
                            alt="image1" 
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                        />
                    </div>
                    <div className="carousel-item h-100">
                        <img 
                            src={image2} 
                            loading="lazy" 
                            className="d-block w-100 h-100" 
                            alt="image2" 
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                        />
                    </div>
                    <div className="carousel-item h-100">
                        <img 
                            src={image3} 
                            loading="lazy" 
                            className="d-block w-100 h-100" 
                            alt="image3" 
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                        />
                    </div>
                    <div className="carousel-item h-100">
                        <img 
                            src={image4} 
                            loading="lazy" 
                            className="d-block w-100 h-100" 
                            alt="image4" 
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                        />
                    </div>
                    <div className="carousel-item h-100">
                        <img 
                            src={image5} 
                            loading="lazy" 
                            className="d-block w-100 h-100" 
                            alt="image5" 
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                        />
                    </div>
                </div>

                <div
                    className="position-absolute top-50 start-50 translate-middle text-center text-white carousel-caption-container"
                    style={{
                        zIndex: 2,
                        maxWidth: '90%',
                        width: '100%'
                    }}
                >
                    <h1 className="carousel-title fw-bold mb-4">Discover Events.</h1>
                    <p className="carousel-subtitle mb-3">Book Tickets Instantly.</p>
                    <p className="carousel-description mb-5">Explore concerts, workshops, conferences & more all in one place</p>

                    <div className='bg-white text-black p-4 rounded-4 shadow-lg' style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className='row g-2 align-items-center'>
                            <div className='col-md-3'>
                                <div className='text-start'>
                                    <input type='text' className='form-control border-0' placeholder='Search Event' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='text-start'>
                                    <input type='text' className='form-control border-0' placeholder='Location' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='text-start'>
                                    <input type='date' className='form-control border-0' placeholder='Date'/>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <button className='btn btn-dark w-75 px-2 py-2 rounded-4 fs-5 sBtn'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingCarousel