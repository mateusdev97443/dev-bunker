# 🕸️ CSS GRID (Layout 2D)

## 🎯 Conceitos Fundamentais

| Conceito | Descrição |
|---|---|
| **Container** | Elemento com `display: grid` |
| **Item** | Filhos diretos do container |
| **Track** | Linha ou coluna (definida por `grid-template`) |
| **Cell** | Interseção de linha + coluna |
| **Area** | Conjunto de células nomeadas |

## 🔥 Trio Sagrado do Grid

```css
.container {
  display: grid;
  
  /* 1. fr = fração do espaço disponível */
  grid-template-columns: 1fr 2fr 1fr;
  
  /* 2. repeat() = evita repetição manual */
  grid-template-columns: repeat(3, 1fr);
  
  /* 3. minmax() = responsivo nativo! */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  gap: 20px; /* espaçamento entre células */
}
```

## 🗺️ Grid Areas (Layouts Complexos)

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main   aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }

/* Mobile First: tudo empilhado */
@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

## ⚡ Grid vs Flexbox - Quando usar qual?

| Situação | Use |
|---|---|
| Layout em 1 dimensão (linha OU coluna) | **Flexbox** |
| Layout em 2 dimensões (linhas E colunas) | **Grid** |
| Alinhar itens dentro de um container | **Flexbox** |
| Estrutura da página inteira | **Grid** |
| Componentes pequenos (navbar, cards) | **Flexbox** |
| Layouts complexos com áreas nomeadas | **Grid** |
