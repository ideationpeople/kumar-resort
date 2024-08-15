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
                <p className="meta"><span>Admin</span> <span>Jul. 23, 2024</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">10 Hidden Gems in Lonavala: Off-the-Beaten-Path Adventures</a></h3>
                <p>Discover the lesser-known wonders of Lonavala beyond the typical tourist spots. From secluded waterfalls to quiet hiking trails, we'll guide you through experiences that showcase the area's natural beauty and charm.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_2.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Jul. 23, 2024</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">A Foodie's Guide to Lonavala: From Street Eats to Gourmet Treats</a></h3>
                <p>Embark on a culinary journey through Lonavala's diverse food scene. We'll explore everything from famous chikki shops to upscale restaurants, helping you savor the best flavors this hill station has to offer.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">Monsoon Magic: Why Lonavala is the Perfect Rainy Season Getaway</a></h3>
                <p>Experience the enchanting transformation of Lonavala during the monsoon season. Learn why the lush greenery, misty mountains, and cascading waterfalls make this the ideal time to visit for nature lovers and photographers alike.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20 img d-flex align-items-end" style={{ backgroundImage: "url('images/image_4.jpg')" }}>
              </a>
              <div className="text">
                <p className="meta"><span>Admin</span> <span>Dec. 23, 2020</span><a href="#">3 Comments</a></p>
                <h3 className="heading mb-3"><a href="#">A Weekend Guide to Lonavala: 48 Hours of Relaxation</a></h3>
                <p>Make the most of your short stay in Lonavala with our carefully curated itinerary. From early morning treks and afternoon sightseeing to evening relaxation at Kumar Resorts, we'll help you pack in the perfect blend of excitement and leisure.
Copy
Retry</p>
              </div>
            </div>
          </div>       </div>
      </div>
    </section>
  );
}

export default BlogSection;
