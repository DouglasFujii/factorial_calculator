const inputFactorial = document.getElementById('factorial');

function showResult() {
    console.log(extraLongFactorials(inputFactorial.value));
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