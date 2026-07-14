import { Monitor, Smartphone, PenTool, Layers } from "lucide-react";
import "./Skills.css";

const SKILLS = [
  { icon: Monitor, label: "Web Design" },
  { icon: Smartphone, label: "App Design" },
  { icon: PenTool, label: "Logo Design" },
  { icon: Layers, label: "Branding" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">O que eu faço</span>
          <h2>Habilidades</h2>
          <div className="divider" />
        </div>

        <div className="skills__grid">
          {SKILLS.map(({ icon: Icon, label }) => (
            <div key={label} className="skill-card">
              <div className="skill-card__icon">
                <Icon size={24} />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
