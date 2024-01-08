/**
 * Property Initialzation
 */

class Person {
    // 일반적인 필수값 선언법
    name: string;

    // 초기값 제공 선언법
    age: number = 23;

    // optional 값 선언법
    pet?: string;

    // type of undefined 선언법
    petAge: number | undefined;

    constructor(name: string) {
        this.name = name;
    }
}


class RouteStack {
    // 반드시 초기화 할것을 약속하는 경우 !
    stack!: string[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this.stack = [];    
    }
}
const routeStack = new RouteStack();
console.log(routeStack);