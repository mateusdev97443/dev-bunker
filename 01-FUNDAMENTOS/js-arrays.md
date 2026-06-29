# 📊 JAVASCRIPT ARRAYS

## 🎯 Tabela de Sobrevivência

| Método | O que faz | Retorna | Modifica original? |
|---|---|---|---|
| `.map()` | Transforma cada item | Novo array | ❌ Não |
| `.filter()` | Filtra itens | Novo array | ❌ Não |
| `.reduce()` | Acumula valores | Valor único | ❌ Não |
| `.find()` | Busca 1º item que bate | Item ou `undefined` | ❌ Não |
| `.forEach()` | Executa função em cada | `undefined` | ❌ Não |
| `.some()` | Algum item bate? | Boolean | ❌ Não |
| `.every()` | Todos itens batem? | Boolean | ❌ Não |
| `.push()` | Adiciona no final | Novo length | ✅ Sim |
| `.pop()` | Remove do final | Item removido | ✅ Sim |
| `.splice()` | Remove/substitui | Itens removidos | ✅ Sim |

## 🔥 One-Liners Essenciais

### `.map()` - Transformar dados
```javascript
const precos = [10, 20, 30];
const comDesconto = precos.map(p => p * 0.9);
// [9, 18, 27]

const nomes = usuarios.map(u => u.nome);
// ['Ana', 'João', ...]
```

### `.filter()` - Filtrar dados
```javascript
const idades = [12, 22, 30, 15];
const maiores = idades.filter(idade => idade >= 18);
// [22, 30]

const ativos = usuarios.filter(u => u.ativo);
```

### `.reduce()` - Acumular valores
```javascript
const nums = [1, 2, 3, 4];
const soma = nums.reduce((acc, n) => acc + n, 0);
// 10

const carrinho = [{p: 10}, {p: 20}];
const total = carrinho.reduce((acc, item) => acc + item.p, 0);
// 30
```

### `.find()` - Buscar item específico
```javascript
const users = [{id: 1, n: 'Ana'}, {id: 2, n: 'João'}];
const joao = users.find(u => u.id === 2);
// {id: 2, n: 'João'}
```

## 💪 Combo Poderoso (Encadeamento)

```javascript
// Problema: Pegar nomes de usuários ativos com mais de 18 anos
const resultado = usuarios
  .filter(u => u.ativo)
  .filter(u => u.idade > 18)
  .map(u => u.nome);

// Ou em uma linha:
const nomes = usuarios
  .filter(u => u.ativo && u.idade > 18)
  .map(u => u.nome);
```

## ⚠️ Pegadinhas de Entrevista

```javascript
// CUIDADO: filter + map não é o mesmo que map + filter!
const nums = [1, 2, 3, 4, 5];

// Filtra primeiro (só pares), depois duplica
nums.filter(n => n % 2 === 0).map(n => n * 2);
// [4, 8]

// Duplica primeiro, depois filtra (só pares - todos são!)
nums.map(n => n * 2).filter(n => n % 2 === 0);
// [2, 4, 6, 8, 10]

// reduce para contar ocorrências
const frutas = ['🍎', '🍌', '🍎', '🍊', '🍎'];
const contagem = frutas.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
// {'🍎': 3, '🍌': 1, '🍊': 1}
```
