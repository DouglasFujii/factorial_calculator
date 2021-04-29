function showResult() {
    const inputFactorial = document.getElementById('factorial');
    const resultElement = document.getElementById('result');
    const description = document.createElement('p');
    const factResult = document.createElement('h1');

    resultElement.innerHTML = '';

    if (inputFactorial.value < 0) {
        description.innerHTML = 'Você digitou um número negativo! Fatoriais são calculados apenas com números inteiros e positivos. Tente digitar outro número.';
        resultElement.appendChild(description);
    } else if (inputFactorial.value.includes('.')) {
        description.innerHTML = 'Você digitou um número decimal! Fatoriais são calculados apenas com números inteiros e positivos. Tente digitar outro número.'
        resultElement.appendChild(description)
    } else {
        description.innerHTML = 'O resultado de ' + inputFactorial.value + '! é:';
        factResult.innerHTML = formatNumber(extraLongFactorials(inputFactorial.value));
        resultElement.appendChild(description);
        resultElement.appendChild(factResult);
    }
}

function formatNumber(num) {
    let res = BigInt(num);
    // The toLocaleString() method converts a number into a string, using a local language format.
    return res.toLocaleString('pt-BR');
}

function extraLongFactorials(n) {
    // handle with big integers
    n = BigInt(n);
    let res = BigInt(1);

    for (let i = n; i > 0; i--) {
        res *= i;
    }

    return res.toString();
}