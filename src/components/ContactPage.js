import React from "react";
import "./ContactPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Phone1: </span>
            <a href="tel:+917350605134" className="contact-value">
              +91 73506 05134
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone2: </span>
            <a href="tel:+91 88302 27812" className="contact-value">
             +91 88302 27812
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email: </span>
            <a href="evolution01@gmail.com" className="contact-value">
              evolution01@gmail.com
            </a>
          </div>
        </div>
        <button className="email-button">Email Us</button>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
