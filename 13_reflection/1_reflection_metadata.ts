/**
 * Reflection Metadata
 */
import 'reflect-metadata';

const iu = {
    name: '아이유',
    age: 32,
    nationality: 'korean',
}

console.log(iu);
console.log();


/**
 * 파라미터 정의
 *
 * 1) metadata 의 키
 * 2) metadata 키에 저장할 값
 * 3) metadata를 저장할 객체: 어디에 저장할 것인가
 * 4) matadata를 저장할 객체의 프로퍼티
 * 객체 또는 객체의 property에 저장할 수 있다.
 * 4번은 필수가 아니다.
 *
 * 메타 데이터가 무엇인가? - 데이터에 대한 데이터
 */
// Reflect metadata를 사용하려면 Reflect를 쓰면 된다.
Reflect.defineMetadata('test-meta', 123, iu);

console.log(iu); // { name: '아이유', age: 32, nationality: 'korean' }
// Reflect를 이용해 metadata를 저장하면
// Reflect를 이용해 metadata를 불러와야 한다.
console.log(Reflect.getMetadata('test-meta', iu));


// 새롭게 저장
Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu));

// 다른 키에 저장
Reflect.defineMetadata('meta2', 789, iu);
console.log(Reflect.getMetadata('meta2', iu));
console.log(Reflect.getMetadata('test-meta', iu)); // 살아 있다.

// object 저장
Reflect.defineMetadata('meta2', {name: '코드팩토리'}, iu);
console.log(Reflect.getMetadata('meta2', iu));


Reflect.defineMetadata('object-meta', 999, iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu)); // undefined
console.log(Reflect.getMetadata('object-meta', iu, 'name')); // 999


// console.log(Reflect.hasMetadata('object-meta', iu, 'name')); // true
// console.log(Reflect.deleteMetadata('object-meta', iu, 'name')); // true
// console.log(Reflect.hasMetadata('object-meta', iu, 'name')); // false
// console.log(Reflect.deleteMetadata('object-meta', iu, 'name')); // false


console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu, 'name'));


Reflect.defineMetadata(
    'prototype-data',
    '프로토타입메타에요!!',
    Object.getPrototypeOf(iu) // Object.prototype
);

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getOwnMetadataKeys(iu));

