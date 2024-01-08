/**
 * Unknown Type
 */


let anyValue: any;
anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;
unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;


// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType:null = anyValue;
// let undefinedType: undefined = anyValue;


// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType:null = unknownValue;
// let undefinedType: undefined = unknownValue;




// anyValue.toUpperCase();
// anyValue.name;
// new anyValue();

// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();




/**
 * type predicate
 */
function isString(target: unknown): target is string {
    return typeof target === 'string'; 
}

let testVal: unknown;

if(isString(testVal)){
    testVal; // string
} else {
    testVal; // unknown
}



/**
 * union type, 범위가 넓은 것으로 확장된다.
 */
type uOrString = unknown | string; // unknown
type uOrBoolean = unknown | boolean; // unknown
type uOrAny = unknown | any; // any
type anyOrU = any | unknown; // any


/**
 * intersection type
 */
type uAndString = unknown & string; // string
type uAndBoolean = unknown & boolean; // boolean
type uAndAny = unknown & any; // any네. unknown 인줄 알았는데
type anyAndU = any & unknown; // any네. unknown 인줄 알았는데


/**
 * operator 사용
 */

let number1: unknown = 20;
let number2: unknown = 30;

// number1 + number2; // error
// number1 - number2; // error
// number1 * number2; // error
// number1 / number2; // error

number1 === number2; // 가능
number1 !== number2; // 가능
number1 == number2; // 가능
number1 != number2; // 가능
