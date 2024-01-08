/**
 * Types
 */

let helloText: string = 'Hello';
// helloText = true; // error

/**
 * JS의 가장 기본적인 7개의 타입
 * 소문자로 입력
 * string, number, bigint, boolean. symbol, null, undefined
 */

const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(99999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 * any, unknown, never
 */

// any - 아무 타입이나 입력 할 수 있는 치트키 같은 타입
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;
console.log(testNumber);
console.log(testString);
console.log(testBoolean);


// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;
let testNumber3: number = anyType2;


// never - 어떠한 타입도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;
// let neverType1: never = undefined;
// let neverType2: never = 'string';




/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList: boolean[] = [true, false, false, true];