function somar1() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar1(1, 2, 3, 4));

/* -------------------------------------------------- */

const somar2 = function () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar2(1, 2, 3, 4));