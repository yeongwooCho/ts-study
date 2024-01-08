/**
 * Override
 */

class Parent {
    shout(name: string) {
        return `${name}아 안녕`;
    }
}

class WrongChild extends Parent{
    // shout() {
        
    // }

    // 올바른 override 방법 3가지
    // 1) 부모 메서드와 반환 타입이 일치해야한다.
    // 2) 부모 메서드의 필수인 파라미터들이 존재해야한다.(변수 이름은 달라도 된다.)
    // 3) 부모 메서드에서 optional인 파라미터들은 자식에서 필수로 지정되면 안 된다.
}

class Child extends Parent {
    shout(name: string, me?: string): string {
        if(!me) {
            return super.shout(name);
        } else {
            return super.shout(name) + ` 내 이름은 ${me}야`;
        }
    }
}

const child = new Child();
console.log(child.shout('아이유'));
console.log(child.shout('아이유', '코드팩토리'));




// 올바른 override 방법 3가지(코팩)
// 1) 부모 메서드와 반환 타입이 일치해야한다.
// 2) 부모 메서드의 필수인 파라미터들이 존재해야한다.(변수 이름은 달라도 된다.)
// 3) 부모 메서드에서 optional인 파라미터들은 자식에서 필수로 지정되면 안 된다.

// 올바른 override 방법 3가지(내 생각)
// 1) 부모 메서드와 반환 타입이 일치해야한다.
// 2) 부모 메서드의 필수인 파라미터들이 존재해야한다.(변수 이름은 달라도 된다.)
// 3) 자식 메서드에서 파라미터를 추가하려면 optional 파라미터를 추가해야 한다.
class Parent2 {
    shout(name: string, age: number, length?: number): string {
        return `${age}살인 ${name}아 안녕`;
    }
}

// 부모 메서드에서 optional인 파라미터들은 자식에서 필수로 지정되면 안 된다?
class Child2 extends Parent2 {
    shout(name: string, age: number, length: number): string {
        return `아 안녕`;
    }
}

// 자식 메서드에서 파라미터를 추가하려면 optional 파라미터를 추가해야 한다.
class Child3 extends Parent2 {
    shout(name: string, age: number, leng?: number, asdf?: string): string {
        return `아 안녕`;
    }
}




/**
 * 속성 Override 
 */

class PropertyParent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// class ProeprtyChild extends PropertyParent {
//     name: number;

//     constructor(name: number) {
//         this.name = name;
//     }
// }

class PropertyParent2 {
    name: number | string;

    constructor(name: number | string) {
        this.name = name;
    }
}

class ProeprtyChild2 extends PropertyParent2 {
    name: string;

    constructor(name: string) {
        // super와 this의 초기화는 형식적으로 해줘야 한다.
        super(name); // name: number | string
        this.name = name; // name: number
    }
}

const child2 = new ProeprtyChild2('헬로우2');
child2.name; // string

