import React from 'react';

const BlogSection = () => {
  return (
    <section className="ftco-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Our Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_1.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_2.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_4.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Best Hotel Near Beach in Hawaii</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
