import "./About.css";

const INFO = [
  { label: "Nome", value: "Fathi Kolawole" },
  { label: "Gênero", value: "Masculino" },
  { label: "Endereço", value: "Nigéria, Kwara State" },
  { label: "Telefone", value: "+234 905 929 0159" },
  { label: "Freelance", value: "Disponível", highlight: true },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Conheça-me</span>
          <h2>Sobre mim</h2>
          <div className="divider" />
        </div>

        <div className="about__grid">
          <div className="about__photo">
            <span className="about__initials">FK</span>
          </div>

          <div className="about__content">
            <p className="about__bio">
              Sou Fathi, designer UI/UX com mais de 2 anos de experiência
              criando interfaces centradas no usuário para aplicações web e
              mobile. Minha paixão é simplificar problemas complexos e criar
              experiências intuitivas que geram engajamento. Com uma base
              sólida em interação humano-computador e design visual, capricho
              em interfaces limpas e agradáveis. Tenho domínio de Figma e
              Adobe Photoshop, e busco sempre atualizar minhas habilidades com
              as tendências do setor.
            </p>

            <dl className="about__info">
              {INFO.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd className={item.highlight ? "highlight" : ""}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
