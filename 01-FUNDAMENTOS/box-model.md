# 📦 BOX MODEL - CALCULADORA MENTAL

## 🎯 A REGRA DE OURO
Todo elemento HTML é uma CAIXA com 4 camadas:

[ MARGIN (espaço externo - não conta no tamanho) ]
  [ BORDER (parede da caixa) ]
    [ PADDING (isopor interno) ]
      [ CONTENT (TV / texto / imagem) ]

      ## 🔢 FÓRMULA DE CÁLCULO (SEM border-box)

**LARGURA TOTAL** = 
  width 
  + padding-left + padding-right 
  + border-left + border-right

**ALTURA TOTAL** = 
  height 
  + padding-top + padding-bottom 
  + border-top + border-bottom

## 🎯 EXEMPLO PRÁTICO
```css
.caixa {
    width: 300px;
    height: 150px;
    padding: 20px;
    border: 10px solid red;
    margin: 50px;
}
```

**Cálculo:**
- Largura: 300 + 20 + 20 + 10 + 10 = **360px**
- Altura: 150 + 20 + 20 + 10 + 10 = **210px**
- Margin: **NÃO ENTRA** na conta (é espaço externo)

## ⚡ O CHEAT CODE (border-box)
```css
* {
    box-sizing: border-box;
}
```

**COM border-box:**
- Largura total = SEMPRE o valor de `width` (300px)
- Altura total = SEMPRE o valor de `height` (150px)
- O navegador "esmaga" o content para caber tudo dentro

## ✅ CHECKLIST RÁPIDO
- [ ] `margin` conta no tamanho? → **NÃO**
- [ ] `padding` soma dos dois lados? → **SIM** (esquerda+direita OU cima+baixo)
- [ ] `border` soma dos dois lados? → **SIM**
- [ ] Com `border-box`, a largura muda? → **NÃO** (fica fixa no `width`)

---

## 🧮 TESTE SEU CONHECIMENTO

**Desafio:** Calcule a largura e altura total desta caixa:
```css
.teste {
    width: 400px;
    height: 200px;
    padding: 15px;
    border: 5px solid blue;
}
```

**Resposta:**
- Largura: 400 + 15 + 15 + 5 + 5 = **440px**
- Altura: 200 + 15 + 15 + 5 + 5 = **240px**
