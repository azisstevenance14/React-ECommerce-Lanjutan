import { BsCartCheck, BsLightningChargeFill } from 'react-icons/bs';

function Navbar({ cartCount }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold text-warning d-flex align-items-center gap-2" href="#">
                    <BsLightningChargeFill /> ASSA Digital
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#katalog">Katalog Modul</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-warning position-relative d-flex align-items-center gap-2">
                        <BsCartCheck size={18} /> Keranjang
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartCount}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;