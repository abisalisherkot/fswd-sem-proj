import React from 'react'
import '../Styling/Banner.css'
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
          <div className='col-md-5 mt-5'>
            <h1><span>PLAY FOOT</span>BALL</h1>
          </div>

          <div className='col-md-2'></div>
          <div className=' row mt-5 search'>
            <div className='row col-md-10'>
              <FontAwesomeIcon icon={ faMagnifyingGlass } className='svg' />
              <div className='text'> <h6>Find a place to play</h6></div>

            </div>




          </div>

        </div>

        <hr></hr>

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


      </div>
    
    </div></>
  )
}
