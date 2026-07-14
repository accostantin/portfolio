import { Mail, Instagram, Linkedin, Twitter, ChevronDown } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__shape hero__shape--blur" />
      <div className="hero__shape hero__shape--ring" />
      <div className="hero__shape hero__shape--ring-sm" />

      <p className="hero__eyebrow">Bem-vindo ao meu espaço criativo</p>
      <h1 className="hero__title">
        Olá! Eu sou <span>Fathi</span>
      </h1>
      <p className="hero__role">Designer UI/UX</p>
      <div className="hero__divider" />

      <a href="#contact" className="btn-gradient">
        Contrate-me
      </a>

      <div className="hero__socials">
        <a href="mailto:contato@fathi.design">
          <Mail size={18} />
        </a>
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

      <a href="#about" className="hero__scroll" aria-label="Rolar para baixo">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
