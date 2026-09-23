import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk menutup menu mobile otomatis saat link diklik
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    // Tutup hanya kalau menu sedang terbuka (kondisi mobile)
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse =
        window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom fixed-top ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={closeNavbar}>
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
              <a className="nav-link" href="#home" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                Tentang Kami
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={closeNavbar}>
                Layanan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNavbar}>
                Proyek
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-choose" onClick={closeNavbar}>
                Keunggulan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>
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
