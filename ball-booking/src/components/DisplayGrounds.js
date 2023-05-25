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
        <div className="container">
        <div className="row">
        {allGrounds.map((ground) => (
          <div key={ground._id} className="col-md-4">
            <div className="card mx-2 my-4">
            <img src={ground.image} className="card-img-top img-fluid" alt='Ground pic'/>
              <div className="card-body">
                  <p className="card-text"><b>Ground: </b>{ground.name}</p>
                  <p className="card-text"><b>Address: </b>{ground.address}, {ground.location}</p>
                  <p className="card-text"><b>Price: </b>{ground.price}</p>
                  <div className='btn btn-primary'>Book Now</div>
                </div>
            </div>
          </div>
        ))}
      </div> 
      </div>
      )}   
    </>
  )
}

export default DisplayGrounds