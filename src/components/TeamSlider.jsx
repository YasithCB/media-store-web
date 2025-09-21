import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Member1 from "../assets/images/members/m1.jpg";
import Member2 from "../assets/images/members/m2.jpg";

const teamMembers = [
  {
    name: "HUSSAIN ALDOUH",
    role: "CEO & Founder",
    description:
      "Visionary leader driving growth, innovation, and teamwork, guiding the company toward success while fostering integrity and excellence.",
    image: Member1,
  },
  {
    name: "Bob Smith",
    role: "Graphic Designer",
    description:
      "Creative graphic designer crafting visually appealing designs, branding, and digital content that engage audiences and elevate brand identity.",
    image: Member2,
  },
];

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMember = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextMember = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const member = teamMembers[currentIndex];

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        {/* Image Column */}
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="card-img-top img-fluid"
              style={{
                height: "50vh",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </div>

        {/* Details Column */}
        <div className="col-md-6">
          <h3 className="card-title">{member.name}</h3>
          <h5 className="text-muted">{member.role}</h5>
          <p className="mt-3">{member.description}</p>

          {/* Navigation Buttons */}
          <div className="mt-4 d-flex gap-2 justify-content-center">
            <button
              onClick={prevMember}
              className="btn d-flex align-items-center"
              style={{ backgroundColor: "#FFD700", color: "#2e2e2e" }}
            >
              <FiArrowLeft className="me-1" size={20} />
            </button>
            <button
              onClick={nextMember}
              className="btn d-flex align-items-center"
              style={{ backgroundColor: "#FFD700", color: "#2e2e2e" }}
            >
              <FiArrowRight className="ms-1" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
