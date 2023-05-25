import React from 'react'
import NavBar from '../components/NavBar';
import DisplayGrounds from '../components/DisplayGrounds';
import '../styles/Grounds.css'

export default function Grounds() {

  return (
    <>
    <NavBar />
    <h1 className='font-weight-bold fs-3 my-4'>
      Discover and book top football grounds of Islamabad/Rawalpindi
    </h1>
    <DisplayGrounds></DisplayGrounds>
    </>
  )
}
