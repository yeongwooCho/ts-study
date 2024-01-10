/**
 * Return Type
 * 함수의 리턴 타입을 가져오는 Utility type
 */

type ReturnTypeSample = ReturnType<() => string>; // string

// 반환 타입을 파악하는 유용한 utility
type FunctionSign = (x: number, y: number) => number;
type ReturnType2 = ReturnType<FunctionSign>; // number;
