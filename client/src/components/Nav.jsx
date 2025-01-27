import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";
import {useTodoContext} from "../utils/GlobalState";

const Nav = () => {
  const [state, dispatch] = useTodoContext();
  console.log(state);
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="nav-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button type="button" class="navbar-toggler" onClick={handleMenuOpen}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={menuOpen ? "navbar-collapse show" : "navbar-collapse collapse"} id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to ="/home" class="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li class="nav-item">
              <Link to ="/search" class="nav-link" onClick={() => setMenuOpen(false)}>Restaurants</Link>
            </li>
            <li class="nav-item">
              <Link to ="/users" class="nav-link" onClick={() => setMenuOpen(false)}>Rameneurs</Link>
            </li>
            <li class="nav-item">
              <Link to ="/friends" class="nav-link" onClick={() => setMenuOpen(false)}>Friends</Link>
            </li>
            <li class="nav-item">
              <Link to ="/vids" class="nav-link" onClick={() => setMenuOpen(false)}>Videos</Link>
            </li>
            <li class="nav-item">
              <Link to ="/info" class="nav-link" onClick={() => setMenuOpen(false)}>Facts</Link>
            </li>
            <li class="nav-item">
              <Link to ="/register" class="nav-link" onClick={() => setMenuOpen(false)}>Register</Link>
            </li>
            {!localStorage.getItem("id")?  
           <li class="nav-item">
           <Link to ="/login" class="nav-link" onClick={() => setMenuOpen(false)}>Login</Link></li> : 
            <li class="nav-item">
            <Link to ="/logout" class="nav-link" onClick={() => setMenuOpen(false)}>Logout</Link></li>}
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Nav;