
function showClick() {
    console.log(this.textContent);
}

const keys = document.querySelectorAll('.key')
for (const key of keys) {
    key.addEventListener('click', showClick)
}