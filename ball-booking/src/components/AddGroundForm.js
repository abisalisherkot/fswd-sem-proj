import React, {useState} from 'react';
import {Image, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddGroundForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState("");
  const [validated, setValidated] = useState(false);
  const history = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log('Inside if');
      e.stopPropagation();
    } else {
      console.log('Inside else');
      if(name === '' || location === '' || address === '' || price === '' || image === ''){
        console.log('Form not filled');
      }else{
        console.log('Submit form');
      
        try{
          await axios.post('http://localhost:5000/add-ground', 
          {name: name, location: location, address: address, price: price, img: image}).then((res) => {
          console.log('res', res);
          alert('Ground added successfully');
          history('/grounds');
          });
        }catch(err){
          alert(`Error: ${err}`);
        }
    }
    }
    setValidated(true);
  }

 
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = err => {
      console.log(`Error: ${err}`);
    };

  }
  return (
    <div className='row container justify-content-center align-items-center my-4'>
      <Form noValidate validated={validated} className="col-md-6">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ground Name:</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="SportX"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a ground name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Ground Location:</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Islamabad"
              name="location"
              value="Islamabad"
              checked={location === 'Islamabad'}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <Form.Check
              type="radio"
              label="Rawalpindi"
              name="location"
              value="Rawalpindi"
              checked={location === 'Rawalpindi'}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Ground Address:</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a ground address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Booking Price:</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid booking price
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="imageUpload">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control accept="image/*" type="file" onChange={convertToBase64} required />
          {image === '' ? (
            <Form.Control.Feedback type="invalid">
              Please upload an image
            </Form.Control.Feedback>
          ) : (
            <Image src={image} alt="Image description" fluid className="my-4" />
          )}
        </Form.Group>

        <Button variant="success" className="mx-4 my-4" onClick={submitForm}>Submit</Button>

      </Form>
    </div>
  )
}

export default AddGroundForm