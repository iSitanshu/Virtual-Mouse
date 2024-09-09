import React, { useEffect, useState } from 'react';
import './Guide.css';
import StepCard from '../StepCard/StepCard';
import { BackgroundImg } from '../../assets/assets';
import { camera, hand, socialmedia } from '../../assets/assets';

const Guide = () => {
  useEffect(() => {
    //go to the folder 
  }, [])
  
  const openCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      alert('Camera access granted');

      // Trigger the Python script on the server side
      const response = await fetch('http://localhost:5000/start_camera'); // This calls your Flask backend
      const data = await response.json();
      alert(data.message);
      
    } catch (error) {
      alert('Camera access denied');
    }
  };

  return (
    <div className="guide" style={{ backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: 'cover', backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <div className="guide-row">
        <StepCard
          stepNumber={1}
          stepImage={camera}
          stepTitle="Enable Camera Access"
          stepDescription="Raise your hand with an open palm towards the camera and allow the website to access your camera."
          buttonLabel="Click Me"
          onButtonClick={openCamera}
        />
        <div className="arrow"></div>
        <StepCard
          stepNumber={2}
          stepImage={hand}
          stepTitle="Learn Gestures"
          stepDescription="Mouse Movement: Move your hand left, right, up, or down to control the cursor. Click: Close your hand into a fist and then open it quickly to simulate a mouse click. Scroll: Move your hand up or down while keeping it open to scroll through pages."
          isCenter={true}
        />
        <div className="arrow"></div>
        <StepCard
          stepNumber={3}
          stepImage={socialmedia}
          stepTitle="Start Interacting"
          stepDescription="Use the learned gestures to navigate and interact with the website."
        />
      </div>
    </div>
  );
}

export default Guide;
