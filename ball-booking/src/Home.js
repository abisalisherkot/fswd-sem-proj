import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import ControlledCarousel from './components/carousel'
import Newssection from './components/Newssection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <ControlledCarousel/>
     <Newssection/>
     <Footer/>

    </div>
  )
}
