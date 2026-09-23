function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "Building",
      title: "Project 01",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590725140246-2709c5331609?w=800&q=80",
      category: "Civil Works",
      title: "Project 02",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      category: "Renovation",
      title: "Project 03",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      category: "Building",
      title: "Project 04",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      category: "Civil Works",
      title: "Project 05",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&q=80",
      category: "Renovation",
      title: "Project 06",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Proyek Kami</h2>
          <p className="section-subtitle">
            Portfolio proyek konstruksi yang telah kami kerjakan
          </p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
