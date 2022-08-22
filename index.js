const screenElement = document.querySelector('#screen');
screenElement.textContent = '';
const keys = [...document.querySelectorAll('.key')];
let expVar = '';
const nums = [...Array(10).keys()].map((key => key.toString()));
const ops = ['+', '-', '/', '*'];

keys.map((key) => {
    key.addEventListener('click', () => {
        if (nums.includes(key.textContent)) {
            expVar += key.textContent;
            console.log(key.textContent);
        } else if (ops.includes(key.textContent)) {
            expVar += ' ' + key.textContent + ' ';
        }
        screenElement.textContent = expVar;
        console.log(expVar);
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
    console.log(expArr);
    let i = 1;
    // for (let value of expArr) {
    //     let newVar;
    //     if (value === '*' || value === '/') {
    //         let chunk = expArr.slice(i - 1, 3);
    //         if (value === '*') {
    //             newVar = multiply(chunk[0], chunk[2]);
    //         } else {
    //             newVar = divide(chunk[0], chunk[2]);
    //         }
    //         expArr.splice(i - 1, 3, newVar);
            
    //     }
    //     i++;
    // }

    // return expArr;

    // Evaluate multiplications and divisions



    while (expArr.includes('*') || expArr.includes('/')) {
        // const isOp = (element) => element === '*' || element === '/';
        let ind = expArr.findIndex((element) => element === '*' || element === '/');
        
        
        console.log(`ind: ${ind}`);
        let a = +expArr[ind-1];
        let op = expArr[ind];
        let b = +expArr[ind+1];


        if (op === '*') {
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

        // switch (op) {
        //     case '+': expArr.splice(i - 1, 3, add(a, b));
        //     case '-': expArr.splice(i - 1, 3, subtract(a, b));
        // }

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
