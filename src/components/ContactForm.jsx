import React, { useState } from "react";
import robotWithBanner from "../assets/images/view/banner-with-robot.png";

import "../assets/css/contact-form.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <div className="row g-4 align-items-center">
        {/* LEFT COLUMN: Info */}
        <div className="col-lg-5">
          <img src={robotWithBanner} alt="banner-robot" className="img-fluid" />
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="col-lg-7 h-100">
          <form
            onSubmit={handleSubmit}
            className="contact-form p-4 border rounded shadow-sm h-100"
          >
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label visually-hidden">Service</label>
                <select
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service*</option>
                  <option value="Digital & Offset Printing">
                    Digital & Offset Printing
                  </option>
                  <option value="Promotional Gifts">Promotional Gifts</option>
                  <option value="Graphic Design & Production">
                    Graphic Design & Production
                  </option>
                  <option value="Billboard Manufacturing">
                    Billboard Manufacturing
                  </option>
                  <option value="Digital Solutions">Digital Solutions</option>
                  <option value="Organizing Events">Organizing Events</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Advertising & Marketing">
                    Advertising & Marketing
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-12">
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn-primary-custom w-100">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
