export default function Hero() {
    return (
        <section className="hero-wrap" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-lg-10 text-center">
                        <span className="subheading">Enjoy Your Wonderful Holidays With A Great Luxury Experience!</span>
                        <h1 className="mb-4">Most Relaxing Place</h1>
                        <p>
                            <a href="#" className="btn btn-primary p-4 py-3">Take A Tour <span className="ion-ios-arrow-round-forward"></span></a> 
                            <a href="#" className="btn btn-white btn-outline-white p-4 py-3">Learn More <span className="ion-ios-arrow-round-forward"></span></a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
