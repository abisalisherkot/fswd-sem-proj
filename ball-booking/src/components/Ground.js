import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import ground from '../images/ground.jpg'
import '../styles/Grounds.css'
import { Button } from 'bootstrap';
import axios from 'axios';
export default function Ground() {

  const [allGrounds, setAllGrounds] = useState([]);

  useEffect(() => {
    try{
        axios.get('http://localhost:5000/get-grounds').then((res) => {
        console.log('Res:', res.data);
        setAllGrounds(res.data.data);
        });
    }catch(err){
      console.log(`Error: ${err}`);
    } 
  }, []);

  return (
    <>
    <NavBar />
    <div className='d-flex justify-content-center mx-4 mx-lg-20 main'>
    <div className='d-grid w-100 justify-content-center '>
    
    <div className='w-100 col-1 pb-10 bg-white'>
    <div className='my-5 my-md-0'>
    <h1 className='font-weight-bold fs-3 my-4'>
    Discover and book Top football grounds in Islamabad
    </h1>
    </div>
    <div className='d-grid w-100 gap-11 col-md-2 col-lg-3 col-xl-3'>
  
   
    <div class="row">
    {allGrounds.map((ground) => (
      <div class="col-md-4">
        <div class="card mx-2 my-2">
          <img src={ground.image} class="card-img-top" alt='Ground pic'/>
          <div class="card-body">
            <div className='row d-flex'>
              <p class="card-text">{ground.name}</p>
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
