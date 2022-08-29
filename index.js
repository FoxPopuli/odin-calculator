const screenElement = document.querySelector('#screen');
const expScreenElement = document.querySelector('#exp-screen');
screenElement.textContent = '0';
const keys = [...document.querySelectorAll('.key')];
let expVar = '';
let expArr = [];
const nums = [...Array(10).keys()].map((key => key.toString()));
const ops = ['+', '-', '/', 'x'];

keys.map((key) => {
    key.addEventListener('click', () => {
        if (nums.includes(key.id)) {
            expVar += key.id;
        } else if (ops.includes(key.id)) {
            expVar += ' ' + key.id + ' ';
        }
        screenElement.textContent = expVar;

    });

    key.addEventListener('mousedown', () => {
        key.classList.toggle('pressed');
    });

    key.addEventListener('mouseup', () => {
        key.classList.toggle('pressed');
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
    expArr = exp.split(' ');

    // Resolve multiplications and divisions
    let i = 1;
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
        
        i++;
        if (i > 50) {
            return 'ERROR';
        }
    }

    // Resolve addition and subtration
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
        i++;
        if (i > 50) {
            return 'Error'
        }
    }
    expVar = expArr[0];
    return expArr;
}

document.querySelector('#equals').addEventListener('click', () => {
    expScreenElement.textContent = expVar + ' =';
    screenElement.textContent = evaluate(expVar);
});

document.querySelector('#clear').addEventListener('click', () => {
    expVar = '';
    screenElement.textContent = '0';
    expScreenElement.textContent = '';
});

document.querySelector('#decimal').addEventListener('click', () => {
    expVar += ".";
    screenElement.textContent = expVar;
});

document.querySelector('#backspace').addEventListener('click', () => {
    const someArr = expVar.split('');
    someArr.splice(-1, 1);
    expVar = someArr.join('');
    screenElement.textContent = expVar;

})

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        console.log('expArr: ' + expArr);
        console.log(typeof expArr);
        console.log('exVar: ' + expVar);
    }
})