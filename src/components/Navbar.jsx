import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const LINKS = ["About", "Portfolio", "Skills", "Designs", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container">
        <div className="navbar__logo">FK</div>

        <ul className="navbar__links navbar__links--desktop">
          {LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
