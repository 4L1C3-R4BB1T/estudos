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

#### ❗️ Condicional ternário
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

### 🔗 Links
* [Entenda a diferença entre var, let e const no JavaScript](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript#var)  
* [Tipos de Dados Primitivos em Javascript](https://medium.com/@alves.guilherme1357/tipos-de-dados-primitivos-em-javascript-d7380564933c)
