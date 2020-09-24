
// Addition

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
    const num1 = Number(addInput1.value);
    const num2 = Number(addInput2.value);
    addResult.textContent= (num1 + num2).toFixed(3);
})

// Subtraction

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

subButton.addEventListener('click', () => {
    const num1 = Number(subInput1.value);
    const num2 = Number(subInput2.value);
    subResult.textContent = (num1 - num2).toFixed(3);
})

// Multiplication

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

multButton.addEventListener('click', () => {
    const num1 = Number(multInput1.value);
    const num2 = Number(multInput2.value);
    multResult.textContent = (num1 * num2).toFixed(3);
})

// Division

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

divButton.addEventListener('click', () => {
    const num1 = Number(divInput1.value);
    const num2 = Number(divInput2.value);
    divResult.textContent = (num1 / num2).toFixed(3);
})


