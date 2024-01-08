"use strict";
/**
 * Enum: JS는 없음
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
    catch (error) {
        state = 'ERROR';
    }
    finally {
        return state;
    }
}
console.log(runWork());
