/**
 * Generic in inheritance
 */

class BaseCache<T> {
    data: T[] = [];
}

class StringCache extends BaseCache<string> {}

const stringCache = new StringCache();
stringCache.data; // string[]



class GenericChild<T, Message> extends BaseCache<T> {
    message?: Message;

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}
const genericChild = new GenericChild<string, string>('error');
genericChild.data; // string[]
genericChild.message; // string | undefined


/**
 * Generic을 inheritance
 */

interface  BaseGeneric {
    name: string;
}

class Idol<T extends BaseGeneric> {
    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

const yuJin = new Idol({
    name: '안유진',
}); // Idol<{name: string}>
const yuJin2 = new Idol({
    name: '안유진',
    age: 23,
}); // Idol<{name: string, age: number}>
// const yuJin3 = new Idol({
//     // name: '안유진',
//     age: 23,
// }); // error


/**
 * keyof 사용하기
 */

const testObj = {
    a: 1,
    b: 2,
    c: 3
};

function objectParser<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

const val = objectParser(testObj, 'b');
console.log(val);


function objectParser2<O>(obj: O, key: keyof O) {
    return obj[key];
}

const val2 = objectParser2(testObj, "a");
console.log(val2);


/**
 * Ternary 터너리
 * 1 === 2 ? true : false;
 * type을 extension 하면 ?
 * extension 을 통해서도 할 수 있다. ?
 */



// class Idol2 {
//     type?: string;
// }
//
// class FemaleIdol extends  Idol2 {
//     type: 'Female Idol' = 'Female Idol';
// }
//
// class MaleIdol {//extends  Idol2 {
//     // type: 'Male Idol' = 'Male Idol';
// }
//
// type SpecificIdol<T extends Idol2> = T extends  MaleIdol ?
//     MaleIdol : FemaleIdol;
// // 이거 예시 적절한건가?
// // T 는 Idol2 를 상속받고 있기에 type 이 강제될 것 같지만 optional 이라 강제되지 않는다.
// // Idol2를 상속받은 두개가 되야할 것 같지만 MaleIdol은 Idol2를 상속 안받아도, type이 없어도 된다.
// //
// //
// const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol();
// const idol3: SpecificIdol<MaleIdol> = new MaleIdol();
//
// console.log(idol2);
// console.log(idol3);

class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol';
}

class MaleIdol {//extends  Idol2 {
    // type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends  FemaleIdol ?
    FemaleIdol : MaleIdol;

const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol();
const idol3: SpecificIdol<MaleIdol> = {}//new MaleIdol();

console.log(idol2);
console.log(idol3);
