import React from 'react'
import '../styles/NewsSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
export default function NewsSection() {
    const items = [1, 2, 3, 4, 5];
  return (
    <div>
    <div className='col-sm-12 col-md-12 col-md-offset-0 col-lg-10 col-lg-offset-1'>
    <div className='row'>
    <div className='col-md-6' style={{padding:'0px',margin:'0px' }}>
    <div className='section-title mt-40'>
    <h1 className='uppercase text-center'>LATEST NEWS</h1>
    <div className='separator my mtb-15'></div>
   <FontAwesomeIcon icon={faNewspaper} className="icon mr-4" />
   <div className='separator my mtb-15'></div>
      

    
    </div>
    {items.map(items=>(   <div className='col-md-12 col-sm-12 mb-3' key={items}>
    <div className='service-left service-mrg mrg-xs icon-box-v1 fluid ml-3'>
    <div className='offer-icon'>
    <span className='tb-publish'>1</span>
    <span className='tb-publish2'>Mar</span>
    </div>
    <div className='offer-text' style={{borderLeft:'4px double gray',borderBottom:'4px solid #002147',padding:'4px'}}>
    <h3>Guidline for booking App</h3>
    <p>click here to view Details</p>
    </div>
    </div>
    
    </div>
   
     ))}
 
   
    </div>
    </div>
      
    </div>
 
   
  
    </div>
  )
}
