/**
 * Type Predicate
 * 타입 알아내기
 */

function isNumber(input: any): input is number {
    return typeof input === 'number';
}

console.log(isNumber(10)); // true
console.log(isNumber('10')); // false


function isNumberReturnBool(input: any): boolean { // 안 적으면 알아서 boolean 됨
    return typeof input === 'number'; 
}

console.log(isNumberReturnBool(10));
console.log(isNumberReturnBool('10'));




let testNumber: any = 5;
console.log(isNumber(testNumber)); // true
console.log(isNumberReturnBool(testNumber)); // true

let testString: any = '하이';
console.log(isNumber(testString)); // false
console.log(isNumberReturnBool(testString)); // false



if (isNumber(testNumber)) {
    testNumber; // number
}

if (isNumberReturnBool(testNumber)) {
    testNumber; // any
}



interface Doge {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = {
    name: '도지이놈',
    age: 32,
};
if(isDoge(doge)) {
    doge; // Doge
} else {
    doge; // never: cat에 필요한 값들이 없음
}

const cat: DogeOrCat = {
    name: '못된고양이',
    breed: 'terrier',
};
if(!isDoge(cat)) {
    cat; // Cat
} else {
    cat; // Doge & Cat: intersaction
}

const myPet: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지이놈',
    age: 32,
} : {
    name: '못된고양이',
    breed: 'terrier',
};
if(isDoge(myPet)) {
    myPet; // Doge
} else {
    myPet; // Cat
}

