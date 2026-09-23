function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content fade-in">
          {/* <div className="hero-badge">
            <i className="bi bi-building me-2"></i>
            Kontraktor Profesional • Tangerang, Banten
          </div> */}
          <h1>Solusi Konstruksi Profesional Untuk Setiap Proyek</h1>
          <h2>
            PT Dwi Jaya hadir sebagai mitra konstruksi yang mengutamakan
            kualitas pekerjaan, ketepatan waktu, dan profesionalisme.
          </h2>
          <div className="d-flex flex-wrap gap-3">
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
