const media = () => {
    let imc = 0;

    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    
    if (altura === '' || peso === '') {
        throw Error('todos os campos precisam ser preenchidos');
    }

    imc = peso / (altura*altura);

    document.getElementById('resultado').value = imc.toFixed(2);
    document.getElementById('classificacao').innerHTML = classificarImc(imc);
}

document.getElementById('imc').addEventListener('click', () => {
    try {
        media();
    } catch (e) {
        alert(e.message);
    }
});

const classificarImc = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 39.0) return 'Obesidade';
    else return 'Obesidade grave';
}
