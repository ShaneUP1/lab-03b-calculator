import { add, subtract, multiply } from './mathUtils.js';

//Addition

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');

export function addHandle () {
    const num1 = addInput1.valueAsNumber;
    const num2 = addInput2.valueAsNumber;
    addResult.textContent = add(num1, num2).toFixed(3);
}

//Subtraction

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subResult = document.getElementById('sub-result');

export function subtractHandle () {
    const num1 = Number(subInput1.value);
    const num2 = Number(subInput2.value);
    subResult.textContent = subtract(num1, num2).toFixed(3);
}

//Multiplication

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multResult = document.getElementById('mult-result');

export function multiplyHandle () {
    const num1 = Number(multInput1.value);
    const num2 = Number(multInput2.value);
    multResult.textContent = (num1 * num2).toFixed(3);
}

//Division

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divResult = document.getElementById('div-result');

export function divideHandle () {
    const num1 = Number(divInput1.value);
    const num2 = Number(divInput2.value);
    divResult.textContent = (num1 / num2).toFixed(3);
}