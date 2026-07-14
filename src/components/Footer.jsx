import { Instagram, Linkedin, Twitter } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h3>Vamos trabalhar juntos</h3>
        <p>contato@fathi.design</p>

        <div className="footer__socials">
          <a href="#">
            <Instagram size={18} />
          </a>
          <a href="#">
            <Linkedin size={18} />
          </a>
          <a href="#">
            <Twitter size={18} />
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Fathi Kolawole. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
