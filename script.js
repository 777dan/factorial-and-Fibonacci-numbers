function factorial() {
    let n = prompt('Input a number');
    if (!isNaN(n)) {
        let y = 1;
        for (let i = 1; i <= n; i++) {
            y *= i;
        }
        alert(`Factorial: ${y}`);
    } else {
        alert("Error");
    }
}

function fibonacciNumbers() {
    let n = prompt('Input a number greater than two');
    if (!isNaN(n) && n > 2) {
        let oldoldf = 1;
        let oldf = 1;
        let newf;
        let message = "";
        for (let i = 2; i < n; i++) {
            newf = oldoldf + oldf;
            message += `${newf} `
            oldoldf = oldf;
            oldf = newf;
        }
        alert(`1 1 ${message}`);
    } else {
        alert("Error");
    }
}