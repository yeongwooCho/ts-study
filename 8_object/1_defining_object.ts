/**
 * Object
 */

const codefactory = {
    name: '코드팩토리',
    age: 32,
};

interface IPerson {
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
};

const iPerson: IPerson = {
    name: '아이유',
    age: 30,
}; 

const tPersion: TPerson = {
    name: '아이유',
    age: 30,
};
