import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ground from '../images/ground.jpg';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ground}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Sukchyan Ground</h3>
        <button type='button' className='btn btn-success'>Book Now</button>
        <button type='button' className='btn btn-primary ' style={{ marginLeft: '10px' }} >See Details</button>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ground}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Sukchyan Ground</h3>
        <button type='button' className='btn btn-success'>Book Now</button>
        <button type='button' className='btn btn-primary ' style={{ marginLeft: '10px' }} >See Details</button>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ground}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Sukchyan Ground</h3>
        <button type='button' className='btn btn-success'>Book Now</button>
        <button type='button' className='btn btn-primary ' style={{ marginLeft: '10px' }} >See Details</button>
      </Carousel.Caption>
      
      </Carousel.Item>
    </Carousel>
    </>
  );
}

