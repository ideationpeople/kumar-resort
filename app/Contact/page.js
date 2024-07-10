'use client';
import Link from "next/link";
import { useEffect } from "react";
import aos from "../../public/js/aos";
// import HeroSection from '../Components/HeroSection';
import HeroSectionGeneral from "../Components/HeroGeneral/page";
import ContactSection from "../Components/contact/page";
import Footer from "../Components/Footer/page";


const Navbar = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
    <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container-xl">
        <Link href="/">
          <span className="navbar-brand align-items-center">
            <span>Unwind <small>Hotel Booking</small></span>
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link ">About</Link>
            </li>
            <li className="nav-item ">
              <Link href="/Rooms" className="nav-link">Rooms</Link>
            </li>
            <li className="nav-item active">
              <Link href="/RestoBar" className="nav-link">Resto &amp; Bar</Link>
            </li>
            <li className="nav-item">
              <Link href="/Blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    {/* <Hero/> */}
    <HeroSectionGeneral pageTitle=" CONTACT" breadcrumbs="Contact Us" />
    <ContactSection/>

    <Footer/>
    </>
  );
};

export default Navbar;
