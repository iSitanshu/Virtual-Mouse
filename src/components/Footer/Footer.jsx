import React from 'react'
import "./Footer.css"
import { Brave, Chrome, Edge, Facebook, Instagram, logo, OperaMini, Safari, Tweet, Whatsapp } from '../../assets/assets'

const Footer = () => {
    return (
        <>
            <div className='dsds' id='footer'>
                <div className='footer-main'>
                    <p>For Better Experience, add our <br /><span>Extension</span> to your respective browser</p>
                    <div className='footer-image-set'>
                        <img src={Chrome} alt="" height={70} />
                        <img src={Brave} alt="" height={70} />
                        <img src={Safari} alt="" height={80} />
                        <img src={OperaMini} alt="" height={70} />
                        <img src={Edge} alt="" height={80} className='last' /></div>
                    <button className='btn'>Install Extension</button>
                </div>
                <div className='footer' id='footer'>
                    <div className="footer-content">
                        <div className="footer-content-left">
                            <span><img src={logo} alt="" height={40} />Virtual Mouse</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure quisquam perspiciatis, minus nulla quaerat aperiam? Omnis rerum possimus quo.</p>
                            <div className="footer-social-icons">
                                <a href='https://www.instagram.com/'><img src={Instagram} alt="" /></a>
                                <a href='https://telegram.org/'><img src={Tweet} /></a>
                                <a href='https://www.whatsapp.com/'><img src={Whatsapp} alt="" /></a>
                                <a href="https://x.com/finkd?lang=en"><img src={Facebook} alt="" /></a>
                            </div>
                        </div>
                        <div className="footer-content-center">
                            <h2>COMPANY</h2>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Extension</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="footer-content-right">
                            <h2>GET IN TOUCH</h2>
                            <ul>
                                <li>+1-123-456-7890</li>
                                <li>contact@vimo.com</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="foot-copyright">Copyright 2024 © vimo.com - All Right Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer