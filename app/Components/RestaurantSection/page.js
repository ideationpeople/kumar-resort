import React from 'react';

const RestaurantSection = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row justify-content-center pb-4">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Resto & Bar</span>
            <h2 className="mb-3">Restaurant & Bar</h2>
          </div>
        </div>
        <div className="row g-md-5">
          <div className="col-md-12 col-xl-5 d-flex align-items-stretch">
            <div className="img w-100 img-cuisine" style={{ backgroundImage: "url(images/resto-bar.jpg)" }} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-cooking"></span></div>
            </div>
          </div>
          <div className="col-md-12 col-xl-7 ps-xl-5">
            <div className="row g-md-2">
              <div className="col-md-6">
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-1.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">Rs.320</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-2.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">Rs.290</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-3.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">Rs.320</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-4.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">Rs.320</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-5.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">Rs.499</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-6.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Ultimate Overload</span></h3>
                      <span className="price">Rs.320</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-7.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Grilled Beef with potatoes</span></h3>
                      <span className="price">Rs.320</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-entry d-flex align-items-center" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <div className="img" style={{ backgroundImage: "url(images/menu-8.jpg)" }}></div>
                  <div className="desc ps-3">
                    <div className="d-flex text">
                      <h3><span>Ham & Pineapple</span></h3>
                      <span className="price">Rs.320</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantSection;
