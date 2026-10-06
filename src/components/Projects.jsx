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
      cover: "/image/project-taman-beverly/IMG_5834.jpg",
      images: [
        "/image/project-taman-beverly/IMG_5835.jpg",
        "/image/project-taman-beverly/IMG_5836.jpg",
        "/image/project-taman-beverly/IMG_5837.jpg",
      ],
    },
    {
      title: "Proyek Palm Rivera Karawaci",
      category: "Pekerjaan Besi",
      description: "Konstruksi Baja, Railing Tangga, dan Balkon",
      cover: "/image/project-palm-rivera/IMG_5824.jpg",
      images: [
        "/image/project-palm-rivera/IMG_5825.jpg",
        "/image/project-palm-rivera/IMG_5826.jpg",
      ],
    },
    {
      title: "Proyek Padel Karawaci",
      category: "Development",
      description: "Pemnangunan Konstruksi Baja Pada Lapangan Padel",
      cover: "/image/project-padel-karawaci/IMG_5809.jpg",
      images: [
        "/image/project-padel-karawaci/IMG_5810.jpg",
        "/image/project-padel-karawaci/IMG_5811.jpg",
        "/image/project-padel-karawaci/IMG_5812.jpg",
        "/image/project-padel-karawaci/IMG_5813.jpg",
      ],
    },
    {
      title: "Project 04",
      category: "Building",
      description: "[Deskripsi proyek dapat disesuaikan]",
      cover:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      images: [],
    },
    {
      title: "Project 05",
      category: "Civil Works",
      description: "[Deskripsi proyek dapat disesuaikan]",
      cover:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      images: [],
    },
    {
      title: "Project 06",
      category: "Renovation",
      description: "[Deskripsi proyek dapat disesuaikan]",
      cover:
        "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&q=80",
      images: [],
    },
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
