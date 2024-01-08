/**
 * readonly property
 */

class Idol {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

const yuJin = new Idol('안유진', 23);
yuJin.age = 32;
yuJin.name;
// yuJin.name = 'asdf'; // compile error