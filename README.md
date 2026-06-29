# 🏗️ Dev Bunker: Second Brain Mobile Terminal

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

> 🔗 **Acesse o Live Demo:** [mateusdev97443.github.io/dev-bunker](https://mateusdev97443.github.io/dev-bunker/)

---

## 📱 Sobre o Projeto

O **Dev Bunker** é uma ferramenta de produtividade e "Second Brain" desenvolvida especificamente para **consulta técnica em ambiente mobile**. Projetado para ser acessado rapidamente durante plantões de trabalho e sessões de estudo, o painel opera com uma interface *Mobile-First* e *Dark Mode* nativo, garantindo conforto visual para leitura noturna e foco absoluto no conteúdo.

## 🏗️ Arquitetura e Stack

Uma SPA (Single Page Application) estática, leve e sem dependências de frameworks pesados. O motor do Bunker baseia-se em três pilares:

| Componente | Tecnologia | Função no Bunker |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 Semântico | Base sólida e acessível do terminal. |
| **Estilização** | CSS3 (Mobile-First) | Tema escuro, botões de toque generoso e tipografia mono. |
| **Engine** | Vanilla JS + Fetch API | Leitura assíncrona de arquivos locais e injeção dinâmica no DOM. |
| **Parser** | Marked.js (CDN) | Conversão instantânea de `.md` para HTML renderizado. |

## 🚀 Deploy

O projeto utiliza **GitHub Pages** com CI/CD nativo. Cada *Save Point* (commit) na branch `main` atualiza automaticamente o ambiente de produção, garantindo que o Second Brain esteja sempre sincronizado e acessível de qualquer dispositivo.

## 🛣️ Roadmap Futuro

- [ ] **PWA (Progressive Web App):** Implementação de Service Workers para acesso 100% offline durante plantões sem conexão.
- [ ] **Busca Global (Ctrl+K):** Motor de busca em tempo real para indexar títulos e conteúdos de todos os cheatsheets.
- [ ] **Sincronização Local:** Export/Import de anotações pessoais via `localStorage`.

---
<p align="center">
  <i>🔒 Bunker Architect // Mantido por Mateus Ernandes</i>
</p>
