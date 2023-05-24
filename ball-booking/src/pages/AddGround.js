import React, {useEffect, useState} from 'react'
import {Image, Form, Button, AccordionCollapse} from 'react-bootstrap';
import axios from 'axios';
import NavBar from '../components/NavBar'

export default function AddGround() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");

  const submitForm = async () => {
    try{
      await axios.post('http://localhost:5000/add-ground', {name: name, details: details, img: image}).then((res) => {
      console.log('res', res);
      alert('Ground added successfully');
      //history('/');
      });
    }catch(err){
      alert(`Error: ${err}`);
    }
  }

 
  const clearData = () => {
    setName('');
    setDetails('');
    setImage('');
   
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
    <>
    <NavBar></NavBar>
    <div className='row container justify-content-center align-items-center my-4'>
      <Form className="col-md-8">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ground Name</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="sportX" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Ground Details</Form.Label>
          <Form.Control value={details} onChange={(e) => setDetails(e.target.value)} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="imageUpload">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control accept="image/*" type="file" onChange={convertToBase64} />

          {image==="" || image==null?"" :<Image src={image} alt="Image description" fluid className="my-4" />}
          
        </Form.Group>
        <Button variant="success" className="mx-4 my-4" onClick={submitForm}>Submit</Button>
      </Form>
    </div>
    </>
    
  )
}