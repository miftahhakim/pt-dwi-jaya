import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nama || !formData.email || !formData.pesan) {
      alert("Mohon lengkapi semua field yang wajib diisi");
      return;
    }

    // Untuk saat ini hanya menampilkan alert
    // Nantinya bisa dihubungkan ke backend atau email service
    alert(
      "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.",
    );
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      pesan: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">
            Kami siap membantu kebutuhan konstruksi Anda
          </p>
        </div>

        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-building"></i>
              </div>
              <div className="contact-info-content">
                <h4>PT Dwi Jaya</h4>
                <p>Professional Construction Partner</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="contact-info-content">
                <h4>Alamat</h4>
                <p>
                  [Alamat Lengkap]
                  <br />
                  Tangerang, Banten
                  <br />
                  Indonesia
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="contact-info-content">
                <h4>Telepon</h4>
                <p>[Nomor Telepon]</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>[Email Perusahaan]</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nama" className="form-label">
                      Nama *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="telepon" className="form-label">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telepon"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pesan" className="form-label">
                    Pesan *
                  </label>
                  <textarea
                    className="form-control"
                    id="pesan"
                    name="pesan"
                    rows="5"
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary-custom w-100">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="map-placeholder">
          <p>
            <i className="bi bi-geo-alt me-2"></i>
            Google Maps Placeholder - Ganti dengan embed Google Maps asli
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
