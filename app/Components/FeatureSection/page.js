import React from 'react';

const FeaturedRoomsSection = () => {
  return (
    <section className="ftco-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-md-8 heading-section text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Our Rooms</span>
            <h2 className="mb-4">Featured Rooms</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000">
            <div className="room-wrap d-md-flex flex-md-column-reverse">
              <a href="room-single.html" className="img img-room" style={{ backgroundImage: "url(images/room-1.jpg)" }}>
              </a>
              <div className="text p-5 text-center">
                <h3><a href="room-single.html">Suite Room</a></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mb-0 mt-2"><span className="me-3 price">$450 <small>/ night</small></span><a href="#" className="btn-custom">Book Now</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="flip-left" data-aos-delay="200" data-aos-duration="1000">
            <div className="room-wrap">
              <a href="room-single.html" className="img img-room" style={{ backgroundImage: "url(images/room-2.jpg)" }}>
              </a>
              <div className="text p-5 text-center">
                <h3><a href="room-single.html">Family Room</a></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mb-0 mt-2"><span className="me-3 price">$450 <small>/ night</small></span><a href="#" className="btn-custom">Book Now</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
            <div className="room-wrap d-md-flex flex-md-column-reverse">
              <a href="room-single.html" className="img img-room" style={{ backgroundImage: "url(images/room-3.jpg)" }}>
              </a>
              <div className="text p-5 text-center">
                <h3><a href="room-single.html">Deluxe Room</a></h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="mb-0 mt-2"><span className="me-3 price">$450 <small>/ night</small></span><a href="#" className="btn-custom">Book Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedRoomsSection;
