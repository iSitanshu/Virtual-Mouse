import React, { useEffect, useRef } from 'react';
import './Mouse.css';

const Mouse = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollY = window.scrollY;
        textRef.current.style.transform = `translateX(${scrollY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-mouse">
      <div className="scrolling-text" ref={textRef}>
        <p>Revolutionizing Navigation | From Clicks to Gestures, experience a new way to interact with your digital world.</p>
      </div>
    </div>
  );
};

export default Mouse;
