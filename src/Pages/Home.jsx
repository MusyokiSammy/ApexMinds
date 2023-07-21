import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import OurSolution from '../components/OurSolution/OurSolution'
import OurApproach from '../components/OurApproach/OurApproach'

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <OurSolution/>
      <OurApproach/>
    </React.Fragment>
  )
}

export default Home
