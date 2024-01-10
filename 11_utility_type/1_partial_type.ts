/**
 * Partial Type
 * DB 업데이트 할때 많이 사용
 */

interface Idol {
    name: string;
    age: number;
    groupName: string;
}

const yuJin: Idol = {
    name: '안유진,',
    age: 23,
    groupName: '아이브',
};

// 새로 입력한 값은 덮어쓰기를 한다.
function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
    // original 객체와 값만 같은 새로운 객체를 만들어준다.
    return {
        ...original,
        ...updates,
    }
}

console.log(updateIdol(yuJin, {}));
console.log(updateIdol(yuJin, {
    age: 27,
}));
console.log(updateIdol(yuJin, {
    name: '코팩',
    age: 27,
}));
// console.log(updateIdol(yuJin, {
//     // name: '코팩',
//     length: 27,
// }));

