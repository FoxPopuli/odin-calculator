
function showClick() {
    console.log(this.textContent);
}




const screenElement = document.querySelector('#screen');
screenElement.textContent = '';

// const keyObj = {
//     'seven': 7,
//     'eight': 8,
//     'nine': 9,
//     'clear': 'C',
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'multiply': '*',
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'minus': "-",
//     'zero': 0,
    
// }

function GenKey(key, value, element) {
    this.key = key;
    this.value = value;
    this.element = element;
    this.type = typeof(key);
    this.element = document.querySelector('#seven');
    if (this.type === 'number') {
        this.value = this.key;

    };

    this.element.addEventListener('click', () => {
        screenElement.textContent += this.value;
        console.log(this.element);
    });
}

// const key7 = new GenKey(7);
// console.log(key7.clicked());

const keys = document.querySelectorAll('.key');
const keyObjects = [];
for (let key of keys) {
    const keyValue = key.textContent;
    if (+keyValue) {
        const newKeyObj = new GenKey(key.id, keyValue, key);
        keyObjects.push(newKeyObj);
    }
    key.addEventListener('click', showClick);
}