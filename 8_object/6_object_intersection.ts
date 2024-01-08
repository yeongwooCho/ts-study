/**
 * Object Intersection
 */

type PrimitiveIntersection = string & number; // never

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

// 모든 property를 갖는다. 
// 그래서 type extension도 intersection을 통해 구현한다.
const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: '12341234',
};

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);


// 과연 이 타입은 무엇일까? 어떤 property가 필수이고 선택일까?
// (name,age) 는 필수
// (petName, petAge) 갖거나 (company, number) 갖거나 1세트는 가져야 함

let companyOrPet: CompanyOrPet = {
    name: 'a',
    age: 123,
    petName: 'b',
    petAge: 123,
};

let companyOrPet21: CompanyOrPet = {
    name: 'a',
    age: 123,
    company: 'b',
    companyRegistrationNumber: '12341234',
}
