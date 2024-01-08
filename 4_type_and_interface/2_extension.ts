/**
 * Extension
 */

interface IName {
    name: string;
}

interface IIdol extends IName {
    age: number;
}

const idol: IIdol = {
    name: '안유진',
    age: 23,
};


// type TName = {
//     name: string;
// };

type TIdol = TName & {
    age: number
};

const idol2: TIdol = {
    name: '아이유',
    age: 29,
};

console.log(idol);
console.log(idol2);

type TName = {
    name: string;
};

interface IIdol2 extends TName {
    age: number;
}

interface IName {
    name: string;
}

type TIdol2 = IName & {
    age: number;
}


/**
 * Extending multiple
 */

type DogName = {
    name: string;
};

type DogAge = {
    age: number;
};

type DogBreed = {
    breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '코드팩토리',
    age: 32,
    breed: '푸들',
};

interface CatName {
    name: string;
}

interface CatAge {
    age: number;
}

interface Cat extends CatName, CatAge {
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed: '코리안냥냥이'
};



/**
 * Overriding
 */
type THeight = {
    height: number;
};

type TRectangle = THeight & {
    height: string;
    width: number;
};

// let rectangle: TRectangle = {
//     height: , // never type
//     width: 123
// }



type TWidth2 = {
    width: number | string;
}

type TRectangle2 = TWidth2 & {
    width: number;
    height: number;
}

const rectangle2: TRectangle2 = {
    height: 100,
    width: 200,
};




// interface IHeight {
//     height: number;
// }

// interface IRectangle extends IHeight {
//     height: string;
//     width: number;
// }

interface IWidth {
    width: number | string;
}

interface IRectangle extends IWidth {
    width: number; // string, string|number 가능
    height: number;
}

const rectangle3: IRectangle = {
    width: 123,
    height: 234,
};


