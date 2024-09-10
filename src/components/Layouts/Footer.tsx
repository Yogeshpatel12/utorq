"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactInfo from "../ContactUs/ContactInfo";


const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <ContactInfo />
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>REGISTERED & HEAD OFFICE</h3>

                <p className="location">
                  <i className="icofont-google-map"></i><strong>Unique Dc Motor Brakes, </strong>
                </p>

                <Link href="/contact-us" className="contact-authority">
                  <i className="icofont-phone"></i> +91-7976958311
                </Link>
                <div className="pb-4">
                  <Link href="/contact-us" className="contact-authority">
                    <i className="icofont-fax"></i>  +91-8233268311
                  </Link>
                </div>

                <h3>Group Companies</h3>
                <Link href="/contact-us" className="contact-authority">
                Unique DC Motor Brakes Pvt. Ltd.
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>REGIONAL OFFICES</h3>
                <p>
                Udaipur : Power House , Gudli (313024). <br></br> Mr. Durgesh
                Dangi +91- 8233268311, +91-7976958311
                </p>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/share/c6nzSj9v37N4vnya/?mibextid=qi2Omg/"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/unique-dc-motor-brake-236860229?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDq3oOrLvTEuHt6v3SxM6jA%3D%3D"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/uniquedcmotor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="instagram"
                      target="_blank"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo3.png"
                      alt="logo"
                      width={190}
                      height={60}
                    />
                  </Link>
                </div>

                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link href="">Home</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy"> Certifications</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Applications</Link>
                  </li>
                </ul>

                <div className="col">
                  <p className="copyright">
                    &copy; {new Date().getFullYear()} <strong>UNIQUE DC MOTOR BRAKES.</strong><br></br> {" "}
                    Made with Love by{" "}
                    <a href="#">
                      <strong>Yogesh Patel</strong>
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <p>All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
