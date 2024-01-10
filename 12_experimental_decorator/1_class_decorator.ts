/**
 * class Decorator
 */
@Test
@Frozen
@LogTest('PROD')
@ChangeClass
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log('나는 Idol.constructor');
    }
}

function Test(constructor: Function) {
    console.log(constructor);
    console.log('나는 Test');
}

function Frozen(constructor: Function) {
    // 다 얼려버릴것이다.
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
    console.log('나는 Frozen');
}

const yuJin = new Idol('안유진', 23);
console.log(Object.isFrozen(Object.getPrototypeOf(yuJin))); // true
// 유진의 prototype은 얼어있다.
// getPrototypeOf 는 __proto__

const wonYoung = new Idol('장원영', 20);
console.log(wonYoung);

// decorator factory
function LogTest(env: string) {
    return function (constructor: Function) {
        console.log(`[${env}] ${constructor}가 실행되었습니다.`);
    }
}

// 다음과 같이 선언하면 T 타입의 constructor는 인스턴스화를 할 수 있는 타입니다.
// ChangeClass에 constructor에 입력하게 되는 해당 클래스를 extends 하게 되는 것이다.
function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        // 이거 클래스다.
        groupName = '아이브';

        constructor(...params: any[]) {
            super(...params); // parameter를 받을수도 있고 안받을수도있는것을 모르니깐?

            // 실제로 새로 만든 클래스가 인스턴스화 되는 것을 증명하기 위해
            // log 하나 남기자.
            console.log('constructor instantiated');
        }
    }
}
