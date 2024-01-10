/**
 * Extract Type
 * 첫번째 인자에 대상 객체,
 * 두번째 인자에 뽑고 싶은 타입
 */

type stringOnly = Extract<string | boolean | number, string>;

type functionOnly = Extract<string | (() => void), Function>;

