function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content fade-in">
          {/* <div className="hero-badge">
            <i className="bi bi-building me-2"></i>
            Kontraktor Profesional • Tangerang, Banten
          </div> */}
          <h2>Solusi Konstruksi Profesional Untuk Setiap Proyek</h2>
          <p>
            CV Dwi Jaya hadir sebagai mitra konstruksi yang mengutamakan
            kualitas pekerjaan, ketepatan waktu, dan profesionalisme.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a href="#services" className="btn btn-primary-custom">
              Lihat Layanan
            </a>
            <a href="#contact" className="btn btn-outline-custom">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
