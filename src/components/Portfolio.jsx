import { useState } from "react";
import { ArrowUpRight, Layout, Globe, Camera } from "lucide-react";
import "./Portfolio.css";

const PROJECTS = [
  { title: "App de Moda Islâmica", tag: "UI Design", icon: Layout },
  { title: "Website Multimarca", tag: "Web Design", icon: Globe },
  { title: "Ensaio Fotográfico", tag: "Branding", icon: Camera },
];

function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);
  const Icon = project.icon;

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="project-card__thumb"
        style={{ transform: hover ? "scale(1.08)" : "scale(1)" }}
      >
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <div className="project-card__overlay" style={{ opacity: hover ? 1 : 0 }}>
        <span className="project-card__tag">{project.tag}</span>
        <h4>{project.title}</h4>
        <span className="project-card__link">
          Ver projeto <ArrowUpRight size={16} />
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Meu trabalho</span>
          <h2>Portfólio</h2>
          <div className="divider" />
        </div>

        <div className="portfolio__grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="portfolio__cta">
          <a href="#" className="btn-gradient">
            Ver tudo
          </a>
        </div>
      </div>
    </section>
  );
}
