/*
 são tipos de objetos com a incrível capacidade de serem invocados
 - podem ser literais 
 - em alguns casos, ocorre o hoisting
 - são objetos de primeira classe
 - no ES5 funções são a única maneira de gerar escopo
 - podem ser IIFE (Immediately Invoked Function Expression)
 - podem ter propriedades internas como arguments e name
*/

// podem ser literais
function myFunc() {
    // corpo da função
}

/*
 hoisting 
 capacidade do javascript de "içar" uma function declaration 
*/
teste();

function teste() {
    console.log('testando');
}

console.log(teste.name); 