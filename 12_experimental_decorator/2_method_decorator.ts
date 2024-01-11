/**
 * method decorator
 * JS 의 function, property descriptor에 대해 얼마나 알고 있는가가 중요하다.
 */

class Idol {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('PROD')
    dance() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

// target - static method에 데코레이팅을 할 경우 생성자 함수
//        - instance method에 데코레이팅을 할 경우 인스턴스의 prototype
// propertyKey - method 의 이름
// descriptor - property descriptor
function TestMethodDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    console.log('LogCall');
    console.log('--- target ---');
    console.log(target);
    console.log('--- propertyKey');
    console.log(propertyKey);
    console.log('--- descriptor ---');
    console.log(descriptor);
}

const rose = new Idol('로제');
console.log('--- run dance ---');
rose.dance();


// 응용
// decorator factory
function Configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(rose));
console.log();
console.log(Object.getOwnPropertyDescriptors(Idol.prototype));
console.log();
console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(rose)));
console.log();


// 함수가 불리면 log 를 하는 기능
function MethodCallLogger(env: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log(`[${env}] running function : ${propertyKey}`);

            // 우리가 원하는 this context 로 원하는 arguments 를 넣어서 함수를 실행할 수 있다.
            return originalMethod.apply(this, ...args);
        }
    }
}

console.log(rose.dance());
