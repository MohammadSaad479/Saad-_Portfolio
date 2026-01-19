import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Information from './components/Information'
import Intro from './components/Intro'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import WorkTogether from './components/WorkTogether'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-neutral-950'>
      <div className='w-full max-w-3xl h-min-screen mx-auto bg-neutral-950'>
        <Navbar/>
        <HeroSection/>
        <Information/>
        <Intro/>
        <TechStack/>
        <Experience/>
        <Projects/>
        <WorkTogether/>
        <Footer/>
      </div>
    </div>
    
                                    
  )
}

export default page