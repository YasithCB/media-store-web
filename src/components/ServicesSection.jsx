import React from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Layout,
  Brain,
  Building,
  ArrowRight,
} from "lucide-react";
import { services } from "../MockData";
import "../assets/css/services-section.css";
import PrintingServices from "./PrintingServices";

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Brain: Brain,
  Building: Building,
  Palette: Palette,
  Layout: Layout,
};

const ServicesSection = () => {
  return (
    <section id="services" className="container py-5 ">
      <PrintingServices />

      <div className="light-full-container">
        <div className="light-content-container">
          {/* Header */}
          <div className="text-center mb-5 pt-5">
            <h1 className="title">Our Services, Your Success</h1>
            <p
              className="fs-5 text-secondary mx-auto"
              style={{ maxWidth: "768px" }}
            >
              We deliver comprehensive digital solutions tailored for startups
              and small businesses, combining cutting-edge technology with
              creative innovation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4 services-grid">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="col-md-6">
                  <div className="service-card">
                    <div className="service-card-inner">
                      <div className="icon-box">
                        <IconComponent size={32} />
                      </div>

                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>

                        <div className="service-features">
                          {service.features.map((feature, i) => (
                            <div key={i} className="feature-item">
                              <span className="dot"></span>
                              <span className="feature-text">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button className="learn-more">
                          <span>Learn More</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
