import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <header>
        <a href="#" class="logo">Accunitix</a>
        <div class="bx bx-menu" id="menu-icon"></div>

        <ul class="navlist ">
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
        </ul>
    </header>
    </div>
  )
}
