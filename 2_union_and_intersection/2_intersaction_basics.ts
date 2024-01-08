
/**
 * Intersaction(and) &
 * Union(or) |
 * 
 */

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '010-1234-1234',
    address: '서울시'
}

type NumberAndString = number & string; // never type

