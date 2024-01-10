/**
 * readonly type
 */

interface Cat {
    name: string;
    age: number;
}

const goodCat: Cat = {
    name: '냐옹이',
    age: 8,
};
goodCat.name = '코팩'; // OK

const bori: Readonly<Cat> = {
    name: '보리',
    age: 10,
}
// bori; //  Readonly<Cat>: readonly 만듬.
// bori.name = '유유';


// JS에서 객체 readonly 만드는 방법
Object.freeze(goodCat);
// goodCat.name = 'asdf'; // error
// goodCat.age = 123; // error
console.log(goodCat);