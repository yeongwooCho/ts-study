/**
 * Property Check
 * 
 * 초과 속성 검사: property를 초과하는 경우를 체크
 */


type TName = {
    name: string;
};

type TAge = {
    age: number;
}

const iu = {
    name: '아이유',
    age: 30,
}

// const iu1: TName = {
//     name: '아이유',
//     age: 30,
// }
// const iu2: TAge = {
//     name: '아이유',
//     age: 30,
// }

const testName: TName = iu; // ?
const testAge: TAge = iu; // ?
console.log(testName); // { name: '아이유', age: 30 }
console.log(testAge); // { name: '아이유', age: 30 }