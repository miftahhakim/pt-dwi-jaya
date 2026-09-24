function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-brand">CV DWI JAYA</div>
            <p className="footer-tagline">Professional Construction Partner</p>
            <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Mitra konstruksi terpercaya untuk berbagai kebutuhan proyek
              konstruksi Anda.
            </p>
          </div>

          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5>Navigasi</h5>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Tentang Kami</a>
              </li>
              <li>
                <a href="#services">Layanan</a>
              </li>
              <li>
                <a href="#projects">Proyek</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
            <h5>Layanan</h5>
            <ul className="footer-links">
              <li>
                <a href="#services">Pekerjaan Konstruksi</a>
              </li>
              <li>
                <a href="#services">Renovasi & Rehabilitasi</a>
              </li>
              <li>
                <a href="#services">Pembangunan Gedung</a>
              </li>
              <li>
                <a href="#services">Pekerjaan Sipil</a>
              </li>
              <li>
                <a href="#services">Manajemen Proyek</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h5>Kontak</h5>
            <div className="footer-contact-item">
              <i className="bi bi-geo-alt"></i>
              <p>
                [Alamat Lengkap]
                <br />
                Tangerang, Banten
              </p>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone"></i>
              <p>[Nomor Telepon]</p>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-envelope"></i>
              <p>[Email Perusahaan]</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mb-0">© 2026 CV Dwi Jaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
