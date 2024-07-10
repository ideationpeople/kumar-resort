import React from 'react';

const GallerySection = () => {
  return (
    <section className="ftco-gallery">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <a href="images/gallery-1.jpg" className="gallery-wrap img d-flex align-items-center justify-content-center glightbox" style={{ backgroundImage: "url('images/gallery-1.jpg')" }}>
              <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search"></span></div>
            </a>
          </div>
          <div className="col-md" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <a href="images/gallery-2.jpg" className="gallery-wrap img d-flex align-items-center justify-content-center glightbox" style={{ backgroundImage: "url('images/gallery-2.jpg')" }}>
              <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search"></span></div>
            </a>
          </div>
          <div className="col-md" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <a href="images/gallery-3.jpg" className="gallery-wrap img d-flex align-items-center justify-content-center glightbox" style={{ backgroundImage: "url('images/gallery-3.jpg')" }}>
              <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search"></span></div>
            </a>
          </div>
          <div className="col-md" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <a href="images/gallery-4.jpg" className="gallery-wrap img d-flex align-items-center justify-content-center glightbox" style={{ backgroundImage: "url('images/gallery-4.jpg')" }}>
              <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search"></span></div>
            </a>
          </div>
          <div className="col-md" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <a href="images/gallery-5.jpg" className="gallery-wrap img d-flex align-items-center justify-content-center glightbox" style={{ backgroundImage: "url('images/gallery-5.jpg')" }}>
              <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search"></span></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
