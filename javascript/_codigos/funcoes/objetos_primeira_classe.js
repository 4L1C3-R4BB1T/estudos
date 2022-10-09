/*
 - passadas como parâmentros para outras funções (callback)
 - atribuídas em propriedades de objetos (métodos)
 - retornadas como resultado de outra função
 - podem ter suas próprias propriedades 
*/

// callback
function fn(cb) {
    console.log('executar ação de callback')
    cb();
}

function callback() {
    console.log('função passada por parâmetro');
}

fn(callback);

/* -------------------------------------------------- */

const obj = {
    callback: callback
}

obj.callback();

/* -------------------------------------------------- */

function fn2(n1) {
    return function (n2) {
        return n1 * n2;
    }
}

const funcao2 = fn2(10); // return function (n2)
const mult = funcao2(2); // return n1 * n2

console.log(mult);

/* -------------------------------------------------- */

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