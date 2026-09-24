function FloatingWhatsApp() {
  // GANTI NOMOR INI dengan nomor WhatsApp asli perusahaan (format: 628xxx)
  const phoneNumber = "6281234567890";

  // Pesan otomatis yang akan muncul saat klien membuka WhatsApp
  const message =
    "Halo CV Dwi Jaya, saya ingin berkonsultasi mengenai kebutuhan konstruksi.";

  // Encode pesan agar aman untuk URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat WhatsApp dengan PT Dwi Jaya"
    >
      <i className="bi bi-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat dengan Kami</span>
    </a>
  );
}

export default FloatingWhatsApp;
