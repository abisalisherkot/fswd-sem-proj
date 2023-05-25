import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import ControlledCarousel from '../components/Carousel'
import NewsSection from '../components/NewsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NavBar/>
     <Banner/>
     <ControlledCarousel/>
     <NewsSection/>
     <Footer/>
    </>
  )
}
