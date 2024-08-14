import React from 'react';
import './Header.css';
import { BackgroundVid } from '../../assets/assets';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header-content">
      <div className="header-content-left">
        <h1><span>Experience</span> the Future of Computing with Hand Gestures</h1>
        <p>Say goodbye to traditional mice and embrace the power of our Virtual Mouse System. Control your computer effortlessly with intuitive hand gestures, providing a seamless and innovative user experience for everyone. Perfect for those seeking comfort, accessibility, and cutting-edge technology.</p>
        <Link to="guide" smooth={true} duration={500}>
          <button className='getstart'>Get Started</button>
        </Link>
      </div>
      <div className="header-content-right">
        <video src="src/assets/video.mp4" playsInline loop muted controls autoPlay></video>
      </div>
    </div>
  );
}

export default Header;
