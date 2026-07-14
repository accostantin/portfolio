# Portfólio – Fathi (React + Vite)

Projeto React puro (sem Tailwind), criado com Vite e CSS simples usando
variáveis de design (tokens) em `src/index.css`.

## Estrutura

```
src/
  main.jsx
  App.jsx
  index.css              # tokens de cor/tipografia + reset global
  components/
    Navbar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    Portfolio.jsx / .css
    Skills.jsx / .css
    Designs.jsx / .css
    Footer.jsx / .css
```

Cada seção da página é um componente isolado, com seu próprio arquivo CSS.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

## Build de produção

```bash
npm run build
npm run preview
```

## Personalizando

- Cores e fontes: edite as variáveis em `src/index.css` (`:root`).
- Textos e dados: edite diretamente cada componente em `src/components/`.
- Imagens: atualmente usa imagens de placeholder do Unsplash — troque pelas
  suas próprias em `public/` ou por outra URL.
