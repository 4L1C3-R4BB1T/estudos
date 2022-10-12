🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos/tree/main/javascript "Voltar para o Início")

---

### 🔸 Introdução
**O que é:** é uma linguagem que adiciona tipagem estática no javascript. Adiciona novas features no javascript que nos permite definir tipos para: variáveis, parâmetros, retornos de funções, etc.
* adiciona tipagem estática no javascript, deixando o código muito mais seguro
* facilita o desenvolvimento nos dado feedback em tempo real

```js
const msg = 'string';
export default msg;
```

---

#### ❗️ Comandos no terminal
```bash
npm init -y
npm install typescript -D // instalar o typescript apenas no modo de desenvolvimento
npx tsc nome_arquivo // transpilar um arquivo ts para js
npx tsc --init
```

---

### 🔸 Tipos primitivos e array
```js
// primitivos
let msg: string = 'teste de string';
let num: number = 123;
let isValid: boolean = true;

// arrays
let arrayDeNumeros: number[];
let arrayDeStrings: string[];
let arrayDeStringsGeneric: Array<string>;
```

---

### 🔸 Objetos
```js
let aluno: {
    nome: string,
    aprovado: boolean,
    idade: number,
    notas: number[]
}

aluno = {
    nome: 'Livia', 
    aprovado: true, 
    idade: 21,
    notas: [1, 2, 3]
}
```

---

### 🔸 Tuplas
```js
let aluno: {
    nome: string,
    aprovado: boolean,
    idade: number,
    notas: [number, number, number, number]
} // garante que serão aceitas apenas 4 notas

aluno = {
    nome: 'Livia', 
    aprovado: true, 
    idade: 21,
    notas: [1, 2, 3, 4]
}
```

---

### 🔸 Enum
```js
// enum Sizes {
//     SMALL, 
//     NORMAL, 
//     LARGE
// }

enum Sizes {
    SMALL = '12px',
    NORMAL = '16px',
    LARGE = '24px'
}

console.log(Sizes.SMALL);
```

---

### 🔸 Any vs unknown
```js
function add(x: unknown, y: unknown) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return null;
} // return number | null

const teste = add(3, 5);
```

---

### 🔸 Void vs never
```js
function showFeedback(message: string, type: string): void {
    alert(type.toUpperCase() + ': ' + message);
} // retorna undefined

const feedback = showFeedback('ola', 'info');

function showError(message: string): never {
    throw new Error('função marcada com never nunca retorna nada');
} // nunca retorna nada

const error = showError('messagem de erro');
```

---

### 🔸 Null e undefined
```js
const inNull: null = null;
const isUndefined: undefined = undefined;
```

---

### 🔸 Union types
```js
function add(x: number, y?: number) {
    if (y === undefined) {
        return null;
    }
    return x + y;
} // y === null | undefined

const teste = add(10); // number | null

let teste2: number | string;
teste2 = 10;
teste2 = 'teste 2';

const User: {
    nome: string,
    idade?: number | null
} = {
    nome: 'Livia',
}
```

---

### 🔸 Alias
```js
type testeAlias =  number | string | boolean;

let teste: testeAlias;
teste = 10;

type User = {
    nome: string,
    idade?: number | null
}

const livia: User = {
    nome: 'Livia',
    idade: null
}

type Sizes = '12px' | '16px' | '24px';
const small: Sizes = '12px';
```

---

### 🔸 Interseção
```js
type User = {
    id: number,
    name: string
}

type LevelAdmin = 'teacher' | 'coordenator' | 'manager';

type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type UserAdmin = User & Admin; // junção de dois tipos

let usuario: UserAdmin = {
    id: 0,
    name: 'Livia',
    isAdmin: true,
    level: "manager"
}
```

---

### 🔸 Functions
```js
function add(x: number, y: number): number {
    return x + y;
} // return number

const multiply = (x: number, y: number) => x * y;

const subtract: (x: number, y: number) => number = (x, y) => x - y;
let teste = subtract(3, 1);

type User = {
    id: number,
    name: string
}

type LevelAdmin = 'teacher' | 'coordenator' | 'manager';

type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type UserAdmin = User & Admin;

type IsAdmin = (user: User) => boolean

let usuario: UserAdmin = {
    id: 0,
    name: 'Livia',
    isAdmin: true,
    level: "manager"
}

const isAdmin: IsAdmin = (user) => !!(user as UserAdmin).isAdmin; // assertion: conversão de tipos

console.log(isAdmin(usuario));
```

---

### 🔸 Assertion
```js
const teste = document.getElementById('teste') as HTMLButtonElement;
teste.addEventListener('click', e => console.log(e));
```
