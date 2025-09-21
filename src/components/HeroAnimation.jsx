import React from "react";
import { Col } from "react-bootstrap";
import Lottie from "lottie-react";
import artworkAnimation from "../assets/animations/hero-animation.json";

export default function HeroArtwork() {
  return (
    <Col md={3} className="text-center text-md-end">
      <Lottie
        animationData={artworkAnimation}
        loop={true}
        style={{ height: "300px", width: "300px" }}
      />
    </Col>
  );
}
