import React from 'react'
import LandingHearder from '../components/LandingPage/LandingHearder'
import LandingHerosection from '../components/LandingPage/LandingHerosection'
import Highlight from '../components/LandingPage/Highlight'
import KeyFeatures from '../components/LandingPage/KeyFeatures'
import Footer from '../components/LandingPage/Footer'

const Landing = () => {
  return (
      <main className='w-[100%] overflow-x-hidden bg-[#FAF1ED] text-black '>
        <LandingHearder/>
        <LandingHerosection/>
        <Highlight/>
        <KeyFeatures/>
        <Footer/>
      </main>
  )
}

export default Landing
