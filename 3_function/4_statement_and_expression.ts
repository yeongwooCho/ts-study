/**
 * Statement and Expression
 */

// Statement (문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}


// Statement 으로 선언시 단점 : 타입을 전부 다 적어줘야 한다.
function add(x: number, y: number) : number {
    return x + y;
}
function subtract(x: number, y: number) : number {
    return x - y;
}
function multiply(x: number, y: number) : number {
    return x * y;
}
function divide(x: number, y: number) : number {
    return x / y;
}

/**
 * Expression
 */

type CalcaulationType = (x: number, y: number) => number;

const add2: CalcaulationType = (x, y) => {
    return x + y;
};
const subtract2: CalcaulationType = (x, y) => {
    return x - y;
};
const multiply2: CalcaulationType = (x, y) => {
    return x * y;
};
const divide2: CalcaulationType = (x, y) => {
    return x / y;
};
