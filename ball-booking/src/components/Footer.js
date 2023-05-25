import React from 'react'
import Redbull from '../images/redbull.jpg'

import '../styles/Footer.css'
export default function Footer() {
  return (
    <div>

      
      <div className='footer-nav footer-nav--network'>
        <div className='o-block o-block--corset footer-nav_inner'>
          <div className='nav-grid-flex_item o-1/4@760'>
            <div className='footer-nav__first-col'>
              <div className='col-md-2 footer-nav__brand-logo mt-5'>
                <span className='footer-nav__text-logo'>BALLBOO</span>
                <span className='footer-nav__brand-color-text'>KING</span>
                 
                  <h4 className='footer-nav__brand-color-text mx-4'>Official Sponsors</h4>
                  <div className='footer-sponsors_sponsors mx-4'>
                    <img src={Redbull} width='40px' alt='Redbull Sponsor' />
                  </div>
                  <div className='footer-sponsors_sponsors mx-4'>
                    <img src={Redbull} width='40px' alt='Redbull Sponsor' />
                  </div>
           
              </div>
            </div>
          </div>
          
        </div>
        
        <div className='o-block o-block--corset'>
          <div className='footer-nav__bottom-block'>
            <div className='footer-nav__policy-wrap'>
              <a className='footer-nav__policy' href>Privacy Policy</a>
              <span className='footer-nav__divider'>|</span>
              <a className='footer-nav__policy' href>Legal Notice</a>
            
              <span className='footer-nav-rights'>&copy; 2023 BallBooking all rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

