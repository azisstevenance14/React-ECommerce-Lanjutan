function Footer() {
    return (
        <footer className="bg-dark text-white py-4 border-top border-secondary mt-auto">
            <div className="container text-center text-md-start">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h5 className="fw-bold text-warning mb-1">ASSA Digital Shop</h5>
                        <p className="small text-white mb-0 ">Platform E-Commerce Pembelajaran Software & Hardware IoT.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="small text-white mb-0 text-white">
                            &copy; {new Date().getFullYear()} ASSA Digital. Built with React & Bootstrap.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;