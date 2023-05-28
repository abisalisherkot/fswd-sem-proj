import React, { useEffect } from 'react';
import '../styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Registration from './Registration';
import Singup from './Login';

export default function NavBar(props) {
  const navigate = useNavigate();
  const storedData = localStorage.getItem('userData');
  const data = storedData ? JSON.parse(storedData) : null;

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const navigateToContacts = () => {
    navigate('/Signup');
  };

  const navigateToGrounds = () => {
    if (data) {
      if (data.Role === 'GroundOwner') {
        navigate('/add-ground');
      } else {
        alert('Bhi ya tera kaam nae insan ban');
      }
    } else {
      alert('abyyy pehly login kar');
      navigate('/Signup');
    }
  };

  function bookground() {
    if (data) {
      const player = {
        Role: 'Player',
        Id: data.Id,
        Name: data.Name,
      };
      navigate('/grounds', { state: player });
    } else {
      alert('Login first');
      navigate('/signup')
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-custom">
        <a className="navbar-brand text" href="/">
          <span className="customtexts">Ball</span>Booking
        </a>
        <div className="vertical-line"></div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse customul" id="navbarSupportedContent">
          <ul className="navbar-nav ml-5  customul">
            <li className="nav-item active">
              <a className="nav-link" href="/" onClick={() => navigate('/')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="" onClick={bookground}>
                Grounds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={navigateToGrounds}>
                Add Ground
              </a>
            </li>
          </ul>
        </div>

        <FontAwesomeIcon
          icon={faUser}
          style={{ color: 'white' }}
          onClick={navigateToContacts}
        />
      </nav>
    </>
  );
}
