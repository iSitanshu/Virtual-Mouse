import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Guide from './components/Guide/Guide';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import './App.css';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Line from './components/Line/Line';
import Mouse from './components/Mouse/Mouse';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <section id="home">
          <Header />
        </section>
        <section id="guide">
          <div className='card-content'>
            <h1>Guide Tour</h1>
            <p>This guide provides clear, simple instructions with corresponding gestures to help users get started with your virtual mouse system.</p>
          </div>
          <Guide />
        </section>
        <section id="review">
          <div className='card-content'>
            <h1 className='render'>User Reviews</h1>
            <p>Discover what our users have to say about their experiences with our products. We value your feedback and strive to improve continuously. Read real testimonials from our community to see how we make a difference!</p>
          </div>
          <Reviews />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
