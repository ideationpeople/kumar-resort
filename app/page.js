// "use client";

// import { useEffect } from "react";
// import aos from "../public/js/aos";
// import Header from "./Components/Header/page";
// // import HeroSection from "./Components/HeroSection/page";
// // import BookingForm from "./Components/BookingForm/page";
// // import AboutSection from "./Components/About/page";
// // import ServicesSection from "./Components/ServicesSection/page";
// // import Book from "./Components/Book/page";
// // import FeaturedRoomsSection from "./Components/FeatureSection/page";
// // import VideoSection from "./Components/VideoSection/page";
// // import RestaurantSection from "./Components/RestaurantSection/page";
// // import TestimonialSection from "./Components/TestimonialSection/page";
// // import CounterSection from "./Components/CounterSection/page";
// // import BlogSection from "./Components/Book/BlogSection/page";
// // import GallerySection from "./Components/GallerySection/page";
// import Footer from "./Components/Footer/page";
// const AppLayout = ({ children }) => {
//   useEffect(() => {
//     aos.init(); // Initialize any global effects
//   }, []);

//   return (
//     <>
//       <Header />
//       <main id="main">
//         {children}
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default AppLayout;



"use client";

import { useEffect } from "react";
import RootLayout from "./layout";
import aos from "../public/js/aos";
import Header from "./Components/Header/page";
import HeroSection from "./Components/HeroSection/page";
import BookingForm from "./Components/BookingForm/page";
import AboutSection from "./Components/About/page";
import ServicesSection from "./Components/ServicesSection/page";
import Book from "./Components/Book/page";
import FeaturedRoomsSection from "./Components/FeatureSection/page";
import VideoSection from "./Components/VideoSection/page";
import RestaurantSection from "./Components/RestaurantSection/page";
import TestimonialSection from "./Components/TestimonialSection/page";
import CounterSection from "./Components/CounterSection/page";
import BlogSection from "./Components/BlogSection/page";
import GallerySection from "./Components/GallerySection/page";
import Footer from "./Components/Footer/page";

export default function Home() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <RootLayout>
      <Header />
      <HeroSection />
      <main id="main">
        <BookingForm />
        <AboutSection />
        <ServicesSection />
        <Book />
        <FeaturedRoomsSection />
        <VideoSection />
        <RestaurantSection />
        <TestimonialSection />
        <CounterSection />
        <BlogSection />
        <GallerySection />
      </main>
      <Footer />
    </RootLayout>
  );
}
