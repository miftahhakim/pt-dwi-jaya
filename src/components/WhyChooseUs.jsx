function WhyChooseUs() {
  const reasons = [
    {
      icon: "bi-award",
      title: "Kualitas Pekerjaan",
      description:
        "Kami mengutamakan kualitas material dan standar pekerjaan tinggi dalam setiap proyek.",
    },
    {
      icon: "bi-clock-history",
      title: "Ketepatan Waktu",
      description:
        "Komitmen kuat untuk menyelesaikan proyek sesuai dengan timeline yang telah disepakati.",
    },
    {
      icon: "bi-person-check",
      title: "Profesionalisme",
      description:
        "Tim yang profesional dan berpengalaman dalam menangani berbagai jenis proyek konstruksi.",
    },
    {
      icon: "bi-shield-check",
      title: "Keselamatan Kerja",
      description:
        "Mengutamakan keselamatan kerja dengan standar K3 yang ketat di setiap proyek.",
    },
    {
      icon: "bi-handshake",
      title: "Komitmen terhadap Klien",
      description:
        "Fokus pada kepuasan klien dengan komunikasi yang transparan dan solusi terbaik.",
    },
  ];

  return (
    <section id="why-choose" className="why-choose-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="section-title">Mengapa Memilih CV Dwi Jaya?</h2>
            <p className="section-subtitle">
              Kami berkomitmen untuk memberikan layanan terbaik dengan standar
              profesional tinggi
            </p>
            <p>
              Dengan pengalaman dan dedikasi dalam industri konstruksi, CV Dwi
              Jaya siap menjadi mitra terpercaya untuk proyek konstruksi Anda.
              Kami mengutamakan kualitas, ketepatan waktu, dan kepuasan klien
              dalam setiap pekerjaan.
            </p>
          </div>
          <div className="col-lg-7">
            {reasons.map((reason, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-icon">
                  <i className={`bi ${reason.icon}`}></i>
                </div>
                <div className="why-choose-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
