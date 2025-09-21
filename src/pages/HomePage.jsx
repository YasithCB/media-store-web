import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutUs from "../components/AboutSection";
import ImageContainer from "../components/ImageContainer";

import Img1 from "../assets/images/view/1.png";
import WhatsAppButton from "../components/WhatsappButton";
import Footer from "../components/Footer";
import OurClients from "../components/OurClients";
import DepartmentList from "../components/DepartmentsEmails";
import ContactForm from "../components/ContactForm"; // import the image

const HomePage = () => {
  return (
    <div className="light-container">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ImageContainer imageUrl={Img1} />
      <AboutUs />
      <OurClients />
      <ContactForm />

      <DepartmentList />
      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
