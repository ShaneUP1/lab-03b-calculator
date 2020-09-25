import { addHandle, subtractHandle, multiplyHandle, divideHandle } from "./clickHandlers.js"

// Addition

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addHandle);

// Subtraction

const subButton = document.getElementById('sub-button');
subButton.addEventListener('click', subtractHandle);

// Multiplication

const multButton = document.getElementById('mult-button');
multButton.addEventListener('click', multiplyHandle);
    

// // Division

const divButton = document.getElementById('div-button');
divButton.addEventListener('click', divideHandle);


