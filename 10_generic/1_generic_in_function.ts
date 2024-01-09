/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test'); // any

function genericWhatValue<T>(value: T) {
    return value;
}

const value2 = genericWhatValue<string>('test');
const value3 = genericWhatValue<number>(3);

// const 사용 시 literal type
const value4 = genericWhatValue('test');
const value5 = genericWhatValue(10);

// let 사용 시 primitive type
let value6 = genericWhatValue(10);


function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {x, y, z};
}

const multipleGenericsResult = multipleGenerics<number, boolean, string>(
    123, true, '123',
);

const multipleGenericsResult2 = multipleGenerics(
    123, true, '123',
);


// tuple 반환하는 함수
function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);
const tuple2 = getTuple(100, true);


// 인터페이스에서 constructor 타입을 받을 수 있었던거 기억함?
// class Idol {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// interface IdolConstructor {
//     new (name: string, age: number): Idol;
// }
//
// function createIdol(constructor: IdolConstructor, name: string, age: number) {
//     return new constructor(name, age);
// }
//
// console.log(createIdol(Idol, '흰둥이', 5));


class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}


/**
 * 그 어떤 인스턴스든 (Idol 이든, Car 이든) 함수 안에서 인스턴스를 만드는 경우
 * 우리가 원하는 Generic은 parameter를 자유롭게 받는 constructor가 있는 객체를 타입으로 만들것이다.
 */
// function instantiator<T extends { new(...args: any[]): {} }>(constructor: T, ...args: any[]) {
//     return new constructor(...args);
// }

/**
 * constructor parameter에 원하는 만큼의 parameter를 입력할 수 있다.
 * 이것을 인스턴스화 하면 객체가 나올 것이다.
 * 이런 타입을 갖는 T이다. 를 선언할 떄 다음과 같이 사용한다.
 * T extends {new (...args: any[]): {}}
 */

/**
 * 우리는 Generic Type으로 T 타입을 선언했다. 이 T type 이 무엇이냐?
 * T 타입은 {new (...args: any[]): {}} 형태를 상속 받을 것이다.
 * new니깐 constructor인데
 * 이때 parameter는 어떤 값이던 자유롭게 받을 것이고
 * 반환될 땐 객체 타입이 반환될 것이다.
 */

function instantiator<T extends { new(...args: any[]): {} }>(constructor: T, ...args: any[]) {
    return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 13));
console.log(instantiator(Car, '벤츠', 'fq308'));




