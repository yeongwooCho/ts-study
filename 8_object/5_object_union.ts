/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */

const dogOrCat = Math.random() > 0.5 ? 
    // 강아지
    {
        name: '별이',
        age: 12,
    } : 
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    };
    
dogOrCat.name; // string
dogOrCat.age; // number | undefined
dogOrCat.breed; // string | undefined



interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

// TS는 다음과 같이 객체를 넣으면 타입을 유추할 수 있을까?
const dogOrCat2: DogOrCat = Math.random() > 0.5 ? 
    // 강아지
    {
        name: '별이',
        age: 12,
    } : 
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    };

dogOrCat2.name;
// dogOrCat2.age; // Cat 일수도 있어서 에러 발생
// dogOrCat2.breed; // Dog 일수도 있어서 에러 발생

if('age' in dogOrCat2) {
    dogOrCat2; // Dog
} else {
    dogOrCat2; // Cat
}

