/**
 * Method에서 generic 사용하기
 */

class Idol<T> {
    id: T;
    name: string;

    constructor(id:T, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello<Time>(logTime: Time){
        // 실제 로그 찍는 것 처럼
        return `[${logTime}] 아이디: ${this.id}, 이름: ${this.name}`
    }
}

// 클래스와 함수는 값을 넣어주면 타입 추론이 가능하다.
const yuJin = new Idol('a999', '안유진');

console.log(yuJin.sayHello('2023')); // Time = string
console.log(yuJin.sayHello(1992)); // Time = number
console.log(yuJin.sayHello<Date>(new Date)); // Time = Date
console.log();



//method는 function 과 다른 generic 사용이  존재한다.

class Message<T> {
    sayHello<Time>(logTime: Time, message: T) {
        // 런타임에서의 타입을 확인해보자.
        console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
    }
}

const message = new Message<string>();
message.sayHello<number>(2000, '하이');



class DuplicatedGenericName<T> {
    sayHello<T>(logTime: T) {
        // 런타임에서의 타입을 확인해보자.
        console.log(`logTime: ${typeof logTime}`);
    }
}

const duplicate = new DuplicatedGenericName<string>();
duplicate.sayHello<number>(1234);
