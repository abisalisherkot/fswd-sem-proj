
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from './NavBar';
import Banner from '../components/Banner';
import PageHeading from './PageHeading';

export default function Registration() {

  const user = {
    name: 'John',
    email: 'john@example.com',
    password: 'password123'
  };
  
  
  async function sendData() {
    const response = await fetch('https://localhost:7191/api/Values', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    
  }
  
  function handleSubmit(event) {
   
      event.preventDefault();
    
  }
  
  return (
    <div>
    <NavBar />
    <PageHeading/>
    <div className='container'>
    <div className='col-md-6'></div>
    <div className=' col-md-6 ml-2px'></div>
    <Form onSubmit={ handleSubmit }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={ sendData }>
        Submit
      </Button>
    </Form></div>
    </div>
    </div>
  )
}
