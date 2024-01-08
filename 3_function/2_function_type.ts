/**
 * Function Type: 콜백함수를 parameter로 받는 작업
 */



const beforeRunner = () => {
    return ['안유진', '장원영', '레이'].map(
        (x) => `아이브 멤버: ${x}`
    );
}

type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
    return ['안유진', '장원영', '레이'].map(callback);
}
console.log(runner((x) => `아이브 멤버: ${x}`));



// signature를 타입으로 만들어서 변수의 타입으로 지정하면
// 더이상 콜백에는 타입을 명시하지 않아도 된다.
type MultiplyTowNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTowNumbers = (x, y) => { 
    return x + y;
};



/**
 * interface로 함수 타입 선언하기
 * type과 interface는 타입을 만드는 방법이다.
 * type은 간단하게 primitive type을 union으로 조합하는 것이 가능하다.
 * interface는 객체 형태의 타입을 만드는 방법이다.
 */

// arrow 가 아닌 colon으로 함수를 선언해야 한다.
interface IMultiplyTwoNumbers {
    (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
    return x + y;
}
