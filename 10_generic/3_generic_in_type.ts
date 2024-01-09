/**
 * Generic in Type
 */

type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '코드팩토리';

// default generic type 없으면 type도 interface 처럼
// 타입 추론이 안되서 compile error이 발생한다.
// const genericString1: GenericSimpleType = '코드팩토리';


interface DoneState<T> {
    data: T[];
}

interface LoadingState {
    requestAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;
// type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let myState: State<string> = {
    data: ['123', '123', '123',],
}