import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

import "../assets/css/header.css";

export default function Header() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* --- Top Contact Bar --- */}
      <div className="top-bar border-bottom">
        <div className="d-flex flex-wrap justify-content-between align-items-center h-100 px-5">
          {/* Left Contact Info */}
          <ul className="contact-list d-flex flex-wrap gap-3 mb-0">
            <li>
              <a href="tel:026350660">
                <FaPhoneAlt style={{ marginRight: 6 }} /> 050 230 31 30
              </a>
            </li>
            <li>
              <a href="mailto:email@mediastore.ae">
                <FaEnvelope style={{ marginRight: 6 }} /> email@mediastore.ae
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/WvyhQcrYbtCkKdDu8">
                <FaMapMarkerAlt style={{ marginRight: 6 }} /> Location
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="d-flex gap-3 mb-0 list-unstyled">
            <li>
              <a
                href="https://www.instagram.com/mediastore.ae"
                className="text-dark fs-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/mediastore.ae"
                className="text-dark fs-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@mediastore519?lang=en"
                className="text-dark fs-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </li>
            <li>
              <FaSnapchatGhost className="text-dark fs-5" />
            </li>
          </ul>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="navbar bottom-bar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <a
            className={`navbar-brand translate-middle-x transition-all ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
            href="https://www.mediastore.ae"
            style={{
              transition: "opacity 0.3s ease, transform 0.3s ease",
              transform: showLogo ? "translateY(0)" : "translateY(-20px)",
            }}
          >
            <img
              src="https://www.mediastore.ae/wp-content/uploads/2024/08/Asset-7.svg"
              alt="MediaStore Logo"
              height="100" // Adjust to desired header size
            />
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Links */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#values">
                  Values
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.mediastore.ae/careers">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://mediastore.services/">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://mediastore.agency/">
                  Agency
                </a>
              </li>
            </ul>

            {/* Inquiry Button */}
            <a
              href="#elementor-action:action=popup:open&settings=eyJpZCI6IjQwNTciLCJ0b2dnbGUiOmZhbHNlfQ=="
              className="btn-primary-custom ms-lg-3"
            >
              INQUIRY NOW →
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
