import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RobotWithLogo from "../assets/images/view/robot-with-logo.png";
import TeamSlider from "./TeamSlider";

export default function AboutUs() {
  return (
    <section id="about" className="about-us-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left - About Text */}
          <Col md={9} className="px-5">
            <h1 className="mb-3 title">Meet Our Passionate Team</h1>
            <p className="about-text">
              Media Store is an Agency based in Abu Dhabi, United Arab Emirates.
              Our creative studio specializes in providing unique designs for
              your corporate identity, branding, and packaging activities. The
              designing and developing websites and mobile applications
              department assures audience traffic. Our signage department
              consists of a highly skilled team and advanced machinery for
              printing and installation.
            </p>
            <p className="about-text">
              Media Store showroom and online store is our philanthropic
              department that offers a range of corporate gifts to take your
              brand further, tailored based on your needs and budget. The
              campaigns & events management department not only organizes your
              special occasions but also guides you through fashioning inventive
              themes. Our professional photographers will capture your moments
              of glory.
            </p>
          </Col>

          {/* Right - CEO */}
          <Col md={3} className="text-center text-md-start">
            <img
              src={RobotWithLogo}
              alt="robot-with-logo"
              className="img-fluid"
            />
          </Col>
        </Row>

        <TeamSlider />
      </Container>
    </section>
  );
}
