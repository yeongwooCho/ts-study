/**
 * Reflection and Decorator
 */
import 'reflect-metadata';

// key 선언
const restrictParamValueKey = Symbol('restrictParamValue');

// 리스트에 어떤 구조로 데이터를 넣을 것인지 정의를 해야한다.
interface RestrictionInfo<T> {
    index: number; // 몇번째 인덱스
    restrictedValues: T[];
}


// 어떤 타입이던 입력이 가능하게 할 것이다.
// 단, 리스트인데 특정타입의 리스트로 받게 할 것이다.
// any 보다 generic이 좋다.
function RestrictParamValue<T>(restrictedValues: T[]) {
    return (target: any, propertyKey: string, index: number) => {
        // 메타 데이터를 만들어서 그 안에서 restriction 값들을 관리할 것이다.
        // 저장할 객체는 sing method이다. 왜?
        // method parameter는 method에 귀속이 된다.
        // method 에 metadata를 저장하면 다른 method와 겹칠 일이 없다.
        const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

        const info: RestrictionInfo<T> = {
            index, // 몇번째 파라미터
            restrictedValues, // ['신나게', '열정적으로']
        }

        Reflect.defineMetadata(restrictParamValueKey, [
            ...prevMeta,
            info,
        ], target, propertyKey);

        // 확인
        console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
    }
}

function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // method decorator
    // RestrictionInfo<any>에서 any는 전형 상관이 없는 것이다.
    const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

    // method 가 실행될 때마다 style에 신나게, 열정적으로 가 정학히 들어 왔는지 직접 확인하면 된다.
    const original = descriptor.value;

    // 우리는 함수 실행을 변경할 수 있었다
    descriptor.value = function (...args: any[]) {
        // 실제로 들어가면 안되는 것들이 있으면 뽑아낼 것이다.
        // 여기서 index 사용하려고 위에서 index 저장했다.
        const invalids = metas.filter(
            // 존재하지 않는 경우 filter
            (x) => !x.restrictedValues.includes(args[x.index])
        );

        // 안되는 것이 1개라도 있으면 error
        // '산나게', '열정적으로' 이외의 것을 콤마로 엮어서 에러 처리
        if (invalids.length > 0) {
            throw Error(`잘못된 값입니다. ${invalids.map(
                (x => args[x.index])
            ).join(', ')}`);
        }

        return original.apply(this, args);
    }

}

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // style에는 '신나게' | '열정적으로'만 들어갔으면 좋겠다.
    @ValidateMethod
    sing(@RestrictParamValue(['신나게', '열정적으로']) style: string,
         @RestrictParamValue([1, 2, 3]) ranking: number,
    ) {
        return `${this.name}이 ${style} 노래를 부릅니다.`;
    }
}

const yuJin = new Idol('안유진', 23);

console.log('--- sing ---');
console.log(yuJin.sing('신나게', 1));
console.log(yuJin.sing('신나게', 2));
console.log(yuJin.sing('열정적으로', 3));
// console.log(yuJin.sing('나쁘게', 4));
