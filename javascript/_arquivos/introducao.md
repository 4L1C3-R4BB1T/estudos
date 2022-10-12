🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos/tree/main/javascript "Voltar para o Início")

---

### 🔸 Variáveis
```js
var numero = 1;
let frase = "Bom dia";
const PI = 3.1415; 
```

---

#### ✔️ var
* declara variáveis em **escopo global**

---

#### ✔️ let
* let it change 
* declara variáveis em **escopo de bloco**
* a variável não pode ser redeclarada
* seu valor pode ser reatribuído
* seu valor não precisa necessariamente ser atribuído logo na declaração

---

#### ✔️ const 
* constante
* seu valor deve ser atribuído logo na declaração 
* seu valor **não pode ser alterado posteriormente**
* não é uma **constante** de valor e sim de **referência**
* se a referência não for alterada, seu conteúdo pode ser mudado

---

### 🔸 Tipos de Dados 
```js
let nome = 'Livia'; // String
let idade = 21; // Number
let possuiFaculdade = false; // Boolean
let time; // Undefined
let comida = null; // Null
let simbolo = Symbol(); // Symbol
let novoObjeto  = {}; // Object
```

---


```js
// template string
let cards = 10;
let frase = `Eu tenho ${cards} cards da Tsubaki`;

let exp = 2e2;
let pow = 2**2;

let soma = '100' + 50; // 10050 - concatenação
let subtracao = '100' - 50; // 50
let multiplicacao = '100' * '2'; // 200
let divisao = 'Comprei 10' / 2; // NaN - Not a Number
```

---

### 🔸 Conversão entre Tipos 
```js
let a = parseInt('43'); 
let b = parseFloat('2.34');
let c = Number('123');

let d = 10;
d = d.toString();
```

---

#### ❗️ Condicional Ternário
```js
(condicao) ? true : false;
```

---

### 🔸 Valores falsy e truthy
```js
// Falsy
if (false)
if (0) // ou -0
if (NaN)
if (null)
if (undefined)
if ('') // ou "" ou `` 

// Todo o resto é truthy
```

---

### 🔸 Funções
```js
// declaração de função
function soma(a = 0, b = 0) {
  return a + b;
}

// expressão de função
const ola = function() {
  console.log('ola mundo');
}

// arrow function
const obterDia = () => {
  return new Date().getDay();
}
```

---

### 🔸 Escopo de Variáveis
* **var** gera escopo de função
* **let** e **const** geram escopo de bloco

```js
let n = 'global';

function mostraN() {
  let n = 'local';
  console.log(`valor de n: ${n}`);
}

function fnExt() {
  let n = 'n local na função fnExt';
  
  function fnInt() {
    let n = 'n local na função fnInt';
    console.log(n);
  }
  fnInt();
  console.log(n);
}
```

---

### 🔸 Arrays
```js
const arr1 = new Array(1, 2, 3); // formal
const arr2 = [1, 2, 3]; // literal

arr2.push('a', 'b', 'c'); // adiciona itens no array

// iterar array
arr1.forEach((n) => {
  console.log(n);
});

// array de objetos
const girls = [
  { 
    nome: "Shiori", 
    idade: 14
  },
  { 
    nome: "Tsubaki", 
    idade: 19
  },
  { 
    nome: "Miyu", 
    idade: 15
  }
];

// iterar array de objetos
for (let i in girls) {
  console.log(girls[i]);
}
```

---

### 🔸 Objetos
```js
const obj1 = new Object(); // formal
const obj2 = {}; // literal

const obj3 = { nome: 'Shiori', idade: 14};

// iterar  objeto
for (let prop in obj3) {
  console.log(`${prop}: ${obj3[prop]}`);
}

// métodos de objetos
const produto = {
  nome: 'caneta',
  qtd: 10,
  comprar(n) {
    if (n > this.qtd) {
      return 'quantidade invalida';
    }
    this.qtd -= n;
  }
}
```

---

### 🔸 Tratamento de Erros
```js
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('sum aceita apenas numeros');
  }
  return a + b;
}

try {
  // código a ser executado
  let soma = sum(3, 'a');
} catch (e) {
  // o que será executado em caso de erro
  console.log('Erro:', e.message);
} finally {
  // o que será executado no final - sempre é executado
  console.log('finalizado');
}
```

---

### 🔗 Links
* [Entenda a diferença entre var, let e const no JavaScript](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript#var)  
* [Tipos de Dados Primitivos em Javascript](https://medium.com/@alves.guilherme1357/tipos-de-dados-primitivos-em-javascript-d7380564933c)  
* [Sintaxe e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
* [Atribuição por valor e referência](https://blog.azagatti.dev/assignment-value-and-reference/#:~:text=Os%20valores%20primitivos%20no%20JavaScript,atribu%C3%ADmos%20uma%20vari%C3%A1vel%20a%20outra.)
