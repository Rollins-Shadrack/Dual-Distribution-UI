import React from 'react'
import './footer.css'

const Footer = () => {
    return (
            <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">our products</a></li>
                        <li><a href="#">privacy policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Our Offices</h4>
                    <ul>
                        <li><a href="#">Nairobi</a></li>
                        <li><a href="#">Kisumu</a></li>
                        <li><a href="#">Qatar</a></li>
                        <li><a href="#">United States of America</a></li>
                        <li><a href="#">Canada</a></li>
                        <li><a href="#">Kampala</a></li>
                        <li><a href="#">Dodoma</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer