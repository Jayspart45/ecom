import React from "react";
import logo from "../images/img14.jpg";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">
                  Cart
                </a>
              </li>
              <li>
                <a href="#">Abouts</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>(123) 456-7890</p>
            <p>info@example.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
