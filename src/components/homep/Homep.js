import React from 'react'
import './Homep.css';
import slider from './slider.gif';

export default function Homep() {
  return (
    <>
      <div className='homm'>
        <div id="main">
        
        <h2>ACUNETIX 10.0</h2>
        <h2>Is Here</h2>
        <h1>Here are some amazing events for you</h1>
        <p>Music & Dance Events</p>
          <p>Biz Events</p>
          <p>Lit Events</p>
          <p>Pro Shows</p>
        {/* <button>Click here To See events</button> */}
        </div>
        <div id='slider'>
        <img src={slider} className="slider" alt="logo" />
        </div>
    </div>
    </>
  )
}
