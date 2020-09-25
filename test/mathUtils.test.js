// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide } from '../mathUtils.js'

const test = QUnit.test;

//Addition Tests
test('test to see that inputs 3 and 7 return 10', (expect) => {
    const expected = 10;
    const actual = add(3,7);
    expect.equal(actual, expected);
})

test('test to see that inputs -4 and 4 return 0', (expect) => {
    const expected = 0;
    const actual = add(-4,4);
    expect.equal(actual, expected);
})

//Subtraction Tests
test('test to see that inputs 3 and 7 return -4', (expect) => {
    const expected = -4;
    const actual = subtract(3,7);
    expect.equal(actual, expected);
})

test('test to see that inputs 4 and -1 return 5', (expect) => {
    const expected = 5;
    const actual = subtract(4,-1);
    expect.equal(actual, expected);
})

//Multiplication Tests
test('test to see that inputs 3 and 7 return 21', (expect) => {
    const expected = 21;
    const actual = multiply(3,7);
    expect.equal(actual, expected);
})

test('test to see that inputs 987 and 0 return ', (expect) => {
    const expected = 0;
    const actual = multiply(987,0);
    expect.equal(actual, expected);
})

//Division Tests
test('test to see that inputs 9 and 3 return 3', (expect) => {
    const expected = 3;
    const actual = divide(9,3);
    expect.equal(actual, expected);
})

test('test to see that inputs 987 and 0 return Infinity', (expect) => {
    const expected = 'Infinity';
    const actual = divide(987,0);
    expect.equal(actual, expected);
})
