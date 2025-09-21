import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/hero-section.css";
import RobotImage from "../assets/images/view/robot-1-transparent.png";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define header position and final scale
  const headerTop = 30; // px from top where header logo sits
  const headerScale = 0.1; // final scale to match header logo

  // Calculate progress from scroll
  const scrollProgress = Math.min(scrollY / 300, 1); // adjust 300px scroll distance

  // Interpolate position and scale
  const top = 200 - (200 - headerTop) * scrollProgress;
  const scale = 1 - (1 - headerScale) * scrollProgress;

  return (
    <section id="home" className="hero-section py-5 bg-secondary-custom">
      <Container>
        <Row className="align-items-center">
          {/* Left - Logo */}
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <img
              src="https://www.mediastore.ae/wp-content/uploads/2024/08/Asset-7.svg"
              alt="MediaStore Logo"
              className="img-fluid"
              style={{
                position: "relative",
                bottom: "22vh",
                transform: `translateY(${top}px) scale(${scale})`,
                transformOrigin: "top left",
              }}
            />
          </Col>

          {/* Middle - Title + Text */}
          <Col md={6} className="text-md-start">
            <h1 className="display-5 title text-center fw-bolder">
              Welcome to Media Store
            </h1>
            <p className="fs-4 text-secondary text-center">
              Elevating your brand with creative solutions, impactful marketing,
              and innovative designs.
            </p>
          </Col>

          {/* Right - Artwork */}
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <img
              src={RobotImage}
              alt="robot"
              className="img-fluid h-100"
              style={{ transform: "scaleX(-1)" }} // flips horizontally
            />{" "}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
