
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from './NavBar';
import Banner from '../components/Banner';
import PageHeading from './PageHeading';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Registration() {
  const [email,setemail]=useState("");
  const [passwords,setpassword]=useState("");
  const navigate=useNavigate();
   function navigatetoRegister()
  {
navigate("/Signup")
  }

 
  
 
  
  async function sendData() {
    const name = email; // Example variable
    const password = passwords;
    const url=`https://localhost:7191/api/Values/${name},${password}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
     
    });
    if(response.ok){
      const data =await response.text();
      if(data==="ok")
      {
        navigate("/")
        alert("Aunthenticated")
      }
     else{
      alert("Please Register yourself first")
     }
    

    }
    else {
      console.error('Request failed with status:', response.status);}
    
  }
  
  function handleSubmit(event) {
   
      event.preventDefault();
    
  }
  
  return (

    <div>
    <NavBar />
    <PageHeading/>
    <div className='container col-md-6 bg-light'>
    <div className='col-md-6'></div>
    <div className='Login'>
    <Form onSubmit={ handleSubmit }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
setemail(e.target.value)
        }}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{
          setpassword(e.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={ sendData } style={{width:"34pc"}}>
        Signin
      </Button>
      <div className='text-center'>
      <p>Not a member ?
      <a href='#!' onClick={navigatetoRegister}>Register</a>
      </p>
      
      </div>
      
    </Form></div>
    </div>
    </div>
  )
}
