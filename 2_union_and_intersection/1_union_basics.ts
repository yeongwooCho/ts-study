/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합할 수 있는 수많은 방법 중 하나이다.
 * 그 중 가장 많이 사용하는 방식이다.
 */

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;
// stringOrBooleanType = undefined;


type StrBoolNullType = string | boolean | null;
type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = "LOADING";
// state = "INITIAL";



/**
 * 리스트의 유니언
 */

// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
    true, false, true, false,
];
strListOrBooleanList = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ'];


// string 또는 boolean으로 구성된 리스트
type StrOrNumberList = (string | boolean)[];

let strOrNumberList: StrOrNumberList = [
    'ㄱ', true
];



/**
 * interface 로 사용하는 union
 */
interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '이름이다.',
    age: 2003,
    address: '2',
}

console.log(animalOrHuman);
console.log(animalOrHuman.address);

animalOrHuman = {
    name: '오리',
    age: 9,
};

console.log(animalOrHuman);
// console.log(animalOrHuman.address); // error


let animalOrHuman2 : {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '최지호',
    age: 32,
}





// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가?

type Person = {
    name: string;
    age: number;
};

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat = {
    name: '조영우',
    // age: 30,
    breed: 'Yorkshire',
    country: '영국',
};

console.log(personOrCat);

