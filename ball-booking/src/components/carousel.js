import React, { useState, useEffect } from 'react';
import { Spinner, Carousel } from 'react-bootstrap';
import axios from 'axios';

const ControlledCarousel = () => {
  const [allGrounds, setAllGrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    try {
      console.log('Inside try of Ground.js front-end');
      axios.get('http://localhost:5000/get-grounds').then((res) => {
        console.log('Res:', res.data);
        setAllGrounds(res.data.data);
        setIsLoading(false); // Set loading state to false when data is received
      });
    } catch (err) {
      console.log('Inside catch of Ground.js front-end');
      console.log(`Error: ${err}`);
      setIsLoading(false); // Set loading state to false when data is received
    }
  }, []);

  // Names of the grounds to filter
  const desiredNames = ['SportX', 'Total', 'Palm'];

  // Filter the allGrounds array based on desired names and take the first three matching elements
  const displayedGrounds = allGrounds.filter((ground) => desiredNames.includes(ground.name)).slice(0, 3);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        
        <Carousel>
          {displayedGrounds.map((ground) => (
            <Carousel.Item key={ground._id}>
              <Carousel.Caption>
                    <h3>{ground.name}, {ground.location}</h3>
                    <button type='button' className='btn btn-info'>See Details</button>
                  </Carousel.Caption>
                <img src={ground.image} className="" style={{ width: '100%', height: '25%' }} alt="Ground pic" />
            </Carousel.Item>
          ))}
        </Carousel>
       
      )}
    </>
  );
};

export default ControlledCarousel;