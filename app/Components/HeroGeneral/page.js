import Link from 'next/link';

const HeroSection = ({ pageTitle, breadcrumbs }) => {
  return (
    <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('images/bg_3.jpg')" }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 pt-5 text-center">
            <p className="breadcrumbs">
              <span className="me-2">
                <Link href="/">
                  <span>Home <i className="fa fa-chevron-right"></i></span>
                </Link>
              </span>
              <span>{pageTitle} <i className="fa fa-chevron-right"></i></span>
            </p>
            <h1 className="mb-0 bread">{breadcrumbs}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
