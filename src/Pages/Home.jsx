import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import OurSolution from '../components/OurSolution/OurSolution'
import OurApproach from '../components/OurApproach/OurApproach'
import OurProjects from '../components/Projects/OurProjects'

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <OurSolution/>
      <OurApproach/>
      <OurProjects/>
    </React.Fragment>
  )
}

export default Home
