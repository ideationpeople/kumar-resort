import React from 'react';

const IntroSection = () => {
  return (
    <section className="ftco-intro ftco-no-pt ftco-no-pb img" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
      <div className="overlay"></div>
      <div className="container-xl py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div className="col-md-8 d-flex align-items-center">
                <div>
                  <span className="subheading">Find Best Hotel For Leaving</span>
                  <h1 className="mb-md-0 mb-4">Find the Best Hotel in Your Next Vacation</h1>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <p className="mb-0"><a href="#" className="btn btn-primary py-md-4 py-3 px-md-5 px-4">Book Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
