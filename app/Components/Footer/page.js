// File: ./app/Components/Footer/page.js

import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="ftco-footer">
      <div className="container-xl">
        <div className="row mb-5 pb-5 justify-content-between">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo d-flex">
                <a
                  className="navbar-brand align-items-center"
                  href="index.html"
                >
                  <span className="">
                    {/* Unwind <small>Hotel Booking</small> */}
                    <img src="/images/logo1.png" alt="Kumar Resorts" style={{ width: "200px" }}/>
                  </span>
                </a>
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li>
                  <Link href="#">
                    <span
                      style={{
                        display: "inline-block",
                        paddingLeft: "4px",
                        paddingTop: "4px",
                        color: "#333",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <FaTwitter />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      style={{
                        display: "inline-block",
                        paddingLeft: "4px",
                        paddingTop: "4px",
                        color: "#333",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <FaFacebook />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      style={{
                        display: "inline-block",
                        paddingLeft: "4px",
                        paddingTop: "4px",
                        color: "#333",
                        transition: "color 0.3s ease",
                      }}
                    >
                      <FaInstagram />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ftco-footer-widget mb-4">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right me-2"></span>Free
                          Wifi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right me-2"></span>Easy
                          Booking
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right me-2"></span>
                          Restaurant
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right me-2"></span>
                          Swimming Pool
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ftco-footer-widget mb-4">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                        <span className="fa fa-chevron-right me-2"></span>Beauty
                        &amp; Health {/* Use &amp; for & */}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right me-2"></span>
                          Flatscreen TV
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-chevron-right me-2"></span>Cold
                          Aircondition
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <span className="fa fa-chevron-right me-2"></span>Help &amp;
                        Support {/* Use &amp; for & */}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right me-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right me-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right me-2"></span>Rooms
                  </a>
                </li>
                <li>
                  <a href="#">
                  <span className="fa fa-chevron-right me-2"></span>Resto &amp;
                  Bar {/* Use &amp; for & */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker"></span>
                    <span className="text">
                    202B, Old Mumbai - Pune Hwy, Gautam Park Society, Rao Colony, Lonavala, Maharashtra 410401
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+91 92200 00005</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text">info@kumarresorts.in</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-darken">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 text-center">
            <p
                className="mb-0"
                style={{ color: "rgba(255,255,255,.5)", fontSize: "13px" }}
              >
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                This template is made with{" "}
                <i className="fa fa-heart color-danger" aria-hidden="true"></i>{" "}
                by{" "}
                <Link href="/" target="_blank" rel="nofollow noopener">
                  Bimal
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
