/**
 * Type and Interface
 */

/**
 * Type
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 * TS에서 발생하는 모든 타입의 이름을 지어줄 수 있다.
 * 이후 복잡한 타입을 배우면 왜 배우는지 알 수 있다.
 */

type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;

// male과 female 값 두개만 들어갈 수 있는 타입 ( |: Union )
type MaleOrFemale = 'male' | 'female';

const stringVar: string = 'test';

// object type
type IdolType = {
    name: string;
    year: number;
};

const yuJin: IdolType = {
    name: '안유진',
    year: 2002,
}



/**
 * Interface
 * 
 * interface는 type이 하지 못하는 기능을 보완하기 위해 등장했다.
 * 공통적인 기능이 꽤 있지만, 서로 고유의 기능이 존재한다.
 * 주의: ' = ' 이 없다.
 */
interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2: IdolInterface = {
    name: '안듀진',
    year: 2002,
}

// using custom type 
interface IdolIT{
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002,
}


// optional type
interface IdolOptional {
    name: string;
    year?: number;
}

const yuJin4: IdolOptional = {
    name: '안유진'
}
const yuJin5: IdolOptional = {
    name: '안유진',
    year: 2002,
}