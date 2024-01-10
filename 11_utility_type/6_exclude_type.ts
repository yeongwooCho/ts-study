/**
 * Exclude Type
 * 첫번째 인자에 대상 객체,
 * 두번째 인자에 제외하고 싶은 타입
 */

type NoString = Exclude<string | boolean | number, string>;

type NoFunction = Exclude<string | (() => void), Function>;

