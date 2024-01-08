/**
 * interface
 */

interface Animal {
    name: string;
    age: number;
    jump(): string;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }
}

// type predicate
function instanceOfAnimal(object: any) : object is Animal {
    return 'jump' in object;
}

// 아래와 다르게 Dog인 이유는 Dog로 생성해서 타입이 구체화 된 것이다.
const ori = new Dog('오리', 3);
if(instanceOfAnimal(ori)){
    ori; // Dog
}

// 이 경우는 any에서 시작해서 type predicate의 
// 반환 값에 의해 narrowing 되는 것이다.
// 현 단서로는 Animal로 추론 되었다.
const ori2: any = new Dog('오리', 3);
if(instanceOfAnimal(ori2)){
    ori2; // Animal
}




/**
 * 다중 인터페이스 구현
 */

interface Pet {
    legsCount: number;
    bark(): void;
}

class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;
    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name}이 점프를 합니다.`; 
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}




type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;
    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name}이 점프를 합니다.`; 
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}






interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//     // 중복되는 상황이 있으면 구현할 수 없다.
//     name: string;
//     name: number;
// }



class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
}

interface IdolConstructor {
    new (name: string, age: number, asdf: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number, asdf: number) {
    return new constructor(name, age, asdf); // return new Idol(name, age);
}

console.log(createIdol(Idol, '아이유', 32, 10));
console.log(createIdol(Dog, '아이유', 32, 10));

