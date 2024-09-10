"use client";

import React from "react";
import ContactInfo from "./ContactInfo";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="contact-area ptb-120">
        <div className="container">
          {/* ContactInfo */}
         

          <div className="row h-100 align-items-center contact-form">
            <div className="col-lg-4 col-md-12">
              <div className="leave-your-message">
                <h3>Leave Your Message</h3>
                <p>
                  If you have any questions about the services we provide simply
                  use the form below. We try and respond to all queries and
                  comments within 24 hours.
                </p>

                <div className="stay-connected">
                  <h3>Stay Connected</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/share/c6nzSj9v37N4vnya/?mibextid=qi2Omg/" target="_blank">
                        <i className="icofont-facebook"></i>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/unique-dc-motor-brake-236860229?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDq3oOrLvTEuHt6v3SxM6jA%3D%3D" target="_blank">
                        <i className="icofont-instagram"></i>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/uniquedcmotor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                        <i className="icofont-linkedin"></i>
                        <span>Linkedin</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="number">Phone Number*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="number"
                        id="number"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
