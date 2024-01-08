/**
 * Defining Function
 */

function printName(name: string) {
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
    return `${person1}과 ${person2}는 사귐`;
}

console.log(returnTwoCouples('아이유','아이유'));

/**
 * optional parameter
 * y?: number 은 number | undefined 를 나타낸다.
 */
function multiplyOrReturn(x: number, y?: number) {
    if(y) {
        return x*y;
    } else {
        return x;
    }
}
console.log(multiplyOrReturn(10,20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
    if(y) {
        return x*y;
    } else {
        return x;
    }
}
console.log(multiplyOrReturn2(10,20));
console.log(multiplyOrReturn2(10));


/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args: string[]) {
    return args.map((x) => `너무 좋아 ${x}`);
}

console.log(getInfiniteParameters(
    'qwe', 'wer', 'ert', 'rty', 'tyu', 
));


/**
 * return type
 * 1) 추론이 되는 경우
 * 2) 명시적으로 기재하는 경우(이렇게 ㄱㄱ)
 */

// function addTwoNumbers(x: number, y: number): number
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// function randomNumber(): 10 | "랜덤"
function randomNumber() {
    return Math.random() > 0.5 ? 10 : '랜덤';

}


// return type 명시적으로 서술
function substractTwoNumbers(x: number, y: number): number {
    return x - y;
}

const substractTwoNumbersArrow = (x: number, y: number): number => {
    return x - y;
}




/**
 * 특수 반환 타입
 * 
 * void / never
 */

function doNotReturn() : void {
    console.log('저는 반환을 하지 않아요.');

    return; // 없어도 됨
}

function throwError() : never {
    // 반환하는 상황 자체를 만들면 안된다.
    while(true) {}; 
}

function throwError2() : never {
    throw Error();
}