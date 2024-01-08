/**
 * type vs interface
 */

// 참고로 강사는 interface는 이름 앞에 type은 이름 앞에 T를 붙여서 사용한다.
// TS 에서는 없이 사용하는 것을 권장한다.
interface IObject {
    x: number;
    y: number;
};

type TObject = {
    x: number;
    y: number;
};

// function 을 선언할 때
// 주의 - ':' 로 반환값 지정하는 것 
interface IFunction {
    (x: number, y: number) : number;
}



/**
 * type에서만 사용 가능한 고유한 기능
 * 
 * interface는 객체 형태로 만들기에 직접적으로 객체가 아닌 타입을 만드려면 type을 사용해야 한다.
 */

// (1) primitive type 선언
type Name = string;

// (2) union 타입 선언하기(union으로 결합된 타입)
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];



/**
 * interface에서만 사용 가능한 고유한 기능
 */

// interface merging: 중복 선언시 합쳐서 확장된다.
// type은 바로 에러 발생한다.
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

let rectangle: IRectangle = {
    height: 100,
    width: 50
};

/**
 * interface merging
 */

class Review {
    // property: 인스턴스에 귀속이 된다.
    getY = (y: number) => {
        return y;
    };

    // method: prototype에 귀속이 된다.
    getX(x: number) {
        return x;
    }
}

// property에 callback을 넣은 형태이다.
interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    // getY: (y: string) => number; // error
}
// property는 오버로딩이 안된다. 정확하게 같은 시그니처를 사용해야 한다.
// but, method는 오버로딩이 된다. 함 보자.

// method를 선언한 형태이다.
interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}

const testMethod: GetXnY2 = {
    getX(x) {
        return x;
    },
    getY(y) { // string | number 이다.
        return 1; // number여야 한다.
    },
}