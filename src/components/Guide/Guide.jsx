import React, { useEffect, useState } from 'react';
import './Guide.css';
import StepCard from '../StepCard/StepCard';
import { BackgroundImg } from '../../assets/assets';
import { camera, hand, socialmedia } from '../../assets/assets';

const Guide = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);

  const toggleCamera = async () => {
    if (isCameraOn) {
      await stopCamera();
    } else {
      await openCamera();
    }
  };

  const openCamera = async () => {
    try {
      const response = await fetch('http://localhost:5000/start_camera');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setIsCameraOn(true);   
      alert(data.message);
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Failed to start camera. Check the console for details.');
      setIsCameraOn(false); 
    }
  }
  const stopCamera = async () => {
    try {
      const response = await fetch("http://localhost:5000/stop_camera");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setIsCameraOn(false);  // <-- Update state FIRST
      alert(data.message); 
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to stop camera. Check the console for details.");
      setIsCameraOn(true); 
    }
  }
  
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
          buttonLabel={isCameraOn ? "Stop Camera" : "Start Camera"}
          onButtonClick={toggleCamera}
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
