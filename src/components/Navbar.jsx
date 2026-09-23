import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Fungsi penutup menu mobile (aman kalau Bootstrap JS belum siap)
  const closeNavbarMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (!navbarCollapse) return;
    if (navbarCollapse.classList.contains("show")) {
      if (window.bootstrap && window.bootstrap.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      } else {
        navbarCollapse.classList.remove("show");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      closeNavbarMenu(); // menu ikut tertutup kalau halaman digeser/scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom fixed-top ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={closeNavbarMenu}>
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
              <a className="nav-link" href="#home" onClick={closeNavbarMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbarMenu}>
                Tentang Kami
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={closeNavbarMenu}
              >
                Layanan
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#why-choose"
                onClick={closeNavbarMenu}
              >
                Keunggulan
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={closeNavbarMenu}
              >
                Proyek
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbarMenu}>
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
