// /**
//  * Narrowing
//  * 
//  * Narowing은 Union 타입에서 더욱 구체적인 타입으로 
//  * 논리적으로 유추할 수 있게 되는 것을 의미한다.
//  */

// let numberOrString: number | string = 'Code Factory';
// numberOrString; // type: string

// const decimal = 12.3278;
// console.log(decimal.toFixed(2)); // number에만 사용할 수 있는 것

// // 아에 string type으로 인지된다.
// // numberOrString.toFixed(2); // error 

/**
 * Narrowing 종류 8가지
 * 1. Assignment Narrowing
 * 2. typeof Narrowing
 * 3. Truthiness Narrowing
 * 4. Equality Narrowing
 * 5. in operator Narrowing
 * 6. instances Narrowing
 * 7. discriminated union Narrowing (차별된 유니언 내로잉)
 * 8. exhaustiveness checking
 */

// * 1. Assignment Narrowing

let numOrString: number | string = '아이유';
numOrString;

// * 2. typeof Narrowing
numOrString = Math.random() > 0.5 ? 1234 : '아이유123'; // string | number

if(typeof numOrString === 'string') {
    numOrString; // string
} else {
    numOrString; // number
}


// 3. Truthiness Narrowing

let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if(nullOrString) { // nullOrString != null
    nullOrString; // string[]
} else { // nullOrString == null
    nullOrString; // null
}

//* 4. Equality Narrowing
let numOrString2: number | string = Math.random() > 0.5 ? 1234 : '아이유123'; 

let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if(numOrString2 === stringOrBool2) {
    numOrString2; // string
    stringOrBool2; // string
} else {
    numOrString2 // string | number
    stringOrBool2; // string | true
}

let numberOrStringOrNull: number | string | null
 = Math.random() > 0.5 ? 1234 : Math.random() > 0.5 ? '안유진' : null;

if(typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull; // number
} else {
    numberOrStringOrNull; // string | null
}

// 5. in operator narrowing 

interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
};

let dog: Dog = {
    name: '오리',
    type: 'Terrier',
}

let humanOrDog : Human | Dog = Math.random() > 0.5 ? human : dog;

// in operator를 이용해 key가 있는지 확인할 수 있다.
console.log('name' in human); // true

if('type' in humanOrDog) {
    humanOrDog; // Dog
} else {
    humanOrDog; // Human
}


// 6. instances Narrowing

let dateOrString: Date | string = Math.random() > 0.5 ?
    new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
    dateOrString; // Date
} else {
    dateOrString; // string
}


// 7. discriminated union Narrowing (차별된 유니언 내로잉)
interface Animal {
    type: 'dog' | 'human';
    height?: number; // dog은 null
    breed?: string; // human은 null
}

let animal: Animal = Math.random() > 0.5 ? 
    {
        type: 'human',
        height: 177,
    } : {
        type: "dog",
        breed: 'Terrier',
    };

if(animal.type === 'human') {
    animal.type; // human
    animal.height; // number | undefined
    animal.breed; // string | undefined
} else {
    animal.type;
    animal.height;
    animal.breed;
}

// 이렇게

interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog';
    breed: string;
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 =  Math.random() > 0.5 ? {
    type: 'human',
    height: 177,
} : {
    type: "dog",
    breed: 'Terrier',
};

if(humanOrDog2.type === 'human') {
    humanOrDog2; // Human2
} else {
    humanOrDog2; // Dog2
}


//8. exhaustiveness checking

switch(humanOrDog2.type) {
    case 'human':
        humanOrDog2; // Human2
        break;
    case 'dog':
        humanOrDog2; // Dog2
        break;
    default:
        humanOrDog2; // never

        const _check : never = humanOrDog2;
        break;
}




interface Human3 {
    type: 'human';
    height: number;
}

interface Dog3 {
    type: 'dog';
    breed: string;
}

interface Fish3 {
    type: 'fish';
    length: number;
}

type HumanOrDog3 = Human3 | Dog3 | Fish3;

let humanOrDog3: HumanOrDog3 =  Math.random() > 0.5 ? {
    type: 'human',
    height: 177,
} : Math.random() > 0.5 ? {
    type: "dog",
    breed: 'Terrier',
} : {
    type: "fish",
    length: 12,
};

switch(humanOrDog3.type) {
    case 'human':
        humanOrDog3; // Human3
        break;
    case 'dog':
        humanOrDog3; // Dog3
        break;
    // case 'fish':
    //     humanOrDog3; // Fish3
    //     break;
    default:
        humanOrDog3; // never

        // 끝에서 알림처럼 사용할 수 있는 코드이다.
        // const _check : never = humanOrDog3;
        break;
}
