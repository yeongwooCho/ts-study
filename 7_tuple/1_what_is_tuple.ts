/**
 * Tuple
 */

let iveTopMembers: string[] = ['안유진', '장원영', '레이'];

// tuple은 쌍이며 순서를 강제할 수 있다.
let numberAndStringTuple: [number, string] = [
    23, '코드팩토리'
]

numberAndStringTuple.push('아이유'); // nothing
console.log(numberAndStringTuple); 
// JS에는 없는 개념이라 TS 컴파일러만 통과하면 런타임 에러가 발생하지 않는다.
// 이를 막기 위해 readonly 키워드를 사용한다.



let unmodifiableTuple: readonly [number, string] = [
    23,
    '코드팩토리',
];
unmodifiableTuple;


/**
 * Tuple 유추하기
 */

let acctresses = ['김고은', '박소담', '전여빈'];

// 좀 더 정확한 타입으로 유추할 수 있었다.
let actressesTuple = ['김고은', '박소담', '전여빈'] as const; // readonly ["김고은", "박소담", "전여빈"]
const actressessTupleConst = ['김고은', '박소담', '전여빈'] as const; // readonly ["김고은", "박소담", "전여빈"]

let stringArray: string[] = [
    ...actressesTuple,
    ...actressessTupleConst,
]



/**
 * Named Tuple: 타입 선언 시 이름을 정할 수 있다.
 * 개발자 주석용
 */

const namedTuple: [name: string, age: number] = [
    '코드팩토리',
    32,
];


/**
 * Tuple과 Array의 관계
 */

let ive: [string, string] = [
    '장원영',
    '안유진',
];

let stringArr: string[] = ive;

// ive = stringArr;



const tuple2D : [string, number][] = [
    ['코팩', 32],
    ['아이유', 31],
    ['김고은', 29],
];
