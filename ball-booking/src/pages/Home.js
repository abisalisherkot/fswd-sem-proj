import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import ControlledCarousel from '../components/Carousel'
import NewsSection from '../components/NewsSection'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import UpcomingBookings from '../components/UpcomingBookings'

export default function Home() {
 const location = useLocation();
 const data = location.state;
console.log(data);
  return (
    <>
      <NavBar data={data}/>
     <Banner/>
     
     <ControlledCarousel/>
     <div className='row'>
     <div className='column'>
       <UpcomingBookings></UpcomingBookings>
     </div>
     <div className='column'>
       <NewsSection/>
     </div>
   </div>
    
     <Footer/>
    </>
  )
}
