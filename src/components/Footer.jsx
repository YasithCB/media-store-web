// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../assets/css/footer.css";
import LogoWhite from "../assets/images/logo-white.png";

export default function Footer() {
  return (
    <footer className="footer-wrapper text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-md-3">
            <img
              src={LogoWhite}
              alt="Media Store"
              className="footer-logo mb-3"
            />
            <p className="small">
              Creative agency in Abu Dhabi delivering branding, signage, web
              development and event solutions that push your brand further.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5 className="footer-title">Get in Touch</h5>
            <ul className="footer-contact">
              <li>
                <FaPhoneAlt /> 050 230 31 30
              </li>
              <li>
                <FaWhatsapp /> 050 230 31 30
              </li>
              <li>
                <FaEnvelope /> email@mediastore.ae
              </li>
              <li>
                <FaMapMarkerAlt /> Abu Dhabi, UAE
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-md-3">
            <h5 className="footer-title">Stay Inspired</h5>
            <p className="small">Join our creative updates & design tips.</p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your email"
                className="form-control me-2"
              />
              <button className="btn-primary-custom">Go</button>
            </form>

            <div className="footer-social mt-3 d-flex gap-3">
              <a href="https://www.facebook.com/MEDIASTORE.AE">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/mediastore.ae">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@mediastore519?lang=en">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider my-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Media Store · Crafted with creativity in
          Abu Dhabi
        </p>
      </div>
    </footer>
  );
}
