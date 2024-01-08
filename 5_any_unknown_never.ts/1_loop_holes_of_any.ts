/**
 * Loopholes of Any
 */

let number: number;
number = 10;

// tsc 가 에러 잡음
// number.toUpperCase(); 

// tsc 가 에러 못잡고 js에서 런타임 에러 발생함.
// (number as any).toUpperCase();




const multiplyTwo = (x: number, y: number) => {
    return x * y;
};

let args1: any = '코드팩토리';
let args2: any = true;

// any type은 어떤 함수의 파라미터에도 삽입이 가능하다.
multiplyTwo(args1, args2); // 에러를 못 잡음
// multiplyTwo('코드팩토리', true); // 에러 발생!!!



let iu: any = {name: '하이요', age: 32};
// iu.




//4)
const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x, y);
};

const callback = (x: number, y: number) => {
    return x * y;
}

console.log(callbackRunner(5, 6, callback));