import React from 'react';

const CounterSection = () => {
  return (
    <section className="ftco-section-counter">
      <div className="container">
        <div className="row section-counter">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="counter-wrap">
              <span className="number"><span className="countup">38900</span></span>
              <span className="caption"># of Happy Guests</span>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="counter-wrap">
              <span className="number"><span className="countup">70</span></span>
              <span className="caption"># of Rooms</span>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="counter-wrap">
              <span className="number"><span className="countup">130</span></span>
              <span className="caption"># of Staffs</span>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="counter-wrap">
              <span className="number"><span className="countup">31</span></span>
              <span className="caption"># of Years</span>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Additional content or rows can be added here if needed */}
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
