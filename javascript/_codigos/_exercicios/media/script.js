const media = () => {
    let media = 0;

    nums = document.getElementById('numeros').value.trim().split(',');

    if (nums[0] !== '') {
        nums.forEach((n) => {
            n = parseFloat(n);
            console.log(n);
            if (n != n) { // NaN != NaN
                throw Error('apenas numeros sao aceitos');
            }
            media += n;
        });
    }

    document.getElementById('resultado').value = media / nums.length;
}

document.getElementById('media').addEventListener('click', () => {
    media();
});

