import { useState, useEffect } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Kunci scroll halaman saat galeri terbuka
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Taman Beverly Golf",
      category: "Pekerjaan Besi",
      description: "Pekerjaan Pintu Besi & Railing Tangga",
      cover: "/images/project-taman-beverly/img_5834.jpg",
      images: [
        "/images/project-taman-beverly/img_5835.jpg",
        "/images/project-taman-beverly/img_5836.jpg",
        "/images/project-taman-beverly/img_5837.jpg",
        "/images/project-taman-beverly/img_5838.jpg",
        "/images/project-taman-beverly/img_5839.jpg",
      ],
    },
    {
      title: "Proyek Palm Rivera Karawaci",
      category: "Pekerjaan Besi",
      description: "Konstruksi Baja, Railing Tangga, dan Balkon",
      cover: "/images/project-palm-rivera/img_5824.jpg",
      images: [
        "/images/project-palm-rivera/img_5825.jpg",
        "/images/project-palm-rivera/img_5826.jpg",
        "/images/project-palm-rivera/img_5827.jpg",
        "/images/project-palm-rivera/img_5828.jpg",
        "/images/project-palm-rivera/img_5829.jpg",
      ],
    },
    {
      title: "Proyek Padel Karawaci",
      category: "Development",
      description: "Pembangunan Konstruksi Baja Pada Lapangan Padel",
      cover: "/images/project-padel-karawaci/img_5809.jpg",
      images: [
        "/images/project-padel-karawaci/img_6608.jpg",
        "/images/project-padel-karawaci/img_6609.jpg",
        "/images/project-padel-karawaci/img_6612.jpg",
        "/images/project-padel-karawaci/img_5810.jpg",
        "/images/project-padel-karawaci/img_5811.jpg",
        "/images/project-padel-karawaci/img_5812.jpg",
        "/images/project-padel-karawaci/img_5813.jpg",
      ],
    },
    {
      title: "Proyek Kampus POLTEKIP dan POLTEKIM Tangerang",
      category: "Building",
      description: "Pembangunan Gedung Kampus POLTEKIP dan POLTEKIM Tangerang",
      cover:
        "/images/Proyek Kampus POLTEKIP dan POLTEKIM Tangerang/img_6622.jpg",
      images: [
        "/images/Proyek Kampus POLTEKIP dan POLTEKIM Tangerang/img_6623.jpg",
        "/images/Proyek Kampus POLTEKIP dan POLTEKIM Tangerang/img_6624.jpg",
        "/images/Proyek Kampus POLTEKIP dan POLTEKIM Tangerang/img_6625.jpg",
      ],
    },
    {
      title: "Proyek Northplay Padel Pusdik Lantas Polri Alam Sutra",
      category: "Civil Works",
      description:
        "Pembangunan Lapangan Padel Northplay Pusdik Lantas Polri Alam Sutra",
      cover: "/images/Proyek Northplay/img_5822.jpg",
      images: [
        "/images/Proyek Northplay/img_5814.jpg",
        "/images/Proyek Northplay/img_5815.jpg",
        "/images/Proyek Northplay/img_5816.jpg",
        "/images/Proyek Northplay/img_5817.jpg",
        "/images/Proyek Northplay/img_5818.jpg",
        "/images/Proyek Northplay/img_5819.jpg",
        "/images/Proyek Northplay/img_5820.jpg",
        "/images/Proyek Northplay/img_5821.jpg",
      ],
    },
    // {
    //   title: "Project 06",
    //   category: "Renovation",
    //   description: "[Deskripsi proyek dapat disesuaikan]",
    //   cover:
    //     "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&q=80",
    //   images: [],
    // },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Proyek Kami</h2>
          <p className="section-subtitle">
            Portfolio proyek konstruksi yang telah kami kerjakan. Klik proyek
            untuk melihat foto pekerjaan.
          </p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="project-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedProject(project);
                }}
              >
                <div className="project-image">
                  <img src={project.cover} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-hint">
                      <i className="bi bi-images me-1"></i> Lihat Foto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal galeri foto proyek */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-header">
              <div>
                <span className="project-category">
                  {selectedProject.category}
                </span>
                <h3 className="mt-2 mb-1">{selectedProject.title}</h3>
                <p className="text-muted mb-0">{selectedProject.description}</p>
              </div>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup galeri"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="project-modal-body">
              {selectedProject.images.length > 0 ? (
                <div className="row g-3">
                  {selectedProject.images.map((img, i) => (
                    <div className="col-md-6 col-12" key={i}>
                      <img
                        src={img}
                        alt={`${selectedProject.title} - foto ${i + 1}`}
                        className="project-modal-img"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted py-4 mb-0">
                  Foto proyek segera ditambahkan.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
