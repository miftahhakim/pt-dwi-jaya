function Services() {
  const services = [
    {
      icon: "bi-building",
      title: "Pekerjaan Konstruksi",
      description:
        "Layanan konstruksi menyeluruh untuk berbagai jenis proyek bangunan dan infrastruktur.",
    },
    {
      icon: "bi-tools",
      title: "Renovasi & Rehabilitasi",
      description:
        "Jasa renovasi dan rehabilitasi bangunan untuk memperbarui dan meningkatkan kualitas struktur.",
    },
    {
      icon: "bi-buildings",
      title: "Pembangunan Gedung",
      description:
        "Pembangunan gedung komersial, perkantoran, dan fasilitas umum dengan standar tinggi.",
    },
    {
      icon: "bi-hammer",
      title: "Pekerjaan Sipil",
      description:
        "Pekerjaan sipil termasuk jalan, jembatan, dan infrastruktur lainnya.",
    },
    {
      icon: "bi-wrench",
      title: "Pemeliharaan Bangunan",
      description:
        "Layanan pemeliharaan dan perawatan bangunan untuk menjaga kondisi optimal.",
    },
    {
      icon: "bi-clipboard-check",
      title: "Manajemen Proyek",
      description:
        "Pengelolaan proyek konstruksi secara profesional dari perencanaan hingga penyelesaian.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Layanan Kami</h2>
          <p className="section-subtitle">
            Berbagai layanan konstruksi profesional untuk memenuhi kebutuhan
            proyek Anda
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
