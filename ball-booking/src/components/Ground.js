import React from 'react'
import NavBar from './NavBar'
import ground from '../images/ground.jpg'
import '../styling/Grounds.css'
import { Button } from 'bootstrap'
export default function Ground() {
    const items = [1, 2, 3, 4, 5,6,7,8];
  return (
    <>
    <NavBar />
    <div className='d-flex justify-content-center mx-4 mx-lg-20 main'>
    <div className='d-grid w-100 justify-content-center '>
    
    <div className='w-100 col-1 pb-10 bg-white'>
    <div className='my-5 my-md-0'>
    <h1 className='font-weight-bold fs-3 mt-3'>
    Discover and book Top football ground in Islamabad
    </h1>
    </div>
    <div className='d-grid w-100 gap-11 col-md-2 col-lg-3 col-xl-3'>
  
   
    <div class="row">
    {items.map((_, index) => (
      <div class="col-md-3" key={index}>
        <div class="card">
          <img src={ground} class="card-img-top" alt={`Image ${index + 1}`} />
          <div class="card-body">
            <div className='row d-flex'>
              <p class="card-text">Text for Card {index + 1}</p>
              <div className='btn btn-primary'>Book Now</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
    
   
    
   
   
  
  
    
    </div>
    
    </div>
    </div>
    
    </div>
    </>
    
  )
}
