/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안 된다.
 */

let sampleNumber: any = 5;
console.log(typeof (sampleNumber as string));

let number = 5;
// console.log(number.toUpperCase());
// console.log((number as any).toUpperCase());
