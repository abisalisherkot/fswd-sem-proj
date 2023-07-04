import React from 'react'
import '../styles/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, useNavigate,Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Registration from './Registration';
import Singup from './Login';
export default function NavBar() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/Signup');
  };
  return (
    
    <div>
    <nav className="navbar navbar-expand-sm  navbar-custom">
    <a className="navbar-brand text" href="#"><span className='customtexts'>Ball</span>Booking</a>
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
          <a className="nav-link"  href="/grounds" onClick={()=>{navigate("/grounds")}}>Grounds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/add-ground" onClick={()=>{navigate("/add-ground")}}>Add Ground</a>
        </li>
      </ul>
    
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
    
    <FontAwesomeIcon icon={faUser} style={{color:'white'}} onClick={navigateToContacts} />
    

    </nav>

    </div>
  )
}
