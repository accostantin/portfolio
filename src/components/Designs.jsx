import "./Designs.css";

const SET_A = ["Identidade Visual", "Paleta de Marca", "Papelaria"];
const SET_B = ["Logotipo", "Cartão de Visita", "Aplicações"];

function Column({ items }) {
  return (
    <div className="designs__column">
      {items.map((label, i) => (
        <div key={i} className="designs__block">
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Designs() {
  return (
    <section id="designs" className="designs">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Vitrine</span>
          <h2>Meus designs</h2>
          <div className="divider" />
        </div>

        <div className="designs__grid">
          <Column items={SET_A} />
          <Column items={SET_B} />
        </div>

        <div className="designs__cta">
          <a href="#" className="btn-gradient">
            Ver tudo
          </a>
        </div>
      </div>
    </section>
  );
}
