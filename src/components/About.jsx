function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                alt="Proyek konstruksi PT Dwi Jaya"
              />
            </div>
          </div>

          <div className="col-12">
            <h2 className="section-title">Tentang PT Dwi Jaya</h2>
            <p className="mb-4">
              PT Dwi Jaya adalah perusahaan kontraktor yang berkomitmen untuk
              memberikan layanan konstruksi berkualitas tinggi. Kami fokus pada
              kepuasan klien melalui pekerjaan yang profesional, tepat waktu,
              dan sesuai dengan standar industri.
            </p>

            <div className="row g-3">
              <div className="col-md-4">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <i className="bi bi-check-circle"></i>
                  </div>
                  <div>
                    <h4>Kualitas Terjamin</h4>
                    <p className="text-muted mb-0">
                      Mengutamakan kualitas material dan pekerjaan
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div>
                    <h4>Tepat Waktu</h4>
                    <p className="text-muted mb-0">
                      Komitmen penyelesaian proyek sesuai jadwal
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div>
                    <h4>Tim Profesional</h4>
                    <p className="text-muted mb-0">
                      Didukung tenaga kerja yang berpengalaman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
