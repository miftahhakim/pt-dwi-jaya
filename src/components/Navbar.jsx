import { useState, useEffect } from "react";
import logo from "../assets/logo pt dwi jaya.jpg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom fixed-top ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#home"
        >
          <img src={logo} alt="Logo PT Dwi Jaya" height="45" />
          PT DWI JAYA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Tentang Kami
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Layanan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Proyek
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-choose">
                Keunggulan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
