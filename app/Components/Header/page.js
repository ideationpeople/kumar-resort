import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg ftco-navbar-light">
            <div className="container-xl">
                <Link href="/">
                    <span className="navbar-brand align-items-center">
                        {/* <span>Unwind <small>Hotel Booking</small></span> */}
                        <img src="/images/logo1.png" alt="Kumar Resorts" style={{ width: "300px" }}/>
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Rooms" className="nav-link">
                                Rooms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/RestoBar" className="nav-link">
                                Resto &amp; Bar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Blog" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* <p className="mb-0"><a href="#" className="btn btn-primary rounded">Submit A Property</a></p> */}
                </div>
            </div>
        </nav>
    );
}
