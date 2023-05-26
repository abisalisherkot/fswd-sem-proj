import React from 'react'
import '../styles/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, useNavigate,Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Registration from './Registration';
import Singup from './Login';
export default function NavBar(props) {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/Signup');
  };
  const data=props.data;
  console.log(data);
  //i write PersonName bcoz it depend on the login person it can be player or groundOwner 
  if(data){ 
  const personName=data.Name;
  const personId=data.Id;
  
  }
  const navigateToGrounds = () => {
    if(data){ 
    // 👇️ navigate to /contacts
console.log(data.Role)
    if(data.Role==='GroundOwner'){
      console.log('hhh');

      navigate("/add-ground");
    }else{
      alert('Bhi ya tera kaam nae insan ban');
    
    }
  }
  else{
    alert('abyyy pehly login kar')
    navigate('/Signup')
  }
  };
  function bookground()
  {
    if(data){ 
      const player={
        Role:'Player',
    Id:data.Id,
    Name:data.Name
    
  }
      console.log(data)
    navigate("/grounds",{state:player})
    }
    else{
      alert('Login first');
    }
  }
 
  return (
    
    <>
    <nav className="navbar navbar-expand-sm  navbar-custom">
    <a className="navbar-brand text" href><span className='customtexts'>Ball</span>Booking</a>
    <div className='vertical-line'></div>
 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse customul" id="navbarSupportedContent">
      <ul className="navbar-nav ml-5  customul">
        <li className="nav-item active">
          <a className="nav-link " href="/" onClick={()=>{navigate("/")}}>Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/grounds" onClick={bookground}>Grounds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  onClick={navigateToGrounds}>Add Ground</a>
        </li>
      </ul>
    
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
    
    <FontAwesomeIcon icon={faUser} style={{color:'white'}} onClick={navigateToContacts} />
    

    </nav>

    </>
  )
}
