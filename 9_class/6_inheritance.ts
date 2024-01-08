/**
 * Inheritance
 */

class Parent {
    name: string;

    constructor(name: string) {
        this.name= name;
    }

    dance() {
        console.log(`${this.name}이 춤을 춥니다.`);
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    sing() {
        console.log(`child: ${this.name}이 춤을 춥니다.`);
    }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance();
// codefactory.sing(); // 안됨
ahri.dance();
ahri.sing();



// ts 에서 중요한 것은 typing이다.
let person: Parent;
person = codefactory;
person = ahri;

let person2: Child;
// person2 = codefactory; // error
person2 = ahri;


/**
 * TS는 진짜 타입만 본다.
 * OOP의 개념이 아니라, 구조적 타이핑을 해서 구조가 비슷하면 같은 타입이라 본다.
 * 
 * * 다른 언어에서는 안되는데 TS에서만 되는 것
 * optional property를 주의하자.
 */


class Parent2 {
    name: string;

    constructor(name: string) {
        this.name= name;
    }
}

class Child2 extends Parent2 {
    age?: number;

    constructor(name: string, age?: number) {
        super(name);
        this.age = age;
    }
}

const cf2 = new Parent2('코드팩토리');
const ari2 = new Child2('아리', 20);

let test2: Child2;
test2 = ari2;
test2 = cf2; // ???
// age property는 optional property 이다.
// 없어도 되기 때문에 없는 cf2 객체를 test2에 할당할 수 있다.

console.log(test2);

// tsc는 signature 가 같으면 같은 것이라 본다.