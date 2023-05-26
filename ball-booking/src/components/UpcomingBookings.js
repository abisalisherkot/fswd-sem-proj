import React, {useEffect, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UpcomingBookings = () => {

  const [allBookings, setAllBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const storedData = localStorage.getItem('userData');
  const data = storedData ? JSON.parse(storedData) : null;

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

 
  useEffect(() => {
    try{
      const personID = data.Id;
        // console.log('Inside try of Ground.js front-end');
        axios.get(`http://localhost:5000/get-bookings/${personID}`).then((res) => {
        console.log('Upcoming bookings retrieved from db successfully using API');
        //console.log('Res:', res.data);
        setAllBooking(res.data.data);
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
        {allBookings.map((booking) => (
          <div key={booking._id} className="col-md-6">
              <Card className="my-5 mx-5">
                <Card.Img variant="top" src={booking.groundImage} alt="Ground" />
                <Card.Body>
                  <Card.Title>Booking Details</Card.Title>
                  <ListGroup horizontal>
                    <div>
                      <ListGroup.Item>
                        <strong>Person Name:</strong> {booking.personName}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Booking Date:</strong> {booking.bookingDate}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Booking Time:</strong> {booking.bookingTime}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Booking Price:</strong> {booking.bookingPrice}
                      </ListGroup.Item>
                    </div>
                    <div>
                      <ListGroup.Item>
                        <strong>Ground Name:</strong> {booking.groundName}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Ground Location:</strong> {booking.groundLocation}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Ground Address:</strong> {booking.groundAddress}
                      </ListGroup.Item>
                    </div>
                  </ListGroup>
                </Card.Body>
              </Card>


            </div>
            ))}
            </div>
          </div>
      )
    }
        
    </>
  );
};

export default UpcomingBookings;
