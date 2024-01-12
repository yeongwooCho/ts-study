/**
 * Export
 */

// (1) class
class IdolModel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// (2) value
const number = 12;


// (3) interface
interface ICat {
    name: string;
    breed: string;
}

type TCat = {
    name: string;
    breed: string;
}

export default {
    IdolModel,
    number,
    // TCat,
    // ICat
}
