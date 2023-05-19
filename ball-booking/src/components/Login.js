import React from 'react'
import NavBar from './NavBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
export default function Login() {
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    function setFname(name){
      setFname(name)
    }
    function setLname(name){
      setlname(name)
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    const user = {
        fname: fname,
        lname:lname,
        email: 'john@example.com',
        password: 'password123'
      };
    async function  Registere(){
const response=fetch('https://localhost:7191/api/Values',{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(user)

})
    }
  return (
    <><NavBar/>
    <div>
    <div className=' col-md-6 container bg-light'>
    <Form onSubmit={ handleSubmit }>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>FirstName</Form.Label>
      <Form.Control type="text" placeholder="Firstname" onChange={(e)=>{setfname(e.target.value)}}/>
      <Form.Label>LastName</Form.Label>
      <Form.Control type="text" placeholder="Firstname" onChange={(e)=>{setlname(e.target.value
        )}} />
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}} />

      <Form.Text className="text-muted">
        We'll never share your email with anyone.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
    </Form.Group>
    <Button variant="primary" type="submit"  style={{width:"34pc"}} onClick={Registere}>
      Register
    </Button>

 
    
  </Form>
  </div>
    </div></>
    
  )
}
