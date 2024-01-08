/**
 * Enum: JS는 없음
 */

/**
 * API 요청을 한다.
 * 상태는 4가지
 * 
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */

function runWork() {
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // working
        state = 'DONE';
    } catch (error) {
        state = 'ERROR';
    } finally {
        return state;
    }
}
console.log(runWork());


enum State {
    DONE,
    LOADING,
    INITIAL,
    ERROR,
}

function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // working
        state = State.DONE;
    } catch (error) {
        state = State.ERROR;
    } finally {
        return state;
    }
}

console.log(runWork3() === State.DONE); // true
console.log(runWork3()); // 0


enum ApiState {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}

function runWork4() {
    let state = ApiState.INITIAL;

    try {
        state = ApiState.LOADING;
        // working
        state = ApiState.DONE;
    } catch (error) {
        state = ApiState.ERROR;
    } finally {
        return state;
    }
}

console.log(runWork4() === ApiState.DONE); // true
console.log(runWork4()); // DONE