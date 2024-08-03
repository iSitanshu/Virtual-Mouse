import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {
  return (
    <div className="navbar-header">
      <div className="navbar-left">
        <Link to="home" smooth={true} duration={500}>
          <img src="src/assets/Lazy.jpeg" alt="Virtual Mouse Logo"/>
        </Link>
          <p>Virtual <br />Mouse</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="home" smooth={true} duration={500} activeClass="active">Home</Link>
        </li>
        <li>
          <Link to="guide" smooth={true} duration={500} activeClass="active">Guide</Link>
        </li>
        <li>
          <Link to="render" smooth={true} duration={500} activeClass="active">Reviews</Link>
        </li>
        <li>
          <Link to="footer" smooth={true} duration={500} activeClass="active">Extension</Link>
        </li>
        <li>
          <Link to="footer" smooth={true} duration={500} activeClass="active">Contact us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <button className='signup-button' onClick={()=>setShowLogin(true)}>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
