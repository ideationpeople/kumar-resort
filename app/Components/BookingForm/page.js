'use client';
export default function BookingForm() {
    return (
        <section className="ftco-section ftco-no-pb ftco-no-pt ftco-booking">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="#" className="booking-form">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                    <div className="form-group ps-4 border-0">
                                        <label>Check-In</label>
                                        <div className="form-field">
                                            <div className="icon"><span className="fa fa-calendar"></span></div>
                                            <input type="text" className="form-control arrival_date" placeholder="Check-In Date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                    <div className="form-group ps-4">
                                        <label>Check-Out</label>
                                        <div className="form-field">
                                            <div className="icon"><span className="fa fa-calendar"></span></div>
                                            <input type="text" className="form-control departure_date" placeholder="Check-Out Date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                    <div className="form-group ps-4">
                                        <label>Rooms</label>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">Suite</option>
                                                    <option value="">Family Room</option>
                                                    <option value="">Classic Room</option>
                                                    <option value="">Superior Room</option>
                                                    <option value="">Luxury Room</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg form-wrap d-flex py-3 py-lg-5 px-4">
                                    <div className="form-group ps-4">
                                        <label>Guests</label>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">1 Person</option>
                                                    <option value="">2 Person</option>
                                                    <option value="">3 Person</option>
                                                    <option value="">4 Person</option>
                                                    <option value="">5 Person</option>
                                                    <option value="">6-9 Person</option>
                                                    <option value="">10+ Person</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg d-flex">
                                    <div className="form-group d-flex border-0">
                                        <div className="form-field w-100 align-items-center d-flex">
                                            <a href="#" type="submit" className="d-flex justify-content-center align-items-center align-self-stretch form-control btn btn-primary py-lg-4 py-xl-0">
                                                <span>Check Availability</span>
                                            </a>
                                            {/* <input type="submit" value="Check Availability" className="align-self-stretch form-control btn btn-primary"> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
