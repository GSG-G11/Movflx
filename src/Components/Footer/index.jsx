import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <>
    <div className="footer-quick-link-wrap">
                         
                                <div className="quick-link-list">
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                        
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
                                        <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
                                        <li><a href="#"><i className="ri-pinterest-fill"></i></a></li>
                                        <li><a href="#"><i className="ri-linkedin-box-fill"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                  
    </>
  )
}

export default Footer;