const mostrarTabuada = () => {
    for (let i = 0; i <= 10; i++) {
        let tabuada =  document.createElement('div');
        for (let j = 0; j <= 10; j++) {
            tabuada.append(`${i} x ${j} = ${i*j}`);
            tabuada.appendChild(document.createElement('br'));
        }
        document.getElementById('output').appendChild(tabuada);
    }
}

const limparTabuada = () => {
    document.getElementById('output').innerHTML = "";
}

document.getElementById('mostrar').addEventListener('click', () => {
    mostrarTabuada();
});

document.getElementById('limpar').addEventListener('click', () => {
    limparTabuada();
});