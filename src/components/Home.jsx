import React from 'react'
import Hero from './hero/Hero'
import Benefits from './hero/Benefits'
import Disclaimer from './hero/Disclaimer'
import TechImportance from './hero/TechImportance'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Disclaimer />
      <Benefits />
      <TechImportance />
      <Footer />
    </div>
  )
}

export default Home
