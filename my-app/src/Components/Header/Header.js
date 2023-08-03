import React from 'react';
import './Header.css';

function Header() {
  return (
     <>
     <div className='b2b-header'>
        <div className='b2b-img'>
        <img src='https://b2bcampus.com/wp-content/uploads/2023/04/Campus-logo-design-Trademark.png' alt='props'/>
        </div>
        <div className='header-page'>
            <ul>
                <li><a href='#'>B2B Campus</a></li>
                <li><a href='#'>All Course</a></li>
                <li><a href='#'>Placement</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Knowledge Center</a></li> 
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
        <div className='header-button'>
            <a href='#'>Book a FREE demo</a>
           
        </div>
     </div>
     </>
  )
}

export default Header