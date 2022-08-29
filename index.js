const screenElement = document.querySelector('#screen');
screenElement.textContent = '0';
const keys = [...document.querySelectorAll('.key')];
let expVar = '';
const nums = [...Array(10).keys()].map((key => key.toString()));
const ops = ['+', '-', '/', 'x'];

keys.map((key) => {
    key.addEventListener('click', () => {
        if (nums.includes(key.textContent)) {
            expVar += key.textContent;
        } else if (ops.includes(key.textContent)) {
            expVar += ' ' + key.textContent + ' ';
        }
        screenElement.textContent = expVar;
    })  
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function evaluate(exp) {
    const expArr = exp.split(' ');
    let i = 1;

    // Evaluate multiplications and divisions
    while (expArr.includes('x') || expArr.includes('/')) {
        let ind = expArr.findIndex((element) => element === 'x' || element === '/');
        
        let a = +expArr[ind-1];
        let op = expArr[ind];
        let b = +expArr[ind+1];

        if (op === 'x') {
            expArr.splice(ind - 1, 3, multiply(a, b));
        } else if (op === '/') {
            expArr.splice(ind - 1, 3, divide(a, b));
        }

        console.log('func1: ') 
        console.log(expArr)
        
        i++;
        if (i > 50) {
            return 'ERROR';
        }
    }

    i = 1;
    while (expArr.includes('+') || expArr.includes('-')) {
        let a = +expArr[0];
        let op = expArr[1];
        let b = +expArr[2];

        if (op === '+') {
            expArr.splice(0, 3, add(a, b));
        } else {
            expArr.splice(0, 3, subtract(a, b));
        }
        console.log('func2')
        console.log(expArr)
        i++;
        if (i > 50) {
            return 'Error'
        }
    }
    
    return expArr;
}

document.querySelector('#equals').addEventListener('click', () => {
    screenElement.textContent = evaluate(expVar);
});

document.querySelector('#clear').addEventListener('click', () => {
    expVar = ''
    screenElement.textContent = expVar;
})

document.querySelector('#decimal').addEventListener('click', () => {
    expVar += ".";
    screenElement.textContent = expVar;
})