const inputFactorial = document.getElementById('factorial');

function showResult() {
    const resultElement = document.getElementById('result');
    const description = document.createElement('p');
    const factResult = document.createElement('h1');

    resultElement.innerHTML = '';

    description.innerHTML = 'O resultado de ' + inputFactorial.value + '! é:'
    factResult.innerHTML = formatNumber(extraLongFactorials(inputFactorial.value));
    resultElement.appendChild(description);
    resultElement.appendChild(factResult);
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
    
    for (let i = n; i > 0; i --) {
        res *= i;
    }
    
    return res.toString();
}