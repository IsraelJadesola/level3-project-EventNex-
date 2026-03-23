import React, { useState } from 'react'
import image1 from '../../assets/images/bg1.jpg'
import { useNavigate } from 'react-router-dom'
import './LandingCarousel.css'

const LandingCarousel = () => {
    const [eventSearch, setEventSearch] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        // Build search query parameters
        const params = new URLSearchParams()
        if (eventSearch.trim()) params.append('search', eventSearch)
        if (location.trim()) params.append('location', location)
        if (date) params.append('date', date)

        // Navigate to dashboard with search filters
        const queryString = params.toString()
        navigate(`/dashboard${queryString ? '?' + queryString : ''}`)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }
    return (
        <div
            className="carousel-content"
            style={{
                height: '100vh',
                backgroundImage: `url(${image1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div
                className="text-center text-white carousel-caption-container"
                style={{
                    maxWidth: '90%',
                    width: '100%',
                    marginTop: '80px'
                }}
            >
                <h1 className="carousel-title fw-bold mb-4 mt-5" st yle={{
                    color: '#f5d47a',
                    textShadow: '3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.2)',
                    fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                    whiteSpace: 'nowrap',
                    display: 'inline-block'
                }}>EventNex</h1>
                <p className="carousel-subtitle mb-3" style={{
                    color: '#FFFFFF',
                    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.7)',
                    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                    fontWeight: '600'
                }}>Discover Events, book tickets instantly.</p>
                <p className="carousel-description mb-5" style={{
                    color: '#FFFFFF',
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.6)',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
                }}>Explore concerts, workshops, conferences & more all in one place</p>

                <div className='bg-white text-black p-3 p-md-4 rounded-4 shadow-lg' style={{ maxWidth: '800px', margin: '0 auto', width: '95%' }}>
                    <div className='row g-2 align-items-center'>
                        <div className='col-12 col-sm-6 col-md-3'>
                            <div className='text-start'>
                                <input
                                    type='text'
                                    className='form-control border-0'
                                    placeholder='Search Event'
                                    value={eventSearch}
                                    onChange={(e) => setEventSearch(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3'>
                            <div className='text-start'>
                                <input
                                    type='text'
                                    className='form-control border-0'
                                    placeholder='Location'
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3'>
                            <div className='text-start'>
                                <input
                                    type='date'
                                    className='form-control border-0'
                                    placeholder='Date'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3'>
                            <button
                                className='btn btn-dark w-100 w-md-75 px-2 py-2 rounded-4 fs-5 sBtn'
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingCarousel