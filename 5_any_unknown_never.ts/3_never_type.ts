/**
 * Never Type: 발생할 수 없는 타입
 */

// never type이 가능한 경우

// (1) 함수에서 에러를 던질떄
function throwError() : never {
    throw Error();
}

// (2) 무한 룹
function infiniteLoop(): never {
    while(true) {

    }
}

// (3) 존재할 수 없는 인터섹션
type NumAndStr = number & string;

// let neverType: never = undefined;
// let neverType: never = null;
// let neverType: never = 10;
