import React from 'react'
import '../styles/Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ControlledCarousel from './carousel';
import Newssection from './Newssection';
import Footer from './Footer';
import NavBar from './NavBar';
export default function Banner() {
  return (
    <>
   
    <div className='main'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 my-5'>
            <h1><span>PLAY FOOT</span>BALL</h1>
          </div>
          <div className='col-md-2 my-5 search'>
            <div className='row my-3'>
              <FontAwesomeIcon icon={ faMagnifyingGlass } className='svg col-md-1 mt-1' />
              <h6 className='col-md-8'>Find a place to play</h6>
            </div>
          </div>
        </div>
        
        </div>
    
    </div>
 
        {/* 
        <div className='nav-bar container'>
          <div className='row'>
            <ul className="navbar-nav ml-5  customulsecondnav">
              <li className="nav-item active">
                <a className="nav-link " href="#">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#">Disabled</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Disabled</a>
              </li> <li className="nav-item">
                <a className="nav-link " href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        */}

      
    </>
  )
}
