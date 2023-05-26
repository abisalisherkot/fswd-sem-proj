import React, {useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';

const DisplayGrounds = () => {
  const [allGrounds, setAllGrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


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

  const bookGround = async (e) => {
     
      console.log('Inside else');
      if(selectedDate === '' || selectedTime === ''){
        console.log('Please select date time');
      }else{
        console.log(`Date: ${selectedDate}, Time: ${selectedTime}`)
        console.log(typeof(selectedDate), typeof(selectedTime));
        // try{
        //   await axios.post('http://localhost:5000/add-ground', 
        //   {name: name, location: location, address: address, price: price, img: image}).then((res) => {
        //   console.log('res', res);
        //   alert('Ground added successfully');
        //   history('/grounds');
        //   });
        // }catch(err){
        //   alert(`Error: ${err}`);
        // }
    }
    //setOpen(false);
  }

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
                  <Button variant="primary" className="my-2" 
                  onClick={() => setOpen(true)}>Book Now</Button>
                  {open === true && (
                    <span>
                      <div className="my-2">
                        <div className="my-2 mx-4">
                          <div className="my-2">
                            <label htmlFor="date" className="mb-1 block text-base font-medium text-[#07074D]">
                              Date
                            </label>
                            <input
                              type="date"
                              name="date"
                              id="date"
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div className="my-2">
                          <div className="my-2 mx-4">
                            <label htmlFor="time" className="my-2">
                              Time
                            </label>
                            <input
                              type="time"
                              name="time"
                              id="time"
                              onChange={(e) => setSelectedTime(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="success"
                        className="hover:shadow-form rounded-md bg-[#0E9F6E] py-2 px-6 text-center text-base font-semibold text-white outline-none"
                        onClick={bookGround}>
                        Submit
                      </Button>
                    </span>
                  )}
                  
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


