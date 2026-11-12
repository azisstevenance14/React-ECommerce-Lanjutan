import { BsRocketTakeoff } from 'react-icons/bs';

function Hero() {
    return (
        <div className="bg-light py-5 border-bottom">
            <div className="container my-4">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h1 className="display-4 fw-bold text-dark mb-3">
                            Tingkatkan Skill Coding & IoT Bersama <span className="text-warning">ASSA Digital</span>
                        </h1>
                        <p className="lead text-muted mb-4">
                            Platform penyedia modul pembelajaran pemrograman web modern, ekosistem JavaScript, hingga sistem monitoring hardware terintegrasi.
                        </p>
                        <a href="#katalog" className="btn btn-warning btn-lg fw-bold d-inline-flex align-items-center gap-2 shadow-sm">
                            <BsRocketTakeoff /> Jelajahi Katalog
                        </a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block text-center">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60"
                            alt="Developer Workspace"
                            className="img-fluid rounded-3 shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;