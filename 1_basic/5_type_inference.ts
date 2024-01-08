/**
 * Type Inference(타입 추론)
 */

let stringType = 'string';

const constStringType = '안녕';

let yuJin = {
    name: '안유진',
    age: 2003,
}

const  yuJin2 = {
    name: '안유진',
    age: 2003,
}

let yuJin3 = {
    name: '안유진' as const,
    age: 2003 as const,
}

const  yuJin4 = {
    name: '안유진' as const,
    age: 2003 as const,
}



/**
 * Array
 */

let numbers = [1,2,3,4,5];
numbers.push(6);
// numbers.push('7'); // error

let numbersAndString = [1,2,3,'4','5','6'];

const num = numbers[0]; // number
const nos = numbersAndString[0]; // string | number

// tuple
const twoNumbers = [1, 3] as const;
const second = twoNumbers[1];

// length issue
const numberList = [1,2,3,4,5];
const numberList2 = [1,2,3,4,5] as const;

const number = numberList[100];
// const number2 = numberList2[100]; // error