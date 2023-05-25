import React, {useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const DisplayGrounds = () => {
    const [allGrounds, setAllGrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    try{
        console.log('Inside try of Ground.js front-end');
        axios.get('http://localhost:5000/get-grounds').then((res) => {
        console.log('Res:', res.data);
        setAllGrounds(res.data.data);
        setIsLoading(false); // Set loading state to false when data is received
        });
    }catch(err){
      console.log('Inside catch of Ground.js front-end');
      console.log(`Error: ${err}`);
      setIsLoading(false); // Set loading state to false when data is received
    } 
  }, []);
  return (
    <>
    {isLoading
        ? ( <div className="text-center"> <Spinner animation="border" variant="primary"/></div>) 
        : (
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
      )}   
    </>
  )
}

export default DisplayGrounds