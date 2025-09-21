import React from "react";

import icon1 from "../assets/images/printing-services-icons/1.svg";
import icon2 from "../assets/images/printing-services-icons/2.svg";
import icon3 from "../assets/images/printing-services-icons/3.svg";
import icon4 from "../assets/images/printing-services-icons/4.svg";
import icon5 from "../assets/images/printing-services-icons/5.svg";
import icon6 from "../assets/images/printing-services-icons/6.svg";
import icon7 from "../assets/images/printing-services-icons/7.svg";
import icon8 from "../assets/images/printing-services-icons/8.svg";
import PrintingServicesSvg from "./svg/printingServicesSvg";

// Array of service icons and names
const printingServices = [
  {
    src: icon1,
    name: "Business Cards",
  },
  {
    src: icon2,
    name: "Business Cards",
  },
  {
    src: icon3,
    name: "Business Cards",
  },
  {
    src: icon4,
    name: "Business Cards",
  },
  {
    src: icon5,
    name: "Business Cards",
  },
  {
    src: icon6,
    name: "Business Cards",
  },
  {
    src: icon7,
    name: "Business Cards",
  },
  {
    src: icon8,
    name: "Business Cards",
  },
];

export default function PrintingServices() {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="row align-items-center">
          {/* --- Left Side --- */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <p className="text-secondary fs-1 mb-0">All Kind of</p>
            <PrintingServicesSvg />
            <p className="fs-5 text-secondary mb-4">
              High-quality printing for business cards, flyers, banners,
              posters, and more. Fast turnaround and vibrant colors for every
              project.
            </p>
            <a href="#inquiry" className="btn-primary-custom px-4">
              INQUIRY NOW →
            </a>
          </div>

          {/* --- Right Side: Auto Carousel --- */}
          <div className="col-lg-7">
            <div
              id="serviceCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div className="carousel-inner text-center">
                {printingServices.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={item.src}
                      className="d-block mx-auto service-icon"
                      alt={item.name}
                    />
                    <h5 className="fw-bold mt-2">{item.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
