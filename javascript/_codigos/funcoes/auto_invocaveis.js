/*
 funções em javascript são tratadas como qualquer outro objeto
 - passadas como parâmetros para outras funções (callback)
 - atribuídas em propriedades de objetos (métodos)
 - retornadas como resultado de outra função
 - podem ter suas próprias propriedades
*/

// ES5: única forma de definir escopo de variávies
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

/*
 IIFE: funções auto-invocáveis
 evitar poluir o escopo global

 não vai precisar de IIFE se
 - usar um bundle (webpack, parcel, outros)
 - usar ESModules (browsers modernos)
 - programar em Node
*/
(function (n1, n2, n3) {
    let isValid = false;
    console.log(isValid, n1, n2, n3);

    function init() {
        console.log('init');
    }

    init();
})(1, 2, 3);
