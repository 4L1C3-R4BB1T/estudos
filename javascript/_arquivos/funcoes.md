🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos/tree/main/javascript "Voltar para o Início")

---

### 🔸 Introdução
Funções são tipos de objetos com a incrível capacidade de serem invocados.
* podem ser literais 
* em alguns casos, ocorre o hoisting
* são objetos de primeira classe
* no ES5 funções são a única maneira de gerar escopo
* podem ser IIFE (Immediately Invoked Function Expression)
* podem ter propriedades internas como arguments e name

```js
// podem ser literais
function myFunc() {
    // corpo da função
}
```
---

#### ❗️ Hoisting
Capacidade do javascript de "içar" uma function declaration.

```js
teste();

function teste() {
    console.log('testando');
}

console.log(teste.name); 
```

---

### 🔸 Funções auto-invocáveis
Funções em javascript são tratadas como qualquer outro objeto.
* passadas como parâmetros para outras funções (callback)
* atribuídas em propriedades de objetos (métodos)
* retornadas como resultado de outra função
* podem ter suas próprias propriedades

**ES5:** única forma de definir escopo de variávies.

```js
// var
function minhaFunc() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10
}
console.log(x) // erro

// let
function minhaFunc() {
    if (true) {
        let y = 10;
    }
    console.log(y); // erro
}
console.log(y) // erro
```

**IIFE:** funções auto-invocáveis evitar poluir o escopo global. 

**Não** vai precisar de **IIFE** se:
* usar um bundle (webpack, parcel, outros)
* usar ESModules (browsers modernos)
* programar em Node

```js
(function (n1, n2, n3) {
    let isValid = false;
    console.log(isValid, n1, n2, n3);

    function init() {
        console.log('init');
    }

    init();
})(1, 2, 3);
```

---

### 🔸 Arguments
```js 
function somar1() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar1(1, 2, 3, 4));
```

```js 
const somar2 = function () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar2(1, 2, 3, 4));
```

--- 

### 🔸 Objetos de primeira classe
* passadas como parâmentros para outras funções (callback)
* atribuídas em propriedades de objetos (métodos)
* retornadas como resultado de outra função
* podem ter suas próprias propriedades 

```js
// callback
function fn(cb) {
    console.log('executar ação de callback')
    cb();
}

function callback() {
    console.log('função passada por parâmetro');
}

fn(callback);
```

```js
const obj = {
    callback: callback
}

obj.callback();
```

```js
function fn2(n1) {
    return function (n2) {
        return n1 * n2;
    }
}

const funcao2 = fn2(10); // return function (n2)
const mult = funcao2(2); // return n1 * n2

console.log(mult);
```

```js
function fn3() {
    fn3.count++;
    return function _fn3 () {
        console.log('funcao retornada por parametro');
    }
}

fn3.count = 0;

const funcao3 = fn3(); // _fn3
console.log(funcao3);
funcao3();

console.log(fn3.count);
```
