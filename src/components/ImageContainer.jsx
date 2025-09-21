import React from "react";
import "../assets/css/image-container.css";

export default function ImageContainer({ imageUrl, children }) {
  return (
    <section
      className="image-container d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {children && <div className="overlay-text text-center">{children}</div>}
    </section>
  );
}
