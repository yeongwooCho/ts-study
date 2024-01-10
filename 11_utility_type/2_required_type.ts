/**
 * Required Type
 * property를 필수로 만드는 것
 */

interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog1: Dog = {
    name: ''
}

const requiredDog2: Required<Dog> = {
    name: '모찌',
    age: 7,
    country: '한국',
}

// const requiredDog3: Required<Dog> = {
//     name: '모찌',
//     // age: 7,
//     country: '한국',
// }
//
requiredDog1;
requiredDog2;
// requiredDog3;
