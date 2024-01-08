/**
 * Problems with Array in JS
 * 아무거나 집어 넣을 수 있다.
 */


const number = [1, '2', 3, '4', 5];

let string: string[] = ['1', '2', '3'];

let stringsOrNumbersArray: (string | number)[] = [
    ...[1, '2', 3, '4', 5]
]

let stringArrNumberArr: string[] | number[] = [1,2,3];
stringArrNumberArr = ['1', '2', '3', ];

let stringOrNumberArr: string | number[] = [1,2,3];
stringOrNumberArr = '하이하이';

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

// 타입 유추 잘한다.
for(let i = 0; i < onlyString.length - 1; i++) {
    let item = onlyString[i]; // string
}
for(let item of onlyNumbers) {
    item; // number
}

// TS는 튜플이 아니면 array length를 신경쓰지 않는다.
// JS에서는 undefined가 나온다.
let number3 = onlyNumbers[0];
let number4 = onlyNumbers[9999];

