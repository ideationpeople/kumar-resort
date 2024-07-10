'use client';

export default function ServicesSection() {
//   useEffect(() => {
//     // Initialize AOS library
//     AOS.init();
//   }, []);

  return (
    <section className="ftco-section">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-md-8 heading-section text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Unwind Services</span>
            <h2 className="mb-4">Explore Our Hotel Services</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <a href="#" className="services">
              <div className="icon"><span className="flaticon-wifi-signal"></span></div>
              <div className="text">
                <h2>Free Wifi</h2>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <a href="#" className="services">
              <div className="icon"><span className="flaticon-online-booking"></span></div>
              <div className="text">
                <h2>Easy Booking</h2>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <a href="#" className="services">
              <div className="icon"><span className="flaticon-cooking"></span></div>
              <div className="text">
                <h2>Restaurant</h2>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <a href="#" className="services">
              <div className="icon"><span className="flaticon-swimming-pool"></span></div>
              <div className="text">
                <h2>Swimming Pool</h2>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <a href="#" className="services">
              <div className="icon"><span className="flaticon-cosmetics"></span></div>
              <div className="text">
                <h2>Beauty & Health</h2>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <a href="#" className="services">
              <div className="icon"><span className="flaticon-reception"></span></div>
              <div className="text">
                <h2>Help & Support</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
