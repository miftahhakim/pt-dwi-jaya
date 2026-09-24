function Contact() {
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
          <div className="col-lg-6 mx-auto">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-building"></i>
              </div>
              <div className="contact-info-content">
                <h4>CV Dwi Jaya</h4>
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
        </div>

        {/* BLOK MAP PLACEHOLDER — hapus bagian ini juga kalau kotak map putus-putus mau dibuang */}
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
