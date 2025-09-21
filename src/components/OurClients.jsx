// OurClients.jsx
import React from "react";
import clientsSvg from "../assets/images/view/our-clients.svg"; // Your big SVG with all logos

import "../assets/css/our-clients.css";

export default function OurClients() {
  return (
    <section className="our-clients py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 title">Our Valued Brand Partner</h2>
        <p className="mb-5 fs-5 text-secondary">
          We are proud to collaborate with a diverse range of brands across
          multiple industries, delivering creative solutions, innovative
          designs, and professional services that help them grow, engage
          audiences, and stand out.{" "}
        </p>
        <div className="clients-svg-wrapper">
          <img
            src={clientsSvg}
            alt="Our Clients"
            className="img-fluid clients-svg"
          />
        </div>
      </div>
    </section>
  );
}
