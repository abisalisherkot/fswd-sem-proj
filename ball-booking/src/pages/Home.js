import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import ControlledCarousel from '../components/carousel'
import NewsSection from '../components/Newssection'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';

export default function Home() {
 const location = useLocation();
 const data = location.state;
console.log(data);
  return (
    <>
      <NavBar data={data}/>
     <Banner/>
     <ControlledCarousel/>
     <NewsSection/>
     <Footer/>
    </>
  )
}
