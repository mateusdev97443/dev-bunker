# 📦 FLEXBOX (Layout 1D)

## 🎯 Tabela de Sobrevivência

| Propriedade | Onde usar | Valores comuns |
|---|---|---|
| `display: flex` | Container | Habilita o Flexbox |
| `flex-direction` | Container | `row` / `column` / `row-reverse` / `column-reverse` |
| `justify-content` | Container | `flex-start` / `center` / `space-between` / `space-around` |
| `align-items` | Container | `stretch` / `center` / `flex-start` / `flex-end` |
| `flex-wrap` | Container | `nowrap` / `wrap` |
| `gap` | Container | Espaçamento entre itens |
| `flex-grow` | Item | Quanto o item cresce (0 = não cresce) |
| `flex-shrink` | Item | Quanto o item encolhe |

## 🔥 Cheat Code: Centralização Perfeita

```css
.container {
  display: flex;
  justify-content: center; /* Centraliza no eixo principal */
  align-items: center;     /* Centraliza no eixo cruzado */
  min-height: 100vh;
}
```

## 📱 Exemplo Prático: Layout Mobile/Sidebar

```css
/* Mobile (padrão): coluna */
.app { display: flex; flex-direction: column; }

/* Desktop: linha */
@media (min-width: 768px) {
  .app { flex-direction: row; }
  .sidebar { flex: 0 0 250px; } /* não cresce, não encolhe, 250px fixo */
  .main { flex: 1; }            /* ocupa todo o espaço restante */
}
```

## ⚠️ Pegadinhas
- `justify-content` funciona no **eixo principal** (definido por `flex-direction`)
- `align-items` funciona no **eixo cruzado** (perpendicular)
- Se `flex-direction: column`, os eixos se invertem!
